import React, {useState}from 'react';
import Layout from '../../components/Layout/Layout';
import { Form, Button } from "react-bootstrap";
import toast from 'react-hot-toast';
import axios from 'axios';
import{useNavigate} from 'react-router-dom';
import "./Register.css"; // Import a custom CSS file for styling


const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [answer,setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
          const res = await axios.post('/api/v1/auth/register',
            {name,email,password,phone,address,answer}
          );
          if(res && res.data.success){
            toast.success(res.data && res.data.message)
            navigate("/login");
          }else
          toast.error(res.data.message)
        }catch (error) {
          console.log(error)
          toast.error('Something went wrong')
        }
       
    };
    
    return (
      <Layout title="Register - Ecommerce App">
        <div className="register">
          <h1>Register Page</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control 
              type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}  required/>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicEmail">
             
              <Form.Control 
              type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
             
              <Form.Control 
              type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>
  
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control
                type="text"
                placeholder="Enter Your Adress"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Control
                type="text"
                placeholder="What is your favourite sport"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required 
              />
            </Form.Group>
             
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree to the terms and conditions" />
            </Form.Group>
            <div className="btn-container">
    <Button className="btn-primary" type="submit">
      Register
    </Button>
  </div>
</Form>
        </div>
      </Layout>
    );
  };
  
  export default Register;
 
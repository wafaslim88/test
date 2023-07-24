import React, {useState}from 'react';
import Layout from '../../components/Layout/Layout';
import { Form, Button } from "react-bootstrap";
import toast from 'react-hot-toast';
import axios from 'axios';
import{useNavigate,useLocation} from 'react-router-dom';
import { useAuth } from '../../context/auth';

const Login = () => {
   
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [auth,setAuth] = useAuth();
   
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
          const res = await axios.post('/api/v1/auth/login',
            {email,password}
          );
          if(res && res.data.success){
            toast.success(res.data && res.data.message)
            setAuth({
                ...auth,
                user :res.data.user,
                token: res.data.token,
            });
            localStorage.setItem("auth", JSON.stringify(res.data));
            navigate(location.state || "/");
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
          <h1>Login Page</h1>
          <Form onSubmit={handleSubmit}>
            
  
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
  
           
            
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree to the terms and conditions" />
            </Form.Group>
            <div className="btn-container">
    <Button className="btn-primary" type="button" onClick={(()=>{navigate('/forgot-password')})}>
      Forgot Password
    </Button>
  </div>
  <div className="btn-container">
    <Button className="btn-primary" type="submit">
      Login
    </Button>
  </div>
</Form>
        </div>
      </Layout>
  )
}

export default Login;

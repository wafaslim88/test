import Layout from '../../components/Layout/Layout';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Form, Button } from "react-bootstrap";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();
  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title = {"Forgot Password - Ecommerce APP"}>
     <div className="register">
          <h1>Reset Password</h1>
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
              type="text" placeholder="Enter Your Favourite Sport Name" value={answer} onChange={(e) => setAnswer(e.target.value)} required/>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicEmail">
             
             <Form.Control 
             type="password" placeholder="Enter Your Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}  required/>
             <Form.Text className="text-muted">
             </Form.Text>
           </Form.Group>
 
            
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree to the terms and conditions" />
            </Form.Group>
    

  <div className="btn-container">
    <Button className="btn-btn-primary" type="submit">
     RESET
    </Button>
  </div>
</Form>
        </div>
    </Layout>
  );
};

export default ForgotPassword;

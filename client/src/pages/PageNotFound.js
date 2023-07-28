import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { Form, Button } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <Layout title={"go back - Page not found"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
        <div className="pnf-btn-container">
   <Link to="/" className="pnf-btn">
          Go Back
   </Link>
</div>
      </div>
    </Layout>
  );
};

export default PageNotFound; 

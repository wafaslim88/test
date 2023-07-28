import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/Ecommerce-Privacy.jpg"
            alt="contactus"
            style={{ width: "80%",marginTop:50}}
          />
        </div>
        <div className="col-md-4" style={{marginTop:58}}>
          <h1 style={{fontSize:20}}>we use the personal information we collect to:</h1>
          <p>. Provide and improve our Services, including registering you for a Service, customizing your experience, and enhancing interactions with our Services and third-party services.</p>
          <p>. Display ads, which may be targeted based on your interests, but you can opt-out to receive generic ads</p>
          <p>. Support marketing activities and provide personalized product and service recommendations.</p>
          <p>. Communicate with you and offer customer support.</p>
          <p>. Analyze and improve our business, develop new products and services.</p>
          <p>. Protect against fraud, criminal activity, and liabilities.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <img
           src="/images/Contact.jpg"
           alt="Contact"
           style={{ width:"75%", height:360, marginRight: 80, marginTop:57 }}
        />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center" style={{marginRight:15}}>CONTACT US</h1>
          <p className="text-justify mt-2">
          Have Questions or Need Information about Our Products? We're Available 24/7!
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.samsung@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
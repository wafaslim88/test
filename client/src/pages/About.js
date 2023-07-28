import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Inspiring the World, Creating the Future"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/SAMSUNG-BANNER.jpg"
            alt=""
            style={{ width: "100%",height:"100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>Inspiring the World, Creating the Future</h1>
          <p className="text-justify mt-2">
          Samsung, a global technology leader, has been shaping the future since 1938. 
          With a relentless commitment to innovation, we design cutting-edge products that enrich lives and transform the way 
          we live, work, and play. From smart devices to home appliances, our diverse portfolio empowers people worldwide.
          We're driven by a passion for progress, sustainability, and making a positive impact.
          Join us as we continue to push boundaries and inspire the world with transformative technology.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
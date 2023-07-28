import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet"; //used to manage the document head
import { Toaster } from "react-hot-toast"; // it is responsible for rendering and managing the toast notifications.

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <meta charSet="utf-8" />
               
        <meta charSet="utf-8" />
               
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: 70 }}>
        <Toaster />

        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};

export default Layout;

/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Abeer Moazzam",
  title: "Microsoft Student Ambassador",
  email: "Abeer.Moazzam@studentambassadors.com",
  gitHub: "Abeermoaz",
  instagram: "",
  linkedIn: "https://www.linkedin.com/in/abeer-moazzam-986854293/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BicUzqHQOQuWRLMqAmzXjSw%3D%3D",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#FFFFF";
const secondaryColor = "#9bc493";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

import { Fragment } from "react";
import Hero from "../src/components/UI/Hero";
import Services from "../src/components/UI/Services";
import About from "../src/components/UI/About";
import Portfolio from "../src/components/UI/Portfolio";
import Skills from "../src/components/UI/Skills";
import Contact from  "../src/components/UI/Contact";
import Layout from "./components/Layout/Layout";
export default function Home() {
  return (
    <Layout>
      <Fragment>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </Fragment>
    </Layout>
  );
}
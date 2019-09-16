import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Navbar";
import Cards from "../Components/Cards";

class Home extends Component {
  state = {};
  render() {
    return (
      <section>
        <header>
          <Navbar />
          <Hero />
        </header>
        <main>
          <Cards />
        </main>
      </section>
    );
  }
}

export default Home;

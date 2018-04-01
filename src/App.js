import React, { Component } from 'react';
import './App.css';
import Welcome  from './welcome.js';
import Gallery from './gallery.js'
import Services from './services.js';



class App extends Component {
  constructor(props) {
      super(props)
      this.state = { tab: "Gallery" }
    }


    setTab(content_name) {
      this.setState(
        (prevState, props) => {
          return Object.assign(prevState, {tab: content_name})
        }
      )
    }



  render() {
    const tabComps = {Gallery: <Gallery/>,Services: <Services/>,  Welcome: <Welcome/> }

    return (
      <div className="App">
        <header className="App-header">

          <div className="fire w3-animate-fading">
            <img src="fire.jpg" height="160px" width="1200px"  alt="logo"/>

          </div>
          <div className="Gabby">
          <img src="gabriel.jpg" height="200px" alt="selfie"/>
          </div>

          <div className="logo">
            <img src="LOGO.png" height="75px" alt="logo"/>
          </div>



            <div className="w3-container w3-center w3-animate-left">
                <h1 className="App-title">La Ley de Colorado</h1>

            </div>


        </header>


        <div className="tabs">
                  <button type="button" className="button1" onClick={this.setTab.bind(this, "Services")}>Anuncios/Comerciales</button>
                  <button type="button" className="button1" onClick={this.setTab.bind(this, "Gallery")}>Galeria</button>
                    <button type="button" className="button1" onClick={this.setTab.bind(this, "Welcome")}>Welcome</button>
                </div>

                <div className="facebook">
                  <a target="_blank" href="https://www.facebook.com/gabriel.bueno.1217">
                    <img src='fb.png' height='50px'  text-align= "left" alt="facebook"/>
                  </a>
                  <p>La pagina oficial del Gavilan!</p>
                </div>








      {tabComps[this.state.tab]}
    </ div>
    );
  }
}

export default App;

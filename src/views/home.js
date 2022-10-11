import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dino Shawn</title>
        <meta property="og:title" content="Dino Shawn" />
      </Helmet>
      <div className="home-navbar navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/28586046_dinosaur_skateboarding_rick_and_morty_art_style-200h.png"
              className="home-image"
            />
          </div>
          <h1>PolyMath Hooligan Dinosaurs (PhDs)</h1>
        </div>
      </div>
      <div className="home-hero hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-description">
              Dinosaurs came back &amp; they came back rolling with their sweet
              sweet skates, surfboards &amp; PhDs in over 69 subjects ranging
              from eating Hamburgers in Hamburg while Hoola Hooping to 360 no
              scoping Death in afterlife to rejuvenate in Hipster DJ chef at a
              Michelin 2 star restaurant they&apos;re here to win it all
            </span>
            <h1 className="home-title">6.9 LRC Only</h1>
            <button id="addy" className="home-button button button-transparent">
              0xC5F619905C6D2cdD4A2715ef5E97F83A095247af
            </button>
            <div className="home-container1">
              <button id="addy2" className="button button-gradient">
                Copy
              </button>
            </div>
          </div>
          <div className="home-container2">
            <button id="addy2" className="button button-gradient">
              Copy
            </button>
            <div className="home-container3">
              <div className="home-container4">
                <div className="home-container5">
                  <div className="home-image1">
                    <img
                      alt="image"
                      src="/playground_assets/ds-500h.png"
                      className="home-hero-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
impport styles from '../styles.Landing.module.css'


function landing() {
  return (
    <>
          <h1>Base Apparel</h1>

          <div className='left-container'>
              <img class="logo" src="./images/logo.svg" alt="logo" />

              <img
                  class="bg-mobile"
                  src="./images/hero-mobile.jpg"
                  alt="background mobile" />
              <h1>
                  <span>We're</span>
                  <br />
                  coming
                  <br />
                  soon
              </h1>

              <p>
                  Hello fellow shoppers! We're currently building our new fashion
                  store. Add your email below to stay up-to-date with announcements
                  and our launch deals.
              </p>

              <form id="form">
                  <input id="email" type="email" placeholder="Email Address" />
                  <img class="error-icon" src="./images/icon-error.svg" alt="error" />
                  <button>
                      <img src="./images/icon-arrow.svg" alt="arrow" />
                  </button>
                  <small>Please provide a valid email</small>
              </form>
          </div>
      <div class="right bg-image"></div>
      </>

  )
}

export default landing
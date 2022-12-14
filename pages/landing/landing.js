import React from 'react'



function landing() {
  return (
    <div>
          <h1 className='title'>Base Apparel</h1>
<div>
<div >
          <div>
              <img className="logo" src='/logo.svg' alt="logo" />

              <img
                  className="bg-mobile"
                  src="/hero-mobile.jpg"
                  alt="background mobile" />
              <h1 className='span'>
                  <span>We're</span>
                  <br />
                  coming
                  <br />
                  soon
              </h1>

              <p className='info'>
                  Hello fellow shoppers! We're currently building our new fashion
                  store. Add your email below to stay up-to-date with announcements
                  and our launch deals.
              </p>

              <form id="form">
                  <input id="email" type="email" placeholder="Email Address" />
                  <img className="error-icon" src="/icon-error.svg" alt="error" />
                  <button className='button'>
                      <img src="/icon-arrow.svg" alt="arrow" />
                  </button >
                  <small className='error'>Please provide a valid email</small>
              </form>
          </div>
      <div class="right bg-image"></div>
      </div>
      </div>
      </div>

  )
}

export default landing
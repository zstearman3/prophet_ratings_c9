import React from "react"
import PropTypes from 'prop-types'

const Home = (props) => {
  if (props.signed_in) {
    return (
      <div className="body-container">
        <h1>Welcome to ProphetRatings 2.0!</h1>
        <p>
          This is a work in progress. So far we have teams and players! Now games!
        </p>
      </div>
    );
  } else {
    return (
      <h1>Please Log In</h1>
    );
  }
}

export default Home
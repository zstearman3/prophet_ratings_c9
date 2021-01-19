import React from "react"
import PropTypes from "prop-types"
import ProphetLogo from 'images/prophet_logo.png'
class HelloWorld extends React.Component {
  render () {
    return (
      <div className="header">
        <img src={ProphetLogo} />
        <h1>
          Greeting: {this.props.greeting}
        </h1>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld

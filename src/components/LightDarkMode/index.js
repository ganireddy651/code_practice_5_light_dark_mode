// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  btnClicked = () => {
    // const {isDarkMode} = this.state

    this.setState(preState => ({
      isDarkMode: !preState.isDarkMode,
    }))
  }

  getButtonText = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'Dark Mode' : 'Light Mode'
  }

  getBackGround = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'light-card' : 'dark-card'
  }

  getHeading = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'light-heading' : 'dark-heading'
  }

  render() {
    const buttonText = this.getButtonText()
    const className = this.getBackGround()
    const heading = this.getHeading()

    return (
      <div className="bg-container">
        <div className={className}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button
            type="button"
            className="custom-btn"
            onClick={this.btnClicked}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

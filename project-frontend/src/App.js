import { Component } from 'react'
import './App.css';

class App extends Component {
  state = {
    message: ''
  }

  componentDidMount() {
    this.getMessage()
  }

  getMessage = async () => {
    const response = await fetch("http://localhost:3100/")
    const data = await response.json()
    if (response.ok) {
      this.setState({ message: data.message })
    }
  }


  render() {
    const { message } = this.state
    return (
      <div>
        <h1>{message}</h1>
      </div>
    )
  }
}

export default App;

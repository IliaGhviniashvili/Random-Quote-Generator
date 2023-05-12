import './App.css';
import React, {Component} from "react"
import axios from "axios"

class App extends Component {
  state = {advice: ""};

  componentDidMount(){
    this.fetchAdvise();
  }
  
  fetchAdvise = () =>{
    axios.get("https://api.adviceslip.com/advice")
      .then((response)=>{
        const {advice} = response.data.slip;
        this.setState({advice});
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        <div className="card">
          <p className='quote'>{this.state.advice}</p>
          <button className='btn' onClick={this.fetchAdvise}>give me advice!</button>
        </div>
      </div>
    );
  }
}
export default App;

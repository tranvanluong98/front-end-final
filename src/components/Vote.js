import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  state = {

  }
  componentDidMount() {
    axios.put(`https://server-musicbattle.herokuapp.com/api/music/name/${this.props.match.params.Room}`,{status:"end"})
    .then(res=>{
      
    })
    axios.get(`https://server-musicbattle.herokuapp.com/api/music/name/${this.props.match.params.Room}`)
      .then(res => {
        console.log(res);
        this.setState({
          vote1: res.data.battleFound.vote1,
          user1: res.data.battleFound.player1._id,
          user1name: res.data.battleFound.player1.username,
          NameDisplay1:res.data.battleFound.player1.nameDisplay,
          NameDisplay2:res.data.battleFound.player2.nameDisplay,
          vote2: res.data.battleFound.vote2,
          user2name: res.data.battleFound.player2.username,
          user2: res.data.battleFound.player2._id
        })
        setTimeout(() => {
          if (this.props.nameSignIn) {

            if (this.state.vote1 > this.state.vote2) {
              if (this.props.nameSignIn === this.state.user1name) {
                console.log("user1 Win")
                axios.put(`https://server-musicbattle.herokuapp.com/api/user/${this.state.user1}`, { allPoint: 5 });
              }
            }
            else {
              if (this.state.vote1 < this.state.vote2) {
                if (this.props.nameSignIn === this.state.user2name) {
                  console.log("user1 Win")
                  axios.put(`https://server-musicbattle.herokuapp.com/api/user/${this.state.user2}`, { allPoint: 5 });
                }
              }
            }
          }
        })
      })

  }
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center text-danger"><strong>Result</strong></h1><br></br>
        <div className="alert alert-info text-center" style={{fontSize:"50px"}}>
          <strong> {this.state.NameDisplay1 ? this.state.NameDisplay1:"Vote1" } : </strong><span>{this.state.vote1 ? this.state.vote1 : 0}</span> - <strong> {this.state.NameDisplay2 ? this.state.NameDisplay2:"Vote2" } : </strong><span>{this.state.vote2 ? this.state.vote2 : 0}</span>
        </div>
        <a href="/Mainpage">
        <button type="button" className="Vote-MainPage btn btn-success">Mainpage</button>
        </a>
      </div>
    );
  }
}

export default App;
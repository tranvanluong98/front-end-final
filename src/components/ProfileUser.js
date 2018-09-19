
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
axios.defaults.withCredentials = true;
class App extends Component {
    state={
        
    }
    componentDidMount(){
        if(this.props.nameSignIn){
            axios.get(`https://server-musicbattle.herokuapp.com/api/user/name/${this.props.nameSignIn}`)
            .then(res=>{
                this.setState({
                    User:res.data.UserFound
                })
            })
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="container-fluid bg-secondary" style={{ height: "670px" }}>
                <h1 className="text-center text-danger"><strong>Your Profile</strong></h1><br></br>
                <div className="text-white">
                    <h2> Ten: {this.state.User ? this.state.User.nameDisplay : "player"} </h2>
                    <h2> Nam Sinh: {this.state.User ? this.state.User.dateOfBirth : "Nam Sinh"} </h2>
                    <h2> Wins : {this.state.User ? (this.state.User.allPoint / 5) : "0"} tran </h2>
                    <h2> All Point: {this.state.User ? this.state.User.allPoint : "0"} diem </h2>
                    <h2> Sex: {this.state.User ? this.state.User.sex : ":))"}</h2>
                </div>
                <a href="/Mainpage">
                    <button type="button" className="Vote-MainPage btn btn-success">Mainpage</button>
                </a>
            </div>
        );
    }
}

export default App;







// import React, { Component } from 'react';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios'
// axios.defaults.withCredentials = true;
// class App extends Component {

//     render() {
//         console.log(this.props)
//         return (
//             <div className="container-fluid bg-secondary" style={{ height: "670px" }}>
//                 <h1 className="text-center text-danger"><strong>Your Profile</strong></h1><br></br>
//                 <div className="text-white">
//                     <h2> Ten: {this.props.User ? this.props.User.nameDisplay : "player"} </h2>
//                     <h2> Nam Sinh: {this.props.User ? this.props.User.dateOfBirth : "Nam Sinh"} </h2>
//                     <h2> Wins : {this.props.User ? (this.props.User.allPoint / 5) : "Nam Sinh"}</h2>
//                     <h2> All Point: {this.props.User ? this.props.User.allPoint : "0"} </h2>
//                     <h2> Sex: {this.props.User ? this.props.User.sex : ":))"}</h2>
//                 </div>
//                 <a href="/Mainpage">
//                     <button type="button" className="Vote-MainPage btn btn-success">Mainpage</button>
//                 </a>
//             </div>
//         );
//     }
// }

// export default App;

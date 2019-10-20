import React, { Component } from "react";
import {Button} from "react-bootstrap"

class Login extends Component {

    state = {
        email: "",
        password: "",
        errormsg: ""
    }

    onSubmit = () => {
        console.log("sub");
    }

    render() {
        return (
            <div style={{height:"80%"}}> 
                <form className="home-form" onSubmit={this.onSubmit}>
                    <h1 className="home-title">Sign In</h1>
                    <div className="home-inputs">
                        <label className="home-label">Email</label>
                        <input className="home-input" type="email" placeholder="Enter your email" name="email" onChange={this.onChange}></input>
                    </div>
                    <div className="home-inputs">
                        <label className="home-label">Password</label>
                        <input className="home-input" type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" name="password" onChange={this.onChange}></input>
                    </div>

                    <Button className="home-btn">Login</Button>
                </form>
            </div>
        );
    }
}

export default Login;
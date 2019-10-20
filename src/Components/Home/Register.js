import React, { Component } from "react";




const errMsgs = {
    passwordsNotMatching: "Passwords do not match",
    emailTaken: "This email is already registered",
    incompleteForm: "Form is not fully completed"
}

class Register extends Component {

    state ={
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        errMsg:"",
    }

    render() {
        return (
            <div style={{ "height": "85%" }}>
                <form className="home-form" onSubmit={this.onSubmit}>
                    <h1 className="home-title">Sign Up</h1>
                    <div className="home-inputs">
                        <label className="home-label">First Name</label>
                        <input className="home-input" type="text" placeholder="Enter your first name" name="firstName" onChange={this.onChange}></input>
                    </div>
                    <div className="home-inputs">
                        <label className="home-label">Last Name</label>
                        <input className="home-input" type="text" placeholder="Enter your last name" name="lastName" onChange={this.onChange}></input>
                    </div>
                    <div className="home-inputs">
                        <label className="home-label">Email</label>
                        <input className="home-input" type="email" placeholder="Enter your email" name="email" onChange={this.onChange}></input>
                    </div>
                    <div className="home-inputs">
                        <label className="home-label">Password</label>
                        <input className="home-input" type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" name="password" onChange={this.onChange}></input>
                    </div>
                    <div className="home-inputs">
                        <label className="home-label">Confirm Password</label>
                        <input className="home-input" type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" name="confirmPassword" onChange={this.onChange}></input>
                    </div>
                    
                    <div className="home-inputs">
                        <button type="submit" className="btn home-btn" style={{margin:"20px 0"}}>Sign Up</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Register;
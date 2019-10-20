import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap"

import "../Styles/home.css";


/* Components */
import Login from "../Components/Home/Login";
import Register from "../Components/Home/Register";
import Toast from "../Components/Home/Toast";

export default class Home extends Component {

    state = {
        showLogin: true
    }

    toggleForm = () => {
        this.setState({ showLogin: !this.state.showLogin })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={7} style={{ background: "#75DBCD", height: "100vh", paddingTop: "5%" }}>
                        <img src={"/assets/logo.png"} style={{ height: "30%", width: "100%", marginBottom: "10%" }} />

                        <div className="text-center" style={{ color: "white" }}><h2>The road to a healthier life </h2></div>

                    </Col>

                    <Col md={5} >
                        {this.state.showLogin ?
                            <div style={{ height: "100%", paddingTop: "5%" }}>
                                <Login />
                                <button className="home-link" onClick={this.toggleForm}>New member? Sign up.</button>
                            </div>
                            :
                            <div style={{ height: "100%", paddingTop: "5%" }}>
                                <Register />
                                <button className="home-link" onClick={this.toggleForm}>Already a member? Sign in.</button>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>

        );
    }
}
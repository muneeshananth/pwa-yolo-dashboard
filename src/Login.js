import React, { Component } from "react";
import useAuth from './hooks/useAuth';
import { Button, Form } from "react-bootstrap";
import styles from "./App.css";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "./context/AuthProvider";
import axios from "axios";

//const Login = () => {

export default class Login extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      useAuth: null,    
    };
  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit =  (event) => {

    console.log("Handle Submit");
    event.preventDefault();
    var username = this.state.username;
    var password = this.state.password;

    if (username == "" || password == "") {
      alert("Please Enter the UserName & password");
      //this.setState(error, "Please Enter the UserName & password");
    } else {
      var data = { "username" : username, "password": password };
      try {
        const response = axios.post('http://34.233.133.141:5000/login',
        data,
        {
          Headers: { 'Content-Type' : 'application/json'},
          wuthCredentials: false
        });
        console.log(response);
        if(response.status == 200) {
          this.setState({useAuth: response.data});  
          console.log("Handle Submit---2");
          console.log(response.data);
          console.log("BEFORE HREF");
          //window.location.href = '/dashboard';
        }
        else {
          console.log("Handle Submit---3");
          window.location.href = '/dashboard';

        }
      } catch(err) {
        console.log("Exception " + err);
      }
    }
  }

  render() {
    return (
      <div className="Auth-form-container">
        <Form className="Auth-form" action="/dashboard" method="POST" onSubmit={ (e) => { this.handleSubmit(e) }}>
          <div className="Auth-form-content">
            {/* <section> */}
            <div class="login-box">
              <div class="login-logo">
                <a href="../../index.html">
                  <b>Yolo </b> Dashboard
                </a>
              </div>
              <div class="card" style={{ marginRight: "10%" }}>
                <div class="card-body login-card-body">
                  <p class="login-box-msg">Sign in to start your session</p>

                    <div class="input-group mb-3">
                      <Form.Group>
                      <Form.Control
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                      />
                      </Form.Group>
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <span class="fas fa-envelope"></span>
                        </div>
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <Form.Group>
                      <Form.Control
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                      </Form.Group>
                      <div class="input-group-append">
                        <div class="input-group-text">
                          <span class="fas fa-lock"></span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-8">
                        <div class="icheck-primary">
                          <input type="checkbox" id="remember" />
                          <label htmlfor="remember">Remember Me</label>
                        </div>
                      </div>
                      <div class="col-4">
                        <Button type="submit" class="btn btn-primary btn-block">
                          Sign In
                        </Button>
                      </div>
                    </div>
           
                  <div class="social-auth-links text-center mb-3">
                    <p>- OR -</p>
                    <a href="#" class="btn btn-block btn-primary">
                      <i class="fab fa-facebook mr-2"></i> Sign in using
                      Facebook
                    </a>
                    <a href="#" class="btn btn-block btn-danger">
                      <i class="fab fa-google-plus mr-2"></i> Sign in using
                      Google+
                    </a>
                  </div>

                  <p class="mb-1">
                    <a href="forgot-password.html">I forgot my password</a>
                  </p>
                  <p class="mb-0">
                    <a href="register.html" class="text-center">
                      Register a new membership
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <script src="../../plugins/jquery/jquery.min.js"></script>
            <script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="../../dist/js/adminlte.min.js"></script>
            {/* </section> */}
          </div>
        </Form>
      </div>
    );
  }
}

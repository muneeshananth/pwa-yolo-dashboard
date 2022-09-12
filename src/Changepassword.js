import React, { Component } from 'react'
import Menu from './Menu.js';
import Dashboard from './Dashboard.js';
import Footer from './Footer.js';
import Header from './Header.js';


export default class Changepassword extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Menu active="ChangePassword"/>
            <div className="content-wrapper" >
              <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">

                <div className="col-sm-6">
                  <h1 className="m-0 text-dark"><h4>Change Password</h4></h1>
                </div>

                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Change Password</li>
                  </ol>
                </div>
                </div>
              </div>

            <section className="content" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh',}}>

              <div className="container-fluid" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh',}}>  
                 <div className="row" style={{alignContent: "center", alignItems: "center"}}>
                 <section className="col-lg-2 connectedSortable">

                    <div class="login-box" style={{alignContent: "center", alignItems: "center"}}>
                            <div class="card-body login-card-body">
                                <p class="login-box-msg">Change Password.</p>
                                     <form action="login.html" method="post">
                                     <div class="input-group mb-3">
                                    <input type="password" id="pass1" class="form-control" placeholder="Old Password"/>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="input-group mb-3">
                                    <input type="password" id="pass2" class="form-control" placeholder="New Password"/>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="input-group mb-3">
                                    <input type="password" id="passconf" class="form-control" placeholder="Confirm Password"/>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary btn-block">Change password</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                  </section>   
                  </div>    
               </div>
            </section>   
            </div>

            </div>
        </div>
    )
  }
}

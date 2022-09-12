import React, { Component, useState, useEffect } from 'react'
import axios from "axios";

import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
import $ from 'jquery';
import ViewportList from "react-viewport-list";
import { useRef } from "react";
import { useTable } from "react-table";
import { getCountry, getCountryById } from './services/CountryServiceAxios';
import { getGuestDashboard } from './services/GuestServiceAxios';

export default class Guest extends Component {

    state = {
        countries : [],
        country: [],
        guests: [],
        guest: []
    };

    constructor(props) {
        super(props);
        this.state = {
          countries : [],
          country: [],
          guests: [],
          guest: []
        }
    }

    fetch() {
        var context = this;
      
        $.ajax({
          url: 'http://localhost:5000/guest_personal_details/1',
          method: 'GET',
          success: function(response) {
            console.log("Before Guest");
            console.log(response.recordset);
            console.log("After Guest");
            context.setState({        
              guests: response.recordset,
              guest: response.recordset[0]
            });     

            console.log("Before Senthil");
            console.log(context.state.guests);
            console.log(context.state.guest);
            console.log("After Senthil");
            

          },
          error : function(error) {
            console.log(error);
          }
        });
      }

    componentDidMount() {
        this.fetch();

        /*
        getCountry()
        .then(country => {
          console.log(country)
          this.setState({              
            country: country,
          });
        });
        */
    }

  render() {
    const { country } = this.state;
    const { guest } = this.state;

    return (
        <div>
            <Header/>
            <Menu  active="Guest"/>
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Guest</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Guest</li>
                    </ol>
                    </div>{/* /.col */}
                </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                {/* Small boxes (Stat box) */}
                {/* /.row */}
                {/* Main row */}
                <div className="row">
                    {/* Left col */}
                    <section className="col-lg-7 connectedSortable">
                    {/* Custom tabs (Charts with tabs)*/}
                    <div className="card">
                        <div className="card-header">
                        <h3 className="card-title">
                            <i className="fas fa-map-marker mr-1" />
                            Guest Details
                        </h3>
                        <div className="card-tools">
                            <ul className="nav nav-pills ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                            </li>
                            </ul>
                        </div>
                        </div>{/* /.card-header */}
                        <div className="card-body">
                        <div className="tab-content p-0">
                            <div id="world-map" style={{height: "350px", width: "100%"}}>
                              <div><b>First Name</b> - { guest.first_name } </div>
                              <div><b>Last Name</b> - { guest.last_name } </div>
                              <div><b>Email</b> - { guest.email } - { guest.is_email_verified } </div> 
                              <div><b>Phone</b> - { guest.phone_number } - { guest.is_phone_verified }</div> 
                              <div><b>Occupation</b> - { guest.occupation }  </div>
                              <div><b>photos</b> - {guest.photos} </div>
                              <div><b>Permanent_Address</b> {guest.Permanent_Address} </div>
                              <div><b>Area Name</b> - {guest.area_name} </div>
                              <div><b>city_name</b> - {guest.city_name} </div>
                              <div><b>State</b> - { guest.state_name } </div>

                            </div>
                        </div>
                        </div>{/* /.card-body */}
                    </div>
                    {/* /.card */}
                    {/* DIRECT CHAT */}
              
                    </section>
                    {/* /.Left col */}
                </div>
                {/* /.row (main row) */}
                </div>{/* /.container-fluid */}
                
                </section>
            {/* /.content */}
            </div>
            <Footer/>
      </div>
    )
  }
}
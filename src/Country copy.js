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

export default class Country extends Component {

state = {
    country: [],
    guest_first_name: "",
    guest: [],
    guests: [],
    lguest: [],
    rguest:[],
  };

    constructor(props) {
        super(props);
    }


    fetch() {
        var context = this;
      
        $.ajax({
          url: 'http://localhost:5000/get_guest_dashboard/1',
          method: 'GET',
          success: function(response) {
            console.log("Before Guest");
            console.log(response.recordsets);
            console.log(response.recordsets[0]);
            console.log(response.recordsets[1]);
            console.log(response.recordsets[2]);
            console.log("After Guest");
            context.setState({        
              guest_first_name : response.recordsets[0].first_name,      
              guest: response.recordsets[0],
              lguest: response.recordsets[1],
              rguest: response.recordsets[2]
            });

            this,setState({guests: response.data});

            response.recordsets.forEach(element => {
              console.log("--------------------senthil--------------------");
              console.log(element);
              //console.log("element of 0" + element[0].first_name);  
            });
                        
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
    const { guests } = this.state;

    return (
        <div>
            <Header/>
            <Menu  active="Country"/>
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Country</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Country</li>
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
                            Living Preferences
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
                                <img class="card-img-center" src="dist/img/map.jpg" height={"90%"} width={"90%"}/>

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
                <p>Records</p>
                <p>{  this.state.guest.length  }</p>

                {
                
                  guests.map((g) => (

                    <strong>Name:</strong> 
                  
                  )
                )
                } 

                <p>{  this.state.lguest.length  }</p>
                <p>{  this.state.rguest.length  }</p>
                
                </section>
            {/* /.content */}
            </div>
            <Footer/>
      </div>
    )
  }
}

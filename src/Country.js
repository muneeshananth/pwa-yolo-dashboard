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
        countries : [],
        country: [],
    };

    constructor(props) {
        super(props);
        this.state = {
          countries : [],
          country: []
        }
    }

    fetch() {
        var context = this;
      
        $.ajax({
          url: 'http://34.233.121.200:8081//country/1',
          method: 'GET',
          success: function(response) {
            console.log("Before Country");
            console.log(response.recordset);
            console.log("After Country");
            context.setState({        
              countries: response.recordset,
              country: response.recordset[0]
            });     
            console.log("Before Senthil");
            
            console.log(context.state.countries);
            
            console.log(context.state.country);
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
                <div>ID - { country.country_id } </div>
                <div>NAME - { country.country_name } </div>
                <div>Status - { country.status } </div> 
                <div>Created By - { country.created_by } </div> 
                <div>Modified By - { country.modified_by } </div>
                <div>Created On - { country.created_Date } </div>
                </section>
            {/* /.content */}
            </div>
            <Footer/>
      </div>
    )
  }
}
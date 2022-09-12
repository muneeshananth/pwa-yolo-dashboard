import React, { Component } from 'react'

import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';


export default class Living extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Menu  active="Living"/>
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Living Preferences</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Living Preferences</li>
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
                <div className="row">
                    <div className="col-lg-3 col-6">
                    {/* small box */}
                    <div className="small-box bg-info">
                        <div className="inner">
                        <h3>150</h3>
                        <p>New Orders</p>
                        </div>
                        <div className="icon">
                        <i className="ion ion-bag" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                    </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-12">
                    {/* small box */}
                    <div className="small-box bg-success">
                        <div className="inner">
                        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                        <p>Bounce Rate</p>
                        </div>
                        <div className="icon">
                        <i className="ion ion-stats-bars" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                    </div>
                    </div>
                    {/* ./col */}
                
                </div>
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
                                <img class="card-img-center" src="dist/img/map.jpg" height={360} width={660}/>
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

import React, { Component } from 'react'

import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import $ from "jquery";
import { Invoices } from './Invoices';
import GooglePayButton from '@google-pay/button-react';

export default class wallet extends Component {

 state = {
    guests: [],
    guest: [],
    payment: [],
    payments: [],
    addpayment: false,
    handleClose: false,
    show: false,
    open: false,
    setShow: false,
    open: false,
    guest_id: "",   
    invoices: [],
    invoice: ""
  }

  fetch() {
    var context = this;

    $.ajax({
      url: "http://34.233.121.200:8081/guest_get_invoice_details/1",
      method: "GET",
      success: function (response) {
        console.log("Before Get Guest Invoice Details");
        console.log(response.recordset);
        console.log("After Get Guest Invoice Details");
        context.setState({
          invoices: response.recordset,
          invoice: response.recordset[0],
          guest_id : response.recordset[0].guest_id
        });

        console.log("Before Senthil");
        console.log(context.state.guests);
        console.log(context.state.guest);
        console.log("After Senthil");
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

  componentDidMount() {
    this.fetch();
  }

  constructor(props) {
    super(props);
    this.state = {
      guests: [],
      guest: [],
      payment: [],
      payments: [],
      invoice: [],
      invoices: [],
      addpayment: false,
      handleClose: false,
      show: false,
      open: false,
      setShow: false,
      open: false,
      guest_id: "",
      upi_id: ""
    }
  }
 
  AddPayment() {
    this.setState({
      show: true,
      addpayment: true,
      open: true
    });
  }

  
  AddPaymentClose() {
    this.setState({
      show: false,
      addpayment: true,
      open: false
    });
  }

  handleClose() {
    
    this.setState({
      show: false,
      addpayment: true,
      open: false
    });

    // this.setState({
    //   show: false,
    //   addpayment: false,
    //   open: false,
    // });

  }

  OnChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    
	console.log(this.state.fathername);
    try {
      var AddPaymentData = {
        guest_id: this.state.guest_id,
      };

      axios
        .post("http://34.233.121.200:8081/guest_add_payment/1", AddPaymentData)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.setState({
              show: false,
              addpayment: false,
            });
          } else {
            this.state({
              errmsg: "Payment update Failed",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          e.preventDefault();
          alert("Payment update Failed");
        });
    } catch (err) {
      alert(err);
    }
  };

  render() {

    const { addpayment, show, open } = this.state;
    
  return (
        <div>
            <Header/>
            <Menu active="Wallet"/>
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Invoice/Bills</h1>
                  </div>{/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Invoice/Bills</li>
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
                          <i className="fas fa-money-bill fa-rupee-sign mr-1" />
                          Invoice/Bills
                        </h3>
                        <div className="card-tools">
                          <ul className="nav nav-pills ml-auto">
                            <li className="nav-item">
                                <Button
                              variant="primary"
                              onClick={(e) => {
                                this.AddPayment();
                              }}
                            >Add Payment</Button>                            
                            <GooglePayButton
                              environment="TEST"
                              paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                  {
                                    type: 'CARD',
                                    parameters: {
                                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                    },
                                    tokenizationSpecification: {
                                      type: 'PAYMENT_GATEWAY',
                                      parameters: {
                                        gateway: 'example',
                                        gatewayMerchantId: 'exampleGatewayMerchantId',
                                      },
                                    },
                                  },
                                ],
                                merchantInfo: {
                                  merchantId: '12345678901234567890',
                                  merchantName: 'Demo Merchant',
                                },
                                transactionInfo: {
                                  totalPriceStatus: 'FINAL',
                                  totalPriceLabel: 'Total',
                                  totalPrice: '1',
                                  currencyCode: 'USD',
                                  countryCode: 'US',
                                },
                                shippingAddressRequired: true,
                                callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                              }}
                              onLoadPaymentData={paymentRequest => {
                                console.log('Success', paymentRequest);
                              }}
                              onPaymentAuthorized={paymentData => {
                                  console.log('Payment Authorised Success', paymentData)
                                  return { transactionState: 'SUCCESS'}
                                }
                              }
                              onPaymentDataChanged={paymentData => {
                                  console.log('On Payment Data Changed', paymentData)
                                  return { }
                                }
                              }
                              existingPaymentMethodRequired='false'
                              buttonColor='black'
                              buttonType='Buy'
                            />
                            </li>
                          </ul>
                        </div>
                      </div>{/* /.card-header */}
                      <div className="card-body">
                        <div className="tab-content p-0">
                          <table classname='table'>
                            <tbody>
                              <Invoices invoices={this.state.invoices}/>
                            </tbody>
                            </table>
                        </div>
                      </div>{/* /.card-body */}
                    </div>
                    {/* /.card */}
                    {/* DIRECT CHAT */}
                  
                  </section>
                  {/* /.Left col */}
                  {/* right col (We are only adding the ID to make the widgets sortable)*/}
                  <section className="col-lg-5 connectedSortable">
                    {/* /.card */}
                  </section>
                  {/* right col */}
                </div>
                {/* /.row (main row) */}
              </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
            </div>
            <Footer/>
            <Modal show={show} onHide={ addpayment } style={{width: "100%", height: "100%"}} scrollable={true}>
              <Modal.Header>
                <Modal.Title>Add Payment</Modal.Title>
                <button type="button" onClick={(e) => { this.AddPaymentClose(); }}>
                  <i className="fas fa-times" />
                </button>
              </Modal.Header>
              <Modal.Body>
                <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      id="upidesc"
                      value={this.state.upi_desc}
                      onChange={this.OnChange}
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="10"
                      id="upidesc"
                      value={this.state.upi_amount}
                      onChange={this.OnChange}
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>UPI ID / Virtual Payment Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter UPI ID"
                      id="upiid"
                      value={this.state.upi_id}
                      onChange={this.OnChange}
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={ (e) => {this.handleClose(); }}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleSubmit}>
                  Pay
                </Button>
              </Modal.Footer>
            </Modal>
      </div>    
      )
  }
}
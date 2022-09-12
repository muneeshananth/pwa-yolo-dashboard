import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
export default class Parents extends Component {
  // const handleShow = () => setShow(true);

  componentDidMount() {
    this.fetch();
  }

  constructor(props) {
    super(props);
    this.state = {
      guests: [],
      guest: [],
      addparentdetails: false,
      handleClose: false,
      show: false,
      setShow: false,
	    open: false,
      fathername: "",
      fathermobile: "",
      fatheroccupation: "",
      mothername: "",
      motheroccupation: "",
      mothermobile: "",
      guardianame: "",
      guardianmobile: "",
      phonenumber: "",
      occupation: "",
      address: "",
      relationtype: "",
      loginreq: 0,
      loginreqemail: "",
      guestid: 1,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  AddParent() {
    this.setState({
      show: true,
      addparentdetails: true,
    });
  }

  handleClose() {
    this.setState({
      show: false,
      addparentdetails: false,
      open: false,
      fathername: "",
      fatheroccupation: "",
      fathermobile: "",
      mothername: "",
      motheroccupation: "",
      mothermobile: "",
      guardianname: "",
      guardianoccupation: "",
      guardianmobile: "",
      permenantaddress: "",
      relationtype: "",
      loginreq: "",
      loginreqemail: "",
      address: ""
    });
  }

  OnChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log([e.target.id]);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.id == "loginreq") {
      if (e.target.value != "") {
        
        this.setState({
          open: true,
        });
      }
    }
  };

  handleSubmit = (e) => {
    
	console.log(this.state.fathername);
    try {
      var Addparentdetails = {
        guest_id: this.state.guest_id,
        guest_father_name: this.state.fathername,
        guest_father_occupation: this.state.fatheroccupation,
        guest_father_phone: this.state.fathermobile,
        guest_mother_name: this.state.mothername,
        guest_mother_occupation: this.state.motheroccupation,
        guest_mother_phone: this.state.mothermobile,
        guest_guardian_name: this.state.guardianname,
        guest_guardian_occupation: this.state.guardianoccupation,
        guest_guardian_phone: this.state.guardianmobile,
        guest_login_required: this.state.loginreq,
        guest_parent_login_id: this.state.loginreqemail,
        guest_parent_address: this.state.address,
        guest_guardian_relationship: this.state.relationtype,
        guest_parent_login_username: this.state.loginreqemail,
        guest_parent_login_password: "welcome12345",
      };

      axios
        .post("http://localhost:5000/guest_parent_details/1", Addparentdetails)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.setState({
              show: false,
              addparentdetails: false,
              fathername: "",
              fatheroccupation: "",
              fathermobile: "",            
              mothername: "",
              motheroccupation: "",
              mothermobile: "",
              guardianname: "",
              guardianoccupation: "",
              guardianmobile: "",
              permenantaddress: "",
              relationtype: "",
              loginreq: "",
              loginreqemail: "",
              address: ""
            });
          } else {
            this.state({
              errmsg: " update Failed",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          e.preventDefault();
          alert(" update Falied");
        });
    } catch (err) {
      alert(err);
    }
  };

  fetch() {
    var context = this;
    $.ajax({
      url: "http://localhost:5000/guest_personal_details/1",
      method: "GET",
      success: function (response) {
        console.log("Before Get Guest Profile");
        console.log(response.recordset);
        console.log("After Get Guest Profile");
        context.setState({
          guests: response.recordset,
          guest: response.recordset[0],
          guest_id: response.recordset[0].guest_id,

          fathername: response.recordset[0].father_name,
          fatheroccupation: response.recordset[0].father_occupation,
          fathermobile: response.recordset[0].father_phone_number,
          mothername: response.recordset[0].mother_name,
          motheroccupation: response.recordset[0].mother_occupation,
          mothermobile: response.recordset[0].mother_phone_number,
          guardianname: response.recordset[0].guardian_name,
          guardianoccupation: response.recordset[0].guardian_occupation,
          guardianmobile: response.recordset[0].guardian_phone_number,
          permenantaddress: response.recordset[0].Permanent_Address,
          loginreq: response.recordset[0].login_required_for,
          loginreqemail: response.recordset[0].parent_login_username,
          address: response.recordset[0].Parent_Address
        });

        console.log(context.state.guests);
        console.log(context.state.guest);
         },
      error: function (error) {
        console.log(error);
      },
    });
  }

  render() {
    const { addparentdetails, show, open } = this.state;
    const { guest, ImagePath } = this.state;
   
    return (
      <div>
        <Header />
        <Menu active="Parents" />
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Parents Details</h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Parents Details</li>
                  </ol>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
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
                <section className="col-lg-9 connectedSortable">
                  {/* Custom tabs (Charts with tabs)*/}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fas fa-chart-pie mr-1" />
                        Parent Details
                      </h3>
                      <div className="card-tools">
                        <ul className="nav nav-pills ml-auto">
                          <li className="nav-item">
                            <Button
                              variant="primary"
                              onClick={(e) => {
                                this.AddParent();
                              }}
                            >
                              Add/Edit Parent Details +
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div class="col-lg-20">
                        <div class="card mb-8">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Father Name</p>
                              </div>
							
                              <div class="col-sm-7">
                                <p class="text-muted mb-0"> <input type="text"  size="60" value={guest.father_name} readOnly disabled /> </p>
                              </div>
                            </div>
                            <hr/>
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Occupation</p>
                              </div>
			
                              <div class="col-sm-7">
                                <p class="text-muted mb-0"> <input type="text"  size="60" readOnly disabled value={guest.father_occupation} /> </p>
                              </div>
                            </div>
                            <hr/>
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Mobile Number</p>
                              </div>

                              <div class="col-sm-7">
                                <p class="text-muted mb-0"> <input type="text"  size="60" readOnly disabled value={guest.father_phone_number} /> </p>
                              </div>
                            </div>
                            <hr/>
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Mother Name</p>
                              </div>
                              <div class="col-sm-7">
                                <p class="text-muted mb-0"><input type="text"  size="60" readOnly disabled value={guest.mother_name}/></p>
                              </div>
                            </div>
                            <hr/>
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Occupation</p>
                              </div>

                              <div class="col-sm-7">
                                <p class="text-muted mb-0"> <input type="text"  size="60" readOnly disabled value={guest.mother_occupation}/></p>
                              </div>
                            </div>
                            <hr/>
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Mobile Number</p>
                              </div>

                              <div class="col-sm-7">
                                <p class="text-muted mb-0"> <input type="text"  size="60" readOnly disabled value={guest.mother_phone_number}/></p>
                              </div>
                            </div>
                            <hr></hr>
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Local Guardian Name</p>
                              </div>
                              <div class="col-sm-7">
                                <p class="text-muted mb-0"> <input type="text"  size="60" readOnly disabled value={guest.guardian_name}/></p>
                              </div>
                            </div>
                            <hr/>
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Occupation</p>
                              </div>
                              <div class="col-sm-7">
                                <p class="text-muted mb-0"><input type="text"  size="60" readOnly disabled value={guest.guardian_occupation}/></p>
                              </div>
                            </div>
                            <hr/>
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Phone Number</p>
                              </div>
				
                              <div class="col-sm-7">
                                <p class="text-muted mb-0"><input type="text"  size="60" readOnly disabled value={guest.guardian_phone_number}/></p>
                              </div>
                            </div>
                            <hr/>
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Relationship Type</p>
                              </div>
		
                              <div class="col-sm-7">
                                <p class="text-muted mb-0">
                                  <input type="text"  size="60" readOnly disabled value={guest.guest_relationship}/></p>
                              </div>
                              
                            </div>
                            <hr/>
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Parent Address</p>
                              </div>

                              <div class="col-sm-7">
                                <p class="text-muted mb-0">
                                <input type="text" size="70" readOnly disabled value={guest.Parent_Address}/>
                                </p>
                              </div>
                            </div>
                            <hr/>
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Permanet Address</p>
                              </div>

                              <div class="col-sm-7">
                                <p class="text-muted mb-0">

                                {guest.Permanent_Address},{guest.area_name},
                                {guest.city_name},{guest.state_name}

                                </p>
                              </div>
                            </div>
                            
                            <hr></hr> 
                            <div class="row">
                              <div class="col-sm-4">
                                <p class="mb-0">Login Required for</p>
                              </div>
		
                              <div class="col-sm-7">
                                <p class="text-muted mb-0"> 
                                {guest.login_required_for} - {guest.parent_login_username}</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                  {/* DIRECT CHAT */}
                </section>
                {/* /.Left col */}
                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                
                {/* right col */}
              </div>
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        <Footer />
        <Modal show={show} onHide={addparentdetails} style={{width: "100%"}} scrollable={true}>
          <Modal.Header>
            <Modal.Title>Parents/Guardian Details</Modal.Title>
            <button type="button" onClick={this.handleClose}>
              <i className="fas fa-times" />
            </button>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Label>Father Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Father Name"
                  id="fathername"
                  value={this.state.fathername}
                  onChange={this.OnChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Label>Father Occupation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Father Occupation"
                  id="fatheroccupation"
                  value={this.state.fatheroccupation}
                  onChange={this.OnChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Label>Father Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Father Mobile Number"
                  id="fathermobile"
                  value={this.state.fathermobile}
                  onChange={this.OnChange}
                  autoFocus/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Label>Mother Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your mother name"
                  id="mothername"
                  value={this.state.mothername}
                  onChange={this.OnChange}/>
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mother Occupation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Mother Occupation"
                  id="motheroccupation"
                  value={this.state.motheroccupation}
                  onChange={this.OnChange}
                  autoFocus
                />
              </Form.Group>
              
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mother Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Mother Number"
                  id="mothermobile"
                  value={this.state.mothermobile}
                  onChange={this.OnChange}
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Local Guardian Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter guardian name"
                  id="guardianname"
                  value={this.state.guardianname}
                  onChange={this.OnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Local Guardian Occupation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter guardian occupation"
                  id="guardianoccupation"
                  value={this.state.guardianoccupation}
                  onChange={this.OnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Local Guardian Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your local guardian phone number"
                  id="guardianmobile"
                  value={this.state.guardianmobile}
                  onChange={this.OnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Parent / Guardian Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  id="address"
                  value={this.state.address}
                  onChange={this.OnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Relationship Type</Form.Label>
                <Form.Control
                  as="select"
                  placeholder=""
                  id="relationtype"
                  value={this.state.relationtype}
                  onChange={this.OnChange}
                >
                  <option>Select Relationship Type</option>
                  <option value="1">Uncle</option>
                  <option value="2">Aunty</option>
                  <option value="3">Friend</option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Login Required for</Form.Label>
                <Form.Control
                  as="select"
                  placeholder=""
                  id="loginreq"
                  value={this.state.loginreq}
                  onChange={this.OnChange}
                >
                  <option>Login Required for</option>
                  <option value="1">Father</option>
                  <option value="2">Mother</option>
                  <option value="3">Guardian</option>
                </Form.Control>
              </Form.Group>
              {this.state.open == true ? (
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Required E-Mail Id</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Mail Id"
                    id="loginreqemail"
                    value={this.state.loginreqemail}
                    onChange={this.OnChange}
                  ></Form.Control>
                </Form.Group>
              ) : (
                ""
              )}
     
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

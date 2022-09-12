import React, { Component } from "react";
import $ from "jquery";
import Header from "./Header";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';



export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guests: [],
      guest: [],
      guest_id : "",
      aboutme: "",
      file: null,
      filepath: "",
      filename: "",
      fileimage: null,
      email: "",
      contactEmail: "",
      phonenumber: "",
      occupation: "",
      address: "",
    };
    this.uploadeimage = this.uploadeimage.bind(this);
    this.updateaboutme = this.updateaboutme.bind(this);
  }

  OnChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log("e.target.id=" + [e.target.id]);
    console.log("e.target.value = " + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  addFile = (event) => {
    console.log(event.target.files[0].name);
    this.setState({
      filepath: event.target.files[0].name,
      file : event.target.files,
      filename :  event.target.files[1]
    });
  };

  uploadeimage = (e) => {
    debugger;
    try {
      debugger;
      var data = {
        "file_path" : this.state.filepath,
        "file_name" : this.state.filename,
        "file" : this.state.fileimage,
        "guest_id" :  this.state.guest_id
      } 
      axios
        .post("http://34.233.121.200:8081/guest_image/:id", data)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            $("#exampleModal").delay(10).fadeOut(40);
            setTimeout(function () {
              $(".modal-backdrop").remove();
            }, 1500);
            this.setState({
              filepath: "",
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

  updateaboutme = (e) => {
   
    var data = { 
      "about_me" : this.state.aboutme,
      "guest_id" : this.state.guest.guest_id,
      "guestid" :  this.state.guest_id
    };
    
    console.log(this.state.aboutme);

    axios
    .post("http://34.233.121.200:8081/guest_about_me/1", data)
    .then((res) => {
      console.log(res);
      if (res.status == 200) {
        $("#exampleModal1").delay(1).fadeOut(10);
        setTimeout(function () {
          $(".modal-backdrop").remove();
        }, 1500);
        this.state.guest.details = this.state.aboutme;
        this.setState({
          aboutme: "",
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
      alert(" update Failed");
    }); 
  };

  updateaddress = (e) => {
    debugger;
    console.log(this.state.address);
    $("#exampleModal5").delay(10).fadeOut(40);
    setTimeout(function () {
      $(".modal-backdrop").remove();
    }, 1500);
    this.setState({
      address: "",
    });
  };

  updateoccuption = (e) => {
    // debugger;
    // console.log(this.state.occuption);
    // $("#exampleModal4").delay(1000).fadeOut(450);
    // setTimeout(function () {
    //   $(".modal-backdrop").remove();
    // }, 1500);
    // this.setState({
    //   occuption: "",
    // });

    var data = { 
      "guest_occupation" : this.state.occupation,
      "guest_id" : this.state.guest.guest_id,
    };
    
    axios
    .post("http://34.233.121.200:8081/guest_occupation/1", data)
    .then((res) => {
      console.log(res);
      if (res.status == 200) {
        $("#exampleModal4").delay(10).fadeOut(40);
        setTimeout(function () {
          $(".modal-backdrop").remove();
        }, 1500);
        this.state.guest.occupation = this.state.occupation;
        this.setState({
          guest_occuption: "",
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
      alert("Guest Occuption update Falied");
    });

  };

  updatephnonenumber = (e) => {
    // debugger;
    // console.log(this.state.phonenumber);
    // $("#exampleModal3").delay(1000).fadeOut(450);
    // setTimeout(function () {
    //   $(".modal-backdrop").remove();
    // }, 1500);
    // this.setState({
    //   phonenumber: "",
    // });

    
    var data = { 
      "guest_mobile_number" : this.state.phonenumber,
      "guest_id" : this.state.guest.guest_id,
    };
    
    axios
    .post("http://34.233.121.200:8081/guest_mobile_number/1", data)
    .then((res) => {
      console.log(res);
      if (res.status == 200) {
        $("#exampleModal3").delay(10).fadeOut(40);
        setTimeout(function () {
          $(".modal-backdrop").remove();
        }, 1500);
        this.state.guest.phone_number = this.state.phonenumber;
        this.setState({
          phonenumber: "",
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
      alert("Guest Email update Falied");
    });

  };

  updatemailid = (e) => {
    
    // console.log(this.state.contactEmail);
    // $("#exampleModal2").delay(1000).fadeOut(450);

    // setTimeout(function () {
    //   $(".modal-backdrop").remove();
    // }, 1500);
    // this.setState({
    //   contactEmail: "",
    // });

    var data = { 
      "guest_email" : this.state.contactEmail,
      "guest_id" : this.state.guest.guest_id,
    };
    
    axios
    .post("http://34.233.121.200:8081/guest_email/1", data)
    .then((res) => {
      console.log(res);
      if (res.status == 200) {
        $("#exampleModal2").delay(10).fadeOut(40);
        setTimeout(function () {
          $(".modal-backdrop").remove();
        }, 1500);
        this.state.guest.email = this.state.contactEmail;
        this.setState({
          guest_email: "",
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
      alert("Guest Email update Falied");
    });

  };

  fetch() {
    var context = this;

    $.ajax({
      url: "http://34.233.121.200:8081/guest_personal_details/1",
      method: "GET",
      success: function (response) {
        console.log("Before Get Guest Profile");
        console.log(response.recordset);
        console.log("After Get Guest Profile");
        context.setState({
          guests: response.recordset,
          guest: response.recordset[0],
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

  render() {
    const { guest } = this.state;
    const { guest_id } = this.state;

    return (
      <div>
        <Header />
        <Menu active="Profile" />
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Profile {guest.aboutme} </h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Profile</li>
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
              {/* /.row */}
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <section className="col-lg-7 connectedSortable">
                  {/* Custom tabs (Charts with tabs)*/}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fas fa-chart-pie mr-1" />
                        Your Rating - {guest.profile_score} /100 %
                      </h3>
                      <div className="card-tools">
                        <ul className="nav nav-pills ml-auto">
                          <li className="nav-item">
                            {/* <a
                              className="nav-link active"
                              href="#revenue-chart"
                              data-toggle="tab"
                            >
                              Area
                            </a> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content p-0">
                        <div
                          className="chart tab-pane active"
                          id="profile-image"
                          style={{ position: "relative", height: 100 }}
                        >
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">
                                <b>Profile Photo</b>
                              </h3>
                              <div className="card-tools">
                                <ul className="nav nav-pills ml-auto">
                                  <li className="nav-item">
                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                      data-toggle="modal"
                                      data-target="#exampleModal"
                                    >
                                      Add
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="chart tab-pane active"
                          id="about-me"
                          style={{ height: 150 }}
                        >
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">
                                <b>About me</b>
                              </h3>
                              <div className="card-tools">
                                <ul className="nav nav-pills ml-auto">
                                  <li className="nav-item">
                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                      data-toggle="modal"
                                      data-target="#exampleModal1"
                                    >
                                      Add
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-body">
                              </div>
                               <div className="card-footer">    
                                <p>{guest.details}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="chart tab-pane active"
                          id="revenue-chart"
                          style={{ position: "relative", height: 150 }}
                        >
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">
                                <b>Email</b>
                              </h3>
                              <div className="card-tools">
                                <ul className="nav nav-pills ml-auto">
                                  <li className="nav-item">
                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                      data-toggle="modal"
                                      data-target="#exampleModal2"
                                    >
                                      Add
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-body">
                              </div>
                               <div className="card-footer">    
                                <p>
                                  {guest.email} - {guest.is_email_verified}
                                  <i className="fas fa-check right" /> Verified
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="chart tab-pane active"
                          id="revenue-chart"
                          style={{ position: "relative", height: 150 }}
                        >
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">
                                <b>Mobile</b>
                              </h3>
                              <div className="card-tools">
                                <ul className="nav nav-pills ml-auto">
                                  <li className="nav-item">
                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                      data-toggle="modal"
                                      data-target="#exampleModal3"
                                    >
                                      Add
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-body">
                              </div>
                               <div className="card-footer">    
                                <p>{guest.phone_number} - {" "}  {guest.is_phone_verified}
                                <i className="fas fa-check right" /> Verified
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="chart tab-pane active"
                          id="revenue-chart"
                          style={{  height: 150 }}
                        >
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">
                                <b>Occupation</b>
                              </h3>
                              <div className="card-tools">
                                <ul className="nav nav-pills ml-auto">
                                  <li className="nav-item">
                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                      data-toggle="modal"
                                      data-target="#exampleModal4"
                                    >                                      Add
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-body">
                              </div>
                               <div className="card-footer">      
                                <p>{guest.occupation}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="chart tab-pane active"
                          id="revenue-chart"
                          style={{ position: "center", height: 150 }}
                        >
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">
                                <b>Permanent Address</b>
                              </h3>
                              <div className="card-tools">
                                <ul className="nav nav-pills ml-auto">
                                  <li className="nav-item">
                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                      data-toggle="modal"
                                      data-target="#exampleModal5"
                                    >
                                      Add
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-body">
                                {guest.Permanent_Address}, &nbsp;
                                {guest.area_name} , &nbsp;{guest.city_name} ,
                                &nbsp;
                                {guest.state_name} .
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
                <section className="col-lg-5 connectedSortable">
                  {/* solid sales graph */}
                  <div className="card bg-light-info">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-th mr-1" />
                        &nbsp; Profile
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="card align-items-center">
                        <div className="card-header border-0">
                          <h3 className="card-title">
                            <img
                              class="card-img-center"
                              src="dist/img/avatar.jpg"
                              height={160}
                              width={160}
                            />
                          </h3>
                        </div>
                        <div className="card align-items-center">
                          <div className="card-header border-0">
                            <h3
                              class="card-img-center"
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {guest.first_name} {guest.last_name}{" "}
                            </h3>
                            <h3 className="card-title">
                              <p style={{ align: "center" }}>
                                <b>Benefits of Better Profile Score </b>
                              </p>
                            </h3>
                          </div>
                        </div>
                        <div className="card card-light ">
                          <div className="card-header border-0">
                            <b>Earth Trust</b>
                            <h3 className="card-title">
                              <p style={{ align: "center" }}>
                                Host look at your profile before accepting or
                                declining you increasing your profile score is
                                esseential to build profile score
                              </p>
                            </h3>
                          </div>
                        </div>
                        <div className="card card-light">
                          <div className="card-header border-0 align:center">
                            <b>Get more Benefits</b>
                            <h3 className="card-title">
                              <p style={{ align: "center" }}>
                                Profile with a high rating will be allowed to
                                send multiple requests simultaneously
                              </p>
                            </h3>
                          </div>
                        </div>
                        <div className="card card-light center">
                          <div className="card-header border-0 align:center">
                            <b>Show your reviews</b>
                            <h3 className="card-title">
                              <p style={{ align: "center" }}>
                                Profile with a high rating will be allowed to
                                send multiple requests simultaneously
                              </p>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer bg-transparent">
                      <div className="row">{/* ./col */}</div>
                      {/* /.row */}
                    </div>
                    {/* /.card-footer */}
                  </div>
                  {/* /.card */}
                  {/* Calendar */}
                  <div className="card bg-gradient-success">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="far fa-calendar-alt" />
                        Calendar
                      </h3>
                      {/* tools card */}
                      <div className="card-tools">
                        {/* button with a dropdown */}
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-success btn-sm dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <i className="fas fa-bars" />
                          </button>
                          <div
                            className="dropdown-menu float-right"
                            role="menu"
                          >
                            <a href="#" className="dropdown-item">
                              Add new event
                            </a>
                            <a href="#" className="dropdown-item">
                              Clear events
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                              View calendar
                            </a>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                      {/* /. tools */}
                    </div>
                    {/* /.card-header */}
                    <div className="card-body pt-0">
                      {/*The calendar */}
                      <div id="calendar" style={{ width: "100%" }} />
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </section>
                {/* right col */}
              </div>
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        <Footer />
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Upload Images
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <label for="exampleFormControlInput1" class="form-label">
                  Choose the file
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="fileUpload"
                  name="fileUpload"
                  onChange={this.addFile}
                ></input>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.uploadeimage}
                >
                  Update profile image
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Update Data
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <label for="exampleFormControlTextarea1" class="form-label">
                  About Me
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  id="aboutme"
                  value={this.state.guest.aboutme}
                  onChange={this.OnChange}
                ></textarea>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.updateaboutme}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  update
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Enter the Mail Id
                </label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="abcd@gmail.com"
                  id="contactEmail"
                  value={this.state.contactEmail}
                  onChange={this.OnChange}
                ></input>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.updatemailid}
                >
                  update
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal3"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Update Mobile Number
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Enter the Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="1236547892"
                  id="phonenumber"
                  value={this.state.phonenumber}
                  onChange={this.OnChange}
                ></input>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.updatephnonenumber}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal4"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  update
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Enter the occupation
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="occupation"
                  id="occupation"
                  value={this.state.occupation}
                  onChange={this.OnChange}
                ></input>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.updateoccuption}
                >
                  update
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal5"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Update
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Enter Full Address
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  id="address"
                  value={this.state.address}
                  onChange={this.OnChange}
                ></textarea>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.updateaddress}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

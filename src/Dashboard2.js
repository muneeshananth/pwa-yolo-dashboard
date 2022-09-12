import React, { Component } from 'react'
import { CChart } from '@coreui/react-chartjs'
import ProgressBar from 'react-bootstrap/ProgressBar';
import $ from 'jquery';
import Moment from 'moment';


export default class Dashboard extends Component {

    state = {
      guests: [],
      guest: [],
      attendances: [],
      activities: [],
      attn : []
  };

  constructor(props) {
      super(props);
      this.state = {
        guests: [],
        guest: [],
        attendances: [],
        activities: [],
        attn: []
      }
  }

  fetch() {
      var context = this;
    
      $.ajax({
        url: 'http://localhost:5000/guest_dashboard/1',
        method: 'GET',
        success: function(response) {
          console.log("Before Get Guest Dashboard");
          console.log(response.recordset);


          console.log(response.recordsets[0]);
          console.log("Before Get Guest Dashboard - recordset[1]");
          console.log(response.recordsets[1]);
          console.log("Before Get Guest Dashboard - recordset[2]");
          console.log(response.recordsets[2]);
          console.log("After Get Guest Dashboard");
          context.setState({        
            guests: response.recordset,
            guest: response.recordset[0],
            attendances: response.recordsets[1],
            activities: response.recordsets[2],
            attn: response.recordsets[3],
          });     

          console.log("Before Senthil");
          console.log("----------------------------------------------------------");
          console.log(context.state.guests);
          console.log(context.state.guest);
          console.log(context.state.attendances);
          console.log(context.state.activities);
          console.log("My Attn");
          console.log(context.state.attn);
          
          console.log("----------------------------------------------------------");
          console.log("After Senthil");
        },
        error : function(error) {
          console.log(error);
        }
      });
    }

  componentDidMount() {
      this.fetch();
  }

    render() {

      const { guest } = this.state;
      const { attendances } = this.state;
      const {activities} = this.state;
      const {attn} = this.state;
      debugger; 
      const now = guest.profile_score;
      const now1 = 60;
      const now2 = 20;
      const now3 = 20;

      return (

        <div>
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard</li>
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
              <div className="col-lg-3 col-3">
                <div className="small-box bg-primary">
                  <div className="inner">
                    <p>Profile</p>
                  </div>
                </div>
                <img src="dist/img/avatar.jpg" height={160} width={160}/>
                <div style={{ alignContent: "center", alignItems: "center" }}>
                 <h3> { guest.first_name }</h3>
                 
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info" style={{  width: "100%"}}>
                  <div className="inner">
                    <p>Profile Score</p>
                  </div>
                  <div className="icon">
                  </div>

                    <ProgressBar style={{ height: "40px", width: "100%"}} >
                      <ProgressBar variant="success" now={guest.profile_score} key={1} label={`${guest.profile_score}%`}  />
                      <ProgressBar variant="warning" now={guest.profile_score/100} key={2}   />
                      <ProgressBar variant="danger" now={guest.profile_score/100} key={3}  />
                    </ProgressBar>
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
                <div className="card" style={{width:"100%", height: "100%"}}>
              
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-chart-pie mr-1" />
                      Attendance
                    </h3>
                    <div className="card-tools">
                      <ul className="nav nav-pills ml-auto">
                        <li className="nav-item">
                        
                        </li>
                      </ul>
                    </div>
                  </div>{/* /.card-header */}
                  <div className="card-body">
                    <div className="tab-content p-0">
                      {/* Morris chart - Attendance */}
                      <CChart
                      type="bar"
                      data={{
                        labels: attendances.map(o =>  Moment(o.Attendance_Date).format('DD.MM.YY') ), 
                        datasets: [
                          {
                            label: 'Entry',
                            backgroundColor: 'rgba(94, 16, 161, 0.5)',
                            borderColor: 'blue',
                            pointBorderColor: "yellow",
                            pointBackgroundColor: "orange",
                            lineTension: 0.4,
                            data: [ attendances.map(o => Moment(o.Room_Entering_Time).format('hh.mm') )] ,
                          },
                          {
                            label: 'Leaving',
                            backgroundColor: 'rgba(94, 16, 161, 0.5)',
                            borderColor: 'red',
                            pointBorderColor: "green",
                            pointBackgroundColor: "orange",
                            lineTension: 0.4,
                            data: [attendances.map(o => Moment(o.Room_Leaving_Time).format('hh.mm') ) ],
                          },                      
                        ],
                      }}
                      labels="months"
                    />

                    </div>
                  </div>{/* /.card-body */}
                </div>
                {/* /.card */}
              </section>


          {/* /.Left col */}
          {/* right col (We are only adding the ID to make the widgets sortable)*/}
          <section className="col-lg-5 connectedSortable">
            
            <div className="card" style={{width:"100%", height: "100%"}} >
              <div className="card-header border-0">
                <h3 className="card-title">
                  <i className="fas fa-th mr-1" />
                  Daily Activity
                  { attn.map(o =>  Moment(o.st_time).format('hh.mm') + "\n" ) }
                </h3>
                <div className="card-tools">
                  <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body">
              <CChart
                  type="bar"
                  data={{
                    labels: attn.map(o => o.name ),
                    datasets: [
                      {
                        label: 'Daily Activity',
                        backgroundColor: 'blue',
                        data: attn.map(o => Moment(o.st_time).format('hh.mm')),
                      },
                    ],
                  }}
                  labels="months"
                />
              </div>
              {/* /.card-body */}
              <div className="card-footer bg-transparent">                
                {/* /.row */}
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}

            {/* /.card */}
          </section>
          {/* right col */}
        </div>
        {/* /.row (main row) */}
      </div>{/* /.container-fluid */}
      
    </section>
    {/* /.content */}
  </div>

</div>

    )
    }
}
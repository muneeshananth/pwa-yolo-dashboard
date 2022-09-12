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
        url: 'http://34.233.133.141:5000/guest_dashboard/1',
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
      const now = guest.profile_score;
      var _variant = "primary";
      
      if(guest.profile_score >= 70){
        _variant = "success";
      }
      else if(guest.profile_score >= 50 && guest.profile_score < 70){
        _variant = "warning";
      }
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
                <img
                              class="card-img-center"
                              src="dist/img/avatar.jpg"
                              height={160}
                              width={160}
                            />
                {/*<img src={ `${process.env.PUBLIC_URL}/public/images/${ guest.photos}` }   height={160} width={160}/>*/}
                <div style={{ alignContent: "center", alignItems: "center" }}>
                 <h3>&nbsp;&nbsp;&nbsp; { guest.first_name } - { guest.photos }</h3>
                 
                </div>
              </div>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info" style={{  width: "300%"}}>
                  <div className="inner">
                    <p>Profile Score</p>
                  </div>
                  <div className="icon">
                  </div>

                  <div class="progress" style={{height:"4rem",paddingTop:"10px"}}>
                    <ProgressBar style={{ height: "50px", width: "100%",borderRadius:"4px"}} >
                      <ProgressBar variant="success" now="10" key={1} label="1"  />
                      <ProgressBar variant="success" now="10" key={2} label="2"  />
                      <ProgressBar variant="success" now="10" key={3} label="3"  />
                      <ProgressBar variant="success" now="10" key={4} label="4"  />
                      <ProgressBar variant="success" now="10" key={5} label="5"  />
                      <ProgressBar variant="success" now="10" key={6} label="6"  />
                      <ProgressBar variant="warning" now="10" key={7} label="7"  />
                      <ProgressBar variant="warning" now="10" key={8} label="8"  />
                      <ProgressBar variant="danger" now="10" key={9} label="9"  />
                      <ProgressBar variant="danger" now="10" key={10} label="10"  />                  
                    </ProgressBar>
                  </div>
                    <ProgressBar style={{ height: "2rem", width: "100%"}} >
                      <ProgressBar variant="white" now={guest.profile_score-12} key={1} label={`${guest.profile_score}%`}  >
                       </ProgressBar>
                       <img src="dist/img/up_arrow.jpg"  style={{height:"2rem",paddingTop:"1px", height: "50px", width: "5%",borderRadius:"4px"}} /> 
                        &nbsp;&nbsp;;
                     </ProgressBar>
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
                      type="line"
                      data={{
                        labels: attendances.map(o =>  Moment(o.Attendance_Date).format('MMM-DD') ), 
                        datasets: [
                          {
                            label: 'Entry Time',
                            backgroundColor: 'brown',
                            borderColor: 'blue',
                            pointBorderColor: "yellow",
                            pointBackgroundColor: "orange",
                            lineTension: 0.4,
                            data: attendances.map(o => (o.Room_Entering_Time.replace(':','.')) ) ,
                          },
                          {
                            label: 'Leaving Time',
                            backgroundColor: 'green',
                            borderColor: 'red',
                            pointBorderColor: "green",
                            pointBackgroundColor: "orange",
                            lineTension: 0.4,
                            data: attendances.map(o => (o.Room_Leaving_Time.replace(':','.'))) ,
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
                  type="line"
                  data={{  
                    labels: activities.map(o =>  Moment(o.Library_Date).format('MMM-DD') ),
                    datasets: [
                      {
                        label: 'Entry Time',
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        pointBorderColor: "yellow",
                        pointBackgroundColor: "orange",
                        lineTension: 0.4,
                        data: activities.map(o => (o.Library_Entering_Time).replace(':','.')),
                      },
                      {
                        label: 'Exit Time',
                        backgroundColor: 'red',
                        borderColor: 'red',
                        pointBorderColor: "red",
                        pointBackgroundColor: " ",
                        lineTension: 0.4,
                        data: activities.map(o => (o.Library_Exit_Time).replace(':','.')),
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
import React from 'react'
import axios from 'axios';
import Header from './Header';
import Menu from './Menu';


class FileUpload extends React.Component{
 
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            fileName: ""
       }
    }
    
    saveFile = (e) => {
        console.log(e.target.files);
        this.state.file= e.target.files[0];
        this.state.fileName = e.target.files[0].name;

    };
 
    uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", this.state.file);
        formData.append("file_name", this.state.fileName);
        formData.append("guest_id", 1); 

        console.log(formData);
        var data = {
            "file" : this.state.file,
            "file_name" : this.state.fileName,
            "guest_id" :  1
          } 

        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
        }

        try {
          const res = await axios.post(
            "http://34.233.121.200:5000/image_upload", formData);
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
    };
 
    render(){
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
                  <h1 className="m-0 text-dark">Profile </h1>
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
                <img src={this.state.file} width="40%" height="50%"  name="avatar"/>
                <input type="file" name="file" onChange={this.saveFile} />
                <button onClick={this.uploadFile}>Upload</button>
              </div>
             </div>
        </section>
        </div>
       </div>
      );
    }
}
 
export default FileUpload;
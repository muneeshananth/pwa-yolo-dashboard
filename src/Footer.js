import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
           <div>
                <footer className="main-footer">
                    <strong>Copyright © 2021-2023 @ &nbsp;&nbsp;<a href="http://www.yolo.com">yolo</a>.</strong>
                    &nbsp;&nbsp;&nbsp; All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                    <b> &nbsp;&nbsp;&nbsp; Version</b> 1.0.0
                    </div>
                </footer>
            </div>

        )
    }
}
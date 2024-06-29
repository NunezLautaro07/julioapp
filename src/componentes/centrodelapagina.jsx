import React from 'react';
import Header from './poscasts.jsx';
import Sidebar from "./Sidebar.jsx";
import Form from "./form.jsx";
import "../style.css"


export default function Centrodelapagina(){
    return(
        <>
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 "><Sidebar /></div>
      <div className="col-xl-7 col-lg-7 col-md-9 col-12  "><Header/></div>
      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 "><Form></Form></div>
        </>
    )
}
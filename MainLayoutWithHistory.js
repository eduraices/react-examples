/**
 * Author: eduraices, 2024
 */
import React from "react";
import "../../App.scss";
import { NavLink, Outlet } from "react-router-dom";

import history from 'history/browser'; // from 'history' npm package

export default function MainLayoutWithHistory () {
    
    // To have a history.back() button, just add action onClick={history.back}
    
  return (
  <div className="App">
    <nav>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="resources"> Resources </NavLink> 
    </nav>

    <main>  
      <Outlet/>
    </main>

    <NavLink><span onClick={ history.back }> Back </span></NavLink>

    <footer>
      <h5>{'Reached bottom'}</h5>
    </footer>
  </div>
    
  );
}

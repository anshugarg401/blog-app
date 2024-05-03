import React from 'react';

import PropTypes from 'prop-types';


const Navbar = (props) => {
    return(
    
    <>  
    
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}   >
     {/* <Router> */}
    <div className="container-fluid"  >
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.t1}</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">{props.t2}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.t3}</Link>
          </li>
           */}
        
         
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        
        <div  onClick = {()=>props.tonggleswitch('primary')} type="button" className="container-button btn-primary"></div>
        <div onClick = {()=>props.tonggleswitch('success')} type="button"className="container-button btn-success"></div>
        <div onClick = {()=>props.tonggleswitch('danger')} type="button" className="container-button btn-danger"> </div>
        <div onClick = {()=>props.tonggleswitch('warning')} type="button"id="btn-4" className="container-button btn-warning"></div>
        
        
        <div className={`form-check form-switch text-${props.mode ==="light"?"dark":"light"}`}>
  <input onClick = {()=>props.tonggleswitch(null)} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" forclass="flexSwitchCheckDefault">Enable dark mode</label>
</div>


       
    
      </div>
    </div>
        {/* </Router> */}
  </nav>
  
  </> 
  
  )
}
//  the "p"in function is small in proptypes and the "P" in object is capital
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    t1: PropTypes.string.isRequired,
    t2: PropTypes.string.isRequired,
    t3: PropTypes.string.isRequired
  
};
Navbar.defaultProps = {
    title : "blogs",
    t1 : "home",
    t2 : "about",
    t3 : "services"
};
// #endregion

export default Navbar;


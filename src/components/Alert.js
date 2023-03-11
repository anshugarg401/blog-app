import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Alert = (props) => {
   
   
return (

   
<section id="alert-height">


   { props.alert && <div  id = "alert" className={`alert alert-${props.alert.type} `} role="alert">
<strong>{ props.alert.msg}</strong>
   
    </div>}
</section>
   
   
)
   
   
   
   
     
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
// #endregion

export default Alert;
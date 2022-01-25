import React from 'react';

const ErrorMessage = (props) => {
  const errorstyles = {
    color: "#fc0101"
  };
   return (
    <p className = "error"
    style = {errorstyles} value={props.value}>
      {props.errorMessage}
    </p>
   );
}

export default ErrorMessage;
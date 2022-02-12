import React from "react";

export default function Alert(props) {
  const alertStatus = props.alert.status.charAt(0).toUpperCase() + props.alert.status.slice(1)
  return (
    <div   >
      <div class= {`alert alert-${props.alert.status}`} role="alert">
           {`${alertStatus}: ${props.alert.msg}`}
      </div>
    </div>
  );
}

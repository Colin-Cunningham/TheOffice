import React from "react";

const styles ={
  image:{
    height: "150px",
    width: "150px"
  },
  table:{
    margin: "0 auto"
  },

}

function employeecard(props) {
  return (
    <tbody>
        <tr>
          <td>
            <img style={styles.image} alt="" src={props.image} />
          </td>
          <td >{props.name}</td>
          <td > {props.title}</td>
          <td > {props.number}</td>
          <td >{props.salary}</td>
        </tr>
        </tbody>
  );
}

export default employeecard;

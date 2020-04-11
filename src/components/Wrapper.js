import React from "react";
 
const styles ={
wrapper: {
   paddingLeft: "20%",
   paddingRight: "24%"
},
button:{
  width: "2px"
}
  
}





function Wrapper(props) {
  return (
  <div style={styles.wrapper} className="wrapper">{props.children}
   <thead className="thead-dark">
        <tr>
        <th scope="col">Image</th>
        <th scope="col">Name </th>
        <th scope="col">Title </th>
        <th scope="col">Phone Number </th>
        <th scope="col">Salary </th>
        </tr>  
  </thead>
  </div>)
}

export default Wrapper;

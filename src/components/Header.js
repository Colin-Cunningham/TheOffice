import React from "react";

const styles = {
    Header: {
      textAlign: "center",
      background: "#e8eaf6",
      backgroundImage: "url('https://images-na.ssl-images-amazon.com/images/I/61v20Ec5iwL._AC_SL1500_.jpg')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    },
      button: {
        textAlign: "center",
      },
  };
  
function Header(props) {
  return (
    <div>
      <h1 style={styles.Header} className="jumbotron">'</h1>
      <div style={styles.button}>
        <button className="btn" onClick={props.sortemployee}>Sort by name</button>
        <button className="btn" onClick={props.sortsalary} >Sort by Salary</button>
        </div>
    </div>
  );
}

export default Header;
import React from "react";
import Header from "./components/Header";
import employees from "./employees.json";
import Employeecard from "./components/pages/employeeCard"
import Wrapper from "./components/Wrapper"
const styles = {
  Header: {
    textAlign: "center",
    background: "#e8eaf6"
  },
    button: {
     width: "12%",
     background: "black",
     color: "white"
    },
    form:{
      textAlign: "center"
    },
    input: {
      width: "33%",
      background: "#e8eaf6",
      margin: "0 auto",
    }
};

class Employees extends React.Component{
  
  state = {
    employees: employees,
    name: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name
    const updatedemployees = this.state.employees.filter(employee => employee.name === name)
    if(updatedemployees < 1){
      alert("Employee does not exist, remember to search by first and last name")
    }else{
      this.setState({ employees: updatedemployees});
    }
  };

  sortemployee = name => {
    name.preventDefault();
    const updatedemployees = this.state.employees.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({ employees: updatedemployees});
  };

  sortsalary = salary => {
    salary.preventDefault();
    const updatedemployees = this.state.employees.sort((a, b) => {return b.salary - a.salary})
    this.setState({ employees: updatedemployees});
  };

  render(){return (
    <>
    <Header sortemployee={this.sortemployee} sortsalary={this.sortsalary}/>
    <form  style={styles.form}className="md-form ">
        <input
        style={styles.input}
        className="form-control"
        value={this.state.name}
        name="name"
        onChange={this.handleInputChange}
        type="text"
        placeholder="Search Employee By Name"
        />
        <button style={styles.button} className="btn" onClick={this.handleFormSubmit}>Submit</button>
      </form>
      <table className="table">
      <Wrapper>
      {this.state.employees.map(employee => (
            <Employeecard
            sortemployee={this.removeEmployee}
            id={employee.id}
            name={employee.name}
            image={employee.image}
            title={employee.title}
            number={employee.phoneNumber}
            salary={employee.salary}
          />
          ))}
      </Wrapper>
      </table>
  </>
  )}}

export default Employees;

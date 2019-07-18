import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../Employee/Employee.css'
import AnimalCard from "../Animal/AnimalCard"

export default class EmployeeList extends Component {
    render() {
        return (
        <section className="employees">
        {
            this.props.employees.map(employee =>
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{employee.name}</h5>
                            <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                            <button onClick={() => this.props.deleteEmployee(employee.id)}>Delete</button>
                        </div>

                        {/* added in Animal Card below */}
                        <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                        <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === employee.id)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            }
                        </div>
                    </div>
                </div>
            )
        }
        </section>
    )
  }
}
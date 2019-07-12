import React, { Component } from 'react';

// Kennel is top level. So how do we get EmployeeList going to get to DOM without adding a ReactDOM? It needs to be a child of Kennel. Kennel is not composed of (COMPOSITION) it's own stuff as well as Employee List.
export default class EmployeeList extends Component {
    render() {
        return (
        <section className="employees">
        {
            this.props.employees.map(employee =>
                <div key={employee.id}>
                    {employee.name}
                </div>
            )
        }
        </section>
    )
  }
}

// return (
//     <article>
//         <h1>Employee List</h1>
//         <section>Jessica Younker</section>
//         <section>Jordan Nelson</section>
//         <section>Zoe LeBlanc</section>
//         <section>Blaise Roberts</section>
//     </article>
// );
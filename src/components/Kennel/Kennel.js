import React, { Component } from 'react';
import EmployeeList from '../Employee/EmployeeList';
import LocationList from '../Location/LocationList';

// Kennel is component we made, render is a property of Kennel. When you use class syntax as a function to create objects, you give it a capital.
// class foo extends bar.
// Component is another function. And that function will returns an object with properties(values and methods) on it. When i make a kennal it will contain all of the objects of Component. Component is a predefined function from React. SO now kennal doesn't have just that property, it also has Components properties too. Make an component that has its own properties but also 'extends' or brings in the properties from Component.
// export default class Kennel extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Student Kennels</h3>
//                 <h4>Nashville North Location</h4>
//                 <h5>500 Puppy Way</h5>
//                 <EmployeeList />
//             </div>
//         );
//     }
// }
// Updated code above and put below

export default class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
            </article>
        )
    }
}
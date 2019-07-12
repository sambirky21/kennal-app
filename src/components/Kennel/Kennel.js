import React, { Component } from 'react';
import NavBar, from '../nav/NavBar'
import ApplicationViews, from '../ApplicationViews'

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

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}
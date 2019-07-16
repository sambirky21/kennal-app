import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import AnimalList from './Animal/AnimalList'
import OwnerList from './Owner/OwnerList'
import APIManager from '../APIManager';

export default class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        APIManager.getAll("animals").then(animals => newState.animals = animals)
        APIManager.getAll("employees").then(employees => newState.employees = employees)
        APIManager.getAll("owners").then(owners => newState.owners = owners)
        APIManager.getAll("locations").then(locations => newState.locations = locations)
        .then(() => this.setState(newState))
    }

    //     fetch("http://localhost:5002/animals")
    //         .then(r => r.json())
    //         .then(animals => newState.animals = animals)
    //         .then(() => fetch("http://localhost:5002/employees")
    //         .then(r => r.json()))
    //         .then(employees => newState.employees = employees)
    //         .then(() => fetch("http://localhost:5002/owners")
    //         .then (r => r.json()))
    //         .then(owners => newState.owners = owners)
    //         .then(() => fetch("http://localhost:5002/locations")
    //         .then (r => r.json()))
    //         .then(locations => newState.locations = locations)
    //         .then(() => this.setState(newState))

    //     deleteAnimal = id => {
    //         return fetch(`http://localhost:5002/animals/${id}`, {
    //             method: "DELETE"
    //         })
    //         .then(e => e.json())
    //         .then(() => fetch(`http://localhost:5002/animals`))
    //         .then(e => e.json())
    //         .then(animals => this.setState({
    //             animals: animals
    //         })
    //     )
    // }

        deleteAnimal = (id) => {
            return APIManager.removeAndList("animals", id)
            .then((animals) => this.setState({
                animals: animals
            })
        )
    }

//     deleteAnimal = (id) => {
//         const newState = {}
//         return APIManager.removeAndList("animals", id)
//         .then((animalList) => {
//             console.log(animalList)
//             newState.animals = animalList
//             this.setState(newState)
//         }
//     )
// }

        deleteEmployee = id => {
            return fetch(`http://localhost:5002/employees/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            })
        )
    }

        deleteOwner = id => {
            return fetch(`http://localhost:5002/owners/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            })
        )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList    deleteEmployee={this.state.employees}
                                            employees={this.state.employees} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal}
                                        animals={this.state.animals} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList   deleteOwner={this.state.owners}
                                        owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}
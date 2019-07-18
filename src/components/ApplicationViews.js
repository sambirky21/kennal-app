import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import LocationList from './Location/LocationList'
import EmployeeList from './Employee/EmployeeList'
import AnimalList from './Animal/AnimalList'
import OwnerList from './Owner/OwnerList'
import AnimalDetail from './Animal/AnimalDetail'
import EmployeeDetail from './Employee/EmployeeDetail'
import OwnerDetail from './Owner/OwnerDetail'
import AnimalForm from './Animal/AnimalForm'
import APIManager from '../APIManager';
import Login from './Authentication/Login'
import { withRouter } from 'react-router'

class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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
        deleteAnimal = (id) => {
            return APIManager.removeAndList("animals", id)
            .then((animals) => {
                this.props.history.push("/animals")
                this.setState({
                animals: animals
            })
        }
    )
}
        deleteEmployee = (id) => {
            return APIManager.removeAndList("employees", id)
            .then((employees) => {
                this.props.history.push("/employees")
                this.setState({
                employees: employees
            })
        }
    )
}
        deleteOwner = (id) => {
            return APIManager.removeAndList("owners", id)
            .then((owners) => {
            this.props.history.push("/owners")
            this.setState({
                owners: owners
            })
        }
    )
}

        addAnimal = (animal) => {
            return APIManager.post(animal, "animals")
            .then(animals =>
            this.setState({
                animals: animals
            })
        )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList      LocationList locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList    deleteEmployee={this.deleteEmployee}
                                                animals={this.state.animals}
                                                employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    // Find the employee with the id of the route parameter
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!employee) {
                        employee = {id:404, name:"404", employee: "Employee not found"}
                    }

                    return <EmployeeDetail employee={ employee }
                                deleteEmployee={ this.deleteEmployee } />
                    }} />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList      {...props}
                                                deleteAnimal={this.deleteAnimal}
                                                animals={this.state.animals}
                                                 />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm  {...props}
                                        addAnimal={this.addAnimal}
                                        employees={this.state.employees} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = {id:404, name:"404", breed: "Dog not found"}
                    }

                    return <AnimalDetail animal={ animal }
                                deleteAnimal={ this.deleteAnimal } />
                    }} />

                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerList      deleteOwner={this.deleteOwner}
                                                owners={this.state.owners} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    // Find the owner with the id of the route parameter
                    let owner = this.state.owners.find(owner =>
                        owner.id === parseInt(props.match.params.ownerId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!owner) {
                        owner = {id:404, name:"404", owner: "Owner not found"}
                    }

                    return <OwnerDetail owner={ owner }
                                deleteOwner={ this.deleteOwner } />
                    }} />
                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)
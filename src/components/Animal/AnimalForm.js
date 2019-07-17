import React, { Component } from "react";
import "./Animal.css"

export default class AnimalForm extends Component {
    state = {
        animalName: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.animalName === "") {
          window.alert("Please enter name");
        } else {
          const animal = {
            name: this.state.animalName,
          }
        this.props
            .addAnimal(animal)
            .then(() => this.props.history.push("/animals"));
        }
    }


    render() {
        return (
        <React.Fragment>
            <form className="animalForm">
            <div className="form-group">
                <label htmlFor="animalName">Animal name</label>
                <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="animalName"
                placeholder="Animal name"
                />
            </div>
            <button
                type="submit"
                onClick={this.constructNewAnimal}
                className="btn btn-primary"
            >
                Submit
            </button>
            </form>
        </React.Fragment>
        );
    };
}
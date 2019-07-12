import React, { Component } from 'react';

export default class LocationList extends Component {
    render() {
        return (
        <section className="locations">
        {
            this.props.locations.map(location =>
                <div key={location.id}>
                    <h4>{location.name}</h4>
                    <h5>{location.address}</h5>
                </div>)
        }
        </section>
    )
  }
}

/* <h3>Student Kennels</h3>
               <h4>Nashville North Location</h4>
               <h5>500 Puppy Way</h5> */
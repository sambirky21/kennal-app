import React, { Component } from 'react';
import { Link } from "react-router-dom"
import '../Owner/Owner.css'

export default class OwnerList extends Component {
    render() {
        return (
        <section className="owners">
        {
            this.props.owners.map(owner =>
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            {owner.name}: {owner.phoneNumber}
                            <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                            <button onClick={() => this.props.deleteOwner(owner.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        }
        </section>
    )
  }
}
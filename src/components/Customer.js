import React, { Component } from 'react'

export default class Customer extends Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} name={this.props.name}></CustomerProfile>
                <CustomerInfo birthday={this.props.birthday} description={this.props.description}></CustomerInfo>
            </div>
        )
    }
}

class CustomerProfile extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.id}</h2>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

class CustomerInfo extends Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
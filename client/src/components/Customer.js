import React, { Component } from 'react'
import { TableCell, TableRow } from '@material-ui/core'
import CustomerDelete from './CustomerDelete'

export default class Customer extends Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile" style={{width: '50px', height: '50px'}}/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} /></TableCell>
            </TableRow>
        )
    }
}

/*
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
*/
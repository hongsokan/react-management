import { TableCell, TableRow } from '@material-ui/core'
import React, { Component } from 'react'

export default class Customer extends Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.description}</TableCell>
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
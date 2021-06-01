import { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, withStyles } from '@material-ui/core';
import Customer from './components/Customer';
// import './App.css';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
  {
    'id': 1,
    'name': 'aaa',
    'birthday': 111111,
    'description': 'hello a'
  },
  {
    'id': 2,
    'name': 'bbb',
    'birthday': 222222,
    'description': 'hello b'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>소개</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {
              return <Customer key={c.id} id={c.id} name={c.name} birthday={c.birthday} description={c.description} />
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

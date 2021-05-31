import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'name': 'aaa',
    'birthday': 111111,
    'description': 'hello a'
  },
  {
    'id': 2,
    'name': 'aaa',
    'birthday': 111111,
    'description': 'hello a'
  }
]

function App() {
  return (
    <div className="main">
      {/* <Customer
        id={customers[0].id}
        name={customers[0].name}
      /> */}

      {customers.map(c => {
        return <Customer key={c.id} id={c.id} name={c.name}/>
      })}
    </div>
  );
}

export default App;

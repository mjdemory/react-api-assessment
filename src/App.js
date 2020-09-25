import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes:[],
      
    };
  }

componentDidMount() {
  fetch("http://127.0.0.1:8000/api/shoe/")
  .then(res => res.json())
  .then(data => this.setState ({shoes: data}));
}

  render() {
    return (
    <div>
      <ul>
        {this.state.shoes.map(s => (
          <div>
          <ul>
            <li>
              <h3>Brand Name:</h3>{s.brand_name}
              <h3>Manufacturer:</h3>{s.manufacturer}
              <h3>Shoe Type:</h3>{s.shoe_type}
              <h3>Shoe Color:</h3>{s.color}
              <h3>Shoe Material:</h3>{s.material}
              <h3>Shoe Size:</h3>{s.size},
              <h3>Shoe Fasten Type:</h3>{s.fasten_type}
            </li>
          </ul>

          </div>
        ))}
      </ul>
    </div>
   
      
  );
  }
  
}

export default App;

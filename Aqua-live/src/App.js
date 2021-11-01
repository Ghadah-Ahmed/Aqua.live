import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// components
import Aquarium from './Aquarium';
import Nav from './Nav';
import Shelf from './Shelf';
import Cart from './Cart';

// import fish images
import fish1 from './images/fish1.png'
import fish2 from './images/fish2.png'
import fish3 from './images/fish3.png'
import fish4 from './images/fish4.png'
import fish5 from './images/fish5.png'

function App() {
  const [show, setShow] = React.useState(false)
  const [items, setItems] = React.useState([
    {
      id: 1,
      image: fish1,
      name: 'Koi fish',
      price: '$3',
      stars: [true, true, true, false, false],
      colors: ['red', 'brown']
    },
    {
      id: 2,
      image: fish2,
      name: 'Gold fish',
      price: '$4',
      stars: [true, true, false, false, false],
      colors: ['red', 'yellow']
    },
    {
      id: 3,
      image: fish3,
      name: 'Nemo',
      price: '$2',
      stars: [true, false, false, false, false],
      colors: ['red', 'black']
    },
    {
      id: 4,
      image: fish4,
      name: 'Queen fish',
      price: '$3',
      stars: [true, true, true, true, false],
      colors: ['orange', 'red']
    },
    {
      id: 5,
      image: fish5,
      name: 'River fish',
      price: '$2',
      stars: [true, true, false, false, false],
      colors: ['red', 'black']
    },
  ]);

  const [cartItems, setCartItems] = React.useState([])

  const addCartItem = function(cartItem) {
      setCartItems( [...cartItems, cartItem ]);
    }

  const deleteCartItem = toBeRemoved => {
    setCartItems(cartItems.filter((fish) => {
      return fish.id != toBeRemoved.id
    }));
  };
    React.useEffect(() => {
      let first = false;
      cartItems.map((item)=>{
        if(item.id === 1){
          setShow(true)
          first = true;
          return
        }else{
          first = false;
        }
      })

      if(cartItems.length !== 0 && first == false ){
        alert('Ideally, the fish must released now.., but augh.. SVG!!')
      }

    },[cartItems]);
    

  return (
    <div className="App">
     <Router>
        <Nav cartLength={cartItems.length}/>
        <Aquarium props={show}/> 

        <Switch>
          <Route path="/Shelf"> <Shelf props={items} addCartItem={addCartItem} call='Add to cart'/></Route>
          <Route path="/Cart"> <Cart props={cartItems} addCartItem={deleteCartItem} call='Remove'/></Route>
        </Switch>
    </Router>
    </div>);
}

export default App;

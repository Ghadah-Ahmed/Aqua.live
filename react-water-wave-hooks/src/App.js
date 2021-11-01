import './App.css';
import React from "react";
import Aquarium from './Aquarium';
import Nav from './Nav';
import Shelf from './Shelf';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// nav stuff
import logo from './shortcut-script-app.png'
import textLogo from './logo-light.svg'
import fishIcon from './icons8-aquarium-50.png'
import arrowIcon from './icons8-triangle-arrow-24.png'

// import fish images
import fish1 from './fish1.png'
import fish2 from './fish2.png'
import fish3 from './fish3.png'
import fish4 from './fish4.png'
import fish5 from './fish5.png'

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
        {/* <Nav cartLength={cartItems.length}/> */}
        <div className='nav-div'>
            <div className='logo-div'>
                 <img className='logo' src={logo} alt='jj'/>
                 <img className='text-logo'  src={textLogo}/><span>live</span>
            </div>

            <div className='navigator'>
                <img className='search-icon' alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTc0LjUzMzMzLDE3LjJjLTMxLjU5NjQyLDAgLTU3LjMzMzMzLDI1LjczNjkyIC01Ny4zMzMzMyw1Ny4zMzMzM2MwLDMxLjU5NjQyIDI1LjczNjkyLDU3LjMzMzMzIDU3LjMzMzMzLDU3LjMzMzMzYzEzLjczOTk4LDAgMjYuMzU4MzQsLTQuODc5MTUgMzYuMjQ3NjYsLTEyLjk3ODM5bDM0LjIzMjAzLDM0LjIzMjAzYzEuNDM4MDIsMS40OTc3OCAzLjU3MzQsMi4xMDExMyA1LjU4MjYsMS41NzczNWMyLjAwOTIsLTAuNTIzNzggMy41NzgyNiwtMi4wOTI4NCA0LjEwMjA0LC00LjEwMjA0YzAuNTIzNzgsLTIuMDA5MiAtMC4wNzk1NywtNC4xNDQ1OCAtMS41NzczNSwtNS41ODI2bC0zNC4yMzIwMywtMzQuMjMyMDNjOC4wOTkyNCwtOS44ODkzMiAxMi45NzgzOSwtMjIuNTA3NjggMTIuOTc4MzksLTM2LjI0NzY2YzAsLTMxLjU5NjQyIC0yNS43MzY5MiwtNTcuMzMzMzMgLTU3LjMzMzMzLC01Ny4zMzMzM3pNNzQuNTMzMzMsMjguNjY2NjdjMjUuMzk5MzcsMCA0NS44NjY2NywyMC40NjczIDQ1Ljg2NjY3LDQ1Ljg2NjY3YzAsMjUuMzk5MzcgLTIwLjQ2NzI5LDQ1Ljg2NjY3IC00NS44NjY2Nyw0NS44NjY2N2MtMjUuMzk5MzcsMCAtNDUuODY2NjcsLTIwLjQ2NzI5IC00NS44NjY2NywtNDUuODY2NjdjMCwtMjUuMzk5MzcgMjAuNDY3MywtNDUuODY2NjcgNDUuODY2NjcsLTQ1Ljg2NjY3eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>
                <Link to="/Shelf">
                <div className='burger-menu'>
                    <hr className='one'/><hr className='two'/><hr className='three'/>
                </div>
                 </Link>

                
                <div className='nav-bg'>
                    <div className='account'>ACCOUNT <img style={{marginLeft: "10px"}} width='7px' src={arrowIcon}/> </div>
                    <Link to="/Cart">
                    <img className='fishIcon' src={fishIcon}/><span className='fishIcon-span'>{cartItems.length}</span>
                    </Link>
                </div>
            </div>

        </div>
        <Aquarium props={show}/> 

        <Switch>
          <Route path="/Shelf"> <Shelf props={items} addCartItem={addCartItem} call='Add to cart'/></Route>
          <Route path="/Cart"> <Cart props={cartItems} addCartItem={deleteCartItem} call='Remove'/></Route>
        </Switch>
    </Router>
    </div>);
}

export default App;

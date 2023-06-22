import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";
import Message from "./components/Message/Message"
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";

const App = () => {
const items = ["Seattle", "Atlanta", "Chicago", "Los Angeles", "NYC"];

const [cartItems, setCartItems] = useState(['Xbox', 'Air Force 1', 'Phone'])

  return (
    <>
      <ListGroup items={items} header={'Thieves Cities'}/>
      <Message/>
      <Nav cartItemCount={cartItems.length}/>
      <Cart cartItems={cartItems} clearCart={() => setCartItems([])}/>
    </>
  )
};

export default App;

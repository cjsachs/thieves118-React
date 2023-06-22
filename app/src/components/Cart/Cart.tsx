interface Props {
    cartItems: string[]
    clearCart: () => void
}

const Cart = ({ cartItems, clearCart }: Props) => {
  return (
    <>
        <div>Cart</div>
        <ul>
           {cartItems.map((item, index) => {
            return <li key={index}>{item}</li>
           })} 
        </ul>
        <button onClick={clearCart}>Clear</button>
    </>
  )
}

export default Cart
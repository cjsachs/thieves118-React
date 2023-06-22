interface Props {
    cartItemCount: number
}

const Nav = ({ cartItemCount }: Props) => {
  return (
    <div>Nav {cartItemCount}</div>
  )
}

export default Nav
import { useState } from 'react'
import './ListGroup.css'
import { FaCity } from 'react-icons/fa'

interface Props {
    items: string[],
    header: string
}

const ListGroup = ({items, header}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <h1 style={{color: 'white'}}>{header}<FaCity/></h1>
      {items.length === 1 && <h1>Items</h1>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            onClick={() => {
              setSelectedIndex(index)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;

import ListGroup from "./components/ListGroup";
import Message from "./components/Message"

const App = () => {
const items = ["Seattle", "Atlanta", "Chicago", "Los Angeles", "NYC"];

  return (
    <>
      <ListGroup items={items} header={'Thieves Header'}/>
      <Message/>
    </>
  )
};

export default App;

import Home from "./views/Home/Home";
import SearchChampion from "./views/SearchChampion/SearchChampion";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import { Route, Routes } from "react-router-dom"
import Team from "./views/Team/Team";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/searchchampion" element={<SearchChampion/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </>
  )
};

export default App;

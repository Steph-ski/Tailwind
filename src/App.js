import './App.css';
import SessionDiv from "./SessionDiv";
import Header from "./Header";
import KeynotesContainer from "./KeynotesContainer";
import Nav from "./Nav";

const App = () => {

  return (
      <>
          <Nav/>
          <SessionDiv/>
          <Header/>
          <KeynotesContainer/>
      </>
  );
}

export default App;

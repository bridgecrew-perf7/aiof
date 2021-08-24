import './App.css';
import Cl1 from './components/Cl1/Cl1';
import Cl2 from './components/Cl2/Cl2';
import Carose from './components/Cl3/carose';
// import Cl3 from './components/Cl3/Cl3';
import Navi from './components/Navbar/Navi';

function App() {
  return (
    <div className="App">
    <Navi />
    <Cl1 />
    <Cl2 /><br></br>
    <div className="flex"> <Cl2 /> <Cl2 /></div>
    {/* <Cl3 /> */}
    <Carose />
    </div>
  );
}

export default App;

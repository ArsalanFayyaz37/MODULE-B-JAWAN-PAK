import './App.css'
import '../tailwind.config.js'
import First_Component from './components/First_Component.jsx';
import Second_Component from './components/Second_Component.jsx';
import Third_Component from './components/Third_Component.jsx';
import Fourth_Component from './components/Fourth_Component.jsx';
import Fifth_Component from './components/Fifth_Component.jsx';
import Sixth_component from './components/Sixth_Component.jsx';
import Seventh_Component from './components/Seventh_Component.jsx';
import Eight_Component from './components/Eight_Component.jsx';


const App = () =>{
  return (
    <>
    <nav className='bg-white'>
      <ul className='flex justify-around my-2'>
        <li><a className='text-xl font-semibold' href="#">Logo</a></li>
        <li><button className=' text-white p-1 rounded-md bg-blue-700 hover:bg-blue-900'>SignUp</button></li>
      </ul>
    </nav>
    <First_Component/>
    <Second_Component/>
    <Third_Component/>
    <Fourth_Component/>
    <Fifth_Component/>
    <Sixth_component/>
    <Seventh_Component/>
    <Eight_Component/>
    </>
  )
}

export default App;
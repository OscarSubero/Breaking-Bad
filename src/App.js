import './App.css';
// COMPONENTS
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
// VIEWS
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
// REACT-ROUTER-DOM
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Navigation />
				{/* <Switch> */}
				<Routes>	
					<Route path='/'  element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/detail/:id' element={<CharacterDetail />} />
				</Routes>
				{/* </Switch> */}
			</div>
		</Router>
	);
}

export default App;

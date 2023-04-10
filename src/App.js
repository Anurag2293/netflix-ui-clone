import './normalize.css'
import './App.css'

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Billboard from './components/Billboard';
import Titles from './components/Titles'

function App() {
	return (
		<div className='App'>
			<Billboard />
			<Navigation />
			<Titles />
			<Footer />
		</div>
	);
}

export default App;

import './normalize.css'
import './App.css'

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Billboard from './components/Billboard';

function App() {
	return (
		<div className='App'>
			<Billboard />
			<Navigation />
			<Footer />
		</div>
	);
}

export default App;

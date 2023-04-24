import './css/main.scss';

import Intro from './sections/Intro';
import Experience from './sections/Experience';
import Hobbies from './sections/Hobbies';
import Footer from './sections/Footer';

function App() {
	return (
		<div className="App">
			<Intro/>
			<Experience/>
			<Hobbies/>
			<Footer/>
		</div>
	)
};

export default App;

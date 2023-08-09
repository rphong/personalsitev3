import React from 'react';

import './css/main.scss';

import Intro from './pages/Intro';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Footer from './pages/Footer';

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
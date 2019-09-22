import React, { Fragment, lazy } from 'react';
import '../css/main.css';

const Header = lazy(() => import('./Header'));
const Projects = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));
const Contact = lazy(() => import('./Contact'));
const About = lazy(() => import('./About'));

const Home = () => {
	const components = [
		{ title: 'Header', id: 1 },
		{ title: 'Projects', id: 2 },
		{ title: 'Skills', id: 3 },
		{ title: 'Contact', id: 4 },
	];

	//come up with a non shitty version
	const handleScroll = id => {
		window.scrollTo({
			behavior: 'smooth',
			top: window.innerHeight,
		});
	};

	return (
		<div style={{ width: '100vw' }}>
			<Header />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
};

export default Home;

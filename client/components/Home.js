import React, { Suspense, lazy } from 'react';
import '../css/main.css';

const Header = lazy(() => import('./Header'));
const Projects = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));
const Contact = lazy(() => import('./Contact'));

const Home = () => {
	const components = [
		{ title: 'Header', id: 1 },
		{ title: 'Projects', id: 2 },
		{ title: 'Skills', id: 3 },
		{ title: 'Contact', id: 4 },
	];

	//come up with a non shitty version
	const handleScroll = id => {
		console.log(id);
		window.scrollTo({
			behavior: 'smooth',
			top: window.innerHeight,
		});
	};

	return (
		<>
			<Header handleScroll={handleScroll} id={components[0].id} />
			<Projects id={1} />
			<Skills />
			<Contact />
		</>
	);
};

export default Home;

import React, { Suspense, lazy } from 'react';
import '../css/main.css';

const Header = lazy(() => import('./Header'));
const Projects  = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));
const Contact = lazy(() => import('./Contact'));
const About = lazy(() => import('./About'));



const Home = () => {
	return (
		<div>
			<Header />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
};

export default Home;
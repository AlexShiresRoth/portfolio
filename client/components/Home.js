import React, { Suspense, lazy } from 'react';
import '../css/main.css';

const Header = lazy(() => import('./Header'));
const Projects  = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));
const Contact = lazy(() => import('./Contact'));



const Home = () => {
	return (
		<div>
			<Header />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
};

export default Home;
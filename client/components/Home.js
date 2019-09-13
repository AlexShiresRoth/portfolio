import React, { Suspense, lazy, createRef, useRef, useEffect } from 'react';
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

	const refs = useRef(
		components.reduce((acc, item) => {
			acc[item.id] = createRef();
			return acc;
		})
	);

	const handleScroll = id => {
		refs[id].current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};


	return (
		<>
			<Header key={refs} handleScroll={handleScroll} id={components[0].id} />
			<Projects key={refs} />
			<Skills key={refs} />
			<Contact key={refs} />
		</>
	);
};

export default Home;

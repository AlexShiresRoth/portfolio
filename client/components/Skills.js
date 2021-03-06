import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import languageJavascript from '@iconify/icons-mdi/language-javascript';
import mongodbIcon from '@iconify/icons-simple-icons/mongodb';

import gitAlt from '@iconify/icons-fa-brands/git-alt';
import expressIcon from '@iconify/icons-logos/express';
import sassIcon from '@iconify/icons-fa-brands/sass';
import css3Alt from '@iconify/icons-fa-brands/css3-alt';
import html5Icon from '@iconify/icons-fa-brands/html5';
import nodeJs from '@iconify/icons-fa-brands/node-js';
import reduxIcon from '@iconify/icons-logos/redux';
import reactIcon from '@iconify/icons-fa-brands/react';

import { SkillsMap } from './skills/SkillsMap';
import '../css/main.css';

const Skills = () => {
	const skillsArr = [
		{
			title: 'JavaScript',
			icon: <Icon icon={languageJavascript} />,
			projects: '10',
		},
		{
			title: 'Sass',
			icon: <Icon icon={sassIcon} />,
			projects: '4',
		},
		{
			title: 'CSS',
			icon: <Icon icon={css3Alt} />,
			projects: '10',
		},
		{
			title: 'React',
			icon: <Icon icon={reactIcon} />,
			projects: '3',
		},
		{
			title: 'HTML',
			icon: <Icon icon={html5Icon} />,
			projects: '10',
		},
		{
			title: 'Node.js',
			icon: <Icon icon={nodeJs} />,
			projects: '6',
		},

		{
			title: 'Redux',
			icon: <Icon icon={reduxIcon} />,
			projects: '2',
		},
		{
			title: 'Git',
			icon: <Icon icon={gitAlt} />,
			projects: null,
		},
		{
			title: 'MongoDB',
			icon: <Icon icon={mongodbIcon} />,
			projects: null,
		},
	];

	const [skills, setSkills] = useState([]);

	useEffect(() => {
		setSkills(skillsArr);
	});

	return (
		<section className="section__skills">
			<div className="section__skills--heading">
				<h2>Tech Skills</h2>
			</div>
			<div className="section__skills--container">
				<SkillsMap skills={skills} />
			</div>
		</section>
	);
};

export default Skills;

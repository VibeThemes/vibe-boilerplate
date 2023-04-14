const { createElement, render, useState, useEffect, Fragment, useContext } = wp.element;

import '../_sass/main.scss';

import Boilerplate from './boilerplate';

document.addEventListener("component_loaded", (e) => {
	
	if (e.detail.component === 'vibe_boilerplate') {
		setTimeout(() => {
			render(<Boilerplate field={e.detail} />,
				document.querySelector("#vibe_boilerplate_component")
			);
		}, 200);
	}
}, false);




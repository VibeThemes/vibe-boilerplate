const { useState, useEffect, Fragment, render, useContext } = wp.element;
const { select, dispatch } = wp.data;

const Boilerplate = (props) => {

	const [boilerplateFilters,setBoilerplateFilters] = useState([]);
	const [activeTab,setActiveTab] = useState('');

	const user = select('vibebp').getUser();
	const token = select('vibebp').getToken();

	// VIBEBP Store works across components
	//Push data in VibeBP store : dispatch('vibebp').setData(Key,Value);
	//Get data from VibeBP Store: select('vibebp').getDAta(key); 

	useEffect(() => {

		let boilerplate_filters = select('vibebp').getMenu().filter((item) => { 
			return item.parent === 'vibe_boilerplate' 
		});

		if(boilerplate_filters.length){
			boilerplate_filters.map((filter, index) => {
				if (boilerplate_filters.findIndex((item) => { return item.class.indexOf('current-menu-item') > -1 }) === -1) {
					boilerplate_filters[index].class.push('current-menu-item');
					setActiveTab(boilerplate_filters[index].css_id);
				}
			});
			setBoilerplateFilters(boilerplate_filters);
		}

		

		if(document.querySelector('body').classList.value.indexOf('withsidebar') == -1){
			document.querySelector('body').classList.add('withsidebar');
		}

	}, []);

	return (
		<div className="vibebp_sidebars">
			<div className="vibebp_left_sidebar_wrapper">
				<div className="vibebp_left_sidebar">
					<h3>{window.vibeboilerplate.translations.title}</h3>
					{
						boilerplateFilters.length && boilerplateFilters.map((filter, i) => {
							let classs = filter.class.join(' ') + ' ' + filter.css_id;

							return (
								<a className={classs} onClick={(e) => {

									setActiveTab(filter.css_id);
									let ffilters = [...boilerplateFilters];
									let index = ffilters.findIndex((item) => { return item.class.indexOf('current-menu-item') > -1 });
									ffilters[index].class.splice(ffilters[index].class.indexOf('current-menu-item'), 1);
									ffilters[i].class.push('current-menu-item');
									setBoilerplateFilters(ffilters);
								}}
								>{filter.name}</a>
							)
						})
					}
				</div>
			</div>
			<div className="vibebp_main">
				<div className="vibe_blog_context_wrapper">
					This is some boilerplate {activeTab}
				</div>
			</div>
		</div>
	)
}

export default Boilerplate;
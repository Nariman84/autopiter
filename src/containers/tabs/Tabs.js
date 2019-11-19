import React from 'react';
import './tabs.css';

import { connect } from 'react-redux';

const Tabs = ({ arrTabs, companies }) => {
	const [active, setActive] = React.useState(0);

	const openTabPanel = e => setActive(+e.target.dataset.index);

	return (
		<>
		  	<div className="tabs">
				{ arrTabs.map((tabItem, index) => (
					<div
						data-index={ index }
						key={ index }
						className={`tab ${index === active ? 'active' : ''}`}
						onClick={ openTabPanel }
					>
						{ tabItem.tab } { index === 1
												? <span className="amount-companies"> ({ companies.length })</span>
												: null }
					</div>

					))
				}
			</div>
			<div className="tab-panel">
				{ arrTabs.map((tabItem, index) => {
					if (index === active) {
						return (
							<div key={index}>
								{ tabItem.tabPanel }
							</div>
						);
					}
					return null;
					})
				}
			</div>
		</>
	);
};

export default connect(state => ({
	companies: state.listCompanies,
}))(Tabs);
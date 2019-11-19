import React from 'react';
import './main.css';

import TabPanelNewCompany from '../../containers/tab-panel-new-company/TabPanelNewCompany';
import TabPanelSavedCompanies from '../../containers/tab-panel-saved-companies/TabPanelSavedCompanies';
import Tabs from '../../containers/tabs/Tabs';

class Main extends React.Component {

	render() {
		const arrTabs = [
			{ tab: 'Новая организация', tabPanel: <TabPanelNewCompany /> },
			{ tab: 'Сохраненные организации', tabPanel: <TabPanelSavedCompanies /> }
		];

		return (
			<main className="main">
				<div className="container">
					<h1 className="main-title">
						Мои организации
					</h1>
					<Tabs arrTabs={ arrTabs } />
				</div>
			</main>
		);
	}
}

export default Main;
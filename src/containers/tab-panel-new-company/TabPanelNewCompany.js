import React from 'react';
import './tabPanelNewCompany.css';

import RequestedCompany from '../../component/main/tab-panel-new-company/requested-company/RequestedCompany';
import DefaultContent from '../../component/main/tab-panel-new-company/default-content/DefaultContent';
import DataSuggestion from '../../component/main/tab-panel-new-company/data-suggestion/DataSuggestion';

import { connect } from 'react-redux';
import { addCompany } from '../../actions/actionCompany';

class TabPanelNewCompany extends React.Component {
	constructor() {
		super();
		this.state = {
			requestedCompany: '',
			isSelectCompany: false
		}

		this.getRequestedCompany = this.getRequestedCompany.bind(this);
	}

	//получение запрашиваемой организации и установка ее в state
	getRequestedCompany(value) {
		this.setState({
			requestedCompany: value,
			isSelectCompany: true
		});
	}

	render () {
		const { addCompany } = this.props;
		const { isSelectCompany, requestedCompany } = this.state;
		let tabPanelContent = isSelectCompany
								? <RequestedCompany company={ requestedCompany } addCompany={ addCompany } />
								: <DefaultContent />
		return (
			<div className="tab-panel_new-company">
				<p className="tab-panel__title">
					Организация или ИП
				</p>
				<DataSuggestion getRequestedCompany={ this.getRequestedCompany } />
				<div className="tab-panel_content">
					{ tabPanelContent }
				</div>
			</div>
		);
	}
}

export default connect(state => ({
	companies: state.listCompanies,
}), { addCompany })(TabPanelNewCompany);
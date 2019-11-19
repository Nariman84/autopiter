import React from 'react';
import ItemSavedCompany from '../../component/main/tab-panel-saved-companies/item-saved-company/ItemSavedCompany';

import { connect } from 'react-redux';
import { deleteCompany } from '../../actions/actionCompany';

class TabPanelSavedCompanies extends React.Component {

	render() {
		const { companies, deleteCompany } = this.props;

		return (
			<div className="tab-panel_saved-companies">
				{companies.map(data => (
					<ItemSavedCompany
						key={ Math.random() }
						deleteCompany={ deleteCompany }
						id={ data.inn }
						company={data}
					/>
				))}
			</div>
		);
	}
}

export default connect(state => ({
	companies: state.listCompanies,
}), { deleteCompany })(TabPanelSavedCompanies);
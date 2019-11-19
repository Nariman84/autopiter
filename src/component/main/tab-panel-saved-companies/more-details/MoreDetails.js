import React from 'react';
import '../item-saved-company/itemSavedCompany.css';

const MoreDetails = ({ company }) => {

	return (
		<>
			<div className="saved-companies_detail">
				<span className="saved-companies__title">КПП</span> { company.kpp }
			</div>
			<div className="saved-companies_detail">
				<span className="saved-companies__title">ОГРН</span> { company.ogrn }
			</div>
			<div className="saved-companies_detail">
				<span className="saved-companies__title">Юридический адрес</span> { company.address }
			</div>
			<div className="saved-companies_detail">
				<span className="saved-companies__title">{ company.post }</span> { company.directorName }
			</div>
		</>
	);
}

export default MoreDetails;
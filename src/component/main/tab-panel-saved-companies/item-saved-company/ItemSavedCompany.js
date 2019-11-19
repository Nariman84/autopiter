import React from 'react';
import MoreDetails from '../more-details/MoreDetails';
import './itemSavedCompany.css';

class ItemSavedCompany extends React.Component {

	constructor() {
		super();
		this.state = {
			isVisibleDetail: false
		};

		this.toggleDetails = this.toggleDetails.bind(this);
	}

	toggleDetails() {
		this.setState({
			isVisibleDetail: !this.state.isVisibleDetail
		})
	}

	render() {
		const { isVisibleDetail } = this.state;
		const { deleteCompany, id, company } = this.props;

		return (
			<div className="saved-companies" key={ company.inn }>
				<div className="saved-companies_info">
					<h2 className="saved-companies__title">
						{ company.value }
					</h2>
					<div className="details-of-saved-companies">
						<div className="saved-companies_detail">
							<span className="saved-companies__title">ИНН</span> { company.inn }
						</div>
						{ isVisibleDetail ? <MoreDetails company={ company }/> : null }
					</div>
				</div>
				<div className="control">
					<button className="btn btn-delete" onClick={() => deleteCompany(id)} >
						<img src="img/delete.svg" className="btn-delete__img" alt="remove" />
					</button>
					<button className="btn btn-toggle" onClick={this.toggleDetails.bind(this)} >
						<span className="btn-toggle__title">{ isVisibleDetail ? 'Скрыть подробности' : 'Подробнее' }</span>
						<img src="img/angle.svg" className={`btn-toggle__angle ${isVisibleDetail ? 'angle-rotate' : ''}`} alt="angle" />
					</button>
				</div>
			</div>
		);
	}
}

export default ItemSavedCompany;
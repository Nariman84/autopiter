import React from 'react';
import './requestedCompany.css';

class RequestedCompany extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isSaved: false
		}
		this.saveCompany = this.saveCompany.bind(this);
	}

	// Проверка наличия организации в списке сохраненных организаций после первого рендеринга
	// для установки состояния кнопки 'Сохранить'
	componentDidMount() {
		const { company, companies } = this.props;
		if (!companies.find(item => item.inn === company.data.inn)) {
			this.setState({
				isSaved: false
			});
		} else {
			this.setState({
				isSaved: true
			});
		}
	}

	// отслеживание обновления организации в props
	// если приходит обновления и они отсутствуют
	// в списке сохраненных организаций, кнопка 'Сохранить' активна
	componentDidUpdate(prevProps, _prevState) {
		const { company, companies } = this.props;
		if (company.data.inn !== prevProps.company.data.inn && !companies.find(item => item.inn === company.data.inn)) {
			this.setState({
				isSaved: false
			});
		}
	}

	// сохранение организации в Store
	saveCompany(companyData) {
		const { addCompany } = this.props;
		addCompany(companyData);

		this.setState({
			isSaved: true
		});
	}

	render() {
		const { isSaved } = this.state;
		const { company } = this.props;

		let post, directorName;
		if (company.data.management !== null) {
			post = company.data.management.post.substring(0, 1) + company.data.management.post.substring(1).toLowerCase();
			directorName = company.data.management.name;
		} else {
			post = 'No post';
			directorName = 'No name';
		}

		const companyData = {
			value: company.value,
			address: company.data.address.unrestricted_value,
			directorName: directorName,
			post: post,
			inn: company.data.inn,
			kpp: company.data.kpp,
			ogrn: company.data.ogrn
		};

		let saveInfo;
		if (!isSaved) {
			saveInfo = <button className="btn btn-save" onClick={ () => this.saveCompany(companyData) }>Сохранить</button>
		} else {
			saveInfo = <h3 className="requested-company__saved">
							<img src="img/check.svg" className="saved__check" alt="check" />
							Сохранено
						</h3>
		}

		return (
			<div className="requested-company">
				<h2 className="requested-company__title">
					{ company.value }
				</h2>
				<hr className="horizont-rule" />
				<div className="requested-company_info">
					<div className="contact">
						<div className="contact_info">
							<h4 className="contact_info__title">
								Юридический адрес
							</h4>
							<p className="contact_info__legal-address">
								{ company.data.address.unrestricted_value }
							</p>
						</div>
						<div className="contact_info">
							<h4 className="contact_info__director">
								{ post }
							</h4>
							<p className="contact_info__director-name">
								{ directorName }
							</p>
						</div>
					</div>
					<div className="details-of-company">
						<div className="detail">
							<span className="detail__title">ИНН</span> { company.data.inn }
						</div>
						<div className="detail">
							<span className="detail__title">КПП</span> { company.data.kpp }
						</div>
						<div className="detail">
							<span className="detail__title">ОГРН</span> { company.data.ogrn }
						</div>
					</div>
				</div>
				<div className="save-info">
					{ saveInfo }
				</div>
			</div>
		)
	}
}

export default RequestedCompany;
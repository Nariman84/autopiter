import React from 'react';
import './dataSuggestion.css';

class DataSuggestion extends React.Component {

	constructor() {
		super();
		this.API_KEY = "7b21e04def55755c2e6c99432a54cb56d63bfd29";
		this.state = {
			inputFocused: false,
			query: '',
			suggestions: []
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.fetchData = this.fetchData.bind(this);
		this.onInputFocus = this.onInputFocus.bind(this);
		this.onInputBlur = this.onInputBlur.bind(this);
		this.selectSuggestion = this.selectSuggestion.bind(this);
	}

	componentDidMount() {
		if (this.props.autoload && this.state.query) {
			this.fetchData();
		}
	};

	onInputChange(e) {
		const inputValue = e.target.value;
		this.setState({
			query: inputValue
		}, () => {
			this.fetchData();
		});
	}

	onInputFocus() {
		this.setState({
			inputFocused: true
		});
		if (this.state.suggestions.length === 0) {
			this.fetchData();
		}
	};

	onInputBlur() {
		this.setState({
			inputFocused: false
		});

		if (this.state.suggestions.length === 0) {
			this.fetchData();
		}
	};

	fetchData() {
		fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				"Authorization": `Token ${this.API_KEY}`
			},
			body: JSON.stringify({
				query: this.state.query,
				count: this.props.count ? this.props.count : 5
			})
		})
		.then(res =>
			res.json()
		)
		.then(data => {
			this.setState({
				suggestions: data.suggestions
			})
		})
		.catch(err => {
			console.log(err)
		})
	}

	selectSuggestion(idx) {
		if (this.state.suggestions.length >= idx - 1) {
			this.setState({
				query: this.state.suggestions[idx].value
			},
				() => {
					this.fetchData();
				}
			);
			this.props.getRequestedCompany(this.state.suggestions[idx]);
		}
	}

	render () {
		return (
			<>
				<input
					onChange={ this.onInputChange }
					onFocus={ this.onInputFocus }
					onBlur={ this.onInputBlur }
					className="input-query"
					type="text"
					placeholder="Введите название, ИНН или адрес организации"
				/>
				{ this.state.inputFocused &&
					this.state.suggestions &&
					this.state.suggestions.length > 0 &&
					<div className="suggestions">
						{this.state.suggestions.map((suggestion, index) => (
							<div key={index} className="suggestion" onMouseDown={this.selectSuggestion.bind(this, index)}>
								<h3 className="suggestion_title">
									{ suggestion.value }
								</h3>
								<div className="suggestion_info">
									<span className="suggestion_info__inn">{ suggestion.data.inn }</span>
									<span className="suggestion_info__city">{ suggestion.data.address.city_with_type}</span>
								</div>
							</div>
						))}
					</div>
				}
			</>
		);
	}

}

export default DataSuggestion;
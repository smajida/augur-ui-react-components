import React, { Component, PropTypes } from 'react';
import shouldComponentUpdatePure from '../../../utils/should-component-update-pure';
import Positions from '../../../modules/my-positions/components/my-positions';
import PositionsSummary from '../../../modules/my-positions/components/my-positions-summary';

export default class MarketPositions extends Component {
	static propTypes = {
		positionsSummary: PropTypes.object,
		positionOutcomes: PropTypes.array
	};

	constructor(props) {
		super(props);
		this.shouldComponentUpdate = shouldComponentUpdatePure;
	}

	render() {
		const p = this.props;
		return (
			<section className="market-positions">
				<PositionsSummary {...p.positionsSummary} className="market-section-header" />
				<Positions outcomes={p.positionOutcomes} />
			</section>
		);
	}
}

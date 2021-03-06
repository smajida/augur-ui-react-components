import React, { PropTypes } from 'react';
import ValueDenomination from '../../common/components/value-denomination';
import ValueDate from '../../common/components/value-date';
import classNames from 'classnames';

const Basics = (p) => (
	<section className="basics">
		{!!p.tags && !!p.tags.length &&
			<ul className="tags">
				{p.tags.map((tag, i) => (
					<li key={i} className={classNames('tag', { link: !!tag.name })} onClick={!!tag.onClick && tag.onClick}>{!!tag.name ? tag.name : tag}</li>
				))}
			</ul>
		}

		<span className="description" title={p.description}>{p.description}</span>

		<ul className="properties">
			{!!p.endDate &&
				<li className="property end-date" title={`${p.endDateLabel}: ${p.endDate.full}`}>
					<span className="property-label">{p.endDateLabel}</span>
					<ValueDate className="property-value" {...p.endDate} />
				</li>
			}
			<li className="property fee" title={`${p.makerFeePercent.full} discounted fee for placing bids or asks on the books`}>
				<span className="property-label">maker fee</span>
				<ValueDenomination className="property-value" {...p.makerFeePercent} />
			</li>
			<li className="property fee" title={`${p.takerFeePercent.full} fee for taking bids or asks from the books`}>
				<span className="property-label">taker fee</span>
				<ValueDenomination className="property-value" {...p.takerFeePercent} />
			</li>
			<li className="property volume" title={`${p.volume.rounded} total ${p.volume.denomination} traded`}>
				<span className="property-label">volume</span>
				<ValueDenomination className="property-value" {...p.volume} formatted={p.volume.rounded} />
			</li>
		</ul>
	</section>
);

Basics.propTypes = {
	description: PropTypes.string,
	endDate: PropTypes.object,
	makerFeePercent: PropTypes.object,
	takerFeePercent: PropTypes.object,
	volume: PropTypes.object,
	tags: PropTypes.array
};

export default Basics;

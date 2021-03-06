import React, { PropTypes } from 'react';
import OrderBook from './order-book';

const BidsAsks = (p) => (
	<div className="bids-asks">
		{
			p.market.outcomes.map(outcome =>
				(
				<OrderBook
					key={`order-book-${outcome.id}`}
					outcome={outcome}
					bids={outcome.orderBook.bids}
					asks={outcome.orderBook.asks}
				/>
				)
			)
		}
	</div>
);

BidsAsks.propTypes = {
	market: PropTypes.object
};

export default BidsAsks;

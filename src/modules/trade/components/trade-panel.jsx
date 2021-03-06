import React from 'react';
import TradeBuilder from '../../../modules/trade/components/trade-builder';
import TradeSummary from '../../../modules/trade/components/trade-summary';

const TradePanel = (p) => (
	<div className="trade-panel" onClick={() => p.selectedOutcome.updateSelectedOutcome(null)}>
		<TradeBuilder
			outcomes={p.outcomes}
			marketType={p.marketType}
			userOpenOrdersSummary={p.userOpenOrdersSummary}
			selectedOutcome={p.selectedOutcome}
		/>

		{!!p.tradeSummary && !!p.tradeSummary.tradeOrders && !!p.tradeSummary.tradeOrders.length &&
			<TradeSummary tradeSummary={p.tradeSummary} />
		}

		<div className="place-trade-container">
			<button
				className="button place-trade"
				disabled={!(!!p.tradeSummary && !!p.tradeSummary.tradeOrders && !!p.tradeSummary.tradeOrders.length) || p.isTradeCommitLocked}
				onClick={event => {
					event.stopPropagation();
					p.onSubmitPlaceTrade();
				}}
			>
				Place Trade
			</button>
		</div>
	</div>
);

TradePanel.propTypes = {
	isTradeCommitLocked: React.PropTypes.bool,
	outcomes: React.PropTypes.array,
	marketType: React.PropTypes.string,
	selectedOutcome: React.PropTypes.object,
	tradeSummary: React.PropTypes.object,
	userOpenOrdersSummary: React.PropTypes.object,
	onSubmitPlaceTrade: React.PropTypes.func
};

export default TradePanel;

import { assert } from 'chai';
import assertFormattedNumber from '../../test/assertions/common/formatted-number';
import assertFormattedDate from '../../test/assertions/common/formatted-date';

export default function (myMarkets){
	describe(`augur-ui-react-components myMarkets' shape`, () => {
		assert.isDefined(myMarkets);
		assert.isArray(myMarkets);

		myMarkets.forEach(market => { assertMyMarkets(market) });
	});
};

export function assertMyMarkets(market){
	describe(`market's shape`, () => {
		it('id', () => {
			assert.isDefined(market.id);
			assert.isString(market.id);
		});

		it('description', () => {
			assert.isDefined(market.description);
			assert.isString(market.description);
		});

		it('endDate', () => {
			assert.isDefined(market.endDate);

			assertFormattedDate(market.endDate, 'loginAccountMarkets.endDate');
		});

		it('fees', () => {
			assert.isDefined(market.fees);

			assertFormattedNumber(market.fees, 'loginAccountMarkets.fees');
		});

		it('volume', () => {
			assert.isDefined(market.volume);

			assertFormattedNumber(market.volume, 'loginAccountMarkets.volume');
		});

		it('numberOfTrades', () => {
			assert.isDefined(market.numberOfTrades);

			assertFormattedNumber(market.numberOfTrades, 'loginAccountMarkets.numberOfTrades');
		});

		it('averageTradeSize', () => {
			assert.isDefined(market.averageTradeSize);

			assertFormattedNumber(market.averageTradeSize, 'loginAccountMarkets.averageTradeSize');
		});

		it('openVolume', () => {
			assert.isDefined(market.openVolume);

			assertFormattedNumber(market.openVolume, 'loginAccountMarkets.openVolume');
		});
	});
};

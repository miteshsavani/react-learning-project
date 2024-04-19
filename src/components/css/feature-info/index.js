import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import s from './style.less';
import cx from 'classnames';
import { Chart } from '../chart';

export function FeatureInfo() {
	return (
		<>
			<div className={s.featured}>
				<div className={s.featuredItem}>
					<span className={s.featuredTitle}>Revenue</span>
					<div className={s.featuredMoneyContainer}>
						<span className={s.featuredMoney}>2.23rs</span>
						<span className={s.featuredMoneyRate}>
							-11.2{' '}
							<ArrowDownward className={cx(s.featureIcon, s.negativeIcon)} />
						</span>
					</div>
					<span className={s.featuredSub}>Compare to last month</span>
				</div>

				<div className={s.featuredItem}>
					<span className={s.featuredTitle}>Sales</span>
					<div className={s.featuredMoneyContainer}>
						<span className={s.featuredMoney}>$2.23rs</span>
						<span className={s.featuredMoneyRate}>
							-1.6{' '}
							<ArrowDownward className={cx(s.featureIcon, s.negativeIcon)} />
						</span>
					</div>
					<span className={s.featuredSub}>Compare to last month</span>
				</div>

				<div className={s.featuredItem}>
					<span className={s.featuredTitle}>Cost</span>
					<div className={s.featuredMoneyContainer}>
						<span className={s.featuredMoney}>2.23rs</span>
						<span className={s.featuredMoneyRate}>
							+2.4 <ArrowUpward className={cx(s.featureIcon, s.positiveIcon)} />
						</span>
					</div>
					<span className={s.featuredSub}>Compare to last month</span>
				</div>
			</div>

			<Chart />
		</>
	);
}

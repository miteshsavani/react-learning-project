import s from './style.less';
import { ThumbUp } from '@material-ui/icons';
import cx from 'classnames';

export function Cards() {
	const cards = new Array(15);
	cards.fill(22);
	return (
		<div className={s.cards}>
			{cards.map((card, index) =>  (
					<div className={s.card} key={index}>
						<div className={cx(s.imgBlock, s.linearBackground)}>
							<img src={`https://picsum.photos/400/300?random=${index}`} />
						</div>
						<div className={s.cardContent}>
							<p>
								asdfsdfsdfd sdfdsa fdas ads fdas fasd fasd fsdaf sfas fsadfs{' '}
							</p>
							<p>fasdf sfsf jsakfjsakfsfas fasdfsadlkfsadfklsad sfsda</p>
						</div>
						<div className={s.cardInfo}>
							<div className={s.iconBlock}>
								<ThumbUp className={s.icon} />
								310
							</div>
							<div className={s.link}>
								<a href="#">View Article</a>
							</div>
						</div>
					</div>
				)
			)}
		</div>
	);
}

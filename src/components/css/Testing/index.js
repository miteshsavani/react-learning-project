import s from './style.less';

export function Testing() {
	const count = new Array(40);
	count.fill(1);
	return (
		<div className={s.container}>
			{count.map((c, i) => (
				<div key={i} className={s.image}>
					<img src={`https://picsum.photos/100/100?random=${i}`} />
				</div>
			))}
		</div>
	);
}

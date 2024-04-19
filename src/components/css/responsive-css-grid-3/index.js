import s from './style.less';

// Youtube link: https://www.youtube.com/watch?v=68O6eOGAGqA&ab_channel=AngelaDelise
export function ResponsiveCSSGrid3() {
	return <div className={s.container}>
        <div className={s.navbar}>Navbar</div>
        <div className={s.left} contentEditable>Left Sidebar</div>
        <div className={s.main}><img
							src={`https://picsum.photos/400?random=2`}
						/></div>

        <div className={s.right} contentEditable>Right Sidebar</div>
        <div className={s.footer}>Footer</div>
    </div>;
}

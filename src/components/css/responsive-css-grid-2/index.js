import s from './style.less';
import cx from 'classnames';

// Youtube link: https://www.youtube.com/watch?v=68O6eOGAGqA&ab_channel=AngelaDelise
export function ResponsiveCSSGrid2() {
	return <div className={s.container}>
        <div className={s.navbar}>Navbar</div>
        <div className={s.sidebar}>Sidebar</div>
        <div className={s.main}>Main</div>

        <div className={cx(s.content, s.content1)}>Content 1</div>
        <div className={cx(s.content, s.content2)}>Content 2</div>
        <div className={cx(s.content, s.content3)}>Content 3</div>
        <div className={s.footer}>Footer</div>
    </div>;
}

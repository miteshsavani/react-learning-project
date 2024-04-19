import s from './style.less';

export function ResponsiveCSSGrid1() {
	return <div className={s.container}>
        <div className={s.navbar}>Navbar</div>
        <div className={s.sidebar}>Sidebar</div>
        <div className={s.main}>Main</div>

        <div className={s.content}>Content 1</div>
        <div className={s.content}>Content 2</div>
        <div className={s.content}>Content 3</div>
        <div className={s.footer}>Footer</div>
    </div>;
}

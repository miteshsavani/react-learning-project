import s from './style.less';

export function CSSLayout() {

    return(
        <div className={s.container}>
            <div className={s.header}>
                Header
            </div>
            <div className={s.contentLarge}>Content #1</div>
            <div className={s.contentLarge}>Content #2</div>
            <div className={s.contentSmall}>Small #1</div>
            <div className={s.contentSmall}>Small #2</div>
            <div className={s.footer}>Footer</div>
        </div>
    );

}
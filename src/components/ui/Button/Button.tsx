import { FC, MouseEvent, MouseEventHandler } from 'react';
import Link from 'next/link';
import anchorClick from '@helpers/anchorClick';
import styles from './Button.module.scss';

type Props = {
    type: 'button' | 'submit' | 'anchor' | 'link',
    variety?: string,
    text: string,
    href?: string,
    customClass?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean,
    dataAos?: string
}

const Button: FC<Props> = ({type, text, href = '#', variety = '', customClass = '', handleClick, disabled, dataAos = ''}) => {
    const style = `${styles.default} ${styles[variety]} ${customClass}`;

    return (
        <div className={styles.wrapper}>
            {type === 'button' &&
            <button type={type} className={style} onClick={handleClick} aria-label={text} data-aos={dataAos}>
                {text}
            </button>}

            {type === 'submit' &&
            <button type={type} className={style} onClick={handleClick} aria-label={text} data-aos={dataAos} disabled={!disabled ? false : disabled}>
                {text}
            </button>}

            {type === 'anchor' &&
            <a href={href} className={style} onClick={anchorClick} data-aos={dataAos}>
                {text}
            </a>}
            
            {type === 'link' &&
            <Link href={href ?? ''} legacyBehavior>
                <a className={style} data-aos={dataAos}>{text}</a>
            </Link>}
        </div>
    );
}

export default Button;
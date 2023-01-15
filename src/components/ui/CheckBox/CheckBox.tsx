import { FC, useEffect } from 'react';
import { useAppDispatch } from '@store/hook';

import ICheckBoxState from '@shared/interfaces/States/ICheckBoxState';

import CheckBoxIcon from './CheckBoxIcon';

import styles from './CheckBox.module.scss';

type Props = {
    value: string;
    stateValue: ICheckBoxState;
    setStateValue: any;
    isDefault?: boolean;
}

const CheckBox: FC<Props> = ({value, stateValue, setStateValue, isDefault = false}) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setStateValue({...stateValue, value}));
    }

    useEffect(() => {
        if(isDefault) dispatch(setStateValue({...stateValue, value}));
    }, [value]);

    return (
        <div className={`${styles.wrapper} ${value === stateValue.value ? styles.active : ''}`} onClick={handleClick}>
            <CheckBoxIcon />
            <p className={styles.value}>{value}</p>
        </div>
    );
}
 
export default CheckBox;
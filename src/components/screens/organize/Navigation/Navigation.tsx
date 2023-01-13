import { FC, LegacyRef } from 'react';

import IStep from '@shared/interfaces/Data/Organize/IStep';

import InfoIcon from '../Icons/InfoIcon';
import PeopleIcon from '../Icons/PeopleIcon';
import DateIcon from '../Icons/DateIcon';

import styles from './Navigation.module.scss';

type Props = {
    currentStep: number;
    steps: {
        firstStep: IStep;
        secondStep: IStep;
        thirdStep: IStep;
    };
    innerRef: LegacyRef<HTMLUListElement>;
}

const Navigation: FC<Props> = ({currentStep, steps, innerRef}) => {
    const {firstStep, secondStep, thirdStep} = steps;

    return (
        <ul className={styles.list} ref={innerRef}>
            <li className={`${styles.item} ${currentStep === 1 ? styles.itemActive : ''}`}>
                <InfoIcon />

                <div className={styles.content}>
                    <h3 className={styles.title}>{firstStep.title}</h3>
                    <p className={styles.description}>{firstStep.description}</p>
                </div>
            </li>

            <li className={`${styles.item} ${currentStep === 2 ? styles.itemActive : ''}`}>
                <PeopleIcon />

                <div className={styles.content}>
                    <h3 className={styles.title}>{secondStep.title}</h3>
                    <p className={styles.description}>{secondStep.description}</p>
                </div>
            </li>

            <li className={`${styles.item} ${currentStep === 3 ? styles.itemActive : ''}`}>
                <DateIcon />

                <div className={styles.content}>
                    <h3 className={styles.title}>{thirdStep.title}</h3>
                    <p className={styles.description}>{thirdStep.description}</p>
                </div>
            </li>
        </ul>
    );
}
 
export default Navigation;
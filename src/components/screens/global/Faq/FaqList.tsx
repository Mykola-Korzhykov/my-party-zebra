import { FC, useState } from 'react';

import IFaqItem from '@shared/interfaces/Data/Items/IFaqItem';
import FaqItem from './FaqItem';

import styles from './Faq.module.scss';

type Props = {
    list: IFaqItem[];
}

const FaqList: FC<Props> = ({list}) => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    
    const handleToggle = (index: number) => {
        if(activeIndex === index) {
            return setActiveIndex(-1);
        }

        setActiveIndex(index);
    }

    return (
        <ul className={styles.list}>
            {list.map(({question, answer}, index) => (
                <FaqItem question={question} 
                         answer={answer} 
                         active={activeIndex === index} 
                         onToggle={(() => handleToggle(index))}
                         key={index} />
            ))}
        </ul>
    );
}
 
export default FaqList;
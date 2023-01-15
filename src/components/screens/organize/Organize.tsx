import { FC, useRef, useState, LegacyRef, useEffect } from 'react';
import { useAppSelector } from '@store/hook';
import Router from 'next/router';

import Swal from 'sweetalert2';

import validateFields from '@helpers/tg-request/validateFields';
import createMessage from '@helpers/tg-request/createMessage';
import sendMessage from '@helpers/tg-request/sendMessage';

import IOrganizeContent from '@shared/interfaces/Data/Organize/IOrganizeContent';
import IProgramsItem from '@shared/interfaces/Data/Programs/IProgramsItem';
import ISelectItem from '@shared/interfaces/Select/ISelectItem';

import Navigation from './Navigation/Navigation';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';
import Button from '@components/ui/Button/Button';

import styles from './Organize.module.scss';
import getPropertyValues from '@helpers/getPropertyValues';

type Props = {
    programs: IProgramsItem[];
    content: IOrganizeContent;
}

type ClicksType = {
    prev: boolean,
    next: boolean,
    delay: number
}

const Organize: FC<Props> = ({programs, content}) => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const [clicks, setClicks] = useState<ClicksType>({
        prev: true, 
        next: true,
        delay: 300
    });

    const {firstStep, secondStep, thirdStep} = content;
    const steps = {firstStep, secondStep, thirdStep};

    const themeInput = useAppSelector(state => state.form.themeInput); // 1 step
    const venueInput = useAppSelector(state => state.form.venueInput); // 1 step
    const budgetSelect = useAppSelector(state => state.form.budgetSelect); // 1 step
    const otherVendors = useAppSelector(state => state.form.otherVendors); // 1 step
    const serviceSelect = useAppSelector(state => state.form.serviceSelect); // 2 step
    const programsSelect = useAppSelector(state => state.form.programsSelect); // 2 step
    const nameInput = useAppSelector(state => state.form.nameInput); // 3 step
    const phoneInput = useAppSelector(state => state.form.phoneInput); // 3 step
    const emailInput = useAppSelector(state => state.form.emailInput); // 3 step
    const childrenSelect = useAppSelector(state => state.form.childrenSelect); // 3 step
    const dateInput = useAppSelector(state => state.form.dateInput); // 3 step
    const timeInput = useAppSelector(state => state.form.timeInput); // 3 step
    const specialInput = useAppSelector(state => state.form.specialInput); // 3 step
    const placeParty = useAppSelector(state => state.form.placeParty); // 3 step
    const otherDecors = useAppSelector(state => state.form.otherDecors); // 3 step

    let navRef: HTMLUListElement = null;

    const previousStep = () => {
        if(!clicks.prev) return;

        if(currentStep !== 1) {
            setCurrentStep(currentStep - 1);
            navRef.scrollBy({left: -330, behavior : 'smooth'});
        }

        if(window.screen.width < 993) {
            setClicks((prev: ClicksType) => ({...prev, prev: false}));
            setTimeout(() => {
                setClicks((prev: ClicksType) => ({...prev, prev: true}));
            }, clicks.delay);
        }
    }

    const nextStep = () => {
        if(!clicks.next) return;
        
        if(currentStep !== 3) {
            if(currentStep === 1) {
                const validateResult = validateFields({themeInput, venueInput, budgetSelect});
                if(!validateResult) return;
            }

            if(currentStep === 2) {
                let fields: any = {serviceSelect};
                if(serviceSelect.value === content.serviceSelect.list[0].value) {
                    fields['programsSelect'] = {...programsSelect, id: 'programs-select', value: JSON.parse(localStorage.getItem('selectedPrograms'))};
                }

                const validateResult = validateFields(fields);
                if(!validateResult) return;
            }

            setCurrentStep(currentStep + 1);
            navRef.scrollBy({left: 330, behavior : 'smooth'});
        }

        if(window.screen.width < 993) {
            setClicks((prev: ClicksType) => ({...prev, next: false}));
            setTimeout(() => {
                setClicks((prev: ClicksType) => ({...prev, next: true}));
            }, clicks.delay);
        }
    }

    const finish = () => {
        const validateResult = validateFields({nameInput, phoneInput, emailInput, childrenSelect, dateInput, timeInput});
        if(!validateResult) return;

        const programsList = JSON.parse(localStorage.getItem('selectedPrograms'));
        const message = createMessage({themeInput, venueInput, budgetSelect, otherVendors, serviceSelect, 
                                       programsSelect: {...programsSelect, value: programsList ? getPropertyValues(programsList, 'title', 'animatorsCount') : 'Empty'}, 
                                       nameInput, phoneInput, emailInput, childrenSelect, dateInput, timeInput, 
                                       specialInput: {...specialInput, value: specialInput.value ? specialInput.value : 'Empty'}, 
                                       placeParty, otherDecors});

        sendMessage(message);

        document.body.classList.add('lock-scroll');
        Swal.fire({
            title: `${content.modalTitle} ${nameInput.value}!`,
            text: content.modalDescription,
            confirmButtonText: content.modalButtonText,
            icon: 'success'
        }).then(() => {
            document.body.classList.remove('lock-scroll');

            localStorage.removeItem('selectedPrograms');
            localStorage.removeItem('isDecor');
            localStorage.removeItem('isSeasonal');

            Router.push({pathname: '/'});
        });
    }

    return (
        <section className={styles.section} id="organize" data-aos="fade-up">
            <div className="container">
                <Navigation currentStep={currentStep} steps={steps} innerRef={(el: HTMLUListElement) => navRef = el} />

                <div className={styles.steps}>
                    <FirstStep isActive={currentStep === 1} 
                               themeInput={content.themeInput} venueInput={content.venueInput} 
                               budgetSelect={content.budgetSelect} otherVendors={content.otherVendors} />

                    <SecondStep isActive={currentStep === 2} 
                                serviceSelect={content.serviceSelect} 
                                programs={programs} programsSelect={content.programsSelect} animatorsMessage={content.animatorsMessage} />
                                
                    <ThirdStep isActive={currentStep === 3} nameInput={content.nameInput} phoneInput={content.phoneInput}
                               emailInput={content.emailInput} childrenSelect={content.childrenSelect}
                               dateInput={content.dateInput} timeInput={content.timeInput} specialInput={content.specialInput}
                               placeParty={content.placeParty} otherDecors={content.otherDecors} />
                </div>

                <div className={styles.buttons}>
                    {(currentStep === 2 || currentStep === 3) && 
                    <Button type="button" variety="themeGhost" text={content.backButton.text} handleClick={previousStep} customClass={styles.back} />}
                    
                    {(currentStep === 1 || currentStep === 2) &&
                    <Button type="button" variety="theme" text={content.nextButton.text} handleClick={nextStep} customClass={styles.next} />} 

                    {(currentStep === 3) &&
                    <Button type="button" variety="theme" text={content.finishButton.text} handleClick={finish} customClass={styles.next} />} 
                </div>
            </div>
        </section>
    );
}
 
export default Organize;
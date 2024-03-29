import { FC, ReactNode, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch } from '@store/hook';
import { hideLoader } from '@store/slices/loaderSlice';

import IMeta from '@shared/interfaces/Data/IMeta';
import ILayout from '@shared/interfaces/Data/Layout/ILayout';
import ILocale from '@shared/interfaces/ILocale';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Loader from '@components/ui/Loader/Loader';

type Props = {
    data: {
        meta: IMeta,
        layout: ILayout,
        locales: ILocale[]
    },
    children: ReactNode
}

const Layout: FC<Props> = ({data, children}) => {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [headerHeight, setHeaderHeight] = useState<number>(0);

    const headerRef = useRef<HTMLElement | null>(null);

    const dispatch = useAppDispatch();
    const router = useRouter();

    const {pathname, locale} = router;
    const {siteName} = data.meta;
    const {menu} = data.layout.header;

    useEffect(() => {
        dispatch(hideLoader());

        window.addEventListener('scroll', () => {
            setHeaderHeight(headerRef.current?.offsetHeight);
            
            if(window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        });
    }, [dispatch]);

    return (
        <div className="next-page" data-path={pathname}>
            <Loader />
            <Header siteName={siteName} menu={menu} locales={data.locales} buttonText={data.layout.header.buttonText} isSticky={isSticky} headerRef={headerRef} />
            <main style={{paddingTop: isSticky ? headerHeight : 0}}>
                {children}
            </main>
            <Footer siteName={siteName} menu={menu} services={data.layout.services} data={data.layout.footer} />
        </div>
    );
}
 
export default Layout;
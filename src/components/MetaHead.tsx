import { FC } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { IUpload } from '@shared/interfaces/IUpload';

import themeColors from '@data/themeColors';

type Props = {
    pageTitle: string;
    title: string;
    description: string;
    themeColor: string;
    preview: IUpload;
}

const MetaHead: FC<Props> = ({pageTitle, title, description, themeColor, preview}) => {
    const {url, alt} = preview;
    const themeColorHEX = themeColors[themeColor];

    return (
        <NextSeo title={pageTitle} 
                 description={description} 
                 themeColor={themeColorHEX}
                 openGraph={{title, description, images: [{url, alt}]}} />
    );
}

export default MetaHead;
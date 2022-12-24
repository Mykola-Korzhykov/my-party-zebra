import { FC } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import IUpload from '@shared/interfaces/IUpload';

type Props = {
    pageTitle: string;
    title: string;
    description: string;
    preview: IUpload
}

const MetaHead: FC<Props> = ({pageTitle, title, description, preview}) => {
    const {url, alt} = preview;

    return (
        <NextSeo title={pageTitle} 
                 description={description} 
                 openGraph={{title, description, images: [{url, alt}]}} />
    );
}

export default MetaHead;
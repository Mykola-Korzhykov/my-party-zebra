import { useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import UploadDTO from '@shared/dto/uploadDTO';

import MetaHead from '@components/MetaHead';
import Content404 from '@components/screens/Custom404/Content404';
import Button from '@components/ui/Button/Button';

import themeColors from '@data/themeColors';

import Breadcrumbs from '@components/ui/Breadcrumbs/Breadcrumbs';

import api from '@shared/http';

export const getStaticProps: GetStaticProps = async ({locale}) => {
    const pageContent = await api.get(`/page-404?locale=${locale}`);
    return {props: {content: pageContent}};
  }

const Custom404: NextPage<any> = ({content}) => {
    const {meta, title, description, button} = content;
    const {pageTitle, previousPageTitle, theme, preview} = meta;

    const themeColor = theme.color;
    const themeColorHEX = themeColors[themeColor];
  
    useEffect(() => {
      document.body.style.setProperty('--theme-color', themeColorHEX);
    });

    return (
        <>
            <MetaHead pageTitle={pageTitle} title={title} description={description} themeColor={themeColor} preview={new UploadDTO(preview)} />
            <Breadcrumbs previousPageTitle={previousPageTitle} pageTitle={pageTitle} />
            <Content404 title={title} description={description} button={button} />
        </>
    );
}
 
export default Custom404;
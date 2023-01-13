import { useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import UploadDTO from '@shared/dto/uploadDTO';

import MetaHead from '@components/MetaHead';
import Breadcrumbs from '@components/ui/Breadcrumbs/Breadcrumbs';
import Organize from '@components/screens/organize/Organize';

import themeColors from '@data/themeColors';

import api from '@shared/http';

export const getStaticProps: GetStaticProps = async ({locale}) => {
    const pageContent = await api.get(`/page-organize?locale=${locale}`);
    const programs = await api.get(`/programs?locale=${locale}`);

    return {props: {content: pageContent, programs}};
  }

const OrganizePage: NextPage<any> = ({content, programs}) => {
    const {meta, title, description} = content;
    const {pageTitle, previousPageTitle, theme, preview} = meta;

    const themeColor = theme.color;
    const themeColorHEX = themeColors[themeColor];
  
    useEffect(() => {
      document.body.style.setProperty('--theme-color', themeColorHEX);

      const allInputs = document.querySelectorAll('input');
      const allDateInputs = document.querySelectorAll('input[type="date"]');
      const allTimeInputs = document.querySelectorAll('input[type="time"]');
  
      allInputs.forEach(input => {
        input.addEventListener('input', () => {
          input.classList.remove('error');
        });
      });
  
      allDateInputs.forEach(input => input.addEventListener('focus', (e: any) => e.target.showPicker()));
      allTimeInputs.forEach(input => input.addEventListener('focus', (e: any) => e.target.showPicker()));
    });

    return (
        <>
            <MetaHead pageTitle={pageTitle} title={title} description={description} themeColor={themeColor} preview={new UploadDTO(preview)} />
            <Breadcrumbs previousPageTitle={previousPageTitle} pageTitle={pageTitle} />
            <Organize programs={programs.list} content={content} />
        </>
    );
}
 
export default OrganizePage;
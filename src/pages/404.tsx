import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import MetaHead from '@components/MetaHead';
import Button from '@components/ui/Button/Button';

import api from '@shared/http';
import UploadDTO from '@shared/dto/uploadDTO';
import Content404 from '@components/screens/Custom404/Content404';

export const getStaticProps: GetStaticProps = async ({locale}) => {
    const pageContent = await api.get(`/page-404?locale=${locale}`);
    return {props: {content: pageContent}};
  }

const Custom404: NextPage<any> = ({content}) => {
    const {meta, title, description, button} = content;
    const {pageTitle, preview} = meta;

    return (
        <>
            <MetaHead pageTitle={pageTitle} title={title} description={description} preview={new UploadDTO(preview)} />
            <Content404 title={title} description={description} button={button} />
        </>
    );
}
 
export default Custom404;
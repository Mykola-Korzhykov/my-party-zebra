import { useEffect } from "react";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";

import MetaHead from "@components/MetaHead";
import api from "@shared/http";
import UploadDTO from "@shared/dto/uploadDTO";
import { metaGallery } from "@components/screens/galleryList/gallery.data.js";

import themeColors from "@data/themeColors";

import Breadcrumbs from "@components/ui/Breadcrumbs/Breadcrumbs";
import getFullTitle from "@helpers/getFullTitle";
import GallerySection from "@components/screens/galleryList/GallerySection";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const pageContent = await api.get(`/page-program?locale=${locale}`);

  return {
    props: { content: pageContent },
  };
};

const Gallery: NextPage<any> = ({ content }) => {
  const { meta, screen } = content;
  const { title, colorTitle, colorTitlePlace, description } = screen;

  const fullTitle = getFullTitle(title, colorTitle, colorTitlePlace);

  const themeColor = meta.theme.color;
  const themeColorHEX = themeColors[themeColor];

  useEffect(() => {
    document.body.style.setProperty("--theme-color", themeColorHEX);
  });

  return (
    <>
      <MetaHead
        pageTitle={meta.pageTitle}
        title={fullTitle}
        description={description}
        themeColor={themeColorHEX}
        preview={new UploadDTO(meta.preview)}
      />

      <Breadcrumbs
        pageTitle={meta.pageTitle}
        previousPageTitle={meta.previousPageTitle}
      />
      <GallerySection data={metaGallery.data} />
    </>
  );
};

export default Gallery;

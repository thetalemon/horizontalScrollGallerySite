import { GALLERY_DATA, GalleryData } from '../../data/data';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'node:querystring';

export interface Item {
  id: number;
}

interface Props {
  gallery: GalleryData;
}

// 1. Paramsの型を定義し、ParsedUrlQueryをextendsする
interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const id = Number(params!.id);
  const gallery = GALLERY_DATA.filter((data) => data.id === id)[0];

  return {
    props: { gallery },
  };
};

export const getStaticPaths = async () => {
  const SPECIFIC_PAGE_TARGET_LIST = GALLERY_DATA.filter(
    (data) => data.link === undefined
  );

  const paths = SPECIFIC_PAGE_TARGET_LIST.map((data) => ({
    params: { id: data.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

const User: React.FC<Props> = ({ gallery }) => {
  return (
    <>
      <div className="wrapper">{gallery.title}</div>
      <div className="wrapper">{gallery.description}</div>
      <div className="wrapper">{gallery.text}</div>
    </>
  );
};

export default User;

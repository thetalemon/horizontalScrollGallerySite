import { GALLERY_DATA, GalleryData } from '../../data/data';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'node:querystring';
import Image from 'next/image';
import styles from '../../styles/Specific.module.scss';
import Footer from '../modules/footer';

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
    <div className={styles.all}>
      <div className={styles.backToGallry}>
        <a href="/">back to gallery</a>
      </div>
      <div className={styles.imageContainer} max-Width={250}>
        <Image
          src={gallery.img ?? '/art/sample/sample.png'}
          alt="art"
          width={250}
          height={180}
        />
      </div>
      <div>
        <h2 className={styles.titleText}>{gallery.title}</h2>
        <p className={styles.description}>{gallery.description}</p>
        <div className={styles.mainText}>{gallery.text}</div>
      </div>
      <Footer />
    </div>
  );
};

export default User;

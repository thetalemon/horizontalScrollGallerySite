import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { GALLERY_DATA } from '../data/gallely';
import { TOP_DATA } from '../data/top';
import Image from 'next/image';
import Footer from './modules/footer';
const Home: NextPage = () => {
  return (
    <div className={styles.all}>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="this is my gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.topCard}`}>
            <h2>{TOP_DATA.title}</h2>
            <p>{TOP_DATA.description}</p>
          </div>
          {GALLERY_DATA.map((data) => {
            return (
              <a
                key={data.id}
                href={data.link ?? `/art/${data.id}`}
                className={`${styles.card} ${styles.linkCard}`}
              >
                <Image
                  src={data.img ?? '/art/sample/sample.png'}
                  alt="art"
                  width={250}
                  height={180}
                />
                <h2 className={styles.titleText}>{data.title}</h2>
                <p className={styles.description}>{data.description}</p>
              </a>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

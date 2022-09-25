import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { GALLERY_DATA } from '../data/data';
import Image from 'next/image';

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
            <h2>title</h2>
            <p>description</p>
          </div>
          {GALLERY_DATA.map((data) => {
            return (
              <a
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

      <footer className={styles.footer}>
        <a
          href="https://manasas.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ©︎ まなさす
        </a>
      </footer>
    </div>
  );
};

export default Home;

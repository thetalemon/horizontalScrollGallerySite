import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { GALLERY_DATA } from '../data/data';
import Image from 'next/image';

const Home: NextPage = () => {
  console.log(GALLERY_DATA);
  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="this is my gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>title</h2>
            <p>description</p>
          </div>
          {GALLERY_DATA.map((data) => {
            return (
              <a href={data.link ?? `/art/${data.id}`} className={styles.card}>
                <Image
                  src={data.img ?? '/art/sample/sample.png'}
                  alt="art"
                  width={250}
                  height={180}
                />
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </a>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="blank" target="_blank" rel="noopener noreferrer">
          ©︎ kokonikaku
        </a>
      </footer>
    </div>
  );
};

export default Home;
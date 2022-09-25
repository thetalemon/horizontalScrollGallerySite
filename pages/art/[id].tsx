import { GALLERY_DATA } from '../../data/data';

export default function User({ gallery }) {
  return (
    <>
      <div className="wrapper">{gallery.title}</div>
      <div className="wrapper">{gallery.description}</div>
      <div className="wrapper">{gallery.text}</div>
    </>
  );
}

export const getStaticProps = async (context) => {
  console.log(context);
  const id = Number(context.params.id);
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

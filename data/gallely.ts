export type GalleryData = {
  id: number;
  title: string;
  description: string;
  text?: string;
  link?: string;
  img?: string;
};

export type GalleryDataList = GalleryData[];

export const GALLERY_DATA: GalleryDataList = [
  {
    id: 1,
    title: 'art 1',
    description: 'this is my first art',
    text: 'this is long text for specific page',
    img: '/art/image1.png',
  },
  {
    id: 2,
    title: 'art 2',
    description: 'this is my second art',
    link: 'https://www.google.com/',
    img: '/art/image2.png',
  },
  {
    id: 3,
    title: 'art 3',
    description: 'this is my third art',
    text: 'this is long text for specific page',
    img: '/art/image3.png',
  },
  {
    id: 4,
    title: 'art 4',
    description: 'this is my fourth art',
    text: 'this is long text for specific page',
  },
  {
    id: 5,
    title: 'art 5',
    description: 'this is my fifth art',
    text: 'this is long text for specific page',
  },
];

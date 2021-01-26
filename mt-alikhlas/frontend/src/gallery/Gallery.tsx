import ImageGallery from 'react-image-gallery';

const Photos = [
   {
      original: '',
      thubnail: '',
   },
];

export const Gallery = () => {
   return <ImageGallery items={Photos} />;
};

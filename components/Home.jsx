import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
  const [photos, setPhotos] = useState('');
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      setPhotos(res.data.slice(0, 10));
      setIsLoading(false);
      console.log(photos);
    });
  }, []);

  if (isloading) {
    return <h1>loading ...</h1>;
  }

  return (
    <>
      <h1 className="font-light bg-blue-400">Home page</h1>
      {photos?.map((photo) => {
        return (
          <div key={photo.id} className="mt-10">
            <img className="rounded-xl" src={photo?.url} />
            <h1>{photo.title} </h1>
          </div>
        );
      })}
    </>
  );
};

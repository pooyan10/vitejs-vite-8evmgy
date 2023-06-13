import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPhotos = () => {
  return axios.get('https://jsonplaceholder.typicode.com/photos');
};

export const About = () => {
  const { data, isLoading, isError, error } = useQuery('photos', fetchPhotos);

  const res = data?.data.slice(0, 10);
  console.log(res);

  if (isLoading) {
    return <h1>loading ...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {res?.map((photo) => {
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

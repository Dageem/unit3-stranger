import { useParams } from "react-router-dom";
import { useGetStrangerByTitleQuery } from "../reducers/Strangers";

function SingleTitlePage() {
  //C: use params should be invoked
  const params = useParams;
  //C: the hook that should be used here should be the one that gets us all of the posts
  const { data, error, isLoading } = useGetStrangerByTitleQuery(params.id);

  //C: use the array.filter method to filter the data array for the post that matches the params id in the browser URL. display that data in this component

  return (
    <div>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <h1>{data.title}</h1>
          <h2>{data.description}</h2>
        </>
      )}
    </div>
  );
}

export default SingleTitlePage;

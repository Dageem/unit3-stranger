import { useParams } from "react-router-dom"
import { useGetStrangerByTitleQuery } from "../reducers/Strangers"

function SingleTitlePage(){
    const params= useParams
    const {data, error, isLoading}= useGetStrangerByTitleQuery(params.id);
    
    return (
        <div>
            {isLoading?<h1>Loading....</h1>:<>
            <h1>{data.title}</h1>
            <h2>{data.description}</h2>
            </>}
        </div>
    )
}

export default SingleTitlePage
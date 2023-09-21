import { useParams } from "react-router-dom"
import { useGetPostsQuery } from "../reducers/Strangers"

function SinglePostPage(){
    const params= useParams();
    const id= params.id
    const {data, error, isLoading}= useGetPostsQuery();

    const singlePost = data.data.posts.filter((post) => post===id)
    console.log(singlePost)
    return (
        <div>
    {isLoading?<h1>Loading....</h1>:<div>
        <h1>{singlePost.title}</h1>
        <h2>{singlePost.desciption}</h2>
        </div>}
    </div>
    )
}

export default SinglePostPage
import Content from "../components/Content"
import { useGetPostsQuery } from "../reducers/Strangers"
import { useState } from "react";

function PostsPage(){
    const {data, isLoading}= useGetPostsQuery();

    const [input,setInput]=useState("");
   
    console.log(data)
    return (
        <>
            <Content>
            {isLoading?<h1>Loading....</h1>:data.data.posts.map((i)=>
            <h1 key={i.title}>{i.title}</h1>)}
            </Content>
        </>
    )
}

export default PostsPage;
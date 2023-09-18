import Content from "../components/Content"
import { useGetTitleQuery } from "../reducers/Strangers"
function TitlePage(){
    const {data, error, isLoading}= useGetTitleQuery();
   
;
    return (
        <>
            <Content>
            {isLoading?<h1>Loading....</h1>:data.result.map((i)=>
            <h1 key={i.title}>{i.title}</h1>)}
            </Content>
        </>
    )
}

export default TitlePage;
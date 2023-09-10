import { useParams } from "react-router-dom"

function SingleTitlePage(){
    
    const params=useParams();
    
    return (
        <>
            <h1>Page {params.id}</h1>
        </>
    )
}

export default SingleTitlePage
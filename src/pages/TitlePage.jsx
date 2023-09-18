import Content from "../components/Content";
//C: if you changed the exports from Strangers.js make sure to change the import here
import { useGetTitleQuery } from "../reducers/Strangers";
function TitlePage() {
  //C: may need to change useGetTitleQuery here if you changed exports from Strangers.js
  const { data, error, isLoading } = useGetTitleQuery();

  //C: console.log what data is to make sure you are accessing it correctly for your map below
  return (
    <>
      <Content>
        {isLoading ? (
          <h1>Loading....</h1>
        ) : (
          data.result.map((i) => <h1 key={i.title}>{i.title}</h1>)
        )}
      </Content>
    </>
  );
}

export default TitlePage;

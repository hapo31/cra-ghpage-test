import { useParams } from "react-router";

const Articles = () => {
  const params = useParams<{ id: string }>();

  return <h1>Articles: {params.id}</h1>;
};

export default Articles;

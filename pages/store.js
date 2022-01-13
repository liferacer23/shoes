import axios from "axios";
import ItemList from "../components/ItemList";
import Head from "next/head";
export default function Home({ jordans }) {
  return (
    <div>
      <Head>
        <title>Sneakers | Store</title>
      </Head>
      <ItemList jordans={jordans}/>
      </div>
      
  );
}

export const getServerSideProps = async () => {
  
  const res = await axios.get("/api/jordans");
 
  return {
    props: {
      jordans: res.data,
    },
  };
 
};

import axios from "axios";
import ItemList from "../components/ItemList";
import Head from "next/head";
import Featured from "../components/Featured/Featured";
import Trending from "../components/Trending/Trending";
import Article from "../components/Article";
export default function Home({ jordans }) {
  return (
    <div>
      <Head>
        <title>Sneakers | Home</title>
      </Head>
    <Featured/>
    <Article/>
    <Trending/>
      </div>
      
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3000/api/jordans");
 
  return {
    props: {
      jordans: res.data,
    },
  };
 
};

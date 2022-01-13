import axios from "axios";
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

export const getServerSideProps = async () => {
  const HOST = process.env.APP_URL
  const res = await axios.get(`${HOST}/api/jordans`);
 
  return {
    props: {
      jordans: res.data,
    },
  };
 
};

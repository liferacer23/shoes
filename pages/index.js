import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured/Featured";
import Trending from "../components/Trending/Trending";
import Article from "../components/Article";
export default function Home() {
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



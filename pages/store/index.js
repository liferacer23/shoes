import ItemList from "../../components/ItemList";
import Head from "next/head";
import dbConnect from "../../util/mongo";
import Jordan from "../../models/Jordan";
import { useDispatch,useSelector } from "react-redux";
import { addShoes } from "../../redux/cartSlice";
export default function Home({ jordans }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <Head>
        <title>Sneakers | Store</title>
      </Head>
      <ItemList jordans={jordans} />
    </div>
  );
}

export const getServerSideProps = async () => {
  dbConnect();
  const jordan = await Jordan.find();

  // const HOST = process.env.APP_URL
  //const res = await axios.get(`${HOST}/api/jordans`);

  return {
    props: {
      jordans: JSON.parse(JSON.stringify(jordan)),
    },
  };
};

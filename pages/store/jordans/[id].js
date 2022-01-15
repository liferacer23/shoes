import dbConnect from "../../../util/mongo";
import Jordan from "../../../models/Jordan";
import Image from "next/image";
export default function SelectedJordan({ jordans }) {
  
  return (
    <div>
      <h1>{jordans.title}</h1>
      <p>{jordans.description}</p>
      {jordans.image.map((data, index) => {
        return <div key={index}>
            <Image src={data} width={400} height={400}/>
        </div>;
      })}
    </div>
  );
}
export const getServerSideProps = async ({ params }) => {
  dbConnect();
  const id = JSON.parse(JSON.stringify(params));

  const jordan = await Jordan.findById(id.id);

  // const HOST = process.env.APP_URL
  //const res = await axios.get(`${HOST}/api/jordans`);

  return {
    props: {
      jordans: JSON.parse(JSON.stringify(jordan)),
    },
  };
};

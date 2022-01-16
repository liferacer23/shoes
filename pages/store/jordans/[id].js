import dbConnect from "../../../util/mongo";
import Jordan from "../../../models/Jordan";
import Image from "next/image";
import styles from "../../../styles/SelectedJordan.module.css";
export default function SelectedJordan({ jordans }) {
  return (
    <div className={styles.container}>
      
        <div className={styles.imageSection}>
          {jordans.image.map((data, index) => {
            return (
              <div className={styles.image}key={index}>
                <Image src={data} width={350} height={350} />
              </div>
            );
          })}
        </div>
      
      <div className={styles.infoSection}>
        <h1>{jordans.title}</h1>
        <p>{jordans.description}</p>
        {jordans.prices.map((price, index) => {
          return (
            <div key={index} className={styles.prices}>
              <h3>{price}$</h3>
            </div>
          );
        })}
      </div>
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

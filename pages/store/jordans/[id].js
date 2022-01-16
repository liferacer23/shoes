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
            <div className={styles.image} key={index}>
              <Image src={data} width={350} height={350} />
            </div>
          );
        })}
      </div>

<form className={styles.form}>
      <div className={styles.infoSection}>
        <h1 className={styles.title}>{jordans.title}</h1>
        <p>{jordans.description}</p>

          <h3>Please select your size</h3>
          <div>
            {jordans.prices.map((price, index) => {
              let pricerange1=6;
              let pricerange2=10;
              if (index===1){
                pricerange1+=4
                pricerange2+=2
              }else if (index===2){
                pricerange1+=6
                pricerange2+=5
              }
              return (
                <div key={index} className={styles.prices}>
                  <input
                    type="radio"
                    id={index}
                    name="shoe-size"
                    value={price}
                  />
                  <label htmlFor={`shoesize${index}`}>Size {pricerange1}-{pricerange2} {price}$</label>
                </div>
              );
            })}
          </div>
          <h3>Extra Options</h3>
          {jordans.extraOptions.map((data, index) => {
          return (
            <div key={index} className={styles.extraOptions}>
              <input
                    type="checkbox"
                    id={index}
                    name="contact"
                    value={data.price}
                  />
                  <label htmlFor="contactChoice3">{data.text} {data.price}$</label>

            </div>
          );
        })}
          <div>
            <button type="submit">Add To Cart</button>
          </div>
    
      </div>
        </form>
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

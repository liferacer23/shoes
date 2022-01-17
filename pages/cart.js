import styles from '../styles/Cart.module.css';
import Image from "next/image";
import dbConnect from "../util/mongo";
import Jordan from "../models/Jordan";

export default function cart() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Shoe</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                        <div className={styles.imageContainer}>
                            <Image src ='logo.svg' width={100} height={100}/>
                        
                        </div>
                        </td>
                        <td>
                            <span className={styles.name}>Air Jordan 2</span>
                        </td>
                        <td>
                            <span className={styles.extras}>Shoe laces</span>
                        </td>
                        <td>
                            <span className={styles.price}>122$</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>300$</span>
                        </td>
                    </tr>
                </table>
                

            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>CART TOTAL</h1>
                <div className={styles.subTotalText}>
                    <b className={styles.subTotalTextTitle}>Subtotal</b>$100
                </div>
                <div className={styles.discount}>
                    <b className={styles.discountTextTitle}>Discount</b>$0
                </div>
                <div className={styles.total}>
                    <b className={styles.totalTextTitle}>Total</b>$300
                </div>
                <button className={styles.button}>CHECKOUT NOW!!</button>
                </div>
            </div>
        </div>
    )
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
  

import React from "react";
import Image from "next/image";
import styles from "../../../styles/Orders.module.css";
export default function Order() {

    const status = 0;
    const statusClass =(index)=>{
            if(index-status<1){return styles.done}
            if(index-status===1){return styles.inProgress}
            if(index-status>1){return styles.notDone}
    }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Customer ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.orderId}>12312</span>
              </td>
              <td>
                <span className={styles.name}>Shoe laces</span>
              </td>
              <td>
                <span className={styles.address}>Mekanisa Mikael</span>
              </td>
              <td>
                <span className={styles.total}>300$</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="payment.png" width={50} height={50} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
                <Image src="checkedicon.png" width={20} height={20}/>
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="preparing.png" width={50} height={50} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
                <Image src="checkedicon.png" width={20} height={20}/>
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="ontheway.png" width={50} height={50} />
            <span>On the way..</span>
            <div className={styles.checkedIcon}>
                <Image src="checkedicon.png" width={20} height={20}/>
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="delivered.png" width={50} height={50} />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
                <Image src="checkedicon.png" width={20} height={20}/>
            </div>
          </div>
        </div>
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
          <button className={styles.button} disabled>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}

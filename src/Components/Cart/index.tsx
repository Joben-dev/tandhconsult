import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Form from '../Reusable/Form/Contact'
interface Modal{
    func?: () => void | undefined,
    func2?: () => void | undefined,

}
const index: React.FC<Modal>= ({func, func2}) => {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const handleResize = () => {
        setScreenHeight(window.innerHeight);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <>
    
    <div className={styles.modal} style={{height: `${screenHeight + 10}px`}}>
      <div className={styles.modal_wrapper}>
        <div className={styles.cart_top}>
          <span className={styles.title}>Your Cart</span>
          <span className={styles.exit} onClick={() => {func?.(), func2?.()}}>X</span>
        </div>
        <div className={styles.product_content}>
          <span>Your cart is empty.</span>
        </div>
        <div className={styles.footer_cart}>
          <span>Product you may like</span>
          <div className={styles.card}>
            <picture><img src="https://tandhconsult.com/wp-content/uploads/2021/06/canva-boss-dictating-to-assistant-at-office-300x300.jpg" alt="desk"  /></picture>
            <div className={styles.text}>
              <h1 className={styles.title}>
                Dispute Settlement “Special Package”
              </h1>
              <a href='/product-category/investigations-and-disputes'>Read More</a>
            </div>
          </div>
          <a className={styles.btn_shop} onClick={() => {func?.(), func2?.()}}>
            CONTINUE SHOPPING
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default index

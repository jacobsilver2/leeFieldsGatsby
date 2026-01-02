import { useMemo } from 'react'
import { FadeWrapper } from "./FadeWrapper"
import { ShopRecord } from "../types"
import styles from "../styles/Shop.module.css"

interface ShopComponentProps {
  items: ShopRecord[]
}

export const ShopComponent = ({ items }: ShopComponentProps) => {
  const mappedItems = useMemo(() => items.map(item => {
      const price = parseFloat(item.price)

      return (
        <FadeWrapper key={item.id}>
          <div className={styles.card}>
            {item.image && (
              <img className={styles.image} src={item.imageThumb || item.image} alt={item.title} />
            )}
            <div className={styles.content}>
              <p className={styles.itemName}>{item.title}</p>
              {item.preorder && <p>Pre-Order</p>}
              {price > 0 && (
                <p className={styles.price}>
                  ${Number.isInteger(price) ? price : price.toFixed(2)}
                </p>
              )}
            </div>
            <div className={styles.purchase}>
              <a
                className={styles.purchaseText}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <p>{item.preorder ? 'Pre-Order' : 'Purchase'}</p>
              </a>
            </div>
          </div>
        </FadeWrapper>
      )
    }), [items])

  return <div className={styles.wrapper}>{mappedItems}</div>
}

import styles from './Item.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/Prato';

export default function Item(props: Prato) {
  const { title, description, category, size, serving, price, photo } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item__img}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div 
            className={classNames(
              styles.item__tipo,
              styles[`item__tipo__${category.label.toLocaleLowerCase()}`]
            )}
          >
            {category.label}
          </div>
          <div className={styles.item__porcao}>
            {size}g
          </div>
          <div className={styles.item_qtdpessoas}>
                        Serve {serving} pessoa{serving === 1 ? '' : 's' }
          </div>
          <div className={styles.item__valor}>
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
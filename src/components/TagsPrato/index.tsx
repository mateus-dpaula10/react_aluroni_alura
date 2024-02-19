import { Prato } from 'types/Prato';
import styles from './TagsPrato.module.scss';
import classNames from 'classnames';

export default function TagsPratos({
    category,
    size,
    serving,
    price
}: Prato) {
    return (
        <div className={styles.tags}>
            <div
                className={classNames(
                    styles.tags__tipo,
                    styles[`tags__tipo__${category.label.toLocaleLowerCase()}`]
                )}
            >
                {category.label}
            </div>
            <div className={styles.tags__porcao}>
                {size}g
            </div>
            <div className={styles.tags_qtdpessoas}>
                Serve {serving} pessoa{serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__valor}>
                {price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </div>
        </div>
    )
}
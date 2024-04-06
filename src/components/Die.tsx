import { Text } from 'react-aria-components';
import styles from './die.module.css'

export default function Die({ pip }: { pip: number}) {
    return (
        <>
            <div className={styles.box}>
                <Text>{pip}</Text>
            </div>
        </>
    )
}
import { Hourglass } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <Hourglass colors={['#306cce', '#72a1ed']} width={80} height={80} />
        </div>
    )
}

export default Loader;
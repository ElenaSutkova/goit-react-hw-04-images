import styles from './Button.module.css'

const Button = ({ onClick }) => {
    const handleClick = (evt) => {
        evt.preventDefault();
        onClick();
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            Load more...
        </button>
    )
}

export default Button;
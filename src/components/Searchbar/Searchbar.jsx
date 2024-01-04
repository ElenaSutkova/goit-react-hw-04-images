import React, { useState } from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
    
    const handleChange = (evt) => {
        setQuery(evt.target.value)
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(query)
    };

    return (
        <header className={styles.header}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <button type='submit' className={styles.button}>
                    <span className={styles.span}>Search</span>
                </button>

                <input
                    type="text"
                    className={styles.input}
                    autoComplete='off'
                    autoFocus
                    placeholder='Search images and photos'
                    value={query}
                    onChange={handleChange}
                />
            </form>
        </header>
    )
}

export default Searchbar;
import React from 'react'
import styles from '../../styles/Text.module.css'
/**
 * This component allows to render a title based on type.
 * @param {string} type - The type of the title. Can be title, subtitle or heading.
 */
const BaseTitle = ({ children, type = '' }) => {
    return (
        <h1 className={styles[type || 'heading']}>
            -={children || `Empty ${type || 'Component'}`}=-
        </h1>
    )
}

export default BaseTitle

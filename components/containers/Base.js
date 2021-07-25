import React from 'react'
import Head from 'next/head'
import styles from '../../styles/contentcontainer.module.css'
import { Colors } from '../../config'
const Base = ({ title, children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title || 'Section'}</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <div className={styles.contentContainer}>{children}</div>
        </div>
    )
}

export default Base

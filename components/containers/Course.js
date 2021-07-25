import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Course.module.css'
import { Text, TextWithLink } from '../text'

const Course = ({
    name,
    description,
    price,
    distributor,
    url,
    author,
    authorURL,
    imgPreview,
    internalLink,
}) => {
    const previewText = `> Go to the Original Course on ${distributor} (Original Price: $${price}) <`
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <TextWithLink
                    noJustify
                    textStyle={styles.titleText}
                    href={`courses/${internalLink}`}>
                    {name}
                </TextWithLink>
                <Text noJustify textStyle={styles.titleText}>
                    -
                </Text>
                <TextWithLink
                    noJustify
                    textStyle={styles.titleText + ' ' + styles.author}
                    href={authorURL}>
                    {author}
                </TextWithLink>
            </div>
            <div className={styles.description}>
                <Text noJustify>{description}</Text>
                <TextWithLink noJustify textStyle={styles.link} href={url}>
                    {previewText}
                </TextWithLink>
                <TextWithLink
                    noJustify
                    textStyle={styles.link}
                    href={`courses/${internalLink}`}>
                    &rarr; Go to Notes &larr;
                </TextWithLink>
            </div>
        </div>
    )
}

export default Course

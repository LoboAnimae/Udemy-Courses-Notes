import React from 'react'
import styles from '../../styles/Text.module.css'

function getAllParagraphs(paragraphArray, textStyle, noJustify) {
    let formattedParagraphs = []
    for (const paragraph of paragraphArray) {
        formattedParagraphs.push(
            <p className={styles.text + ' ' + textStyle}>
                {!noJustify && <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
                {paragraph}
            </p>,
        )
    }
    return formattedParagraphs
}

const TextWithLink = ({
    children,
    textStyle = '',
    noJustify = false,
    ...otherProps
}) => {
    if (!children) return null
    console.log(children)
    let paragraphs = children.split('\n')
    paragraphs = paragraphs.map(paragraph => paragraph.trim())

    const formattedParagraphs = getAllParagraphs(
        paragraphs,
        textStyle,
        noJustify,
    )
    return <a {...otherProps}>{formattedParagraphs}</a>
}

export default TextWithLink

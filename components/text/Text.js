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

const Text = ({
    children,
    textStyle = '',
    noJustify = false,
    ...otherProps
}) => {
    if (!children) return null
    let paragraphs = children.split('\n')
    paragraphs = paragraphs.map(paragraph => paragraph.trim())

    const formattedParagraphs = getAllParagraphs(
        paragraphs,
        textStyle,
        noJustify,
    )
    return <div {...otherProps}>{formattedParagraphs}</div>
}

export default Text

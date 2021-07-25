import React from 'react'
import Highlight from 'react-highlight'
import styles from '../../styles/Code.module.css'

const findLeastLeftWhitespace = str => {
    const lines = str.split('\n')
    let least_space = 10000
    console.log('lines:', lines)

    for (let line of lines) {
        if (line.length === 0) continue
        console.log(line[0] === ' ')
        let counter = 0
        while (line[0] === ' ') {
            counter++
            line = line.substring(1)
        }
        if (counter < least_space) {
            least_space = counter
        }
    }
    return least_space
}

const Code = ({ className, children }) => {
    const leastSpace = findLeastLeftWhitespace(children)
    const lines = children
        .split('\n')
        .filter(line => line.length !== 0)
        .filter(line => line.trim() !== '')
        .map(line => line.substring(leastSpace))

    return (
        <div className={styles.code}>
            <div className={styles.codeTitle}>{className} Snippet</div>
            <Highlight className={className}>{lines.join('\n')}</Highlight>
        </div>
    )
}

export default Code

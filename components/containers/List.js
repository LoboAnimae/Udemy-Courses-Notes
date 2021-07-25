import React from 'react'
import { LinkListItem } from '../text'
import styles from '../../styles/List.module.css'
const ListGenerator = ({ children, type = 'I', ordered = false }) => {
    if (!children) return null
    const args = children.split('\n')
    console.log(args)
    let listItem = []

    for (let arg of args) {
        arg = arg.trim()
        if (!arg) continue
        const [type, child] = arg.split('|')
        listItem.push(<LinkListItem link={type}>{child}</LinkListItem>)
    }
    console.log(listItem)
    const { orderedList, unorderedList } = styles
    if (ordered)
        return (
            <ol type={type} className={orderedList}>
                {listItem}
            </ol>
        )
    return <ul className={unorderedList}>{listItem}</ul>
}

export default ListGenerator

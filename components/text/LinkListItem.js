import React from 'react'
import Link from 'next/link'

const LinkListItem = ({ children, link, ...otherProps }) => {
    return (
        <li>
            <Link {...otherProps} href={link}>
                {children}
            </Link>
        </li>
    )
}

export default LinkListItem

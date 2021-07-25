import React from 'react'
import { BasicContent, Course } from '../../components/containers'
import { Title } from '../../components/text'
import { CoursesArray } from '../../config'

const index = () => {
    let generatedCourses = CoursesArray.map(course => (
        <Course
            name={course.name}
            description={course.description}
            price={course.price}
            distributor={course.distributor}
            url={course.url}
            author={course.author}
            authorURL={course.authorURL}
            imgPreview={course.imgPreview}
            internalLink={course.internalLink}
        />
    ))
    return (
        <BasicContent>
            <Title type='title'>All Courses</Title>
            {generatedCourses}
        </BasicContent>
    )
}

export default index

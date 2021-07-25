import { BasicContent, ListWithLinks } from '../components/containers'
import { Title, Text } from '../components/text'
export default function Home() {
    return (
        <BasicContent title='Index'>
            <Title type='title'>All Udemy Courses</Title>
            <Title type='subtitle'>Before we start</Title>
            <Title type='heading'>The Theme</Title>
            <Text>
                {`
                If you're wondering about what this color theme is, it's based off of Atom's One Dark Pro. If you need to see the colors, you can either go to styles/Text.module.css or styles/globals.modules.css`}
            </Text>
            <Title type='subtitle'>Introduction</Title>
            <Title type='heading'>How it works</Title>
            <Text>{`
            I will be posting notes from Udemy courses in here. Most of them will have to do with coding, but anything can come and anything can go. Given that it is more of a private project, I expect to be posting notes on a more regular basis, but only for myself. Nevertheless, if you're reading this, you're probably interested in it. If you're not, you can safely ignore this page. Nevertheless, this is the first page of the entire project, which means that you figured out how to run it!

            `}</Text>
            <Title type='heading'>What's next</Title>
            <Text>
                {`
                Below, there is a link to a list of all the courses I have added to the project. If you're interested in any of them, simply click on the course name to go to the course's page. I will try to divide the course into subsections based on Udemy's policy of modules. Each module might include a little bit of an in-depth explanation, but I'll try to keep it to a minimum. I will also try to add more information at the end of each module. If you need any more information, simply check the "More Info" section at the bottom of each module.
                Happy learning!
            `}
            </Text>

            <ListWithLinks type=''>
                home|&rarr; Go to the Course List! &larr;
            </ListWithLinks>
        </BasicContent>
    )
}

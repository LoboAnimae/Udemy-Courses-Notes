import React from 'react'
import { BasicContent } from '../../../components/containers'
import { Title, Text } from '../../../components/text'

const index = () => {
    return (
        <BasicContent>
            <Title type='title'>The Complete ASP.NET MVC 5 Course</Title>
            <Title type='subtitle'>Section 1: Getting Started</Title>
            <Title type='heading'>Introduction</Title>
            <Text>
                {`
                This course will be making an application, called Vidly, which will allow us to make use of a simulated video rental store. It will be able to search add customers, delete customers, and list the videos they have rented, as well as their subscriptions. We will also be able to see the list of movies. Finally, we can login and logout.
                `}
            </Text>

            <Title type='heading'>MVC Architectural Pattern</Title>
            <Text>
                {`
                MVC stands for Model-View-Controller. It was developed in 1970 by Microsoft, and is still used today. It is a design pattern that is used to separate the logic from the presentation. It is a good practice to separate the presentation from the logic, and to separate the logic from the data. It has been widely adopted in the web development community.

                A Model represents the application data and behaviour, independent of the user interface. Examples of a Model in our application may include Movie, Customer, Rental, Transaction, etc.
                A View represents the user interface, and is responsible for displaying the data. A Controller is responsible for receiving user input, and passing it to the model and view.
                A Controller is responsible for receiving user input, and passing it to the model and view, such as HTTP requests. 
                Each component has a distinct responsibility. This results in better separation of concerns.
                Nevertheless, we must include a Router. The Router handles the routing of requests to the appropriate controller and view. 

                
                `}
            </Text>
            <Title type='heading'>Setting Up the Development Environment</Title>
        </BasicContent>
    )
}

export default index

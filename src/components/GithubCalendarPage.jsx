import React from 'react'
import GitHubCalendar from "react-github-calendar"
import {Box,Heading} from '@chakra-ui/react'


const GithubCalendarPage = () => {
  return (
    <Box padding={"2%"} className="react-activity-calendar" >
    <Box className="calendar" data-aos="fade-ip" data-aos-duration="1000">
         {/* Loading stuff */}
         <img  src="https://ghchart.rshah.org/skabusaeed1" alt="abusaeed's Github chart"/>
       </Box>
       </Box>
  )
}

export default GithubCalendarPage

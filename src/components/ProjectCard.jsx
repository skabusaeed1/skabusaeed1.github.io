import React from 'react'
import { Box, Button, Flex, Image, Text, Heading, Link} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export const ProjectCard = ({name,desc,avatar,link,github,tech }) => {
  return (
    <Card  data-aos="fade-up" data-aos-duration="1000" className="project-card" maxW={["290px", "sm", "350px", "md"]}  bg={"rgb(241, 157, 16)"} color={"white"} >
      <CardHeader>

        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' >
            <Box >  <Image id='card_img' 
              objectFit='cover'
              src={avatar}
              alt='Chakra UI'
            /></Box>
          </Flex>
        </Flex>

      </CardHeader>

      <CardBody>
        <Text mb={"20px"} mt={"10px"}> <Heading as='h3' className="project-title" fontSize={["lg","lg","3xl","2xl"]} 
        fontWeight='bold' > 
         {name}</Heading> </Text>
        <Text mt={"20px"}mb={"30px"} fontSize={["lg","lg","xl","xl"]} class="project-description" >
         {desc}
        </Text>
        <Text mt={"10px"}  class="project-tech-stack" fontSize={["lg","lg","xl","xl"]}>  <span style={{ color: "rgb(241, 157, 16)", fontWeight: "700" }}>TECH STACK :</span>{tech} </Text>
      </CardBody>


      <CardFooter justify='space-between'  sx={{ '& > button': { minW: '136px', }, }}   >
        <Flex justifyContent={"space-between"} padding={"0px 20px"} w={"100%"}>
          <Button id='card_soco' bg="rgb(241, 157, 16)" size={["sm", "sm", "md", "md"]}>   <Link class="project-github-link" href={github}> <i class="fa-brands fa-github fa-2xl"></i> Github </Link> </Button>
          <Button id='card_soco'  bg="rgb(241, 157, 16)" size={["sm", "sm", "md","md"]}> <Link class="project-deployed-link" href={link}><i class="fa-solid fa-eye fa-2xl"></i> Live </Link></Button>
        </Flex>
      </CardFooter>

    </Card>
  )
}

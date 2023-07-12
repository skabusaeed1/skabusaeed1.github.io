import { Box, Button, Divider, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Web from './images/Web.png';

export const AboutMe = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowMoreDetails((prevState) => !prevState);
  }
  return (
    <div>
      <Box data-aos="fade-up" data-aos-duration="1200" > <Text  fontSize={["25px", "25px", "30px", "5xl"]} fontWeight={"700"}textAlign={"center"}>About <span  style={{ color: "rgb(241, 157, 16)" }}>me</span></Text> </Box>
      <Box id="about" className="about section" >
        {/* <Text > About me</Text> */}
      <Box className='about_left' data-aos="fade-up" >
        <img  src={Web} />
      </Box> 
      <Box className='about_right' mt={"2%"}>
        <Box data-aos="fade-up" data-aos-duration="1300">  <Text fontSize={["20px", "20px", "30px", "3xl"]} fontWeight={"700"}> <span style={{ color: "rgb(241, 157, 16)" }}> Full Stack Web Developer</span> </Text></Box>
        <Box className='about_me' data-aos="fade-up" data-aos-duration="1350"> <Text m={"20px 0px"} id="user-detail-intro" fontSize={"xl"}>I am a passionate web developer driven by a relentless
        An enthusiastic Full-stack Developer, skilled in Node.JS.
              Experienced in Developing websites using JavaScript, Node.js,
              Express.js, MongoDB. An optimistic person, always ready to take
              critical decisions and ready to work under pressure. Always ready
              to try some new things for optimization.</Text></Box>
        <div data-aos="fade-up"  data-aos-duration="1000"style={{display:"flex",gap:"20px",width:"100%"}} >
          <a   
     data-aos-duration="1000" id="contact-linkedin1" href="https://www.linkedin.com/in/abusaeed-ahmed-shaikh-440b04233/?originalSubdomain=in"><i class="fa-brands fa-linkedin  fa-2xl"></i></a>
          <a   
     data-aos-duration="1000" id="contact-github1" href="https://github.com/skabusaeed1"><i class="fa-brands fa-github fa-2xl"></i></a>
        </div>
        {/* <Box  data-aos="fade-up-right" data-aos-duration="500"><Button  fontSize={"large"} size={["sm", "md", "lg", "lg"]} color={"white"} _hover={{ bg: "gray.900", color: "rgb(241, 157, 16)", borderRadius: "10px" }} bg={"rgb(241, 157, 16)"} onClick={handleReadMoreClick}>{showMoreDetails ? "Read less" : "Read more"}</Button></Box> */}
        {/* {showMoreDetails && <Box className='more-detail' mt={"30px"} >
       
          <Box>

            <Text mt={"10px"}> <span style={{ color: "#03c8d7", fontWeight: "700" }}> <i class="fa-solid fa-graduation-cap fa-xl"></i></span>  : Bachelor's Degree in CSE from Mdu University (rohtak) HARYANA</Text>
            <Divider />
            <Text   mt={"10px"}><span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-phone fa-lg"></i> </span> : 6280007521</Text>
            <Divider />
            <Text  mt={"10px"}><span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-envelope fa-lg"></i></span>  : abidkhan263187@gmail.com</Text>
            <Divider />
            <Text mt={"10px"}> <span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-location-dot fa-xl"></i></span>  Amritsar,Punjab</Text>
            <Divider />
          </Box>
        </Box>} */}

      </Box>
    </Box>
    </div>
  )
}

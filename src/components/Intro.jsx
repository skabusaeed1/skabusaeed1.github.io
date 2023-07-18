import { Box, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'
import photo from './images/pics/photo1.jpg'
import { TypedText } from './TypedText';

const handleclick = (e) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/file/d/1TlQLrPNTk5kbpqLC_xgoMLgoyOyakfvE/view?usp=sharing",
      "_blank"
    );
    let link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1TlQLrPNTk5kbpqLC_xgoMLgoyOyakfvE";
  
    link.download = "Shaikh-Abusaeed-Resume";
    link.click();
};
export const Intro = () => {


    return (
        <Box className='intro_box'  >
            <Box className='intro_left' data-aos="fade-up" data-aos-duration="1000">
                <Box  data-aos="fade-up" data-aos-duration="1000"> <Text fontSize={["20px", "20px", "30px", "3xl"]} fontWeight={"700"}>Hello, My Name Is</Text></Box>
                <Box data-aos="fade-up" data-aos-duration="1000">   <Text fontSize={["30px", "10px", "40px", "6xl"]} fontWeight={"700"} id="user-detail-name">Shaikh Abusaeed</Text></Box>
                <Box  data-aos="fade-up" data-aos-duration="1000">   <Text fontSize={["18px", "10px", "20px", "3xl"]} fontWeight={"700"}>I'm an  <TypedText /> </Text></Box>
                <Box data-aos="fade-up">  
                {/* <Text className='into_myself' mt={"16px"} 
                 id="user-detail-intro">Enthusiastic full stack web developer with a passion for creating dynamic and responsive applications</Text> */}

                    {/* <Box  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <Text mt={"20px"} letterSpacing={15}>
                            <Link  href='https://github.com/Abidkhan263187' className='soco_icon' color={"#03c8d7"}> <i class="fa-brands fa-github fa-xl"></i></Link>
                            <Link  href='https://www.linkedin.com/in/abid-khan-325795182/' className='soco_icon'color={"#03c8d7"}><i class="fa-brands fa-linkedin fa-xl"></i></Link>
                            <Link href='#' className='soco_icon'color={"#03c8d7"}><i class="fa-brands fa-twitter fa-xl"></i></Link>
                            <Link href='https://www.instagram.com/_abidkhann/'  className='soco_icon'color={"#03c8d7"} ><i class="fa-brands fa-instagram fa-xl"></i></Link>
                        </Text></Box> */}

                    <Text data-aos="fade-up" data-aos-duration="1000" mt={"30px"} >
                        <Button size={["sm", "sm", "lg", "lg"]} id="resume-button-2" onClick={(event)=>handleclick(event)}
                        as={Link}
                        target="_blank"
                        download={true}
                        color={"rgb(18, 32, 58)"}
                        borderRadius={"10px"}
                        fontSize={"20px"}
                        fontWeight={"bold"}
                        _hover={{ bg: "white", color: "rgb(241, 157, 16)", borderRadius: "10px"}}
                        bg={"white"} >
                        Resume</Button></Text>
                        {/* <a href="./resume\Abid_resume (3).pdf" download> resume</a> */}
                        </Box>
            </Box>
            <Box className='intro_right' data-aos="fade-down"  data-aos-duration="1000">
                <img style={{borderRadius:"50px"}} className='home-img' src={photo} alt=""  />
            </Box>

        </Box>
    )
}

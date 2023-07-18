import React from "react";
import { Container, Box, Heading, Link, IconButton, useDisclosure, VStack, Spacer, Button, Divider,} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";

export const Nav = () => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
 
 const handleClick = (event) => {
  event.preventDefault();
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
  return (
    <Container id="nav-menu" h="80px" marginBottom="50px" position="sticky" top="0" zIndex="100" padding="20px"
    maxW="100%"display="flex"justifyContent="space-between"bg="rgb(241, 157, 16)"shadow="base"
    >
      <Box bg={"rgb(241, 157, 16)"} >
        <Heading marginTop={0} fontFamily="cursive" size="lg" cursor="pointer" bg={"rgb(241, 157, 16)"}>
        Shaikh Abusaeed
        </Heading>
      </Box>
      <Spacer bg={"rgb(241, 157, 16)"}/>
      <Box display={["none", "none", "none", "flex", "flex"]} w="50%" justifyContent="space-evenly" bg={"rgb(241, 157, 16)"} id="nav-1"
      >
    
            <Link  className="nav-link home"  as={ScrollLink} to={"home"} spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              // _hover={{ bg: "gray.900", color:"rgb(241, 157, 16)", borderRadius: "10px" }}
            >
             Home
            </Link>
            <Link  className="nav-link about"  as={ScrollLink} to={"about"}spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              // _hover={{ bg: "gray.900", color:"rgb(241, 157, 16)", borderRadius: "10px" }}
            >
             About
            </Link>
            <Link    className="nav-link skills" as={ScrollLink} to={"skills"}spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              // _hover={{ bg: "gray.900", color:"rgb(241, 157, 16)", borderRadius: "10px" }}
            >
             Skills
            </Link>
            <Link    className="nav-link projects" as={ScrollLink} to={"projects"}spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              // _hover={{ bg: "gray.900", color:"rgb(241, 157, 16)", borderRadius: "10px" }}
            >
             Projects
            </Link>
            <Link  className="statistics"  as={ScrollLink} to={"statistics"}spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              // _hover={{ bg: "gray.900", color:"rgb(241, 157, 16)", borderRadius: "10px" }}
            >
             Statistics
            </Link>
            <Link   className="nav-link contact" as={ScrollLink} to={"contact"} spy={true}smooth={true}offset={-80}duration={400}p="5px 10px"m="auto"textAlign={"center"}
              cursor="pointer"
              w="100px"
              // _hover={{ bg: "gray.900", color:"rgb(241, 157, 16)", borderRadius: "10px" }}
            >
             Contacts
            </Link>
       
      </Box>
      <Link  className="nav-link resume">
        <Button
        id="resume-button-1"
          display={["none", "none", "none", "flex", "flex"]} borderRadius=".8rem" size={["sm", "md"]}bg="rgb(241, 157, 16)" color={"white"} margin="auto" as={Link} 
          target="_blank"  
           _hover={{bg: "rgb(241, 157, 16)" }} 
           download={true}
          onClick={(event)=>handleClick(event)}
        >
          {/* <DownloadIcon marginRight="5px" /> */}
          Resume
        </Button>
       
      </Link>
      <Box borderRadius={"10px"}>
        <IconButton
          float="right"
          variant="outline"
          colorScheme="black"
          border={"none"}
          {...buttonProps}
          display={["flex", "flex", "flex", "none", "none"]}
        >
          <HamburgerIcon />
        </IconButton>
        <VStack
          marginTop="40px"
          {...disclosureProps}
          bg="brand_secondary"
          fontSize={"1.5rem"}
          // w={"100px"}
          padding="5px"
          textAlign={"center"}
          borderRadius="10px"
          border={"1px solid white"}
          display={["flex", "flex", "flex", "none", "none"]}
        >
         
              <Link
               className="nav-link home"
                as={ScrollLink}
              
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"home"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                Home
                <Divider />
              </Link>
              
              <Link
                as={ScrollLink}
                className="nav-link about"
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"about"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                About
                <Divider />
              </Link>
              
              <Link
                as={ScrollLink}
                className="nav-link skills"
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"skills"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                Skills
                <Divider />
              </Link>
              
              <Link
                as={ScrollLink}
                className="nav-link projects"
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"projects"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                Projects
                <Divider />
              </Link>
              
              <Link
                as={ScrollLink}
                className="statistics" 
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"statistics"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                Statistics
                <Divider />
              </Link>
              
              <Link
                as={ScrollLink}
              className="nav-link contact"
                {...buttonProps}
                width="100%"
                color="brand"
                borderRadius="5px"
                to={"contact"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                Contact
                <Divider />
              </Link>

              <Link
                onClick={(event)=>handleClick(event)}
                textDecoration={"none"}
                width="100%"
                color="brand"
                borderRadius="5px"
                cursor="pointer"
              >
                Resume
                <Divider />
              </Link>
         
         {/* <Button  className="nav-link resume"
            onClick={handleClick}
            margin="auto"
            as={Link}
            download={true}
            target="_blank"
            variant="outline"
            color="brand"
            border="1px"
            borderRadius="10px"
            id="resume-button-1"
          >
            Resume
          </Button> */}
        </VStack>
      </Box>
    </Container>
  )
}



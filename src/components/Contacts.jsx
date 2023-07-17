import React from 'react';
import { Box, Button, Center, Flex, Heading,Image } from "@chakra-ui/react"

export const Contacts = () => {
  const phoneNumber = '+91-9823931152';
  const email = 'shaikhabusaeed1@gmail.com';
  const address = "Aurangabad, Maharashtra"
  return (
    <div id="contact" style={styles.container}>
      <h2 style={styles.contactTitle} data-aos="fade-up"
     data-aos-duration="1000">Contact <span  style={{ color: "rgb(241, 157, 16)" }}>Me</span></h2>
      <div style={styles.contactDetails} id="contact-detail-div" data-aos="fade-up"
     data-aos-duration="1000">
        <p style={styles.contactInfo} id="contact-phone"  
     ><i class="fa-solid fa-phone-volume fa-2xl"></i> <span style={{color:"white",paddingLeft:"40px",marginLeft:"70px"}}>{phoneNumber}</span> </p>
        <p style={styles.contactInfo} id="contact-email"  
     ><i class="fa-solid fa-envelope fa-2xl"></i>  <span style={{color:"white"}}>  {email}</span> </p>
     <p style={styles.contactInfo} id="contact-email">
     <i class="fa-solid fa-location-dot fa-2xl"></i> <span style={{color:"white",paddingLeft:"30px"}}>  {address}</span> </p>
      </div>
      <div style={styles.socialMedia}data-aos="fade-up"
     data-aos-duration="1000" >
        {/* <p style={styles.socialMediaText}  data-aos="fade-up"
     data-aos-duration="1000">Social Media</p> */}
        <div style={styles.socialMediaLinks} > 
          <a style={styles.socialMediaLink}  
     data-aos-duration="1000" id="contact-linkedin" href="https://www.linkedin.com/in/abusaeed-ahmed-shaikh-440b04233/?originalSubdomain=in"><i class="fa-brands fa-linkedin  fa-2xl"></i></a>
          <a style={styles.socialMediaLink}  
     data-aos-duration="1000" id="contact-github" href="https://github.com/skabusaeed1"><i class="fa-brands fa-github fa-2xl"></i></a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:"20px",
    backgroundColor: 'transparent',
    borderRadius: '10px',
  },
  contactTitle: {
    // border: '2px solid rgb(241, 157, 16)',
    fontSize: '30px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
    border: '2px solid rgb(241, 157, 16)',
    borderRadius:"10px",
    padding:"8px"
  },
  contactInfo: {
    fontWeight:"700",
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
    color:'rgb(241, 157, 16)',
    margin: '10px 0',
  },
  
  socialMedia: {
  border:"2px solid rgb(241, 157, 16)",
    display: 'flex',
   borderRadius:"20px",
    padding:"40px 50px",
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom:"100px"
  },
  socialMediaText: {
    border: '2px solid rgb(241, 157, 16)',
    fontSize: '20px',
    fontWeight:"700",
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    padding:"7px 35px",
    margin: '10px 0',
  },
  socialMediaLinks: {
    display: 'flex',
    justifyContent: 'center',
  },
  socialMediaLink: {
    fontSize: '30px',
    fontFamily: 'Arial, sans-serif',
    color: 'rgb(241, 157, 16)',
    textDecoration: 'none',
    margin: '0 10px',
    cursor: 'pointer',
  },
};

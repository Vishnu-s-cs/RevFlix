import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "rgb(228, 152, 11)",
				textAlign: "center",
				marginTop: "-50px",
				paddingBottom:"17px" }}>
		RevFlix: A OTT platform with Review system and ticket reservation.
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<abbr title="RevFlix is a subscription-based streaming service,movie review system and ticket reservation system that allows our members to watch TV shows and movies without commercials on an internet-connected device. As it's a web based application you can also download TV shows and movies to your iOS, Android, or Windows device and watch in any browser like firefox,chrome… with an internet connection.You can watch from a wide variety of TV shows, movies, documentaries, and add movie reviews,book tickets are special features. The more you watch, the better RevFlix gets at recommending TV shows and movies we think you’ll enjoy."><FooterLink href="#">Aim</FooterLink></abbr>
			<br />
			<FooterLink href="https://github.com/Vishnu-s-cs/RevFlix">Source code</FooterLink>
			
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">OTT Services</FooterLink>
			<FooterLink href="#">Rate Movies</FooterLink>
			<FooterLink href="#">Comment</FooterLink>
			<FooterLink href="#">Book Tickets</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="https://wa.me/+916238935276">Vishnu S</FooterLink>
			<FooterLink href="https://wa.me/+916238658806">Amal Siji</FooterLink>
			<FooterLink href="https://wa.me/+918089258014">Vignesh Mahesh</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;

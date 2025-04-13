import * as React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa6";
import {CSSProperties} from "react";

type UserInfoProps = {
    name: string;
    avatar: string;
    shortBio: string;
    linkedIn: string;
    github: string;
}

const styles: Record<string, CSSProperties> = {
    container: {
        margin: "auto",
        marginTop: "3.5rem",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "aliceblue",
        width: "100%",
        maxWidth: "1300px",
        padding: "10px",
        fontFamily: "Poppins",
        boxSizing: "border-box",
        border: "3px solid lightgray",
    },
    avatar: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginBottom: "-2rem",
        marginTop: "-55px",
        border: "3px solid lightgray",
    },
    name: {
        fontSize: "2rem",
        textTransform: "uppercase",
        letterSpacing: "0.2rem",
    },
    shortBio: {
        fontSize: "1.5rem"
    },
};

class UserInfo extends React.Component<UserInfoProps, never> {
    render() {
        return (
            <header role="user-info" style={styles.container}>
                <img src={this.props.avatar} className="hover-scale" style={styles.avatar} alt="avatar of the person" />
                <h2 style={styles.name}>{this.props.name}</h2>
                <p style={styles.shortBio}>{this.props.shortBio}</p>
                <a href={this.props.linkedIn} aria-label="Visit LinkedIn profile" >
                    <FaLinkedin className="square-icon" />
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a href={this.props.github} aria-label="Visit GitHub profile" >
                    <FaGithub className="round-icon" />
                    <span className="sr-only">Github</span>
                </a>
            </header>
        );
    }
}

export default UserInfo;
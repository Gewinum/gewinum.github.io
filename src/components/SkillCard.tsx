import * as React from "react";
import Nothing from "../utils/Nothing.ts";
import {CSSProperties} from "react";

type SkillCardProps = {
    icon: React.ReactNode;
    content: string;
}

const styles: Record<string, CSSProperties> = {
    container: {
        maxWidth: "76vw",
        width: "350px",
        backgroundColor: "aliceblue",
        padding: "30px",
        textAlign: "center",
        border: "3px solid lightgray",
        borderRadius: "10px",
    },
    icon: {
        fontSize: "3rem",
    },
    contents: {
        fontFamily: "Poppins",
        fontSize: "1.3rem",
    }
};

class SkillCard extends React.Component<SkillCardProps, Nothing> {
    render() {
        return (
            <div className="hover-scale" style={styles.container}>
                <div style={styles.icon}>
                    {this.props.icon}
                </div>
                <p style={styles.contents}>{this.props.content}</p>
            </div>
        )
    }
}

export default SkillCard;
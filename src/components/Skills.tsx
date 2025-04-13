import * as React from "react";
import SkillCard from "./SkillCard.tsx";
import Nothing from "../utils/Nothing.ts";
import {CSSProperties} from "react";

type Skill = {
    icon: React.ReactNode;
    content: string;
};

type SkillsProps = {
    skills: Skill[];
}

const styles: Record<string, CSSProperties> = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "3rem"
    },
    header: {
        fontFamily: "Poppins",
        marginBottom: "1rem",
        textAlign: "center",
        marginTop: "2rem",
        fontSize: "1.7rem",
    }
};

class Skills extends React.Component<SkillsProps, Nothing> {
    render() {
        return (
            <>
                <h2 style={styles.header}>My skills</h2>
                <div role="skills-list" style={styles.container}>
                    {this.props.skills.map((skill, index) => (
                        <SkillCard key={index} icon={skill.icon} content={skill.content} />
                    ))}
                </div>
            </>
        )
    }
}

export default Skills;
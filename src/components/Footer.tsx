import * as React from "react";
import Nothing from "../utils/Nothing.ts";
import {CSSProperties} from "react";

const styles: Record<string, CSSProperties> = {
    container: {
        margin: "auto",
        marginTop: "3.5rem",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "aliceblue",
        width: "100%",
        maxWidth: "1300px",
        padding: "10px 0",
        fontFamily: "Poppins",
        boxSizing: "border-box",
        border: "3px solid lightgray",
        fontSize: "1.5rem",
    }
};

class Footer extends React.Component<Nothing, Nothing> {
    render() {
        return (
            <div role="footer" style={styles.container}>
                Crafted with care and passion. © 2025 Gewinum. All rights reserved.
            </div>
        )
    }
}

export default Footer;
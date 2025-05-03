import * as React from "react";
import Nothing from "../utils/Nothing.ts";

const styles: Record<string, React.CSSProperties> = {
    header: {
        fontFamily: "Poppins",
        marginBottom: "1rem",
        textAlign: "center",
        marginTop: "3.5rem",
        fontSize: "1.7rem",
    },
    form: {
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
        display: "block",
    },
    input: {
        width: "70%",
        padding: "10px",
        border: "3px solid lightgray",
        borderRadius: "15px",
        fontSize: "1.5rem",
        margin: "10px auto",
        display: "block",
    },
    textarea: {
        width: "90%",
        padding: "10px",
        border: "3px solid lightgray",
        borderRadius: "15px",
        minHeight: "200px",
        fontSize: "1rem",
        fontFamily: "sans-serif"
    },
    button: {
        backgroundColor: "black",
        color: "white",
        padding: "10px 20px",
        borderRadius: "15px",
        border: "5px solid white",
        cursor: "pointer",
        fontSize: "1.5rem",
        margin: "10px auto",
        display: "block",
        fontFamily: "Poppins",
    }
};

type Props = {
    apiKey: string;
}

class ContactMe extends React.Component<Props, Nothing> {
    render() {
        return (
            <div>
                <h2 style={styles.header}>Contact me</h2>
                <form action="https://api.web3forms.com/submit" method="POST" style={styles.form}>
                    <input type="hidden" name="access_key" value={this.props.apiKey} />

                    <p>Enter your name</p>
                    <input type="text" name="name" required style={styles.input} />
                    <p>Enter your email</p>
                    <input type="email" name="email" required style={styles.input} />
                    <p>Message:</p>
                    <textarea name="message" style={styles.textarea} required></textarea>

                    <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />

                    <button type="submit" style={styles.button}>Send</button>
                </form>
            </div>
        )
    }
}

export default ContactMe;
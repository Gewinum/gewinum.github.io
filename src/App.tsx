import './App.css'
import * as React from "react";
import UserInfo from "./components/UserInfo.tsx";
import './App.css';
import Skills from "./components/Skills.tsx";
import Footer from "./components/Footer.tsx";
import data from "./assets/data.tsx";
import Nothing from "./utils/Nothing.ts";
import ContactMe from "./components/ContactMe.tsx";

class App extends React.Component<Nothing, Nothing> {
  render() {
    return (
        <div>
            <header>
                <UserInfo {...data.user} />
            </header>
            <main>
                <Skills skills={data.skills}/>
                <ContactMe apiKey={data.contactApiKey} />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
  }
}

export default App

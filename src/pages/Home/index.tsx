import NavBar from "../../components/NavBar"
import Shops from "../../containers/Shops"

import { Section } from "./styles"

const Home = () => {
    return (
        <Section>
            <NavBar />
            <Shops />
        </Section>
    )
}

export default Home
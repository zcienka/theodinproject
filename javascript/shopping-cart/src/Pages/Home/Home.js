import Content from "./Content";
import Items from "./NewItems";
import Newsletter from "./Newsletter";

const Home = () => (
    <div style={{overflowX: "hidden"}}>
        <Content/>
        <Items/>
        <Newsletter/>
    </div>
)
export default Home

import {Wrapper, Image, EmailContainer, Container} from "./Newsletter.styles"
import DiscountImage from "../../../images/discount_image.png"

const Newsletter = () => (
    <Container>
        <Wrapper>
            <Image src={DiscountImage}>

            </Image>
            <h2>
                Do you want to save some money?
            </h2>
        </Wrapper>
        <EmailContainer>
            <div className={"desktop-container"}>
                <h2 className={"header"}>
                    Do you want to save some money?
                </h2>
                <h3>
                    Subscribe to our newsletter to receive
                    information about your favourite products
                    and get 30% off of your next purchase.
                </h3>
                <div className="container">
                    <input type="text" placeholder="Your email address"/>
                </div>
            </div>
        </EmailContainer>

    </Container>
)

export default Newsletter

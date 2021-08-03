import {Image, Container} from "./Item.styles"
import {useHistory} from 'react-router-dom';


function Item({photo, itemName, price, itemId}) {
    const history = useHistory();
    return (
        <>
            <Container onClick={() => history.push(`/item-preview/${itemId}`)}>
                <Image src={require(`../../images/products/${photo}`).default}>

                </Image>
                <div id={"item-info"}>
                    <p id={"item-name"}>{itemName}</p>
                    <p id={"price"}>${price}</p>
                </div>
            </Container>
        </>
    )
}

export default Item

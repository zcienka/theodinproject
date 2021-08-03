import {Content, Products} from "./Products.styles"
import Item from "../../../components/Item"
import {products} from '../../../products'


function DisplayItems() {
    const listItems = products.map(item =>
        <>
            <Item
                photo={item.src}
                itemName={item.name}
                price={item.price}
                itemId={item.id}
            />
        </>
    )
    return (
        <Content>
            <Products>
                {listItems}
            </Products>
        </Content>
    )
}
export default DisplayItems


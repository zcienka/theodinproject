import {Image, ProductInfo, Wrapper} from "./ItemsInCart.styles"

const ItemsInCart = ({product}) => (
    <Wrapper>
        <Image src={require(`../../../images/products/${product.src}`).default}>

        </Image>

        <ProductInfo>
            <div id={"block1"}>
                <p id={"name"}>{product.name}</p>
                <p id={"size"}>
                    Size: {product.size}
                </p>
                <p id={"price"}>${Math.round((product.price * parseInt(product.numOfProducts)) * 100) / 100}</p>
                <p id={"num-of-products"}>
                    {product.numOfProducts}
                </p>
            </div>

        </ProductInfo>
    </Wrapper>
)

export default ItemsInCart
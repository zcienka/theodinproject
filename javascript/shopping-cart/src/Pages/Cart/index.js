import {Wrapper, OrderSummary, SummaryContainer, Container} from "./Cart.styles"
import ItemsInCart from "./ItemsInCart/index"

function Cart() {
    const storage = JSON.stringify(localStorage.getItem('products')) === "null"
    const products = storage ? [] : JSON.parse(localStorage.getItem('products'))
    const displayedProducts = products.map((product) =>
        <>
            <ItemsInCart product={product}/>
        </>
    )

    const totalPrice = Math.round((products.reduce((totalPrice, product) =>
        totalPrice + parseFloat(product.price) * parseFloat(product.numOfProducts), 0)) * 100) / 100

    const numOfProducts = products.reduce(((products, product) =>
        products + product.numOfProducts), 0)

    return (
        <Container>
            <Wrapper>
                <h2>Shopping Cart</h2>
                {displayedProducts}
            </Wrapper>

            <SummaryContainer>
                <OrderSummary>
                    <h2>Order summary</h2>
                    <div className={"details"}>
                        <div className={"newline"}>
                            <p className={"left"}>Number of products:</p>
                            <p className={"right"}>{numOfProducts}</p>
                        </div>

                        <div className={"newline"}>
                            <p className={"left"}>Shipping:</p>
                            <p className={"right"}>Free</p>
                        </div>

                        <div className={"newline"}>
                            <p className={"left"}>Total:</p>
                            <p className={"right"}>${totalPrice}</p>
                        </div>
                        <button>
                            Checkout
                        </button>
                    </div>
                </OrderSummary>
            </SummaryContainer>
        </Container>
    )
}

export default Cart
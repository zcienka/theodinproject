import {Image, Wrapper, ItemInfo, NumberOfItems, AddToCart, Container} from "./ItemPreview.styles"
import {useEffect, useState} from "react";
import filledHeartIcon from "../../../images/icons/filled-heart.png"
import {useParams} from 'react-router-dom'
import {products} from '../../../products'

function Content() {
    const [showItemSize, setShowItemSize] = useState(false)
    const {id} = useParams()
    const currentProduct = products.find(element => element.id === id)
    const [count, setCount] = useState(1)
    const storage = JSON.stringify(localStorage.getItem('products')) === "null"
    const [addToCart, setAddToCart] = useState(storage ? [] : JSON.parse(localStorage.getItem('products')))
    const [storageIds, setStorageIds] = useState(storage ? [] : JSON.parse(localStorage.getItem('productsIds')))
    const [productSize, setProductSize] = useState("Choose your size")
    const [isSizeChosen, setIsSizeChosen] = useState(false)


    useEffect(() => {
        currentProduct["numOfProducts"] = []
        currentProduct.numOfProducts = count
    }, [currentProduct, count])


    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(addToCart))
    }, [addToCart])

    useEffect(() => {
        localStorage.setItem("productsIds", JSON.stringify(storageIds))
    }, [storageIds])

    const addProductToCart = (product) => {
        if (isSizeChosen) {
            const productIndex = storageIds.indexOf(product.id)
            if (productIndex === -1) {
                setAddToCart([...addToCart, product])
                setStorageIds([...storageIds, product.id])
            } else {
                addToCart[productIndex] = product
                localStorage.setItem("products", JSON.stringify(addToCart))
            }
            setIsSizeChosen(false)
        } else {
            document.querySelector("#no-size-chosen").textContent = "Please choose your size."
            document.querySelector("#no-size-chosen").style.display = "inline"
            document.querySelector("#no-size-chosen").style.textAlign = "center"
        }
        setProductSize("Choose your size")
    }
    const chooseProductSize = (size) => {
        document.querySelector("#no-size-chosen").style.display = "none"
        currentProduct["size"] = []
        currentProduct.size = size
        setShowItemSize(!showItemSize)
        setProductSize(size)
        setIsSizeChosen(true)
    }


    return (
        <>
            <Wrapper>
                <Image src={require(`../../../images/high_res_products/${currentProduct.src}`).default}
                       alt={"product-image"}>

                </Image>
                <Container>
                    <ItemInfo>
                        <div className={"container"}>
                            <h3 id={"item-name"}>{currentProduct.name}</h3>
                            <img src={filledHeartIcon} alt={"heart"}/>
                        </div>
                        <h4 id={"price"}>${currentProduct.price}</h4>

                        <button onClick={() => {
                            setShowItemSize(!showItemSize)
                            document.querySelector(".active").style.opacity = "1"
                        }}>
                            {productSize}
                        </button>

                        <div className={"container"}>
                            <div className={"active"}>
                                <ul style={{display: showItemSize ? "flex" : "none"}}>
                                    <li onClick={() => chooseProductSize("30")}>30</li>
                                    <li onClick={() => chooseProductSize("32")}>32</li>
                                    <li onClick={() => chooseProductSize("34")}>34</li>
                                    <li onClick={() => chooseProductSize("36")}>36</li>
                                    <li onClick={() => chooseProductSize("38")}>38</li>
                                    <li onClick={() => chooseProductSize("40")}>40</li>
                                    <li onClick={() => chooseProductSize("42")}>42</li>
                                    <li onClick={() => chooseProductSize("44")}>44</li>
                                    <li onClick={() => chooseProductSize("46")}>46</li>
                                    <li onClick={() => chooseProductSize("46")}>48</li>
                                </ul>
                            </div>
                        </div>

                        <div id={"no-size-chosen"}>

                        </div>

                    </ItemInfo>
                    <NumberOfItems>
                        <button onClick={() => {
                            if (count > 1)
                                setCount(count - 1)
                        }}>-
                        </button>

                        <div className="box">
                            {count}
                        </div>
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </NumberOfItems>

                    <AddToCart>
                        <button onClick={() => addProductToCart(currentProduct)}>
                            Add to cart
                        </button>
                    </AddToCart>
                </Container>
            </Wrapper>
        </>
    )
}

export default Content
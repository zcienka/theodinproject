import {Wrapper, Images} from "./NewItems.styles"
import Item from "../../../components/Item"
import trainers from "../../../images/products/trainers1.jpg"
import {products} from '../../../products'
// import React from "react";
// import {render} from 'react-dom'

function NewItems() {
    const listItems = products.slice(0, 3).map(item =>
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
        <Wrapper>
            <h2>Our new pieces</h2>
            <div className={"container"}>
                <Images>
                    {listItems}
                </Images>
            </div>
        </Wrapper>)
}

// export default function displayItems() {
//     // let xd = "../../images/products"
//     let styles = {
//         margin: '20px',
//         width: '100px',
//         height: '250px',
//         backgroundColor: 'yellow',
//     };
//     const listItems = products.map(item =>
//         <div>
//             <a>
//                 <img
//                     src={require(`../../images/products/${item.src}`).default}
//                     alt={"lol"}
//                     style={styles}
//                 />
//                 <p>{item.name}</p>
//             </a>
//         </div>
//     )
//     console.log(listItems)
//     return (
//         <>
//             <div>
//                 {listItems}
//             </div>
//         </>
//     )
// }

export default NewItems

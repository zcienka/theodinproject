import DisplayItems from "./Products/index";

function Shop() {
    let display = DisplayItems()
    return (
        <>
            {display}
        </>
    )
}

export default Shop
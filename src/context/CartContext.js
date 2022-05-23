import { createContext, useState } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) => {
        let newItem = {...item, cant};
        let newArray = cart;
        newArray.push(newItem);

        setCart(newArray);

        console.log("se agrego el producto al carrito");
        console.log(cart);
    }

    return (
        <Provider value={{ addToCart, cart }}>
            {children}
        </Provider>
    )
}

export default CartContext;
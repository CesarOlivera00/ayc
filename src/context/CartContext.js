import { createContext, useState } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) => {
        const newItem = {...item, cant};
        setCart(...cart, newItem);
        console.log("se agrego el producto al carrito");
        console.log(newItem);
    }

    return (
        <Provider value={{ addToCart }}>
            {children}
        </Provider>
    )
}

export default CartContext;
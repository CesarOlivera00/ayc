import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const componentsImages = require.context("../assets/images", true);

export default function CartView() {
    const { cart } = useContext(CartContext);
    console.log("Carrito...");
    console.log(cart);

    return (
        <table className="table w-full">
            <tbody>
                {
                    cart.map((item) => 
                        <tr key={item.id}>
                            <td><img src={componentsImages("./" + item.imageUrl)} alt="Shoes"/></td>
                            <td>
                                {item.description}
                                <br/>
                                <br/>
                                <strong>${item.price}</strong>
                            </td>
                            <td><strong>x{item.cant}</strong></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
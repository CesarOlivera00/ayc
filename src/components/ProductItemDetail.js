import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { productos as productosData } from "../data/productos";

import ItemCount from './ItemCount';
import {useContext } from 'react';
import CartContext from '../context/CartContext';

const ProductItemDetail = () => {
    const { productId } = useParams();
    const [product, SetProduct] = useState({});
    const [countProducts, setCountProducts] = useState(0);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        (async () => {
            const getProductDetail = () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(productosData.find(p => p.id === parseInt(productId)));
                    }, 1000);
                })
            }

            const productoData = await getProductDetail();
            
            if (productoData) {
                SetProduct(productoData);
            }
        })()
    }, [productId]);

    // Funcion para el contador
    const onAdd = (count) => {
        console.log("Producto agregado al carrito: " + count.toString());
        setCountProducts(count);
        addToCart(product, count);
    }

    return (
        <>
            <div>Product Detalle - {productId}</div>
            <strong className="p-2">{product.id}</strong>
            <strong className="p-2">{product.name}</strong>
            <strong className="p-2">{product.description}</strong>
            <div className="m-5">
                <Link to='/product/1'>Perisferico</Link>
            </div>
            { countProducts === 0 ? <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount> : <span>Producto agregado al carrito</span> }
        </>
    )
}
export default ProductItemDetail
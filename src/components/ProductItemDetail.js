import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { GetPeripherals } from "../data/firebase/firebase";
import CartContext from '../context/CartContext';

const ProductItemDetail = () => {
    const { productId } = useParams();
    const [product, SetProduct] = useState({});
    const [countProducts, setCountProducts] = useState(0);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        setTimeout(() => {
            GetPeripherals(productId, null).then((result) => {
                if (result.length == 1) {
                    SetProduct(result[0]);
                } else {
                    // Mostrar algun error.
                }
            });
        }, 1000);
        /*
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
        */
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
            { countProducts === 0 ? <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount> : <Link to="/cart">Ver Carrito</Link> }
        </>
    )
}
export default ProductItemDetail
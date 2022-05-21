import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { productos as productosData } from "../data/productos";

import ItemCount from './ItemCount';

const ProductItemDetail = () => {
    const { peripheralId } = useParams();
    const [peripheral, SetPerispheral] = useState({});
    const [countProducts, setCountProducts] = useState(0);

    useEffect(() => {
        (async () => {
            const getPeripheralDetail = () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(productosData.find(p => p.id === parseInt(peripheralId)));
                    }, 1000);
                })
            }

            const productoData = await getPeripheralDetail();
            
            if (productoData) {
                SetPerispheral(productoData);
            }
        })()
    }, [peripheralId]);

    // Funcion para el contador
    const onAdd = (count) => {
        console.log("Producto agregado al carrito: " + count.toString());
        setCountProducts(count);
    }

    return (
        <>
            <div>Perisferico Detalle - {peripheralId}</div>
            <strong className="p-2">{peripheral.id}</strong>
            <strong className="p-2">{peripheral.name}</strong>
            <strong className="p-2">{peripheral.description}</strong>
            <div className="m-5">
                <Link to='/peripheral/1'>Perisferico</Link>
            </div>
            { countProducts === 0 ? <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount> : <span>Producto agregado al carrito</span> }
        </>
    )
}
export default ProductItemDetail
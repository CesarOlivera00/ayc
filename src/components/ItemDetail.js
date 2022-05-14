import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { peripherals as peripheralsData } from "../data/peripherals";

const ItemDetail = () => {
    const { peripheralId } = useParams()
    const [peripheral, SetPerispheral] = useState( {} )

    useEffect( () => {
        (async () => {
            const peripheralData = await getPeripheralDetail();
            if (peripheralData) {
                SetPerispheral(peripheralData);
            }
        })()
    }, [peripheralId]);

    const getPeripheralDetail = () => {
        return new Promise( (resolve) => {
            setTimeout(() => {
                resolve(peripheralsData.find(p => p.id == peripheralId));
            }, 1000);
        })
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
        </>
    )
}
export default ItemDetail
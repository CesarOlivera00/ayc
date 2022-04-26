import { useState, useEffect } from "react";
import { peripherals as peripheralsData } from "../data/peripherals";

import ItemList from '../components/ItemList';

let styleContainer = {
    margin: "10px"
}

const ItemListContainer = () => {
    const [peripherals, SetPerispherals] = useState([]);

    useEffect(() => {
        console.log("Effect: Cargar los perisfericos");

        const GetPerispherals = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(peripheralsData);
            }, 0);
        });

        GetPerispherals.then((result) => {
            console.log("Se obtuvieron los perisfericos");
            console.log(result);
        });
    });
    
    return (
        <div style={styleContainer}>
            <ItemList items={peripheralsData}></ItemList>
        </div>
    );
}

export default ItemListContainer;
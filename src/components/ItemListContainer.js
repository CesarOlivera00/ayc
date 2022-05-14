import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { peripherals as peripheralsData } from "../data/peripherals";

import ItemList from '../components/ItemList';

let styleContainer = {
    margin: "10px"
}

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [peripherals, SetPerispherals] = useState([]);

    console.log("Este es el CategoryID: " + categoryId);

    useEffect(() => {
        console.log("Effect: Cargar los perisfericos");

        const GetPerispherals = new Promise((resolve, reject) => {
            resolve(peripheralsData);
        });

        GetPerispherals.then((result) => {
            console.log("Se obtuvieron los perisfericos");
            console.log(result);
        });
    });

    let peripheralsParam = peripheralsData;
    console.log(peripheralsParam);

    if (categoryId != null) {
        peripheralsParam = peripheralsData.filter(item => item.categoryId == categoryId);
        console.log(peripheralsParam);
    }
    
    return (
        <div style={styleContainer}>
            <ItemList items={peripheralsParam}></ItemList>
        </div>
    );
}

export default ItemListContainer;
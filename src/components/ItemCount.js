import { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);

    function handleAdd(){
        if (count < props.stock) setCount(count + 1);
    }

    function handleSubstract(){
        if (count > 1) setCount(count - 1);
    }

    return (
        <div>
            <div>
                <button className="btn btn-active btn-primary" onClick={handleAdd}>+</button>
                <span>{count}</span>
                <button className="btn btn-active btn-primary" onClick={handleSubstract}>-</button>
            </div>
            <button className="btn btn-active btn-primary" onClick={() => props.onAdd(count)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;
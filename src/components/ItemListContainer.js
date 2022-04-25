let styleTable = {
    margin: "10px"
}

const ItemListContainer = (props) => {
    let rowArray = [];
    let count = parseInt(props.cant);

    console.log(count);
    
    for (let i = 0; i < count; i++) {
        let row = (
            <tr>
                <th>{i + 1}</th>
                <td>Hola {props.name}</td>
            </tr>
        );

        rowArray.push(row);
    }

    return (
        <div className="overflow-x-auto" style={styleTable}>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {rowArray}
                </tbody>
            </table>
        </div>
    );
}

export default ItemListContainer;
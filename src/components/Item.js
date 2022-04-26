let styleItem = {
    display: "inline-block",
    margin: "10px"
}

const Item = (props) => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl" style={styleItem}>
            <figure><img src={props.urlImage} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{props.price.toString()}</h2>
                <p>{props.name}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Comprar Ahora</button>
                </div>
            </div>
        </div>
    );
};

export default Item;
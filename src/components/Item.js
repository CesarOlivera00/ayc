let styleItem = {
    display: "inline-block",
    margin: "10px"
}

let styleImage = {
    height: "200px"
}

const componentsImages = require.context("../assets/images", true);

const Item = (props) => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl" style={styleItem}>
            <figure><img src={componentsImages("./" + props.urlImage)} alt="Shoes" style={styleImage}/></figure>
            <div class="card-body">
                <h2 class="card-title">{props.price.toString()}</h2>
                <p>{props.name}</p>
                <div class="card-actions justify-end">
                    <a href={"/peripheral/" + props.idComponent} class="btn btn-primary">Comprar Ahora</a>
                </div>
            </div>
        </div>
    );
};

export default Item;
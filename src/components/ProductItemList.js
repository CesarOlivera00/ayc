import ProductItem from './ProductItem';

let styleListItem = {
    margin: "0px 50px",
    textAlign: "center"
}

const ProductItemList = (props) => {
    let itemList = props.items.map((item) => <ProductItem idComponent={item.id} name={item.name} price={item.price} urlImage={item.urlImage}></ProductItem> );

    return (
        <div style={styleListItem}>
            {itemList}
        </div>
    );
};

export default ProductItemList;
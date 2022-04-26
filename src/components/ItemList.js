import Item from '../components/Item';

const ItemList = (props) => {
    let itemList = props.items.map((item) => <Item name={item.name} price={item.price} urlImage={item.urlImage}></Item> );

    console.log(itemList);

    return (
        <div>
            {itemList}
        </div>
    );
};

export default ItemList;
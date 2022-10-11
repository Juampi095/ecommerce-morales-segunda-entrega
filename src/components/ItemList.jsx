import React from "react";
import Item from './Item';

const ItemList = (props) => {
    console.log(props.items);
    //mapeo de los productos
    return (
        <div className="item-list">
            {props.items.map((prod)=>{
                return <Item prod={prod}/>
            })
        }
            <Item />
            
            
        </div>
    );
};
export default ItemList;
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from './productos';

const ItemListContainer = () => {


    useEffect(() => {
        const traerProductos = () => {
            return new promise((res, rej) => {
                setTimeout(() => {
                    res(products);
                }, 2000);
            });
        };
        traerProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    return (
        <div className="item-list-container">
            <ItemList />

        </div>
    );


};



// function ItemListContainer({ greeting }) {
//     return (
//         <h3>{greeting}</h3>
//     )
// }
export default ItemListContainer;

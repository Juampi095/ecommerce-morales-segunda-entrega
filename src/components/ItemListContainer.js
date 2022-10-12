import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from './productos';

// const [items, setItems] = useState([]);
const ItemListContainer = () => {


    useEffect(() => {
        const traerProductos = () => {
            return new Promise((res, rej) => {
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
        <main>
        <div className="item-list-container">
            <ItemList />

        </div>
        </main>
    );
    

};

export default ItemListContainer;

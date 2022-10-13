 import React from 'react';
 import { Link } from 'react-router-dom';

 const Item = ({ prod }) => {

   return (
     <article className='card'>
       <img className="Imagenes" src={prod.imagen} />
       <div className='card-info'>
         <h6>{prod.modelo}</h6>
         <h4>${prod.precio}</h4>
               {/* <h5>{prod.category}</h5> */}
         <Link to={`/item/${prod.id}`}><button className="Boton">Comprar</button></Link>
      </div>
     </article>

  )
}
 export default Item;

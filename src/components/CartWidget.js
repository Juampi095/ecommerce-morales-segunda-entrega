import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Se importa lo que quiero usar en cada hoja 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
//Se instalan todos los paquetes de iconos para poder usarse correctamente
function CartWidget(){ 
    return(
        <FontAwesomeIcon icon={faCartShopping} />
    )
}
export default CartWidget;

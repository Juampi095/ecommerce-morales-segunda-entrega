import { Container } from "bootstrap-4-react/lib/components/layout";
import ItemCount from "./ItemCount";

const ItemDetail=({item})=>{
    return(
        <Container>
        <div className="container-detail">
            <img src={item.imagen}></img>
            <div>
                <h2>{item.modelo}</h2>
                <p>
                    Bugatti Divo
                </p>
            <ItemCount stockTotal={25} stockInicial={10}/>

            </div>
    </div>
    </Container>
    );

};
export default ItemDetail; 
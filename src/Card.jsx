import "./Card.css";
import Description from "./Description.jsx";
import Price from "./Price.jsx";

function Card ({title,features,price,finalPrice}){

    return (
    <>
    <div className="Card">
            <Description title={title} features={features}/>
            <Price price={price} finalPrice={finalPrice}/>
    </div> 
    </>

    );
}

export default Card;
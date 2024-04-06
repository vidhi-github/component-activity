
import Card from "./Card.jsx";

function Container(){
    let styles={
    display:"flex",
    flexWrap:"wrap",
    justifyContent: "center",
    alignItems:"center"
    }

    return (
    <>
    <div style={styles}>
        <Card title="Logitech MX Master 35" features="5 programmable functions" price="12,000" finalPrice="8,999"/>
        <Card title="Apple Pencil(2nd Gen)" features="Intutive touch surface" price="11,900" finalPrice="8,999"/>
        <Card title="Zebronics Transformer" features="Designed for iPad Pro" price="1,999" finalPrice="1,299"/>
        <Card title="LPortronics Toad 23" features="Wireless Mouse 24GHz" price="599" finalPrice="299"/>
    </div>    
    </>

    );
}

export default Container;
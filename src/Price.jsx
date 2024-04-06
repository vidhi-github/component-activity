export default function Price ({price,finalPrice}){
    let oldStyles={
        textDecorationLine:"Line-through",
    }
    let newStyles={
        fontWeight:"bold",
    }
    let styles={
        backgroundColor:"yellow",
        height:"30px",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",

    }

    return (
        <div style={styles}>
            <span style={oldStyles}>{price}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{finalPrice}</span>
        </div>
    );

}
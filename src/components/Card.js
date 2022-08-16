import React from 'react'
// import img1 from "../images/Rectangle 36.png";

const Card = (props) => {
    // console.log(props);
    // const [cartItem, setCartItem] = useState([]);

    // const addtocart = (id) => {
    //     let data = res.find((ele) => {
    //         return ele.id === id;
    //     })
    //     setCartItem([...cartItem,data]);
    //     console.log(id);
    //     console.log(cartItem);
    // }

    return (
        <>
            <div className="card" id={props.cardid}>
                <div className="cardimg"><img src={props.cardimg} alt="" /></div>
                <div className="carddetail">
                    <p className="cardname">{props.cardname}</p>
                    <div className="cardmid">
                        <p className="cardprice">${props.cardprice}</p>
                        <button className={props.btnclass} onClick={() => props.btnfunction(props.cardid)}>{props.btntext}</button>
                    </div>
                    <p className="carddesc">{props.carddesc}</p>
                </div>
            </div>
        </>
    )
}

export default Card;
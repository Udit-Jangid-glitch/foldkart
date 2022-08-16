import React from 'react'

const CardInCart = () => {
    return (
        <>
            <div className="card">
                <div className="cardimg"><img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" /></div>
                <div className="carddetail">
                    <p className="cardname">John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet</p>
                    <div className="cardmid">
                        <p className="cardprice">$100</p>
                        <button className='removebtn'>Remove</button>
                    </div>
                    <p className="carddesc">Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.</p>
                </div>
            </div>
        </>
    )
}

export default CardInCart;
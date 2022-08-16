import React from 'react'
import Card from './Card';
// import Sdata from "./Sdata";
// import axios from 'axios';


const Product = (props) => {
  // const [res, setRes] = useState([])

  // useEffect(() => {
  //   axios.get(`https://fakestoreapi.com/products`)
  //     .then((response) => {
  //       // console.log(response.data);
  //       setRes(response.data);
  //     })
  // }, []);

  return (
    <>
      <div className="mainHeadingContainer">
        <h1 className='mainHeading'>PRODUCTS</h1>
      </div>
      <div className="productPage">
        {
          props.res.map((val) => {
            return (
              <Card cardid={val.id}
                cardimg={val.image}
                cardname={val.title}
                cardprice={val.price}
                btnclass='addbtn'
                btntext="Add to Cart"
                carddesc={val.description}
                btnfunction={props.addtocart}
              />
            );
          })
        }
      </div>
    </>
  )
}

export default Product;
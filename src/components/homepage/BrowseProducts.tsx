import sortIcon from "/iconamoon--arrow-down-2-thin.svg"
import "./Home.css"

import { products, ProductArr } from "../products/products"




const BrowserHeader = () => {
    return (

            <div className="browse-header">
                <h1 className="browse-title">Browse All Products</h1>
                <div className='browse-icons'>
                <p>SORT BY</p>
                <img src={sortIcon} alt="Sort by icon" />
                </div>
            </div>
            
    )
}

const BrowserBody = () => {

    const Product = ({product}: { product: ProductArr}) => {
        return (
                <>
                  <img className="browse-product-img" width="150px" height="auto" src={product.img} alt="product image" />
                <div>
                  <p className="browse-product-title">{product.name}</p>
                  <p className="browse-product-description">{product.description}</p>
                  <p className="browse-product-price">{product.price}$</p>
                </div>
                </>
        )
    }

    return (

        <div className="browse-body-container">

           <div className="column">
           <div className="browse-product-container one">
            <Product product={products[0]} />
            </div>
            <div className="browse-product-container two">
            <Product product={products[1]} />
            </div>
            <div className="browse-product-container three">
            <Product product={products[2]} />
            </div>

           </div>
           <div className="column">
           <div className="browse-product-container four">
            <Product product={products[3]} />
            </div>
            <div className="browse-product-container five">
            <Product product={products[4]} />
            </div>
            <div className="browse-product-container six">
            <Product product={products[5]} />
            </div>

           </div>
           <div className="column three">

            <div className="product-seven-eight">
              <div className="browse-product-container seven">
              <Product product={products[6]} />
              </div>
              <div className="browse-product-container eight">
              <Product product={products[7]} />
              </div>
            </div>

            <div className="browse-product-container nine">
            <Product product={products[8]} />
            </div>
           </div>

        </div>

    )

}

const BrowseProducts = () => {

    return (
        <>
        <BrowserHeader />
        <div className='browse-container'>
        <BrowserBody />
        </div>
        </>
    );
}

export default BrowseProducts;

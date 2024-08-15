import sortIcon from "../../assets/iconamoon--arrow-down-2-thin.svg"
import "./Home.css"

import slimTable from "../../assets/products/console-table.jpg"

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

    const Product = () => {
        return (
                <>
                  <img className="browse-product-img" src={slimTable} alt="product image" />
                <div>
                  <p className="browse-product-title">FRAXINUS</p>
                  <p className="browse-product-description">Slim Console Table</p>
                  <p className="browse-product-price">1.299 $</p>
                </div>
                </>
        )
    }

    return (

        <div className="browse-body-container">

           <div className="column">
           <div className="browse-product-container one">
            <Product />
            </div>
            <div className="browse-product-container two">
            <Product />
            </div>
            <div className="browse-product-container three">
            <Product />
            </div>

           </div>
           <div className="column">
           <div className="browse-product-container four">
            <Product />
            </div>
            <div className="browse-product-container five">
            <Product />
            </div>
            <div className="browse-product-container six">
            <Product />
            </div>

           </div>
           <div className="column three">

            <div className="product-seven-eight">
              <div className="browse-product-container seven">
              <Product />
              </div>
              <div className="browse-product-container eight">
              <Product />
              </div>
            </div>

            <div className="browse-product-container nine">
            <Product />
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

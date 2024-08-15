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
            <div className="browse-product-container">
                <div>
                  <img className="browse-product-img" width="150px" src={slimTable} alt="product image" />
                </div>
                <div>
                  <p className="browse-product-title">FRAXINUS</p>
                  <p className="browse-product-description">Slim Console Table</p>
                  <p className="browse-product-price">1.299 $</p>
                </div>
            </div>
        )
    }

    return (

        <div className="browse-body-container">

           <div className="column one">
            <Product />
            <Product />
            <Product />

           </div>
           <div className="column two">
            <Product />
            <Product />
            <Product />

           </div>
           <div className="column three">
            <Product />
            <Product />
            <Product />

           </div>

        </div>

    )

}

const BrowseProducts = () => {

    return (
        <>
        <div className='browse-container'>
        <BrowserHeader />
        <BrowserBody />
        </div>
        </>
    );
}

export default BrowseProducts;

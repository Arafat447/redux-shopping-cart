import React from 'react';
const Products = (props) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                {
                props.data.map(pd=>(
                    <div className="col-md-4 card-item">
                        <img className="img-fluid" src={pd.image} alt="" />
                        <h6>{pd.title}</h6>
                        <button className="btn-primary">Add To Cart</button>
                    </div>
                ))
            }
                </div>
            </div>
        </div>
    );
};

export default Products;
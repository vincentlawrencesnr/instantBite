import Style from './CustomersSay.module.css';

function CustomersSay() {

    return (
        <div className={`${Style["customers-say-container"]} container-fluid p-5`} style={{marginTop: "7rem", marginBottom: "2.5rem", backgroundColor: "#2b323cff",}}>
            <h2 style={{textAlign: "center", fontSize: "42px", marginTop: "50px", marginBottom: "18px", fontWeight: "800", color: "#faf5f5ff"}}>What Our <span style={{color: "#ff9900"}}>Customers</span> Say</h2>
            <p style={{textAlign: "center", marginBottom: "60px", fontSize: "18px", color: "#ddd7d7ff"}}>Hear from our satisfied customers who have experienced the delicious flavors and exceptional service <br /> at InstantBite.</p>

            <div className="row justify-content-center">
                <div className="col-md-3 mb-4">
                    <div className={`${Style["customer-card"]} rounded-5 bg-light p-4`}>
                        <div className={Style["customer-top"]}>
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" className={Style["customer-img"]} />
                            <div className={Style["customer-info"]}>
                                <h5 style={{color: "#12100e", marginBottom: "5px", fontSize: "18px", fontWeight: "700"}}>Emily R.</h5>
                                <p style={{color: "#666", fontSize: "18px", fontWeight: "400"}}>2 days ago</p>
                            </div>
                        </div>      
                        <div className={`${Style["customer-bottom"]} mt-1`}>
                        <div className={Style["rating-stars"]}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            </div>
                        <p style={{color: "#666", fontSize: "16px", marginBottom: "20px", marginTop: "4px"}}>"InstantBite has completely changed the way I order food. The app is so easy to use, and my food always arrives hot and on time. Highly recommend!"</p>
                    </div>
                </div>
         </div>


         <div className="col-md-3 mb-4">
                    <div className={`${Style["customer-card"]} rounded-5 bg-light p-4`}>
                        <div className={Style["customer-top"]}>
                            <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="" className={Style["customer-img"]} />
                            <div className={Style["customer-info"]}>
                                <h5 style={{color: "#12100e", marginBottom: "5px", fontSize: "18px", fontWeight: "700"}}>Jacobs O.</h5>
                                <p style={{color: "#666", fontSize: "18px", fontWeight: "400"}}>3 days ago</p>
                            </div>
                        </div>      
                        <div className={`${Style["customer-bottom"]} mt-1`}>
                        <div className={Style["rating-stars"]}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            </div>
                        <p style={{color: "#666", fontSize: "16px", marginBottom: "20px", marginTop: "4px"}}>"The shawarma is authentic and delicious. Reminds me of the real deal from my travels"</p>
                    </div>
                </div>
         </div>

         <div className="col-md-3 mb-4">
                    <div className={`${Style["customer-card"]} rounded-5 bg-light p-4`}>
                        <div className={Style["customer-top"]}>
                            <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="" className={Style["customer-img"]} />
                            <div className={Style["customer-info"]}>
                                <h5 style={{color: "#12100e", marginBottom: "5px", fontSize: "18px", fontWeight: "700"}}>Mohammed M.</h5>
                                <p style={{color: "#666", fontSize: "18px", fontWeight: "400"}}>5 days ago</p>
                            </div>
                        </div>      
                        <div className={`${Style["customer-bottom"]} mt-1`}>
                        <div className={Style["rating-stars"]}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            </div>
                        <p style={{color: "#666", fontSize: "16px", marginBottom: "20px", marginTop: "4px"}}>"Great food and the app is super easy to use. My go-to for lunch orders!"</p>
                    </div>
                </div>
         </div>


         <div className="col-md-3 mb-4">
                    <div className={`${Style["customer-card"]} rounded-5 bg-light p-4`}>
                        <div className={Style["customer-top"]}>
                            <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="" className={Style["customer-img"]} />
                            <div className={Style["customer-info"]}>
                                <h5 style={{color: "#12100e", marginBottom: "5px", fontSize: "18px", fontWeight: "700"}}>Kylie J.</h5>
                                <p style={{color: "#666", fontSize: "18px", fontWeight: "400"}}>2 weeks ago</p>
                            </div>
                        </div>      
                        <div className={`${Style["customer-bottom"]} mt-1`}>
                        <div className={Style["rating-stars"]}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            </div>
                        <p style={{color: "#666", fontSize: "16px", marginBottom: "20px", marginTop: "4px"}}>"From smoky barbecue to molten chocolate cake, every dish is full of flavor and perfectly cooked."</p>
                    </div>
                </div>
         </div>


        </div>
    </div>
        
    )
}

export default CustomersSay;
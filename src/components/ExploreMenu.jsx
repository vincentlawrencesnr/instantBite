import Beef from '../assets/beef sauce.jpg';
import FriedEggSauce from '../assets/fried egg sauce.jpg';
import MashedFish from '../assets/marshed fish.jpg';
import GarnishedRice from '../assets/ganished rice.jpg';
import QuickDessert from '../assets/quick desert.jpg';
import PlantainPorridge from '../assets/rice plantain porridge.jpg';
import Style from './ExploreMenu.module.css';

function ExploreMenu() {

    return(
        <div className="container bg-body-secondary" style={{marginTop: "7rem", marginBottom: "7rem"}}>
        <div className="explore-title mb-5 text-center">
            <h2 style={{fontWeight: "bold", fontSize: "2.5rem"}}>Explore Our <span className="menu-span" style={{color: "#FFA500"}}>Menu</span></h2>
            <p style={{fontSize: "1.2rem", marginTop: "1.3rem", color: "#555"}}>From flame-grilled burgers to authentic Middle Eastern cuisine, discover <br /> flavors that'll make your taste buds dance.</p>
        </div>
        <div className={`${Style["card-container"]}  mt-4"`}>
            <div className={`${Style["card-explore"]} `}>
                <div className={`${Style["card-top"]} `}>
                    <img src={Beef} loading="lazy" className={``} style={{width: "175px", height: "150px"}} alt="" />
                </div>

                <div className={`${Style["card-bottom"]} `}>
                    <h6>Beef Sauce</h6>
                    <p style={{color: "#555", fontWeight: "3.5rem"}}>Rich, bold and slow-cooked to perfection - our beef sauce turns every bite into comfort.</p>
                </div>
            </div>

            <div className={`${Style["card-explore"]} `}>
                <div className={`${Style["card-top"]} `}>
                    <img src={FriedEggSauce} loading="lazy" className={``} style={{width: "175px", height: "150px"}} alt="" />
                </div>

                <div className={`${Style["card-bottom"]} `}>
                    <h6>Fried Egg Sauce</h6>
                    <p style={{color: "#555", fontWeight: "3.5rem"}}>Golden, savoury, and irresistibly satisfying - our fried egg sauce brings simple comfort to every plate.</p>
                </div>
            </div>

            <div className={`${Style["card-explore"]} `}>
                <div className={`${Style["card-top"]} `}>
                    <img src={MashedFish} loading="lazy" className={``} style={{width: "175px", height: "150px"}} alt="" />
                </div>

                <div className={`${Style["card-bottom"]} `}>
                    <h6>Mashed Fish</h6>
                    <p style={{color: "#555", fontWeight: "3.5rem"}}>Crispy, tender, and full of flavour - our mashed fish is comfort made delicious.</p>
                </div>
            </div>

            <div className={`${Style["card-explore"]} `}>
                <div className={`${Style["card-top"]} `}>
                    <img src={GarnishedRice} loading="lazy" className={``} style={{width: "175px", height: "150px"}} alt="" />
                </div>

                <div className={`${Style["card-bottom"]} `}>
                    <h6>Garnished Rice</h6>
                    <p style={{color: "#555", fontWeight: "3.5rem"}}>Colorful, fragrant, and bursting with taste - our garnsihed rice makes every meal feel special. </p>
                </div>
            </div>

            <div className={`${Style["card-explore"]} `}>
                <div className={`${Style["card-top"]} `}>
                    <img src={PlantainPorridge} loading="lazy" className={``} style={{width: "175px", height: "150px"}} alt="" />
                </div>

                <div className={`${Style["card-bottom"]} `}>
                    <h6>Rice - Plantain Porridge</h6>
                    <p style={{color: "#555", fontWeight: "3.5rem"}}>Hearty, comforting, and richly spiced - our rice and plantain porridge is pure home-style goodness.</p>
                </div>
            </div>

            <div className={`${Style["card-explore"]} `}>
                <div className={`${Style["card-top"]} `}>
                    <img src={QuickDessert} loading="lazy" className={``} style={{width: "175px", height: "150px"}} alt="" />
                </div>

                <div className={`${Style["card-bottom"]} `}>
                    <h6>Quick Dessert</h6>
                    <p style={{color: "#555", fontWeight: "3.5rem"}}>Sweet, light, and delightfully indulgent - our quick dessert is the perfect finish to any meal.</p>
                </div>
            </div>

        </div>
    </div>
    )
    
}

export default ExploreMenu;

// https://instant-bite.netlify.app/
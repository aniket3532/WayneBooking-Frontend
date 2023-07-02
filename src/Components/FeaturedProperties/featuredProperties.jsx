import "./featuredProperties.css";

const FeaturedProperties = () => {
    return ( 
        <div className="fp">
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpImg" />
                <span className="fpName">Yellovy Aparthotel</span>
                <span className="fpCity">Chennai</span>
                <span className="fpPrice">Sarting from 1000</span>
                <div className="fpRating">
                    <button>9.1</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o=" alt="" className="fpImg" />
                <span className="fpName">Villa Domina</span>
                <span className="fpCity">Split City Center, Croatia, Split</span>
                <span className="fpPrice">Starting from ₹ 7,857</span>
                <div className="fpRating">
                    <button>9.4</button>
                    <span>Wonderful</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" alt="" className="fpImg" />
                <span className="fpName">Yellovy Aparthotel</span>
                <span className="fpCity">Chennai</span>
                <span className="fpPrice">Sarting from 1000</span>
                <div className="fpRating">
                    <button>9.1</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=b4f13731abc220a62dc44e8d52f2b5a843257fabeca40035d8b76d80ee523cf0&o=" alt="" className="fpImg" />
                <span className="fpName">Yellovy Aparthotel</span>
                <span className="fpCity">Chennai</span>
                <span className="fpPrice">Sarting from 1000</span>
                <div className="fpRating">
                    <button>9.1</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
}
 
export default FeaturedProperties;
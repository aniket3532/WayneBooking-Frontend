import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true");
    // "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
    // "https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o="
    // "https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o="
    // "https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=b4f13731abc220a62dc44e8d52f2b5a843257fabeca40035d8b76d80ee523cf0&o="

    return ( 
        <div className="fp">
            {loading ? "Loading" : <>
            {data.map((item) => (
                <div className="fpItem" key={item._id}>
                    <img src={item.photos[0]} alt="" className="fpImg" />
                    <span className="fpName">{item.name}</span>
                    <span className="fpCity">{item.city}</span>
                    <span className="fpPrice">Sarting from ${item.cheapestPrice}</span>
                    {item.rating && <div className="fpRating">
                        <button>{item.rating}</button>
                        <span>Excellent</span>
                    </div>}
                </div>
            ))}
            </>}
        </div>
    );
}
 
export default FeaturedProperties;
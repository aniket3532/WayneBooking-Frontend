import "./propertyList.css";

const PropertyList = () => {
    return ( 
        <div className="pList">
            <div className="pListItem">
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className="pListImg" />
                <div className="pListTitle">
                    <h2>Hotels</h2>
                    <h3>232 hotels</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" className="pListImg" />
                <div className="pListTitle">
                    <h2>Resorts</h2>
                    <h3>2553 resorts</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" className="pListImg" />
                <div className="pListTitle">
                    <h2>Villas</h2>
                    <h3>600,675 villas</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" className="pListImg" />
                <div className="pListTitle">
                    <h2>Apartments</h2>
                    <h3>1,124,137 apartments</h3>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" alt="" className="pListImg" />
                <div className="pListTitle">
                    <h2>Cottages</h2>
                    <h3>654,266 cottages</h3>
                </div>
            </div>
        </div>
    );
}
 
export default PropertyList;
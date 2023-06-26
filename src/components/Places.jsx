import data from "./data";
export default function Places(data){
    return(
        <div className="places--div">
            <img className="places--img" src={data.img}/>
            <div className="places--info">
                <div className="places--firstRow">
                    <img className="pin" src="src/images/pin2.jpg"/>
                    <h4>{data.country}</h4>
                    <p><a href={data.link} target="_blank">View on google maps</a></p>
                </div>
               <h2>{data.state}</h2>
               <p>{data.description}</p>
            </div>
        </div>
    );
}
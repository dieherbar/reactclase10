import Button from "./button.js";
import fullData from "../data/data.js";

export default function Card(){
    // const data = "yo ke se";
    const data = (fullData.forEach(text => {
         text.length
        }
    ));
    //const magic = () => new Date();
    return(
    <span>
        {data.text}
        {/* {fullData.length} */}
        
        </span>
    );
}
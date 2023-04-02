import fullData from "../data/data.js";
const data = fullData;
data.title = fullData[1];
data.text = fullData[0];

export default function Card() {
    return (
        <span>
            {data.text}
        </span>
    );
}
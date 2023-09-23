import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>GF</h2>
            <p>Has : {asset}</p>
            <p>Also Has : {gift}</p>
        </div>
    );
};

export default Special;
import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [money, setMoney]= useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Rubin'}></Cousin>
                <Cousin name={'Sinha'}></Cousin>
            </section>
            <p>Money : {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000tk</button>
        </div>
    );
};

export default Aunty;
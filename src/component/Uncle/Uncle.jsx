import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin asset={asset} name={'Rofiq'}></Cousin>
                <Cousin name={'Sunny'}></Cousin>
                <Cousin name={'Sana'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;
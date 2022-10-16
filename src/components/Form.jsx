import axios from "axios";
import { useState, useEffect } from "react";

const Form = () => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [ilToGbp, setIlToGbp] = useState(0);
    const [usdToGbp, setUsdToGbp] = useState(0);
    const [ilsToUsd, setIlsToUsd] = useState(0);

    useEffect(() => {
        async function getCurrency() {
            const response = await axios.get(
                "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json"
            );
            console.log(response.data);
            const gbp = response.data.eur.gbp;
            const ils = response.data.eur.ils;
            const usd = response.data.eur.usd;

            const ilsGbp = ils / gbp;
            setIlToGbp(ilsGbp);
            setUsdToGbp(gbp / usd);
            setIlsToUsd(ils / usd);
        }
        getCurrency();
        console.log(usdToGbp);
        console.log(ilToGbp);
        console.log(ilsToUsd);
    }, []);

    return (
        <div className="ben mt-5 text-warning  ">
            <div className="text-center">
                <h1 className="mb-5 text-warning">Asos Calculator</h1>
                <input
                    type="number"
                    placeholder="Price in Pounds £"
                    onChange={(e) => setPrice(e.target.value)}
                    className="m-2"
                />
                <input
                    type="number"
                    placeholder="Discount"
                    onChange={(e) => setDiscount(e.target.value)}
                />
                <span className="m-1">%</span>
                <h1 className="mt-5 text-warning">
                    {discount > 0 &&
                        (price * (1 - discount / 100) * ilToGbp).toFixed(2) +
                            " Shekels ₪"}
                </h1>
                <div className="mt-5">
                    <p>Tax Limitation:</p>
                    <p>75$ = {75 * usdToGbp.toFixed(2)} pound</p>
                    <p>75$ = {75 * ilsToUsd.toFixed(2)} Shekels</p>
                </div>
            </div>
        </div>
    );
};

export default Form;

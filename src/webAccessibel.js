const functiona = async () => {
    debugger;
    const responseA = await fetch(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json"
    );
    const response = await responseA.json();
    const gbp = response.eur.gbp;
    const ils = response.eur.ils;
    const ilsGbp = ils / gbp;
    setInterval(() => {
        window.document.querySelectorAll("span").forEach((span) => {
            if (span.innerText.includes("£")) {
                const innerText = span.innerText
                    .replace("£", "")
                    .replace(" ", "")
                    .replace("From", "");

                const price = parseInt(innerText);

                span.innerText = `${(price * ilsGbp * 0.83)
                    .toFixed(2)
                    .toString()} ₪`;
            }
        });
    }, 4000);
};

functiona();

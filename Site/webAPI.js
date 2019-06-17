let serviceHost = "98.181.188.165";

let makeRequest = async (options) => {
    let fetchOptions = {
        method: options.method,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*",
            "Authorization": null,
        },
        body: options.hasOwnProperty("body") ? options.body : null,
    };

    let response = await fetch(`${serviceHost}:3000/` + options.endpoint, fetchOptions);
    return response;
};

let RequestBestMove = async (cards) => {
    let payload = { cards: cards, };

    let response = await makeRequest({
        method: "POST",
        endpoint: "bestmove",
        body: JSON.stringify(payload),
    });
    response = await response.json();
    return response;
};
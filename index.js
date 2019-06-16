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

    let response = await fetch("http://localhost:3000/" + options.endpoint, fetchOptions);
    return response;
};

let testRequest = async () => {
    let payload = {
        cards: [ "TS", "JS", "QS", "KS", "6S" ],
    };

    let response = await makeRequest({
        method: "POST",
        endpoint: "bestmove",
        body: JSON.stringify(payload),
    });
    response = await response.json();
    console.log(response);
    return response;
};

testRequest();
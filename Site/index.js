let SendTestRequests = async () => {
    let responses = [];
    console.log(await RequestBestMove([ "TS", "JS", "QS", "KS", "6S" ]));
    console.log(await RequestBestMove([ "4S", "4H", "4C", "4D", "6S" ]));
    console.log(await RequestBestMove([ "4S", "4H", "4C", "4D", "AS" ]));
    console.log(await RequestBestMove([ "AC", "AS", "AD", "AH", "6S" ]));
};

function CreateSiteContainer() {
	//  Create the base container that the program will exist in
	container = document.createElement("div");
    container.style.width = "320px";
    container.style.height = "560px";
    container.style.minHeight = "560px";
    container.style.backgroundColor = "black";
    container.style.color = "white";
    container.style.padding = "10px 0px 0px 0px";
    document.body.appendChild(container);
    return container;
}

function Initialize() {
    SendTestRequests();

    let container = CreateSiteContainer();

    let cardButtonSet1 = new CardButtonSet({
        card1Face: "Ace",
        card1Suit: "Club",
        card2Face: "Ace",
        card2Suit: "Club",
    });
    if (cardButtonSet1) { container.appendChild(cardButtonSet1.content); }

    let cardButtonSet2 = new CardButtonSet({
        card1Face: "Ace",
        card1Suit: "Club",
        card2Face: "Ace",
        card2Suit: "Club",
    });
    if (cardButtonSet2) { container.appendChild(cardButtonSet2.content); }

    let cardButtonSet3 = new CardButtonSet({
        card1Face: "Ace",
        card1Suit: "Club",
        card2Face: "Ace",
        card2Suit: "Club",
    });
    if (cardButtonSet3) { container.appendChild(cardButtonSet3.content); }

    let cardButtonSet4 = new CardButtonSet({
        card1Face: "Ace",
        card1Suit: "Club",
        card2Face: "Ace",
        card2Suit: "Club",
    });
    if (cardButtonSet4) { container.appendChild(cardButtonSet4.content); }

    let cardButtonSet5 = new CardButtonSet({
        card1Face: "Ace",
        card1Suit: "Club",
        card2Face: "Ace",
        card2Suit: "Club",
    });
    if (cardButtonSet5) { container.appendChild(cardButtonSet5.content); }
}

//  Run the initialization call
Initialize();
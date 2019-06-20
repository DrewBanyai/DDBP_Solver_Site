function CreateSiteContainer() {
	//  Create the base container that the program will exist in
	container = document.createElement("div");
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.minHeight = "560px";
    container.style.backgroundColor = "black";
    container.style.color = "white";
    container.style.padding = "10px 0px 0px 0px";
    document.body.appendChild(container);
    return container;
}

function Initialize() {
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

    let cardButtonSetList = [ cardButtonSet1, cardButtonSet2, cardButtonSet3, cardButtonSet4, cardButtonSet5 ];
    let highlightAll = (color) => { cardButtonSetList.forEach((set) => set.highlight(color)); };
    cardButtonSetList.forEach((set) => set.setOnclick(() => highlightAll("white")));

    let submitHand = async () => {
        let cardList = [];
        highlightAll("white");
        cardList.push(cardButtonSet1.getCardID());
        cardList.push(cardButtonSet2.getCardID());
        cardList.push(cardButtonSet3.getCardID());
        cardList.push(cardButtonSet4.getCardID());
        cardList.push(cardButtonSet5.getCardID());
        console.log(cardList);
        let bestMove = await RequestBestMove(cardList);
        console.log(bestMove);
        
        if (bestMove.message === "Failure") { return; }
        cardButtonSetList.forEach((set) => { 
            let hold = bestMove.held.includes(set.getCardID());
            set.highlight(hold ? "red" : "blue"); 
        });
    };

    let submitRandomHands = async () => {
        while (true) {
            cardButtonSetList.forEach((set) => { set.randomize(); });
            await submitHand();
        }
    }

    let basicButton1 = new BasicButton({
        image: "Submit",
        onclick: submitHand,
    });
    container.appendChild(basicButton1.content);

    let basicButton2 = new BasicButton({
        image: "Reset",
        onclick: () => {
            highlightAll("white");
            cardButtonSet1.reset();
            cardButtonSet2.reset();
            cardButtonSet3.reset();
            cardButtonSet4.reset();
            cardButtonSet5.reset();
        },
    });
    basicButton2.content.style.margin = "10px auto 0px auto";
    container.appendChild(basicButton2.content);
}

//  Run the initialization call
Initialize();
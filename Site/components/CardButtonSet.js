class CardButtonSet {
    constructor(options) {
        this.options = options;
        this.content = this.generateContent();
    }

    generateContent() {
        if (!this.options.hasOwnProperty("card1Face")) { console.log("CardButtonSet requires card1Face in options."); return null; }
        if (!this.options.hasOwnProperty("card1Suit")) { console.log("CardButtonSet requires card1Suit in options."); return null; }
        if (!this.options.hasOwnProperty("card2Face")) { console.log("CardButtonSet requires card2Face in options."); return null; }
        if (!this.options.hasOwnProperty("card2Suit")) { console.log("CardButtonSet requires card2Suit in options."); return null; }
    
        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.width = "140px";
        container.style.height = "70px";
        container.style.margin = "0px auto 10px auto";

        let faceButton = new SymbolButton({ buttonType: "Face", value: "Ace" });
        if (faceButton.content !== null) { container.appendChild(faceButton.content); }

        let suitButton = new SymbolButton({ buttonType: "Suit", value: "Club" });
        if (suitButton.content !== null) { container.appendChild(suitButton.content); }

        this.getCardID = () => { return faceButton.GetValueCharacter() + suitButton.GetValueCharacter(); };
        this.reset = () => { faceButton.reset(); suitButton.reset(); };
        this.highlight = (color) => { faceButton.highlight(color); suitButton.highlight(color); };
        this.randomize = () => { faceButton.randomize(); suitButton.randomize(); }

        return container;
    }

    setOnclick(onclick) { this.content.onclick = onclick; }
}
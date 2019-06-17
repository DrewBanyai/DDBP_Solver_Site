class SymbolButton {
    constructor(options) {
        this.options = options;
        this.buttonType = null;
        this.value = null;
        this.content = this.generateContent();
    }

    generateContent() {
        //  Ensure required options are supplied
        if (!this.options.hasOwnProperty("buttonType")) { console.log("SymbolButton requires buttonType in options."); return null; }
        if (!this.options.hasOwnProperty("value")) { console.log("SymbolButton requires value in options."); return null; }
        if (!this.IsValueValid(this.options.buttonType, this.options.value)) { console.log("SymbolButton was created with invalid value in options: " + this.options.value); return null; }

        //  Use required options to set base data
        this.buttonType = (this.options.buttonType === "Suit") ? "Suit" : "Face";
        this.value = this.options.value;

        let container = document.createElement("div");
        container.style.width = "70px";
        container.style.height = "70px";
        container.style.border = "1px solid white";
        container.style.borderRadius = "8px";
        container.style.margin = "auto";
        container.style.backgroundImage = `url(Site/images/${this.value}.png)`;
        container.style.backgroundRepeat = "round";

        container.onclick = () => {
            this.value = this.GetNextValue();
            container.style.backgroundImage = `url(Site/images/${this.value}.png)`;
        };

        return container;
    }

    IsValueValid(buttonType, value) {
        switch (buttonType) {
            case "Face":
                let faceList = [ "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace" ];
                return faceList.includes(value);

            case "Suit":
                let suitList = [ "Club", "Diamond", "Heart", "Spade" ];
                return suitList.includes(value);
        }
    }

    GetNextValue() {
        switch (this.buttonType) {
            case "Face":
                switch (this.value) {
                    case "Ace":         return "Two";
                    case "Two":         return "Three";
                    case "Three":       return "Four";
                    case "Four":        return "Five";
                    case "Five":        return "Six";
                    case "Six":         return "Seven";
                    case "Seven":       return "Eight";
                    case "Eight":       return "Nine";
                    case "Nine":        return "Ten";
                    case "Ten":         return "Jack";
                    case "Jack":        return "Queen";
                    case "Queen":       return "King";
                    case "King":        return "Ace";
                }
                break;

            case "Suit":
                switch (this.value) {
                    case "Club":       return "Diamond";
                    case "Diamond":    return "Heart";
                    case "Heart":      return "Spade";
                    case "Spade":      return "Club";
                }
                break;
        }
    }

    GetValueCharacter() {
        switch (this.buttonType) {
            case "Face":
                switch (this.value) {
                    case "Ace":         return "A";
                    case "Two":         return "2";
                    case "Three":       return "3";
                    case "Four":        return "4";
                    case "Five":        return "5";
                    case "Six":         return "6";
                    case "Seven":       return "7";
                    case "Eight":       return "8";
                    case "Nine":        return "9";
                    case "Ten":         return "T";
                    case "Jack":        return "J";
                    case "Queen":       return "Q";
                    case "King":        return "K";
                }
                break;

            case "Suit":
                switch (this.value) {
                    case "Club":       return "C";
                    case "Diamond":    return "D";
                    case "Heart":      return "H";
                    case "Spade":      return "S";
                }
                break;
        }
    }

    reset() {
        switch (this.buttonType) {
            case "Face":    this.value = "Ace";     break;
            case "Suit":    this.value = "Club";    break;
        }
        this.content.style.backgroundImage = `url(Site/images/${this.value}.png)`;
    }

    highlight(color) {
        this.content.style.border = `1px solid ${color}`;
    }
}
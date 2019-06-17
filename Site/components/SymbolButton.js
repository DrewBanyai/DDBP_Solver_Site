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
        container.style.width = "140px";
        container.style.height = "140px";
        container.style.border = "1px solid white";
        container.style.borderRadius = "8px";

        let icon = document.createElement("div");
        icon.style.width = "100%";
        icon.style.height = "100%";
        icon.style.border = "1px solid white";
        icon.style.borderRadius = "8px";
        icon.style.margin = "auto";
        icon.style.backgroundImage = `url(Site/images/${this.value}.png)`;
        container.appendChild(icon);

        container.onclick = () => {
            this.value = this.GetNextValue();
            icon.style.backgroundImage = `url(Site/images/${this.value}.png)`;
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
}
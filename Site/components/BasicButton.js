class BasicButton {
    constructor(options) {
        this.options = options;
        this.content = this.generateContent();
    }

    generateContent() {
        //  Ensure required options are supplied
        if (!this.options.hasOwnProperty("image")) { console.log("BasicButton requires image in options."); return null; }
        if (!this.options.hasOwnProperty("onclick")) { console.log("BasicButton requires onclick in options."); return null; }

        let container = document.createElement("div");
        container.style.width = "70px";
        container.style.height = "35px";
        container.style.border = "1px solid white";
        container.style.borderRadius = "8px";
        container.style.margin = "auto";
        container.style.backgroundImage = `url(Site/images/${this.options.image}.png)`;
        container.style.backgroundRepeat = "round";

        container.onclick = this.options.onclick;

        return container;
    }
}
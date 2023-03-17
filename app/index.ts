import dataHighlights from "./components/Highlights/dataHighlights.js";
import dataNewBig from "./components/NewBig/dataNewBig.js";
import dataNewSmall from "./components/NewSmall/dataNewSmall.js";
import dataCharacter from "./components/Characters/dataCharacter.js";
import dataBestSeller from "./components/BestSeller/dataBestSeller.js";
import dataNewRelease from "./components/NewReleases/dataNewReleases.js";

import "./components/export.js";
import Highlights, { Attribute } from "./components/Highlights/Highlights.js";
import newBig, { Attribut } from "./components/NewBig/newBig.js";
import newSmall, {Attribu} from "./components/NewSmall/newSmall.js";
import Character, {Attrib} from "./components/Characters/character.js";
import bestSeller, {Attri} from "./components/BestSeller/bestSeller.js";
import newRelease, {Att} from "./components/NewReleases/newReleases.js";

class AppContainer extends HTMLElement {
    HighlightsList: Highlights[] = [];
    newBigList: newBig[] = [];
    newSmallList: newSmall[] = [];
    characterList: Character[] = [];
    bestSellerList: bestSeller[] = [];
    newReleaseList: newRelease[] = [];


    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        dataHighlights.forEach((data) => {
            const highlightCard = this.ownerDocument.createElement("high-lights") as Highlights;
                highlightCard.setAttribute(Attribute.img, data.img);
                highlightCard.setAttribute(Attribute.description, data.description);
                this.HighlightsList.push(highlightCard);
        });

        dataNewBig.forEach((data) => {
            const newBigCard = this.ownerDocument.createElement("new-big") as newBig;
                newBigCard.setAttribute(Attribut.img, data.img);
                newBigCard.setAttribute(Attribut.description, data.description);
                newBigCard.setAttribute(Attribut.name, data.name);
                newBigCard.setAttribute(Attribut.date, data.date);
                this.newBigList.push(newBigCard);
        });

        dataNewSmall.forEach((data) => {
            const newSmallCard = this.ownerDocument.createElement("new-small") as newSmall;
                newSmallCard.setAttribute(Attribu.img, data.img);
                newSmallCard.setAttribute(Attribu.name, data.name);
                newSmallCard.setAttribute(Attribu.date, data.date);
                this.newSmallList.push(newSmallCard);
        });

        dataCharacter.forEach((data) => {
            const characterCard = this.ownerDocument.createElement("my-character") as Character;
                characterCard.setAttribute(Attrib.img, data.img);
                characterCard.setAttribute(Attrib.description, data.description );
                this.characterList.push(characterCard);
        });

        dataBestSeller.forEach((data) => {
            const bestSellerCard = this.ownerDocument.createElement("best-seller") as bestSeller;

                bestSellerCard.setAttribute(Attri.img, data.img);
                bestSellerCard.setAttribute(Attri.date, data.date);
                bestSellerCard.setAttribute(Attri.name, data.name);
                bestSellerCard.setAttribute(Attri.price, data.price );
                this.bestSellerList.push(bestSellerCard);
        });

        dataNewRelease.forEach((data) => {
            const newReleaseCard = this.ownerDocument.createElement("new-release") as newRelease;
                newReleaseCard.setAttribute(Att.img, data.img);
                newReleaseCard.setAttribute(Att.date, data.date);
                newReleaseCard.setAttribute(Att.price, data.price );
                newReleaseCard.setAttribute(Att.name, data.name );
                newReleaseCard.setAttribute(Att.release, data.release );
                this.newReleaseList.push(newReleaseCard);
        });

    }

    connectedCallback() {
        this.render();
    }

    render() {

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            `;
        }

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            <div class="MENU">
            <div class="menuBar">
                <img id="iconNintendo" src="/img/icon_nintendo.jpg">
                <div class="inputDiv">
                    <img class="imgInput" src="/img/search.png">
                    <input id="input" placeholder="Search games, hadware, news, etc" type="text">
                    <h4 id="textInput">All categories</h4>
                    <img class="imgInput" src="/img/flecha_abajo.png">
                </div>
                <div class="menuBarIconsDiv">
                    <div class="menuBarIcons">
                        <img class="imgMenuBar" src="/img/support.png">
                        <h4>Support</h4>
                    </div>
                    <div class="menuBarIcons">
                        <img class="imgMenuBar" src="/img/heartGray.png">
                        <h4>Wish List</h4>
                    </div>
                    <div class="menuBarIcons">
                        <img class="imgMenuBar" src="/img/shop.png">
                        <h4>Cart</h4>
                    </div>
                    <div class="menuBarIcons">
                        <img class="imgMenuBar" src="/img/user.png">
                        <h4>Log in/ Sign Up</h4>
                    </div>
                </div>
            </div>

                <div class="barDownDiv">
                    <div class="barDown">
                        <img class="imgBarDown" src="/img/shop.png">
                        <h4>My Nintendo Store</h4>
                    </div>
                    <div class="barDown">
                        <img class="imgBarDown" src="/img/games.png">
                        <h4>Games</h4>
                    </div>
                    <div class="barDown">
                        <img class="imgBarDown" src="/img/nintendo.png">
                        <h4>Nintendo Switch</h4>
                    </div>
                    <div class="barDown">
                        <img class="imgBarDown" src="/img/news.png">
                        <h4>News & Events</h4>
                    </div>
                    <div class="barDown">
                        <img class="imgBarDown" src="/img/start.png">
                        <h4>Play Nintendo</h4>
                    </div>
                </div>

            <div class="divLanding">
                    <img id="imgLanding" src="/img/landing.PNG">
            </div>
            <div class="horaButton">
                        <h3>Pre-order digitally today, play on 3/17</h3>
                        <button class="button">Pre-order now</button>
            </div>
            <div>
                <img  class="finalImg" src="/img/division.PNG">
                <h1 class="tittle">Featured</h1>
                <img class="imgMid"src="/img/featured.jpg">
            </div>
            </div>

            `;
        }

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <div class="bar2">
                <div class="inputDiv">
                    <img class="imgInput" src="">
                    <div class="horaButton2" id="espace">
                        <h3>Save through 3/23 at 11:59 p.m. PT</h3>
                        <button class="button" >Shop now</button>
                    </div>
                </div>
            </div>
            `;
        }

        const HighlightCards = this.ownerDocument.createElement("section")
        HighlightCards.className = 'highlightSection'
        this.HighlightsList.forEach((highlightCard) => {
            HighlightCards.appendChild(highlightCard)
        });
        this.shadowRoot?.appendChild(HighlightCards);


        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
                <div class="div2">
                    <img  class="finalImg" src="/img/division.PNG">
                    <h1 class="tittle">Online store</h1>
                    <img  class="imgMid" src="/img/store.png">
                    <div class="horaButton2">
                        <h3>Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.</h3>
                        <button class="button" >Start shoping</button>
                    </div>
                </div>
                <div class="div3">
                    <img  class="finalImg" src="/img/division.PNG">
                    <h1 class="tittle">Gamimg systems</h1>
                    <img class="imgMid" src="/img/gaming.PNG">
                    <div class="horaButton2">
                        <h3>Find the perfect Nintendo Switch system for you.</h3>
                        <button class="button">Explore now</button>
                    </div>
                </div>
            `;
        }

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <img  class="finalImg" src="/img/division.PNG">
            <h1 class="tittle" >News</h1>
            `;
        }

        const newBigCards = this.ownerDocument.createElement("section")
        newBigCards.className = 'newBigSection'
        this.newBigList.forEach((newBigCard) => {
            newBigCards.appendChild(newBigCard)
        });
        this.shadowRoot?.appendChild(newBigCards);


        const newSmallCards = this.ownerDocument.createElement("section")
        newSmallCards.className = 'newSmallSection'
        this.newSmallList.forEach((newSmallCard) => {
            newSmallCards.appendChild(newSmallCard)
        });
        this.shadowRoot?.appendChild(newSmallCards);

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <button class="buttonImg"><img id="imgButton"src="/img/more.png">See all new articles</button>
            `;
        }
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <img  class="finalImg" src="/img/division.PNG">
            <h1 class="tittle" >Characters</h1>
            `;
        }

        const characterCards = this.ownerDocument.createElement("section")
        characterCards.className = 'characterSection'
        this.characterList.forEach((characterCard) => {
            characterCards.appendChild(characterCard)
        });
        this.shadowRoot?.appendChild(characterCards);

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <img  class="finalImg" src="/img/division.PNG">
            <div class="sellTitle">

                <h1 class="tittle" >Digital best seller</h1>
                <h2 class="subTitle">See full list</h2>
            </div>
            `;
        }

        const bestSellerCards = this.ownerDocument.createElement("section")
        bestSellerCards.className = 'bestSellerSection'
        this.bestSellerList.forEach((bestSellerCard) => {
            bestSellerCards.appendChild(bestSellerCard)
        });
        this.shadowRoot?.appendChild(bestSellerCards);

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <div class="sellTitle">
                <h1 class="tittle" >Digital New Releases</h1>
                <h2 class="subTitle" >See full list</h2>
            </div>

            `;
        }

        const newReleaseCards = this.ownerDocument.createElement("section")
        newReleaseCards.className = 'newReleaseSection'
        this.newReleaseList.forEach((newReleaseCard) => {
            newReleaseCards.appendChild(newReleaseCard)
        });
        this.shadowRoot?.appendChild(newReleaseCards);


        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <div class="">
                <img id="finalImg" src="/img/final.PNG">
            </div>

            `;
        }
    }


}

customElements.define("app-container", AppContainer);
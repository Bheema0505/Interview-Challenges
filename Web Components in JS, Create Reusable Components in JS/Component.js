//dynamically creating template tag, which reders through js only
const template = document.createElement("template");
//creating HTMl for the template tag
template.innerHTML = `
<style>
    h1{
      color:red;
    }
    #cont {
      width: 250px;
      height: auto;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    img{
      height: 140px;
      Width: auto;
      margin: 0 auto;
    }
    #buttons{
      width: 100%;
      gap: 20px;
      display: flex;
      justify-content: space-around;
    }
    #buy{
      background-color: royalBlue;
      width: 50%;
      outline: none;
      border: none;
      color: white;
      height: 25px;
      border-radius: 5px;
    }
    #del{
      background-color: Red;
      width: 20%;
      outline: none;
      border: none;
      color: white;
      height: 25px;
      border-radius: 5px;
    }
    #benefits{
      font-size: 12px;
      min-height: 70px !important;
    }
    </style>
    <div id="cont">
      <h3>Product ID</h3>
      <img />
      <slot name='benefits' id='benefits'> </slot>
      <div id="image-desc">
        <h4>Image Name</h4>
        <p>buy status</p>
      </div>
      <div id="buttons">
        <button id='buy'>Buy</button>
        <button id='del'>Delete</button>
      </div>
    </div>
`;

class Card extends HTMLElement {
  //constructor method will gets invoked in the initial render itself.
  constructor() {
    super();
    //below line creates and attaches shadow Dom to the original dom, hence the styles for this shadow DOM won't gonna apply for original DOM
    this.attachShadow({ mode: "open" });
    // template.content.cloneNode(true) --> This line of code creates a deep clone of the content inside an HTML <template> element, including all nested elements, and returns the cloned node.
    //content.cloneNode(true) --> only works on html <template> elements, doesn't work on remaining elements.
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // assigning custom props values to component tags in the initial render itself (inside constructor)
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("h4").innerText = this.getAttribute("price");
    this.shadowRoot.querySelector("img").src = this.getAttribute("imgsrc");
    this.shadowRoot.querySelector("p").innerText =
      this.getAttribute("buystatus");
  }
  // Perform actions or setup when the element is inserted into the DOM
  connectedCallback() {
    console.log("rendered");
    this.shadowRoot.querySelector('button[id="buy"]').onclick = () => {
      this.setAttribute("buystatus", "sold");
    };
    this.shadowRoot
      .querySelector('button[id="del"]')
      .addEventListener("click", () => {
        this.remove();
      });
  }
  // static: Indicates that the method is a static method of the class, meaning it is associated with the class itself rather than instances of the class.
  // get observedAttributes(): This getter method returns an array of attribute names that the custom element is interested in observing.
  static get observedAttributes() {
    return ["buystatus"];
  }

  // It is called when one of the observed attributes specified in the observedAttributes array changes its value.
  attributeChangedCallback(attr, oldVal, newVal) {
    this.shadowRoot.querySelector("p").innerText = newVal;
  }

  // Called when the element is moved to a new document
  disconnectedCallback() {
    alert(this.getAttribute("name") + " " + "Card Removed");
    this.shadowRoot
      .querySelector('button[id="del"]')
      .removeEventListener("click");
  }
}

// This method is used to define a new custom element and associate it with a class(Card) that extends HTMLElement
customElements.define("card-tile", Card);

// there are 4 lifecycle methods in the Custom Elements API for web components. This method is called when a custom element is inserted into the DOM.
//  It is part of the four main lifecycle callbacks for custom elements:

// connectedCallback(): Called when the element is inserted into the DOM.
// disconnectedCallback(): Called when the element is removed from the DOM.
// adoptedCallback(): Called when the element is moved to a new document.
// attributeChangedCallback(attributeName, oldValue, newValue): Called when the value of an observed attribute changes.

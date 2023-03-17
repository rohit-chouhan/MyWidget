(function () {
        let template = document.createElement("template");
        template.innerHTML = `
        <style>
            .name {
                font-family: Arial, sans-serif;
                color:blue;
            }
        </style>
        <h1 class="name">Welcome to </br>MyWidget Builder</h1>
        <form id="form">
        <input type="submit">
        </form>
        `;
        class MyWidgetWidgetBuilderPanel extends HTMLElement {
           constructor() {
              super();
              this._shadowRoot = this.attachShadow({
                 mode: "open"
              });
              this._shadowRoot.appendChild(template.content.cloneNode(true));
              this._shadowRoot
                 .getElementById("form")
                 .addEventListener("submit", this._submit.bind(this));
           }
           _submit(e) {
                 e.preventDefault();
                 this.dispatchEvent(
                    new CustomEvent("propertiesChanged", {
                       detail: {
                          properties: {},
                       },
                    })
                 );
              }
               
                      }
     customElements.define("com-rohitchouhan-sap-mywidget-builder", 
     MyWidgetWidgetBuilderPanel
     );
  })();
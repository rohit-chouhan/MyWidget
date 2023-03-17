
  (function() {
      let template = document.createElement("template");
      template.innerHTML = `
      <style>
      .name {
          font-family: Arial, sans-serif;
          color:green;
      }
  </style>
  <h1 class="name">Welcome to MyWidget</h1>
      `;
      class MyWidgetWidget extends HTMLElement {
          constructor() {
              super();
              let shadowRoot = this.attachShadow({
                  mode: "open"
              });
              shadowRoot.appendChild(template.content.cloneNode(true));
              this._props = {};
          }
          async connectedCallback() {
              this.initMain();
          }
          async initMain() {
            //start your code from here, happy coding :)
          }
          onCustomWidgetBeforeUpdate(changedProperties) {
              this._props = {
                  ...this._props,
                  ...changedProperties
              };
          }
          onCustomWidgetAfterUpdate(changedProperties) {
              this.initMain();
          }
      }
      customElements.define("com-rohitchouhan-sap-mywidget", MyWidgetWidget);
  })();
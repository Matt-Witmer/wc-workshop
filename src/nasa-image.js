import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title=""
    this.source=""
  }

  static get properties() {
    return {
        source: {type: String},
        title: {type: String}
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([loading]) .results {
        opacity: 0.1;
        visibility: hidden;
        height: 1px;
      }
      .results {
        visibility: visible;
        height: 100%;
        opacity: 1;
        transition-delay: .5s;
        transition: .5s all ease-in-out;
      }

      .image img{
        width: 200px;
        height: 200px;
        display: inline-block;
      }

      .image {
        display: inline-block;
      }

      .image div{
        max-width: 200px;
        font-size: 16px;
        font-weight: bold;
        display: inline-block;
      }

      details {
        margin: 16px;
        padding: 16px;
        background-color: blue;
      }
      summary {
        font-size: 24px;
        padding: 8px;
        color: red;
        font-size: 42px;
      }
      input {
        font-size: 20px;
        line-height: 40px;
        width: 100%;
      }
    `;
  }

  render() {
    return html`
    <div class = "image">
      <img src="${this.source}" />
      <div>${this.title}</div>
    </div>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);
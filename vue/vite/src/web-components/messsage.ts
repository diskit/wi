import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("x-message")
export class MessageElement extends LitElement {


  @property()
  message: string = '';

  connectedCallback() {
    super.connectedCallback();
    this.shadowRoot?.addEventListener('click', () => {
      console.log('handle in x-message');
      this.dispatchEvent(new CustomEvent('click-message'));
    }, false);
  }
  
  render() {
    return html`<div>${this.message}</div>`
  }

  static styles = css`
    :host {
      display: block;
      background-color: var(--base-color, #f0f0f0);
    }
  `;
}
import { createApp } from 'vue'
import App from './App.vue'

class GreetingElement extends HTMLElement {

  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: "open"});
    const element = document.createElement('div');
    const message = this.getAttribute('message') || 'test';
    console.log(message);
    element.textContent = message;
    shadowRoot.appendChild(element);
  }

  connectedCallback() {
    console.log('connected', this.getAttribute('message'));
    this.setMessage();
  }

  setMessage() {
    this.shadowRoot!.querySelector('div')!.textContent = this.getAttribute('message');
  }

  attributeChangeCallback() {
    console.log('attributeChanged', this.getAttribute('message'));
    this.setMessage();
  }

  static get observedAttributes() { return ['message']; }
}

customElements.define('x-greeting', GreetingElement)


createApp(App).mount('#app')

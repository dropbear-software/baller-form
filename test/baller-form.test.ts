import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { BallerForm } from '../src/BallerForm.js';
import '../src/baller-form.js';

describe('BallerForm', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<BallerForm>(html`<baller-form></baller-form>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<BallerForm>(html`<baller-form></baller-form>`);
    el.shadowRoot!.querySelector('md-filled-button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<BallerForm>(
      html`<baller-form header="attribute header"></baller-form>`
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<BallerForm>(html`<baller-form></baller-form>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});

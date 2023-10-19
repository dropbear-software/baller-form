import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { BallerForm } from '../src/BallerForm.js';
import '../src/baller-form.js';

describe('BallerForm', () => {
  it('increases the counter on button click', async () => {
    const el = await fixture<BallerForm>(html`<baller-form></baller-form>`);
    el.submitButton.click();

    expect(el.progress).to.equal(1);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<BallerForm>(html`<baller-form></baller-form>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});

import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/baller-form-slide.js';
import type { BallerFormSlide } from '../src/baller-form-slide.js';

describe('BallerForm', () => {
  it('increases the counter on button click', async () => {
    const el = await fixture<BallerFormSlide>(html`<baller-form-slide></baller-form-slide>`);
    el.submitButton.click();

    expect(el.slideIndex).to.equal(2);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<BallerFormSlide>(html`<baller-form-slide></baller-form-slide>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});

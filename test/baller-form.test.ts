import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import type { TicketForm } from '../src/baller-form.js';
import '../src/baller-form.js';

describe('BallerForm', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<TicketForm>(html`<ticket-form></ticket-form>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});

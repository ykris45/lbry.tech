"use strict";



//  P A C K A G E S

const html = require("choo-async/html");
const local = require("app-root-path").require;

//  V A R I A B L E S

const editLink = local("/views/partials/edit-link");
const emailSubscribe = local("/views/partials/email-subscribe");



//  P R O G R A M

//  eslint-disable-next-line
const footer = (state, emit) => html`
  <section class="email-subscribe-container">
    ${emailSubscribe()}
  </section>

  <section class="alert" id="alert-beta">
    <div class="inner-wrap">
      <p>
        <strong>This website is in beta and under heavy development.</strong>
        All information should be considered incomplete and possibly incorrect and things may not work as expected.
      </p>

      <br/><br/>

      <p>
        Please do not share or link this site publicly while this message is here. This website is open source and you can <a href="https://github.com/lbryio/lbry.tech" target="_blank" rel="noopener noreferrer">contribute to it on Github</a>.
      </p>

      <button id="close-alert">&times;</button>
    </div>
  </section>

  <footer class="footer">
    <div class="inner-wrap">
      <ul>
        <li>
          <a href="//lbry.io" title="Rediscover content freedom">← LBRY.io</a> |
          ${editLink(state.href)}
        </li>

        <li><a href="/overview" title="LBRY overview">Overview</a></li>
        <li><a href="/resources" title="View LBRY resources">Resources</a></li>
        <li><a href="/contribute" title="Contribute to LBRY">Contribute</a></li>
        <li><a href="/community" title="Interact with LBRY">Community</a></li>
        <li><a href="/sitemap" title="">Sitemap</a></li>
      </ul>
    </div>
  </footer>

  <script src="/assets/scripts/app.js"></script>
`;



//  E X P O R T

module.exports = exports = footer;

"use strict";



//  P A C K A G E

const html = require("choo-async/html");



//  P R O G R A M

//  eslint-disable-next-line
const thanks = () => async (state, emit) => html`
  <section class="ancillary inner-wrap">
    <h2 class="center">Sweet!</h2>

    <p class="center">Thank you for signing up for our mailing list.</p>
    <p class="center">Redirection in T minus 2.5 seconds...</p>
  </section>

  <script>
    setTimeout(function () {
      window.location = window.location.origin;
    }, 2500);
  </script>
`;



//  E X P O R T

module.exports = exports = thanks;

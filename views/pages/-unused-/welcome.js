"use strict";



//  P A C K A G E

const html = require("choo-async/html");



//  P R O G R A M

//  eslint-disable-next-line
const welcome = () => async (state, emit) => html`
  <section class="ancillary inner-wrap">
    <h2 class="center">Stay tuned!</h2>

    <form action="https://buttondown.email/api/emails/embed-subscribe/socii" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/socii', 'popupwindow')" class="center embeddable-buttondown-form">
      <fieldset>
        <input type="email" name="email" id="bd-email" placeholder="gnarly@sweet.tld"/>
        <input type="hidden" value="1" name="embed"/>
        <input type="submit" value="Subscribe"/>
      </fieldset>

      <p class="form__info"><a href="https://buttondown.email">Mailing list powered by Buttondown</a></p>
    </form>

    <script>
      $(function () {
        $("input[type=email]").focus();
      });
    </script>
  </section>
`;



//  E X P O R T

module.exports = exports = welcome;

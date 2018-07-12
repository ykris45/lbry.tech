"use strict";



//  P A C K A G E

const html = require("choo-async/html");



//  P R O G R A M

//  eslint-disable-next-line
const shhh = () => async (state, emit) => html`
  <section class="ancillary inner-wrap">
    <h2 class="center">Welcome (back)</h2>

    <form class="center">
      <fieldset>
        <input id="user" name="user" type="email" placeholder="gnarly@sweet.tld"/>
        <input type="submit" value="Submit"/>
      </fieldset>

      <p class="form__info">
        Looking for a password field? Hah! There's no need for <em>that</em> in

        <script>
          (function () {
            const x = document.getElementsByTagName("script");
            const y = x[x.length - 1];
            const z = document.createTextNode(" " + (new Date()).getFullYear() + ".");

            y.parentNode.insertBefore(z, y);
          })()
        </script>
      </p>
    </form>

    <script>
      $(function () {
        $("input[type=email]").focus();
      });

      $("input[type=submit]").on("click", function (e) {
        const email = $("#user").val();

        if (email !== "" || undefined || null ) socket.emit("let me in", { data: email });
        else $("form").addClass("error");

        $("input").blur();
        return false;
      });

      $("#user").on("keyup", function (e) {
        if (e.keyCode === 13) $("input[type=submit]").trigger("click");
      });
    </script>
  </section>
`;



//  E X P O R T

module.exports = exports = shhh;

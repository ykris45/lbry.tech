"use strict";



//  P A C K A G E

const html = require("choo-async/html");



//  P R O G R A M

//  eslint-disable-next-line
const token = () => async (state, emit) => html`
  <section class="ancillary inner-wrap">
    <h2 class="center">Welcome (back)</h2>

    <form class="center">
      <div class="inner-wrap">
        <fieldset>
          <input id="user" name="user" type="email" placeholder="prefilled email" value="prefilled email" readonly hidden/>
        </fieldset>

        <fieldset>
          <input id="token" name="token" type="text" placeholder="alphabet soup"/>
          <input type="submit" value="Submit"/>
        </fieldset>

        <p class="form__info">
          Enter your token for <strong>prefilled email</strong>.<br/>
          Please don't refresh the page.<br/><br/>
          <a href="">Cancel login request</a>
        </p>
      </div>
    </form>

    <script>
      $(function () {
        $("input[type=text]").focus();
      });

      $("input[type=submit]").on("click", function (e) {
        const token = $("#token").val();

        if (token !== "" || undefined || null ) socket.emit("let me in with a token", { data: token });
        else $("form").addClass("error");

        $("input").blur();
        return false;
      });

      $("#token").on("keyup", function (e) {
        if (e.keyCode === 13) $("input[type=submit]").trigger("click");
      });
    </script>
  </section>
`;



//  E X P O R T

module.exports = exports = token;

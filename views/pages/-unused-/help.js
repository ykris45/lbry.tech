"use strict";



//  P A C K A G E

const html = require("choo-async/html");



//  P R O G R A M

//  eslint-disable-next-line
const help = () => async (state, emit) => html`
  <section class="ancillary inner-wrap">
    <h2>Help</h2>

    <p>After beta, this page will be of more use. For the time being, it will be used to keep track of glaring alpha issues. I will do my best to update this page periodically but up-to-date info will be shared on <a href="https://hub.socii.network/NetOpWibby" title="&there4;&thinsp;NetOpWibby's profile on Socii">my profile page here</a>.<br/><br/><span style="cursor: default; opacity: 0.3;">&mdash;</span><br/><br/></p>

    <ul>
      <li>Avatar upload works for files thinner than 1000px width and under 2MB. This is sad and <del>can</del> <em>must</em> be better.</li>

      <li>Search, Notifications, and Messages are absent.</li>

      <li>Reposting and editing are absent.</li>

      <li>The functionality to block, mute, follow, and befriend is absent.</li>

      <li>Account deletion and data export are not possible at the moment.</li>

      <li>Polish and visual parity of features across the site (obviously, we're in alpha).</li>

      <li><del>Scrolling is <em>abysmal</em> on non-Blink/Chromium browsers thanks to non-native WebP support. The only available polyfill is JavaScript-based and therefore not efficient. I found a WASM-based decoder but it is <strong>definitely</strong> not ready for production. I might have better luck with FLIF.</del></li>

      <li><del>Safari is loading some images but not others due to <code>Access-Control-Allow-Origin</code> "issues" but...they <em>are</em> set. This could be user (me) error, low priority fix at the moment.</del></li>
    </ul>
  </section>
`;



//  E X P O R T

module.exports = exports = help;

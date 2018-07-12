"use strict";



//  P A C K A G E

const html = require("choo-async/html");



//  P R O G R A M

//  eslint-disable-next-line
const home = () => async (state, emit) => html`
  <section class="hero">
    <div>
      <h1>
        LBRY is a free, open, and community-run digital marketplace.<br/>
        Build the future of content freedom.
      </h1>
    </div>
  </section>

  <section class="features">
    <ul class="home__features">
      <li class="home__feature">
        <p class="home__feature__title"><strong>New to LBRY?</strong></p>
        <p class="home__feature__description">Learn how LBRY works in 3 easy steps</p>
        <a class="home__feature__cta" href="/tour">Take the Tour</a>
      </li>

      <li class="home__feature">
        <p class="home__feature__title"><strong>Want to contribute?</strong></p>
        <p class="home__feature__description">Help make LBRY better!</p>
        <a class="home__feature__cta" href="/contribute">Explore our repos</a>
      </li>
    </ul>
  </section>

  <section class="intro">
    <div class="inner-wrap">
      <h3>Intro/Overview</h3>
      <p>What if anyone in the world could publish a piece of digital content, anyone else in the world could access it, for free or for payment, and that entire system worked end-to-end without any centralized authority or point of control?</p>

      <p>That's the idea behind LBRY. To create a market for accessing and publishing information that is global, decentralized, robust, optimal and complete.</p>

      <a class="cta" href="/overview">Learn more about our mission</a>
    </div>
  </section>

  <section class="docs">
    <div class="inner-wrap">
      <h3>Documentation</h3>
      <p>LBRY has enough moving parts to warrant comprehensive documentation. Whether you are interested in learning the technical details of our technology stack or you want to integrate LBRY into your life, you will find everything you need in our docs.</p>

      <a class="cta" href="/resources">Explore our documentation</a>
    </div>
  </section>

  <section class="contribute">
    <div class="inner-wrap">
      <h3>Contribute</h3>
      <p>Interested in progressing content freedom? Awesome! No matter your experience or skill level, <strong>you</strong> can make a difference.</p>

      <ul>
        <li><a href="" title="">Raising Issues</a></li>
        <li><a href="" title="">Coding</a></li>
        <li><a href="" title="">Creative</a></li>
        <li><a href="" title="">Translating</a></li>
        <li><a href="" title="">Testing</a></li>
      </ul>
    </div>
  </section>

  <section class="develop">
    <div class="inner-wrap">
      <h3>Development</h3>
      <p>Like a bit of documentation but would prefer to jump in and make your mark on the blockchain? Perhaps add cats to it?</p>

      <a class="cta" href="/api" title="">Learn the LBRY API</a>
    </div>
  </section>

  <section class="community">
    <div class="inner-wrap">
      <h3>Community</h3>
      <p>Hang out with us! We have a vibrant community of lbryians and would be <em>delighted</em> if you joined us.</p>

      <ul>
        <li><a href="//chat.lbry.io" title="">Discord</a></li>
        <li><a href="//www.reddit.com/r/lbry" title="">Reddit</a></li>
        <!--/ <li><a href="//" title="">StackOverflow</a></li> /-->
      </ul>
    </div>
  </section>

  <script>
    $(function () {
      send("landed on homepage");
    });

    function send(msg) {
      socketReady(ws, () => ws.send(msg));
    };

    function socketReady(socket, callback) {
      setTimeout(() => {
        if (socket.readyState === 1) {
          if (callback !== undefined) callback();
          return;
        } else {
          console.log("Waiting for websocket connection to come online");
          socketReady(socket,callback);
        }
      }, 5);
    };

    document.getElementsByTagName("body")[0].classList.add("home"); // TODO: make this happen in components/layout
  </script>
`;



//  E X P O R T

module.exports = exports = home;

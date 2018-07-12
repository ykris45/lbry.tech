"use strict";



//  P A C K A G E

const html = require("choo-async/html");



//  P R O G R A M

//  eslint-disable-next-line
const about = () => async (state, emit) => html`
  <section class="ancillary inner-wrap">
    <h2>Manifesto</h2>

    <p>TL;DR: Social networks don't care about <em>you</em>, they care about <em>your engagement</em> and they employ <a href="http://humanetech.com/problem" title="Center for Humane Technology, discussing the Problem">manipulative</a> <a href="http://www.pnas.org/content/111/24/8788.full" title="Experimental evidence of massive-scale emotional contagion through social networks">psychological</a> tricks to get you addicted to their platform while selling your data to the highest bidder. If you're disgusted and want a change, read on.<br/><br/><span style="cursor: default; opacity: 0.3;">&mdash;</span></p>

    <p>Since the dawn of time, people sought to connect, share, and express themselves. Social networks enhanced that behavior and made connecting with others, sharing ideas, and expression even easier! Wow, the early to mid-2000s were <em>great</em> for social networks but...what has happened since?</p>

    <p><strong>Advertising</strong>.</p>

    <p>Because of the (<strong>very real</strong>) need to make a profit, social networks have sold and <em>continue to</em> <strong>sell user data for millions of dollars</strong> in funding/cash reserves. Fervently copying features of other social networks in an attempt to keep users engaged is pathetic. Users are left with a service that is bloated, confusing, and morally bankrupt. We've found a better way.</p>

    <p>Introducing <strong>Socii</strong> (\\'sō-'kē\\).</p>

    <p>First and foremost, <strong>you own your data</strong> and can export it <em>whenever you want</em> (you certainly won't have to dig through layers of confusing menus to do so either). Oh, and we don't do passwords. You login with your email address so you can focus on creating a strong password for your email account.</p>

    <p>Social networks today have super limited customization and styling. How are you supposed to standout in a sea of <em>sameness</em>? You weren't meant to be homogenized, save that for milk.</p>

    <p>Another problem with the social networks of today? They are downright <em>negligent</em> in giving you the tools to protect yourself from harassment. With Socii, you can create blacklists and apply them to posts and users. Also, people you don't follow aren't allowed to send you photos by default (and this is just the beginning). Other networks would rather side with the harasser. We say, fuck 'em.</p>

    <p>You may be thinking, "All this is great and everything but how will you make money? If Socii is free to use, this means <em>I</em> am being sold." With other social networks, you'd be absolutely correct! Socii is bootstrapped and funded by user creations. There are also paid account enhancements like 1-3 character usernames.</p>

    <p>Socii is inspired by the early days of the Internet. Back when the BBS was king. Back when everything was simple and people <em>looked forward</em> to going online. We love connecting with people online and we think it can <em>and should</em> be better.</p>

    <p><a href="/welcome" title="Join Socii, the social network that cares about you and respects your privacy">Join us.</a></p>
  </section>
`;



//  E X P O R T

module.exports = exports = about;

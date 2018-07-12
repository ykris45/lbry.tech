"use strict";



//  P A C K A G E

const html = require("choo-async/html");



//  P R O G R A M

//  eslint-disable-next-line
const policies = () => async (state, emit) => html`
  <section class="ancillary inner-wrap">
    <h2>Socii Terms of Service</h2>
    <h3>1. Terms</h3>

    <p>By accessing the website at <a href="https://socii.network">https://socii.network</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>



    <h3>2. Use License</h3>
    <ol type="a">
      <li>
        Permission is granted to temporarily download one copy of the materials (information or software) on Socii's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

        <ol type="i">
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on Socii's website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ol>
      </li>

      <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Socii at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>
    </ol>



    <h3>3. Disclaimer</h3>
    <ol type="a">
      <li>The materials on Socii's website are provided on an 'as is' basis. Socii makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
      <li>Further, Socii does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>
    </ol>



    <h3>4. Limitations</h3>
    <p>In no event shall Socii or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Socii's website, even if Socii or a Socii authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>



    <h3>5. Accuracy of materials</h3>
    <p>The materials appearing on Socii's website could include technical, typographical, or photographic errors. Socii does not warrant that any of the materials on its website are accurate, complete or current. Socii may make changes to the materials contained on its website at any time without notice. However Socii does not make any commitment to update the materials.</p>



    <h3>6. Links</h3>
    <p>Socii has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Socii of the site. Use of any such linked website is at the user's own risk.</p>



    <h3>7. Modifications</h3>
    <p>Socii may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>



    <h3>8. Governing Law</h3>
    <p>These terms and conditions are governed by and construed in accordance with the laws of Tennessee and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>



    <h2>Privacy Policy</h2>
    <p>Your privacy is important to us. It is Socii's policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://socii.network">https://socii.network</a>, and other sites we own and operate.</p>



    <h3>Information we collect</h3>
    <h5>Log data</h5>
    <p>When you visit our website, our servers may automatically log the standard data provided by your web browser. This data is considered "non-identifying information", as it does not personally identify you on its own. It may include your computer's Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</p>

    <h5>Personal information</h5>
    <p>We may ask for personal information, such as your:</p>
    <ul>
      <li>Name</li>
      <li>Email</li>
      <li>Payment information</li>
    </ul>

    <p>This data is considered "identifying information", as it can personally identify you. We only request personal information relevant to providing you with a service, and only use it to help provide or improve this service.</p>



    <h3>How we collect information</h3>
    <p>We collect information by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used. You are free to refuse our request for this information, with the understanding that we may be unable to provide you with some of your desired services without it.</p>

    <h3>Use of information</h3>
    <p>We may use a combination of identifying and non-identifying information to understand who our visitors are, how they use our services, and how we may improve their experience of our website in future. We do not disclose the specifics of this information publicly, but may share aggregated and anonymised versions of this information, for example, in website and customer usage trend reports.</p>



    <h3>Data processing and storage</h3>
    <p>The personal information we collect is stored and processed in United States, or where we or our partners, affiliates and third-party providers maintain facilities. We only transfer data within jurisdictions subject to data protection laws that reflect our commitment to protecting the privacy of our users.</p>

    <p>We only retain personal information for as long as necessary to provide a service, or to improve our services in future. While we retain this data, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification. That said, we advise that no method of electronic transmission or storage is 100% secure, and cannot guarantee absolute data security.</p>

    <p>If you request your personal information be deleted, or where your personal information becomes no longer relevant to our operations, we will erase it from our system within a reasonable timeframe.</p>



    <h3>Cookies</h3>
    <p>We use "cookies" to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified. Please refer to our Cookie Policy for more information.</p>



    <h3>Third-party access to information</h3>
    <p>We use third-party services for:</p>

    <ul>
      <li>Payment processing</li>
    </ul>

    <p>These services may access our data solely for the purpose of performing specific tasks on our behalf. We do not share any personally identifying information with them without your explicit consent. We do not give them permission to disclose or use any of our data for any other purpose.</p>

    <p>We may, from time to time, allow limited access to our data by external consultants and agencies for the purpose of analysis and service improvement. This access is only permitted for as long as necessary to perform a specific function.</p>

    <p>We will refuse government and law enforcement requests for data if we believe a request is too broad or unrelated to its stated purpose. However, we may cooperate if we believe the requested information is necessary and appropriate to comply with legal process, to protect our own rights and property, to protect the safety of the public and any person, to prevent a crime, or to prevent what we reasonably believe to be illegal, legally actionable, or unethical activity.</p>

    <p>We do not otherwise share or supply personal information to third parties. We do not sell or rent your personal information to marketers or third parties.</p>



    <h3>Children's Privacy</h3>
    <p>This website does not knowingly target children, or collect personal information from children. As a parent/guardian, please contact us if you believe your child is participating in an activity involving personal information on our website, and you have no received a notification or request for consent. We do not use your supplied contact details for marketing or promotional purposes.</p>



    <h3>Limits of our policy</h3>
    <p>This privacy policy only covers Socii's own collecting and handling of data. We only work with partners, affiliates and third-party providers whose privacy policies align with ours, however we cannot accept responsibility or liability for their respective privacy practices.</p>

    <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.</p>



    <h3>Changes to this policy</h3>
    <p>At our discretion, we may change our privacy policy to reflect current acceptable practices. We will take reasonable steps to let users know about changes via our website. If you are a registered user on <a href="https://socii.network">https://socii.network</a>, we will notify you using the contact details saved in your account. Your continued use of this site after any changes to this policy will be regarded as acceptance of our practices around privacy and personal information. </p>



    <h3>Your rights and responsibilities</h3>
    <p>As our user, you have the right to be informed about how your data is collected and used. You are entitled to know what data we collect about you, and how it is processed. You are entitled to correct and update any personal information about you, and to request this information be deleted. You may amend or remove your account information at any time, using the tools provided in your account control panel.</p>

    <p>You are entitled to restrict or object to our use of your data, while retaining the right to use your personal information for your own purposes. You have the right to opt out of data about you being used in decisions based solely on automated processing.</p>

    <p>Feel free to contact us if you have any concerns or questions about how we handle your data and personal information.</p>

    <p><strong>Socii Data Controller</strong><br />
    Socii Security<br />
    <code>security@socii.network</code></p>

    <p><strong>Socii Data Protection Officer</strong><br />
    Socii DPO<br />
    <code>dpo@socii.network</code></p>

    <p>This policy is effective as of 25 May 2018.</p>



    <h2>Cookie Policy</h2>
    <p>We use cookies to help improve your experience of <a href="https://socii.network">https://socii.network</a>. This cookie policy is part of Socii's privacy policy, and covers the use of cookies between your device and our site.</p>

    <p>If you don't wish to accept cookies from us, you should instruct your browser to refuse cookies from <a href="https://socii.network">https://socii.network</a>, with the understanding that we may be unable to provide you with some of your desired content and services.</p>



    <h3>What is a cookie?</h3>
    <p>A cookie is a small piece of data that a website stores on your device when you visit, typically containing information about the website itself, a unique identifier that allows the site to recognise your web browser when you return, additional data that serves the purpose of the cookie, and the lifespan of the cookie itself.</p>

    <p>Cookies are used to enable certain features (eg. logging in), to track site usage (eg. analytics), to store your user settings (eg. timezone, notification preferences), and to personalise your content (eg. advertising, language).</p>

    <p>Cookies set by the website you are visiting are normally referred to as "first-party cookies", and typically only track your activity on that particular site. Cookies set by other sites and companies (ie. third parties) are called "third-party cookies", and can be used to track you on other websites that use the same third-party service.</p>



    <h3>Types of cookies and how we use them</h3>
    <h5>Essential cookies</h5>
    <p>Essential cookies are crucial to your experience of a website, enabling core features like user logins, account management, shopping carts and payment processing. We use essential cookies to enable certain functions on our website.</p>



    <h5>Performance cookies</h5>
    <p>Performance cookies are used in the tracking of how you use a website during your visit, without collecting personal information about you. Typically, this information is anonymous and aggregated with information tracked across all site users, to help companies understand visitor usage patterns, identify and diagnose problems or errors their users may encounter, and make better strategic decisions in improving their audience's overall website experience. These cookies may be set by the website you're visiting (first-party) or by third-party services. We do not use this type of cookie on our site.</p>

    <h5>Functionality cookies</h5>
    <p>Functionality cookies are used in collecting information about your device and any settings you may configure on the website you're visiting (like language and timezone settings). With this information, websites can provide you with customised, enhanced or optimised content and services. These cookies may be set by the website you're visiting (first-party) or by third-party service. We use functionality cookies for selected features on our site.</p>

    <h5>Targeting/advertising cookies</h5>
    <p>Targeting/advertising cookies are used in determining what promotional content is more relevant and appropriate to you and your interests. Websites may use them to deliver targeted advertising or to limit the number of times you see an advertisement. This helps companies improve the effectiveness of their campaigns and the quality of content presented to you. These cookies may be set by the website you're visiting (first-party) or by third-party services. Targeting/advertising cookies set by third-parties may be used to track you on other websites that use the same third-party service. We do not use this type of cookie on our site.</p>



    <h3>How you can control or opt out of cookies</h3>
    <p>If you do not wish to accept cookies from us, you can instruct your browser to refuse cookies from our website. Most browsers are configured to accept cookies by default, but you can update these settings to either refuse cookies altogether, or to notify you when a website is trying to set or update a cookie.</p>

    <p>If you browse websites from multiple devices, you may need to update your settings on each individual device.</p>

    <p>Although some cookies can be blocked with little impact on your experience of a website, blocking all cookies may mean you are unable to access certain features and content across the sites you visit.</p>



    <small style="font-size: 0.8rem;">
      <br/><br/><br/>
      <strong><em>
        Updated 2018.05.24
      </em></strong>
    </small>
  </section>
`;



//  E X P O R T

module.exports = exports = policies;

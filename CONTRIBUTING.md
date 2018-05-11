# Contributing

This project follows the global contributing standards for all LBRY projects, to read those go [here](https://lbry.io/faq/contributing)

You can contribute to this project by [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

Want to contribute by editing the text content on the site? This is easy, as all the pages are hosted as markdown files. Just use the "Edit this page on Github" found at the bottom of every page on the website.

## Code Overview

This project is a Vuepress-based static documentation website. This includes both the backend and frontend of the website at [beta.lbry.tech](https://beta.lbry.tech). All of this packaged and build with [Yarn](https://yarnpkg.com).

### Backend

Backend is handled by Node.js + Express. Currently all backend functionality is in one file, [server.js](server.js). It serves the static files generated by Vuepress. Additionally, it works as a proxy for some basic LBRY daemon method calls at daemon.lbry.tech.

### Frontend

[Vuepress](https://vuepress.vuejs.org/) generates static files based on the .vuepress folder and various markdown files in the root of the project. It automatically compiles JS and SCSS found in Vue components in .vuepress folder. 
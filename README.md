This repository hosts the source code for the official website of **E-Summit'23**: IIIT Delhi's Annual Entrepreneurship Conclave. This website uses the **React** library and is hosted on a dedicated NGINX server at [esummit.iiitd.edu.in](http://esummit.iiitd.edu.in). In case the previous link fails to open, there is also a Netlify mirror: [esmt23.netlify.app](http://esmt23.netlify.app).

## Code structure
All of the React source code is located in the `/src` folder with assets in `/src/assets` and other static files in `/public`.

Here is a directory overview of the `/src` folder:

```
src
├── App.css
├── App.jsx
├── App.test.js
├── Assets/
│   ├── Fonts/
│   │   ├── Antique/...
│   │   └── Matter/...
│   ├── Team/...
├── Components
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── Register.jsx
│   └── ScrollToTop.jsx
├── Pages
│   ├── About.jsx
│   ├── Events.jsx
│   ├── Home.jsx
│   ├── PageNotFound.jsx
│   ├── Schedule.jsx
│   └── Speakers.jsx
├── Styles
│   ├── About.scss
│   ├── Footer.scss
│   ├── Home.scss
│   ├── Navbar.scss
│   ├── PageNotFound.scss
│   ├── Schedule.scss
│   └── Speakers.scss
├── index.css
├── index.js
├── reportWebVitals.js
└── setupTests.js
```
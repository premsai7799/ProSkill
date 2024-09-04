document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menuOptions = document.querySelector('.menu-options');
    const languageDisplay = document.querySelector('.language-display');
    const levelsContainer = document.querySelector('.levels-container');
    const levelNavigation = document.querySelector('.level-navigation');
    const prevLevelButton = document.getElementById('prev-level');
    const nextLevelButton = document.getElementById('next-level');
    const levelContent = document.querySelector('.level-content');

    prevLevelButton.style.display = 'none';
    nextLevelButton.style.display = 'none';

    let selectedLanguage = '';
    let currentLevel = 1;

    menuButton.addEventListener('click', function() {
        menuOptions.style.display = menuOptions.style.display === 'block' ? 'none' : 'block';
    });

    menuOptions.addEventListener('click', function(e) {
        levelContent.innerHTML = ''; // Clear previous level's content
        selectedLanguage = e.target.dataset.lang;
        languageDisplay.textContent = selectedLanguage;
        levelsContainer.innerHTML = '';

        for (let i = 1; i <= 15; i++) {
            const levelPill = document.createElement('div');
            levelPill.className = 'level-pill';
            levelPill.textContent = `Level-${i}`;
            levelPill.addEventListener('click', function() {
                displayLevelContent(i);
            });
            levelsContainer.appendChild(levelPill);
        }

        menuOptions.style.display = 'none'; // Close menu after selecting a language
        
        const levelControls = document.querySelector('.level-controls');
        const prevButton = document.getElementById('prev-level');
        const nextButton = document.getElementById('next-level');
    
        levelControls.classList.add('show-buttons'); // Show the prev and next buttons
    });

    function displayLevelContent(level) {
        levelContent.innerHTML = ''; // Clear previous level's content
        currentLevel = level;


        // Hide all levels and display only the selected one
        Array.from(levelsContainer.children).forEach(pill => {
            pill.style.opacity = '0';
            setTimeout(() => { pill.style.display = 'none'; }, 500);
        });
        setTimeout(() => {
            const selectedPill = levelsContainer.children[level - 1];
            selectedPill.style.display = 'block';
            selectedPill.style.opacity = '1';
            selectedPill.classList.add('selected');
        }, 500);

        // Inject content based on the selected language and level
        levelContent.innerHTML = generateLevelContent(selectedLanguage, level);

        // Show navigation buttons with animation
        setTimeout(() => { levelNavigation.classList.add('show'); }, 500);

        prevLevelButton.style.display = 'block';
        nextLevelButton.style.display = 'block';
    }

    prevLevelButton.addEventListener('click', function() {
        if (currentLevel > 1) {
            displayLevelContent(currentLevel - 1);
        }
    });

    nextLevelButton.addEventListener('click', function() {
        if (currentLevel < 15) {
            displayLevelContent(currentLevel + 1);
        }
    });
    function generateLevelContent(language, level) {
        const content ={
            "HTML": [
        {
            "level": 1,
            "concepts": [
                {
                    "concept": "Basic Structure",
                    "definition": "HTML documents begin with a doctype declaration and include elements such as <html>, <head>, and <body>.",
                    "example": "<!DOCTYPE html>\n<html>\n<head>\n<title>Title</title>\n</head>\n<body>\nContent goes here\n</body>\n</html>"
                },
                {
                    "concept": "Headings",
                    "definition": "HTML provides six levels of headings, from <h1> to <h6>, with <h1> being the highest level.",
                    "example": "<h1>Main Heading</h1>\n<h2>Subheading</h2>"
                },
                {
                    "concept": "Paragraphs",
                    "definition": "The <p> element is used to define a paragraph in HTML.",
                    "example": "<p>This is a paragraph.</p>"
                },
                {
                    "concept": "Links",
                    "definition": "The <a> element is used to create hyperlinks. The href attribute specifies the URL of the page the link goes to.",
                    "example": "<a href=\"https://example.com\">Click here</a>"
                },
                {
                    "concept": "Images",
                    "definition": "The <img> element is used to embed images in an HTML page. The src attribute specifies the path to the image.",
                    "example": "<img src=\"image.jpg\" alt=\"Description of image\">"
                }
            ]
        },
        {
            "level": 2,
            "concepts": [
                {
                    "concept": "Lists",
                    "definition": "HTML supports ordered (<ol>) and unordered (<ul>) lists, with list items (<li>) inside them.",
                    "example": "<ul>\n<li>Item 1</li>\n<li>Item 2</li>\n</ul>\n<ol>\n<li>First</li>\n<li>Second</li>\n</ol>"
                },
                {
                    "concept": "Tables",
                    "definition": "Tables are created with the <table> element. Inside it, rows (<tr>), headers (<th>), and data cells (<td>) are used.",
                    "example": "<table>\n<tr><th>Header 1</th><th>Header 2</th></tr>\n<tr><td>Data 1</td><td>Data 2</td></tr>\n</table>"
                },
                {
                    "concept": "Forms",
                    "definition": "Forms are created with the <form> element, and input fields are included using elements like <input>, <textarea>, and <select>.",
                    "example": "<form>\n<label for=\"name\">Name:</label>\n<input type=\"text\" id=\"name\" name=\"name\">\n</form>"
                },
                {
                    "concept": "Meta Tags",
                    "definition": "Meta tags provide metadata about the HTML document. They are placed inside the <head> section.",
                    "example": "<meta charset=\"UTF-8\">\n<meta name=\"description\" content=\"Free Web tutorials\">"
                },
                {
                    "concept": "Block vs Inline Elements",
                    "definition": "Block-level elements take up the full width available, while inline elements only take up as much width as necessary.",
                    "example": "<div>This is a block element</div>\n<span>This is an inline element</span>"
                }
            ]
        },
        {
            "level": 3,
            "concepts": [
                {
                    "concept": "Semantic Elements",
                    "definition": "HTML5 introduced semantic elements such as <header>, <footer>, <article>, and <section> to better structure the content.",
                    "example": "<header>This is the header</header>\n<section>This is a section</section>"
                },
                {
                    "concept": "Character Entities",
                    "definition": "Character entities are used to display reserved characters. For example, &amp; is used to display an ampersand (&).",
                    "example": "Use &amp; to display &"
                },
                {
                    "concept": "Iframes",
                    "definition": "The <iframe> element is used to embed another HTML page within the current page.",
                    "example": "<iframe src=\"https://www.example.com\" title=\"Example\"></iframe>"
                },
                {
                    "concept": "Classes and IDs",
                    "definition": "The class and id attributes are used to target HTML elements for styling and scripting.",
                    "example": "<div class=\"container\">This is a div with a class</div>\n<div id=\"unique\">This is a div with an ID</div>"
                },
                {
                    "concept": "Forms with GET and POST",
                    "definition": "Forms can use the GET or POST method to submit data to the server. GET appends data to the URL, while POST sends it in the request body.",
                    "example": "<form method=\"GET\">\n<input type=\"text\" name=\"name\">\n</form>\n<form method=\"POST\">\n<input type=\"text\" name=\"name\">\n</form>"
                }
            ]
        },
        {
            "level": 4,
            "concepts": [
                {
                    "concept": "Form Validation",
                    "definition": "HTML5 provides built-in form validation features such as required fields and pattern matching using attributes like required and pattern.",
                    "example": "<form>\n<input type=\"email\" required>\n</form>"
                },
                {
                    "concept": "HTML5 Input Types",
                    "definition": "HTML5 introduced new input types like email, date, and range.",
                    "example": "<input type=\"email\">\n<input type=\"date\">\n<input type=\"range\">"
                },
                {
                    "concept": "Data Attributes",
                    "definition": "Data attributes allow you to store extra information on HTML elements using attributes that begin with data-.",
                    "example": "<div data-info=\"some data\">This div has data attributes</div>"
                },
                {
                    "concept": "Audio and Video",
                    "definition": "HTML5 introduced the <audio> and <video> elements to embed multimedia content.",
                    "example": "<audio controls>\n<source src=\"audio.mp3\" type=\"audio/mpeg\">\n</audio>\n<video controls>\n<source src=\"video.mp4\" type=\"video/mp4\">\n</video>"
                },
                {
                    "concept": "SVG",
                    "definition": "SVG (Scalable Vector Graphics) allows you to create vector-based graphics that can scale without losing quality.",
                    "example": "<svg width=\"100\" height=\"100\">\n<circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"red\" />\n</svg>"
                }
            ]
        },
        {
            "level": 5,
            "concepts": [
                {
                    "concept": "Responsive Images",
                    "definition": "The <picture> element and srcset attribute in the <img> tag allow for responsive images, which adapt to different screen sizes.",
                    "example": "<picture>\n<source srcset=\"img-small.jpg\" media=\"(max-width: 600px)\">\n<source srcset=\"img-large.jpg\" media=\"(min-width: 601px)\">\n<img src=\"img.jpg\" alt=\"Example\">\n</picture>"
                },
                {
                    "concept": "ARIA Landmarks",
                    "definition": "ARIA (Accessible Rich Internet Applications) landmarks improve accessibility by identifying regions of a page, like <nav>, <main>, and <footer>.",
                    "example": "<nav aria-label=\"Main Navigation\">...</nav>\n<main role=\"main\">...</main>"
                },
                {
                    "concept": "Drag and Drop",
                    "definition": "HTML5 supports native drag-and-drop functionality using draggable elements and the ondrag events.",
                    "example": "<div draggable=\"true\" ondragstart=\"event.dataTransfer.setData('text/plain', 'Dragged Element')\">Drag me</div>"
                },
                {
                    "concept": "Web Storage",
                    "definition": "Web storage provides mechanisms to store key-value pairs on the client side using localStorage and sessionStorage.",
                    "example": "<script>\nlocalStorage.setItem('key', 'value');\nconsole.log(localStorage.getItem('key'));\n</script>"
                },
                {
                    "concept": "Custom Data Attributes",
                    "definition": "Custom data attributes in HTML can be used to store data on an element, accessible via JavaScript.",
                    "example": "<div data-custom=\"customValue\">...</div>\n<script>\nconsole.log(document.querySelector('div').dataset.custom);\n</script>"
                }
            ]
        },
        {
            "level": 6,
            "concepts": [
                {
                    "concept": "Geolocation",
                    "definition": "HTML5 provides a JavaScript API for obtaining the geographical location of a user.",
                    "example": "<script>\nnavigator.geolocation.getCurrentPosition(function(position) {\nconsole.log(position.coords.latitude, position.coords.longitude);\n});\n</script>"
                },
                {
                    "concept": "Canvas",
                    "definition": "The <canvas> element is used to draw graphics via JavaScript.",
                    "example": "<canvas id=\"myCanvas\" width=\"200\" height=\"100\"></canvas>\n<script>\nvar c = document.getElementById('myCanvas');\nvar ctx = c.getContext('2d');\nctx.fillStyle = '#FF0000';\nctx.fillRect(0, 0, 150, 75);\n</script>"
                },
                {
                    "concept": "Microdata",
                    "definition": "Microdata is a way to nest metadata within existing content on web pages using the itemscope and itemprop attributes.",
                    "example": "<div itemscope itemtype=\"http://schema.org/Person\">\n<span itemprop=\"name\">John Doe</span>\n</div>"
                },
                {
                    "concept": "Progress Element",
                    "definition": "The <progress> element displays the progress of a task.",
                    "example": "<progress value=\"70\" max=\"100\">70%</progress>"
                },
                {
                    "concept": "Meter Element",
                    "definition": "The <meter> element represents a scalar measurement within a known range, like disk usage or the relevance of a query result.",
                    "example": "<meter value=\"2\" min=\"0\" max=\"10\">2 out of 10</meter>"
                }
            ]
        },
        {
            "level": 7,
            "concepts": [
                {
                    "concept": "Responsive Design",
                    "definition": "Responsive design allows web pages to render well on a variety of devices by using flexible layouts and media queries.",
                    "example": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\n@media only screen and (max-width: 600px) {\nbody { background-color: lightblue; }\n}\n</style>"
                },
                {
                    "concept": "Input Validation",
                    "definition": "HTML5 provides attributes like pattern, required, and type to perform basic input validation in forms.",
                    "example": "<input type=\"text\" pattern=\"[A-Za-z]{3}\" required>"
                },
                {
                    "concept": "Custom Elements",
                    "definition": "Custom elements are a Web Components standard allowing you to create reusable components with custom behavior.",
                    "example": "<script>\nclass MyElement extends HTMLElement {\nconstructor() { super(); }\nconnectedCallback() { this.innerHTML = '<p>Custom Element</p>'; }\n}\ncustomElements.define('my-element', MyElement);\n</script>\n<my-element></my-element>"
                },
                {
                    "concept": "Shadow DOM",
                    "definition": "Shadow DOM allows you to encapsulate a component's styles and markup, preventing them from being affected by external styles.",
                    "example": "<script>\nconst shadow = document.querySelector('div').attachShadow({mode: 'open'});\nshadow.innerHTML = '<p>Shadow DOM content</p>';\n</script>\n<div></div>"
                },
                {
                    "concept": "Template Element",
                    "definition": "The <template> element holds client-side content that is not rendered when the page loads but can be used later with JavaScript.",
                    "example": "<template id=\"my-template\">\n<p>Template Content</p>\n</template>\n<script>\nvar temp = document.getElementById('my-template');\nvar clone = document.importNode(temp.content, true);\ndocument.body.appendChild(clone);\n</script>"
                }
            ]
        },
        {
            "level": 8,
            "concepts": [
                {
                    "concept": "Service Workers",
                    "definition": "Service workers are background scripts that run independently of web pages, enabling features like push notifications and background sync.",
                    "example": "<script>\nif ('serviceWorker' in navigator) {\nnavigator.serviceWorker.register('/sw.js').then(function(registration) {\nconsole.log('Service Worker registered with scope:', registration.scope);\n});\n}\n</script>"
                },
                {
                    "concept": "Manifest",
                    "definition": "The manifest file is a JSON file that provides information about your web app (e.g., name, icons) and makes it possible to install on a device.",
                    "example": "{\n\"name\": \"My App\",\n\"short_name\": \"App\",\n\"start_url\": \"/index.html\",\n\"icons\": [\n{ \"src\": \"/icon.png\", \"sizes\": \"192x192\", \"type\": \"image/png\" }\n]\n}"
                },
                {
                    "concept": "Web Components",
                    "definition": "Web Components are a set of web platform APIs that allow you to create custom, reusable HTML tags for web apps.",
                    "example": "<script>\nclass MyButton extends HTMLElement {\nconstructor() {\n super();\n let shadow = this.attachShadow({mode: 'open'});\n shadow.innerHTML = '<button>Click me</button>';\n}\n}\ncustomElements.define('my-button', MyButton);\n</script>\n<my-button></my-button>"
                },
                {
                    "concept": "Intersection Observer",
                    "definition": "The Intersection Observer API allows you to asynchronously observe changes in the intersection of a target element with an ancestor element or viewport.",
                    "example": "<script>\nlet observer = new IntersectionObserver(function(entries) {\nentries.forEach(entry => {\nif (entry.isIntersecting) {\nentry.target.style.backgroundColor = 'red';\n}\n});\n});\nobserver.observe(document.querySelector('div'));\n</script>\n<div style=\"height: 100px;\">Observe me</div>"
                },
                {
                    "concept": "Fetch API",
                    "definition": "The Fetch API provides a modern, promise-based way to make asynchronous requests to a server.",
                    "example": "<script>\nfetch('https://api.example.com/data')\n.then(response => response.json())\n.then(data => console.log(data));\n</script>"
                }
            ]
        },
        {
            "level": 9,
            "concepts": [
                {
                    "concept": "WebSockets",
                    "definition": "WebSockets provide a way to establish a two-way communication channel between a client and a server over a single, long-lived connection.",
                    "example": "<script>\nvar socket = new WebSocket('wss://example.com/socket');\nsocket.onmessage = function(event) {\nconsole.log('Message from server:', event.data);\n};\nsocket.send('Hello, Server!');\n</script>"
                },
                {
                    "concept": "WebRTC",
                    "definition": "WebRTC (Web Real-Time Communication) enables peer-to-peer communication of audio, video, and data between browsers.",
                    "example": "<script>\nlet pc = new RTCPeerConnection();\nnavigator.mediaDevices.getUserMedia({video: true, audio: true}).then(stream => {\nstream.getTracks().forEach(track => pc.addTrack(track, stream));\n});\n</script>"
                },
                {
                    "concept": "IndexedDB",
                    "definition": "IndexedDB is a low-level API for storing large amounts of structured data that can be queried using indexes.",
                    "example": "<script>\nvar request = indexedDB.open('MyDatabase', 1);\nrequest.onupgradeneeded = function(event) {\nvar db = event.target.result;\ndb.createObjectStore('store', {keyPath: 'id'});\n};\n</script>"
                },
                {
                    "concept": "Web Animations API",
                    "definition": "The Web Animations API allows you to create complex animations with JavaScript, rather than CSS.",
                    "example": "<script>\ndocument.querySelector('div').animate([\n{ transform: 'translateY(0px)' },\n{ transform: 'translateY(100px)' }\n], { duration: 1000 });\n</script>\n<div style=\"width: 100px; height: 100px; background: blue;\"></div>"
                },
                {
                    "concept": "WebAssembly",
                    "definition": "WebAssembly (Wasm) is a binary instruction format that enables high-performance applications on web pages.",
                    "example": "<script>\nfetch('module.wasm').then(response => response.arrayBuffer())\n.then(bytes => WebAssembly.instantiate(bytes))\n.then(results => {\nconsole.log(results.instance);\n});\n</script>"
                }
            ]
        },
        {
            "level": 10,
            "concepts": [
                {
                    "concept": "Progressive Web Apps (PWAs)",
                    "definition": "PWAs are web applications that use modern web capabilities to deliver an app-like experience to users.",
                    "example": "<meta name=\"theme-color\" content=\"#ffffff\">\n<link rel=\"manifest\" href=\"manifest.json\">"
                },
                {
                    "concept": "Content Security Policy (CSP)",
                    "definition": "CSP is a security feature that helps prevent attacks like Cross-Site Scripting (XSS) by specifying which content is allowed to load on your website.",
                    "example": "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self' https://example.com\">"
                },
                {
                    "concept": "HTTP/2",
                    "definition": "HTTP/2 is a major revision of the HTTP network protocol, offering features like multiplexing and server push.",
                    "example": "To enable HTTP/2 on your server, you need to configure your web server (like Apache or Nginx) to support it."
                },
                {
                    "concept": "Client-Side Rendering (CSR)",
                    "definition": "CSR is a technique where content is rendered in the browser using JavaScript, typically with frameworks like React or Angular.",
                    "example": "<div id=\"app\"></div>\n<script>\nReactDOM.render(<App />, document.getElementById('app'));\n</script>"
                },
                {
                    "concept": "Server-Side Rendering (SSR)",
                    "definition": "SSR is a technique where content is rendered on the server and sent to the client as a fully rendered HTML page.",
                    "example": "To implement SSR with React, use a framework like Next.js."
                }
            ]
        },
        {
            "level": 11,
            "concepts": [
                {
                    "concept": "Web Workers",
                    "definition": "Web Workers provide a way to run scripts in background threads, helping to prevent UI blocking.",
                    "example": "<script>\nvar worker = new Worker('worker.js');\nworker.onmessage = function(e) {\nconsole.log('Message received from worker', e.data);\n};\nworker.postMessage('Hello');\n</script>"
                },
                {
                    "concept": "Cross-Origin Resource Sharing (CORS)",
                    "definition": "CORS is a security feature implemented by browsers to control how resources are requested from a different origin (domain).",
                    "example": "To allow CORS in your server response, you need to set the Access-Control-Allow-Origin header."
                },
                {
                    "concept": "Push Notifications",
                    "definition": "Push notifications are messages sent from a server to a user's device via the web, even when the app is not active.",
                    "example": "<script>\nNotification.requestPermission().then(function(result) {\nif (result === 'granted') {\nnew Notification('Hello!');\n}\n});\n</script>"
                },
                {
                    "concept": "WebSocket API",
                    "definition": "The WebSocket API enables bidirectional, full-duplex communication channels over a single, long-lived connection.",
                    "example": "<script>\nlet socket = new WebSocket('ws://example.com/socket');\nsocket.onopen = function(event) {\nsocket.send('Hello Server!');\n};\nsocket.onmessage = function(event) {\nconsole.log('Message from server:', event.data);\n};\n</script>"
                },
                {
                    "concept": "Server-Sent Events (SSE)",
                    "definition": "SSE is a standard allowing servers to push updates to the client over a single HTTP connection.",
                    "example": "<script>\nvar evtSource = new EventSource('/events');\nevtSource.onmessage = function(event) {\ndocument.getElementById('output').innerHTML += 'Message: ' + event.data + '<br>';\n};\n</script>\n<div id=\"output\"></div>"
                }
            ]
        },
        {
            "level": 12,
            "concepts": [
                {
                    "concept": "OAuth 2.0",
                    "definition": "OAuth 2.0 is an authorization framework that allows third-party applications to access a user's resources without exposing credentials.",
                    "example": "To implement OAuth 2.0, you'll need to configure your application to interact with the OAuth provider (e.g., Google, Facebook)."
                },
                {
                    "concept": "WebRTC Data Channels",
                    "definition": "WebRTC data channels allow you to send low-latency, peer-to-peer data between browsers.",
                    "example": "<script>\nlet pc = new RTCPeerConnection();\nlet channel = pc.createDataChannel('dataChannel');\nchannel.onmessage = function(event) {\nconsole.log('Received:', event.data);\n};\nchannel.send('Hello Peer!');\n</script>"
                },
                {
                    "concept": "Web Crypto API",
                    "definition": "The Web Crypto API provides a number of cryptographic operations such as hashing, encryption, and decryption.",
                    "example": "<script>\nwindow.crypto.subtle.digest('SHA-256', new TextEncoder().encode('hello'))\n.then(hash => console.log(new Uint8Array(hash)));\n</script>"
                },
                {
                    "concept": "Content Delivery Networks (CDNs)",
                    "definition": "CDNs are a network of servers distributed geographically to deliver content more efficiently and quickly to users.",
                    "example": "To use a CDN for your assets, include the CDN's URL in your HTML file. For example:\n<script src=\"https://cdn.example.com/library.js\"></script>"
                },
                {
                    "concept": "API Rate Limiting",
                    "definition": "API rate limiting restricts the number of requests a user can make to an API within a specific time period to prevent abuse.",
                    "example": "To implement rate limiting, you might use middleware in your server application to track the number of requests per user."
                }
            ]
        },
        {
            "level": 13,
            "concepts": [
                {
                    "concept": "JSON Web Tokens (JWT)",
                    "definition": "JWT is a compact, URL-safe means of representing claims to be transferred between two parties, typically used for authentication.",
                    "example": "To use JWT, you generate a token on the server and send it to the client, which stores it for subsequent requests."
                },
                {
                    "concept": "Security Headers",
                    "definition": "Security headers are HTTP headers that add another layer of security to your web application by controlling browser behavior.",
                    "example": "Some common security headers include Content-Security-Policy, X-Content-Type-Options, and X-Frame-Options."
                },
                {
                    "concept": "HSTS",
                    "definition": "HTTP Strict Transport Security (HSTS) is a web security policy that forces browsers to only interact with your site over HTTPS.",
                    "example": "To enable HSTS, you need to configure your web server to include the Strict-Transport-Security header in responses."
                },
                {
                    "concept": "Cross-Site Scripting (XSS) Prevention",
                    "definition": "XSS is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by others.",
                    "example": "To prevent XSS, always escape user input and use Content Security Policy (CSP) to mitigate the risk."
                },
                {
                    "concept": "Same-Origin Policy",
                    "definition": "The Same-Origin Policy is a security measure that restricts how documents or scripts from one origin can interact with resources from another origin.",
                    "example": "To work around the Same-Origin Policy, you might use CORS headers or JSONP for cross-origin requests."
                }
            ]
        },
        {
            "level": 14,
            "concepts": [
                {
                    "concept": "Single Page Applications (SPA)",
                    "definition": "SPAs are web applications that load a single HTML page and dynamically update content as the user interacts with the app.",
                    "example": "SPAs are commonly built using frameworks like React, Angular, or Vue.js."
                },
                {
                    "concept": "Isomorphic Applications",
                    "definition": "Isomorphic applications (also known as Universal apps) are JavaScript applications that can run both on the client and server side.",
                    "example": "To build an isomorphic app, you might use a framework like Next.js, which supports server-side rendering of React components."
                },
                {
                    "concept": "Lazy Loading",
                    "definition": "Lazy loading is a technique to defer loading of non-critical resources at page load time, speeding up the initial load time.",
                    "example": "To implement lazy loading, you can use the loading=\"lazy\" attribute on <img> elements."
                },
                {
                    "concept": "GraphQL",
                    "definition": "GraphQL is a query language for APIs that allows clients to request exactly the data they need, and nothing more.",
                    "example": "To use GraphQL, you define a schema on the server and query it from the client using GraphQL syntax."
                },
                {
                    "concept": "Headless CMS",
                    "definition": "A headless CMS is a content management system that provides a way to manage content without being tied to a specific frontend, allowing you to deliver content to any channel.",
                    "example": "Popular headless CMS platforms include Contentful, Strapi, and Sanity."
                }
            ]
        },
        {
            "level": 15,
            "concepts": [
                {
                    "concept": "Micro Frontends",
                    "definition": "Micro frontends are an architectural style where a web application is divided into smaller, independent fragments that can be developed, tested, and deployed separately.",
                    "example": "To implement micro frontends, you can use iframes, web components, or frameworks like Single-SPA."
                },
                {
                    "concept": "Serverless Functions",
                    "definition": "Serverless functions are a way to execute backend code in response to events without managing server infrastructure.",
                    "example": "To use serverless functions, you might deploy them on platforms like AWS Lambda, Azure Functions, or Netlify Functions."
                },
                {
                    "concept": "Edge Computing",
                    "definition": "Edge computing refers to the practice of processing data close to where it is generated, rather than in a centralized data-processing warehouse.",
                    "example": "Content Delivery Networks (CDNs) are an example of edge computing, where content is cached closer to the user's location."
                },
                {
                    "concept": "Containerization",
                    "definition": "Containerization involves encapsulating an application and its dependencies into a container that can run consistently across different computing environments.",
                    "example": "Docker is a popular tool for creating, deploying, and managing containers."
                },
                {
                    "concept": "WebAssembly (Advanced)",
                    "definition": "Advanced use of WebAssembly might include integrating it with existing JavaScript applications for performance-critical tasks.",
                    "example": "To use WebAssembly, you might compile C/C++/Rust code into Wasm and interact with it via JavaScript."
                }
            ]
        }
    ],
            "CSS": [
            {
                "level": 1,
                "concepts": [
                    {
                        "concept": "Selectors",
                        "definition": "Selectors are used to target HTML elements that you want to style.",
                        "example": "p { color: blue; }"
                    },
                    {
                        "concept": "Classes and IDs",
                        "definition": "Classes and IDs are used to apply styles to specific elements. Classes are reusable, while IDs are unique within a page.",
                        "example": ".class-name { color: red; }\n#id-name { color: green; }"
                    },
                    {
                        "concept": "Colors",
                        "definition": "CSS allows you to set colors for text, backgrounds, borders, and other elements.",
                        "example": "body { background-color: #f0f0f0; color: #333; }"
                    },
                    {
                        "concept": "Fonts",
                        "definition": "CSS allows you to set the font family, size, weight, and other properties.",
                        "example": "p { font-family: Arial, sans-serif; font-size: 16px; }"
                    },
                    {
                        "concept": "Margins and Padding",
                        "definition": "Margins create space outside of an element, while padding creates space inside an element, between the content and the border.",
                        "example": "div { margin: 20px; padding: 10px; }"
                    }
                ]
            },
            {
                "level": 2,
                "concepts": [
                    {
                        "concept": "Box Model",
                        "definition": "The box model describes how elements are structured in CSS, including the content, padding, border, and margin.",
                        "example": "div { width: 100px; padding: 10px; border: 5px solid black; margin: 20px; }"
                    },
                    {
                        "concept": "Border",
                        "definition": "CSS allows you to set border width, style, and color around elements.",
                        "example": "p { border: 2px solid black; border-radius: 5px; }"
                    },
                    {
                        "concept": "Backgrounds",
                        "definition": "CSS allows you to set background color, images, and other properties for elements.",
                        "example": "body { background-image: url('background.jpg'); background-size: cover; }"
                    },
                    {
                        "concept": "Display",
                        "definition": "The display property determines how an element is displayed on the page, such as block, inline, or none.",
                        "example": "div { display: block; }\nspan { display: inline; }"
                    },
                    {
                        "concept": "Positioning",
                        "definition": "CSS provides several positioning schemes, including static, relative, absolute, and fixed positioning.",
                        "example": "div { position: absolute; top: 50px; left: 100px; }"
                    }
                ]
            },
            {
                "level": 3,
                "concepts": [
                    {
                        "concept": "Floats",
                        "definition": "The float property allows elements to float to the left or right of their container, affecting how text and inline elements wrap around them.",
                        "example": "img { float: left; margin-right: 10px; }"
                    },
                    {
                        "concept": "Clearfix",
                        "definition": "The clearfix hack is used to clear floated elements and ensure that containers expand to contain them.",
                        "example": ".clearfix::after { content: ''; display: block; clear: both; }"
                    },
                    {
                        "concept": "Pseudo-classes",
                        "definition": "Pseudo-classes allow you to apply styles to elements in specific states, such as when hovered over.",
                        "example": "a:hover { color: red; }"
                    },
                    {
                        "concept": "Pseudo-elements",
                        "definition": "Pseudo-elements allow you to style specific parts of an element, such as the first line or first letter.",
                        "example": "p::first-line { font-weight: bold; }"
                    },
                    {
                        "concept": "Opacity",
                        "definition": "The opacity property sets the transparency level of an element.",
                        "example": "div { opacity: 0.5; }"
                    }
                ]
            },
            {
                "level": 4,
                "concepts": [
                    {
                        "concept": "Media Queries",
                        "definition": "Media queries allow you to apply styles based on the screen size, orientation, and other media features.",
                        "example": "@media (max-width: 600px) { body { background-color: lightblue; } }"
                    },
                    {
                        "concept": "Transitions",
                        "definition": "CSS transitions allow you to smoothly animate changes in properties over time.",
                        "example": "div { transition: all 0.5s ease; }\ndiv:hover { background-color: red; }"
                    },
                    {
                        "concept": "Transformations",
                        "definition": "The transform property allows you to apply 2D or 3D transformations to elements, such as rotate, scale, and translate.",
                        "example": "div { transform: rotate(45deg); }"
                    },
                    {
                        "concept": "Flexbox",
                        "definition": "Flexbox is a layout model that allows you to create complex layouts with flexible and responsive elements.",
                        "example": "div { display: flex; justify-content: space-between; }"
                    },
                    {
                        "concept": "Z-index",
                        "definition": "The z-index property controls the stacking order of elements that overlap.",
                        "example": "div { position: absolute; z-index: 10; }"
                    }
                ]
            },
            {
                "level": 5,
                "concepts": [
                    {
                        "concept": "Grid Layout",
                        "definition": "CSS Grid Layout is a 2-dimensional layout system that allows you to create grid-based designs.",
                        "example": "div { display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 10px; }"
                    },
                    {
                        "concept": "CSS Variables",
                        "definition": "CSS variables allow you to store values in reusable variables that can be applied throughout your CSS.",
                        "example": ":root { --main-color: #3498db; }\ndiv { color: var(--main-color); }"
                    },
                    {
                        "concept": "Custom Fonts",
                        "definition": "The @font-face rule allows you to define custom fonts to be used in your designs.",
                        "example": "@font-face { font-family: 'MyFont'; src: url('myfont.woff2') format('woff2'); }\np { font-family: 'MyFont'; }"
                    },
                    {
                        "concept": "Aspect Ratio",
                        "definition": "The aspect-ratio property allows you to define the ratio between the width and height of an element.",
                        "example": "div { aspect-ratio: 16 / 9; }"
                    },
                    {
                        "concept": "CSS Shapes",
                        "definition": "CSS Shapes allow you to wrap content around custom shapes using the shape-outside property.",
                        "example": "img { float: left; shape-outside: circle(50%); }"
                    }
                ]
            },
            {
                "level": 6,
                "concepts": [
                    {
                        "concept": "CSS Grid Advanced",
                        "definition": "Advanced CSS Grid techniques include using grid areas, auto-placement, and alignment properties for complex layouts.",
                        "example": "div { display: grid; grid-template-areas: 'header header' 'sidebar main' 'footer footer'; }"
                    },
                    {
                        "concept": "CSS Animations",
                        "definition": "CSS animations allow you to create keyframe-based animations that run over time.",
                        "example": "@keyframes slide { from { left: 0; } to { left: 100px; } }\ndiv { position: relative; animation: slide 2s infinite; }"
                    },
                    {
                        "concept": "Clipping and Masking",
                        "definition": "CSS clipping and masking allow you to hide parts of elements or create non-rectangular shapes.",
                        "example": "div { clip-path: circle(50% at 50% 50%); }"
                    },
                    {
                        "concept": "Filters",
                        "definition": "CSS filters apply graphical effects like blur, brightness, and contrast to elements.",
                        "example": "img { filter: grayscale(100%); }"
                    },
                    {
                        "concept": "Blend Modes",
                        "definition": "Blend modes in CSS allow you to determine how an element's content should blend with the content behind it.",
                        "example": "div { background-color: red; mix-blend-mode: multiply; }"
                    }
                ]
            },
            {
                "level": 7,
                "concepts": [
                    {
                        "concept": "Responsive Design",
                        "definition": "Responsive design ensures your website looks good on all devices by using flexible grids, layouts, and media queries.",
                        "example": "img { max-width: 100%; height: auto; }"
                    },
                    {
                        "concept": "Retina Images",
                        "definition": "Retina images provide higher resolution graphics for devices with high pixel density.",
                        "example": "img { srcset: 'image.jpg 1x, image@2x.jpg 2x'; }"
                    },
                    {
                        "concept": "CSS Counters",
                        "definition": "CSS counters are variables maintained by CSS whose values can be incremented by CSS rules to automatically number elements.",
                        "example": "ol { counter-reset: item; }\nli::before { counter-increment: item; content: counters(item, '.') ' '; }"
                    },
                    {
                        "concept": "Viewport Units",
                        "definition": "Viewport units (vw, vh, vmin, vmax) are length units representing a percentage of the viewport's width and height.",
                        "example": "div { width: 50vw; height: 50vh; }"
                    },
                    {
                        "concept": "Object Fit",
                        "definition": "The object-fit property specifies how the content of a replaced element, such as an <img>, should be resized to fit its container.",
                        "example": "img { object-fit: cover; }"
                    }
                ]
            },
            {
                "level": 8,
                "concepts": [
                    {
                        "concept": "CSS Functions",
                        "definition": "CSS functions like calc(), min(), max(), and clamp() allow for dynamic calculations and more flexible layouts.",
                        "example": "div { width: calc(100% - 50px); }"
                    },
                    {
                        "concept": "Grid Template Areas",
                        "definition": "Grid template areas allow you to define a grid layout with named areas that can be referenced in the layout.",
                        "example": "div { display: grid; grid-template-areas: 'header header' 'sidebar main'; }"
                    },
                    {
                        "concept": "Advanced Selectors",
                        "definition": "Advanced selectors like :nth-child(), :nth-of-type(), and attribute selectors allow for precise targeting of elements.",
                        "example": "li:nth-child(odd) { background-color: #f0f0f0; }"
                    },
                    {
                        "concept": "CSS Modules",
                        "definition": "CSS Modules are a way to write modular and reusable CSS by automatically scoping class and animation names locally by default.",
                        "example": ".module { composes: button from 'shared.css'; }"
                    },
                    {
                        "concept": "Responsive Typography",
                        "definition": "Responsive typography techniques like fluid typography ensure that text scales appropriately across different screen sizes.",
                        "example": "h1 { font-size: calc(1.5rem + 2vw); }"
                    }
                ]
            },
            {
                "level": 9,
                "concepts": [
                    {
                        "concept": "CSS Grid Layout Patterns",
                        "definition": "CSS Grid allows for complex layout patterns, such as card layouts, holy grail layouts, and newspaper layouts.",
                        "example": "div { display: grid; grid-template-areas: 'header header' 'sidebar main' 'footer footer'; }"
                    },
                    {
                        "concept": "CSS Houdini",
                        "definition": "CSS Houdini is a collection of low-level APIs that expose parts of the CSS engine, enabling developers to write custom styles and layout algorithms.",
                        "example": "CSS.paintWorklet.addModule('paint.js');"
                    },
                    {
                        "concept": "CSS Subgrid",
                        "definition": "The subgrid value for grid-template-columns and grid-template-rows allows grid items to inherit the parent grid’s column or row definitions.",
                        "example": "div { display: grid; grid-template-columns: subgrid; }"
                    },
                    {
                        "concept": "Container Queries",
                        "definition": "Container queries allow you to apply styles to an element based on the size of its container rather than the viewport.",
                        "example": "@container (min-width: 400px) { div { background-color: blue; } }"
                    },
                    {
                        "concept": "CSS Environment Variables",
                        "definition": "CSS environment variables are predefined values that are available in all browsers, allowing developers to access certain browser settings.",
                        "example": "body { padding-top: env(safe-area-inset-top); }"
                    }
                ]
            },
            {
                "level": 10,
                "concepts": [
                    {
                        "concept": "The :is() Pseudo-class",
                        "definition": "The :is() pseudo-class function takes a list of selectors and applies styles to any element that matches one of the selectors.",
                        "example": "div:is(.class1, .class2) { background-color: green; }"
                    },
                    {
                        "concept": "Advanced Grid Techniques",
                        "definition": "Advanced grid techniques include grid alignment, grid placement using line numbers, and grid auto-flow for more control over layout.",
                        "example": "div { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-flow: dense; }"
                    },
                    {
                        "concept": "Cascade Layers",
                        "definition": "Cascade layers allow you to manage and layer the specificity of your styles in a more controlled way, by grouping selectors into layers.",
                        "example": "@layer base { div { color: black; } }\n@layer theme { div { color: white; } }"
                    },
                    {
                        "concept": "CSS Math Functions",
                        "definition": "CSS math functions like min(), max(), and clamp() enable more responsive and flexible layouts by combining values with mathematical operations.",
                        "example": "div { width: clamp(200px, 50%, 600px); }"
                    },
                    {
                        "concept": "Logical Properties and Values",
                        "definition": "Logical properties and values replace physical properties (like left, right) to accommodate different writing modes and layouts.",
                        "example": "div { margin-inline-start: 10px; padding-block-end: 20px; }"
                    }
                ]
            },
            {
                "level": 11,
                "concepts": [
                    {
                        "concept": "CSS Scroll Snap",
                        "definition": "CSS Scroll Snap allows you to control the scroll position to snap to defined points in the scroll container.",
                        "example": "div { scroll-snap-type: y mandatory; }\nsection { scroll-snap-align: start; }"
                    },
                    {
                        "concept": "Custom Properties (CSS Variables)",
                        "definition": "CSS custom properties (variables) enable dynamic, reusable styles that can be easily updated globally.",
                        "example": ":root { --main-color: #333; }\nbody { color: var(--main-color); }"
                    },
                    {
                        "concept": "Multi-column Layout",
                        "definition": "The multi-column layout module allows you to flow content into multiple columns, similar to a newspaper layout.",
                        "example": "div { column-count: 3; column-gap: 20px; }"
                    },
                    {
                        "concept": "Image Sprites",
                        "definition": "Image sprites are a technique used to reduce the number of HTTP requests by combining multiple images into a single file.",
                        "example": "div { background-image: url('sprite.png'); background-position: -10px -20px; }"
                    },
                    {
                        "concept": "CSS Naming Conventions",
                        "definition": "CSS naming conventions like BEM (Block, Element, Modifier) help organize and structure your CSS code for better maintainability.",
                        "example": ".block__element--modifier { color: red; }"
                    }
                ]
            },
            {
                "level": 12,
                "concepts": [
                    {
                        "concept": "Cross-Browser Compatibility",
                        "definition": "Ensuring your CSS works across different browsers by using vendor prefixes, fallbacks, and tools like Autoprefixer.",
                        "example": "div { -webkit-transform: rotate(45deg); transform: rotate(45deg); }"
                    },
                    {
                        "concept": "CSS Frameworks",
                        "definition": "CSS frameworks like Bootstrap, Tailwind, and Bulma provide pre-designed components and utility classes to speed up development.",
                        "example": "<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\">"
                    },
                    {
                        "concept": "CSS-in-JS",
                        "definition": "CSS-in-JS refers to the practice of writing CSS styles directly within JavaScript files, often used in React and other modern frameworks.",
                        "example": "const styles = { color: 'red', backgroundColor: 'blue' };\n<div style={styles}>Styled Component</div>"
                    },
                    {
                        "concept": "Critical CSS",
                        "definition": "Critical CSS is the practice of extracting and inlining the above-the-fold CSS for faster initial page load times.",
                        "example": "<style> body { margin: 0; padding: 0; } </style>"
                    },
                    {
                        "concept": "CSS Architecture",
                        "definition": "CSS architecture involves organizing your styles in a modular and scalable way, often using methodologies like OOCSS, SMACSS, or ITCSS.",
                        "example": "/* Base */\nbody { margin: 0; padding: 0; }\n/* Layout */\n.header { height: 60px; }\n/* Module */\n.button { padding: 10px; }"
                    }
                ]
            },
            {
                "level": 13,
                "concepts": [
                    {
                        "concept": "PostCSS",
                        "definition": "PostCSS is a tool for transforming CSS with JavaScript plugins, enabling functionalities like autoprefixing, variables, and mixins.",
                        "example": "postcss([require('autoprefixer')]).process(css, { from: 'src/app.css', to: 'dest/app.css' });"
                    },
                    {
                        "concept": "Responsive Images",
                        "definition": "Responsive images ensure that images scale appropriately across different devices, often using the srcset attribute and the picture element.",
                        "example": "<picture>\n<source media=\"(min-width: 650px)\" srcset=\"img-large.jpg\">\n<img src=\"img-small.jpg\" alt=\"A sample image\">\n</picture>"
                    },
                    {
                        "concept": "Typography Systems",
                        "definition": "A typography system in CSS involves creating a consistent and scalable typographic hierarchy across your site.",
                        "example": "h1 { font-size: 2.5rem; line-height: 1.2; }\nh2 { font-size: 2rem; line-height: 1.3; }"
                    },
                    {
                        "concept": "Advanced Animation Techniques",
                        "definition": "Advanced CSS animations might involve combining transitions, keyframes, and JavaScript for complex interactive effects.",
                        "example": "@keyframes example { 0% { opacity: 0; } 100% { opacity: 1; } }\ndiv { animation: example 1s infinite alternate; }"
                    },
                    {
                        "concept": "Variable Fonts",
                        "definition": "Variable fonts allow for more granular control over font properties, like weight and width, in a single font file.",
                        "example": "@font-face { font-family: 'VariableFont'; src: url('variablefont.woff2') format('woff2'); }\nbody { font-family: 'VariableFont'; font-weight: 400; }"
                    }
                ]
            },
            {
                "level": 14,
                "concepts": [
                    {
                        "concept": "Design Tokens",
                        "definition": "Design tokens are the visual design atoms of the design system, such as colors, typography, and spacing, stored as variables.",
                        "example": ":root { --primary-color: #3498db; --font-size-base: 16px; }"
                    },
                    {
                        "concept": "CSS Grid Responsive Techniques",
                        "definition": "Advanced responsive techniques with CSS Grid involve auto-fit, auto-fill, and fractional units for flexible layouts.",
                        "example": "div { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); }"
                    },
                    {
                        "concept": "Layered Animation",
                        "definition": "Layered animation involves coordinating multiple animations or transitions to create complex motion effects.",
                        "example": "div { animation: slide 2s, fade 1s; }"
                    },
                    {
                        "concept": "CSS Preprocessors",
                        "definition": "CSS preprocessors like Sass, LESS, and Stylus extend CSS with variables, nesting, and functions for more maintainable code.",
                        "example": "$primary-color: #333;\nbody { color: $primary-color; }"
                    },
                    {
                        "concept": "Component-Based Design",
                        "definition": "Component-based design involves breaking down the UI into reusable, self-contained components with encapsulated styles.",
                        "example": "<div class=\"card\">\n<div class=\"card-header\">Header</div>\n<div class=\"card-body\">Body</div>\n</div>"
                    }
                ]
            },
            {
                "level": 15,
                "concepts": [
                    {
                        "concept": "Dark Mode",
                        "definition": "Dark mode is a design preference that inverts the color scheme to reduce eye strain, typically using media queries to toggle styles.",
                        "example": "@media (prefers-color-scheme: dark) { body { background-color: #333; color: #fff; } }"
                    },
                    {
                        "concept": "CSS Grid Intrinsic Sizing",
                        "definition": "Intrinsic sizing with CSS Grid allows you to create layouts where items take up space based on their content size.",
                        "example": "div { display: grid; grid-template-columns: min-content max-content; }"
                    },
                    {
                        "concept": "Advanced SVG Styling",
                        "definition": "SVGs can be styled using CSS for animations, gradients, and responsiveness, integrating vector graphics directly into your design.",
                        "example": "svg { width: 100px; height: 100px; fill: currentColor; }"
                    },
                    {
                        "concept": "Performance Optimization",
                        "definition": "CSS performance optimization involves techniques to improve load times and rendering, such as minimizing CSS and using critical CSS.",
                        "example": "/* Minified CSS */\nbody{margin:0;padding:0;}"
                    },
                    {
                        "concept": "Grid and Flexbox Hybrid Layouts",
                        "definition": "Combining Grid and Flexbox allows for creating advanced and flexible layouts that leverage the strengths of both systems.",
                        "example": "div { display: grid; grid-template-columns: 1fr 2fr; }\ndiv > div { display: flex; justify-content: center; align-items: center; }"
                    }
                ]
            }
    ],
            "JavaScript": [
        {
            "level": 1,
            "concepts": [
                {
                    "concept": "Variables and Data Types",
                    "definition": "Variables are containers for storing data values. JavaScript supports various data types such as numbers, strings, and booleans.",
                    "example": "let age = 25;\nlet name = 'John';\nlet isStudent = true;"
                },
                {
                    "concept": "Operators",
                    "definition": "Operators in JavaScript are used to assign values, compare values, perform arithmetic operations, and more.",
                    "example": "let sum = 10 + 5;\nlet isEqual = 10 == 5;"
                },
                {
                    "concept": "Functions",
                    "definition": "Functions are reusable blocks of code that perform a specific task. They can take parameters and return a value.",
                    "example": "function greet(name) {\n  return 'Hello ' + name;\n}\nconsole.log(greet('Alice'));"
                },
                {
                    "concept": "Conditional Statements",
                    "definition": "Conditional statements are used to perform different actions based on different conditions.",
                    "example": "if (age > 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}"
                },
                {
                    "concept": "Loops",
                    "definition": "Loops are used to execute a block of code repeatedly until a specified condition is met.",
                    "example": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}"
                }
            ]
        },
        {
            "level": 2,
            "concepts": [
                {
                    "concept": "Arrays",
                    "definition": "Arrays are used to store multiple values in a single variable.",
                    "example": "let fruits = ['Apple', 'Banana', 'Cherry'];\nconsole.log(fruits[0]);"
                },
                {
                    "concept": "Objects",
                    "definition": "Objects are collections of properties and methods, defined using key-value pairs.",
                    "example": "let person = {\n  name: 'John',\n  age: 25,\n  greet: function() { console.log('Hello'); }\n};\nconsole.log(person.name);"
                },
                {
                    "concept": "String Methods",
                    "definition": "JavaScript provides various methods to work with strings, such as concatenation, slicing, and finding substrings.",
                    "example": "let text = 'Hello World';\nconsole.log(text.toUpperCase());\nconsole.log(text.slice(0, 5));"
                },
                {
                    "concept": "Array Methods",
                    "definition": "Array methods allow you to manipulate arrays, including adding, removing, and transforming elements.",
                    "example": "let numbers = [1, 2, 3];\nnumbers.push(4);\nconsole.log(numbers);"
                },
                {
                    "concept": "Switch Statements",
                    "definition": "Switch statements allow you to perform different actions based on different conditions, similar to if-else statements.",
                    "example": "let day = 3;\nswitch (day) {\n  case 1: console.log('Monday'); break;\n  case 2: console.log('Tuesday'); break;\n  default: console.log('Other day');\n}"
                }
            ]
        },
        {
            "level": 3,
            "concepts": [
                {
                    "concept": "ES6 Arrow Functions",
                    "definition": "Arrow functions provide a shorter syntax for writing functions and lexically bind the `this` value.",
                    "example": "const add = (a, b) => a + b;\nconsole.log(add(2, 3));"
                },
                {
                    "concept": "Destructuring",
                    "definition": "Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.",
                    "example": "const [a, b] = [1, 2];\nconst {name, age} = {name: 'John', age: 25};"
                },
                {
                    "concept": "Template Literals",
                    "definition": "Template literals are string literals that allow embedded expressions using backticks (`) and `${}` syntax.",
                    "example": "let name = 'John';\nlet greeting = `Hello, ${name}!`;\nconsole.log(greeting);"
                },
                {
                    "concept": "Spread and Rest Operators",
                    "definition": "The spread operator (`...`) allows an iterable to expand, while the rest operator collects multiple elements into an array.",
                    "example": "const arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5];\nfunction sum(...numbers) { return numbers.reduce((a, b) => a + b); }"
                },
                {
                    "concept": "Default Parameters",
                    "definition": "Default parameters allow you to set default values for function parameters if no value is provided.",
                    "example": "function greet(name = 'Guest') {\n  console.log('Hello ' + name);\n}\ngreet();"
                }
            ]
        },
        {
            "level": 4,
            "concepts": [
                {
                    "concept": "Closures",
                    "definition": "A closure is a function that remembers its lexical scope even when the function is executed outside that scope.",
                    "example": "function outer() {\n  let count = 0;\n  return function inner() { count++; console.log(count); };\n}\nconst counter = outer();\ncounter();\ncounter();"
                },
                {
                    "concept": "Promises",
                    "definition": "Promises are used to handle asynchronous operations in JavaScript, providing methods like `.then()` and `.catch()`.",
                    "example": "let promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Done!'), 1000);\n});\npromise.then(result => console.log(result));"
                },
                {
                    "concept": "Async/Await",
                    "definition": "Async/await is a syntactic sugar built on promises that allows you to write asynchronous code that looks synchronous.",
                    "example": "async function fetchData() {\n  let response = await fetch('https://api.example.com');\n  let data = await response.json();\n  console.log(data);\n}\nfetchData();"
                },
                {
                    "concept": "Error Handling",
                    "definition": "JavaScript provides try-catch-finally blocks to handle errors and execute code regardless of whether an error occurred.",
                    "example": "try {\n  throw new Error('Something went wrong!');\n} catch (error) {\n  console.log(error.message);\n} finally {\n  console.log('This runs no matter what');\n}"
                },
                {
                    "concept": "SetTimeout and SetInterval",
                    "definition": "The setTimeout and setInterval functions are used to execute code after a delay or repeatedly at specified intervals.",
                    "example": "setTimeout(() => console.log('Hello after 1 second'), 1000);\nlet intervalId = setInterval(() => console.log('Hello every 2 seconds'), 2000);"
                }
            ]
        },
        {
            "level": 5,
            "concepts": [
                {
                    "concept": "Object-Oriented Programming (OOP)",
                    "definition": "JavaScript supports object-oriented programming with classes and objects, allowing you to create reusable and modular code.",
                    "example": "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  greet() {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n}\nlet person1 = new Person('Alice', 30);\nperson1.greet();"
                },
                {
                    "concept": "Prototypes and Inheritance",
                    "definition": "JavaScript uses prototypes for inheritance, where objects can inherit properties and methods from other objects.",
                    "example": "function Animal(name) {\n  this.name = name;\n}\nAnimal.prototype.speak = function() {\n  console.log(this.name + ' makes a noise.');\n};\nlet dog = new Animal('Dog');\ndog.speak();"
                },
                {
                    "concept": "Modules",
                    "definition": "JavaScript modules allow you to split your code into separate files and import/export them as needed.",
                    "example": "// In module.js\nexport const greeting = 'Hello';\n// In main.js\nimport { greeting } from './module.js';\nconsole.log(greeting);"
                },
                {
                    "concept": "Event Handling",
                    "definition": "JavaScript allows you to handle events such as clicks, key presses, and form submissions to make web pages interactive.",
                    "example": "document.querySelector('button').addEventListener('click', () => {\n  alert('Button clicked!');\n});"
                },
                {
                    "concept": "The `this` Keyword",
                    "definition": "The `this` keyword in JavaScript refers to the object it belongs to. Its value depends on how the function is called.",
                    "example": "let person = {\n  name: 'John',\n  greet: function() { console.log(this.name); }\n};\nperson.greet();"
                }
            ]
        },
        {
            "level": 6,
            "concepts": [
                {
                    "concept": "JSON",
                    "definition": "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write.",
                    "example": "let jsonString = '{ \"name\": \"John\", \"age\": 30 }';\nlet jsonObject = JSON.parse(jsonString);\nconsole.log(jsonObject.name);"
                },
                {
                    "concept": "LocalStorage and SessionStorage",
                    "definition": "LocalStorage and SessionStorage are web storage APIs that allow you to store data in the browser persistently or for the session.",
                    "example": "localStorage.setItem('name', 'John');\nlet name = localStorage.getItem('name');\nconsole.log(name);"
                },
                {
                    "concept": "Fetch API",
                    "definition": "The Fetch API provides a modern way to make HTTP requests to servers, replacing older XMLHttpRequest.",
                    "example": "fetch('https://api.example.com')\n  .then(response => response.json())\n  .then(data => console.log(data));"
                },
                {
                    "concept": "Regular Expressions",
                    "definition": "Regular expressions (regex) are patterns used to match character combinations in strings.",
                    "example": "let regex = /\\d+/g;\nlet result = 'There are 100 cats'.match(regex);\nconsole.log(result);"
                },
                {
                    "concept": "Timers and Debouncing",
                    "definition": "Timers in JavaScript are used to delay actions, while debouncing is a technique to limit the rate at which a function can fire.",
                    "example": "function debounce(func, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => func.apply(this, args), delay);\n  };\n}"
                }
            ]
        },
        {
            "level": 7,
            "concepts": [
                {
                    "concept": "DOM Manipulation",
                    "definition": "JavaScript can be used to manipulate the Document Object Model (DOM) to dynamically change the content and structure of a webpage.",
                    "example": "document.getElementById('demo').innerHTML = 'Hello World!';"
                },
                {
                    "concept": "Event Propagation",
                    "definition": "Event propagation describes the order in which events are handled in the DOM, including capturing, targeting, and bubbling phases.",
                    "example": "document.getElementById('child').addEventListener('click', (e) => {\n  console.log('Child clicked');\n}, true);"
                },
                {
                    "concept": "ES6 Classes",
                    "definition": "ES6 introduced classes as syntactical sugar over JavaScript's prototype-based inheritance model.",
                    "example": "class Car {\n  constructor(brand) {\n    this.brand = brand;\n  }\n  displayBrand() {\n    console.log(`This car is a ${this.brand}`);\n  }\n}\nlet myCar = new Car('Toyota');\nmyCar.displayBrand();"
                },
                {
                    "concept": "Rest and Spread Operator",
                    "definition": "The rest operator collects all remaining elements into an array, while the spread operator expands an array into individual elements.",
                    "example": "const sum = (...numbers) => numbers.reduce((acc, cur) => acc + cur, 0);\nconsole.log(sum(1, 2, 3));"
                },
                {
                    "concept": "Symbol Data Type",
                    "definition": "Symbols are a primitive data type that are unique and immutable, often used as object property keys.",
                    "example": "let sym = Symbol('identifier');\nlet obj = {};\nobj[sym] = 'value';\nconsole.log(obj[sym]);"
                }
            ]
        },
        {
            "level": 8,
            "concepts": [
                {
                    "concept": "Iterators and Generators",
                    "definition": "Iterators provide a way to access elements in a collection sequentially, while generators are functions that can be paused and resumed.",
                    "example": "function* generator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst gen = generator();\nconsole.log(gen.next().value);"
                },
                {
                    "concept": "Map and Set",
                    "definition": "Map is a collection of keyed data items, and Set is a collection of unique values.",
                    "example": "let map = new Map();\nmap.set('key', 'value');\nconsole.log(map.get('key'));\nlet set = new Set([1, 2, 3, 3]);\nconsole.log(set.has(3));"
                },
                {
                    "concept": "Strict Mode",
                    "definition": "Strict mode is a way to opt in to a restricted variant of JavaScript, making it easier to write secure JavaScript.",
                    "example": "'use strict';\nfunction myFunction() {\n  var x = y = 3;  // Error: y is not defined\n}"
                },
                {
                    "concept": "Destructuring Assignment",
                    "definition": "Destructuring assignment allows you to extract values from arrays or properties from objects and assign them to variables.",
                    "example": "const [a, b] = [1, 2];\nconst {name, age} = {name: 'Alice', age: 30};"
                },
                {
                    "concept": "Async Iteration",
                    "definition": "Async iteration allows you to use `for await...of` loops to iterate over asynchronous data streams.",
                    "example": "async function* asyncGenerator() {\n  yield 'Hello';\n  yield 'World';\n}\nfor await (let value of asyncGenerator()) {\n  console.log(value);\n}"
                }
            ]
        },
        {
            "level": 9,
            "concepts": [
                {
                    "concept": "JavaScript Engine and Runtime",
                    "definition": "JavaScript engines are programs that execute JavaScript code. The runtime environment provides APIs and manages the execution context.",
                    "example": "V8 is a popular JavaScript engine developed by Google, used in Chrome and Node.js."
                },
                {
                    "concept": "Event Loop and Concurrency",
                    "definition": "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the system's kernel.",
                    "example": "console.log('Start');\nsetTimeout(() => console.log('Middle'), 0);\nconsole.log('End');"
                },
                {
                    "concept": "WeakMap and WeakSet",
                    "definition": "WeakMap and WeakSet are collections that hold weak references to their keys or values, preventing memory leaks by allowing garbage collection.",
                    "example": "let weakMap = new WeakMap();\nlet obj = {};\nweakMap.set(obj, 'value');"
                },
                {
                    "concept": "Memory Management",
                    "definition": "JavaScript uses automatic garbage collection to manage memory, reclaiming memory that is no longer in use.",
                    "example": "In JavaScript, memory is automatically allocated when variables and objects are created and freed when they are no longer used."
                },
                {
                    "concept": "Proxies",
                    "definition": "Proxies allow you to create a proxy for another object, intercepting and redefining fundamental operations like property access and assignment.",
                    "example": "let target = {};\nlet proxy = new Proxy(target, {\n  get: function(obj, prop) {\n    return prop in obj ? obj[prop] : 'Property not found';\n  }\n});\nproxy.name = 'John';\nconsole.log(proxy.name);"
                }
            ]
        },
        {
            "level": 10,
            "concepts": [
                {
                    "concept": "JavaScript Design Patterns",
                    "definition": "Design patterns are typical solutions to commonly occurring problems in software design, such as Singleton, Factory, and Observer patterns.",
                    "example": "const Singleton = (function() {\n  let instance;\n  function createInstance() {\n    return new Object('I am the instance');\n  }\n  return {\n    getInstance: function() {\n      if (!instance) {\n        instance = createInstance();\n      }\n      return instance;\n    }\n  };\n})();\nconst instance1 = Singleton.getInstance();\nconst instance2 = Singleton.getInstance();\nconsole.log(instance1 === instance2);"
                },
                {
                    "concept": "Functional Programming",
                    "definition": "Functional programming in JavaScript emphasizes the use of functions as first-class citizens, immutability, and avoiding side effects.",
                    "example": "const numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);"
                },
                {
                    "concept": "Higher-Order Functions",
                    "definition": "A higher-order function is a function that takes another function as an argument, or returns a function as a result.",
                    "example": "function greet(name) {\n  return function(message) {\n    console.log(`${message}, ${name}`);\n  };\n}\nconst greetJohn = greet('John');\ngreetJohn('Hello');"
                },
                {
                    "concept": "Currying",
                    "definition": "Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.",
                    "example": "function add(a) {\n  return function(b) {\n    return a + b;\n  };\n}\nconst add5 = add(5);\nconsole.log(add5(3));"
                },
                {
                    "concept": "Promises vs Callbacks",
                    "definition": "Promises provide a cleaner way to handle asynchronous operations compared to traditional callbacks, helping to avoid callback hell.",
                    "example": "function getData(callback) {\n  setTimeout(() => callback('Callback data'), 1000);\n}\ngetData(data => console.log(data));"
                }
            ]
        },
        {
            "level": 11,
            "concepts": [
                {
                    "concept": "Asynchronous Programming",
                    "definition": "Asynchronous programming allows JavaScript to perform tasks like data fetching without blocking the main thread.",
                    "example": "async function fetchData() {\n  let response = await fetch('https://api.example.com');\n  let data = await response.json();\n  console.log(data);\n}\nfetchData();"
                },
                {
                    "concept": "Generators",
                    "definition": "Generators are functions that can be paused and resumed, allowing for asynchronous operations to be written in a synchronous style.",
                    "example": "function* generator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst gen = generator();\nconsole.log(gen.next().value);"
                },
                {
                    "concept": "Modules and Imports",
                    "definition": "JavaScript modules allow you to organize code into separate files, which can be imported and exported as needed.",
                    "example": "// module.js\nexport const greeting = 'Hello';\n// main.js\nimport { greeting } from './module.js';\nconsole.log(greeting);"
                },
                {
                    "concept": "Event Loop and Task Queue",
                    "definition": "The event loop and task queue are fundamental to JavaScript's concurrency model, managing asynchronous tasks and event handling.",
                    "example": "console.log('Start');\nsetTimeout(() => console.log('Middle'), 0);\nconsole.log('End');"
                },
                {
                    "concept": "Memory Leaks and Optimization",
                    "definition": "Memory leaks occur when memory is not properly released, leading to increased memory usage over time. Optimization techniques help prevent this.",
                    "example": "Avoid global variables, remove event listeners when no longer needed, and be mindful of closures that reference large data structures."
                }
            ]
        },
        {
            "level": 12,
            "concepts": [
                {
                    "concept": "Web Workers",
                    "definition": "Web Workers allow you to run JavaScript in the background, off the main thread, to perform CPU-intensive tasks without blocking the UI.",
                    "example": "const worker = new Worker('worker.js');\nworker.postMessage('Start');\nworker.onmessage = function(e) {\n  console.log('Message from worker:', e.data);\n};"
                },
                {
                    "concept": "Service Workers",
                    "definition": "Service Workers act as a proxy between your web app and the network, enabling features like offline support, caching, and push notifications.",
                    "example": "navigator.serviceWorker.register('/sw.js').then(function(registration) {\n  console.log('Service Worker registered with scope:', registration.scope);\n});"
                },
                {
                    "concept": "Intersection Observer",
                    "definition": "The Intersection Observer API allows you to observe changes in the intersection of a target element with an ancestor element or viewport.",
                    "example": "let observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      entry.target.classList.add('visible');\n    }\n  });\n});\nobserver.observe(document.querySelector('.target'));"
                },
                {
                    "concept": "Promise Combinators",
                    "definition": "Promise combinators like Promise.all, Promise.race, and Promise.allSettled allow you to handle multiple promises concurrently.",
                    "example": "Promise.all([fetch(url1), fetch(url2)]).then(([result1, result2]) => {\n  console.log(result1, result2);\n});"
                },
                {
                    "concept": "Custom Events",
                    "definition": "Custom events allow you to create and dispatch events for custom actions within your application.",
                    "example": "const event = new CustomEvent('myEvent', { detail: { key: 'value' } });\ndocument.dispatchEvent(event);"
                }
            ]
        },
        {
            "level": 13,
            "concepts": [
                {
                    "concept": "Proxy and Reflect API",
                    "definition": "The Proxy object allows you to create custom behavior for fundamental operations like property lookup, assignment, and function invocation.",
                    "example": "let handler = {\n  get: function(target, name) {\n    return name in target ? target[name] : 42;\n  }\n};\nlet p = new Proxy({}, handler);\np.answerToTheUltimateQuestion = 42;\nconsole.log(p.answerToTheUltimateQuestion);"
                },
                {
                    "concept": "WeakMap and WeakSet",
                    "definition": "WeakMap and WeakSet are collections where the keys and values are weakly referenced, allowing them to be garbage collected.",
                    "example": "let weakMap = new WeakMap();\nlet obj = {};\nweakMap.set(obj, 'value');"
                },
                {
                    "concept": "Typed Arrays",
                    "definition": "Typed Arrays provide a way to handle binary data in JavaScript using a variety of array types like Int8Array, Uint8Array, Float32Array, etc.",
                    "example": "let buffer = new ArrayBuffer(16);\nlet view = new Int32Array(buffer);\nview[0] = 42;\nconsole.log(view[0]);"
                },
                {
                    "concept": "Intl API",
                    "definition": "The Intl object provides language-sensitive string comparison, number formatting, and date/time formatting.",
                    "example": "let date = new Date();\nlet formatter = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' });\nconsole.log(formatter.format(date));"
                },
                {
                    "concept": "WebAssembly",
                    "definition": "WebAssembly (Wasm) is a low-level binary format that allows high-performance code (written in languages like C/C++) to run in the browser.",
                    "example": "fetch('module.wasm').then(response => response.arrayBuffer())\n.then(bytes => WebAssembly.instantiate(bytes))\n.then(results => {\n  console.log(results.instance);\n});"
                }
            ]
        },
        {
            "level": 14,
            "concepts": [
                {
                    "concept": "Design Patterns in JavaScript",
                    "definition": "Design patterns like Singleton, Factory, and Observer provide reusable solutions to common software design problems.",
                    "example": "const Singleton = (function() {\n  let instance;\n  function createInstance() {\n    return new Object('I am the instance');\n  }\n  return {\n    getInstance: function() {\n      if (!instance) {\n        instance = createInstance();\n      }\n      return instance;\n    }\n  };\n})();\nconst instance1 = Singleton.getInstance();\nconst instance2 = Singleton.getInstance();\nconsole.log(instance1 === instance2);"
                },
                {
                    "concept": "Functional Programming",
                    "definition": "Functional programming is a paradigm that treats computation as the evaluation of mathematical functions, avoiding changing state and mutable data.",
                    "example": "const numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);"
                },
                {
                    "concept": "Advanced Error Handling",
                    "definition": "Advanced error handling in JavaScript includes techniques like custom error classes, asynchronous error handling, and error monitoring.",
                    "example": "class CustomError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'CustomError';\n  }\n}\nthrow new CustomError('This is a custom error');"
                },
                {
                    "concept": "Currying and Partial Application",
                    "definition": "Currying is the process of converting a function that takes multiple arguments into a function that takes them one at a time. Partial application is a similar concept.",
                    "example": "function add(a) {\n  return function(b) {\n    return a + b;\n  };\n}\nconst add5 = add(5);\nconsole.log(add5(3));"
                },
                {
                    "concept": "Decorators",
                    "definition": "Decorators are a pattern that allows behavior to be added to individual objects, dynamically and transparently, without affecting the behavior of other objects from the same class.",
                    "example": "function readonly(target, key, descriptor) {\n  descriptor.writable = false;\n  return descriptor;\n}\nclass Example {\n  @readonly\n  name() {\n    return 'This is a read-only method';\n  }\n}"
                }
            ]
        },
        {
            "level": 15,
            "concepts": [
                {
                    "concept": "Reactive Programming",
                    "definition": "Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change.",
                    "example": "const { fromEvent } = rxjs;\nconst clicks = fromEvent(document, 'click');\nclicks.subscribe(x => console.log(x));"
                },
                {
                    "concept": "TypeScript",
                    "definition": "TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript, enabling development of large-scale applications.",
                    "example": "let message: string = 'Hello, TypeScript';\nconsole.log(message);"
                },
                {
                    "concept": "GraphQL",
                    "definition": "GraphQL is a query language for APIs that allows clients to request exactly the data they need, and nothing more.",
                    "example": "const query = `{\n  user(id: \"1\") {\n    name\n    age\n  }\n}`;\nfetch('/graphql', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ query })\n}).then(res => res.json()).then(data => console.log(data));"
                },
                {
                    "concept": "Web Components",
                    "definition": "Web Components are a suite of technologies that allow you to create reusable custom elements with their own encapsulated HTML, CSS, and JavaScript.",
                    "example": "class MyElement extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: 'open' });\n    this.shadowRoot.innerHTML = `<p>Hello, Web Component!</p>`;\n  }\n}\ncustomElements.define('my-element', MyElement);"
                },
                {
                    "concept": "Progressive Web Apps (PWAs)",
                    "definition": "Progressive Web Apps (PWAs) are web applications that use modern web capabilities to deliver an app-like experience.",
                    "example": "self.addEventListener('fetch', event => {\n  event.respondWith(\n    caches.match(event.request).then(response => {\n      return response || fetch(event.request);\n    })\n  );\n});"
                }
            ]
        }
    ],
            "SQL": [
            {
                "level": 1,
                "concepts": [
                    {
                        "concept": "Basic SQL Syntax",
                        "definition": "SQL (Structured Query Language) is used to communicate with databases. Basic syntax includes statements like SELECT, INSERT, UPDATE, and DELETE.",
                        "example": "SELECT * FROM table_name;"
                    },
                    {
                        "concept": "SELECT Statement",
                        "definition": "The SELECT statement is used to retrieve data from a database.",
                        "example": "SELECT column1, column2 FROM table_name;"
                    },
                    {
                        "concept": "WHERE Clause",
                        "definition": "The WHERE clause is used to filter records based on a specific condition.",
                        "example": "SELECT * FROM table_name WHERE column1 = 'value';"
                    },
                    {
                        "concept": "INSERT INTO Statement",
                        "definition": "The INSERT INTO statement is used to insert new records into a table.",
                        "example": "INSERT INTO table_name (column1, column2) VALUES ('value1', 'value2');"
                    },
                    {
                        "concept": "UPDATE Statement",
                        "definition": "The UPDATE statement is used to modify existing records in a table.",
                        "example": "UPDATE table_name SET column1 = 'value' WHERE column2 = 'condition';"
                    }
                ]
            },
            {
                "level": 2,
                "concepts": [
                    {
                        "concept": "DELETE Statement",
                        "definition": "The DELETE statement is used to remove records from a table.",
                        "example": "DELETE FROM table_name WHERE condition;"
                    },
                    {
                        "concept": "Basic Data Types",
                        "definition": "SQL supports various data types such as INTEGER, VARCHAR, DATE, and BOOLEAN.",
                        "example": "CREATE TABLE employees (id INT, name VARCHAR(100), hire_date DATE, active BOOLEAN);"
                    },
                    {
                        "concept": "CREATE TABLE Statement",
                        "definition": "The CREATE TABLE statement is used to create a new table in the database.",
                        "example": "CREATE TABLE table_name (column1 datatype, column2 datatype);"
                    },
                    {
                        "concept": "ALTER TABLE Statement",
                        "definition": "The ALTER TABLE statement is used to modify the structure of an existing table.",
                        "example": "ALTER TABLE table_name ADD column_name datatype;"
                    },
                    {
                        "concept": "DROP TABLE Statement",
                        "definition": "The DROP TABLE statement is used to delete an entire table from the database.",
                        "example": "DROP TABLE table_name;"
                    }
                ]
            },
            {
                "level": 3,
                "concepts": [
                    {
                        "concept": "JOINs",
                        "definition": "JOINs are used to combine rows from two or more tables based on a related column.",
                        "example": "SELECT columns FROM table1 INNER JOIN table2 ON table1.column = table2.column;"
                    },
                    {
                        "concept": "INNER JOIN",
                        "definition": "The INNER JOIN keyword selects records that have matching values in both tables.",
                        "example": "SELECT * FROM orders INNER JOIN customers ON orders.customer_id = customers.id;"
                    },
                    {
                        "concept": "LEFT JOIN",
                        "definition": "The LEFT JOIN keyword returns all records from the left table, and the matched records from the right table.",
                        "example": "SELECT * FROM customers LEFT JOIN orders ON customers.id = orders.customer_id;"
                    },
                    {
                        "concept": "RIGHT JOIN",
                        "definition": "The RIGHT JOIN keyword returns all records from the right table, and the matched records from the left table.",
                        "example": "SELECT * FROM orders RIGHT JOIN customers ON orders.customer_id = customers.id;"
                    },
                    {
                        "concept": "FULL OUTER JOIN",
                        "definition": "The FULL OUTER JOIN keyword returns all records when there is a match in either left or right table.",
                        "example": "SELECT * FROM customers FULL OUTER JOIN orders ON customers.id = orders.customer_id;"
                    }
                ]
            },
            {
                "level": 4,
                "concepts": [
                    {
                        "concept": "GROUP BY Statement",
                        "definition": "The GROUP BY statement is used to arrange identical data into groups.",
                        "example": "SELECT COUNT(*), department FROM employees GROUP BY department;"
                    },
                    {
                        "concept": "HAVING Clause",
                        "definition": "The HAVING clause is used to filter groups based on a condition, similar to WHERE but for groups.",
                        "example": "SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;"
                    },
                    {
                        "concept": "ORDER BY Statement",
                        "definition": "The ORDER BY statement is used to sort the result set in ascending or descending order.",
                        "example": "SELECT * FROM employees ORDER BY hire_date DESC;"
                    },
                    {
                        "concept": "Aggregate Functions",
                        "definition": "Aggregate functions perform calculations on a set of values and return a single value, such as COUNT, SUM, AVG, MIN, and MAX.",
                        "example": "SELECT AVG(salary) FROM employees;"
                    },
                    {
                        "concept": "DISTINCT Keyword",
                        "definition": "The DISTINCT keyword is used to return only distinct (different) values.",
                        "example": "SELECT DISTINCT department FROM employees;"
                    }
                ]
            },
            {
                "level": 5,
                "concepts": [
                    {
                        "concept": "UNION Operator",
                        "definition": "The UNION operator is used to combine the result sets of two or more SELECT statements.",
                        "example": "SELECT column_name FROM table1 UNION SELECT column_name FROM table2;"
                    },
                    {
                        "concept": "SUBQUERY",
                        "definition": "A subquery is a query nested inside another query, often used to perform more complex filtering or calculations.",
                        "example": "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);"
                    },
                    {
                        "concept": "CASE Statement",
                        "definition": "The CASE statement is used to return values based on conditions, similar to an IF-THEN-ELSE statement.",
                        "example": "SELECT name, CASE WHEN salary > 50000 THEN 'High' ELSE 'Low' END AS salary_level FROM employees;"
                    },
                    {
                        "concept": "NULL Values",
                        "definition": "NULL represents a missing or undefined value in SQL. It's important to handle NULLs correctly using IS NULL or IS NOT NULL.",
                        "example": "SELECT * FROM employees WHERE department IS NULL;"
                    },
                    {
                        "concept": "COALESCE Function",
                        "definition": "The COALESCE function returns the first non-NULL value in a list of arguments.",
                        "example": "SELECT COALESCE(phone, 'No Phone') FROM employees;"
                    }
                ]
            },
            {
                "level": 6,
                "concepts": [
                    {
                        "concept": "INDEXES",
                        "definition": "Indexes are used to speed up the retrieval of rows by creating a data structure that allows for quick lookups.",
                        "example": "CREATE INDEX idx_employee_name ON employees (name);"
                    },
                    {
                        "concept": "PRIMARY KEY",
                        "definition": "A PRIMARY KEY is a unique identifier for a record in a table, ensuring that no duplicate values exist in the key column.",
                        "example": "CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(100));"
                    },
                    {
                        "concept": "FOREIGN KEY",
                        "definition": "A FOREIGN KEY is a field in a table that uniquely identifies a row in another table, creating a relationship between the two tables.",
                        "example": "CREATE TABLE orders (id INT, customer_id INT, FOREIGN KEY (customer_id) REFERENCES customers(id));"
                    },
                    {
                        "concept": "AUTO_INCREMENT",
                        "definition": "AUTO_INCREMENT is a column attribute that automatically generates a unique number for each new record.",
                        "example": "CREATE TABLE employees (id INT AUTO_INCREMENT, name VARCHAR(100));"
                    },
                    {
                        "concept": "DEFAULT Constraint",
                        "definition": "The DEFAULT constraint sets a default value for a column when no value is specified.",
                        "example": "CREATE TABLE employees (id INT, name VARCHAR(100), hire_date DATE DEFAULT CURRENT_DATE);"
                    }
                ]
            },
            {
                "level": 7,
                "concepts": [
                    {
                        "concept": "Triggers",
                        "definition": "A trigger is a set of SQL statements that automatically 'fires' when a specified event occurs, such as an INSERT, UPDATE, or DELETE.",
                        "example": "CREATE TRIGGER update_salary BEFORE UPDATE ON employees FOR EACH ROW SET NEW.salary = NEW.salary * 1.10;"
                    },
                    {
                        "concept": "Views",
                        "definition": "A view is a virtual table that is based on the result set of a SELECT statement. Views simplify complex queries.",
                        "example": "CREATE VIEW employee_view AS SELECT name, department FROM employees WHERE active = TRUE;"
                    },
                    {
                        "concept": "Stored Procedures",
                        "definition": "A stored procedure is a prepared SQL code that you can save and reuse. It can take parameters and execute complex operations.",
                        "example": "CREATE PROCEDURE GetEmployee (IN emp_id INT) BEGIN SELECT * FROM employees WHERE id = emp_id; END;"
                    },
                    {
                        "concept": "Transactions",
                        "definition": "Transactions are a sequence of SQL statements that are executed as a single unit of work. They ensure data integrity.",
                        "example": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;"
                    },
                    {
                        "concept": "ROLLBACK",
                        "definition": "The ROLLBACK command undoes transactions that have not yet been saved to the database, returning the database to its previous state.",
                        "example": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nROLLBACK;"
                    }
                ]
            },
            {
                "level": 8,
                "concepts": [
                    {
                        "concept": "Advanced JOINs",
                        "definition": "Advanced JOIN techniques include SELF JOIN, CROSS JOIN, and NATURAL JOIN, used for more complex relationships between tables.",
                        "example": "SELECT A.name, B.name FROM employees A INNER JOIN employees B ON A.manager_id = B.id;"
                    },
                    {
                        "concept": "Full-Text Search",
                        "definition": "Full-text search allows you to search for text data within a database using complex search queries and indexing.",
                        "example": "SELECT * FROM articles WHERE MATCH (title, body) AGAINST ('database' IN NATURAL LANGUAGE MODE);"
                    },
                    {
                        "concept": "Window Functions",
                        "definition": "Window functions perform calculations across a set of table rows related to the current row, such as RANK, ROW_NUMBER, and LAG.",
                        "example": "SELECT name, salary, RANK() OVER (ORDER BY salary DESC) FROM employees;"
                    },
                    {
                        "concept": "Recursive Queries",
                        "definition": "Recursive queries are used to query hierarchical data structures, such as organizational charts or file systems.",
                        "example": "WITH RECURSIVE employee_hierarchy AS (\n    SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL\n    UNION ALL\n    SELECT e.id, e.name, e.manager_id FROM employees e INNER JOIN employee_hierarchy eh ON e.manager_id = eh.id\n)\nSELECT * FROM employee_hierarchy;"
                    },
                    {
                        "concept": "Partitioning",
                        "definition": "Partitioning is the process of splitting a large table into smaller, more manageable pieces while retaining the ability to query the table as a whole.",
                        "example": "CREATE TABLE sales (\n    id INT,\n    sale_date DATE,\n    amount DECIMAL(10, 2)\n) PARTITION BY RANGE (YEAR(sale_date)) (\n    PARTITION p0 VALUES LESS THAN (2000),\n    PARTITION p1 VALUES LESS THAN (2010),\n    PARTITION p2 VALUES LESS THAN (2020)\n);"
                    }
                ]
            },
            {
                "level": 9,
                "concepts": [
                    {
                        "concept": "Normalization",
                        "definition": "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.",
                        "example": "A database is normalized by splitting large tables into smaller, related tables and defining relationships between them."
                    },
                    {
                        "concept": "Denormalization",
                        "definition": "Denormalization is the process of combining normalized tables to improve read performance, often at the cost of increased redundancy.",
                        "example": "Denormalization might involve combining a customers and orders table into a single table for faster query results."
                    },
                    {
                        "concept": "Data Integrity Constraints",
                        "definition": "Data integrity constraints ensure the accuracy and consistency of data within a database, including PRIMARY KEY, FOREIGN KEY, UNIQUE, and CHECK constraints.",
                        "example": "CREATE TABLE employees (\n    id INT PRIMARY KEY,\n    email VARCHAR(100) UNIQUE,\n    age INT CHECK (age >= 18)\n);"
                    },
                    {
                        "concept": "Index Optimization",
                        "definition": "Index optimization involves creating and managing indexes to improve query performance while balancing storage costs and write speeds.",
                        "example": "CREATE INDEX idx_salary ON employees (salary DESC);"
                    },
                    {
                        "concept": "Data Warehousing",
                        "definition": "Data warehousing involves storing and managing large volumes of data from multiple sources, optimized for analysis and reporting.",
                        "example": "A data warehouse might store historical sales data from multiple regional databases for use in business intelligence."
                    }
                ]
            },
            {
                "level": 10,
                "concepts": [
                    {
                        "concept": "Stored Functions",
                        "definition": "Stored functions are similar to stored procedures but return a single value and can be used in SQL statements.",
                        "example": "CREATE FUNCTION GetTotalSales(emp_id INT) RETURNS DECIMAL(10,2) BEGIN DECLARE total DECIMAL(10,2); SELECT SUM(amount) INTO total FROM sales WHERE employee_id = emp_id; RETURN total; END;"
                    },
                    {
                        "concept": "Dynamic SQL",
                        "definition": "Dynamic SQL allows you to construct and execute SQL statements dynamically at runtime, often used in stored procedures.",
                        "example": "SET @sql = CONCAT('SELECT * FROM ', table_name, ' WHERE ', column_name, ' = ', value); PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;"
                    },
                    {
                        "concept": "Materialized Views",
                        "definition": "Materialized views are database objects that store the result of a query physically, improving performance for complex queries at the cost of storage.",
                        "example": "CREATE MATERIALIZED VIEW total_sales AS SELECT employee_id, SUM(amount) AS total FROM sales GROUP BY employee_id;"
                    },
                    {
                        "concept": "Data Encryption",
                        "definition": "Data encryption in SQL ensures that sensitive data is stored securely, using encryption functions or database-level encryption.",
                        "example": "SELECT AES_ENCRYPT('mysecretpassword', 'encryptionkey');"
                    },
                    {
                        "concept": "Concurrency Control",
                        "definition": "Concurrency control in SQL involves managing simultaneous operations without conflicting, using techniques like locking, isolation levels, and transaction management.",
                        "example": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE; BEGIN TRANSACTION; SELECT * FROM accounts WHERE id = 1; UPDATE accounts SET balance = balance + 100 WHERE id = 1; COMMIT;"
                    }
                ]
            },
            {
                "level": 11,
                "concepts": [
                    {
                        "concept": "Query Optimization",
                        "definition": "Query optimization involves rewriting queries for better performance, using techniques like indexing, query hints, and execution plan analysis.",
                        "example": "EXPLAIN SELECT * FROM employees WHERE department_id = 5;"
                    },
                    {
                        "concept": "Horizontal and Vertical Partitioning",
                        "definition": "Horizontal partitioning splits a table's rows into smaller tables, while vertical partitioning splits columns into separate tables.",
                        "example": "Horizontal partitioning might store rows from 2000-2010 in one table and 2011-2020 in another. Vertical partitioning might store frequently accessed columns in one table and less accessed columns in another."
                    },
                    {
                        "concept": "Replication",
                        "definition": "Replication involves copying and maintaining database objects, such as tables or entire databases, across multiple database servers.",
                        "example": "Replication can be used to synchronize data between a primary and backup database server for high availability."
                    },
                    {
                        "concept": "Sharding",
                        "definition": "Sharding is a type of database partitioning that splits a large database into smaller, faster, more easily managed pieces called shards.",
                        "example": "A large user database might be split into shards by geographic region, with each shard stored on a different server."
                    },
                    {
                        "concept": "NoSQL Databases",
                        "definition": "NoSQL databases provide flexible schema design and horizontal scaling for large-scale data storage, often used in big data and real-time web applications.",
                        "example": "Examples of NoSQL databases include MongoDB (document-based), Cassandra (column-based), and Redis (key-value store)."
                    }
                ]
            },
            {
                "level": 12,
                "concepts": [
                    {
                        "concept": "Advanced Transaction Management",
                        "definition": "Advanced transaction management involves complex transaction control techniques like savepoints, distributed transactions, and two-phase commit.",
                        "example": "SAVEPOINT sp1; UPDATE accounts SET balance = balance - 100 WHERE id = 1; SAVEPOINT sp2; UPDATE accounts SET balance = balance + 100 WHERE id = 2; ROLLBACK TO sp1;"
                    },
                    {
                        "concept": "Data Archiving",
                        "definition": "Data archiving involves moving historical data to a separate storage location to improve the performance of operational databases.",
                        "example": "Archived data might be moved from the primary database to a separate archive database for long-term storage."
                    },
                    {
                        "concept": "Temporal Tables",
                        "definition": "Temporal tables in SQL allow you to track historical changes to data by automatically storing the history of all changes.",
                        "example": "CREATE TABLE employees_history (id INT, name VARCHAR(100), start_date DATE, end_date DATE); ALTER TABLE employees ADD PERIOD FOR SYSTEM_TIME (start_date, end_date);"
                    },
                    {
                        "concept": "Recursive CTEs",
                        "definition": "Recursive Common Table Expressions (CTEs) are used to perform recursive queries, often for hierarchical data like organizational charts.",
                        "example": "WITH RECURSIVE org_chart AS ( SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, e.manager_id FROM employees e INNER JOIN org_chart oc ON e.manager_id = oc.id ) SELECT * FROM org_chart;"
                    },
                    {
                        "concept": "Pivot and Unpivot",
                        "definition": "Pivot and unpivot operations in SQL allow you to transform data from rows to columns (pivot) or columns to rows (unpivot).",
                        "example": "SELECT * FROM (SELECT year, department, revenue FROM sales) PIVOT (SUM(revenue) FOR year IN (2019, 2020, 2021));"
                    }
                ]
            },
            {
                "level": 13,
                "concepts": [
                    {
                        "concept": "JSON in SQL",
                        "definition": "Modern SQL databases allow you to store and query JSON data, enabling flexible schema design and integration with NoSQL-like structures.",
                        "example": "SELECT info->>'$.address.city' AS city FROM customers WHERE info->>'$.address.zipcode' = '12345';"
                    },
                    {
                        "concept": "Geospatial Queries",
                        "definition": "Geospatial queries allow you to store, query, and analyze spatial data, such as locations and geometries, within a SQL database.",
                        "example": "SELECT name FROM stores WHERE ST_DWithin(location, ST_MakePoint(-122.41, 37.77), 1000);"
                    },
                    {
                        "concept": "XML in SQL",
                        "definition": "SQL databases often support XML data storage and querying, enabling you to work with hierarchical data directly in SQL.",
                        "example": "SELECT extract('/customer/name/text()', xml_data) FROM customers WHERE extract('/customer/id/text()', xml_data) = '123';"
                    },
                    {
                        "concept": "CTEs (Common Table Expressions)",
                        "definition": "CTEs simplify complex queries by breaking them into temporary result sets, improving readability and maintainability.",
                        "example": "WITH EmployeeCTE AS (SELECT id, name, manager_id FROM employees WHERE manager_id IS NOT NULL) SELECT * FROM EmployeeCTE;"
                    },
                    {
                        "concept": "Window Functions (Advanced)",
                        "definition": "Advanced window functions in SQL allow for complex calculations over a set of rows related to the current row, such as LEAD, LAG, NTILE, and PERCENT_RANK.",
                        "example": "SELECT name, salary, LAG(salary, 1) OVER (ORDER BY salary DESC) AS previous_salary FROM employees;"
                    }
                ]
            },
            {
                "level": 14,
                "concepts": [
                    {
                        "concept": "Advanced Indexing Techniques",
                        "definition": "Advanced indexing techniques include covering indexes, filtered indexes, and index-organized tables, all of which improve query performance.",
                        "example": "CREATE INDEX idx_covering ON employees (department, salary) INCLUDE (name, hire_date);"
                    },
                    {
                        "concept": "Data Masking",
                        "definition": "Data masking hides sensitive information in a database by replacing it with fictional data, often used in development and testing environments.",
                        "example": "CREATE MASKED TABLE employees (id INT, name VARCHAR(100) MASKED WITH (name = 'XXXX'), ssn CHAR(9) MASKED WITH (ssn = 'XXX-XX-XXXX'));"
                    },
                    {
                        "concept": "Database Security",
                        "definition": "Database security involves protecting data from unauthorized access, using techniques such as encryption, access control, and auditing.",
                        "example": "GRANT SELECT ON employees TO 'read_only_user';"
                    },
                    {
                        "concept": "ETL Processes (Extract, Transform, Load)",
                        "definition": "ETL processes involve extracting data from different sources, transforming it into a suitable format, and loading it into a target database.",
                        "example": "An ETL process might extract sales data from multiple regional databases, transform it to a common format, and load it into a centralized data warehouse."
                    },
                    {
                        "concept": "Handling Unstructured Data",
                        "definition": "SQL databases can handle unstructured data using features like full-text search, JSON/XML support, and blob storage.",
                        "example": "Storing unstructured data in a SQL database might involve using BLOB (Binary Large Object) columns to store images, videos, or documents."
                    }
                ]
            },
            {
                "level": 15,
                "concepts": [
                    {
                        "concept": "Data Mining with SQL",
                        "definition": "Data mining in SQL involves discovering patterns, correlations, and anomalies in large datasets, often using clustering, classification, and association rules.",
                        "example": "SELECT product_id, COUNT(*) FROM sales GROUP BY product_id HAVING COUNT(*) > 10;"
                    },
                    {
                        "concept": "Machine Learning with SQL",
                        "definition": "Some SQL databases support integrated machine learning capabilities, enabling data scientists to build and deploy models directly within the database.",
                        "example": "SELECT PREDICT(model_name, 'features') FROM data_table WHERE conditions;"
                    },
                    {
                        "concept": "Big Data Integration",
                        "definition": "SQL databases are increasingly integrated with big data technologies like Hadoop, Spark, and NoSQL databases, enabling seamless data processing across platforms.",
                        "example": "Using SQL queries to access and process data stored in Hadoop via SQL-on-Hadoop solutions like Apache Hive or Spark SQL."
                    },
                    {
                        "concept": "Database DevOps",
                        "definition": "Database DevOps practices involve integrating database development and operations into a continuous delivery pipeline, including automated testing, version control, and deployment.",
                        "example": "A DevOps pipeline might include scripts to automatically deploy schema changes to a test database, run unit tests, and deploy to production if tests pass."
                    },
                    {
                        "concept": "Hybrid Transactional/Analytical Processing (HTAP)",
                        "definition": "HTAP combines transactional and analytical processing in the same database system, enabling real-time analytics on live transactional data.",
                        "example": "An HTAP system might allow a retail company to run real-time analytics on sales transactions as they happen, providing immediate insights without impacting transaction performance."
                    }
                ]
            }
    ],
                "Python": [
                    {
                        "level": 1,
                        "concepts": [
                            {
                                "concept": "Variables and Data Types",
                                "definition": "Variables in Python are used to store data, and Python supports various data types such as integers, floats, strings, and booleans.",
                                "example": "age = 25\nname = 'Alice'\nis_student = True"
                            },
                            {
                                "concept": "Basic Arithmetic Operations",
                                "definition": "Python supports arithmetic operations like addition, subtraction, multiplication, and division.",
                                "example": "sum = 10 + 5\ndifference = 10 - 5\nproduct = 10 * 5\nquotient = 10 / 5"
                            },
                            {
                                "concept": "Strings",
                                "definition": "Strings in Python are sequences of characters, enclosed in single or double quotes.",
                                "example": "greeting = 'Hello, World!'\nprint(greeting)"
                            },
                            {
                                "concept": "Lists",
                                "definition": "Lists are ordered collections of items in Python, which can hold elements of different data types.",
                                "example": "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[0])"
                            },
                            {
                                "concept": "Conditional Statements",
                                "definition": "Conditional statements like `if`, `elif`, and `else` are used to execute code based on certain conditions.",
                                "example": "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')"
                            }
                        ]
                    },
                    {
                        "level": 2,
                        "concepts": [
                            {
                                "concept": "Loops",
                                "definition": "Loops in Python, such as `for` and `while`, are used to repeat a block of code multiple times.",
                                "example": "for i in range(5):\n    print(i)\n\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1"
                            },
                            {
                                "concept": "Functions",
                                "definition": "Functions are reusable blocks of code that perform a specific task and can return a value.",
                                "example": "def greet(name):\n    return f'Hello, {name}'\n\nprint(greet('Alice'))"
                            },
                            {
                                "concept": "Dictionaries",
                                "definition": "Dictionaries are collections of key-value pairs, where each key is unique.",
                                "example": "person = {'name': 'Alice', 'age': 25}\nprint(person['name'])"
                            },
                            {
                                "concept": "Tuples",
                                "definition": "Tuples are ordered, immutable collections of items, which means their values cannot be changed after creation.",
                                "example": "coordinates = (10, 20)\nprint(coordinates[0])"
                            },
                            {
                                "concept": "String Methods",
                                "definition": "Python provides various methods to manipulate strings, such as `upper()`, `lower()`, and `replace()`.",
                                "example": "text = 'hello world'\nprint(text.upper())\nprint(text.replace('world', 'Python'))"
                            }
                        ]
                    },
                    {
                        "level": 3,
                        "concepts": [
                            {
                                "concept": "List Comprehensions",
                                "definition": "List comprehensions provide a concise way to create lists by iterating over an iterable and applying an expression.",
                                "example": "squares = [x**2 for x in range(10)]\nprint(squares)"
                            },
                            {
                                "concept": "Sets",
                                "definition": "Sets are unordered collections of unique elements in Python.",
                                "example": "unique_numbers = {1, 2, 3, 4, 4}\nprint(unique_numbers)"
                            },
                            {
                                "concept": "File I/O",
                                "definition": "Python allows you to read from and write to files using built-in functions like `open()`, `read()`, and `write()`.",
                                "example": "with open('example.txt', 'w') as file:\n    file.write('Hello, World!')\n\nwith open('example.txt', 'r') as file:\n    content = file.read()\n    print(content)"
                            },
                            {
                                "concept": "Exception Handling",
                                "definition": "Exception handling in Python is done using `try`, `except`, `else`, and `finally` blocks to handle errors gracefully.",
                                "example": "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nfinally:\n    print('This will run no matter what')"
                            },
                            {
                                "concept": "Modules and Importing",
                                "definition": "Modules in Python are files containing Python code. You can import these modules into other Python programs using the `import` statement.",
                                "example": "import math\nprint(math.sqrt(16))"
                            }
                        ]
                    },
                    {
                        "level": 4,
                        "concepts": [
                            {
                                "concept": "Classes and Objects",
                                "definition": "Python supports object-oriented programming (OOP) where classes define the blueprint for objects.",
                                "example": "class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return 'Woof!'\n\nmy_dog = Dog('Rex')\nprint(my_dog.bark())"
                            },
                            {
                                "concept": "Inheritance",
                                "definition": "Inheritance allows a class to inherit attributes and methods from another class, promoting code reuse.",
                                "example": "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return 'Sound'\n\nclass Dog(Animal):\n    def speak(self):\n        return 'Woof!'\n\nmy_dog = Dog('Rex')\nprint(my_dog.speak())"
                            },
                            {
                                "concept": "Decorators",
                                "definition": "Decorators are a way to modify or extend the behavior of a function or method in Python.",
                                "example": "def my_decorator(func):\n    def wrapper():\n        print('Something is happening before the function is called.')\n        func()\n        print('Something is happening after the function is called.')\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print('Hello!')\n\nsay_hello()"
                            },
                            {
                                "concept": "Lambda Functions",
                                "definition": "Lambda functions are small anonymous functions defined using the `lambda` keyword, typically used for short operations.",
                                "example": "add = lambda x, y: x + y\nprint(add(2, 3))"
                            },
                            {
                                "concept": "List Methods",
                                "definition": "Python provides several methods to manipulate lists, such as `append()`, `remove()`, and `sort()`.",
                                "example": "fruits = ['apple', 'banana', 'cherry']\nfruits.append('orange')\nfruits.remove('banana')\nfruits.sort()\nprint(fruits)"
                            }
                        ]
                    },
                    {
                        "level": 5,
                        "concepts": [
                            {
                                "concept": "Iterators and Generators",
                                "definition": "Iterators are objects that can be iterated over, while generators are special iterators created using functions with the `yield` statement.",
                                "example": "def my_generator():\n    yield 1\n    yield 2\n    yield 3\n\ngen = my_generator()\nprint(next(gen))\nprint(next(gen))"
                            },
                            {
                                "concept": "List Slicing",
                                "definition": "List slicing allows you to access a subset of a list using a range of indices.",
                                "example": "numbers = [0, 1, 2, 3, 4, 5]\nprint(numbers[2:5])\nprint(numbers[:4])\nprint(numbers[::2])"
                            },
                            {
                                "concept": "Regular Expressions",
                                "definition": "Python's `re` module provides support for regular expressions, allowing pattern matching and text manipulation.",
                                "example": "import re\npattern = r'\\d+'\ntext = 'There are 100 apples'\nresult = re.findall(pattern, text)\nprint(result)"
                            },
                            {
                                "concept": "Comprehensions (List, Set, Dict)",
                                "definition": "Comprehensions provide a concise way to create lists, sets, or dictionaries by iterating over an iterable and applying an expression.",
                                "example": "squares = [x**2 for x in range(10)]\nunique_squares = {x**2 for x in range(10)}\nnum_to_square = {x: x**2 for x in range(10)}"
                            },
                            {
                                "concept": "Context Managers",
                                "definition": "Context managers, defined using the `with` statement, are used to manage resources, ensuring that they are properly acquired and released.",
                                "example": "with open('example.txt', 'w') as file:\n    file.write('Hello, World!')"
                            }
                        ]
                    },
                    {
                        "level": 6,
                        "concepts": [
                            {
                                "concept": "File Handling",
                                "definition": "Python provides built-in functions to read from and write to files, as well as to manipulate file paths and directories.",
                                "example": "with open('example.txt', 'r') as file:\n    content = file.read()\n    print(content)"
                            },
                            {
                                "concept": "Assertions",
                                "definition": "Assertions are used to check if a condition is true. If not, an `AssertionError` is raised.",
                                "example": "x = 10\nassert x > 5, 'x should be greater than 5'"
                            },
                            {
                                "concept": "Working with JSON",
                                "definition": "Python's `json` module allows you to work with JSON data, converting Python objects to JSON strings and vice versa.",
                                "example": "import json\ndata = {'name': 'Alice', 'age': 25}\njson_string = json.dumps(data)\nparsed_data = json.loads(json_string)\nprint(parsed_data['name'])"
                            },
                            {
                                "concept": "Error Handling",
                                "definition": "Python supports robust error handling using `try`, `except`, `else`, and `finally` blocks.",
                                "example": "try:\n    value = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nfinally:\n    print('This will run no matter what')"
                            },
                            {
                                "concept": "Python Libraries",
                                "definition": "Python has a rich ecosystem of libraries, such as NumPy for numerical operations, Pandas for data analysis, and Requests for HTTP requests.",
                                "example": "import numpy as np\nimport pandas as pd\nimport requests\n\n# Using NumPy\na = np.array([1, 2, 3])\nprint(a)\n\n# Using Pandas\ndf = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\nprint(df)\n\n# Using Requests\nresponse = requests.get('https://api.example.com')\nprint(response.text)"
                            }
                        ]
                    },
                    {
                        "level": 7,
                        "concepts": [
                            {
                                "concept": "Working with Dates and Times",
                                "definition": "Python's `datetime` module provides classes for manipulating dates and times, including arithmetic operations and formatting.",
                                "example": "from datetime import datetime\nnow = datetime.now()\nprint(now.strftime('%Y-%m-%d %H:%M:%S'))"
                            },
                            {
                                "concept": "Decorators",
                                "definition": "Decorators are a way to modify or enhance the behavior of functions or methods in Python.",
                                "example": "def decorator_func(func):\n    def wrapper():\n        print('Before function')\n        func()\n        print('After function')\n    return wrapper\n\n@decorator_func\ndef say_hello():\n    print('Hello!')\n\nsay_hello()"
                            },
                            {
                                "concept": "Functional Programming",
                                "definition": "Python supports functional programming features, including higher-order functions, map, filter, and lambda functions.",
                                "example": "numbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\neven = list(filter(lambda x: x % 2 == 0, numbers))\nprint(squared)\nprint(even)"
                            },
                            {
                                "concept": "Generators",
                                "definition": "Generators in Python are functions that yield values one at a time, allowing you to iterate over them without storing the entire sequence in memory.",
                                "example": "def count_up_to(max):\n    count = 1\n    while count <= max:\n        yield count\n        count += 1\n\nfor num in count_up_to(5):\n    print(num)"
                            },
                            {
                                "concept": "Context Managers",
                                "definition": "Context managers, implemented using the `with` statement, manage resources by ensuring that setup and cleanup operations are performed automatically.",
                                "example": "class MyContext:\n    def __enter__(self):\n        print('Entering context')\n        return self\n    def __exit__(self, exc_type, exc_value, traceback):\n        print('Exiting context')\n\nwith MyContext() as context:\n    print('Inside context')"
                            }
                        ]
                    },
                    {
                        "level": 8,
                        "concepts": [
                            {
                                "concept": "Multithreading",
                                "definition": "Multithreading allows Python programs to run multiple threads (smaller units of a process) concurrently, which can help improve performance for IO-bound tasks.",
                                "example": "import threading\n\ndef print_numbers():\n    for i in range(5):\n        print(i)\n\nthread = threading.Thread(target=print_numbers)\nthread.start()\nthread.join()"
                            },
                            {
                                "concept": "Multiprocessing",
                                "definition": "The `multiprocessing` module allows Python programs to spawn processes that can run independently, taking advantage of multiple CPU cores.",
                                "example": "import multiprocessing\n\ndef worker(num):\n    print(f'Worker: {num}')\n\nif __name__ == '__main__':\n    for i in range(5):\n        p = multiprocessing.Process(target=worker, args=(i,))\n        p.start()\n        p.join()"
                            },
                            {
                                "concept": "Asynchronous Programming with `asyncio`",
                                "definition": "Python's `asyncio` library allows you to write asynchronous code using the `async` and `await` keywords, enabling efficient concurrency.",
                                "example": "import asyncio\n\nasync def say_hello():\n    print('Hello')\n    await asyncio.sleep(1)\n    print('World')\n\nasync def main():\n    await asyncio.gather(say_hello(), say_hello())\n\nasyncio.run(main())"
                            },
                            {
                                "concept": "Web Scraping with BeautifulSoup",
                                "definition": "Web scraping involves extracting data from websites, and Python's BeautifulSoup library provides tools for parsing HTML and XML documents.",
                                "example": "from bs4 import BeautifulSoup\nimport requests\n\nurl = 'https://example.com'\nresponse = requests.get(url)\nsoup = BeautifulSoup(response.text, 'html.parser')\nprint(soup.title.text)"
                            },
                            {
                                "concept": "Command-Line Arguments",
                                "definition": "Python's `argparse` module allows you to write scripts that accept command-line arguments, making your programs more flexible.",
                                "example": "import argparse\n\nparser = argparse.ArgumentParser(description='A simple CLI tool')\nparser.add_argument('name', help='Your name')\nargs = parser.parse_args()\nprint(f'Hello, {args.name}')"
                            }
                        ]
                    },
                    {
                        "level": 9,
                        "concepts": [
                            {
                                "concept": "Metaclasses",
                                "definition": "Metaclasses are the 'classes of classes' in Python, allowing you to control the creation and behavior of classes.",
                                "example": "class Meta(type):\n    def __new__(cls, name, bases, dct):\n        print(f'Creating class {name}')\n        return super().__new__(cls, name, bases, dct)\n\nclass MyClass(metaclass=Meta):\n    pass\n\ninstance = MyClass()"
                            },
                            {
                                "concept": "Descriptors",
                                "definition": "Descriptors are objects that manage the access to an attribute's value, allowing you to customize getter, setter, and deleter behavior.",
                                "example": "class Descriptor:\n    def __init__(self, name=None):\n        self.name = name\n    def __get__(self, instance, owner):\n        return instance.__dict__[self.name]\n    def __set__(self, instance, value):\n        instance.__dict__[self.name] = value\n\nclass MyClass:\n    attr = Descriptor('attr')\n\nobj = MyClass()\nobj.attr = 42\nprint(obj.attr)"
                            },
                            {
                                "concept": "Decorators with Arguments",
                                "definition": "Decorators with arguments allow you to pass additional parameters to a decorator, enabling more flexible functionality.",
                                "example": "def repeat(n):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef say_hello():\n    print('Hello')\n\nsay_hello()"
                            },
                            {
                                "concept": "Type Hinting",
                                "definition": "Type hinting in Python allows you to specify the expected data types of function arguments and return values, improving code readability and aiding in static analysis.",
                                "example": "def add_numbers(a: int, b: int) -> int:\n    return a + b\n\nresult: int = add_numbers(2, 3)\nprint(result)"
                            },
                            {
                                "concept": "Advanced Regular Expressions",
                                "definition": "Advanced regular expressions in Python allow for complex pattern matching using lookaheads, lookbehinds, and other advanced regex features.",
                                "example": "import re\npattern = r'(?<=\\b\\d{2})(?=\\d{2})'\ntext = '1234 5678'\nresult = re.findall(pattern, text)\nprint(result)"
                            }
                        ]
                    },
                    {
                        "level": 10,
                        "concepts": [
                            {
                                "concept": "Advanced Python Data Structures",
                                "definition": "Python provides advanced data structures like `deque`, `Counter`, `defaultdict`, and `OrderedDict` from the `collections` module.",
                                "example": "from collections import deque, Counter, defaultdict, OrderedDict\n\n# deque\nd = deque([1, 2, 3])\nd.appendleft(0)\nprint(d)\n\n# Counter\ncounter = Counter('abracadabra')\nprint(counter)\n\n# defaultdict\ndd = defaultdict(int)\ndd['key'] += 1\nprint(dd)\n\n# OrderedDict\nod = OrderedDict()\nod['a'] = 1\nod['b'] = 2\nprint(od)"
                            },
                            {
                                "concept": "Data Classes",
                                "definition": "Data classes provide a way to define classes that primarily store data, automatically generating special methods like `__init__` and `__repr__`.",
                                "example": "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\np = Point(1, 2)\nprint(p)"
                            },
                            {
                                "concept": "Advanced Iterators",
                                "definition": "Advanced iterators in Python include `itertools` functions like `chain`, `cycle`, and `groupby`, which provide powerful iteration capabilities.",
                                "example": "import itertools\n\n# chain\ncombined = itertools.chain([1, 2], [3, 4])\nprint(list(combined))\n\n# cycle\ncycled = itertools.cycle([1, 2, 3])\nfor i in range(6):\n    print(next(cycled))\n\n# groupby\ndata = [('a', 1), ('a', 2), ('b', 3)]\ngrouped = itertools.groupby(data, key=lambda x: x[0])\nfor key, group in grouped:\n    print(key, list(group))"
                            },
                            {
                                "concept": "Contextlib Utilities",
                                "definition": "The `contextlib` module provides utilities like `contextmanager`, which allows you to create context managers using generator functions.",
                                "example": "from contextlib import contextmanager\n\n@contextmanager\ndef my_context():\n    print('Enter')\n    yield\n    print('Exit')\n\nwith my_context():\n    print('Inside context')"
                            },
                            {
                                "concept": "Async Generators and Comprehensions",
                                "definition": "Async generators allow you to yield values asynchronously, while async comprehensions enable you to use asynchronous expressions in comprehensions.",
                                "example": "async def async_gen():\n    for i in range(3):\n        yield i\n\nasync def main():\n    result = [i async for i in async_gen()]\n    print(result)\n\nimport asyncio\nasyncio.run(main())"
                            }
                        ]
                    },
                    {
                        "level": 11,
                        "concepts": [
                            {
                                "concept": "Metaprogramming",
                                "definition": "Metaprogramming in Python involves writing code that manipulates code, often using functions like `getattr`, `setattr`, `hasattr`, and `dir`.",
                                "example": "class MyClass:\n    def __init__(self, value):\n        self.value = value\n\nobj = MyClass(10)\nsetattr(obj, 'new_attr', 20)\nprint(getattr(obj, 'new_attr'))"
                            },
                            {
                                "concept": "Testing with unittest",
                                "definition": "Python's `unittest` module is used for creating and running test cases, ensuring your code behaves as expected.",
                                "example": "import unittest\n\nclass TestMath(unittest.TestCase):\n    def test_addition(self):\n        self.assertEqual(2 + 2, 4)\n\nif __name__ == '__main__':\n    unittest.main()"
                            },
                            {
                                "concept": "Property Decorators",
                                "definition": "Property decorators in Python allow you to define methods in a class that can be accessed like attributes, using `@property`, `@setter`, and `@deleter`.",
                                "example": "class MyClass:\n    def __init__(self, value):\n        self._value = value\n    @property\n    def value(self):\n        return self._value\n    @value.setter\n    def value(self, new_value):\n        self._value = new_value\n\nobj = MyClass(10)\nprint(obj.value)\nobj.value = 20\nprint(obj.value)"
                            },
                            {
                                "concept": "Abstract Base Classes (ABC)",
                                "definition": "Abstract Base Classes (ABC) in Python are classes that cannot be instantiated and are used to define a common interface for other classes.",
                                "example": "from abc import ABC, abstractmethod\n\nclass Animal(ABC):\n    @abstractmethod\n    def make_sound(self):\n        pass\n\nclass Dog(Animal):\n    def make_sound(self):\n        return 'Woof'\n\nmy_dog = Dog()\nprint(my_dog.make_sound())"
                            },
                            {
                                "concept": "Memoization and Caching",
                                "definition": "Memoization is an optimization technique that stores the results of expensive function calls and reuses them when the same inputs occur again.",
                                "example": "from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(50))"
                            }
                        ]
                    },
                    {
                        "level": 12,
                        "concepts": [
                            {
                                "concept": "Asyncio and Event Loops",
                                "definition": "The `asyncio` module provides tools to write asynchronous code using coroutines, event loops, and tasks, enabling concurrent execution.",
                                "example": "import asyncio\n\nasync def main():\n    print('Hello')\n    await asyncio.sleep(1)\n    print('World')\n\nasyncio.run(main())"
                            },
                            {
                                "concept": "Concurrency with Threads",
                                "definition": "Concurrency in Python can be achieved using threads, which allow multiple operations to run simultaneously in separate threads.",
                                "example": "import threading\n\ndef print_numbers():\n    for i in range(5):\n        print(i)\n\nthread = threading.Thread(target=print_numbers)\nthread.start()\nthread.join()"
                            },
                            {
                                "concept": "Parallelism with Multiprocessing",
                                "definition": "Parallelism can be achieved using the `multiprocessing` module, which allows you to run multiple processes concurrently on different CPU cores.",
                                "example": "import multiprocessing\n\ndef worker(num):\n    print(f'Worker: {num}')\n\nif __name__ == '__main__':\n    for i in range(5):\n        p = multiprocessing.Process(target=worker, args=(i,))\n        p.start()\n        p.join()"
                            },
                            {
                                "concept": "Sockets and Networking",
                                "definition": "Python's `socket` module provides low-level networking interfaces to create network connections, such as clients and servers.",
                                "example": "import socket\n\nserver_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver_socket.bind(('localhost', 8080))\nserver_socket.listen(1)\n\nprint('Server listening on port 8080')\nwhile True:\n    client_socket, addr = server_socket.accept()\n    print(f'Connection from {addr}')\n    client_socket.send(b'Hello, World!')\n    client_socket.close()"
                            },
                            {
                                "concept": "Testing with pytest",
                                "definition": "The `pytest` framework is a powerful tool for writing simple and scalable test cases, with a focus on easy-to-use fixtures and test discovery.",
                                "example": "def test_addition():\n    assert 2 + 2 == 4\n\ndef test_subtraction():\n    assert 4 - 2 == 2\n\nif __name__ == '__main__':\n    import pytest\n    pytest.main()"
                            }
                        ]
                    },
                    {
                        "level": 13,
                        "concepts": [
                            {
                                "concept": "Metaprogramming with Metaclasses",
                                "definition": "Metaprogramming using metaclasses allows you to control the creation and behavior of classes in Python.",
                                "example": "class Meta(type):\n    def __new__(cls, name, bases, dct):\n        print(f'Creating class {name}')\n        return super().__new__(cls, name, bases, dct)\n\nclass MyClass(metaclass=Meta):\n    pass\n\ninstance = MyClass()"
                            },
                            {
                                "concept": "Decorators with Arguments",
                                "definition": "Decorators with arguments allow you to pass additional parameters to a decorator, enabling more flexible functionality.",
                                "example": "def repeat(n):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef say_hello():\n    print('Hello')\n\nsay_hello()"
                            },
                            {
                                "concept": "Memory Management and Garbage Collection",
                                "definition": "Python's memory management system handles the allocation and deallocation of memory, with automatic garbage collection to free up unused memory.",
                                "example": "import gc\nprint('Garbage collection thresholds:', gc.get_threshold())\ngc.collect()"
                            },
                            {
                                "concept": "Type Hinting and Annotations",
                                "definition": "Type hinting in Python allows you to specify the expected data types of function arguments and return values, improving code readability and aiding in static analysis.",
                                "example": "def add_numbers(a: int, b: int) -> int:\n    return a + b\n\nresult: int = add_numbers(2, 3)\nprint(result)"
                            },
                            {
                                "concept": "Cython and Performance Optimization",
                                "definition": "Cython is a superset of Python that compiles to C, enabling performance optimizations for Python code, especially in computationally intensive tasks.",
                                "example": "# Example Cython code\ncdef int add(int a, int b):\n    return a + b"
                            }
                        ]
                    },
                    {
                        "level": 14,
                        "concepts": [
                            {
                                "concept": "Design Patterns in Python",
                                "definition": "Design patterns like Singleton, Factory, and Observer provide reusable solutions to common software design problems in Python.",
                                "example": "class Singleton:\n    _instance = None\n\n    def __new__(cls, *args, **kwargs):\n        if not cls._instance:\n            cls._instance = super().__new__(cls, *args, **kwargs)\n        return cls._instance"
                            },
                            {
                                "concept": "Advanced Testing with Mocks",
                                "definition": "Mocking in Python allows you to replace parts of your system under test with mock objects, helping you isolate tests and control their behavior.",
                                "example": "from unittest.mock import MagicMock\n\ndef fetch_data():\n    return 'data'\n\nfetch_data = MagicMock(return_value='mocked data')\nprint(fetch_data())"
                            },
                            {
                                "concept": "Refactoring for Clean Code",
                                "definition": "Refactoring involves improving the structure and readability of your code without changing its functionality, often using techniques like DRY, SOLID, and Clean Code principles.",
                                "example": "def calculate_total(price, tax):\n    return price + price * tax\n\n# Refactored to make the function more general\nclass PriceCalculator:\n    def __init__(self, tax_rate):\n        self.tax_rate = tax_rate\n\n    def calculate(self, price):\n        return price + price * self.tax_rate"
                            },
                            {
                                "concept": "Advanced Asynchronous Programming",
                                "definition": "Advanced asynchronous programming techniques involve using event loops, tasks, and coroutines to handle complex asynchronous workflows.",
                                "example": "import asyncio\n\nasync def task1():\n    await asyncio.sleep(1)\n    return 'task1 completed'\n\nasync def task2():\n    await asyncio.sleep(2)\n    return 'task2 completed'\n\nasync def main():\n    results = await asyncio.gather(task1(), task2())\n    print(results)\n\nasyncio.run(main())"
                            },
                            {
                                "concept": "Python Data Pipelines",
                                "definition": "Data pipelines in Python involve processing and transforming data in stages, often using tools like Apache Airflow, Luigi, or custom Python scripts.",
                                "example": "import pandas as pd\n\n# Example data pipeline\n# Step 1: Load data\ndata = pd.read_csv('input.csv')\n\n# Step 2: Process data\ndata['processed'] = data['column'].apply(lambda x: x * 2)\n\n# Step 3: Save data\ndata.to_csv('output.csv', index=False)"
                            }
                        ]
                    },
                    {
                        "level": 15,
                        "concepts": [
                            {
                                "concept": "Metaprogramming with Decorators and Metaclasses",
                                "definition": "Advanced metaprogramming combines the power of decorators and metaclasses to dynamically alter class behavior and function execution.",
                                "example": "class Meta(type):\n    def __new__(cls, name, bases, dct):\n        dct['class_created'] = True\n        return super().__new__(cls, name, bases, dct)\n\nclass MyClass(metaclass=Meta):\n    pass\n\nprint(MyClass.class_created)"
                            },
                            {
                                "concept": "Concurrency with AsyncIO and Threads",
                                "definition": "Combining `asyncio` with threads allows you to perform asynchronous I/O operations alongside CPU-bound tasks for efficient concurrency.",
                                "example": "import asyncio\nimport threading\n\nasync def async_task():\n    await asyncio.sleep(1)\n    print('Async task completed')\n\nthread = threading.Thread(target=lambda: asyncio.run(async_task()))\nthread.start()\nthread.join()"
                            },
                            {
                                "concept": "High-Performance Python with Numba",
                                "definition": "Numba is a Just-in-Time (JIT) compiler that translates Python functions to optimized machine code at runtime, greatly improving performance.",
                                "example": "from numba import jit\n\n@jit\ndef add(a, b):\n    return a + b\n\nprint(add(2, 3))"
                            },
                            {
                                "concept": "Advanced Networking with AsyncIO",
                                "definition": "Advanced networking using `asyncio` allows you to build scalable, non-blocking network applications, such as chat servers or web scrapers.",
                                "example": "import asyncio\n\nasync def handle_client(reader, writer):\n    data = await reader.read(100)\n    message = data.decode()\n    writer.write(data)\n    await writer.drain()\n    writer.close()\n\nasync def main():\n    server = await asyncio.start_server(handle_client, '127.0.0.1', 8888)\n    async with server:\n        await server.serve_forever()\n\nasyncio.run(main())"
                            },
                            {
                                "concept": "Python Metaprogramming for DSLs",
                                "definition": "Using Python metaprogramming to create Domain-Specific Languages (DSLs) allows you to design custom languages within Python for specialized tasks.",
                                "example": "class SimpleDSL:\n    def __init__(self):\n        self.result = []\n\n    def __call__(self, *args):\n        self.result.extend(args)\n        return self\n\n    def __str__(self):\n        return ' '.join(self.result)\n\n# Using the DSL\ndsl = SimpleDSL()\nprint(dsl('Hello')('World')('from DSL'))"
                            }
                        ]
                    }
    ],
                "C++": [
                        {
                            "level": 1,
                            "concepts": [
                                {
                                    "concept": "Basic Syntax and Structure",
                                    "definition": "C++ programs start with the `#include` directive and a `main` function, which is the entry point of the program.",
                                    "example": "#include <iostream>\n\nint main() {\n    std::cout << 'Hello, World!';\n    return 0;\n}"
                                },
                                {
                                    "concept": "Variables and Data Types",
                                    "definition": "C++ supports various data types such as `int`, `float`, `double`, `char`, and `bool`.",
                                    "example": "int age = 25;\nfloat height = 5.9;\nbool is_student = true;"
                                },
                                {
                                    "concept": "Operators",
                                    "definition": "Operators in C++ are used to perform operations on variables and values, including arithmetic, logical, and comparison operators.",
                                    "example": "int sum = 10 + 5;\nbool isEqual = (10 == 5);"
                                },
                                {
                                    "concept": "Input and Output",
                                    "definition": "C++ uses `cin` for input and `cout` for output to and from the console, provided by the `iostream` library.",
                                    "example": "#include <iostream>\n\nint main() {\n    int age;\n    std::cout << 'Enter your age: ';\n    std::cin >> age;\n    std::cout << 'You are ' << age << ' years old.';\n    return 0;\n}"
                                },
                                {
                                    "concept": "Conditional Statements",
                                    "definition": "Conditional statements such as `if`, `else if`, and `else` are used to execute code based on certain conditions.",
                                    "example": "int age = 18;\nif (age >= 18) {\n    std::cout << 'Adult';\n} else {\n    std::cout << 'Minor';\n}"
                                }
                            ]
                        },
                        {
                            "level": 2,
                            "concepts": [
                                {
                                    "concept": "Loops",
                                    "definition": "Loops in C++ such as `for`, `while`, and `do-while` are used to execute a block of code repeatedly.",
                                    "example": "for (int i = 0; i < 5; i++) {\n    std::cout << i << ' ';\n}\n\nint count = 0;\nwhile (count < 5) {\n    std::cout << count << ' ';\n    count++;\n}"
                                },
                                {
                                    "concept": "Functions",
                                    "definition": "Functions are blocks of code that perform a specific task and can return a value. They can take parameters as input.",
                                    "example": "int add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    std::cout << add(3, 4);\n    return 0;\n}"
                                },
                                {
                                    "concept": "Arrays",
                                    "definition": "Arrays in C++ are used to store multiple values of the same type in a single variable.",
                                    "example": "int numbers[5] = {1, 2, 3, 4, 5};\nstd::cout << numbers[0];"
                                },
                                {
                                    "concept": "Pointers",
                                    "definition": "Pointers are variables that store memory addresses. They are a powerful feature of C++ for direct memory manipulation.",
                                    "example": "int x = 10;\nint *ptr = &x;\nstd::cout << *ptr;  // Output: 10"
                                },
                                {
                                    "concept": "References",
                                    "definition": "References are aliases for other variables. They provide an alternative name for an existing variable.",
                                    "example": "int x = 10;\nint &ref = x;\nref = 20;\nstd::cout << x;  // Output: 20"
                                }
                            ]
                        },
                        {
                            "level": 3,
                            "concepts": [
                                {
                                    "concept": "Strings",
                                    "definition": "C++ provides the `std::string` class for handling strings, allowing easy manipulation of sequences of characters.",
                                    "example": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string greeting = 'Hello';\n    greeting += ', World!';\n    std::cout << greeting;\n    return 0;\n}"
                                },
                                {
                                    "concept": "Structures",
                                    "definition": "Structures in C++ are user-defined data types that group variables of different types under a single name.",
                                    "example": "struct Person {\n    std::string name;\n    int age;\n};\n\nint main() {\n    Person p = { 'John', 25 };\n    std::cout << p.name << ' is ' << p.age << ' years old.';\n    return 0;\n}"
                                },
                                {
                                    "concept": "Enumeration (enum)",
                                    "definition": "Enums are a user-defined type that consists of a set of named integral constants, providing a way to assign names to numeric values.",
                                    "example": "enum Color { RED, GREEN, BLUE };\nColor favoriteColor = GREEN;\nstd::cout << favoriteColor;  // Output: 1"
                                },
                                {
                                    "concept": "Function Overloading",
                                    "definition": "Function overloading allows you to define multiple functions with the same name but different parameter lists.",
                                    "example": "int add(int a, int b) {\n    return a + b;\n}\ndouble add(double a, double b) {\n    return a + b;\n}\n\nint main() {\n    std::cout << add(2, 3);       // Calls int version\n    std::cout << add(2.5, 3.5);   // Calls double version\n    return 0;\n}"
                                },
                                {
                                    "concept": "Static Variables",
                                    "definition": "Static variables retain their value across function calls and are initialized only once during the program's execution.",
                                    "example": "void countCalls() {\n    static int count = 0;\n    count++;\n    std::cout << 'Function called ' << count << ' times\\n';\n}\n\nint main() {\n    countCalls();\n    countCalls();\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level": 4,
                            "concepts": [
                                {
                                    "concept": "Classes and Objects",
                                    "definition": "C++ supports object-oriented programming (OOP), where classes define the blueprint for objects.",
                                    "example": "class Car {\npublic:\n    std::string brand;\n    int year;\n    void honk() {\n        std::cout << 'Honk!';\n    }\n};\n\nint main() {\n    Car myCar;\n    myCar.brand = 'Toyota';\n    myCar.year = 2010;\n    myCar.honk();\n    return 0;\n}"
                                },
                                {
                                    "concept": "Constructors and Destructors",
                                    "definition": "Constructors initialize objects when they are created, and destructors clean up resources when objects are destroyed.",
                                    "example": "class Car {\npublic:\n    Car() {\n        std::cout << 'Car is created\\n';\n    }\n    ~Car() {\n        std::cout << 'Car is destroyed\\n';\n    }\n};\n\nint main() {\n    Car myCar;\n    return 0;\n}"
                                },
                                {
                                    "concept": "Inheritance",
                                    "definition": "Inheritance allows a class to inherit attributes and methods from another class, promoting code reuse and hierarchy.",
                                    "example": "class Vehicle {\npublic:\n    int speed;\n    void accelerate() {\n        speed += 10;\n    }\n};\n\nclass Car : public Vehicle {\npublic:\n    std::string brand;\n};\n\nint main() {\n    Car myCar;\n    myCar.brand = 'Toyota';\n    myCar.accelerate();\n    std::cout << 'Speed: ' << myCar.speed << ' km/h';\n    return 0;\n}"
                                },
                                {
                                    "concept": "Polymorphism",
                                    "definition": "Polymorphism allows you to use a base class pointer to call derived class methods, providing flexibility in code execution.",
                                    "example": "class Animal {\npublic:\n    virtual void sound() {\n        std::cout << 'Some sound\\n';\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() override {\n        std::cout << 'Bark\\n';\n    }\n};\n\nint main() {\n    Animal* animal = new Dog();\n    animal->sound();  // Output: Bark\n    delete animal;\n    return 0;\n}"
                                },
                                {
                                    "concept": "Operator Overloading",
                                    "definition": "Operator overloading allows you to define custom behavior for operators in your classes, such as `+`, `-`, or `<<`.",
                                    "example": "class Complex {\npublic:\n    int real, imag;\n    Complex(int r, int i) : real(r), imag(i) {}\n    Complex operator + (const Complex& obj) {\n        return Complex(real + obj.real, imag + obj.imag);\n    }\n};\n\nint main() {\n    Complex c1(10, 5), c2(2, 4);\n    Complex c3 = c1 + c2;\n    std::cout << c3.real << ' + ' << c3.imag << 'i';\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level": 5,
                            "concepts": [
                                {
                                    "concept": "Templates",
                                    "definition": "Templates in C++ allow you to write generic functions and classes that can work with any data type.",
                                    "example": "template <typename T>\nT add(T a, T b) {\n    return a + b;\n}\n\nint main() {\n    std::cout << add(3, 4) << '\\n';         // Works with int\n    std::cout << add(2.5, 3.5) << '\\n';     // Works with double\n    return 0;\n}"
                                },
                                {
                                    "concept": "STL (Standard Template Library)",
                                    "definition": "The Standard Template Library (STL) is a powerful library in C++ that provides common data structures and algorithms, such as vectors, lists, and maps.",
                                    "example": "#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> numbers = {1, 2, 3, 4, 5};\n    numbers.push_back(6);\n    for (int num : numbers) {\n        std::cout << num << ' ';\n    }\n    return 0;\n}"
                                },
                                {
                                    "concept": "Exception Handling",
                                    "definition": "C++ provides exception handling using `try`, `catch`, and `throw` to manage errors and exceptional situations.",
                                    "example": "int divide(int a, int b) {\n    if (b == 0) {\n        throw 'Division by zero error';\n    }\n    return a / b;\n}\n\nint main() {\n    try {\n        std::cout << divide(10, 0);\n    } catch (const char* msg) {\n        std::cerr << msg;\n    }\n    return 0;\n}"
                                },
                                {
                                    "concept": "Namespaces",
                                    "definition": "Namespaces in C++ are used to organize code into logical groups and prevent name collisions.",
                                    "example": "namespace first {\n    int x = 5;\n}\n\nnamespace second {\n    int x = 10;\n}\n\nint main() {\n    std::cout << first::x << ' ' << second::x;\n    return 0;\n}"
                                },
                                {
                                    "concept": "File I/O",
                                    "definition": "C++ provides file handling capabilities using `fstream`, `ifstream`, and `ofstream` classes for reading from and writing to files.",
                                    "example": "#include <fstream>\n#include <iostream>\n\nint main() {\n    std::ofstream outFile('example.txt');\n    outFile << 'Hello, File!';\n    outFile.close();\n\n    std::ifstream inFile('example.txt');\n    std::string content;\n    inFile >> content;\n    std::cout << content;\n    inFile.close();\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level": 6,
                            "concepts": [
                                {
                                    "concept": "Dynamic Memory Allocation",
                                    "definition": "Dynamic memory allocation in C++ is done using `new` and `delete` to allocate and deallocate memory during runtime.",
                                    "example": "int* ptr = new int(5);\nstd::cout << *ptr;\ndelete ptr;"
                                },
                                {
                                    "concept": "Smart Pointers",
                                    "definition": "Smart pointers are a safer alternative to raw pointers in C++, automatically managing the memory they point to.",
                                    "example": "#include <memory>\n\nint main() {\n    std::unique_ptr<int> p1(new int(10));\n    std::cout << *p1;\n    return 0;\n}"
                                },
                                {
                                    "concept": "Friend Functions and Classes",
                                    "definition": "Friend functions and classes can access the private and protected members of a class, allowing more flexibility in certain scenarios.",
                                    "example": "class Box {\nprivate:\n    int width;\npublic:\n    Box() : width(10) {}\n    friend void printWidth(Box& b);\n};\n\nvoid printWidth(Box& b) {\n    std::cout << 'Width: ' << b.width;\n}\n\nint main() {\n    Box b;\n    printWidth(b);\n    return 0;\n}"
                                },
                                {
                                    "concept": "Virtual Functions and Abstract Classes",
                                    "definition": "Virtual functions in C++ allow derived classes to override methods in a base class, and abstract classes cannot be instantiated.",
                                    "example": "class Shape {\npublic:\n    virtual void draw() = 0;  // Pure virtual function\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        std::cout << 'Drawing Circle';\n    }\n};\n\nint main() {\n    Circle c;\n    c.draw();\n    return 0;\n}"
                                },
                                {
                                    "concept": "Operator Overloading (Advanced)",
                                    "definition": "Advanced operator overloading allows you to overload operators like `[]`, `()`, and `->` to provide custom behavior in classes.",
                                    "example": "class Array {\nprivate:\n    int arr[10];\npublic:\n    int& operator[](int index) {\n        return arr[index];\n    }\n};\n\nint main() {\n    Array a;\n    a[0] = 10;\n    std::cout << a[0];\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level": 7,
                            "concepts": [
                                {
                                    "concept": "Function Templates",
                                    "definition": "Function templates allow you to write a function that works with any data type, making your code more flexible and reusable.",
                                    "example": "template <typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    std::cout << max(10, 20);\n    std::cout << max(3.5, 2.5);\n    return 0;\n}"
                                },
                                {
                                    "concept": "Class Templates",
                                    "definition": "Class templates allow you to define a class that can handle any data type, providing greater flexibility in data handling.",
                                    "example": "template <typename T>\nclass Box {\nprivate:\n    T item;\npublic:\n    void setItem(T item) { this->item = item; }\n    T getItem() { return item; }\n};\n\nint main() {\n    Box<int> intBox;\n    intBox.setItem(5);\n    std::cout << intBox.getItem();\n    return 0;\n}"
                                },
                                {
                                    "concept": "STL Algorithms",
                                    "definition": "STL algorithms provide a range of functions to perform operations on data structures like sorting, searching, and modifying data.",
                                    "example": "#include <algorithm>\n#include <vector>\n\nint main() {\n    std::vector<int> vec = {5, 3, 8, 6, 2};\n    std::sort(vec.begin(), vec.end());\n    for (int num : vec) {\n        std::cout << num << ' ';\n    }\n    return 0;\n}"
                                },
                                {
                                    "concept": "Iterators",
                                    "definition": "Iterators are used in C++ to traverse elements in containers like arrays, vectors, and lists, providing a standard way to access elements.",
                                    "example": "#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> vec = {1, 2, 3, 4, 5};\n    std::vector<int>::iterator it;\n    for (it = vec.begin(); it != vec.end(); ++it) {\n        std::cout << *it << ' ';\n    }\n    return 0;\n}"
                                },
                                {
                                    "concept": "Type Casting",
                                    "definition": "Type casting in C++ allows you to convert a variable from one type to another, using `static_cast`, `dynamic_cast`, `const_cast`, and `reinterpret_cast`.",
                                    "example": "int main() {\n    int num = 10;\n    double d = static_cast<double>(num);\n    std::cout << d;\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level": 8,
                            "concepts": [
                                {
                                    "concept": "Multiple Inheritance",
                                    "definition": "Multiple inheritance allows a class to inherit from more than one base class, combining attributes and behaviors from multiple sources.",
                                    "example": "class Base1 {\npublic:\n    void greet() {\n        std::cout << 'Hello from Base1\\n';\n    }\n};\n\nclass Base2 {\npublic:\n    void greet() {\n        std::cout << 'Hello from Base2\\n';\n    }\n};\n\nclass Derived : public Base1, public Base2 {};\n\nint main() {\n    Derived d;\n    d.Base1::greet();\n    d.Base2::greet();\n    return 0;\n}"
                                },
                                {
                                    "concept": "Virtual Inheritance",
                                    "definition": "Virtual inheritance solves the diamond problem in multiple inheritance by ensuring only one copy of a base class is inherited.",
                                    "example": "class Base {\npublic:\n    void show() {\n        std::cout << 'Base class show()\\n';\n    }\n};\n\nclass Derived1 : virtual public Base {};\nclass Derived2 : virtual public Base {};\n\nclass Derived3 : public Derived1, public Derived2 {};\n\nint main() {\n    Derived3 obj;\n    obj.show();\n    return 0;\n}"
                                },
                                {
                                    "concept": "Function Pointers",
                                    "definition": "Function pointers store the address of a function and can be used to call functions dynamically.",
                                    "example": "void greet() {\n    std::cout << 'Hello, World!';\n}\n\nint main() {\n    void (*funcPtr)() = &greet;\n    funcPtr();\n    return 0;\n}"
                                },
                                {
                                    "concept": "Lambda Expressions",
                                    "definition": "Lambda expressions provide a concise way to define anonymous functions in C++, often used for short, simple tasks.",
                                    "example": "auto add = [](int a, int b) { return a + b; };\nstd::cout << add(3, 4);"
                                },
                                {
                                    "concept": "Move Semantics",
                                    "definition": "Move semantics optimize resource management in C++ by transferring ownership of resources instead of copying them, especially useful with large data structures.",
                                    "example": "#include <iostream>\n#include <vector>\n\nstd::vector<int> createVector() {\n    std::vector<int> vec = {1, 2, 3, 4, 5};\n    return vec;\n}\n\nint main() {\n    std::vector<int> v = createVector();\n    for (auto& i : v) {\n        std::cout << i << ' ';\n    }\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level": 9,
                            "concepts": [
                                {
                                    "concept": "Concurrency and Multithreading",
                                    "definition": "C++ supports concurrency and multithreading, allowing you to run multiple threads simultaneously, improving performance for parallel tasks.",
                                    "example": "#include <thread>\n\nvoid printNumbers() {\n    for (int i = 1; i <= 5; ++i) {\n        std::cout << i << ' ';\n    }\n}\n\nint main() {\n    std::thread t1(printNumbers);\n    std::thread t2(printNumbers);\n    t1.join();\n    t2.join();\n    return 0;\n}"
                                },
                                {
                                    "concept": "Mutex and Locks",
                                    "definition": "Mutexes and locks are synchronization primitives used in C++ to prevent data races when multiple threads access shared resources.",
                                    "example": "#include <iostream>\n#include <thread>\n#include <mutex>\n\nstd::mutex mtx;\n\nvoid printNumbers(int n) {\n    mtx.lock();\n    for (int i = 0; i < 5; ++i) {\n        std::cout << n + i << ' ';\n    }\n    mtx.unlock();\n}\n\nint main() {\n    std::thread t1(printNumbers, 0);\n    std::thread t2(printNumbers, 5);\n    t1.join();\n    t2.join();\n    return 0;\n}"
                                },
                                {
                                    "concept": "Condition Variables",
                                    "definition": "Condition variables are synchronization primitives that allow threads to wait for certain conditions to be met before continuing execution.",
                                    "example": "#include <iostream>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\n\nstd::mutex mtx;\nstd::condition_variable cv;\nbool ready = false;\n\nvoid printMessage() {\n    std::unique_lock<std::mutex> lock(mtx);\n    cv.wait(lock, []{ return ready; });\n    std::cout << 'Message is ready!';\n}\n\nint main() {\n    std::thread t(printMessage);\n    std::this_thread::sleep_for(std::chrono::seconds(1));\n    ready = true;\n    cv.notify_one();\n    t.join();\n    return 0;\n}"
                                },
                                {
                                    "concept": "Thread Pooling",
                                    "definition": "Thread pooling is a technique to manage multiple threads efficiently by reusing a pool of threads for executing tasks, reducing the overhead of thread creation.",
                                    "example": "#include <iostream>\n#include <vector>\n#include <thread>\n#include <queue>\n#include <functional>\n#include <condition_variable>\n\nclass ThreadPool {\npublic:\n    ThreadPool(size_t);\n    ~ThreadPool();\n    void enqueue(std::function<void()>);\nprivate:\n    std::vector<std::thread> workers;\n    std::queue<std::function<void()>> tasks;\n    std::mutex queue_mutex;\n    std::condition_variable condition;\n    bool stop;\n};\n\nThreadPool::ThreadPool(size_t threads) : stop(false) {\n    for(size_t i = 0; i < threads; ++i)\n        workers.emplace_back([this] {\n            for(;;) {\n                std::function<void()> task;\n                {\n                    std::unique_lock<std::mutex> lock(this->queue_mutex);\n                    this->condition.wait(lock, [this]{ return this->stop || !this->tasks.empty(); });\n                    if(this->stop && this->tasks.empty())\n                        return;\n                    task = std::move(this->tasks.front());\n                    this->tasks.pop();\n                }\n                task();\n            }\n        });\n}\n\nThreadPool::~ThreadPool() {\n    {\n        std::unique_lock<std::mutex> lock(queue_mutex);\n        stop = true;\n    }\n    condition.notify_all();\n    for(std::thread &worker: workers)\n        worker.join();\n}\n\nvoid ThreadPool::enqueue(std::function<void()> task) {\n    {\n        std::unique_lock<std::mutex> lock(queue_mutex);\n        if(stop)\n            throw std::runtime_error('enqueue on stopped ThreadPool');\n        tasks.emplace(task);\n    }\n    condition.notify_one();\n}\n\nint main() {\n    ThreadPool pool(4);\n    pool.enqueue([]{ std::cout << 'Hello from thread pool!'; });\n    std::this_thread::sleep_for(std::chrono::seconds(1));\n    return 0;\n}"
                                },
                                {
                                    "concept": "Atomic Operations",
                                    "definition": "Atomic operations in C++ ensure that a sequence of operations on shared data are completed without interruption, preventing race conditions.",
                                    "example": "#include <iostream>\n#include <thread>\n#include <atomic>\n\nstd::atomic<int> counter(0);\n\nvoid increment() {\n    for (int i = 0; i < 1000; ++i) {\n        ++counter;\n    }\n}\n\nint main() {\n    std::thread t1(increment);\n    std::thread t2(increment);\n    t1.join();\n    t2.join();\n    std::cout << 'Counter: ' << counter;\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level": 10,
                            "concepts": [
                                {
                                    "concept": "Design Patterns",
                                    "definition": "Design patterns are reusable solutions to common software design problems. Common patterns in C++ include Singleton, Factory, and Observer.",
                                    "example": "// Singleton Design Pattern\nclass Singleton {\nprivate:\n    static Singleton* instance;\n    Singleton() {}\npublic:\n    static Singleton* getInstance() {\n        if (!instance)\n            instance = new Singleton();\n        return instance;\n    }\n};\n\nSingleton* Singleton::instance = nullptr;\n\nint main() {\n    Singleton* s = Singleton::getInstance();\n    return 0;\n}"
                                },
                                {
                                    "concept": "RAII (Resource Acquisition Is Initialization)",
                                    "definition": "RAII is a programming idiom that ties resource management (like memory or file handles) to object lifetime, ensuring resources are released automatically.",
                                    "example": "#include <iostream>\n#include <fstream>\n\nclass FileHandler {\nprivate:\n    std::ofstream file;\npublic:\n    FileHandler(const std::string& filename) {\n        file.open(filename);\n        if (!file.is_open()) {\n            throw std::runtime_error('Could not open file');\n        }\n    }\n    ~FileHandler() {\n        file.close();\n    }\n    void write(const std::string& data) {\n        file << data;\n    }\n};\n\nint main() {\n    try {\n        FileHandler fh('example.txt');\n        fh.write('Hello, RAII!');\n    } catch (const std::exception& e) {\n        std::cerr << e.what() << '\\n';\n    }\n    return 0;\n}"
                                },
                                {
                                    "concept": "SFINAE (Substitution Failure Is Not An Error)",
                                    "definition": "SFINAE is a C++ template metaprogramming technique where substitution failures during template instantiation are not treated as errors, allowing for template specialization.",
                                    "example": "#include <iostream>\n\ntemplate<typename T>\nvoid func(T t) {\n    if constexpr (std::is_integral<T>::value) {\n        std::cout << t << ' is an integral type.';\n    } else {\n        std::cout << t << ' is not an integral type.';\n    }\n}\n\nint main() {\n    func(10);\n    func(3.14);\n    return 0;\n}"
                                },
                                {
                                    "concept": "CRTP (Curiously Recurring Template Pattern)",
                                    "definition": "CRTP is a C++ design pattern where a class template is derived from a specialization of itself, commonly used for static polymorphism.",
                                    "example": "template <typename Derived>\nclass Base {\npublic:\n    void interface() {\n        static_cast<Derived*>(this)->implementation();\n    }\n};\n\nclass Derived : public Base<Derived> {\npublic:\n    void implementation() {\n        std::cout << 'Derived implementation';\n    }\n};\n\nint main() {\n    Derived d;\n    d.interface();\n    return 0;\n}"
                                },
                                {
                                    "concept": "Variadic Templates",
                                    "definition": "Variadic templates allow you to define functions or classes that take an arbitrary number of template parameters, useful for creating generic containers or algorithms.",
                                    "example": "template<typename... Args>\nvoid print(Args... args) {\n    (std::cout << ... << args) << '\\n';\n}\n\nint main() {\n    print(1, 2.5, 'Hello');\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level": 11,
                            "concepts": [
                                {
                                    "concept": "Policy-Based Design",
                                    "definition": "Policy-based design allows behavior customization in classes by passing policies as template parameters, enabling flexible and reusable designs.",
                                    "example": "template<typename Policy>\nclass Context : public Policy {\npublic:\n    void doSomething() {\n        this->execute();\n    }\n};\n\nclass Policy1 {\npublic:\n    void execute() {\n        std::cout << 'Policy1 executed';\n    }\n};\n\nclass Policy2 {\npublic:\n    void execute() {\n        std::cout << 'Policy2 executed';\n    }\n};\n\nint main() {\n    Context<Policy1> context1;\n    context1.doSomething();\n\n    Context<Policy2> context2;\n    context2.doSomething();\n\n    return 0;\n}"
                                },
                                {
                                    "concept": "Metaprogramming with Templates",
                                    "definition": "Template metaprogramming involves using C++ templates to perform computations at compile-time, often used to optimize performance or enforce constraints.",
                                    "example": "template<int N>\nstruct Factorial {\n    static const int value = N * Factorial<N - 1>::value;\n};\n\ntemplate<>\nstruct Factorial<0> {\n    static const int value = 1;\n};\n\nint main() {\n    std::cout << 'Factorial of 5 is ' << Factorial<5>::value;\n    return 0;\n}"
                                },
                                {
                                    "concept": "Expression Templates",
                                    "definition": "Expression templates are a C++ technique used to optimize mathematical expressions by eliminating unnecessary temporary objects and improving performance.",
                                    "example": "template<typename T>\nstruct Add {\n    T left, right;\n    Add(T l, T r) : left(l), right(r) {}\n    auto operator()() { return left() + right(); }\n};\n\ntemplate<typename T>\nstruct Value {\n    T value;\n    Value(T v) : value(v) {}\n    T operator()() { return value; }\n};\n\nint main() {\n    Value<int> x(3), y(4);\n    Add<Value<int>> expr(x, y);\n    std::cout << 'Result: ' << expr();\n    return 0;\n}"
                                },
                                {
                                    "concept": "C++14 and C++17 Features",
                                    "definition": "C++14 and C++17 introduced many new features such as `auto` return type deduction, fold expressions, constexpr lambda, and structured bindings.",
                                    "example": "// Structured Bindings in C++17\n#include <tuple>\n\nstd::tuple<int, double> getValues() {\n    return {1, 2.5};\n}\n\nint main() {\n    auto [a, b] = getValues();\n    std::cout << 'a: ' << a << ', b: ' << b;\n    return 0;\n}"
                                },
                                {
                                    "concept": "Compile-Time Computation",
                                    "definition": "Compile-time computation involves using templates, constexpr, and other techniques to perform computations during compilation, reducing runtime overhead.",
                                    "example": "constexpr int factorial(int n) {\n    return n <= 1 ? 1 : n * factorial(n - 1);\n}\n\nint main() {\n    constexpr int result = factorial(5);\n    std::cout << 'Factorial of 5 is ' << result;\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level": 12,
                            "concepts": [
                                {
                                    "concept": "Advanced Memory Management",
                                    "definition": "Advanced memory management techniques in C++ include custom allocators, memory pools, and smart pointer strategies for optimized resource management.",
                                    "example": "template<typename T>\nclass CustomAllocator {\npublic:\n    using value_type = T;\n\n    CustomAllocator() {}\n\n    T* allocate(std::size_t n) {\n        std::cout << 'Allocating ' << n << ' elements.';\n        return static_cast<T*>(::operator new(n * sizeof(T)));\n    }\n\n    void deallocate(T* p, std::size_t n) {\n        std::cout << 'Deallocating ' << n << ' elements.';\n        ::operator delete(p);\n    }\n};\n\nint main() {\n    CustomAllocator<int> alloc;\n    int* arr = alloc.allocate(10);\n    alloc.deallocate(arr, 10);\n    return 0;\n}"
                                },
                                {
                                    "concept": "Coroutines (C++20)",
                                    "definition": "Coroutines in C++20 provide a way to write asynchronous code more naturally by pausing and resuming execution at certain points.",
                                    "example": "#include <coroutine>\n#include <iostream>\n\nstruct ReturnObject {\n    struct promise_type {\n        ReturnObject get_return_object() { return {}; }\n        std::suspend_never initial_suspend() { return {}; }\n        std::suspend_never final_suspend() noexcept { return {}; }\n        void return_void() {}\n        void unhandled_exception() {}\n    };\n};\n\nReturnObject coroutine() {\n    std::cout << 'Coroutine started\\n';\n    co_await std::suspend_always{};\n    std::cout << 'Coroutine resumed\\n';\n}\n\nint main() {\n    auto h = coroutine();\n    std::cout << 'Main function continues\\n';\n    return 0;\n}"
                                },
                                {
                                    "concept": "Memory-Mapped Files",
                                    "definition": "Memory-mapped files allow you to map a file's contents directly into memory, enabling efficient file I/O operations by treating file data as memory arrays.",
                                    "example": "#include <iostream>\n#include <fstream>\n#include <sys/mman.h>\n#include <fcntl.h>\n#include <unistd.h>\n\nint main() {\n    int fd = open('example.txt', O_RDONLY);\n    if (fd == -1) {\n        std::cerr << 'Failed to open file';\n        return 1;\n    }\n    size_t length = lseek(fd, 0, SEEK_END);\n    char* data = static_cast<char*>(mmap(nullptr, length, PROT_READ, MAP_PRIVATE, fd, 0));\n    if (data == MAP_FAILED) {\n        std::cerr << 'Memory mapping failed';\n        close(fd);\n        return 1;\n    }\n    std::cout.write(data, length);\n    munmap(data, length);\n    close(fd);\n    return 0;\n}"
                                },
                                {
                                    "concept": "Reflection (C++20 Experimental)",
                                    "definition": "Reflection in C++ allows you to inspect the structure of code at runtime, enabling dynamic type information and meta-programming capabilities.",
                                    "example": "// Note: As of now, C++20 reflection is experimental and not fully implemented in compilers.\n#include <experimental/meta>\n\nint main() {\n    auto meta = std::experimental::meta::get_type_info<int>();\n    std::cout << 'Type: ' << meta.name();\n    return 0;\n}"
                                },
                                {
                                    "concept": "Custom Iterators",
                                    "definition": "Custom iterators allow you to create your own iterator types that can be used with standard algorithms and containers, providing more control over data access.",
                                    "example": "template<typename T>\nclass MyIterator {\n    T* ptr;\npublic:\n    MyIterator(T* p) : ptr(p) {}\n    MyIterator& operator++() { ptr++; return *this; }\n    T& operator*() { return *ptr; }\n    bool operator!=(const MyIterator& other) { return ptr != other.ptr; }\n};\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    MyIterator<int> begin(arr), end(arr + 5);\n    while (begin != end) {\n        std::cout << *begin << ' ';\n        ++begin;\n    }\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level": 13,
                            "concepts": [
                                {
                                    "concept": "Networking with Boost.Asio",
                                    "definition": "Boost.Asio is a cross-platform C++ library used for network programming, enabling asynchronous I/O operations such as TCP/IP and UDP communication.",
                                    "example": "#include <boost/asio.hpp>\n#include <iostream>\n\nint main() {\n    boost::asio::io_context io;\n    boost::asio::ip::tcp::resolver resolver(io);\n    boost::asio::ip::tcp::socket socket(io);\n\n    auto endpoints = resolver.resolve('www.example.com', 'http');\n    boost::asio::connect(socket, endpoints);\n\n    std::cout << 'Connected to www.example.com';\n    return 0;\n}"
                                },
                                {
                                    "concept": "Advanced Template Techniques",
                                    "definition": "Advanced template techniques in C++ involve metaprogramming, template specialization, and SFINAE to create highly flexible and efficient code.",
                                    "example": "template<typename T>\nstruct IsPointer {\n    static const bool value = false;\n};\n\ntemplate<typename T>\nstruct IsPointer<T*> {\n    static const bool value = true;\n};\n\nint main() {\n    std::cout << std::boolalpha;\n    std::cout << 'Is int a pointer? ' << IsPointer<int>::value << '\\n';\n    std::cout << 'Is int* a pointer? ' << IsPointer<int*>::value << '\\n';\n    return 0;\n}"
                                },
                                {
                                    "concept": "Advanced Concurrency Patterns",
                                    "definition": "Advanced concurrency patterns in C++ include lock-free programming, futures, and promises, enabling more complex and efficient parallel execution.",
                                    "example": "#include <iostream>\n#include <thread>\n#include <future>\n\nint main() {\n    std::future<int> result = std::async([]() {\n        std::this_thread::sleep_for(std::chrono::seconds(1));\n        return 10;\n    });\n\n    std::cout << 'Result from async task: ' << result.get();\n    return 0;\n}"
                                },
                                {
                                    "concept": "Memory Management with Custom Allocators",
                                    "definition": "Custom allocators in C++ allow you to control how memory is allocated and deallocated for containers and objects, optimizing performance and memory usage.",
                                    "example": "template<typename T>\nclass CustomAllocator {\npublic:\n    using value_type = T;\n\n    T* allocate(std::size_t n) {\n        std::cout << 'Allocating ' << n << ' elements.';\n        return static_cast<T*>(::operator new(n * sizeof(T)));\n    }\n\n    void deallocate(T* p, std::size_t n) {\n        std::cout << 'Deallocating ' << n << ' elements.';\n        ::operator delete(p);\n    }\n};\n\nint main() {\n    std::vector<int, CustomAllocator<int>> vec(5);\n    return 0;\n}"
                                },
                                {
                                    "concept": "Parallel Programming with OpenMP",
                                    "definition": "OpenMP is a parallel programming model that allows you to write parallel code using simple pragmas, enabling efficient execution on multi-core processors.",
                                    "example": "#include <iostream>\n#include <omp.h>\n\nint main() {\n    int sum = 0;\n    #pragma omp parallel for reduction(+:sum)\n    for (int i = 0; i < 1000; ++i) {\n        sum += i;\n    }\n    std::cout << 'Sum: ' << sum << '\\n';\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level": 14,
                            "concepts": [
                                {
                                    "concept": "Template Meta-Programming (TMP)",
                                    "definition": "Template meta-programming in C++ allows you to perform computations at compile time, enabling optimization and code generation.",
                                    "example": "template<int N>\nstruct Factorial {\n    static const int value = N * Factorial<N - 1>::value;\n};\n\ntemplate<>\nstruct Factorial<0> {\n    static const int value = 1;\n};\n\nint main() {\n    std::cout << 'Factorial of 5 is ' << Factorial<5>::value;\n    return 0;\n}"
                                },
                                {
                                    "concept": "Custom Memory Pools",
                                    "definition": "Custom memory pools in C++ allow you to allocate memory in large blocks and manage it manually, improving performance for frequent allocations.",
                                    "example": "#include <iostream>\n#include <vector>\n\nclass MemoryPool {\npublic:\n    MemoryPool(size_t size) : poolSize(size), memory(new char[size]), offset(0) {}\n    ~MemoryPool() { delete[] memory; }\n\n    void* allocate(size_t size) {\n        if (offset + size > poolSize) throw std::bad_alloc();\n        void* ptr = memory + offset;\n        offset += size;\n        return ptr;\n    }\n\n    void deallocate(void* ptr) {}\n\nprivate:\n    size_t poolSize;\n    size_t offset;\n    char* memory;\n};\n\nint main() {\n    MemoryPool pool(1024);\n    int* p = static_cast<int*>(pool.allocate(sizeof(int)));\n    *p = 10;\n    std::cout << *p;\n    return 0;\n}"
                                },
                                {
                                    "concept": "Expression Templates for Optimization",
                                    "definition": "Expression templates optimize mathematical operations by eliminating unnecessary temporary objects and improving performance.",
                                    "example": "template<typename T>\nstruct Expr {\n    T left, right;\n    Expr(T l, T r) : left(l), right(r) {}\n    auto operator()() { return left() + right(); }\n};\n\nint main() {\n    auto add = [](int a, int b) { return a + b; };\n    Expr<decltype(add)> expr(add, add);\n    std::cout << 'Result: ' << expr(3, 4);\n    return 0;\n}"
                                },
                                {
                                    "concept": "Embedded Systems Programming",
                                    "definition": "Embedded systems programming involves writing C++ code for microcontrollers and other embedded devices, often with constraints on memory and processing power.",
                                    "example": "#include <iostream>\n#define LED_PIN 13\n\nvoid setup() {\n    pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n    digitalWrite(LED_PIN, HIGH);\n    delay(1000);\n    digitalWrite(LED_PIN, LOW);\n    delay(1000);\n}"
                                },
                                {
                                    "concept": "Advanced SFINAE (Substitution Failure Is Not An Error)",
                                    "definition": "Advanced SFINAE techniques enable complex template metaprogramming, allowing for highly flexible and specialized template functions and classes.",
                                    "example": "template<typename T>\nauto print(T t) -> decltype(std::cout << t, void()) {\n    std::cout << t << '\\n';\n}\n\nvoid print(...) {\n    std::cout << 'Not printable';\n}\n\nint main() {\n    print(10);\n    print('Hello');\n    print(std::vector<int>{1, 2, 3});\n    return 0;\n}"
                                }
                            ]
                        },
                        {
                            "level":15,
                            "concepts": [
                                {
                                    "concept": "C++20 Modules",
                                    "definition": "Modules in C++20 provide a modern way to organize and encapsulate code, improving compile times and reducing dependencies.",
                                    "example": "// my_module.cpp\nexport module my_module;\nexport int add(int a, int b) {\n    return a + b;\n}\n\n// main.cpp\nimport my_module;\n#include <iostream>\n\nint main() {\n    std::cout << add(3, 4);\n    return 0;\n}"
                                },
                                {
                                    "concept": "Concepts (C++20)",
                                    "definition": "Concepts in C++20 are a way to specify constraints on template parameters, improving template error messages and code readability.",
                                    "example": "#include <concepts>\n\ntemplate<typename T>\nconcept Addable = requires(T a, T b) {\n    a + b;\n};\n\ntemplate<Addable T>\nT add(T a, T b) {\n    return a + b;\n}\n\nint main() {\n    std::cout << add(3, 4);\n    return 0;\n}"
                                },
                                {
                                    "concept": "Coroutines (C++20)",
                                    "definition": "Coroutines in C++20 allow you to write asynchronous code that can be paused and resumed, enabling efficient and scalable code.",
                                    "example": "#include <coroutine>\n#include <iostream>\n\nstruct Generator {\n    struct promise_type {\n        int current_value;\n        std::suspend_always yield_value(int value) {\n            current_value = value;\n            return {};\n        }\n        std::suspend_always initial_suspend() { return {}; }\n        std::suspend_always final_suspend() noexcept { return {}; }\n        Generator get_return_object() { return Generator{this}; }\n        void return_void() {}\n        void unhandled_exception() { std::terminate(); }\n    };\n\n    struct iterator {\n        std::coroutine_handle<promise_type> coro;\n        bool operator!=(iterator const&) const { return !coro.done(); }\n        iterator& operator++() { coro.resume(); return *this; }\n        int operator*() const { return coro.promise().current_value; }\n    };\n\n    iterator begin() { coro.resume(); return {coro}; }\n    iterator end() { return {coro}; }\n\n    std::coroutine_handle<promise_type> coro;\n};\n\nGenerator counter(int max) {\n    for (int i = 1; i <= max; ++i)\n        co_yield i;\n}\n\nint main() {\n    for (int value : counter(5))\n        std::cout << value << ' ';\n    return 0;\n}"
                                },
                                {
                                    "concept": "Compile-Time Reflection (Future C++)",
                                    "definition": "Compile-time reflection will allow C++ programs to inspect and modify their structure at compile time, enabling powerful metaprogramming techniques.",
                                    "example": "// Future C++ example\n#include <experimental/reflection>\n\nint main() {\n    constexpr auto type_info = reflect<int>();\n    std::cout << 'Type: ' << type_info.name;\n    return 0;\n}"
                                },
                                {
                                    "concept": "Type Erasure",
                                    "definition": "Type erasure in C++ is a technique to hide specific types behind a uniform interface, enabling polymorphism without inheritance.",
                                    "example": "#include <iostream>\n#include <memory>\n\nstruct Shape {\n    virtual void draw() const = 0;\n    virtual ~Shape() = default;\n};\n\ntemplate<typename T>\nclass ShapeModel : public Shape {\npublic:\n    ShapeModel(T t) : object(t) {}\n    void draw() const override { object.draw(); }\nprivate:\n    T object;\n};\n\nclass Circle {\npublic:\n    void draw() const { std::cout << 'Circle\\n'; }\n};\n\nclass Square {\npublic:\n    void draw() const { std::cout << 'Square\\n'; }\n};\n\nint main() {\n    std::unique_ptr<Shape> shape = std::make_unique<ShapeModel<Circle>>(Circle{});\n    shape->draw();\n    shape = std::make_unique<ShapeModel<Square>>(Square{});\n    shape->draw();\n    return 0;\n}"
                                }
                            ]
                        }
                ]
        };

        const levelData = content[language].find(data => data.level === level);
            if (!levelData) {
                return "Level not found";
            }
        
            const conceptsHtml = levelData.concepts.map(concept => {
                const encodedConcept = concept.concept.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const encodedDefinition = concept.definition.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const encodedExample = concept.example.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
                return `<h2>${encodedConcept}</h2>
                        <p><strong>Definition:</strong> ${encodedDefinition}</p>
                        <pre><code><h2><strong>Example:</strong></h2>${encodedExample}</code></pre>`;
            }).join(""); // Join the array of HTML strings into a single string
        
            return conceptsHtml;
        }
});

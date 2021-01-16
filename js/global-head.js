const styleLinks = [
    {
        type: "preconnect",
        url: "https://fonts.gstatic.com"
    },
    {
        type: "stylesheet",
        url: "https://fonts.googleapis.com/css2?family=Montserrat&family=Potta+One&display=swap"
    },
    {
        type: "stylesheet",
        url: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    },
    {
        type: "stylesheet",
        url: "/css/small.css"
    },
    {
        type: "stylesheet",
        url: "/css/medium.css"
    },
    {
        type: "stylesheet",
        url: "/css/large.css"
    },
];
for (let i = 0; i < styleLinks.length; i++)  {
    let styleLink = document.createElement("link");    
    styleLink.setAttribute("rel", styleLinks[i].type);
    styleLink.setAttribute("href", styleLinks[i].url);
    document.head.appendChild(styleLink);
}
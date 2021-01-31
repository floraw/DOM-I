const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Images

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Nav
let navLinks = document.querySelectorAll('a');
navLinks.forEach((item, index) => {item.textContent = siteContent["nav"][`nav-item-${index + 1}`]});

let home = document.createElement("a");
home.textContent = "Home";
let navContact = document.createElement("a");
navContact.textContent = "Contact";

let navParent = document.getElementsByTagName("nav");
navParent[0].prepend(home);
navParent[0].appendChild(navContact);

navLinks = document.querySelectorAll('a');

navLinks.forEach((item, index) => {item.setAttribute("style", "color:green")});

//CTA
let mainHeader = document.getElementsByTagName("h1");
mainHeader[0].textContent = siteContent["cta"]["h1"];

let button = document.getElementsByTagName("button");
button[0].textContent = siteContent["cta"]["button"];

//Content Headers
let contentHeaders = document.querySelectorAll("h4");
contentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
contentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
contentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
contentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

//Content
let paragraphContent = document.querySelectorAll(".text-content p");
paragraphContent[0].textContent = siteContent["main-content"]["features-content"];
paragraphContent[1].textContent = siteContent["main-content"]["about-content"];
paragraphContent[2].textContent = siteContent["main-content"]["services-content"];
paragraphContent[3].textContent = siteContent["main-content"]["product-content"];
paragraphContent[4].textContent = siteContent["main-content"]["vision-content"];

//Contact
let contactSection = document.querySelector(".contact");
let contactChildren = contactSection.children;
let contactContent = Object.values(siteContent["contact"]);
for(let i = 0; i < contactChildren.length; i++) {
  contactChildren[i].textContent = contactContent[i];
}

//Footer
let footerContent = document.getElementsByTagName("footer");
footerContent[0].textContent = siteContent["footer"]["copyright"];
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
    "h1": "DOM </br> Is </br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//nav//
const makeEl = document.createElement("p")
const makeP = document.createElement("p")

document.querySelectorAll('a').forEach(a => a.style.color = 'green')
document.querySelector('nav').appendChild(makeP)
document.querySelector('nav').prepend(makeEl)
document.querySelector('nav p').innerHTML = 'prepend'
document.querySelector('nav').lastElementChild.innerHTML = 'append'


aTags = document.getElementsByTagName('a');
aTags[0].innerText = siteContent['nav']['nav-item-1']
aTags[1].innerText = siteContent['nav']['nav-item-2']
aTags[2].innerText = siteContent['nav']['nav-item-3']
aTags[3].innerText = siteContent['nav']['nav-item-4']
aTags[4].innerText = siteContent['nav']['nav-item-5']
aTags[5].innerText = siteContent['nav']['nav-item-6']





//cta content//
ctaText = document.querySelector('.cta-text h1')
ctaText.innerHTML = siteContent['cta']['h1'];
ctaText.style.color = 'green'
document.querySelector('.cta img').src = siteContent['cta']['img-src'];
document.querySelector('.cta button').innerHTML = siteContent['cta']['button'];


//Main Content//
const mainContent = siteContent['main-content']
document.querySelector('.top-content h4').innerHTML = mainContent['features-h4']
document.querySelector('.top-content').lastElementChild.firstElementChild.innerHTML = mainContent['about-h4'];
document.querySelector('.top-content p').innerHTML = mainContent['features-content']
document.querySelector('.top-content').lastElementChild.lastElementChild.innerHTML = mainContent['about-content'];
document.querySelector('.middle-img').src = mainContent['middle-img-src'];
const h4Tags = document.querySelector('.bottom-content').getElementsByTagName('h4')
h4Tags[0].innerHTML = mainContent['services-h4'];
h4Tags[1].innerHTML = mainContent['product-h4'];
h4Tags[2].innerHTML = mainContent['vision-h4'];

const pTags = document.querySelector('.bottom-content').getElementsByTagName('p');
pTags[0].innerHTML = mainContent['services-content'];
pTags[1].innerHTML = mainContent['product-content'];
pTags[2].innerHTML = mainContent['vision-content'];

//contact & footer//
contactContent = siteContent['contact']
document.querySelector('.contact h4').innerHTML = contactContent['contact-h4'];
const contactP = document.querySelector('.contact').getElementsByTagName('p')
contactP[0].innerHTML = contactContent['address']
contactP[1].innerHTML = contactContent['phone']
contactP[2].innerHTML = contactContent['email']
document.querySelector('footer').innerHTML = siteContent['footer']['copyright']

//stretch//
/*document.querySelector('button').addEventListener('click', function () {

  ctaText.style.color = 'black';

})*/
let status = 1


function changeColor() {


  if (status === 1) {
    ctaText.style.color = 'black';
    status = 2;
  } else if (status === 2) {
    ctaText.style.color = 'red';
    status = 3;
  } else if (status === 3) {
    ctaText.style.color = 'gold';
    status = 4;

  } else if (status === 4) {
    ctaText.style.color = 'green';
    status = 1;
  }
}

document.querySelector('button').addEventListener('click', changeColor)
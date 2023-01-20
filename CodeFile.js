/* 
1.
document.querySelector("#sidebar-wrapper-left > aside > div.crayons-card.crayons-card--secondary.p-4 > h2").innerHTML = 'Ashish'
document.querySelector("#sidebar-wrapper-left > aside > div.crayons-card.crayons-card--secondary.p-4 > p").innerHTML = 'I Love to Read'

2.
//the class of the main divs which had the values was as-imagegrid-item.
let bigArr = document.querySelector("body > div.main > div.as-imagegrid > div > div")
const size = bigArr.getElementsByClassName('as-imagegrid-item').length

let arr = []
for(let i = 1; i<=size; i++){
    //targeting all the data in span but only the childNode value not other tags  
    let item= document.querySelector(`body > div.main > div.as-imagegrid > div > div > div:nth-child(${i}) > a > span`).childNodes[0].nodeValue
    arr.push(item)
}
arr
3. 
// parent jisme insert karna hai
let parent = document.querySelector("#hcfe-content > section > div > div > article > nav")

let newSection = document.createElement('section')
let newHeading = document.createElement('h3')
newSection.className = 'parent'
newHeading.textContent = 'My New FAQ'
newSection.appendChild(newHeading)

parent.appendCHild(newSection)

4. 

document.querySelector("#footer > div.container-infinite > div.container-text > div > div.customer-support > a").innerText = '+91 8976765434'

5.***
document.querySelector("#content > div > div > div:nth-child(1) > div > div:nth-child(6) > div > div.feature-column-carousel__carousel.use-desktop-indicator.use-mobile-indicator.feature-column-carousel--desktop-columns-4.swiper-container.basic-swiper.swiper-container-initialized.swiper-container-horizontal > div.feature-column-carousel__inner.swiper-wrapper > div.feature-column-carousel__item.swiper-slide.feature-column-carousel__item--align-center.swiper-slide-active > div > div.feature-column-carousel__content > div.feature-column-carousel__button > a").innerText = 'Check Out'

6.

let inp = document.querySelector("#app > div > div:nth-child(1) > div > div > div > div.header___1FxHS.gl-is-sticky.fixed___3SAJN > div.header-desktop___3T36B > div.glass-header-bottom-desktop-white___38y1Y > div > div.right-side-menu___16Ik7 > div.glass-search___3dX4G.glass-search-redesign___PPuNX > div > form")
inp.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'red'
})

7.
//not working as desired
let searchData = document.querySelector("#hp-search-input")
searchData.setAttribute('value','jsx')
document.querySelector("#hp-search-form > button.button.action.has-icon.search-button > span > span.icon.icon-search").click()

8. ***
document.querySelector("#SIvCob").childNodes[1].remove()
document.querySelector("#SIvCob").childNodes[4].remove()
document.querySelector("#SIvCob").childNodes[7].remove()
document.querySelector("#SIvCob").childNodes[10].remove()
document.querySelector("#SIvCob").childNodes[12].remove()

9.
document.querySelector("body > div:nth-child(3) > div > div > h1").style.color = '#B1361E'
document.querySelector("body > div:nth-child(3) > div > div > h1").style.fontFamily = 'monospace'

10.
// document.querySelector("#gatsby-focus-wrapper > div > div > main > div:nth-child(1) > div > div > div.col-lg-8.col-lg-offset-2.col-sm-10.col-sm-offset-1.col-xs-12 > a > span.login-btn-text").style.backgroundColor = 'red'
//
let text = document.querySelector("#gatsby-focus-wrapper > div > div > main > div:nth-child(3) > div.certification-section.row > div > a > span.login-btn-text")
function changeColor() {
text.style.backgroundColor = 'red'
}
text.addEventListener('mouseover', changeColor)

11.
let newTag = document.createElement('img')
newTag.src = 'https://ineuron.ai/images/ineuron-logo.png'
newTag.width = '100'
newTag.height = '30'
document.querySelector("body > header > div > a").childNodes[0].remove()
//append also works the same as appendChild
document.querySelector("body > header > div > a").appendChild(newTag)

12.
document.querySelector("#user-projects-list > div:nth-child(3) > form > button").style.background = 'blue'

13.
document.querySelector("#post-5780 > div > div > div > div > div > div > div.fl-col.fl-node-5d7c1d1ca1ded.fl-col-has-cols > div > div.fl-module.fl-module-heading.fl-node-5d7c1d1ca1fdd.hr__home__heading > div > h1").innerText = 'JSBOOTCAMP'
document.querySelector("#post-5780 > div > div > div > div > div > div > div.fl-col.fl-node-5d7c1d1ca1ded.fl-col-has-cols > div > div.fl-module.fl-module-heading.fl-node-5d7c1d1ca1fdd.hr__home__heading > div > h1").style.color = 'grey'

14.
document.querySelector("#skipContentFocus > div.HotDealsAll__HotCampaignsEventsContainer__FK0V2 > div.HotDealsAll__Heading__2fIbe").style.fontSize = '80px'

15.
document.querySelector("#main-content-container > div.row.hero-content > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").removeAttribute("class")
document.querySelector("#main-content-container > div.row.hero-content > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").style.textAlign = 'right'

16.
document.querySelector('.section-title_title__VEDfK').innerText = 'Start with Sractch'

17.
let dateNow = new Date()
document.querySelector("#product_summary_default > div.container.ps-summary.with-model-level-pricing > div.grid.no-grid-at-767.js-even-cols > div.span4 > div > div > div.mlp-collapse-content.text-right > div.btn-container").innerHTML = dateNow

18.
document.querySelector("body > section:nth-child(8) > div > div > div.globalfooter.f03-footer-container.component-base > footer").style.background = 'orange'

19.
let imgStore = document.querySelector("body > div > div.wrap-sticky > nav > div > div.container > div.navbar-header > a > img").getAttribute('src')
imgStore
'/assets/brand/logo-300-002e45a4aec98fd92899838da9d5560f.png'

20.
document.querySelector(".desc").style.color = 'orange'



*/
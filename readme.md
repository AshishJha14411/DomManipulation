# DOM Challenges 

The CodeFile.js contains a total of 20 dom manipulation codes. Here are the 7 out of the 20 which were most fun


### Challenge
- Get Element By Id, Create Element, Create Text Node, Append Child
![Before](./q31.png)

```js
let parent = document.querySelector("#hcfe-content > section > div > div > article > nav")

let newSection = document.createElement('section')
let newHeading = document.createElement('h3')
newSection.className = 'parent'
newHeading.textContent = 'My New FAQ'
newSection.appendChild(newHeading)

parent.appendChild(newSection)
```
![After](./q32.png)

### Challenge

-  Change the description colour black to orange

![Before](./q201.png)
```js
document.querySelector(".desc").style.color = 'orange'
```
![Before](./q202.png)

### Challenge
- Change the logo Image

![Before](./q111.png)
```js
let newTag = document.createElement('img')
newTag.src = 'https://ineuron.ai/images/ineuron-logo.png'
newTag.width = '100'
newTag.height = '30'
document.querySelector("body > header > div > a").childNodes[0].remove()
document.querySelector("body > header > div > a").appendChild(newTag)
```

![After](./q112.png)

### Challenge 

- Change the background colour of the button to blue.

![Before](./q121.png)
```js
document.querySelector("body > div.application-main > div > aside > div > loading-context > div > div.mb-3.Details.js-repos-container.mt-5 > div > h2 > a").style.backgroundColor = 'blue'

```
![After](./q122.png)

### Challenge

- Change Background Color on Hover to Red

![Before](./q101.png)

```js
let text = document.querySelector(".login-btn-text")
function changeColor() {
text.style.backgroundColor = 'red'
}
text.addEventListener('mouseover', changeColor)
```

![After](./q102.png)


- Change Title 

![Before](./q161.png)

```js
document.querySelector('.section-title_title__VEDfK').innerText = 'Start with Sractch'
```

![After](./q162.png)



![Before](./q141.png)

```js
document.querySelector("div.HotDealsAll__Heading__2fIbe").style.fontSize = '80px'
```
![After](./q142.png)
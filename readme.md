# DOM Challenges 

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
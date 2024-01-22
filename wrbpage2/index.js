const button = document.querySelector('.sign-in')

button.addEventListener('click', () => {
    alert('this is an imitation made by boadwen who needs a job can you help')
})














/*array and loops
const repeatString = function (phrase, times){
    if(times < 0) return 'error'
    let newStr = ''
    for(let i = 0; i < times; i++){
        newStr += phrase
    }
    return newStr
}
console.log(repeatString('hello ', 4))

const reverseString = function(reversed){
    return reversed.split('').reverse().join('')
}
console.log(reverseString('hello there is your boy'))

const removedFromArray = function(removed, ...args){
    const newArr = []
    removed.forEach((item) => {
        if(!args.includes(item)){
            newArr.push(item)
        }
    });
    return newArr
}
console.log(removedFromArray([1, 2, 3, 4, 5], 4))

const sumAll = function(min, max){
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
    let sum = 0;
    for(let j = 0; j < sum; j++){
        sum += j
    }
    return sum;
}
console.log(sumAll(1, 4))

const convertToCelsius = function(fahrenheit){
    return Math.round(fahrenheit - 32) * (5 / 9) * 10 / 10
}
console.log(convertToCelsius(210))
const convertToFahrenheit = function(celsius){
     return Math.round(((celsius * 9) / 5 + 32) * 10) / 10
}
console.log(convertToFahrenheit(20))
*/
/*
//dom manipulation

const container = document.querySelector('#container')

console.dir(container.firstElementChild)

const controls = document.querySelector('.controls')

console.dir(controls.previousElementSibling)

const div = document.createElement('div')
div.style.color = 'blue';
div.style.cssText = 'color:blue; background:white;'
div.setAttribute('style', 'color: blue; background:white;')
*/
/*
const container = document.querySelector('#container');

const content = document.createElement('div')
content.classList.add('content');
content.textContent = 'this is the glorius text-content'
content.style.color = 'red'
content.style.border = '1px solid black'
content.style.height = 'auto'
container.appendChild(content)


const para = document.createElement('p')
para.textContent = 'hey i am red';
para.style.color = 'red';
content.appendChild(para)

const newDiv = document.createElement('div')
newDiv.style.border = '2px solid black';
newDiv.style.height = '150px'
newDiv.style.width = '200px'
content.appendChild(newDiv)

const header = document.createElement('h1')
header.textContent = 'i\'a in a div'
newDiv.appendChild(header)

const too = document.createElement('p')
too.textContent = 'ME TOO!'
newDiv.appendChild(too)

const btn = document.querySelector('#btn')
btn.onclick = () => alert('hi googlr hire me today it\'s boadwen')

const button = document.querySelector('#button')
button.addEventListener('click', () => {
    alert('this is boadwen on the radar')
})

function alertFunction(){
    alert('this is once more boaadwen')
}

btn.addEventListener('click', function(e){
    e.target.style.background = 'blue'
})
button.addEventListener('click', function(s){
    s.target.style.background = 'magenta'
})

const buttons = document.querySelectorAll('button')

buttons.forEach((but) => {
    but.addEventListener('click', () => {
        alert(but.id)
    })
})
*/
/*
const link = document.querySelector('a')
link.textContent = 'mozilla Developer Networks'
link.href = 'https://developer.mozilla.org'
link.style.textDecoration = 'none'

const sect = document.querySelector('section')
const para = document.createElement('p')
para.textContent = 'we hope you enjoyed the ride'
sect.appendChild(para)

const text = document.createTextNode(
    ' - the premier source for web development knowledge'
)
const linkPara = document.querySelector('p')
linkPara.appendChild(text)
sect.appendChild(linkPara)
//sect.removeChild(linkPara)
//linkPara.remove()
//linkPara.parentNode.removeChild(linkPara)

para.style.color = 'white'
para.style.background = 'black'
para.style.padding = '10px'
para.style.width = '250px'
para.style.textAlign = 'center'*/
//para.setAttribute('class', 'highlight')
/*
const list = document.querySelector('ul')
const input = document.querySelector('input')
const btn = document.querySelector('button')


   btn.addEventListener('click', () => {
     const myItem = input.value;
     input.value = '';
   
const foodList = document.createElement('li')
const listText = document.createElement('span')
const listBtn = document.createElement('button')

foodList.appendChild(listText);
listText.textContent = myItem;
foodList.appendChild(listBtn);
listBtn.textContent = 'delete';
list.appendChild(foodList);

listBtn.addEventListener('click', () => { 
    list.removeChild(foodList)
})
input.focus()
   })*/

   /*
const list = document.querySelector('ul')
const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    const myItems = input.value;
    input.value = '';

    const shopList = document.createElement('li')
    const text = document.createElement('span')
    const listBtn = document.createElement('button')

    shopList.appendChild(text)
    text.textContent = myItems;
    shopList.appendChild(listBtn)
    listBtn.textContent = 'delete'
    list.appendChild(shopList)

    listBtn.addEventListener('click', () => {
        list.removeChild(shopList)
    })
    input.focus()

})
*/
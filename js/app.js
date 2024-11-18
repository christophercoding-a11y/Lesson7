/**
 * DOM
 * 
 * Document Object Model
 *        -looks like a tree diagram (root, branches, nodes)
 * 
 * Accessing the DOM
 * 
 *      byTagNames (p, ul, div)
 *      querySelector (.class, id)
 *      querySelectorAll (.class, id)
 *      byId (id)
 */

let myName = document.getElementById('myName')

myName.innerText = 'Christopher'

// console.log(myName.style)

// myName.style.fontFamily = 'sans-serif'
// // myName.style.color ='red'

// console.log(myName);

myName.classList.add('red')

myName.classList.remove('red')

myName.classList.add('darkgoldenrod')

/**Refactor as a Class-based object
 * 
 * class Superhero {
 * 
 * }
 */

class Superhero {
    constructor() {
        // refactoring
        // this.hero,
        // this.alias,
        // this.powers = [],
        // this.enemies = [],
        // this.imgUrl
        // build array of characters
        this.characters = []

        this.cardRow = document.getElementById('cardRow')
    }
    // end constructor

    // init or initializer
    init() {
        // console.log('intialized')
        const characters = this.characters

        // console.log(hero)
        this.getData()
        this.buildCard
    }


    // collect data from the form
    getData() {
        const hero = {
            heroName: '',
            aliasName: '',
            isHero: 'hero' || 'villain',
            universe: 'marvel' || 'dc',
            powers: [],
            enemies: [],
            imgUrl: ''
        }
        // set inputs
        const heroInput = document.getElementById('heroInput')
        const aliasInput = document.getElementById('aliasInput')
        const power1 = document.getElementById('power1').value || null
        const power2 = document.getElementById('power2').value || null
        const power3 = document.getElementById('power3').value || null
        const enemy1 = document.getElementById('enemy1').value || null
        const enemy2 = document.getElementById('enemy2').value || null
        const enemy3 = document.getElementById('enemy3').value || null
        const imgInput = document.getElementById('imgInput').value

        //store values in obj
        hero.heroName = heroInput.value
        hero.aliasName = aliasInput.value
        hero.imgUrl = imgInput


        // radio buttons
        hero.isHero = document.querySelector('input[name=isHero]:checked').value || null
        hero.universe = document.querySelector('input[name=universe]:checked').value || null

        // add items to array
        hero.powers = [...hero.powers, power1, power2, power3]
        hero.enemies = [...hero.enemies, enemy1, enemy2, enemy3]

        console.log(hero)

        this.characters = [...this.characters, hero]
        // console.log(this.characters);

        this.buildCard(hero)

    }

    buildCard(obj) {
        const cardRow = this.cardRow

        const col = document.createElement('div')
        col.classList.add('col')

        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = obj.imgUrl
        img.classList.add('img-fluid', 'card-img-top', 'hero-img')

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const h3 = document.createElement('h3')
        h3.classList.add('display-5', 'text-capitalize')
        h3.innerText = obj.heroName

        const aliasText = document.createElement('p')
        aliasText.classList.add('alias-text', 'text-capitalize')
        aliasText.innerText = obj.aliasName

        const heroText = document.createElement('p')
        heroText.classList.add('hero-text', 'text-capitalize')
        heroText.innerText = obj.isHero

        const universeText = document.createElement('p')
        universeText.classList.add('universe-text', 'text-capitalize')
        universeText.innerText = obj.universe

        const powerList = document.createElement('ul')
        powerList.setAttribute('id', 'powerList')
        powerList.classList.add('power-list', 'list-group', 'list-group-flush')

        obj.powers.forEach(power => {
            const li = document.createElement('li')
            li.classList.add('list-group-item')
            li.innerText = power

            powerList.appendChild(li)
        })

        const enemyList = document.createElement('ul')
        powerList.setAttribute('id', 'enemyList')
        powerList.classList.add('power-list', 'list-group', 'list-group-flush')

        obj.enemies.forEach(enemy => {
            const li = document.createElement('li')
            li.classList.add('list-group-item')
            li.innerText = enemy

            enemyList.appendChild(li)
        })
        // append elements to card body
        cardBody.appendChild(h3)
        cardBody.appendChild(aliasText)
        cardBody.appendChild(heroText)
        cardBody.appendChild(universeText)
        cardBody.appendChild(powerList)
        cardBody.appendChild(enemyList)

        // append element to card 
        card.appendChild(img)
        card.appendChild(cardBody)


        // append to col 
        col.appendChild(card)

        // apeend to cardRow
        cardRow.appendChild(col)
    }


    displayPower(arr) {
        const powerList = document.getElementById('powerList')

        arr.forEach(item =>  {
            const li = document.createElement('li')

            li.innerText = item
            powerList.appendChild(li)
        })
    }
}

// const superman = new Superhero()

// console.log(superman)
// superman.hero = 'Superman'
// superman.alias = 'Clark kent'
// superman.imgUrl = 'superman.jpeg'
// superman.displayHero()
// superman.addPower('super strength')
// superman.addPower('x-ray vision')
// superman.addPower('super speed')

// superman.addEnemy('Lex Luthor')
// superman.addEnemy('Darkseid')

// An event is any interaction between the user the user and the browser

/**
 * Stytax:
 * 
 *      element.addEventListener(event, callback function)
 */
const action = new Superhero()

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click',(e)=> {
    e.preventDefault()
    action.init()
})


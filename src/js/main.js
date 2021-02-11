const leftArrowBox = document.querySelector(`.left-arrow`)
const rightArrowBox = document.querySelector(`.right-arrow`)
const leftArrowLine = document.querySelector(`.left-arrow__line`)
const rightArrowLine = document.querySelector(`.right-arrow__line`)
const toggleButton = document.querySelector(`.toggle`)
const closeButton = document.querySelector(`.menu-box__close`)
const menuBox = document.querySelector(`.menu-box`)

class ArrowExpander{
 
    box = null
    line = null
    
    constructor(box, line){
        this.box = box
        this.line = line
        this.setup()
    }

    setup() {
    
        this.startHover = (evt) => {
            if(this.box.classList.contains(`left-arrow`)){
                this.line.classList.add(`left-arrow__line_expanded`)
            }
            else{
                this.line.classList.add(`right-arrow__line_expanded`)
            }
        }

        this.endHover = (evt) => {
            if(this.box.classList.contains(`left-arrow`)){
                this.line.classList.remove(`left-arrow__line_expanded`)
            }
            else{
                this.line.classList.remove(`right-arrow__line_expanded`)
            }
        }

        this.box.addEventListener(`mouseover`, this.startHover)
        this.box.addEventListener(`mouseout`, this.endHover)

       
    }
}

class MenuOpener{
 
    button = null
    box = null
    
    constructor(button, box){
        this.button = button
        this.box = box
        this.setup()
    }

    setup() {
    
        this.clickHandler = (evt) => {
            this.box.classList.add(`menu-box_open`)
        }

        this.button.addEventListener(`click`, this.clickHandler)    
    }
}

class MenuCloser{
 
    button = null
    box = null
    
    constructor(button, box){
        this.button = button
        this.box = box
        this.setup()
    }

    setup() {
    
        this.clickHandler = (evt) => {
            this.box.classList.remove(`menu-box_open`)
        }

        this.button.addEventListener(`click`, this.clickHandler)    
    }
}

const leftArrowExpand = new ArrowExpander(leftArrowBox, leftArrowLine)
const rightArrowExpand = new ArrowExpander(rightArrowBox, rightArrowLine)
const openMenu = new MenuOpener(toggleButton, menuBox)
const closeMenu = new MenuCloser(closeButton, menuBox)
const leftArrowBox = document.querySelector(`.left-arrow`)
const rightArrowBox = document.querySelector(`.right-arrow`)
const leftArrowLine = document.querySelector(`.left-arrow__line`)
const rightArrowLine = document.querySelector(`.right-arrow__line`)

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

const leftArrowExpand = new ArrowExpander(leftArrowBox, leftArrowLine)
const rightArrowExpand = new ArrowExpander(rightArrowBox, rightArrowLine)
class App {

    init() {
        window.addEventListener('scroll', ev => {
                this.handleScroll(ev)
            })
    }

    handleScroll( ev ) {

        const delta = window.scrollY / 10

        // Create a style node
        const attr = document.createAttribute("style")
        attr.value = "width : calc(100vw - " + delta + "vw);"
        
        // Add out style node to the redBlock element.
        const redBlock = document.querySelector( ".red" )
        redBlock.setAttributeNode( attr )
    }
}

const app = new App()
app.init()
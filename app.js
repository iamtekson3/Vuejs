new Vue({
    el: '#app',
    data: {
        title: 'I am dynamic title',
        wage: 10,
        name: 'Kamal Kshetri',
        url: 'http://tekkshetri.com.np',
        classes: ["one", 'two'],
        coordinate: {
            x: 0,
            y: 0
        },
        showname: false,
        showage: true,
    },
    methods:{
        greet(time) {
            return `Hello ${this.name}, Good ${time}`
        },
        increase(amount) {
            this.wage += amount
        },
        getCoords(e) {
            this.coordinate.x = e.offsetX
            this.coordinate.y = e.offsetY
        },
        updateName(e) {
            this.name = e.target.value
        },
        something(){
            console.log("Hello World!")
        },
        toggleName() {
            this.showname = !this.showname
        },
        toggleAge() {
            this.showage = !this.showage
        }
    }
})
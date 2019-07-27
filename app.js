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
        items: ['first', 'second', 'third', 'fourth', 'fifth'],
        objectItems: [
            {name: 'kamal', age: 40, clz: 'wrc'},
            {name: 'Pramod', age: 23, clz: 'motherland'},
            {name: 'Dhiraj', age: 42, clz: 'jmc'},
        ]
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
new Vue({
    el: '#app',
    data: {
        title: 'I am dynamic title',
        wage: 10,
        name: 'Kamal Kshetri',
        url: 'http://tekkshetri.com.np',
        classes: ["one", 'two'],
    },
    methods:{
        greet(time) {
            return `Hello ${this.name}, Good ${time}`
        },
        increase(amount) {
            this.wage += amount
        }
    }
})
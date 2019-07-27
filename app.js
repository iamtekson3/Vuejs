new Vue({
    el: '#app',
    data: {
        title: 'I am dynamic title',
        name: 'Kamal Kshetri'
    },
    method:{
        greet(time) {
            return `Hello ${this.name}, Good ${this.time}`
        }
    }
})
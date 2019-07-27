new Vue({
    el: '#app',
    data: {
        title: 'I am dynamic title',
        name: 'Kamal Kshetri',
        url: 'http://tekkshetri.com.np',
        classes: ["one", 'two'],
    },
    method:{
        greet(time) {
            return `Hello ${this.name}, Good ${this.time}`
        }
    }
})
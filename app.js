// first things first 
//creating a vue instance. the whole idea of the instance is to control a whole part or a section of the application.

// how does it do it? it takes the whole object as a parameter
new Vue({
    el: '#vue-app', // targets the html element with the id
    data: {
        name: "Keren", // will interpolate data with the key value pairs
        job: "developer",
        age: 20,
        website: "https://github.com/mungaikeren",
        websiteTag: "<a href='http://github.com/mungaikeren'>Git hub</a>"
    },
    // methods. call the function to the html and it will just render the info to the DOM
    methods: {
        greet: function(time){
            return "Good" + time + " " + this.name;
        },
        add: function(inc){
            var newAge = this.age += inc;
            return newAge;
        },
        subtract: function(dec){
            var removeAge = this.age -= dec;
            return removeAge;
        },
        click: function(){
            alert("you clicked me")
        },
    }
});

new Vue({
    el: '#keyboard-events',
    data: {

    },
    methods: {
        logName: function(){
            console.log("You entered your name")
        },
        logAge: function(){
            console.log("you entered your age")
        },
    }
})

new Vue({
    el: '#two-way-binding',
    data: {
        name: "",
        age:""
    },
    methods: {
        logName: function(){

        },
        logAge: function(){
        }

    }
});

new Vue({
    el: '#computed-properties',
    data:{
        age: 20,
        a:0,
        b:0,
    },
    // this methods in vue will run the two functions
    methods:{
        // addToA: function(){
        //     console.log("addToA")
        //     return this.a + this.age;
        // },
        // addToB: function(){
        //     console.log("addToB")
        //     return this.b + this.age;
        // },
    },
    // computed properties  watch the variables to be computed and only run when needed
    computed:{
        addToA: function(){
            console.log("addToA")
            return this.a + this.age;
        },
        addToB: function(){
            console.log("addToB")
            return this.b + this.age;
        },
    },
});


new Vue({
    el: '#dynamic-css',
    data:{
        available: false,
        nearby: false,
    },
    methods:{

    },
    computed:{
        compClasses: function(){
            // errors experienced, failing to return
            return{
                available:this.available,
                nearby:this.nearby,
            }
        },
    }
});

new Vue({
    el: '#canvas',
    data: {
        x: 0,
        y:0,
    },
    methods: {
        updateXY: function (event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})

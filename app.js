// first things first 
//creating a vue instance. the whole idea of the instance is to control a whole part or a section of the application.

// how does it do it? it takes the whole object as a parameter
new Vue({
    el: '#vue-app', // targets the html element with the id
    data: {
        name: "Keren", // will interpolate data with the key value pairs
        job: "developer",
        website: "https://github.com/mungaikeren"
    },
    // methods. call the function to the html and it will just render the info to the DOM
    methods: {
        greet: function(time){
            return "Good" + time + " " + this.name;
        }
    }
});

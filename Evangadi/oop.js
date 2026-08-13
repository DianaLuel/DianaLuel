let Abebe = {
    firstname: "Abebe",
    lastname: "Kebede",

    sing: function() {
        console.log("Abbe beso bela.");
        return "abebe can sign";
    },

    fullName: function() {
        return this.firstname + " " + this.lastname;
    }

}


console.log(Abebe.sing());
console.log(Abebe.fullName());
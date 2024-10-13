//  ✅--------VARIABLES
// ------JS EXCEPTION--------
// console.log(+[]==+![])
// console.log(0.1+0.2===0.3)
// console.log( null>=0)
// console.log(Number([]))
// console.log([10,1,3].sort())

const user = {
  name: "bob",
  run: function() {
    console.log("he can run ",this.name);
  },
};
console.log(user);

user.run();


// OBJECT CONSTRUCTUR

function Car(){
    this.model;
    this.year;
    this.color;

}
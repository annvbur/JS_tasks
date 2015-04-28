//'use strict'
var cat = new Object();
cat.breed = "British";
cat.friskiness = "high";
cat.checkProperty = function (prop) {
	console.log(this.hasOwnProperty(prop))
	return this.hasOwnProperty(prop)
};


cat.checkProperty("breed"); //method form. cat has "breed" property. true




 function checkProperty(prop) {
	console.log(this.hasOwnProperty(prop))
	return this.hasOwnProperty(prop)
};


var cat2 = {};
checkProperty.apply(cat2, ["breed"]);// apply form. no sense.
console.log(cat2);//will be empty because cat2 doesn't have properties. false


checkProperty(this, "breed"); //function form. this = window. window doesn't have "breed" property. false



var cat3 = new checkProperty("breed");//constructor form. create new cat3 that also doesn't have properties. false

//so result will be: true, false, false, false.




















// function doesCatHaveProperty(obj, prop) {
//     var result;
//     if (this.hasOwnProperty == prop) {//'this' here insread of 'obj' will be window. So result will be -no such property for underfined in strict mode
//         result = true;
//     } else {
//         result = false;
//     }
//     //return result;
//     console.log(result);
// }

// doesCatHaveProperty(cat, "weight");

// var cat3 = {};
// doesCatHaveProperty.apply(cat3, ['breed']);
// console.log(cat3);





//Женина красивая функция - пример.


function assign(name, value) {
	if (this != null) {
		this[name] = value;		
	}
	
}

var obj = {};
obj.assign = assign;
obj.assign('id', 100);
console.log(obj.id);

assign('crya', 150);

var obj2 = {};
assign.apply(obj2, ['id', 200]);
console.log(obj2);

var obj3 = new assign('id', 300);





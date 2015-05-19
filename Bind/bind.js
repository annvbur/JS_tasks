function printName() {
   console.log(this.name);
}



function bind(boundFn, contextObj){
		

	return function (){
		
		if (typeof boundFn === 'function'){
			//var that = contextObj;
			boundFn.apply(contextObj);
		}	
	}
}



var boundFn = bind(printName, {name: "This is my expected name!!!"});
printName(); // Expected result: undefined or some trash from window object
boundFn(); // Expected result: "This is my expected name!!!"


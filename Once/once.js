var sourceFn = function () {
	console.log("[SourceFn]: Hey, I’ve been called");
}



function once(sourceFnOnce){
	
	var wasCalled = false; //flag

	return function (){
			if(!wasCalled){
			if (typeof sourceFnOnce === 'function'){
				sourceFnOnce.apply(this, arguments);
			}
		wasCalled = true;
		}
	}
}


var sourceFnOnce = once(sourceFn);

sourceFnOnce();
sourceFnOnce();
sourceFnOnce();
sourceFnOnce();
sourceFnOnce();
sourceFnOnce();
sourceFnOnce();
sourceFnOnce();
sourceFnOnce();
sourceFnOnce();
sourceFnOnce();
sourceFnOnce();























//эксперимент 
// function once(){
// 	var sourceArgs = arguments;
// 	if (typeof sourceArgs[0] === 'function'){
// 		if(!arguments.callee.once){
// 			return function(){
// 				sourceArgs[0].apply(this, arguments);
// 			}
// 		arguments.callee.once = true;
// 		}	
// 	}
// }




// var sourceFnOnce = once(sourceFn);









// правильно. callee не то
// function once(){
// 	var sourceArgs = arguments;

// 	return function(){
// 		if(!arguments.callee.once){
// 			if (typeof sourceArgs[0] === 'function'){
// 				sourceArgs[0].apply(this, arguments);
// 			}
// 		arguments.callee.once = true;
// 		};	
// 	}
// }




 




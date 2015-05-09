var sourceFn = function () {
	console.log("[SourceFn]: Hey, I’ve been called");
}



function once(){
	var sourceArgs = arguments;

	return function(){
		if(!arguments.callee.once){
			if (typeof sourceArgs[0] === 'function'){
				sourceArgs[0].apply(this, arguments);
			}
		arguments.callee.once = true;
		};	
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




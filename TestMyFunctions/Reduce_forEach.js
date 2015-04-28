
var sourceArray = [6, 10, 21, 14, -9, 44];


var getMaxElement  = function(initialArray){
  var result = null;
  if (Array.isArray(initialArray) && initialArray.length > 0){
      var maxValue = initialArray[0];
      initialArray.forEach(function(element){
        if (element > maxValue){
          maxValue = element;
        }
  });
      return maxValue;
 }
};


getMaxElement (sourceArray);

var getMaxItem = function(initialArray){
  // var result = null;
  if (Array.isArray(initialArray) && initialArray.length > 0){
    var maxItem = initialArray[0];
    initialArray.reduce(function(previousValue, item){
      if (item > maxItem){
        maxItem = item;
    }
  });
    return maxItem;
  }
};

  

getMaxItem (sourceArray);


function Test1() {
  var input = [];
  var actual = getMaxElement(input);
  console.log(actual,"Test1");
  var expected = undefined;
  if (actual === expected){
  	console.log("Test passed")
  } else {
  	throw new Error("Test failed. Expected and actual results do not match");
  }

  //EnsureEquals(actual, expected);
}

Test1();

function Test2() {
  var input = [6, 10, 21, 14, -9, 46];
  console.log(getMaxElement(input));
  var actual = getMaxElement(input);
  var expected = 46;
  console.log(actual, expected, actual==expected,actual===expected);
  if (actual === expected){
  	console.log("Test passed")
  } else {
  	throw new Error("Test failed. Expected and actual results do not match")
  }

  //EnsureEquals(actual, expected);
}

Test2();

function Test3() {
  var input = [0, 0, 0, 0, 0, 0];
  console.log(getMaxElement(input));
  var actual = getMaxElement(input);
  var expected = 0;
  console.log(actual, expected, actual==expected,actual===expected);
  if (actual === expected){
    console.log("Test passed")
  } else {
    throw new Error("Test failed. Expected and actual results do not match")
  }

  //EnsureEquals(actual, expected);
}

Test3();

function Test4() {
  var input = [1];
  console.log(getMaxElement(input));
  var actual = getMaxElement(input);
  var expected = 1;
  console.log(actual, expected, actual==expected,actual===expected);
  if (actual === expected){
    console.log("Test passed")
  } else {
    throw new Error("Test failed. Expected and actual results do not match")
  }

  //EnsureEquals(actual, expected);
}

Test4();

function Test5() {
  var input = [999, -999];
  console.log(getMaxElement(input));
  var actual = getMaxElement(input);
  var expected = 999;
  console.log(actual, expected, actual==expected,actual===expected);
  if (actual === expected){
    console.log("Test passed")
  } else {
    throw new Error("Test failed. Expected and actual results do not match")
  }

  //EnsureEquals(actual, expected);
}

Test5();

function Test6() {
  var input = [999, 0999];
  console.log(getMaxElement(input));
  var actual = getMaxElement(input);
  var expected = 999;
  console.log(actual, expected, actual==expected,actual===expected);
  if (actual === expected){
    console.log("Test passed")
  } else {
    throw new Error("Test failed. Expected and actual results do not match")
  }

  //EnsureEquals(actual, expected);
}

Test6();

function Test7() {
  var input = [0999, 'ff'];
  console.log(getMaxElement(input));
  var actual = getMaxElement(input);
  var expected = 0999;
  console.log(actual, expected, actual==expected,actual===expected);
  if ((!isNaN(input.every)) && (actual === expected)){
          console.log("Test passed")
    } else {
      throw new Error("Test failed. Expected and actual results do not match or array contatins not only numbers")
  }

  //EnsureEquals(actual, expected);

}


Test7();

// function Test7() {
//   var input = ['ff', 0999];
//   console.log(getMaxElement(input));
//   var actual = getMaxElement(input);
//   var expected = 'ff';
//   console.log(actual, expected, actual==expected,actual===expected);
//   if (actual === expected){
//     console.log("Test passed")
//   } else {
//     throw new Error("Test failed. Expected and actual results do not match")
//   }

//   //EnsureEquals(actual, expected);
// }

// Test7();

function Test8() {
  var input = [, , ];
  console.log(getMaxElement(input));
  var actual = getMaxElement(input);
  var expected = undefined;
  console.log(actual, expected, actual==expected,actual===expected);
  if (actual === expected){
    console.log("Test passed")
  } else {
    throw new Error("Test failed. Expected and actual results do not match")
  }

  //EnsureEquals(actual, expected);
}

Test8();






function withValidation(sourceFn) {
  if (typeof sourceFn === 'function') {   
    var resultFn = 
     function () {
      if (arguments.length === sourceFn.length) {
        return sourceFn.apply(this, arguments);
      } else {
        throw new Error('Parameters number mismatch. Expected: ' + sourceFn.length + ', passed: ' + arguments.length);
      }
    }
    return resultFn;
  }
  return null;
}


var correctnessOfGetMaxElement = withValidation(getMaxElement);
//console.log(correctnessOfGetMaxElement(initialArray));
//console.log(correctnessOfGetMaxElement()); //will be an error
console.log(correctnessOfGetMaxElement([Array])); //will be an error
//console.log(correctnessOfGetMaxElement([45, 12, 35]));//45 will be max element
//console.log(correctnessOfGetMaxElement([45, 12, 35], []));//will be an error
//console.log(correctnessOfGetMaxElement([]));

var correctnessOfGetMaxItem = withValidation(getMaxItem);
//console.log(correctnessOfGetMaxItem(initialArray));
console.log(correctnessOfGetMaxItem([0, 9, 21, null]));//21 will be max element

// var obj = {}
// obj.readyFn = withValidation(new function () {});
// obj.readyFn();

// function Lion() {}
























































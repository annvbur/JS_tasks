/**
 * Created with IntelliJ IDEA.
 * User: Eugene
 * Date: 7/9/15
 * Time: 11:09 PM
 * To change this template use File | Settings | File Templates.
 */
function inspect() {
  var i;
  var parentEl = document.getElementById('parent');
  var childDivs = parentEl.children;

  for (i = 0; i < childDivs.length; i++) {
    childDivs[i].addEventListener('click', function () {
      console.log('Clicked the child elem #' + this.innerText);
    });
  }
}



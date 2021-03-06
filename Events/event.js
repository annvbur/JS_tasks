function drag(elementToDrag, event){
	var startX = event.clientX; 
	 //координаты указателя мыши, когда она кликнута по горизонтали
	var startY = event.clientY; // по вертикали
	var origX = elementToDrag.offsetLeft; // первоначальные координаты элемента, который будет перемещаться: отступ слева
    var origY = elementToDrag.offsetTop; // отступ сверху (в пикселях)
	var deltaX = startX - origX; // расстояние между mousedown  и верхним левым углом элемента
    var deltaY = startY - origY;

    document.addEventListener("mousemove", moveHandler, true);
    document.addEventListener("mouseup", upHandler, true);

    //event.stopPropagation(); // откл. дальнейшее распространение события
    //event.preventDefault(); // откл. действий по умолчанию

    function moveHandler(event) 
    { 
    // перемещаем элемент к текущей позиции курсора 
    var newXPosition = event.clientX - deltaX;
    elementToDrag.style.left = (newXPosition<0?0:newXPosition) +'px';

    var newYPosition = event.clientY - deltaY; 
    elementToDrag.style.top = (newYPosition<0?0:newYPosition) +'px'; 
    event.stopPropagation(); 
    } 

    function upHandler(event) 
    { 
    // отменяем регистрацию обработчиков 
    document.removeEventListener('mouseup', upHandler, true); 
    document.removeEventListener('mousemove', moveHandler, true); 
    event.stopPropagation(); 
	}
}



 




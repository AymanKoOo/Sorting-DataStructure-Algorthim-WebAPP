var button = document.createElement('button');
button.id='b';
button.width=200;
button.height=100;
button.style.display='block';
button.style.margin ='50px auto';
button.style.padding= '15px 32px';
button.textContent='Shuffle';
document.body.appendChild(button);

document.getElementById('b').onclick = function() {
    shuffle(arr);
    draw();
 }; 
///////////////////////////////////////////
var sort = document.createElement('button');
sort.id='s';
sort.width=200;
sort.height=100;
sort.style.display='block';
sort.style.margin ='50px auto';
sort.style.padding= '15px 32px';
sort.textContent='Sort';
document.body.appendChild(sort);
///////////////////////////////////////////
//Shuffle//

////
var myPageCanvas = document.createElement('canvas');
myPageCanvas.id = 'c';

myPageCanvas.width = 1200;
myPageCanvas.height = 400;
myPageCanvas.style.display='block';
myPageCanvas.style.margin ='50px auto';
myPageCanvas.style.border ='1px solid #d3d3d3';
document.body.appendChild(myPageCanvas);
///////////////
//Setting up canvas
canvas = document.getElementById('c');
ctx = canvas.getContext('2d');
///////////////
var arr = [];  //create empty array
var value =10;
for(var i = 0; i<= 65; i++){ //initialize the array
    arr.push(value);
    value+=5;
}

    
function swap(){
    var leftID = document.getElementById('1');
    var rightID = document.getElementById('2');
    leftSRC = leftID.src;
    rightSRC = rightID.src;
    leftID.src=rightSRC;
    rightID.src = leftSRC;
}


function draw(r1,r2,r3){
        var width = 16;
        var currX = 10;
        var j=0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);   
        for(var i = 0; i <= arr.length; i++){
            
            //Insertion Sort//
            //if(i==r1||i==r1+1){
            //    ctx.fillStyle = 'red';
            //}

            //Selection Sort//
            if(i==r1||i==r2){ctx.fillStyle='red';}
            else if(r3==i){ctx.fillStyle='green';}
            else  ctx.fillStyle = 'blue';
            
            //Buble Sort//

            var h = arr[i];
            ctx.font = 'bold 10px serif';
            ctx.fillText(arr[i], currX , canvas.height - (h + 16) );
            
            ctx.fillRect(currX, canvas.height - (h+12), width, h);
            ctx.fillText(i+1, currX, canvas.height - (2) );
            currX += width + 2;
            j++;
        }
    }

    ////////Insertion Sort////////////
    function* insertion_sort(arr){
        var temp; 
        var k=0;
           for(var i=0;i<arr.length;i++){
            draw(i,1);
            yield 1;
            for(var j=i+1;0<j;j--){
                if(arr[j-1]>arr[j]){
                    temp = arr[j];
                    arr[j]=arr[j-1];
                    arr[j-1]=temp;
                    draw(j-1,1);
                    yield 2; // pause here
                }
                else break;
            }
        }
    }
    ///////////////////////////////////
    //4 6 2 1 8
    /////////Selection Sort///////////////
    function* selection_sort(arr){
    var min;
    var temp;
    var j=1; 
    for(var i=0;i<arr.length-1;i++){
    min=i;
    draw(min,j,i); 
    yield 1;
    for(j=i+1;j<arr.length;j++){   
     document.getElementById('text').innerHTML=arr[min];
        if(arr[min]>arr[j]) min=j;
        draw(min,j,i); 
        yield 2; // pause here
    }
    
    temp = arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
    }
    }
    ////////////Buble Sort/////////////////////////
    //4 6 2 1 8
    function* bubble_sort(arr){
        var i=0,j=1,temp,max;
        //max=arr.length-1;
        var n=arr.length;
        max=arr.length-1;  
        draw(i,j,max);
        yield 1;
        for(i=0; i<(n-1); i++)
        {
            for(j=0; j<(n-i-1); j++)
            {
                if(arr[j]>arr[j+1])
                {
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    draw(j,j+1,max);
                    yield 1;
                }
            }
            max=max-1;
        }
    
    }
    ////////////Quick Sort////////////////////////
    function* quick_sort(arr){
        

    }
    
    function partion(arr,left,right){


    }


    //////Animation//////
    document.getElementById('s').onclick = function() {
        var sort = bubble_sort(arr);
        var i=0;
        // an anim function triggered every 60th of a second
        function anim(){
            sort.next();
            i++;
           }   
       var animation = setInterval(anim,1);
       if(i>arr.length)clearInterval(animation);
    };
    ////////////////////
  /////////////////Shuffle///////////////

function shuffle(array) {//shuffles the array
      swap();
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
     }
     return array;
}






        
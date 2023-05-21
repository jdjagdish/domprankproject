// select the button

let btn = document.getElementById('btn');
//added the event listner
btn.addEventListener('click',function(e){
    console.log(e.target);
    
})

// select the small

let small = document.getElementById('small');
//added the event listner
small.addEventListener('click',function(e){
    console.log(e.currentTarget);
})

// select the big

let big = document.getElementById('big');
//added the event listner
big.addEventListener('click',function(e){
    console.log(e.currentTarget);
})


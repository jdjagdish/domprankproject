let yesbtn =  document.getElementById('yes')
let nobtn =  document.getElementById('no')


yesbtn.addEventListener('click',handler);
nobtn.addEventListener('click',handler);


function handler(e)
{
    let answer = e.target.innerHTML;
    console.log(answer);
    window.alert("Your have selected "+ answer)
}

//changing no to yes


nobtn.addEventListener('mouseover',function(e){
    nobtn.innerHTML = "Yes";
    yesbtn.innerHTML = "No";
})

nobtn.addEventListener('mouseout',function(e){
    nobtn.innerHTML = "No";
    yesbtn.innerHTML = "Yes";
})
//
// var r=10;
// var S=Math.PI*Math.pow(r,2);
// console.log(S); 

//Date

var date= new Date().getHours();
console.log(date);

if (date>=6 && date<12 ) {
    document.body.style.backgroundColor="aquablue"
    alert('Good Morning')
}
else if (date>=12 && date<18 ) {
    document.body.style.backgroundColor="orange"
    alert('Good Afternoon')
}
else if (date>=18 && date<24 ) {
    document.body.style.backgroundColor="gray"
    alert('Good Evening')
}
else{
    document.body.style.backgroundColor="black"
    alert('Good Night')
}
let age = parseInt(prompt("Please enter your age!"));
alert('You are ' + age + ' years old!');
if(age <= 0){
    age = 0;
}
if (age < 18) {
    alert('“hm, come back with dad”');
}else if (18 < age  && age< 21) {
    document.getElementsByClassName('hidden')[0].style.display="block";
    alert('“nearly, but not yet bro!”');
}else {
    alert('“welcom to the club!”');
    document.getElementsByClassName('hidden')[0].style.display="block";

}
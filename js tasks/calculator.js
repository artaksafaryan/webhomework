let count = 0;
while(true){
let  my_number = parseFloat(prompt('enter the first number'));
if(!my_number || my_number == NaN){
    break;
}
count += my_number; 
alert('The count number is' + count);
}
alert('The count number is' + count);

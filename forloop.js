// for loop
for(let i=0;i<=9;i++){
    if (i==5){
        break;
    }
    console.log(i);
}
console.log("Next Loop")
for(let i=0;i<=9;i++){
    if (i==5){
        continue;
    }
    console.log(i);
}
function printNumes(){
    console.log();
    setTimeout(function(){ console.log(2);}, 1000); 
    setTimeout(function(){ console.log(3);}, 0);
    console.log(4);
}

printNumes();
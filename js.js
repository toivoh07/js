function func(prevPrevNum, prevNum){
    
    prevPrevNum = prevNum;
    prevNum = result;
    func(prevPrevNum,prevNum);

return result;  
}

 console.log(func(1, 2));
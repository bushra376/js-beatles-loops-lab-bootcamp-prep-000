//CODE
function theBeatlesPlay(arrMusicians, arrInstruments){
  var array = [];
  for(var count=0; count<arrMusicians.length;count++){
    array.push(arrMusicians[count]+" plays "+arrInstruments[count])
  }
  return array;
}
function johnLennonFacts(arrFact){
  var size = 0;
  while(size < arrFact.length-1){
    var fact = arrFact[size];
    arrFact[size] = fact + "!!!";
    /*
    arrFact[size].push("!!!"); //= "arrFact[size]+"!!!" ";
    //arrFact
    */
    size++;
  }
  return arrFact;
}

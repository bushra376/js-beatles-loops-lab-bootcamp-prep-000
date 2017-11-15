//CODE
function theBeatlesPlay(arrMusicians, arrInstruments){
  var array = [];
  for(var count=0; count<arrMusicians.length;count++){
    array.push(arrMusicians[count]+" plays "+arrInstruments[count])
  }
  return array;
}

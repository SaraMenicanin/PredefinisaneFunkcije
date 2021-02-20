//task 1
var name="Lorem ipsum dolor sit amet";
console.log(name.toLowerCase())
//task 2
var name="Lorem ipsum dolor sit amet";
var st=name.indexOf("sit")>-1;
if(st == true){

}console.log("in this string exist a world sit")
//task 3
var name="Lorem ipsum dolor sit amet";
console.log(name.length-1)

//task 4
var name="Lorem ipsum dolor sit amet";
var result=name.split(" ");
var newResult=[];
for(let i=0;i<3;i++){
	newResult[i]=result[i];
}
console.log(newResult)
// task 5 
var name="Piter is an actor.";
var newName=name.replace(/o/, "e"
	)
console.log(newName)
// task 6
var someData = [34, 23, 14, 56, 23, 44, 65];
var newData=someData.splice(3,1);
console.log(someData)
// task 7
var someData=[34,23,14,56,23,44,65];
var newDataArray=someData.shift();
function moveIndex(array,oldIndex,newIndex){
  if(newIndex>array.length){
    var j=newIndex-array.length+1;
    while(j--){
      array.push(undefined);
    }
  }
  array.slice(newIndex,0,array.slice(oldIndex,1)[0]);
  return array;
}
console.log(moveIndex(someData,3,5));
//task 8
function prepakuj(param) {
	arrayReturn=[];
	var i;
	for (var i = 0; i <param.length; i++) {
	if(i===0){
		arrayReturn.push(param[i]);
	}
if(i>0){
	arrayReturn[i]=param[i]-param[i-1];
	}
}
 return arrayReturn;
}
var array=prepakuj([334,233,212,199,154,122]);
console.log(array);
// task 9
var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
]
function over(array) {
	array.forEach (function(item){
		item.avgGrade= item.avgGrade.toFixed(2)})
	return array.filter(function(item){
		return item.avgGrade>8.5;})
}


var newData=(over(students));

console.log(newData)

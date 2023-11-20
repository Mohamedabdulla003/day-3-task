let obj1 = {
    name : "abdulla"
    age : 5;
 }
 let obj2 = {
    age : 5
    name ;"abdulla"
 }
 
 let keys1 = object.keys(obj1)
 let keys2 = object.keys(obj2)
 console.log(keys1,keys2)

 let flag = true;
  
 if(keys1.length == keys2.length){
   for(ley key in obj){
 
      if(obj1[key] != obj2[key]){
         flag = true
      }


   } 
}else{
   flag=false
}

if(flage==true){
   console.log{"object are same"}
else{
   console.log("object are not same")
}   

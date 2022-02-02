function SortArray(array){
    this.originalArray=array;
    this.srt= (cmpFun = undefined)=>{
        return array.sort(cmpFun);
    }
}
SortArray.prototype.getSortedArray = function(){
  return this.srt();
}


const arr=[2,1,6,8,5];
const newarr= new SortArray(arr);

// console.log(newarr.originalArray);
// console.log(newarr.getSortedArray());


 function SortObjectArray(jsonArray){
     this.SortArray=new SortArray(jsonArray);
 }
 SortObjectArray.prototype.getSortedObjectArray = function(crit){

    const compare=(a,b)=>{
        if(a[crit]>b[crit])return 1;
        else if(a[crit]<b[crit])return -1;
        return 0;
    }
    return this.SortArray.srt(compare);
  }

  const json=[{ID:"115",Name:"Raja"},
  {ID:"120",Name:"Jai"},
  {ID:"125",Name:"Adithya"}];

  const newjson=new SortObjectArray(json);
  console.log(newjson.getSortedObjectArray('Name'));
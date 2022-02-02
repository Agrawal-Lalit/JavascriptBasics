const groupObjectsBy =(jsonArray, key)=>{

     return jsonArray.reduce((jar,obj)=>{
        if( !jar[obj[key]]) jar[obj[key]]=[];    //jar.obj[key]!= jar[obj[key]] ??
        jar[obj[key]]=[obj ,...jar[obj[key]]];
        return jar;
    },{});

    // You cannot add a new property to an object 
    // constructor the same way you add a new property to an existing object:

    // const map= jsonArray.reduce((jar,obj)=>{
    //     if(  ! jar.has(obj[key]))
    //     jar.set(obj[key],[]);
    //     jar.set(obj[key],[obj ,...jar.get(obj[key])]);
    //     return jar;
    // },new Map());

    // let json={};
    // map.forEach((val,key) => {
    //     json[key]=val;
    // });
    // return json;
}

console.log(groupObjectsBy([
    {channel:"A",name:"elex"},
    {channel:"B",name:"elex"},
    {channel:"C",name:"elex"},
    {channel:"A",name:"elex"}
],'channel'));
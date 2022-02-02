   function MetadataParser(){
    this._version="hello",
    this._channel="world",
    this._keyField="watsupp"

};
MetadataParser.prototype.getChannel=function(){return this._channel};
MetadataParser.prototype.getVersion=function(){return this._version};
MetadataParser.prototype.getKeyField=function(){return this._keyField};
MetadataParser.prototype.setChannel=function(_channel){this._channel=_channel};
MetadataParser.prototype.setVersion=function(_version){this._version=_version};
MetadataParser.prototype.setKeyField=function(_keyField){this._keyField=_keyField};

class getKeyFields{
    getKeys(jsonArray){
        return jsonArray.reduce((keys, jsonObj)=>{
            // console.log(jsonObj);
            keys.push(jsonObj['_keyField']); 
            return keys;
        },[]);
    }
};

const d=new getKeyFields();
const arr=[{_keyField:'Tarun'},{_keyField:'Lalit'},{_keyField:'Tavish'}];
console.log(d.getKeys(arr));

// const data=new MetadataParser();
// console.log(data._version);
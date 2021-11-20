var object = {"a":{"b":{"c":"d"}}};
function getValueByObjectKeys(object, key) {
    var keys = key.split('/');
    var obj = object;
    for (var ikey of keys) {
        for (var [objKey, value] of Object.entries(obj)) {
            if(!keys.includes(objKey)) {
                continue;
            }
            obj = value;
        }
    }
    return obj;
}

console.log("value:", getValueByObjectKeys(object, 'a/b/c'));

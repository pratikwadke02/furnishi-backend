
const isNumeric = (n) => {
    if(typeof n !== "string") return false;
    return !isNaN(n) && !isNaN(parseFloat(n));
}

exports.parseData = (assistantUser, orderList) => {
    // console.log("a: ", assistantUser);
    // console.log("o: ", orderList);
    const inputKeys = Object.keys(assistantUser.dataValues);
    // console.log("inputKeys: ", inputKeys);
    const parsedObject = {};
    inputKeys.forEach(item => {
        if(isNumeric(assistantUser[item]) && parseInt(assistantUser[item], 10) === 1){
            parsedObject[item] = orderList[item];
        }else{
            parsedObject[item] = null;
        }
    });
    console.log("parsedObject: ", parsedObject);
    return parsedObject;
}

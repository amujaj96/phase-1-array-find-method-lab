// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function callBack(record){
    return record.result === "W"
  }
 
  function superbowlWin(record) {
    const findRecord = record.find(callBack)
    console.log(findRecord)
    if(findRecord == undefined){
    return findRecord}
    else {
        return findRecord.year
    }
}
const data = [
    { id: 1, json: "data1" },
    { id: 2, json: "data2" }
]
function fetchData() {
    setTimeout(() => {
        let res = "";
        data.forEach((e) => {
            res += e.json + " ";
        })
        console.log(res)
    } , 2000)
}
async function postData(newData) { 
   await setTimeout(() => {
      data.push(newData)
   }, 1000);  
   
}
const data3 = {id:3, json:" data 3"}
postData(data3).then(fetchData).catch((err)=>console.log(err));
function showData(num){
    console.log(num)
}








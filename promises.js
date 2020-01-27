
const data = [];
function postData(newData) {
    //data.push(newData);
    return new Promise((resolve, reject) => {
        if (data.length == 1) {
            resolve("Jag fick data av new Data");
        }
        reject("Jag fick inte nån data");
    })
}

postData()
    .then((message) => console.log(message))
    .catch((errMsg) => console.log(errMsg))
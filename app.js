const os = require('os');
const currenOS={
    name : os.type(),
    release : os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()

};
console.log(currenOS);
const makeAPromise = () => new Promise((resolve, reject)=> {
    const random = Math.random();
    if(random > 0.5){
        console.log(this);
        resolve();
    }
    else{
        reject();
    }
})

makeAPromise().then(()=>{
    console.log("Resolved");
}).catch(()=>{
    console.log("Rejected");
})

const fakeRequest = (url) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const rand = Math.random();
            if(rand < 0.3){
                reject({statusCode : 404});
            }
            else{
                const pages = {
                    '/users' : [{
                        id : 1, username : 'Bilbo'
                    }, {
                        id : 5, username : "Arpit"
                    },
                    
                ],'/about' : "Hehe"
                }
                const data = pages[url];
                if(data){
                    resolve({status : 200, data});
                }
                else{
                    reject({status : 404})
                }
            }
        }, 3000);
    })
}

fakeRequest('/hehe').then((res)=> {
    console.log(res);
    console.log("REQUEST WORKED");
}).catch((data)=> {
    console.log(data.statusCode);
    console.log("REQUEST FAILED");
})
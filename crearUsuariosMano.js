function randomFromArray(arr){
    const num = Math.random()* arr.length
    const numINt = Math.floor(num)
    return arr[numInt]
}

randomFromArray (["a", "b"])

function createUser(){
    const pre = ['hyper','super','ultra','mega']
    const name =['cat','dog','bird', 'fish','lion', 'wolf','fox']
    const post = Math.floor(Math.random() * 9999)
    const username = randomFromArray(pre)
}

const users = [];
//for (let i = 0; i < 500; i++)
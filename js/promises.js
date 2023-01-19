console.log("===========Callback Hell Problem is solved with Promises!=============")

// Callback Hell Problem is solved with Promises!


/*
    In JavaScript, a promise is an object that returns a value which you hope to receive in the future, but not now.
    Has three states:
    1. Pending: initial state, neither fulfilled nor rejected
    2. Fulfilled: meaning that the operation was completed successfully
    3. Rejected: meaning that the operation failed
*/

console.log("===Promise based function===")

// // Promise based function

// function downloadSong(songName){
//     console.log(`Searching for ${songName} in our database...`)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (songName.length > 5){
//                 resolve(`${songName}.mp4`)
//             } else {
//                 reject(`${songName} is not valid`)
//             }
//         }, 3000)
//     })
// }

// let mySong = downloadSong('Mrs. Robinson');
// console.log(mySong);




// downloadSong('Yesterday').then(s => console.log(`We are now playing ${s}`))

// downloadSong('Halo').then(playSong).catch(e => console.warn(e))  
// // s => console.log(`We are now playing ${s}`))
// // ^^ the above was originally in the code. I replaced it with "playSong" to match Brian's 
// // ^^ screen. 

// function playSong(songFile){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(`${songFile} is playing...`)
//         }, 2000)
//     })
// }


// downloadSong('ABC')
//     .then((s) => {
//         console.log(`${s} has downloaded`)
//         return playSong(s)
//     })
//     .then(message => console.log(message))
//     .catch(err => console.warn(err))


console.log("==========Real Life Example==============")

// // Real Life Example
// // Get the price of a user's orders based on user_id
// // userId -> user -> user's orders -> calculate order total


function getUser(userId){
    return new Promise((resolve, reject) => {
        console.log(`Searching for user #${userId} in database...`)
        setTimeout(() => {
            // Set up some fake rule for if a user does not exist
            if (userId >= 100){
                let user = {
                    id: userId,
                    username: 'johnqsample'
                }
                resolve(user)
            } else {
                reject(`No user with id #${userId}`)
            }
        }, 2000)
    })
}


function getUserOrder(user){
    console.log(`Getting the orders for ${user.username}`)
    return new Promise((res, rej) => {
        setTimeout(()=>{
            if (user.id > 150){
            let orders = [
                {prodName: 'Computer', price: 897.50},
                {prodName: 'Water Bottle', price: 12.99},
                {prodName: 'Picture Frame', price: 8.99},
            ]
            res(orders);
        } else {
            res('This user has no orders');
        }
        }, 2000)
    })
}

function getOrderTotal(order){
    return new Promise((res, rej) => {
        console.log("Calculating order total:...")
        setTimeout(() => {
            let total = 0
            order.forEach(p => total += p.price)
            res(total)
        }, 1000)
    })
}

function getUsersTotalFromUserId(userId){
    getUser(userId)
        .then(user => getUserOrder(user))
        .then(order => getOrderTotal(order))
        .then(total => console.log(`Your total is $${total}`))
        .catch(err => console.warn(err))
}


console.log("=========Async / Await -- allows us to write our code to look more synchronous.===============")

// Async / Await -- allows us to write our code to look more synchronous. 
//  * It is simply syntactical sugar for Promises*


function getUsersTotalFromUserId(userId){
    getUser(userId)
        .then(user => getUserOrder(user))
        .then(order => getOrderTotal(order))
        .then(total => console.log(`Your total is $${total}`))
        .catch(err => console.warn(err))
}

// What it would look like in Python (synchronous)
// def get_user_total_from_id(user_id):
//     user = getUser(userId)
//     order = getUserOrder(user)
//     total = getOrderTotal(order)
//     print(f"Your total is ${total}")

async function getUserTotal(userId){
    try{
        let user = await getUser(userId);
        let order = await getUserOrder(user);
        let total = await getOrderTotal(order);
        console.log(`Your total is $${total}`)
    } catch(err) {
        console.warn(err)
    }
}


console.log("====EXTRA!!====")
// EXTRA!!
let arrowUserEx = async (id) => {
    let user = await getUser(id);
    return user
}

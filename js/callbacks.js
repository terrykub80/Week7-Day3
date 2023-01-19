
// console.log('Callbacks!!!!!!!!!')

console.log("=====JavaScript Callbacks========")
// /*
//     JavaScript Callbacks
// */

// function filter(anArray){
//     let output = [];
//     for (let element of anArray){
//         if (element % 2 !== 0){ // Logic that determines if num is odd
//             output.push(element);
//         };
//     };
//     return output;
// }

// let numbers = [5, 10, 15, 20, 25, 30];
// console.log(filter(numbers));


console.log("=====Create a function to filter out based on any true condition from a function========")
// // Create a function to filter out based on any true condition from a function

// function filterWithCallback(anArr, callbackFn){
//     let output = [];
//     for (let element of anArr){
//         if (callbackFn(element)){ // Logic that determines if element should be filtered
//             output.push(element);
//         };
//     };
//     return output;
// }

// function isEven(num){
//     return num % 2 === 0
// }

// console.log(filterWithCallback(numbers, isEven));

// function cName(name){
//     return name[0].toUpperCase() === 'C'
// }


// console.log(filterWithCallback(['Chicago', 'Boston', 'Chattanooga', 'Charlotte', 'Nashville'], cName));


// // isEven and cName are considered callback functions (because they are functions passed into another function as an argument to be executed later)
// // filterWithCallback is considered a higher-order function (because it accepts a function as an argument)


// // Often you will see callback function written right into argument
// console.log(filterWithCallback(numbers, function(num){
//     return num % 10 === 0;
// }))

// // More so with arrow functions
// console.log(filterWithCallback(numbers, num => num % 10 === 0))


console.log("======Async Example=======")
// // Async Example

// function first(){
//     console.log('First started')
//     setTimeout(function(){
//         console.log('First')
//     }, 3000)
// };


// function second(){
//     console.log('Second started')
//     console.log('Second')
// };


// first();
// second();


console.log("======Real Life Example=======")
// Real Life Example

// You have a function that will take in a 
// song name, download the song, and then play the downloaded song

// function downloadSong(songName){
//     console.log(`Downloading '${songName}'...`)
//     setTimeout(() => {
//         console.log('Finished Downloading')
//         return songName
//     }, 3000)
// };


// function playSong(songName){
//     let song =  downloadSong(songName);
//     console.log(`'${song}' is playing`)
// };

// playSong('Let it be')

console.log("======Fix the Issue with Callbacks!!=======")
// // Fix the Issue with Callbacks!!

// function downloadSong(songName, callback){
//     console.log(`Downloading ${songName}...`)    
//     setTimeout(() => {
//         // Script to download the song
//         console.log(`Finished downloading ${songName}`)
//         // Execute callback once finished downloading
//         callback(songName)
//     }, 3000)
// }

// function playSong(song){
//     console.log(`${song} is playing`)
// }

// downloadSong('Let It Be', playSong);
// downloadSong('Fight Music', playSong);



console.log("======Handling Errors=======")

// Handling Errors

function downloadSong2(songName, callbackSuccess, callbackFail){
    console.log(`Searching for ${songName} in our database...`)
    setTimeout(() => {
        // Simulate a valid song choice
        let song;
        if (songName.length > 5){
            callbackSuccess(songName)
        } else {
            callbackFail(songName)
        }
    }, 3000)
}

let mySong = 'ABC123'

downloadSong2(
    mySong, 
    s => console.log(`${s} has successfully downloaded and is now playing`), 
    s => console.log(`${s} is not a valid song choice`)
);

// // function openpage(){
// //     const newpage = document.getElementById("newpage");
    
// //     newpage.classList.toggle("active");
   
// // }
// // console.log("welcome to spotify")
// // let songIndex=0;
// // let audioElement= new Audio('1.mp3');
// // let masterPlay=document.getElementById('masterPlay');
// // let myProgressBar=document.getElementById('myProgressBar');
// // let songs=[
// //     {SongName:"kissik", filePath:"C:\Users\MANOHAR ERAVENI\OneDrive\Music\song1.mp3"},
// //     {SongName:"kissik", filePath:"music/2.mp3"},
// //     {SongName:"kissik", filePath:"music/3.mp3"},
// //     {SongName:"kissik", filePath:"music/4.mp3"},
// //     {SongName:"kissik", filePath:"music/5.mp3"}
// // ]
// // // let audioElement=new Audio('1.mp3')
// // masterPlay.addEventListener('click',()=>{
// //     if(audioElement.paused || audioElement.currentTime<=0){
// //         audioElement.play();
// //     }
// // })
// // myProgressBar.addEventListner('timeupdate',()=>{
// //     console.log('timeupdate ')
// // })
// // Array of audio files
// const audioFiles = [
//     { title: "kissik", file: "C:\Users\MANOHAR ERAVENI\OneDrive\Music\song1.mp3" },
//     { title: "Aasa koda", file: "Aasa koda.mp3" },
//     { title: "Third Song", file: "ThirdSong.mp3" },
// ];

// let currentAudio = null; // To keep track of the currently playing audio
// let currentIndex = -1; // To keep track of the current song index

// // Function to play a song
// function playSong(index) {
//     // Stop the currently playing audio if there is one
//     if (currentAudio) {
//         currentAudio.pause();
//         currentAudio.currentTime = 0; // Reset to the beginning
//     }

//     // Create a new audio object for the selected song
//     currentAudio = new Audio(audioFiles[index].file);
//     currentAudio.play();
//     currentIndex = index; // Update the current index

//     // Optional: Add event listener to play the next song when current song ends
//     currentAudio.addEventListener('ended', playNext);

//     console.log(`Playing: ${audioFiles[index].title}`);
// }

// // Function to play the next song
// function playNext() {
//     if (currentIndex < audioFiles.length - 1) {
//         playSong(currentIndex + 1);
//     } else {
//         // Optionally loop back to the first song
//         playSong(0);
//     }
// }

// // Function to play the previous song
// function playPrevious() {
//     if (currentIndex > 0) {
//         playSong(currentIndex - 1);
//     } else {
//         // Optionally loop to the last song
//         playSong(audioFiles.length - 1);
//     }
// }

// // Function to toggle play/pause
// function togglePlayPause() {
//     if (currentAudio && !currentAudio.paused) {
//         currentAudio.pause();
//         console.log("Paused");
//     } else {
//         if (currentIndex === -1) {
//             playSong(0); // Start playing the first song if none is playing
//         } else {
//             currentAudio.play();
//             console.log("Resumed");
//         }
//     }
// }

// // Add event listeners to SVG buttons
// const playButton = document.querySelector('#masterPlay');
// const forwardButton = document.querySelector('.farwardbutton');
// const backwardButton = document.querySelector('.backwardbutton');

// playButton.addEventListener('click', togglePlayPause);
// forwardButton.addEventListener('click', playNext);
// backwardButton.addEventListener('click', playPrevious);

  

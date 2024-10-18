// const text = "I'm a learning UX practitioner who loves to organize things and make them sensible.";
// const targetWord = "sensible."; // The word to highlight
// let index = 0;
// let targetIndex = 0; // Track the position within the target word
// let currentSpeed = 50; // Initial typing speed
// const typingText = document.getElementById("typing-text");

// function typeWriter() {
//     if (index < text.length) {
//         const currentChar = text.charAt(index);

//         var a = text.slice(index, index + targetWord.length - targetIndex);
//         var b = targetWord.substring(targetIndex, targetWord.length);

//         if (targetIndex != targetWord.length && text.slice(index, index + targetWord.length - targetIndex) == targetWord.substring(targetIndex, targetWord.length)) {
//             typingText.innerHTML += "<span class=\"highlight\">" + targetWord.charAt(targetIndex) + "</span>";
//             targetIndex++;
//         } else {
//             typingText.innerHTML += currentChar;
//         }

//         index++;

//         // Gradually speed up the typing speed
//         if (currentSpeed > 50) {
//             currentSpeed -= 2;
//         }

//         setTimeout(typeWriter, currentSpeed); // Call typeWriter after currentSpeed milliseconds
//     }
// }

// // Trigger the typewriter effect after the page is loaded
// document.addEventListener("DOMContentLoaded", function() {
//     typeWriter();
// });

const text = "I'm a learning UX practitioner who loves to organize things and make them ";
const targetWords = [
    { word: "sensible", style: "highlight" }, 
    { word: "creative", style: "highlight-creative" }, 
    { word: "fun", style: "highlight-fun" }
]; 
let currentTargetWordIndex = 0; // Index to track the current target word
let index = 0; // Index to track the position in the text
const typingText = document.getElementById("typing-text");
const currentSpeed = 100; // Initial typing speed

// Function to type out the current target word
function typeWord() {
    if (index < targetWords[currentWordIndex].word.length) {
        // Append the next character of the target word with styling
        typingText.innerHTML += `<span class="${targetWords[currentWordIndex].style}">${targetWords[currentWordIndex].word.charAt(index)}</span>`;
        index++;
        setTimeout(typeWord, currentSpeed);
    } else {
        // Once the word is fully typed, start deleting it
        setTimeout(deleteWord, currentSpeed * 2); // Pause before deleting
    }
}

// Function to delete the current target word character by character
function deleteWord() {
    if (index > 0) {
        // Remove the last character of the target word
        typingText.innerHTML = typingText.innerHTML.slice(0, -1);
        index--;
        setTimeout(deleteWord, currentSpeed);
    } else {
        // Move to the next word and reset index
        currentWordIndex = (currentWordIndex + 1) % targetWords.length; // Loop through target words
        index = 0; // Reset index for the new word
        setTimeout(typeWord, currentSpeed); // Type the next word
    }
}

// Start the typing effect after the page has loaded
document.addEventListener("DOMContentLoaded", function() {
    typeWord();
});
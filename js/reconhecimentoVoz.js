const numChute = document.getElementById('chute')

/* This line of code is checking if the `SpeechRecognition` object is available in the `window` object.
If it is not available, it is checking if the `webkitSpeechRecognition` object is available instead.
It is assigning the available object to the `window.SpeechRecognition` property, which allows the
code to use the `SpeechRecognition` object regardless of the browser being used. */
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

/* This code initializes a new instance of the `SpeechRecognition` object and sets the language to
Portuguese (Brazil). It then starts the speech recognition process, which listens for and
transcribes the user's speech input. */
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

/* `recognition.addEventListener('result', onSpeak)` is adding an event listener to the `recognition`
object that listens for the 'result' event, which is fired when speech recognition detects a result.
When the 'result' event is detected, the function `onSpeak` is executed, which takes in the speech
recognition event and uses the recognized transcript to display and verify a number guess. */
recognition.addEventListener('result', onSpeak);

/**
 * The function "onSpeak" takes in a speech recognition event and uses the recognized transcript to
 * display and verify a number guess.
 * @param e - The parameter "e" is an event object that is passed to the function "onSpeak". It
 * contains information about the speech recognition event, such as the recognized speech transcript
 * and other metadata.
 */
function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeNum(chute);
    verificaChute(chute);
};

/**
 * The function "exibeNum" displays a user's input on a webpage.
 * @param chute - The parameter "chute" is a variable that represents the user's input or guess in a
 * game or program. The function "exibeNum" takes this input and displays it on the screen in a
 * formatted way using HTML and CSS.
 */
function exibeNum(chute){
    numChute.innerHTML =`<div>Você disse:</div>
                         <span class="box">${chute}</span>`
};

/* This line of code is adding an event listener to the `recognition` object that listens for the 'end'
event, which is fired when speech recognition stops. When the 'end' event is detected, the arrow
function is executed, which calls the `start()` method on the `recognition` object to restart speech
recognition. This allows the user to continue speaking without having to manually restart the speech
recognition process. */
recognition.addEventListener('end', () => recognition.start());
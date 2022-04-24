import "./style.css";

// init recognition
const speechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = "en-US";

recognition.onresult = function (e) {
    document.getElementById("transcript").value = e.results[0][0].transcript;
    recognition.stop();
    // document.getElementById('labnol').submit();
};

recognition.onerror = function (e) {
    recognition.stop();
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    console.log("click");
    btn.innerHTML = "clicked";
});

const microphoneButton = document.querySelector("#microphone-img");
microphoneButton.addEventListener("click", startDictation());

const startDictation = () => {
    console.log("listening");

    microphoneButton.removeEventListener("click", startDictation);
    microphoneButton.addEventListener("click", stopDictation);

    recognition.start();
};

const stopDictation = () => {
    console.log("stop listening");

    microphoneButton.removeEventListener("click", stopDictation);
    microphoneButton.addEventListener("click", startDictation);
};

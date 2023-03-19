let inputText = document.querySelector("[name='input-text']");
let outputText = document.querySelector("[name='output-text']");
let btnTranslate = document.querySelector("#btn-translate");

let serverURl = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(inputValue) {
    return serverURl + "?" + "text=" + inputValue;
}

function errorHandler (error) {
    console.log("error occured", error)
    alert("error occured")
}

function clickHandler() {
    let inputValue = inputText.value;

    fetch(getTranslationURL(inputValue))
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated;
        outputText.innerHTML = translatedText;
    })
    .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickHandler);
function generatePoem() {
    let keyword = document.getElementById('keyword').value;
    document.getElementById('result').innerHTML = 
        `Tumne likha: ${keyword}<br><br>AI soch raha hai...<br>Dil ki baat ${keyword} hai<br>Har saans me ${keyword} hai<br>Teri yaad ${keyword} hai<br>Yehi ishq ${keyword} hai`;
}async function generatePoem() {
    let keyword = document.getElementById('keyword').value;
    let resultDiv = document.getElementById('result');
    
    if(keyword === "") {
        alert("Pehle koi lafz likho yaar!");
        return;
    }
    
    resultDiv.innerHTML = "AI soch raha hai... 🌙";
    
    let prompt = `Write 4 lines of Urdu poetry about ${keyword} in Roman Urdu`;
    
    let response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({inputs: prompt})
    });
    
    let data = await response.json();
    let poem = data[0].generated_text;
    
    resultDiv.innerHTML = `<b>AI Ghazal on "${keyword}":</b><br><br>${poem.replace(prompt, '')}`;
}function generatePoem() {
    let keyword = document.getElementById('keyword').value;
    let resultDiv = document.getElementById('result');
    
    if(keyword === "") {
        alert("Pehle koi lafz likho yaar!");
        return;
    }
    
    let sherList = [
        `${keyword} teri yaad me khoya rehta hun`,
        `Har pal tera hi naam leta hun`,
        `${keyword} bin jeena mushkil hai`,
        `Tere bina ye dil akela hai`
    ];
    
    let poem = sherList.join('<br>');
    resultDiv.innerHTML = `<b>AI Ghazal on "${keyword}":</b><br><br>${poem}`;
    speakPoem(poem);
}

function speakPoem(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'hi-IN';
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
}

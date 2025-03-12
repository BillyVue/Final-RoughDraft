
function showrules(){
    let rul = document.getElementById("finalrules");
    if (rul.style.display == "none"){
        rul.style.display = "block"
    }
    else{
        rul.style.display = "none"
    }
}

function showShare(){
    let rul = document.getElementById("QRcode");
    if (rul.style.display == "none"){
        rul.style.display = "block"
    }
    else{
        rul.style.display = "none"
    }
}

function showMode(){
    let rul = document.getElementById("gameMode");
    if (rul.style.display == "none"){
        rul.style.display = "block"
    }
    else{
        rul.style.display = "none"
    }
}

function hideInnocent(){
    let inn = document.getElementById("discuss");
    inn.style.display = "none";
}

function hideImposter(){
    let inn = document.getElementById("discuss2");
    inn.style.display = "none";
}
let counter = 0;
function tester(){
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let j = [data[trys = localStorage.getItem('trys')]]
        console.log(data)
        const promptOne = document.getElementById('prompt1');
        const promptTwo = document.getElementById('prompt2');
        const promptThree = document.getElementById('prompt3');
        j.forEach(item => {
            const card = document.createElement('section');
            card.innerHTML = `<h2>${item.prompt}</h2>`;
            // card.style = 'display: block';
            if (counter == 0){
                promptOne.appendChild(card);
            }
            if (counter == 1){
                promptTwo.appendChild(card);
            }
            if (counter == 2){
                promptThree.appendChild(card);
            }
            console.log(card)
        });
    })
    .catch(error => console.error('Error loading the data:', error));
}
function next(){
    trys = localStorage.getItem('trys');
    trys++;
    localStorage.setItem("trys", trys);
    counter = counter + 1;
    tester();
    if (counter == 1){
        document.getElementById('questionbox').style.display = "none";
        document.getElementById('questionbox2').style.display = "block";
        document.getElementById('prompt1').style.display = "none";
        document.getElementById('prompt2').style.display = "block";
        document.getElementById('imposterPlaceholder1').style.display = "none";
        document.getElementById('imposterPlaceholder2').style.display = "block";
    }
    if (counter == 2){
        document.getElementById('questionbox2').style.display = "none";
        document.getElementById('questionbox3').style.display = "block";
        document.getElementById('nextButton').style.display = "none";
        document.getElementById('doneButton').style.display = "block";
        document.getElementById('prompt2').style.display = "none";
        document.getElementById('prompt3').style.display = "block";
        document.getElementById('imposterPlaceholder2').style.display = "none";
        document.getElementById('imposterPlaceholder3').style.display = "block";
    }
}
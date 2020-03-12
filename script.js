var answers = ["As I see it is.", "Again again later.", "Better not tell you now.", "Cannot predict now", "Concentrate and ask again.", "Don't count on it.", "It is certain.", "It is decidely so.", "Most likely", "My reply is no.", "My sources say no.", "Outlook not so good.", "Outlook good.", "Signs point to yes.", "Very doubtful.", "Without a doubt.", "Yes, definietly.", ]


document.getElementById('button').addEventListener('click', function() {
    if (document.getElementById('question').value === "") {
        alert("Please type a question.");
    } else {
        document.getElementById('outerCircle').classList.add('shake');
        document.getElementById('innerCircle').classList.add('shake');
        document.getElementById('ballText').classList.add('shake');
        document.getElementById('answer').classList.add('shake');

        let answer = answers[Math.floor(Math.random() * 17)]

        document.getElementById('innerCircle').style.backgroundColor = '#828282';
        document.getElementById('ballText').innerText = "";
        document.getElementById('answer').innerHTML = answer;
        document.getElementById('answer').style.display = 'flex';

    }

    setTimeout(removeShake, 1000);
});



function removeShake() {
    document.getElementById('outerCircle').classList.remove('shake');
    document.getElementById('innerCircle').classList.remove('shake');
    document.getElementById('ballText').classList.remove('shake');
    document.getElementById('answer').classList.remove('shake');
}

document.getElementById('outerCircle').addEventListener('click', function() {
    document.getElementById('innerCircle').style.backgroundColor = 'white';
    document.getElementById('ballText').innerText = "8";
    document.getElementById('answer').innerHTML = "";
});
// apparition des règles du jeu et disparition avec possibilité de cliquer en dehors pour les faire disparaître

let rules = document.getElementById('rules');
let rulesBtn = document.getElementById('rules-btn');
let closeBtn = document.getElementById('close-btn');
let header = document.getElementsByTagName('header');
let game = document.getElementsByClassName('game');

rulesBtn.addEventListener('click', () => {
    rules.style.display = 'flex';
    header[0].style.opacity = '0.3';
    game[0].style.opacity = '0.3';
    closeBtn.addEventListener('click', () => {
        rules.style.display = 'none';
        header[0].style.opacity = '1';
        game[0].style.opacity = '1';
    });
    window.addEventListener('click', function (e) {
        if (rulesBtn.contains(e.target) || rules.contains(e.target)) {
            if (closeBtn.contains(e.target)) {
                rules.style.display = 'none';
                header[0].style.opacity = '1';
                game[0].style.opacity = '1';
            } else {
                rules.style.display = 'flex';
                header[0].style.opacity = '0.3';
                game[0].style.opacity = '0.3';
            }
        } else {
            rules.style.display = 'none';
            header[0].style.opacity = '1';
            game[0].style.opacity = '1';
        }
    });
});

// Application de la logique du jeu 
// Déclaration des variables User
let Urock = document.getElementById('user-rock');
let Upaper = document.getElementById('user-paper');
let Uscissors = document.getElementById('user-scissors');
let Ulizard = document.getElementById('user-lizard');
let Uspock = document.getElementById('user-spock');
let userChoice = '';

// Déclaration des variables Computer
let Crock = document.getElementById('computer-rock');
let Cpaper = document.getElementById('computer-paper');
let Cscissors = document.getElementById('computer-scissors');
let Clizard = document.getElementById('computer-lizard');
let Cspock = document.getElementById('computer-spock');

let computerChoice = function () {
    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    return computerChoice;
}

// Déclaration des variables de résultat
let result = document.getElementById('result');

// Déclaration des variables de score
let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');

// Déclaration des variables de reset

function resetElements(elements) {
    elements.forEach(element => {
        element.style.display = 'flex'; // Réapparaît immédiatement
        element.classList.remove('hide'); // Supprime la classe d'opacité
    });
}
let reset = document.getElementById('reset-btn');
reset.addEventListener('click', () => {
    resetElements([Urock, Upaper, Uscissors, Ulizard, Uspock]);
    resetElements([Crock, Cpaper, Cscissors, Clizard, Cspock]);
    userScore.innerHTML = '0';
    computerScore.innerHTML = '0';
    result.innerHTML = '';
    reset.style.display = 'none';
    replay.style.display = 'none';
});


let replay = document.getElementById('replay-btn');
replay.addEventListener('click', () => {
    resetElements([Urock, Upaper, Uscissors, Ulizard, Uspock]);
    resetElements([Crock, Cpaper, Cscissors, Clizard, Cspock]);
    result.innerHTML = '';
    replay.style.display = 'none';
});

// Fonction pour cacher les éléments non utilisés

function hideElementsGroup(elements, excludeElement) {
    elements.forEach(element => {
        if (element !== excludeElement) {
            element.classList.add('hide');
            void element.offsetHeight;
            element.addEventListener('transitionend', () => {
                element.style.display = 'none';
            });
        }
    });
}

// Déclaration des règles du jeu

let rulegame = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result.innerHTML = 'Egalité';
        replay.style.display = 'flex';
    } else if (
        (userChoice === 'rock' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
        (userChoice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (userChoice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (userChoice === 'lizard' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
        (userChoice === 'spock' && (computerChoice === 'lizard' || computerChoice === 'paper'))
    ) {
        result.innerHTML = 'Vous avez perdu';
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        replay.style.display = 'flex';
    } else {
        result.innerHTML = 'Vous avez gagné';
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
        replay.style.display = 'flex';
    }

    if (userScore.innerHTML === '5') {
        alert('Vous avez gagné la partie');
        reset.style.display = 'flex';
        replay.style.display = 'none';
    }
    if (computerScore.innerHTML === '5') {
        alert('Vous avez perdu la partie');
        reset.style.display = 'flex';
        replay.style.display = 'none';
    }
}

// Déclaration des événements de click

Urock.addEventListener('click', () => {
    userChoice = 'rock';
    Urock.style.display = 'flex';
    const computerChoiceResult = computerChoice();
    let computerElement = null;
    switch (computerChoiceResult) {
        case 'rock':
            computerElement = Crock;
            break;
        case 'paper':
            computerElement = Cpaper;
            break;
        case 'scissors':
            computerElement = Cscissors;
            break;
        case 'lizard':
            computerElement = Clizard;
            break;
        case 'spock':
            computerElement = Cspock;
            break;
    }
    hideElementsGroup([Upaper, Uscissors, Ulizard, Uspock], null);
    hideElementsGroup([Crock, Cpaper, Cscissors, Clizard, Cspock], computerElement);
    rulegame(userChoice, computerChoiceResult);
});
Upaper.addEventListener('click', () => {
    userChoice = 'paper';
    Upaper.style.display = 'flex';
    const computerChoiceResult = computerChoice();
    let computerElement = null;
    switch (computerChoiceResult) {
        case 'rock':
            computerElement = Crock;
            break;
        case 'paper':
            computerElement = Cpaper;
            break;
        case 'scissors':
            computerElement = Cscissors;
            break;
        case 'lizard':
            computerElement = Clizard;
            break;
        case 'spock':
            computerElement = Cspock;
            break;
    }
    hideElementsGroup([Urock, Uscissors, Ulizard, Uspock], null);
    hideElementsGroup([Crock, Cpaper, Cscissors, Clizard, Cspock], computerElement);
    rulegame(userChoice, computerChoiceResult);
});
Uscissors.addEventListener('click', () => {
    userChoice = 'scissors';
    Uscissors.style.display = 'flex';
    const computerChoiceResult = computerChoice();
    let computerElement = null;
    switch (computerChoiceResult) {
        case 'rock':
            computerElement = Crock;
            break;
        case 'paper':
            computerElement = Cpaper;
            break;
        case 'scissors':
            computerElement = Cscissors;
            break;
        case 'lizard':
            computerElement = Clizard;
            break;
        case 'spock':
            computerElement = Cspock;
            break;
    }
    hideElementsGroup([Urock, Upaper, Ulizard, Uspock], null);
    hideElementsGroup([Crock, Cpaper, Cscissors, Clizard, Cspock], computerElement);
    rulegame(userChoice, computerChoiceResult);
});
Ulizard.addEventListener('click', () => {
    userChoice = 'lizard';
    Ulizard.style.display = 'flex';
    const computerChoiceResult = computerChoice();
    let computerElement = null;
    switch (computerChoiceResult) {
        case 'rock':
            computerElement = Crock;
            break;
        case 'paper':
            computerElement = Cpaper;
            break;
        case 'scissors':
            computerElement = Cscissors;
            break;
        case 'lizard':
            computerElement = Clizard;
            break;
        case 'spock':
            computerElement = Cspock;
            break;
    }
    hideElementsGroup([Urock, Upaper, Uscissors, Uspock], null);
    hideElementsGroup([Crock, Cpaper, Cscissors, Clizard, Cspock], computerElement);
    rulegame(userChoice, computerChoiceResult);
});
Uspock.addEventListener('click', () => {
    userChoice = 'spock';
    Uspock.style.display = 'flex';
    const computerChoiceResult = computerChoice();
    let computerElement = null;
    switch (computerChoiceResult) {
        case 'rock':
            computerElement = Crock;
            break;
        case 'paper':
            computerElement = Cpaper;
            break;
        case 'scissors':
            computerElement = Cscissors;
            break;
        case 'lizard':
            computerElement = Clizard;
            break;
        case 'spock':
            computerElement = Cspock;
            break;
    }
    hideElementsGroup([Urock, Upaper, Uscissors, Ulizard], null);
    hideElementsGroup([Crock, Cpaper, Cscissors, Clizard, Cspock], computerElement);
    rulegame(userChoice, computerChoiceResult);

});

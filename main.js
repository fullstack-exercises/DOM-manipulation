const buttons = document.querySelectorAll('.big-five-button');
const buttonsValue = document.querySelectorAll('.big-five-button').value;
const animalList = document.querySelector('#spotted-animals-list');
const spottedAnimal = document.createElement('li');

const spottedAnimals = document.querySelectorAll('.spotted-animals-list-item');
const buttonRemoveFirstItem = document.querySelector('#remove-first-item-button');
const parent = document.querySelector('#spotted-animals-list');
const buttonRemoveAllItems = document.querySelector('#remove-all-button');

buttons.forEach(button => {
    button.addEventListener('click', (element) => {
        value = element.target.value;
        let newLi = document.createElement('li');
        newLi.classList.add('spotted-animals-list-item');
        animalList.appendChild(newLi);
        newLi.innerHTML = value;
    });
});

const removeFirstItem = () => {
    return parent.removeChild(parent.firstElementChild);
}
buttonRemoveFirstItem.addEventListener('click', removeFirstItem);

const removeAllItem = () => {
    while (animalList.hasChildNodes()) {
        animalList.removeChild(animalList.lastChild);
    }
}
buttonRemoveAllItems.addEventListener('click', removeAllItem);



// Deel 3 - Meerdere element verwijderen uit de DOM
// Opdracht: Wanneer ik als gebruiker op de "remove all spotted animals" knop klik worden alle dieren die ik heb gespot verwijderd.
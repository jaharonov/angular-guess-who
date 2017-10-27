var myApp = angular.module('myApp', []);

myApp.controller('GuessWhoController', function (){
    var guess = this;
    console.log(guess);
    guess.showPeople = true;
    guess.message ='Guess who!';
    
    guess.who = function(person) {
    
    

        // person.show = !person.show;
     
        console.log(guess.name);
        console.log(guess.github);
        people.push({name: guess.name, github: guess.github});
    }


    var people = [{ name: 'Chris', github: 'christopher-black', show: true},
    {name: 'Kris', github: 'kdszafranski', show: true},
    {name: 'Ally', github: 'lysautumn', show: true}];
guess.showPerson = function(person) {
    guess.answer = person.name;
}
    
guess.people = people;


});
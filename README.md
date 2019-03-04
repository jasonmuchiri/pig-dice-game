# Pig Dice

It is a [Pig Dice](https://en.wikipedia.org/wiki/Pig_(dice_game)) game application.

This is a two player game of Pig dice. Each turn, a player repeatedly rolls a dice until either a 1 is rolled or the player decides to "hold". The first player to score 100 or more points wins.

### Game Rules

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his previous score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

## BDD

|Behavior|Input Example|Output Example|
|--------|-------------|--------------|
|If the dice rolls 1 the turn score becomes 0|Dice:5, Turn Score:5|Dice:1, Turn Score:0|
|If the dice rolls 1 it becomes the next player's turn|Dice:5, Turn Score:5, Player1|Dice:1, Turn Score:0, "It's the next player's turn!"|
|If the player clicks "Hold" the turn score is transferred to the total score, and the turn score turns to 0|Turn Score:10 Total Score:0|Turn Score:0 Total Score:0|
|If the player clicks "Hold" it becomes the next player's turn|Dice:5, Turn Score:5, Player1|"It's Player2's turn"|

## Author

[Jason Muchiri](https://github.com/jasonmuchiri)

## Technologies used

 - HTML
 - css
 - js
 - jquery-3.3.1.js
 - bootstrap version 3.3.7.

## Project setup and installation instructions

To start using this project use the following commands:

- `git clone https://github.com/jasonmuchiri/pig-dice-game`
- `cd pig-dice-game`
- `atom .`

## Project's link to gh-pages

https://jasonmuchiri.github.io/pig-dice-game/

## My Contacts

email me here:
 jasonmkinyua@gmail.com

## License information


MIT License

Copyright (c) 2019 cooldragon

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

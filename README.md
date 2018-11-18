# TriviaGame
Unit 5 Homework: Timers
URL: https://rhoang57.github.io/TriviaGame/

Project Objectives: Create a timed, multiple choice trivia game that uses JavaScript for the logic and jQuery to manipulate visual elements of the HTML.

Process (Solutions and Technical Considerations):

Front-end considerations: Users would experience three states of play: 1) A start page, 2) Timed game play, and 3) Results page. Depending on which state the player is experiencing, it was key to have the other two states hidden, and the active state visible. In terms of aesthetics, I decided to go with a complementary color scheme of pinks and turquoise that reminded me of the 1980s. When I come back to this project, I would like for the countdown timer to remain at the top of the page in an unobstructed div while the user scrolls down the page.

JavaScript and jQuery considerations: I began this game by creating an array of questions along with choices, and the correct answer. Next, I created a variable named 'gameState' that used variable functions to determine which items would be visible/hidden, and other actions that would take place during the various states. jQuery was often used to change the visuals (text, countdown timers, and gif on the results page) in the DOM. 

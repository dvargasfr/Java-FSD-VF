# Course-end Project 1. Online Test Application
## DESCRIPTION

### <ins>Project objective:</ins> 
The Online Test Application system creates an application that enables users to provide online tests, review them, and display the results.

### <ins>System Details:</ins>
This system contains three main modules: Quiz, Review, and Result. The quiz section of the online test application accepts the questions in JSON format. The JSON file can be easily shared from the server in the pre-defined format. The application renders the test at the client-side.
The “Review and display result” section allows users to declare the results immediately. You can simply call another JSON with the answers in it and evaluate and display the results immediately.

# Course-end Project 2. Pokemon Search Application
## DESCRIPTION

### <ins>Project objective:</ins> 
In the world of pokemon, where the user should be able to search for different pokemons, you have to create an application to search them with the following functionalities:
- The Pokemon application should have the list of pokemon details which will be provided in the form of JSON data i.e., it should have name, image, CP, attack, defense type etc.
- It should have a search bar so that user can search the pokemon based on the name of pokemon.
- Since we have many pokemon, apply pagination, so that user can only see 10 pokemon at a time.

### <ins>Note:</ins> 
- Pagination should have "page current-page of Total pages". For example: page 50 of 100.
- The total pages should be calculated based on the JSON data provided and the current page is calculated based on the page the user is in, currently.
- Pagination should have id="pagination", which should contain the details as listed above.
- The previous button should be disabled if it is in the first page and it should have id="previous".
- Next button should show next set of pokemon (which is 10 pokemon on a click) and should have id="next".
- Search bar should have an id="search".
- Pokemon's name should be inside the span tag (or any other tag) which should have id="name".

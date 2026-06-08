# Input

The Cities Application allows users to enter city information through the Add City form. The input includes the city name, country and population. Users can also select a city from the Cities List by clicking on the city name.

# Process

The application uses React Router to manage navigation between pages. The main routes include the Cities List page and the Add City page. When a user submits the Add City form, the new city object is added to the cities state array. After the city is added, the useNavigate hook redirects the user back to the Cities List page. The Cities List page uses nested routing to display city details on the same page. When a city link is clicked, the city id is passed through the URL. The useParams hook reads the id and finds the matching city from the cities array.

# Output

The application displays a list of cities as clickable links. After a new city is added, the updated city list is shown automatically. When a user clicks a city name, the city details, including country and population, are displayed below the list on the same page.
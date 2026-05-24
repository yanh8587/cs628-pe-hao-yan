# Input

The input of this ToDo List App is the task description entered by the user in the text input field. The user types a task and then clicks the Add Task button to submit it. Each task is treated as a ToDo item that should appear in the list.

# Process

The app uses React state management with the useState hook. One state variable stores the current input value, and another state variable stores the list of ToDo items. When the user clicks Add Task, the app checks that the input is not empty, creates a new ToDo object with an id and text, and adds it to the list. The app uses the map() function to dynamically render all ToDo items. Each ToDo item also has a Delete button, and clicking it removes that item by filtering it out of the state array.

# Output

The output is the updated ToDo list displayed on the page. After a task is added, it appears as a new item in the list. After a task is deleted, it is removed from the displayed list immediately. This creates an interactive user interface where the displayed output changes based on user actions.
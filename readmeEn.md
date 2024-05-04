Project Places

To Launch the App
First, run the development server:

bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result.

Add Env.Local to Launch the App
Add this path on Compass MongoDB: mongodb://127.0.0.1:27017/name_of_your

_db
Example: mongodb://127.0.0.1:27017/Places_map

To Use the Web Application, Please Install the Following Packages
Axios
Fontawesome
Yup
Formik
Next Router

Why We Have Used These Packages for the Web App?
Axios: Axios is used to send form data to the server via an HTTP POST request.
Fontawesome: To have a wide variety of logos and icons for buttons.
Yup: Validation of form inputs.
Formik: Used for the form to add and modify places.
Next Router: For page redirection.

Index Page: The index page displays a list of addresses retrieved from an API endpoint. It offers filtering and sorting functionalities for address data based on various criteria such as type, cuisine, price, etc. Here's how it works:

State Management: The page uses the useState hook of React to manage the state of addresses, filteredAddresses, sortConfig, and various filtering criteria such as filterType, filterCuisine, filterCuisineAveragePrice, filterBarType, filterArtType, filterArtMovement, and filterParkType.
Data Retrieval: Upon component mounting, the useEffect hook fetches address data from the API endpoint using Axios. It sets both addresses and filteredAddresses states with the retrieved data.
Filtering and Sorting: The page allows users to dynamically filter and sort address data. Filtering is done based on selected filter criteria such as type, cuisine, price, etc. Sorting is implemented by clicking on table headers, which sorts the data based on the selected key (e.g., street, name) and direction (ascending or descending).
Filter Components: Different filter components such as FilterCuisine, FilterBarType, FilterArtType, FilterArtMovement, and FilterParkType are conditionally rendered based on the selected filterType. These components enable users to interactively select filtering criteria.
Table Display: The filteredAddresses data is displayed as a table, with each row representing an address. Users can click on table headers to sort data based on the corresponding key.

Add Place Page:
The add address page allows users to add new places to the address list. It provides a form where users can enter details such as name, street, city, postal code, country, and place type (Restaurant, Bar, Museum, or Park). Here's how it works:

Form Component: The page renders a form using Formik, a form library for React. The form includes input fields for name, street, city, postal code, country, and a dynamic field based on the selected place type.
Dynamic Field Rendering: Depending on the selected place type (Restaurant, Bar, Museum, or Park), a corresponding dynamic field component is rendered below the standard form fields. For example, if the user selects "Restaurant," additional fields related to restaurants are displayed.
Form Validation: The form includes validation using the Yup schema. It ensures that required fields (name, street, city, postal code, country) are filled, and the postal code is a number.
Submission Functionality: When the user submits the form, the submission function is triggered. It sends a POST request to the backend API endpoint (/api/addresses) using Axios. The new address data, including the place type, is sent in the request body. After successful submission, the form is reset, and the user is redirected to the home page.

Edit Place Page:
The edit page allows users to modify existing places in the address list. It displays a prefilled form with details of the selected address, including name, street, city, postal code, country, and place type (Restaurant, Bar, Museum, or Park). Here's how it works:

Prefilled Form: The page retrieves details of the selected address using the getServerSideProps function, which fetches data from the backend API. The form is then prefilled with these details for the user to modify.
Dynamic Field Rendering: Depending on the place type of the selected address, the page renders corresponding dynamic field components below the standard form fields. For example, if the address is of type "Restaurant," additional fields related to restaurants are displayed.
Form Submission: When the user submits the form after making changes, the handleSubmit function is triggered. It sends a PATCH request to the backend API endpoint (/api/addresses/:addressId) using Axios, updating the address with the modified data. After successful submission, the user is redirected to the details page of the modified address.
Deletion Functionality: The page also offers the option to delete the selected address. When the user clicks the "Delete" button, the handleDelete function is triggered. It sends a DELETE request to the backend API endpoint (/api/addresses/:addressId), deleting the address from the database. After deletion, the user is redirected to the home page.

Place Detail Page:
State Management:
The component manages state using React's useState and useEffect hooks.
Addresses are retrieved from a backend API (http://localhost:3000/api/addresses) using Axios in the useEffect hook with an empty dependency array, ensuring data is fetched only once upon component mounting.
State variables are used to store the complete list of addresses, filtered addresses, sorting configuration, and different filter criteria. Side effects are handled to apply filters based on state changes.

Search Filters: The HomePage component implements search filters for different types of addresses, such as restaurants, bars, museums, and parks. Users can filter addresses based on different criteria and view the results as a table. Here's an overview of the functionality:

State Management: The component manages state using React's useState hook. It maintains state variables for the list of addresses, filtered addresses, sorting configuration, and different filter criteria.
Data Retrieval: The component fetches the list of addresses from the backend API using Axios in the useEffect hook with an empty dependency array. This ensures data is fetched only once when the component is mounted.
Filtering: Users can filter addresses based on their type (restaurant, bar, museum, or park) and additional criteria such as cuisine type, bar type, art type, art movement, and park type. The component dynamically renders filter components based on the selected address type.
Sorting: Users can sort filtered addresses based on different attributes such as street, name, city, country, postal code, and type. By clicking on table headers, the sorting order toggles between ascending and descending.
Table Display: Filtered addresses are displayed as a table with columns for street, name, city, country, postal code, and type. Each row contains links to the page for editing the corresponding address, allowing users to view and modify address details.

Database Generated by a Python Script to Generate Places Matching the MongoDB Database Schema:
You can use testdatas.json to import data into your MongoDB database.

© Developed By Ranvir Cheema
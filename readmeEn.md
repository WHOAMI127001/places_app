This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Add Env.Local to launch our application ##
add this path on compass mongodb
= mongodb://127.0.0.1:27017/Places_map

## To use our App please download the following Packages ##
Axios
Fontawesome 
Yup
Next Router

# To install the dependecies   #
Use npm i to install the dependecies in the terminal 




HomePage Component

This component represents the home page of the application.

State Variables:

adresses: Holds the list of addresses fetched from the API.
filteredAdresses: Stores the filtered list of addresses based on user-selected filters.
sortConfig: Manages the sorting configuration for the address list.
filterType: Represents the selected type of address (restaurant, bar, museum, parc).
filterCuisine: Stores the selected cuisine type for restaurant addresses.
filterCuisineAveragePrice: Stores the selected average price for restaurant addresses.
filterBarType: Stores the selected type for bar addresses.
filterArtType: Stores the selected type of art for museum addresses.
filterArtMovement: Stores the selected art movement for museum addresses.
filterParkType: Stores the selected type of park for parc addresses.
Effects:

fetchAdresses: Fetches the list of addresses from the API when the component mounts.
applyFilters: Applies the selected filters to the address list whenever there is a change in filter options.
Functions:

sortAdresses: Sorts the address list based on the selected key (e.g., street, name, city).
handleFilterTypeChange: Handles the change in filter type selection by updating the filterType state.
Rendering:

Renders a select dropdown for selecting the type of address.
Renders filter components based on the selected address type.
Displays a table of addresses with columns for street, name, city, country, postal code, and type.
Allows sorting of addresses by clicking on column headers.


This schema defines the data structure for an address in the application.

Fields:

type: Type of the address.
Type: String
Required: Yes
Allowed values: "Restaurant", "Bar", "Museum", "Park"
name: Name of the address.
Type: String
Required: Yes
street: Street name of the address.
Type: String
Required: Yes
city: City of the address.
Type: String
Required: Yes
postalCode: Postal code of the address.
Type: String
Required: Yes
country: Country of the address.
Type: String
Required: Yes
For each type of address, additional fields are specified as follows:

For Restaurants:

cuisineType: Type of cuisine offered by the restaurant.
Type: String
starRating: Star rating of the restaurant.
Type: Number
cuisineAveragePrice: Average price of dishes at the restaurant (on a scale of 1 to 5).
Type: String
Minimum: 1
Maximum: 5
For Bars:

barType: Type of bar.
Type: String
barAveragePrice: Average price of drinks at the bar (on a scale of 1 to 5).
Type: Number
Minimum: 1
Maximum: 5
For Museums:

artMovement: Artistic movement represented in the museum.
Type: String
artType: Type of art exhibited in the museum.
Type: String
museumFreeOrPaid: Museum entry status (free or paid).
Type: String
Allowed values: "Free", "Paid"
price: Museum entry price.
Type: Number
For Parks:

parcType: Type of park.
Type: String
publicOrPrivate: Park status (public or private).
Type: String
Allowed values: "Public", "Private"
parcFreeOrPaid: Park entry status (free or paid).
Type: String
Allowed values: "Free", "Paid"
parcPrice: Park entry price.
Type: Number


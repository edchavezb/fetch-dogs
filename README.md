# :dog2: Fetch Dogs

This application helps users browse through a list of shelter dogs so they can find one to adopt.

## How to run

- Clone the repo
- Run npm install
- Initialize the Vite server using npm run dev
- To run tests, use npm run test

## Main technologies used

- TypeScript (Type safety)
- Tailwind CSS (Styles)
- DaisyUI (Utility classes for pre-made components)
- Jotai (State management)
- react-select (For complex select components)
- react-testing-library (Component testing)

## Using the platform
Here is the typical user flow of the application:

- The user logs in and is presented with a list of dogs in the Search page.
- The user adjusts the filters to narrow down their location. Once they select one or more zip codes, new results in that location will load.
- The user can also adjust the breed and age of the dogs in the list.
- Dogs in the search page can be added to the user's favorites.
- Once the user has selected their favorites, they can navigate to the Match page to review them and get matched with one of them for adoption.
# Introduction

This is the documentation for this code base. It offers guidance to help any developer understand the decisions that have gone into the code.

## Firebase.js

This file does the following:

- Initializes firebase for the backend
- firebaseConfig stores all the project information for this project as given by fire base.
- The exported variable firebaseApp is an instance of the initialization, and is to be used in other parts of the code base where firebase features are needed.
  - The initialization takes a paramerter of firebaseConfig

## Authentication module

### Signup.js

This code defines a signup form for a React application. Here's how it works:

User Input: The user enters their name, email, and password in designated text fields.

Sign Up with Firebase: Upon submitting the form, the handleSubmit function is triggered. It uses Firebase's createUserWithEmailAndPassword to create a new user account with the provided email and password.

Data Handling: If successful, the function creates a userData object containing the user's name, email, and a unique ID assigned by Firebase. This data is then stored in the component's state using setData.

Navigation: If there are no errors, the user is redirected to the "/onboarding/business-details" route using navigate.

Firestore Integration (Commented Out): The code includes commented-out logic for adding the user data to Firestore, a NoSQL database from Firebase. It demonstrates how to create a document within the "users" collection and set the user data as fields within that document.

Overall, this React component allows users to sign up with email and password using Firebase Authentication and prepares the user data for potential storage in Firestore.

### Login.js

Functionality: This React component renders a login form.

User Input: The user enters their email and password in designated text fields.

Sign In with Firebase: Clicking the "Login" button triggers the handleSubmit function. It uses Firebase's signInWithEmailAndPassword to authenticate the user with the provided email and password.

Success and Navigation: Upon successful login, the user data (userCredential) is retrieved. However, the code doesn't explicitly use this data in this snippet (represented by the comment "// ..."). It then redirects the user to the "/onboarding/business-details" route using navigate.

Error Handling: If there's an error during sign-in, the code logs the error code and message for debugging purposes.

Overall, this React component facilitates user login with email and password using Firebase Authentication and redirects them to a specific route upon successful login.

## Onboarding module

### onboardingStore.js

This code defines a Zustand store specifically for onboarding purposes within a React application. Let's break down what it does:

1. **Store Creation:** The `create` function from Zustand is used to create a new store named `onBoardingStore`.

2. **Slices of State:** The store manages various slices of onboarding data using state and setters:

   - `user`: Stores user information (likely populated during signup).
     - `storeUser`: Function to update the `user` state with new user data.
   - `businessDetails`: Stores business details (likely from the BusinessDetails component).
     - `storeBusinessDetails`: Function to update the `businessDetails` state.
   - `pointsPerPurchase`: Stores points awarded per purchase configuration (potentially for a loyalty program).
     - `storePointsPerPurchase`: Function to update the `pointsPerPurchase` state.
   - `redemptionOptions`: Stores an array of options for redeeming points (potentially rewards in a loyalty program).
     - `storeRedemptionOptions`: Function to add a new redemption option to the `redemptionOptions` state array.
   - `conditions`: Stores conditions related to onboarding (purpose not entirely clear from this snippet).
     - `storeConditions`: Function to update the `conditions` state.

3. **Updating State:** Each setter function updates the corresponding slice of state within the store. For example, `storeUser(newUser)` would update the `user` state with the provided `newUser` data.

**Overall, this Zustand store provides a centralized location to manage various data aspects during the user onboarding process of a React application.**

### BusinessDetails/BusinessDetails.js

This code defines a form for users to enter their business details during an onboarding process. Here's a breakdown:

1. **Component State:** It manages the business name (`name`) and chosen industry (`industry`) using React's `useState` hook. There's also a state variable for `businessDetails` but it's not used in the provided code snippet.

2. **Data Fetching (Commented Out):** There's commented-out code for `updateBusinessDetails` that retrieves a document reference likely representing the user's business details within Firestore. This suggests potential integration with a Firestore database but it's not implemented in this specific code.

3. **User Input:** The form includes sections for the user to enter their business name and select an industry from a dropdown menu populated with the provided `industryList`.

4. **Local Storage:** The `storeBusinessDetails` function, connected to the onboarding store using `onBoardingStore`, stores the entered business details (`businessName` and `businessCategory`) in the local storage of the application.

5. **Form Submission:** Clicking the "Next" button triggers the `storeDetails` function. It creates a `details` object with the business name and category, and then stores it using the `storeBusinessDetails` function.

**In essence, this React component captures business name and industry selection from the user and stores them in the zustand onboarding store.**

### LoyaltySetup/LoyaltyPathways.js

This React component, named `LoyaltyPathways`, likely acts as a selection screen during a loyalty program setup process. Here's a breakdown of its functionality:

1. **Layout:** It defines a layout style with properties like `justifyContent: "center"` and `alignItems: "center"` to center the content within the viewport.

2. **Content Structure:** The component renders its content within a container with some spacing:
   - It displays a heading "Campaign Setup" and a subheading "Let's setup your loyalty campaign".
   - It shows the current step as "3/4".
   - It presents three cards in a column using Material-UI's `Card` component:
     - Each card represents a loyalty program pathway (Points Based Loyalty, Tier Based Loyalty, Cashback).
     - The cards have a blue background, white text, and a minimum height.
     - Clicking a card likely navigates to a dedicated setup section for the chosen pathway using `Link` from `react-router-dom`.
   - Each card displays a title for the loyalty pathway and a brief description explaining the concept.

**In summary, this component allows users to choose a loyalty program pathway (Points Based, Tier Based, or Cashback) for their campaign and navigate to the specific setup section for the chosen pathway.**

### LoyaltySetup/PointsBased/Conditions.js

This code defines a React component named `Conditions` likely used during a loyalty program setup process. Here's a breakdown of its functionality:

1. **Component State:** It manages two state variables:

   - `expirationPeriod`: Stores the user-entered value for the expiration period of points (likely in days).
   - `maximumPointsPerPurchase`: Stores the user-defined maximum points obtainable per purchase (initially set to 10,000).

2. **Store Connection:** It retrieves the `storeConditions` function from the `onBoardingStore` using `onBoardingStore((state) => state.storeConditions)`. This function allows updating the "conditions" slice of state within the onboarding store.

3. **Updating Maximum Points:** It defines two functions to adjust the `maximumPointsPerPurchase` state:

   - `increaseMaximumPoints`: Increases the value by 100 with each click.
   - `decreaseMaximumPoints`: Decreases the value by 100 with each click.

4. **Handling Condition Changes:** The `handleConditionsChange` function is triggered upon clicking the "Next" button. It creates a `conditions` object containing the entered `expirationPeriod` and the current `maximumPointsPerPurchase`. It then calls `storeConditions` to update the corresponding slice of state in the onboarding store with these conditions.

5. **Commented out useEffect:** There's a commented-out `useEffect` hook that would likely log the current `conditions` state to the console whenever it changes. This could have been used for debugging purposes.

6. **JSX Structure:** The component renders a form using Material-UI components:
   - It displays a heading "Points Based Loyalty Setup".
   - It allows users to enter the expiration period for points.
   - It shows the current `maximumPointsPerPurchase` value and allows users to adjust it using buttons.
   - Clicking "Next" triggers `handleConditionsChange` to store the entered conditions.

**In summary, this React component captures user-defined conditions (expiration period and maximum points per purchase) for a loyalty program and stores them in the onboarding store.**

### LoyaltySetup/PointsBased/PointsPerPurchase

This React component, named `PointsPerPurchase`, is likely part of a loyalty program setup process. Here's a breakdown of its functionality:

1. **Component State:** It manages two state variables:

   - `currency`: Stores the user-selected currency from a dropdown menu populated with the `currencyArray` (imported from `currencies`).
   - `price`: Stores the user-entered price value (amount a customer needs to spend to earn a point).

2. **Store Interaction:** It retrieves two functions from the `onBoardingStore`:

   - `storePointsPerPurchase`: Function to update the "pointsPerPurchase" slice of state in the store.
   - `pointsPerPurchase` (commented out): Function to access the current value of "pointsPerPurchase" from the store (likely for debugging purposes in the commented `useEffect`).

3. **Data Preparation:** The `sendPointsPerPurchaseToStore` function is triggered upon clicking "Next". It creates a `pointsPerPurchase` object with two properties:

   - `points`: Set to 1 (assumed to be one point awarded per purchase).
   - `pricePerPurchase`: An object containing the entered `price` and the chosen `currency`.

4. **Storing Points Configuration:** The `sendPointsPerPurchaseToStore` function calls the `storePointsPerPurchase` function from the store, passing the created `pointsPerPurchase` object. This updates the onboarding store with the user-defined points configuration.

5. **JSX Structure:** The component renders a form using Material-UI components:
   - It displays a heading "Points Based Loyalty Setup".
   - It asks users how much a customer needs to spend to earn a point.
   - It provides a dropdown menu for selecting the currency (populated from `currencies`).
   - It allows users to enter the price per point.
   - Clicking "Next" triggers `sendPointsPerPurchaseToStore` to store the configuration.
   - The "Next" button also links to the next step ("redemption-options") likely within the onboarding process.

**Overall, this React component captures user input for how much a customer needs to spend to earn a point (including currency) and stores this configuration in the onboarding store.**

### LoyaltySetup/PointsBased/RedemptionOption

This React component, named `RedemptionOption`, is likely used to define redemption options within a loyalty program setup process. Here's a breakdown of its functionality:

1. **Component State:** It manages two state variables:

   - `pointsNeeded`: Stores the user-defined number of points required to redeem a reward.
   - `reward`: Stores the user-entered description of the reward.

2. **Store Interaction:** It retrieves the `storeRedemptionOptions` function from the `onBoardingStore`. This function allows adding new redemption options to the "redemptionOptions" slice of state within the store.

   - There's also a commented-out section for another function (`storeRedemptionOptions`) and related code to potentially access existing redemption options or modify the required points, but it's not used in this specific code snippet.

3. **Adding Redemption Option:** The `addRedemptionOption` function is triggered upon clicking "Next". It creates a `redemptionOptionInstance` object containing the entered `pointsNeeded` and `reward`. It then calls `storeRedemptionOptions` to update the onboarding store with this new redemption option.

4. **JSX Structure:** The component renders a form using Material-UI components:
   - It displays a heading "Points Based Loyalty Setup".
   - It asks how many points a customer needs to redeem a reward.
   - It allows users to enter the number of points required.
   - It asks what the reward is for redemption.
   - It allows users to enter a description of the reward.
   - Clicking "Next" triggers `addRedemptionOption` to store the new redemption option.
   - The "Next" button also links to the next step ("conditions") likely within the onboarding process.

**In essence, this React component captures user input for the number of points required and the corresponding reward for a redemption option, and stores it in the onboarding store.**

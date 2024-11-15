# Voucher Purchase App
This is a web application that allows users to browse, purchase, and manage discount vouchers. It includes functionalities such as adding vouchers, displaying vouchers in a list, and tracking purchases.

## Features
- Voucher Management: Admin can add new vouchers with descriptions, prices, and image URLs.
- Voucher Display: Vouchers are displayed in a card format with the ability to purchase them.
- Sales Tracking: Admin can mark vouchers as used, and the app keeps track of the purchase dates.

## Technologies Used
- React: For building the user interface.
- TypeScript: For type safety and improved development experience.
- CSS Modules: For scoped styling of components.
- Jest & React Testing Library: For unit testing the components.
- React Router: For handling routing between pages (Admin and Home).
- Context API: For global state management with VoucherContext.

## Setup
1. Clone the repository:
```
git clone https://github.com/your-username/voucher-purchase-app.git
```
2. Navigate to the project directory:
```
cd voucher-purchase-app
```
3. Install the dependencies:
```
npm install
```
4. Run the development server:
```
npm run dev
```
The app should now be running on http://localhost:3000.

## Running Tests

To run the tests for the app, use the following command:
```
npm run test
```
This will run the unit tests using Jest, and the tests will be automatically executed in watch mode.

## Folder Structure
- src/components: Contains the React components for the application.
  - Header: A header to navigate between the 2 pages.
  - VoucherForm: A form to add new vouchers.
  - VoucherCard: A card displaying voucher details with a "Buy" button.
  - VoucherList: Displays a list of all vouchers.
  - SalesList: Displays a list of sales with the option to mark vouchers as used.
- src/types: Contains TypeScript types for Voucher and Sale.
- src/styles: Contains the CSS modules for component styling.
- src/pages: Contains the different pages of the application.
  - Admin: The admin page where voucher management occurs.
  - Home: The home page displaying the available vouchers.
- src/hooks: Contains custom React hooks for application logic.
  - useVoucherManagement: A hook to manage voucher-related logic.
- src/contexts: Contains context providers for global state management.
  - VoucherContext: Context to provide voucher data across the app.


## Testing
This app includes unit tests for key components:

- VoucherForm: Tests include rendering the form, submitting with valid data, and verifying the callback function is called.
- VoucherCard: Tests include rendering voucher details and verifying the purchase button works.
- VoucherList: Tests include rendering multiple vouchers and ensuring the correct interactions.
- SalesList: Tests include rendering the list of sales and verifying that the "Mark as used" button is functional.
# Alipapa store

live link: https://alipapa.vercel.app/

A full-stack e-commerce application built with Next.js, Tailwind CSS, and NextAuth. This project features a modern and responsive user interface, authentication, and product management functionalities.

## Project Description

This application serves as a comprehensive e-commerce platform. It provides a seamless shopping experience for users while offering a protected dashboard for authenticated users to manage products.

**Key Features:**
- **Authentication:** Secure user authentication using NextAuth, supporting both credential and social logins (e.g., Google).
- **Product Catalog:** Browse a list of products and view detailed information for each item.
- **Protected Routes:** A dedicated dashboard for adding new products, accessible only to authenticated users.
- **Modern UI:** Built with Tailwind CSS for a sleek, responsive, and customizable design.
- **Server-Side Rendering (SSR):** Leverages Next.js for performance and SEO benefits.

## Setup & Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

Based on your project's file structure, here is a structural and hierarchical summary of your application's routes. This format clearly shows how the URL paths map to your Next.js App Router files.

Markdown

### Route Summary
This is a summary of the routes and pages in your Next.js project. You can copy and paste this directly into your documentation.

Landing Page

URL: /

File Path: app/page.js

Description: The main homepage of the application, featuring a Hero section, product highlights, and a footer.

Access: Publicly accessible to all users.

Product List Page

URL: /products

File Path: app/products/page.js

Description: Displays a comprehensive list of all products fetched from the database.

Access: Publicly accessible to all users.

Product Details Page

URL: /products/[id]

File Path: app/products/[id]/page.js

Description: A dynamic route that shows detailed information for a single product. The [id] segment represents a unique product ID.

Access: Publicly accessible to all users.

Login Page

URL: /login

File Path: app/login/page.js

Description: Handles user authentication using NextAuth.

Access: Publicly accessible to all users.

Registration Page

URL: /register

File Path: app/register/page.js

Description: Allows new users to create an account.

Access: Publicly accessible to all users.

Protected Page: Add Product

URL: /dashboard/add-product

File Path: app/dashboard/add-product/page.js

Description: A private page containing a form to add new products. Access is restricted.

Access: Protected. Requires a logged-in user session. Unauthenticated users will be redirected to the login page.

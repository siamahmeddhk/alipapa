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

### Route Summary (Structural)

Your project uses the Next.js App Router, where each folder within the `app` directory represents a segment of the URL path, and a `page.js` file defines the content for that route.

📦 app/
├── 📄 page.js                 # Landing Page (/)
│   └── Publicly accessible.
│
├── 📦 login/
│   └── 📄 page.js             # Login Page (/login)
│       └── Publicly accessible.
│
├── 📦 register/
│   └── 📄 page.js             # Registration Page (/register)
│       └── Publicly accessible.
│
├── 📦 products/
│   ├── 📄 page.js             # Product List Page (/products)
│   │   └── Publicly accessible.
│   │
│   └── 📦 [id]/
│       └── 📄 page.js         # Product Details Page (/products/[id])
│           └── Publicly accessible.
│
└── 📦 dashboard/
└── 📦 add-product/
└── 📄 page.js         # Protected Page: Add Product (/dashboard/add-product)
└── Protected. Only accessible to authenticated users.

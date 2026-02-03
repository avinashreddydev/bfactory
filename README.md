# Biryani Factory

**Biryani Factory** is a modern, responsive food ordering application built with Next.js 16 and React 19. It offers a seamless user experience for browsing menus, managing cart items, and placing orders, all while ensuring robust authentication and location-based services.

## ✨ Key Features

-   **Browse Menu**: Explore a grid of delicious items with categories for Family Packs and Single Servings.
-   **User Authentication**: Secure login and signup via email and social providers using **Better-Auth**.
-   **Shopping Cart**: Intuitive cart management with real-time updates.
-   **Geolocation**: Automatic store detection based on user location to serve the nearest branch.
-   **Legal & Policy Pages**: dedicated sections for Privacy Policy, Terms of Service, Refund Policy, etc.
-   **Modern UI**: Beautifully designed interface using **Tailwind CSS v4** and **Radix UI** primitives.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Components**: [Radix UI](https://www.radix-ui.com/), Shadcn-style components
-   **Database**: [PostgreSQL](https://www.postgresql.org/)
-   **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
-   **Authentication**: [Better-Auth](https://better-auth.com/)
-   **Containerization**: [Docker](https://www.docker.com/)

## 🚀 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

Ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (v20 or higher)
-   [Docker](https://www.docker.com/) & Docker Compose

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd biryanifactory
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    Create a `.env` file in the root directory and add the following variables:

    ```env
    SUPER_ADMIN_EMAIL=your-email@example.com
    BETTER_AUTH_SECRET=your_generated_secret_key
    BETTER_AUTH_URL=http://localhost:3000

    # Database Connection
    DATABASE_URL=postgres://postgres:postgres@localhost:5432/biryanifactory
    ```

### Database Setup

1.  **Start PostgreSQL**:
    Use Docker Compose to spin up the database container.
    ```bash
    docker-compose up -d
    ```

2.  **Push Schema / Generate Migrations**:
    Apply the database schema using Drizzle Kit.
    ```bash
    npm run db:push
    ```
    *Alternatively, you can generate migrations first:*
    ```bash
    npm run db:generate
    ```

3.  **View Database (Optional)**:
    Launch Drizzle Studio to inspect your database data.
    ```bash
    npm run db:studio
    ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to verify the installation.

## 📜 Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts the production server.
-   `npm run db:push`: Pushes schema changes directly to the database.
-   `npm run db:studio`: Opens Drizzle Studio for database management.
-   `npm run db:generate`: Generates SQL migrations based on your schema.

## 📂 Project Structure

```
biryanifactory/
├── app/                # Next.js App Router pages and layouts
├── components/         # Reusable UI components
│   ├── ui/             # Generic UI elements (buttons, inputs, etc.)
│   ├── menu/           # Menu-related components
│   ├── ...
├── db/                 # Database schema and configuration
├── lib/                # Utility functions and helpers
├── public/             # Static assets
└── ...
```
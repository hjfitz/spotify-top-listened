# Spotify Top Listened SPA

This is a basic Next.js app that uses the Spotify API to display the user's top listened tracks and artists. 

It follows the [Backend for frontend for auth](https://auth0.com/blog/backend-for-frontend-pattern-with-auth0-and-dotnet/) pattern, where API requests are proxied through our Next.js serverless functions to keep the client-side code clean and secure.

## Getting Started

### Prerequisites

- Node.js
- npm
- A Spotify **developer** account

### Installation

1. Clone the repo
1. Install dependencies
1. Copy `.env.local.example` to `.env.local` and fill in your Spotify API credentials
1. Run the development server

```bash
# Clone the repo
git clone <repo-url>

# Install dependencies
npm Install

# Enter the project directory
cd spotify-top-listened-spa

# Copy .env.local.example to .env.local and fill in your Spotify API credentials
cp .env.local.example .env.local
vim .env.local

# Run the development server
npm run dev
```

## Built With

- [Next.js](https://nextjs.org/)
- [Spotify API](https://developer.spotify.com/documentation/web-api/)



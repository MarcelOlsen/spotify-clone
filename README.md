# Next Spotify Clone

This project is a clone of Spotify built using Next.js. It aims to replicate the core functionalities of Spotify, including music streaming, liked songs, and user authentication.

Inspired by [this tutorial](https://www.youtube.com/watch?v=2aeMRB8LL4o) and a lot of debugging, since it uses next 13 and not next 15.

Notes:

- You can only upload your own songs on desktop, and as a logged in subscribed user (you can enter bogus data to the stripe checkout page and use 4242 4242 4242 4242 as your card number)
- The player on mobile needs the phone to be unsilenced
- The search feature only works with titles right now

## Features

- User authentication (Sign up, Login, Logout)
- Music streaming
- Search functionality
- Responsive design
- Liking songs and automatic liked songs playlist
- Auto queue creation, based on where you played a song from

## Technologies Used

- Next.js
- React
- TailwindCSS
- Supabase
- Stripe

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/marcelolsen/next-spotify-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd next-spotify-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
2. Open your browser and go to `http://localhost:3000`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

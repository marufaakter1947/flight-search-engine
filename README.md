# FlyMate – Flight Search Engine

Live Link: 

FlyMate is a modern, responsive, and user-friendly flight booking web application built with **React**, **Tailwind CSS**, **Firebase Authentication**, and **Amadeus Flight API**. It allows users to search for flights, view hot deals, book flights, and manage their trips.  

---

## Features

### Flight Search & Booking
- Search flights by **origin, destination, and date**.
- View detailed flight information including **segments, departure/arrival times, and airline**.
- Live **price trend chart** for selected flights.
- **Book Now** button with **React Hot Toast** notifications.

### User Authentication
- Sign up and login using **Email/Password** or **Google OAuth**.
- User session management with **Firebase Authentication**.
- Conditional features: only logged-in users can book flights.

### Deals & Trips
- **Hot Deals** page showing special flight offers with discount badges.
- **My Trips** page showing all booked flights in a table format.
- Saved trips stored in **localStorage** (can be integrated with backend).

### Home Page
- Hero section with **Search Flights** and **Explore My Trips** links and **Quick Search** Sections.
- Popular Routes, Destinations, Testimonials, Why Choose Us, How It Works, and FAQ sections.
- Smooth scrolling navigation from footer to specific sections.
- Eye-catching animations and gradient styling.

### Footer
- Quick navigation links to page sections.
- Links to **Privacy Policy** and **Terms of Service** pages.

---

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, Recharts, React Hot Toast
- **Authentication:** Firebase Auth (Email/Password & Google Sign-In)
- **Backend:** Node.js, Express (for Amadeus Flight API proxy)
- **APIs:** [Amadeus Flight API](https://developers.amadeus.com/)
- **State Management:** React Context API

## Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/flymate.git
cd flymate
Install dependencies:

bash
Copy code
npm install
Setup environment variables (create .env file in root):

env
Copy code
VITE_apiKey=your_apikey
VITE_authDomain=you_authDomain
VITE_projectId=your_projectId
VITE_storageBucket=your_storageBucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_appId

AMADEUS_API_KEY=your_amadeus_test_key
AMADEUS_API_SECRET=your_amadeus_test_secret
Start the backend server (for flight API proxy):

bash
Copy code
cd backend
npm install
node server.js
Start the frontend:

bash
Copy code
npm start
Open http://localhost:3000 in your browser.

###
Pages
Home: Hero, Popular Routes, Testimonials, Destinations, Why Choose Us, How It Works, FAQ.

Flights: Flight search results, detailed flight info, price trends, and booking.

Deals: Hot flight deals with discount badges and booking option.

My Trips: Table showing user’s booked flights.

Login / Signup: Firebase authentication forms.

Privacy Policy / Terms: Informational pages.

###
Design Highlights
Gradient text & icons for active navigation.

Animated Hero and How It Works sections.

Responsive layout for desktop, tablet, and mobile.

Eye-catching cards for deals, destinations, and testimonials.

Smooth scroll to sections from footer links.

###
Future Enhancements
Connect My Trips with backend database (MongoDB or Firebase Firestore) instead of localStorage.

Implement seat selection and payment gateway integration.

Real-time flight price updates using Amadeus API.

Multi-language support and accessibility improvements.
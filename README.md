# travel-buddy-planner

the plan:
This plan outlines the development of a travel planning website similar to TripAdvisor, HotelsCombined, Trivago, and Booking.com. It combines functionalities for trip planning, hotel and restaurant booking, attraction discovery, and user reviews/photos.

the website will include those kinds of accounts: 
1- normal users
2- hotels
3- transport agencies: like buses or flight agencies
4- touristic places, like restaurants, museums...etc
5- group travel agencies

first: from the user's perspective: 
1- search for hotels, transport agencies, and touristic places, and even filter the search by city or prices.
2- enable to reserve hotels, transport agencies, touristic places
3- enable him to plan his trips in one place, and schedule his trips
4- enable to leave a review on the hotel, transport agencies, touristic places and also share pictures of the place that he visited


second: the reason that hotels, transport agencies, tourist places have their accounts is to make them able to manage their income, update the pictures of their place or services, and add the services they provide, and they can be able to track the reservations from users
from their perspective, there will be a dashboard that is special for them, then we have 3 kinds of special dashboards.

third: there will be also travel agencies, those agencies' mission is to organize group trips, as we know, that group trips are cheaper, and also, planning for a trip may be overwhelming and take much time, especially for those who are busy, therefore those agency's mission is to plan the whole trip, starting from reserving the best transport method, to reserving hotels and choosing the touristic places to visit.

This was a quick explanation of those agencies, now from their perspective account: they can search for hotels, transport agencies, and tourist places just like any normal user on the website, and make the reservation needed, the only difference is that the agencies are the difference is that when they do reservation, they make a reservation for groups, not individuals.
they first set the number of people in the group, second, they plan the trip and get a discount for all services depending on the number of people in the group (as much it is bigger, as much they have discounts), third, they publish their plans so the normal users can see them, and the normal users apply to it, when the number of people complete, the trip is signed and the money is transferred to the other agencies.

lastly: there will be an admin dashboard that can manage this functionality

User Website Pages:

1. Search & Browse:

    Landing Page: Banner showcasing popular destinations, search bar for hotels, transport, attractions, and filters (city, price, etc.).

    Search Results Page: Display hotels, transport options, and attractions based on user search criteria. Listings should include details, photos, ratings, and prices.

    Hotel Details Page:  In-depth information about a specific hotel, including photos, amenities, room options, reviews, and booking functionality (may redirect to provider website).

    Transport Details Page: Details about a specific transport option (bus, flight), including route information, schedules, prices, booking functionality (may redirect to provider website).

    Attraction Details Page: Information about a specific attraction (museum, restaurant), including descriptions, photos, user reviews, location map, opening hours, and contact details.

2. User Account & Trip Planning:

    Login/Signup Page: Sign-up or log in for user accounts.
    User Dashboard: Overview of user profile, past trips, saved locations, upcoming reservations, and review history.
    Trip Planning Tool: Create new trips, add destinations (hotels, attractions), set travel dates, and manage itinerary.
    Review & Photo Sharing: Leave reviews and share photos for hotels, restaurants, and attractions visited.

Business Partner Pages (Hotels, Restaurants, etc.):

    Business Partner Login/Signup: Separate sign-up/login for hotels, restaurants, and transport agencies.
    Business Partner Dashboard:
        Manage Listings: Update profile information, photos, amenities, and services offered.
        Track Reservations: View upcoming and past reservations made by users.
        Analytics & Reporting: Access data on user interactions, reviews, and booking trends.

Group Travel Agency Pages:

    Group Travel Agency Dashboard: Similar functionalities to Business Partner Dashboard with additions:
        Group Booking Management: Manage group reservations for hotels, transport, and attractions.
        Discount Management: Set discounts for group bookings based on group size.
        Trip Planning & Publishing: Create pre-planned group itineraries with destinations, activities, and pricing.
        Trip Applications: View user applications for published group trips and manage group confirmation.

Admin Dashboard:

    Manage Users & Businesses: View and manage user and business partner accounts.
    Content Management: Manage website content (e.g., blog posts, travel guides).
    System Monitoring: Monitor website performance, user activity, and system health.
    Security Management: Manage user roles, permissions, and website security settings.

Additional Pages:

    About Us: Explain the website's mission, team, and values.
    Contact Us: Provide contact information and a contact form for user inquiries.
    Help & FAQs: Offer resources and answers to frequently asked questions.
    Terms & Conditions: Outline the website's terms of use and user agreements.
    Privacy Policy: Explain how the website collects, uses, and protects user data


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/travel-buddy-planner.git
cd travel-buddy-planner
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

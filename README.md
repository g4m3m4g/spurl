# URL Shortener

A modern and minimal URL shortener built with **React** (Frontend) and **Go** (Backend). This project allows users to shorten long URLs into compact, shareable links.

![Screenshot](https://github.com/user-attachments/assets/aa20372f-ff4a-4397-99b5-b22ac1627ce9)

## Features

- **Shorten URLs**: Convert long URLs into short, easy-to-share links.
- **Copy Short URL**: Copy the shortened URL to the clipboard with one click.
- **Open Short URL**: Directly open the shortened URL in a new tab.
- **Responsive Design**: Works seamlessly on all devices (desktop, tablet, mobile).
- **Toast Notifications**: User-friendly notifications for success and error messages.

## Technologies Used

- **Frontend**:
  - React (TypeScript)
  - Tailwind CSS (Styling)
  - Axios (HTTP Requests)
  - React Toastify (Notifications)

- **Backend**:
  - Go (Gin Framework)
  - GORM (ORM for Database)
  - MySQL (Database)
  - TiDB 

## Live Demo

Check out the live demo of the project: [Live Demo](https://spurl.vercel.app)

## Setup Instructions

### Prerequisites

- Node.js (for frontend)
- Go (for backend)
- MySQL (or any compatible database)

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener/frontend

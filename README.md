# URL Shortener


## Implementation Details

This project is a URL shortener built using Next.js v14+ with the App Router. It allows users to input a long URL and receive a shortened version, which when clicked will trigger a redirection. Key technologies used include:

- Next.js 14+ (App Router) for rendering and routing
- LocalStorage to persist shortened URLs client-side
- Client-Side Components for the user interface and URL form handling
- Dynamic routing for external redirection using the next/navigation module
- TailwindCss for application styles

The architecture involves a form component that accepts a URL, saves it and stores both the original and shortened slug in LocalStorage. When a user accesses a shortened URL, the application redirects them to the original URL.


## How to Run

1. Clone the Repository:

```bash
git clone https://github.com/Skylercrane23/leland-takehome.git
cd url-shortener
```


2. Install Dependencies:

Run the following command to install all necessary dependencies:

```bash
npm install
```


3. Run the Development Server:

Start the development server by running the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Testing

The solution has been tested manually and involves the following steps:

- Testing the URL shortening feature: Input long URLs, submit the form, and verify that shortened URLs are generated and saved in LocalStorage.
- Testing redirection: Access the generated short URLs to verify proper redirection to the original URLs.
- Error handling: Enter invalid URLs and test the application’s error message.


## Tools Used

- **[https://nextjs.org/](Next.js):** The framework used to build the URL shortener application.
- **[https://tailwindcss.com/](Tailwind CSS):** CSS framework to style application.
- **LocalStorage:** For client-side persistence of shortened URLs mappings.
- **[https://lucide.dev/](Lucide Icons):** Icon library
- **Visual Studio Code:** IDE for writing and organizing code.
- **ChatGPT (OpenAI)**: Used for generating ideas, and writing help writing README

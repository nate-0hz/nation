# Heading

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Is this a popular note and database centred app, famous for it's black on white, clean aesthetics?

No, but it is a functional clone of many of the app's features.

This is a personal tinker project I'm using to expand React knowledge, and to learn Next.js, TypeScript and TailWind CSS. The instructional component of the project is complete, and now I am working on building out additional features, and customising the app.

## What does it do?

This project is a comprehensive note-taking application built with modern web technologies. It provides a clean and intuitive interface for users to create, edit, and manage their notes. The application supports rich text editing, allowing users to format their notes with headers, bold or italic text, links, lists, and more. Users can also upload images to their notes, providing a more visual and engaging note-taking experience.

The application is built with Next.js and TypeScript, leveraging the power of server-side rendering for improved performance and SEO. It uses Convex for its NoSQL database, providing a flexible and scalable solution for data storage. User management is handled by Clerk, ensuring secure authentication and user data privacy. The application also supports file hosting through Edge Store, allowing users to upload and manage images in their notes.

On the front end, the application uses React, including Server Components, for building the user interface. It also uses Tailwind CSS for styling, providing a highly customizable and responsive design. The application includes several custom components, such as a cover image component, an icon picker, a search command component, and more. The project is developed using VS Code and Trunk for maintaining code quality. This project serves as a personal tinker project to expand knowledge in React, Next.js, TypeScript, and Tailwind CSS. It's currently in the phase of building out additional features and customizing the app.

## Can I install it and use it?

If you are looking to deploy, you will need to create accounts with Convex, Clerk and Edge Store, and add the relevant API keys to the .env file. You will also need to create a .env.local file with the following parameters:

``` .env
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

This project was not intended for public use, but more as a learning tool for myself, and to build upon for knowledge.

**Please note** The original project is created and offered by [CodeWithAntonio](https://www.codewithantonio.com/) as a tutorial in Next.js, TypeScript and TailwindCSS. Instead of deploying this code, I strongly advise visiting CodeWithAnotio's site or YouTube channel and following his excellent tutorials.

## Inspiration

Initial inspiration came from an excellent instructional by [Code With Antonio](https://www.youtube.com/@codewithantonio) on [YouTube]( https://www.youtube.com/watch?v=0OaDyjB9Ib8), and I have plans to customise, anbd build on its current features.

## Tech Stack

### Back end
- [Next.js v 14](https://nextjs.org/)
- [Convex](https://www.convex.dev/), for noSQL DB
- [Clerk](https://clerk.com/), for user management
- [Edge Store](https://edgestore.dev/), for file hosting


### Front end

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/), including Server Components
- [TailWind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/), for component library elements
- [Lucide](https://lucide.dev/), for beautiful icons
- [Sonner](https://sonner.emilkowal.ski/) because the best toast is opinionated toast
- [Block Note](https://www.blocknotejs.org/), for WYSIWYG editing

### Dev tools

- [VS Code](https://code.visualstudio.com/) for IDE
- [Trunk](https://trunk.io/), for code quality

## Reminders for me

### Dev server commands

- Convex:
npx convex dev

- next.js server:
npx run dev

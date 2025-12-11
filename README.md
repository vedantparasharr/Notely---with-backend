# Notely with Backend

Full-stack note-taking application built with Node.js, Express.js, and EJS. This project demonstrates core backend concepts including routing, middleware, file operations, and dynamic template rendering.

## Features

- Create, read, update, and delete notes
- Dynamic routing with URL parameters
- File system based data storage
- EJS templating for dynamic HTML rendering
- Clean separation of concerns (routes, views, public assets)
- Responsive UI with Tailwind CSS
- RESTful API-like endpoints

## Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-90C53F?style=flat&logo=ejs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## Project Structure

```
Notely-with-backend/
├── index.js              # Express server entry point
├── views/               # EJS template files
│   ├── home.ejs
│   ├── note.ejs
│   └── create.ejs
├── public/              # Static files (CSS, JS, images)
├── files/               # Stored note files (JSON)
├── package.json         # Dependencies
└── README.md
```

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/vedantparasharr/Notely---with-backend.git

# Navigate to project
cd Notely---with-backend

# Install dependencies
npm install

# Start the server
node index.js

# Open in browser
# http://localhost:3000
```

## How It Works

### Backend Architecture

1. **Server Setup**: Express.js server listens on port 3000
2. **Routing**: Different routes handle create, read, update, delete operations
3. **File Operations**: Uses Node.js `fs` module to store notes as JSON files
4. **Dynamic Routing**: URL parameters like `/note/:filename` retrieve specific notes
5. **Templating**: EJS renders dynamic HTML based on note data

### Key Endpoints

- `GET /` - Home page listing all notes
- `GET /create` - Create new note form
- `POST /create` - Save new note to file system
- `GET /note/:filename` - View specific note
- `GET /edit/:filename` - Edit note form
- `POST /update/:filename` - Update note
- `GET /delete/:filename` - Delete note

## Learning Outcomes

This project taught me:

- How Express middleware processes requests through the pipeline
- File system operations for data persistence
- Dynamic routing with URL parameters
- EJS templating and view rendering
- Separation of concerns (routes, views, public assets)
- HTML form handling and data validation
- Route organization best practices

## Future Enhancements

- Implement MongoDB instead of file system
- Add user authentication (login/signup)
- Add rich text editor for notes
- Implement search functionality
- Add tags and categories
- Deploy to cloud platform
- Add automated tests

## What's Next?

After building Notely, my focus is shifting to:

- Mastering Express.js middleware patterns
- Learning MongoDB for database-driven applications
- Implementing user authentication with JWT
- Building complete MERN stack applications
- API design and REST principles

## License

MIT

## Contact

Built with learning and determination by Vedant Parashar

- GitHub: [vedantparasharr](https://github.com/vedantparasharr)
- LinkedIn: [vedantparasharr](https://linkedin.com/in/vedantparasharr)
- Email: [iemvedant@gmail.com](mailto:iemvedant@gmail.com)

# CITK Placement Cell Portal

[![Production Deployment](https://img.shields.io/badge/production-deployed-brightgreen)](https://placements.cit.ac.in)
![License](https://img.shields.io/badge/license-MIT-blue)

Official placement management system for Central Institute of Technology Kokrajhar

## Features

- Student registration and profile management
- Company recruitment drive listings
- Placement statistics and analytics
- Alumni interaction portal
- T&P department administration dashboard

## Installation

```bash
git clone https://github.com/cit-kokrajhar/placement-portal.git
cd placement-portal
npm install
```

### Environment Setup
Create `.env.local` file with:
```env
NEXT_PUBLIC_API_URL=https://api.placements.cit.ac.in
DATABASE_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Technologies Used

- Next.js 14
- Tailwind CSS
- TypeScript
- MongoDB
- NextAuth.js
- Chart.js

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

# Flean Meals - Premium Grocery & Meals Marketplace

A modern, clean grocery shopping platform with Elasticsearch-powered product search, health scoring, and personalized recommendations.

## Features

- 🔍 **Advanced Product Search** - Elasticsearch-powered search with fuzzy matching, filters, and health scoring
- 🌿 **Healthy Products Filter** - Filter by Flean percentile score, dietary labels, and ingredients
- ✨ **Animated Search Marquee** - Perplexity-style scrolling search suggestions
- 🎨 **Beautiful UI** - Clean, modern design with smooth animations
- 📱 **Mobile Optimized** - Fully responsive design
- 🛒 **Shopping Cart** - Add products to cart with localStorage persistence

## Setup

### Prerequisites

- Node.js 18+ (for the development server)
- Elasticsearch cluster with API key access

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd flean-meals-v1
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Elasticsearch credentials:
```env
ES_URL=https://your-cluster.es.amazonaws.com:443
ELASTIC_INDEX=products-v2
ES_API_KEY=your-api-key-here
PORT=8080
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser:
```
http://localhost:8080
```

## Project Structure

```
flean-meals-v1/
├── assets/
│   ├── config.js          # Elasticsearch configuration (client-side)
│   ├── search-service.js  # Search API service
│   ├── search-ui.js        # Search UI controller
│   ├── script.js           # Main app logic
│   └── styles.css          # All styles
├── index.html              # Home page
├── search_results.html     # Search results page
├── server.js               # Express server with ES proxy
└── package.json            # Dependencies
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ES_URL` | Elasticsearch cluster URL | Yes |
| `ELASTIC_INDEX` | Index name (default: `products-v2`) | No |
| `ES_API_KEY` | Elasticsearch API key | Yes |
| `PORT` | Server port (default: `8080`) | No |

## Search Features

### Basic Search
- Multi-field search (name, description, brand)
- Fuzzy matching for typos
- Highlighted search terms
- Real-time search-as-you-type

### Filters
- **Healthy Only** - Filter by Flean percentile score (≥60%)
- **Dietary Labels** - Organic, Vegan, Gluten Free, etc.
- **Ingredient Avoidance** - Exclude specific ingredients
- **Price Range** - Min/max price filtering

### Display Features
- Product images with fallback handling
- Flean score badges (Premium, Healthy, Good)
- Dietary label badges
- Nutrition summary (calories, protein, fiber)
- Star ratings with review counts

## Development

### Running Tests
Open `test-search.html` in your browser to test the Elasticsearch connection.

### Building for Production
The app is static HTML/CSS/JS. For production:
1. Set environment variables on your hosting platform
2. Deploy the static files
3. Ensure the Express server (`server.js`) is running for the `/api/search` proxy endpoint

## Security Notes

- ⚠️ **Never commit API keys or `.env` files to version control**
- API keys are handled server-side only
- Client-side code uses the proxy endpoint (`/api/search`) to avoid exposing credentials
- The `.gitignore` file excludes sensitive files

## License

[Your License Here]

## Contributing

[Contributing guidelines here]


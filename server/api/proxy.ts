import axios from 'axios';
import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const url = query.url as string; // Get the 'url' query parameter

    if (!url) {
      return { error: 'No URL provided' };
    }
    try {
        console.info('Fetching', url);

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Connection': 'keep-alive',
                'Referer': 'https://www.google.com/', // Simulate coming from a search engine or referrer
            },
          });

        return response.data;
    } catch (error: any) {
      return { error: 'Error fetching the external page', details: error.message };
    }
  });
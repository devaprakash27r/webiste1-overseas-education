import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// Custom Vite plugin to handle feedback API
function feedbackPlugin() {
  return {
    name: 'feedback-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/feedback' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            const data = JSON.parse(body);
            const feedbackFile = path.resolve(process.cwd(), 'feedback.json');
            
            let existingFeedback = [];
            if (fs.existsSync(feedbackFile)) {
              const fileContent = fs.readFileSync(feedbackFile, 'utf8').trim();
              if (fileContent) {
                try {
                  existingFeedback = JSON.parse(fileContent);
                } catch (e) {
                  console.error('Error parsing feedback.json:', e);
                }
              }
            }
            
            existingFeedback.push({
              timestamp: new Date().toISOString(),
              ...data
            });
            
            fs.writeFileSync(feedbackFile, JSON.stringify(existingFeedback, null, 2));
            
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          });
        } else {
          next();
        }
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), feedbackPlugin()],
})

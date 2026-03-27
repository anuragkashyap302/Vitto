import app from './app.js';
import env from './config/env.js';
import { connectDatabases } from './config/db.js';

async function bootstrap() {
  try {
    await connectDatabases();
    app.listen(env.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Backend running on port ${env.port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to start backend:', error.message);
    process.exit(1);
  }
}

bootstrap();

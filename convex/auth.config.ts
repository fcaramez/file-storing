import { env } from '../lib/env';

const authConfig = {
  providers: [
    {
      domain: env.server.SITE_URL,
      applicationID: 'convex',
    },
  ],
};

export default authConfig;

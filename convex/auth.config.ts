import { env } from '../lib/env';

const authConfig = {
  providers: [
    {
      domain: env.server.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: 'convex',
    },
  ],
};

export default authConfig;

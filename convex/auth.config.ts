import { serverEnv } from '../lib/env/server';

const authConfig = {
  providers: [
    {
      domain: serverEnv.CLERK_FRONTEND_API_URL,
      applicationID: 'convex',
    },
  ],
};

export default authConfig;

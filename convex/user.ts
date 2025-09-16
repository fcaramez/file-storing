import { getAuthUserId } from '@convex-dev/auth/server';
import { mutation } from './_generated/server';

export const getUser = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);

    if (userId === null) {
      throw new Error('Client is not authenticated!');
    }
    const user = await ctx.db.get(userId);

    return user;
  },
});

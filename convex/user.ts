import { query } from './_generated/server';

export const getUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('Client is not authenticated!');
    }

    return await ctx.db
      .query('users')
      .filter((q) => q.eq(q.field('email'), identity.email))
      .first();
  },
});

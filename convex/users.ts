import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

// Get current authenticated user
export const currentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }

    const user = await ctx.db.get(userId);
    return user;
  },
});
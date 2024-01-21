
import { v } from "convex/values";

import { mutation, query } from "./_generated/server"

import { Doc, Id } from "./_generated/dataModel";

export const getSidebar = query({
  args: {
    parentDocument: v.optional(v.id("documents"))
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const documents = await ctx.db
    // query using documents collection/table
      .query("documents")
      // query using index "by_user_parent". (q) => allows for the query to be configured
      .withIndex("by_user_parent", (q) =>
        q
          // adds condition to match the userId of the retrieved document to the userId variable
          .eq("userId", userId)
          // adds condition to match parent document of document returned against args.parentDocument
          .eq("parentDocument", args.parentDocument)
      )
      // filters out documents that are archived
      .filter((q) =>
        q.eq(q.field("isArchived"), false)
        )
        .order("desc")
        .collect();

    return documents;
  }
})

export const create = mutation({
  args: {
    title: v.string(),
    parentDocument: v.optional(v.id("documents"))
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if(!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const document = await ctx.db.insert("documents", {
      title: args.title,
      parentDocument: args.parentDocument,
      userId,
      isArchived: false,
      isPublished: false
    });

    return document;
  }
})


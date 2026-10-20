import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Strategy-call request intake. No database is provisioned — this just logs
 * to the Worker output so the form never dead-ends. Watch `wrangler tail`
 * (or Workers Logs in the dashboard, enabled via `observability` in
 * wrangler.jsonc) to see submissions, or wire this up to a real store /
 * email provider later — on Cloudflare that would be D1 or KV, declared as
 * a binding in wrangler.jsonc.
 *
 * NOTE: console.log is the ONLY record of a submission right now. Workers
 * Logs retains ~3 days, so this is fine for validating the form but will
 * lose leads if left as the permanent intake. Returns a generic success
 * either way — never leak infra state to the client.
 */
export const submitContact = createServerFn({ method: "POST" })
  .validator(
    z.object({
      name: z.string().trim().min(1, "Your name is required.").max(120),
      email: z.string().trim().email("That email does not look right.").max(200),
      company: z.string().trim().max(160).optional().default(""),
      message: z
        .string()
        .trim()
        .min(10, "Tell us a little about what you want to automate (10+ characters).")
        .max(4000),
    }),
  )
  .handler(async ({ data }) => {
    console.log("[contact] request received:", JSON.stringify(data));
    return { ok: true as const };
  });

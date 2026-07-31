import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { bindings } from "../lib/bindings.server";

/**
 * Strategy-call request intake. Persists to D1 when the database binding is
 * provisioned (app.manifest.json "db": true); otherwise accepts and logs to the
 * Worker console so the form never dead-ends. Returns a generic success either
 * way — never leak infra state to the client.
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
    const { DB } = bindings();
    if (DB) {
      await DB.prepare(
        `CREATE TABLE IF NOT EXISTS contact_requests (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          company TEXT,
          message TEXT NOT NULL,
          created_at TEXT NOT NULL DEFAULT (datetime('now'))
        )`,
      ).run();
      await DB.prepare(
        `INSERT INTO contact_requests (name, email, company, message) VALUES (?, ?, ?, ?)`,
      )
        .bind(data.name, data.email, data.company, data.message)
        .run();
    } else {
      console.log(
        "[contact] no DB binding; request received:",
        JSON.stringify({ name: data.name, email: data.email, company: data.company }),
      );
    }
    return { ok: true as const };
  });

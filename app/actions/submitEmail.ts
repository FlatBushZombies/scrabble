"use server"

import { neon } from "@neondatabase/serverless"

export async function submitEmail(email: string) {
  try {
    const sql = neon(process.env.DATABASE_URL!)

    await sql`INSERT INTO waitlist (email) VALUES (${email})`

    return { success: true, message: "Email submitted successfully!" }
  } catch (error) {
    console.error("Error submitting email:", error)
    return { success: false, message: "Failed to submit email. Please try again." }
  }
}


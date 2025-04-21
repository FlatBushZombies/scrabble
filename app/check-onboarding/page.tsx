import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function CheckOnboardingPage() {
  const user = await currentUser()

  if (!user) {
    redirect("/sign-in")
  }

  // Check if user has completed onboarding by looking for metadata
  // If not, redirect to onboarding
  if (!user.publicMetadata.onboardingComplete) {
    redirect("/onboarding")
  }

  // If onboarding is complete, redirect to dashboard
  redirect("/dashboard")
}

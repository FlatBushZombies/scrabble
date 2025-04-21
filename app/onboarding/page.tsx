import OnboardingForm from "@/components/Onboarding"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function OnboardingPage() {
  const user = await currentUser()

  if (!user) {
    redirect("/sign-in")
  }

  // If user has already completed onboarding, redirect to dashboard
  if (user.publicMetadata.onboardingComplete) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Complete Your Profile</h1>
          <p className="mt-2 text-gray-600">Please provide some additional information to get started</p>
        </div>

        <OnboardingForm />
      </div>
    </div>
  )
}

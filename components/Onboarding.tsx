"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useClerk } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Toast } from "./ui/toast"

type FormData = {
  fullName: string
  jobTitle: string
  company: string
  industry: string
  bio: string
}

export default function OnboardingForm() {
  const { user } = useClerk()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: user?.fullName || "",
      jobTitle: "",
      company: "",
      industry: "",
      bio: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true)

      // Update user metadata with Clerk
      await user?.update({
        firstName: data.fullName.split(" ")[0],
        lastName: data.fullName.split(" ").slice(1).join(" "),
        publicMetadata: {
          ...user.publicMetadata,
          onboardingComplete: true,
          jobTitle: data.jobTitle,
          company: data.company,
          industry: data.industry,
          bio: data.bio,
        },
      })

      Toast({
        title: "Profile updated",
      })

      // Redirect to dashboard
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      console.error("Error updating profile:", error)
      Toast({
        title: "Error",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" {...register("fullName", { required: "Full name is required" })} />
        {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input id="jobTitle" {...register("jobTitle", { required: "Job title is required" })} />
        {errors.jobTitle && <p className="text-sm text-red-500">{errors.jobTitle.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" {...register("company", { required: "Company is required" })} />
        {errors.company && <p className="text-sm text-red-500">{errors.company.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" {...register("bio")} placeholder="Tell us a bit about yourself" className="min-h-[100px]" />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Complete Profile"}
      </Button>
    </form>
  )
}

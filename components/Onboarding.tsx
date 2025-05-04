"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm, Controller } from "react-hook-form"
import { useUser } from "@clerk/nextjs"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type FormData = {
  fullName: string
  jobTitle: string
  company: string
  industry: string
  bio: string
}

export default function OnboardingForm() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    control,
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
    if (!isLoaded || !user) {
      toast({
        title: "User not loaded",
        variant: "destructive",
      })
      return
    }

    try {
      setIsSubmitting(true)

      // Update basic user info
      await user.update({
        firstName: data.fullName.split(" ")[0],
        lastName: data.fullName.split(" ").slice(1).join(" ") || " ", // Ensure at least one space
      })

      // Update public metadata
      await user.update({
        unsafeMetadata: {
          ...user.unsafeMetadata,
          onboardingComplete: true,
          jobTitle: data.jobTitle,
          company: data.company,
          industry: data.industry,
          bio: data.bio,
        },
      })

      toast({
        title: "Profile updated successfully",
      })

      router.push("/dashboard")
    } catch (error) {
      console.error("Error updating profile:", error)
      toast({
        title: "Error updating profile",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input 
          id="fullName" 
          {...register("fullName", { required: "Full name is required" })} 
        />
        {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input 
          id="jobTitle" 
          {...register("jobTitle", { required: "Job title is required" })} 
        />
        {errors.jobTitle && <p className="text-sm text-red-500">{errors.jobTitle.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input 
          id="company" 
          {...register("company", { required: "Company is required" })} 
        />
        {errors.company && <p className="text-sm text-red-500">{errors.company.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Controller
          name="industry"
          control={control}
          rules={{ required: "Industry is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
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
          )}
        />
        {errors.industry && <p className="text-sm text-red-500">{errors.industry.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea 
          id="bio" 
          {...register("bio")} 
          placeholder="Tell us a bit about yourself" 
          className="min-h-[100px]" 
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Complete Profile"}
      </Button>
    </form>
  )
}
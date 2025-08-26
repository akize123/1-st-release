"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertCircle, Eye, EyeOff, User, Lock } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("login")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  // Login form state
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })

  // Signup form state
  const [signupData, setSignupData] = useState({
    fullName: "",
    gender: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    return password.length >= 8 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)
  }

  const validateLoginForm = () => {
    const newErrors: Record<string, string> = {}

    if (!loginData.username.trim()) {
      newErrors.username = "Username is required"
    } else if (loginData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters"
    }

    if (!loginData.password.trim()) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateSignupForm = () => {
    const newErrors: Record<string, string> = {}

    if (!signupData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    } else if (signupData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters"
    }

    if (!signupData.gender) {
      newErrors.gender = "Please select your gender"
    }

    if (!signupData.role) {
      newErrors.role = "Please select your role"
    }

    if (!signupData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(signupData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!signupData.password.trim()) {
      newErrors.password = "Password is required"
    } else if (!validatePassword(signupData.password)) {
      newErrors.password = "Password must be at least 8 characters with uppercase, lowercase, and number"
    }

    if (!signupData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateLoginForm()) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Check for demo credentials
      if (loginData.username === "admin" && loginData.password === "admin123!") {
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: loginData.username,
            role: "admin",
            name: "Admin User",
          }),
        )
        router.push("/admin/dashboard")
      } else if (loginData.username === "customer" && loginData.password === "customer123!") {
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: loginData.username,
            role: "customer",
            name: "Customer User",
          }),
        )
        router.push("/")
      } else {
        setErrors({ username: "Invalid username or password" })
        setSubmitStatus("error")
      }
    } catch (error) {
      console.log("[v0] Login error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateSignupForm()) {
      setSubmitStatus("error")
      return
    }

    setShowConfirmDialog(true)
  }

  const confirmSignup = async () => {
    setShowConfirmDialog(false)
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("[v0] Account created:", signupData)

      // Store user data
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: signupData.email,
          role: signupData.role,
          name: signupData.fullName,
          gender: signupData.gender,
        }),
      )

      setSubmitStatus("success")

      // Redirect based on role
      setTimeout(() => {
        if (signupData.role === "admin") {
          router.push("/admin/dashboard")
        } else {
          router.push("/")
        }
      }, 2000)
    } catch (error) {
      console.log("[v0] Signup error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string, formType: "login" | "signup") => {
    if (formType === "login") {
      setLoginData((prev) => ({ ...prev, [field]: value }))
    } else {
      setSignupData((prev) => ({ ...prev, [field]: value }))
    }

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
    
    // Clear form-level submit status
    if (submitStatus === "error") {
      setSubmitStatus(null)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your account or create a new one</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-center">Account Access</CardTitle>
              <CardDescription className="text-center">Choose to sign in or create a new account</CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus === "success" && (
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Account created successfully! Redirecting to your dashboard...
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === "error" && Object.keys(errors).length > 0 && (
                <Alert className="mb-6 border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">Please correct the errors and try again.</AlertDescription>
                </Alert>
              )}

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Create Account</TabsTrigger>
                </TabsList>

                {/* Login Form */}
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-username">Username</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-username"
                          type="text"
                          value={loginData.username}
                          onChange={(e) => handleInputChange("username", e.target.value, "login")}
                          className={`pl-10 ${errors.username ? "border-red-500" : ""}`}
                          placeholder="Enter your username"
                        />
                      </div>
                      {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          value={loginData.password}
                          onChange={(e) => handleInputChange("password", e.target.value, "login")}
                          className={`pl-10 pr-10 ${errors.password ? "border-red-500" : ""}`}
                          placeholder="Enter your password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Signing In..." : "Sign In"}
                    </Button>

                    <div className="text-center text-sm text-muted-foreground mt-4">
                      <p>Demo Credentials:</p>
                      <p>Admin: admin / admin123!</p>
                      <p>Customer: customer / customer123!</p>
                    </div>
                  </form>
                </TabsContent>

                {/* Signup Form */}
                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        value={signupData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value, "signup")}
                        className={errors.fullName ? "border-red-500" : ""}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">
                        Gender <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={signupData.gender}
                        onValueChange={(value) => handleInputChange("gender", value, "signup")}
                      >
                        <SelectTrigger className={errors.gender ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select your gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">
                        Role <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={signupData.role}
                        onValueChange={(value) => handleInputChange("role", value, "signup")}
                      >
                        <SelectTrigger className={errors.role ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="customer">Customer</SelectItem>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="admin">Administrator</SelectItem>
                          <SelectItem value="partner">Business Partner</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="signup-email"
                        type="email"
                        value={signupData.email}
                        onChange={(e) => handleInputChange("email", e.target.value, "signup")}
                        className={errors.email ? "border-red-500" : ""}
                        placeholder="Enter your email address"
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">
                        Password <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="signup-password"
                          type={showPassword ? "text" : "password"}
                          value={signupData.password}
                          onChange={(e) => handleInputChange("password", e.target.value, "signup")}
                          className={`pr-10 ${errors.password ? "border-red-500" : ""}`}
                          placeholder="Create a strong password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">
                        Confirm Password <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={signupData.confirmPassword}
                          onChange={(e) => handleInputChange("confirmPassword", e.target.value, "signup")}
                          className={`pr-10 ${errors.confirmPassword ? "border-red-500" : ""}`}
                          placeholder="Confirm your password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Creating Account..." : "Create Account"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-serif">Confirm Account Creation</DialogTitle>
            <DialogDescription>
              Are you sure you want to create an account with the following details?
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 py-4">
            <p>
              <strong>Name:</strong> {signupData.fullName}
            </p>
            <p>
              <strong>Email:</strong> {signupData.email}
            </p>
            <p>
              <strong>Gender:</strong> {signupData.gender}
            </p>
            <p>
              <strong>Role:</strong> {signupData.role}
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              No, Cancel
            </Button>
            <Button onClick={confirmSignup}>Yes, Create Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">New Kigali Designers</h3>
            <p className="text-background/80 mb-6">Crafting the future of African fashion, one thread at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

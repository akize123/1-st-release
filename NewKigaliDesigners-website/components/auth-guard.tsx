"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface AuthGuardProps {
  children: React.ReactNode
  requiredRole?: string
  redirectTo?: string
}

export function AuthGuard({ children, requiredRole, redirectTo = "/login" }: AuthGuardProps) {
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("user")

    if (!userData) {
      router.push(redirectTo)
      return
    }

    try {
      const user = JSON.parse(userData)

      if (requiredRole && user.role !== requiredRole) {
        router.push("/")
        return
      }

      setIsAuthorized(true)
      setLoading(false)
    } catch (error) {
      // Invalid user data, redirect to login
      localStorage.removeItem("user")
      router.push(redirectTo)
      return
    }
  }, [router, requiredRole, redirectTo])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthorized) {
    return null
  }

  return <>{children}</>
}

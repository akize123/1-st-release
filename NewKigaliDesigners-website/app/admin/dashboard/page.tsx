
"use client"

import { AuthGuard } from "@/components/auth-guard"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Bell,
  FileText,
  ShoppingCart,
  Users,
  Mail,
  Download,
  Eye,
  Trash2,
  AlertCircle,
  CheckCircle,
  Clock,
  Settings,
} from "lucide-react"

// Mock data for demonstration
const mockApplications = [
  {
    id: 1,
    type: "job",
    position: "Fashion Designer",
    applicantName: "Amina Uwimana",
    email: "amina.uwimana@gmail.com",
    phone: "+250 788 123 456",
    experience: "3 years",
    submittedAt: "2024-01-15T10:30:00Z",
    status: "pending",
  },
  {
    id: 2,
    type: "internship",
    firstName: "Jean",
    middleName: "Baptiste",
    lastName: "Nkurunziza",
    email: "jean.nkurunziza@student.edu",
    gender: "male",
    submittedAt: "2024-01-14T14:20:00Z",
    status: "pending",
  },
]

const mockOrders = [
  {
    id: "ORD-001",
    customerName: "Grace Mukamana",
    items: ["Traditional Dress", "Ceremonial Robe"],
    total: 150000,
    status: "processing",
    orderDate: "2024-01-16T09:15:00Z",
  },
  {
    id: "ORD-002",
    customerName: "Patrick Habimana",
    items: ["Business Suit", "Casual Shirt"],
    total: 120000,
    status: "completed",
    orderDate: "2024-01-15T16:45:00Z",
  },
]

const mockNotifications = [
  {
    id: 1,
    type: "order",
    message: "New order received from Grace Mukamana",
    timestamp: "2024-01-16T09:15:00Z",
    read: false,
  },
  {
    id: 2,
    type: "application",
    message: "New job application for Fashion Designer position",
    timestamp: "2024-01-15T10:30:00Z",
    read: false,
  },
  {
    id: 3,
    type: "internship",
    message: "New internship application received",
    timestamp: "2024-01-14T14:20:00Z",
    read: true,
  },
]

function AdminDashboard() {
  const [applications, setApplications] = useState(mockApplications)
  const [orders, setOrders] = useState(mockOrders)
  const [notifications, setNotifications] = useState(mockNotifications)
  const [stats, setStats] = useState({
    totalApplications: 0,
    totalOrders: 0,
    pendingApplications: 0,
    unreadNotifications: 0,
  })

  useEffect(() => {
    // Calculate stats
    setStats({
      totalApplications: applications.length,
      totalOrders: orders.length,
      pendingApplications: applications.filter((app) => app.status === "pending").length,
      unreadNotifications: notifications.filter((notif) => !notif.read).length,
    })
  }, [applications, orders, notifications])

  const handleViewApplication = (id: number) => {
    console.log("Viewing application:", id)
    // Logic to view application details
  }

  const handleApproveApplication = (id: number) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: "approved" } : app)),
    )
  }

  const handleRejectApplication = (id: number) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: "rejected" } : app)),
    )
  }

  const handleDeleteApplication = (id: number) => {
    setApplications((prev) => prev.filter((app) => app.id !== id))
  }

  const handleMarkNotificationRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)),
    )
  }

  const handleViewOrder = (id: string) => {
    console.log("Viewing order:", id)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "approved":
        return <Badge variant="default" className="bg-green-100 text-green-800">Approved</Badge>
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      case "processing":
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Processing</Badge>
      case "completed":
        return <Badge variant="default" className="bg-green-100 text-green-800">Completed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("rw-RW", {
      style: "currency",
      currency: "RWF",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">New Kigali Designers Management</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <div className="relative">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4" />
                  {stats.unreadNotifications > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {stats.unreadNotifications}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Applications</CardDescription>
              <CardTitle className="text-3xl">{stats.totalApplications}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                Job & Internship
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Pending Applications</CardDescription>
              <CardTitle className="text-3xl">{stats.pendingApplications}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                Awaiting Review
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Orders</CardDescription>
              <CardTitle className="text-3xl">{stats.totalOrders}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Customer Orders
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Notifications</CardDescription>
              <CardTitle className="text-3xl">{stats.unreadNotifications}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Bell className="h-4 w-4 mr-1" />
                Unread
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Notifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Recent Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.slice(0, 5).map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    notification.read ? "bg-gray-50" : "bg-blue-50 border-blue-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {notification.type === "order" && <ShoppingCart className="h-4 w-4 text-blue-600" />}
                    {notification.type === "application" && <FileText className="h-4 w-4 text-green-600" />}
                    {notification.type === "internship" && <Users className="h-4 w-4 text-purple-600" />}
                    <div>
                      <p className={`text-sm ${notification.read ? "text-gray-600" : "text-gray-900 font-medium"}`}>
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500">{formatDate(notification.timestamp)}</p>
                    </div>
                  </div>
                  {!notification.read && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleMarkNotificationRead(notification.id)}
                    >
                      Mark as Read
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Applications Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Applications Management
              </CardTitle>
              <CardDescription>Manage job and internship applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.map((application) => (
                  <div key={application.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">
                          {application.type === "job" ? "Job Application" : "Internship"}
                        </Badge>
                        {getStatusBadge(application.status)}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => handleViewApplication(application.id)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteApplication(application.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {application.type === "job" ? (
                      <div>
                        <h4 className="font-medium">{application.position}</h4>
                        <p className="text-sm text-gray-600">{application.applicantName}</p>
                        <p className="text-xs text-gray-500">{application.email}</p>
                        <p className="text-xs text-gray-500">Experience: {application.experience}</p>
                      </div>
                    ) : (
                      <div>
                        <h4 className="font-medium">Internship Application</h4>
                        <p className="text-sm text-gray-600">
                          {application.firstName} {application.middleName} {application.lastName}
                        </p>
                        <p className="text-xs text-gray-500">{application.email}</p>
                        <p className="text-xs text-gray-500">Gender: {application.gender}</p>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-xs text-gray-500">
                        Submitted: {formatDate(application.submittedAt)}
                      </p>
                      
                      {application.status === "pending" && (
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-green-600 border-green-600 hover:bg-green-50"
                            onClick={() => handleApproveApplication(application.id)}
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 border-red-600 hover:bg-red-50"
                            onClick={() => handleRejectApplication(application.id)}
                          >
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Orders Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Orders Management
              </CardTitle>
              <CardDescription>Track and manage customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{order.id}</Badge>
                        {getStatusBadge(order.status)}
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => handleViewOrder(order.id)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">{order.customerName}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Items: {order.items.join(", ")}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-green-600">
                          {formatCurrency(order.total)}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatDate(order.orderDate)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Admin Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                All applications and notifications are automatically forwarded to:
              </p>
              <p className="text-lg font-medium text-blue-800 mt-1">
                akizeisrael123@gmail.com
              </p>
              <p className="text-xs text-gray-500 mt-2">
                You will receive email notifications for all new applications, orders, and important updates.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function AdminDashboardPage() {
  return (
    <AuthGuard requiredRole="admin">
      <AdminDashboard />
    </AuthGuard>
  )
}

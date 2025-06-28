"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Edit, Trash2, Send, Users, Calendar, Bell, Shield } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Keynote: The Future of Design Systems",
    speaker: "Sarah Chen",
    time: "09:00 - 10:00",
    location: "Main Auditorium",
    attendees: 850,
    status: "Active",
  },
  {
    id: 2,
    title: "Hands-on: Figma Advanced Techniques",
    speaker: "Marcus Rodriguez",
    time: "10:30 - 12:00",
    location: "Workshop Room A",
    attendees: 120,
    status: "Active",
  },
  {
    id: 3,
    title: "Data Visualization Best Practices",
    speaker: "Dr. Emily Watson",
    time: "11:00 - 12:30",
    location: "Workshop Room B",
    attendees: 110,
    status: "Draft",
  },
]

const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Job Seeker",
    status: "Active",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Sarah Chen",
    email: "sarah@google.com",
    role: "Speaker",
    status: "Active",
    joinDate: "2024-01-10",
  },
  {
    id: 3,
    name: "Spam User",
    email: "spam@fake.com",
    role: "Job Seeker",
    status: "Flagged",
    joinDate: "2024-01-20",
  },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("events")
  const [notification, setNotification] = useState({
    title: "",
    message: "",
    type: "info",
  })

  const tabs = [
    { id: "events", label: "Events", icon: Calendar },
    { id: "users", label: "Users", icon: Users },
    { id: "notifications", label: "Notifications", icon: Bell },
  ]

  const sendNotification = () => {
    if (notification.title && notification.message) {
      console.log("Sending notification:", notification)
      setNotification({ title: "", message: "", type: "info" })
      // Here you would send the notification to all users
    }
  }

  const toggleUserStatus = (userId: number) => {
    console.log("Toggling user status for user:", userId)
    // Here you would update the user status
  }

  const deleteEvent = (eventId: number) => {
    console.log("Deleting event:", eventId)
    // Here you would delete the event
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-lg font-semibold flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Admin Dashboard
          </h1>
          <div></div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 px-4">
        <div className="flex space-x-1">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center"
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>
            )
          })}
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Event Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
            </div>

            <div className="space-y-4">
              {events.map((event) => (
                <Card key={event.id} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <p className="text-gray-600">{event.speaker}</p>
                        <p className="text-sm text-gray-500">
                          {event.time} • {event.location}
                        </p>
                      </div>
                      <Badge variant={event.status === "Active" ? "default" : "secondary"}>{event.status}</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-1" />
                        {event.attendees} attendees
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => deleteEvent(event.id)}>
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">User Management</h2>
              <div className="text-sm text-gray-600">{users.length} total users</div>
            </div>

            <div className="space-y-4">
              {users.map((user) => (
                <Card key={user.id} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{user.name}</h3>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-sm text-gray-500">Joined: {user.joinDate}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge variant={user.status === "Active" ? "default" : "destructive"}>{user.status}</Badge>
                        <Badge variant="outline">{user.role}</Badge>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant={user.status === "Active" ? "destructive" : "default"}
                        onClick={() => toggleUserStatus(user.id)}
                      >
                        {user.status === "Active" ? "Disable" : "Enable"}
                      </Button>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                      <Button size="sm" variant="outline">
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Push Notifications</h2>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send Notification to All Users</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="notificationTitle">Title</Label>
                  <Input
                    id="notificationTitle"
                    value={notification.title}
                    onChange={(e) => setNotification((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Notification title..."
                  />
                </div>

                <div>
                  <Label htmlFor="notificationMessage">Message</Label>
                  <Textarea
                    id="notificationMessage"
                    value={notification.message}
                    onChange={(e) => setNotification((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Notification message..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="notificationType">Type</Label>
                  <select
                    id="notificationType"
                    value={notification.type}
                    onChange={(e) => setNotification((prev) => ({ ...prev, type: e.target.value }))}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="info">Info</option>
                    <option value="warning">Warning</option>
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                  </select>
                </div>

                <Button
                  onClick={sendNotification}
                  disabled={!notification.title || !notification.message}
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Notification
                </Button>
              </CardContent>
            </Card>

            {/* Recent Notifications */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-900">Welcome to HireWire!</h4>
                    <p className="text-sm text-blue-700">
                      Conference starts tomorrow. Don't forget to check your schedule!
                    </p>
                    <p className="text-xs text-blue-600 mt-1">Sent 2 hours ago</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-900">Networking Event Tonight</h4>
                    <p className="text-sm text-green-700">
                      Join us for the opening mixer at 6 PM in the Networking Lounge.
                    </p>
                    <p className="text-xs text-green-600 mt-1">Sent 1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

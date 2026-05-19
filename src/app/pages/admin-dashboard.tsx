import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Users, Calendar, Heart, TrendingUp, DollarSign, Bell, Video, Settings } from "lucide-react";

export function AdminDashboardPage() {
  const stats = [
    { label: "Total Bookings", value: "1,247", icon: Calendar, change: "+12%", color: "text-blue-600" },
    { label: "Active Devotees", value: "5,432", icon: Users, change: "+8%", color: "text-green-600" },
    { label: "Donations", value: "₹2.5L", icon: Heart, change: "+15%", color: "text-rose-600" },
    { label: "Live Viewers", value: "892", icon: Video, change: "+5%", color: "text-purple-600" },
  ];

  const recentBookings = [
    { id: "BK-001", name: "Rajesh Kumar", pooja: "Rudrabhishek", date: "Mar 10", status: "Confirmed" },
    { id: "BK-002", name: "Priya Sharma", pooja: "Archana", date: "Mar 11", status: "Pending" },
    { id: "BK-003", name: "Venkat Iyer", pooja: "Laghu Rudra", date: "Mar 12", status: "Confirmed" },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative h-[200px] overflow-hidden bg-gradient-to-br from-[#78350f] to-[#92400e]">
        <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-heading text-3xl md:text-5xl text-white mb-2">Admin Dashboard</h1>
              <p className="text-[#fbbf24]">Temple Management System</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-[#d97706]/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      <Badge className="bg-green-50 text-green-600">{stat.change}</Badge>
                    </div>
                    <p className="text-2xl md:text-3xl text-[#78350f] mb-1">{stat.value}</p>
                    <p className="text-sm text-[#78716c]">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="donations">Donations</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings">
              <Card className="border-[#d97706]/20">
                <CardHeader>
                  <CardTitle className="font-heading text-[#78350f]">Recent Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-[#d97706]/20">
                        <tr className="text-left">
                          <th className="pb-3 text-sm text-[#78716c]">Booking ID</th>
                          <th className="pb-3 text-sm text-[#78716c]">Devotee</th>
                          <th className="pb-3 text-sm text-[#78716c]">Pooja</th>
                          <th className="pb-3 text-sm text-[#78716c]">Date</th>
                          <th className="pb-3 text-sm text-[#78716c]">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentBookings.map((booking) => (
                          <tr key={booking.id} className="border-b border-[#d97706]/10">
                            <td className="py-4 text-sm text-[#78350f]">{booking.id}</td>
                            <td className="py-4 text-sm text-[#78716c]">{booking.name}</td>
                            <td className="py-4 text-sm text-[#78716c]">{booking.pooja}</td>
                            <td className="py-4 text-sm text-[#78716c]">{booking.date}</td>
                            <td className="py-4">
                              <Badge className={booking.status === "Confirmed" ? "bg-green-600" : "bg-yellow-600"}>
                                {booking.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="donations">
              <Card className="border-[#d97706]/20">
                <CardHeader>
                  <CardTitle className="font-heading text-[#78350f]">Donation Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-[#fef3e2] rounded-lg">
                      <DollarSign className="w-8 h-8 text-[#d97706] mb-2" />
                      <p className="text-2xl text-[#78350f] mb-1">₹1.2L</p>
                      <p className="text-sm text-[#78716c]">This Month</p>
                    </div>
                    <div className="p-4 bg-[#fef3e2] rounded-lg">
                      <Users className="w-8 h-8 text-[#d97706] mb-2" />
                      <p className="text-2xl text-[#78350f] mb-1">342</p>
                      <p className="text-sm text-[#78716c]">Total Donors</p>
                    </div>
                    <div className="p-4 bg-[#fef3e2] rounded-lg">
                      <TrendingUp className="w-8 h-8 text-[#d97706] mb-2" />
                      <p className="text-2xl text-[#78350f] mb-1">+18%</p>
                      <p className="text-sm text-[#78716c]">Growth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events">
              <Card className="border-[#d97706]/20">
                <CardHeader>
                  <CardTitle className="font-heading text-[#78350f]">Event Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#78716c]">Manage upcoming festivals and temple events</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card className="border-[#d97706]/20">
                <CardHeader>
                  <CardTitle className="font-heading text-[#78350f]">Analytics Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#78716c]">View detailed analytics and reports</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="border-[#d97706]/20">
                <CardHeader>
                  <CardTitle className="font-heading text-[#78350f]">System Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#78716c]">Configure temple management system settings</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

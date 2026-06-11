import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from "../components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Users,
  Calendar,
  Heart,
  TrendingUp,
  DollarSign,
  Bell,
  Video,
  Settings,
  LayoutDashboard,
  Image as ImageIcon,
  BookOpen,
  Plus,
  Edit,
  Trash2
} from "lucide-react";

export function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "bookings", label: "Bookings", icon: Calendar },
    { id: "deities", label: "Deities", icon: Heart },
    { id: "festivals", label: "Festivals", icon: Bell },
    { id: "donations", label: "Donations", icon: DollarSign },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
    { id: "announcements", label: "Announcements", icon: BookOpen },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="h-16 flex items-center justify-center border-b border-border/50">
          <div className="flex items-center gap-2 px-4 w-full">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A227] to-[#D4B870] flex items-center justify-center">
              <span className="text-white font-bold">ॐ</span>
            </div>
            <span className="font-heading text-[#1A3A6C] text-lg font-bold">Admin Panel</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu className="mt-4 px-2">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  isActive={activeTab === item.id}
                  onClick={() => setActiveTab(item.id)}
                  className="w-full text-[#1A3A6C] hover:bg-[#FAF6EE] data-[active=true]:bg-[#C9A227] data-[active=true]:text-white"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="ml-2 font-medium">{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      <SidebarInset className="flex-1 bg-neutral-50/50">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white/50 backdrop-blur-md sticky top-0 z-10">
          <SidebarTrigger className="-ml-1 text-[#C9A227]" />
          <div className="w-px h-4 bg-border mx-2" />
          <h2 className="text-lg font-heading text-[#1A3A6C] capitalize">
            {menuItems.find(i => i.id === activeTab)?.label}
          </h2>
        </header>
        
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "dashboard" && <DashboardView />}
              {activeTab === "deities" && <DeitiesView />}
              {activeTab === "festivals" && <FestivalsView />}
              {activeTab === "bookings" && <BookingsView />}
              {activeTab === "donations" && <DonationsView />}
              {/* Other tabs can be mapped to a fallback or similar views */}
              {["gallery", "announcements", "settings"].includes(activeTab) && (
                <div className="flex h-[400px] items-center justify-center text-muted-foreground border-2 border-dashed rounded-xl">
                  {activeTab} module under development
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

// --- Views ---

function DashboardView() {
  const stats = [
    { label: "Total Bookings", value: "1,247", icon: Calendar, change: "+12%", color: "text-blue-600" },
    { label: "Active Devotees", value: "5,432", icon: Users, change: "+8%", color: "text-green-600" },
    { label: "Donations", value: "₹2.5L", icon: Heart, change: "+15%", color: "text-rose-600" },
    { label: "Live Viewers", value: "892", icon: Video, change: "+5%", color: "text-purple-600" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-[#C9A227]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <Badge className="bg-green-50 text-green-600">{stat.change}</Badge>
              </div>
              <p className="text-3xl text-[#1A3A6C] mb-1 font-bold">{stat.value}</p>
              <p className="text-sm text-[#666666]">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest bookings and donations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center gap-4 border-b pb-4 last:border-0">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EE] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#1A3A6C]">New Pooja Booking</p>
                    <p className="text-sm text-muted-foreground">Rajesh Kumar - Rudrabhishek</p>
                  </div>
                  <span className="text-xs text-muted-foreground">10 min ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Plus className="w-5 h-5" /> Add Festival
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <BookOpen className="w-5 h-5" /> Post Announcement
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <ImageIcon className="w-5 h-5" /> Upload Gallery
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Settings className="w-5 h-5" /> Temple Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function DeitiesView() {
  const deities = [
    { id: 1, name: "Lord Mahadev", role: "Presiding Deity", location: "Main Sanctum" },
    { id: 2, name: "Goddess Parvati", role: "Consort", location: "Left Shrine" },
    { id: 3, name: "Lord Ganesha", role: "Remover of Obstacles", location: "Entrance" },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Manage Deities</CardTitle>
          <CardDescription>Update information about temple deities</CardDescription>
        </div>
        <Button className="bg-[#C9A227] hover:bg-[#D4B870]"><Plus className="w-4 h-4 mr-2"/> Add Deity</Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-neutral-50">
              <tr>
                <th className="px-6 py-3 rounded-tl-lg">Name</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3 rounded-tr-lg text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {deities.map(d => (
                <tr key={d.id} className="border-b last:border-0">
                  <td className="px-6 py-4 font-medium text-[#1A3A6C]">{d.name}</td>
                  <td className="px-6 py-4">{d.role}</td>
                  <td className="px-6 py-4">{d.location}</td>
                  <td className="px-6 py-4 text-right flex justify-end gap-2">
                    <Button variant="ghost" size="icon"><Edit className="w-4 h-4 text-blue-600" /></Button>
                    <Button variant="ghost" size="icon"><Trash2 className="w-4 h-4 text-red-600" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

function FestivalsView() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Manage Festivals</CardTitle>
          <CardDescription>Schedule and update upcoming festivals</CardDescription>
        </div>
        <Button className="bg-[#C9A227] hover:bg-[#D4B870]"><Plus className="w-4 h-4 mr-2"/> Add Festival</Button>
      </CardHeader>
      <CardContent>
        <div className="flex h-40 items-center justify-center text-muted-foreground border rounded-lg bg-neutral-50">
          No upcoming festivals found. Click 'Add Festival' to create one.
        </div>
      </CardContent>
    </Card>
  );
}

function BookingsView() {
  const bookings = [
    { id: "BK-001", name: "Rajesh Kumar", pooja: "Rudrabhishek", date: "Mar 10", status: "Confirmed" },
    { id: "BK-002", name: "Priya Sharma", pooja: "Archana", date: "Mar 11", status: "Pending" },
    { id: "BK-003", name: "Venkat Iyer", pooja: "Laghu Rudra", date: "Mar 12", status: "Confirmed" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-neutral-50">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Devotee</th>
                <th className="px-6 py-3">Pooja</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id} className="border-b last:border-0">
                  <td className="px-6 py-4 font-medium">{b.id}</td>
                  <td className="px-6 py-4">{b.name}</td>
                  <td className="px-6 py-4">{b.pooja}</td>
                  <td className="px-6 py-4">{b.date}</td>
                  <td className="px-6 py-4 text-right">
                    <Badge className={b.status === "Confirmed" ? "bg-green-600" : "bg-yellow-600"}>
                      {b.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

function DonationsView() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-[#FAF6EE] border-0">
          <CardContent className="p-6">
            <DollarSign className="w-8 h-8 text-[#C9A227] mb-2" />
            <p className="text-3xl text-[#1A3A6C] mb-1 font-bold">₹1.2L</p>
            <p className="text-sm text-[#666666]">This Month</p>
          </CardContent>
        </Card>
        <Card className="bg-[#FAF6EE] border-0">
          <CardContent className="p-6">
            <Users className="w-8 h-8 text-[#C9A227] mb-2" />
            <p className="text-3xl text-[#1A3A6C] mb-1 font-bold">342</p>
            <p className="text-sm text-[#666666]">Total Donors</p>
          </CardContent>
        </Card>
        <Card className="bg-[#FAF6EE] border-0">
          <CardContent className="p-6">
            <TrendingUp className="w-8 h-8 text-[#C9A227] mb-2" />
            <p className="text-3xl text-[#1A3A6C] mb-1 font-bold">+18%</p>
            <p className="text-sm text-[#666666]">Growth</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Donations</CardTitle>
        </CardHeader>
        <CardContent>
           <div className="flex h-40 items-center justify-center text-muted-foreground border rounded-lg bg-neutral-50">
            Donation history will appear here.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


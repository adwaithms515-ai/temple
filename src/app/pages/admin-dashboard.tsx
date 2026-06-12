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
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
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
  Trash2,
  FileText,
  MessageSquare,
  Info,
  Flame,
  Clock,
  ShoppingBag,
  CalendarDays,
  Radio,
  Link as LinkIcon,
  Lock,
} from "lucide-react";

export function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  if (!isAuthenticated) {
    return <AdminLoginView onLogin={() => setIsAuthenticated(true)} />;
  }

  const menuGroups = [
    {
      label: "Overview",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "donations", label: "Donations", icon: DollarSign },
      ]
    },
    {
      label: "Content Management",
      items: [
        { id: "blog", label: "Announcements & Blog", icon: FileText },
        { id: "gallery", label: "Gallery", icon: ImageIcon },
        { id: "testimonials", label: "Testimonials", icon: MessageSquare },
        { id: "pilgrim-info", label: "Pilgrim Info", icon: Info },
        { id: "deities", label: "Deities", icon: Heart },
      ]
    },
    {
      label: "Temple Services",
      items: [
        { id: "poojas", label: "Poojas", icon: Flame },
        { id: "rituals", label: "Rituals", icon: Clock },
        { id: "festivals", label: "Festivals", icon: Bell },
        { id: "prasadam", label: "Prasadam Store", icon: ShoppingBag },
        { id: "livestream", label: "Live Streaming", icon: Radio },
      ]
    },
    {
      label: "Bookings & Devotees",
      items: [
        { id: "bookings", label: "Pooja Bookings", icon: Calendar },
        { id: "darshan-slots", label: "Darshan Slots", icon: CalendarDays },
        { id: "devotees", label: "Devotees/Users", icon: Users },
      ]
    },
    {
      label: "System",
      items: [
        { id: "settings", label: "Temple Settings", icon: Settings },
      ]
    }
  ];

  const getActiveTabLabel = () => {
    for (const group of menuGroups) {
      const item = group.items.find((i) => i.id === activeTab);
      if (item) return item.label;
    }
    return "Dashboard";
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="h-16 flex items-center justify-center border-b border-border/50">
          <div className="flex items-center gap-2 px-4 w-full">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A227] to-[#D4B870] flex items-center justify-center shrink-0">
              <span className="text-white font-bold">ॐ</span>
            </div>
            <span className="font-heading text-[#1A3A6C] text-lg font-bold truncate">Admin Panel</span>
          </div>
        </SidebarHeader>
        <SidebarContent className="pb-8">
          {menuGroups.map((group, idx) => (
            <SidebarGroup key={idx}>
              <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mt-4 mb-2">
                {group.label}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="px-2">
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        isActive={activeTab === item.id}
                        onClick={() => setActiveTab(item.id)}
                        className="w-full text-[#1A3A6C] hover:bg-[#FAF6EE] data-[active=true]:bg-[#C9A227] data-[active=true]:text-white transition-colors"
                      >
                        <item.icon className="w-4 h-4 shrink-0" />
                        <span className="ml-2 font-medium text-sm">{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>

      <SidebarInset className="flex-1 bg-neutral-50/50 h-screen overflow-hidden flex flex-col">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
          <SidebarTrigger className="-ml-1 text-[#C9A227]" />
          <div className="w-px h-4 bg-border mx-2" />
          <h2 className="text-lg font-heading text-[#1A3A6C] capitalize font-semibold">
            {getActiveTabLabel()}
          </h2>
        </header>
        
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="pb-20"
            >
              {activeTab === "dashboard" && <DashboardView setActiveTab={setActiveTab} />}
              {activeTab === "deities" && <DeitiesView />}
              {activeTab === "festivals" && <FestivalsView />}
              {activeTab === "bookings" && <BookingsView />}
              {activeTab === "donations" && <DonationsView />}
              {activeTab === "blog" && <BlogView />}
              {activeTab === "gallery" && <GalleryView />}
              {activeTab === "testimonials" && <TestimonialsView />}
              {activeTab === "pilgrim-info" && <PilgrimInfoView />}
              {activeTab === "poojas" && <PoojasView />}
              {activeTab === "rituals" && <RitualsView />}
              {activeTab === "prasadam" && <PrasadamView />}
              {activeTab === "livestream" && <LiveStreamView />}
              {activeTab === "darshan-slots" && <DarshanSlotsView />}
              {activeTab === "devotees" && <DevoteesView />}
              {activeTab === "settings" && <SettingsView />}
            </motion.div>
          </AnimatePresence>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

// --- Views ---

function DashboardView({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const stats = [
    { label: "Total Bookings", value: "1,247", icon: Calendar, change: "+12%", color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Active Devotees", value: "5,432", icon: Users, change: "+8%", color: "text-green-600", bg: "bg-green-50" },
    { label: "Donations", value: "₹2.5L", icon: Heart, change: "+15%", color: "text-rose-600", bg: "bg-rose-50" },
    { label: "Live Viewers", value: "892", icon: Video, change: "+5%", color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-[#C9A227]/20 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className={`w-10 h-10 rounded-full ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <Badge className="bg-green-50 text-green-600 hover:bg-green-100 border-0">{stat.change}</Badge>
              </div>
              <p className="text-3xl text-[#1A3A6C] mb-1 font-bold">{stat.value}</p>
              <p className="text-sm text-[#666666] font-medium">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest bookings and donations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "New Pooja Booking", desc: "Rajesh Kumar - Rudrabhishek", time: "10 min ago", icon: Calendar },
                { title: "Donation Received", desc: "₹5,001 from Anonymous", time: "1 hour ago", icon: Heart },
                { title: "Prasadam Order", desc: "Order #1024 - Ladoo Box", time: "2 hours ago", icon: ShoppingBag },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6EE] flex items-center justify-center shrink-0">
                    <activity.icon className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#1A3A6C] truncate">{activity.title}</p>
                    <p className="text-sm text-muted-foreground truncate">{activity.desc}</p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Commonly used admin tasks</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-24 flex-col gap-3 hover:border-[#C9A227] hover:text-[#C9A227]" onClick={() => setActiveTab("festivals")}>
              <Plus className="w-6 h-6" /> <span>Add Festival</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-3 hover:border-[#C9A227] hover:text-[#C9A227]" onClick={() => setActiveTab("blog")}>
              <BookOpen className="w-6 h-6" /> <span>Post Announcement</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-3 hover:border-[#C9A227] hover:text-[#C9A227]" onClick={() => setActiveTab("gallery")}>
              <ImageIcon className="w-6 h-6" /> <span>Upload Media</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-3 hover:border-[#C9A227] hover:text-[#C9A227]" onClick={() => setActiveTab("settings")}>
              <Settings className="w-6 h-6" /> <span>Temple Settings</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Reusable Table Component Template Helper
function AdminTableCard({ title, description, items, columns, renderRow, onAdd, addLabel }: any) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <CardTitle className="text-xl text-[#1A3A6C]">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        {onAdd && (
          <Button className="bg-[#C9A227] hover:bg-[#D4B870] text-white shrink-0" onClick={onAdd}>
            <Plus className="w-4 h-4 mr-2"/> {addLabel || "Add New"}
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-neutral-100 border-b">
              <tr>
                {columns.map((col: string, i: number) => (
                  <th key={i} className={`px-6 py-4 font-semibold ${i === columns.length - 1 ? 'text-right' : ''}`}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {items.length > 0 ? items.map((item: any, idx: number) => (
                <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                  {renderRow(item)}
                </tr>
              )) : (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-8 text-center text-muted-foreground">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

function DeitiesView() {
  const deities = [
    { id: 1, name: "Lord Mahadev", role: "Presiding Deity", location: "Main Sanctum" },
    { id: 2, name: "Goddess Parvati", role: "Consort", location: "Left Shrine" },
    { id: 3, name: "Lord Ganesha", role: "Remover of Obstacles", location: "Entrance" },
  ];

  return (
    <AdminTableCard
      title="Manage Deities"
      description="Update information about temple deities"
      onAdd={() => {}}
      addLabel="Add Deity"
      columns={["Name", "Role", "Location", "Actions"]}
      items={deities}
      renderRow={(d: any) => (
        <>
          <td className="px-6 py-4 font-medium text-[#1A3A6C]">{d.name}</td>
          <td className="px-6 py-4">{d.role}</td>
          <td className="px-6 py-4">{d.location}</td>
          <td className="px-6 py-4 text-right flex justify-end gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50"><Edit className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"><Trash2 className="w-4 h-4" /></Button>
          </td>
        </>
      )}
    />
  );
}

function FestivalsView() {
  const festivals = [
    { id: 1, name: "Maha Shivaratri", date: "2024-03-08", status: "Upcoming" },
    { id: 2, name: "Ganesh Chaturthi", date: "2024-09-07", status: "Upcoming" },
  ];

  return (
    <AdminTableCard
      title="Manage Festivals"
      description="Schedule and update upcoming festivals"
      onAdd={() => {}}
      addLabel="Add Festival"
      columns={["Festival Name", "Date", "Status", "Actions"]}
      items={festivals}
      renderRow={(f: any) => (
        <>
          <td className="px-6 py-4 font-medium text-[#1A3A6C]">{f.name}</td>
          <td className="px-6 py-4">{f.date}</td>
          <td className="px-6 py-4"><Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-0">{f.status}</Badge></td>
          <td className="px-6 py-4 text-right flex justify-end gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="w-4 h-4 text-blue-600" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="w-4 h-4 text-red-600" /></Button>
          </td>
        </>
      )}
    />
  );
}

function BookingsView() {
  const bookings = [
    { id: "BK-001", name: "Rajesh Kumar", pooja: "Rudrabhishek", date: "Mar 10", status: "Confirmed" },
    { id: "BK-002", name: "Priya Sharma", pooja: "Archana", date: "Mar 11", status: "Pending" },
    { id: "BK-003", name: "Venkat Iyer", pooja: "Laghu Rudra", date: "Mar 12", status: "Confirmed" },
  ];
  return (
    <AdminTableCard
      title="Recent Bookings"
      description="Manage all pooja and special service bookings."
      columns={["ID", "Devotee", "Pooja", "Date", "Status"]}
      items={bookings}
      renderRow={(b: any) => (
        <>
          <td className="px-6 py-4 font-medium text-[#1A3A6C]">{b.id}</td>
          <td className="px-6 py-4">{b.name}</td>
          <td className="px-6 py-4">{b.pooja}</td>
          <td className="px-6 py-4">{b.date}</td>
          <td className="px-6 py-4 text-right">
            <Badge className={b.status === "Confirmed" ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"} border-0>
              {b.status}
            </Badge>
          </td>
        </>
      )}
    />
  );
}

function DonationsView() {
  const donations = [
    { id: "TX-101", donor: "Anonymous", amount: "₹5,001", purpose: "General Fund", date: "Mar 09" },
    { id: "TX-102", donor: "Suresh P", amount: "₹1,001", purpose: "Annadanam", date: "Mar 09" },
    { id: "TX-103", donor: "Amit Shah", amount: "₹10,000", purpose: "Temple Construction", date: "Mar 08" },
  ];
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-[#FAF6EE] to-white border border-[#C9A227]/20 shadow-sm">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-[#C9A227]" />
            </div>
            <p className="text-3xl text-[#1A3A6C] mb-1 font-bold">₹1.2L</p>
            <p className="text-sm text-[#666666] font-medium">This Month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-[#FAF6EE] to-white border border-[#C9A227]/20 shadow-sm">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-3xl text-[#1A3A6C] mb-1 font-bold">342</p>
            <p className="text-sm text-[#666666] font-medium">Total Donors</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-[#FAF6EE] to-white border border-[#C9A227]/20 shadow-sm">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-3xl text-[#1A3A6C] mb-1 font-bold">+18%</p>
            <p className="text-sm text-[#666666] font-medium">Growth vs Last Month</p>
          </CardContent>
        </Card>
      </div>
      
      <AdminTableCard
        title="Recent Donations"
        columns={["Transaction ID", "Donor", "Amount", "Purpose", "Date"]}
        items={donations}
        renderRow={(d: any) => (
          <>
            <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{d.id}</td>
            <td className="px-6 py-4 font-medium text-[#1A3A6C]">{d.donor}</td>
            <td className="px-6 py-4 font-semibold text-green-600">{d.amount}</td>
            <td className="px-6 py-4">{d.purpose}</td>
            <td className="px-6 py-4 text-right">{d.date}</td>
          </>
        )}
      />
    </div>
  );
}

function BlogView() {
  const posts = [
    { title: "Maha Shivaratri Preparations", author: "Admin", date: "Mar 01", status: "Published" },
    { title: "Temple History Part 2", author: "Head Priest", date: "Feb 20", status: "Draft" },
  ];
  return (
    <AdminTableCard
      title="Announcements & Blog"
      description="Create and manage news, updates, and spiritual articles."
      onAdd={() => {}}
      addLabel="New Post"
      columns={["Title", "Author", "Date", "Status", "Actions"]}
      items={posts}
      renderRow={(p: any) => (
        <>
          <td className="px-6 py-4 font-medium text-[#1A3A6C]">{p.title}</td>
          <td className="px-6 py-4">{p.author}</td>
          <td className="px-6 py-4">{p.date}</td>
          <td className="px-6 py-4">
            <Badge className={p.status === "Published" ? "bg-green-100 text-green-700" : "bg-neutral-200 text-neutral-700"} border-0>
              {p.status}
            </Badge>
          </td>
          <td className="px-6 py-4 text-right flex justify-end gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="w-4 h-4 text-blue-600" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="w-4 h-4 text-red-600" /></Button>
          </td>
        </>
      )}
    />
  );
}

function GalleryView() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Image Gallery</CardTitle>
          <CardDescription>Manage photos and videos shown on the site</CardDescription>
        </div>
        <Button className="bg-[#C9A227] hover:bg-[#D4B870] text-white">
          <ImageIcon className="w-4 h-4 mr-2" /> Upload Media
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="group relative aspect-square rounded-lg border overflow-hidden bg-neutral-100">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full"><Edit className="w-4 h-4" /></Button>
                <Button size="icon" variant="destructive" className="h-8 w-8 rounded-full"><Trash2 className="w-4 h-4" /></Button>
              </div>
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Image {i}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function TestimonialsView() {
  const testimonials = [
    { name: "Rahul S.", review: "Very peaceful darshan...", rating: 5, status: "Approved" },
    { name: "Anita K.", review: "The arrangements were good.", rating: 4, status: "Pending" },
  ];
  return (
    <AdminTableCard
      title="Testimonials"
      description="Moderate reviews left by devotees."
      columns={["Devotee Name", "Review Snippet", "Rating", "Status", "Actions"]}
      items={testimonials}
      renderRow={(t: any) => (
        <>
          <td className="px-6 py-4 font-medium text-[#1A3A6C]">{t.name}</td>
          <td className="px-6 py-4 max-w-xs truncate">{t.review}</td>
          <td className="px-6 py-4">{t.rating} ★</td>
          <td className="px-6 py-4">
            <Badge className={t.status === "Approved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} border-0>
              {t.status}
            </Badge>
          </td>
          <td className="px-6 py-4 text-right flex justify-end gap-2">
            {t.status === "Pending" && <Button variant="outline" size="sm" className="h-8">Approve</Button>}
            <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="w-4 h-4 text-red-600" /></Button>
          </td>
        </>
      )}
    />
  );
}

function PilgrimInfoView() {
  const infoSections = [
    { title: "Temple Timings", category: "General", lastUpdated: "Jan 10" },
    { title: "How to Reach", category: "Travel", lastUpdated: "Jan 15" },
    { title: "Dress Code", category: "Guidelines", lastUpdated: "Feb 02" },
  ];
  return (
    <AdminTableCard
      title="Pilgrim Information"
      description="Update guidelines, timings, and FAQs."
      onAdd={() => {}}
      addLabel="Add Section"
      columns={["Section Title", "Category", "Last Updated", "Actions"]}
      items={infoSections}
      renderRow={(i: any) => (
        <>
          <td className="px-6 py-4 font-medium text-[#1A3A6C]">{i.title}</td>
          <td className="px-6 py-4"><Badge variant="outline">{i.category}</Badge></td>
          <td className="px-6 py-4">{i.lastUpdated}</td>
          <td className="px-6 py-4 text-right flex justify-end gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="w-4 h-4 text-blue-600" /></Button>
          </td>
        </>
      )}
    />
  );
}

function PoojasView() {
  const poojas = [
    { name: "Rudrabhishek", price: "₹1,100", duration: "1 Hour", isAvailable: true },
    { name: "Maha Mrityunjaya Jaap", price: "₹5,100", duration: "4 Hours", isAvailable: true },
    { name: "Special Archana", price: "₹251", duration: "15 Mins", isAvailable: false },
  ];
  return (
    <AdminTableCard
      title="Poojas Catalog"
      description="Manage available poojas, pricing, and availability."
      onAdd={() => {}}
      addLabel="Add Pooja"
      columns={["Pooja Name", "Price", "Duration", "Status", "Actions"]}
      items={poojas}
      renderRow={(p: any) => (
        <>
          <td className="px-6 py-4 font-medium text-[#1A3A6C]">{p.name}</td>
          <td className="px-6 py-4 font-semibold">{p.price}</td>
          <td className="px-6 py-4 text-muted-foreground">{p.duration}</td>
          <td className="px-6 py-4">
             <Badge className={p.isAvailable ? "bg-green-100 text-green-700" : "bg-neutral-200 text-neutral-700"} border-0>
              {p.isAvailable ? "Available" : "Unavailable"}
            </Badge>
          </td>
          <td className="px-6 py-4 text-right flex justify-end gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="w-4 h-4 text-blue-600" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="w-4 h-4 text-red-600" /></Button>
          </td>
        </>
      )}
    />
  );
}

function RitualsView() {
  const rituals = [
    { name: "Mangala Aarti", timing: "04:30 AM", type: "Daily" },
    { name: "Bhog Offering", timing: "12:00 PM", type: "Daily" },
    { name: "Sandhya Aarti", timing: "07:00 PM", type: "Daily" },
  ];
  return (
    <AdminTableCard
      title="Daily Rituals"
      description="Update timings for daily temple rituals."
      onAdd={() => {}}
      addLabel="Add Ritual"
      columns={["Ritual Name", "Timing", "Type", "Actions"]}
      items={rituals}
      renderRow={(r: any) => (
        <>
          <td className="px-6 py-4 font-medium text-[#1A3A6C]">{r.name}</td>
          <td className="px-6 py-4 font-mono text-sm">{r.timing}</td>
          <td className="px-6 py-4">{r.type}</td>
          <td className="px-6 py-4 text-right flex justify-end gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="w-4 h-4 text-blue-600" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="w-4 h-4 text-red-600" /></Button>
          </td>
        </>
      )}
    />
  );
}

function PrasadamView() {
  const items = [
    { name: "Motichoor Ladoo Box", price: "₹150", stock: 120 },
    { name: "Dry Fruits Prasadam", price: "₹250", stock: 45 },
    { name: "Sacred Ash (Bhasma)", price: "₹50", stock: 200 },
  ];
  return (
    <AdminTableCard
      title="Prasadam Store"
      description="Manage items available for online booking."
      onAdd={() => {}}
      addLabel="Add Item"
      columns={["Item Name", "Price", "Stock", "Actions"]}
      items={items}
      renderRow={(i: any) => (
        <>
          <td className="px-6 py-4 font-medium text-[#1A3A6C]">{i.name}</td>
          <td className="px-6 py-4">{i.price}</td>
          <td className="px-6 py-4">
            <span className={i.stock < 50 ? "text-red-600 font-bold" : ""}>{i.stock} units</span>
          </td>
          <td className="px-6 py-4 text-right flex justify-end gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="w-4 h-4 text-blue-600" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="w-4 h-4 text-red-600" /></Button>
          </td>
        </>
      )}
    />
  );
}

function LiveStreamView() {
  return (
    <Card className="shadow-sm max-w-2xl">
      <CardHeader>
        <CardTitle>Live Streaming URL</CardTitle>
        <CardDescription>Update the active YouTube or video link for Live Darshan.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Stream Platform</label>
          <select className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-[#C9A227]">
            <option>YouTube Live</option>
            <option>Facebook Live</option>
            <option>Custom HLS Stream</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Video ID or URL</label>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <LinkIcon className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                className="w-full pl-9 p-2 border rounded-md outline-none focus:ring-2 focus:ring-[#C9A227]"
                defaultValue="https://youtube.com/watch?v=live_id_here"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <input type="checkbox" id="liveStatus" defaultChecked className="accent-[#C9A227] w-4 h-4" />
          <label htmlFor="liveStatus" className="text-sm font-medium text-slate-700">Stream is currently Active</label>
        </div>
        <Button className="w-full bg-[#1A3A6C] hover:bg-[#1A3A6C]/90 text-white mt-4">Save Stream Settings</Button>
      </CardContent>
    </Card>
  );
}

function DarshanSlotsView() {
  const slots = [
    { date: "2024-03-10", time: "06:00 AM - 08:00 AM", capacity: 200, booked: 185 },
    { date: "2024-03-10", time: "04:00 PM - 06:00 PM", capacity: 200, booked: 200 },
  ];
  return (
    <AdminTableCard
      title="Darshan Slots"
      description="Manage capacities and timings for special darshan."
      onAdd={() => {}}
      addLabel="Generate Slots"
      columns={["Date", "Time Window", "Capacity", "Booked", "Status", "Actions"]}
      items={slots}
      renderRow={(s: any) => {
        const isFull = s.booked >= s.capacity;
        return (
          <>
            <td className="px-6 py-4 font-medium">{s.date}</td>
            <td className="px-6 py-4">{s.time}</td>
            <td className="px-6 py-4">{s.capacity}</td>
            <td className="px-6 py-4 font-semibold">{s.booked}</td>
            <td className="px-6 py-4">
              <Badge className={isFull ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"} border-0>
                {isFull ? "Full" : "Available"}
              </Badge>
            </td>
            <td className="px-6 py-4 text-right flex justify-end gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="w-4 h-4 text-blue-600" /></Button>
            </td>
          </>
        );
      }}
    />
  );
}

function DevoteesView() {
  const users = [
    { name: "Rajesh Kumar", email: "rajesh.k@example.com", joined: "Jan 2023", bookings: 4 },
    { name: "Priya Sharma", email: "priya.s@example.com", joined: "Nov 2023", bookings: 1 },
  ];
  return (
    <AdminTableCard
      title="Registered Devotees"
      description="View and manage user accounts."
      columns={["Name", "Email", "Joined Date", "Total Bookings", "Actions"]}
      items={users}
      renderRow={(u: any) => (
        <>
          <td className="px-6 py-4 font-medium text-[#1A3A6C]">{u.name}</td>
          <td className="px-6 py-4 text-muted-foreground">{u.email}</td>
          <td className="px-6 py-4">{u.joined}</td>
          <td className="px-6 py-4">{u.bookings}</td>
          <td className="px-6 py-4 text-right flex justify-end gap-2">
            <Button variant="outline" size="sm" className="h-8">View History</Button>
          </td>
        </>
      )}
    />
  );
}

function SettingsView() {
  return (
    <div className="max-w-3xl space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Global Temple Settings</CardTitle>
          <CardDescription>Update general information displayed across the website.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Temple Name</label>
              <input type="text" className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-[#C9A227]" defaultValue="Shree Kashi Vishwanath Temple" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Contact Email</label>
              <input type="email" className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-[#C9A227]" defaultValue="info@temple.org" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Contact Phone</label>
              <input type="tel" className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-[#C9A227]" defaultValue="+91 123 456 7890" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Currency Symbol</label>
              <select className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-[#C9A227]">
                <option value="₹">₹ (INR)</option>
                <option value="$">$ (USD)</option>
              </select>
            </div>
            <div className="col-span-1 md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-slate-700">Temple Address</label>
              <textarea className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-[#C9A227] min-h-[80px]" defaultValue="Dashashwamedh Ghat Rd, Lahori Tola, Varanasi, Uttar Pradesh 221001" />
            </div>
          </div>
          <div className="pt-4 border-t flex justify-end">
             <Button className="bg-[#1A3A6C] hover:bg-[#1A3A6C]/90 text-white">Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AdminLoginView({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#C9A227] to-[#D4B870] flex items-center justify-center mb-4 shadow-lg shadow-[#C9A227]/20">
          <span className="text-white text-3xl font-bold">ॐ</span>
        </div>
        <h1 className="text-2xl font-heading text-[#1A3A6C] font-bold">Temple Admin Portal</h1>
        <p className="text-muted-foreground mt-2">Sign in to manage temple services</p>
      </div>

      <Card className="w-full max-w-md shadow-xl border-t-4 border-t-[#C9A227]">
        <CardContent className="pt-8 pb-8 px-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Admin Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false); }}
                  placeholder="Enter password (hint: admin)"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg outline-none transition-all ${error ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'focus:ring-2 focus:ring-[#C9A227]/50 focus:border-[#C9A227]'}`}
                  required
                />
              </div>
              <AnimatePresence>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-red-500 mt-2 font-medium"
                  >
                    Incorrect password. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <Button type="submit" className="w-full bg-[#1A3A6C] hover:bg-[#1A3A6C]/90 text-white py-6 text-lg font-semibold rounded-lg shadow-md transition-all hover:shadow-lg">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <p className="mt-8 text-sm text-muted-foreground flex items-center gap-2">
        <Lock className="w-4 h-4" /> Secure Admin Access Only
      </p>
    </div>
  );
}

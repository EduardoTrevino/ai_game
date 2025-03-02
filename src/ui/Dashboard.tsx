"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Award,
  Calendar,
  CreditCard,
  DollarSign,
  Heart,
  LineChart,
  type LucideIcon,
  MessageSquare,
  Scale,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [animateProgress, setAnimateProgress] = useState(false)

  useEffect(() => {
    // Trigger progress bar animations when dashboard opens
    if (isOpen) {
      const timer = setTimeout(() => {
        setAnimateProgress(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setAnimateProgress(false)
    }
  }, [isOpen])

  return (
    <div className="fixed inset-0 z-40">
      {/* Floating Dashboard Icon */}
      <motion.button
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg hover:shadow-xl",
          isOpen && "opacity-0",
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <TrendingUp className="h-8 w-8" />
      </motion.button>

      {/* Dashboard Pop-up */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop with blur */}
            <motion.div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Dashboard Container */}
            <motion.div
              className="relative h-[90vh] w-[90vw] max-w-7xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-gray-900"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Close Button */}
              <button
                className="absolute right-4 top-4 z-50 rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>

              <div className=" h-full">
                <header className="flex h-20 items-center gap-4 border-b bg-gradient-to-r from-violet-500 to-indigo-500 px-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white/20 p-2">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h1 className="text-2xl font-bold">Entrepreneurship Journey</h1>
                  </div>
                  <div className="ml-auto flex items-center gap-4">
                    <Button
                      variant="ghost"
                      className="border border-white/30 text-white hover:bg-white/20 hover:text-white"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Day 24
                    </Button>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <p className="text-sm font-medium">Eduardo Treviño</p>
                        <p className="text-xs opacity-80">Level 5 Entrepreneur</p>
                      </div>
                      <Avatar className="h-10 w-10 border-2 border-white/50">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                        <AvatarFallback className="bg-indigo-700">ET</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </header>
                <div className="grid flex-1 md:grid-cols-[240px_1fr]">
                  <aside className="bg-indigo-50 dark:bg-indigo-950/50">
                    <nav className="flex flex-col gap-2 p-4">
                      <NavButton
                        icon={LineChart}
                        label="Overview"
                        active={activeTab === "overview"}
                        onClick={() => setActiveTab("overview")}
                      />
                      <NavButton
                        icon={DollarSign}
                        label="Business"
                        active={activeTab === "business"}
                        onClick={() => setActiveTab("business")}
                      />
                      <NavButton
                        icon={Users}
                        label="Customers"
                        active={activeTab === "customers"}
                        onClick={() => setActiveTab("customers")}
                      />
                      <NavButton
                        icon={Heart}
                        label="Marketing"
                        active={activeTab === "marketing"}
                        onClick={() => setActiveTab("marketing")}
                      />
                      <NavButton
                        icon={Zap}
                        label="Personal Growth"
                        active={activeTab === "growth"}
                        onClick={() => setActiveTab("growth")}
                      />

                      <div className="mt-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-4 text-white">
                        <h3 className="font-bold">Daily Challenge</h3>
                        <p className="mt-1 text-sm text-white/80">Negotiate with a supplier for better rates</p>
                        <div className="mt-2 flex items-center justify-between text-xs">
                          <span>Reward: +15 XP</span>
                          <Badge className="bg-white/20 hover:bg-white/30"
                          onClick={() => setIsOpen(false)}
                          >Start</Badge>
                        </div>
                      </div>
                    </nav>
                  </aside>
                  <main className="flex-1 p-6">
                    <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">

                      <TabsContent value="overview" className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                          <StatsCard
                            title="Cash Balance"
                            value="₹12,500"
                            change="+₹2,500"
                            icon={DollarSign}
                            color="from-emerald-500 to-teal-500"
                          />
                          <StatsCard
                            title="Monthly Profit"
                            value="₹4,200"
                            change="+18%"
                            icon={TrendingUp}
                            color="from-violet-500 to-purple-500"
                          />
                          <StatsCard
                            title="Customer Satisfaction"
                            value="85%"
                            change="+5%"
                            icon={Heart}
                            color="from-pink-500 to-rose-500"
                          />
                          <StatsCard
                            title="Entrepreneurial Score"
                            value="72/100"
                            change="+12 pts"
                            icon={Award}
                            color="from-amber-500 to-orange-500"
                          />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                          <Card className="lg:col-span-4 overflow-hidden border-0 bg-white shadow-md dark:bg-gray-800">
                            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
                              <CardTitle className="flex items-center gap-2">
                                <LineChart className="h-5 w-5" />
                                Business Performance
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                              <BusinessChart />
                            </CardContent>
                          </Card>
                          <Card className="lg:col-span-3 overflow-hidden border-0 bg-white shadow-md dark:bg-gray-800">
                            <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white">
                              <CardTitle className="flex items-center gap-2">
                                <Heart className="h-5 w-5" />
                                Active Marketing Campaigns
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                              <div className="space-y-6">
                                <div>
                                  <div className="mb-2 flex items-center">
                                    <Badge className="mr-2 bg-emerald-500 hover:bg-emerald-600">Active</Badge>
                                    <span className="font-medium">Village Market Promotion</span>
                                    <span className="ml-auto text-sm text-muted-foreground">8 days left</span>
                                  </div>
                                  <Progress
                                    value={animateProgress ? 60 : 0}
                                    className="h-3 rounded-full bg-emerald-100"
                                    indicatorClassName="bg-gradient-to-r from-emerald-500 to-teal-500"
                                    transition={{ duration: 1, ease: "easeOut" }}
                                  />
                                </div>

                                <div>
                                  <div className="mb-2 flex items-center">
                                    <Badge className="mr-2 bg-violet-500 hover:bg-violet-600">Active</Badge>
                                    <span className="font-medium">Social Media Campaign</span>
                                    <span className="ml-auto text-sm text-muted-foreground">15 days left</span>
                                  </div>
                                  <Progress
                                    value={animateProgress ? 25 : 0}
                                    className="h-3 rounded-full bg-violet-100"
                                    indicatorClassName="bg-gradient-to-r from-violet-500 to-purple-500"
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                  />
                                </div>

                                <div>
                                  <div className="mb-2 flex items-center">
                                    <Badge variant="outline" className="mr-2 border-amber-500 text-amber-500">
                                      Planned
                                    </Badge>
                                    <span className="font-medium">Festival Season Special</span>
                                    <span className="ml-auto text-sm text-muted-foreground">Starts in 5 days</span>
                                  </div>
                                  <Progress value={0} className="h-3 rounded-full bg-amber-100" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          <Card className="overflow-hidden border-0 bg-white shadow-md dark:bg-gray-800">
                            <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
                              <CardTitle className="flex items-center gap-2">
                                <Zap className="h-5 w-5" />
                                Entrepreneurial Skills
                              </CardTitle>
                              <CardDescription className="text-white/80">Your personal growth journey</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 p-6">
                              <SkillProgress
                                name="Risk Taking"
                                value={68}
                                animate={animateProgress}
                                color="from-orange-500 to-amber-500"
                                delay={0}
                              />
                              <SkillProgress
                                name="Communication"
                                value={82}
                                animate={animateProgress}
                                color="from-blue-500 to-indigo-500"
                                delay={0.1}
                              />
                              <SkillProgress
                                name="Ethics &amp; Values"
                                value={95}
                                animate={animateProgress}
                                color="from-emerald-500 to-teal-500"
                                delay={0.2}
                              />
                              <SkillProgress
                                name="Financial Literacy"
                                value={75}
                                animate={animateProgress}
                                color="from-violet-500 to-purple-500"
                                delay={0.3}
                              />
                            </CardContent>
                          </Card>

                          <Card className="overflow-hidden border-0 bg-white shadow-md dark:bg-gray-800">
                            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
                              <CardTitle className="flex items-center gap-2">
                                <Award className="h-5 w-5" />
                                Upcoming Challenges
                              </CardTitle>
                              <CardDescription className="text-white/80">
                                Opportunities to grow your business
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 p-6">
                              <motion.div
                                className="flex items-start gap-4 rounded-lg border border-indigo-100 bg-indigo-50/50 p-3 dark:border-indigo-900 dark:bg-indigo-900/20"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                              >
                                <div className="rounded-full bg-indigo-500 p-2 text-white">
                                  <ShieldCheck className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="font-medium">Supply Chain Challenge</p>
                                  <p className="text-sm text-muted-foreground">
                                    Find alternative suppliers during monsoon season
                                  </p>
                                  <Badge className="mt-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                                    +15 Risk Taking
                                  </Badge>
                                </div>
                              </motion.div>
                              <motion.div
                                className="flex items-start gap-4 rounded-lg border border-indigo-100 bg-indigo-50/50 p-3 dark:border-indigo-900 dark:bg-indigo-900/20"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                              >
                                <div className="rounded-full bg-blue-500 p-2 text-white">
                                  <MessageSquare className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="font-medium">Customer Negotiation</p>
                                  <p className="text-sm text-muted-foreground">
                                    Practice negotiating with a difficult customer
                                  </p>
                                  <Badge className="mt-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                                    +20 Communication
                                  </Badge>
                                </div>
                              </motion.div>
                            </CardContent>
                            <CardFooter className="bg-indigo-50/50 p-4 dark:bg-indigo-900/20">
                              <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                                View All Challenges
                              </Button>
                            </CardFooter>
                          </Card>

                          <Card className="overflow-hidden border-0 bg-white shadow-md dark:bg-gray-800">
                            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
                              <CardTitle className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5" />
                                Learning Resources
                              </CardTitle>
                              <CardDescription className="text-white/80">Recommended for your growth</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 p-6">
                              <motion.div
                                className="flex items-start gap-4 rounded-lg border border-emerald-100 bg-emerald-50/50 p-3 dark:border-emerald-900 dark:bg-emerald-900/20"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                              >
                                <div className="rounded-full bg-emerald-500 p-2 text-white">
                                  <Scale className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="font-medium">Ethical Business Practices</p>
                                  <p className="text-sm text-muted-foreground">
                                    Learn how ethics builds customer trust
                                  </p>
                                  <div className="mt-2 flex items-center text-sm">
                                    <Badge variant="outline" className="border-emerald-500 text-emerald-500">
                                      Interactive Simulation
                                    </Badge>
                                  </div>
                                </div>
                              </motion.div>
                              <motion.div
                                className="flex items-start gap-4 rounded-lg border border-emerald-100 bg-emerald-50/50 p-3 dark:border-emerald-900 dark:bg-emerald-900/20"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                              >
                                <div className="rounded-full bg-teal-500 p-2 text-white">
                                  <CreditCard className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="font-medium">Financial Planning Basics</p>
                                  <p className="text-sm text-muted-foreground">
                                    Simple techniques for rural businesses
                                  </p>
                                  <div className="mt-2 flex items-center text-sm">
                                    <Badge variant="outline" className="border-teal-500 text-teal-500">
                                      Interactive lesson
                                    </Badge>
                                  </div>
                                </div>
                              </motion.div>
                            </CardContent>
                            <CardFooter className="bg-emerald-50/50 p-4 dark:bg-emerald-900/20">
                              <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                              onClick={() => setIsOpen(false)}>
                                View Learning Center
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      </TabsContent>

                      {/* Other tab contents would go here - I'm keeping them minimal for brevity */}
                      <TabsContent value="business" className="space-y-6">
                        <Card className="overflow-hidden border-0 bg-white shadow-md dark:bg-gray-800">
                          <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-500 p-6 text-white">
                            <CardTitle
                            className="text-2xl font-semibold leading-none tracking-tight">Financial Overview</CardTitle>
                            <CardDescription className="text-white/80">Your business financial health</CardDescription>
                          </CardHeader>
                          <CardContent className="p-6">
                            <div className="space-y-8">
                              <div className="grid gap-4 md:grid-cols-3">
                                <FinancialMetric
                                  label="Cash Balance"
                                  value="₹12,500"
                                  icon={DollarSign}
                                  color="bg-emerald-500"
                                />
                                <FinancialMetric
                                  label="Monthly Revenue"
                                  value="₹18,750"
                                  icon={TrendingUp}
                                  color="bg-violet-500"
                                />
                                <FinancialMetric
                                  label="Monthly Expenses"
                                  value="₹14,550"
                                  icon={CreditCard}
                                  color="bg-amber-500"
                                />
                              </div>

                              <div>
                                <h3 className="mb-4 text-lg font-medium">Revenue vs Expenses</h3>
                                <BusinessChart />
                              </div>

                              <div>
                                <h3 className="mb-4 text-lg font-medium">Expense Breakdown</h3>
                                <div className="space-y-4">
                                  <div>
                                    <div className="mb-1 flex items-center justify-between">
                                      <span className="text-sm font-medium">Raw Materials</span>
                                      <span className="text-sm text-muted-foreground">₹6,200 (42%)</span>
                                    </div>
                                    <Progress value={42} className="h-2" />
                                  </div>
                                  <div>
                                    <div className="mb-1 flex items-center justify-between">
                                      <span className="text-sm font-medium">Labor</span>
                                      <span className="text-sm text-muted-foreground">₹4,500 (31%)</span>
                                    </div>
                                    <Progress value={31} className="h-2" />
                                  </div>
                                  <div>
                                    <div className="mb-1 flex items-center justify-between">
                                      <span className="text-sm font-medium">Transportation</span>
                                      <span className="text-sm text-muted-foreground">₹2,100 (14%)</span>
                                    </div>
                                    <Progress value={14} className="h-2" />
                                  </div>
                                  <div>
                                    <div className="mb-1 flex items-center justify-between">
                                      <span className="text-sm font-medium">Marketing</span>
                                      <span className="text-sm text-muted-foreground">₹1,200 (8%)</span>
                                    </div>
                                    <Progress value={8} className="h-2" />
                                  </div>
                                  <div>
                                    <div className="mb-1 flex items-center justify-between">
                                      <span className="text-sm font-medium">Other</span>
                                      <span className="text-sm text-muted-foreground">₹550 (5%)</span>
                                    </div>
                                    <Progress value={5} className="h-2" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="customers" className="space-y-6">
                        <Card>
                          <CardHeader
                          className="flex flex-col space-y-1.5 p-6">
                            <CardTitle
                            className="text-2xl font-semibold leading-none tracking-tight"
                            >Customer Satisfaction</CardTitle>
                            <CardDescription
                            className="text-sm text-muted-foreground">How your customers feel about your business</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-8">
                              <div className="flex items-center justify-center">
                                <div className="relative h-40 w-40">
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl font-bold">85%</span>
                                  </div>
                                  <svg className="h-full w-full" viewBox="0 0 100 100">
                                    <circle
                                      className="stroke-muted fill-none"
                                      strokeWidth="10"
                                      cx="50"
                                      cy="50"
                                      r="40"
                                    />
                                    <circle
                                      className="stroke-primary fill-none"
                                      strokeWidth="10"
                                      strokeLinecap="round"
                                      strokeDasharray={2 * Math.PI * 40}
                                      strokeDashoffset={2 * Math.PI * 40 * (1 - 0.85)}
                                      cx="50"
                                      cy="50"
                                      r="40"
                                    />
                                  </svg>
                                </div>
                              </div>

                              <div>
                                <h3 className="mb-4 text-lg font-medium">Satisfaction Factors</h3>
                                <div className="space-y-4">
                                  <div>
                                    <div className="mb-1 flex items-center justify-between">
                                      <span className="text-sm font-medium">Product Quality</span>
                                      <span className="text-sm text-muted-foreground">92%</span>
                                    </div>
                                    <Progress value={92} className="h-2" />
                                  </div>
                                  <div>
                                    <div className="mb-1 flex items-center justify-between">
                                      <span className="text-sm font-medium">Customer Service</span>
                                      <span className="text-sm text-muted-foreground">88%</span>
                                    </div>
                                    <Progress value={88} className="h-2" />
                                  </div>
                                  <div>
                                    <div className="mb-1 flex items-center justify-between">
                                      <span className="text-sm font-medium">Value for Money</span>
                                      <span className="text-sm text-muted-foreground">78%</span>
                                    </div>
                                    <Progress value={78} className="h-2" />
                                  </div>
                                  <div>
                                    <div className="mb-1 flex items-center justify-between">
                                      <span className="text-sm font-medium">Delivery Time</span>
                                      <span className="text-sm text-muted-foreground">75%</span>
                                    </div>
                                    <Progress value={75} className="h-2" />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h3 className="mb-4 text-lg font-medium">Customer Feedback</h3>
                                <div className="space-y-4">
                                  <div className="rounded-lg border p-4">
                                    <div className="flex items-center gap-4">
                                      <Avatar>
                                        <AvatarFallback>RK</AvatarFallback>
                                      </Avatar>
                                      <div>
                                        <p className="font-medium">Rajesh Kumar</p>
                                        <p className="text-sm text-muted-foreground">2 days ago</p>
                                      </div>
                                      <div className="ml-auto flex">
                                        {[1, 2, 3, 4].map((star) => (
                                          <Heart key={star} className="h-4 w-4 fill-primary text-primary" />
                                        ))}
                                        <Heart className="h-4 w-4 text-muted-foreground" />
                                      </div>
                                    </div>
                                    <p className="mt-2 text-sm">
                                      &#34;The quality of your products is excellent. I appreciate the attention to
                                      detail.&#34;
                                    </p>
                                  </div>

                                  <div className="rounded-lg border p-4">
                                    <div className="flex items-center gap-4">
                                      <Avatar>
                                        <AvatarFallback>SP</AvatarFallback>
                                      </Avatar>
                                      <div>
                                        <p className="font-medium">Sunita Patel</p>
                                        <p className="text-sm text-muted-foreground">5 days ago</p>
                                      </div>
                                      <div className="ml-auto flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                          <Heart key={star} className="h-4 w-4 fill-primary text-primary" />
                                        ))}
                                      </div>
                                    </div>
                                    <p className="mt-2 text-sm">
                                      &#34;Your service is always prompt and friendly. I will definitely recommend your
                                      business to others in our village.&#34;
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="marketing" className="space-y-6">
                        <Card className="overflow-hidden border-0 bg-white shadow-md dark:bg-gray-800">
                          <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white">
                            <CardTitle
                            className="text-2xl font-semibold leading-none tracking-tight">Marketing Campaigns</CardTitle>
                            <CardDescription className="text-white/80">
                              Your active and planned marketing efforts
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-6">
                            <div className="space-y-6">
                              <MarketingCampaign
                                title="Village Market Promotion"
                                description="Local market stall with product samples"
                                status="Active"
                                budget="₹2,500"
                                duration="15 days (8 days left)"
                                reach="~500 people"
                                progress={60}
                                results="+12 new customers, ₹3,600 in sales"
                                animate={animateProgress}
                                color="from-emerald-500 to-teal-500"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="growth" className="space-y-6">
                        <Card className="overflow-hidden border-0 bg-white shadow-md dark:bg-gray-800">
                          <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
                            <CardTitle
                            className="text-2xl font-semibold leading-none tracking-tight">Entrepreneurial Mindset</CardTitle>
                            <CardDescription className="text-white/80">
                              Your personal growth as an entrepreneur
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-center">
                              <EntrepreneurScore value={72} animate={animateProgress} />
                            </div>

                            <div>
                              <h3 className="mb-4 text-lg font-medium">Skill Development</h3>
                              <div className="space-y-4">
                                <div>
                                  <div className="mb-1 flex items-center justify-between">
                                    <span className="text-sm font-medium">Risk Taking</span>
                                    <span className="text-sm text-muted-foreground">68%</span>
                                  </div>
                                  <Progress value={68} className="h-2" />
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    You&#39;ve shown improvement in taking calculated risks
                                  </p>
                                </div>
                                <div>
                                  <div className="mb-1 flex items-center justify-between">
                                    <span className="text-sm font-medium">Communication</span>
                                    <span className="text-sm text-muted-foreground">82%</span>
                                  </div>
                                  <Progress value={82} className="h-2" />
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    Your customer negotiation skills are strong
                                  </p>
                                </div>
                                <div>
                                  <div className="mb-1 flex items-center justify-between">
                                    <span className="text-sm font-medium">Ethics &amp; Values</span>
                                    <span className="text-sm text-muted-foreground">95%</span>
                                  </div>
                                  <Progress value={95} className="h-2" />
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    You consistently make ethical business decisions
                                  </p>
                                </div>
                                <div>
                                  <div className="mb-1 flex items-center justify-between">
                                    <span className="text-sm font-medium">Financial Literacy</span>
                                    <span className="text-sm text-muted-foreground">75%</span>
                                  </div>
                                  <Progress value={75} className="h-2" />
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    Your budgeting skills have improved
                                  </p>
                                </div>
                                <div>
                                  <div className="mb-1 flex items-center justify-between">
                                    <span className="text-sm font-medium">Innovation</span>
                                    <span className="text-sm text-muted-foreground">62%</span>
                                  </div>
                                  <Progress value={62} className="h-2" />
                                  <p className="mt-1 text-xs text-muted-foreground">Try exploring new product ideas</p>
                                </div>
                                <div>
                                  <div className="mb-1 flex items-center justify-between">
                                    <span className="text-sm font-medium">Resilience</span>
                                    <span className="text-sm text-muted-foreground">78%</span>
                                  </div>
                                  <Progress value={78} className="h-2" />
                                  <p className="mt-1 text-xs text-muted-foreground">You&#39;ve handled setbacks well</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="mb-4 text-lg font-medium">Recent Achievements</h3>
                              <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                  <div className="rounded-full bg-primary/10 p-2">
                                    <TrendingUp className="h-4 w-4 text-primary" />
                                  </div>
                                  <div>
                                    <p className="font-medium">First Profitable Month</p>
                                    <p className="text-sm text-muted-foreground">
                                      You achieved your first month of profit
                                    </p>
                                    <Badge variant="outline" className="mt-2">
                                      +20 Financial Literacy
                                    </Badge>
                                  </div>
                                </div>
                                <div className="flex items-start gap-4">
                                  <div className="rounded-full bg-primary/10 p-2">
                                    <Users className="h-4 w-4 text-primary" />
                                  </div>
                                  <div>
                                    <p className="font-medium">Customer Retention</p>
                                    <p className="text-sm text-muted-foreground">
                                      80% of your customers made repeat purchases
                                    </p>
                                    <Badge variant="outline" className="mt-2">
                                      +15 Communication
                                    </Badge>
                                  </div>
                                </div>
                                <div className="flex items-start gap-4">
                                  <div className="rounded-full bg-primary/10 p-2">
                                    <ShieldCheck className="h-4 w-4 text-primary" />
                                  </div>
                                  <div>
                                    <p className="font-medium">Ethical Sourcing</p>
                                    <p className="text-sm text-muted-foreground">
                                      Switched to local, sustainable suppliers
                                    </p>
                                    <Badge variant="outline" className="mt-2">
                                      +25 Ethics &amp; Values
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="mb-4 text-lg font-medium">Learning Path</h3>
                              <div className="rounded-lg border p-4">
                                <h4 className="font-medium">Recommended Next Steps</h4>
                                <ul className="mt-2 space-y-2 text-sm">
                                  <li className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                                    <span>Complete the &#34;Marketing on a Budget&#34; lesson</span>
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                                    <span>Practice the supply chain management simulation</span>
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                                    <span>Attend the virtual networking event with other entrepreneurs</span>
                                  </li>
                                </ul>
                                <Button className="mt-4 w-full">Go to Learning Center</Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </main>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Navigation Button Component
function NavButton({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: LucideIcon
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "justify-start gap-3 text-base font-medium",
        active
          ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white hover:from-violet-600 hover:to-indigo-600 hover:text-white"
          : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 dark:text-gray-300 dark:hover:bg-indigo-900/50 dark:hover:text-indigo-300",
      )}
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      {label}
    </Button>
  )
}

// Stats Card Component
function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  color,
}: {
  title: string
  value: string
  change: string
  icon: LucideIcon
  color: string
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="overflow-hidden rounded-lg border-0 bg-white shadow-md dark:bg-gray-800">
        <CardHeader className={`bg-gradient-to-r ${color} p-3 text-white`}>
          <CardTitle className="flex items-center justify-between text-sm font-medium">
            {title}
            <Icon className="h-4 w-4" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-emerald-600 dark:text-emerald-400">{change} from last period</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Skill Progress Component
function SkillProgress({
  name,
  value,
  animate,
  color,
  delay,
}: {
  name: string
  value: number
  animate: boolean
  color: string
  delay: number
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{value}%</span>
      </div>
      <Progress
        value={animate ? value : 0}
        className="h-3 rounded-full bg-gray-100 dark:bg-gray-700"
        indicatorClassName={`bg-gradient-to-r ${color}`}
        transition={{ duration: 1, ease: "easeOut", delay }}
      />
    </div>
  )
}

// Financial Metric Component
function FinancialMetric({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string
  value: string
  icon: LucideIcon
  color: string
}) {
  return (
    <motion.div
      className="flex items-center gap-4 rounded-lg border p-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={`rounded-full ${color} p-3 text-white`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-medium text-muted-foreground">{label}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </motion.div>
  )
}

// Satisfaction Meter Component
function SatisfactionMeter({ value, animate }: { value: number; animate: boolean }) {
  return (
    <motion.div
      className="relative h-48 w-48"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold text-pink-500">{animate ? value : 0}%</span>
        <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
      </div>
      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
        <circle className="stroke-gray-200 fill-none" strokeWidth="8" cx="50" cy="50" r="40" />
        <motion.circle
          className="stroke-pink-500 fill-none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 40}
          strokeDashoffset={2 * Math.PI * 40 * (1 - value / 100)}
          initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
          animate={{ strokeDashoffset: animate ? 2 * Math.PI * 40 * (1 - value / 100) : 2 * Math.PI * 40 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          cx="50"
          cy="50"
          r="40"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${star <= Math.round(value / 20) ? "fill-amber-500 text-amber-500" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Entrepreneur Score Component
function EntrepreneurScore({ value, animate }: { value: number; animate: boolean }) {
  return (
    <motion.div
      className="relative h-48 w-48"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-5xl font-bold text-amber-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {animate ? value : 0}
        </motion.span>
        <span className="text-sm text-muted-foreground">Entrepreneur Score</span>
      </div>
      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
        <circle className="stroke-gray-200 fill-none" strokeWidth="8" cx="50" cy="50" r="40" />
        <motion.circle
          className="stroke-amber-500 fill-none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 40}
          strokeDashoffset={2 * Math.PI * 40 * (1 - value / 100)}
          initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
          animate={{ strokeDashoffset: animate ? 2 * Math.PI * 40 * (1 - value / 100) : 2 * Math.PI * 40 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          cx="50"
          cy="50"
          r="40"
        />
      </svg>
    </motion.div>
  )
}

// Marketing Campaign Component
function MarketingCampaign({
  title,
  description,
  status,
  budget,
  duration,
  reach,
  progress,
  results,
  animate,
  color,
}: {
  title: string
  description: string
  status: string
  budget: string
  duration: string
  reach: string
  progress: number
  results: string
  animate: boolean
  color: string
}) {
  return (
    <motion.div
      className="rounded-lg border p-6"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Badge className="bg-emerald-500 hover:bg-emerald-600">{status}</Badge>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Budget</p>
          <p className="font-medium">{budget}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Duration</p>
          <p className="font-medium">{duration}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Expected Reach</p>
          <p className="font-medium">{reach}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm">Progress</span>
          <span className="text-sm">{progress}%</span>
        </div>
        <Progress
          value={animate ? progress : 0}
          className="h-3 rounded-full bg-gray-100 dark:bg-gray-700"
          indicatorClassName={`bg-gradient-to-r ${color}`}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium">Results so far:</p>
        <p className="text-sm">{results}</p>
      </div>
    </motion.div>
  )
}

// Business Chart Component
function BusinessChart() {
  return (
    <div className="h-[200px] w-full rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 p-4 dark:from-indigo-950/50 dark:to-purple-950/50">
      <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          [Interactive Business Performance Chart]
          <br />
          Revenue and expense trends would be displayed here
        </motion.div>
      </div>
    </div>
  )
}

// Book Open Icon Component
function BookOpen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


import { AIChatbot } from '@/components/dashboard/AIChatbot'
import DashboardTabs from '@/components/dashboard/DashboardTabs'
import Followers from '@/components/dashboard/Followers'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import Tools from '@/components/dashboard/Tools'
import { FeatureCard } from '@/components/creator/feature-card'
import { StatsPanel } from '@/components/creator/stats-panel'


const DashboardPage = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar />
      <div className='flex flex-col flex-1 overflow-hidden'>
        <Header />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6'>
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
        <DashboardTabs />
              {/* Main Content */}
              <div className="flex-1 overflow-auto">  
                <div className="grid grid-cols-4 gap-6 p-6">
                  {/* Main Content Area */}
                  <div className="col-span-3 space-y-6">
                    <div className="rounded-lg border bg-card p-6">
                      <h1 className="text-2xl font-semibold">Welcome to ProductivityPro</h1>
                      <p className="mt-2 text-muted-foreground">
                        Get started by exploring our key features below to boost your productivity.
                      </p>
                    </div>
        
                    <div className="grid grid-cols-2 gap-4">
                      <FeatureCard
                        title="Team Collaboration"
                        description="Invite your team members and start collaborating on projects together."
                        imageUrl="/assets/illustrations/user.png"
                      />
                      <FeatureCard
                        title="Task Management"
                        description="Create, assign, and track tasks with our intuitive interface."
                        imageUrl="/assets/illustrations/fintech.png"
                      />
                      <FeatureCard
                        title="Time Tracking"
                        description="Monitor productivity and track time spent on different projects."
                        imageUrl="/assets/illustrations/user.png"
                      />
                      <FeatureCard
                        title="Analytics"
                        description="Get insights into your team's performance and project progress."
                        imageUrl="/assets/illustrations/fintech.png"
                      />
                    </div>
                  </div>
                   {/* Right Panel */}
                            <div className="col-span-1">
                              <StatsPanel />
                    </div>
                </div>
              </div>
        </main>
      </div>
      <Followers />
      <AIChatbot />
    </div>
  )
}

export default DashboardPage
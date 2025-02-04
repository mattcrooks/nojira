import * as React from 'react';
import {
  BookOpen,
  Bot,
  Banana,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Workflow,
  Pickaxe,
  MapIcon,
  TreeDeciduousIcon,
  TreeDeciduous,
  PersonStanding,
} from 'lucide-react';

import { NavMain } from '@/components/layout/nav-main';
import { NavProjects } from '@/components/layout/nav-projects';
import { NavSecondary } from '@/components/layout/nav-secondary';
import { NavUser } from '@/components/layout/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavProblems } from './nav-problems';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Playground',
      url: '/about',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '/404',
        },
        {
          title: 'Starred',
          url: '/404',
        },
        {
          title: 'Settings',
          url: '/404',
        },
      ],
    },
    {
      title: 'Models',
      url: '/404',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '/404',
        },
        {
          title: 'Explorer',
          url: '/404',
        },
        {
          title: 'Quantum',
          url: '/404',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '/404',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '/404',
        },
        {
          title: 'Get Started',
          url: '/404',
        },
        {
          title: 'Tutorials',
          url: '/404',
        },
        {
          title: 'Changelog',
          url: '/404',
        },
      ],
    },
    {
      title: 'Settings',
      url: '/404',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '/404',
        },
        {
          title: 'Team',
          url: '/404',
        },
        {
          title: 'Billing',
          url: '/404',
        },
        {
          title: 'Limits',
          url: '/404',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      url: '/404',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '/404',
      icon: Send,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '/404',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '/404',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '/404',
      icon: Map,
    },
  ],
  problems: [
    {
      name: 'Actionable',
      url: '/404',
      icon: Pickaxe,
    },
    {
      name: 'Entire Tree',
      url: '/problems',
      icon: TreeDeciduous,
    },
    {
      name: 'Mine',
      url: '/404',
      icon: PersonStanding,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/404">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Banana className="size-4 text-primary" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">NoJira</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProblems problems={data.problems} />
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

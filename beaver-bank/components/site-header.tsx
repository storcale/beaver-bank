import Link from "next/link"
import { Button } from "@/components/ui/button"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home } from "lucide-react"
import { Icons } from "@/components/icons" // Import the Icons

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* Pass Icons prop to MainNav */}
        <MainNav items={siteConfig.mainNav} Icons={Icons} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href="/dashboard" className={buttonVariants({ variant: "outline" })}> <Home /> Dashboard</Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

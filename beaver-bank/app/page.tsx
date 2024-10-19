import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Your new solution for secure,<br className="hidden sm:inline" />
	        fast and modern banking.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Payments delivered straight from the river in seconds,<br className="hidden sm:inline" />
          no water leaks or half logs delivered
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/signup"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Sign-Up
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}

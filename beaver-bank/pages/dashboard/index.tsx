import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { GetServerSideProps } from "next"
import { getUserFromRequest } from "@/lib/auth"
import { User } from "@/models/User"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = getUserFromRequest(context.req)

  if (!user) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    }
  }

  const userData = await User.findById(user.userId)

  return {
    props: { userData: JSON.parse(JSON.stringify(userData)) },
  }
}

export default function Dashboard({ userData }) {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold">Beaver-bank Dashboard</h1>
      <p>Welcome, {userData.username}</p>
      <p>Account Number: {userData.accountNumber}</p>
      <p>Balance: ${userData.balance}</p>
      <p>Status: {userData.status}</p>
    </section>
  )
}
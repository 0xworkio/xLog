"use client"

import { usePathname, useRouter } from "next/navigation"

import { useConnectedAction } from "@crossbell/connect-kit"

import { Tabs } from "~/components/ui/Tabs"
import { useTranslation } from "~/lib/i18n/client"

import topics from "../../../data/topics.json"

export const HomeActivitiesTabs = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { t } = useTranslation("index")

  const tabs = [
    {
      text: "Featured",
      href: "/",
    },
    {
      text: "Shorts",
      href: "/shorts",
    },
    {
      text: "Latest",
      href: "/latest",
    },
    {
      text: "Hottest",
      href: "/hottest",
    },
    {
      text: "Following",
      onClick: useConnectedAction(() => router.push(`/following`)),
      active: pathname === "/following",
    },
    ...topics.map((topic) => ({
      text: t(topic.name),
      href: `/topic/${encodeURIComponent(topic.name)}`,
    })),
  ]

  return <Tabs items={tabs} className="border-none" />
}

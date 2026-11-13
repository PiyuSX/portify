"use client"

import Link from "next/link";
import { Home, Mail } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { Dock, DockIcon } from "@/components/ui/dock"
import Data from "@/data/data.js"

const items = [
    {href: "/", icon: Home, label: "Home"},
    {href: `mailto:${Data.personal.email}`, icon: Mail, label: "Email"},
    {href: Data.social.github, icon: FaGithub, label: "Github"},
    {href: Data.social.linkedin, icon: FaLinkedin, label: "LinkedIn"},
    {href: Data.social.instagram, icon: FaInstagram, label: "Instagram"},
]

export default function DockNav() {
    return (
        <div className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 md:block">
            <Dock direction="middle">
                {items.map((item) => (
                    <DockIcon key={item.label}>
                        <Link
                          href={item.href}
                          aria-label={item.label}
                          title={item.label}
                          className="flex size-full items-center justify-center rounded-full p-2 transition-colors hover:bg-foreground/10"
                        >
                            <item.icon className="size-5" />
                        </Link>
                    </DockIcon>
                ))}
            </Dock>
        </div>
    )
}

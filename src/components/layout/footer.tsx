import Facebook from "@/assets/icons/facebook";
import Instagram from "@/assets/icons/instagram";
import Linkedin from "@/assets/icons/linkedin";
import Logo from "@/assets/icons/logo";
import Threads from "@/assets/icons/threads";
import X from "@/assets/icons/x";
import Tiktok from "@/assets/icons/tiktok";
import { PAGES, siteConfig } from "@/config/siteConfig";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-foreground py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Logo />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {PAGES.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-accent hover:text-muted-foreground block duration-150"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href={siteConfig.links.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            className="text-muted-foreground hover:text-primary block"
          >
            <X className="text-accent hover:text-muted-foreground duration-150" />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary block"
          >
            <Linkedin className="text-accent hover:text-muted-foreground duration-150" />
          </Link>
          <Link
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-primary block"
          >
            <Facebook className="text-accent hover:text-muted-foreground duration-150" />
          </Link>
          <Link
            href={siteConfig.links.threads}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="text-muted-foreground hover:text-primary block"
          >
            <Threads className="text-accent hover:text-muted-foreground duration-150" />
          </Link>
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary block"
          >
            <Instagram className="text-accent hover:text-muted-foreground duration-150" />
          </Link>
          <Link
            href={siteConfig.links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-muted-foreground hover:text-primary block"
          >
            <Tiktok className="text-accent hover:text-muted-foreground duration-150" />
          </Link>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} SAIO.AI | Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

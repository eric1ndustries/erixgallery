import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;

type ArchiveScrollProps = AnchorProps & LinkProps & PropsWithChildren;

export default function ArchiveScroll({ children, ...props }: ArchiveScrollProps) {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        window.scrollTo({
          top: elem?.getBoundingClientRect().top,
          behavior: "smooth",
        });
    };

    return (
        <Link {...props} onClick={handleScroll}>
          {children}
        </Link>
      );
}
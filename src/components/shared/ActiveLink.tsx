"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
	children: React.ReactNode;
	className: Function;
	href: string;
}

const ActiveLink: React.FC<Props> = ({ children, className, href }) => {
	return (
		<Link
			className={className(href === usePathname())}
			href={href}
			scroll={false}>
			{children}
		</Link>
	);
};

export default ActiveLink;

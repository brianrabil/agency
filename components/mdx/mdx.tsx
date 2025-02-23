import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import rehypePrettyCode from "rehype-pretty-code";
import PostImage from "./image";
import PostLink from "./link";

const transformToSlug = (input: string) => {
	return input
		.toLowerCase()
		.trim()
		.split(" ")
		.join("-")
		.split("&")
		.join("-and-")
		.replace(/[^\w\-]+/g, "")
		.replace(/\-\-+/g, "-");
};

const generateHeading = (headingLevel: number) => {
	return ({ children }: { children: React.ReactNode }) => {
		const textContent = React.Children.toArray(children).join("");
		const slug = transformToSlug(textContent);
		return React.createElement(`h${headingLevel}`, { id: slug }, [
			React.createElement("a", {
				href: `#${slug}`,
				key: `link-${slug}`,
				className: "anchor-link",
			}),
			textContent,
		]);
	};
};

const mdxComponents = {
	h1: generateHeading(1),
	h2: generateHeading(2),
	h3: generateHeading(3),
	h4: generateHeading(4),
	Link: PostLink,
	Image: PostImage,
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function CustomMDX(props: any) {
	const rehypePrettyCodeOptions = {
		theme: "one-dark-pro",
		keepBackground: false,
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		onVisitLine(node: any) {
			// Prevent lines from collapsing in `display: grid` mode, and
			// allow empty lines to be copy/pasted
			if (node.children.length === 0) {
				node.children = [{ type: "text", value: " " }];
			}
		},
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		onVisitHighlightedLine(node: any) {
			// Each line node by default has `class="line"`.
			node.properties.className.push("line--highlighted");
		},
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		onVisitHighlightedWord(node: any) {
			// Each word node has no className by default.
			node.properties.className = ["word--highlighted"];
		},
	};

	return (
		<MDXRemote
			{...props}
			components={{ ...mdxComponents, ...(props.components || {}) }}
			options={{
				mdxOptions: {
					rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
				},
			}}
		/>
	);
}

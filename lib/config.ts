import type { Route } from "next";

export interface Config {
	title: string;
	description: string;
	profile: {
		firstName: string;
		lastName: string;
		jobTitle: string;
		career: {
			title: string;
			company: string;
			startDate: string;
			endDate: string;
			description: string;
			logo: string;
		}[];
	};
	nav: {
		name: string;
		href: Route;
	}[];
	hero: {
		badge?: string;
		heading: string;
		description: string;
	};
	social: {
		email: {
			network: string;
			href: string;
		};
		x: {
			network: string;
			username: string;
			href: string;
		};
		github: {
			network: string;
			href: string;
		};
		linkedin: {
			network: string;
			href: string;
		};
		youtube: {
			network: string;
			href: string;
		};
		tiktok: {
			network: string;
			href: string;
		};
		rss: {
			network: string;
			href: string;
		};
	};
	tools: {
		header: {
			title: string;
			description: string;
		};
		items: {
			name: string;
			description: string;
			url: string;
			logo: string;
			category:
				| "Framework"
				| "Hosting"
				| "AI"
				| "Language"
				| "User Interface"
				| "Operating System"
				| "Tool"
				| "Database";
			featured: boolean;
		}[];
	};
	projects: {
		header: {
			title: string;
			description: string;
		};
		items: {
			title: string;
			image: string;
			category: "Web App" | "Mobile App" | "UI/UX" | "Consulting";
			description: string;
		}[];
	};
	pricing: {
		header: {
			title: string;
			description: string;
		};
		tiers: {
			name: string;
			id: string;
			href: string;
			description: string;
			features: string[];
			mostPopular: boolean;
			price: string;
			frequency: "monthly" | "annually" | "per-project";
		}[];
	};
	testimonials: {
		header: {
			title: string;
			description: string;
		};
		items: {
			name: string;
			title: string;
			image: string;
			quote: string;
			feedback: string;
			rating: number;
		}[];
	};
	posts: {
		header: {
			title: string;
			description: string;
		};
		items: {
			id: string;
			title: string;
			href: Route;
			category: "Review" | "Guide";
			imageUrl: string;
			date: string;
			description: string;
			readTime: string;
		}[];
	};
	faqs: {
		header: {
			title: string;
			description: string;
		};
		items: {
			question: string;
			answer: string;
		}[];
	};
}

export const config = {
	title: "Brian Rabil",
	description: "Personal Website",
	profile: {
		firstName: "Brian",
		lastName: "Rabil",
		jobTitle: "UX Architect & Full-Stack Engineer",
		career: [
			{
				title: "Senior UI Engineer",
				company: "Goldman Sachs",
				startDate: "2021",
				endDate: "Present",
				description:
					"I worked for Cognizant as a Senior Software Engineer for 3 years. I was responsible for designing and developing web and desktop applications for clients in the financial services industry.",
				logo: "/logos/goldman-sachs.jpeg",
			},
			{
				title: "UX Architect",
				company: "Schema Driven",
				startDate: "2019",
				endDate: "2021",
				description:
					"Currently, I work for Schema Driven, a startup that provides enterprise-level automation software. As the lead UX Architect, I work closely with the engineering team to design and build powerful &amp; easy-to-use low-code tooling.",
				logo: "/logos/schema-driven.jpeg",
			},
			{
				title: "Lead Frontend Developer",
				company: "SAIC",
				startDate: "2017",
				endDate: "2019",
				description:
					"I started my career at Accenture as a Software Engineer. I worked on a variety of projects for clients in the healthcare and retail industries.",
				logo: "/logos/saic.jpeg",
			},
			{
				title: "Founder",
				company: "Smart Sale",
				startDate: "2013",
				endDate: "2016",
				description:
					"I started my career at Accenture as a Software Engineer. I worked on a variety of projects for clients in the healthcare and retail industries.",
				logo: "/logos/smart-sale.jpeg",
			},
			{
				title: "Graphic Designer",
				company: "Freelance",
				startDate: "2010",
				endDate: "2013",
				description: "",
				logo: "",
			},
		],
	},
	nav: [
		{ name: "Home", href: "/" },
		{ name: "About", href: "#about" },
		{ name: "Projects", href: "#projects" },
		{ name: "Pricing", href: "#pricing" },
		{ name: "Testimonials", href: "#testimonials" },
		{ name: "FAQ", href: "#faq" },
		{ name: "Contact", href: "#contact" },
	],
	hero: {
		badge: "Introducing the MVP2Go",
		heading: "Launch Your Startup in Just 30 Days ✨",
		description:
			"We transform your vision into a market-ready app in as little as 30 days. Focus on validating your idea, attracting funding, and engaging users—all without lifting a finger on the tech side.",
	},
	tools: {
		header: {
			title: "My Stack",
			description:
				"Over the years, I've developed a stack that I've honed to be the most effective for building robust & scalable applications.",
		},
		items: [
			{
				name: "Typescript",
				description: "Programming Language",
				url: "https://www.typescriptlang.org/",
				logo: "/logos/typescript-original.svg",
				category: "Language",
				featured: true,
			},
			{
				name: "Next.js",
				description: "React Framework",
				url: "https://nextjs.org/",
				logo: "/logos/nextjs-original.svg",
				category: "Framework",
				featured: true,
			},
			// {
			// 	name: "Turborepo",
			// 	description: "Build System",
			// 	url: "https://turbo.build/repo",
			// 	logo: "/logos/turborepo-original.svg",
			// 	category: "Tool",
			// 	featured: true,
			// },
			{
				name: "Vercel",
				description: "Static Site Hosting",
				url: "https://vercel.com/",
				logo: "/logos/vercel-original.svg",
				category: "Hosting",
				featured: true,
			},
			{
				name: "TailwindCSS",
				description: "CSS Framework",
				url: "https://tailwindcss.com/",
				logo: "/logos/tailwindcss-original.svg",
				category: "User Interface",
				featured: true,
			},
			{
				name: "PostgreSQL",
				description: "Database",
				url: "https://www.postgresql.org/",
				logo: "/logos/postgresql-original.svg",
				category: "Database",
				featured: true,
			},
			{
				name: "Clerk",
				description: "Authentication",
				url: "https://clerk.com/",
				logo: "/logos/clerk-original.svg",
				category: "Tool",
				featured: true,
			},
			{
				name: "Stripe",
				description: "Payment Processing",
				url: "https://stripe.com/",
				logo: "/logos/stripe-original.svg",
				category: "Tool",
				featured: true,
			},
			// {
			// 	name: "Mintify",
			// 	description: "Blog Platform",
			// 	url: "https://mintify.com/",
			// 	logo: "/logos/mintify-original.svg",
			// 	category: "Tool",
			// 	featured: true,
			// },
			{
				name: "Google Analytics",
				description: "Web Analytics",
				url: "https://analytics.google.com/",
				logo: "/logos/google-analytics-original.svg",
				category: "Tool",
				featured: true,
			},
			{
				name: "Posthog",
				description: "Web Analytics",
				url: "https://posthog.com/",
				logo: "/logos/posthog-original.svg",
				category: "Tool",
				featured: true,
			},
			{
				name: "Resend",
				description: "Transactional Emails",
				url: "https://resend.com/",
				logo: "/logos/resend-light.svg",
				category: "Tool",
				featured: true,
			},
			{
				name: "Sentry",
				description: "Error Tracking",
				url: "https://sentry.io/",
				logo: "/logos/sentry-light.svg",
				category: "Tool",
				featured: true,
			},
			// {
			// 	name: "n8n",
			// 	description: "Workflow Automation",
			// 	url: "https://n8n.io/",
			// 	logo: "/logos/n8n-original.svg",
			// 	category: "Tool",
			// 	featured: true,
			// },
			{
				name: "OpenAI API",
				description: "LLM Foundation Model",
				url: "https://openai.com/",
				logo: "/logos/openai-light.svg",
				category: "AI",
				featured: true,
			},
			// {
			// 	name: "Docker",
			// 	description: "Containerization Platform",
			// 	url: "https://www.docker.com/",
			// 	logo: "/logos/docker-original.svg",
			// 	category: "Tool",
			// 	featured: true,
			// },
			// {
			// 	name: "Digital Ocean",
			// 	description: "Cloud Hosting",
			// 	url: "https://www.digitalocean.com/",
			// 	logo: "/logos/digitalocean-original.svg",
			// 	category: "Hosting",
			// 	featured: true,
			// },
			// {
			// 	name: "Kubernetes",
			// 	description: "Container Orchestration",
			// 	url: "https://kubernetes.io/",
			// 	logo: "/logos/kubernetes-original.svg",
			// 	category: "Tool",
			// 	featured: true,
			// },
		],
	},
	social: {
		email: {
			network: "Email",
			href: "mailto:brianrabil@gmail.com",
		},
		x: {
			network: "X",
			username: "rabilb",
			href: "https://x.com/brianrabil",
		},
		github: {
			network: "GitHub",
			href: "https://github.com/brianrabil",
		},
		linkedin: {
			network: "LinkedIn",
			href: "https://www.linkedin.com/in/brianrabil/",
		},
		youtube: {
			network: "YouTube",
			// TODO: Update with actual YouTube channel
			href: "https://www.youtube.com/@brianrabil",
		},
		tiktok: {
			network: "TikTok",
			// TODO: Update with actual TikTok channel
			href: "https://www.tiktok.com/@brianrabil",
		},
		rss: {
			network: "RSS",
			// TODO: Update with actual RSS feed
			href: "#",
		},
	},
	pricing: {
		header: {
			title: "Pricing",
			description:
				"Choose a plan that works for you. We take limited projects per month, focusing on quality, not quantity.",
		},
		tiers: [
			{
				name: "Designing",
				id: "tier-designing",
				href: "#",
				price: "$1,999",
				frequency: "per-project",
				description: "Full UI/UX design package.",
				features: [
					"Complete UI/UX Design",
					"Brand Identity Package",
					"User Journey Mapping",
					"High-Fidelity Prototypes",
					"Final Design Handover",
				],
				mostPopular: false,
			},
			{
				name: "MVP",
				id: "tier-mvp",
				href: "#",
				price: "$4,999",
				frequency: "per-project",
				description: "Complete MVP development and launch.",
				features: [
					"End-to-End MVP Development",
					"Core Feature Implementation",
					"User Testing & Validation",
					"Initial Launch Support",
					"Post-Launch Review",
				],
				mostPopular: false,
			},
			{
				name: "Startup",
				id: "tier-startup",
				href: "#",
				price: "$9,999",
				frequency: "per-project",
				description: "End-to-end product development.",
				features: [
					"Full-Scale Product Development",
					"Extensive Testing Phases",
					"Market Fit & Analysis",
					"Initial Launch & Support",
					"Continuous Improvement Plan",
				],
				mostPopular: true,
			},
			{
				name: "Consultancy",
				id: "tier-consultancy",
				href: "#",
				price: "$1,999",
				frequency: "per-project",
				description: "Comprehensive strategic planning.",
				features: [
					"Strategy Session",
					"Detailed Market Analysis",
					"Product Development Plan",
					"Feasibility Study Report",
					"Final Recommendations",
				],
				mostPopular: false,
			},
		],
	},
	// tools: [
	// 	{ name: "Tailwind", icon: <Icon.TailwindIcon /> },
	// 	{ name: "Figma", icon: <Icon.FigmaIcon /> },
	// 	// { name: "Python", icon: <Icon.PythonIcon /> },
	// 	{ name: "PostgreSQL", icon: <Icon.PostgresIcon /> },
	// 	// { name: "TypeScript", icon: <Icon.TypescriptIcon /> },
	// 	// { name: "JavaScript", icon: <Icon.JavascriptIcon /> },
	// 	{ name: "Go", icon: <Icon.GoIcon /> },
	// 	// { name: "Rust", icon: <Icon.RustIcon /> },
	// 	{ name: "Bash", icon: <Icon.BashIcon /> },
	// 	{ name: "Next.js", icon: <Icon.NextIcon /> },
	// 	{ name: "Vercel", icon: <Icon.VercelIcon /> },
	// 	// { name: "PNPM", icon: <Icon.PNPMIcon /> },
	// 	{ name: "Prisma", icon: <Icon.PrismaIcon /> },
	// 	// { name: "Express", icon: <Icon.ExpressIcon /> },
	// 	{ name: "Bun", icon: <Icon.BunIcon /> },
	// 	{ name: "Node.js", icon: <Icon.NodeIcon /> },
	// 	// { name: "Tauri", icon: <Icon.TauriIcon /> },
	// 	{ name: "Storybook", icon: <Icon.StorybookIcon /> },
	// 	// { name: "Webpack", icon: <Icon.WebpackIcon /> },
	// 	// { name: "GraphQL", icon: <Icon.GraphQL /> },
	// 	{ name: "AWS", icon: <Icon.AWSIcon /> },
	// 	{ name: "Docker", icon: <Icon.DockerIcon /> },
	// 	{ name: "GitLab", icon: <Icon.GitlabIcon /> },
	// 	{ name: "GitHub", icon: <Icon.GithubIcon /> },
	// 	// { name: "Apple", icon: <Icon.AppleIcon /> },
	// 	{ name: "Arch Linux", icon: <Icon.ArchLinuxIcon /> },
	// 	{ name: "Fedora", icon: <Icon.FedoraIcon /> },
	// 	{ name: "Chrome", icon: <Icon.ChromeIcon /> },
	// 	{ name: "Cypress", icon: <Icon.CypressIcon /> },
	// 	// { name: "Jira", icon: <Icon.JiraIcon /> },
	// 	// { name: "PostCSS", icon: <Icon.PostCSSIcon /> },
	// 	{ name: "Red Hat", icon: <Icon.RedHatIcon /> },
	// 	// { name: "Rollup", icon: <Icon.RollupIcon /> },
	// ],
	projects: {
		header: {
			title: "Projects",
			description:
				"Here are some of the projects I've worked on over the years.",
		},
		items: [
			{
				title: "Warrior Academy",
				category: "Web App",
				description:
					"Engineered an AI-powered fitness tracking platform for military recruitment, optimizing candidate selection and training regimens.",
				image: "/images/sd-warrior-academy-mockup.png",
			},
			{
				title: "My Financial",
				category: "Web App",
				description:
					"Designed an intuitive banking application for personal finance management.",
				image: "/images/sd-my-financial-mockup.png",
			},
			{
				title: "Warrior Academy Course Platform",
				category: "Web App",
				description:
					"Developed a comprehensive military training course platform for Warrior Academy, enhancing soldier preparation and skill development.",
				image: "/images/sd-warrior-academy-learning-mockup.png",
			},
			{
				title: "Synthetic Analyst",
				category: "Web App",
				description:
					"Engineered an AI-powered data analysis tool for business intelligence.",
				image: "/images/saic-sa-module-builder-mockup.png",
			},
			{
				title: "Compeat",
				category: "Web App",
				description:
					"Designed a competitive analysis platform for small businesses.",
				image: "/images/sd-compeat-mockup.png",
			},
			{
				title: "CAP Map",
				category: "Web App",
				description:
					"Developed a mapping solution for Civil Air Patrol operations.",
				image: "/images/saic-cap-map-mockup.png",
			},
			{
				title: "GMARS Logo",
				category: "UI/UX",
				description: "Created a modern logo design for GMARS organization.",
				image: "/images/saic-gmars-logo.png",
			},
		],
	},
	testimonials: {
		header: {
			title: "Testimonials",
			description:
				"Hear what our clients say about our services and the impact we've made.",
		},
		items: [
			{
				name: "Katy Jackson",
				title: "Designer at Mailgorilla",
				image: "/path-to-katy-image.jpg", // Replace with actual image path
				quote: "Highly skilled and professional",
				feedback:
					"And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
				rating: 5,
			},
			{
				name: "Sean Murphy",
				title: "Founder of North Agency",
				image: "/path-to-sean-image.jpg",
				quote: "I highly recommend him",
				feedback:
					"And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
				rating: 5,
			},
			{
				name: "Elaine Foster",
				title: "CEO of Wakatech",
				image: "/path-to-elaine-image.jpg",
				quote: "I’m so lucky I found John!",
				feedback:
					"And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
				rating: 5,
			},
			{
				name: "Jeff Bick",
				title: "Developer at Bad Inc.",
				image: "/path-to-jeff-image.jpg",
				quote: "I’m really impressed with the quality of his work",
				feedback:
					"And robusta french bar luwak extra caffeine cup filter macchiato skinny shop cream that variety. Caramel black affogato con frappuccino mocha sweet milk and.",
				rating: 5,
			},
		],
	},
	posts: {
		header: {
			title: "Latest Posts",
			description:
				"Explore our latest posts on the latest trends in web development.",
		},
		items: [
			{
				id: "1",
				title: "Why Tailwind CSS is the Top Choice for Modern Web Development",
				href: "/blog/why-tailwind-css-is-the-top-choice" as Route,
				category: "Review",
				imageUrl: "https://placehold.co/600x400",
				date: "2024-04-20",
				description:
					"Explore the benefits of Tailwind CSS and why it's becoming the preferred choice for modern web developers.",
				readTime: "5 min read",
			},
			{
				id: "2",
				title:
					"Efficient JavaScript Tooling in 2024: The Latest Build Tools and Optimizations",
				href: "/blog/efficient-javascript-tooling-2024" as Route,
				category: "Guide",
				imageUrl: "https://placehold.co/600x400",
				date: "2024-04-25",
				description:
					"Discover the most efficient JavaScript build tools and optimization techniques for 2024.",
				readTime: "8 min read",
			},
			{
				id: "3",
				title:
					"Adopting TypeScript in 2024: Tips for Seamless Integration into Existing Projects",
				href: "/blog/adopting-typescript-2024" as Route,
				category: "Guide",
				imageUrl: "https://placehold.co/600x400",
				date: "2024-05-01",
				description:
					"Learn how to smoothly integrate TypeScript into your existing projects with these practical tips.",
				readTime: "10 min read",
			},
		],
	},
	faqs: {
		header: {
			title: "Frequently asked questions",
			description:
				"If you have any questions, feel free to contact us. We'll get back to you as soon as possible.",
		},
		items: [
			{
				question: "How long does it take to develop an app?",
				answer:
					"We can develop and launch your app in as little as 30 days. Timelines may vary based on the project's complexity.",
			},
			{
				question: "Do I need any technical skills to work with you?",
				answer:
					"Not at all! We handle all the technical aspects. You just need to share your vision with us, and we'll take care of the rest.",
			},
			{
				question: "How much does it cost to develop an MVP?",
				answer:
					"Our pricing is transparent and flexible to suit different needs. MVP development starts at $4,999 for a one-time project. We recommend booking a free consultation to discuss your specific requirements and get a tailored quote.",
			},
			{
				question: "Can you help with existing projects?",
				answer:
					"Absolutely! Whether you need to revamp your current app, add new features, or improve performance, our team can enhance your product to better meet your goals.",
			},
			{
				question: "What services do you offer?",
				answer:
					"We provide a range of services including App Development, UI/UX Design, Branding & Identity, and Strategic Consultancy to help bring your vision to life.",
			},
			{
				question: "How do you ensure the quality and security of the app?",
				answer:
					"Quality and security are our top priorities. We follow best coding practices, conduct thorough testing at each development stage, and adhere to industry-standard security protocols to ensure your app is reliable and secure.",
			},
			{
				question: "What is your development process?",
				answer:
					"Our simple 3-step process includes: 1) Get Onboarded – understanding your goals and creating a custom plan; 2) Design, Develop & Test – we handle all aspects of creation while you focus on your business; 3) Launch & Grow – we deploy your app with full support during user onboarding.",
			},
			{
				question: "Do you offer post-launch support?",
				answer:
					"Yes, we provide ongoing support even after your app goes live to ensure a smooth experience for you and your users.",
			},
			{
				question: "Can you help with marketing and attracting users?",
				answer:
					"While our primary focus is app development, we offer marketing services to help attract and engage your ideal customers, ensuring your app reaches its target audience.",
			},
			{
				question: "How do I get started?",
				answer:
					"Simply book a free 30-minute strategy call with us. We'll discuss your idea, goals, and how we can bring your vision to life.",
			},
		],
	},
} satisfies Config;

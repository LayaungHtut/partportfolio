import { Github, Linkedin, Facebook, Mail, Phone, Send } from "lucide-svelte";

export const contactLinks = [
	{
		name: "GitHub",
		icon: Github,
		url: "https://github.com/LayaungHtut",
		color: "bg-neutral text-neutral-content hover:bg-neutral-focus"
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		url: "https://linkedin.com/in/la-yaung-htut-799a6634a",
		color: "bg-blue-600 text-white hover:bg-blue-700"
	},
	{
		name: "Facebook",
		icon: Facebook,
		url: "https://facebook.com/yorozuya.L",
		color: "bg-blue-700 text-white hover:bg-blue-800"
	},
	{
		name: "Gmail",
		icon: Mail,
		url: "mailto:layaunghtut5@gmail.com",
		color: "bg-rose-500 text-white hover:bg-rose-600"
	},
	{
		name: "Telegram",
		icon: Send,
		url: "https://t.me/depressed_yorozuya_L",
		color: "bg-cyan-500 text-white hover:bg-cyan-600"
	},
	{
		name: "Phone",
		icon: Phone,
		url: "tel:+959425505460",
		color: "bg-green-600 text-white hover:bg-green-700"
	}
];

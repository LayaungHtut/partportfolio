<script lang="ts">
	import { contactLinks } from '$lib/data/contact';
</script>

<section class="min-h-screen bg-base-100 flex flex-col items-center justify-center p-8">
	<h1 class="text-3xl sm:text-5xl font-bold text-center mb-6 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">Get in Touch</h1>
	<p class="text-center text-base-content/70 max-w-lg mb-10">
		Let’s connect! Whether you have a project in mind, want to collaborate, or just say hi — feel free to reach out through any of the platforms below.
	</p>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
		{#each contactLinks as link}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class={`card shadow-xl transition-all duration-300 hover:scale-105 ${link.color}`}
			>
				<div class="card-body flex flex-row items-center space-x-4">
					<svelte:component this={link.icon} class="w-8 h-8" />
					<span class="text-lg font-semibold">{link.name}</span>
				</div>
			</a>
		{/each}
	</div>

	<div class="mt-12 text-center text-sm text-base-content/60"></div>
</section>

<style>
	section {
		font-family: "Inter", sans-serif;
	}
</style>

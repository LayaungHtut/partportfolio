<script lang="ts">
	import { skills } from '$lib/data/skills';
</script>

<section
	class="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-linear-to-b from-base-200 via-base-100 to-base-200 animate-fade-slide"
>
	<h1 class="text-4xl sm:text-5xl font-bold text-center mb-14 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
		Skills I have developed
	</h1>

	<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-full max-w-6xl">
		{#each skills as skill (skill.name)}
			<div
				class="card  w-80 shadow-xl rounded-3xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fade-in"
			>
				<figure class="h-40 bg-linear-to-br from-base-200 to-base-300 flex items-center justify-center overflow-hidden">
					<img
						src={skill.icon}
						alt={skill.name}
						class="object-contain h-28 w-28 hover:scale-110 transition-transform duration-500"
					/>
				</figure>
				<div class="card-body text-center">
					<h2 class="card-title justify-center text-lg font-semibold text-primary">
						{skill.name}
					</h2>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	@keyframes fadeInSlide {
		from {
			opacity: 0;
			transform: translateY(40px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-slide {
		animation: fadeInSlide 0.8s ease-out both;
	}

	.animate-fade-in {
		animation: fadeInSlide 1s ease-out both;
		animation-delay: 0.2s;
	}
</style>

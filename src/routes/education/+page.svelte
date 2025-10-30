<script lang="ts">
	import { educations } from '$lib/data/education';
</script>

<div class="flex flex-col gap-10 items-center px-4">
	<h1 class="text-3xl sm:text-5xl font-bold text-center mb-6 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
		My Educational Background
	</h1>

	{#each educations as educational}
		<div
			class="card bg-base-100 shadow-xl w-full max-w-4xl hover:shadow-2xl transition-transform duration-300 hover:scale-[1.02]  lg:flex-row"
		>
			<figure class="w-full lg:w-1/3">
				<img
					src={educational.image}
					alt={educational.title}
					class="h-64 lg:h-full w-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
				/>
			</figure>

			<div class="card-body w-full lg:w-2/3 text-center lg:text-left">
				<h2 class="card-title text-lg sm:text-xl sm:align-middle  md:text-2xl font-semibold">{educational.title}</h2>
				<p class="text-sm text-gray-500">{educational.period}</p>
				<p class="font-medium">{educational.education}</p>
				<p class="text-sm md:text-base leading-relaxed">{educational.description}</p>
			</div>
		</div>
	{/each}
</div>

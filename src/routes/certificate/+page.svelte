<script lang="ts">
	import { certificates } from '$lib/data/certificates';

	let selectedImage = $state<string | null>(null);
	let selectedTitle = $state<string | null>(null);

	function openModal(img: string, title: string) {
		selectedImage = img;
		selectedTitle = title;
		(document.getElementById('image_modal') as HTMLDialogElement)?.showModal();
	}
</script>

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
	{#each certificates as certificate}
		<div class="card bg-base-100 w-80 shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-105">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<figure
				class="h-56 bg-base-200 flex items-center justify-center overflow-hidden cursor-pointer"
				onclick={() => openModal(certificate.certificates, certificate.title)}
			>
				<img
					src={certificate.certificates}
					alt={certificate.title}
					class="object-contain h-full w-full hover:opacity-90"
				/>
			</figure>

			<div class="card-body text-center">
				<h2 class="card-title text-lg font-semibold">{certificate.title}</h2>
				<p class="text-sm opacity-80">{certificate.description}</p>
				<div class="card-actions justify-center mt-4">
					<button
						class="btn btn-primary"
						onclick={() => openModal(certificate.certificates, certificate.title)}
					>
						View
					</button>
				</div>
			</div>
		</div>
	{/each}
</div>

<!-- 🖼️ Modal -->
<dialog id="image_modal" class="modal">
	<div class="modal-box max-w-4xl bg-base-100 p-4">
		<h3 class="text-lg font-bold mb-4 text-center">{selectedTitle}</h3>

		{#if selectedImage}
			<img
				src={selectedImage}
				alt={selectedTitle}
				class="max-h-[80vh] w-full object-contain rounded-lg"
			/>
		{/if}
	</div>

	<form method="dialog" class="modal-backdrop">
		<button>Close</button>
	</form>
</dialog>

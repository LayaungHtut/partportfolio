<script lang="ts">
	let phrases = ['La Yaung Htut', 'Web Developer'];

	let currentText = $state('');
	let phraseIndex = $state(0);
	let charIndex = $state(0);
	let isDeleting = $state(false);

	const config = {
		typingSpeed: 90,
		deletingSpeed: 50,
		pauseAfterType: 1200,
		pauseAfterDelete: 300
	};

	function tick() {
		const current = phrases[phraseIndex];
		if (!isDeleting) {
			charIndex++;
			currentText = current.slice(0, charIndex);
			if (charIndex === current.length) {
				setTimeout(() => {
					isDeleting = true;
					tick();
				}, config.pauseAfterType);
				return;
			}
			setTimeout(tick, config.typingSpeed);
		} else {
			charIndex--;
			currentText = current.slice(0, charIndex);
			if (charIndex === 0) {
				isDeleting = false;
				phraseIndex = (phraseIndex + 1) % phrases.length;
				setTimeout(tick, config.pauseAfterDelete);
				return;
			}
			setTimeout(tick, config.deletingSpeed);
		}
	}

	$effect(() => {
		const timer = setTimeout(tick, 500);
		return () => clearTimeout(timer);
	});
</script>

<div class="mt-50 items-center justify-center flex w-full flex-col lg:flex-row">

	<!-- Left Content -->
	<div class="card flex items-center justify-center w-full lg:w-1/2 h-full bg-base-100 rounded-none shadow-none">
		<div class="text-center">
			<h1 class="text-2xl font-extrabold md:text-6xl">
				<span aria-live="polite" aria-atomic="true">{currentText}</span>
				<span
					class="ml-1 inline-block h-8 w-1 align-middle animate-[blink_1s_steps(2,start)_infinite]"
					aria-hidden="true"
				></span>
			</h1>
			<p class="mt-4">Since 2024 April</p>
		</div>
	</div>

	<div class="divider lg:divider-horizontal m-0"></div>

	<!-- Right Content -->
	<div class="card flex items-center justify-center w-full lg:w-1/2 h-full rounded-none shadow-none">
		<div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-full rounded-full ring-2 ring-offset-2">
    <img alt="la_yaung_htut" src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
</div>
	</div>
</div>

<style>
	@keyframes blink {
		0%,
		49% {
			opacity: 1;
		}
		50%,
		100% {
			opacity: 0;
		}
	}
</style>

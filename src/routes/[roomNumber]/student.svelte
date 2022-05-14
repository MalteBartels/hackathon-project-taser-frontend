<script>
	import { page } from '$app/stores';
	import ConfusionDiagram from '$lib/confusion-diagram.svelte';
	import AvatarLost from '$lib/avatar-lost.svelte';
	import AvatarNotLost from '$lib/avatar-not-lost.svelte';

	/** Current room number from the url */
	const roomNumber = $page.params.roomNumber;

	/** Specifies if logged in user is lost */
	let isLost = false;
	const setStatusLost = () => (isLost = true);
	const setStatusNotLost = () => (isLost = false);
</script>

<main class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
	<div class="bg-white p-5 sm:p-10 md:p-15 flex flex-col items-center sm:block">
		<h1 class="text-3xl md:text-6xl font-extrabold font-serif mb-5">Hello student!</h1>
		<p>Your current room is {roomNumber}</p>
		<p class="mt-3 mb-5">You currently feel...</p>
		<div class="grid sm:grid-cols-2 items-center">
			<div class="w-24 mx-auto sm:mx-0">
				{#if isLost}
					<AvatarLost />
				{:else}
					<AvatarNotLost />
				{/if}
			</div>

			<div class="flex flex-col">
				<button class={`button ${!isLost ? 'button--solid' : ''}`} on:click={setStatusNotLost}>
					Not Lost
				</button>
				<button class={`button ${isLost ? 'button--solid' : ''}`} on:click={setStatusLost}>
					Lost
				</button>
			</div>
		</div>
	</div>
	<div class="bg-white p-5 sm:p-10 md:p-15">
		<ConfusionDiagram data={[]} />
	</div>
	<div class="bg-white p-5 sm:p-10 md:p-15 col-start-1">
		<h2 class="text-lg md:text-2xl font-bold font-serif mb-4">Everything done here?</h2>
		<a class="button" href="/">&blacktriangleleft; Leave room </a>
	</div>
</main>

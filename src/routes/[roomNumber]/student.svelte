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

	const MOCK_DATA = [
		{ time: 1, value: 0.1 },
		{ time: 2, value: 0.3 },
		{ time: 3, value: 0.2 },
		{ time: 4, value: 0.3 },
		{ time: 5, value: 0.4 },
		{ time: 6, value: 0.6 },
		{ time: 7, value: 0.7 },
		{ time: 8, value: 0.75 },
		{ time: 9, value: 0.78 },
		{ time: 10, value: 0.8 },
		{ time: 11, value: 0.9 },
		{ time: 12, value: 0.96 },
		{ time: 13, value: 0.8 },
		{ time: 14, value: 0.7 },
		{ time: 15, value: 0.8 },
		{ time: 16, value: 0.86 },
		{ time: 17, value: 0.78 },
		{ time: 18, value: 0.89 },
		{ time: 19, value: 0.9 },
		{ time: 20, value: 0.95 }
	];
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
	<div class="bg-white p-5 sm:p-10 md:p-15 min-h-[50vh] sm:min-h-0 flex flex-col">
		<h2 class="text-lg md:text-2xl font-bold font-serif mb-4">Current class confusion:</h2>

		<ConfusionDiagram data={MOCK_DATA} />
	</div>
	<div class="bg-white p-5 sm:p-10 md:p-15 col-start-1">
		<h2 class="text-lg md:text-2xl font-bold font-serif mb-4">Everything done here?</h2>
		<a class="button" href="/">&blacktriangleleft; Leave room </a>
	</div>
</main>

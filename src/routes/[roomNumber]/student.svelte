<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import ConfusionDiagram from '$lib/confusion-diagram.svelte';
	import AvatarLost from '$lib/avatar-lost.svelte';
	import AvatarNotLost from '$lib/avatar-not-lost.svelte';
	import { fetchStats } from '$lib/api-connectors/realTimeData';
	import { goto } from '$app/navigation';
	import { postVote } from '$lib/api-connectors/queue';

	/** Current room number from the url */
	const roomNumber = $page.params.roomNumber;

	/** Specifies if logged in user is lost */
	let isLost = false;
	const setStatusLost = () => (isLost = true);
	const setStatusNotLost = () => (isLost = false);

	function handleLost() {
		setStatusLost();
		postVote(true, roomNumber);
	}
	function handleNotLost() {
		setStatusNotLost();
		postVote(false, roomNumber);
	}

	/** Requests per second */
	const REFRESH_RATE = 1;

	/** @type {{time: Number, value: Number}[]} */
	let data = [];

	onMount(async () => {
		setInterval(async () => {
			try {
				data = await fetchStats(roomNumber);
			} catch (e) {
				if (e.status === 404) {
					goto('/__error');
				}
			}
		}, REFRESH_RATE * 1000);
	});
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
				<button class={`button ${!isLost ? 'button--solid' : ''}`} on:click={handleNotLost}>
					Not Lost
				</button>
				<button class={`button ${isLost ? 'button--solid' : ''}`} on:click={handleLost}>
					Lost
				</button>
			</div>
		</div>
	</div>
	<div class="bg-white p-5 sm:p-10 md:p-15 min-h-[50vh] sm:min-h-0 flex flex-col">
		<h2 class="text-lg md:text-2xl font-bold font-serif mb-4">Current class confusion:</h2>

		<ConfusionDiagram {data} />
	</div>
	<div class="bg-white p-5 sm:p-10 md:p-15 col-start-1">
		<h2 class="text-lg md:text-2xl font-bold font-serif mb-4">Everything done here?</h2>
		<a class="button" href="/">&blacktriangleleft; Leave room </a>
	</div>
</main>

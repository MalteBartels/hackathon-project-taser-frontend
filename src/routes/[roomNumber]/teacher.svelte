<script>
	import { page } from '$app/stores';
	import ConfusionDiagram from '$lib/confusion-diagram.svelte';
	import AvatarTeacher from '$lib/avatar-teacher.svelte';
	import { onMount } from 'svelte';
	import { fetchStats } from '$lib/api-connectors/query';
	import { goto } from '$app/navigation';

	/** Current room number from the url */
	const roomNumber = $page.params.roomNumber;

	/** Requests per second */
	const REFRESH_RATE = 1;

	/** @type {{time: Number, value: Number}[]} */
	let data = [];

	onMount(async () => {
		setInterval(async () => {
			try {
				data = await fetchStats();
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
		<h1 class="text-3xl md:text-6xl font-extrabold font-serif mb-5">Hello teacher!</h1>
		<p>Your current room is {roomNumber}</p>
		<div class="w-32">
			<AvatarTeacher />
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

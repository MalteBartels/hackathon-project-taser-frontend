<script>
	import { addRoom, getAllRooms, removeRoom } from '$lib/api-connectors/admin';

	import { onMount } from 'svelte';

	/**
	 * List of all rooms
	 *
	 * @type String[]
	 */
	let allRooms = [];

	onMount(async () => {
		getAllRooms().then((val) => {
			allRooms = val;
		});
	});

	/** Value of the input field for adding a new room number */
	let newRoomNumber = '';

	const handleRemoveRoom = (/** @type String */ room) => {
		removeRoom(room).then((updatedRooms) => (allRooms = updatedRooms));
	};
	const handleAddRoom = (/** @type String */ room) => {
		addRoom(room).then((updatedRooms) => {
			allRooms = updatedRooms;
			newRoomNumber = '';
		});
	};
</script>

<main>
	<div class="shadow bg-white m-5 flex flex-col md:max-w-2xl md:mx-auto p-10 md:p-15">
		<h1 class="text-3xl md:text-6xl font-serif font-extrabold text-center mb-10">Welcome Admin!</h1>
		<h2 class="text-lg md:text-2xl font-bold font-serif mb-4">List of all rooms:</h2>
		<ul>
			{#each allRooms as room}
				<li class="mb-2 pb-1 border-b-2 border-dashed border-slate-700 first:border-t-2 flex">
					<span class="flex-grow">{room}</span>
					<button class="font-bold" on:click={() => handleRemoveRoom(room)}> &#9003;</button>
				</li>
			{/each}
			<li class="flex mt-4">
				<input
					bind:value={newRoomNumber}
					class="sm:flex-grow p-3 border-2 border-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-400 sm:border-r-0"
					type="text"
					placeholder="e.g. UN38-04"
				/>
				<button class="button button-solid" on:click={() => handleAddRoom(newRoomNumber)}>
					&#43; Add room
				</button>
			</li>
		</ul>
		<div class="mt-10 border-t-2 border-slate-900 mb-2 flex flex-col items-center">
			<a class="button block mt-3" href="/">&blacktriangleleft; Logout </a>
		</div>
	</div>
</main>

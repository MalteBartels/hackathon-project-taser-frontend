<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let roomNumber = '';

	function handleLogin() {
		dispatch('login', {
			roomNumber
		});
	}
</script>

<div class="grid items-center">
	<h1 class="text-3xl font-serif font-extrabold mb-4">Enter your Room Number:</h1>
	<div class="flex flex-col sm:flex-row items-center sm:items-stretch">
		<input
			bind:value={roomNumber}
			class="sm:flex-grow p-3 border-2 border-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-400 sm:border-r-0"
			type="text"
			placeholder="e.g. UN38-04"
		/>
		<button on:click={handleLogin} class="button button--solid mt-1 sm:mt-0"
			>Join &blacktriangleright;</button
		>
	</div>
</div>

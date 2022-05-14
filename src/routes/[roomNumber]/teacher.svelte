<script>
	import { page } from '$app/stores';
	import ConfusionDiagram from '$lib/confusion-diagram.svelte';
	import AvatarTeacher from '$lib/avatar-teacher.svelte';

	/** Current room number from the url */
	const roomNumber = $page.params.roomNumber;
</script>

<main class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
	<div class="bg-white p-5 sm:p-10 md:p-15 flex flex-col items-center sm:block">
		<h1 class="text-3xl md:text-6xl font-extrabold font-serif mb-5">Hello teacher!</h1>
		<p>Your current room is {roomNumber}</p>
		<div class="w-32">
			<AvatarTeacher />
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

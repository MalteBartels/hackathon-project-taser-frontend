<script>
	const MOCK_ROOMS = ['U38-01.01', 'U38-01.02', 'U38-01.03', 'U38-01.04'];
	const rooms = MOCK_ROOMS;
</script>

<main>
	<div class="shadow bg-white m-5 flex flex-col md:max-w-2xl md:mx-auto p-10 md:p-15">
		<h1 class="text-3xl md:text-6xl font-serif font-extrabold text-center mb-10">Welcome Admin!</h1>
		<h2 class="text-lg md:text-2xl font-bold font-serif mb-4">List of all rooms:</h2>
		<ul>
			{#each rooms as room}
				<li class="mb-2 pb-1 border-b-2 border-dashed border-slate-700 first:border-t-2 flex">
					<span class="flex-grow">{room}</span>
					<button class="font-bold"> &#9003;</button>
				</li>
			{/each}
			<li><button class="font-bold">&#43; Add room</button></li>
		</ul>
		<div class="mt-10 border-t-2 border-slate-900 mb-2 flex flex-col items-center">
			<a class="button block mt-3" href="/">&blacktriangleleft; Logout </a>
		</div>
	</div>
</main>

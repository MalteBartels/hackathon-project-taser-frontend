<script>
	import LandingPeeps from '$lib/landing-peeps.svelte';
	import Layout from './__layout.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => (mounted = true));
</script>

<Layout>
	<main>
		{#if mounted}
			<div transition:fade class="shadow bg-white m-5 flex flex-col md:max-w-2xl md:mx-auto">
				<div class="bg-slate-100 md:p-5">
					<LandingPeeps />
				</div>
				<div class="p-10 md:p-15">
					<h1 class="text-6xl font-serif font-extrabold text-center mb-10">
						Welcome to Project Taser!
					</h1>
					<nav class="flex justify-center space-x-3">
						<a class="button" href="/student">Student</a>
						<a class="button " href="/teacher">Teacher</a>
						<a class="button" href="/admin">Admin</a>
					</nav>
				</div>
			</div>
		{/if}
	</main>
</Layout>

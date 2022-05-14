<script>
	import LandingPeeps from '$lib/landing-peeps.svelte';
	import Layout from './__layout.svelte';
	import Login from '$lib/login.svelte';
	import { goto } from '$app/navigation';

	// Constants to avoid typos in identifying strings
	const STUDENT = 'student';
	const TEACHER = 'teacher';
	const ADMIN = 'admin';

	/**
	 * Contains as which user we should log in
	 * @type {"student" | "teacher" | "admin" | ''}
	 */
	let loginAsRole = '';
	const loginAsStudent = () => (loginAsRole = STUDENT);
	const loginAsTeacher = () => (loginAsRole = TEACHER);
	const loginAsAdmin = () => (loginAsRole = ADMIN);
	const resetLogin = () => (loginAsRole = '');

	/**
	 * Handles the login event of the login component
	 *
	 * @param {{ detail: {roomNumber: Number}}} event
	 * @param {"student" | "teacher" | "admin" | ""} role
	 */
	function handleLogin(event, role) {
		if (role && event?.detail?.roomNumber) {
			goto(`/${event.detail.roomNumber}/${role}`);
		} else {
			console.error('Invalid role or event', { role, event });
		}
	}
</script>

<Layout>
	<main>
		<div class="shadow bg-white m-5 flex flex-col md:max-w-2xl md:mx-auto">
			<div class="bg-slate-100 md:p-5">
				<LandingPeeps />
			</div>
			<div class="p-10 md:p-15">
				{#if loginAsRole}
					<button class="font-bold" on:click={resetLogin}>&blacktriangleleft; back</button>
				{/if}
				{#if !loginAsRole}
					<h1 class="text-3xl md:text-6xl font-serif font-extrabold text-center mb-10">
						Welcome to Project Taser!
					</h1>
					<nav
						class="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3"
					>
						<button class="button" on:click={loginAsStudent}>Student</button>
						<button class="button" on:click={loginAsTeacher}>Teacher</button>
						<button class="button" on:click={loginAsAdmin}>Admin</button>
					</nav>
				{:else if loginAsRole === STUDENT || loginAsRole === TEACHER}
					<div class="mt-4">
						<Login
							on:login={(/** @type {{ detail: {roomNumber: Number}}} */ event) =>
								handleLogin(event, loginAsRole)}
						/>
					</div>
				{:else if loginAsRole === ADMIN}
					<div class="flex flex-col items-center">
						<p class="mb-3">TODO: Implement authentication for admins</p>
						<a class="button button-solid" href="/admin">Login</a>
					</div>
				{/if}
			</div>
		</div>
	</main>
</Layout>

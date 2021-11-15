<script context='module'>
	export async function load({ session }) {

		if (!session.user || !session.authenticated || !session.token) {
			return {
				status: 302,
				redirect: '/'
			}
		}
		return {
			props: {
				token: session.token
			}
		}
	}
</script>

<script lang="ts">
    import { authStore } from '../../stores/auth.store';   
    async function logout() {
        await authStore.logout();
    }
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>


<h1>Welcome</h1>
<button on:click="{logout}">Logout</button>
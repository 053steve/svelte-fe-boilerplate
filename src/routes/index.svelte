

<script lang="ts">
    import { authStore } from '../stores/auth.store';   
    import type {LoginForm} from '../common/interfaces/auth';

    let authUser;
    let loginForm: LoginForm  = {
        email: '',
        password: ''
    }

    async function login() {
        await authStore.login(loginForm);
        authUser = authStore.authUser;
    }

</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>Login</h1>
<input type="email" bind:value="{loginForm.email}" placeholder="Enter your email">
<input type="password" bind:value="{loginForm.password}" placeholder="Enter your password">
<button on:click="{login}">Login</button>



<script lang="ts">
    import { authStore } from '../stores/auth.store';   
    import type {LoginForm} from '../common/interfaces/auth';
    import { onMount } from "svelte";


    let authUser;
    let loginForm: LoginForm  = {
        username: '',
        password: ''
    }

    async function login() {
        await authStore.login(loginForm);
        authUser = authStore.authUser;
    }

    async function loginMetaMask() {
      await authStore.loginMetaMask();
    }

</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<div class="container mx-auto">
    <div class=" flex h-screen ">
        <div class="m-auto flex-grow">
          <div class="w-full lg:w-4/12  px-4 mx-auto pt-6">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">

                <div class="rounded-t mb-0 px-6 py-6">
                  <div class="text-center mb-3">
                    <h6 class="text-blueGray-500 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div class="btn-wrapper text-center">
                    <button on:click="{loginMetaMask}" class="btn btn-secondary" type="button">
                      Metamask
                  </div>
                  <hr class="mt-6 border-b-1 border-blueGray-300">
                </div>
                
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div class="text-blueGray-400 text-center mb-3 font-bold">
                    <small>Signin</small>
                  </div>
                  <form>
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">Username</label>
                      <input type="text" bind:value="{loginForm.username}" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Username">
                    </div>
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">Password</label>
                      <input type="password" bind:value="{loginForm.password}" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password">
                    </div>
                    <div>
                      <label class="inline-flex items-center cursor-pointer">
                          <input id="customCheckLogin" type="checkbox" class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"><span class="ml-2 text-sm font-semibold text-blueGray-600">Remember me</span>
                        </label>
                    </div>
                    <div class="text-center mt-6">
                      <!-- <button class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button"> Sign In </button> -->
                      <button type="button" class="btn btn-primary" on:click="{login}">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
</div>







<!-- 
<h1 class="uppercase text-indigo-500">Login</h1>
<input type="email" bind:value="{loginForm.username}" placeholder="Enter your email">
<input type="password" bind:value="{loginForm.password}" placeholder="Enter your password">
<button class="btn btn-primary" on:click="{login}">Login</button> -->


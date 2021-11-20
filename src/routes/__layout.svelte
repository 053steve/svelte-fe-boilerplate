<script lang="ts" context='module'>
	  import { applyHttpInterceptors } from '../interceptors';
	  applyHttpInterceptors();
</script>


<header>
    header
</header>

<main>
	<slot />
</main>

<footer>
	Footer
</footer>


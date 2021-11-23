<script lang="ts" context='module'>
	  import { applyHttpInterceptors } from '../interceptors';
	  import "../styles/tailwind-output.css";
	  applyHttpInterceptors();
	  

</script>


<!-- <header>
    header
</header> -->

<main>
	<slot />
</main>

<footer class="relative pt-8 pb-6 mt-2">
    <div class="container mx-auto px-2">
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-6/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Ark Tribe Co.ltd
          </div>
        </div>
      </div>
    </div>
  </footer>


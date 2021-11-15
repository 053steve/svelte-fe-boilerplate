<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                status: status,
                error: error,
            },
        };
    }
</script>

<script>
    export let status;
    export let error;
</script>

{#if error}
    <div class="container">
        <div class="alert-container">
            <h1>{status}</h1>
            <h4>{error.message}</h4>
        </div>
    </div>
{/if}

<script>
    import {goto} from "$app/navigation"
    let name = 'John'




</script>


<h1>About {name}</h1>

<button on:click={()=>{goto('/')}}>Go to About</button>


<style></style>
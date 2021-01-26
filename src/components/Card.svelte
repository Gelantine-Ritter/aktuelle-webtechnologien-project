<script>
  export let card
  export let name = card.name
  export let img = getImage()

  function getImage() {
    if (card.image_uris) {
      return card.image_uris.normal
    } else {
      return 'No picture'
    }
  }
</script>

<style>

    img {
    width: 170.0px;
    height: 260.0px;
    border-radius: 5px;
    }

    p{
    width: 170.0px;
    height: 4.0px;
    font-family: Arial;
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    color: #FFFFFF;
    }

    div {
        margin: 1em;
        display:flex;
        flex-direction: column;
    }

</style>

<div>
  {#if img !== undefined}
    <img src={img} alt={name} />
  {:else}
    <p>{name}</p>
    <p>No Picture available</p>
  {/if}
</div>

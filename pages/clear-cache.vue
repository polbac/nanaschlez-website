<template>
  <div>
    caché reseteado ;)
  </div>
</template>

<script>
export default {
  
  fetch: ({ store }) => {
    console.log('resetStore');
    store.dispatch({ type: 'resetStore' });
  }

}
</script>
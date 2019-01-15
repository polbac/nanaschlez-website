<template>
  <div>
    caché reseteado ;)
  </div>
</template>

<script>
export default {
  
  fetch: ({ store }) => store.commit('resetStore'),

}
</script>
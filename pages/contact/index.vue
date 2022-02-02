<template>
  <div class='contact-container'>
  
    <div class="gradient">
        <p>
          Lets get in touch!
          You can follow me on <a href="https://www.instagram.com/nanaschlez/" target="_blank">instagram</a> or <a href="https://twitter.com/nanaschlez" target="_blank">twitter</a>.
        </p>
        <p>
          Check my NFT on known <a href="https://foundation.app/@nanaschlez" target="_blank">FND</a> or <a href="https://knownorigin.io/nana-schlez" target="_blank">KnownOrigin</a>.
        </p>
        <p>
          Or you can send me an <a href="mailto:nanaschlez@gmail.com">email</a>.
        </p>
      </div>
  </div>
  
</template>

<script>

</script>

<style>
.contact-container a{
  color: #14ef14;
}
.contact-container{
  background: url(/galaxy.gif);
  height: 100vh;
  padding-top: 100px; 
  color: white;
}

.contact-container p{
  font-size: 2rem;
  margin: auto;
  max-width: 600px;
  width: 95%;
}
.gradient {
  width: 90%;
  box-sizing: border-box;
  --angle: 0deg;
  max-width: 640px;
  padding: 20px;
  margin: auto;
  margin-top: 10vh;
  border: 1rem solid;
  border-image: linear-gradient(var(--angle), #12c2e9, #c471ed, #f64f59) 1;
  animation: 5s rotate linear infinite;
}
.gradient p{
  margin-bottom: 20px;
}
@keyframes rotate {
  to {
    --angle: 360deg;
  }
}
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

</style>


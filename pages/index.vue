<template>
 
<div class="home-page">

<iframe style=" width: 200px;height: 114px;top: 30px;position: absolute;left: 60px;" src="https://www.youtube-nocookie.com/embed/SDF-f3BAVjE?controls=0&autoplay=1" title="YouTube video player" autoplay="autoplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/naked-10_7_dtp.css" rel="stylesheet" type="text/css">
<style type="text/css">
	
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<marquee>ART CAN SAVE US / PLEASE BUY ART</marquee>
<div id="mc_embed_signup">
<form action="https://gmail.us14.list-manage.com/subscribe/post?u=4322944eee68d61510a907922&amp;id=d254770c0e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h3>mailing list</h3>
  <p>and stay tuned</p>

<div class="mc-field-group">
	<label for="mce-EMAIL">
</label>
	<input placeholder="Email Address" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4322944eee68d61510a907922_d254770c0e" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                
            </div>
        </div>
    </div>
</form>
</div>

<div class="created">CREATE WITH 💙 BY <a href="https://www.instagram.com/polbac_______/" target="_blank">POLBAC</a></div>
<!--End mc_embed_signup-->
</div>
  
</template>
<script>
import config from '../config';
import { mapState } from 'vuex';
import { HomeModuleComponent } from '../components';
import { scrollPosition, viewportHeight } from '../utils';

export default {

  data() {
    return {current: 1}
  },

  layout: 'default',
  
  created() {
    setInterval(() => {
      if(this.current === 3) {
        this.current = 1;
        return;  
      }
      this.current++
    }, 2000);
  },

  methods: {
    isActive(index) {
      return this.current === index ? 'block' : 'none';
    },
  },

  
  
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: config.title }
      ]
    }
  },
  
}
</script>

<style>


  .image-container{
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    animation: slide 5s infinite;
    background-size: 400px 400px;
    background-position:center;
    background-repeat: no-repeat;
  }

  .image-container img{
    position: fixed;
    height: 70vh;
    width: auto;
    display: none;
    bottom: 10vh;
    right: 30vh;
  }

  .image-container img.image1{
    height: 50vh;
    bottom: 30vh;
    right: 25vh;
  }

  .image-container img.image2{
    height: 50vh;
    bottom: 50vh;
    right: 85vh;
  }

  .image-container img.image3{
    height: 50vh;
    bottom: 10vh;
    right: 45vh;
  }

  @media (max-width: 720px){
    .image-container img{
      position: static;
      width: 100% !important;
      height: auto !important;
      max-height: auto !important;
      margin: auto;
    }

    .image-container img.image1{
      width: 80% !important;
      
    }
    .image-container{
      text-align: center;
      position: static;
    }
  }

  .workshop-banner:hover{
    background: black;
  }
  .workshop-banner{
    box-sizing: border-box;
    padding-top: 35px;
    display: block;
    width: 110px;
    height: 110px;
    text-align: center;
    font-size: 18px;
    background: rgb(74,85,82);
    color: white;
    border-radius: 50%;
    background: -moz-linear-gradient(0deg, rgba(74,85,82,1) 0%, rgba(219,223,112,1) 25%, rgba(237,153,169,1) 50%, rgba(250,74,25,1) 75%, rgba(74,85,82,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(74,85,82,1) 0%, rgba(219,223,112,1) 25%, rgba(237,153,169,1) 50%, rgba(250,74,25,1) 75%, rgba(74,85,82,1) 100%);
    background: linear-gradient(0deg, rgba(74,85,82,1) 0%, rgba(219,223,112,1) 25%, rgba(237,153,169,1) 50%, rgba(250,74,25,1) 75%, rgba(74,85,82,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4a5552",endColorstr="#4a5552",GradientType=1);
    
    background-attachment: fixed;
    animation-timing-function: linear;
    background-size: auto 318px;
    animation-name: menu-gradient;
    animation-duration: 4s;
    animation-iteration-count: infinite;

    animation-name: float;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    

    position: fixed;
    bottom: 15px;
    right: 15px;
    font-weight: 500;
    text-decoration: none;
  }

  @keyframes float {
	0% {
		
		transform: translatey(0px);
	}
	50% {
		
		transform: translatey(-20px);
	}
	100% {
		
		transform: translatey(0px);
	}
}


.home-page {
	
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

#mc_embed_signup{background: url(/glow.gif); clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
#mc_embed_signup input[type="submit"]{background: blue;color: white;margin-top:20px;}
#mc_embed_signup h3{font-size: 20px;margin: 0;}
#mc_embed_signup p{margin: 0;font-size: 12px;margin-bottom: 20px;}
     #mc_embed_signup{
       border-radius: 20px;
       color: white;
           position: fixed;
    bottom: 10px;
    width: 240px;
    left: 40%;
    
    border: 3px inset blue;
    text-align: center;
    padding: 10px;
     }
.created{position: absolute; bottom: 10px; right: 10px; font-size: 11px;color:blue;}
.created a{color:blue;}
marquee{font-size: 2rem;color: blue;position:absolute;top:50%;width:100%;}

@media (max-width: 640px){
  .home-page {
   text-align: center; 
  }
  .home-page video,
  .home-page #mc_embed_signup,
  .home-page iframe{
    position: static !important;
    margin: auto;
    margin-bottom: 15px;
  }
  .created{
          position: static !important;
          margin-top: 50px;
          margin-bottom: 50px;
        }
}
</style>
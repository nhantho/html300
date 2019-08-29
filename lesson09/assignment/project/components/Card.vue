<template>
 <article class="card">
	 <img :src="country.flag" :alt="country.name" class="card__img">
	 <h1 class="card__title">{{ country.name }}</h1>
	 <p class="card__copy">{{ country.strIngredient1 }}</p>
 </article>
</template>

<script>
export default {
	props: {
		country: Object
	}
}
</script>


<style lang="scss">
.card {
	margin: 1rem;
	border: 3px solid #534D41;
  background-color: #DADDD8;
	padding: 10px;
	width: 12em;
	height: 16em;
	&__img {
		display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
		margin-bottom: 10px;
    margin-top: 10px;
	}
	&__title {
		font-size: 1rem;
		margin-bottom: 10px;
	}
	&__copy {
		font-size: .875rem;
	}
}
</style>

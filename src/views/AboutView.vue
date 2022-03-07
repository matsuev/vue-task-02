<template>
	<h2>About View Component</h2>
	<div v-if="loremIpsumVisible">
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero
			sunt architecto eveniet corporis at saepe! Quibusdam omnis eveniet
			repellat sequi voluptatum magnam, beatae ipsum deserunt nesciunt
			doloremque consequatur nihil?
		</p>
		<p v-if="x > 10">HELLO!!!!</p>
	</div>
	<p v-else @click="onClick" class="cursor-pointer">
		Нажми здесь, чтобы увидет текст Lorem ipsum
	</p>
</template>

<script>
export default {
	data() {
		return {
			loremIpsumVisible: false,
			x: 1,
		};
	},

	methods: {
		onClick() {
			this.loremIpsumVisible = true;
		},
	},
};
</script>

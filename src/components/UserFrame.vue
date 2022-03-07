<template>
	<div @click="onClick">{{ user.name }}</div>
</template>

<script>
export default {
	props: ["user"],
	methods: {
		onClick() {
			this.$emit("user-select", this.user.id);
		},
	},
};
</script>
<template>
	<h3>Messages List</h3>
	<hr />
	<div>
		<message-frame
			v-for="item in msgs"
			:key="item.id"
			:msg="item"
			:store="store"
		/>
	</div>
</template>

<script setup>
import MessageFrame from "./MessageFrame.vue";
const props = defineProps(["msgs", "store"]);
</script>
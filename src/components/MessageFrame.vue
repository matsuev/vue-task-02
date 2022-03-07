<template>
	<div class="message-frame">
		<p class="message-frame__header">
			From: {{ store.getUserById(msg.from).name }}
		</p>
		<p class="message-frame__header">
			To: {{ store.getUserById(msg.to).name }}
		</p>
		<p>{{ msg.content }}</p>
	</div>
</template>

<script setup>
const props = defineProps(["msg", "store"]);
</script>

<style>
.message-frame {
	font-family: Arial, Helvetica, sans-serif;
	max-width: 400px;
	padding: 10px;
	margin-bottom: 30px;
	border: 1px solid lightgray;
	border-radius: 10px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
}

.message-frame__header {
	border-bottom: 1px dashed lightgray;
	font-weight: bold;
	padding-bottom: 5px;
}
</style>
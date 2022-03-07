<template>
	<h2>Messages View Component</h2>
	<div>Selected user ID: {{ store.getSelectedUserId }}</div>
	<user-list
		@userSelect="store.setSelectedUserId"
		:users="store.getUsers"
	></user-list>
	<MessageList :msgs="store.getFilteredMessages" :store="store" />
</template>

<script setup>
import UserList from "../components/UserList.vue";
import MessageList from "../components/MessageList.vue";

const props = defineProps(["store"]);
</script>




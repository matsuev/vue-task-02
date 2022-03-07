<template>
	<h3>User List</h3>
	<div v-if="users.length == 0">Список пользователей пуст</div>
	<div v-else>
		<user-frame
			@userSelect="onUserClick"
			v-for="user in users"
			:key="user.id"
			:user="user"
		/>
	</div>
</template>

<script>
import UserFrame from "./UserFrame.vue";
export default {
	props: ["users"],
	components: {
		UserFrame,
	},
	methods: {
		onUserClick(id) {
			this.$emit("user-select", id);
		},
	},
};
</script>
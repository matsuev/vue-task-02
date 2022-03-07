import { defineStore } from 'pinia'

import { users } from "../dataset/users";
import { messages } from "../dataset/messages";

export const useStore = defineStore('main', {
   state: () => {
      return {
         selectedUserId: 0,
			users: users,
			messages: messages,
      }
   },

   getters: {
      getSelectedUserId: (state) => state.selectedUserId,
      getUsers: (state) => state.users,
      getFilteredMessages: (state) => state.messages.filter((item) => item.from == state.selectedUserId),
      getUserById: (state) => (id) => state.users.find((item) => item.id == id)
   },

   actions: {
      setSelectedUserId(id) {
         this.selectedUserId = id;
      }
   }
})
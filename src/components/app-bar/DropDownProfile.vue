<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { Button } from "../ui/button";

const auth0 = useAuth0();
const apiUrl = import.meta.env.VITE_APP_API_URL_LOCAL;
const user = auth0.user;
const isAuthenticated = auth0.isAuthenticated;

function logout() {
  auth0.logout({
    logoutParams: {
      returnTo: "http://localhost:5173",
    },
  });
}
</script>

<template>
  <Menu as="div" class="relative ml-3"> 
    <div>
      <MenuButton
        class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span class="absolute -inset-1.5" />
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem v-slot="{ active }">
          <a
            href="#"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700',
            ]"
            >Your Profile</a
          >
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a
            href="#"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700',
            ]"
            >Settings</a
          >
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a
             @click="logout"
            :href="apiUrl"
            :class="[
              active ? 'bg-gray-100' : '',
              'w-full text-start block px-4 py-2 text-sm text-gray-700',
            ]"
            >Sign out</a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

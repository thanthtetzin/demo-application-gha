<script setup lang="ts">
import { RouterView } from 'vue-router';
import { FwbNavbar, FwbNavbarLogo, FwbNavbarLink, FwbNavbarCollapse } from 'flowbite-vue';
</script>

<template>
	<fwb-navbar>
		<template #logo>
			<fwb-navbar-logo image-url="https://static-00.iconduck.com/assets.00/todo-icon-2048x2048-pij2pwiy.png" link="/">
				My Awesome Demo-Docker-Output
			</fwb-navbar-logo>
		</template>
		<template #default="{ isShowMenu }">
			<fwb-navbar-collapse :is-show-menu="isShowMenu">
				<fwb-navbar-link is-active link="/"> All Todos </fwb-navbar-link>
				<fwb-navbar-link link="/completed"> Completed </fwb-navbar-link>
			</fwb-navbar-collapse>
		</template>
	</fwb-navbar>

	<main class="flex justify-center items-center p-6">
		<RouterView />
	</main>
</template>

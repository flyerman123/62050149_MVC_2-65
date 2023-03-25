<template>
	<nav>
		<v-app-bar app color="white" outlined elevation="1">
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<!-- Navigation Title -->
			<v-toolbar-title>{{ navTitle }}</v-toolbar-title>

			<v-spacer></v-spacer>

		</v-app-bar>
		<v-navigation-drawer v-model="drawer" app>
			<v-list-item class="py-2">
				<!-- App Name -->
				<v-list-item-content class="px-5" style="font-family: Arial">
					<v-list-item-title class=""> MVC </v-list-item-title>
					<v-list-item-title class=""> 62050149 </v-list-item-title>
					<v-list-item-title class=""> Noppawat Boonma </v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list nav>
				<v-list-item-group mandatory color="red darken-4">
					<!-- display path list -->
					<v-list-item
						v-for="item in path_list"
						:key="item.title"
						router
						:to="item.path"
					>
						<!-- path icon & name-->
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title class="navigation-list">{{
								item.title
							}}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>

					<v-divider></v-divider>

				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>

export default {
	name: "navigation",

	data: () => ({
		drawer: true,
		// app path
		path_list: [
			{ title: "input", icon: "mdi-star", path: "/input" },
			{ title: "summary", icon: "mdi-star", path: "/summary" }
		],
	}),

	props: ["navTitle"],

	methods: {
		
	},
};
</script>

<style scoped>
	.navigation-list {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		font-size: 20px;
	}
</style>

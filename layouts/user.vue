<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
     light
     
    >
    <div class="d-flex justify-center pa-3 white">
               <img src="/logo.png" width="120px"/>
               </div>
               
     <SideBar :menus="getMenus"/>
       <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="error" @click="logout">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
    dark
      fixed
      app
      flat
      color="purple"
      
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
     
      <v-toolbar-title v-text="title" />
      <v-spacer />
       <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          dark
          v-bind="attrs"
          v-on="on"
          
        >
         Welcome: {{loggedInUser.profile.name}} {{loggedInUser.profile.surname}}
        </v-btn>
      </template>
      <v-list>
        <v-list-item router to="Profile">
           <v-list-item-action>
            <v-icon>mdi-account-cog</v-icon>
          </v-list-item-action>
           <v-list-item-content>
          <v-list-item-title>User Profile</v-list-item-title>
           </v-list-item-content>
        </v-list-item>
        <v-list-item router to="ChangePassword">
           <v-list-item-action>
            <v-icon>mdi-account-convert</v-icon>
          </v-list-item-action>
           <v-list-item-content>
          <v-list-item-title>Change Password</v-list-item-title>
           </v-list-item-content>
        </v-list-item>
         <v-list-item router  @click="logout">
           <v-list-item-action>
            <v-icon>mdi-power</v-icon>
          </v-list-item-action>
           <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
           </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
    <v-main class="grey lighten-4">
      
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer dark padless>
      <v-card
        flat
        tile
        width="100%"
        class="grey lighten-1 white--text text-right"
      >
        <v-divider></v-divider>

        <v-card-text class="grey--text">
          <strong> 
          <a
            class="white--text telthemweb"
            href="https://www.sagehilltechnologies.com"
            >Developed by Sagehill Business Solutions</a
          ><br />
          <b class="white--text text-center"
            >{{ new Date().getFullYear() }} | All Copyrights reserved
          </b>
          </strong> |
        </v-card-text>
      </v-card>
    </v-footer>
       <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Pusher from 'pusher-js'
export default {
  data () {
    return {
      drawer: true,
      offset:true,
      fixed:true,
      items: [],
      title: 'PMIZimbabwe Chapter',
      overlay:false
    }
  },created(){
    this.$store.dispatch('sidebar/getMenus')
     this.getNotitications()
  },methods:{
  async logout(){
    await this.$auth.logout()
  },
  getNotitications(){
      /* 
       let pusher = new Pusher('4f2ecae30d5d8824089a', { cluster: 'ap2' })
      pusher.subscribe('manualbanktranactions')
      pusher.bind('DECISION_MANUAL_TRANSACTION_REQUEST', data => {
        this.$swal(data.message)
      }) */
/*  
})

window.$OneSignal.push(['addListenerForNotificationOpened', (data) => {
  console.log('Received NotificationOpened:', data )}
]); */
  }
  },
  computed:{
  ...mapGetters(['isAuthenticated', 'loggedInUser','getMenus']),
   }
}
</script>

<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                       <v-btn text disabled>Conferences</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
     
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                   Conferences List
                    <v-spacer/>
                   <ConferencesAdd/>
                </v-card-title>
                <v-card-text>
                  <v-row class="mt-4"> 
                    <v-col>
                      <v-text-field outlined  v-model="search" width="100" label="Search Conference Name..."/>
                    </v-col>
                  </v-row>
                 <v-simple-table dense>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th class="text-left">
                          Conference Name 
                        </th>

                        

                        <th class="text-left">
                          Starting Date 
                        </th>
                       

                        
                       
                        
                         <th class="text-right">
                       
                        </th>
                        </tr>
                    </thead>
                     <tbody>
                        <template v-if="conferences.length>0">
                        <tr
                        v-for="(per, i) in conferences"
                        :key="i"
                        >
                        <td>{{i+1 }}</td>
                        <td>{{ per.eventname }}</td>
                         <td>{{ per.opendate | formatDate}}</td>

                          <td>
                            <ConferencesEdit :event="per"/>
                            </td>
                             <td>
                            <ConferencesDelete :event="per"/>
                        </td>
                        <td>
                           <ConferencesView :event="per"/>
                            
                        </td>

                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="5" class="text-center red--text">No events  yet</td>
                            </tr>
                        </template>
                    </tbody>
                    </template>
                </v-simple-table>
                </v-card-text>
            </v-card>
          </v-col>
      </v-row>
           <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    </v-container>
</template>

<script>
import JsonExcel from "vue-json-excel";
import { mapGetters } from 'vuex'
import {  format,formatDistanceToNow  } from 'date-fns/'
import moment from 'moment'
export default {
layout:'user',
components:{
downloadexcel:JsonExcel
},
data(){
    return{
        overlay:false,
        isPaid:true,
        search:""

    }
},

async fetch(){
    this.overlay=true
     this.$store.dispatch('conferences/getConferences')  
   this.overlay = false
},computed:{
   conferences(){
     const data =  this.$store.state.conferences.list
        if(this.search){
            return data.filter(dt=>(!dt.eventname.toUpperCase().indexOf(this.search.toUpperCase())))
        }
      return data
     }
},methods:{
    
}
}
</script>

<style>

</style>
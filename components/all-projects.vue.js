
let All = {
    template: `
    <div>
    <h1 class="page-header">All Projects</h1>
    <div v-for="allProjects in allProjects" :key="allProjects.id">
    <img :src="[allProjects.image]" alt="" width="400px">
    <h3><router-link class="post-link" :to="/allProjects/ + allProjects.slug">{{allProjects.title}}</router-link></h3>
    <p class="post-task">Task: {{allProjects.excerpt}}</p>
    <p >Type: {{allProjects.type}}</p>
    <div class="black-divider"></div>
    </div>
    </div>
    `,
data () {
    return {
        allProjects: []
    }
},
 mounted() {
     this.allProjects = allProjects;
 }
    

};
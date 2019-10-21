let projectPage = {
    template: `
     <div class="article-container">
<button class="button" v-on:click="goBack()">back</button>
    <p class="page-header">Project | ID: {{projectPage.id}}</p>
    <div class="article-container">
    <p class="article-title">{{projectPage.title}}</p><br>
    <h4 class="article-title">Task: {{projectPage.excerpt}}</h4>
    <p class="article_author">Project Type and Tools: {{projectPage.type}}</p>
    <p class="article-content">{{projectPage.content}}</p>
    <img :src="[projectPage.image]" alt="" width="90%"><br>
    <a href="[projectPage.link]"><img src="images/linkicon.png" alt="" width="60px"></a><br>
    
    <img :src="[projectPage.image2]" alt="" width="90%"><br>
    <a href="[projectPage.link2]"><img src="images/linkicon.png" alt="" width="60px"></a>
    <div class="black-divider"></div>
    </div>
    

    </div>
    `,
data () {
    return {
        projectPage: {}
    };
},
 mounted() {
     this.projectPage = this.findBySlug(this.$route.params.slug);
     console.log(this.$route)
 },
methods: {
    findBySlug(slug) {
        for (let i = 0; i <allProjects.length; i++)
            {
                if(slug === allProjects[i].slug) return allProjects[i];
            }
        return null;
    },
    goBack () {
        window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
}
    
};

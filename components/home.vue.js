
let Home = {
    template: `
    <div>
    <h1 class="page-header">Featured Projects</h1>
    <div v-for="article in articles" :key="article.id">
      <img :src="[article.image]" alt="" width="80%">
    <h2><router-link class="post-link" :to="/articles/ + article.slug">{{article.title}}</router-link></h2>
     <p class="post-task">Task: {{article.excerpt}}</p>
    <p> Type: {{article.type}}</p>
    <div class="black-divider"></div>
    </div>
    </div>
    `,
data () {
    return {
        articles: []
    }
},
 mounted() {
     this.articles = articles;
 }
    

};
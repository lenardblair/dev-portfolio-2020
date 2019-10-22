




let Contact = {
    template: `
    <div>
    <h1 class="page-header">Contact</h1><br>
    <p>Email: lblair2008@gmail.com</p>
    <p>Phone: (805) 475-3931
    </div>
    `
};

let Article = {
    template: `
     <div class="article-container">
    <p class="page-header">Featured Project | ID:{{article.id}}</p>
    <div >
    <p class="article-title">{{article.title}}</p>
    </div>
    <h4 class="article_author">Project Type and Tools | {{article.type}}</h4>
    <img :src="[article.image]" alt="" width="80%"><br>
    <a href="[article.link]"><img src="images/linkicon.png"  alt="" width="60px"></a>
    <p class="article-content">{{article.content}}</p>
     <img :src="[article.image2]" alt="" width="80%"><br>
    <a href="[article.link2]"><img src="images/linkicon.png" alt="" width="60px"></a>
     <p class="article-content">Task: {{article.excerpt}}</p>
    <div class="black-divider"></div>
    </div>
    `,
data () {
    return {
        article: {}
    };
},
 mounted() {
     this.article = this.findBySlug(this.$route.params.slug);
     console.log(this.$route)
 },
methods: {
    findBySlug(slug) {
        for (let i = 0; i <articles.length; i++)
            {
                if(slug === articles[i].slug) return articles[i];
            }
        return null;
    }
}
    
};

let routes = [
    { path: '/', component: Home },
    { path: '/all', component: All },
    { path: '/contact', component: Contact },
    { path: '/articles/:slug', component: Article },
    { path: '/allProjects/:slug', component: projectPage }
    ];

let router = new VueRouter({ routes });

let app = new Vue({ router }).$mount('#app');

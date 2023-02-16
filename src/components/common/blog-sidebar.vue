<template>
  <div class="blog-sidebar-one">
    <div class="sidebar-search-form mb-85 sm-mb-60">
      <form @submit.prevent="onSubmit">
        <input type="text" placeholder="Search">
        <button>
          <img v-if="!blog_v3" src="../../assets/images/icon/50.svg" alt="">
          <img v-if="blog_v3" src="../../assets/images/icon/51.svg" alt="">
        </button>
      </form>
    </div> <!-- /.sidebar-search-form -->
    <div class="sidebar-categories mb-85 sm-mb-60">
      <h4 class="sidebar-title">Categories</h4>
      <ul>
        <li><a href="#">Web Design <span>(09)</span></a></li>
        <li><a href="#">Graphics <span>(13)</span></a></li>
        <li><a href="#">Web Development <span>(05)</span></a></li>
        <li><a href="#">IOS/Android Development <span>(24)</span></a></li>
        <li><a href="#">Others <span>(08)</span></a></li>
      </ul>
    </div> <!-- /.sidebar-categories -->
    <div class="sidebar-recent-news mb-85 sm-mb-60">
      <h4 class="sidebar-title">Recent News</h4>
      <ul>
        <li><router-link to="/blog-details">
            <span class="title">10 days quick challange for boost visitors.</span>
            <span class="date">23 July, 2018</span>
          </router-link></li>
        <li><router-link to="/blog-details">
            <span class="title">10 days quick challange for boost visitors.</span>
            <span class="date">23 July, 2018</span>
          </router-link></li>
        <li><router-link to="/blog-details">
            <span class="title">10 days quick challange for boost visitors.</span>
            <span class="date">23 July, 2018</span>
          </router-link></li>
      </ul>
    </div> <!-- /.sidebar-recent-news -->
    <div class="sidebar-keyword">
      <h4 class="sidebar-title">Keywords</h4>
      <ul class="cleafix">
        <li><a href="#">Ideas</a></li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Design</a></li>
        <li><a href="#">Development</a></li>
        <li><a href="#">Branding</a></li>
      </ul>
    </div> <!-- /.sidebar-keyword -->
  </div>
</template>

<script>
export default {
  name: 'BlogSidebar',
  props:{
    blog_v3: Boolean,
  },
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>
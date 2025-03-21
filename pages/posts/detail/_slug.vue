<template>
  <div class="border-t border-gray-900 dark:border-gray-300">
    <article class="my-6">
      <h2 class="text-2xl font-semibold text-center dark:text-gray-300">{{ data.title }}</h2>

      <div ref="renderedHtmlRef"
        class="my-6 prose prose-base xl:prose-lg dark:text-gray-300 dark:prose-invert prose-blue max-w-none break-words"
        v-html="renderedHtml"></div>
    </article>

    <div class="text-sm text-gray-600 dark:text-gray-400 my-2 md:flex">
      <div class="flex space-x-4 text-sm uppercase">
        <span>{{ data.category }}</span>
        <span>{{ new Date(data.modifyTime).toLocaleString() }}</span>
      </div>
      <div class="flex space-x-4 my-2 md:my-0 md:mx-4">
        <div class="inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-eye mr-1">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {{ data.viewed }}
        </div>
        <div class="inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-message-square mr-1">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {{ data.comments }}
        </div>
        <div class="inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-thumbs-up mr-1">
            <path
              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
          {{ data.likes }}
        </div>
      </div>
    </div>

    <div class="inline-flex flex-wrap items-center space-x-2 text-gray-600 dark:text-gray-300">
      <span v-for="(tag, index) in data.tags" :key="index"
        class="text-sm my-1 bg-gray-200 dark:bg-gray-600 rounded-md px-2 py-px">{{ tag }}</span>
    </div>

    <section class="flex items-center justify-center my-6">
      <span class="text-gray-400">如有帮助，点赞鼓励一下吧！</span>
      <button type="button" @click="likes(data.code)"
        class="rounded-full p-2 border dark:border-gray-400 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:border-gray-600 dark:hover:border-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-thumbs-up cursor-pointer">
          <path
            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
      </button>
    </section>

    <div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 my-4 p-4 rounded">
      <ul class="grid grid-flow-row grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 text-sm font-bold">
        <li v-if="previous && previous.code">
          <NuxtLink :title="previous.title" :to="'/posts/detail/' + previous.code"
            class="flex items-center py-2 transform hover:-translate-x-2 transition duration-500">
            <svg v-show="previous.code && previous.code.length > 0" xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" class="feather feather-chevron-left">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {{ previous.title }}
          </NuxtLink>
        </li>
        <li class="flex items-center justify-end" v-if="next && next.code">
          <NuxtLink :title="next.title" :to="'/posts/detail/' + next.code"
            class="flex items-center py-2 transform hover:translate-x-2 transition duration-500">
            {{ next.title }}
            <svg v-show="next.code && next.code.length > 0" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" class="feather feather-chevron-right">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <ClientOnly>
      <p class="mt-8 text-lg dark:text-gray-300">添加评论：</p>
      <LazyCommentForm :isShow="isShow" :post="data.code" @retrieve="retrieveComment" />
      <LazyCommentItem v-for="comment in comments" :key="comment.code" :data="comment" />
      <LazyPreview :isShow="view.isShow" @closeAction="previewOperation">
        <img :src="view.url" alt="preview" class="w-full h-full" width="1366" height="768" />
      </LazyPreview>
    </ClientOnly>
  </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";
import marked from "~/plugins/md";

export default {
  name: "PostsSlug",
  scrollToTop: true,
  head() {
    return {
      title: this.data.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.title + "," + this.data.tags,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.data.tags,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://www.leafage.top/posts/detail/" + this.data.code,
        },
      ],
    };
  },
  async asyncData({ $axios, params }) {
    let [data, previous, next, comments] = await Promise.all([
      // detail
      $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/details")),
      // previous
      $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/previous")),
      // next
      $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/next")),
      // comments
      $axios.$get(SERVER_URL.comment.concat("/", params.slug))
    ]);
    // a标签添加 target="_blank"
    let renderedHtml = marked.parse(data.content).replace(/href="/gi, 'target="_blank" href="');
    return { data, previous, next, comments, renderedHtml };
  },
  data() {
    return {
      data: {},
      comments: [],
      view: {
        isShow: false,
        url: ''
      },
      isShow: true
    };
  },
  mounted() {
    this.addImgClickEvent();
  },
  methods: {
    /**
     * 点赞
     */
    likes(code) {
      this.$axios.get("/check").then(() => {
        this.$axios.patch(SERVER_URL.posts.concat("/", code, "/like")).then(res => {
          this.data.likes = res.data;
        });
      });
    },
    /**
     * 给img添加双击事件
     */
    addImgClickEvent() {
      if (this.$refs.renderedHtmlRef) {
        let imgs = this.$refs.renderedHtmlRef.querySelectorAll("img");
        if (imgs.length > 0) {
          setTimeout(() => {
            for (let i = 0, len = imgs.length; i < len; i++) {
              imgs[i].onclick = () => {
                const src = imgs[i].getAttribute("src");
                this.previewOperation(true, src);
              };
            }
          }, 600);
        }
      }
    },
    /**
     * 预览
     * @param  show 是否展示
     * @param  url  连接
     */
    previewOperation(show, url) {
      if (show) {
        this.view.url = url
      }
      this.view.isShow = show
    },
    /**
     * 查询评论
     * @param  code 代码
     */
    retrieveComment(code) {
      if (!code) {
        code = this.data.code
      }
      this.$axios.get(SERVER_URL.comment.concat("/", code)).then(res => this.comments = res.data)
    }
  }
}
</script>

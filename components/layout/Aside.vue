<template>
    <aside class="w-64 flex-none dark:text-gray-400">
        <div class="border border-solid border-gray-300 dark:border-gray-400 p-4">
            <h3 class="font-bold">欢迎关注公众号（Leafage）</h3>
            <div class="flex items-center mt-4">
                <figure class="border">
                    <img
                        src="https://cdn.leafage.top/leafage-wechat.jpg?imageMogr2/thumbnail/x128/format/webp/blur/1x0/quality/75"
                        alt="leafage_wechat"
                        width="128"
                        height="128"
                    />
                </figure>
                <div class="ml-4">
                    <p class="my-2">微信搜一搜</p>
                    <input
                        type="text"
                        class="placeholder-gray-300 border border-gray-300 py-1 pl-2 w-full text-sm"
                        disabled
                        placeholder="Leafage"
                    />
                </div>
            </div>
        </div>

        <div class="border border-solid border-gray-200 my-8 relative">
            <legend
                class="absolute top-0 -mt-2.5 px-2 ml-4 bg-white dark:bg-gray-900 text-sm uppercase font-semibold"
            >Categories</legend>
            <ul
                class="grid grid-cols-1 divide-y divide-gray-300 p-4 text-xs font-semibold list-disc"
            >
                <li class="py-3 mx-4" v-for="category in categoryData.content" :key="category.code">
                    <NuxtLink
                        :title="category.name"
                        :to="{ path: '/posts', params: { category: category.code } }"
                        v-text="category.name"
                        class="hover:underline hover:text-black"
                    ></NuxtLink>
                    <span class="mr-2 float-right text-gray-400" v-text="category.count"></span>
                </li>
            </ul>
        </div>
        <div class="my-8 border-2 border-solid border-gray-900 dark:border-gray-400 p-4">
            <h3 class="font-bold">Send Email To Me</h3>
            <form class="mt-2 flex items-center">
                <input
                    class="w-full text-sm placeholder-gray-300 border border-gray-300 focus:outline-none py-1 pl-2"
                    type="email"
                    placeholder="Enter your email adress"
                />
                <a
                    aria-label="email"
                    title="email"
                    href="mailto:little3201@163.com?subject=Leafage%20Website%20News"
                    class="bg-black text-white dark:text-black dark:bg-white dark:border border-black p-2 -ml-1"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-send"
                    >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                </a>
            </form>
        </div>
        <div class="border border-solid border-gray-300 dark:border-gray-400 relative my-8">
            <legend
                class="absolute top-0 -mt-2.5 px-2 ml-4 bg-white dark:bg-gray-900 uppercase text-sm font-semibold"
            >Friend Chain</legend>
            <ul
                class="grid grid-cols-1 divide-y divide-gray-300 p-4 text-xs text-gray-800 dark:text-gray-400 font-semibold list-decimal"
            >
                <li class="py-3 mx-4">
                    <a
                        title="leafage console"
                        href="https://console.leafage.top"
                        target="_blank"
                        rel="noopener"
                        class="hover:underline hover:text-black"
                    >leafage 控制台</a>
                </li>
                <li class="py-3 mx-4">
                    <a
                        title="csdn"
                        href="https://blog.csdn.net/zx110503?spm=1008.2028.3001.5343&type=blog"
                        rel="noopener"
                        target="_blank"
                        class="hover:underline hover:text-black"
                    >csdn</a>
                </li>
                <li class="py-3 mx-4">
                    <a
                        title="oschina"
                        href="https://my.oschina.net/u/4066932"
                        target="_blank"
                        rel="noopener"
                        class="hover:underline hover:text-black"
                    >开源中国 oschina</a>
                </li>
                <li class="py-3 mx-4">
                    <a
                        title="segmentfault"
                        href="https://segmentfault.com/u/bujidao_5d0c24ce7055e/articles"
                        rel="noopener"
                        target="_blank"
                        class="hover:underline hover:text-black"
                    >思否 segmentfault</a>
                </li>
                <li class="py-3 mx-4">
                    <a
                        title="juejin"
                        href="https://juejin.cn/user/184373686838312/posts"
                        rel="noopener"
                        target="_blank"
                        class="hover:underline hover:text-black"
                    >掘金</a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
import { SERVER_URL } from "~/api/request";

export default {
    name: "Aside",

    data() {
        return {
            categoryData: {}
        }
    },

    async fetch() {
        this.categoryData = await this.$axios.$get(SERVER_URL.category, { params: { page: 0, size: 99 } })
    }

}
</script>
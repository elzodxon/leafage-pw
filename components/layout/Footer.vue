<template>
  <footer class="bg-gray-900">
    <section class="max-w-2xl mx-auto sm:px-6 lg:max-w-4xl 2xl:max-w-6xl lg:px-8">
      <div class="md:flex md:justify-between md:items-center text-gray-300">
        <div class="flex justify-center">
          <NuxtLink
            class="text-2xl tracking-widest font-gray-900 uppercase my-6"
            title="leafage"
            to="/"
          >Leafage</NuxtLink>
        </div>
        <div
          class="flex text-xl justify-center md:justify-between space-x-6 mb-4 md:mb-0 uppercase"
        >
          <a
            title="github"
            href="https://github.com/little3201"
            rel="noopener"
            target="_blank"
          >Github</a>
          <a title="gitee" href="https://gitee.com/little3201" rel="noopener" target="_blank">Gitee</a>
        </div>
      </div>
      <div class="pb-3 text-xs text-center text-gray-400">
        <p class="border-t border-gray-600 py-3">
          Copyright &copy; {{ new Date().getFullYear() }} Leafage Reserved. Created by
          <a
            href="https://github.com/little3201"
            rel="noopener"
            target="_blank"
            class="hover:underline"
          >little3201</a>
        </p>
        <p>
          <a
            href="https://beian.miit.gov.cn"
            rel="noopener"
            target="_blank"
            class="hover:underline"
          >陕ICP备19017836号-2</a>
        </p>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<template>
    <div>
        <section v-if="$route.params.nm">
            <!-- <h1>Hello {{ $route.params.nm }}</h1> -->
            <h1>Hello {{ nm }}</h1>
        </section>
        <section v-else>
            <h1>Daftar User</h1>
        </section>
    </div>
</template>

<script>
export default {
    props:['nm']
}
</script>

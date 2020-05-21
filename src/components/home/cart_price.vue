<template>
    <div class="d_price" >
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "d_price"
    }
</script>

<style scoped>
    .d_price{
        height: 80px;
        width: 100%;
        line-height: 80px;
        color: #e1251b;
        font-weight: 800;
        font-size: 24px;
    }

</style>
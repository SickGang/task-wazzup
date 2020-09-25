<template>
    <tbody>
        <tr v-for="item in items" :key="item.id" @click="showModal(item.id)">
            <th scope="row">{{item.id}}</th>
            <td>{{item.fullname}}</td>
            <td>{{item.uname}}</td>
            <td>{{item.company}}</td>
            <td>{{item.email}}</td>
            <td>{{item.address.state}}</td>
        </tr>
    </tbody>
</template>

<script>
export default {
    props: ['items'],
    methods: {
        showModal (id) {
            this.$emit('showModal', id)
        }
    }
}
</script>

<style scoped>
tr {
    cursor: pointer;
}
</style>
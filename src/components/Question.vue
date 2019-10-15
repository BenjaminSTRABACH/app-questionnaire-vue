<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateAnswer">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="md-title">{{ question }}</div>
                </md-card-header>



            </md-card>
        </form>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import {
        required
    } from 'vuelidate/lib/validators'

    export default {
        name: 'Question',
        props: {
            question: String
        },
        mixins: [validationMixin],
    }  


</script>
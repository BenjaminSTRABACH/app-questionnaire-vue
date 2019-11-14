<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateAnswer">
            <md-card class="md-layout-item md-size-100 md-small-size-100">
                <md-card-header>
                    <div class="md-title">{{ q.Questions[0].Libelle }}</div>
                </md-card-header>
                <md-card-content>
                    
                    <!-- Affichage des réponses en fonction de la question -->
                    <!-- for -->
                    <md-checkbox v-model="answer" v-for="index in q.Questions[0].Answers" v-bind:key="index">{{index.Libelle}}</md-checkbox>
                    <!-- fin for -->

                </md-card-content>
                <md-card-actions>
                    <md-button type="submit" class="md-raised" :disabled="sending">Valider</md-button>
                </md-card-actions>
            </md-card>
        </form>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    // import {
    //     required
    // } from 'vuelidate/lib/validators'
    import questionsList from "@/assets/questions.json"

    export default {
        name: 'Questionnaire',
        mixins: [validationMixin],
        data: () => ({
            q: questionsList
        })
    }  


</script>
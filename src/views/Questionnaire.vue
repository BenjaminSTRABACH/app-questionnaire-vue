<template>
    <div class="question">
        <img src="@/assets/question.png" class="question_logo">
        <!-- Contenu de la question -->
        <md-card class="md-layout-item md-size-100 md-small-size-100" v-for="(Id, i) in ql.Questions" v-bind:key="Id[Id]">
            <!-- Intitulé de la question en titre -->
            <md-card-header>
                <div class="md-title">{{ ql.Questions[i].Libelle }}</div>
            </md-card-header>
            <!-- Affichage des réponses en fonction de la question -->
            <md-card-content>
                <md-checkbox v-model="answer[j]" v-for="(Id, j) in ql.Questions[i].Answers" v-bind:key="Id[Id]">{{Id.Libelle}}</md-checkbox>
            </md-card-content>
            <!-- Validation -->
            <md-card-actions>
                <md-button type="submit" class="md-raised">Valider</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import questionsList from "@/assets/questions.json"

    export default {
        name: 'Questionnaire',
        mixins: [validationMixin],
        data: () => ({
            ql: questionsList,
            answer: []
        })
    }  


</script>

<style>
.question_logo{
    margin: 30px;
    width: 400px;
    height: 400px;
}


</style>
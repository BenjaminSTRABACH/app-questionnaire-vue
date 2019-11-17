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
                <!-- Checkbox non fonctionnelles : -->
                <!-- Sélection de soit toutes les réponse d'une question (v-model="answer[j]") -->
                <!-- ou de tous les mêmes numéros de réponse pour toutes les questions  (v-model="answer[i]") -->
                <!-- Difficulté à n'avoir que des checkbox indépendentes  -->
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
    //importation de la liste des questions
    import questionsList from "@/assets/questions.json"

    export default {
        name: 'Questionnaire',
        mixins: [validationMixin],
        data: () => ({
            //liste des questions importé via le JSON
            ql: questionsList,
            //Tableau des réponses pour chaque question
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
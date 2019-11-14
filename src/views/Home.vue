<template>
    <div>
        <h1>Bienvenue sur l'application</h1>
        <!-- Formulaire du profil -->
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-100 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Connexion</div>
                </md-card-header>
                <md-card-content>
                    <div class="md-layout md-gutter">
                        <!-- Champ Prenom -->
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('firstName')">
                                <label for="first-name">Prénom</label>
                                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.firstName.required">Le prénom est requis</span>
                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Champ invalide</span>
                            </md-field>
                        </div>

                        <!-- Champ Nom -->
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('lastName')">
                                <label for="last-name">Nom</label>
                                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.lastName.required">Le Nom est requis</span>
                                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Champ invalide</span>
                            </md-field>
                        </div>

                        <!-- Champ Société -->
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('society')">
                                <label for="society">Société</label>
                                <md-input name="society" id="society" v-model="form.society" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.society.required">Le nom de la société est requise</span>
                                <span class="md-error" v-else-if="!$v.form.society.minlength">Champ invalide</span>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>

                <!-- Bouton de validation -->
                <md-card-actions>
                    <router-link to="/questionnaire">
                        <md-button type="submit" class="md-raised" :disabled="sending">Commencer le test</md-button>
                    </router-link>
                </md-card-actions>
            </md-card>
        </form>
    </div>
</template>


 
<script>
    import { validationMixin } from 'vuelidate'
    import {
        required,
        minLength
    } from 'vuelidate/lib/validators'

    export default {
        name: 'Home',
        mixins: [validationMixin],
        data: () => ({
            form: {
                firstName: null,
                lastName: null
            },
            userSaved: false,
            sending: false,
            lastUser: null
            }),
        
        validations: {
            form: {
                firstName: {
                required,
                minLength: minLength(3)
                },
                lastName: {
                    required,
                    minLength: minLength(3)
                },
                society: {
                    required,
                    minLength: minLength(3)
                }
            }
        },

        methods: {
            getValidationClass (fieldName) {
                const field = this.$v.form[fieldName]

                if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        clearForm () {
            this.$v.$reset()
            this.form.firstName = null
        },
        beginTest () {
            this.sending = true

            // Instead of this timeout, here you can call your API
            window.setTimeout(() => {
                this.lastUser = `${this.form.firstName} ${this.form.lastName}`
                this.userSaved = true
                this.sending = false
                this.clearForm()
            }, 1500)

            //Charger une autre vue
        },
        validateUser () {
            this.$v.$touch()
            

            if (!this.$v.$invalid) {
                this.beginTest()
                // router.push('questionnaire')
                // router.replace('questionnaire')
                }
            }
        }
    }
</script>
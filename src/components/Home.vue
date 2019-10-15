<template>
    <div>
        <!-- Prenom
        Nom
        Nom de la société -->
        <h1>Bienvenue sur l'application</h1>
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Connexion</div>
                </md-card-header>
                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('firstName')">
                                <label for="first-name">Prénom</label>
                                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.firstName.required">Le prénom est requis</span>
                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Champ "Prénom" invalide</span>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>
            </md-card>
        </form>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import {
        required,
        minLength,
        maxLength
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
            this.form.lastName = null
            this.form.age = null
            this.form.gender = null
            this.form.email = null
        },
        saveUser () {
            this.sending = true

            // Instead of this timeout, here you can call your API
            window.setTimeout(() => {
                this.lastUser = `${this.form.firstName} ${this.form.lastName}`
                this.userSaved = true
                this.sending = false
                this.clearForm()
            }, 1500)
        },
        validateUser () {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.saveUser()
                }
            }
        }
    }

    

    
</script>
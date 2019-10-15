<template>
    <div>
        <h1>Bienvenue sur l'application</h1>
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Connexion</div>
                </md-card-header>
                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <!-- <md-field :class="getValidationClass('firstName')"> -->

                            <!-- </md-field> -->
                        </div>
                    </div>
                </md-card-content>
            </md-card>
        </form>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'

    export default {
        name: 'Home',
        
        
        // validations: {
        //     form: {
        //         firstName: {
        //         required,
        //         minLength: minLength(3)
        //         }
        //     }
        // },
    }

    
</script>
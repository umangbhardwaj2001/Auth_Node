pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/umangbhardwaj2001/ThoughtBook'
            }
        }
        stage('Build') {
            parallel {
                stage('Build Client') {
                    steps {
                        dir('client') {
                            sh 'npm install'
                            sh 'npm run build'
                        }
                    }
                }
                stage('Build Server') {
                    steps {
                        dir('server') {
                            sh 'npm install'
                        }
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                parallel (
                    'Start Client': {
                        dir('client') {
                            bat 'start /B npm start'
                        }
                    },
                    'Start Server': {
                        dir('server') {
                            bat 'start /B npm start'
                        }
                    }
                )
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}

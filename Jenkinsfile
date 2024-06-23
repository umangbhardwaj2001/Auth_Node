pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
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
                            bat 'npm install'
                        }
                    }
                }
                stage('Build Server') {
                    steps {
                        dir('server') {
                            bat 'npm install'
                        }
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    bat 'pm2 delete all || true'
                    dir('client') {
                        bat 'pm2 start npm --name "client" -- start'
                    }
                    dir('server') {
                        bat 'pm2 start npm --name "server" -- start'
                    }
                    bat 'pm2 save'
                }
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

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
        stage('Deploy') {
            parallel {
                stage('Start Client') {
                    steps {
                        dir('client') {
                            sh 'npm start &'
                        }
                    }
                }
                stage('Start Server') {
                    steps {
                        dir('server') {
                            sh 'npm start &'
                        }
                    }
                }
            }
        }
    }
}

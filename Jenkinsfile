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
            parallel {
                stage('Start Client') {
                    steps {
                        dir('client') {
                            bat 'npm start'
                        }
                    }
                }
                stage('Start Server') {
                    steps {
                        dir('server') {
                            bat 'npm start'
                        }
                    }
                }
            }
        }
    }
}

pipeline {
<<<<<<< HEAD
    // Telling Jenkins to run the pipeline on any available agent.
    agent any


    // This is the pipeline. It is a series of stages that Jenkins will run.
    stages {
        // This state is telling Jenkins to checkout the source code from the source control management system.
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        // This stage is telling Jenkins to run the tests in the client directory.
        stage('Client Tests') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    
                }
            }
        }
        
        // This stage is telling Jenkins to run the tests in the server directory.
        stage('Server Tests') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }
        
        // This stage is telling Jenkins to build the images for the client and server.
        stage('Build Images') {
            steps {
                sh 'docker build -t rakeshpotnuru/productivity-app:frontend-latest frontend'
                sh 'docker build -t rakeshpotnuru/productivity-app:backend-latest backend'
            }
        }
        
        // This stage is telling Jenkins to push the images to DockerHub.
        
}
}
pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Client Tests') {
      steps {
        dir(path: 'frontend') {
          sh 'npm install'
        }

      }
    }

    stage('Server Tests') {
      steps {
        dir(path: 'backend') {
          sh 'npm install'
        }

      }
    }

    stage('Build Images') {
      steps {
        sh 'docker build -t rakeshpotnuru/productivity-app:frontend-latest frontend'
        sh 'docker build -t rakeshpotnuru/productivity-app:backend-latest backend'
      }
    }

  }
}
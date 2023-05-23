pipeline {
  agent any
   triggers {
    githubPush()
  }
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
        sh 'docker build -t vaibhavatosm22/fullstackmean-app:frontend-latest frontend'
        sh 'docker build -t vaibhavatosm22/fullstackmean-app:backend-latest backend'
      }
    }

  }
}
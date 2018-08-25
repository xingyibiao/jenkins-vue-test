pipeline{
  agent any
  stages{
    stage('install') {
      steps{
        sh 'cnpm install'
      }
    }
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
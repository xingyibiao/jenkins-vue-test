pipeline{
  agent any
  stages{
    stage('install') {
      steps{
        sh 'yarn'
      }
    }
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
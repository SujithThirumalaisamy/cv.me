pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "sujiththirumalaisamy/cv"
        OPS_REPO = "https://github.com/sujiththirumalaisamy/kubecorner.git"
        GIT_SHA = "${env.GIT_COMMIT}"
        DEPLOYMENT_MANIFEST = "cv/deployment.yml"
    }

    stages {

        stage('Checkout App Repo') {
            steps {
                checkout scm
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh """
                        echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    docker build -t $DOCKER_IMAGE:$GIT_SHA .
                """
            }
        }

        stage('Push Docker Image') {
            steps {
                sh """
                    docker push $DOCKER_IMAGE:$GIT_SHA
                """
            }
        }

        stage('Update Ops Repo') {
            steps {
                dir('ops') {
                    git(
                        url: OPS_REPO,
                        branch: 'main',
                        credentialsId: 'github-creds'
                    )

                    sh """
                        yq e '.spec.template.spec.containers[0].image = "$DOCKER_IMAGE:$GIT_SHA"' -i $DEPLOYMENT_MANIFEST
                        git config user.name "Jenkins Bot"
                        git config user.email "jenkins@local"
                        git add $DEPLOYMENT_MANIFEST
                        git commit -m "Update image to $GIT_SHA" || echo "No changes to commit"
                        git push origin main
                    """
                }
            }
        }

    }

    post {
        success {
            echo "Build and deployment update successful 🚀"
        }
        failure {
            echo "Pipeline failed ❌"
        }
    }
}

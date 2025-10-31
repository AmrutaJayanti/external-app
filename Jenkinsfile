pipeline {
	agent any
	
	environment{
		IMAGE_NAME="node-app"
	}
	
	stages{
		stage('Cloning the repository'){
			steps{
		  echo "Cloning the repository"
		  git branch: 'main', url:"https://github.com/AmrutaJayanti/external-app.git"
			}
		 }
		 
		stage('Build the container'){
			steps{
		  echo "Building the Docker image"
		  sh 'docker build -t $IMAGE_NAME:latest .'
			}
		}
		
		stage('Running the Docker Container'){
			steps{
		  echo "Running container"
		  sh 'docker run -d -p 3000:3000 --name app $IMAGE_NAME:latest'
		  sh 'docker ps'
		}
		}
	}
	
	post{
		always{
		   echo "Cleaning"
		   sh 'docker stop app || true'
		   sh 'docker rm app || true'
		}
		
 	}
 	
}

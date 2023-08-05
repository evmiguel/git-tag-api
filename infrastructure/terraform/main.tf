terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}
 
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "tag_api_instance" {
  ami           = "ami-053b0d53c279acc90"
  instance_type = "t2.small"
  tags = {
    "Name" = "git-tag-app"
  }
}
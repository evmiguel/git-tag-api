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
  ami           = "ami-0f34c5ae932e6f0e4"
  instance_type = "t2.micro"
  tags = {
    "Name" = "git-tag-app"
  }
}
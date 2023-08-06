terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    godaddy = {
      source = "n3integration/godaddy"
      version = "1.9.1"
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

resource "godaddy_domain_record" "tag_domain" {
  domain   = "erikamiguel.com"

  record {
    name = "tag"
    type = "A"
    data = "44.204.233.103"
    ttl = 3600
  }
}
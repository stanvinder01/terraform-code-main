terraform {
  required_version = "~> 1.0.8"

  required_providers {
    aws = "~> 2.58"
  }
}

provider "aws" {
    region = "us-east-1"
    profile  = "Tanvinder"
}

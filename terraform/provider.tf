## separate provider for aws resources in us-east-1
provider "aws" {
  profile   = "devops-user"
  alias     = "us-east-1"
  region    = "us-east-1"
}

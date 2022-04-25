# Get Hosted Zone Details
# terraform aws data hosted zone
data "aws_route53_zone" "hosted-zonee" {
  name = var.domain_name
}

# Create a Record Set in Route 53
# terraform aws route 53 record
resource "aws_route53_record" "site-domainn" {
  zone_id = data.aws_route53_zone.hosted-zonee.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website_cdnn.domain_name
    zone_id                = aws_cloudfront_distribution.website_cdnn.hosted_zone_id
    evaluate_target_health = true
  }
}
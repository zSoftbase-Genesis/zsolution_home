output "website_cdn_id" {
  value = aws_cloudfront_distribution.website_cdnn.id
}

output "website_endpoint" {
  value = aws_cloudfront_distribution.website_cdnn.domain_name
}
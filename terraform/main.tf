## Terraform configuration
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.72.0"
    }
  }
  cloud {
    organization = "zSolution-Limited-master"
    workspaces {
      name = "zsolution-home"
    }
  }
}



resource "aws_s3_bucket_policy" "buckett_policy" {
  bucket = aws_s3_bucket.deployy_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.deployy_bucket.arn}/*"
      },
    ]
  })
}

resource "aws_s3_bucket" "deployy_bucket" {
  bucket = var.bucket_namee
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_cloudfront_origin_access_identity" "clouddfront_oia" {
  comment = "example origin access identify"
}

resource "aws_cloudfront_distribution" "website_cdnn" {
  enabled = true
  aliases = ["*.zsolutionsit.com", "zsolutionsit.com"]

  origin {
    origin_id   = "origin-bucket-${aws_s3_bucket.deployy_bucket.id}"
    domain_name = aws_s3_bucket.deployy_bucket.website_endpoint

    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "DELETE", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    min_ttl                = "0"
    default_ttl            = "300"
    max_ttl                = "1200"
    target_origin_id       = "origin-bucket-${aws_s3_bucket.deployy_bucket.id}"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

resource "aws_acm_certificate" "cert" {
  provider    = aws.us-east-1
  domain_name = var.domain_name
  subject_alternative_names = [
    "*.zsolutionsit.com",
    "zsolutionsit.com",
  ]
  validation_method = "DNS"
}

resource "aws_route53_record" "certvalid" {
  for_each = {
    for d in aws_acm_certificate.cert.domain_validation_options : d.domain_name => {
      name   = d.resource_record_name
      record = d.resource_record_value
      type   = d.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.hosted-zonee.zone_id
}

resource "aws_acm_certificate_validation" "certvalid" {
  provider                = aws.us-east-1
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for r in aws_route53_record.certvalid : r.fqdn]
}

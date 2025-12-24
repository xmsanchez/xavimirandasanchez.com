+++
title = "{{ replace .Name "-" " " | title }}"
description = "Brief description for meta tags and previews"
date = {{ .Date | time.Format "2006-01-02T15:04:05Z07:00" }}
draft = true
author = "Xavi Miranda Sánchez"

# Taxonomies
tags = ["kubernetes", "devops", "tutorial", "azure"]
categories = ["Platform Engineering"]
tech = ["kubernetes", "docker", "terraform", "python", "argocd", "ansible"]

# SEO
keywords = ["kubernetes", "container orchestration"]
og_image = "featured.jpg"

# Content
featured = false
featured_image = "featured.jpg"

# Comments (Giscus)
comments = true
+++


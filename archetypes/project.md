+++
title = "{{ replace .Name "-" " " | title }}"
description = "Brief project description"
date = {{ .Date | time.Format "2006-01-02T15:04:05Z07:00" }}
draft = true
featured = true

# Project-specific fields
project_type = "Platform Tool"
repo_url = "https://github.com/xavi/project-name"
demo_url = ""
status = "active"

# Tech stack (array)
tech_stack = ["python", "kubernetes", "terraform", "docker", "azure", "argocd"]

# Images (relative to page bundle)
featured_image = "screenshot-1.jpg"
gallery = ["screenshot-1.jpg", "screenshot-2.jpg", "screenshot-3.jpg"]

# Taxonomies
tags = ["kubernetes", "platform"]
categories = ["Platform Engineering"]
tech = ["python", "kubernetes", "terraform"]

# SEO
keywords = ["kubernetes", "platform engineering"]
og_image = "screenshot-1.jpg"
+++


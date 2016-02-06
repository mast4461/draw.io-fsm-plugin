#!/bin/sh

# Compile
gulp scripts

# Un-add any currently added files
git reset

# Add compiled files
git add dist/*

# Commit
git commit -m "Deployed"

# Deploy
git push
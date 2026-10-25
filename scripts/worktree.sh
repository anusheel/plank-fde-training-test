#!/usr/bin/env bash
# One worktree per feature branch, under ../wt/<branch>, each with its own Claude Code session.
set -e
branch="$1"; dir="../wt/$branch"
git worktree add -b "$branch" "$dir" main
echo "cd $dir && claude"

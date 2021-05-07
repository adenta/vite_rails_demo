#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bin/vite info
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate

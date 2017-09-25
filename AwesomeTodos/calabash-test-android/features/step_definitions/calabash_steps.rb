require 'calabash-android/calabash_steps'

Given(/^the app has launched$/) do
  wait_for do
    !query("*").empty?
  end
end
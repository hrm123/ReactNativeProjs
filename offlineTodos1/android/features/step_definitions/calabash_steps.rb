require 'calabash-android/calabash_steps'

Then /^I enter "([^\"]*)" into react input field number (\d+)$/ do |text, index|
  enter_text("com.facebook.react.views.textinput.ReactEditText index:#{index.to_i-1}", text)
end
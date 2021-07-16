$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/basic_validation.feature");
formatter.feature({
  "name": "basic validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "validate user name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user send get request with end point users and query param username",
  "keyword": "When "
});
formatter.match({
  "location": "basic_validation_step_def.the_user_send_get_request_with_end_point_users_and_query_param_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "basic_validation_step_def.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see  all the information of  delphine",
  "keyword": "And "
});
formatter.match({
  "location": "basic_validation_step_def.user_should_be_able_to_see_all_the_information_of_delphine()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate userId",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user send get request using the userId of Delphine",
  "keyword": "When "
});
formatter.match({
  "location": "basic_validation_step_def.the_user_send_get_request_using_the_userId_of_Delphine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "basic_validation_step_def.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify userId of Delphine",
  "keyword": "And "
});
formatter.match({
  "location": "basic_validation_step_def.verify_userId_of_Delphine()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate email format",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user send get request with end point",
  "keyword": "When "
});
formatter.match({
  "location": "basic_validation_step_def.the_user_send_get_request_with_end_point()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "basic_validation_step_def.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the emails should be in proper format",
  "keyword": "And "
});
formatter.match({
  "location": "basic_validation_step_def.the_emails_should_be_in_proper_format()"
});
formatter.result({
  "status": "passed"
});
});
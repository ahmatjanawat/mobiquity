package com.mobiquity.step_definitions;

import com.mobiquity.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import java.util.List;

public class basic_validation_step_def {


    static Response response;
    String base_url= ConfigurationReader.get("base_url");
    static int id ;
    static List<Integer>  postIds;


    @When("the user send get request with end point users and query param username")
    public void the_user_send_get_request_with_end_point_users_and_query_param_username() {
            response= RestAssured.given().accept(ContentType.JSON).and()
              .queryParam("username","Delphine")
              .get(base_url+"/users");



    }

    @Then("status code should be {int}")
    public void status_code_should_be(int int1) {
       Assert.assertEquals(int1,response.statusCode());



    }

    @Then("User should be able to see  all the information of  delphine")
    public void user_should_be_able_to_see_all_the_information_of_delphine() {
        JsonPath    jsonPath = response.jsonPath();
        Assert.assertEquals("Delphine",jsonPath.get("username[0]"));
    }
//question 2

    @When("the user send get request using the userId of Delphine")
    public void the_user_send_get_request_using_the_userId_of_Delphine() {
                 JsonPath jsonPath = response.jsonPath();
                 id=jsonPath.get("id[0]");
                 response= RestAssured.given().accept(ContentType.JSON)
                 .and().pathParam("id",id)
                 .when().get(base_url+"/users/{id}/posts");


    }

    @Then("verify userId of Delphine")
    public void verify_userId_of_Delphine() {
           JsonPath  jsonPath1= response.jsonPath();
           Assert.assertEquals(id,jsonPath1.getInt("userId[0]"));

    }

     //question 3

        @When("the user send get request with end point")
    public void the_user_send_get_request_with_end_point() {
            System.out.println("This is the endPoint ");


    }



    @Then("the emails should be in proper format")
    public void the_emails_should_be_in_proper_format() {
        JsonPath  jsonPath1= response.jsonPath();
        postIds  =  jsonPath1.getList("id");
        for (int i=0;i<postIds.size();i++) {
            response = RestAssured.given().accept(ContentType.JSON)
                    .and().pathParam("postId", postIds.get(i)).when()
                    .get(base_url + "/posts/{postId}/comments");

              JsonPath jsonPath=response.jsonPath();
              List<String> emails = jsonPath.getList("email");
            for (int j=0;j<emails.size();j++) {
              Assert.assertTrue(emails.get(j).contains("@"));
                Assert.assertTrue(emails.get(j).contains("."));
                String[] firstCut = emails.get(j).split("@");
                String[] secondCut = firstCut[1].split("\\.");
                Assert.assertTrue(firstCut[0].length() >= 2);
                Assert.assertTrue(secondCut[0].length() >= 2);
                Assert.assertTrue(secondCut[1].length() >= 2);
            }
        }
        }
    }







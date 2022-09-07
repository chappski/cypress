import {userData, web} from "../../variables/settings";
import {testData} from "../../variables/testData";
import {CreateUser, createRecordTest} from "../testSteps/testMethods";

///<reference types="cypress" />

describe('Tool Entities', () => {
    beforeEach(() => {
      CreateUser(web, userData)
    })

    createRecordTest(testData, "Entities")
    createRecordTest(testData, "Operations")
    //createRecordTest(testData, "Processes")

  })
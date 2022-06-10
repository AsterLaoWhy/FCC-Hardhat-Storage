const { ethers } = require("hardhat")
const { expect, assert } = require("chai")
describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("Should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("Adds a person and number", async function () {
        const name = "Bill"
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.addPerson(
            name,
            expectedValue
        )
        await transactionResponse.wait(1)

        let person = await simpleStorage.people(0)
        person = person.toString().split(",")

        assert.equal(person[1], name)
        assert.equal(person[0], expectedValue)
    })
})

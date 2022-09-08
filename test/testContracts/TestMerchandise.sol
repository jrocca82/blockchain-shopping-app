// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../contracts/Merchandise.sol";
import "./AssertUint.sol";
import "./AssertString.sol";
import "./AssertBool.sol";

contract TestMerchandise {
    uint public initialBalane = 10 ether;
    Merchandise merchandise;
    AssertUint assertUint;
    AssertString assertString;
    AssertBool assertBool;

    function beforeAll() public {
        //TODO: make an instance of Merchandise with merchandise = Merchandise(contractAddress)
    }

    function testAddItem() public {
        uint numberOfItems = merchandise.addItem("Test Item", "Test Description", 4 ether);

        uint expected = 1;

        assertUint.equal(numberOfItems, expected, "It should contain 1 item");
    }

    function testGetItem() public {
        uint expectedItemId = 0;
        string memory expectedName = "Test Item";
        string memory expectedDesc = "Test Description";
        uint expectedPrice = 4 ether;

        Merchandise.Item memory item = merchandise.getItem(0);

        assertUint.equal(item.itemId, expectedItemId, "The ID should be zero");
        assertString.equal(item.itemName, expectedName, "The name should be Test Item");
        assertString.equal(item.itemDescription, expectedDesc, "The description should be Test Description");
        assertUint.equal(item.itemPrice, expectedPrice, "The price should be 4 ether");
        assertBool.isFalse(item.sold, "Sold status should be false");
        assertBool.isFalse(item.shipped, "Shipped status should be false");
        assertBool.isFalse(item.received, "Received status should be false");
    }

    function testBuyItem() public {
        merchandise.buyItem{value: 4 ether}(0);
        Merchandise.Item memory item = merchandise.getItem(0);
        assertBool.isTrue(item.sold, "The sold status should be true");
    }
}
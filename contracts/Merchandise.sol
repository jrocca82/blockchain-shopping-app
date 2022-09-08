// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Merchandise {
     struct Item {
        address seller;
        address buyer;
        uint itemId;
        string itemName;
        string itemDescription;
        uint itemPrice;
        bool sold;
        bool shipped;
        bool received;
    }

    Item[] public items;

    address owner;

    bool marketActive;

    event AddListing(address indexed seller, string name, uint price);

    event ItemPurchased(address buyer, uint itemId);

    event ItemShipped(uint itemId);

    event ItemReceived(uint itemId);

    event ItemClaimed(uint itemId);

    constructor() {
        owner = msg.sender;
    }

    function setMarketStatus(bool status) public {
        require(msg.sender == owner, "You do not have permission for this function");
        marketActive = status;
    }

    function addItem(string memory _itemName, string memory _itemDescription, uint _itemPrice) public returns(uint){
        require(marketActive == true, "The market is not active");
        require(_itemPrice > 0, "Price must be greater than 0");
        uint initialLength = items.length;
        items.push(Item({
            itemId: items.length + 1,
            seller: msg.sender,
            //Initialize buyer to address 0 until purchased
            buyer: address(0),
            itemName: _itemName,
            itemDescription: _itemDescription,
            itemPrice: _itemPrice,
            //All boolean values initialized to false
            sold: false,
            shipped: false,
            received: false
        }));
        assert(items.length == initialLength + 1);
        emit AddListing(msg.sender, _itemName, _itemPrice);
        //Return item ID
        return items.length + 1;
    }

    function getItem(uint _itemId) public view returns(Item memory){
        return items[_itemId];
    }

    function buyItem(uint _itemId) public payable {
        require(marketActive == true, "The market is not active");
        require(msg.value == items[_itemId].itemPrice, "Not enough ETH sent");
        require(items[_itemId].sold == false, "This item has already been purchased");
        items[_itemId].buyer = msg.sender;
        items[_itemId].sold = true;
        emit ItemPurchased(msg.sender, _itemId);
    }

    function shipItem(uint _itemId) public {
        require(items[_itemId].sold == true, "This item has not yet been sold");
        require(items[_itemId].shipped == false, "This item has already been shipped");
        items[_itemId].shipped = true;
        emit ItemShipped(_itemId);
    }

    function receiveItem(uint _itemId) public {
        require(items[_itemId].shipped== true, "This item has not been shipped");
        require(msg.sender == items[_itemId].buyer, "You did not purchase this item");
        require(items[_itemId].received == false, "This item has already been claimed");
        items[_itemId].received = true;
        emit ItemReceived(_itemId);
    }

    function claimFunds(uint _itemId) public {
        require(marketActive == true, "The market is not active");
        require(msg.sender == items[_itemId].seller, "You did not put this item up for sale.");
        require(items[_itemId].received == true, "This item has not been claimed by the buyer");
        (bool success, ) = payable(msg.sender).call{ value: items[_itemId].itemPrice }("");
        require(success, "ETH transfer failed");
        emit ItemClaimed(_itemId);
    }
}

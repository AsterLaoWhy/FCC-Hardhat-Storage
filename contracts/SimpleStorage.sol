//SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorage {
    struct People {
        uint256 favoriteNumber;
        string name;
    }
    People[] public people;
    mapping(string => uint256) public nameToFavoriteNumber;

    //this will be initialized to 0
    uint256 public favoriteNumber;

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }
}

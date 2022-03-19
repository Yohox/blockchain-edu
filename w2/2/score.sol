// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface IScore {
    function modifyScore(address studentAddress, uint score) external;
}

contract Score is IScore {
    address _teacher;
    mapping (address => uint) public scores;
    constructor(address teacher){
        _teacher = teacher;
    }

    modifier onlyTeacher {
        require(_teacher == msg.sender, "need teacher");
        _;
    }

    function modifyScore(address studentAddress, uint score) override public onlyTeacher {
        require(score <= 100 , "can not exceed 100");
        require(score >= 0, "can not lower than 0");
        scores[studentAddress] = score;
    }
}
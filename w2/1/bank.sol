// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Bank {
    mapping (address => uint) public balances;
    receive() external payable {
        balances[msg.sender] += msg.value;
    }
    
    function withdraw() public payable {
        payable(address(msg.sender)).transfer(balances[msg.sender]);
        balances[msg.sender] = 0;
    }
}
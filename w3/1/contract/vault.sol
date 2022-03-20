// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Vault is ReentrancyGuard {
    address private _shitAddress;
    mapping(address => uint256) private _balances;
    
    constructor(address shitAddress){
        _shitAddress = shitAddress;
    }

    function deposite(uint amount) public {
        IERC20(_shitAddress).transferFrom(msg.sender, address(this), amount);
        _balances[msg.sender] += amount;
    }

    function withdraw(uint amount) public nonReentrant {
        require(_balances[msg.sender] > 0, "balance must > 0");
        require(amount > 0, "amount must > 0");
        require(_balances[msg.sender] - amount >= 0, "must >= 0");
        IERC20(_shitAddress).transfer(msg.sender, amount);
        _balances[msg.sender] -= amount;
    }

    function balance(address account) public view returns (uint256) {
        return _balances[account];
    }
}
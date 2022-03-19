// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./score.sol";


contract Teacher {
    function modifyStudentScore(address studentContractAddress, address studentAddress, uint score) public {
        IScore(studentContractAddress).modifyScore(studentAddress, score);
    }
}

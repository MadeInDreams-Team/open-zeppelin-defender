// contracts/MDEX.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Imports from the OpenZeppelin Contracts library
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";

contract MDEV is Initializable, PausableUpgradeable, AccessControlUpgradeable {

    using SafeMathUpgradeable for uint;
    
    uint256 private tradingFees;
    address private admin;

    /// @notice Events
    event ValueChanged(uint256 newValue);

    /// @notice initialize.
    /// @dev Upgradable Contract constructor
   
   function  initialize(address _admin) public initializer {
        __Pausable_init();
        admin = _admin;
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
    }



    /// @notice store.
    /// @dev update the trading fees
    /// @param newValue the new value for trading fees in base 3

    function store(uint256 newValue)  public whenNotPaused{
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Unauthorized to store");
        tradingFees = newValue;
        emit ValueChanged(newValue);
    }

    /// @notice retreive.
    /// @dev retreive the trading fees value
   
    function retrieve() public view returns (uint256) {
        return tradingFees;
    }


    /// @notice pause or unpause.
    /// @dev Security feature to use with Defender


  function pause() public whenNotPaused{
       require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Unauthorized to pause");
      _pause();
  }
    
    function unpause() public whenPaused{
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Unauthorized to unpause");
        _unpause();
    }

}
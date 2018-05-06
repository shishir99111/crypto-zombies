# crypto-zombies
A solidity smart contract for the Ethereum based zombie game.

- Main attraction is the random traits for every new Zombie created via random DNA generation. surprise element when Zombies feeded with cryptokitties.
- Ownership of zombie and quantity is stored in Contract as permanent storage in Blockchain. Ownership is mapped through the identity ethereum 16 Bit hexadecimal address.
- Public function in contract for the zombie creation and couples of private method defined.
- Contract safe from overflow situations.
- Zombies can attack, can be level up.
- Higher the level, higher will be the fee.
- Can be easily pluggable to any standard Crypto Platform as it the Contract works on the ERC721 Standards.

TO DO:
- Web3js integration to utilise the contract, implementation in JS. DONE
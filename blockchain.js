const crypto = require('crypto')

//Block Class 
class Block {
    constructor(index, timestamp, data, previousHash){
        this.index = index; //position in the chain
        this.timestamp  = timestamp; // Block creation time/date
        this.data = data; 
        this.previousHash = previousHash ; //Hash of previous block
        this.hash = this.calculateHash()
    }
}
//BlockChain Class

class BlockChain {
    constructor(){
        //first block creation
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, new Date().toISOString(), "Genesis Block", "0")
    }
}



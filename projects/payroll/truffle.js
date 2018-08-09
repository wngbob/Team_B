var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "decide spider icon awkward giraffe style silk mammal army churn faith rely";

module.exports = { 
	migrations_directory: "./migrations",
	networks: { 
		ropsten: { 
			provider: function() {
				//return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/9iEvS3gHkXfYjek6c4CM")
				return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/a3d547d4a1ca49c18a70eef7cb93139d") 
				//return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/a3d547d4a1ca49c18a70eef7cb93139d") 	
			}, 
			network_id: "*",
			gas:5000000 
		} 
	} 
};

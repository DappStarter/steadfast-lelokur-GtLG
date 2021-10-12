require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn pulse grace gloom suspect twice'; 
let testAccounts = [
"0x765b8a4adbf82c5ffc8690ea8e5769c5b1d6f67e40a85ca2c9a74b054f14210d",
"0x52ef8b9515fe833b98fcad0e8bddd75dfde115180e6a6ec6c8b38c266b7f0e62",
"0x83b8312473b154688a4d9dc84d21ca23bf547fbf8b1a241749a7f2727b0296b7",
"0x70038289bdfe17de10604de22af506c16f235e9e20154a54e27a5893b2126540",
"0x47857f6e254b7c58a49fcd4add3bb4516ab38753d174c1f47eb188af710f3000",
"0x38ce10a729e312a9dad4b52ee170616f09bd170c8f9703096b69dd4574897877",
"0x0d7ce59e018df23f4467733dfbfea36d31bda03517b06799aa90146ca594ba30",
"0x7471aedc28f6a99998a991a1d10d4f3735241dd1a6705ba7bf7ca1d701bcab86",
"0x41d760b7e859b5791b20e5a94d1c385c8c1b9089dc5bdfde2c30822f1859c2c0",
"0xfb168f51bb4949d6caf057db2a17d465bb706adab26ec2ca820b423b16e82e81"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


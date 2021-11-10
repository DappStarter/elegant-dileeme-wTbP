require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth museum collect grace clock flock genuine'; 
let testAccounts = [
"0x655cc5f00c6b6bb369ea9b2fa8499157fde40e7799835e9febdaaad635561bf8",
"0xbb57aa997f85d83cbbc8f0a6f171f00a4c9964f58165033de1f2054f4b4deca9",
"0xf8cc4777d2969efe78ab07eb9740825e785b214c78a03ff61b392ae9dc9de2d5",
"0x8c069845857d256d89e15d79ab8f171be1b6b639c3227fb68eb729c210fd7dd8",
"0xf205a4157699b12475703e2377c817b5d58004dc36109c27d1dfd121c4830037",
"0x3ac0ca2dcd189695983adaac2c20ff12cac4032e7ab6a826c71909d0c33ca3ca",
"0xcd64165d2472f99925b4c3bb0ca3b52e1d73ed32cf070e329a15652cc36613dd",
"0x36b2c744915a3610f9c60be840c2f4af39ed69fae36a590e6ef4475149d56563",
"0x6bcd57549ab36fa9da720fd4e4039a7e0239daeef4432b9ae27c1301cf3f2625",
"0xcb9b37d6f941a97b58cc3b83ad0815f28fb170703a9f0a62c221e9930a7df98b"
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


import img_1 from '../../assets/img/how-1.png';
import img_2 from '../../assets/img/how-2.png';
import img_3 from '../../assets/img/how-3.png';
import tick from '../../assets/img/tick.png';

export const extensionArray = [
    { icon: img_1, title: 'How does it work?', content: 'The first-ever Chrome extension that gives you an untraceable identity.', description: 'Create a wallet, receive a backup seed key, deposit your crypto $$$ and let automation do the rest - we will mix your funds with the pool of coins in Blank to hide their origin.', definition: 'Each time you want to make a withdrawal, Blank will create a new wallet address for you with the amount of crypto $$$ that you requested.' }
];

export const privacyArray = [
    {
        icon: img_2, title: 'Privacy by design', content: 'Metamask x Tornado Cash', description: 'Your funds go into the smart contract as yours but they exit named Blank. We use cryptographic proofs to guarantee that no one can link your withdrawals to deposits, unless you want them to. In technical language, we use the zkSnark technology to do it. Only the user gets the secret to a given deposit, which allows to withdraw the correlating funds from Blank under a new address.', tickImage: tick,
        definitions: [
            { tick, text: 'ETH, WBTC and all ERC-20 support' },
            { tick, text: 'Automatic Deposits' },
            { tick, text: 'Partial Withdraw' }
        ]
    }
];

export const secureArray = [
    {
        icon: img_3, title: '100% secure', content: 'Protected by smart contracts that only you have the access to.', description: 'Independent auditors audit Blank’s smart contracts before every release. Once the code is live, it remains fixed. No intruder can manipulate it, change it, nor twist it anyhow. We put our money where our mouths are, so we will provide initial liquidity in Blank smart contracts to provide privacy coverage for your transfers.', tickImage: tick,
        definitions: [
            { tick, text: 'Hierarchical Deterministic Seed Key' },
            { tick, text: 'Open Source' },
            { tick, text: 'Secured with audits and bug bounties' }
        ]
    }
];
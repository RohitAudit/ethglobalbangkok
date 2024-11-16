# ethglobalbangkok

## Introduction
One Wallet to rule them all!
Unity wallet web2 logins like emails, google etc to create their wallet. This helps users with the familiarity of old applications while still partipating in the web3 ecosystem. We have also abstracted out the chains from the wallet. We believe that the chains doesn't matter for end users, functionality and ease of use is more important. User directly sees their overall assets and balances across all chains without having to worry about the underlying chain. They can still partipate in all the DeFi activity without having to consciously bridge funds to any chain. This is possible through our ground breaking chain abstraction.
Some of the features that our wallet provides:
1. It allows users to sign in using social logins
2. Users can hold and send funds on any chain without signing multiple transactions
3. Users can participate in different DeFi protocols across chains without the need to actively bridge their funds.
4. It is a non custodial wallet and users have the option to see what all transactions they are signing for whoever is curious to know about the ifs and buts

## How we built it
We have used various softwares for our product:
1. Dynamic helps us with enabling social login and various frontend functionality helping users to have a smooth and great experience
2. Pyth helps us with the price feeds which allows users to have a better understanding of his/her financials and assets across multiple chains in single dashboard
3. We use chainlinks CCIP for cross chain transaction execution. CCIP allows for sending tokens like USDC crosschain while sending a arbitrary message that can be used to execute certain actions.
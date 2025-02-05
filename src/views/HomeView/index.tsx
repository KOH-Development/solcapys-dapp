import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let links = require('../../../data/data.json');

import { SolanaLogo } from "components";
import styles from "./index.module.css";

export const HomeView: FC = ({}) => {
  const { publicKey } = useWallet();

  let urlClaim:any='';

  const onClick = () => {};

  if(publicKey!=null){
    urlClaim = links.find((x: { handle: { toString: () => string; }; }) => x.handle.toString() === publicKey!.toString());
  }

    const clickHandle = () => {
        window.open(
            urlClaim.url,
            '_blank' // <- This is what makes it open in a new window.
        );    
  }

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl">🦤</span>
            </button>
          </div>
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">0euvreAI</span>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
          </div>
        </div>

        

        <div className="text-center pt-2">
          <div className="hero min-h-16 py-20">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold">
                  Welcome 0euvreAI!
                </h1>
                <p className="mb-5">
                  This app will let you claim your SecondGen NFT!
                </p>
                <p className="mb-5">
                  Connect your wallet to see if it has an eligible drop.
                </p>
                <p>
                  {publicKey ? <>Your address: {publicKey.toBase58()}</> : null}
                </p>
                <p>
                {publicKey ? <>{urlClaim ? <>Your Claim Url:</> : <>No NFTs to Claim.</> }</> : null}
                  
                </p>
                {urlClaim ? <>
                <button onClick={clickHandle} className="btn btn-primary">Claim 0euvreAI NFT(s)</button>
                </> : null}
              </div>
            </div>
          </div>

          {/* <div>
            <h1 className="mb-5 text-5xl">Options:</h1>
            <ul>
              <li>
                <Link href="/gallery">
                  <a className="mb-5 text-4xl font-bold hover:underline">
                    1 -- Capys Gallery
                  </a>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

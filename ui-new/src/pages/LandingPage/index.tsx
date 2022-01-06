import { HiArrowDown } from "react-icons/hi";
import ReactTooltip from "react-tooltip";
import arbitrum from "../../assets/chains/arbitrum.svg";
import avalanche from "../../assets/chains/avalanche.png";
import bsc from "../../assets/chains/binance.png";
import boba from "../../assets/chains/boba.png";
import celo from "../../assets/chains/celo.png";
import ethereum from "../../assets/chains/ethereum.png";
import optimism from "../../assets/chains/optimism.svg";
import polygon from "../../assets/chains/polygon.webp";
import xdai from "../../assets/chains/xdai.png";
import code from "../../assets/contract-code.png";
import bytecode from "../../assets/contract-info.png";
import blockscoutSS from "../../assets/integrations/blockscout-screenshot.png";
import blockscout from "../../assets/integrations/blockscout.png";
import hardhatDeploy from "../../assets/integrations/hardhat-deploy.jpeg";
import keystone from "../../assets/integrations/keystone.png";
import otter from "../../assets/integrations/otter.jpg";
import remix from "../../assets/integrations/remix.png";
import walleth from "../../assets/integrations/walleth.png";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Chart from "./Chart";

type AppIconNameProps = {
  img: string;
  name: string;
};
const AppIconName = ({ img, name }: AppIconNameProps) => (
  <div className="flex flex-col ">
    <img
      src={img}
      className="w-32 transition-opacity ease-in-out"
      alt={`${name} logo`}
    />
    <div className="text-center mt-1">{name}</div>
  </div>
);

type ResourceListItemProps = {
  children: string;
  href: string;
  date?: string;
};
const ResourceListItem = ({ children, href, date }: ResourceListItemProps) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="colored-bullet text-gray-600 hover:text-ceruleanBlue-500"
    >
      <span className="link-underline">{children}</span>{" "}
      {date && <span className="text-gray-400 text-sm">{"- " + date}</span>}
    </a>
  </li>
);
type FooterItemProps = {
  href?: string;
  children: string;
};
const FooterItem = ({ href, children }: FooterItemProps) => (
  <a href={href} target="_blank" rel="noreferrer">
    <li className="text-ceruleanBlue-300 hover:text-ceruleanBlue-100">
      {children}
    </li>
  </a>
);
const LandingPage = () => {
  return (
    <div>
      <div className="h-screen flex flex-col px-8 md:px-12 lg:px-24 bg-gray-100">
        <Header />
        <section className="grid grid-cols-2 gap-8 flex-1">
          {/* Hero left */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4">
              For informed decisions and a more transparent UX in web3
            </h1>
            <h2 className="text-xl ">
              Sourcify is a decentralized metadata and source code repository*
              and automatic verification service*.{" "}
            </h2>
            <div className="flex justify-evenly">
              <Button href="/verifier">Verify Contract</Button>
              <Button href="/fetcher" type="secondary">
                Check Contract
              </Button>
            </div>
          </div>

          {/* Hero right */}
          <div
            className="flex items-center justify-center relative"
            id="hero-image"
          >
            {/* <div className="relative min-h-[450px]"> */}
            <div
              className="absolute mt-32 mr-32 z-10 transition-all duration-300 ease-in-out hover:mb-32 hover:ml-32"
              id="hero-source-code"
            >
              <img src={code} className="w-96" alt="source code visual" />
            </div>
            <div
              className="absolute mb-32 ml-32 z-0 transition-all duration-300 ease-in-out  hover:mt-32 hover:mr-32"
              id="hero-bytecode"
            >
              <img src={bytecode} className="w-96" alt="bytecode visual" />
            </div>
            {/* </div> */}
          </div>
        </section>
        <button className="my-4">
          <HiArrowDown className="inline" /> Learn more
        </button>
      </div>

      {/* About section */}
      <section className="px-8 md:px-12 lg:px-24 bg-white py-16">
        <h1 className="text-3xl text-ceruleanBlue-500 font-bold">
          Sourcify enables simple, next-level source verification.
        </h1>
        <div className="mt-12">
          <p className="font-mono text-lg">
            Sourcify helps to make interacting with smart contracts on the
            blockchain safer and more transparent for users. To achieve this
            goal, we support several efforts to foster adoption of open-source
            source verification, metadata files and NatSpec comments.
          </p>
          <p className="mt-6">
            At its core, Sourcify currently maintains an interface that helps
            developers to verify metadata and contract source code and users to
            check whether contracts have been verified:
            <ul>
              <li>- a contract repository of all verified contracts.</li>
              <li>
                - a monitoring & verifier service that checks for new contracts
                on several blockchains (see supported networks) and tries to
                verify them automatically.
              </li>
              <li>- an API</li>
              <li>- ??? a NPM package ???</li>
            </ul>
          </p>
          <div className="mt-6 pt-12">
            <h3>Why do all this?</h3>
            <p className="mt-4">
              Sourcify aims to enable trust-minimized, well-informed web3
              interactions by helping the ecosystem to turn transaction
              hex-strings displayed in wallets into human readable information.
              On a technical level, that means keeping metadata and source files
              available via IPFS and creating a decentralized infrastructure
              base layer, which allows other tools to be built on top of it.
            </p>
          </div>
        </div>
      </section>

      {/* Supported Networks */}
      <section className="px-8 md:px-12 lg:px-24 bg-gray-100 py-16">
        <h1 className="text-3xl text-ceruleanBlue-500 font-bold">
          Supported Networks
        </h1>
        <div className="mt-8">
          <p>
            For a full overview of all supported networks, see the Supported
            Networks Grid in the documentation.
          </p>
          <p>
            Getting Sourcify support for your network is easy. Please follow the
            instructions in the docs to get started.{" "}
          </p>
        </div>
        <ReactTooltip effect="solid" />
        <div className="flex flex-row mt-8 w-full justify-center py-16 logos-container flex-wrap">
          <img
            src={ethereum}
            data-tip="Ethereum"
            className="h-12 md:h-24 transition-opacity mx-4 my-4 "
            alt="Ethereum logo"
          />
          <img
            src={arbitrum}
            data-tip="Arbitrum"
            className="h-12 md:h-24 transition-opacity mx-4 my-4"
            alt="Arbitrum logo"
          />
          <img
            src={avalanche}
            data-tip="Avalanche"
            className="h-12 md:h-24 transition-opacity mx-4 my-4"
            alt="Avalanche logo"
          />
          <img
            src={bsc}
            data-tip="Binance Smart Chain"
            className="h-12 md:h-24 transition-opacity mx-4 my-4 rounded-full"
            alt="Binance Smart Chain logo"
          />
          <img
            src={boba}
            data-tip="Boba Network"
            className="rounded-full h-12 md:h-24 transition-opacity mx-4 my-4"
            alt="Boba network logo"
          />
          <img
            src={celo}
            data-tip="Celo"
            className="h-12 md:h-24 transition-opacity mx-4 my-4"
            alt="Celo logo"
          />
          <img
            src={xdai}
            data-tip="Gnosis Chain (xDai)"
            className="h-12 md:h-24 transition-opacity mx-4 my-4 rounded-full"
            alt="Gnosis chain (xDai) logo"
          />
          <img
            src={polygon}
            data-tip="Polygon"
            className="h-12 md:h-24 transition-opacity mx-4 my-4"
            alt="Polygon logo"
          />
          <img
            src={optimism}
            data-tip="Optimism"
            className="h-12 md:h-24 transition-opacity mx-4 my-4"
            alt="Optimism logo"
          />
          <div className="p-1 h-14 w-14 text-xs md:text-base md:h-24 md:w-24 transition-opacity rounded-full mx-4 my-4 text-ceruleanBlue-400 flex justify-center items-center text-center">
            And many more!
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="/docs/networks"
            target="_blank"
            rel="noreferrer"
            // className="underline decoration-lightCoral-500 decoration-2 font-semibold text-ceruleanBlue-500"
            className="link-underline font-semibold text-ceruleanBlue-500"
          >
            See all networks
          </a>
        </div>
      </section>

      {/* Integrations & Tools */}
      <section className="px-8 md:px-12 lg:px-24 bg-white py-16">
        <h1 className="text-3xl text-ceruleanBlue-500 font-bold">
          Integrations
        </h1>
        <div className="grid grid-cols-2 gap-12 mt-12">
          {/* Left col: Apps & Tools */}
          <div className="w-full">
            {/* Apps */}
            <h2 className="text-2xl text-ceruleanBlue-500 font-semibold">
              Who is building with Sourcify?
            </h2>
            <div
              className="flex flex-row justify-evenly mt-8 flex-wrap logos-container"
              id="networks-container"
            >
              <AppIconName img={walleth} name="Walleth" />
              <AppIconName img={otter} name="Otterscan" />
              <AppIconName img={blockscout} name="Blockscout" />
              <AppIconName img={keystone} name="Keystone" />
            </div>
            {/* Tools */}
            <div className="mt-8">
              <h2 className="text-2xl text-ceruleanBlue-500 font-semibold">
                Tools & Plugins
              </h2>
              <div className="flex flex-row justify-evenly mt-4 logos-container">
                <AppIconName img={hardhatDeploy} name="hardhat-deploy" />
                <AppIconName img={remix} name="Remix IDE" />
              </div>
            </div>
          </div>

          {/* Right col: examples */}
          <div className="px-12">
            <img
              src={blockscoutSS}
              className="px-12"
              alt="Blockscout screenshot"
            />
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-center text-xl font-semibold text-ceruleanBlue-800">
            Do you want to integrate Sourcify into your project?
          </h3>
          <div className="flex justify-center">
            <Button href="/docs">Check Docs</Button>
            <Button
              href="https://gitter.im/ethereum/source-verify"
              type="secondary"
              className="ml-4"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      {/* Verified contract stats */}
      <section className="flex flex-col items-center px-8 md:px-12 lg:px-24 bg-white py-16">
        <Chart />
      </section>

      {/* Talks & Articles */}
      <section className="px-8 md:px-12 lg:px-24 bg-white py-16">
        <h1 className="text-3xl text-ceruleanBlue-500 font-bold">Resources</h1>
        <div className="flex flex-col items-center mt-8">
          <iframe
            className="w-[24rem] h-[14rem] sm:w-[32rem] sm:h-[18rem] md:w-[48rem] md:h-[27rem]"
            src="https://www.youtube.com/embed/z5D613Qt7Kc"
            title="Next Level Source Code Verification w: Sourcify"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <ul>
              <h3 className="text-ceruleanBlue-500 uppercase text-lg font-semibold">
                📖 Read
              </h3>
              <ResourceListItem
                href="https://blog.soliditylang.org/2020/06/25/sourcify-faq/"
                date="25 Jun 2020"
              >
                All you need to know about Sourcify
              </ResourceListItem>
              <ResourceListItem
                href="https://blog.soliditylang.org/2020/06/02/sourcify-towards-safer-contract-interaction-for-humans/"
                date="02 June 2020"
              >
                Sourcify: Towards Safer Contract Interactions for Humans
              </ResourceListItem>
              <ResourceListItem
                href="https://news.shardlabs.io/how-smart-contracts-can-be-automatically-verified-28ee1c5cf941"
                date="29 Jan 2021"
              >
                How Smart Contracts Can Be Automatically Verified
              </ResourceListItem>
              <ResourceListItem
                href="https://medium.com/remix-ide/verify-contracts-on-remix-with-sourcify-2912004d9c84"
                date="26 Jun 2020"
              >
                Verify Contracts on Remix with Sourcify
              </ResourceListItem>
              <ResourceListItem
                href="https://soliditydeveloper.com/decentralized-etherscan/"
                date="21 Nov 2020"
              >
                The future of a Decentralized Etherscan
              </ResourceListItem>
            </ul>
            <ul>
              <h3 className="text-ceruleanBlue-500 uppercase text-lg font-semibold">
                📽 Watch
              </h3>
              <ResourceListItem
                href="https://vimeo.com/639594632"
                date="21 Oct 2021"
              >
                Goodbye YOLO-Signing
              </ResourceListItem>
              <ResourceListItem
                href="https://www.youtube.com/watch?v=Zc_fJElIooQ"
                date="22 Jul 2021"
              >
                Franziska Heintel : Sourcify: Towards Safer Contract
                Interactions for Humans
              </ResourceListItem>
              <ResourceListItem
                href="https://www.youtube.com/watch?v=uYvbBP3GEFk&list=PLaM7G4Llrb7xlGxwlYGTy1T-GHpytE3RC&index=23"
                date="13 May 2020"
              >
                Verify all the sources by Ligi
              </ResourceListItem>
              <ResourceListItem
                href="https://www.youtube.com/watch?v=_73OrDbpxoY&list=PLrtFm7U0BIfUH7g1-blb-eYFgzOYWhvqm&index=13"
                date="04 Mar 2020"
              >
                Christian Reitwiessner: Improving Wallet UX and Security through
                a Decentralized Metadata and Source Code Repository
              </ResourceListItem>
            </ul>
          </div>
        </div>
      </section>

      <footer className="px-48 py-16 bg-ceruleanBlue-500 text-white text-xl">
        <nav className="font-mono grid grid-cols-3 gap-8">
          <div>
            <h3 className="uppercase font-bold text-ceruleanBlue-100">
              Internal Links
            </h3>
            <ul>
              <FooterItem href="/verifier">Contract Verifier</FooterItem>
              <FooterItem href="/fetcher">Contract Fetcher</FooterItem>
              <FooterItem href="">Status Page</FooterItem>
              <FooterItem href="">About</FooterItem>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-bold text-ceruleanBlue-100">
              External Links
            </h3>
            <ul>
              <FooterItem href="">Documentation</FooterItem>
              <FooterItem href="">IPFS Gateway</FooterItem>
              <FooterItem href="">Media Kit</FooterItem>
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-bold text-ceruleanBlue-100">
              Socials
            </h3>
            <ul>
              <FooterItem href="">Twitter / Fosstodon</FooterItem>
              <FooterItem href="">Gitter / Matrix </FooterItem>
              <FooterItem href="">Github</FooterItem>
            </ul>
          </div>
        </nav>
        <div className="text-center text-sm mt-8 text-ceruleanBlue-300">
          Sourcify Team • {new Date().getFullYear()} • sourcify.eth{" "}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

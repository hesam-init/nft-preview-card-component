import AvatarImage from "@image/image-avatar.png";

import Styles from "./style.module.scss";

function NftCard() {
  return (
    <div className="flex max-w-[22rem] scale-90 flex-col gap-5 overflow-y-hidden rounded-2xl bg-dark-card p-6 py-7 shadow-lg lg:scale-100">
      {/* nft image preview */}
      <div className={`${Styles["nft-hover"]} rounded-xl`} />

      {/* nft titile and description */}
      <a
        href="/#"
        className={`${Styles["text-hover"]} text-[hsl(0, 0%, 100%)] text-[1.3rem] font-semibold tracking-[0.03em]`}>
        Equilibrium #3429
      </a>

      <p className="relative -top-[0.30rem] text-base font-normal leading-[1.6rem] tracking-[0.06em] text-light">
        Our Equilibrium collection promotes balance and calm.
      </p>

      {/* price and days left */}
      <div className="relative -top-1 flex justify-between px-1 text-base">
        <p className={`${Styles["eth-icon"]} font-semibold text-cyan`}>0.041 ETH</p>
        <p className={`${Styles["clock-icon"]} font-normal tracking-[0.001em] text-light`}>
          3 days left
        </p>
      </div>

      <hr className="h-[2px] border-0 bg-dark-line" />

      {/* user profile */}
      <div className="relative -top-[0.40rem] flex items-center gap-4">
        <img
          width="34px"
          className="rounded-full border border-white shadow-lg"
          src={AvatarImage}
          alt="Jules Wyvern"
        />
        <p className="m-0 p-0 font-normal text-light">
          Creation of
          <a href="/#" className={`${Styles["text-hover"]} inline-block indent-1 text-white`}>
            Jules Wyvern
          </a>
        </p>
      </div>
    </div>
  );
}

export default NftCard;

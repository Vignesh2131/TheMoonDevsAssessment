import SupplyLabelList from "./SupplyLabelList";
const BurnStatsContainer = () => {
  return (
    <main>
      <div className="top_bar">
        <AppIcon
          url="/images/token/App_new.svg"
          size={2}
          margin={0}
          fill={IconFilter.unset}
        />
        <p className="label">App SUPPLY</p>
        <AppChip
          onClick={openChainModal}
          title={walletChain?.name || "---"}
          endIcon={"/icons/expand_more.svg"}
          startIcon={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
        ></AppChip>
        <AppExtLink
          className=" supply_label"
          url={`${suppliesChain?.blockExplorers?.default?.url}/address/${tokenAddress}`}
        >
          View Contract
        </AppExtLink>
      </div>
      <div className="supply_bar">
        <AppIcon
          url="/icons/fire.svg"
          size={1.15}
          margin={0}
          fill={IconFilter.primary}
        />
        <AppIcon
          url="/icons/double_arrow.svg"
          size={1.15}
          style={{
            margin: "0 0 0 -0.8rem",
          }}
          fill={IconFilter.primary}
        />
        <span
          className="line orange"
          style={{ width: `${100 - statsSupplies.circulatingPercent}%` }}
        ></span>
        <span
          className="line green"
          style={{ width: `${statsSupplies.circulatingPercent}%` }}
        ></span>
      </div>
      <SupplyLabelList/>
    </main>
  );
}

export default BurnStatsContainer
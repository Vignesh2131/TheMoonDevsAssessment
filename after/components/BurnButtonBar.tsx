
import styled from 'styled-components'

import { ChangeEvent } from 'react';
interface Props {
  executeBurn: () => Promise<void>;
  onChangeBurnAmount: (e: ChangeEvent<HTMLInputElement>) => void;
  burnAmount: string;
  txProgress: boolean;
  txButton: boolean;
  burnTxHash: string;

}

const BurnButtonBar = (props:Props) => {
  return (
    <main>
      <p className="box_subheader">Burn your App</p>
      <div className="description medium">
        &quot; The process of reducing the supply of App tokens by permanently
        removing a certain number of them from circulation, often through a
        deliberate and recorded mechanism. &quot;
      </div>

      <div className="burn_bar">
        <div className="input_value_box">
          <p className="input_muted">Enter amount to Burn</p>
          <input
            className="input_value"
            type="text"
            value={props.burnAmount}
            placeholder="0.00"
            onChange={props.onChangeBurnAmount}
          />
        </div>
        <Button
          variant="outlined"
          onClick={props.executeBurn}
          startIcon={
            props.txProgress ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <AppIcon
                url="/icons/fire.svg"
                fill={IconFilter.primary}
                size={1.5}
                margin={0}
              />
            )
          }
        >
          <span>{props.txButton}</span>
        </Button>
      </div>
      {props.burnTxHash && (
        <div className="tx_links">
          <AppTooltip
            title={`Check burn Transaction on chain ${walletChain?.blockExplorers?.default?.name}`}
          >
            <AppExtLink
              url={`${walletChain?.blockExplorers?.default?.url}/tx/${props.burnTxHash}`}
              className="header_link"
            >
              Burn Tx: {prettyEthAddress(props.burnTxHash ?? zeroAddress)}
            </AppExtLink>
          </AppTooltip>
        </div>
      )}
    </main>
  );
}

export default BurnButtonBar
import styled from 'styled-components'
const TransactionTable = ({burnTransactions,coinData}) => {
  return (
    <TransactionTableStyled>
      <div className="header">
        <p className="header_label">Burn Transactions</p>
      </div>
      <BurnTxTable
        data={burnTransactions}
        priceUSD={coinData?.current_price?.usd}
      />
    </TransactionTableStyled>
  );
}
const TransactionTableStyled = styled.main``
const BurnTxTable = styled.div``
export default TransactionTable

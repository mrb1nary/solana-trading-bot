declare enum TxVersion {
    "V0" = 0,
    "LEGACY" = 1
}
declare const InstructionType: {
    CreateAccount: string;
    InitAccount: string;
    CreateATA: string;
    CloseAccount: string;
    TransferAmount: string;
    InitMint: string;
    MintTo: string;
    InitMarket: string;
    Util1216OwnerClaim: string;
    SetComputeUnitPrice: string;
    SetComputeUnitLimit: string;
    ClmmCreatePool: string;
    ClmmOpenPosition: string;
    ClmmIncreasePosition: string;
    ClmmDecreasePosition: string;
    ClmmClosePosition: string;
    ClmmSwapBaseIn: string;
    ClmmSwapBaseOut: string;
    ClmmInitReward: string;
    ClmmSetReward: string;
    ClmmCollectReward: string;
    ClmmLockPosition: string;
    ClmmHarvestLockPosition: string;
    AmmV4Swap: string;
    AmmV4AddLiquidity: string;
    AmmV4RemoveLiquidity: string;
    AmmV4SimulatePoolInfo: string;
    AmmV4SwapBaseIn: string;
    AmmV4SwapBaseOut: string;
    AmmV4CreatePool: string;
    AmmV4InitPool: string;
    AmmV5AddLiquidity: string;
    AmmV5RemoveLiquidity: string;
    AmmV5SimulatePoolInfo: string;
    AmmV5SwapBaseIn: string;
    AmmV5SwapBaseOut: string;
    RouteSwap: string;
    RouteSwap1: string;
    RouteSwap2: string;
    FarmV3Deposit: string;
    FarmV3Withdraw: string;
    FarmV3CreateLedger: string;
    FarmV4Withdraw: string;
    FarmV5Deposit: string;
    FarmV5Withdraw: string;
    FarmV5CreateLedger: string;
    FarmV6Deposit: string;
    FarmV6Withdraw: string;
    FarmV6Create: string;
    FarmV6Restart: string;
    FarmV6CreatorAddReward: string;
    FarmV6CreatorWithdraw: string;
    CpmmCreatePool: string;
    CpmmAddLiquidity: string;
    CpmmWithdrawLiquidity: string;
    CpmmSwapBaseIn: string;
    CpmmSwapBaseOut: string;
    CpmmLockLp: string;
    CpmmCollectLockFee: string;
    TransferTip: string;
};

export { InstructionType, TxVersion };

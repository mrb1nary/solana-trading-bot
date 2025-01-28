declare const API_URLS: {
    BASE_HOST: string;
    OWNER_BASE_HOST: string;
    SERVICE_BASE_HOST: string;
    MONITOR_BASE_HOST: string;
    SERVICE_1_BASE_HOST: string;
    SEND_TRANSACTION: string;
    FARM_ARP: string;
    FARM_ARP_LINE: string;
    CLMM_CONFIG: string;
    CPMM_CONFIG: string;
    VERSION: string;
    CHECK_AVAILABILITY: string;
    RPCS: string;
    INFO: string;
    STAKE_POOLS: string;
    CHAIN_TIME: string;
    TOKEN_LIST: string;
    MINT_INFO_ID: string;
    JUP_TOKEN_LIST: string;
    /**
     * poolType: {all, concentrated, standard, allFarm, concentratedFarm, standardFarm}
     * poolSortField: {liquidity | volume_24h / 7d / 30d | fee_24h / 7d / 30d | apr_24h / 7d / 30d}
     * sortType: {desc/asc}
     * page: number
     * pageSize: number
     */
    POOL_LIST: string;
    /**
     * ?ids=idList.join(',')
     */
    POOL_SEARCH_BY_ID: string;
    /**
     * mint1/mint2: search pool by mint
     * poolSortField: {liquidity | volume_24h / 7d / 30d | fee_24h / 7d / 30d | apr_24h / 7d / 30d}
     * poolType: {all, concentrated, standard, allFarm, concentratedFarm, standardFarm}
     * sortType: {desc/asc}
     * page: number
     * pageSize: number
     */
    POOL_SEARCH_MINT: string;
    /** ?lps=lpList.join(',') */
    POOL_SEARCH_LP: string;
    /** ?ids=idList.join(',') */
    POOL_KEY_BY_ID: string;
    /** ?id=string */
    POOL_LIQUIDITY_LINE: string;
    POOL_POSITION_LINE: string;
    FARM_INFO: string;
    /** ?lp=string&pageSize=100&page=number */
    FARM_LP_INFO: string;
    FARM_KEYS: string;
    OWNER_CREATED_FARM: string;
    OWNER_IDO: string;
    OWNER_STAKE_FARMS: string;
    OWNER_LOCK_POSITION: string;
    IDO_KEYS: string;
    SWAP_HOST: string;
    SWAP_COMPUTE: string;
    SWAP_TX: string;
    MINT_PRICE: string;
    MIGRATE_CONFIG: string;
    PRIORITY_FEE: string;
    CPMM_LOCK: string;
};
declare const DEV_API_URLS: {
    BASE_HOST: string;
    OWNER_BASE_HOST: string;
    SERVICE_BASE_HOST: string;
    MONITOR_BASE_HOST: string;
    SERVICE_1_BASE_HOST: string;
    SEND_TRANSACTION: string;
    FARM_ARP: string;
    FARM_ARP_LINE: string;
    CLMM_CONFIG: string;
    CPMM_CONFIG: string;
    VERSION: string;
    CHECK_AVAILABILITY: string;
    RPCS: string;
    INFO: string;
    STAKE_POOLS: string;
    CHAIN_TIME: string;
    TOKEN_LIST: string;
    MINT_INFO_ID: string;
    JUP_TOKEN_LIST: string;
    /**
     * poolType: {all, concentrated, standard, allFarm, concentratedFarm, standardFarm}
     * poolSortField: {liquidity | volume_24h / 7d / 30d | fee_24h / 7d / 30d | apr_24h / 7d / 30d}
     * sortType: {desc/asc}
     * page: number
     * pageSize: number
     */
    POOL_LIST: string;
    /**
     * ?ids=idList.join(',')
     */
    POOL_SEARCH_BY_ID: string;
    /**
     * mint1/mint2: search pool by mint
     * poolSortField: {liquidity | volume_24h / 7d / 30d | fee_24h / 7d / 30d | apr_24h / 7d / 30d}
     * poolType: {all, concentrated, standard, allFarm, concentratedFarm, standardFarm}
     * sortType: {desc/asc}
     * page: number
     * pageSize: number
     */
    POOL_SEARCH_MINT: string;
    /** ?lps=lpList.join(',') */
    POOL_SEARCH_LP: string;
    /** ?ids=idList.join(',') */
    POOL_KEY_BY_ID: string;
    /** ?id=string */
    POOL_LIQUIDITY_LINE: string;
    POOL_POSITION_LINE: string;
    FARM_INFO: string;
    /** ?lp=string&pageSize=100&page=number */
    FARM_LP_INFO: string;
    FARM_KEYS: string;
    OWNER_CREATED_FARM: string;
    OWNER_IDO: string;
    OWNER_STAKE_FARMS: string;
    OWNER_LOCK_POSITION: string;
    IDO_KEYS: string;
    SWAP_HOST: string;
    SWAP_COMPUTE: string;
    SWAP_TX: string;
    MINT_PRICE: string;
    MIGRATE_CONFIG: string;
    PRIORITY_FEE: string;
    CPMM_LOCK: string;
};
declare type API_URL_CONFIG = Partial<typeof API_URLS>;

export { API_URLS, API_URL_CONFIG, DEV_API_URLS };

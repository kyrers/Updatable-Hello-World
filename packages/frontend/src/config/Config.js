export const NETWORKS = {
    localhost: {
        name: "localhost",
        color: "#666666",
        chainId: 31337,
        blockExplorer: "",
        rpcUrl: "http://" + window.location.hostname + ":8545",
    }
}

export const targetNetwork = NETWORKS.localhost;
export const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
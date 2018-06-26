/**
 * Mock data for unit test apis
 */

const chainInfo = {
  "server_version": "aa351733",
  "chain_id": "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
  "head_block_num": 2775501,
  "last_irreversible_block_num": 2775165,
  "last_irreversible_block_id": "002a587d50b1dc050ae60197c8996c02f4149ff1c2371957799c86ea04dfbd92",
  "head_block_id": "002a59cdc43deba6b50dea01b33f373dbee046b516876308e7d0c31bf191382d",
  "head_block_time": "2018-06-26T17:43:53.500",
  "head_block_producer": "eosnewyorkio",
  "virtual_block_cpu_limit": 200000000,
  "virtual_block_net_limit": 1048576000,
  "block_cpu_limit": 199900,
  "block_net_limit": 1048576
}

const blockInfo = {
  "timestamp": "2018-06-26T17:43:53.500",
  "producer": "eosnewyorkio",
  "confirmed": 0,
  "previous": "002a59cc4c4af172658b0b9af498dfd015ebce12ea7743a79f0c669005e9dd8e",
  "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
  "action_mroot": "154e1044d216a32beae6d6b83ef6875d59719f88e1e26ea7490d51f8ea825af6",
  "schedule_version": 65,
  "new_producers": null,
  "header_extensions": [],
  "producer_signature": "SIG_K1_K3rhzZRTtzc4NETkFghA4wpniqjzsc7JNQ7UVeiQJT55GiVX6C9vChQUsnYytyFHZJZFYV7w7ZT7ZqZLGhbqDHuP3sRoES",
  "transactions": [],
  "block_extensions": [],
  "id": "002a59cdc43deba6b50dea01b33f373dbee046b516876308e7d0c31bf191382d",
  "block_num": 2775501,
  "ref_block_prefix": 32116149
}

const transaction = {
  "id": "c5ca2f6520bed5c99eb2863859d995f0bd0a10127786d9d735e2850a0b37daf7",
  "trx": {
    "receipt": {
      "status": "executed", "cpu_usage_us": 2214, "net_usage_words": 18, "trx": [1, {
        "signatures": ["SIG_K1_KdmFYNifJ6ckB9sVCFSDaUagf4tP5g3sVSafUUVWGh3krRFPzJecZVXGgkRx7HDuSUEcZ3oeRiAFTHZbAmUbkSLU1s9x3b"], "compression": "none", "packed_context_free_data": "",
        "packed_trx": "898e325bf17db171d68100000000010000000000ea305500003f2a1ba6a24a01d0e9349d4ed3e93400000000a8ed323231d0e9349d4ed3e934d0e9349d4ed3e934000000000000000004454f5300000000282300000000000004454f53000000000000"
      }]
    }, "trx": { "expiration": "2018-06-26T19:05:45", "ref_block_num": 32241, "ref_block_prefix": 2178314673, "max_net_usage_words": 0, "max_cpu_usage_ms": 0, "delay_sec": 0, "context_free_actions": [], "actions": [{ "account": "eosio", "name": "delegatebw", "authorization": [{ "actor": "anoxanoxanox", "permission": "active" }], "data": { "from": "anoxanoxanox", "receiver": "anoxanoxanox", "stake_net_quantity": "0.0000 EOS", "stake_cpu_quantity": "0.9000 EOS", "transfer": 0 }, "hex_data": "d0e9349d4ed3e934d0e9349d4ed3e934000000000000000004454f5300000000282300000000000004454f530000000000" }], "transaction_extensions": [], "signatures": ["SIG_K1_KdmFYNifJ6ckB9sVCFSDaUagf4tP5g3sVSafUUVWGh3krRFPzJecZVXGgkRx7HDuSUEcZ3oeRiAFTHZbAmUbkSLU1s9x3b"], "context_free_data": [] }
  }, "block_time": "2018-06-26T19:03:46.500",
  "block_num": 2785087, "last_irreversible_block": 2785089,
  "traces": [{
    "receipt": {
      "receiver": "eosio", "act_digest": "85e7bf5577da599d658390640f6d314dc4c5b5a037ca134bda7397608a3f0c94", "global_sequence": 7343337, "recv_sequence": 4246201, "auth_sequence": [["anoxanoxanox", 15]],
      "code_sequence": 6, "abi_sequence": 7
    }, "act": { "account": "eosio", "name": "delegatebw", "authorization": [{ "actor": "anoxanoxanox", "permission": "active" }], "data": { "from": "anoxanoxanox", "receiver": "anoxanoxanox", "stake_net_quantity": "0.0000 EOS", "stake_cpu_quantity": "0.9000 EOS", "transfer": 0 }, "hex_data": "d0e9349d4ed3e934d0e9349d4ed3e934000000000000000004454f5300000000282300000000000004454f530000000000" }, "elapsed": 1281, "cpu_usage": 0, "console": "", "total_cpu_usage": 0, "trx_id": "c5ca2f6520bed5c99eb2863859d995f0bd0a10127786d9d735e2850a0b37daf7", "inline_traces": [{ "receipt": { "receiver": "eosio.token", "act_digest": "f8a34b2511d4deea2487d46b7927371803a0eba6da5a1fd97dbf32ad2cf6baa6", "global_sequence": 7343338, "recv_sequence": 940224, "auth_sequence": [["anoxanoxanox", 16]], "code_sequence": 1, "abi_sequence": 1 }, "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "anoxanoxanox", "permission": "active" }], "data": { "from": "anoxanoxanox", "to": "eosio.stake", "quantity": "0.9000 EOS", "memo": "stake bandwidth" }, "hex_data": "d0e9349d4ed3e9340014341903ea3055282300000000000004454f53000000000f7374616b652062616e647769647468" }, "elapsed": 459, "cpu_usage": 0, "console": "", "total_cpu_usage": 0, "trx_id": "c5ca2f6520bed5c99eb2863859d995f0bd0a10127786d9d735e2850a0b37daf7", "inline_traces": [{ "receipt": { "receiver": "anoxanoxanox", "act_digest": "f8a34b2511d4deea2487d46b7927371803a0eba6da5a1fd97dbf32ad2cf6baa6", "global_sequence": 7343339, "recv_sequence": 6, "auth_sequence": [["anoxanoxanox", 17]], "code_sequence": 1, "abi_sequence": 1 }, "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "anoxanoxanox", "permission": "active" }], "data": { "from": "anoxanoxanox", "to": "eosio.stake", "quantity": "0.9000 EOS", "memo": "stake bandwidth" }, "hex_data": "d0e9349d4ed3e9340014341903ea3055282300000000000004454f53000000000f7374616b652062616e647769647468" }, "elapsed": 4, "cpu_usage": 0, "console": "", "total_cpu_usage": 0, "trx_id": "c5ca2f6520bed5c99eb2863859d995f0bd0a10127786d9d735e2850a0b37daf7", "inline_traces": [] }, { "receipt": { "receiver": "eosio.stake", "act_digest": "f8a34b2511d4deea2487d46b7927371803a0eba6da5a1fd97dbf32ad2cf6baa6", "global_sequence": 7343340, "recv_sequence": 237358, "auth_sequence": [["anoxanoxanox", 18]], "code_sequence": 1, "abi_sequence": 1 }, "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "anoxanoxanox", "permission": "active" }], "data": { "from": "anoxanoxanox", "to": "eosio.stake", "quantity": "0.9000 EOS", "memo": "stake bandwidth" }, "hex_data": "d0e9349d4ed3e9340014341903ea3055282300000000000004454f53000000000f7374616b652062616e647769647468" }, "elapsed": 5, "cpu_usage": 0, "console": "", "total_cpu_usage": 0, "trx_id": "c5ca2f6520bed5c99eb2863859d995f0bd0a10127786d9d735e2850a0b37daf7", "inline_traces": [] }] }]
  }, {
    "receipt": { "receiver": "eosio.token", "act_digest": "f8a34b2511d4deea2487d46b7927371803a0eba6da5a1fd97dbf32ad2cf6baa6", "global_sequence": 7343338, "recv_sequence": 940224, "auth_sequence": [["anoxanoxanox", 16]], "code_sequence": 1, "abi_sequence": 1 }, "act": {
      "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "anoxanoxanox", "permission": "active" }], "data": { "from": "anoxanoxanox", "to": "eosio.stake", "quantity": "0.9000 EOS", "memo": "stake bandwidth" },
      "hex_data": "d0e9349d4ed3e9340014341903ea3055282300000000000004454f53000000000f7374616b652062616e647769647468"
    }, "elapsed": 459, "cpu_usage": 0, "console": "", "total_cpu_usage": 0, "trx_id": "c5ca2f6520bed5c99eb2863859d995f0bd0a10127786d9d735e2850a0b37daf7", "inline_traces": [{
      "receipt": { "receiver": "anoxanoxanox", "act_digest": "f8a34b2511d4deea2487d46b7927371803a0eba6da5a1fd97dbf32ad2cf6baa6", "global_sequence": 7343339, "recv_sequence": 6, "auth_sequence": [["anoxanoxanox", 17]], "code_sequence": 1, "abi_sequence": 1 }, "act": {
        "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "anoxanoxanox", "permission": "active" }], "data": {
          "from": "anoxanoxanox", "to": "eosio.stake", "quantity": "0.9000 EOS", "memo": "stake bandwidth"
        }, "hex_data": "d0e9349d4ed3e9340014341903ea3055282300000000000004454f53000000000f7374616b652062616e647769647468"
      }, "elapsed": 4, "cpu_usage": 0, "console": "", "total_cpu_usage": 0, "trx_id": "c5ca2f6520bed5c99eb2863859d995f0bd0a10127786d9d735e2850a0b37daf7", "inline_traces": []
    }, { "receipt": { "receiver": "eosio.stake", "act_digest": "f8a34b2511d4deea2487d46b7927371803a0eba6da5a1fd97dbf32ad2cf6baa6", "global_sequence": 7343340, "recv_sequence": 237358, "auth_sequence": [["anoxanoxanox", 18]], "code_sequence": 1, "abi_sequence": 1 }, "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "anoxanoxanox", "permission": "active" }], "data": { "from": "anoxanoxanox", "to": "eosio.stake", "quantity": "0.9000 EOS", "memo": "stake bandwidth" }, "hex_data": "d0e9349d4ed3e9340014341903ea3055282300000000000004454f53000000000f7374616b652062616e647769647468" }, "elapsed": 5, "cpu_usage": 0, "console": "", "total_cpu_usage": 0, "trx_id": "c5ca2f6520bed5c99eb2863859d995f0bd0a10127786d9d735e2850a0b37daf7", "inline_traces": [] }]
  }, { "receipt": { "receiver": "anoxanoxanox", "act_digest": "f8a34b2511d4deea2487d46b7927371803a0eba6da5a1fd97dbf32ad2cf6baa6", "global_sequence": 7343339, "recv_sequence": 6, "auth_sequence": [["anoxanoxanox", 17]], "code_sequence": 1, "abi_sequence": 1 }, "act": { "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "anoxanoxanox", "permission": "active" }], "data": { "from": "anoxanoxanox", "to": "eosio.stake", "quantity": "0.9000 EOS", "memo": "stake bandwidth" }, "hex_data": "d0e9349d4ed3e9340014341903ea3055282300000000000004454f53000000000f7374616b652062616e647769647468" }, "elapsed": 4, "cpu_usage": 0, "console": "", "total_cpu_usage": 0, "trx_id": "c5ca2f6520bed5c99eb2863859d995f0bd0a10127786d9d735e2850a0b37daf7", "inline_traces": [] }, {
    "receipt": { "receiver": "eosio.stake", "act_digest": "f8a34b2511d4deea2487d46b7927371803a0eba6da5a1fd97dbf32ad2cf6baa6", "global_sequence": 7343340, "recv_sequence": 237358, "auth_sequence": [["anoxanoxanox", 18]], "code_sequence": 1, "abi_sequence": 1 }, "act": {
      "account": "eosio.token", "name": "transfer", "authorization": [{ "actor": "anoxanoxanox", "permission": "active" }],
      "data": { "from": "anoxanoxanox", "to": "eosio.stake", "quantity": "0.9000 EOS", "memo": "stake bandwidth" }, "hex_data": "d0e9349d4ed3e9340014341903ea3055282300000000000004454f53000000000f7374616b652062616e647769647468"
    }, "elapsed": 5, "cpu_usage": 0, "console": "", "total_cpu_usage": 0, "trx_id": "c5ca2f6520bed5c99eb2863859d995f0bd0a10127786d9d735e2850a0b37daf7", "inline_traces": []
  }]
}

const delegateBwAbi = {
  abi: {
    actions: [
        {
          name: "delegatebw",
          ricardian_contract: "# Action - `{{ delegatebw }}`\n\n## Description\n\nThe intent of the `{{ delegatebw }}` action is to stake tokens for bandwidth and/or CPU and optionally transfer ownership.\n\nAs an authorized party I {{ signer }} wish to stake {{ stake_cpu_quantity }} for CPU and {{ stake_net_quantity }} for bandwidth from the liquid tokens of {{ from }} for the use of delegatee {{ to }}. \n \n {{if transfer }}\n \nIt is {{ transfer }} that I wish these tokens to become immediately owned by the delegatee.\n \n {{/if}}\n\nAs signer I stipulate that, if I am not the beneficial owner of these tokens, I have proof that Iu2019ve been authorized to take this action by their beneficial owner(s). \n"
        }
    ]
  }
}

export { chainInfo, blockInfo, transaction, delegateBwAbi }

62426
{"version":0,"id":"be503a031e66e2614ae6091b2544c4e9ca68f47f052f187eb393e56e17649895","main":"/backend/worklet.js","imports":{},"resolutions":{"/backend/framing.js":{"#package":"/backend/package.json"},"/backend/hkdf.js":{"#package":"/backend/package.json","crypto":"/backend/node_modules/bare-crypto/index.js"},"/backend/identity.js":{"#package":"/backend/package.json","crypto":"/backend/node_modules/bare-crypto/index.js","hyperdht":"/backend/node_modules/hyperdht/index.js"},"/backend/mailcrypto.js":{"#package":"/backend/package.json","sodium-native":"/backend/node_modules/sodium-native/index.js"},"/backend/media.js":{"#package":"/backend/package.json","crypto":"/backend/node_modules/bare-crypto/index.js","fs":"/backend/node_modules/bare-fs/index.js","path":"/backend/node_modules/bare-path/index.js","stream":"/backend/node_modules/bare-stream/index.js"},"/backend/node_modules/@hyperswarm/secret-stream/index.js":{"#package":"/backend/node_modules/@hyperswarm/secret-stream/package.json","./lib/bridge":"/backend/node_modules/@hyperswarm/secret-stream/lib/bridge.js","./lib/handshake":"/backend/node_modules/@hyperswarm/secret-stream/lib/handshake.js","b4a":"/backend/node_modules/b4a/index.js","hypercore-crypto":"/backend/node_modules/hypercore-crypto/index.js","sodium-secretstream":"/backend/node_modules/sodium-secretstream/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js","streamx":"/backend/node_modules/streamx/index.js","timeout-refresh":"/backend/node_modules/timeout-refresh/index.js","unslab":"/backend/node_modules/unslab/index.js"},"/backend/node_modules/@hyperswarm/secret-stream/lib/bridge.js":{"#package":"/backend/node_modules/@hyperswarm/secret-stream/package.json","streamx":"/backend/node_modules/streamx/index.js"},"/backend/node_modules/@hyperswarm/secret-stream/lib/handshake.js":{"#package":"/backend/node_modules/@hyperswarm/secret-stream/package.json","b4a":"/backend/node_modules/b4a/index.js","noise-curve-ed":"/backend/node_modules/noise-curve-ed/index.js","noise-handshake":"/backend/node_modules/noise-handshake/noise.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/@hyperswarm/secret-stream/package.json":{},"/backend/node_modules/adaptive-timeout/index.js":{"#package":"/backend/node_modules/adaptive-timeout/package.json","xache":"/backend/node_modules/xache/index.js"},"/backend/node_modules/adaptive-timeout/package.json":{},"/backend/node_modules/b4a/index.js":{"#package":"/backend/node_modules/b4a/package.json"},"/backend/node_modules/b4a/package.json":{},"/backend/node_modules/bare-ansi-escapes/index.js":{"#package":"/backend/node_modules/bare-ansi-escapes/package.json"},"/backend/node_modules/bare-ansi-escapes/package.json":{},"/backend/node_modules/bare-assert/index.js":{"#package":"/backend/node_modules/bare-assert/package.json","bare-inspect":"/backend/node_modules/bare-inspect/index.js"},"/backend/node_modules/bare-assert/package.json":{},"/backend/node_modules/bare-crypto/binding.js":{"#package":"/backend/node_modules/bare-crypto/package.json",".":"linked:libbare-crypto.1.15.3.so"},"/backend/node_modules/bare-crypto/index.js":{"#package":"/backend/node_modules/bare-crypto/package.json","./lib/cipher":"/backend/node_modules/bare-crypto/lib/cipher.js","./lib/constants":"/backend/node_modules/bare-crypto/lib/constants.js","./lib/hash":"/backend/node_modules/bare-crypto/lib/hash.js","./lib/hmac":"/backend/node_modules/bare-crypto/lib/hmac.js","./lib/key":"/backend/node_modules/bare-crypto/lib/key.js","./lib/pbkdf2":"/backend/node_modules/bare-crypto/lib/pbkdf2.js","./lib/random":"/backend/node_modules/bare-crypto/lib/random.js","./lib/signature":"/backend/node_modules/bare-crypto/lib/signature.js","./lib/timing":"/backend/node_modules/bare-crypto/lib/timing.js","./web":"/backend/node_modules/bare-crypto/web.js"},"/backend/node_modules/bare-crypto/lib/cipher.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../binding":"/backend/node_modules/bare-crypto/binding.js","./constants":"/backend/node_modules/bare-crypto/lib/constants.js","bare-assert":"/backend/node_modules/bare-assert/index.js","bare-stream":"/backend/node_modules/bare-stream/index.js"},"/backend/node_modules/bare-crypto/lib/constants.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../binding":"/backend/node_modules/bare-crypto/binding.js","./errors":"/backend/node_modules/bare-crypto/lib/errors.js","bare-assert":"/backend/node_modules/bare-assert/index.js"},"/backend/node_modules/bare-crypto/lib/errors.js":{"#package":"/backend/node_modules/bare-crypto/package.json"},"/backend/node_modules/bare-crypto/lib/hash.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../binding":"/backend/node_modules/bare-crypto/binding.js","./constants":"/backend/node_modules/bare-crypto/lib/constants.js","bare-assert":"/backend/node_modules/bare-assert/index.js","bare-stream":"/backend/node_modules/bare-stream/index.js"},"/backend/node_modules/bare-crypto/lib/hmac.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../binding":"/backend/node_modules/bare-crypto/binding.js","./constants":"/backend/node_modules/bare-crypto/lib/constants.js","bare-assert":"/backend/node_modules/bare-assert/index.js","bare-stream":"/backend/node_modules/bare-stream/index.js"},"/backend/node_modules/bare-crypto/lib/key.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../binding":"/backend/node_modules/bare-crypto/binding.js","./constants":"/backend/node_modules/bare-crypto/lib/constants.js"},"/backend/node_modules/bare-crypto/lib/pbkdf2.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../binding":"/backend/node_modules/bare-crypto/binding.js","./constants":"/backend/node_modules/bare-crypto/lib/constants.js","bare-assert":"/backend/node_modules/bare-assert/index.js"},"/backend/node_modules/bare-crypto/lib/random.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../binding":"/backend/node_modules/bare-crypto/binding.js","bare-assert":"/backend/node_modules/bare-assert/index.js"},"/backend/node_modules/bare-crypto/lib/signature.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../binding":"/backend/node_modules/bare-crypto/binding.js","./constants":"/backend/node_modules/bare-crypto/lib/constants.js","./key":"/backend/node_modules/bare-crypto/lib/key.js","bare-assert":"/backend/node_modules/bare-assert/index.js"},"/backend/node_modules/bare-crypto/lib/timing.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../binding":"/backend/node_modules/bare-crypto/binding.js","bare-assert":"/backend/node_modules/bare-assert/index.js"},"/backend/node_modules/bare-crypto/lib/web/algorithm/ed25519.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../../..":"/backend/node_modules/bare-crypto/index.js","../../../binding":"/backend/node_modules/bare-crypto/binding.js","../../errors":"/backend/node_modules/bare-crypto/lib/errors.js","../../key":"/backend/node_modules/bare-crypto/lib/key.js","../crypto-key":"/backend/node_modules/bare-crypto/lib/web/crypto-key.js"},"/backend/node_modules/bare-crypto/lib/web/algorithm/hmac.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../../..":"/backend/node_modules/bare-crypto/index.js","../../errors":"/backend/node_modules/bare-crypto/lib/errors.js","../../key":"/backend/node_modules/bare-crypto/lib/key.js","../crypto-key":"/backend/node_modules/bare-crypto/lib/web/crypto-key.js"},"/backend/node_modules/bare-crypto/lib/web/algorithm/pbkdf2.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../../..":"/backend/node_modules/bare-crypto/index.js","../../errors":"/backend/node_modules/bare-crypto/lib/errors.js","../../key":"/backend/node_modules/bare-crypto/lib/key.js","../crypto-key":"/backend/node_modules/bare-crypto/lib/web/crypto-key.js"},"/backend/node_modules/bare-crypto/lib/web/algorithm/sha.js":{"#package":"/backend/node_modules/bare-crypto/package.json","../../..":"/backend/node_modules/bare-crypto/index.js"},"/backend/node_modules/bare-crypto/lib/web/crypto-key.js":{"#package":"/backend/node_modules/bare-crypto/package.json"},"/backend/node_modules/bare-crypto/package.json":{},"/backend/node_modules/bare-crypto/web.js":{"#package":"/backend/node_modules/bare-crypto/package.json",".":"/backend/node_modules/bare-crypto/index.js","./lib/errors":"/backend/node_modules/bare-crypto/lib/errors.js","./lib/web/algorithm/ed25519":"/backend/node_modules/bare-crypto/lib/web/algorithm/ed25519.js","./lib/web/algorithm/hmac":"/backend/node_modules/bare-crypto/lib/web/algorithm/hmac.js","./lib/web/algorithm/pbkdf2":"/backend/node_modules/bare-crypto/lib/web/algorithm/pbkdf2.js","./lib/web/algorithm/sha":"/backend/node_modules/bare-crypto/lib/web/algorithm/sha.js","./lib/web/crypto-key":"/backend/node_modules/bare-crypto/lib/web/crypto-key.js"},"/backend/node_modules/bare-events/index.js":{"#package":"/backend/node_modules/bare-events/package.json","./lib/errors":"/backend/node_modules/bare-events/lib/errors.js"},"/backend/node_modules/bare-events/lib/errors.js":{"#package":"/backend/node_modules/bare-events/package.json"},"/backend/node_modules/bare-events/package.json":{},"/backend/node_modules/bare-fs/binding.js":{"#package":"/backend/node_modules/bare-fs/package.json",".":"linked:libbare-fs.4.7.4.so"},"/backend/node_modules/bare-fs/index.js":{"#package":"/backend/node_modules/bare-fs/package.json","./binding":"/backend/node_modules/bare-fs/binding.js","./lib/constants":"/backend/node_modules/bare-fs/lib/constants.js","./lib/errors":"/backend/node_modules/bare-fs/lib/errors.js","./promises":"/backend/node_modules/bare-fs/promises.js","bare-events":"/backend/node_modules/bare-events/index.js","bare-path":"/backend/node_modules/bare-path/index.js","bare-stream":"/backend/node_modules/bare-stream/index.js","bare-url":"/backend/node_modules/bare-url/index.js","fast-fifo":"/backend/node_modules/fast-fifo/index.js"},"/backend/node_modules/bare-fs/lib/constants.js":{"#package":"/backend/node_modules/bare-fs/package.json","../binding":"/backend/node_modules/bare-fs/binding.js"},"/backend/node_modules/bare-fs/lib/errors.js":{"#package":"/backend/node_modules/bare-fs/package.json","../binding":"/backend/node_modules/bare-fs/binding.js"},"/backend/node_modules/bare-fs/package.json":{},"/backend/node_modules/bare-fs/promises.js":{"#package":"/backend/node_modules/bare-fs/package.json",".":"/backend/node_modules/bare-fs/index.js","bare-events":"/backend/node_modules/bare-events/index.js"},"/backend/node_modules/bare-inspect/binding.js":{"#package":"/backend/node_modules/bare-inspect/package.json",".":"linked:libbare-inspect.3.1.4.so"},"/backend/node_modules/bare-inspect/index.js":{"#package":"/backend/node_modules/bare-inspect/package.json","./binding":"/backend/node_modules/bare-inspect/binding.js","bare-ansi-escapes":"/backend/node_modules/bare-ansi-escapes/index.js","bare-type":"/backend/node_modules/bare-type/index.js"},"/backend/node_modules/bare-inspect/package.json":{},"/backend/node_modules/bare-path/binding.js":{"#package":"/backend/node_modules/bare-path/package.json",".":"linked:libbare-path.3.1.1.so"},"/backend/node_modules/bare-path/index.js":{"#package":"/backend/node_modules/bare-path/package.json","./lib/posix":"/backend/node_modules/bare-path/lib/posix.js","./lib/win32":"/backend/node_modules/bare-path/lib/win32.js"},"/backend/node_modules/bare-path/lib/constants.js":{"#package":"/backend/node_modules/bare-path/package.json"},"/backend/node_modules/bare-path/lib/posix.js":{"#package":"/backend/node_modules/bare-path/package.json","../binding":"/backend/node_modules/bare-path/binding.js","./constants":"/backend/node_modules/bare-path/lib/constants.js","./shared":"/backend/node_modules/bare-path/lib/shared.js","./win32":"/backend/node_modules/bare-path/lib/win32.js"},"/backend/node_modules/bare-path/lib/shared.js":{"#package":"/backend/node_modules/bare-path/package.json","./constants":"/backend/node_modules/bare-path/lib/constants.js"},"/backend/node_modules/bare-path/lib/win32.js":{"#package":"/backend/node_modules/bare-path/package.json","../binding":"/backend/node_modules/bare-path/binding.js","./constants":"/backend/node_modules/bare-path/lib/constants.js","./posix":"/backend/node_modules/bare-path/lib/posix.js","./shared":"/backend/node_modules/bare-path/lib/shared.js"},"/backend/node_modules/bare-path/package.json":{},"/backend/node_modules/bare-stream/index.js":{"#package":"/backend/node_modules/bare-stream/package.json","./web":"/backend/node_modules/bare-stream/web.js","b4a":"/backend/node_modules/b4a/index.js","streamx":"/backend/node_modules/streamx/index.js"},"/backend/node_modules/bare-stream/package.json":{},"/backend/node_modules/bare-stream/web.js":{"#package":"/backend/node_modules/bare-stream/package.json","streamx":"/backend/node_modules/streamx/index.js","teex":"/backend/node_modules/teex/index.js"},"/backend/node_modules/bare-type/binding.js":{"#package":"/backend/node_modules/bare-type/package.json",".":"linked:libbare-type.1.1.0.so"},"/backend/node_modules/bare-type/index.js":{"#package":"/backend/node_modules/bare-type/package.json","./binding":"/backend/node_modules/bare-type/binding.js"},"/backend/node_modules/bare-type/package.json":{},"/backend/node_modules/bare-url/binding.js":{"#package":"/backend/node_modules/bare-url/package.json",".":"linked:libbare-url.2.4.5.so"},"/backend/node_modules/bare-url/index.js":{"#package":"/backend/node_modules/bare-url/package.json","./binding":"/backend/node_modules/bare-url/binding.js","./lib/errors":"/backend/node_modules/bare-url/lib/errors.js","./lib/url-search-params":"/backend/node_modules/bare-url/lib/url-search-params.js","bare-path":"/backend/node_modules/bare-path/index.js"},"/backend/node_modules/bare-url/lib/errors.js":{"#package":"/backend/node_modules/bare-url/package.json"},"/backend/node_modules/bare-url/lib/url-search-params.js":{"#package":"/backend/node_modules/bare-url/package.json"},"/backend/node_modules/bare-url/package.json":{},"/backend/node_modules/bits-to-bytes/index.js":{"#package":"/backend/node_modules/bits-to-bytes/package.json","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/bits-to-bytes/package.json":{},"/backend/node_modules/blind-relay/index.js":{"#package":"/backend/node_modules/blind-relay/package.json","./lib/errors":"/backend/node_modules/blind-relay/lib/errors.js","b4a":"/backend/node_modules/b4a/index.js","bits-to-bytes":"/backend/node_modules/bits-to-bytes/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js","compact-encoding-bitfield":"/backend/node_modules/compact-encoding-bitfield/index.js","events":"/backend/node_modules/bare-events/index.js","protomux":"/backend/node_modules/protomux/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js","streamx":"/backend/node_modules/streamx/index.js"},"/backend/node_modules/blind-relay/lib/errors.js":{"#package":"/backend/node_modules/blind-relay/package.json"},"/backend/node_modules/blind-relay/package.json":{},"/backend/node_modules/bogon/index.js":{"#package":"/backend/node_modules/bogon/package.json","b4a":"/backend/node_modules/b4a/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js"},"/backend/node_modules/bogon/package.json":{},"/backend/node_modules/compact-encoding-bitfield/index.js":{"#package":"/backend/node_modules/compact-encoding-bitfield/package.json","compact-encoding":"/backend/node_modules/compact-encoding/index.js"},"/backend/node_modules/compact-encoding-bitfield/package.json":{},"/backend/node_modules/compact-encoding/endian.js":{"#package":"/backend/node_modules/compact-encoding/package.json"},"/backend/node_modules/compact-encoding/index.js":{"#package":"/backend/node_modules/compact-encoding/package.json","./endian":"/backend/node_modules/compact-encoding/endian.js","./lexint":"/backend/node_modules/compact-encoding/lexint.js","./raw":"/backend/node_modules/compact-encoding/raw.js","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/compact-encoding/lexint.js":{"#package":"/backend/node_modules/compact-encoding/package.json"},"/backend/node_modules/compact-encoding/package.json":{},"/backend/node_modules/compact-encoding/raw.js":{"#package":"/backend/node_modules/compact-encoding/package.json","./endian":"/backend/node_modules/compact-encoding/endian.js","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/dht-rpc/index.js":{"#package":"/backend/node_modules/dht-rpc/package.json","./lib/commands":"/backend/node_modules/dht-rpc/lib/commands.js","./lib/errors":"/backend/node_modules/dht-rpc/lib/errors.js","./lib/health":"/backend/node_modules/dht-rpc/lib/health.js","./lib/io":"/backend/node_modules/dht-rpc/lib/io.js","./lib/peer":"/backend/node_modules/dht-rpc/lib/peer.js","./lib/query":"/backend/node_modules/dht-rpc/lib/query.js","./lib/session":"/backend/node_modules/dht-rpc/lib/session.js","b4a":"/backend/node_modules/b4a/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js","events":"/backend/node_modules/bare-events/index.js","kademlia-routing-table":"/backend/node_modules/kademlia-routing-table/index.js","nat-sampler":"/backend/node_modules/nat-sampler/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js","time-ordered-set":"/backend/node_modules/time-ordered-set/index.js","udx-native":"/backend/node_modules/udx-native/lib/udx.js"},"/backend/node_modules/dht-rpc/lib/commands.js":{"#package":"/backend/node_modules/dht-rpc/package.json"},"/backend/node_modules/dht-rpc/lib/errors.js":{"#package":"/backend/node_modules/dht-rpc/package.json"},"/backend/node_modules/dht-rpc/lib/health.js":{"#package":"/backend/node_modules/dht-rpc/package.json"},"/backend/node_modules/dht-rpc/lib/io.js":{"#package":"/backend/node_modules/dht-rpc/package.json","./errors":"/backend/node_modules/dht-rpc/lib/errors.js","./peer":"/backend/node_modules/dht-rpc/lib/peer.js","adaptive-timeout":"/backend/node_modules/adaptive-timeout/index.js","b4a":"/backend/node_modules/b4a/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js","fast-fifo":"/backend/node_modules/fast-fifo/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/dht-rpc/lib/peer.js":{"#package":"/backend/node_modules/dht-rpc/package.json","b4a":"/backend/node_modules/b4a/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/dht-rpc/lib/query.js":{"#package":"/backend/node_modules/dht-rpc/package.json","./commands":"/backend/node_modules/dht-rpc/lib/commands.js","./peer":"/backend/node_modules/dht-rpc/lib/peer.js","b4a":"/backend/node_modules/b4a/index.js","streamx":"/backend/node_modules/streamx/index.js"},"/backend/node_modules/dht-rpc/lib/session.js":{"#package":"/backend/node_modules/dht-rpc/package.json"},"/backend/node_modules/dht-rpc/package.json":{},"/backend/node_modules/events-universal/bare.js":{"#package":"/backend/node_modules/events-universal/package.json","bare-events":"/backend/node_modules/bare-events/index.js"},"/backend/node_modules/events-universal/package.json":{},"/backend/node_modules/fast-fifo/fixed-size.js":{"#package":"/backend/node_modules/fast-fifo/package.json"},"/backend/node_modules/fast-fifo/index.js":{"#package":"/backend/node_modules/fast-fifo/package.json","./fixed-size":"/backend/node_modules/fast-fifo/fixed-size.js"},"/backend/node_modules/fast-fifo/package.json":{},"/backend/node_modules/hypercore-crypto/index.js":{"#package":"/backend/node_modules/hypercore-crypto/package.json","b4a":"/backend/node_modules/b4a/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/hypercore-crypto/package.json":{},"/backend/node_modules/hypercore-id-encoding/index.js":{"#package":"/backend/node_modules/hypercore-id-encoding/package.json","b4a":"/backend/node_modules/b4a/index.js","z32":"/backend/node_modules/z32/index.js"},"/backend/node_modules/hypercore-id-encoding/package.json":{},"/backend/node_modules/hyperdht-address/index.js":{"#package":"/backend/node_modules/hyperdht-address/package.json","./spec/hyperschema":"/backend/node_modules/hyperdht-address/spec/hyperschema/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js"},"/backend/node_modules/hyperdht-address/package.json":{},"/backend/node_modules/hyperdht-address/spec/hyperschema/index.js":{"#package":"/backend/node_modules/hyperdht-address/package.json","hyperschema/runtime":"/backend/node_modules/hyperschema/runtime.cjs"},"/backend/node_modules/hyperdht/index.js":{"#package":"/backend/node_modules/hyperdht/package.json","./lib/connect":"/backend/node_modules/hyperdht/lib/connect.js","./lib/connection-pool":"/backend/node_modules/hyperdht/lib/connection-pool.js","./lib/constants":"/backend/node_modules/hyperdht/lib/constants.js","./lib/crypto":"/backend/node_modules/hyperdht/lib/crypto.js","./lib/errors":"/backend/node_modules/hyperdht/lib/errors.js","./lib/messages":"/backend/node_modules/hyperdht/lib/messages.js","./lib/persistent":"/backend/node_modules/hyperdht/lib/persistent.js","./lib/raw-stream-set":"/backend/node_modules/hyperdht/lib/raw-stream-set.js","./lib/router":"/backend/node_modules/hyperdht/lib/router.js","./lib/server":"/backend/node_modules/hyperdht/lib/server.js","./lib/socket-pool":"/backend/node_modules/hyperdht/lib/socket-pool.js","b4a":"/backend/node_modules/b4a/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js","dht-rpc":"/backend/node_modules/dht-rpc/index.js","safety-catch":"/backend/node_modules/safety-catch/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js","xache":"/backend/node_modules/xache/index.js"},"/backend/node_modules/hyperdht/lib/announcer.js":{"#package":"/backend/node_modules/hyperdht/package.json","./constants":"/backend/node_modules/hyperdht/lib/constants.js","./encode":"/backend/node_modules/hyperdht/lib/encode.js","./messages":"/backend/node_modules/hyperdht/lib/messages.js","./persistent":"/backend/node_modules/hyperdht/lib/persistent.js","./sleeper":"/backend/node_modules/hyperdht/lib/sleeper.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js","safety-catch":"/backend/node_modules/safety-catch/index.js","signal-promise":"/backend/node_modules/signal-promise/index.js"},"/backend/node_modules/hyperdht/lib/connect.js":{"#package":"/backend/node_modules/hyperdht/package.json","./constants":"/backend/node_modules/hyperdht/lib/constants.js","./crypto":"/backend/node_modules/hyperdht/lib/crypto.js","./errors":"/backend/node_modules/hyperdht/lib/errors.js","./holepuncher":"/backend/node_modules/hyperdht/lib/holepuncher.js","./noise-wrap":"/backend/node_modules/hyperdht/lib/noise-wrap.js","./relay-connection":"/backend/node_modules/hyperdht/lib/relay-connection.js","./secure-payload":"/backend/node_modules/hyperdht/lib/secure-payload.js","./semaphore":"/backend/node_modules/hyperdht/lib/semaphore.js","./sleeper":"/backend/node_modules/hyperdht/lib/sleeper.js","@hyperswarm/secret-stream":"/backend/node_modules/@hyperswarm/secret-stream/index.js","b4a":"/backend/node_modules/b4a/index.js","blind-relay":"/backend/node_modules/blind-relay/index.js","bogon":"/backend/node_modules/bogon/index.js","hypercore-id-encoding":"/backend/node_modules/hypercore-id-encoding/index.js","hyperdht-address":"/backend/node_modules/hyperdht-address/index.js","safety-catch":"/backend/node_modules/safety-catch/index.js","unslab":"/backend/node_modules/unslab/index.js"},"/backend/node_modules/hyperdht/lib/connection-pool.js":{"#package":"/backend/node_modules/hyperdht/package.json","./errors":"/backend/node_modules/hyperdht/lib/errors.js","b4a":"/backend/node_modules/b4a/index.js","events":"/backend/node_modules/bare-events/index.js"},"/backend/node_modules/hyperdht/lib/constants.js":{"#package":"/backend/node_modules/hyperdht/package.json","hypercore-crypto":"/backend/node_modules/hypercore-crypto/index.js"},"/backend/node_modules/hyperdht/lib/crypto.js":{"#package":"/backend/node_modules/hyperdht/package.json","b4a":"/backend/node_modules/b4a/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/hyperdht/lib/encode.js":{"#package":"/backend/node_modules/hyperdht/package.json","b4a":"/backend/node_modules/b4a/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js"},"/backend/node_modules/hyperdht/lib/errors.js":{"#package":"/backend/node_modules/hyperdht/package.json"},"/backend/node_modules/hyperdht/lib/holepuncher.js":{"#package":"/backend/node_modules/hyperdht/package.json","./constants":"/backend/node_modules/hyperdht/lib/constants.js","./nat":"/backend/node_modules/hyperdht/lib/nat.js","./sleeper":"/backend/node_modules/hyperdht/lib/sleeper.js","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/hyperdht/lib/messages.js":{"#package":"/backend/node_modules/hyperdht/package.json","compact-encoding":"/backend/node_modules/compact-encoding/index.js"},"/backend/node_modules/hyperdht/lib/nat.js":{"#package":"/backend/node_modules/hyperdht/package.json","../lib/constants":"/backend/node_modules/hyperdht/lib/constants.js"},"/backend/node_modules/hyperdht/lib/noise-wrap.js":{"#package":"/backend/node_modules/hyperdht/package.json","./constants":"/backend/node_modules/hyperdht/lib/constants.js","./errors":"/backend/node_modules/hyperdht/lib/errors.js","./messages":"/backend/node_modules/hyperdht/lib/messages.js","@hyperswarm/secret-stream":"/backend/node_modules/@hyperswarm/secret-stream/index.js","b4a":"/backend/node_modules/b4a/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js","noise-curve-ed":"/backend/node_modules/noise-curve-ed/index.js","noise-handshake":"/backend/node_modules/noise-handshake/noise.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/hyperdht/lib/persistent.js":{"#package":"/backend/node_modules/hyperdht/package.json","./constants":"/backend/node_modules/hyperdht/lib/constants.js","./encode":"/backend/node_modules/hyperdht/lib/encode.js","./messages":"/backend/node_modules/hyperdht/lib/messages.js","b4a":"/backend/node_modules/b4a/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js","record-cache":"/backend/node_modules/record-cache/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js","unslab":"/backend/node_modules/unslab/index.js","xache":"/backend/node_modules/xache/index.js"},"/backend/node_modules/hyperdht/lib/raw-stream-set.js":{"#package":"/backend/node_modules/hyperdht/package.json"},"/backend/node_modules/hyperdht/lib/relay-connection.js":{"#package":"/backend/node_modules/hyperdht/package.json","b4a":"/backend/node_modules/b4a/index.js","safety-catch":"/backend/node_modules/safety-catch/index.js"},"/backend/node_modules/hyperdht/lib/router.js":{"#package":"/backend/node_modules/hyperdht/package.json","./constants":"/backend/node_modules/hyperdht/lib/constants.js","./errors":"/backend/node_modules/hyperdht/lib/errors.js","./messages":"/backend/node_modules/hyperdht/lib/messages.js","b4a":"/backend/node_modules/b4a/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js","safety-catch":"/backend/node_modules/safety-catch/index.js","xache":"/backend/node_modules/xache/index.js"},"/backend/node_modules/hyperdht/lib/secure-payload.js":{"#package":"/backend/node_modules/hyperdht/package.json","./messages":"/backend/node_modules/hyperdht/lib/messages.js","b4a":"/backend/node_modules/b4a/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/hyperdht/lib/semaphore.js":{"#package":"/backend/node_modules/hyperdht/package.json"},"/backend/node_modules/hyperdht/lib/server.js":{"#package":"/backend/node_modules/hyperdht/package.json","./announcer":"/backend/node_modules/hyperdht/lib/announcer.js","./constants":"/backend/node_modules/hyperdht/lib/constants.js","./crypto":"/backend/node_modules/hyperdht/lib/crypto.js","./errors":"/backend/node_modules/hyperdht/lib/errors.js","./holepuncher":"/backend/node_modules/hyperdht/lib/holepuncher.js","./noise-wrap":"/backend/node_modules/hyperdht/lib/noise-wrap.js","./relay-connection":"/backend/node_modules/hyperdht/lib/relay-connection.js","./secure-payload":"/backend/node_modules/hyperdht/lib/secure-payload.js","@hyperswarm/secret-stream":"/backend/node_modules/@hyperswarm/secret-stream/index.js","b4a":"/backend/node_modules/b4a/index.js","blind-relay":"/backend/node_modules/blind-relay/index.js","bogon":"/backend/node_modules/bogon/index.js","events":"/backend/node_modules/bare-events/index.js","safety-catch":"/backend/node_modules/safety-catch/index.js"},"/backend/node_modules/hyperdht/lib/sleeper.js":{"#package":"/backend/node_modules/hyperdht/package.json"},"/backend/node_modules/hyperdht/lib/socket-pool.js":{"#package":"/backend/node_modules/hyperdht/package.json","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/hyperdht/package.json":{},"/backend/node_modules/hyperschema/package.json":{},"/backend/node_modules/hyperschema/runtime.cjs":{"#package":"/backend/node_modules/hyperschema/package.json","compact-encoding":"/backend/node_modules/compact-encoding/index.js"},"/backend/node_modules/hyperswarm/index.js":{"#package":"/backend/node_modules/hyperswarm/package.json","./lib/connection-set":"/backend/node_modules/hyperswarm/lib/connection-set.js","./lib/peer-discovery":"/backend/node_modules/hyperswarm/lib/peer-discovery.js","./lib/peer-info":"/backend/node_modules/hyperswarm/lib/peer-info.js","./lib/retry-timer":"/backend/node_modules/hyperswarm/lib/retry-timer.js","b4a":"/backend/node_modules/b4a/index.js","events":"/backend/node_modules/bare-events/index.js","hyperdht":"/backend/node_modules/hyperdht/index.js","shuffled-priority-queue":"/backend/node_modules/shuffled-priority-queue/index.js","streamx":"/backend/node_modules/streamx/index.js","unslab":"/backend/node_modules/unslab/index.js"},"/backend/node_modules/hyperswarm/lib/bulk-timer.js":{"#package":"/backend/node_modules/hyperswarm/package.json"},"/backend/node_modules/hyperswarm/lib/connection-set.js":{"#package":"/backend/node_modules/hyperswarm/package.json","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/hyperswarm/lib/peer-discovery.js":{"#package":"/backend/node_modules/hyperswarm/package.json","b4a":"/backend/node_modules/b4a/index.js","safety-catch":"/backend/node_modules/safety-catch/index.js"},"/backend/node_modules/hyperswarm/lib/peer-info.js":{"#package":"/backend/node_modules/hyperswarm/package.json","b4a":"/backend/node_modules/b4a/index.js","events":"/backend/node_modules/bare-events/index.js","unslab":"/backend/node_modules/unslab/index.js"},"/backend/node_modules/hyperswarm/lib/retry-timer.js":{"#package":"/backend/node_modules/hyperswarm/package.json","./bulk-timer":"/backend/node_modules/hyperswarm/lib/bulk-timer.js"},"/backend/node_modules/hyperswarm/package.json":{},"/backend/node_modules/kademlia-routing-table/index.js":{"#package":"/backend/node_modules/kademlia-routing-table/package.json","events":"/backend/node_modules/bare-events/index.js"},"/backend/node_modules/kademlia-routing-table/package.json":{},"/backend/node_modules/nanoassert/index.js":{"#package":"/backend/node_modules/nanoassert/package.json"},"/backend/node_modules/nanoassert/package.json":{},"/backend/node_modules/nat-sampler/index.js":{"#package":"/backend/node_modules/nat-sampler/package.json"},"/backend/node_modules/nat-sampler/package.json":{},"/backend/node_modules/noise-curve-ed/index.js":{"#package":"/backend/node_modules/noise-curve-ed/package.json","b4a":"/backend/node_modules/b4a/index.js","nanoassert":"/backend/node_modules/nanoassert/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/noise-curve-ed/package.json":{},"/backend/node_modules/noise-handshake/cipher.js":{"#package":"/backend/node_modules/noise-handshake/package.json","b4a":"/backend/node_modules/b4a/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/noise-handshake/dh.js":{"#package":"/backend/node_modules/noise-handshake/package.json","b4a":"/backend/node_modules/b4a/index.js","nanoassert":"/backend/node_modules/nanoassert/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/noise-handshake/hkdf.js":{"#package":"/backend/node_modules/noise-handshake/package.json","./hmac":"/backend/node_modules/noise-handshake/hmac.js","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/noise-handshake/hmac.js":{"#package":"/backend/node_modules/noise-handshake/package.json","b4a":"/backend/node_modules/b4a/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/noise-handshake/noise.js":{"#package":"/backend/node_modules/noise-handshake/package.json","./hkdf":"/backend/node_modules/noise-handshake/hkdf.js","./symmetric-state":"/backend/node_modules/noise-handshake/symmetric-state.js","b4a":"/backend/node_modules/b4a/index.js","nanoassert":"/backend/node_modules/nanoassert/index.js"},"/backend/node_modules/noise-handshake/package.json":{},"/backend/node_modules/noise-handshake/symmetric-state.js":{"#package":"/backend/node_modules/noise-handshake/package.json","./cipher":"/backend/node_modules/noise-handshake/cipher.js","./dh":"/backend/node_modules/noise-handshake/dh.js","./hkdf":"/backend/node_modules/noise-handshake/hkdf.js","b4a":"/backend/node_modules/b4a/index.js","nanoassert":"/backend/node_modules/nanoassert/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/protomux/index.js":{"#package":"/backend/node_modules/protomux/package.json","b4a":"/backend/node_modules/b4a/index.js","compact-encoding":"/backend/node_modules/compact-encoding/index.js","queue-tick":"/backend/node_modules/queue-tick/process-next-tick.js","safety-catch":"/backend/node_modules/safety-catch/index.js","unslab":"/backend/node_modules/unslab/index.js"},"/backend/node_modules/protomux/package.json":{},"/backend/node_modules/queue-tick/package.json":{},"/backend/node_modules/queue-tick/process-next-tick.js":{"#package":"/backend/node_modules/queue-tick/package.json","./queue-microtask":"/backend/node_modules/queue-tick/queue-microtask.js"},"/backend/node_modules/queue-tick/queue-microtask.js":{"#package":"/backend/node_modules/queue-tick/package.json"},"/backend/node_modules/record-cache/index.js":{"#package":"/backend/node_modules/record-cache/package.json","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/record-cache/package.json":{},"/backend/node_modules/require-addon/lib/bare.js":{"#package":"/backend/node_modules/require-addon/package.json"},"/backend/node_modules/require-addon/package.json":{},"/backend/node_modules/safety-catch/index.js":{"#package":"/backend/node_modules/safety-catch/package.json"},"/backend/node_modules/safety-catch/package.json":{},"/backend/node_modules/scrypt-js/package.json":{},"/backend/node_modules/scrypt-js/scrypt.js":{"#package":"/backend/node_modules/scrypt-js/package.json"},"/backend/node_modules/shuffled-priority-queue/index.js":{"#package":"/backend/node_modules/shuffled-priority-queue/package.json","unordered-set":"/backend/node_modules/unordered-set/index.js"},"/backend/node_modules/shuffled-priority-queue/package.json":{},"/backend/node_modules/signal-promise/index.js":{"#package":"/backend/node_modules/signal-promise/package.json"},"/backend/node_modules/signal-promise/package.json":{},"/backend/node_modules/sodium-native/binding.js":{"#package":"/backend/node_modules/sodium-native/package.json",".":"linked:libsodium-native.5.1.0.so","require-addon":"/backend/node_modules/require-addon/lib/bare.js"},"/backend/node_modules/sodium-native/index.js":{"#package":"/backend/node_modules/sodium-native/package.json","./binding":"/backend/node_modules/sodium-native/binding.js","assert":"/backend/node_modules/bare-assert/index.js","which-runtime":"/backend/node_modules/which-runtime/index.js"},"/backend/node_modules/sodium-native/package.json":{},"/backend/node_modules/sodium-secretstream/index.js":{"#package":"/backend/node_modules/sodium-secretstream/package.json","b4a":"/backend/node_modules/b4a/index.js","sodium-universal":"/backend/node_modules/sodium-universal/index.js"},"/backend/node_modules/sodium-secretstream/package.json":{},"/backend/node_modules/sodium-universal/index.js":{"#package":"/backend/node_modules/sodium-universal/package.json","sodium-native":"/backend/node_modules/sodium-native/index.js"},"/backend/node_modules/sodium-universal/package.json":{},"/backend/node_modules/streamx/index.js":{"#package":"/backend/node_modules/streamx/package.json","./lib/errors.js":"/backend/node_modules/streamx/lib/errors.js","events-universal":"/backend/node_modules/events-universal/bare.js","fast-fifo":"/backend/node_modules/fast-fifo/index.js","text-decoder":"/backend/node_modules/text-decoder/index.js"},"/backend/node_modules/streamx/lib/errors.js":{"#package":"/backend/node_modules/streamx/package.json"},"/backend/node_modules/streamx/package.json":{},"/backend/node_modules/teex/index.js":{"#package":"/backend/node_modules/teex/package.json","streamx":"/backend/node_modules/streamx/index.js"},"/backend/node_modules/teex/package.json":{},"/backend/node_modules/text-decoder/index.js":{"#package":"/backend/node_modules/text-decoder/package.json","./lib/pass-through-decoder":"/backend/node_modules/text-decoder/lib/pass-through-decoder.js","./lib/utf8-decoder":"/backend/node_modules/text-decoder/lib/utf8-decoder.js"},"/backend/node_modules/text-decoder/lib/pass-through-decoder.js":{"#package":"/backend/node_modules/text-decoder/package.json","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/text-decoder/lib/utf8-decoder.js":{"#package":"/backend/node_modules/text-decoder/package.json","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/text-decoder/package.json":{},"/backend/node_modules/time-ordered-set/index.js":{"#package":"/backend/node_modules/time-ordered-set/package.json"},"/backend/node_modules/time-ordered-set/package.json":{},"/backend/node_modules/timeout-refresh/browser.js":{"#package":"/backend/node_modules/timeout-refresh/package.json"},"/backend/node_modules/timeout-refresh/index.js":{"#package":"/backend/node_modules/timeout-refresh/package.json","./browser":"/backend/node_modules/timeout-refresh/browser.js","./node":"/backend/node_modules/timeout-refresh/node.js"},"/backend/node_modules/timeout-refresh/node.js":{"#package":"/backend/node_modules/timeout-refresh/package.json"},"/backend/node_modules/timeout-refresh/package.json":{},"/backend/node_modules/udx-native/binding.js":{"#package":"/backend/node_modules/udx-native/package.json",".":"linked:libudx-native.1.20.7.so","require-addon":"/backend/node_modules/require-addon/lib/bare.js"},"/backend/node_modules/udx-native/lib/ip.js":{"#package":"/backend/node_modules/udx-native/package.json"},"/backend/node_modules/udx-native/lib/network-interfaces.js":{"#package":"/backend/node_modules/udx-native/package.json","../binding":"/backend/node_modules/udx-native/binding.js","b4a":"/backend/node_modules/b4a/index.js","events":"/backend/node_modules/bare-events/index.js"},"/backend/node_modules/udx-native/lib/socket.js":{"#package":"/backend/node_modules/udx-native/package.json","../binding":"/backend/node_modules/udx-native/binding.js","./ip":"/backend/node_modules/udx-native/lib/ip.js","b4a":"/backend/node_modules/b4a/index.js","events":"/backend/node_modules/bare-events/index.js"},"/backend/node_modules/udx-native/lib/stream.js":{"#package":"/backend/node_modules/udx-native/package.json","../binding":"/backend/node_modules/udx-native/binding.js","./ip":"/backend/node_modules/udx-native/lib/ip.js","b4a":"/backend/node_modules/b4a/index.js","streamx":"/backend/node_modules/streamx/index.js"},"/backend/node_modules/udx-native/lib/udx.js":{"#package":"/backend/node_modules/udx-native/package.json","../binding":"/backend/node_modules/udx-native/binding.js","./ip":"/backend/node_modules/udx-native/lib/ip.js","./network-interfaces":"/backend/node_modules/udx-native/lib/network-interfaces.js","./socket":"/backend/node_modules/udx-native/lib/socket.js","./stream":"/backend/node_modules/udx-native/lib/stream.js","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/udx-native/package.json":{},"/backend/node_modules/unordered-set/index.js":{"#package":"/backend/node_modules/unordered-set/package.json"},"/backend/node_modules/unordered-set/package.json":{},"/backend/node_modules/unslab/index.js":{"#package":"/backend/node_modules/unslab/package.json","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/unslab/package.json":{},"/backend/node_modules/which-runtime/index.js":{"#package":"/backend/node_modules/which-runtime/package.json"},"/backend/node_modules/which-runtime/package.json":{},"/backend/node_modules/xache/index.js":{"#package":"/backend/node_modules/xache/package.json"},"/backend/node_modules/xache/package.json":{},"/backend/node_modules/z32/index.js":{"#package":"/backend/node_modules/z32/package.json","b4a":"/backend/node_modules/b4a/index.js"},"/backend/node_modules/z32/package.json":{},"/backend/p2p.js":{"#package":"/backend/package.json","./framing":"/backend/framing.js","./mailcrypto":"/backend/mailcrypto.js","./media":"/backend/media.js","events":"/backend/node_modules/bare-events/index.js","fs":"/backend/node_modules/bare-fs/index.js","hyperswarm":"/backend/node_modules/hyperswarm/index.js"},"/backend/package.json":{},"/backend/ratchet.js":{"#package":"/backend/package.json","./hkdf":"/backend/hkdf.js","crypto":"/backend/node_modules/bare-crypto/index.js","sodium-native":"/backend/node_modules/sodium-native/index.js"},"/backend/safety.js":{"#package":"/backend/package.json","crypto":"/backend/node_modules/bare-crypto/index.js"},"/backend/store.js":{"#package":"/backend/package.json","./vault":"/backend/vault.js","crypto":"/backend/node_modules/bare-crypto/index.js","fs":"/backend/node_modules/bare-fs/index.js","path":"/backend/node_modules/bare-path/index.js"},"/backend/vault.js":{"#package":"/backend/package.json","crypto":"/backend/node_modules/bare-crypto/index.js","scrypt-js":"/backend/node_modules/scrypt-js/scrypt.js"},"/backend/worklet.js":{"#package":"/backend/package.json","./identity":"/backend/identity.js","./mailcrypto":"/backend/mailcrypto.js","./media":"/backend/media.js","./p2p":"/backend/p2p.js","./ratchet":"/backend/ratchet.js","./safety":"/backend/safety.js","./store":"/backend/store.js","b4a":"/backend/node_modules/b4a/index.js","crypto":"/backend/node_modules/bare-crypto/index.js","path":"/backend/node_modules/bare-path/index.js"}},"addons":["linked:libbare-crypto.1.15.3.so","linked:libbare-fs.4.7.4.so","linked:libbare-inspect.3.1.4.so","linked:libbare-path.3.1.1.so","linked:libbare-type.1.1.0.so","linked:libbare-url.2.4.5.so","linked:libsodium-native.5.1.0.so","linked:libudx-native.1.20.7.so"],"assets":[],"files":{"/backend/framing.js":{"offset":0,"length":1430,"mode":420},"/backend/hkdf.js":{"offset":1430,"length":726,"mode":420},"/backend/identity.js":{"offset":2156,"length":1321,"mode":420},"/backend/mailcrypto.js":{"offset":3477,"length":2064,"mode":420},"/backend/media.js":{"offset":5541,"length":5562,"mode":420},"/backend/node_modules/@hyperswarm/secret-stream/index.js":{"offset":11103,"length":16722,"mode":420},"/backend/node_modules/@hyperswarm/secret-stream/lib/bridge.js":{"offset":27825,"length":1273,"mode":420},"/backend/node_modules/@hyperswarm/secret-stream/lib/handshake.js":{"offset":29098,"length":1950,"mode":420},"/backend/node_modules/@hyperswarm/secret-stream/package.json":{"offset":31048,"length":1132,"mode":420},"/backend/node_modules/adaptive-timeout/index.js":{"offset":32180,"length":2424,"mode":420},"/backend/node_modules/adaptive-timeout/package.json":{"offset":34604,"length":972,"mode":420},"/backend/node_modules/b4a/index.js":{"offset":35576,"length":4054,"mode":420},"/backend/node_modules/b4a/package.json":{"offset":39630,"length":1245,"mode":420},"/backend/node_modules/bare-ansi-escapes/index.js":{"offset":40875,"length":2255,"mode":420},"/backend/node_modules/bare-ansi-escapes/package.json":{"offset":43130,"length":1178,"mode":420},"/backend/node_modules/bare-assert/index.js":{"offset":44308,"length":2192,"mode":420},"/backend/node_modules/bare-assert/package.json":{"offset":46500,"length":835,"mode":420},"/backend/node_modules/bare-crypto/binding.js":{"offset":47335,"length":33,"mode":420},"/backend/node_modules/bare-crypto/index.js":{"offset":47368,"length":1706,"mode":420},"/backend/node_modules/bare-crypto/lib/cipher.js":{"offset":49074,"length":8357,"mode":420},"/backend/node_modules/bare-crypto/lib/constants.js":{"offset":57431,"length":2504,"mode":420},"/backend/node_modules/bare-crypto/lib/errors.js":{"offset":59935,"length":957,"mode":420},"/backend/node_modules/bare-crypto/lib/hash.js":{"offset":60892,"length":2121,"mode":420},"/backend/node_modules/bare-crypto/lib/hmac.js":{"offset":63013,"length":1311,"mode":420},"/backend/node_modules/bare-crypto/lib/key.js":{"offset":64324,"length":2535,"mode":420},"/backend/node_modules/bare-crypto/lib/pbkdf2.js":{"offset":66859,"length":1059,"mode":420},"/backend/node_modules/bare-crypto/lib/random.js":{"offset":67918,"length":2014,"mode":420},"/backend/node_modules/bare-crypto/lib/signature.js":{"offset":69932,"length":1369,"mode":420},"/backend/node_modules/bare-crypto/lib/timing.js":{"offset":71301,"length":660,"mode":420},"/backend/node_modules/bare-crypto/lib/web/algorithm/ed25519.js":{"offset":71961,"length":7039,"mode":420},"/backend/node_modules/bare-crypto/lib/web/algorithm/hmac.js":{"offset":79000,"length":5356,"mode":420},"/backend/node_modules/bare-crypto/lib/web/algorithm/pbkdf2.js":{"offset":84356,"length":1563,"mode":420},"/backend/node_modules/bare-crypto/lib/web/algorithm/sha.js":{"offset":85919,"length":299,"mode":420},"/backend/node_modules/bare-crypto/lib/web/crypto-key.js":{"offset":86218,"length":1185,"mode":420},"/backend/node_modules/bare-crypto/package.json":{"offset":87403,"length":1618,"mode":420},"/backend/node_modules/bare-crypto/web.js":{"offset":89021,"length":7537,"mode":420},"/backend/node_modules/bare-events/index.js":{"offset":96558,"length":8307,"mode":420},"/backend/node_modules/bare-events/lib/errors.js":{"offset":104865,"length":671,"mode":420},"/backend/node_modules/bare-events/package.json":{"offset":105536,"length":1504,"mode":420},"/backend/node_modules/bare-fs/binding.js":{"offset":107040,"length":33,"mode":420},"/backend/node_modules/bare-fs/index.js":{"offset":107073,"length":58907,"mode":420},"/backend/node_modules/bare-fs/lib/constants.js":{"offset":165980,"length":1494,"mode":420},"/backend/node_modules/bare-fs/lib/errors.js":{"offset":167474,"length":1166,"mode":420},"/backend/node_modules/bare-fs/package.json":{"offset":168640,"length":1654,"mode":420},"/backend/node_modules/bare-fs/promises.js":{"offset":170294,"length":2401,"mode":420},"/backend/node_modules/bare-inspect/binding.js":{"offset":172695,"length":33,"mode":420},"/backend/node_modules/bare-inspect/index.js":{"offset":172728,"length":23856,"mode":420},"/backend/node_modules/bare-inspect/package.json":{"offset":196584,"length":1041,"mode":420},"/backend/node_modules/bare-path/binding.js":{"offset":197625,"length":33,"mode":420},"/backend/node_modules/bare-path/index.js":{"offset":197658,"length":287,"mode":420},"/backend/node_modules/bare-path/lib/constants.js":{"offset":197945,"length":247,"mode":420},"/backend/node_modules/bare-path/lib/posix.js":{"offset":198192,"length":6399,"mode":420},"/backend/node_modules/bare-path/lib/shared.js":{"offset":204591,"length":2148,"mode":420},"/backend/node_modules/bare-path/lib/win32.js":{"offset":206739,"length":13987,"mode":420},"/backend/node_modules/bare-path/package.json":{"offset":220726,"length":1106,"mode":420},"/backend/node_modules/bare-stream/index.js":{"offset":221832,"length":10904,"mode":420},"/backend/node_modules/bare-stream/package.json":{"offset":232736,"length":1676,"mode":420},"/backend/node_modules/bare-stream/web.js":{"offset":234412,"length":13980,"mode":420},"/backend/node_modules/bare-type/binding.js":{"offset":248392,"length":33,"mode":420},"/backend/node_modules/bare-type/index.js":{"offset":248425,"length":4566,"mode":420},"/backend/node_modules/bare-type/package.json":{"offset":252991,"length":938,"mode":420},"/backend/node_modules/bare-url/binding.js":{"offset":253929,"length":33,"mode":420},"/backend/node_modules/bare-url/index.js":{"offset":253962,"length":9449,"mode":420},"/backend/node_modules/bare-url/lib/errors.js":{"offset":263411,"length":778,"mode":420},"/backend/node_modules/bare-url/lib/url-search-params.js":{"offset":264189,"length":4331,"mode":420},"/backend/node_modules/bare-url/package.json":{"offset":268520,"length":1219,"mode":420},"/backend/node_modules/bits-to-bytes/index.js":{"offset":269739,"length":3083,"mode":420},"/backend/node_modules/bits-to-bytes/package.json":{"offset":272822,"length":708,"mode":420},"/backend/node_modules/blind-relay/index.js":{"offset":273530,"length":13411,"mode":420},"/backend/node_modules/blind-relay/lib/errors.js":{"offset":286941,"length":1036,"mode":420},"/backend/node_modules/blind-relay/package.json":{"offset":287977,"length":1231,"mode":420},"/backend/node_modules/bogon/index.js":{"offset":289208,"length":4004,"mode":420},"/backend/node_modules/bogon/package.json":{"offset":293212,"length":656,"mode":420},"/backend/node_modules/compact-encoding-bitfield/index.js":{"offset":293868,"length":1967,"mode":420},"/backend/node_modules/compact-encoding-bitfield/package.json":{"offset":295835,"length":1109,"mode":420},"/backend/node_modules/compact-encoding/endian.js":{"offset":296944,"length":105,"mode":420},"/backend/node_modules/compact-encoding/index.js":{"offset":297049,"length":26406,"mode":420},"/backend/node_modules/compact-encoding/lexint.js":{"offset":323455,"length":2851,"mode":420},"/backend/node_modules/compact-encoding/package.json":{"offset":326306,"length":866,"mode":420},"/backend/node_modules/compact-encoding/raw.js":{"offset":327172,"length":3977,"mode":420},"/backend/node_modules/dht-rpc/index.js":{"offset":331149,"length":29079,"mode":420},"/backend/node_modules/dht-rpc/lib/commands.js":{"offset":360228,"length":107,"mode":420},"/backend/node_modules/dht-rpc/lib/errors.js":{"offset":360335,"length":719,"mode":420},"/backend/node_modules/dht-rpc/lib/health.js":{"offset":361054,"length":2998,"mode":420},"/backend/node_modules/dht-rpc/lib/io.js":{"offset":364052,"length":16605,"mode":420},"/backend/node_modules/dht-rpc/lib/peer.js":{"offset":380657,"length":583,"mode":420},"/backend/node_modules/dht-rpc/lib/query.js":{"offset":381240,"length":9899,"mode":420},"/backend/node_modules/dht-rpc/lib/session.js":{"offset":391139,"length":1103,"mode":420},"/backend/node_modules/dht-rpc/package.json":{"offset":392242,"length":1396,"mode":420},"/backend/node_modules/events-universal/bare.js":{"offset":393638,"length":40,"mode":420},"/backend/node_modules/events-universal/package.json":{"offset":393678,"length":908,"mode":420},"/backend/node_modules/fast-fifo/fixed-size.js":{"offset":394586,"length":875,"mode":420},"/backend/node_modules/fast-fifo/index.js":{"offset":395461,"length":972,"mode":420},"/backend/node_modules/fast-fifo/package.json":{"offset":396433,"length":682,"mode":420},"/backend/node_modules/hypercore-crypto/index.js":{"offset":397115,"length":5031,"mode":420},"/backend/node_modules/hypercore-crypto/package.json":{"offset":402146,"length":1007,"mode":420},"/backend/node_modules/hypercore-id-encoding/index.js":{"offset":403153,"length":923,"mode":420},"/backend/node_modules/hypercore-id-encoding/package.json":{"offset":404076,"length":799,"mode":420},"/backend/node_modules/hyperdht-address/index.js":{"offset":404875,"length":357,"mode":420},"/backend/node_modules/hyperdht-address/package.json":{"offset":405232,"length":1046,"mode":420},"/backend/node_modules/hyperdht-address/spec/hyperschema/index.js":{"offset":406278,"length":2106,"mode":420},"/backend/node_modules/hyperdht/index.js":{"offset":408384,"length":16589,"mode":420},"/backend/node_modules/hyperdht/lib/announcer.js":{"offset":424973,"length":7533,"mode":420},"/backend/node_modules/hyperdht/lib/connect.js":{"offset":432506,"length":25203,"mode":420},"/backend/node_modules/hyperdht/lib/connection-pool.js":{"offset":457709,"length":3050,"mode":420},"/backend/node_modules/hyperdht/lib/constants.js":{"offset":460759,"length":1178,"mode":420},"/backend/node_modules/hyperdht/lib/crypto.js":{"offset":461937,"length":632,"mode":420},"/backend/node_modules/hyperdht/lib/encode.js":{"offset":462569,"length":446,"mode":420},"/backend/node_modules/hyperdht/lib/errors.js":{"offset":463015,"length":3713,"mode":420},"/backend/node_modules/hyperdht/lib/holepuncher.js":{"offset":466728,"length":10003,"mode":420},"/backend/node_modules/hyperdht/lib/messages.js":{"offset":476731,"length":12057,"mode":420},"/backend/node_modules/hyperdht/lib/nat.js":{"offset":488788,"length":4714,"mode":420},"/backend/node_modules/hyperdht/lib/noise-wrap.js":{"offset":493502,"length":1669,"mode":420},"/backend/node_modules/hyperdht/lib/persistent.js":{"offset":495171,"length":8361,"mode":420},"/backend/node_modules/hyperdht/lib/raw-stream-set.js":{"offset":503532,"length":1511,"mode":420},"/backend/node_modules/hyperdht/lib/relay-connection.js":{"offset":505043,"length":2062,"mode":420},"/backend/node_modules/hyperdht/lib/router.js":{"offset":507105,"length":6978,"mode":420},"/backend/node_modules/hyperdht/lib/secure-payload.js":{"offset":514083,"length":1491,"mode":420},"/backend/node_modules/hyperdht/lib/semaphore.js":{"offset":515574,"length":1577,"mode":420},"/backend/node_modules/hyperdht/lib/server.js":{"offset":517151,"length":22065,"mode":420},"/backend/node_modules/hyperdht/lib/sleeper.js":{"offset":539216,"length":690,"mode":420},"/backend/node_modules/hyperdht/lib/socket-pool.js":{"offset":539906,"length":4343,"mode":420},"/backend/node_modules/hyperdht/package.json":{"offset":544249,"length":2007,"mode":420},"/backend/node_modules/hyperschema/package.json":{"offset":546256,"length":1555,"mode":420},"/backend/node_modules/hyperschema/runtime.cjs":{"offset":547811,"length":54,"mode":420},"/backend/node_modules/hyperswarm/index.js":{"offset":547865,"length":18589,"mode":420},"/backend/node_modules/hyperswarm/lib/bulk-timer.js":{"offset":566454,"length":728,"mode":420},"/backend/node_modules/hyperswarm/lib/connection-set.js":{"offset":567182,"length":823,"mode":420},"/backend/node_modules/hyperswarm/lib/peer-discovery.js":{"offset":568005,"length":9296,"mode":420},"/backend/node_modules/hyperswarm/lib/peer-info.js":{"offset":577301,"length":2688,"mode":420},"/backend/node_modules/hyperswarm/lib/retry-timer.js":{"offset":579989,"length":1889,"mode":420},"/backend/node_modules/hyperswarm/package.json":{"offset":581878,"length":1515,"mode":420},"/backend/node_modules/kademlia-routing-table/index.js":{"offset":583393,"length":4145,"mode":420},"/backend/node_modules/kademlia-routing-table/package.json":{"offset":587538,"length":967,"mode":420},"/backend/node_modules/nanoassert/index.js":{"offset":588505,"length":438,"mode":420},"/backend/node_modules/nanoassert/package.json":{"offset":588943,"length":647,"mode":420},"/backend/node_modules/nat-sampler/index.js":{"offset":589590,"length":1550,"mode":420},"/backend/node_modules/nat-sampler/package.json":{"offset":591140,"length":608,"mode":420},"/backend/node_modules/noise-curve-ed/index.js":{"offset":591748,"length":1642,"mode":420},"/backend/node_modules/noise-curve-ed/package.json":{"offset":593390,"length":808,"mode":420},"/backend/node_modules/noise-handshake/cipher.js":{"offset":594198,"length":2817,"mode":420},"/backend/node_modules/noise-handshake/dh.js":{"offset":597015,"length":1439,"mode":420},"/backend/node_modules/noise-handshake/hkdf.js":{"offset":598454,"length":1092,"mode":420},"/backend/node_modules/noise-handshake/hmac.js":{"offset":599546,"length":1273,"mode":420},"/backend/node_modules/noise-handshake/noise.js":{"offset":600819,"length":6437,"mode":420},"/backend/node_modules/noise-handshake/package.json":{"offset":607256,"length":638,"mode":420},"/backend/node_modules/noise-handshake/symmetric-state.js":{"offset":607894,"length":2206,"mode":420},"/backend/node_modules/protomux/index.js":{"offset":610100,"length":19741,"mode":420},"/backend/node_modules/protomux/package.json":{"offset":629841,"length":1059,"mode":420},"/backend/node_modules/queue-tick/package.json":{"offset":630900,"length":669,"mode":420},"/backend/node_modules/queue-tick/process-next-tick.js":{"offset":631569,"length":160,"mode":420},"/backend/node_modules/queue-tick/queue-microtask.js":{"offset":631729,"length":108,"mode":420},"/backend/node_modules/record-cache/index.js":{"offset":631837,"length":3668,"mode":420},"/backend/node_modules/record-cache/package.json":{"offset":635505,"length":612,"mode":420},"/backend/node_modules/require-addon/lib/bare.js":{"offset":636117,"length":45,"mode":420},"/backend/node_modules/require-addon/package.json":{"offset":636162,"length":1449,"mode":420},"/backend/node_modules/safety-catch/index.js":{"offset":637611,"length":543,"mode":420},"/backend/node_modules/safety-catch/package.json":{"offset":638154,"length":547,"mode":420},"/backend/node_modules/scrypt-js/package.json":{"offset":638701,"length":579,"mode":420},"/backend/node_modules/scrypt-js/scrypt.js":{"offset":639280,"length":17811,"mode":420},"/backend/node_modules/shuffled-priority-queue/index.js":{"offset":657091,"length":2607,"mode":420},"/backend/node_modules/shuffled-priority-queue/package.json":{"offset":659698,"length":691,"mode":420},"/backend/node_modules/signal-promise/index.js":{"offset":660389,"length":1252,"mode":420},"/backend/node_modules/signal-promise/package.json":{"offset":661641,"length":503,"mode":420},"/backend/node_modules/sodium-native/binding.js":{"offset":662144,"length":89,"mode":420},"/backend/node_modules/sodium-native/index.js":{"offset":662233,"length":107894,"mode":420},"/backend/node_modules/sodium-native/package.json":{"offset":770127,"length":1478,"mode":420},"/backend/node_modules/sodium-secretstream/index.js":{"offset":771605,"length":2257,"mode":420},"/backend/node_modules/sodium-secretstream/package.json":{"offset":773862,"length":657,"mode":420},"/backend/node_modules/sodium-universal/index.js":{"offset":774519,"length":42,"mode":420},"/backend/node_modules/sodium-universal/package.json":{"offset":774561,"length":1217,"mode":420},"/backend/node_modules/streamx/index.js":{"offset":775778,"length":34248,"mode":420},"/backend/node_modules/streamx/lib/errors.js":{"offset":810026,"length":1096,"mode":420},"/backend/node_modules/streamx/package.json":{"offset":811122,"length":1225,"mode":420},"/backend/node_modules/teex/index.js":{"offset":812347,"length":1107,"mode":420},"/backend/node_modules/teex/package.json":{"offset":813454,"length":608,"mode":420},"/backend/node_modules/text-decoder/index.js":{"offset":814062,"length":1371,"mode":420},"/backend/node_modules/text-decoder/lib/pass-through-decoder.js":{"offset":815433,"length":269,"mode":420},"/backend/node_modules/text-decoder/lib/utf8-decoder.js":{"offset":815702,"length":4429,"mode":420},"/backend/node_modules/text-decoder/package.json":{"offset":820131,"length":990,"mode":420},"/backend/node_modules/time-ordered-set/index.js":{"offset":821121,"length":1444,"mode":420},"/backend/node_modules/time-ordered-set/package.json":{"offset":822565,"length":666,"mode":420},"/backend/node_modules/timeout-refresh/browser.js":{"offset":823231,"length":1098,"mode":420},"/backend/node_modules/timeout-refresh/index.js":{"offset":824329,"length":184,"mode":420},"/backend/node_modules/timeout-refresh/node.js":{"offset":824513,"length":928,"mode":420},"/backend/node_modules/timeout-refresh/package.json":{"offset":825441,"length":619,"mode":420},"/backend/node_modules/udx-native/binding.js":{"offset":826060,"length":90,"mode":420},"/backend/node_modules/udx-native/lib/ip.js":{"offset":826150,"length":2204,"mode":420},"/backend/node_modules/udx-native/lib/network-interfaces.js":{"offset":828354,"length":1341,"mode":420},"/backend/node_modules/udx-native/lib/socket.js":{"offset":829695,"length":7557,"mode":420},"/backend/node_modules/udx-native/lib/stream.js":{"offset":837252,"length":13050,"mode":420},"/backend/node_modules/udx-native/lib/udx.js":{"offset":850302,"length":2868,"mode":420},"/backend/node_modules/udx-native/package.json":{"offset":853170,"length":1665,"mode":420},"/backend/node_modules/unordered-set/index.js":{"offset":854835,"length":677,"mode":420},"/backend/node_modules/unordered-set/package.json":{"offset":855512,"length":654,"mode":420},"/backend/node_modules/unslab/index.js":{"offset":856166,"length":913,"mode":420},"/backend/node_modules/unslab/package.json":{"offset":857079,"length":613,"mode":420},"/backend/node_modules/which-runtime/index.js":{"offset":857692,"length":1469,"mode":420},"/backend/node_modules/which-runtime/package.json":{"offset":859161,"length":863,"mode":420},"/backend/node_modules/xache/index.js":{"offset":860024,"length":2477,"mode":420},"/backend/node_modules/xache/package.json":{"offset":862501,"length":672,"mode":420},"/backend/node_modules/z32/index.js":{"offset":863173,"length":2654,"mode":420},"/backend/node_modules/z32/package.json":{"offset":865827,"length":701,"mode":420},"/backend/p2p.js":{"offset":866528,"length":17161,"mode":420},"/backend/package.json":{"offset":883689,"length":824,"mode":420},"/backend/ratchet.js":{"offset":884513,"length":8189,"mode":420},"/backend/safety.js":{"offset":892702,"length":1643,"mode":420},"/backend/store.js":{"offset":894345,"length":6235,"mode":420},"/backend/vault.js":{"offset":900580,"length":2027,"mode":420},"/backend/worklet.js":{"offset":902607,"length":45132,"mode":420}}}
'use strict'
// 在 Noise 加密的位元組串流上做訊息分框。
// 每一框：4 bytes 大端長度 + 該長度的 UTF-8 JSON。
// 這樣對方收到的不是裸位元組流，而是一則則完整 JSON 物件。

const MAX_FRAME = 8 * 1024 * 1024 // 單框上限 8MB，避免惡意超大框撐爆記憶體

function encode (obj) {
  const json = Buffer.from(JSON.stringify(obj), 'utf8')
  const header = Buffer.allocUnsafe(4)
  header.writeUInt32BE(json.length, 0)
  return Buffer.concat([header, json])
}

// 增量解碼器：餵入任意切片，吐出完整物件。
class Decoder {
  constructor (onMessage, onError) {
    this._buf = Buffer.alloc(0)
    this._onMessage = onMessage
    this._onError = onError || (() => {})
  }

  push (chunk) {
    this._buf = this._buf.length ? Buffer.concat([this._buf, chunk]) : chunk
    while (this._buf.length >= 4) {
      const len = this._buf.readUInt32BE(0)
      if (len > MAX_FRAME) {
        this._onError(new Error('frame too large: ' + len))
        this._buf = Buffer.alloc(0)
        return
      }
      if (this._buf.length < 4 + len) break // 框還沒收齊，等下一片
      const body = this._buf.subarray(4, 4 + len)
      this._buf = this._buf.subarray(4 + len)
      try {
        this._onMessage(JSON.parse(body.toString('utf8')))
      } catch (err) {
        this._onError(err)
      }
    }
  }
}

module.exports = { encode, Decoder, MAX_FRAME }
'use strict'
// Node 的 crypto.hkdfSync 在 Bare 沒有；用 HMAC 自行實作 RFC5869（extract + expand）。
// 已驗證輸出與 Node crypto.hkdfSync 完全一致 -> 手機與桌面的棘輪金鑰推導相同。
const { createHmac } = require('crypto')
function hkdfSync (digest, ikm, salt, info, keylen) {
  const prk = createHmac(digest, Buffer.from(salt)).update(Buffer.from(ikm)).digest()   // extract
  const out = []; let t = Buffer.alloc(0); let i = 0
  while (Buffer.concat(out).length < keylen) {
    i++
    t = createHmac(digest, prk).update(Buffer.concat([t, Buffer.from(info), Buffer.from([i])])).digest()
    out.push(t)
  }
  return Buffer.concat(out).subarray(0, keylen)
}
module.exports = { hkdfSync }
'use strict'
// 身分 = 一組由 32-byte 種子決定的 Ed25519 金鑰對。
// 公鑰（hex）就是你的「地址」。沒有郵箱、沒有手機、沒有使用者名稱。
// 種子存在本機；只要種子在，身分就在。

const crypto = require('crypto')
const DHT = require('hyperdht')

// 從種子推導金鑰對（與 Hyperswarm 內部用同一套推導，確保身分一致）。
function keyPairFromSeed (seed) {
  return DHT.keyPair(seed)
}

function newSeed () {
  return crypto.randomBytes(32)
}

// 把任意輸入正規化成 32-byte 公鑰 Buffer，並驗證格式。
// 接受：64 字元 hex，或 "yozakura:<hex>" 前綴。
function parsePublicKey (input) {
  if (typeof input !== 'string') return null
  let s = input.trim()
  if (s.toLowerCase().startsWith('phisorilla:')) s = s.slice('phisorilla:'.length)
  if (s.toLowerCase().startsWith('yozakura:')) s = s.slice('yozakura:'.length)
  s = s.replace(/\s+/g, '')
  if (!/^[0-9a-fA-F]{64}$/.test(s)) return null
  return Buffer.from(s.toLowerCase(), 'hex')
}

function toHex (buf) {
  return Buffer.from(buf).toString('hex')
}

// 給 UI 用的短碼，例如 a1b2c3d4…7e8f9a0b
function shortKey (hex) {
  return hex.slice(0, 8) + '…' + hex.slice(-8)
}

module.exports = { keyPairFromSeed, newSeed, parsePublicKey, toHex, shortKey }
'use strict'
// 離線訊息加密：用「收件人公鑰」做匿名封裝（libsodium sealed box）。
// 信箱中繼只看得到密文，看不到內容——這是離線投遞仍保有端對端加密的關鍵。
//
// 身分金鑰是 Ed25519（由種子推導，與 Hyperswarm 一致）；
// sealed box 需要 Curve25519，因此先做等價轉換。

const sodium = require('sodium-native')

function edPkToCurve (edPk) {
  const out = Buffer.alloc(sodium.crypto_box_PUBLICKEYBYTES)
  sodium.crypto_sign_ed25519_pk_to_curve25519(out, Buffer.from(edPk))
  return out
}
function edSkToCurve (edSk) {
  const out = Buffer.alloc(sodium.crypto_box_SECRETKEYBYTES)
  sodium.crypto_sign_ed25519_sk_to_curve25519(out, Buffer.from(edSk))
  return out
}

// 用收件人 Ed25519 公鑰封裝明文；回傳 base64 密文。寄件人匿名（box 本身不含寄件人）。
function sealFor (recipientEdPk, plaintextBuf) {
  const curvePk = edPkToCurve(recipientEdPk)
  const box = Buffer.alloc(plaintextBuf.length + sodium.crypto_box_SEALBYTES)
  sodium.crypto_box_seal(box, plaintextBuf, curvePk)
  return box.toString('base64')
}

// 用自己的 Ed25519 金鑰對解封；成功回傳 Buffer，失敗回傳 null。
function openSealed (boxB64, myEdPk, myEdSk) {
  const box = Buffer.from(boxB64, 'base64')
  if (box.length < sodium.crypto_box_SEALBYTES) return null
  const curvePk = edPkToCurve(myEdPk)
  const curveSk = edSkToCurve(myEdSk)
  const out = Buffer.alloc(box.length - sodium.crypto_box_SEALBYTES)
  const ok = sodium.crypto_box_seal_open(out, box, curvePk, curveSk)
  return ok ? out : null
}

// 由「我的 Ed25519 私鑰」與「對方 Ed25519 公鑰」算出 X25519 共享祕密（雙方一致）。
// 供 Double Ratchet 引導用。
function sharedSecret (myEdSk, theirEdPk) {
  const sk = edSkToCurve(myEdSk)
  const pk = edPkToCurve(theirEdPk)
  const out = Buffer.alloc(sodium.crypto_scalarmult_BYTES)
  sodium.crypto_scalarmult(out, sk, pk)
  return out
}

module.exports = { sealFor, openSealed, edPkToCurve, edSkToCurve, sharedSecret }
'use strict'
// 媒體儲存：圖片／影片／任意檔案，串流寫入磁碟（不佔記憶體，支援任意大小）。
// 存放於使用者可自訂的資料夾 <dataDir>/media，每個媒體兩個檔：
//   <id>.bin   原始位元組
//   <id>.json  中繼資料 {name, mime, mkind, size}
// 註：媒體檔以明文存於你選定的本機路徑（方便任意大小與直接存取）；
//     金鑰／聯絡人／文字訊息仍在加密保險庫內。要連媒體一起靜態加密，
//     可把資料路徑設在加密磁碟區。

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const { Readable } = require('stream')

let DIR = null
const HEXID = /^[0-9a-f]{32}$/

const MIME = {
  jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif', webp: 'image/webp', bmp: 'image/bmp',
  mp4: 'video/mp4', webm: 'video/webm', mov: 'video/quicktime', mkv: 'video/x-matroska', avi: 'video/x-msvideo',
  mp3: 'audio/mpeg', wav: 'audio/wav', ogg: 'audio/ogg', m4a: 'audio/mp4',
  pdf: 'application/pdf', txt: 'text/plain', zip: 'application/zip'
}
function mimeFor (name) {
  const ext = path.extname(name).slice(1).toLowerCase()
  return MIME[ext] || 'application/octet-stream'
}
function kindOf (mime) {
  if (mime.startsWith('image/')) return 'image'
  if (mime.startsWith('video/')) return 'video'
  if (mime.startsWith('audio/')) return 'audio'
  return 'file'
}

function init (dir) { DIR = dir; fs.mkdirSync(dir, { recursive: true }) }
function dirOf () { return DIR }
function newId () { return crypto.randomBytes(16).toString('hex') }
function binPath (id) { return path.join(DIR, id + '.bin') }
function metaPath (id) { return path.join(DIR, id + '.json') }

function readMeta (id) {
  try { return JSON.parse(fs.readFileSync(metaPath(id), 'utf8')) } catch { return null }
}
function writeMeta (id, meta) { fs.writeFileSync(metaPath(id), JSON.stringify(meta)) }

// 檔名只是給人看的中繼資料，但別人送來的檔名可能含 ../ 或 /。
// 只要 RN/原生端拿它去組儲存路徑就會變成路徑穿越，這裡先一律剝乾淨。
function safeName (name) {
  return String(name || 'file')
    .replace(/[\\/\x00]/g, '_')
    .replace(/^\.+/, '_')
    .slice(0, 120) || 'file'
}

// 匯入本機檔案到媒體庫（串流複製）。回傳 Promise<media 中繼資料>。
// displayName：Android 的 content:// 必須先在原生層複製到快取，快取檔名是亂碼，
//              使用者看到的真實檔名要另外傳進來。
function importFile (srcPath, displayName) {
  return new Promise((resolve, reject) => {
    const id = newId()
    const name = safeName(displayName || path.basename(srcPath))
    const mime = mimeFor(name)
    let size = 0
    try { size = fs.statSync(srcPath).size } catch {}
    const meta = { id, name, mime, mkind: kindOf(mime), size }
    const rs = fs.createReadStream(srcPath)
    const ws = fs.createWriteStream(binPath(id))
    rs.on('error', reject); ws.on('error', reject)
    ws.on('finish', () => { writeMeta(id, meta); resolve(meta) })
    rs.pipe(ws)
  })
}

// 接收端：開一個寫入串流，邊收邊寫。
function openIncoming (id, meta) {
  if (!HEXID.test(id)) return null
  writeMeta(id, {
    id,
    name: safeName(meta.name),
    mime: String(meta.mime || 'application/octet-stream').slice(0, 100),
    mkind: ['image', 'video', 'audio', 'file'].includes(meta.mkind) ? meta.mkind : 'file',
    size: Number(meta.size) || 0
  })
  return fs.createWriteStream(binPath(id))
}

function remove (id) {
  if (!HEXID.test(id)) return
  try { fs.unlinkSync(binPath(id)) } catch {}
  try { fs.unlinkSync(metaPath(id)) } catch {}
}

function exists (id) { return HEXID.test(id) && fs.existsSync(binPath(id)) }

// 供桌面版 pmedia:// 自訂協定串流播放（支援 Range，影片可拖曳進度）。回傳 Web Response。
// ⚠️ 僅限桌面：Bare 沒有 Response，Android 端請改用 MEDIA_PATH 拿到 file:// 路徑。
function serve (req) {
  if (typeof Response === 'undefined') throw new Error('serve() 只在桌面版可用；Android 請用 MEDIA_PATH')
  try {
    const url = new URL(req.url)
    const id = url.hostname || url.pathname.replace(/[^0-9a-f]/g, '')
    if (!exists(id)) return new Response('not found', { status: 404 })
    const meta = readMeta(id) || { mime: 'application/octet-stream', size: 0 }
    const total = fs.statSync(binPath(id)).size
    const range = req.headers.get('range') || req.headers.get('Range')
    const headers = { 'Content-Type': meta.mime, 'Accept-Ranges': 'bytes', 'Cache-Control': 'no-store' }

    if (range) {
      const m = /bytes=(\d*)-(\d*)/.exec(range)
      let start = m && m[1] ? parseInt(m[1], 10) : 0
      let end = m && m[2] ? parseInt(m[2], 10) : total - 1
      if (isNaN(start)) start = 0
      if (isNaN(end) || end >= total) end = total - 1
      if (start > end) start = 0
      headers['Content-Range'] = `bytes ${start}-${end}/${total}`
      headers['Content-Length'] = String(end - start + 1)
      const stream = Readable.toWeb(fs.createReadStream(binPath(id), { start, end }))
      return new Response(stream, { status: 206, headers })
    }
    headers['Content-Length'] = String(total)
    return new Response(Readable.toWeb(fs.createReadStream(binPath(id))), { status: 200, headers })
  } catch (e) {
    return new Response('error', { status: 500 })
  }
}

module.exports = { init, dirOf, newId, mimeFor, kindOf, safeName, importFile, openIncoming, remove, exists, readMeta, serve, binPath, metaPath }
const { Pull, Push, HEADERBYTES, KEYBYTES, ABYTES } = require('sodium-secretstream')
const sodium = require('sodium-universal')
const crypto = require('hypercore-crypto')
const { Duplex, Writable, getStreamError } = require('streamx')
const b4a = require('b4a')
const Timeout = require('timeout-refresh')
const unslab = require('unslab')
const Bridge = require('./lib/bridge')
const Handshake = require('./lib/handshake')

const IDHEADERBYTES = HEADERBYTES + 32
const [NS_INITIATOR, NS_RESPONDER, NS_SEND] = crypto.namespace('hyperswarm/secret-stream', 3)
const MAX_ATOMIC_WRITE = 256 * 256 * 256 - 1

module.exports = class NoiseSecretStream extends Duplex {
  constructor(isInitiator, rawStream, opts = {}) {
    super({ mapWritable: toBuffer })

    if (typeof isInitiator !== 'boolean') {
      throw new Error('isInitiator should be a boolean')
    }

    this.noiseStream = this
    this.isInitiator = isInitiator
    this.rawStream = null

    this.publicKey = opts.publicKey || null
    this.remotePublicKey = opts.remotePublicKey || null
    this.handshakeHash = null
    this.connected = false
    this.keepAlive = opts.keepAlive || 0
    this.timeout = 0
    this.enableSend = opts.enableSend !== false

    // pointer for upstream to set data here if they want
    this.userData = null

    let openedDone = null
    this.opened = new Promise((resolve) => {
      openedDone = resolve
    })

    this.rawBytesWritten = 0
    this.rawBytesRead = 0

    // metadata used by 'hyperdht'
    this.relay = null
    this.puncher = null

    // unwrapped raw stream
    this._rawStream = null

    // handshake state
    this._handshake = null
    this._handshakePattern = opts.pattern || null
    this._handshakeDone = null

    // message parsing state
    this._state = 0
    this._len = 0
    this._tmp = 1
    this._message = null

    this._openedDone = openedDone
    this._startDone = null
    this._drainDone = null
    this._outgoingPlain = null
    this._outgoingWrapped = null
    this._utp = null
    this._setup = true
    this._ended = 2
    this._encrypt = null
    this._decrypt = null
    this._timeoutTimer = null
    this._keepAliveTimer = null
    this._sendState = null

    if (opts.autoStart !== false) this.start(rawStream, opts)

    // wiggle it to trigger open immediately (TODO add streamx option for this)
    this.resume()
    this.pause()
  }

  static keyPair(seed) {
    return Handshake.keyPair(seed)
  }

  static id(handshakeHash, isInitiator, id) {
    return streamId(handshakeHash, isInitiator, id)
  }

  setTimeout(ms) {
    if (!ms) ms = 0

    this._clearTimeout()
    this.timeout = ms

    if (!ms || this.rawStream === null) return

    this._timeoutTimer = Timeout.once(ms, destroyTimeout, this)
    this._timeoutTimer.unref()
  }

  setKeepAlive(ms) {
    if (!ms) ms = 0

    this._clearKeepAlive()

    this.keepAlive = ms

    if (!ms || this.rawStream === null) return

    this._keepAliveTimer = Timeout.on(ms, sendKeepAlive, this)
    this._keepAliveTimer.unref()
  }

  sendKeepAlive() {
    const empty = this.alloc(0)
    this.write(empty)
  }

  start(rawStream, opts = {}) {
    if (rawStream) {
      this.rawStream = rawStream
      this._rawStream = rawStream
      if (typeof this.rawStream.setContentSize === 'function') {
        this._utp = rawStream
      }
    } else {
      this.rawStream = new Bridge(this)
      this._rawStream = this.rawStream.reverse
    }

    this.rawStream.on('error', this._onrawerror.bind(this))
    this.rawStream.on('close', this._onrawclose.bind(this))

    this._startHandshake(opts.handshake, opts.keyPair || null)
    this._continueOpen(null)

    if (this.destroying) return

    if (opts.data) this._onrawdata(opts.data)
    if (opts.ended) this._onrawend()

    if (this.keepAlive > 0 && this._keepAliveTimer === null) {
      this.setKeepAlive(this.keepAlive)
    }

    if (this.timeout > 0 && this._timeoutTimer === null) {
      this.setTimeout(this.timeout)
    }
  }

  async flush() {
    if ((await this.opened) === false) return false
    if ((await Writable.drained(this)) === false) return false
    if (this.destroying) return false

    if (this.rawStream !== null && this.rawStream.flush) {
      return await this.rawStream.flush()
    }

    return true
  }

  _continueOpen(err) {
    if (err) this.destroy(err)
    if (this._startDone === null) return
    const done = this._startDone
    this._startDone = null
    this._open(done)
  }

  _onkeypairpromise(p) {
    const self = this
    const cont = this._continueOpen.bind(this)

    p.then(onkeypair, cont)

    function onkeypair(kp) {
      self._onkeypair(kp)
      cont(null)
    }
  }

  _onkeypair(keyPair) {
    const pattern = this._handshakePattern || 'XX'
    const remotePublicKey = this.remotePublicKey

    this._handshake = new Handshake(this.isInitiator, keyPair, remotePublicKey, pattern)
    this.publicKey = this._handshake.keyPair.publicKey
  }

  _startHandshake(handshake, keyPair) {
    if (handshake) {
      const { tx, rx, hash, publicKey, remotePublicKey } = handshake
      this._setupSecretStream(tx, rx, hash, publicKey, remotePublicKey)
      return
    }

    if (!keyPair) keyPair = Handshake.keyPair()

    if (typeof keyPair.then === 'function') {
      this._onkeypairpromise(keyPair)
    } else {
      this._onkeypair(keyPair)
    }
  }

  _onrawerror(err) {
    this.destroy(err)
  }

  _onrawclose() {
    if (this._ended !== 0) this.destroy()
  }

  _onrawdata(data) {
    let offset = 0

    if (this._timeoutTimer !== null) {
      this._timeoutTimer.refresh()
    }

    do {
      switch (this._state) {
        case 0: {
          while (this._tmp !== 0x1000000 && offset < data.byteLength) {
            const v = data[offset++]
            this._len += this._tmp * v
            this._tmp *= 256
          }

          if (this._tmp === 0x1000000) {
            this._tmp = 0
            this._state = 1
            const unprocessed = data.byteLength - offset
            if (unprocessed < this._len && this._utp !== null)
              this._utp.setContentSize(this._len - unprocessed)
          }

          break
        }

        case 1: {
          const missing = this._len - this._tmp
          const end = missing + offset

          if (this._message === null && end <= data.byteLength) {
            this._message = data.subarray(offset, end)
            offset += missing
            this._incoming()
            break
          }

          const unprocessed = data.byteLength - offset

          if (this._message === null) {
            this._message = b4a.allocUnsafe(this._len)
          }

          b4a.copy(data, this._message, this._tmp, offset)
          this._tmp += unprocessed

          if (end <= data.byteLength) {
            offset += missing
            this._incoming()
          } else {
            offset += unprocessed
          }

          break
        }
      }
    } while (offset < data.byteLength && !this.destroying)
  }

  _onrawend() {
    this._ended--
    this.push(null)
  }

  _onrawdrain() {
    const drain = this._drainDone
    if (drain === null) return
    this._drainDone = null
    drain()
  }

  _read(cb) {
    this.rawStream.resume()
    cb(null)
  }

  _incoming() {
    const message = this._message

    this._state = 0
    this._len = 0
    this._tmp = 1
    this._message = null

    if (this._setup === true) {
      if (this._handshake) {
        this._onhandshakert(this._handshake.recv(message))
      } else {
        if (message.byteLength !== IDHEADERBYTES) {
          this.destroy(new Error('Invalid header message received'))
          return
        }

        const remoteId = message.subarray(0, 32)
        const expectedId = streamId(this.handshakeHash, !this.isInitiator)
        const header = message.subarray(32)

        if (!b4a.equals(expectedId, remoteId)) {
          this.destroy(new Error('Invalid header received'))
          return
        }

        this._decrypt.init(header)
        this._setup = false // setup is now done
      }
      return
    }

    if (message.byteLength < ABYTES) {
      this.destroy(new Error('Invalid message received'))
      return
    }

    this.rawBytesRead += message.byteLength

    const plain = message.subarray(1, message.byteLength - ABYTES + 1)

    try {
      this._decrypt.next(message, plain)
    } catch (err) {
      this.destroy(err)
      return
    }

    // If keep alive is selective, eat the empty buffers (ie assume the other side has it enabled also)
    if (plain.byteLength === 0 && this.keepAlive !== 0) return

    if (this.push(plain) === false) {
      this.rawStream.pause()
    }
  }

  _onhandshakert(h) {
    if (this._handshakeDone === null) return

    if (h !== null) {
      if (h.data) this._rawStream.write(h.data)
      if (!h.tx) return
    }

    const done = this._handshakeDone
    const publicKey = this._handshake.keyPair.publicKey

    this._handshakeDone = null
    this._handshake = null

    if (h === null) return done(new Error('Noise handshake failed'))

    this._setupSecretStream(h.tx, h.rx, h.hash, publicKey, h.remotePublicKey)
    this._resolveOpened(true)
    done(null)
  }

  _setupSecretStream(tx, rx, handshakeHash, publicKey, remotePublicKey) {
    const buf = b4a.allocUnsafeSlow(3 + IDHEADERBYTES)
    writeUint24le(IDHEADERBYTES, buf)

    this._encrypt = new Push(unslab(tx.subarray(0, KEYBYTES)), undefined, buf.subarray(3 + 32))
    this._decrypt = new Pull(unslab(rx.subarray(0, KEYBYTES)))

    this.publicKey = publicKey
    this.remotePublicKey = remotePublicKey
    this.handshakeHash = handshakeHash

    const id = buf.subarray(3, 3 + 32)
    streamId(handshakeHash, this.isInitiator, id)

    // initialize secretbox state for unordered messages
    this._setupSecretSend(handshakeHash)

    this.emit('handshake')
    // if rawStream is a bridge, also emit it there
    if (this.rawStream !== this._rawStream) this.rawStream.emit('handshake')

    if (this.destroying) return

    this._rawStream.write(buf)
  }

  _setupSecretSend(handshakeHash) {
    this._sendState = b4a.allocUnsafeSlow(32 + 32 + 8 + 8)
    const encrypt = this._sendState.subarray(0, 32) // secrets
    const decrypt = this._sendState.subarray(32, 64)
    const counter = this._sendState.subarray(64, 72) // nonce
    const initial = this._sendState.subarray(72)

    const inputs = this.isInitiator
      ? [
          [NS_INITIATOR, NS_SEND],
          [NS_RESPONDER, NS_SEND]
        ]
      : [
          [NS_RESPONDER, NS_SEND],
          [NS_INITIATOR, NS_SEND]
        ]

    sodium.crypto_generichash_batch(encrypt, inputs[0], handshakeHash)
    sodium.crypto_generichash_batch(decrypt, inputs[1], handshakeHash)

    sodium.randombytes_buf(initial)
    counter.set(initial)
  }

  _open(cb) {
    // no autostart or no handshake yet
    if (this._rawStream === null || (this._handshake === null && this._encrypt === null)) {
      this._startDone = cb
      return
    }

    this._rawStream.on('data', this._onrawdata.bind(this))
    this._rawStream.on('end', this._onrawend.bind(this))
    this._rawStream.on('drain', this._onrawdrain.bind(this))

    if (this.enableSend) this._rawStream.on('message', this._onmessage.bind(this))

    if (this._encrypt !== null) {
      this._resolveOpened(true)
      return cb(null)
    }

    this._handshakeDone = cb

    if (this.isInitiator) this._onhandshakert(this._handshake.send())
  }

  _predestroy() {
    if (this.rawStream) {
      const error = getStreamError(this)
      this.rawStream.destroy(error)
    }

    if (this._startDone !== null) {
      const done = this._startDone
      this._startDone = null
      done(new Error('Stream destroyed'))
    }

    if (this._handshakeDone !== null) {
      const done = this._handshakeDone
      this._handshakeDone = null
      done(new Error('Stream destroyed'))
    }

    if (this._drainDone !== null) {
      const done = this._drainDone
      this._drainDone = null
      done(new Error('Stream destroyed'))
    }
  }

  _write(data, cb) {
    let wrapped = this._outgoingWrapped

    if (data !== this._outgoingPlain) {
      wrapped = b4a.allocUnsafe(data.byteLength + 3 + ABYTES)
      wrapped.set(data, 4)
    } else {
      this._outgoingWrapped = this._outgoingPlain = null
    }

    if (wrapped.byteLength - 3 > MAX_ATOMIC_WRITE) {
      return cb(
        new Error(
          'Message is too large for an atomic write. Max size is ' + MAX_ATOMIC_WRITE + ' bytes.'
        )
      )
    }
    this.rawBytesWritten += wrapped.byteLength

    writeUint24le(wrapped.byteLength - 3, wrapped)
    // offset 4 so we can do it in-place
    this._encrypt.next(wrapped.subarray(4, 4 + data.byteLength), wrapped.subarray(3))

    if (this._keepAliveTimer !== null) this._keepAliveTimer.refresh()

    if (this._rawStream.write(wrapped) === false) {
      this._drainDone = cb
    } else {
      cb(null)
    }
  }

  _final(cb) {
    this._clearKeepAlive()
    this._ended--
    this._rawStream.end()
    cb(null)
  }

  _resolveOpened(val) {
    if (this._openedDone === null) return
    const opened = this._openedDone
    this._openedDone = null
    opened(val)
    if (!val) return
    this.connected = true
    this.emit('connect')
  }

  _clearTimeout() {
    if (this._timeoutTimer === null) return
    this._timeoutTimer.destroy()
    this._timeoutTimer = null
    this.timeout = 0
  }

  _clearKeepAlive() {
    if (this._keepAliveTimer === null) return
    this._keepAliveTimer.destroy()
    this._keepAliveTimer = null
    this.keepAlive = 0
  }

  _destroy(cb) {
    this._clearKeepAlive()
    this._clearTimeout()
    this._resolveOpened(false)
    cb(null)
  }

  _boxMessage(buffer) {
    const MB = sodium.crypto_secretbox_MACBYTES // 16
    const NB = sodium.crypto_secretbox_NONCEBYTES // 24

    const counter = this._sendState.subarray(64, 72)
    sodium.sodium_increment(counter)
    if (b4a.equals(counter, this._sendState.subarray(72))) {
      this.destroy(new Error('udp send nonce exchausted'))
      return
    }

    const secret = this._sendState.subarray(0, 32)
    const envelope = b4a.allocUnsafe(8 + MB + buffer.byteLength)
    const nonce = envelope.subarray(0, NB)
    const ciphertext = envelope.subarray(8)

    b4a.fill(nonce, 0) // pad suffix
    nonce.set(counter)

    sodium.crypto_secretbox_easy(ciphertext, buffer, nonce, secret)
    return envelope
  }

  send(buffer) {
    if (!this._sendState) return
    if (!this.rawStream?.send) return // udx-stream expected

    const message = this._boxMessage(buffer)
    return this.rawStream.send(message)
  }

  trySend(buffer) {
    if (!this._sendState) return
    if (!this.rawStream?.trySend) return // udx-stream expected

    const message = this._boxMessage(buffer)
    this.rawStream.trySend(message)
  }

  _onmessage(buffer) {
    if (!this._sendState) return // messages before handshake are dropped

    const MB = sodium.crypto_secretbox_MACBYTES // 16
    const NB = sodium.crypto_secretbox_NONCEBYTES // 24

    if (buffer.byteLength < NB) return // Invalid message

    const nonce = b4a.allocUnsafe(NB)
    b4a.fill(nonce, 0)
    nonce.set(buffer.subarray(0, 8))

    const secret = this._sendState.subarray(32, 64)
    const ciphertext = buffer.subarray(8)
    const plain = buffer.subarray(8, buffer.byteLength - MB)

    if (ciphertext.byteLength < MB) return // invalid message

    const success = sodium.crypto_secretbox_open_easy(plain, ciphertext, nonce, secret)

    if (success) this.emit('message', plain)
  }

  alloc(len) {
    const buf = b4a.allocUnsafe(len + 3 + ABYTES)
    this._outgoingWrapped = buf
    this._outgoingPlain = buf.subarray(4, buf.byteLength - ABYTES + 1)
    return this._outgoingPlain
  }

  toJSON() {
    return {
      isInitiator: this.isInitiator,
      publicKey: this.publicKey && b4a.toString(this.publicKey, 'hex'),
      remotePublicKey: this.remotePublicKey && b4a.toString(this.remotePublicKey, 'hex'),
      connected: this.connected,
      destroying: this.destroying,
      destroyed: this.destroyed,
      rawStream: this.rawStream && this.rawStream.toJSON ? this.rawStream.toJSON() : null
    }
  }
}

function writeUint24le(n, buf) {
  buf[0] = n & 255
  buf[1] = (n >>> 8) & 255
  buf[2] = (n >>> 16) & 255
}

function streamId(handshakeHash, isInitiator, out = b4a.allocUnsafe(32)) {
  sodium.crypto_generichash(out, isInitiator ? NS_INITIATOR : NS_RESPONDER, handshakeHash)
  return out
}

function toBuffer(data) {
  return typeof data === 'string' ? b4a.from(data) : data
}

function destroyTimeout() {
  this.destroy(new Error('Stream timed out'))
}

function sendKeepAlive() {
  const empty = this.alloc(0)
  this.write(empty)
}
const { Duplex, Writable } = require('streamx')

class ReversePassThrough extends Duplex {
  constructor(s) {
    super()
    this._stream = s
    this._ondrain = null
  }

  _write(data, cb) {
    if (this._stream.push(data) === false) {
      this._stream._ondrain = cb
    } else {
      cb(null)
    }
  }

  _final(cb) {
    this._stream.push(null)
    cb(null)
  }

  _read(cb) {
    const ondrain = this._ondrain
    this._ondrain = null
    if (ondrain) ondrain()
    cb(null)
  }
}

module.exports = class Bridge extends Duplex {
  constructor(noiseStream) {
    super()

    this.noiseStream = noiseStream

    this._ondrain = null
    this.reverse = new ReversePassThrough(this)
  }

  get publicKey() {
    return this.noiseStream.publicKey
  }

  get remotePublicKey() {
    return this.noiseStream.remotePublicKey
  }

  get handshakeHash() {
    return this.noiseStream.handshakeHash
  }

  flush() {
    return Writable.drained(this)
  }

  _read(cb) {
    const ondrain = this._ondrain
    this._ondrain = null
    if (ondrain) ondrain()
    cb(null)
  }

  _write(data, cb) {
    if (this.reverse.push(data) === false) {
      this.reverse._ondrain = cb
    } else {
      cb(null)
    }
  }

  _final(cb) {
    this.reverse.push(null)
    cb(null)
  }
}
const sodium = require('sodium-universal')
const curve = require('noise-curve-ed')
const Noise = require('noise-handshake')
const b4a = require('b4a')

const EMPTY = b4a.alloc(0)

module.exports = class Handshake {
  constructor(isInitiator, keyPair, remotePublicKey, pattern) {
    this.isInitiator = isInitiator
    this.keyPair = keyPair
    this.noise = new Noise(pattern, isInitiator, keyPair, { curve })
    this.noise.initialise(EMPTY, remotePublicKey)
    this.destroyed = false
  }

  static keyPair(seed) {
    const publicKey = b4a.alloc(32)
    const secretKey = b4a.alloc(64)
    if (seed) sodium.crypto_sign_seed_keypair(publicKey, secretKey, seed)
    else sodium.crypto_sign_keypair(publicKey, secretKey)
    return { publicKey, secretKey }
  }

  recv(data) {
    try {
      this.noise.recv(data)
      if (this.noise.complete) return this._return(null)
      return this.send()
    } catch {
      this.destroy()
      return null
    }
  }

  // note that the data returned here is framed so we don't have to do an extra copy
  // when sending it...
  send() {
    try {
      const data = this.noise.send()
      const wrap = b4a.allocUnsafe(data.byteLength + 3)

      writeUint24le(data.byteLength, wrap)
      wrap.set(data, 3)

      return this._return(wrap)
    } catch {
      this.destroy()
      return null
    }
  }

  destroy() {
    if (this.destroyed) return
    this.destroyed = true
  }

  _return(data) {
    const tx = this.noise.complete ? b4a.toBuffer(this.noise.tx) : null
    const rx = this.noise.complete ? b4a.toBuffer(this.noise.rx) : null
    const hash = this.noise.complete ? b4a.toBuffer(this.noise.hash) : null
    const remotePublicKey = this.noise.complete ? b4a.toBuffer(this.noise.rs) : null

    return {
      data,
      remotePublicKey,
      hash,
      tx,
      rx
    }
  }
}

function writeUint24le(n, buf) {
  buf[0] = n & 255
  buf[1] = (n >>> 8) & 255
  buf[2] = (n >>> 16) & 255
}
{
  "name": "@hyperswarm/secret-stream",
  "version": "6.9.1",
  "description": "Secret stream backed by Noise and libsodium's secretstream",
  "main": "index.js",
  "files": [
    "index.js",
    "lib/**.js"
  ],
  "dependencies": {
    "b4a": "^1.1.0",
    "hypercore-crypto": "^3.3.1",
    "noise-curve-ed": "^2.0.1",
    "noise-handshake": "^4.0.0",
    "sodium-secretstream": "^1.1.0",
    "sodium-universal": "^5.0.0",
    "streamx": "^2.14.0",
    "timeout-refresh": "^2.0.0",
    "unslab": "^1.3.0"
  },
  "devDependencies": {
    "brittle": "^3.3.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0",
    "udx-native": "^1.13.2"
  },
  "scripts": {
    "format": "prettier --write .",
    "lint": "prettier --check .",
    "test": "brittle test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/holepunchto/hyperswarm-secret-stream.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/hyperswarm-secret-stream/issues"
  },
  "homepage": "https://github.com/holepunchto/hyperswarm-secret-stream"
}
const Cache = require('xache')

module.exports = class AdaptiveTimeout {
  constructor(opts = {}) {
    this._cache = new Cache({
      maxSize: opts.maxSize || 65536,
      maxAge: opts.maxAge || 10 * 60 * 1000 // 10 minutes
    })
    this._fallback = opts.fallback || AdaptiveTimeout.TimeoutExponential
    this._min = opts.min ?? 300
    this._max = opts.max || 4000
    this._jitter = opts.jitter ?? 256
  }

  // Default - aggressive ramp
  static TimeoutAggressive = [500, 750, 1000, 1500, 2000]

  // Linear - steady increase
  static TimeoutLinear = [500, 1000, 1500, 2000, 2500]

  // Exponential - slow start, rapid backoff
  static TimeoutExponential = [250, 500, 1000, 2000, 4000]

  // Gentle - conservative, patient
  static TimeoutGentle = [1000, 1250, 1500, 1750, 2000]

  // Fast - rapid fire retries
  static TimeoutFast = [200, 400, 600, 800, 1000]

  // U-shape - long, short, long
  static TimeoutUShape = [1500, 750, 500, 750, 1500]

  // Inverse U - short, long, short
  static TimeoutInverseU = [500, 1000, 1500, 1000, 500]

  // Sawtooth - alternating fast/slow
  static TimeoutSawtooth = [500, 1500, 500, 1500, 500]

  // Plateau - quick ramp then steady
  static TimeoutPlateau = [500, 1000, 2000, 2000, 2000]

  // Logarithmic - diminishing increases
  static TimeoutLogarithmic = [500, 1000, 1300, 1500, 1600]

  getValue(key) {
    return this._cache.get(key)
  }

  put(key, value) {
    let p = this._cache.get(key)

    if (!p) {
      p = { avg: value, variance: value >> 1 }
    } else {
      // blend 75% old + 25% new deviation
      p.variance += (Math.abs(p.avg - value) - p.variance) >> 2
      // blend 87.5% old + 12.5% new sample
      p.avg += (value - p.avg) >> 3
    }

    this._cache.set(key, p)

    return p
  }

  get(key, attempt = 1) {
    const p = this._cache.get(key)
    const jitter = (Math.random() * this._jitter) | 0

    if (p) {
      // known - use adaptive with linear backoff
      const base = p.avg + (p.variance << 1)
      const backoff = base * attempt
      return Math.min(Math.max(backoff + jitter, this._min), this._max)
    } else {
      // unknown - use aggressive fallback
      const base = this._fallback[Math.min(attempt - 1, this._fallback.length - 1)]
      return base + jitter
    }
  }

  has(key) {
    return this._cache.has(key)
  }

  delete(key) {
    return this._cache.delete(key)
  }

  clear() {
    this._cache.clear()
  }
}
{
  "name": "adaptive-timeout",
  "version": "1.0.1",
  "description": "adaptive-timeout",
  "main": "index.js",
  "exports": {
    "./package": "./package.json",
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    }
  },
  "files": [
    "package.json",
    "index.js",
    "index.d.ts"
  ],
  "devDependencies": {
    "brittle": "^3.19.0",
    "lunte": "^1.2.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0"
  },
  "scripts": {
    "format": "prettier . --write",
    "test": "prettier . --check && lunte && brittle-bare test/index.js",
    "lint": "lunte"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/holepunchto/adaptive-timeout.git"
  },
  "author": "Holepunch Inc",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/adaptive-timeout/issues"
  },
  "homepage": "https://github.com/holepunchto/adaptive-timeout",
  "dependencies": {
    "xache": "^1.2.1"
  }
}
function isBuffer(value) {
  return Buffer.isBuffer(value) || value instanceof Uint8Array
}

function isEncoding(encoding) {
  return Buffer.isEncoding(encoding)
}

function alloc(size, fill, encoding) {
  return Buffer.alloc(size, fill, encoding)
}

function allocUnsafe(size) {
  return Buffer.allocUnsafe(size)
}

function allocUnsafeSlow(size) {
  return Buffer.allocUnsafeSlow(size)
}

function byteLength(string, encoding) {
  return Buffer.byteLength(string, encoding)
}

function compare(a, b) {
  return Buffer.compare(a, b)
}

function concat(buffers, totalLength) {
  return Buffer.concat(buffers, totalLength)
}

function copy(source, target, targetStart, start, end) {
  return toBuffer(source).copy(target, targetStart, start, end)
}

function equals(a, b) {
  return toBuffer(a).equals(b)
}

function fill(buffer, value, offset, end, encoding) {
  return toBuffer(buffer).fill(value, offset, end, encoding)
}

function from(value, encodingOrOffset, length) {
  return Buffer.from(value, encodingOrOffset, length)
}

function includes(buffer, value, byteOffset, encoding) {
  return toBuffer(buffer).includes(value, byteOffset, encoding)
}

function indexOf(buffer, value, byfeOffset, encoding) {
  return toBuffer(buffer).indexOf(value, byfeOffset, encoding)
}

function lastIndexOf(buffer, value, byteOffset, encoding) {
  return toBuffer(buffer).lastIndexOf(value, byteOffset, encoding)
}

function swap16(buffer) {
  return toBuffer(buffer).swap16()
}

function swap32(buffer) {
  return toBuffer(buffer).swap32()
}

function swap64(buffer) {
  return toBuffer(buffer).swap64()
}

function toBuffer(buffer) {
  if (Buffer.isBuffer(buffer)) return buffer
  return Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength)
}

function toString(buffer, encoding, start, end) {
  return toBuffer(buffer).toString(encoding, start, end)
}

function write(buffer, string, offset, length, encoding) {
  return toBuffer(buffer).write(string, offset, length, encoding)
}

function readDoubleBE(buffer, offset) {
  return toBuffer(buffer).readDoubleBE(offset)
}

function readDoubleLE(buffer, offset) {
  return toBuffer(buffer).readDoubleLE(offset)
}

function readFloatBE(buffer, offset) {
  return toBuffer(buffer).readFloatBE(offset)
}

function readFloatLE(buffer, offset) {
  return toBuffer(buffer).readFloatLE(offset)
}

function readInt32BE(buffer, offset) {
  return toBuffer(buffer).readInt32BE(offset)
}

function readInt32LE(buffer, offset) {
  return toBuffer(buffer).readInt32LE(offset)
}

function readUInt32BE(buffer, offset) {
  return toBuffer(buffer).readUInt32BE(offset)
}

function readUInt32LE(buffer, offset) {
  return toBuffer(buffer).readUInt32LE(offset)
}

function writeDoubleBE(buffer, value, offset) {
  return toBuffer(buffer).writeDoubleBE(value, offset)
}

function writeDoubleLE(buffer, value, offset) {
  return toBuffer(buffer).writeDoubleLE(value, offset)
}

function writeFloatBE(buffer, value, offset) {
  return toBuffer(buffer).writeFloatBE(value, offset)
}

function writeFloatLE(buffer, value, offset) {
  return toBuffer(buffer).writeFloatLE(value, offset)
}

function writeInt32BE(buffer, value, offset) {
  return toBuffer(buffer).writeInt32BE(value, offset)
}

function writeInt32LE(buffer, value, offset) {
  return toBuffer(buffer).writeInt32LE(value, offset)
}

function writeUInt32BE(buffer, value, offset) {
  return toBuffer(buffer).writeUInt32BE(value, offset)
}

function writeUInt32LE(buffer, value, offset) {
  return toBuffer(buffer).writeUInt32LE(value, offset)
}

module.exports = {
  isBuffer,
  isEncoding,
  alloc,
  allocUnsafe,
  allocUnsafeSlow,
  byteLength,
  compare,
  concat,
  copy,
  equals,
  fill,
  from,
  includes,
  indexOf,
  lastIndexOf,
  swap16,
  swap32,
  swap64,
  toBuffer,
  toString,
  write,
  readDoubleBE,
  readDoubleLE,
  readFloatBE,
  readFloatLE,
  readInt32BE,
  readInt32LE,
  readUInt32BE,
  readUInt32LE,
  writeDoubleBE,
  writeDoubleLE,
  writeFloatBE,
  writeFloatLE,
  writeInt32BE,
  writeInt32LE,
  writeUInt32BE,
  writeUInt32LE
}
{
  "name": "b4a",
  "version": "1.8.1",
  "description": "Bridging the gap between buffers and typed arrays",
  "exports": {
    "./package": "./package.json",
    ".": {
      "react-native": "./react-native.js",
      "browser": "./browser.js",
      "default": "./index.js"
    }
  },
  "files": [
    "browser.js",
    "index.js",
    "react-native.js",
    "lib"
  ],
  "scripts": {
    "format": "prettier --write . && lunte --fix",
    "lint": "prettier --check . && lunte",
    "test": "npm run test:bare && npm run test:node",
    "test:bare": "brittle-bare --coverage test.mjs",
    "test:node": "brittle-node --coverage test.mjs"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/b4a.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/b4a/issues"
  },
  "homepage": "https://github.com/holepunchto/b4a#readme",
  "devDependencies": {
    "brittle": "^3.5.2",
    "lunte": "^1.7.0",
    "nanobench": "^3.0.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0"
  },
  "peerDependencies": {
    "react-native-b4a": "*"
  },
  "peerDependenciesMeta": {
    "react-native-b4a": {
      "optional": true
    }
  }
}
const ESC = '\x1b'
const CSI = ESC + '['
const SGR = (n) => CSI + n + 'm'

exports.constants = {
  ESC,
  CSI,
  SGR
}

// https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_(Control_Sequence_Introducer)_sequences

exports.cursorHide = CSI + '?25l'
exports.cursorShow = CSI + '?25h'

exports.cursorUp = function cursorUp(n = 1) {
  return CSI + n + 'A'
}

exports.cursorDown = function cursorDown(n = 1) {
  return CSI + n + 'B'
}

exports.cursorForward = function cursorForward(n = 1) {
  return CSI + n + 'C'
}

exports.cursorBack = function cursorBack(n = 1) {
  return CSI + n + 'D'
}

exports.cursorNextLine = function cursorNextLine(n = 1) {
  return CSI + n + 'E'
}

exports.cursorPreviousLine = function cursorPreviousLine(n = 1) {
  return CSI + n + 'F'
}

exports.cursorPosition = function cursorPosition(column, row = 0) {
  if (row === 0) return CSI + (column + 1) + 'G'

  return CSI + (row + 1) + ';' + (column + 1) + 'H'
}

exports.eraseDisplayEnd = CSI + 'J'
exports.eraseDisplayStart = CSI + '1J'
exports.eraseDisplay = CSI + '2J'
exports.eraseLineEnd = CSI + 'K'
exports.eraseLineStart = CSI + '1K'
exports.eraseLine = CSI + '2K'

exports.scrollUp = function scrollUp(n = 1) {
  return CSI + n + 'S'
}

exports.scrollDown = function scrollDown(n = 1) {
  return CSI + n + 'T'
}

// https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters

exports.modifierReset = SGR(0)
exports.modifierBold = SGR(1)
exports.modifierDim = SGR(2)
exports.modifierItalic = SGR(3)
exports.modifierUnderline = SGR(4)
exports.modifierNormal = SGR(22)
exports.modifierNotItalic = SGR(23)
exports.modifierNotUnderline = SGR(24)

// https://en.wikipedia.org/wiki/ANSI_escape_code#Colors

exports.colorBlack = SGR(30)
exports.colorRed = SGR(31)
exports.colorGreen = SGR(32)
exports.colorYellow = SGR(33)
exports.colorBlue = SGR(34)
exports.colorMagenta = SGR(35)
exports.colorCyan = SGR(36)
exports.colorWhite = SGR(37)
exports.colorDefault = SGR(39)
exports.colorBrightBlack = SGR(90)
exports.colorBrightRed = SGR(91)
exports.colorBrightGreen = SGR(92)
exports.colorBrightYellow = SGR(93)
exports.colorBrightBlue = SGR(94)
exports.colorBrightMagenta = SGR(95)
exports.colorBrightCyan = SGR(96)
exports.colorBrightWhite = SGR(97)
{
  "name": "bare-ansi-escapes",
  "version": "2.2.3",
  "description": "Parse and produce ANSI escape sequences",
  "exports": {
    "./package": "./package.json",
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "./key-decoder": {
      "types": "./key-decoder.d.ts",
      "default": "./key-decoder.js"
    }
  },
  "files": [
    "index.js",
    "index.d.ts",
    "key-decoder.js",
    "key-decoder.d.ts"
  ],
  "scripts": {
    "test": "prettier . --check && bare test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/bare-ansi-escapes.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/bare-ansi-escapes/issues"
  },
  "homepage": "https://github.com/holepunchto/bare-ansi-escapes#readme",
  "dependencies": {
    "bare-stream": "^2.6.5"
  },
  "devDependencies": {
    "bare-buffer": "^3.0.2",
    "brittle": "^3.3.2",
    "prettier": "^3.4.2",
    "prettier-config-standard": "^7.0.0"
  },
  "peerDependencies": {
    "bare-buffer": "*"
  },
  "peerDependenciesMeta": {
    "bare-buffer": {
      "optional": true
    }
  }
}
const inspect = require('bare-inspect')

class AssertionError extends Error {
  constructor(opts = {}) {
    let { message = null, actual, expected, operator } = opts

    if (message === null) {
      message = `${inspect(actual)} ${operator} ${inspect(expected)}`
    }

    super(message)

    this.actual = actual
    this.expected = expected
    this.operator = operator
  }

  get name() {
    return 'AssertionError'
  }

  get code() {
    'ASSERTION'
  }
}

function assertFail(opts, fn) {
  if (opts.message instanceof Error) throw opts.message

  const err = new AssertionError(opts)

  if (Error.captureStackTrace) Error.captureStackTrace(err, fn)

  throw err
}

module.exports = exports = function assert(actual, message) {
  if (actual) return

  assertFail({ message, actual, expected: true, operator: '==' }, assert)
}

exports.AssertionError = AssertionError

exports.fail = function fail(message) {
  if (message === undefined) message = 'Failed'

  assertFail({ message, operator: 'fail' }, fail)
}

exports.ok = function ok(actual, message) {
  if (actual) return

  assertFail({ message, actual, expected: true, operator: '==' }, ok)
}

exports.notOk = function ok(actual, message) {
  if (!actual) return

  assertFail({ message, actual, expected: false, operator: '==' }, ok)
}

exports.equal = function equal(actual, expected, message) {
  if (actual == expected || (actual !== actual && expected !== expected)) {
    return
  }

  assertFail({ message, actual, expected, operator: '==' }, equal)
}

exports.notEqual = function notEqual(actual, expected, message) {
  if (actual != expected && (actual === actual || expected === expected)) {
    return
  }

  assertFail({ message, actual, expected, operator: '!=' }, notEqual)
}

exports.strictEqual = function strictEqual(actual, expected, message) {
  if (Object.is(actual, expected)) return

  assertFail(
    { message, actual, expected, operator: 'strictEqual' },
    strictEqual
  )
}

exports.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (!Object.is(actual, expected)) return

  assertFail(
    { message, actual, expected, operator: 'notStrictEqual' },
    notStrictEqual
  )
}
{
  "name": "bare-assert",
  "version": "1.2.0",
  "description": "Assertion library for JavaScript",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "./package": "./package.json"
  },
  "files": [
    "index.js",
    "index.d.ts"
  ],
  "scripts": {
    "test": "prettier . --check && bare test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/bare-assert.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/bare-assert/issues"
  },
  "homepage": "https://github.com/holepunchto/bare-assert#readme",
  "dependencies": {
    "bare-inspect": "^3.1.2"
  },
  "devDependencies": {
    "brittle": "^3.1.1",
    "prettier": "^3.4.2",
    "prettier-config-standard": "^7.0.0"
  }
}
module.exports = require.addon()
const constants = require('./lib/constants')
const Hash = require('./lib/hash')
const Hmac = require('./lib/hmac')
const { Cipheriv, Decipheriv } = require('./lib/cipher')
const { randomBytes, randomFill, randomUUID } = require('./lib/random')
const pbkdf2 = require('./lib/pbkdf2')
const { generateKeyPair } = require('./lib/key')
const { sign, verify } = require('./lib/signature')
const { timingSafeEqual } = require('./lib/timing')

exports.constants = constants

exports.Hash = Hash

exports.createHash = function createHash(algorithm, opts) {
  return new Hash(algorithm, opts)
}

exports.Hmac = Hmac

exports.createHmac = function createHmac(algorithm, key, opts) {
  return new Hmac(algorithm, key, opts)
}

exports.Cipheriv = Cipheriv

exports.createCipheriv = function createCipheriv(algorithm, key, iv, opts) {
  return new Cipheriv(algorithm, key, iv, opts)
}

exports.Decipheriv = Decipheriv

exports.createDecipheriv = function createDecipheriv(algorithm, key, iv, opts) {
  return new Decipheriv(algorithm, key, iv, opts)
}

exports.randomBytes = randomBytes

exports.randomFill = randomFill

// For Node.js compatibility
exports.randomFillSync = function randomFillSync(buffer, offset, size) {
  return exports.randomFill(buffer, offset, size)
}

exports.randomUUID = randomUUID

exports.pbkdf2 = pbkdf2

// For Node.js compatibility
exports.pbkdf2Sync = function pbkdf2Sync(password, salt, iterations, keylen, digest) {
  return exports.pbkdf2(password, salt, iterations, keylen, digest)
}

exports.generateKeyPair = generateKeyPair

exports.sign = sign

exports.verify = verify

exports.timingSafeEqual = timingSafeEqual

// For Node.js compatibility
exports.webcrypto = require('./web')
const { Transform } = require('bare-stream')
const assert = require('bare-assert')
const binding = require('../binding')
const constants = require('./constants')

const {
  cipher: {
    AES128ECB,
    AES128CBC,
    AES128CTR,
    AES128OFB,
    AES256ECB,
    AES256CBC,
    AES256CTR,
    AES256OFB,
    AES128GCM,
    AES256GCM,
    CHACHA20POLY1305,
    XCHACHA20POLY1305
  }
} = constants

class CryptoCipher {
  constructor(algorithm, key, iv, encrypt, opts = {}) {
    const { encoding = 'utf8' } = opts

    if (typeof key === 'string') key = Buffer.from(key, encoding)
    if (typeof iv === 'string') iv = Buffer.from(iv, encoding)

    assert(ArrayBuffer.isView(key))
    assert(ArrayBuffer.isView(iv))

    if (key.byteLength !== binding.cipherKeyLength(algorithm)) {
      throw new RangeError('Invalid key length')
    }

    if (iv.byteLength !== binding.cipherIVLength(algorithm)) {
      throw new RangeError('Invalid iv length')
    }

    this._finalized = false

    binding.cipherInit(
      this,
      algorithm,
      key.buffer,
      key.byteOffset,
      key.byteLength,
      iv.buffer,
      iv.byteOffset,
      iv.byteLength,
      encrypt
    )
  }

  update(data, inputEncoding = 'utf8', outputEncoding) {
    if (this._finalized) {
      throw new Error('Cipher has already been finalized')
    }

    if (typeof data === 'string') data = Buffer.from(data, inputEncoding)

    assert(ArrayBuffer.isView(data))

    const out = new ArrayBuffer(data.byteLength + binding.cipherBlockSize(this))

    const written = binding.cipherUpdate(this, data.buffer, data.byteOffset, data.byteLength, out)

    const result = Buffer.from(out, 0, written)

    return outputEncoding ? result.toString(outputEncoding) : result
  }

  final(outputEncoding) {
    if (this._finalized) {
      throw new Error('Cipher has already been finalized')
    }

    const out = new ArrayBuffer(binding.cipherBlockSize(this))

    const written = binding.cipherFinal(this, out)

    this._finalized = true

    const result = Buffer.from(out, 0, written)

    return outputEncoding ? result.toString(outputEncoding) : result
  }

  setAutoPadding(pad) {
    if (this._finalized) {
      throw new Error('Cipher has already been finalized')
    }

    binding.cipherSetPadding(this, pad)
  }
}

class CryptoAuthenticatedCipher {
  constructor(algorithm, key, nonce, opts = {}) {
    const { encoding = 'utf8', authTagLength = 16 } = opts

    if (typeof key === 'string') key = Buffer.from(key, encoding)
    if (typeof nonce === 'string') nonce = Buffer.from(nonce, encoding)

    assert(ArrayBuffer.isView(key))
    assert(ArrayBuffer.isView(nonce))

    if (key.byteLength !== binding.aeadKeyLength(algorithm)) {
      throw new RangeError('Invalid key length')
    }

    if (nonce.byteLength !== binding.aeadNonceLength(algorithm)) {
      throw new RangeError('Invalid nonce length')
    }

    if (authTagLength !== 12 && authTagLength !== 14 && authTagLength !== 16) {
      throw new RangeError('Invalid authentication tag length')
    }

    this._buffer = []
    this._nonce = nonce
    this._authTag = null
    this._authTagLength = authTagLength
    this._additionalData = null
    this._finalized = false

    binding.aeadInit(this, algorithm, key.buffer, key.byteOffset, key.byteLength, authTagLength)
  }

  update(data, inputEncoding = 'utf8', outputEncoding) {
    if (typeof data === 'string') data = Buffer.from(data, inputEncoding)

    assert(ArrayBuffer.isView(data))

    this._buffer.push(data)

    return outputEncoding ? '' : Buffer.alloc(0)
  }

  setAAD(buffer, opts = {}) {
    const { encoding = 'utf8' } = opts

    if (typeof buffer === 'string') buffer = Buffer.from(buffer, encoding)

    assert(ArrayBuffer.isView(buffer))

    this._additionalData = buffer
  }

  getAuthTag() {
    return this._authTag
  }

  setAuthTag(authTag, encoding) {
    if (typeof authTag === 'string') authTag = Buffer.from(authTag, encoding)

    assert(ArrayBuffer.isView(authTag))

    this._authTag = authTag
  }
}

class CryptoAuthenticatedSeal extends CryptoAuthenticatedCipher {
  final(outputEncoding) {
    if (this._finalized) {
      throw new Error('Cipher has already been finalized')
    }

    const data = this._buffer.length === 1 ? this._buffer[0] : Buffer.concat(this._buffer)

    const nonce = this._nonce
    const ad = this._additionalData || Buffer.alloc(0)

    const out = new ArrayBuffer(data.byteLength + binding.aeadMaxOverhead(this))

    const written = binding.aeadSeal(
      this,
      data.buffer,
      data.byteOffset,
      data.byteLength,
      nonce.buffer,
      nonce.byteOffset,
      nonce.byteLength,
      ad.buffer,
      ad.byteOffset,
      ad.byteLength,
      out
    )

    this._finalized = true

    const cipherLength = written - this._authTagLength

    this._authTag = Buffer.from(out, cipherLength)

    const result = Buffer.from(out, 0, cipherLength)

    return outputEncoding ? result.toString(outputEncoding) : result
  }
}

class CryptoAuthenticatedOpen extends CryptoAuthenticatedCipher {
  final(outputEncoding) {
    if (this._finalized) {
      throw new Error('Decipher has already been finalized')
    }

    this._buffer.push(this._authTag)

    const data = Buffer.concat(this._buffer)

    const nonce = this._nonce
    const ad = this._additionalData || Buffer.alloc(0)

    const out = new ArrayBuffer(data.byteLength)

    const written = binding.aeadOpen(
      this,
      data.buffer,
      data.byteOffset,
      data.byteLength,
      nonce.buffer,
      nonce.byteOffset,
      nonce.byteLength,
      ad.buffer,
      ad.byteOffset,
      ad.byteLength,
      out
    )

    this._finalized = true

    const result = Buffer.from(out, 0, written)

    return outputEncoding ? result.toString(outputEncoding) : result
  }
}

exports.Cipheriv = class CryptoCipheriv extends Transform {
  constructor(algorithm, key, iv, opts = {}) {
    super(opts)

    algorithm = constants.toCipher(algorithm)

    switch (algorithm) {
      case AES128ECB:
      case AES128CBC:
      case AES128CTR:
      case AES128OFB:
      case AES256ECB:
      case AES256CBC:
      case AES256CTR:
      case AES256OFB:
        this._cipher = new CryptoCipher(algorithm, key, iv, true, opts)
        break

      case AES128GCM:
      case AES256GCM:
      case CHACHA20POLY1305:
      case XCHACHA20POLY1305:
        this._cipher = new CryptoAuthenticatedSeal(algorithm, key, iv, opts)
        break
    }
  }

  update(data, inputEncoding, outputEncoding) {
    return this._cipher.update(data, inputEncoding, outputEncoding)
  }

  final(outputEncoding) {
    return this._cipher.final(outputEncoding)
  }

  setAutoPadding(pad) {
    this._cipher.setAutoPadding(pad)

    return this
  }

  setAAD(buffer, opts) {
    this._cipher.setAAD(buffer, opts)

    return this
  }

  getAuthTag() {
    return this._cipher.getAuthTag()
  }

  _transform(data, encoding, cb) {
    this.push(this.update(data))

    cb(null)
  }

  _flush(cb) {
    this.push(this.final())

    cb(null)
  }
}

exports.Decipheriv = class CryptoDeipheriv extends Transform {
  constructor(algorithm, key, iv, opts = {}) {
    super(opts)

    algorithm = constants.toCipher(algorithm)

    switch (algorithm) {
      case AES128ECB:
      case AES128CBC:
      case AES128CTR:
      case AES128OFB:
      case AES256ECB:
      case AES256CBC:
      case AES256CTR:
      case AES256OFB:
        this._cipher = new CryptoCipher(algorithm, key, iv, false, opts)
        break

      case AES128GCM:
      case AES256GCM:
      case CHACHA20POLY1305:
      case XCHACHA20POLY1305:
        this._cipher = new CryptoAuthenticatedOpen(algorithm, key, iv, opts)
        break
    }
  }

  update(data, inputEncoding, outputEncoding) {
    return this._cipher.update(data, inputEncoding, outputEncoding)
  }

  final(outputEncoding) {
    return this._cipher.final(outputEncoding)
  }

  setAutoPadding(pad) {
    this._cipher.setAutoPadding(pad)

    return this
  }

  setAAD(buffer, opts) {
    this._cipher.setAAD(buffer, opts)

    return this
  }

  setAuthTag(authTag, encoding) {
    this._cipher.setAuthTag(authTag, encoding)

    return this
  }

  _transform(data, encoding, cb) {
    this.push(this.update(data))

    cb(null)
  }

  _flush(cb) {
    this.push(this.final())

    cb(null)
  }
}
const { fail } = require('bare-assert')
const binding = require('../binding')
const errors = require('./errors')

module.exports = exports = {
  hash: {
    MD5: binding.MD5,
    SHA1: binding.SHA1,
    SHA256: binding.SHA256,
    SHA384: binding.SHA384,
    SHA512: binding.SHA512,
    BLAKE2B256: binding.BLAKE2B256,
    RIPEMD160: binding.RIPEMD160
  },
  signature: {
    ED25519: binding.ED25519
  },
  cipher: {
    AES128ECB: binding.AES128ECB,
    AES128CBC: binding.AES128CBC,
    AES128CTR: binding.AES128CTR,
    AES128OFB: binding.AES128OFB,
    AES256ECB: binding.AES256ECB,
    AES256CBC: binding.AES256CBC,
    AES256CTR: binding.AES256CTR,
    AES256OFB: binding.AES256OFB,
    AES128GCM: binding.AES128GCM,
    AES256GCM: binding.AES256GCM,
    CHACHA20POLY1305: binding.CHACHA20POLY1305,
    XCHACHA20POLY1305: binding.XCHACHA20POLY1305
  },
  keyType: {
    ED25519: binding.ED25519
  }
}

exports.toHash = function toHash(hash) {
  if (typeof hash === 'number' && !isNaN(hash)) return hash

  if (typeof hash === 'string') {
    hash = hash.replace(/-/g, '')

    if (hash in exports.hash === false) {
      hash = hash.toUpperCase()

      if (hash in exports.hash === false) {
        throw errors.UNKNOWN_HASH(`Unknown hash '${hash}'`)
      }
    }

    return exports.hash[hash]
  }

  fail(`Hash must be a number or string. Received ${isNaN(hash) ? 'NaN' : typeof hash} (${hash})`)
}

exports.toCipher = function toCiper(cipher) {
  if (typeof cipher === 'number' && !isNaN(cipher)) return cipher

  if (typeof cipher === 'string') {
    cipher = cipher.replace(/-/g, '')

    if (cipher in exports.cipher === false) {
      cipher = cipher.toUpperCase()

      if (cipher in exports.cipher === false) {
        throw errors.UNKNOWN_CIPHER(`Unknown cipher '${cipher}'`)
      }
    }

    return exports.cipher[cipher]
  }

  fail(
    `Cipher must be a number or string. Received ${isNaN(cipher) ? 'NaN' : typeof cipher} (${cipher})`
  )
}

exports.toKeyType = function toKeyType(type) {
  if (typeof type === 'number' && !isNaN(type)) return type

  if (typeof type === 'string') {
    type = type.replace(/-/g, '')

    if (type in exports.keyType === false) {
      type = type.toUpperCase()

      if (type in exports.keyType === false) {
        throw errors.UNKNOWN_KEY_TYPE(`Unknown key type '${type}'`)
      }
    }

    return exports.keyType[type]
  }

  fail(
    `Key type must be a number or string. Received ${isNaN(type) ? 'NaN' : typeof type} (${type})`
  )
}
module.exports = class CryptoError extends Error {
  constructor(msg, fn = CryptoError, code = fn.name) {
    super(`${code}: ${msg}`)
    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, fn)
    }
  }

  get name() {
    return 'CryptoError'
  }

  static UNKNOWN_HASH(msg) {
    return new CryptoError(msg, CryptoError.UNKNOWN_HASH)
  }

  static UNKNOWN_CIPHER(msg) {
    return new CryptoError(msg, CryptoError.UNKNOWN_CIPHER)
  }

  static UNKNOWN_KEY_TYPE(msg) {
    return new CryptoError(msg, CryptoError.UNKNOWN_KEY_TYPE)
  }

  static INVALID_ACCESS(msg) {
    return new CryptoError(msg, CryptoError.INVALID_ACCESS)
  }

  static INVALID_DATA(msg) {
    return new CryptoError(msg, CryptoError.INVALID_DATA)
  }

  static OPERATION_ERROR(msg) {
    return new CryptoError(msg, CryptoError.OPERATION_ERROR)
  }

  static NOT_SUPPORTED(msg) {
    return new CryptoError(msg, CryptoError.NOT_SUPPORTED)
  }
}
const { Transform } = require('bare-stream')
const assert = require('bare-assert')
const binding = require('../binding')
const constants = require('./constants')

const {
  hash: { RIPEMD160 }
} = constants

class CryptoDigest {
  constructor(algorithm) {
    this._handle = binding.digestInit(algorithm)
  }

  update(data) {
    if (this._handle === null) {
      throw new Error('Digest has already been finalized')
    }

    binding.digestUpdate(this._handle, data.buffer, data.byteOffset, data.byteLength)
  }

  final() {
    if (this._handle === null) {
      throw new Error('Digest has already been finalized')
    }

    const result = Buffer.from(binding.digestFinal(this._handle))
    this._handle = null
    return result
  }
}

class CryptoRIPEMD160Digest {
  constructor() {
    this._handle = binding.ripemd160Init()
  }

  update(data) {
    if (this._handle === null) {
      throw new Error('Digest has already been finalized')
    }

    binding.ripemd160Update(this._handle, data.buffer, data.byteOffset, data.byteLength)
  }

  final() {
    if (this._handle === null) {
      throw new Error('Digest has already been finalized')
    }

    const result = Buffer.from(binding.ripemd160Final(this._handle))
    this._handle = null
    return result
  }
}

module.exports = class CryptoHash extends Transform {
  constructor(algorithm, opts = {}) {
    super(opts)

    algorithm = constants.toHash(algorithm)

    switch (algorithm) {
      case RIPEMD160:
        this._digest = new CryptoRIPEMD160Digest()
        break

      default:
        this._digest = new CryptoDigest(algorithm)
        break
    }
  }

  update(data, encoding = 'utf8') {
    if (typeof data === 'string') data = Buffer.from(data, encoding)

    assert(ArrayBuffer.isView(data))

    this._digest.update(data)

    return this
  }

  digest(encoding) {
    const digest = this._digest.final()

    return encoding && encoding !== 'buffer' ? digest.toString(encoding) : digest
  }

  _transform(data, encoding, cb) {
    this.update(data)

    cb(null)
  }

  _flush(cb) {
    this.push(this.digest())

    cb(null)
  }
}
const { Transform } = require('bare-stream')
const assert = require('bare-assert')
const binding = require('../binding')
const constants = require('./constants')

module.exports = class CryptoHmac extends Transform {
  constructor(algorithm, key, opts = {}) {
    super(opts)

    const { encoding = 'utf8' } = opts

    if (typeof key === 'string') key = Buffer.from(key, encoding)

    assert(ArrayBuffer.isView(key))

    this._finalized = false

    binding.hmacInit(this, constants.toHash(algorithm), key.buffer, key.byteOffset, key.byteLength)
  }

  update(data, encoding = 'utf8') {
    if (this._finalized) {
      throw new Error('Hmac has already been finalized')
    }

    if (typeof data === 'string') data = Buffer.from(data, encoding)

    assert(ArrayBuffer.isView(data))

    binding.hmacUpdate(this, data.buffer, data.byteOffset, data.byteLength)

    return this
  }

  digest(encoding) {
    if (this._finalized) {
      throw new Error('Hmac has already been finalized')
    }

    const digest = Buffer.from(binding.hmacFinal(this))
    this._finalized = true

    return encoding && encoding !== 'buffer' ? digest.toString(encoding) : digest
  }

  _transform(data, encoding, cb) {
    this.update(data)

    cb(null)
  }

  _flush(cb) {
    this.push(this.digest())

    cb(null)
  }
}
const binding = require('../binding')
const constants = require('./constants')

const {
  keyType: { ED25519 }
} = constants

class CryptoKey {
  constructor(keyType) {
    this._keyType = keyType
  }

  get type() {
    throw new Error('Not implemented')
  }

  get destroyed() {
    return false
  }

  export() {
    throw new Error('Not implemented')
  }

  destroy() {}

  [Symbol.dispose]() {
    this.destroy()
  }
}

exports.Key = CryptoKey

class CryptoEd25519Key extends CryptoKey {
  constructor(key = null) {
    super(ED25519)

    this._destroyed = false

    if (key === null) {
      binding.keyInit(this, new ArrayBuffer(0), 0, 0)
    } else if (ArrayBuffer.isView(key)) {
      binding.keyInit(this, key.buffer, key.byteOffset, key.byteLength)
    } else {
      binding.keyInit(this, key, 0, key.byteLength)
    }
  }

  get asymmetricKeyType() {
    return 'ed25519'
  }

  get destroyed() {
    return this._destroyed
  }

  export() {
    if (this._destroyed) {
      throw new Error('Key has been destroyed')
    }

    return Buffer.from(binding.keyExport(this))
  }

  destroy() {
    if (this._destroyed) return

    binding.keyDestroy(this)

    this._destroyed = true
  }
}

class CryptoEd25519PublicKey extends CryptoEd25519Key {
  get type() {
    return 'public'
  }
}

exports.Ed25519PublicKey = CryptoEd25519PublicKey

class CryptoEd25519PrivateKey extends CryptoEd25519Key {
  get type() {
    return 'private'
  }
}

exports.Ed25519PrivateKey = CryptoEd25519PrivateKey

class CryptoSecretKey extends CryptoKey {
  constructor(key) {
    super()

    this._destroyed = false

    if (ArrayBuffer.isView(key)) {
      binding.keyInit(this, key.buffer, key.byteOffset, key.byteLength)
    } else {
      binding.keyInit(this, key, 0, key.byteLength)
    }
  }

  get type() {
    return 'secret'
  }

  get destroyed() {
    return this._destroyed
  }

  export() {
    if (this._destroyed) {
      throw new Error('Key has been destroyed')
    }

    return Buffer.from(binding.keyExport(this))
  }

  destroy() {
    if (this._destroyed) return

    binding.keyDestroy(this)

    this._destroyed = true
  }
}

exports.SecretKey = CryptoSecretKey

exports.generateKeyPair = function generateKeyPair(type) {
  type = constants.toKeyType(type)

  switch (type) {
    case ED25519: {
      const publicKey = new CryptoEd25519PublicKey()
      const privateKey = new CryptoEd25519PrivateKey()

      binding.ed25519GenerateKeypair(publicKey, privateKey)

      return { publicKey, privateKey }
    }
  }
}
const assert = require('bare-assert')
const binding = require('../binding')
const constants = require('./constants')

module.exports = function pbkdf2(password, salt, iterations, keylen, digest, cb) {
  assert(typeof iterations === 'number' && !isNaN(iterations))

  if (iterations < 1 || iterations > 0xffffffff) {
    throw new RangeError('Invalid iterations')
  }

  assert(typeof keylen === 'number' && !isNaN(keylen))

  if (keylen < 1 || keylen > 0x7fffffff) {
    throw new RangeError('Invalid key length')
  }

  if (typeof password === 'string') password = Buffer.from(password)
  if (typeof salt === 'string') salt = Buffer.from(salt)

  assert(ArrayBuffer.isView(password))
  assert(ArrayBuffer.isView(salt))

  const buffer = Buffer.from(
    binding.pbkdf2(
      password.buffer,
      password.byteOffset,
      password.byteLength,
      salt.buffer,
      salt.byteOffset,
      salt.byteLength,
      iterations,
      constants.toHash(digest),
      keylen
    )
  )

  if (cb) queueMicrotask(() => cb(null, buffer))
  else return buffer
}
const assert = require('bare-assert')
const binding = require('../binding')

exports.randomBytes = function randomBytes(size, cb) {
  assert(typeof size === 'number' && !isNaN(size))

  const buffer = Buffer.allocUnsafe(size)
  exports.randomFill(buffer)
  if (cb) queueMicrotask(() => cb(null, buffer))
  else return buffer
}

exports.randomFill = function randomFill(buffer, offset, size, cb) {
  if (typeof offset === 'function') {
    cb = offset
    offset = undefined
  } else if (typeof size === 'function') {
    cb = size
    size = undefined
  }

  assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer))
  assert(size === undefined || (typeof size === 'number' && !isNaN(size)))
  assert(offset === undefined || (typeof offset === 'number' && !isNaN(offset)))

  const elementSize = buffer.BYTES_PER_ELEMENT || 1

  if (offset === undefined) offset = 0
  else offset *= elementSize

  if (size === undefined) size = buffer.byteLength - offset
  else size *= elementSize

  if (offset < 0 || offset > buffer.byteLength) {
    throw new RangeError('offset is out of range')
  }

  if (size < 0 || size > buffer.byteLength) {
    throw new RangeError('size is out of range')
  }

  if (offset + size > buffer.byteLength) {
    throw new RangeError('offset + size is out of range')
  }

  let arraybuffer

  if (ArrayBuffer.isView(buffer)) {
    offset += buffer.byteOffset
    arraybuffer = buffer.buffer
  } else {
    arraybuffer = buffer
  }

  binding.randomFill(arraybuffer, offset, size)

  if (cb) queueMicrotask(() => cb(null, buffer))
  else return buffer
}

exports.randomUUID = function randomUUID() {
  const uuid = exports.randomBytes(16)

  uuid[6] = (uuid[6] & 0x0f) | 0x40
  uuid[8] = (uuid[8] & 0x3f) | 0x80

  return (
    uuid.subarray(0, 4).toString('hex') +
    '-' +
    uuid.subarray(4, 6).toString('hex') +
    '-' +
    uuid.subarray(6, 8).toString('hex') +
    '-' +
    uuid.subarray(8, 10).toString('hex') +
    '-' +
    uuid.subarray(10, 16).toString('hex')
  )
}
const assert = require('bare-assert')
const binding = require('../binding')
const { Key } = require('./key')
const constants = require('./constants')

const {
  keyType: { ED25519 }
} = constants

exports.sign = function sign(algorithm, data, key) {
  assert(data instanceof ArrayBuffer || ArrayBuffer.isView(data))

  if (ArrayBuffer.isView(data)) {
    data = Buffer.coerce(data)
  } else {
    data = Buffer.from(data)
  }

  assert(key instanceof Key)

  switch (key._keyType) {
    case ED25519:
      return Buffer.from(binding.ed25519Sign(data.buffer, data.byteOffset, data.byteLength, key))
  }
}

exports.verify = function verify(algorithm, data, key, signature) {
  assert(data instanceof ArrayBuffer || ArrayBuffer.isView(data))

  if (ArrayBuffer.isView(data)) {
    data = Buffer.coerce(data)
  } else {
    data = Buffer.from(data)
  }

  assert(signature instanceof ArrayBuffer || ArrayBuffer.isView(signature))

  if (ArrayBuffer.isView(signature)) {
    signature = Buffer.coerce(signature)
  } else {
    signature = Buffer.from(signature)
  }

  assert(key instanceof Key)

  switch (key._keyType) {
    case ED25519:
      assert(signature.byteLength === 64)

      return binding.ed25519Verify(
        data.buffer,
        data.byteOffset,
        data.byteLength,
        signature.buffer,
        signature.byteOffset,
        key
      )
  }
}
const assert = require('bare-assert')
const binding = require('../binding')

exports.timingSafeEqual = function timingSafeEqual(a, b) {
  assert(a instanceof ArrayBuffer || ArrayBuffer.isView(a))
  assert(b instanceof ArrayBuffer || ArrayBuffer.isView(b))

  let aBuffer, aOffset
  if (ArrayBuffer.isView(a)) {
    aBuffer = a.buffer
    aOffset = a.byteOffset
  } else {
    aBuffer = a
    aOffset = 0
  }

  let bBuffer, bOffset
  if (ArrayBuffer.isView(b)) {
    bBuffer = b.buffer
    bOffset = b.byteOffset
  } else {
    bBuffer = b
    bOffset = 0
  }

  return binding.timingSafeEqual(aBuffer, aOffset, a.byteLength, bBuffer, bOffset, b.byteLength)
}
const crypto = require('../../..')
const binding = require('../../../binding')
const errors = require('../../errors')
const { Ed25519PublicKey, Ed25519PrivateKey } = require('../../key')
const CryptoKey = require('../crypto-key')

// https://w3c.github.io/webcrypto/#ed25519

// https://w3c.github.io/webcrypto/#ed25519-operations-sign
exports.sign = function sign(algorithm, key, data) {
  if (key.type !== 'private') {
    throw errors.INVALID_ACCESS('Must pass private key for Ed25519 signing')
  }

  const signature = crypto.sign(null, data, key._handle)

  return signature.buffer.slice(0, signature.byteLength)
}

// https://w3c.github.io/webcrypto/#ed25519-operations-verify
exports.verify = function verify(algorithm, key, signature, data) {
  if (key.type !== 'public') {
    throw errors.INVALID_ACCESS('Must pass public key for Ed25519 verification')
  }

  return crypto.verify(null, data, key._handle, signature)
}

// https://w3c.github.io/webcrypto/#ed25519-operations-generate-key
exports.generateKey = function generateKey(algorithm, extractable, usages) {
  for (const usage of usages) {
    if (usage !== 'sign' && usage !== 'verify') {
      throw new SyntaxError(
        `Usage '${usage}' cannot be used for the Ed25519 generateKey() operation`
      )
    }
  }

  const keys = crypto.generateKeyPair('ed25519')

  algorithm = { name: 'Ed25519' }

  return {
    publicKey: new CryptoKey('public', true, algorithm, ['verify'], keys.publicKey),
    privateKey: new CryptoKey('private', extractable, algorithm, ['sign'], keys.privateKey)
  }
}

// https://w3c.github.io/webcrypto/#ed25519-operations-import-key
exports.importKey = function importKey(format, keyData, algorithm, extractable, usages) {
  switch (format) {
    case 'spki': {
      for (const usage of usages) {
        if (usage !== 'verify') {
          throw new SyntaxError(
            `Usage '${usage}' cannot be used for the Ed25519 importKey() operation`
          )
        }
      }

      const publicKey = new Ed25519PublicKey()

      binding.ed25519FromSPKI(publicKey, keyData.buffer, keyData.byteOffset, keyData.byteLength)

      return new CryptoKey(
        'public',
        extractable,
        {
          name: 'Ed25519'
        },
        usages,
        publicKey
      )
    }
    case 'pkcs8': {
      for (const usage of usages) {
        if (usage !== 'sign') {
          throw new SyntaxError(
            `Usage '${usage}' cannot be used for the Ed25519 importKey() operation`
          )
        }
      }

      const privateKey = new Ed25519PrivateKey()

      binding.ed25519FromPKCS8(privateKey, keyData.buffer, keyData.byteOffset, keyData.byteLength)

      return new CryptoKey(
        'private',
        extractable,
        {
          name: 'Ed25519'
        },
        usages,
        privateKey
      )
    }
    case 'raw':
      for (const usage of usages) {
        if (usage !== 'verify') {
          throw new SyntaxError(
            `Usage '${usage}' cannot be used for the Ed25519 importKey() operation`
          )
        }
      }

      if (keyData.byteLength * 8 !== 256) {
        throw errors.INVALID_DATA('Key must be 256 bits')
      }

      return new CryptoKey(
        'public',
        extractable,
        {
          name: 'Ed25519'
        },
        usages,
        new Ed25519PublicKey(keyData.buffer)
      )
    case 'jwk': {
      const jwk = keyData

      if ('d' in jwk) {
        if (usages.some((usage) => usage !== 'sign')) {
          throw new SyntaxError('JWK must be valid for signing')
        }
      } else {
        if (usages.some((usage) => usage !== 'verify')) {
          throw new SyntaxError('JWK must be valid for verification')
        }
      }

      if (jwk.kty !== 'OKP') {
        throw errors.INVALID_DATA('JWK key must be an octet key-pair')
      }

      if (jwk.crv !== 'Ed25519') {
        throw errors.INVALID_DATA('JWK must use the Ed25519 curve')
      }

      if ('alg' in jwk && jwk.alg !== 'Ed25519' && jwk.alg !== 'EdDSA') {
        throw errors.INVALID_DATA('JWK must use the Ed25519 curve')
      }

      if (usages.length && 'use' in jwk && jwk.use !== 'sig') {
        throw errors.INVALID_DATA('JWK cannot be used for signatures')
      }

      if ('ext' in jwk && jwk.ext !== extractable && extractable) {
        throw errors.INVALID_DATA('JWK is not extractable')
      }

      if ('d' in jwk) {
        const key = Buffer.concat([
          Buffer.from(jwk.d, 'base64url'),
          Buffer.from(jwk.x, 'base64url')
        ])

        if (key.byteLength * 8 !== 512) {
          throw errors.INVALID_DATA('Key must be 512 bits')
        }

        const handle = new Ed25519PrivateKey(key.buffer)

        key.fill(0)

        return new CryptoKey(
          'private',
          extractable,
          {
            name: 'Ed25519'
          },
          usages,
          handle
        )
      }

      const key = Buffer.from(jwk.x, 'base64url')

      if (key.byteLength * 8 !== 256) {
        throw errors.INVALID_DATA('Key must be 256 bits')
      }

      return new CryptoKey(
        'public',
        extractable,
        {
          name: 'Ed25519'
        },
        usages,
        new Ed25519PublicKey(key.buffer)
      )
    }
    default:
      throw errors.NOT_SUPPORTED(
        `Format '${format}' cannot be used for the Ed25519 importKey() operation`
      )
  }
}

// https://w3c.github.io/webcrypto/#ed25519-operations-export-key
exports.exportKey = function exportKey(format, key) {
  const data = key._handle

  switch (format) {
    case 'spki':
      if (key.type !== 'public') {
        throw errors.INVALID_ACCESS(
          `Key of type '${key.type}' cannot be used for the Ed25519 exportKey() operation`
        )
      }

      return binding.ed25519ToSPKI(data)
    case 'pkcs8':
      if (key.type !== 'private') {
        throw errors.INVALID_ACCESS(
          `Key of type '${key.type}' cannot be used for the Ed25519 exportKey() operation`
        )
      }

      return binding.ed25519ToPKCS8(data)
    case 'raw': {
      if (key.type !== 'public') {
        throw errors.INVALID_ACCESS(
          `Key of type '${key.type}' cannot be used for the Ed25519 exportKey() operation`
        )
      }

      return data.export().buffer
    }
    case 'jwk': {
      const buffer = data.export()

      if (key.type === 'private') {
        const d = buffer.subarray(0, 32).toString('base64url')
        const x = buffer.subarray(32).toString('base64url')

        return {
          kty: 'OKP',
          alg: 'Ed25519',
          crv: 'Ed25519',
          x,
          d,
          key_ops: key.usages,
          ext: key.extractable
        }
      }

      return {
        kty: 'OKP',
        alg: 'Ed25519',
        crv: 'Ed25519',
        x: buffer.toString('base64url'),
        key_ops: key.usages,
        ext: key.extractable
      }
    }
    default:
      throw errors.NOT_SUPPORTED(
        `Format '${format}' cannot be used for the HMAC exportKey() operation`
      )
  }
}
const crypto = require('../../..')
const errors = require('../../errors')
const { SecretKey } = require('../../key')
const CryptoKey = require('../crypto-key')

// https://w3c.github.io/webcrypto/#hmac

// https://w3c.github.io/webcrypto/#hmac-operations-sign
exports.sign = function sign(algorithm, key, data) {
  const material = key._handle.export()

  const digest = crypto.createHmac(key.algorithm.hash.name, material).update(data).digest()

  return digest.buffer.slice(0, digest.byteLength)
}

// https://w3c.github.io/webcrypto/#hmac-operations-verify
exports.verify = function verify(algorithm, key, signature, data) {
  const material = key._handle.export()

  const digest = crypto.createHmac(key.algorithm.hash.name, material).update(data).digest()

  if (ArrayBuffer.isView(signature)) {
    signature = Buffer.coerce(signature)
  } else {
    signature = Buffer.from(signature)
  }

  if (signature.byteLength !== digest.byteLength) return false

  return crypto.timingSafeEqual(signature, digest)
}

// https://w3c.github.io/webcrypto/#hmac-operations-generate-key
exports.generateKey = function generateKey(algorithm, extractable, usages) {
  for (const usage of usages) {
    if (usage !== 'sign' && usage !== 'verify') {
      throw new SyntaxError(`Usage '${usage}' cannot be used for the HMAC generateKey() operation`)
    }
  }

  const length = exports.getKeyLength(algorithm)

  let hash = algorithm.hash

  if (typeof hash === 'string') hash = { name: hash }

  const key = crypto.randomBytes(length / 8)

  const handle = new SecretKey(key)

  key.fill(0)

  return new CryptoKey(
    'secret',
    extractable,
    {
      name: 'HMAC',
      length,
      hash: {
        name: hash.name.toUpperCase()
      }
    },
    usages,
    handle
  )
}

// https://w3c.github.io/webcrypto/#hmac-operations-import-key
exports.importKey = function importKey(format, keyData, algorithm, extractable, usages) {
  for (const usage of usages) {
    if (usage !== 'sign' && usage !== 'verify') {
      throw new SyntaxError(`Invalid usage ${usage}`)
    }
  }

  let hash = algorithm.hash

  if (typeof hash === 'string') hash = { name: hash }

  let data
  let owned = false

  switch (format) {
    case 'raw':
      data = keyData
      break
    case 'jwk': {
      const jwk = keyData

      if (jwk.kty !== 'oct') {
        throw errors.INVALID_DATA('JWK key must be an octet sequence')
      }

      data = Buffer.from(jwk.k, 'base64url')
      owned = true

      switch (hash.name.toLowerCase()) {
        case 'sha-1':
          if (jwk.alg === 'HS1') break
          else throw errors.INVALID_DATA('Invalid JWK key algorithm')
        case 'sha-256':
          if (jwk.alg === 'HS256') break
          else throw errors.INVALID_DATA('Invalid JWK key algorithm')
        case 'sha-384':
          if (jwk.alg === 'HS384') break
          else throw errors.INVALID_DATA('Invalid JWK key algorithm')
        case 'sha-512':
          if (jwk.alg === 'HS512') break
          else throw errors.INVALID_DATA('Invalid JWK key algorithm')
      }

      if (usages.length && 'use' in jwk && jwk.use !== 'sign') {
        throw errors.INVALID_DATA('JWK cannot be used for signing')
      }

      if ('ext' in jwk && jwk.ext !== extractable && extractable) {
        throw errors.INVALID_DATA('JWK is not extractable')
      }
      break
    }
    default:
      throw errors.NOT_SUPPORTED(
        `Format '${format}' cannot be used for the HMAC importKey() operation`
      )
  }

  const length = data.byteLength * 8

  if (length === 0) {
    throw errors.INVALID_DATA('Key cannot be empty')
  }

  const handle = new SecretKey(data)

  if (owned) data.fill(0)

  return new CryptoKey(
    'secret',
    extractable,
    {
      name: 'HMAC',
      length,
      hash: {
        name: hash.name.toUpperCase()
      }
    },
    usages,
    handle
  )
}

// https://w3c.github.io/webcrypto/#hmac-operations-export-key
exports.exportKey = function exportKey(format, key) {
  const data = key._handle.export()

  switch (format) {
    case 'raw':
      return data.buffer.slice(0, data.byteLength)
    case 'jwk': {
      const jwk = {
        kty: 'oct',
        k: data.toString('base64url'),
        alg: null,
        key_ops: key.usages,
        ext: key.extractable
      }

      switch (key.algorithm.hash.name) {
        case 'SHA-1':
          jwk.alg = 'HS1'
          break
        case 'SHA-256':
          jwk.alg = 'HS256'
          break
        case 'SHA-384':
          jwk.alg = 'HS384'
          break
        case 'SHA-512':
          jwk.alg = 'HS512'
          break
      }

      return jwk
    }
    default:
      throw errors.NOT_SUPPORTED(
        `Format '${format}' cannot be used for the HMAC exportKey() operation`
      )
  }
}

// https://w3c.github.io/webcrypto/#hmac-operations-get-key-length
exports.getKeyLength = function getKeyLength(algorithm) {
  const { length } = algorithm

  let { hash } = algorithm

  if (hash !== null && typeof hash === 'object') hash = hash.name

  if (length === undefined) {
    if (hash === 'SHA-1' || hash === 'SHA-256') return 512
    if (hash === 'SHA-384' || hash === 'SHA-512') return 1024

    throw errors.OPERATION_ERROR(`Invalid hash '${hash}'`)
  }

  if (length === 0) {
    throw errors.OPERATION_ERROR(`Invalid length ${length}`)
  }

  return length
}
const crypto = require('../../..')
const errors = require('../../errors')
const { SecretKey } = require('../../key')
const CryptoKey = require('../crypto-key')

// https://w3c.github.io/webcrypto/#pbkdf2

// https://w3c.github.io/webcrypto/#pbkdf2-operations-derive-bits
exports.deriveBits = function deriveBits(algorithm, key, length) {
  if (length === undefined || length % 8) {
    throw errors.OPERATION_ERROR('Length must be multiple of 8')
  }

  if (algorithm.iterations === 0) {
    throw errors.OPERATION_ERROR('Iterations must be non-0')
  }

  if (length === 0) {
    return new ArrayBuffer(0)
  }

  let hash = algorithm.hash

  if (typeof hash === 'string') hash = { name: hash }

  const material = key._handle.export()

  const result = crypto.pbkdf2(
    material,
    algorithm.salt,
    algorithm.iterations,
    length / 8,
    hash.name
  )

  return result.buffer
}

// https://w3c.github.io/webcrypto/#pbkdf2-operations-import-key
exports.importKey = function importKey(format, keyData, algorithm, extractable, usages) {
  if (format !== 'raw') {
    throw errors.NOT_SUPPORTED(
      `Format '${format}' cannot be used for the PBKDF2 importKey() operation`
    )
  }

  for (const usage of usages) {
    if (usage !== 'deriveKey' && usage !== 'deriveBits') {
      throw new SyntaxError(`Invalid usage ${usage}`)
    }
  }

  if (extractable) {
    throw new SyntaxError('Extractable must be false')
  }

  return new CryptoKey(
    'secret',
    extractable,
    {
      name: 'PBKDF2'
    },
    usages,
    new SecretKey(keyData)
  )
}
const crypto = require('../../..')

// https://w3c.github.io/webcrypto/#sha

// https://w3c.github.io/webcrypto/#sha-operations-digest
exports.digest = function digest(name, data) {
  const digest = crypto.createHash(name).update(data).digest()

  return digest.buffer.slice(0, digest.byteLength)
}
// https://w3c.github.io/webcrypto/#cryptokey-interface
module.exports = class CryptoKey {
  constructor(type, extractable, algorithm, usages, handle = null) {
    this._type = type
    this._extractable = extractable
    this._algorithm = algorithm
    this._usages = usages
    this._handle = handle
  }

  // https://w3c.github.io/webcrypto/#dom-cryptokey-type
  get type() {
    return this._type
  }

  // https://w3c.github.io/webcrypto/#dom-cryptokey-extractable
  get extractable() {
    return this._extractable
  }

  // https://w3c.github.io/webcrypto/#dom-cryptokey-algorithm
  get algorithm() {
    return this._algorithm
  }

  // https://w3c.github.io/webcrypto/#dom-cryptokey-usages
  get usages() {
    return this._usages
  }

  get destroyed() {
    return this._handle === null
  }

  destroy() {
    if (this._handle === null) return

    this._handle.destroy()

    this._handle = null
  }

  [Symbol.dispose]() {
    this.destroy()
  }

  [Symbol.for('bare.inspect')]() {
    return {
      __proto__: { constructor: CryptoKey },

      type: this.type,
      extractable: this.extractable,
      algorithm: this.algorithm,
      usages: this.usages
    }
  }
}
{
  "name": "bare-crypto",
  "version": "1.15.3",
  "description": "Cryptographic primitives for JavaScript",
  "exports": {
    "./package": "./package.json",
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "./web": {
      "types": "./web.d.ts",
      "default": "./web.js"
    },
    "./global": {
      "types": "./global.d.ts",
      "default": "./global.js"
    },
    "./constants": "./lib/constants.js",
    "./errors": "./lib/errors.js"
  },
  "files": [
    "index.js",
    "index.d.ts",
    "web.js",
    "web.d.ts",
    "global.js",
    "global.d.ts",
    "binding.c",
    "binding.js",
    "CMakeLists.txt",
    "lib",
    "prebuilds"
  ],
  "addon": true,
  "scripts": {
    "format": "prettier --write . && lunte --fix",
    "lint": "prettier --check . && lunte",
    "test": "brittle-bare --coverage test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/bare-crypto.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/bare-crypto/issues"
  },
  "homepage": "https://github.com/holepunchto/bare-crypto#readme",
  "dependencies": {
    "bare-assert": "^1.2.0",
    "bare-stream": "^2.6.3"
  },
  "devDependencies": {
    "bare-buffer": "^3.0.1",
    "brittle": "^3.5.0",
    "cmake-bare": "^1.1.6",
    "cmake-fetch": "^1.0.0",
    "lunte": "^1.7.0",
    "prettier": "^3.4.2",
    "prettier-config-holepunch": "^2.0.0"
  },
  "peerDependencies": {
    "bare-buffer": "*"
  },
  "peerDependenciesMeta": {
    "bare-buffer": {
      "optional": true
    }
  }
}
const crypto = require('.')
const errors = require('./lib/errors')
const CryptoKey = require('./lib/web/crypto-key')
const hmac = require('./lib/web/algorithm/hmac')
const pbkdf2 = require('./lib/web/algorithm/pbkdf2')
const ed25519 = require('./lib/web/algorithm/ed25519')
const sha = require('./lib/web/algorithm/sha')

exports.CryptoKey = CryptoKey

// https://w3c.github.io/webcrypto/#Crypto-method-getRandomValues
exports.getRandomValues = function getRandomValues(array) {
  return crypto.randomFillSync(array)
}

// https://w3c.github.io/webcrypto/#dfn-Crypto-method-randomUUID
exports.randomUUID = crypto.randomUUID

// https://w3c.github.io/webcrypto/#subtlecrypto-interface
exports.SubtleCrypto = class SubtleCrypto {
  // https://w3c.github.io/webcrypto/#SubtleCrypto-method-generateKey
  async generateKey(algorithm, extractable, usages) {
    if (typeof algorithm === 'string') algorithm = { name: algorithm }

    switch (algorithm.name.toLowerCase()) {
      case 'hmac':
        return hmac.generateKey(algorithm, extractable, usages)
      case 'ed25519':
        return ed25519.generateKey(algorithm, extractable, usages)
      default:
        throw errors.NOT_SUPPORTED(
          `Algorithm '${algorithm.name}' does not support the generateKey() operation`
        )
    }
  }

  // https://w3c.github.io/webcrypto/#SubtleCrypto-method-importKey
  async importKey(format, keyData, algorithm, extractable, usages) {
    if (typeof algorithm === 'string') algorithm = { name: algorithm }

    switch (format) {
      case 'raw':
      case 'pkcs8':
      case 'spki':
        if (ArrayBuffer.isView(keyData)) {
          keyData = Buffer.from(keyData)
        } else {
          keyData = Buffer.from(keyData.slice())
        }
        break
    }

    switch (algorithm.name.toLowerCase()) {
      case 'hmac':
        return hmac.importKey(format, keyData, algorithm, extractable, usages)
      case 'ed25519':
        return ed25519.importKey(format, keyData, algorithm, extractable, usages)
      case 'pbkdf2':
        return pbkdf2.importKey(format, keyData, algorithm, extractable, usages)
      default:
        throw errors.NOT_SUPPORTED(
          `Algorithm '${algorithm.name}' does not support the importKey() operation`
        )
    }
  }

  // https://w3c.github.io/webcrypto/#SubtleCrypto-method-exportKey
  async exportKey(format, key) {
    if (!key.extractable) {
      throw errors.INVALID_ACCESS('Key is not extractable')
    }

    switch (key.algorithm.name.toLowerCase()) {
      case 'hmac':
        return hmac.exportKey(format, key)
      case 'ed25519':
        return ed25519.exportKey(format, key)
      default:
        throw errors.NOT_SUPPORTED(
          `Algorithm '${key.algorithm.name}' does not support the exportKey() operation`
        )
    }
  }

  // https://w3c.github.io/webcrypto/#SubtleCrypto-method-sign
  async sign(algorithm, key, data) {
    if (typeof algorithm === 'string') algorithm = { name: algorithm }

    if (algorithm.name.toLowerCase() !== key.algorithm.name.toLowerCase()) {
      throw errors.INVALID_ACCESS(`Algorithm '${algorithm.name}' does not match key'`)
    }

    if (!key.usages.includes('sign')) {
      throw errors.INVALID_ACCESS('Key cannot be used for signing')
    }

    switch (algorithm.name.toLowerCase()) {
      case 'hmac':
        return hmac.sign(algorithm, key, data)
      case 'ed25519':
        return ed25519.sign(algorithm, key, data)
      default:
        throw errors.NOT_SUPPORTED(
          `Algorithm '${algorithm.name}' does not support the sign() operation`
        )
    }
  }

  // https://w3c.github.io/webcrypto/#SubtleCrypto-method-verify
  async verify(algorithm, key, signature, data) {
    if (typeof algorithm === 'string') algorithm = { name: algorithm }

    if (algorithm.name.toLowerCase() !== key.algorithm.name.toLowerCase()) {
      throw errors.INVALID_ACCESS(`Algorithm '${algorithm.name}' does not match key'`)
    }

    if (!key.usages.includes('verify')) {
      throw errors.INVALID_ACCESS('Key cannot be used for verification')
    }

    switch (algorithm.name.toLowerCase()) {
      case 'hmac':
        return hmac.verify(algorithm, key, signature, data)
      case 'ed25519':
        return ed25519.verify(algorithm, key, signature, data)
      default:
        throw errors.NOT_SUPPORTED(
          `Algorithm '${algorithm.name}' does not support the verify() operation`
        )
    }
  }

  // https://w3c.github.io/webcrypto/#SubtleCrypto-method-deriveBits
  async deriveBits(algorithm, key, length) {
    if (typeof algorithm === 'string') algorithm = { name: algorithm }

    if (algorithm.name.toLowerCase() !== key.algorithm.name.toLowerCase()) {
      throw errors.INVALID_ACCESS(`Algorithm '${algorithm.name}' does not match key'`)
    }

    if (!key.usages.includes('deriveBits')) {
      throw errors.INVALID_ACCESS('Key cannot be used to derive bits')
    }

    switch (algorithm.name.toLowerCase()) {
      case 'pbkdf2':
        return pbkdf2.deriveBits(algorithm, key, length)
      default:
        throw errors.NOT_SUPPORTED(
          `Algorithm '${algorithm.name}' does not support the deriveBits() operation`
        )
    }
  }

  // https://w3c.github.io/webcrypto/#SubtleCrypto-method-deriveKey
  async deriveKey(algorithm, baseKey, derivedKeyType, extractable, usages) {
    if (typeof algorithm === 'string') algorithm = { name: algorithm }

    if (typeof derivedKeyType === 'string') {
      derivedKeyType = { name: derivedKeyType }
    }

    if (algorithm.name.toLowerCase() !== baseKey.algorithm.name.toLowerCase()) {
      throw errors.INVALID_ACCESS(`Algorithm '${algorithm.name}' does not match key'`)
    }

    if (!baseKey.usages.includes('deriveKey')) {
      throw errors.INVALID_ACCESS('Key cannot be used to derive key')
    }

    let length

    switch (derivedKeyType.name.toLowerCase()) {
      case 'hmac':
        length = hmac.getKeyLength(derivedKeyType)
        break
      default:
        throw errors.NOT_SUPPORTED(
          `Algorithm '${derivedKeyType.name}' does not support the getKeyLength() operation`
        )
    }

    let secret

    switch (algorithm.name.toLowerCase()) {
      case 'pbkdf2':
        secret = pbkdf2.deriveBits(algorithm, baseKey, length)
        break
      default:
        throw errors.NOT_SUPPORTED(
          `Algorithm '${algorithm.name}' does not support the deriveBits() operation`
        )
    }

    return this.importKey('raw', secret, derivedKeyType, extractable, usages)
  }

  // https://w3c.github.io/webcrypto/#SubtleCrypto-method-digest
  async digest(algorithm, data) {
    if (typeof algorithm === 'string') algorithm = { name: algorithm }

    switch (algorithm.name.toLowerCase()) {
      case 'sha-1':
        return sha.digest(crypto.constants.hash.SHA1, data)
      case 'sha-256':
        return sha.digest(crypto.constants.hash.SHA256, data)
      case 'sha-384':
        return sha.digest(crypto.constants.hash.SHA384, data)
      case 'sha-512':
        return sha.digest(crypto.constants.hash.SHA512, data)
      default:
        throw errors.NOT_SUPPORTED(
          `Algorithm '${algorithm.name}' does not support the digest() operation`
        )
    }
  }
}

exports.subtle = new exports.SubtleCrypto()

// https://w3c.github.io/webcrypto/#crypto-interface
exports.Crypto = class Crypto {
  get subtle() {
    return exports.subtle
  }

  getRandomValues(array) {
    return exports.getRandomValues(array)
  }

  randomUUID() {
    return exports.randomUUID()
  }
}
const errors = require('./lib/errors')

class EventListener {
  constructor() {
    this.list = []
    this.count = 0
  }

  append(ctx, name, fn, once) {
    this.count++
    ctx.emit('newListener', name, fn) // Emit BEFORE adding
    this.list.push([fn, once])
  }

  prepend(ctx, name, fn, once) {
    this.count++
    ctx.emit('newListener', name, fn) // Emit BEFORE adding
    this.list.unshift([fn, once])
  }

  remove(ctx, name, fn) {
    for (let i = 0, n = this.list.length; i < n; i++) {
      const l = this.list[i]

      if (l[0] === fn) {
        this.list.splice(i, 1)

        if (this.count === 1) delete ctx._events[name]

        ctx.emit('removeListener', name, fn) // Emit AFTER removing

        this.count--
        return
      }
    }
  }

  removeAll(ctx, name) {
    const list = [...this.list]
    this.list = []

    if (this.count === list.length) delete ctx._events[name]

    for (let i = list.length - 1; i >= 0; i--) {
      ctx.emit('removeListener', name, list[i][0]) // Emit AFTER removing
    }

    this.count -= list.length
  }

  emit(ctx, name, ...args) {
    const list = [...this.list]

    for (let i = 0, n = list.length; i < n; i++) {
      const l = list[i]

      if (l[1] === true) this.remove(ctx, name, l[0])

      Reflect.apply(l[0], ctx, args)
    }

    return list.length > 0
  }
}

function appendListener(ctx, name, fn, once) {
  if (ctx._events === undefined) ctx._events = Object.create(null)
  const e = ctx._events[name] || (ctx._events[name] = new EventListener())
  e.append(ctx, name, fn, once)
  return ctx
}

function prependListener(ctx, name, fn, once) {
  if (ctx._events === undefined) ctx._events = Object.create(null)
  const e = ctx._events[name] || (ctx._events[name] = new EventListener())
  e.prepend(ctx, name, fn, once)
  return ctx
}

function removeListener(ctx, name, fn) {
  if (ctx._events === undefined) return ctx
  const e = ctx._events[name]
  if (e !== undefined) e.remove(ctx, name, fn)
  return ctx
}

function throwUnhandledError(...args) {
  let err

  if (args.length > 0) err = args[0]

  if (err instanceof Error === false) err = errors.UNHANDLED_ERROR(err)

  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, exports.prototype.emit)
  }

  queueMicrotask(() => {
    throw err
  })
}

module.exports = exports = class EventEmitter {
  constructor() {
    this._events = Object.create(null)
  }

  addListener(name, fn) {
    return appendListener(this, name, fn, false)
  }

  addOnceListener(name, fn) {
    return appendListener(this, name, fn, true)
  }

  prependListener(name, fn) {
    return prependListener(this, name, fn, false)
  }

  prependOnceListener(name, fn) {
    return prependListener(this, name, fn, true)
  }

  removeListener(name, fn) {
    return removeListener(this, name, fn)
  }

  on(name, fn) {
    return appendListener(this, name, fn, false)
  }

  once(name, fn) {
    return appendListener(this, name, fn, true)
  }

  off(name, fn) {
    return removeListener(this, name, fn)
  }

  emit(name, ...args) {
    if (name === 'error' && this._events !== undefined && this._events.error === undefined) {
      throwUnhandledError(...args)
    }

    if (this._events === undefined) return false
    const e = this._events[name]
    return e === undefined ? false : e.emit(this, name, ...args)
  }

  listeners(name) {
    if (this._events === undefined) return []
    const e = this._events[name]
    return e === undefined ? [] : [...e.list]
  }

  rawListeners(name) {
    if (this._events === undefined) return []
    const e = this._events[name]
    return e === undefined ? [] : e.list.map((l) => l[0])
  }

  eventNames() {
    if (this._events === undefined) return []
    return Reflect.ownKeys(this._events)
  }

  listenerCount(name) {
    if (this._events === undefined) return 0
    const e = this._events[name]
    return e === undefined ? 0 : e.list.length
  }

  getMaxListeners() {
    return EventEmitter.defaultMaxListeners
  }

  setMaxListeners(n) {}

  removeAllListeners(name) {
    if (arguments.length === 0) {
      for (const key of Reflect.ownKeys(this._events)) {
        if (key === 'removeListener') continue
        this.removeAllListeners(key)
      }
      this.removeAllListeners('removeListener')
    } else {
      const e = this._events[name]
      if (e !== undefined) e.removeAll(this, name)
    }
    return this
  }
}

exports.EventEmitter = exports

exports.errors = errors

exports.defaultMaxListeners = 10

exports.on = function on(emitter, name, opts = {}) {
  const { signal } = opts

  if (signal && signal.aborted) {
    throw errors.OPERATION_ABORTED(signal.reason)
  }

  let error = null
  let done = false

  const events = []
  const promises = []

  if (name !== 'error') emitter.on('error', onerror)

  if (signal) signal.addEventListener('abort', onabort)

  emitter.on(name, onevent)

  return {
    next() {
      if (events.length) {
        return Promise.resolve({ value: events.shift(), done: false })
      }

      if (error) {
        const err = error

        error = null

        return Promise.reject(err)
      }

      if (done) return onclose()

      return new Promise((resolve, reject) => promises.push({ resolve, reject }))
    },

    return() {
      return onclose()
    },

    throw(err) {
      return onerror(err)
    },

    [Symbol.asyncIterator]() {
      return this
    }
  }

  function onevent(...args) {
    if (promises.length) {
      promises.shift().resolve({ value: args, done: false })
    } else {
      events.push(args)
    }
  }

  function onerror(err) {
    emitter.off(name, onevent).off('error', onerror)

    if (promises.length) {
      promises.shift().reject(err)
    } else {
      error = err
    }

    return Promise.resolve({ done: true })
  }

  function onabort() {
    signal.removeEventListener('abort', onabort)

    onerror(errors.OPERATION_ABORTED(signal.reason))
  }

  function onclose() {
    emitter.off(name, onevent)

    if (name !== 'error') emitter.off('error', onerror)

    if (signal) signal.removeEventListener('abort', onabort)

    done = true

    if (promises.length) promises.shift().resolve({ done: true })

    return Promise.resolve({ done: true })
  }
}

exports.once = function once(emitter, name, opts = {}) {
  const { signal } = opts

  if (signal && signal.aborted) {
    return Promise.reject(errors.OPERATION_ABORTED(signal.reason))
  }

  return new Promise((resolve, reject) => {
    if (name !== 'error') emitter.on('error', onerror)

    if (signal) signal.addEventListener('abort', onabort)

    emitter.once(name, onevent)

    function onevent(...args) {
      if (name !== 'error') emitter.off('error', onerror)

      if (signal) signal.removeEventListener('abort', onabort)

      resolve(args)
    }

    function onerror(err) {
      emitter.off(name, onevent)

      if (name !== 'error') emitter.off('error', onerror)

      reject(err)
    }

    function onabort() {
      signal.removeEventListener('abort', onabort)

      onerror(errors.OPERATION_ABORTED(signal.reason))
    }
  })
}

exports.forward = function forward(from, to, names, opts = {}) {
  if (typeof names === 'string') names = [names]

  const { emit = to.emit.bind(to) } = opts

  const listeners = names.map(
    (name) =>
      function onevent(...args) {
        emit(name, ...args)
      }
  )

  to.on('newListener', (name) => {
    const i = names.indexOf(name)

    if (i !== -1 && to.listenerCount(name) === 0) {
      from.on(name, listeners[i])
    }
  }).on('removeListener', (name) => {
    const i = names.indexOf(name)

    if (i !== -1 && to.listenerCount(name) === 0) {
      from.off(name, listeners[i])
    }
  })
}

exports.listenerCount = function listenerCount(emitter, name) {
  return emitter.listenerCount(name)
}

exports.getMaxListeners = function getMaxListeners(emitter) {
  if (typeof emitter.getMaxListeners === 'function') {
    return emitter.getMaxListeners()
  }

  return exports.defaultMaxListeners
}

exports.setMaxListeners = function setMaxListeners(n, ...emitters) {
  if (emitters.length === 0) exports.defaultMaxListeners = n
  else {
    for (const emitter of emitters) {
      if (typeof emitter.setMaxListeners === 'function') {
        emitter.setMaxListeners(n)
      }
    }
  }
}
module.exports = class EventEmitterError extends Error {
  constructor(msg, code, fn = EventEmitterError, opts) {
    super(`${code}: ${msg}`, opts)
    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, fn)
    }
  }

  get name() {
    return 'EventEmitterError'
  }

  static OPERATION_ABORTED(cause, msg = 'Operation aborted') {
    return new EventEmitterError(msg, 'OPERATION_ABORTED', EventEmitterError.OPERATION_ABORTED, {
      cause
    })
  }

  static UNHANDLED_ERROR(cause, msg = 'Unhandled error') {
    return new EventEmitterError(msg, 'UNHANDLED_ERROR', EventEmitterError.UNHANDLED_ERROR, {
      cause
    })
  }
}
{
  "name": "bare-events",
  "version": "2.9.1",
  "description": "Event emitters for JavaScript",
  "exports": {
    "./package": "./package.json",
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "./global": {
      "types": "./global.d.ts",
      "default": "./global.js"
    },
    "./web": {
      "types": "./web.d.ts",
      "default": "./web.js"
    },
    "./errors": "./lib/errors.js"
  },
  "files": [
    "index.js",
    "index.d.ts",
    "global.js",
    "global.d.ts",
    "web.js",
    "web.d.ts",
    "lib"
  ],
  "scripts": {
    "format": "prettier --write . && lunte --fix",
    "lint": "prettier --check . && lunte",
    "test": "npm run test:bare && npm run test:node",
    "test:bare": "brittle-bare --coverage test.js",
    "test:node": "brittle-node --coverage test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/bare-events.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/bare-events/issues"
  },
  "homepage": "https://github.com/holepunchto/bare-events#readme",
  "devDependencies": {
    "bare-abort-controller": "^1.0.0",
    "brittle": "^3.3.2",
    "lunte": "^1.8.0",
    "prettier": "^3.4.2",
    "prettier-config-holepunch": "^2.0.0",
    "uncaughts": "^1.1.1"
  },
  "peerDependencies": {
    "bare-abort-controller": "*"
  },
  "peerDependenciesMeta": {
    "bare-abort-controller": {
      "optional": true
    }
  }
}
module.exports = require.addon()
const FIFO = require('fast-fifo')
const EventEmitter = require('bare-events')
const path = require('bare-path')
const { isURL, fileURLToPath } = require('bare-url')
const { Readable, Writable } = require('bare-stream')
const binding = require('./binding')
const constants = require('./lib/constants')
const FileError = require('./lib/errors')

const isWindows = Bare.platform === 'win32'

exports.constants = constants

class FileRequest {
  static borrow() {
    if (this._free.length > 0) return this._free.pop()
    return new FileRequest()
  }

  static return(req) {
    if (this._free.length < 32) this._free.push(req.reset())
    else req.destroy()
  }

  constructor() {
    this._reset()
    this._handle = binding.requestInit(this, this._onresult)
  }

  get handle() {
    return this._handle
  }

  retain(value) {
    this._retain = value // Tie the lifetime of `value` to the lifetime of `this`
  }

  reset() {
    if (this._handle === null) return this

    binding.requestReset(this._handle)

    this._reset()

    return this
  }

  destroy() {
    if (this._handle === null) return this

    binding.requestDestroy(this._handle)

    this._reset()
    this._handle = null

    return this
  }

  then(resolve, reject) {
    return this._promise.then(resolve, reject)
  }

  return() {
    if (this._handle === null) return this

    FileRequest.return(this)

    return this
  }

  _reset() {
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve
      this._reject = reject
    })
    this._retain = null
  }

  _onresult(err, status) {
    if (err) this._reject(err)
    else this._resolve(status)
  }
}

FileRequest._free = []

function ok(result, cb) {
  if (typeof result === 'function') {
    cb = result
    result = undefined
  }

  if (cb) cb(null, result)
  else return result
}

function fail(err, cb) {
  if (cb) cb(err)
  else throw err
}

function done(err, result, cb) {
  if (typeof result === 'function') {
    cb = result
    result = undefined
  }

  if (err) fail(err, cb)
  else return ok(result, cb)
}

async function open(filepath, flags = 'r', mode = 0o666, cb) {
  if (typeof flags === 'function') {
    cb = flags
    flags = 'r'
    mode = 0o666
  } else if (typeof mode === 'function') {
    cb = mode
    mode = 0o666
  }

  if (typeof flags === 'string') flags = toFlags(flags)
  if (typeof mode === 'string') mode = toMode(mode)

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let fd
  let err = null
  try {
    binding.open(req.handle, filepath, flags, mode)

    fd = await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'open',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, fd, cb)
}

function openSync(filepath, flags = 'r', mode = 0o666) {
  if (typeof flags === 'string') flags = toFlags(flags)
  if (typeof mode === 'string') mode = toMode(mode)

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    return binding.openSync(req.handle, filepath, flags, mode)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'open',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function close(fd, cb) {
  const req = FileRequest.borrow()

  let err = null
  try {
    binding.close(req.handle, fd)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'close', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function closeSync(fd) {
  const req = FileRequest.borrow()

  try {
    binding.closeSync(req.handle, fd)
  } catch (e) {
    throw new FileError(e.message, { operation: 'close', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function access(filepath, mode = constants.F_OK, cb) {
  if (typeof mode === 'function') {
    cb = mode
    mode = constants.F_OK
  }

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.access(req.handle, filepath, mode)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'access',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function accessSync(filepath, mode = constants.F_OK) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.accessSync(req.handle, filepath, mode)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'access',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function exists(filepath, cb) {
  let ok = true
  try {
    await access(filepath)
  } catch {
    ok = false
  }

  return done(null, ok, cb)
}

function existsSync(filepath) {
  try {
    accessSync(filepath)
  } catch {
    return false
  }

  return true
}

async function read(fd, buffer, offset = 0, len = buffer.byteLength - offset, pos = -1, cb) {
  if (typeof offset === 'function') {
    cb = offset
    offset = 0
    len = buffer.byteLength
    pos = -1
  } else if (typeof len === 'function') {
    cb = len
    len = buffer.byteLength - offset
    pos = -1
  } else if (typeof pos === 'function') {
    cb = pos
    pos = -1
  }

  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  let bytes
  let err = null
  try {
    binding.read(req.handle, fd, buffer, offset, len, pos)

    req.retain(buffer)

    bytes = await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'read', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, bytes, cb)
}

function readSync(fd, buffer, offset = 0, len = buffer.byteLength - offset, pos = -1) {
  const req = FileRequest.borrow()

  try {
    return binding.readSync(req.handle, fd, buffer, offset, len, pos)
  } catch (e) {
    throw new FileError(e.message, { operation: 'read', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function readv(fd, buffers, pos = -1, cb) {
  if (typeof pos === 'function') {
    cb = pos
    pos = -1
  }

  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  let bytes
  let err = null
  try {
    binding.readv(req.handle, fd, buffers, pos)

    req.retain(buffers)

    bytes = await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'readv', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, bytes, cb)
}

function readvSync(fd, buffers, pos = -1) {
  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  try {
    return binding.readvSync(req.handle, fd, buffers, pos)
  } catch (e) {
    throw new FileError(e.message, { operation: 'readv', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function write(fd, data, offset, len, pos = -1, cb) {
  if (typeof data === 'string') {
    let encoding = len
    cb = pos
    pos = offset

    if (typeof pos === 'function') {
      cb = pos
      pos = -1
      encoding = 'utf8'
    } else if (typeof encoding === 'function') {
      cb = encoding
      encoding = 'utf8'
    }

    if (typeof pos === 'string') {
      encoding = pos
      pos = -1
    }

    data = Buffer.from(data, encoding)
    offset = 0
    len = data.byteLength
  } else if (typeof offset === 'function') {
    cb = offset
    offset = 0
    len = data.byteLength
    pos = -1
  } else if (typeof len === 'function') {
    cb = len
    len = data.byteLength - offset
    pos = -1
  } else if (typeof pos === 'function') {
    cb = pos
    pos = -1
  }

  if (typeof offset !== 'number') offset = 0
  if (typeof len !== 'number') len = data.byteLength - offset
  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  let bytes
  let err = null
  try {
    binding.write(req.handle, fd, data, offset, len, pos)

    req.retain(data)

    bytes = await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'write', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, bytes, cb)
}

function writeSync(fd, data, offset, len, pos = -1) {
  if (typeof data === 'string') {
    let encoding = len
    pos = offset

    if (typeof pos === 'string') {
      encoding = pos
      pos = -1
    }

    data = Buffer.from(data, encoding)
    offset = 0
    len = data.byteLength
  }

  if (typeof offset !== 'number') offset = 0
  if (typeof len !== 'number') len = data.byteLength - offset
  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  try {
    return binding.writeSync(req.handle, fd, data, offset, len, pos)
  } catch (e) {
    throw new FileError(e.message, { operation: 'write', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function writev(fd, buffers, pos = -1, cb) {
  if (typeof pos === 'function') {
    cb = pos
    pos = -1
  }

  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  let bytes
  let err = null
  try {
    binding.writev(req.handle, fd, buffers, pos)

    req.retain(buffers)

    bytes = await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'writev', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, bytes, cb)
}

function writevSync(fd, buffers, pos = -1) {
  if (typeof pos !== 'number') pos = -1

  const req = FileRequest.borrow()

  try {
    return binding.writevSync(req.handle, fd, buffers, pos)
  } catch (e) {
    throw new FileError(e.message, { operation: 'writev', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function stat(filepath, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let st
  let err = null
  try {
    binding.stat(req.handle, filepath)

    await req

    st = new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    err = new FileError(e.message, { operation: 'stat', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, st, cb)
}

function statSync(filepath) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.statSync(req.handle, filepath)

    return new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    throw new FileError(e.message, { operation: 'stat', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function lstat(filepath, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let st
  let err = null
  try {
    binding.lstat(req.handle, filepath)

    await req

    st = new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    err = new FileError(e.message, { operation: 'lstat', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, st, cb)
}

function lstatSync(filepath) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.lstatSync(req.handle, filepath)

    return new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    throw new FileError(e.message, { operation: 'lstat', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function fstat(fd, cb) {
  const req = FileRequest.borrow()

  let st
  let err = null
  try {
    binding.fstat(req.handle, fd)

    await req

    st = new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    err = new FileError(e.message, { operation: 'fstat', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, st, cb)
}

function fstatSync(fd) {
  const req = FileRequest.borrow()

  try {
    binding.fstatSync(req.handle, fd)

    return new Stats(...binding.requestResultStat(req.handle))
  } catch (e) {
    throw new FileError(e.message, { operation: 'fstat', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function statfs(filepath, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let st
  let err = null
  try {
    binding.statfs(req.handle, filepath)

    await req

    st = new StatFs(...binding.requestResultStatfs(req.handle))
  } catch (e) {
    err = new FileError(e.message, { operation: 'statfs', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, st, cb)
}

function statfsSync(filepath) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.statfsSync(req.handle, filepath)

    return new StatFs(...binding.requestResultStatfs(req.handle))
  } catch (e) {
    throw new FileError(e.message, { operation: 'statfs', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function ftruncate(fd, len = 0, cb) {
  if (typeof len === 'function') {
    cb = len
    len = 0
  }

  if (typeof len !== 'number') len = 0

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.ftruncate(req.handle, fd, len)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'ftruncate', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function ftruncateSync(fd, len = 0) {
  if (typeof len !== 'number') len = 0

  const req = FileRequest.borrow()

  try {
    binding.ftruncateSync(req.handle, fd, len)
  } catch (e) {
    throw new FileError(e.message, { operation: 'ftruncate', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function truncate(filepath, len, cb) {
  let fd = -1
  let err

  try {
    fd = await open(filepath, 'r+')

    await ftruncate(fd, len)
  } catch (e) {
    err = e
  } finally {
    if (fd !== -1) await close(fd)
  }

  return done(err, cb)
}

function truncateSync(filepath, len) {
  let fd = -1
  let err

  try {
    fd = openSync(filepath, 'r+')

    ftruncateSync(fd, len)
  } catch (e) {
    err = e
  } finally {
    if (fd !== -1) closeSync(fd)
  }
}

async function chmod(filepath, mode, cb) {
  if (typeof mode === 'string') mode = toMode(mode)

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.chmod(req.handle, filepath, mode)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'chmod',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function chmodSync(filepath, mode) {
  if (typeof mode === 'string') mode = toMode(mode)

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.chmodSync(req.handle, filepath, mode)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'chmod',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function fchmod(fd, mode, cb) {
  if (typeof mode === 'string') mode = toMode(mode)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.fchmod(req.handle, fd, mode)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'fchmod', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function fchmodSync(fd, mode) {
  if (typeof mode === 'string') mode = toMode(mode)

  const req = FileRequest.borrow()

  try {
    binding.fchmodSync(req.handle, fd, mode)
  } catch (e) {
    throw new FileError(e.message, { operation: 'fchmod', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function chown(filepath, uid, gid, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.chown(req.handle, filepath, uid, gid)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'chown', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function chownSync(filepath, uid, gid) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.chownSync(req.handle, filepath, uid, gid)
  } catch (e) {
    throw new FileError(e.message, { operation: 'chownSync', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function lchown(filepath, uid, gid, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.lchown(req.handle, filepath, uid, gid)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'lchown', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function lchownSync(filepath, uid, gid) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.lchownSync(req.handle, filepath, uid, gid)
  } catch (e) {
    throw new FileError(e.message, { operation: 'lchownSync', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function fchown(fd, uid, gid, cb) {
  const req = FileRequest.borrow()

  let err = null
  try {
    binding.fchown(req.handle, fd, uid, gid)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'fchown', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function fchownSync(fd, uid, gid) {
  const req = FileRequest.borrow()

  try {
    binding.fchownSync(req.handle, fd, uid, gid)
  } catch (e) {
    throw new FileError(e.message, { operation: 'fchownSync', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function utimes(filepath, atime, mtime, cb) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.utimes(req.handle, filepath, atime, mtime)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'utimes', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function utimesSync(filepath, atime, mtime) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.utimesSync(req.handle, filepath, atime, mtime)
  } catch (e) {
    throw new FileError(e.message, { operation: 'utimes', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function lutimes(filepath, atime, mtime, cb) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.lutimes(req.handle, filepath, atime, mtime)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'lutimes', code: e.code, path: filepath })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function lutimesSync(filepath, atime, mtime) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.lutimesSync(req.handle, filepath, atime, mtime)
  } catch (e) {
    throw new FileError(e.message, { operation: 'lutimes', code: e.code, path: filepath })
  } finally {
    req.return()
  }
}

async function futimes(fd, atime, mtime, cb) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.futimes(req.handle, fd, atime, mtime)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'futimes', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function futimesSync(fd, atime, mtime) {
  if (typeof atime !== 'number') atime = atime.getTime() / 1000
  if (typeof mtime !== 'number') mtime = mtime.getTime() / 1000

  const req = FileRequest.borrow()

  try {
    binding.futimesSync(req.handle, fd, atime, mtime)
  } catch (e) {
    throw new FileError(e.message, { operation: 'futimesSync', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function link(src, dst, cb) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.link(req.handle, src, dst)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'link', code: e.code, path: src, destination: dst })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function linkSync(src, dst) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  try {
    binding.linkSync(req.handle, src, dst)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'linkSync',
      code: e.code,
      path: src,
      destination: dst
    })
  } finally {
    req.return()
  }
}

async function mkdir(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = { mode: 0o777 }
  }

  if (typeof opts === 'number') opts = { mode: opts }
  else if (!opts) opts = {}

  const mode = typeof opts.mode === 'number' ? opts.mode : 0o777

  filepath = toNamespacedPath(filepath)

  if (opts.recursive) {
    let err = null
    try {
      try {
        await mkdir(filepath, { mode })
      } catch (err) {
        if (err.code !== 'ENOENT') {
          if (!(await stat(filepath)).isDirectory()) throw err
        } else {
          while (filepath.endsWith(path.sep)) filepath = filepath.slice(0, -1)
          const i = filepath.lastIndexOf(path.sep)
          if (i <= 0) throw err

          await mkdir(filepath.slice(0, i), { mode, recursive: true })

          try {
            await mkdir(filepath, { mode })
          } catch (err) {
            if (!(await stat(filepath)).isDirectory()) throw err
          }
        }
      }
    } catch (e) {
      err = e
    }

    return done(err, cb)
  }

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.mkdir(req.handle, filepath, mode)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'mkdir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function mkdirSync(filepath, opts) {
  if (typeof opts === 'number') opts = { mode: opts }
  else if (!opts) opts = {}

  const mode = typeof opts.mode === 'number' ? opts.mode : 0o777

  filepath = toNamespacedPath(filepath)

  if (opts.recursive) {
    try {
      mkdirSync(filepath, { mode })
    } catch (err) {
      if (err.code !== 'ENOENT') {
        if (!statSync(filepath).isDirectory()) throw err
      } else {
        while (filepath.endsWith(path.sep)) filepath = filepath.slice(0, -1)
        const i = filepath.lastIndexOf(path.sep)
        if (i <= 0) throw err

        mkdirSync(filepath.slice(0, i), { mode, recursive: true })

        try {
          mkdirSync(filepath, { mode })
        } catch (err) {
          if (!statSync(filepath).isDirectory()) throw err
        }
      }
    }

    return
  }

  const req = FileRequest.borrow()

  try {
    binding.mkdirSync(req.handle, filepath, mode)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'mkdir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function mkdtemp(prefix, cb) {
  prefix = toNamespacedPath(prefix)

  const req = FileRequest.borrow()

  let res
  let err = null
  try {
    binding.mkdtemp(req.handle, prefix + 'XXXXXX')

    await req

    res = binding.requestResultPath(req.handle)
  } catch (e) {
    err = new FileError(e.message, { operation: 'mkdtemp', code: e.code, path: prefix })
  } finally {
    req.return()
  }

  return done(err, res, cb)
}

function mkdtempSync(prefix) {
  prefix = toNamespacedPath(prefix)

  const req = FileRequest.borrow()

  try {
    binding.mkdtempSync(req.handle, prefix + 'XXXXXX')

    return binding.requestResultPath(req.handle)
  } catch (e) {
    throw new FileError(e.message, { operation: 'mkdtempSync', code: e.code, path: prefix })
  } finally {
    req.return()
  }
}

async function rmdir(filepath, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.rmdir(req.handle, filepath)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'rmdir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function rmdirSync(filepath) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.rmdirSync(req.handle, filepath)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'rmdir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function rm(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (!opts) opts = {}

  filepath = toNamespacedPath(filepath)

  let err = null
  try {
    const st = await lstat(filepath)

    if (st.isDirectory()) {
      if (opts.recursive) {
        try {
          await rmdir(filepath)
        } catch (err) {
          if (err.code !== 'ENOTEMPTY') throw err

          const files = await readdir(filepath)

          for (const file of files) {
            await rm(filepath + path.sep + file, opts)
          }

          await rmdir(filepath)
        }
      } else {
        throw new FileError('is a directory', {
          operation: 'rm',
          code: 'EISDIR',
          path: filepath
        })
      }
    } else {
      await unlink(filepath)
    }
  } catch (e) {
    if (e.code !== 'ENOENT' || !opts.force) err = e
  }

  return done(err, cb)
}

function rmSync(filepath, opts) {
  if (!opts) opts = {}

  filepath = toNamespacedPath(filepath)

  try {
    const st = lstatSync(filepath)

    if (st.isDirectory()) {
      if (opts.recursive) {
        try {
          rmdirSync(filepath)
        } catch (err) {
          if (err.code !== 'ENOTEMPTY') throw err

          const files = readdirSync(filepath)

          for (const file of files) {
            rmSync(filepath + path.sep + file, opts)
          }

          rmdirSync(filepath)
        }
      } else {
        throw new FileError('is a directory', {
          operation: 'rm',
          code: 'EISDIR',
          path: filepath
        })
      }
    } else {
      unlinkSync(filepath)
    }
  } catch (err) {
    if (err.code !== 'ENOENT' || !opts.force) throw err
  }
}

async function unlink(filepath, cb) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.unlink(req.handle, filepath)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'unlink',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function unlinkSync(filepath) {
  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.unlinkSync(req.handle, filepath)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'unlink',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function rename(src, dst, cb) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.rename(req.handle, src, dst)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'rename',
      code: e.code,
      path: src,
      destination: dst
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function renameSync(src, dst) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  try {
    binding.renameSync(req.handle, src, dst)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'rename',
      code: e.code,
      path: src,
      destination: dst
    })
  } finally {
    req.return()
  }
}

async function copyFile(src, dst, mode = 0, cb) {
  if (typeof mode === 'function') {
    cb = mode
    mode = 0
  }

  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.copyfile(req.handle, src, dst, mode)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'copyfile',
      code: e.code,
      path: src,
      destination: dst
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function copyFileSync(src, dst, mode = 0) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const req = FileRequest.borrow()

  try {
    binding.copyfileSync(req.handle, src, dst, mode)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'copyfile',
      code: e.code,
      path: src,
      destination: dst
    })
  } finally {
    req.return()
  }
}

async function cp(src, dst, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (!opts) opts = {}

  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  let err = null
  try {
    const st = await lstat(src)

    if (st.isDirectory()) {
      if (opts.recursive !== true) {
        throw new FileError('is a directory', { operation: 'cp', code: 'EISDIR', path: src })
      }

      try {
        await lstat(dst)
      } catch (e) {
        if (e.code !== 'ENOENT') throw e

        await mkdir(dst, { mode: st.mode, recursive: true })
      }

      const dir = await opendir(src)
      for await (const { name } of dir) {
        await cp(path.join(src, name), path.join(dst, name), opts)
      }
    } else if (st.isFile()) {
      await copyFile(src, dst)
      await chmod(dst, st.mode)
    }
  } catch (e) {
    err = e
  }

  return done(err, cb)
}

function cpSync(src, dst, opts = {}) {
  src = toNamespacedPath(src)
  dst = toNamespacedPath(dst)

  const st = lstatSync(src)

  if (st.isDirectory()) {
    if (opts.recursive !== true) {
      throw new FileError('is a directory', { operation: 'cp', code: 'EISDIR', path: src })
    }

    try {
      lstatSync(dst)
    } catch (e) {
      if (e.code !== 'ENOENT') throw e

      mkdirSync(dst, { mode: st.mode, recursive: true })
    }

    const dir = opendirSync(src)
    for (const { name } of dir) {
      cpSync(path.join(src, name), path.join(dst, name), opts)
    }
  } else if (st.isFile()) {
    copyFileSync(src, dst)
    chmodSync(dst, st.mode)
  }
}

async function realpath(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'utf8' } = opts

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let res
  let err = null
  try {
    binding.realpath(req.handle, filepath)

    await req

    res = Buffer.from(binding.requestResultString(req.handle))

    if (encoding !== 'buffer') res = res.toString(encoding)
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'realpath',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, res, cb)
}

function realpathSync(filepath, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'utf8' } = opts

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.realpathSync(req.handle, filepath)

    let res = Buffer.from(binding.requestResultString(req.handle))

    if (encoding !== 'buffer') res = res.toString(encoding)

    return res
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'realpath',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function readlink(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'utf8' } = opts

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let res
  let err = null
  try {
    binding.readlink(req.handle, filepath)

    await req

    res = Buffer.from(binding.requestResultString(req.handle))

    if (encoding !== 'buffer') res = res.toString(encoding)
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'readlink',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, res, cb)
}

function readlinkSync(filepath, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'utf8' } = opts

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.readlinkSync(req.handle, filepath)

    let res = Buffer.from(binding.requestResultString(req.handle))

    if (encoding !== 'buffer') res = res.toString(encoding)

    return res
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'readlink',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function fsync(fd, cb) {
  const req = FileRequest.borrow()

  let err = null
  try {
    binding.fsync(req.handle, fd)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'fsync', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function fsyncSync(fd) {
  const req = FileRequest.borrow()

  try {
    binding.fsyncSync(req.handle, fd)
  } catch (e) {
    throw new FileError(e.message, { operation: 'fsyncSync', code: e.code, fd })
  } finally {
    req.return()
  }
}

async function fdatasync(fd, cb) {
  const req = FileRequest.borrow()

  let err = null
  try {
    binding.fdatasync(req.handle, fd)

    await req
  } catch (e) {
    err = new FileError(e.message, { operation: 'fdatasync', code: e.code, fd })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function fdatasyncSync(fd) {
  const req = FileRequest.borrow()

  try {
    binding.fdatasyncSync(req.handle, fd)
  } catch (e) {
    throw new FileError(e.message, { operation: 'fdatasyncSync', code: e.code, fd })
  } finally {
    req.return()
  }
}

function normalizeSymlinkTarget(target, type, filepath) {
  if (isWindows) {
    if (type === constants.UV_FS_SYMLINK_JUNCTION) target = path.resolve(filepath, '..', target)

    if (path.isAbsolute(target)) return path.toNamespacedPath(target)

    return target.replace(/\//g, path.sep)
  }

  return target
}

async function symlink(target, filepath, type, cb) {
  if (typeof type === 'function') {
    cb = type
    type = null
  }

  filepath = toNamespacedPath(filepath)

  if (typeof type === 'string') {
    switch (type) {
      case 'dir':
        type = constants.UV_FS_SYMLINK_DIR
        break
      case 'junction':
        type = constants.UV_FS_SYMLINK_JUNCTION
        break
      case 'file':
      default:
        type = 0
        break
    }
  } else if (typeof type !== 'number') {
    if (isWindows) {
      target = path.resolve(filepath, '..', target)

      try {
        type = (await stat(target)).isDirectory()
          ? constants.UV_FS_SYMLINK_DIR
          : constants.UV_FS_SYMLINK_JUNCTION
      } catch {
        type = 0
      }
    } else {
      type = 0
    }
  }

  target = normalizeSymlinkTarget(target, type, filepath)

  const req = FileRequest.borrow()

  let err = null
  try {
    binding.symlink(req.handle, target, filepath, type)

    await req
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'symlink',
      code: e.code,
      path: target,
      destination: filepath
    })
  } finally {
    req.return()
  }

  return done(err, cb)
}

function symlinkSync(target, filepath, type) {
  filepath = toNamespacedPath(filepath)

  if (typeof type === 'string') {
    switch (type) {
      case 'dir':
        type = constants.UV_FS_SYMLINK_DIR
        break
      case 'junction':
        type = constants.UV_FS_SYMLINK_JUNCTION
        break
      case 'file':
      default:
        type = 0
        break
    }
  } else if (typeof type !== 'number') {
    if (isWindows) {
      target = path.resolve(filepath, '..', target)

      try {
        type = statSync(target).isDirectory()
          ? constants.UV_FS_SYMLINK_DIR
          : constants.UV_FS_SYMLINK_JUNCTION
      } catch {
        type = 0
      }
    } else {
      type = 0
    }
  }

  target = normalizeSymlinkTarget(target, type, filepath)

  const req = FileRequest.borrow()

  try {
    binding.symlinkSync(req.handle, target, filepath, type)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'symlink',
      code: e.code,
      path: target,
      destination: filepath
    })
  } finally {
    req.return()
  }
}

async function opendir(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  let dir
  let err = null
  try {
    binding.opendir(req.handle, filepath)

    await req

    dir = new Dir(filepath, binding.requestResultDir(req.handle), opts)
  } catch (e) {
    err = new FileError(e.message, {
      operation: 'opendir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }

  return done(err, dir, cb)
}

function opendirSync(filepath, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  filepath = toNamespacedPath(filepath)

  const req = FileRequest.borrow()

  try {
    binding.opendirSync(req.handle, filepath)

    return new Dir(filepath, binding.requestResultDir(req.handle), opts)
  } catch (e) {
    throw new FileError(e.message, {
      operation: 'opendir',
      code: e.code,
      path: filepath
    })
  } finally {
    req.return()
  }
}

async function readdir(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { withFileTypes = false, recursive = false } = opts

  filepath = toNamespacedPath(filepath)

  const queue = [filepath]
  let result = []
  let err = null
  try {
    while (queue.length !== 0) {
      const dir = await opendir(queue.pop())

      for await (const entry of dir) {
        const entryPath = path.join(entry.parentPath, entry.name)

        if (withFileTypes) {
          result.push(entry)
        } else {
          result.push(path.relative(filepath, entryPath))
        }

        if (recursive && entry.isDirectory()) queue.push(entryPath)
      }
    }
  } catch (e) {
    result = []
    err = e
  }

  return done(err, result, cb)
}

function readdirSync(filepath, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { withFileTypes = false, recursive = false } = opts

  filepath = toNamespacedPath(filepath)

  const queue = [filepath]
  const result = []

  while (queue.length !== 0) {
    const dir = opendirSync(queue.pop(), opts)

    for (const entry of dir) {
      const entryPath = path.join(entry.parentPath, entry.name)

      if (withFileTypes) {
        result.push(entry)
      } else {
        result.push(path.relative(filepath, entryPath))
      }

      if (recursive && entry.isDirectory()) queue.push(entryPath)
    }
  }

  return result
}

async function readFile(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'buffer' } = opts

  let fd = -1
  let buffer = null
  let err = null
  try {
    fd = await open(filepath, opts.flag || 'r')

    const st = await fstat(fd)

    let len = 0

    if (st.size === 0) {
      const buffers = []

      while (true) {
        buffer = Buffer.allocUnsafe(8192)
        const r = await read(fd, buffer)
        len += r
        if (r === 0) break
        buffers.push(buffer.subarray(0, r))
      }

      buffer = Buffer.concat(buffers)
    } else {
      buffer = Buffer.allocUnsafe(st.size)

      while (true) {
        const r = await read(fd, len ? buffer.subarray(len) : buffer)
        len += r
        if (r === 0 || len === buffer.byteLength) break
      }

      if (len !== buffer.byteLength) buffer = buffer.subarray(0, len)
    }

    if (encoding !== 'buffer') buffer = buffer.toString(encoding)
  } catch (e) {
    err = e
  } finally {
    if (fd !== -1) await close(fd)
  }

  return done(err, buffer, cb)
}

function readFileSync(filepath, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  const { encoding = 'buffer' } = opts

  let fd = -1
  try {
    fd = openSync(filepath, opts.flag || 'r')

    const st = fstatSync(fd)

    let buffer
    let len = 0

    if (st.size === 0) {
      const buffers = []

      while (true) {
        buffer = Buffer.allocUnsafe(8192)
        const r = readSync(fd, buffer)
        len += r
        if (r === 0) break
        buffers.push(buffer.subarray(0, r))
      }

      buffer = Buffer.concat(buffers)
    } else {
      buffer = Buffer.allocUnsafe(st.size)

      while (true) {
        const r = readSync(fd, len ? buffer.subarray(len) : buffer)
        len += r
        if (r === 0 || len === buffer.byteLength) break
      }

      if (len !== buffer.byteLength) buffer = buffer.subarray(0, len)
    }

    if (encoding !== 'buffer') buffer = buffer.toString(encoding)

    return buffer
  } finally {
    if (fd !== -1) closeSync(fd)
  }
}

async function writeFile(filepath, data, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  if (typeof data === 'string') data = Buffer.from(data, opts.encoding)

  let fd = -1
  let len = 0
  let err = null
  try {
    fd = await open(filepath, opts.flag || 'w', opts.mode || 0o666)

    while (true) {
      len += await write(fd, len ? data.subarray(len) : data)
      if (len === data.byteLength) break
    }
  } catch (e) {
    err = e
  } finally {
    if (fd !== -1) await close(fd)
  }

  return done(err, len, cb)
}

function writeFileSync(filepath, data, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  if (typeof data === 'string') data = Buffer.from(data, opts.encoding)

  let fd = -1
  try {
    fd = openSync(filepath, opts.flag || 'w', opts.mode || 0o666)

    let len = 0

    while (true) {
      len += writeSync(fd, len ? data.subarray(len) : data)
      if (len === data.byteLength) break
    }
  } finally {
    if (fd !== -1) closeSync(fd)
  }
}

function appendFile(filepath, data, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  if (!opts.flag) opts = { ...opts, flag: 'a' }

  return writeFile(filepath, data, opts, cb)
}

function appendFileSync(filepath, data, opts) {
  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  if (!opts.flag) opts = { ...opts, flag: 'a' }

  return writeFileSync(filepath, data, opts)
}

function watch(filepath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (typeof opts === 'string') opts = { encoding: opts }
  else if (!opts) opts = {}

  filepath = toNamespacedPath(filepath)

  return new Watcher(filepath, opts, cb)
}

class Stats {
  constructor(
    dev,
    mode,
    nlink,
    uid,
    gid,
    rdev,
    blksize,
    ino,
    size,
    blocks,
    atimeMs,
    mtimeMs,
    ctimeMs,
    birthtimeMs
  ) {
    this.dev = dev
    this.mode = mode
    this.nlink = nlink
    this.uid = uid
    this.gid = gid
    this.rdev = rdev
    this.blksize = blksize
    this.ino = ino
    this.size = size
    this.blocks = blocks
    this.atimeMs = atimeMs
    this.mtimeMs = mtimeMs
    this.ctimeMs = ctimeMs
    this.birthtimeMs = birthtimeMs
    this.atime = new Date(atimeMs)
    this.mtime = new Date(mtimeMs)
    this.ctime = new Date(ctimeMs)
    this.birthtime = new Date(birthtimeMs)
  }

  isDirectory() {
    return (this.mode & constants.S_IFMT) === constants.S_IFDIR
  }

  isFile() {
    return (this.mode & constants.S_IFMT) === constants.S_IFREG
  }

  isBlockDevice() {
    return (this.mode & constants.S_IFMT) === constants.S_IFBLK
  }

  isCharacterDevice() {
    return (this.mode & constants.S_IFMT) === constants.S_IFCHR
  }

  isFIFO() {
    return (this.mode & constants.S_IFMT) === constants.S_IFIFO
  }

  isSymbolicLink() {
    return (this.mode & constants.S_IFMT) === constants.S_IFLNK
  }

  isSocket() {
    return (this.mode & constants.S_IFMT) === constants.S_IFSOCK
  }
}

class StatFs {
  constructor(type, bsize, blocks, bfree, bavail, files, ffree) {
    this.type = type
    this.bsize = bsize
    this.blocks = blocks
    this.bfree = bfree
    this.bavail = bavail
    this.files = files
    this.ffree = ffree
  }
}

class Dir {
  constructor(path, handle, opts = {}) {
    const { encoding = 'utf8', bufferSize = 32 } = opts

    this.path = path

    this._encoding = encoding
    this._capacity = bufferSize
    this._buffer = new FIFO()
    this._ended = false
    this._handle = handle
  }

  async read(cb) {
    if (this._buffer.length) return ok(this._buffer.shift(), cb)
    if (this._ended) return ok(null, cb)

    const req = FileRequest.borrow()

    let entries
    let err = null
    try {
      req.retain(binding.readdir(req.handle, this._handle, this._capacity))

      await req

      entries = binding.requestResultDirents(req.handle)
    } catch (e) {
      err = new FileError(e.message, {
        operation: 'readdir',
        code: e.code,
        path: this.path
      })
    } finally {
      req.return()
    }

    if (err) return fail(err, cb)

    if (entries.length === 0) {
      this._ended = true

      return ok(null, cb)
    }

    for (const entry of entries) {
      let name = Buffer.from(entry.name)

      if (this._encoding !== 'buffer') name = name.toString(this._encoding)

      this._buffer.push(new Dirent(this.path, name, entry.type))
    }

    return ok(this._buffer.shift(), cb)
  }

  readSync() {
    if (this._buffer.length) return this._buffer.shift()
    if (this._ended) return null

    const req = FileRequest.borrow()

    let entries
    try {
      req.retain(binding.readdirSync(req.handle, this._handle, this._capacity))

      entries = binding.requestResultDirents(req.handle)
    } catch (e) {
      throw new FileError(e.message, {
        operation: 'readdir',
        code: e.code,
        path: this.path
      })
    } finally {
      req.return()
    }

    if (entries.length === 0) {
      this._ended = true

      return null
    }

    for (const entry of entries) {
      let name = Buffer.from(entry.name)

      if (this._encoding !== 'buffer') name = name.toString(this._encoding)

      this._buffer.push(new Dirent(this.path, name, entry.type))
    }

    return this._buffer.shift()
  }

  async close(cb) {
    const req = FileRequest.borrow()

    let err = null
    try {
      binding.closedir(req.handle, this._handle)

      await req
    } catch (e) {
      err = new FileError(e.message, {
        operation: 'closedir',
        code: e.code,
        path: this.path
      })
    } finally {
      req.return()
    }

    this._handle = null

    return done(err, cb)
  }

  closeSync() {
    const req = FileRequest.borrow()

    try {
      binding.closedirSync(req.handle, this._handle)
    } catch (e) {
      throw new FileError(e.message, {
        operation: 'closedir',
        code: e.code,
        path: this.path
      })
    } finally {
      req.return()
    }

    this._handle = null
  }

  [Symbol.dispose]() {
    this.closeSync()
  }

  async [Symbol.asyncDispose]() {
    await this.close()
  }

  *[Symbol.iterator]() {
    while (true) {
      const entry = this.readSync()
      if (entry === null) break
      yield entry
    }

    this.closeSync()
  }

  async *[Symbol.asyncIterator]() {
    while (true) {
      const entry = await this.read()
      if (entry === null) break
      yield entry
    }

    await this.close()
  }
}

class Dirent {
  constructor(parentPath, name, type) {
    this.parentPath = parentPath
    this.name = name
    this.type = type
  }

  isFile() {
    return this.type === constants.UV_DIRENT_FILE
  }

  isDirectory() {
    return this.type === constants.UV_DIRENT_DIR
  }

  isSymbolicLink() {
    return this.type === constants.UV_DIRENT_LINK
  }

  isFIFO() {
    return this.type === constants.UV_DIRENT_FIFO
  }

  isSocket() {
    return this.type === constants.UV_DIRENT_SOCKET
  }

  isCharacterDevice() {
    return this.type === constants.UV_DIRENT_CHAR
  }

  isBlockDevice() {
    return this.type === constants.UV_DIRENT_BLOCK
  }
}

class FileReadStream extends Readable {
  constructor(path, opts = {}) {
    const { eagerOpen = true } = opts

    super({ eagerOpen, ...opts })

    this.path = path
    this.fd = typeof opts.fd === 'number' ? opts.fd : -1
    this.flags = opts.flags || 'r'
    this.mode = opts.mode || 0o666

    this._offset = opts.start || 0
    this._missing = 0

    if (opts.length) {
      this._missing = opts.length
    } else if (typeof opts.end === 'number') {
      this._missing = opts.end - this._offset + 1
    } else {
      this._missing = -1
    }
  }

  async _open(cb) {
    let err

    if (this.fd === -1) {
      err = null
      try {
        this.fd = await open(this.path, this.flags, this.mode)
      } catch (e) {
        err = e
      }

      if (err) return cb(err)
    }

    let st
    err = null
    try {
      st = await fstat(this.fd)
    } catch (e) {
      err = e
    }

    if (err) return cb(err)

    if (this._missing === -1) this._missing = st.size

    if (st.size < this._offset) {
      this._offset = st.size
      this._missing = 0
    } else if (st.size < this._offset + this._missing) {
      this._missing = st.size - this._offset
    }

    cb(null)
  }

  async _read(size) {
    if (this._missing <= 0) return this.push(null)

    const data = Buffer.allocUnsafe(Math.min(this._missing, size))

    let len
    let err = null
    try {
      len = await read(this.fd, data, 0, data.byteLength, this._offset)
    } catch (e) {
      err = e
    }

    if (err) return this.destroy(err)

    if (len === 0) return this.push(null)

    if (this._missing < len) len = this._missing

    this._missing -= len
    this._offset += len

    this.push(data.subarray(0, len))
  }

  async _destroy(err, cb) {
    if (this.fd === -1) return cb(err)

    try {
      await close(this.fd)
    } catch (e) {
      err = err || e
    }

    cb(err)
  }
}

class FileWriteStream extends Writable {
  constructor(path, opts = {}) {
    const { eagerOpen = true } = opts

    super({ eagerOpen, ...opts })

    this.path = path
    this.fd = typeof opts.fd === 'number' ? opts.fd : -1
    this.flags = opts.flags || 'w'
    this.mode = opts.mode || 0o666
  }

  async _open(cb) {
    if (this.fd !== -1) return cb(null)

    let err = null
    try {
      this.fd = await open(this.path, this.flags, this.mode)
    } catch (e) {
      err = e
    }

    cb(err)
  }

  async _writev(batch, cb) {
    let err = null
    try {
      await writev(
        this.fd,
        batch.map(({ chunk }) => chunk)
      )
    } catch (e) {
      err = e
    }

    cb(err)
  }

  async _destroy(err, cb) {
    if (this.fd === -1) return cb(err)

    try {
      await close(this.fd)
    } catch (e) {
      err = err || e
    }

    cb(err)
  }
}

class Watcher extends EventEmitter {
  constructor(path, opts, onchange) {
    if (typeof opts === 'function') {
      onchange = opts
      opts = {}
    }

    if (!opts) opts = {}

    const { persistent = true, recursive = false, encoding = 'utf8' } = opts

    super()

    this._closed = false
    this._encoding = encoding
    this._handle = binding.watcherInit(path, recursive, this, this._onevent, this._onclose)

    if (!persistent) this.unref()

    if (onchange) this.on('change', onchange)
  }

  close() {
    if (this._closed) return
    this._closed = true

    binding.watcherClose(this._handle)
  }

  ref() {
    if (this._handle) binding.watcherRef(this._handle)
    return this
  }

  unref() {
    if (this._handle) binding.watcherUnref(this._handle)
    return this
  }

  [Symbol.asyncIterator]() {
    const buffer = []
    let done = false
    let error = null
    let next = null

    this.on('change', (eventType, filename) => {
      if (next) {
        next.resolve({ done: false, value: { eventType, filename } })
        next = null
      } else {
        buffer.push({ eventType, filename })
      }
    })
      .on('error', (err) => {
        done = true
        error = err

        if (next) {
          next.reject(error)
          next = null
        }
      })
      .on('close', () => {
        done = true

        if (next) {
          next.resolve({ done })
          next = null
        }
      })

    return {
      next: () =>
        new Promise((resolve, reject) => {
          if (error) return reject(error)

          if (buffer.length) return resolve({ done: false, value: buffer.shift() })

          if (done) return resolve({ done })

          next = { resolve, reject }
        })
    }
  }

  _onevent(err, events, filename) {
    if (err) {
      this.close()
      this.emit('error', err)
    } else {
      const path =
        this._encoding === 'buffer'
          ? Buffer.from(filename)
          : Buffer.from(filename).toString(this._encoding)

      if (events & binding.UV_RENAME) {
        this.emit('change', 'rename', path)
      }

      if (events & binding.UV_CHANGE) {
        this.emit('change', 'change', path)
      }
    }
  }

  _onclose() {
    this._handle = null

    this.emit('close')
  }
}

exports.access = access
exports.appendFile = appendFile
exports.chmod = chmod
exports.chown = chown
exports.close = close
exports.copyFile = copyFile
exports.cp = cp
exports.exists = exists
exports.fchmod = fchmod
exports.fchown = fchown
exports.fdatasync = fdatasync
exports.fstat = fstat
exports.fsync = fsync
exports.ftruncate = ftruncate
exports.futimes = futimes
exports.lchown = lchown
exports.lutimes = lutimes
exports.link = link
exports.lstat = lstat
exports.mkdir = mkdir
exports.mkdtemp = mkdtemp
exports.open = open
exports.opendir = opendir
exports.read = read
exports.readFile = readFile
exports.readdir = readdir
exports.readlink = readlink
exports.readv = readv
exports.realpath = realpath
exports.rename = rename
exports.rm = rm
exports.rmdir = rmdir
exports.stat = stat
exports.statfs = statfs
exports.symlink = symlink
exports.truncate = truncate
exports.unlink = unlink
exports.utimes = utimes
exports.watch = watch
exports.write = write
exports.writeFile = writeFile
exports.writev = writev

exports.accessSync = accessSync
exports.appendFileSync = appendFileSync
exports.chmodSync = chmodSync
exports.chownSync = chownSync
exports.closeSync = closeSync
exports.copyFileSync = copyFileSync
exports.cpSync = cpSync
exports.existsSync = existsSync
exports.fchmodSync = fchmodSync
exports.fchownSync = fchownSync
exports.fdatasyncSync = fdatasyncSync
exports.fstatSync = fstatSync
exports.fsyncSync = fsyncSync
exports.ftruncateSync = ftruncateSync
exports.futimesSync = futimesSync
exports.lchownSync = lchownSync
exports.lutimesSync = lutimesSync
exports.linkSync = linkSync
exports.lstatSync = lstatSync
exports.mkdirSync = mkdirSync
exports.mkdtempSync = mkdtempSync
exports.openSync = openSync
exports.opendirSync = opendirSync
exports.readFileSync = readFileSync
exports.readSync = readSync
exports.readdirSync = readdirSync
exports.readlinkSync = readlinkSync
exports.readvSync = readvSync
exports.realpathSync = realpathSync
exports.renameSync = renameSync
exports.rmSync = rmSync
exports.rmdirSync = rmdirSync
exports.statSync = statSync
exports.statfsSync = statfsSync
exports.symlinkSync = symlinkSync
exports.truncateSync = truncateSync
exports.unlinkSync = unlinkSync
exports.utimesSync = utimesSync
exports.writeFileSync = writeFileSync
exports.writeSync = writeSync
exports.writevSync = writevSync

exports.promises = require('./promises')

exports.Stats = Stats
exports.StatFs = StatFs
exports.Dir = Dir
exports.Dirent = Dirent
exports.Watcher = Watcher

exports.ReadStream = FileReadStream

exports.createReadStream = function createReadStream(path, opts) {
  return new FileReadStream(path, opts)
}

exports.WriteStream = FileWriteStream

exports.createWriteStream = function createWriteStream(path, opts) {
  return new FileWriteStream(path, opts)
}

function toNamespacedPath(filepath) {
  if (typeof filepath !== 'string') {
    if (isURL(filepath)) filepath = fileURLToPath(filepath)
    else filepath = filepath.toString()
  }

  return path.toNamespacedPath(filepath)
}

function toFlags(flags) {
  switch (flags) {
    case 'r':
      return constants.O_RDONLY
    case 'rs': // Fall through.
    case 'sr':
      return constants.O_RDONLY | constants.O_SYNC
    case 'r+':
      return constants.O_RDWR
    case 'rs+': // Fall through.
    case 'sr+':
      return constants.O_RDWR | constants.O_SYNC

    case 'w':
      return constants.O_TRUNC | constants.O_CREAT | constants.O_WRONLY
    case 'wx': // Fall through.
    case 'xw':
      return constants.O_TRUNC | constants.O_CREAT | constants.O_WRONLY | constants.O_EXCL

    case 'w+':
      return constants.O_TRUNC | constants.O_CREAT | constants.O_RDWR
    case 'wx+': // Fall through.
    case 'xw+':
      return constants.O_TRUNC | constants.O_CREAT | constants.O_RDWR | constants.O_EXCL

    case 'a':
      return constants.O_APPEND | constants.O_CREAT | constants.O_WRONLY
    case 'ax': // Fall through.
    case 'xa':
      return constants.O_APPEND | constants.O_CREAT | constants.O_WRONLY | constants.O_EXCL
    case 'as': // Fall through.
    case 'sa':
      return constants.O_APPEND | constants.O_CREAT | constants.O_WRONLY | constants.O_SYNC

    case 'a+':
      return constants.O_APPEND | constants.O_CREAT | constants.O_RDWR
    case 'ax+': // Fall through.
    case 'xa+':
      return constants.O_APPEND | constants.O_CREAT | constants.O_RDWR | constants.O_EXCL
    case 'as+': // Fall through.
    case 'sa+':
      return constants.O_APPEND | constants.O_CREAT | constants.O_RDWR | constants.O_SYNC
    default:
      return 0
  }
}

function toMode(mode) {
  return parseInt(mode, 8)
}
const binding = require('../binding')

module.exports = {
  O_RDWR: binding.O_RDWR,
  O_RDONLY: binding.O_RDONLY,
  O_WRONLY: binding.O_WRONLY,
  O_CREAT: binding.O_CREAT,
  O_TRUNC: binding.O_TRUNC,
  O_APPEND: binding.O_APPEND,

  F_OK: binding.F_OK || 0,
  R_OK: binding.R_OK || 0,
  W_OK: binding.W_OK || 0,
  X_OK: binding.X_OK || 0,

  S_IFMT: binding.S_IFMT,
  S_IFREG: binding.S_IFREG,
  S_IFDIR: binding.S_IFDIR,
  S_IFCHR: binding.S_IFCHR,
  S_IFLNK: binding.S_IFLNK,
  S_IFBLK: binding.S_IFBLK || 0,
  S_IFIFO: binding.S_IFIFO || 0,
  S_IFSOCK: binding.S_IFSOCK || 0,

  S_IRUSR: binding.S_IRUSR || 0,
  S_IWUSR: binding.S_IWUSR || 0,
  S_IXUSR: binding.S_IXUSR || 0,
  S_IRGRP: binding.S_IRGRP || 0,
  S_IWGRP: binding.S_IWGRP || 0,
  S_IXGRP: binding.S_IXGRP || 0,
  S_IROTH: binding.S_IROTH || 0,
  S_IWOTH: binding.S_IWOTH || 0,
  S_IXOTH: binding.S_IXOTH || 0,

  UV_DIRENT_UNKNOWN: binding.UV_DIRENT_UNKNOWN,
  UV_DIRENT_FILE: binding.UV_DIRENT_FILE,
  UV_DIRENT_DIR: binding.UV_DIRENT_DIR,
  UV_DIRENT_LINK: binding.UV_DIRENT_LINK,
  UV_DIRENT_FIFO: binding.UV_DIRENT_FIFO,
  UV_DIRENT_SOCKET: binding.UV_DIRENT_SOCKET,
  UV_DIRENT_CHAR: binding.UV_DIRENT_CHAR,
  UV_DIRENT_BLOCK: binding.UV_DIRENT_BLOCK,

  COPYFILE_EXCL: binding.UV_FS_COPYFILE_EXCL,
  COPYFILE_FICLONE: binding.UV_FS_COPYFILE_FICLONE,
  COPYFILE_FICLONE_FORCE: binding.UV_FS_COPYFILE_FICLONE_FORCE,
  UV_FS_SYMLINK_DIR: binding.UV_FS_SYMLINK_DIR,
  UV_FS_SYMLINK_JUNCTION: binding.UV_FS_SYMLINK_JUNCTION
}
const binding = require('../binding')

module.exports = class FileError extends Error {
  constructor(msg, opts = {}) {
    const { code, operation = null, path = null, destination = null, fd = -1 } = opts

    if (operation !== null) msg += describe(operation, opts)

    super(`${code}: ${msg}`)

    this.code = code

    if (operation !== null) this.operation = operation
    if (path !== null) this.path = path
    if (destination !== null) this.destination = destination
    if (fd !== -1) this.fd = fd
  }

  get name() {
    return 'FileError'
  }

  // For Node.js compatibility
  get errno() {
    return binding.errnos[this.code]
  }

  // For Node.js compatibility
  get syscall() {
    return this.operation
  }

  // For Node.js compatibility
  get dest() {
    return this.destination
  }
}

function describe(operation, opts) {
  const { path = null, destination = null, fd = -1 } = opts

  let result = `, ${operation}`

  if (path !== null) {
    result += ` ${JSON.stringify(path)}`

    if (destination !== null) {
      result += ` -> ${JSON.stringify(destination)}`
    }
  } else if (fd !== -1) {
    result += ` ${fd}`
  }

  return result
}
{
  "name": "bare-fs",
  "version": "4.7.4",
  "description": "Native file system operations for Bare",
  "exports": {
    "./package": "./package.json",
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "./promises": {
      "types": "./promises.d.ts",
      "default": "./promises.js"
    },
    "./constants": {
      "types": "./lib/constants.d.ts",
      "default": "./lib/constants.js"
    }
  },
  "files": [
    "index.js",
    "index.d.ts",
    "promises.js",
    "promises.d.ts",
    "binding.c",
    "binding.js",
    "CMakeLists.txt",
    "lib",
    "prebuilds"
  ],
  "addon": true,
  "scripts": {
    "format": "prettier --write . && lunte --fix",
    "lint": "prettier --check . && lunte",
    "test": "brittle-bare --coverage test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/bare-fs.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/bare-fs/issues"
  },
  "homepage": "https://github.com/holepunchto/bare-fs#readme",
  "engines": {
    "bare": ">=1.16.0"
  },
  "dependencies": {
    "bare-events": "^2.5.4",
    "bare-path": "^3.0.0",
    "bare-stream": "^2.6.4",
    "bare-url": "^2.2.2",
    "fast-fifo": "^1.3.2"
  },
  "devDependencies": {
    "bare-buffer": "^3.0.2",
    "bare-crypto": "^1.11.2",
    "brittle": "^3.1.1",
    "cmake-bare": "^1.1.7",
    "lunte": "^1.6.0",
    "prettier": "^3.4.1",
    "prettier-config-holepunch": "^2.0.0"
  },
  "peerDependencies": {
    "bare-buffer": "*"
  },
  "peerDependenciesMeta": {
    "bare-buffer": {
      "optional": true
    }
  }
}
const EventEmitter = require('bare-events')
const fs = require('.')

class FileHandle extends EventEmitter {
  constructor(fd) {
    super()

    this.fd = fd
  }

  async close() {
    await fs.close(this.fd)

    this.fd = -1
    this.emit('close')
  }

  async read(buffer, ...args) {
    return {
      bytesRead: await fs.read(this.fd, buffer, ...args),
      buffer
    }
  }

  async readv(buffers, ...args) {
    return {
      bytesRead: await fs.readv(this.fd, buffers, ...args),
      buffers
    }
  }

  async write(buffer, ...args) {
    return {
      bytesWritten: await fs.write(this.fd, buffer, ...args),
      buffer
    }
  }

  async writev(buffers, ...args) {
    return {
      bytesWritten: await fs.writev(this.fd, buffers, ...args),
      buffers
    }
  }

  async stat() {
    return fs.fstat(this.fd)
  }

  async chmod(mode) {
    await fs.fchmod(this.fd, mode)
  }

  async chown(uid, gid) {
    await fs.fchown(this.fd, uid, gid)
  }

  async datasync() {
    return fs.fdatasync(this.fd)
  }

  async sync() {
    return fs.fsync(this.fd)
  }

  async truncate(len) {
    await fs.ftruncate(this.fd, len)
  }

  async utimes(atime, mtime) {
    await fs.futimes(this.fd, atime, mtime)
  }

  createReadStream(opts) {
    return fs.createReadStream(null, { ...opts, fd: this.fd })
  }

  createWriteStream(opts) {
    return fs.createWriteStream(null, { ...opts, fd: this.fd })
  }

  async [Symbol.asyncDispose]() {
    await this.close()
  }
}

exports.open = async function open(filepath, flags, mode) {
  return new FileHandle(await fs.open(filepath, flags, mode))
}

exports.access = fs.access
exports.appendFile = fs.appendFile
exports.chmod = fs.chmod
exports.chown = fs.chown
exports.constants = fs.constants
exports.copyFile = fs.copyFile
exports.cp = fs.cp
exports.lchown = fs.lchown
exports.lutimes = fs.lutimes
exports.link = fs.link
exports.lstat = fs.lstat
exports.mkdir = fs.mkdir
exports.mkdtemp = fs.mkdtemp
exports.opendir = fs.opendir
exports.readFile = fs.readFile
exports.readdir = fs.readdir
exports.readlink = fs.readlink
exports.realpath = fs.realpath
exports.rename = fs.rename
exports.rm = fs.rm
exports.rmdir = fs.rmdir
exports.stat = fs.stat
exports.statfs = fs.statfs
exports.truncate = fs.truncate
exports.symlink = fs.symlink
exports.unlink = fs.unlink
exports.utimes = fs.utimes
exports.watch = fs.watch
exports.writeFile = fs.writeFile
module.exports = require.addon()
const ansiEscapes = require('bare-ansi-escapes')
const getType = require('bare-type')
const binding = require('./binding')

const PLAIN_KEY = /^[a-zA-Z_][a-zA-Z_0-9]*$/

const defaultDepth = 2
const defaultBreakLength = 80
const defaultMaxArrayLength = 40

module.exports = exports = function inspect(value, opts = {}) {
  const {
    colors = false,
    depth = defaultDepth,
    breakLength = defaultBreakLength,
    stylize = defaultStylize(colors)
  } = opts

  const references = new InspectRefMap()

  const tree = inspectValue(value, 0, {
    colors,
    depth,
    breakLength,
    stylize,
    references
  })

  return tree.toString()
}

exports.styles = {
  bigint: ansiEscapes.colorYellow,
  boolean: ansiEscapes.colorYellow,
  date: ansiEscapes.colorMagenta,
  module: ansiEscapes.modifierUnderline,
  name: ansiEscapes.modifierReset,
  null: ansiEscapes.modifierBold,
  number: ansiEscapes.colorYellow,
  regexp: ansiEscapes.colorRed,
  special: ansiEscapes.colorCyan,
  string: ansiEscapes.colorGreen,
  symbol: ansiEscapes.colorGreen,
  undefined: ansiEscapes.colorBrightBlack
}

const styles = exports.styles

function defaultStylize(colors) {
  return function stylize(value, style) {
    const color = colors && styles[style]

    if (color) return color + value + ansiEscapes.modifierReset

    return value
  }
}

class InspectRefMap {
  constructor() {
    this.refs = new WeakMap()
    this.ids = new WeakMap()
    this.nextId = 1
  }

  has(object) {
    return this.refs.has(object)
  }

  get(object) {
    return this.refs.get(object) || null
  }

  set(object, ref) {
    this.refs.set(object, ref)
  }

  id(object) {
    let id = this.ids.get(object)
    if (id) return id

    id = this.nextId++
    this.ids.set(object, id)

    return id
  }
}

class InspectNode {
  constructor(depth, length, opts) {
    const { breakLength = defaultBreakLength, breakAlways = false } = opts

    this.depth = depth
    this.length = length
    this.breakLength = breakLength
    this.breakAlways = breakAlways
  }

  pad(n, string) {
    return string.padStart(n, ' ')
  }

  indent(n, string) {
    return '  '.repeat(n) + string
  }
}

class InspectRef extends InspectNode {
  constructor(depth, opts) {
    super(depth, '[circular *]'.length, opts)

    this.refs = opts.references
    this.count = 0
    this.circular = false
    this.color = opts.colors && styles.special
  }

  get id() {
    return this.refs.id(this)
  }

  increment() {
    return ++this.count
  }

  decrement() {
    return --this.count
  }

  toString(opts = {}) {
    const { offset = 0, pad = 0, indent = 0 } = opts

    let value = this.pad(pad, '[circular *' + this.id + ']')

    if (this.color) value = this.color + value + ansiEscapes.modifierReset

    return offset ? value : this.indent(indent, value)
  }
}

class InspectLeaf extends InspectNode {
  constructor(value, color, depth, opts) {
    const length = value.length

    if (value.includes('\n')) {
      value = value.replaceAll('\n', '\n' + '  '.repeat(depth))

      opts = { ...opts, breakAlways: true }
    }

    super(depth, length, opts)

    this.value = value
    this.color = opts.colors && color
  }

  toString(opts = {}) {
    const { offset = 0, pad = 0, indent = 0 } = opts

    let value = this.pad(pad, this.value)

    if (this.color) value = this.color + value + ansiEscapes.modifierReset

    return offset ? value : this.indent(indent, value)
  }
}

class InspectPair extends InspectNode {
  constructor(delim, left, right, depth, opts) {
    const length = left.length + delim.length + right.length

    if (left.breakAlways || right.breakAlways) {
      opts = { ...opts, breakAlways: true }
    }

    super(depth, length, opts)

    this.delim = delim
    this.left = left
    this.right = right
  }

  toString(opts = {}) {
    const { indent = 0 } = opts

    return this.indent(
      indent,
      this.left +
        this.delim +
        this.right.toString({
          indent,
          offset: this.left.length + this.delim.length
        })
    )
  }
}

class InspectSuspension extends InspectNode {
  constructor(overflow, depth, opts) {
    const label = `... ${overflow} more`

    super(depth, label.length, opts)

    this.label = label
  }

  toString(opts = {}) {
    const { indent = 0 } = opts

    return this.indent(indent, this.label)
  }
}

class InspectSequence extends InspectNode {
  constructor(header, footer, delim, values, ref, depth, opts) {
    const { tabulate = false } = opts

    const length =
      (ref.circular ? '<ref *>'.length + 1 : 0) +
      header.length +
      values.reduce(
        (length, value, i) =>
          length + value.length + (i === 0 ? 0 : delim.length),
        0
      ) +
      footer.length

    if (values.some((value) => value.breakAlways)) {
      opts = { ...opts, breakAlways: true }
    }

    super(depth, length, opts)

    this.header = header
    this.footer = footer
    this.delim = delim
    this.values = values
    this.ref = ref
    this.tabulate = tabulate
  }

  toString(opts = {}) {
    const { offset = 0, indent = 0 } = opts

    const split =
      this.breakAlways ||
      (this.values.length &&
        (offset + this.length > this.breakLength ||
          indent * 2 + this.length > this.breakLength))

    let header = this.header

    if (this.ref.circular) {
      header = '<ref *' + this.ref.id + '> ' + header
    }

    if (this.values.length === 0) {
      header = header.trimEnd()
    }

    if (offset === 0) {
      header = this.indent(indent, header)
    }

    if (split) {
      header = header.trimEnd() + '\n'
    }

    let string = header

    let columns = 1
    let pad = 0

    if (this.tabulate) {
      const widest = this.values.reduce(
        (length, value) =>
          value.breakAlways ? length : Math.max(length, value.length),
        0
      )

      if (widest) {
        columns = Math.max(
          columns,
          Math.floor(
            (this.breakLength - indent * 2) / (widest + this.delim.length)
          )
        )

        if (columns > 1) pad = widest
      }
    }

    for (let i = 0, n = this.values.length, offset = 0; i < n; i++) {
      const value = this.values[i]

      if (split) {
        let part

        if (i % columns === 0 || value.breakAlways) {
          part = value.toString({ indent: indent + 1, pad })
        } else {
          part = value.toString({ pad })
        }

        string += part

        if (i < n - 1) {
          if (i % columns === columns - 1 || this.values[i + 1].breakAlways) {
            string += this.delim.trimEnd() + '\n'
          } else {
            string += this.delim
          }
        }
      } else {
        if (i > 0) string += this.delim

        string += value.toString({ offset })

        offset += value.length
      }
    }

    let footer = this.footer

    if (this.values.length === 0) {
      footer = footer.trimStart()
    }

    if (split) {
      string += '\n' + this.indent(indent, footer.trimStart())
    } else {
      string += footer
    }

    return string
  }
}

function inspectValue(value, depth, opts) {
  const type = getType(value)

  if (type.isUndefined()) return inspectUndefined(depth, opts)
  if (type.isNull()) return inspectNull(depth, opts)
  if (type.isBoolean()) return inspectBoolean(value, depth, opts)
  if (type.isNumber()) return inspectNumber(value, depth, opts)
  if (type.isBigInt()) return inspectBigInt(value, depth, opts)
  if (type.isString()) return inspectString(value, depth, opts)
  if (type.isSymbol()) return inspectSymbol(value, depth, opts)
  if (type.isObject()) return inspectObject(type, value, depth, opts)
  if (type.isFunction()) return inspectFunction(type, value, depth, opts)
  if (type.isExternal()) return inspectExternal(value, opts, opts)
}

function inspectUndefined(depth, opts) {
  return new InspectLeaf('undefined', styles.undefined, depth, opts)
}

function inspectNull(depth, opts) {
  return new InspectLeaf('null', styles.null, depth, opts)
}

function inspectBoolean(value, depth, opts) {
  return new InspectLeaf(value.toString(), styles.boolean, depth, opts)
}

function inspectNumber(value, depth, opts) {
  let string

  if (Object.is(value, -0)) {
    string = '-0'
  } else {
    string = value.toString(10)
  }

  return new InspectLeaf(string, styles.number, depth, opts)
}

function inspectBigInt(value, depth, opts) {
  return new InspectLeaf(value.toString(10) + 'n', styles.bigint, depth, opts)
}

const STRING_ESCAPES =
  /[\ud800-\udbff][\udc00-\udfff]|[\u0000-\u001f'\\\ud800-\udfff]/g

function inspectString(value, depth, opts) {
  // https://tc39.es/ecma262/multipage/structured-data.html#sec-quotejsonstring
  const string = value.replace(STRING_ESCAPES, (match) => {
    if (match.length === 2) return match

    switch (match) {
      case "'":
        return "\\'"
      case '\\':
        return '\\\\'
      case '\b':
        return '\\b'
      case '\t':
        return '\\t'
      case '\n':
        return '\\n'
      case '\f':
        return '\\f'
      case '\r':
        return '\\r'
      default:
        return '\\u' + match.charCodeAt(0).toString(16).padStart(4, '0')
    }
  })

  return new InspectLeaf("'" + string + "'", styles.string, depth, opts)
}

function inspectSymbol(value, depth, opts) {
  return new InspectLeaf(value.toString(), styles.symbol, depth, opts)
}

function inspectKey(value, depth, opts) {
  if (PLAIN_KEY.test(value)) {
    return new InspectLeaf(value, null, depth, opts)
  } else {
    return inspectValue(value, depth, opts)
  }
}

function inspectObject(type, object, depth, opts) {
  const refs = opts.references

  let ref = refs.get(object)
  if (ref === null) {
    ref = new InspectRef(depth, opts)
    refs.set(object, ref)
  } else if (ref.count) {
    ref.circular = true
    return ref
  }

  const maxDepth = typeof opts.depth === 'number' ? opts.depth : Infinity

  if (maxDepth < depth) {
    const constructor = object.constructor

    return new InspectLeaf(
      '[' +
        (constructor && constructor.name ? constructor.name : 'Object') +
        ']',
      styles.special,
      depth,
      opts
    )
  }

  const inspect =
    object[Symbol.for('bare.inspect')] ||
    object[Symbol.for('nodejs.util.inspect.custom')]

  if (typeof inspect === 'function') {
    const value = inspect.call(
      object,
      typeof opts.depth === 'number' ? opts.depth - depth : null,
      {
        colors: opts.colors,
        breakLength: opts.breakLength,
        stylize: opts.stylize
      },
      exports
    )

    if (typeof value === 'object' && value !== null) {
      refs.set(value, ref)
    }

    if (typeof value !== 'string') {
      return inspectValue(value, depth, opts)
    }

    return new InspectLeaf(value, null, depth, opts)
  }

  if (type.isArray()) return inspectArray(object, ref, depth, opts)
  if (type.isDate()) return inspectDate(object, ref, depth, opts)
  if (type.isRegExp()) return inspectRegExp(object, ref, depth, opts)
  if (type.isError()) return inspectError(object, ref, depth, opts)
  if (type.isPromise()) return inspectPromise(object, ref, depth, opts)
  if (type.isMap()) return inspectMap(object, ref, depth, opts)
  if (type.isSet()) return inspectSet(object, ref, depth, opts)
  if (type.isWeakMap()) return inspectWeakMap(object, ref, depth, opts)
  if (type.isWeakSet()) return inspectWeakSet(object, ref, depth, opts)
  if (type.isWeakRef()) return inspectWeakRef(object, ref, depth, opts)
  if (type.isArrayBuffer()) return inspectArrayBuffer(object, ref, depth, opts)
  if (type.isSharedArrayBuffer())
    return inspectSharedArrayBuffer(object, ref, depth, opts)
  if (type.isTypedArray()) return inspectTypedArray(object, ref, depth, opts)
  if (type.isDataView()) return inspectDataView(object, ref, depth, opts)

  ref.increment()

  const values = []

  for (const key in object) {
    if (key === 'constructor') continue

    values.push(
      new InspectPair(
        ': ',
        inspectKey(key, depth + 1, opts),
        inspectValue(object[key], depth + 1, opts),
        depth + 1,
        opts
      )
    )
  }

  ref.decrement()

  let header = '{ '

  const tag = object[Symbol.toStringTag]

  if (tag) header = '[' + tag + '] ' + header

  if (object.constructor) {
    const name = object.constructor.name

    if (name && name !== 'Object') {
      header = object.constructor.name + ' ' + header
    }
  }

  return new InspectSequence(header, ' }', ', ', values, ref, depth, opts)
}

function inspectArray(array, ref, depth, opts) {
  const { maxArrayLength = defaultMaxArrayLength } = opts

  ref.increment()

  const values = []

  let remaining = Math.max(maxArrayLength, 0)

  for (let i = 0, n = array.length; i < n; i++) {
    if (remaining-- === 0) {
      values.push(
        new InspectSuspension(array.length - values.length, depth + 1, {
          ...opts,
          breakAlways: true
        })
      )

      break
    }

    values.push(inspectValue(array[i], depth + 1, opts))
  }

  for (const key of binding.getOwnNonIndexPropertyNames(array)) {
    values.push(
      new InspectPair(
        ': ',
        inspectKey(key, depth + 1, opts),
        inspectValue(array[key], depth + 1, opts),
        depth + 1,
        { ...opts, breakAlways: remaining < 0 }
      )
    )
  }

  ref.decrement()

  let header = '[ '

  if (array.constructor.name !== 'Array') {
    header = array.constructor.name + '(' + array.length + ') ' + header
  }

  return new InspectSequence(header, ' ]', ', ', values, ref, depth, {
    ...opts,
    tabulate: true
  })
}

function inspectDate(date, ref, depth, opts) {
  return new InspectLeaf(date.toISOString(), styles.date, depth, opts)
}

function inspectRegExp(regExp, ref, depth, opts) {
  return new InspectLeaf(regExp.toString(), styles.regexp, depth, opts)
}

function inspectError(error, ref, depth, opts) {
  let header

  if ('stack' in error) {
    header = error.stack

    if (depth > 0) {
      header = header.replaceAll('\n', '\n' + '  '.repeat(depth))
    }
  } else {
    header = error.toString()
  }

  const builtins = ['cause']

  if (error.name === 'AggregateError') {
    builtins.push('errors')
  } else if (error.name === 'SuppressedError') {
    builtins.push('error', 'suppressed')
  }

  const values = []

  for (const key of builtins) {
    if (key in error === false) continue

    values.push(
      new InspectPair(
        ': ',
        new InspectLeaf('[' + key + ']', null, depth + 1, opts),
        inspectValue(error[key], depth + 1, opts),
        depth + 1,
        opts
      )
    )
  }

  for (const key in error) {
    if (key === 'constructor' || builtins.includes(key)) continue

    values.push(
      new InspectPair(
        ': ',
        inspectKey(key, depth + 1, opts),
        inspectValue(error[key], depth + 1, opts),
        depth + 1,
        opts
      )
    )
  }

  if (values.length === 0) return new InspectLeaf(header, null, depth, opts)

  return new InspectSequence(
    header + ' {',
    ' }',
    ', ',
    values,
    ref,
    depth,
    opts
  )
}

function inspectPromise(promise, ref, depth, opts) {
  ref.increment()

  const state = binding.getPromiseState(promise)

  const values = []

  switch (state) {
    case 0: // Pending
      values.push(new InspectLeaf('<pending>', styles.special, depth, opts))
      break

    case 1: // Fulfilled
      values.push(inspectValue(binding.getPromiseResult(promise), depth, opts))
      break

    case 2: // Rejected
      values.push(
        new InspectLeaf('<rejected>', styles.special, depth, opts),
        inspectValue(binding.getPromiseResult(promise), depth, opts)
      )
  }

  ref.decrement()

  const header = promise.constructor.name + ' { '

  return new InspectSequence(header, ' }', ' ', values, ref, depth, opts)
}

function inspectMap(map, ref, depth, opts) {
  const {
    maxArrayLength = defaultMaxArrayLength,
    maxMapLength = maxArrayLength
  } = opts

  ref.increment()

  const values = []

  let remaining = maxMapLength

  for (const entry of map) {
    if (remaining-- === 0) {
      values.push(
        new InspectSuspension(map.size - values.length, depth + 1, {
          ...opts,
          breakAlways: true
        })
      )
      break
    }

    values.push(
      new InspectPair(
        ' => ',
        inspectValue(entry[0], depth + 1, opts),
        inspectValue(entry[1], depth + 1, opts),
        depth + 1,
        opts
      )
    )
  }

  for (const key in map) {
    if (key === 'constructor') continue

    const value = inspectValue(map[key], depth + 1, opts)

    values.push(
      new InspectPair(
        ': ',
        inspectKey(key, depth + 1, opts),
        value,
        depth + 1,
        { ...opts, breakAlways: remaining < 0 }
      )
    )
  }

  ref.decrement()

  const header = map.constructor.name + '(' + map.size + ') { '

  return new InspectSequence(header, ' }', ', ', values, ref, depth, {
    ...opts,
    tabulate: true
  })
}

function inspectSet(set, ref, depth, opts) {
  const {
    maxArrayLength = defaultMaxArrayLength,
    maxSetLength = maxArrayLength
  } = opts

  ref.increment()

  const values = []

  let remaining = maxSetLength

  for (const entry of set) {
    if (remaining-- === 0) {
      values.push(
        new InspectSuspension(set.size - values.length, depth + 1, {
          ...opts,
          breakAlways: true
        })
      )
      break
    }

    values.push(inspectValue(entry, depth + 1, opts))
  }

  for (const key in set) {
    if (key === 'constructor') continue

    const value = inspectValue(set[key], depth + 1, opts)

    values.push(
      new InspectPair(
        ': ',
        inspectKey(key, depth + 1, opts),
        value,
        depth + 1,
        { ...opts, breakAlways: remaining < 0 }
      )
    )
  }

  ref.decrement()

  const header = set.constructor.name + '(' + set.size + ') { '

  return new InspectSequence(header, ' }', ', ', values, ref, depth, {
    ...opts,
    tabulate: true
  })
}

function inspectWeakMap(weakMap, ref, depth, opts) {
  const header = weakMap.constructor.name + ' { '

  return new InspectSequence(
    header,
    ' }',
    ' ',
    [new InspectLeaf('<items unknown>', styles.special, depth + 1, opts)],
    ref,
    depth,
    opts
  )
}

function inspectWeakSet(weakSet, ref, depth, opts) {
  const header = weakSet.constructor.name + ' { '

  return new InspectSequence(
    header,
    ' }',
    ' ',
    [new InspectLeaf('<items unknown>', styles.special, depth + 1, opts)],
    ref,
    depth,
    opts
  )
}

function inspectWeakRef(weakRef, ref, depth, opts) {
  const target = weakRef.deref()

  let value

  if (target === undefined) {
    value = new InspectLeaf('<cleared>', styles.special, depth + 1, opts)
  } else {
    value = inspectValue(target, depth + 1, opts)
  }

  const header = weakRef.constructor.name + ' { '

  return new InspectSequence(header, ' }', ' ', [value], ref, depth, opts)
}

function inspectArrayBuffer(arrayBuffer, ref, depth, opts) {
  ref.increment()

  const values = []

  for (const key of ['byteLength']) {
    values.push(
      new InspectPair(
        ': ',
        inspectKey(key, depth + 1, opts),
        inspectValue(arrayBuffer[key], depth + 1, opts),
        depth + 1,
        opts
      )
    )
  }

  ref.decrement()

  const header = arrayBuffer.constructor.name + ' { '

  return new InspectSequence(header, ' }', ', ', values, ref, depth, opts)
}

function inspectSharedArrayBuffer(sharedArrayBuffer, ref, depth, opts) {
  ref.increment()

  const values = []

  for (const key of ['byteLength']) {
    values.push(
      new InspectPair(
        ': ',
        inspectKey(key, depth + 1, opts),
        inspectValue(sharedArrayBuffer[key], depth + 1, opts),
        depth + 1,
        opts
      )
    )
  }

  ref.decrement()

  const header = sharedArrayBuffer.constructor.name + ' { '

  return new InspectSequence(header, ' }', ', ', values, ref, depth, opts)
}

function inspectTypedArray(typedArray, ref, depth, opts) {
  if (Buffer.isBuffer(typedArray)) {
    return inspectBuffer(typedArray, ref, depth, opts)
  }

  const {
    maxArrayLength = defaultMaxArrayLength,
    maxTypedArrayLength = maxArrayLength
  } = opts

  ref.increment()

  const values = []

  let remaining = Math.max(maxTypedArrayLength, 0)

  for (let i = 0, n = typedArray.length; i < n; i++) {
    if (remaining-- === 0) {
      values.push(
        new InspectSuspension(typedArray.length - values.length, depth + 1, {
          ...opts,
          breakAlways: true
        })
      )

      break
    }

    values.push(inspectValue(typedArray[i], depth + 1, opts))
  }

  for (const key of binding.getOwnNonIndexPropertyNames(typedArray)) {
    values.push(
      new InspectPair(
        ': ',
        inspectKey(key, depth + 1, opts),
        inspectValue(typedArray[key], depth + 1, opts),
        depth + 1,
        { ...opts, breakAlways: remaining < 0 }
      )
    )
  }

  ref.decrement()

  const header = typedArray.constructor.name + '(' + typedArray.length + ') [ '

  return new InspectSequence(header, ' ]', ', ', values, ref, depth, {
    ...opts,
    tabulate: true
  })
}

function inspectBuffer(buffer, ref, depth, opts) {
  const {
    maxArrayLength = defaultMaxArrayLength,
    maxBufferLength = maxArrayLength
  } = opts

  ref.increment()

  const values = []

  let remaining = Math.max(maxBufferLength, 0)

  for (let i = 0, n = buffer.byteLength; i < n; i++) {
    if (remaining-- === 0) {
      values.push(
        new InspectSuspension(buffer.length - values.length, depth + 1, {
          ...opts,
          breakAlways: true
        })
      )

      break
    }

    values.push(
      new InspectLeaf(
        buffer[i].toString(16).padStart(2, '0'),
        null,
        depth + 1,
        opts
      )
    )
  }

  for (const key of binding.getOwnNonIndexPropertyNames(buffer)) {
    values.push(
      new InspectPair(
        ': ',
        inspectKey(key, depth + 1, opts),
        inspectValue(buffer[key], depth + 1, opts),
        depth + 1,
        { ...opts, breakAlways: remaining < 0 }
      )
    )
  }

  ref.decrement()

  return new InspectSequence('<Buffer ', '>', ' ', values, ref, depth, {
    ...opts,
    tabulate: true
  })
}

function inspectDataView(dataView, ref, depth, opts) {
  ref.increment()

  const values = []

  for (const key of ['byteLength', 'byteOffset', 'buffer']) {
    values.push(
      new InspectPair(
        ': ',
        inspectKey(key, depth + 1, opts),
        inspectValue(dataView[key], depth + 1, opts),
        depth + 1,
        opts
      )
    )
  }

  for (const key of binding.getOwnNonIndexPropertyNames(dataView)) {
    values.push(
      new InspectPair(
        ': ',
        inspectKey(key, depth + 1, opts),
        inspectValue(dataView[key], depth + 1, opts),
        depth + 1,
        opts
      )
    )
  }

  ref.decrement()

  const header = dataView.constructor.name + ' { '

  return new InspectSequence(header, ' }', ', ', values, ref, depth, opts)
}

function inspectFunction(type, fn, depth, opts) {
  if (fn.toString().startsWith('class')) return inspectClass(fn, depth, opts)

  let tag = 'function'

  if (type.isGeneratorFunction()) tag = 'generator ' + tag
  if (type.isAsyncFunction()) tag = 'async ' + tag

  return new InspectLeaf(
    '[' + tag + ' ' + (fn.name ? fn.name : '(anonymous)') + ']',
    styles.special,
    depth,
    opts
  )
}

function inspectClass(ctor, depth, opts) {
  return new InspectLeaf(
    '[class ' + (ctor.name ? ctor.name : '(anonymous)') + ']',
    styles.special,
    depth,
    opts
  )
}

function inspectExternal(external, depth, opts) {
  return new InspectLeaf(
    '[external 0x' + binding.getExternal(external).toString(16) + ']',
    styles.special,
    depth,
    opts
  )
}
{
  "name": "bare-inspect",
  "version": "3.1.4",
  "description": "Inspect objects as strings for debugging",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "./package": "./package.json"
  },
  "files": [
    "index.js",
    "index.d.ts",
    "binding.c",
    "binding.js",
    "CMakeLists.txt",
    "prebuilds"
  ],
  "addon": true,
  "scripts": {
    "test": "prettier . --check && bare test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/bare-inspect.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/bare-inspect/issues"
  },
  "homepage": "https://github.com/holepunchto/bare-inspect#readme",
  "engines": {
    "bare": ">=1.18.0"
  },
  "dependencies": {
    "bare-ansi-escapes": "^2.1.0",
    "bare-type": "^1.0.0"
  },
  "devDependencies": {
    "brittle": "^3.3.2",
    "cmake-bare": "^1.1.6",
    "prettier": "^3.4.1",
    "prettier-config-standard": "^7.0.0"
  }
}
module.exports = require.addon()
// This export SHOULD NOT be shortened in any way as having the full
// `module.exports = require(...)` statement is crucial for synthesizing
// ESM exports.

if (Bare.platform === 'win32') {
  module.exports = require('./lib/win32')
} else {
  module.exports = require('./lib/posix')
}
module.exports = {
  CHAR_UPPERCASE_A: 0x41,
  CHAR_LOWERCASE_A: 0x61,
  CHAR_UPPERCASE_Z: 0x5a,
  CHAR_LOWERCASE_Z: 0x7a,
  CHAR_DOT: 0x2e,
  CHAR_FORWARD_SLASH: 0x2f,
  CHAR_BACKWARD_SLASH: 0x5c,
  CHAR_COLON: 0x3a,
  CHAR_QUESTION_MARK: 0x3f
}
const binding = require('../binding')

const { normalizeString, validateString } = require('./shared')
const { CHAR_DOT, CHAR_FORWARD_SLASH } = require('./constants')

function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH
}

exports.win32 = require('./win32')
exports.posix = exports

exports.sep = '/'
exports.delimiter = ':'

exports.resolve = function resolve(...args) {
  let resolvedPath = ''
  let resolvedAbsolute = false

  for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    const path = i >= 0 ? args[i] : binding.cwd()

    if (i >= 0) validateString(path, `paths[${i}]`)

    if (path.length === 0) {
      continue
    }

    resolvedPath = `${path}/${resolvedPath}`
    resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH
  }

  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, '/', isPosixPathSeparator)

  if (resolvedAbsolute) {
    return `/${resolvedPath}`
  }

  return resolvedPath.length > 0 ? resolvedPath : '.'
}

exports.normalize = function normalize(path) {
  validateString(path, 'path')

  if (path.length === 0) return '.'

  const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH
  const trailingSeparator = path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH

  path = normalizeString(path, !isAbsolute, '/', isPosixPathSeparator)

  if (path.length === 0) {
    if (isAbsolute) return '/'
    return trailingSeparator ? './' : '.'
  }

  if (trailingSeparator) path += '/'

  return isAbsolute ? `/${path}` : path
}

exports.isAbsolute = function isAbsolute(path) {
  validateString(path, 'path')

  return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH
}

exports.join = function join(...args) {
  if (args.length === 0) return '.'
  let joined
  for (let i = 0; i < args.length; ++i) {
    const arg = args[i]
    validateString(arg, 'path')
    if (arg.length > 0) {
      if (joined === undefined) joined = arg
      else joined += `/${arg}`
    }
  }
  if (joined === undefined) return '.'
  return exports.normalize(joined)
}

exports.relative = function relative(from, to) {
  validateString(from, 'from')
  validateString(to, 'to')

  if (from === to) return ''

  from = exports.resolve(from)
  to = exports.resolve(to)

  if (from === to) return ''

  const fromStart = 1
  const fromEnd = from.length
  const fromLen = fromEnd - fromStart
  const toStart = 1
  const toLen = to.length - toStart

  const length = fromLen < toLen ? fromLen : toLen
  let lastCommonSep = -1
  let i = 0
  for (; i < length; i++) {
    const fromCode = from.charCodeAt(fromStart + i)
    if (fromCode !== to.charCodeAt(toStart + i)) {
      break
    } else if (fromCode === CHAR_FORWARD_SLASH) {
      lastCommonSep = i
    }
  }
  if (i === length) {
    if (toLen > length) {
      if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
        return to.substring(toStart + i + 1)
      }
      if (i === 0) {
        return to.substring(toStart + i)
      }
    } else if (fromLen > length) {
      if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
        lastCommonSep = i
      } else if (i === 0) {
        lastCommonSep = 0
      }
    }
  }

  let out = ''
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      out += out.length === 0 ? '..' : '/..'
    }
  }

  return `${out}${to.substring(toStart + lastCommonSep)}`
}

exports.toNamespacedPath = function toNamespacedPath(path) {
  return path
}

exports.dirname = function dirname(path) {
  validateString(path, 'path')

  if (path.length === 0) return '.'
  const hasRoot = path.charCodeAt(0) === CHAR_FORWARD_SLASH
  let end = -1
  let matchedSlash = true
  for (let i = path.length - 1; i >= 1; --i) {
    if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        end = i
        break
      }
    } else {
      matchedSlash = false
    }
  }

  if (end === -1) return hasRoot ? '/' : '.'
  if (hasRoot && end === 1) return '//'
  return path.substring(0, end)
}

exports.basename = function basename(path, suffix) {
  if (suffix !== undefined) validateString(suffix, 'suffix')
  validateString(path, 'path')

  let start = 0
  let end = -1
  let matchedSlash = true

  if (suffix !== undefined && suffix.length > 0 && suffix.length <= path.length) {
    if (suffix === path) {
      return ''
    }
    let extIdx = suffix.length - 1
    let firstNonSlashEnd = -1
    for (let i = path.length - 1; i >= 0; --i) {
      const code = path.charCodeAt(i)
      if (code === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          start = i + 1
          break
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false
          firstNonSlashEnd = i + 1
        }
        if (extIdx >= 0) {
          if (code === suffix.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i
            }
          } else {
            extIdx = -1
            end = firstNonSlashEnd
          }
        }
      }
    }

    if (start === end) end = firstNonSlashEnd
    else if (end === -1) end = path.length
    return path.substring(start, end)
  }

  for (let i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        start = i + 1
        break
      }
    } else if (end === -1) {
      matchedSlash = false
      end = i + 1
    }
  }

  if (end === -1) return ''
  return path.substring(start, end)
}

exports.extname = function extname(path) {
  validateString(path, 'path')

  let startDot = -1
  let startPart = 0
  let end = -1
  let matchedSlash = true
  let preDotState = 0
  for (let i = path.length - 1; i >= 0; --i) {
    const code = path.charCodeAt(i)
    if (code === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        startPart = i + 1
        break
      }
      continue
    }
    if (end === -1) {
      matchedSlash = false
      end = i + 1
    }
    if (code === CHAR_DOT) {
      if (startDot === -1) startDot = i
      else if (preDotState !== 1) preDotState = 1
    } else if (startDot !== -1) {
      preDotState = -1
    }
  }

  if (
    startDot === -1 ||
    end === -1 ||
    preDotState === 0 ||
    (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
  ) {
    return ''
  }
  return path.substring(startDot, end)
}
const { CHAR_DOT, CHAR_FORWARD_SLASH } = require('./constants')

exports.validateString = function validateString(value, name) {
  if (typeof value !== 'string') {
    throw new TypeError(
      `The "${name}" argument must be of type string. Received type ${typeof value}`
    )
  }
}

exports.normalizeString = function normalizeString(
  path,
  allowAboveRoot,
  separator,
  isPathSeparator
) {
  let res = ''
  let lastSegmentLength = 0
  let lastSlash = -1
  let dots = 0
  let code = 0
  for (let i = 0; i <= path.length; ++i) {
    if (i < path.length) {
      code = path.charCodeAt(i)
    } else if (isPathSeparator(code)) {
      break
    } else {
      code = CHAR_FORWARD_SLASH
    }

    if (isPathSeparator(code)) {
      if (lastSlash === i - 1 || dots === 1);
      else if (dots === 2) {
        if (
          res.length < 2 ||
          lastSegmentLength !== 2 ||
          res.charCodeAt(res.length - 1) !== CHAR_DOT ||
          res.charCodeAt(res.length - 2) !== CHAR_DOT
        ) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator)
            if (lastSlashIndex === -1) {
              res = ''
              lastSegmentLength = 0
            } else {
              res = res.substring(0, lastSlashIndex)
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator)
            }
            lastSlash = i
            dots = 0
            continue
          } else if (res.length !== 0) {
            res = ''
            lastSegmentLength = 0
            lastSlash = i
            dots = 0
            continue
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? `${separator}..` : '..'
          lastSegmentLength = 2
        }
      } else {
        if (res.length > 0) {
          res += `${separator}${path.substring(lastSlash + 1, i)}`
        } else {
          res = path.substring(lastSlash + 1, i)
        }
        lastSegmentLength = i - lastSlash - 1
      }
      lastSlash = i
      dots = 0
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots
    } else {
      dots = -1
    }
  }
  return res
}
const binding = require('../binding')

const { normalizeString, validateString } = require('./shared')
const {
  CHAR_UPPERCASE_A,
  CHAR_LOWERCASE_A,
  CHAR_UPPERCASE_Z,
  CHAR_LOWERCASE_Z,
  CHAR_DOT,
  CHAR_FORWARD_SLASH,
  CHAR_BACKWARD_SLASH,
  CHAR_COLON,
  CHAR_QUESTION_MARK
} = require('./constants')

function isWindowsPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH
}

function isWindowsDeviceRoot(code) {
  return (
    (code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z) ||
    (code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z)
  )
}

exports.posix = require('./posix')
exports.win32 = exports

exports.sep = '\\'
exports.delimiter = ';'

exports.resolve = function resolve(...args) {
  let resolvedDevice = ''
  let resolvedTail = ''
  let resolvedAbsolute = false

  for (let i = args.length - 1; i >= -1; i--) {
    let path
    if (i >= 0) {
      path = args[i]

      validateString(path, `paths[${i}]`)

      if (path.length === 0) continue
    } else if (resolvedDevice.length === 0) {
      path = binding.cwd()
    } else {
      path = binding.cwd(resolvedDevice)

      if (
        path === undefined ||
        (path.substring(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() &&
          path.charCodeAt(2) === CHAR_BACKWARD_SLASH)
      ) {
        path = `${resolvedDevice}\\`
      }
    }

    const len = path.length
    let rootEnd = 0
    let device = ''
    let isAbsolute = false
    const code = path.charCodeAt(0)

    if (len === 1) {
      if (isWindowsPathSeparator(code)) {
        rootEnd = 1
        isAbsolute = true
      }
    } else if (isWindowsPathSeparator(code)) {
      isAbsolute = true

      if (isWindowsPathSeparator(path.charCodeAt(1))) {
        let j = 2
        let last = j
        while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
          j++
        }
        if (j < len && j !== last) {
          const firstPart = path.substring(last, j)
          last = j
          while (j < len && isWindowsPathSeparator(path.charCodeAt(j))) {
            j++
          }
          if (j < len && j !== last) {
            last = j
            while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
              j++
            }
            if (j === len || j !== last) {
              device = `\\\\${firstPart}\\${path.substring(last, j)}`
              rootEnd = j
            }
          }
        }
      } else {
        rootEnd = 1
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      device = path.substring(0, 2)
      rootEnd = 2
      if (len > 2 && isWindowsPathSeparator(path.charCodeAt(2))) {
        isAbsolute = true
        rootEnd = 3
      }
    }

    if (device.length > 0) {
      if (resolvedDevice.length > 0) {
        if (device.toLowerCase() !== resolvedDevice.toLowerCase()) {
          continue
        }
      } else {
        resolvedDevice = device
      }
    }

    if (resolvedAbsolute) {
      if (resolvedDevice.length > 0) {
        break
      }
    } else {
      resolvedTail = `${path.substring(rootEnd)}\\${resolvedTail}`
      resolvedAbsolute = isAbsolute
      if (isAbsolute && resolvedDevice.length > 0) {
        break
      }
    }
  }

  resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, '\\', isWindowsPathSeparator)

  return resolvedAbsolute
    ? `${resolvedDevice}\\${resolvedTail}`
    : `${resolvedDevice}${resolvedTail}` || '.'
}

exports.normalize = function normalize(path) {
  validateString(path, 'path')

  const len = path.length
  if (len === 0) return '.'
  let rootEnd = 0
  let device
  let isAbsolute = false
  const code = path.charCodeAt(0)

  if (len === 1) {
    return code === CHAR_FORWARD_SLASH ? '\\' : path
  }

  if (isWindowsPathSeparator(code)) {
    isAbsolute = true

    if (isWindowsPathSeparator(path.charCodeAt(1))) {
      let j = 2
      let last = j
      while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
        j++
      }
      if (j < len && j !== last) {
        const firstPart = path.substring(last, j)
        last = j
        while (j < len && isWindowsPathSeparator(path.charCodeAt(j))) {
          j++
        }
        if (j < len && j !== last) {
          last = j
          while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
            j++
          }
          if (j === len) {
            return `\\\\${firstPart}\\${path.substring(last)}\\`
          }
          if (j !== last) {
            device = `\\\\${firstPart}\\${path.substring(last, j)}`
            rootEnd = j
          }
        }
      }
    } else {
      rootEnd = 1
    }
  } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
    device = path.substring(0, 2)
    rootEnd = 2
    if (len > 2 && isWindowsPathSeparator(path.charCodeAt(2))) {
      isAbsolute = true
      rootEnd = 3
    }
  }

  let tail =
    rootEnd < len
      ? normalizeString(path.substring(rootEnd), !isAbsolute, '\\', isWindowsPathSeparator)
      : ''
  if (tail.length === 0 && !isAbsolute) {
    tail = '.'
  }
  if (tail.length > 0 && isWindowsPathSeparator(path.charCodeAt(len - 1))) {
    tail += '\\'
  }
  if (device === undefined) {
    return isAbsolute ? `\\${tail}` : tail
  }
  return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`
}

exports.isAbsolute = function isAbsolute(path) {
  validateString(path, 'path')

  const len = path.length
  if (len === 0) return false

  const code = path.charCodeAt(0)

  return (
    isWindowsPathSeparator(code) ||
    (len > 2 &&
      isWindowsDeviceRoot(code) &&
      path.charCodeAt(1) === CHAR_COLON &&
      isWindowsPathSeparator(path.charCodeAt(2)))
  )
}

exports.join = function join(...args) {
  if (args.length === 0) return '.'

  let joined
  let firstPart
  for (let i = 0; i < args.length; ++i) {
    const arg = args[i]
    validateString(arg, 'path')
    if (arg.length > 0) {
      if (joined === undefined) joined = firstPart = arg
      else joined += `\\${arg}`
    }
  }

  if (joined === undefined) return '.'

  let needsReplace = true
  let slashCount = 0
  if (isWindowsPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount
    const firstLen = firstPart.length
    if (firstLen > 1 && isWindowsPathSeparator(firstPart.charCodeAt(1))) {
      ++slashCount
      if (firstLen > 2) {
        if (isWindowsPathSeparator(firstPart.charCodeAt(2))) {
          ++slashCount
        } else {
          needsReplace = false
        }
      }
    }
  }
  if (needsReplace) {
    while (slashCount < joined.length && isWindowsPathSeparator(joined.charCodeAt(slashCount))) {
      slashCount++
    }

    if (slashCount >= 2) {
      joined = `\\${joined.substring(slashCount)}`
    }
  }

  return exports.normalize(joined)
}

exports.relative = function relative(from, to) {
  validateString(from, 'from')
  validateString(to, 'to')

  if (from === to) return ''

  const fromOrig = exports.resolve(from)
  const toOrig = exports.resolve(to)

  if (fromOrig === toOrig) return ''

  from = fromOrig.toLowerCase()
  to = toOrig.toLowerCase()

  if (from === to) return ''

  let fromStart = 0
  while (fromStart < from.length && from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
    fromStart++
  }
  let fromEnd = from.length
  while (fromEnd - 1 > fromStart && from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
    fromEnd--
  }
  const fromLen = fromEnd - fromStart

  let toStart = 0
  while (toStart < to.length && to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
    toStart++
  }
  let toEnd = to.length
  while (toEnd - 1 > toStart && to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
    toEnd--
  }
  const toLen = toEnd - toStart

  const length = fromLen < toLen ? fromLen : toLen
  let lastCommonSep = -1
  let i = 0
  for (; i < length; i++) {
    const fromCode = from.charCodeAt(fromStart + i)
    if (fromCode !== to.charCodeAt(toStart + i)) {
      break
    } else if (fromCode === CHAR_BACKWARD_SLASH) {
      lastCommonSep = i
    }
  }

  if (i !== length) {
    if (lastCommonSep === -1) return toOrig
  } else {
    if (toLen > length) {
      if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
        return toOrig.substring(toStart + i + 1)
      }
      if (i === 2) {
        return toOrig.substring(toStart + i)
      }
    }
    if (fromLen > length) {
      if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
        lastCommonSep = i
      } else if (i === 2) {
        lastCommonSep = 3
      }
    }
    if (lastCommonSep === -1) lastCommonSep = 0
  }

  let out = ''
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
      out += out.length === 0 ? '..' : '\\..'
    }
  }

  toStart += lastCommonSep

  if (out.length > 0) {
    return `${out}${toOrig.substring(toStart, toEnd)}`
  }
  if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
    ++toStart
  }
  return toOrig.substring(toStart, toEnd)
}

exports.toNamespacedPath = function toNamespacedPath(path) {
  if (typeof path !== 'string' || path.length === 0) return path

  const resolvedPath = exports.resolve(path)

  if (resolvedPath.length <= 2) return path

  if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
    if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
      const code = resolvedPath.charCodeAt(2)
      if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
        return `\\\\?\\UNC\\${resolvedPath.substring(2)}`
      }
    }
  } else if (
    isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) &&
    resolvedPath.charCodeAt(1) === CHAR_COLON &&
    resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH
  ) {
    return `\\\\?\\${resolvedPath}`
  }

  return path
}

exports.dirname = function dirname(path) {
  validateString(path, 'path')

  const len = path.length
  if (len === 0) return '.'
  let rootEnd = -1
  let offset = 0
  const code = path.charCodeAt(0)

  if (len === 1) {
    return isWindowsPathSeparator(code) ? path : '.'
  }

  if (isWindowsPathSeparator(code)) {
    rootEnd = offset = 1

    if (isWindowsPathSeparator(path.charCodeAt(1))) {
      let j = 2
      let last = j
      while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
        j++
      }
      if (j < len && j !== last) {
        last = j
        while (j < len && isWindowsPathSeparator(path.charCodeAt(j))) {
          j++
        }
        if (j < len && j !== last) {
          last = j
          while (j < len && !isWindowsPathSeparator(path.charCodeAt(j))) {
            j++
          }
          if (j === len) {
            return path
          }
          if (j !== last) {
            rootEnd = offset = j + 1
          }
        }
      }
    }
  } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
    rootEnd = len > 2 && isWindowsPathSeparator(path.charCodeAt(2)) ? 3 : 2
    offset = rootEnd
  }

  let end = -1
  let matchedSlash = true
  for (let i = len - 1; i >= offset; --i) {
    if (isWindowsPathSeparator(path.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i
        break
      }
    } else {
      matchedSlash = false
    }
  }

  if (end === -1) {
    if (rootEnd === -1) return '.'

    end = rootEnd
  }
  return path.substring(0, end)
}

exports.basename = function basename(path, suffix) {
  if (suffix !== undefined) validateString(suffix, 'suffix')
  validateString(path, 'path')

  let start = 0
  let end = -1
  let matchedSlash = true

  if (
    path.length >= 2 &&
    isWindowsDeviceRoot(path.charCodeAt(0)) &&
    path.charCodeAt(1) === CHAR_COLON
  ) {
    start = 2
  }

  if (suffix !== undefined && suffix.length > 0 && suffix.length <= path.length) {
    if (suffix === path) return ''
    let extIdx = suffix.length - 1
    let firstNonSlashEnd = -1
    for (let i = path.length - 1; i >= start; --i) {
      const code = path.charCodeAt(i)
      if (isWindowsPathSeparator(code)) {
        if (!matchedSlash) {
          start = i + 1
          break
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false
          firstNonSlashEnd = i + 1
        }
        if (extIdx >= 0) {
          if (code === suffix.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i
            }
          } else {
            extIdx = -1
            end = firstNonSlashEnd
          }
        }
      }
    }

    if (start === end) end = firstNonSlashEnd
    else if (end === -1) end = path.length
    return path.substring(start, end)
  }
  for (let i = path.length - 1; i >= start; --i) {
    if (isWindowsPathSeparator(path.charCodeAt(i))) {
      if (!matchedSlash) {
        start = i + 1
        break
      }
    } else if (end === -1) {
      matchedSlash = false
      end = i + 1
    }
  }

  if (end === -1) return ''
  return path.substring(start, end)
}

exports.extname = function extname(path) {
  validateString(path, 'path')

  let start = 0
  let startDot = -1
  let startPart = 0
  let end = -1
  let matchedSlash = true
  let preDotState = 0

  if (
    path.length >= 2 &&
    path.charCodeAt(1) === CHAR_COLON &&
    isWindowsDeviceRoot(path.charCodeAt(0))
  ) {
    start = startPart = 2
  }

  for (let i = path.length - 1; i >= start; --i) {
    const code = path.charCodeAt(i)
    if (isWindowsPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1
        break
      }
      continue
    }
    if (end === -1) {
      matchedSlash = false
      end = i + 1
    }
    if (code === CHAR_DOT) {
      if (startDot === -1) startDot = i
      else if (preDotState !== 1) preDotState = 1
    } else if (startDot !== -1) {
      preDotState = -1
    }
  }

  if (
    startDot === -1 ||
    end === -1 ||
    preDotState === 0 ||
    (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
  ) {
    return ''
  }
  return path.substring(startDot, end)
}
{
  "name": "bare-path",
  "version": "3.1.1",
  "description": "Path manipulation library for JavaScript",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "./package": "./package.json",
    "./posix": "./lib/posix.js",
    "./win32": "./lib/win32.js"
  },
  "files": [
    "index.js",
    "index.d.ts",
    "binding.c",
    "binding.js",
    "CMakeLists.txt",
    "lib",
    "prebuilds",
    "NOTICE"
  ],
  "addon": true,
  "scripts": {
    "format": "prettier --write . && lunte --fix",
    "lint": "prettier --check . && lunte",
    "test": "brittle-bare --coverage test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/bare-path.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/bare-path/issues"
  },
  "homepage": "https://github.com/holepunchto/bare-path#readme",
  "devDependencies": {
    "brittle": "^3.3.2",
    "cmake-bare": "^1.1.6",
    "lunte": "^1.8.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0"
  }
}
const b4a = require('b4a')
const stream = require('streamx')
const { ReadableStream, WritableStream } = require('./web')

const defaultEncoding = 'utf8'

module.exports = exports = stream.Stream

exports.pipeline = stream.pipeline

exports.isStream = stream.isStream
exports.isEnding = stream.isEnding
exports.isEnded = stream.isEnded
exports.isFinishing = stream.isFinishing
exports.isFinished = stream.isFinished
exports.isDisturbed = stream.isDisturbed

exports.isErrored = function isErrored(stream) {
  return exports.getStreamError(stream) !== null
}

exports.isReadable = function isReadable(stream) {
  return stream.readable && !stream.destroying && !exports.isEnded(stream)
}

exports.isWritable = function isWritable(stream) {
  return stream.writable && !stream.destroying && !exports.isFinishing(stream)
}

exports.getStreamError = stream.getStreamError

exports.addAbortSignal = function addAbortSignal(signal, stream) {
  function onAbort() {
    stream.destroy(signal.reason)
  }

  if (signal.aborted) onAbort()
  else signal.addEventListener('abort', onAbort)

  return stream
}

exports.Stream = exports

exports.Readable = class Readable extends stream.Readable {
  constructor(opts = {}) {
    super({
      ...opts,
      byteLength: null,
      byteLengthReadable: null,
      map: null,
      mapReadable: null
    })

    if (this._construct) this._open = this._construct

    if (this._read !== stream.Readable.prototype._read) {
      this._read = read.bind(this, this._read)
    }

    if (this._destroy !== stream.Stream.prototype._destroy) {
      this._destroy = destroy.bind(this, this._destroy)
    }
  }

  get closed() {
    return !exports.isReadable(this)
  }

  get errored() {
    return stream.getStreamError(this)
  }

  push(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = b4a.from(chunk, encoding || defaultEncoding)
    }

    return super.push(chunk)
  }

  unshift(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = b4a.from(chunk, encoding || defaultEncoding)
    }

    super.unshift(chunk)
  }

  static fromWeb(readableStream, opts = {}) {
    const stream = readableStream._stream

    if (opts.encoding) stream.setEncoding(opts.encoding)
    if (opts.signal) exports.addAbortSignal(opts.signal, stream)

    return stream
  }

  static toWeb(readable, opts = {}) {
    return new ReadableStream(readable, opts.strategy)
  }

  async [Symbol.asyncDispose]() {
    if (!this.destroyed) this.destroy()

    await new Promise((resolve) => exports.finished(this, resolve))
  }
}

exports.Writable = class Writable extends stream.Writable {
  constructor(opts = {}) {
    super({
      ...opts,
      byteLength: null,
      byteLengthWritable,
      map: null,
      mapWritable: null
    })

    if (this._construct) this._open = this._construct

    if (this._write !== stream.Writable.prototype._write) {
      this._write = write.bind(this, this._write)
    }

    if (this._destroy !== stream.Stream.prototype._destroy) {
      this._destroy = destroy.bind(this, this._destroy)
    }
  }

  get closed() {
    return !exports.isWritable(this)
  }

  get errored() {
    return stream.getStreamError(this)
  }

  write(chunk, encoding, cb) {
    if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = b4a.from(chunk, encoding)
    } else {
      encoding = 'buffer'
    }

    const result = super.write({ chunk, encoding })

    if (cb) stream.Writable.drained(this).then(() => cb(null), cb)

    return result
  }

  end(chunk, encoding, cb) {
    if (typeof chunk === 'function') {
      cb = chunk
      chunk = null
    } else if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = b4a.from(chunk, encoding || defaultEncoding)
    } else {
      encoding = 'buffer'
    }

    const result =
      chunk !== undefined && chunk !== null ? super.end({ chunk, encoding }) : super.end()

    if (cb) this.once('finish', () => cb(null))

    return result
  }

  static fromWeb(writableStream, opts = {}) {
    const stream = writableStream._stream

    if (opts.signal) exports.addAbortSignal(opts.signal, stream)

    return stream
  }

  static toWeb(writable) {
    return new WritableStream(writable)
  }

  async [Symbol.asyncDispose]() {
    if (!this.destroyed) this.destroy()

    await new Promise((resolve) => exports.finished(this, resolve))
  }
}

exports.Duplex = class Duplex extends stream.Duplex {
  constructor(opts = {}) {
    super({
      ...opts,
      byteLength: null,
      byteLengthReadable: null,
      byteLengthWritable,
      map: null,
      mapReadable: null,
      mapWritable: null
    })

    if (this._construct) this._open = this._construct

    if (this._read !== stream.Readable.prototype._read) {
      this._read = read.bind(this, this._read)
    }

    if (this._write !== stream.Duplex.prototype._write) {
      this._write = write.bind(this, this._write)
    }

    if (this._destroy !== stream.Stream.prototype._destroy) {
      this._destroy = destroy.bind(this, this._destroy)
    }
  }

  push(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = b4a.from(chunk, encoding || defaultEncoding)
    }

    return super.push(chunk)
  }

  unshift(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = b4a.from(chunk, encoding || defaultEncoding)
    }

    super.unshift(chunk)
  }

  write(chunk, encoding, cb) {
    if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = b4a.from(chunk, encoding)
    } else {
      encoding = 'buffer'
    }

    const result = super.write({ chunk, encoding })

    if (cb) stream.Writable.drained(this).then(() => cb(null), cb)

    return result
  }

  end(chunk, encoding, cb) {
    if (typeof chunk === 'function') {
      cb = chunk
      chunk = null
    } else if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = b4a.from(chunk, encoding)
    } else {
      encoding = 'buffer'
    }

    const result =
      chunk !== undefined && chunk !== null ? super.end({ chunk, encoding }) : super.end()

    if (cb) this.once('finish', () => cb(null))

    return result
  }

  static fromWeb({ readable: readableStream, writable: writableStream }, opts) {
    const readable = exports.Readable.fromWeb(readableStream, opts)
    const writable = exports.Writable.fromWeb(writableStream, opts)

    const duplex = new exports.Duplex({
      write(data, encoding, cb) {
        writable.write(data, encoding, cb)
      }
    })

    readable
      .on('data', (data) => duplex.push(data))
      .on('end', () => duplex.push(null))
      .on('error', (err) => duplex.destroy(err))

    writable.on('finish', () => duplex.end()).on('error', (err) => duplex.destroy(err))

    return duplex
  }

  static toWeb(duplex) {
    const readableStream = exports.Readable.toWeb(duplex)
    const writableStream = exports.Writable.toWeb(duplex)

    return { readable: readableStream, writable: writableStream }
  }
}

class DuplexSide extends exports.Duplex {
  constructor(opts) {
    super(opts)

    this._otherSide = null
    this._cb = null
  }

  _read() {
    const cb = this._cb
    if (!cb) return

    this._cb = null
    cb()
  }

  _write(chunk, encoding, cb) {
    this._otherSide.push(chunk, encoding)
    this._otherSide._cb = cb
  }

  _final(cb) {
    this._otherSide.on('end', cb)
    this._otherSide.push(null)
  }
}

exports.duplexPair = function duplexPair(opts) {
  const sideA = new DuplexSide(opts)
  const sideB = new DuplexSide(opts)

  sideA._otherSide = sideB
  sideB._otherSide = sideA

  return [sideA, sideB]
}

exports.Transform = class Transform extends stream.Transform {
  constructor(opts = {}) {
    super({
      ...opts,
      byteLength: null,
      byteLengthReadable: null,
      byteLengthWritable,
      map: null,
      mapReadable: null,
      mapWritable: null
    })

    if (this._transform !== stream.Transform.prototype._transform) {
      this._transform = transform.bind(this, this._transform)
    } else {
      this._transform = passthrough
    }
  }

  push(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = b4a.from(chunk, encoding || defaultEncoding)
    }

    return super.push(chunk)
  }

  unshift(chunk, encoding) {
    if (typeof chunk === 'string') {
      chunk = b4a.from(chunk, encoding || defaultEncoding)
    }

    super.unshift(chunk)
  }

  write(chunk, encoding, cb) {
    if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = b4a.from(chunk, encoding)
    } else {
      encoding = 'buffer'
    }

    const result = super.write({ chunk, encoding })

    if (cb) stream.Writable.drained(this).then(() => cb(null), cb)

    return result
  }

  end(chunk, encoding, cb) {
    if (typeof chunk === 'function') {
      cb = chunk
      chunk = null
    } else if (typeof encoding === 'function') {
      cb = encoding
      encoding = null
    }

    if (typeof chunk === 'string') {
      encoding = encoding || defaultEncoding
      chunk = b4a.from(chunk, encoding)
    } else {
      encoding = 'buffer'
    }

    const result =
      chunk !== undefined && chunk !== null ? super.end({ chunk, encoding }) : super.end()

    if (cb) this.once('finish', () => cb(null))

    return result
  }
}

exports.PassThrough = class PassThrough extends exports.Transform {}

exports.finished = function finished(stream, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (!opts) opts = {}

  const { cleanup = false } = opts

  const done = () => {
    cb(exports.getStreamError(stream, { all: true }))

    if (cleanup) detach()
  }

  const detach = () => {
    stream.off('close', done)
    stream.off('error', noop)
  }

  if (stream.destroyed) {
    done()
  } else {
    stream.on('close', done)
    stream.on('error', noop)
  }

  return detach
}

function read(read, cb) {
  read.call(this, 65536)

  cb(null)
}

function write(write, data, cb) {
  write.call(this, data.chunk, data.encoding, cb)
}

function transform(transform, data, cb) {
  transform.call(this, data.chunk, data.encoding, cb)
}

function destroy(destroy, cb) {
  destroy.call(this, exports.getStreamError(this), cb)
}

function passthrough(data, cb) {
  cb(null, data.chunk)
}

function byteLengthWritable(data) {
  return data.chunk.byteLength
}

function noop() {}
{
  "name": "bare-stream",
  "version": "2.13.3",
  "description": "Streaming data for JavaScript",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "./package": "./package.json",
    "./promises": "./promises.js",
    "./web": {
      "types": "./web.d.ts",
      "default": "./web.js"
    },
    "./global": {
      "types": "./global.d.ts",
      "default": "./global.js"
    }
  },
  "files": [
    "index.js",
    "index.d.ts",
    "promises.js",
    "web.js",
    "web.d.ts",
    "global.js",
    "global.d.ts"
  ],
  "scripts": {
    "format": "prettier --write . && lunte --fix",
    "lint": "prettier --check . && lunte",
    "test": "brittle-bare --coverage test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/bare-stream.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/bare-stream/issues"
  },
  "homepage": "https://github.com/holepunchto/bare-stream#readme",
  "dependencies": {
    "b4a": "^1.8.1",
    "streamx": "^2.25.0",
    "teex": "^1.0.1"
  },
  "devDependencies": {
    "bare-abort-controller": "^1.1.0",
    "bare-buffer": "^3.0.0",
    "bare-events": "^2.5.4",
    "brittle": "^3.5.2",
    "lunte": "^1.6.0",
    "prettier": "^3.3.3",
    "prettier-config-holepunch": "^2.0.0"
  },
  "peerDependencies": {
    "bare-abort-controller": "*",
    "bare-buffer": "*",
    "bare-events": "*"
  },
  "peerDependenciesMeta": {
    "bare-abort-controller": {
      "optional": true
    },
    "bare-buffer": {
      "optional": true
    },
    "bare-events": {
      "optional": true
    }
  }
}
const { Readable, Writable, Transform, getStreamError, isStreamx, isDisturbed } = require('streamx')
const tee = require('teex')

const readableKind = Symbol.for('bare.stream.readable.kind')
const writableKind = Symbol.for('bare.stream.writable.kind')
const transformKind = Symbol.for('bare.stream.transform.kind')

// https://streams.spec.whatwg.org/#readablestreamdefaultreader
exports.ReadableStreamDefaultReader = class ReadableStreamDefaultReader {
  constructor(stream) {
    this._stream = stream
    this._stream._stream.once('close', onclose).once('error', onerror)

    const closed = Promise.withResolvers()

    // Avoid unhandled exceptions
    closed.promise.catch(noop)

    this._closed = closed

    function onclose() {
      closed.resolve()
    }

    function onerror(err) {
      closed.reject(err)
    }
  }

  get closed() {
    return this._closed.promise
  }

  read() {
    const stream = this._stream._stream

    return new Promise((resolve, reject) => {
      const err = getStreamError(stream)

      if (err) return reject(err)

      if (stream.destroyed) {
        return resolve({ value: undefined, done: true })
      }

      const value = stream.read()

      if (value !== null) {
        return resolve({ value, done: false })
      }

      stream.once('readable', onreadable).once('close', onclose).once('error', onerror)

      function onreadable() {
        const value = stream.read()

        ondone(null, value === null ? { value: undefined, done: true } : { value, done: false })
      }

      function onclose() {
        ondone(null, { value: undefined, done: true })
      }

      function onerror(err) {
        ondone(err, null)
      }

      function ondone(err, value) {
        stream.off('readable', onreadable).off('close', onclose).off('error', onerror)

        if (err) reject(err)
        else resolve(value)
      }
    })
  }

  releaseLock() {
    this._closed.reject(new TypeError('Reader was released'))
    this._stream._releaseLock()
    this._stream = null
  }

  cancel(reason = new TypeError('Stream was cancelled')) {
    const stream = this._stream._stream

    if (stream.destroyed) return Promise.resolve()

    return new Promise((resolve) =>
      stream.once('close', resolve).once('error', noop).destroy(reason)
    )
  }
}

// https://streams.spec.whatwg.org/#readablestreamdefaultcontroller
exports.ReadableStreamDefaultController = class ReadableStreamDefaultController {
  constructor(stream) {
    this._stream = stream
  }

  get desiredSize() {
    const stream = this._stream._stream

    return stream._readableState.highWaterMark - stream._readableState.buffered
  }

  enqueue(data) {
    this._stream._stream.push(data)
  }

  close() {
    this._stream._stream.push(null)
  }

  error(err) {
    this._stream._stream.destroy(err)
  }
}

// https://streams.spec.whatwg.org/#readablestream
class ReadableStream {
  static get [readableKind]() {
    return 0 // Compatibility version
  }

  static from(iterable) {
    return new ReadableStream(Readable.from(iterable))
  }

  constructor(underlyingSource = {}, queuingStrategy) {
    if (isStreamx(underlyingSource)) {
      this._stream = underlyingSource
    } else {
      if (queuingStrategy === undefined) {
        queuingStrategy = new exports.CountQueuingStrategy()
      }

      const { start, pull, cancel } = underlyingSource
      const { highWaterMark = 1, size = defaultSize } = queuingStrategy

      this._stream = new Readable({ highWaterMark, byteLength: size })

      const controller = new exports.ReadableStreamDefaultController(this)

      try {
        let starting = Promise.resolve()

        if (start) starting = forwardError(start.call(this, controller), controller)

        if (pull) {
          this._stream._read = this._read.bind(this, starting, pull.bind(this, controller))
        }

        if (cancel) {
          this._stream.once('error', cancel.bind(this))
        }
      } catch (err) {
        controller.error(err)
      }
    }

    this._reader = null
  }

  get [readableKind]() {
    return ReadableStream[readableKind]
  }

  get locked() {
    return this._reader !== null
  }

  getReader() {
    if (this.locked) throw new TypeError('Stream is locked')

    this._reader = new exports.ReadableStreamDefaultReader(this)

    return this._reader
  }

  cancel(reason = new TypeError('Stream was cancelled')) {
    const stream = this._stream

    if (stream.destroyed) return Promise.resolve()

    if (this.locked) return Promise.reject(new TypeError('Stream is locked'))

    return new Promise((resolve) =>
      stream.once('close', resolve).once('error', noop).destroy(reason)
    )
  }

  tee() {
    const [a, b] = tee(this._stream)

    return [new ReadableStream(a), new ReadableStream(b)]
  }

  pipeTo(destination) {
    return new Promise((resolve, reject) =>
      this._stream.pipe(destination._stream, (err) => {
        err ? reject(err) : resolve()
      })
    )
  }

  [Symbol.asyncIterator]() {
    return this._stream[Symbol.asyncIterator]()
  }

  _releaseLock() {
    this._reader = null
  }

  async _read(starting, pull, cb) {
    await starting

    let err = null
    try {
      await pull()
    } catch (e) {
      err = e
    }
    cb(err)
  }
}

function defaultSize() {
  return 1
}

exports.ReadableStream = ReadableStream

// https://streams.spec.whatwg.org/#countqueuingstrategy
exports.CountQueuingStrategy = class CountQueuingStrategy {
  constructor(opts = {}) {
    const { highWaterMark = 1 } = opts

    this.highWaterMark = highWaterMark
  }

  size(chunk) {
    return 1
  }
}

// https://streams.spec.whatwg.org/#bytelengthqueuingstrategy
exports.ByteLengthQueuingStrategy = class ByteLengthQueuingStrategy {
  constructor(opts = {}) {
    const { highWaterMark = 16384 } = opts

    this.highWaterMark = highWaterMark
  }

  size(chunk) {
    return chunk.byteLength
  }
}

exports.isReadableStream = function isReadableStream(value) {
  if (value instanceof ReadableStream) return true

  return (
    typeof value === 'object' &&
    value !== null &&
    value[readableKind] === ReadableStream[readableKind]
  )
}

// https://streams.spec.whatwg.org/#readablestream-errored
exports.isReadableStreamErrored = function isReadableStreamErrored(stream) {
  return getStreamError(stream._stream) !== null
}

// https://streams.spec.whatwg.org/#is-readable-stream-disturbed
exports.isReadableStreamDisturbed = function isReadableStreamDisturbed(stream) {
  return isDisturbed(stream._stream)
}

// https://streams.spec.whatwg.org/#writablestreamdefaultwriter
exports.WritableStreamDefaultWriter = class WritableStreamDefaultWriter {
  constructor(stream) {
    this._stream = stream
    this._stream._stream.once('close', onclose).once('error', onerror)

    const closed = Promise.withResolvers()

    // Avoid unhandled exceptions
    closed.promise.catch(noop)

    this._closed = closed

    function onclose() {
      closed.resolve()
    }

    function onerror(err) {
      closed.reject(err)
    }
  }

  get desiredSize() {
    const stream = this._stream._stream

    return stream._writableState.highWaterMark - stream._writableState.buffered
  }

  get closed() {
    return this._closed.promise
  }

  get ready() {
    const stream = this._stream._stream

    if (getStreamError(stream)) return Promise.reject()

    return Writable.drained(stream).then()
  }

  async write(chunk) {
    const stream = this._stream._stream

    let err = getStreamError(stream)
    if (err) return Promise.reject(err)

    stream.write(chunk)

    await Writable.drained(stream)

    err = getStreamError(stream)
    if (err) return Promise.reject(err)
  }

  releaseLock() {
    this._closed.reject(new TypeError('Writer was released'))
    this._stream._releaseLock()
    this._stream = null
  }

  close() {
    const stream = this._stream._stream

    if (stream.destroyed) return Promise.resolve()

    return new Promise((resolve) => stream.once('close', resolve).end())
  }

  abort(reason = new TypeError('Stream was aborted')) {
    const stream = this._stream._stream

    if (stream.destroyed) return Promise.resolve()

    return new Promise((resolve) => stream.once('close', resolve).destroy(reason))
  }
}

// https://streams.spec.whatwg.org/#writablestreamdefaultcontroller
exports.WritableStreamDefaultController = class WritableStreamDefaultController {
  constructor(stream) {
    this._stream = stream
  }

  error(err) {
    this._stream._stream.destroy(err)
  }
}

// https://streams.spec.whatwg.org/#writablestream
class WritableStream {
  static get [writableKind]() {
    return 0 // Compatibility version
  }

  constructor(underlyingSink = {}, queuingStrategy = {}) {
    if (isStreamx(underlyingSink)) {
      this._stream = underlyingSink
    } else {
      if (queuingStrategy === undefined) {
        queuingStrategy = new exports.CountQueuingStrategy()
      }

      const { start, write, close, abort } = underlyingSink
      const { highWaterMark = 1, size = defaultSize } = queuingStrategy

      this._stream = new Writable({ highWaterMark, byteLength: size })

      const controller = new exports.WritableStreamDefaultController(this)

      this._controller = controller

      try {
        let starting = Promise.resolve()

        if (start) starting = forwardError(start.call(this, controller), controller)

        if (write) {
          this._stream._write = this._write.bind(this, starting, write.bind(this))
        }

        if (close) {
          this._stream._destroy = this._destroy.bind(this, close.call(this))
        }

        if (abort) {
          this._stream.once('error', abort.bind(this))
        }
      } catch (err) {
        controller.error(err)
      }
    }

    this._writer = null
  }

  get [writableKind]() {
    return WritableStream[writableKind]
  }

  get locked() {
    return this._writer !== null
  }

  getWriter() {
    if (this.locked) throw new TypeError('Stream is locked')

    this._writer = new exports.WritableStreamDefaultWriter(this)

    return this._writer
  }

  abort(reason = new TypeError('Stream was aborted')) {
    if (this._stream.destroyed) return Promise.resolve()

    if (this.locked) return Promise.reject(new TypeError('Stream is locked'))

    return new Promise((resolve) => this._stream.once('close', resolve).destroy(reason))
  }

  close() {
    if (this._stream.destroyed) return Promise.resolve()

    if (this.locked) return Promise.reject(new TypeError('Stream is locked'))

    return new Promise((resolve) => this._stream.once('close', resolve).end())
  }

  _releaseLock() {
    this._writer = null
  }

  async _write(starting, write, data, cb) {
    await starting

    let err = null
    try {
      await write(data, this._controller)
    } catch (e) {
      err = e
    }
    cb(err)
  }

  async _destroy(closing, cb) {
    let err = null
    try {
      await closing
    } catch (e) {
      err = e
    }
    cb(err)
  }
}

exports.WritableStream = WritableStream

exports.isWritableStream = function isWritableStream(value) {
  if (value instanceof WritableStream) return true

  return (
    typeof value === 'object' &&
    value !== null &&
    value[writableKind] === WritableStream[writableKind]
  )
}

// https://streams.spec.whatwg.org/#transformstreamdefaultcontroller
exports.TransformStreamDefaultController = class TransformStreamDefaultController {
  constructor(stream) {
    this._stream = stream
  }

  get desiredSize() {
    const stream = this._stream._stream

    return stream._readableState.highWaterMark - stream._readableState.buffered
  }

  enqueue(data) {
    this._stream._stream.push(data)
  }

  error(err) {
    this._stream._stream.destroy(err)
  }

  terminate() {
    const stream = this._stream._stream

    stream.push(null)
    stream.destroy(new TypeError('Stream has been terminated'))
  }
}

// https://streams.spec.whatwg.org/#transformstream
class TransformStream {
  static get [transformKind]() {
    return 0 // Compatibility version
  }

  constructor(transformer = {}, writableStrategy = {}, readableStrategy = {}) {
    if (isStreamx(transformer)) {
      this._stream = transformer
    } else {
      const { start, transform, flush } = transformer

      this._stream = new Transform({ ...writableStrategy, ...readableStrategy })

      const controller = new exports.TransformStreamDefaultController(this)

      this._controller = controller

      try {
        let starting = Promise.resolve()

        if (start) starting = forwardError(start.call(this, controller), controller)

        if (transform) {
          this._stream._transform = this._transform.bind(this, starting, transform.bind(this))
        }

        if (flush) {
          this._stream._flush = this._flush.bind(this, flush.call(this, this._controller))
        }
      } catch (err) {
        controller.error(err)
      }
    }

    this._writable = new WritableStream(this._stream)
    this._readable = new ReadableStream(this._stream)
  }

  get [transformKind]() {
    return TransformStream[transformKind]
  }

  get writable() {
    return this._writable
  }

  get readable() {
    return this._readable
  }

  async _transform(starting, transform, data, cb) {
    await starting

    let err = null
    try {
      await transform(data, this._controller)
    } catch (e) {
      err = e
    }
    cb(err)
  }

  async _flush(flush, cb) {
    let err = null
    try {
      await flush
    } catch (e) {
      err = e
    }
    cb(err)
  }
}

exports.TransformStream = TransformStream

exports.isTransformStream = function isTransformStream(value) {
  if (value instanceof TransformStream) return true

  return (
    typeof value === 'object' &&
    value !== null &&
    value[transformKind] === TransformStream[transformKind]
  )
}

async function forwardError(promise, controller) {
  try {
    await promise
  } catch (err) {
    controller.error(err)
  }
}

function noop() {}
module.exports = require.addon()
const binding = require('./binding')

const t = binding.constants

class Type {
  constructor(type) {
    this._type = type
  }

  isUndefined() {
    return this._type === t.UNDEFINED
  }

  isNull() {
    return this._type === t.NULL
  }

  isBoolean() {
    return this._type === t.BOOLEAN
  }

  isNumber() {
    return (this._type & 0xff) === t.NUMBER
  }

  isInt32() {
    return (this._type & (0xff | t.INT32)) === (t.NUMBER | t.INT32)
  }

  isUint32() {
    return (this._type & (0xff | t.UINT32)) === (t.NUMBER | t.UINT32)
  }

  isString() {
    return this._type === t.STRING
  }

  isSymbol() {
    return this._type === t.SYMBOL
  }

  isObject() {
    return (this._type & 0xff) === t.OBJECT
  }

  isArray() {
    return this._type === (t.OBJECT | t.ARRAY)
  }

  isArguments() {
    return this._type === (t.OBJECT | t.ARGUMENTS)
  }

  isDate() {
    return this._type === (t.OBJECT | t.DATE)
  }

  isRegExp() {
    return this._type === (t.OBJECT | t.REGEXP)
  }

  isError() {
    return this._type === (t.OBJECT | t.ERROR)
  }

  isPromise() {
    return this._type === (t.OBJECT | t.PROMISE)
  }

  isProxy() {
    return this._type === (t.OBJECT | t.PROXY)
  }

  isGenerator() {
    return this._type === (t.OBJECT | t.GENERATOR)
  }

  isMap() {
    return this._type === (t.OBJECT | t.MAP)
  }

  isSet() {
    return this._type === (t.OBJECT | t.SET)
  }

  isWeakMap() {
    return this._type === (t.OBJECT | t.WEAK_MAP)
  }

  isWeakSet() {
    return this._type === (t.OBJECT | t.WEAK_SET)
  }

  isWeakRef() {
    return this._type === (t.OBJECT | t.WEAK_REF)
  }

  isArrayBuffer() {
    return this._type === (t.OBJECT | t.ARRAYBUFFER)
  }

  isSharedArrayBuffer() {
    return this._type === (t.OBJECT | t.SHAREDARRAYBUFFER)
  }

  isTypedArray() {
    return (this._type & 0xffff) === (t.OBJECT | t.TYPEDARRAY)
  }

  isInt8Array() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.INT8ARRAY)
  }

  isUint8Array() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.UINT8ARRAY)
  }

  isUint8ClampedArray() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.UINT8CLAMPEDARRAY)
  }

  isInt16Array() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.INT16ARRAY)
  }

  isUint16Array() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.UINT16ARRAY)
  }

  isInt32Array() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.INT32ARRAY)
  }

  isUint32Array() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.UINT32ARRAY)
  }

  isFloat16Array() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.FLOAT16ARRAY)
  }

  isFloat32Array() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.FLOAT32ARRAY)
  }

  isFloat64Array() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.FLOAT64ARRAY)
  }

  isBigInt64Array() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.BIGINT64ARRAY)
  }

  isBigUint64Array() {
    return this._type === (t.OBJECT | t.TYPEDARRAY | t.BIGUINT64ARRAY)
  }

  isDataView() {
    return this._type === (t.OBJECT | t.DATAVIEW)
  }

  isModuleNamespace() {
    return this._type === (t.OBJECT | t.MODULE_NAMESPACE)
  }

  isFunction() {
    return (this._type & 0xff) === t.FUNCTION
  }

  isAsyncFunction() {
    return (
      (this._type & (0xff | t.ASYNC_FUNCTION)) ===
      (t.FUNCTION | t.ASYNC_FUNCTION)
    )
  }

  isGeneratorFunction() {
    return (
      (this._type & (0xff | t.GENERATOR_FUNCTION)) ===
      (t.FUNCTION | t.GENERATOR_FUNCTION)
    )
  }

  isExternal() {
    return this._type === t.EXTERNAL
  }

  isBigInt() {
    return this._type === t.BIGINT
  }
}

module.exports = exports = function type(value) {
  switch (typeof value) {
    case 'undefined':
      return new Type(t.UNDEFINED)
    case 'boolean':
      return new Type(t.BOOLEAN)
    case 'number':
      return new Type(
        Number.isSafeInteger(value) ? binding.type(value) : t.NUMBER
      )
    case 'string':
      return new Type(t.STRING)
    case 'symbol':
      return new Type(t.SYMBOL)
    case 'object':
      return new Type(value === null ? t.NULL : binding.type(value))
    case 'function':
      return new Type(binding.type(value))
    case 'bigint':
      return new Type(t.BIGINT)
  }
}

exports.createTag = function createTag(...components) {
  const tag = new Uint32Array(4)
  for (let i = 0; i < 4; i++) tag[i] = components[i] || 0
  return tag
}

exports.addTag = function addTag(object, tag) {
  binding.addTag(object, tag)
}

exports.checkTag = function checkTag(object, tag) {
  return binding.checkTag(object, tag)
}
{
  "name": "bare-type",
  "version": "1.1.0",
  "description": "Cross-realm type predicates for Bare",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "./package": "./package.json"
  },
  "files": [
    "index.js",
    "index.d.ts",
    "binding.c",
    "binding.js",
    "CMakeLists.txt",
    "prebuilds"
  ],
  "addon": true,
  "scripts": {
    "test": "prettier . --check && bare test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/bare-type.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/bare-type/issues"
  },
  "homepage": "https://github.com/holepunchto/bare-type#readme",
  "engines": {
    "bare": ">=1.2.0"
  },
  "devDependencies": {
    "brittle": "^3.4.0",
    "cmake-bare": "^1.1.6",
    "prettier": "^3.4.1",
    "prettier-config-standard": "^7.0.0"
  }
}
module.exports = require.addon()
const path = require('bare-path')
const binding = require('./binding')
const errors = require('./lib/errors')
const URLSearchParams = require('./lib/url-search-params')

const kind = Symbol.for('bare.url.kind')

const isWindows = Bare.platform === 'win32'

class URL {
  static get [kind]() {
    return 0 // Compatibility version
  }

  constructor(input, base, opts = {}) {
    if (arguments.length === 0) throw errors.INVALID_URL()

    input = String(input)

    if (base !== undefined) base = String(base)

    this._components = new Uint32Array(8)

    this._parse(input, base, opts.throw !== false)

    if (this._href) this._params = new URLSearchParams(this.search, this)
  }

  get [kind]() {
    return URL[kind]
  }

  // https://url.spec.whatwg.org/#dom-url-href

  get href() {
    return this._href
  }

  set href(value) {
    this._update(value)

    this._params._parse(this.search)
  }

  // https://url.spec.whatwg.org/#dom-url-protocol

  get protocol() {
    return this._slice(0, this._components[0]) + ':'
  }

  set protocol(value) {
    this._update(this._replace(value.replace(/:+$/, ''), 0, this._components[0]))
  }

  // https://url.spec.whatwg.org/#dom-url-username

  get username() {
    return this._slice(this._components[0] + 3 /* :// */, this._components[1])
  }

  set username(value) {
    if (cannotHaveCredentialsOrPort(this)) {
      return
    }

    if (this.username === '') value += '@'

    this._update(this._replace(value, this._components[0] + 3 /* :// */, this._components[1]))
  }

  // https://url.spec.whatwg.org/#dom-url-password

  get password() {
    return this._href.slice(this._components[1] + 1 /* : */, this._components[2] - 1 /* @ */)
  }

  set password(value) {
    if (cannotHaveCredentialsOrPort(this)) {
      return
    }

    let start = this._components[1] + 1 /* : */
    let end = this._components[2] - 1 /* @ */

    if (this.password === '') {
      value = ':' + value
      start--
    }

    if (this.username === '') {
      value += '@'
      end++
    }

    this._update(this._replace(value, start, end))
  }

  // https://url.spec.whatwg.org/#dom-url-host

  get host() {
    return this._slice(this._components[2], this._components[5])
  }

  set host(value) {
    if (hasOpaquePath(this)) {
      return
    }

    this._update(
      this._replace(value, this._components[2], this._components[value.includes(':') ? 5 : 3])
    )
  }

  // https://url.spec.whatwg.org/#dom-url-hostname

  get hostname() {
    return this._slice(this._components[2], this._components[3])
  }

  set hostname(value) {
    if (hasOpaquePath(this)) {
      return
    }

    this._update(this._replace(value, this._components[2], this._components[3]))
  }

  // https://url.spec.whatwg.org/#dom-url-port

  get port() {
    return this._slice(this._components[3] + 1 /* : */, this._components[5])
  }

  set port(value) {
    if (cannotHaveCredentialsOrPort(this)) {
      return
    }

    let start = this._components[3] + 1 /* : */

    if (this.port === '') {
      value = ':' + value
      start--
    }

    this._update(this._replace(value, start, this._components[5]))
  }

  // https://url.spec.whatwg.org/#dom-url-pathname

  get pathname() {
    return this._slice(this._components[5], this._components[6] - 1 /* ? */)
  }

  set pathname(value) {
    if (hasOpaquePath(this)) {
      return
    }

    if (value[0] !== '/' && value[0] !== '\\') {
      value = '/' + value
    }

    this._update(this._replace(value, this._components[5], this._components[6] - 1 /* ? */))
  }

  // https://url.spec.whatwg.org/#dom-url-search

  get search() {
    return this._slice(this._components[6] - 1 /* ? */, this._components[7] - 1 /* # */)
  }

  set search(value) {
    if (value && value[0] !== '?') value = '?' + value

    this._update(
      this._replace(value, this._components[6] - 1 /* ? */, this._components[7] - 1 /* # */)
    )

    this._params._parse(this.search)
  }

  // https://url.spec.whatwg.org/#dom-url-searchparams

  get searchParams() {
    return this._params
  }

  // https://url.spec.whatwg.org/#dom-url-hash

  get hash() {
    return this._slice(this._components[7] - 1 /* # */)
  }

  set hash(value) {
    if (value && value[0] !== '#') value = '#' + value

    this._update(this._replace(value, this._components[7] - 1 /* # */))
  }

  toString() {
    return this._href
  }

  toJSON() {
    return this._href
  }

  [Symbol.for('bare.inspect')]() {
    return {
      __proto__: { constructor: URL },

      href: this.href,
      protocol: this.protocol,
      username: this.username,
      password: this.password,
      host: this.host,
      hostname: this.hostname,
      port: this.port,
      pathname: this.pathname,
      search: this.search,
      searchParams: this.searchParams,
      hash: this.hash
    }
  }

  _slice(start, end = this._href.length) {
    return this._href.slice(start, end)
  }

  _replace(replacement, start, end = this._href.length) {
    return this._slice(0, start) + replacement + this._slice(end)
  }

  _parse(input, base, shouldThrow) {
    try {
      this._href = binding.parse(
        String(input),
        base ? String(base) : null,
        this._components,
        shouldThrow
      )
    } catch (err) {
      if (err instanceof TypeError) throw err

      throw errors.INVALID_URL(`Invalid URL '${input}'`, input)
    }
  }

  _update(input) {
    try {
      this._parse(input, null, true)
    } catch (err) {
      if (err instanceof TypeError) throw err
    }
  }
}

module.exports = exports = URL

// https://url.spec.whatwg.org/#url-opaque-path
function hasOpaquePath(url) {
  return url.pathname[0] !== '/'
}

// https://url.spec.whatwg.org/#cannot-have-a-username-password-port
function cannotHaveCredentialsOrPort(url) {
  return url.hostname === '' || url.protocol === 'file:'
}

exports.URL = URL
exports.URLSearchParams = URLSearchParams

exports.errors = errors

exports.isURL = function isURL(value) {
  if (value instanceof URL) return true

  return typeof value === 'object' && value !== null && value[kind] === URL[kind]
}

exports.isURLSearchParams = URLSearchParams.isURLSearchParams

// https://url.spec.whatwg.org/#dom-url-parse
exports.parse = function parse(input, base) {
  const url = new URL(input, base, { throw: false })
  return url._href ? url : null
}

// https://url.spec.whatwg.org/#dom-url-canparse
exports.canParse = function canParse(input, base) {
  return binding.canParse(String(input), base ? String(base) : null)
}

exports.fileURLToPath = function fileURLToPath(url) {
  if (typeof url === 'string') {
    url = new URL(url)
  }

  if (url.protocol !== 'file:') {
    throw errors.INVALID_URL_SCHEME('The URL must use the file: protocol')
  }

  if (isWindows) {
    if (/%2f|%5c/i.test(url.pathname)) {
      throw errors.INVALID_FILE_URL_PATH(
        'The file: URL path must not include encoded \\ or / characters'
      )
    }
  } else {
    if (url.hostname) {
      throw errors.INVALID_FILE_URL_HOST("The file: URL host must be 'localhost' or empty")
    }

    if (/%2f/i.test(url.pathname)) {
      throw errors.INVALID_FILE_URL_PATH('The file: URL path must not include encoded / characters')
    }
  }

  if (/%00/i.test(url.pathname)) {
    throw errors.INVALID_FILE_URL_PATH('The file: URL path must not include encoded NUL characters')
  }

  const pathname = path.normalize(decodeURIComponent(url.pathname))

  if (isWindows) {
    if (url.hostname) return '\\\\' + url.hostname + pathname

    const letter = pathname.charCodeAt(1) | 0x20

    if (letter < 0x61 /* a */ || letter > 0x7a /* z */ || pathname.charCodeAt(2) !== 0x3a /* : */) {
      throw errors.INVALID_FILE_URL_PATH('The file: URL path must be absolute')
    }

    return pathname.slice(1)
  }

  return pathname
}

exports.pathToFileURL = function pathToFileURL(pathname) {
  let resolved = path.resolve(pathname)

  if (pathname[pathname.length - 1] === '/') {
    resolved += '/'
  } else if (isWindows && pathname[pathname.length - 1] === '\\') {
    resolved += '\\'
  }

  resolved = resolved
    .replaceAll('%', '%25') // Must be first
    .replaceAll('#', '%23')
    .replaceAll('?', '%3f')
    .replaceAll('\n', '%0a')
    .replaceAll('\r', '%0d')
    .replaceAll('\t', '%09')

  if (!isWindows) {
    resolved = resolved.replaceAll('\\', '%5c')
  }

  return new URL('file:' + resolved)
}

exports.format = function format(parts) {
  const { protocol, auth, host, hostname, port, pathname, search, query, hash, slashes } = parts

  let result = ''

  if (typeof protocol === 'string') {
    result += protocol

    if (protocol[protocol.length - 1] !== ':') {
      result += ':'
    }

    if (slashes === true || /https?|ftp|gopher|file/.test(protocol)) {
      result += '//'
    }
  }

  if (typeof auth === 'string') {
    if (host || hostname) result += auth + '@'
  }

  if (typeof host === 'string') result += host
  else {
    result += hostname

    if (port) result += ':' + port
  }

  if (typeof pathname === 'string' && pathname !== '') {
    if (pathname[0] !== '/') result += '/'
    result += pathname
  }

  if (typeof search === 'string') {
    if (search[0] !== '?') result += '?'
    result += search
  } else if (typeof query === 'object' && query !== null) {
    result += '?' + new URLSearchParams(query)
  }

  if (typeof hash === 'string') {
    if (hash[0] !== '#') result += '#'
    result += hash
  }

  return result
}
module.exports = class URLError extends Error {
  constructor(msg, fn = URLError, code = fn.name) {
    super(`${code}: ${msg}`)

    this.code = code

    if (Error.captureStackTrace) Error.captureStackTrace(this, fn)
  }

  get name() {
    return 'URLError'
  }

  static INVALID_URL(msg, input) {
    const err = new URLError(msg, URLError.INVALID_URL)

    err.input = input

    return err
  }

  static INVALID_URL_SCHEME(msg = 'Invalid URL') {
    return new URLError(msg, URLError.INVALID_URL_SCHEME)
  }

  static INVALID_FILE_URL_HOST(msg = 'Invalid file: URL host') {
    return new URLError(msg, URLError.INVALID_FILE_URL_HOST)
  }

  static INVALID_FILE_URL_PATH(msg = 'Invalid file: URL path') {
    return new URLError(msg, URLError.INVALID_FILE_URL_PATH)
  }
}
const kind = Symbol.for('bare.url.search-params.kind')

class URLSearchParams {
  static _urls = new WeakMap()

  static get [kind]() {
    return 0 // Compatibility version
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-urlsearchparams
  constructor(init, url = null) {
    this._params = new Map()

    if (url) URLSearchParams._urls.set(this, url)

    if (typeof init === 'string') {
      this._parse(init)
    } else if (init) {
      for (const [name, value] of typeof init[Symbol.iterator] === 'function'
        ? init
        : Object.entries(init)) {
        this.append(name, value)
      }
    }
  }

  get [kind]() {
    return URLSearchParams[kind]
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-size
  get size() {
    return this._params.length
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append(name, value = null) {
    if (value === null) return

    let list = this._params.get(name)

    if (list === undefined) {
      list = []
      this._params.set(name, list)
    }

    list.push(value)

    this._update()
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  delete(name, value = null) {
    if (value === null) this._params.delete(name)
    else {
      let list = this._params.get(name)

      if (list === undefined) return

      list = list.filter((found) => found !== value)

      if (list.length === 0) this._params.delete(name)
      else this._params.set(name, list)
    }

    this._update()
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get(name) {
    const list = this._params.get(name)

    if (list === undefined) return null

    return list[0]
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll(name) {
    const list = this._params.get(name)

    if (list === undefined) return []

    return Array.from(list)
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has(name, value = null) {
    const list = this._params.get(name)

    if (list === undefined) return false

    if (value === null) return true

    return list.includes(value)
  }

  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set(name, value = null) {
    if (value === null) this._params.delete(name)
    else this._params.set(name, [value])

    this._update()
  }

  toString() {
    return this._serialize()
  }

  toJSON() {
    return [...this]
  }

  *[Symbol.iterator]() {
    for (const [name, values] of this._params) {
      for (const value of values) yield [name, value]
    }
  }

  [Symbol.for('bare.inspect')]() {
    const object = {
      __proto__: { constructor: URLSearchParams }
    }

    for (const [name, values] of this._params) {
      if (values.length === 1) object[name] = values[0]
      else object[name] = values
    }

    return object
  }

  // https://url.spec.whatwg.org/#concept-urlsearchparams-update
  _update() {
    const url = URLSearchParams._urls.get(this)

    if (url === undefined) return

    url.search = this._serialize()
  }

  // https://url.spec.whatwg.org/#concept-urlencoded-parser
  _parse(input) {
    if (input[0] === '?') input = input.substring(1)

    this._params = new Map()

    for (let sequence of input.split('&')) {
      if (sequence.length === 0) continue

      sequence = sequence.replace(/\+/g, ' ')

      let i = sequence.indexOf('=')
      if (i === -1) i = sequence.length

      const name = decodeURIComponent(sequence.substring(0, i))
      const value = decodeURIComponent(sequence.substring(i + 1, sequence.length))

      let list = this._params.get(name)

      if (list === undefined) {
        list = []
        this._params.set(name, list)
      }

      list.push(value)
    }
  }

  // https://url.spec.whatwg.org/#concept-urlencoded-serializer
  _serialize() {
    let output = ''

    for (let [name, values] of this._params) {
      name = encodeURIComponent(name)

      for (const value of values) {
        if (output) output += '&'

        output += name + '=' + encodeURIComponent(value)
      }
    }

    return output
  }
}

module.exports = exports = URLSearchParams

exports.isURLSearchParams = function isURLSearchParams(value) {
  if (value instanceof URLSearchParams) return true

  return typeof value === 'object' && value !== null && value[kind] === URLSearchParams[kind]
}
{
  "name": "bare-url",
  "version": "2.4.5",
  "description": "WHATWG URL implementation for JavaScript",
  "exports": {
    "./package": "./package.json",
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "./global": {
      "types": "./global.d.ts",
      "default": "./global.js"
    }
  },
  "files": [
    "index.js",
    "index.d.ts",
    "global.js",
    "global.d.ts",
    "binding.c",
    "binding.js",
    "CMakeLists.txt",
    "lib",
    "prebuilds"
  ],
  "addon": true,
  "scripts": {
    "format": "prettier --write . && lunte --fix",
    "lint": "prettier --check . && lunte",
    "test": "brittle-bare --coverage test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/bare-url.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/bare-url/issues"
  },
  "homepage": "https://github.com/holepunchto/bare-url",
  "dependencies": {
    "bare-path": "^3.0.0"
  },
  "devDependencies": {
    "brittle": "^3.3.2",
    "cmake-bare": "^1.1.6",
    "cmake-fetch": "^1.0.0",
    "lunte": "^1.6.0",
    "prettier": "^3.3.3",
    "prettier-config-holepunch": "^2.0.0"
  }
}
const b4a = require('b4a')

function byteLength (size) {
  return Math.ceil(size / 8)
}

function get (buffer, bit) {
  const n = buffer.BYTES_PER_ELEMENT * 8

  const offset = bit & (n - 1)
  const i = (bit - offset) / n

  return (buffer[i] & (1 << offset)) !== 0
}

function set (buffer, bit, value = true) {
  const n = buffer.BYTES_PER_ELEMENT * 8

  const offset = bit & (n - 1)
  const i = (bit - offset) / n
  const mask = 1 << offset

  if (value) {
    if ((buffer[i] & mask) !== 0) return false
  } else {
    if ((buffer[i] & mask) === 0) return false
  }

  buffer[i] ^= mask
  return true
}

function setRange (buffer, start, end, value = true) {
  const n = buffer.BYTES_PER_ELEMENT * 8

  let remaining = end - start
  let offset = start & (n - 1)
  let i = (start - offset) / n

  let changed = false

  while (remaining > 0) {
    const mask = (2 ** Math.min(remaining, n - offset) - 1) << offset

    if (value) {
      if ((buffer[i] & mask) !== mask) {
        buffer[i] |= mask
        changed = true
      }
    } else {
      if ((buffer[i] & mask) !== 0) {
        buffer[i] &= ~mask
        changed = true
      }
    }

    remaining -= n - offset
    offset = 0
    i++
  }

  return changed
}

function fill (buffer, value, start = 0, end = buffer.byteLength * 8) {
  const n = buffer.BYTES_PER_ELEMENT * 8
  let i, j

  {
    const offset = start & (n - 1)
    i = (start - offset) / n

    if (offset !== 0) {
      const mask = (2 ** Math.min(n - offset, end - start) - 1) << offset

      if (value) buffer[i] |= mask
      else buffer[i] &= ~mask

      i++
    }
  }

  {
    const offset = end & (n - 1)
    j = (end - offset) / n

    if (offset !== 0 && j >= i) {
      const mask = (2 ** offset) - 1

      if (value) buffer[j] |= mask
      else buffer[j] &= ~mask
    }
  }

  return buffer.fill(value ? (2 ** n) - 1 : 0, i, j)
}

function toggle (buffer, bit) {
  const n = buffer.BYTES_PER_ELEMENT * 8

  const offset = bit & (n - 1)
  const i = (bit - offset) / n
  const mask = 1 << offset

  buffer[i] ^= mask
  return (buffer[i] & mask) !== 0
}

function remove (buffer, bit) {
  return set(buffer, bit, false)
}

function removeRange (buffer, start, end) {
  return setRange(buffer, start, end, false)
}

function indexOf (buffer, value, position = 0) {
  for (let i = position, n = buffer.byteLength * 8; i < n; i++) {
    if (get(buffer, i) === value) return i
  }

  return -1
}

function lastIndexOf (buffer, value, position = buffer.byteLength * 8 - 1) {
  for (let i = position; i >= 0; i--) {
    if (get(buffer, i) === value) return i
  }

  return -1
}

function of (...bits) {
  return from(bits)
}

function from (bits) {
  const buffer = b4a.alloc(byteLength(bits.length))
  for (let i = 0; i < bits.length; i++) set(buffer, i, bits[i])
  return buffer
}

function * iterator (buffer) {
  for (let i = 0, n = buffer.byteLength * 8; i < n; i++) yield get(buffer, i)
}

module.exports = {
  byteLength,
  get,
  set,
  setRange,
  fill,
  toggle,
  remove,
  removeRange,
  indexOf,
  lastIndexOf,
  of,
  from,
  iterator
}
{
  "name": "bits-to-bytes",
  "version": "1.3.0",
  "description": "Functions for doing bit manipulation of typed arrays",
  "main": "index.js",
  "files": [
    "index.js"
  ],
  "scripts": {
    "test": "standard && brittle test.mjs"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/bits-to-bytes.git"
  },
  "author": "Kasper Isager Dalsgarð <kasper@funktionel.co>",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/holepunchto/bits-to-bytes/issues"
  },
  "homepage": "https://github.com/holepunchto/bits-to-bytes#readme",
  "dependencies": {
    "b4a": "^1.5.0"
  },
  "devDependencies": {
    "brittle": "^2.3.1",
    "standard": "^17.0.0"
  }
}
const EventEmitter = require('events')
const Protomux = require('protomux')
const { Readable } = require('streamx')
const sodium = require('sodium-universal')
const b4a = require('b4a')
const c = require('compact-encoding')
const bitfield = require('compact-encoding-bitfield')
const bits = require('bits-to-bytes')
const errors = require('./lib/errors')

exports.Server = class BlindRelayServer extends EventEmitter {
  constructor(opts = {}) {
    super()

    const { createStream } = opts

    this._createStream = createStream
    this._pairing = new Map()
    this._activePairingRefs = new Map()
    this._sessions = new Set()
    this.stats = createStats()
  }

  get sessions() {
    return this._sessions[Symbol.iterator]()
  }

  accept(stream, opts) {
    const session = new BlindRelaySession(this, stream, opts)

    this._sessions.add(session)
    this.stats.sessions.accepted++

    return session
  }

  async close() {
    const ending = []

    for (const session of this._sessions) {
      ending.push(session.end())
    }

    await Promise.all(ending)

    this._pairing.clear()
  }

  _trackActiveLink(keyString) {
    const refs = this._activePairingRefs.get(keyString) || 0

    if (refs === 0) this.stats.pairings.active++

    this._activePairingRefs.set(keyString, refs + 1)
  }

  _untrackActiveLink(keyString) {
    const refs = this._activePairingRefs.get(keyString)

    if (refs === undefined) return

    if (refs === 1) {
      this._activePairingRefs.delete(keyString)
      this.stats.pairings.active--
    } else {
      this._activePairingRefs.set(keyString, refs - 1)
    }
  }
}

class BlindRelaySession extends EventEmitter {
  constructor(server, stream, opts = {}) {
    super()

    const { id, handshake, handshakeEncoding } = opts

    this._server = server
    this._mux = Protomux.from(stream)

    this._channel = this._mux.createChannel({
      protocol: 'blind-relay',
      id,
      handshake: handshake ? handshakeEncoding || c.raw : null,
      onopen: this._onopen.bind(this),
      onclose: this._onclose.bind(this),
      ondestroy: this._ondestroy.bind(this)
    })

    this._pair = this._channel.addMessage({
      encoding: m.pair,
      onmessage: this._onpair.bind(this)
    })

    this._unpair = this._channel.addMessage({
      encoding: m.unpair,
      onmessage: this._onunpair.bind(this)
    })

    this._ending = null
    this._destroyed = false
    this._error = null
    this._pairing = new Set()
    this._links = new Map()

    this._onerror = (err) => {
      this._server.stats.streams.errors++
      this.emit('error', err)
    }

    this._channel.open(handshake)
  }

  get closed() {
    return this._channel.closed
  }

  get mux() {
    return this._mux
  }

  get stream() {
    return this._mux.stream
  }

  _onopen() {
    this._server.stats.sessions.opened++
    this.emit('open')
  }

  _onclose() {
    this._ending = Promise.resolve()

    const err = this._error || errors.CHANNEL_CLOSED()
    this._server.stats.pairings.cancelled += this._pairing.size

    for (const token of this._pairing) {
      if (this._server._pairing.delete(token.toString('hex'))) {
        this._server.stats.pairings.pending--
      }
    }

    for (const link of this._links.values()) {
      link.destroy(err)
    }

    this._pairing.clear()
    this._links.clear()

    this._server._sessions.delete(this)
    this._server.stats.sessions.closed++

    this.emit('close')
  }

  _ondestroy() {
    this._destroyed = true
    this.emit('destroy')
  }

  _onpair({ isInitiator, token, id: remoteId }) {
    const keyString = token.toString('hex')

    let pair = this._server._pairing.get(keyString)

    if (pair === undefined) {
      pair = new BlindRelayPair(token)
      this._server._pairing.set(keyString, pair)
      this._server.stats.pairings.pending++
    } else if (pair.links[+isInitiator]) return

    this._pairing.add(keyString)
    this._server.stats.pairings.requested++

    pair.links[+isInitiator] = new BlindRelayLink(this, isInitiator, remoteId)

    if (!pair.paired) return

    this._server._pairing.delete(keyString)
    this._server.stats.pairings.pending--
    this._server.stats.pairings.matched++

    // 1st pass: Create the raw streams needed for each end of the link.
    for (const link of pair.links) {
      link.createStream()
    }

    // 2nd pass: Connect the raw streams and set up handlers.
    for (const link of pair.links) {
      link.remote = pair.remote(link.isInitiator)
      link.activate(keyString)
    }

    // 3rd pass: Let either end of the link know the streams were set up.
    for (const { isInitiator, session, remoteId, stream } of pair.links) {
      session._pair.send({
        isInitiator,
        token,
        id: stream.id,
        seq: 0
      })

      session._endMaybe()

      session.emit('pair', isInitiator, token, stream, remoteId)
    }
  }

  _onunpair({ token }) {
    const keyString = token.toString('hex')

    const pair = this._server._pairing.get(keyString)

    if (pair) {
      for (const link of pair.links) {
        if (link) link.session._pairing.delete(keyString)
      }

      this._server._pairing.delete(keyString)
      this._server.stats.pairings.pending--
      this._server.stats.pairings.cancelled++
      return
    }

    const link = this._links.get(keyString)

    if (link) {
      link.destroyPair(errors.PAIRING_CANCELLED())
      this._server.stats.pairings.cancelled++
    }
  }

  cork() {
    this._channel.cork()
  }

  uncork() {
    this._channel.uncork()
  }

  async end() {
    if (this._ending) return this._ending

    this._ending = EventEmitter.once(this, 'close')
    this._endMaybe()

    return this._ending
  }

  _endMaybe() {
    if (this._ending && this._pairing.size === 0) {
      this._channel.close()
    }
  }

  destroy(err) {
    if (this._destroyed) return
    this._destroyed = true

    this._error = err || errors.CHANNEL_DESTROYED()
    this._channel.close()
  }
}

class BlindRelayPair {
  constructor(token) {
    this.token = token
    this.links = [null, null]
  }

  get paired() {
    return this.links[0] !== null && this.links[1] !== null
  }

  remote(isInitiator) {
    return this.links[isInitiator ? 0 : 1]
  }
}

class BlindRelayLink {
  constructor(session, isInitiator, remoteId) {
    this.session = session
    this.isInitiator = isInitiator
    this.remoteId = remoteId
    this.stream = null
    this.remote = null
    this.keyString = null
    this._onclose = null
  }

  createStream() {
    if (this.stream) return

    this.stream = this.session._server._createStream({
      firewall: this._onfirewall.bind(this)
    })
  }

  activate(keyString) {
    const stream = this.stream

    this.keyString = keyString
    this._onclose = () => {
      if (this.stream !== stream) return

      this.stream = null
      unlink(this)
      this.session._links.delete(keyString)
      this.session._server._untrackActiveLink(keyString)
      this.session._server.stats.streams.closed++
    }

    stream.on('error', this.session._onerror).on('close', this._onclose).relayTo(this.remote.stream)

    this.session._pairing.delete(keyString)
    this.session._links.set(keyString, this)
    this.session._server._trackActiveLink(keyString)
    this.session._server.stats.streams.opened++
  }

  destroy(err) {
    const stream = this.stream

    if (!stream) return

    this.stream = null

    stream.off('close', this._onclose)
    this._onclose = null

    stream.off('error', this.session._onerror)
    unlink(this)
    this.session._links.delete(this.keyString)
    this.session._server._untrackActiveLink(this.keyString)
    this.session._server.stats.streams.closed++
    stream.on('error', noop).destroy(err)
  }

  destroyPair(err) {
    const remote = this.remote

    this.destroy(err)
    if (remote) remote.destroy(err)
  }

  _onfirewall(socket, port, host) {
    this.stream.connect(socket, this.remoteId, port, host)

    return false
  }
}

exports.Client = class BlindRelayClient extends EventEmitter {
  static _clients = new WeakMap()

  static from(stream, opts) {
    let client = this._clients.get(stream)
    if (client) return client
    client = new this(stream, opts)
    this._clients.set(stream, client)
    return client
  }

  constructor(stream, opts = {}) {
    super()

    const { id, handshake, handshakeEncoding } = opts

    this._mux = Protomux.from(stream)

    this._channel = this._mux.createChannel({
      protocol: 'blind-relay',
      id,
      handshake: handshake ? handshakeEncoding || c.raw : null,
      onopen: this._onopen.bind(this),
      onclose: this._onclose.bind(this),
      ondestroy: this._ondestroy.bind(this)
    })

    this._pair = this._channel.addMessage({
      encoding: m.pair,
      onmessage: this._onpair.bind(this)
    })

    this._unpair = this._channel.addMessage({
      encoding: m.unpair
    })

    this._ending = false
    this._destroyed = false
    this._error = null
    this._requests = new Map()

    this._channel.open(handshake)
  }

  get closed() {
    return this._channel.closed
  }

  get mux() {
    return this._mux
  }

  get stream() {
    return this._mux.stream
  }

  get requests() {
    return this._requests.values()
  }

  _onopen() {
    this.emit('open')
  }

  _onclose() {
    this._ending = Promise.resolve()

    const err = this._error || errors.CHANNEL_CLOSED()

    for (const request of this._requests.values()) {
      request.destroy(err)
    }

    this._requests.clear()

    this.constructor._clients.delete(this.stream)

    this.emit('close')
  }

  _ondestroy() {
    this._destroyed = true
    this.emit('destroy')
  }

  _onpair({ isInitiator, token, id: remoteId }) {
    const request = this._requests.get(token.toString('hex'))

    if (request === undefined || request.isInitiator !== isInitiator) return

    request.push(remoteId)
    request.push(null)

    this.emit('pair', request.isInitiator, request.token, request.stream, remoteId)
  }

  pair(isInitiator, token, stream) {
    if (this._destroyed) throw errors.CHANNEL_DESTROYED()

    const keyString = token.toString('hex')

    if (this._requests.has(keyString)) throw errors.ALREADY_PAIRING()

    const request = new BlindRelayRequest(this, isInitiator, token, stream)

    this._requests.set(keyString, request)

    return request
  }

  unpair(token) {
    if (this._destroyed) throw errors.CHANNEL_DESTROYED()

    const request = this._requests.get(token.toString('hex'))

    if (request) request.destroy(errors.PAIRING_CANCELLED())

    this._unpair.send({ token })
  }

  cork() {
    this._channel.cork()
  }

  uncork() {
    this._channel.uncork()
  }

  async end() {
    if (this._ending) return this._ending

    this._ending = EventEmitter.once(this, 'close')
    this._endMaybe()

    return this._ending
  }

  _endMaybe() {
    if (this._ending && this._requests.size === 0) {
      this._channel.close()
    }
  }

  destroy(err) {
    if (this._destroyed) return
    this._destroyed = true

    this._error = err || errors.CHANNEL_DESTROYED()
    this._channel.close()
  }
}

class BlindRelayRequest extends Readable {
  constructor(client, isInitiator, token, stream) {
    super()

    this.client = client
    this.isInitiator = isInitiator
    this.token = token
    this.stream = stream
  }

  _open(cb) {
    if (this.client._destroyed) return cb(errors.CHANNEL_DESTROYED())

    this.client._pair.send({
      isInitiator: this.isInitiator,
      token: this.token,
      id: this.stream.id,
      seq: 0
    })

    cb(null)
  }

  _destroy(cb) {
    this.client._requests.delete(this.token.toString('hex'))

    cb(null)

    this.client._endMaybe()
  }
}

exports.token = function token(buf = b4a.allocUnsafe(32)) {
  sodium.randombytes_buf(buf)
  return buf
}

function noop() {}

function unlink(link) {
  const remote = link.remote

  link.remote = null

  if (remote && remote.remote === link) {
    remote.remote = null
  }
}

function createStats() {
  const stats = {
    sessions: {
      accepted: 0,
      opened: 0,
      closed: 0,
      get active() {
        return this.accepted - this.closed
      }
    },
    pairings: {
      requested: 0,
      matched: 0,
      cancelled: 0,
      pending: 0,
      active: 0
    },
    streams: {
      opened: 0,
      closed: 0,
      errors: 0,
      get active() {
        return this.opened - this.closed
      }
    }
  }

  return stats
}

const m = (exports.messages = {})

const flags = bitfield(7)

m.pair = {
  preencode(state, m) {
    flags.preencode(state)
    c.fixed32.preencode(state, m.token)
    c.uint.preencode(state, m.id)
    c.uint.preencode(state, m.seq)
  },
  encode(state, m) {
    flags.encode(state, bits.of(m.isInitiator))
    c.fixed32.encode(state, m.token)
    c.uint.encode(state, m.id)
    c.uint.encode(state, m.seq)
  },
  decode(state) {
    const [isInitiator] = bits.iterator(flags.decode(state))

    return {
      isInitiator,
      token: c.fixed32.decode(state),
      id: c.uint.decode(state),
      seq: c.uint.decode(state)
    }
  }
}

m.unpair = {
  preencode(state, m) {
    flags.preencode(state)
    c.fixed32.preencode(state, m.token)
  },
  encode(state, m) {
    flags.encode(state, bits.of())
    c.fixed32.encode(state, m.token)
  },
  decode(state) {
    flags.decode(state)

    return {
      token: c.fixed32.decode(state)
    }
  }
}
module.exports = class BlindRelayError extends Error {
  constructor(msg, code, fn = BlindRelayError) {
    super(`${code}: ${msg}`)
    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, fn)
    }
  }

  get name() {
    return 'BlindRelayError'
  }

  static DUPLICATE_CHANNEL(msg = 'Duplicate channel') {
    return new BlindRelayError(msg, 'DUPLICATE_CHANNEL', BlindRelayError.DUPLICATE_CHANNEL)
  }

  static CHANNEL_CLOSED(msg = 'Channel closed') {
    return new BlindRelayError(msg, 'CHANNEL_CLOSED', BlindRelayError.CHANNEL_CLOSED)
  }

  static CHANNEL_DESTROYED(msg = 'Channel destroyed') {
    return new BlindRelayError(msg, 'CHANNEL_DESTROYED', BlindRelayError.CHANNEL_DESTROYED)
  }

  static ALREADY_PAIRING(msg = 'Already pairing') {
    return new BlindRelayError(msg, 'ALREADY_PAIRING', BlindRelayError.ALREADY_PAIRING)
  }

  static PAIRING_CANCELLED(msg = 'Pairing cancelled') {
    return new BlindRelayError(msg, 'PAIRING_CANCELLED', BlindRelayError.PAIRING_CANCELLED)
  }
}
{
  "name": "blind-relay",
  "version": "1.6.1",
  "description": "Blind relay for UDX over Protomux channels",
  "main": "index.js",
  "files": [
    "index.js",
    "lib"
  ],
  "scripts": {
    "format": "prettier --write .",
    "lint": "prettier --check . && lunte",
    "test": "npm run test:bare",
    "test:bare": "brittle-bare --coverage test.mjs"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/blind-relay.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/blind-relay/issues"
  },
  "homepage": "https://github.com/holepunchto/blind-relay#readme",
  "imports": {
    "events": {
      "bare": "bare-events",
      "default": "events"
    }
  },
  "dependencies": {
    "b4a": "^1.6.4",
    "bare-events": "^2.2.0",
    "bits-to-bytes": "^1.3.0",
    "compact-encoding": "^3.0.0",
    "compact-encoding-bitfield": "^1.0.0",
    "protomux": "^3.5.1",
    "sodium-universal": "^5.0.0",
    "streamx": "^2.15.1"
  },
  "devDependencies": {
    "brittle": "^3.2.1",
    "hyperdht": "^6.6.1",
    "lunte": "^1.0.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0",
    "udx-native": "^1.6.1"
  }
}
// https://ipinfo.io/bogon

const b4a = require('b4a')
const c = require('compact-encoding')

module.exports = exports = function isBogon (ip) {
  return isBogonIP(ensureBuffer(ip))
}

exports.isBogon = exports

exports.isPrivate = function isPrivate (ip) {
  return isPrivateIP(ensureBuffer(ip))
}

exports.isReserved = function isReserved (ip) {
  return isReservedIP(ensureBuffer(ip))
}

function isBogonIP (ip) {
  return isPrivateIP(ip) || isReservedIP(ip)
}

function isPrivateIP (ip) {
  return ip.byteLength === 4 ? isPrivateIPv4(ip) : false // IPv6 has no private IPs
}

function isPrivateIPv4 (ip) {
  return (
    // 10.0.0.0/8  Private-use networks
    (ip[0] === 10) ||
    // 100.64.0.0/10 Carrier-grade NAT
    (ip[0] === 100 && ip[1] >= 64 && ip[1] <= 127) ||
    // 127.0.0.0/8 Loopback + Name collision occurrence (127.0.53.53)
    (ip[0] === 127) ||
    // 169.254.0.0/16  Link local
    (ip[0] === 169 && ip[1] === 254) ||
    // 172.16.0.0/12 Private-use networks
    (ip[0] === 172 && ip[1] >= 16 && ip[1] <= 31) ||
    // 192.168.0.0/16  Private-use networks
    (ip[0] === 192 && ip[1] === 168)
  )
}

function isReservedIP (ip) {
  return ip.byteLength === 4 ? isReservedIPv4(ip) : isReservedIPv6(ip)
}

function isReservedIPv4 (ip) {
  return (
    // 0.0.0.0/8 "This" network
    (ip[0] === 0) ||
    // 192.0.0.0/24  IETF protocol assignments
    (ip[0] === 192 && ip[1] === 0 && ip[2] === 0) ||
    // 192.0.2.0/24  TEST-NET-1
    (ip[0] === 192 && ip[1] === 0 && ip[2] === 2) ||
    // 198.18.0.0/15 Network interconnect device benchmark testing
    (ip[0] === 198 && ip[1] >= 18 && ip[1] <= 19) ||
    // 198.51.100.0/24 TEST-NET-2
    (ip[0] === 198 && ip[1] === 51 && ip[2] === 100) ||
    // 203.0.113.0/24  TEST-NET-3
    (ip[0] === 203 && ip[1] === 0 && ip[2] === 113) ||
    // 224.0.0.0/4 Multicast
    (ip[0] >= 224 && ip[0] <= 239) ||
    // 240.0.0.0/4 Reserved for future use
    (ip[0] >= 240) ||
    // 255.255.255.255/32
    (ip[0] === 255 && ip[1] === 255 && ip[2] === 255 && ip[3] === 255)
  )
}

function isReservedIPv6 (ip) {
  return (
    // ::/128 Node-scope unicast unspecified address
    // ::1/128 Node-scope unicast loopback address
    (
      ip[0] === 0 && ip[1] === 0 && ip[2] === 0 && ip[3] === 0 && ip[4] === 0 &&
      ip[5] === 0 && ip[6] === 0 && ip[7] === 0 && ip[8] === 0 && ip[9] === 0 &&
      ip[10] === 0 && ip[11] === 0 && ip[12] === 0 && ip[13] === 0 && ip[14] === 0 &&
      ip[15] <= 1
    ) ||
    // ::ffff:0:0/96 IPv4-mapped addresses
    // ::/96 IPv4-compatible addresses
    (
      ip[0] === 0 && ip[1] === 0 && ip[2] === 0 && ip[3] === 0 && ip[4] === 0 &&
      ip[5] === 0 && ip[6] === 0 && ip[7] === 0 && ip[8] === 0 && ip[9] === 0 &&
      (ip[10] === 0 || ip[10] === 0xff) &&
      (ip[11] === 0 || ip[11] === 0xff)
    ) ||
    // 100::/64 Remotely triggered black hole addresses
    (ip[0] === 0x01 && ip[1] === 0 && ip[2] === 0 && ip[3] === 0 && ip[4] === 0 && ip[5] === 0 && ip[6] === 0 && ip[7] === 0) ||
    // 2001:10::/28 Overlay routable cryptographic hash identifiers (ORCHID)
    (ip[0] === 0x20 && ip[1] === 0x01 && ip[2] === 0 && ip[3] >= 0x10 && ip[3] <= 0x1f) ||
    // 2001:20::/28 Overlay routable cryptographic hash identifiers version 2 (ORCHIDv2)
    (ip[0] === 0x20 && ip[1] === 0x01 && ip[2] === 0 && ip[3] >= 0x20 && ip[3] <= 0x2f) ||
    // 2001:db8::/32 Documentation prefix
    (ip[0] === 0x20 && ip[1] === 0x01 && ip[2] === 0x0d && ip[3] === 0xb8) ||
    // fc00::/7 Unique local addresses (ULA)
    (ip[0] >= 0xfc && ip[0] <= 0xfd) ||
    // fe80::/10 Link-local unicast
    (ip[0] === 0xfe && ip[1] >= 0x80 && ip[1] <= 0xbf) ||
    // ff00::/8 Multicast
    (ip[0] === 0xff)
  )
}

const state = c.state(0, 0, b4a.allocUnsafe(1 /* family */ + 16))

function ensureBuffer (ip) {
  if (b4a.isBuffer(ip)) return ip

  c.ip.preencode(state, ip)
  c.ip.encode(state, ip)

  const buffer = state.buffer.subarray(1 /* family */, state.end)

  state.start = 0
  state.end = 0

  return buffer
}
{
  "name": "bogon",
  "version": "1.3.0",
  "description": "Check if an IP is a bogon",
  "main": "index.js",
  "scripts": {
    "test": "standard && brittle test.mjs"
  },
  "dependencies": {
    "compact-encoding": "^3.0.0",
    "compact-encoding-net": "^1.2.0"
  },
  "devDependencies": {
    "brittle": "^3.0.4",
    "nanobench": "^2.1.1",
    "standard": "^17.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/bogon.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/bogon/issues"
  },
  "homepage": "https://github.com/mafintosh/bogon"
}
const c = require('compact-encoding')

module.exports = function bitfield(length) {
  if (length > 64) {
    throw new RangeError('Bitfield cannot be larger than 64 bits')
  }

  let byteLength
  if (length < 8) byteLength = 1
  else if (length <= 16) byteLength = 2
  else if (length <= 32) byteLength = 4
  else byteLength = 8

  return {
    preencode(state) {
      state.end++ // Length byte, used for data when byteLength === 1

      if (byteLength === 1);
      else if (byteLength === 2) c.uint16.preencode(state)
      else if (byteLength === 4) c.uint32.preencode(state)
      else c.uint64.preencode(state)
    },

    encode(state, b) {
      if (byteLength === 1);
      else if (byteLength === 2) c.uint8.encode(state, 0xfd)
      else if (byteLength === 4) c.uint8.encode(state, 0xfe)
      else c.uint8.encode(state, 0xff)

      if (typeof b === 'number') {
        if (byteLength === 1) c.uint8.encode(state, b)
        else if (byteLength === 2) c.uint16.encode(state, b)
        else if (byteLength === 4) c.uint32.encode(state, b)
        else c.uint64.encode(state, b)
      } else {
        state.buffer.set(b, state.start)

        if (b.byteLength < byteLength) {
          // Zero-fill the rest of the byte length.
          state.buffer.fill(
            0,
            state.start + b.byteLength,
            state.start + byteLength
          )
        }

        state.start += byteLength
      }
    },

    decode(state) {
      const byte = state.buffer[state.start]

      let byteLength
      if (byte <= 0xfc) byteLength = 1
      else if (byte === 0xfd) byteLength = 2
      else if (byte === 0xfe) byteLength = 4
      else byteLength = 8

      if (byteLength > 1) state.start++ // Skip the length byte

      if (state.end - state.start < byteLength) throw new Error('Out of bounds')

      const b = state.buffer.subarray(state.start, (state.start += byteLength))

      return length <= 8 ? b.subarray(0, 1) : b
    }
  }
}
{
  "name": "compact-encoding-bitfield",
  "version": "1.1.0",
  "description": "Compact codec for bitfields",
  "main": "index.js",
  "files": [
    "index.js"
  ],
  "scripts": {
    "format": "prettier --write .",
    "lint": "prettier --check . && lunte",
    "test": "npm run test:node && npm run test:bare",
    "test:node": "brittle-node --coverage test.mjs",
    "test:bare": "brittle-bare --coverage test.mjs"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/compact-encoding/compact-encoding-bitfield.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/compact-encoding/compact-encoding-bitfield/issues"
  },
  "homepage": "https://github.com/compact-encoding/compact-encoding-bitfield#readme",
  "imports": {
    "util": {
      "bare": "bare-utils",
      "default": "util"
    }
  },
  "dependencies": {
    "compact-encoding": "^3.0.0"
  },
  "devDependencies": {
    "bare-utils": "^1.5.1",
    "brittle": "^3.1.0",
    "lunte": "^1.3.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^1.0.0"
  }
}
const LE = (exports.LE =
  new Uint8Array(new Uint16Array([0xff]).buffer)[0] === 0xff)

exports.BE = !LE
const b4a = require('b4a')

const { BE } = require('./endian')

exports.state = function (start = 0, end = 0, buffer = null) {
  return { start, end, buffer }
}

const raw = (exports.raw = require('./raw'))

const uint = (exports.uint = {
  preencode(state, n) {
    state.end += n <= 0xfc ? 1 : n <= 0xffff ? 3 : n <= 0xffffffff ? 5 : 9
  },
  encode(state, n) {
    if (n <= 0xfc) uint8.encode(state, n)
    else if (n <= 0xffff) {
      state.buffer[state.start++] = 0xfd
      uint16.encode(state, n)
    } else if (n <= 0xffffffff) {
      state.buffer[state.start++] = 0xfe
      uint32.encode(state, n)
    } else {
      state.buffer[state.start++] = 0xff
      uint64.encode(state, n)
    }
  },
  decode(state) {
    const a = uint8.decode(state)
    if (a <= 0xfc) return a
    if (a === 0xfd) return uint16.decode(state)
    if (a === 0xfe) return uint32.decode(state)
    return uint64.decode(state)
  }
})

const uint8 = (exports.uint8 = {
  preencode(state, n) {
    state.end += 1
  },
  encode(state, n) {
    validateUint(n)
    state.buffer[state.start++] = n
  },
  decode(state) {
    if (state.start >= state.end) throw new Error('Out of bounds')
    return state.buffer[state.start++]
  }
})

const uint16 = (exports.uint16 = {
  preencode(state, n) {
    state.end += 2
  },
  encode(state, n) {
    validateUint(n)
    state.buffer[state.start++] = n
    state.buffer[state.start++] = n >>> 8
  },
  decode(state) {
    if (state.end - state.start < 2) throw new Error('Out of bounds')
    return state.buffer[state.start++] + state.buffer[state.start++] * 0x100
  }
})

const uint24 = (exports.uint24 = {
  preencode(state, n) {
    state.end += 3
  },
  encode(state, n) {
    validateUint(n)
    state.buffer[state.start++] = n
    state.buffer[state.start++] = n >>> 8
    state.buffer[state.start++] = n >>> 16
  },
  decode(state) {
    if (state.end - state.start < 3) throw new Error('Out of bounds')
    return (
      state.buffer[state.start++] +
      state.buffer[state.start++] * 0x100 +
      state.buffer[state.start++] * 0x10000
    )
  }
})

const uint32 = (exports.uint32 = {
  preencode(state, n) {
    state.end += 4
  },
  encode(state, n) {
    validateUint(n)
    state.buffer[state.start++] = n
    state.buffer[state.start++] = n >>> 8
    state.buffer[state.start++] = n >>> 16
    state.buffer[state.start++] = n >>> 24
  },
  decode(state) {
    if (state.end - state.start < 4) throw new Error('Out of bounds')
    return (
      state.buffer[state.start++] +
      state.buffer[state.start++] * 0x100 +
      state.buffer[state.start++] * 0x10000 +
      state.buffer[state.start++] * 0x1000000
    )
  }
})

const uint32be = (exports.uint32be = {
  preencode(state, n) {
    state.end += 4
  },
  encode(state, n) {
    validateUint(n)
    state.buffer[state.start++] = n >>> 24
    state.buffer[state.start++] = n >>> 16
    state.buffer[state.start++] = n >>> 8
    state.buffer[state.start++] = n
  },
  decode(state) {
    if (state.end - state.start < 4) throw new Error('Out of bounds')
    return (
      state.buffer[state.start++] * 0x1000000 +
      state.buffer[state.start++] * 0x10000 +
      state.buffer[state.start++] * 0x100 +
      state.buffer[state.start++]
    )
  }
})

const uint40 = (exports.uint40 = {
  preencode(state, n) {
    state.end += 5
  },
  encode(state, n) {
    validateUint(n)
    const r = Math.floor(n / 0x100)
    uint8.encode(state, n)
    uint32.encode(state, r)
  },
  decode(state) {
    if (state.end - state.start < 5) throw new Error('Out of bounds')
    return uint8.decode(state) + 0x100 * uint32.decode(state)
  }
})

const uint48 = (exports.uint48 = {
  preencode(state, n) {
    state.end += 6
  },
  encode(state, n) {
    validateUint(n)
    const r = Math.floor(n / 0x10000)
    uint16.encode(state, n)
    uint32.encode(state, r)
  },
  decode(state) {
    if (state.end - state.start < 6) throw new Error('Out of bounds')
    return uint16.decode(state) + 0x10000 * uint32.decode(state)
  }
})

const uint56 = (exports.uint56 = {
  preencode(state, n) {
    state.end += 7
  },
  encode(state, n) {
    validateUint(n)
    const r = Math.floor(n / 0x1000000)
    uint24.encode(state, n)
    uint32.encode(state, r)
  },
  decode(state) {
    if (state.end - state.start < 7) throw new Error('Out of bounds')
    return validateSafeUint(
      uint24.decode(state) + 0x1000000 * uint32.decode(state)
    )
  }
})

const uint64 = (exports.uint64 = {
  preencode(state, n) {
    state.end += 8
  },
  encode(state, n) {
    validateUint(n)
    const r = Math.floor(n / 0x100000000)
    uint32.encode(state, n)
    uint32.encode(state, r)
  },
  decode(state) {
    if (state.end - state.start < 8) throw new Error('Out of bounds')
    return validateSafeUint(
      uint32.decode(state) + 0x100000000 * uint32.decode(state)
    )
  }
})

exports.uint64be = {
  preencode(state, n) {
    state.end += 8
  },
  encode(state, n) {
    validateUint(n)
    const r = Math.floor(n / 0x100000000)
    uint32be.encode(state, r)
    uint32be.encode(state, n)
  },
  decode(state) {
    if (state.end - state.start < 8) throw new Error('Out of bounds')
    return validateSafeUint(
      0x100000000 * uint32be.decode(state) + uint32be.decode(state)
    )
  }
}

const int = (exports.int = zigZagInt(uint))
exports.int8 = zigZagInt(uint8)
exports.int16 = zigZagInt(uint16)
exports.int24 = zigZagInt(uint24)
exports.int32 = zigZagInt(uint32)
exports.int40 = zigZagInt(uint40)
exports.int48 = zigZagInt(uint48)
exports.int56 = zigZagInt(uint56)
exports.int64 = zigZagInt(uint64)

const biguint64 = (exports.biguint64 = {
  preencode(state, n) {
    state.end += 8
  },
  encode(state, n) {
    const view = new DataView(
      state.buffer.buffer,
      state.start + state.buffer.byteOffset,
      8
    )
    view.setBigUint64(0, n, true) // little endian
    state.start += 8
  },
  decode(state) {
    if (state.end - state.start < 8) throw new Error('Out of bounds')
    const view = new DataView(
      state.buffer.buffer,
      state.start + state.buffer.byteOffset,
      8
    )
    const n = view.getBigUint64(0, true) // little endian
    state.start += 8
    return n
  }
})

exports.bigint64 = zigZagBigInt(biguint64)

const biguint = (exports.biguint = {
  preencode(state, n) {
    let len = 0
    for (let m = n; m; m = m >> 64n) len++
    uint.preencode(state, len)
    state.end += 8 * len
  },
  encode(state, n) {
    let len = 0
    for (let m = n; m; m = m >> 64n) len++
    uint.encode(state, len)
    const view = new DataView(
      state.buffer.buffer,
      state.start + state.buffer.byteOffset,
      8 * len
    )
    for (let m = n, i = 0; m; m = m >> 64n, i += 8) {
      view.setBigUint64(i, BigInt.asUintN(64, m), true) // little endian
    }
    state.start += 8 * len
  },
  decode(state) {
    const len = uint.decode(state)
    if (state.end - state.start < 8 * len) throw new Error('Out of bounds')
    const view = new DataView(
      state.buffer.buffer,
      state.start + state.buffer.byteOffset,
      8 * len
    )
    let n = 0n
    for (let i = len - 1; i >= 0; i--)
      n = (n << 64n) + view.getBigUint64(i * 8, true) // little endian
    state.start += 8 * len
    return n
  }
})

exports.bigint = zigZagBigInt(biguint)

exports.lexint = require('./lexint')

exports.float32 = {
  preencode(state, n) {
    state.end += 4
  },
  encode(state, n) {
    const view = new DataView(
      state.buffer.buffer,
      state.start + state.buffer.byteOffset,
      4
    )
    view.setFloat32(0, n, true) // little endian
    state.start += 4
  },
  decode(state) {
    if (state.end - state.start < 4) throw new Error('Out of bounds')
    const view = new DataView(
      state.buffer.buffer,
      state.start + state.buffer.byteOffset,
      4
    )
    const float = view.getFloat32(0, true) // little endian
    state.start += 4
    return float
  }
}

exports.float64 = {
  preencode(state, n) {
    state.end += 8
  },
  encode(state, n) {
    const view = new DataView(
      state.buffer.buffer,
      state.start + state.buffer.byteOffset,
      8
    )
    view.setFloat64(0, n, true) // little endian
    state.start += 8
  },
  decode(state) {
    if (state.end - state.start < 8) throw new Error('Out of bounds')
    const view = new DataView(
      state.buffer.buffer,
      state.start + state.buffer.byteOffset,
      8
    )
    const float = view.getFloat64(0, true) // little endian
    state.start += 8
    return float
  }
}

const buffer = (exports.buffer = {
  preencode(state, b) {
    uint8array.preencode(state, b)
  },
  encode(state, b) {
    uint8array.encode(state, b)
  },
  decode(state) {
    const len = uint.decode(state)
    if (state.end - state.start < len) throw new Error('Out of bounds')
    return state.buffer.subarray(state.start, (state.start += len))
  }
})

exports.optionalBuffer = {
  preencode(state, b) {
    if (b) uint8array.preencode(state, b)
    else state.end++
  },
  encode(state, b) {
    if (b) uint8array.encode(state, b)
    else state.buffer[state.start++] = 0
  },
  decode(state) {
    const len = uint.decode(state)
    if (len === 0) return null
    if (state.end - state.start < len) throw new Error('Out of bounds')
    return state.buffer.subarray(state.start, (state.start += len))
  }
}

exports.binary = {
  ...buffer,
  preencode(state, b) {
    if (typeof b === 'string') utf8.preencode(state, b)
    else buffer.preencode(state, b)
  },
  encode(state, b) {
    if (typeof b === 'string') utf8.encode(state, b)
    else buffer.encode(state, b)
  }
}

exports.arraybuffer = {
  preencode(state, b) {
    uint.preencode(state, b.byteLength)
    state.end += b.byteLength
  },
  encode(state, b) {
    uint.encode(state, b.byteLength)

    const view = new Uint8Array(b)

    state.buffer.set(view, state.start)
    state.start += b.byteLength
  },
  decode(state) {
    const len = uint.decode(state)

    const b = new ArrayBuffer(len)
    const view = new Uint8Array(b)

    view.set(state.buffer.subarray(state.start, (state.start += len)))

    return b
  }
}

function typedarray(TypedArray, swap) {
  const n = TypedArray.BYTES_PER_ELEMENT

  return {
    preencode(state, b) {
      uint.preencode(state, b.length)
      state.end += b.byteLength
    },
    encode(state, b) {
      uint.encode(state, b.length)

      const view = new Uint8Array(b.buffer, b.byteOffset, b.byteLength)

      if (BE && swap) swap(view)

      state.buffer.set(view, state.start)
      state.start += b.byteLength
    },
    decode(state) {
      const len = uint.decode(state)

      let b = state.buffer.subarray(state.start, (state.start += len * n))
      if (b.byteLength !== len * n) throw new Error('Out of bounds')
      if (b.byteOffset % n !== 0) b = new Uint8Array(b)

      if (BE && swap) swap(b)

      return new TypedArray(b.buffer, b.byteOffset, b.byteLength / n)
    }
  }
}

const uint8array = (exports.uint8array = typedarray(Uint8Array))
exports.uint16array = typedarray(Uint16Array, b4a.swap16)
exports.uint32array = typedarray(Uint32Array, b4a.swap32)

exports.int8array = typedarray(Int8Array)
exports.int16array = typedarray(Int16Array, b4a.swap16)
exports.int32array = typedarray(Int32Array, b4a.swap32)

exports.biguint64array = typedarray(BigUint64Array, b4a.swap64)
exports.bigint64array = typedarray(BigInt64Array, b4a.swap64)

exports.float32array = typedarray(Float32Array, b4a.swap32)
exports.float64array = typedarray(Float64Array, b4a.swap64)

function string(encoding) {
  return {
    preencode(state, s) {
      const len = b4a.byteLength(s, encoding)
      uint.preencode(state, len)
      state.end += len
    },
    encode(state, s) {
      const len = b4a.byteLength(s, encoding)
      uint.encode(state, len)
      b4a.write(state.buffer, s, state.start, encoding)
      state.start += len
    },
    decode(state) {
      const len = uint.decode(state)
      if (state.end - state.start < len) throw new Error('Out of bounds')
      return b4a.toString(
        state.buffer,
        encoding,
        state.start,
        (state.start += len)
      )
    },
    fixed(n) {
      return {
        preencode(state) {
          state.end += n
        },
        encode(state, s) {
          b4a.write(state.buffer, s, state.start, n, encoding)
          state.start += n
        },
        decode(state) {
          if (state.end - state.start < n) throw new Error('Out of bounds')
          return b4a.toString(
            state.buffer,
            encoding,
            state.start,
            (state.start += n)
          )
        }
      }
    }
  }
}

const utf8 = (exports.string = exports.utf8 = string('utf-8'))
exports.ascii = string('ascii')
exports.hex = string('hex')
exports.base64 = string('base64')
exports.ucs2 = exports.utf16le = string('utf16le')

exports.bool = {
  preencode(state, b) {
    state.end++
  },
  encode(state, b) {
    state.buffer[state.start++] = b ? 1 : 0
  },
  decode(state) {
    if (state.start >= state.end) throw Error('Out of bounds')
    return state.buffer[state.start++] === 1
  }
}

const fixed = (exports.fixed = function fixed(n) {
  return {
    preencode(state, s) {
      if (s.byteLength !== n) throw new Error('Incorrect buffer size')
      state.end += n
    },
    encode(state, s) {
      state.buffer.set(s, state.start)
      state.start += n
    },
    decode(state) {
      if (state.end - state.start < n) throw new Error('Out of bounds')
      return state.buffer.subarray(state.start, (state.start += n))
    }
  }
})

exports.fixed32 = fixed(32)
exports.fixed64 = fixed(64)

exports.array = function array(enc) {
  return {
    preencode(state, list) {
      uint.preencode(state, list.length)
      for (let i = 0; i < list.length; i++) enc.preencode(state, list[i])
    },
    encode(state, list) {
      uint.encode(state, list.length)
      for (let i = 0; i < list.length; i++) enc.encode(state, list[i])
    },
    decode(state) {
      const len = uint.decode(state)
      if (len > 0x100000) throw new Error('Array is too big')
      const arr = new Array(len)
      for (let i = 0; i < len; i++) arr[i] = enc.decode(state)
      return arr
    }
  }
}

exports.frame = function frame(enc) {
  const dummy = exports.state()

  return {
    preencode(state, m) {
      const end = state.end
      enc.preencode(state, m)
      uint.preencode(state, state.end - end)
    },
    encode(state, m) {
      dummy.end = 0
      enc.preencode(dummy, m)
      uint.encode(state, dummy.end)
      enc.encode(state, m)
    },
    decode(state) {
      const end = state.end
      const len = uint.decode(state)
      state.end = state.start + len
      const m = enc.decode(state)
      state.start = state.end
      state.end = end
      return m
    }
  }
}

exports.date = {
  preencode(state, d) {
    int.preencode(state, d.getTime())
  },
  encode(state, d) {
    int.encode(state, d.getTime())
  },
  decode(state, d) {
    return new Date(int.decode(state))
  }
}

exports.json = {
  preencode(state, v) {
    utf8.preencode(state, JSON.stringify(v))
  },
  encode(state, v) {
    utf8.encode(state, JSON.stringify(v))
  },
  decode(state) {
    return JSON.parse(utf8.decode(state))
  }
}

exports.ndjson = {
  preencode(state, v) {
    utf8.preencode(state, JSON.stringify(v) + '\n')
  },
  encode(state, v) {
    utf8.encode(state, JSON.stringify(v) + '\n')
  },
  decode(state) {
    return JSON.parse(utf8.decode(state))
  }
}

// simple helper for when you want to just express nothing
exports.none = {
  preencode(state, n) {
    // do nothing
  },
  encode(state, n) {
    // do nothing
  },
  decode(state) {
    return null
  }
}

// "any" encoders here for helping just structure any object without schematising it

const anyArray = {
  preencode(state, arr) {
    uint.preencode(state, arr.length)
    for (let i = 0; i < arr.length; i++) {
      any.preencode(state, arr[i])
    }
  },
  encode(state, arr) {
    uint.encode(state, arr.length)
    for (let i = 0; i < arr.length; i++) {
      any.encode(state, arr[i])
    }
  },
  decode(state) {
    const arr = []
    let len = uint.decode(state)
    while (len-- > 0) {
      arr.push(any.decode(state))
    }
    return arr
  }
}

const anyObject = {
  preencode(state, o) {
    const keys = Object.keys(o)
    uint.preencode(state, keys.length)
    for (const key of keys) {
      utf8.preencode(state, key)
      any.preencode(state, o[key])
    }
  },
  encode(state, o) {
    const keys = Object.keys(o)
    uint.encode(state, keys.length)
    for (const key of keys) {
      utf8.encode(state, key)
      any.encode(state, o[key])
    }
  },
  decode(state) {
    let len = uint.decode(state)
    const o = {}
    while (len-- > 0) {
      const key = utf8.decode(state)
      o[key] = any.decode(state)
    }
    return o
  }
}

const anyTypes = [
  exports.none,
  exports.bool,
  exports.string,
  exports.buffer,
  exports.uint,
  exports.int,
  exports.float64,
  anyArray,
  anyObject,
  exports.date
]

const any = (exports.any = {
  preencode(state, o) {
    const t = getType(o)
    uint.preencode(state, t)
    anyTypes[t].preencode(state, o)
  },
  encode(state, o) {
    const t = getType(o)
    uint.encode(state, t)
    anyTypes[t].encode(state, o)
  },
  decode(state) {
    const t = uint.decode(state)
    if (t >= anyTypes.length) throw new Error('Unknown type: ' + t)
    return anyTypes[t].decode(state)
  }
})

const port = (exports.port = uint16)

const address = (host, family) => {
  return {
    preencode(state, m) {
      host.preencode(state, m.host)
      port.preencode(state, m.port)
    },
    encode(state, m) {
      host.encode(state, m.host)
      port.encode(state, m.port)
    },
    decode(state) {
      return {
        host: host.decode(state),
        family,
        port: port.decode(state)
      }
    }
  }
}

const ipv4 = (exports.ipv4 = {
  preencode(state) {
    state.end += 4
  },
  encode(state, string) {
    const start = state.start
    const end = start + 4

    let i = 0

    while (i < string.length) {
      let n = 0
      let c

      while (
        i < string.length &&
        (c = string.charCodeAt(i++)) !== /* . */ 0x2e
      ) {
        n = n * 10 + (c - /* 0 */ 0x30)
      }

      state.buffer[state.start++] = n
    }

    state.start = end
  },
  decode(state) {
    if (state.end - state.start < 4) throw new Error('Out of bounds')
    return (
      state.buffer[state.start++] +
      '.' +
      state.buffer[state.start++] +
      '.' +
      state.buffer[state.start++] +
      '.' +
      state.buffer[state.start++]
    )
  }
})

exports.ipv4Address = address(ipv4, 4)

const ipv6 = (exports.ipv6 = {
  preencode(state) {
    state.end += 16
  },
  encode(state, string) {
    const start = state.start
    const end = start + 16

    let i = 0
    let split = null

    while (i < string.length) {
      let n = 0
      let c

      while (
        i < string.length &&
        (c = string.charCodeAt(i++)) !== /* : */ 0x3a
      ) {
        if (c >= 0x30 && c <= 0x39) n = n * 0x10 + (c - /* 0 */ 0x30)
        else if (c >= 0x41 && c <= 0x46) n = n * 0x10 + (c - /* A */ 0x41 + 10)
        else if (c >= 0x61 && c <= 0x66) n = n * 0x10 + (c - /* a */ 0x61 + 10)
      }

      state.buffer[state.start++] = n >>> 8
      state.buffer[state.start++] = n

      if (i < string.length && string.charCodeAt(i) === /* : */ 0x3a) {
        i++
        split = state.start
      }
    }

    if (split !== null) {
      const offset = end - state.start
      state.buffer
        .copyWithin(split + offset, split)
        .fill(0, split, split + offset)
    }

    state.start = end
  },
  decode(state) {
    if (state.end - state.start < 16) throw new Error('Out of bounds')
    return (
      (
        state.buffer[state.start++] * 256 +
        state.buffer[state.start++]
      ).toString(16) +
      ':' +
      (
        state.buffer[state.start++] * 256 +
        state.buffer[state.start++]
      ).toString(16) +
      ':' +
      (
        state.buffer[state.start++] * 256 +
        state.buffer[state.start++]
      ).toString(16) +
      ':' +
      (
        state.buffer[state.start++] * 256 +
        state.buffer[state.start++]
      ).toString(16) +
      ':' +
      (
        state.buffer[state.start++] * 256 +
        state.buffer[state.start++]
      ).toString(16) +
      ':' +
      (
        state.buffer[state.start++] * 256 +
        state.buffer[state.start++]
      ).toString(16) +
      ':' +
      (
        state.buffer[state.start++] * 256 +
        state.buffer[state.start++]
      ).toString(16) +
      ':' +
      (
        state.buffer[state.start++] * 256 +
        state.buffer[state.start++]
      ).toString(16)
    )
  }
})

exports.ipv6Address = address(ipv6, 6)

const ip = (exports.ip = {
  preencode(state, string) {
    const family = string.includes(':') ? 6 : 4
    uint8.preencode(state, family)
    if (family === 4) ipv4.preencode(state)
    else ipv6.preencode(state)
  },
  encode(state, string) {
    const family = string.includes(':') ? 6 : 4
    uint8.encode(state, family)
    if (family === 4) ipv4.encode(state, string)
    else ipv6.encode(state, string)
  },
  decode(state) {
    const family = uint8.decode(state)
    if (family === 4) return ipv4.decode(state)
    else return ipv6.decode(state)
  }
})

exports.ipAddress = {
  preencode(state, m) {
    ip.preencode(state, m.host)
    port.preencode(state, m.port)
  },
  encode(state, m) {
    ip.encode(state, m.host)
    port.encode(state, m.port)
  },
  decode(state) {
    const family = uint8.decode(state)
    return {
      host: family === 4 ? ipv4.decode(state) : ipv6.decode(state),
      family,
      port: port.decode(state)
    }
  }
}

const record = (exports.record = function (keyEncoding, valueEncoding) {
  return {
    preencode(state, v) {
      const keys = Object.keys(v)
      uint.preencode(state, keys.length)
      for (const k of keys) {
        keyEncoding.preencode(state, k)
        valueEncoding.preencode(state, v[k])
      }
    },
    encode(state, v) {
      const keys = Object.keys(v)
      uint.encode(state, keys.length)
      for (const k of keys) {
        keyEncoding.encode(state, k)
        valueEncoding.encode(state, v[k])
      }
    },
    decode(state) {
      const out = Object.create(null)
      const keys = uint.decode(state)
      for (let i = 0; i < keys; i++) {
        out[keyEncoding.decode(state)] = valueEncoding.decode(state)
      }
      return out
    }
  }
})

exports.stringRecord = record(utf8, utf8)

function getType(o) {
  if (o === null || o === undefined) return 0
  if (typeof o === 'boolean') return 1
  if (typeof o === 'string') return 2
  if (b4a.isBuffer(o)) return 3
  if (typeof o === 'number') {
    if (Number.isInteger(o)) return o >= 0 ? 4 : 5
    return 6
  }
  if (Array.isArray(o)) return 7
  if (o instanceof Date) return 9
  if (typeof o === 'object') return 8

  throw new Error('Unsupported type for ' + o)
}

exports.from = function from(enc) {
  if (typeof enc === 'string') return fromNamed(enc)
  if (enc.preencode) return enc
  if (enc.encodingLength) return fromAbstractEncoder(enc)
  return fromCodec(enc)
}

function fromNamed(enc) {
  switch (enc) {
    case 'ascii':
      return raw.ascii
    case 'utf-8':
    case 'utf8':
      return raw.utf8
    case 'hex':
      return raw.hex
    case 'base64':
      return raw.base64
    case 'utf16-le':
    case 'utf16le':
    case 'ucs-2':
    case 'ucs2':
      return raw.ucs2
    case 'ndjson':
      return raw.ndjson
    case 'json':
      return raw.json
    case 'binary':
    default:
      return raw.binary
  }
}

function fromCodec(enc) {
  let tmpM = null
  let tmpBuf = null

  return {
    preencode(state, m) {
      tmpM = m
      tmpBuf = enc.encode(m)
      state.end += tmpBuf.byteLength
    },
    encode(state, m) {
      raw.encode(state, m === tmpM ? tmpBuf : enc.encode(m))
      tmpM = tmpBuf = null
    },
    decode(state) {
      return enc.decode(raw.decode(state))
    }
  }
}

function fromAbstractEncoder(enc) {
  return {
    preencode(state, m) {
      state.end += enc.encodingLength(m)
    },
    encode(state, m) {
      enc.encode(m, state.buffer, state.start)
      state.start += enc.encode.bytes
    },
    decode(state) {
      const m = enc.decode(state.buffer, state.start, state.end)
      state.start += enc.decode.bytes
      return m
    }
  }
}

exports.encode = function encode(enc, m) {
  const state = exports.state()
  enc.preencode(state, m)
  state.buffer = b4a.allocUnsafe(state.end)
  enc.encode(state, m)
  return state.buffer
}

exports.decode = function decode(enc, buffer) {
  return enc.decode(exports.state(0, buffer.byteLength, buffer))
}

function zigZagInt(enc) {
  return {
    preencode(state, n) {
      enc.preencode(state, zigZagEncodeInt(n))
    },
    encode(state, n) {
      enc.encode(state, zigZagEncodeInt(n))
    },
    decode(state) {
      return zigZagDecodeInt(enc.decode(state))
    }
  }
}

function zigZagDecodeInt(n) {
  return n === 0 ? n : (n & 1) === 0 ? n / 2 : -(n + 1) / 2
}

function zigZagEncodeInt(n) {
  // 0, -1, 1, -2, 2, ...
  return n < 0 ? 2 * -n - 1 : n === 0 ? 0 : 2 * n
}

function zigZagBigInt(enc) {
  return {
    preencode(state, n) {
      enc.preencode(state, zigZagEncodeBigInt(n))
    },
    encode(state, n) {
      enc.encode(state, zigZagEncodeBigInt(n))
    },
    decode(state) {
      return zigZagDecodeBigInt(enc.decode(state))
    }
  }
}

function zigZagDecodeBigInt(n) {
  return n === 0n ? n : (n & 1n) === 0n ? n / 2n : -(n + 1n) / 2n
}

function zigZagEncodeBigInt(n) {
  // 0, -1, 1, -2, 2, ...
  return n < 0n ? 2n * -n - 1n : n === 0n ? 0n : 2n * n
}

function validateSafeUint(n) {
  if (n > Number.MAX_SAFE_INTEGER)
    throw new Error(
      'uint is greater than the maximum safe integer, use biguint/bigint'
    )
  return n
}

function validateUint(n) {
  if (n >= 0 === false /* Handles NaN as well */)
    throw new Error('uint must be positive')
  // Beyond this, Number arithmetic loses precision and silently corrupts the
  // encoding. The zig-zag int codecs route through here too, so this also
  // guards int values whose doubled magnitude exceeds the safe range.
  if (n > Number.MAX_SAFE_INTEGER)
    throw new Error(
      'integer is greater than the maximum safe integer, use biguint/bigint'
    )
}
module.exports = {
  preencode,
  encode,
  decode
}

function preencode(state, num) {
  if (num < 251) {
    state.end++
  } else if (num < 256) {
    state.end += 2
  } else if (num < 0x10000) {
    state.end += 3
  } else if (num < 0x1000000) {
    state.end += 4
  } else if (num < 0x100000000) {
    state.end += 5
  } else {
    state.end++
    const exp = Math.floor(Math.log(num) / Math.log(2)) - 32
    preencode(state, exp)
    state.end += 6
  }
}

function encode(state, num) {
  const max = 251
  const x = num - max

  if (num < max) {
    state.buffer[state.start++] = num
  } else if (num < 256) {
    state.buffer[state.start++] = max
    state.buffer[state.start++] = x
  } else if (num < 0x10000) {
    state.buffer[state.start++] = max + 1
    state.buffer[state.start++] = (x >> 8) & 0xff
    state.buffer[state.start++] = x & 0xff
  } else if (num < 0x1000000) {
    state.buffer[state.start++] = max + 2
    state.buffer[state.start++] = x >> 16
    state.buffer[state.start++] = (x >> 8) & 0xff
    state.buffer[state.start++] = x & 0xff
  } else if (num < 0x100000000) {
    state.buffer[state.start++] = max + 3
    state.buffer[state.start++] = x >> 24
    state.buffer[state.start++] = (x >> 16) & 0xff
    state.buffer[state.start++] = (x >> 8) & 0xff
    state.buffer[state.start++] = x & 0xff
  } else {
    // need to use Math here as bitwise ops are 32 bit
    const exp = Math.floor(Math.log(x) / Math.log(2)) - 32
    state.buffer[state.start++] = 0xff

    encode(state, exp)
    const rem = x / Math.pow(2, exp - 11)

    for (let i = 5; i >= 0; i--) {
      state.buffer[state.start++] = (rem / Math.pow(2, 8 * i)) & 0xff
    }
  }
}

function decode(state) {
  const max = 251

  if (state.end - state.start < 1) throw new Error('Out of bounds')

  const flag = state.buffer[state.start++]

  if (flag < max) return flag

  if (state.end - state.start < flag - max + 1) {
    throw new Error('Out of bounds.')
  }

  if (flag < 252) {
    return state.buffer[state.start++] + max
  }

  if (flag < 253) {
    return (
      (state.buffer[state.start++] << 8) + state.buffer[state.start++] + max
    )
  }

  if (flag < 254) {
    return (
      (state.buffer[state.start++] << 16) +
      (state.buffer[state.start++] << 8) +
      state.buffer[state.start++] +
      max
    )
  }

  // << 24 result may be interpreted as negative
  if (flag < 255) {
    return (
      state.buffer[state.start++] * 0x1000000 +
      (state.buffer[state.start++] << 16) +
      (state.buffer[state.start++] << 8) +
      state.buffer[state.start++] +
      max
    )
  }

  const exp = decode(state)

  if (state.end - state.start < 6) throw new Error('Out of bounds')

  let rem = 0
  for (let i = 5; i >= 0; i--) {
    rem += state.buffer[state.start++] * Math.pow(2, 8 * i)
  }

  return rem * Math.pow(2, exp - 11) + max
}
{
  "name": "compact-encoding",
  "version": "3.3.0",
  "description": "A series of compact encoding schemes for building small and fast parsers and serializers",
  "main": "index.js",
  "files": [
    "endian.js",
    "index.js",
    "lexint.js",
    "raw.js"
  ],
  "dependencies": {
    "b4a": "^1.3.0"
  },
  "devDependencies": {
    "brittle": "^3.0.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^1.0.0"
  },
  "scripts": {
    "format": "prettier . --write",
    "test": "prettier . --check && brittle test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/holepunchto/compact-encoding.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/compact-encoding/issues"
  },
  "homepage": "https://github.com/holepunchto/compact-encoding"
}
const b4a = require('b4a')

const { BE } = require('./endian')

exports = module.exports = {
  preencode(state, b) {
    state.end += b.byteLength
  },
  encode(state, b) {
    state.buffer.set(b, state.start)
    state.start += b.byteLength
  },
  decode(state) {
    const b = state.buffer.subarray(state.start, state.end)
    state.start = state.end
    return b
  }
}

const buffer = (exports.buffer = {
  preencode(state, b) {
    uint8array.preencode(state, b)
  },
  encode(state, b) {
    uint8array.encode(state, b)
  },
  decode(state) {
    const b = state.buffer.subarray(state.start)
    state.start = state.end
    return b
  }
})

exports.binary = {
  ...buffer,
  preencode(state, b) {
    if (typeof b === 'string') utf8.preencode(state, b)
    else buffer.preencode(state, b)
  },
  encode(state, b) {
    if (typeof b === 'string') utf8.encode(state, b)
    else buffer.encode(state, b)
  }
}

exports.arraybuffer = {
  preencode(state, b) {
    state.end += b.byteLength
  },
  encode(state, b) {
    const view = new Uint8Array(b)

    state.buffer.set(view, state.start)
    state.start += b.byteLength
  },
  decode(state) {
    const b = new ArrayBuffer(state.end - state.start)
    const view = new Uint8Array(b)

    view.set(state.buffer.subarray(state.start))

    state.start = state.end

    return b
  }
}

function typedarray(TypedArray, swap) {
  const n = TypedArray.BYTES_PER_ELEMENT

  return {
    preencode(state, b) {
      state.end += b.byteLength
    },
    encode(state, b) {
      const view = new Uint8Array(b.buffer, b.byteOffset, b.byteLength)

      if (BE && swap) swap(view)

      state.buffer.set(view, state.start)
      state.start += b.byteLength
    },
    decode(state) {
      let b = state.buffer.subarray(state.start)
      if (b.byteOffset % n !== 0) b = new Uint8Array(b)

      if (BE && swap) swap(b)

      state.start = state.end

      return new TypedArray(b.buffer, b.byteOffset, b.byteLength / n)
    }
  }
}

const uint8array = (exports.uint8array = typedarray(Uint8Array))
exports.uint16array = typedarray(Uint16Array, b4a.swap16)
exports.uint32array = typedarray(Uint32Array, b4a.swap32)

exports.int8array = typedarray(Int8Array)
exports.int16array = typedarray(Int16Array, b4a.swap16)
exports.int32array = typedarray(Int32Array, b4a.swap32)

exports.biguint64array = typedarray(BigUint64Array, b4a.swap64)
exports.bigint64array = typedarray(BigInt64Array, b4a.swap64)

exports.float32array = typedarray(Float32Array, b4a.swap32)
exports.float64array = typedarray(Float64Array, b4a.swap64)

function string(encoding) {
  return {
    preencode(state, s) {
      state.end += b4a.byteLength(s, encoding)
    },
    encode(state, s) {
      state.start += b4a.write(state.buffer, s, state.start, encoding)
    },
    decode(state) {
      const s = b4a.toString(state.buffer, encoding, state.start)
      state.start = state.end
      return s
    }
  }
}

const utf8 = (exports.string = exports.utf8 = string('utf-8'))
exports.ascii = string('ascii')
exports.hex = string('hex')
exports.base64 = string('base64')
exports.ucs2 = exports.utf16le = string('utf16le')

exports.array = function array(enc) {
  return {
    preencode(state, list) {
      for (const value of list) enc.preencode(state, value)
    },
    encode(state, list) {
      for (const value of list) enc.encode(state, value)
    },
    decode(state) {
      const arr = []
      while (state.start < state.end) arr.push(enc.decode(state))
      return arr
    }
  }
}

exports.json = {
  preencode(state, v) {
    utf8.preencode(state, JSON.stringify(v))
  },
  encode(state, v) {
    utf8.encode(state, JSON.stringify(v))
  },
  decode(state) {
    return JSON.parse(utf8.decode(state))
  }
}

exports.ndjson = {
  preencode(state, v) {
    utf8.preencode(state, JSON.stringify(v) + '\n')
  },
  encode(state, v) {
    utf8.encode(state, JSON.stringify(v) + '\n')
  },
  decode(state) {
    return JSON.parse(utf8.decode(state))
  }
}
const { EventEmitter } = require('events')
const Table = require('kademlia-routing-table')
const TOS = require('time-ordered-set')
const UDX = require('udx-native')
const sodium = require('sodium-universal')
const c = require('compact-encoding')
const NatSampler = require('nat-sampler')
const b4a = require('b4a')
const NetworkHealth = require('./lib/health')
const IO = require('./lib/io')
const Query = require('./lib/query')
const Session = require('./lib/session')
const peer = require('./lib/peer')
const { UNKNOWN_COMMAND, INVALID_TOKEN } = require('./lib/errors')
const { PING, PING_NAT, FIND_NODE, DOWN_HINT, DELAYED_PING } = require('./lib/commands')

const TMP = b4a.allocUnsafe(32)
const TICK_INTERVAL = 5000
const SLEEPING_INTERVAL = 3 * TICK_INTERVAL
const STABLE_TICKS = 240 // if nothing major bad happens in ~20mins we can consider this node stable (if nat is friendly)
const MORE_STABLE_TICKS = 3 * STABLE_TICKS
const REFRESH_TICKS = 60 // refresh every ~5min when idle
const RECENT_NODE = 12 // we've heard from a node less than 1min ago
const OLD_NODE = 360 // if an node has been around more than 30 min we consider it old

const DEFAULTS = {
  concurrency: 10,
  maxWindow: IO.DEFAULT_MAX_WINDOW,
  maxPingDelay: 10_000
}

class DHT extends EventEmitter {
  constructor(opts = {}) {
    super()

    this.bootstrapNodes = opts.bootstrap === false ? [] : (opts.bootstrap || []).map(parseNode)
    this.table = new Table(randomBytes(32))
    this.nodes = new TOS()
    this.udx = opts.udx || new UDX()
    this.io = new IO(this.table, this.udx, {
      ...opts,
      onrequest: this._onrequest.bind(this),
      onresponse: this._onresponse.bind(this),
      ontimeout: this._ontimeout.bind(this)
    })
    this.health = new NetworkHealth(this)

    this.concurrency = opts.concurrency || DEFAULTS.concurrency
    this.maxPingDelay = opts.maxPingDelay || DEFAULTS.maxPingDelay
    this.bootstrapped = false
    this.ephemeral = true
    this.firewalled = this.io.firewalled
    this.adaptive = typeof opts.ephemeral !== 'boolean' && opts.adaptive !== false
    this.destroyed = false
    this.suspended = false
    this.online = true
    this.degraded = false
    this.stats = {
      queries: { active: 0, total: 0 },
      requests: this.io.stats.requests,
      commands: {
        ping: this.io.stats.commands[PING],
        pingNat: this.io.stats.commands[PING_NAT],
        findNode: this.io.stats.commands[FIND_NODE],
        downHint: this.io.stats.commands[DOWN_HINT]
      }
    }

    this._nat = new NatSampler()
    this._quickFirewall = opts.quickFirewall !== false
    this._forcePersistent = opts.ephemeral === false
    this._repinging = 0
    this._checks = 0
    this._tick = randomOffset(100) // make sure to random offset all the network ticks
    this._refreshTicks = randomOffset(REFRESH_TICKS)
    this._stableTicks = this.adaptive ? STABLE_TICKS : 0
    this._tickInterval = setInterval(this._ontick.bind(this), TICK_INTERVAL)
    this._lastTick = Date.now()
    this._lastHost = null
    this._filterNode = opts.filterNode || opts.addNode || null // opts.addNode is deprecating, use opts.filterNode instead
    this._onrow = (row) => row.on('full', (node) => this._onfullrow(node, row))
    this._nonePersistentSamples = []
    this._bootstrapping = this._bootstrap()
    this._bootstrapping.catch(noop)
    this._sendDownHints = opts.sendDownHints !== false
    this._downHintsRateLimit =
      opts.downHintsRateLimit !== undefined ? opts.downHintsRateLimit : 10 * 5
    this._downHintsSentPerTick = 0
    this._pendingTimers = new Set()

    this.table.on('row', this._onrow)

    this.io.networkInterfaces.on('change', (interfaces) => this._onnetworkchange(interfaces))

    if (opts.nodes) {
      for (let i = opts.nodes.length - 1; i >= 0; i--) {
        this.addNode(opts.nodes[i])
      }
    }
  }

  static DEFAULTS = DEFAULTS

  static bootstrapper(port, host, opts) {
    if (!port) throw new Error('Port is required')
    if (!host) throw new Error('Host is required')
    if (host === '0.0.0.0' || host === '::') throw new Error('Invalid host')
    if (!UDX.isIPv4(host)) throw new Error('Host must be a IPv4 address')

    const dht = new this({
      port,
      ephemeral: false,
      firewalled: false,
      anyPort: false,
      bootstrap: [],
      ...opts
    })
    dht._nat.add(host, port)
    return dht
  }

  get id() {
    return this.ephemeral ? null : this.table.id
  }

  get host() {
    return this._nat.host
  }

  get port() {
    return this._nat.port
  }

  get randomized() {
    return this._nat.host !== null && this._nat.port === 0
  }

  get socket() {
    return this.firewalled ? this.io.clientSocket : this.io.serverSocket
  }

  get config() {
    return {
      concurrency: this.concurrency,
      maxWindow: this.io.congestion._maxWindow,
      randomPunchInterval: this._randomPunchInterval,
      connectionKeepAlive: this.connectionKeepAlive,
      sendDownHints: this._sendDownHints,
      downHintsRateLimit: this._downHintsRateLimit
    }
  }

  onmessage(socket, buf, rinfo) {
    if (buf.byteLength > 1) this.io.onmessage(socket, buf, rinfo)
  }

  bind() {
    return this.io.bind()
  }

  async suspend({ log = noop } = {}) {
    log('Suspending waiting for io bind...')
    await this.io.bind()
    log('Done, continuing')
    if (this.suspended || this.destroyed) return
    this.suspended = true
    clearInterval(this._tickInterval)
    log('Done, suspending io')
    await this.io.suspend({ log })
    log('Done, dht suspended')
    this.emit('suspend')
  }

  async resume({ log = noop } = {}) {
    if (!this.suspended || this.destroyed) return
    this.suspended = false
    this._tickInterval = setInterval(this._ontick.bind(this), TICK_INTERVAL)
    this._onwakeup()
    log('Resuming io')
    await this.io.resume()
    log('Done, dht resumed')
    this.io.networkInterfaces.on('change', (interfaces) => this._onnetworkchange(interfaces))
    this.refresh()
    this.emit('resume')
  }

  address() {
    const socket = this.socket
    return socket ? socket.address() : null
  }

  localAddress() {
    if (!this.io.serverSocket) return null

    return {
      host: localIP(this.udx),
      port: this.io.serverSocket.address().port
    }
  }

  remoteAddress() {
    if (!this.host) return null
    if (!this.port) return null
    if (this.firewalled) return null
    if (!this.io.serverSocket) return null

    const port = this.io.serverSocket.address().port
    if (port !== this.port) return null

    return {
      host: this.host,
      port
    }
  }

  addNode({ host, port }) {
    this._addNode({
      id: peer.id(host, port),
      port,
      host,
      token: null,
      to: null,
      sampled: 0,
      added: this._tick,
      pinged: 0,
      seen: 0,
      downHints: 0,
      prev: null,
      next: null
    })
  }

  toArray(opts) {
    const limit = opts && opts.limit
    if (limit === 0) return []
    return this.nodes.toArray({ limit, reverse: true }).map(({ host, port }) => ({ host, port }))
  }

  async fullyBootstrapped() {
    return this._bootstrapping
  }

  ready() {
    // Deprecating, use fullyBootstrapped instead (removed on next major)
    return this.fullyBootstrapped()
  }

  findNode(target, opts) {
    if (this.destroyed) throw new Error('Node destroyed')
    this._refreshTicks = REFRESH_TICKS
    return new Query(this, target, true, FIND_NODE, null, opts)
  }

  query({ target, command, value }, opts) {
    if (this.destroyed) throw new Error('Node destroyed')
    this._refreshTicks = REFRESH_TICKS
    return new Query(this, target, false, command, value || null, opts)
  }

  ping({ host, port }, opts) {
    let value = null

    if (opts && opts.size && opts.size > 0) value = b4a.alloc(opts.size)

    const req = this.io.createRequest(
      { id: null, host, port },
      null,
      true,
      PING,
      null,
      value,
      (opts && opts.session) || null,
      opts && opts.ttl
    )
    return this._requestToPromise(req, opts)
  }

  delayedPing({ host, port }, delayMs, opts) {
    if (delayMs > this.maxPingDelay) {
      throw new Error(`Delay exceeds max delay: ${this.maxPingDelay}ms`)
    }

    const value = b4a.allocUnsafe(4)
    c.uint32.encode({ start: 0, end: 4, buffer: value }, delayMs)

    const req = this.io.createRequest(
      { id: null, host, port },
      null,
      true,
      DELAYED_PING,
      null,
      value,
      (opts && opts.session) || null,
      opts && opts.ttl
    )
    // add 1 second to the timeout to account for network overhead
    req.timeout = delayMs + 1_000
    return this._requestToPromise(req, opts)
  }

  async rttStats() {
    const stats = {
      successes: 0,
      errors: 0,
      responses: {
        avgRtt: 0,
        errors: 0,
        avgCloserNodes: 0
      },
      closestReplies: {
        avgRtt: 0,
        errors: 0,
        avgCloserNodes: 0
      }
    }

    if (this.nodes.latest) {
      const q = this.findNode(this.nodes.latest.id)

      let responseCount = 0
      let closestCount = 0

      for await (const msg of q) {
        stats.responses.avgRtt += msg.rtt
        stats.responses.errors += msg.error
        stats.responses.avgCloserNodes += msg.closerNodes?.length || 0
        responseCount++
      }
      stats.responses.avgRtt /= responseCount
      stats.responses.avgCloserNodes /= responseCount

      for await (const msg of q.closestReplies) {
        stats.closestReplies.avgRtt += msg.rtt
        stats.closestReplies.errors += msg.error
        stats.closestReplies.avgCloserNodes += msg.closerNodes?.length || 0
        closestCount++
      }
      stats.closestReplies.avgRtt /= closestCount
      stats.closestReplies.avgCloserNodes /= closestCount

      stats.successes = q.successes
      stats.errors = q.errors
    }

    return stats
  }

  request({ token = null, command, target = null, value = null }, { host, port }, opts) {
    const req = this.io.createRequest(
      { id: null, host, port },
      token,
      false,
      command,
      target,
      value,
      (opts && opts.session) || null,
      opts && opts.ttl
    )
    return this._requestToPromise(req, opts)
  }

  session() {
    return new Session(this)
  }

  _requestToPromise(req, opts) {
    if (req === null) return Promise.reject(new Error('Node destroyed'))

    if (opts && opts.socket) req.socket = opts.socket
    if (opts && opts.retry === false) req.retries = 0

    return new Promise((resolve, reject) => {
      req.onresponse = resolve
      req.onerror = reject
      req.send()
    })
  }

  async _bootstrap() {
    const self = this

    await Promise.resolve() // wait a tick, so apis can be used from the outside
    await this.io.bind()

    this.emit('listening')

    // TODO: some papers describe more advanced ways of bootstrapping - we should prob look into that

    let first = this.firewalled && this._quickFirewall && !this._forcePersistent
    let testNat = false

    const onlyFirewall = !this._forcePersistent

    for (let i = 0; i < 2; i++) {
      await this._backgroundQuery(this.table.id).on('data', ondata).finished()

      if (this.bootstrapped || (!testNat && !this._forcePersistent)) break
      if (!(await this._updateNetworkState(onlyFirewall))) break
    }

    if (this.bootstrapped) return
    this.bootstrapped = true

    this.emit('ready')

    function ondata(data) {
      // Simple QUICK nat heuristic.
      // If we get ONE positive nat ping before the bootstrap query finishes
      // then we always to a nat test, no matter if we are adaptive...
      // This should be expanded in the future to try more than one node etc, not always hit the first etc
      // If this fails, then nbd, as the onstable hook will pick it up later.

      if (!first) return
      first = false

      const value = b4a.allocUnsafe(2)
      c.uint16.encode({ start: 0, end: 2, buffer: value }, self.io.serverSocket.address().port)

      self._request(
        data.from,
        false,
        true,
        PING_NAT,
        null,
        value,
        null,
        () => {
          testNat = true
        },
        noop
      )
    }
  }

  refresh() {
    const node = this.table.random()
    this._backgroundQuery(node ? node.id : this.table.id).on('error', noop)
  }

  async destroy() {
    const emitClose = !this.destroyed
    this.destroyed = true
    clearInterval(this._tickInterval)
    for (const timer of this._pendingTimers) {
      clearTimeout(timer)
    }
    await this.io.destroy()
    if (emitClose) this.emit('close')
  }

  _request(to, force, internal, command, target, value, session, onresponse, onerror) {
    if (internal && !this._sendDownHints && command === DOWN_HINT) return null
    const req = this.io.createRequest(to, null, internal, command, target, value, session)
    if (req === null) return null

    req.onresponse = onresponse
    req.onerror = onerror
    req.send(force)

    return req
  }

  _natAdd(host, port) {
    const prevHost = this._nat.host
    const prevPort = this._nat.port

    this._nat.add(host, port)

    if (prevHost === this._nat.host && prevPort === this._nat.port) return

    this.emit('nat-update', this._nat.host, this._nat.port)
  }

  // we don't check that this is a bootstrap node but we limit the sample size to very few nodes, so fine
  _sampleBootstrapMaybe(from, to) {
    if (this._nonePersistentSamples.length >= Math.max(1, this.bootstrapNodes.length)) return
    const id = from.host + ':' + from.port
    if (this._nonePersistentSamples.indexOf(id) > -1) return
    this._nonePersistentSamples.push(id)
    this._natAdd(to.host, to.port)
  }

  _addNodeFromNetwork(sample, from, to) {
    if (this._filterNode !== null && !this._filterNode(from)) {
      return
    }

    if (from.id === null) {
      this._sampleBootstrapMaybe(from, to)
      return
    }

    const oldNode = this.table.get(from.id)

    // refresh it, if we've seen this before
    if (oldNode) {
      if (sample && (oldNode.sampled === 0 || this._tick - oldNode.sampled >= OLD_NODE)) {
        oldNode.to = to
        oldNode.sampled = this._tick
        this._natAdd(to.host, to.port)
      }

      oldNode.pinged = oldNode.seen = this._tick
      this.nodes.add(oldNode)
      return
    }

    this._addNode({
      id: from.id,
      port: from.port,
      host: from.host,
      to,
      sampled: 0,
      added: this._tick,
      pinged: this._tick, // last time we interacted with them
      seen: this._tick, // last time we heard from them
      downHints: 0,
      prev: null,
      next: null
    })
  }

  _addNode(node) {
    if (this.nodes.has(node) || b4a.equals(node.id, this.table.id)) return

    node.added = node.pinged = node.seen = this._tick

    if (!this.table.add(node)) return
    this.nodes.add(node)

    if (node.to && node.sampled === 0) {
      node.sampled = this._tick
      this._natAdd(node.to.host, node.to.port)
    }

    this.emit('add-node', node)
  }

  _removeStaleNode(node, lastSeen) {
    if (node.seen <= lastSeen) this._removeNode(node)
  }

  _removeNode(node) {
    if (!this.nodes.has(node)) return

    this.table.remove(node.id)
    this.nodes.remove(node)

    this.emit('remove-node', node)
  }

  _onwakeup() {
    this._tick += 2 * OLD_NODE // bump the tick enough that everything appears old.
    this._tick += 8 - (this._tick & 7) - 2 // triggers a series of pings in two ticks
    this._stableTicks = MORE_STABLE_TICKS
    this._refreshTicks = 1 // triggers a refresh next tick (allow network time to wake up also)
    this._lastHost = null // clear network cache check
    this.health.reset()

    if (this.adaptive) {
      // TODO: re-enable this as soon as we find out why this is over triggering in some edge cases
      // this.firewalled = true
      // this.io.firewalled = true

      if (!this.ephemeral) {
        this.ephemeral = true
        this.io.ephemeral = true
        this.emit('ephemeral')
      }
    }

    this.emit('wakeup')
  }

  _onfullrow(newNode, row) {
    if (!this.bootstrapped || this._repinging >= 3) return

    let oldest = null
    for (const node of row.nodes) {
      if (node.pinged === this._tick) continue
      if (
        oldest === null ||
        oldest.pinged > node.pinged ||
        (oldest.pinged === node.pinged && oldest.added > node.added)
      ) {
        oldest = node
      }
    }

    if (oldest === null) return
    if (this._tick - oldest.pinged < RECENT_NODE && this._tick - oldest.added > OLD_NODE) return

    this._repingAndSwap(newNode, oldest)
  }

  _onnetworkchange(interfaces) {
    this.emit('network-change', interfaces)
    this.emit('network-update')
  }

  _repingAndSwap(newNode, oldNode) {
    const self = this
    const lastSeen = oldNode.seen

    oldNode.pinged = this._tick

    this._repinging++
    this._request(
      { id: null, host: oldNode.host, port: oldNode.port },
      false,
      true,
      PING,
      null,
      null,
      null,
      onsuccess,
      onswap
    )

    function onsuccess(m) {
      if (oldNode.seen <= lastSeen) return onswap()
      self._repinging--
    }

    function onswap(e) {
      self._repinging--
      self._removeNode(oldNode)
      self._addNode(newNode)
    }
  }

  _onrequest(req, external) {
    if (req.from.id !== null) {
      this._addNodeFromNetwork(!external, req.from, req.to)
    }

    if (req.internal) {
      switch (req.command) {
        // standard keep alive call
        case PING: {
          req.sendReply(0, null, false, false)
          return
        }
        case DELAYED_PING: {
          this._ondelayedping(req)
          return
        }
        // check if the other side can receive a message to their other socket
        case PING_NAT: {
          if (req.value === null || req.value.byteLength < 2) return
          const port = c.uint16.decode({ start: 0, end: 2, buffer: req.value })
          if (port === 0) return
          req.from.port = port
          req.sendReply(0, null, false, false)
          return
        }
        // empty dht reply back
        case FIND_NODE: {
          if (!req.target) return
          req.sendReply(0, null, false, true)
          return
        }
        // "this is node you sent me is down" - let's try to ping it
        case DOWN_HINT: {
          if (req.value === null || req.value.byteLength < 6) return
          if (this._checks < 10) {
            sodium.crypto_generichash(TMP, req.value.subarray(0, 6))
            const node = this.table.get(TMP)
            if (node && (node.pinged < this._tick || node.downHints === 0)) {
              node.downHints++
              this._check(node)
            }
          }
          req.sendReply(0, null, false, false)
          return
        }
      }

      req.sendReply(UNKNOWN_COMMAND, null, false, req.target !== null)
      return
    }

    // ask the user to handle it or reply back with a bad command
    if (this.onrequest(req) === false) {
      req.sendReply(UNKNOWN_COMMAND, null, false, req.target !== null)
    }
  }

  onrequest(req) {
    return this.emit('request', req)
  }

  _ondelayedping(req) {
    if (req.value === null || req.value.byteLength < 4) return
    const delayMs = c.uint32.decode({ start: 0, end: 4, buffer: req.value })
    if (delayMs > this.maxPingDelay) return
    const timer = setTimeout(() => {
      if (this.destroyed) return
      this._pendingTimers.delete(timer)
      req.sendReply(0, null, false, false)
    }, delayMs)
    this._pendingTimers.add(timer)
  }

  _onresponse(res, external) {
    this._addNodeFromNetwork(!external, res.from, res.to)
  }

  _ontimeout(req) {
    if (!req.to.id) return
    const node = this.table.get(req.to.id)
    if (node) this._removeNode(node)
  }

  _pingSome() {
    let cnt = this.io.inflight.length > 2 ? 3 : 5
    let oldest = this.nodes.oldest

    // tiny dht, pinged the bootstrap again
    if (!oldest) {
      this.refresh()
      return
    }

    // we've recently pinged the oldest one, so only trigger a couple of repings
    if (this._tick - oldest.pinged < RECENT_NODE) {
      cnt = 2
    }

    while (cnt--) {
      if (!oldest || this._tick === oldest.pinged) continue
      this._check(oldest)
      oldest = oldest.next
    }
  }

  _check(node) {
    node.pinged = this._tick

    const lastSeen = node.seen
    const onresponse = () => {
      this._checks--
      this._removeStaleNode(node, lastSeen)
    }
    const onerror = () => {
      this._checks--
      this._removeNode(node)
    }

    this._checks++
    this._request(
      { id: null, host: node.host, port: node.port },
      false,
      true,
      PING,
      null,
      null,
      null,
      onresponse,
      onerror
    )
  }

  _ontick() {
    const time = Date.now()

    if (time - this._lastTick > SLEEPING_INTERVAL && this.suspended === false) {
      this._onwakeup()
    } else {
      this._tick++
    }

    this._lastTick = time

    if (!this.bootstrapped || this.suspended) return

    if (this.adaptive && this.ephemeral && --this._stableTicks <= 0) {
      if (this._lastHost === this._nat.host) {
        // do not recheck the same network...
        this._stableTicks = MORE_STABLE_TICKS
      } else {
        this._updateNetworkState() // the promise returned here never fails so just ignore it
      }
    }

    if ((this._tick & 7) === 0) {
      this._pingSome()
    }

    if (
      ((this._tick & 63) === 0 && this.nodes.length < this.table.k) ||
      --this._refreshTicks <= 0
    ) {
      this.refresh()
    }

    this._downHintsSentPerTick = 0
    this.health.update()
  }

  async _updateNetworkState(onlyFirewall = false) {
    if (!this.ephemeral) return false
    if (onlyFirewall && !this.firewalled) return false

    const { host, port } = this._nat

    if (!onlyFirewall) {
      // remember what host we checked and reset the counter
      this._stableTicks = MORE_STABLE_TICKS
      this._lastHost = host
    }

    // check if we have a consistent host and port
    if (host === null || port === 0) {
      return false
    }

    const natSampler = this.firewalled ? new NatSampler() : this._nat

    // ask remote nodes to ping us on our server socket to see if we have the port open
    const firewalled = this.firewalled && (await this._checkIfFirewalled(natSampler))
    if (firewalled) return false

    this.firewalled = this.io.firewalled = false

    // incase it's called in parallel for some reason, or if our nat status somehow changed
    if (!this.ephemeral || host !== this._nat.host || port !== this._nat.port) return false
    // if the firewall probe returned a different host / non consistent port, bail as well
    if (natSampler.host !== host || natSampler.port === 0) return false

    const id = peer.id(natSampler.host, natSampler.port)

    if (!onlyFirewall) {
      this.ephemeral = this.io.ephemeral = false
    }

    if (natSampler !== this._nat) {
      const prevHost = this._nat.host
      const prevPort = this._nat.port

      this._nonePersistentSamples = []
      this._nat = natSampler

      if (prevHost !== this._nat.host || prevPort !== this._nat.port) {
        this.emit('nat-update', this._nat.host, this._nat.port)
      }
    }

    // TODO: we should make this a bit more defensive in terms of using more
    // resources to make sure that the new routing table contains as many alive nodes
    // as possible, vs blindly copying them over...

    // all good! copy over the old routing table to the new one
    if (!b4a.equals(this.table.id, id)) {
      const nodes = this.table.toArray()

      this.table = this.io.table = new Table(id)

      for (const node of nodes) {
        if (b4a.equals(node.id, id)) continue
        if (!this.table.add(node)) this.nodes.remove(node)
      }

      this.table.on('row', this._onrow)

      // we need to rebootstrap/refresh since we updated our id
      if (this.bootstrapped) this.refresh()
    }

    if (!this.ephemeral) {
      this.emit('persistent')
    }

    return true
  }

  async *_resolveBootstrapNodes() {
    for (let { host, port } of this.bootstrapNodes) {
      let doLookup = false

      if (host.indexOf('@') === -1) {
        doLookup = true
      } else {
        const [suggestedIP, fallbackHost] = host.split('@')
        try {
          await this.ping({ host: suggestedIP, port })
          host = suggestedIP
        } catch {
          host = fallbackHost
          doLookup = true
        }
      }

      if (doLookup) {
        try {
          host = UDX.isIPv4(host) ? host : (await this.udx.lookup(host, { family: 4 })).host
        } catch {
          continue
        }
      }

      yield {
        id: peer.id(host, port),
        host,
        port
      }
    }
  }

  async _addBootstrapNodes(nodes) {
    for await (const node of this._resolveBootstrapNodes()) {
      nodes.push(node)
    }
  }

  async _checkIfFirewalled(natSampler = new NatSampler()) {
    const nodes = []
    for (let node = this.nodes.latest; node && nodes.length < 5; node = node.prev) {
      nodes.push(node)
    }

    if (nodes.length < 5) await this._addBootstrapNodes(nodes)
    // if no nodes are available, including bootstrappers - bail
    if (nodes.length === 0) return true

    const hosts = new Set()
    const value = b4a.allocUnsafe(2)

    c.uint16.encode({ start: 0, end: 2, buffer: value }, this.io.serverSocket.address().port)

    // double check they actually came on the server socket...
    this.io.serverSocket.on('message', onmessage)

    const pongs = await requestAll(this, true, PING_NAT, value, nodes)

    let count = 0
    for (const res of pongs) {
      if (hosts.has(res.from.host)) {
        count++
        natSampler.add(res.to.host, res.to.port)
      }
    }

    this.io.serverSocket.removeListener('message', onmessage)

    // if we got no or very few replies, consider it a fluke
    if (count < (nodes.length >= 5 ? 3 : 1)) return true

    // check that the server socket has the same ip as the client socket
    if (natSampler.host === null || this._nat.host !== natSampler.host) return true

    // check that the local port of the server socket is the same as the remote port
    // TODO: we might want a flag to opt out of this heuristic for specific remapped port servers
    if (natSampler.port === 0 || natSampler.port !== this.io.serverSocket.address().port) {
      return true
    }

    return false

    function onmessage(_, { host }) {
      hosts.add(host)
    }
  }

  _backgroundQuery(target) {
    this._refreshTicks = REFRESH_TICKS

    const backgroundCon = Math.min(this.concurrency, Math.max(2, (this.concurrency / 8) | 0))
    const q = new Query(this, target, true, FIND_NODE, null, {
      concurrency: backgroundCon
    })

    q.on('data', () => {
      // yield to other traffic
      q.concurrency = this.io.inflight.length < 3 ? this.concurrency : backgroundCon
    })

    return q
  }

  // called by health
  _online() {
    if (this.online && !this.degraded) return
    this.online = true
    this.degraded = false
    this.emit('network-update')
  }

  // called by health
  _degraded() {
    if (this.degraded) return
    this.online = true
    this.degraded = true
    this.emit('network-update')
  }

  // called by health
  _offline() {
    if (!this.online) return
    this.online = false
    this.degraded = false
    this.emit('network-update')
  }
}

DHT.OK = 0
DHT.ERROR_UNKNOWN_COMMAND = UNKNOWN_COMMAND
DHT.ERROR_INVALID_TOKEN = INVALID_TOKEN

module.exports = DHT

function localIP(udx, family = 4) {
  let host = null

  for (const n of udx.networkInterfaces()) {
    if (n.family !== family || n.internal) continue

    // mac really likes en0, mb a better way but this shouldnt be bad anywhere so return now
    if (n.name === 'en0') return n.host

    // otherwise pick the first non internal host (let the loop continue in case we see en0)
    if (host === null) host = n.host
  }

  return host || (family === 4 ? '127.0.0.1' : '::1')
}

function parseNode(s) {
  if (typeof s === 'object') return s
  if (typeof s === 'number') return { host: '127.0.0.1', port: s }
  const [host, port] = s.split(':')
  if (!port) throw new Error('Bootstrap node format is host:port')

  return {
    host,
    port: Number(port)
  }
}

function randomBytes(n) {
  const b = b4a.alloc(n)
  sodium.randombytes_buf(b)
  return b
}

function randomOffset(n) {
  return n - ((Math.random() * 0.5 * n) | 0)
}

function requestAll(dht, internal, command, value, nodes) {
  let missing = nodes.length
  const replies = []

  return new Promise((resolve) => {
    for (const node of nodes) {
      const req = dht._request(
        node,
        false,
        internal,
        command,
        null,
        value,
        null,
        onsuccess,
        onerror
      )
      if (!req) return resolve(replies)
    }

    function onsuccess(res) {
      replies.push(res)
      if (--missing === 0) resolve(replies)
    }

    function onerror() {
      if (--missing === 0) resolve(replies)
    }
  })
}

function noop() {}
exports.PING = 0
exports.PING_NAT = 1
exports.FIND_NODE = 2
exports.DOWN_HINT = 3
exports.DELAYED_PING = 4
module.exports = class DHTError extends Error {
  constructor(msg, code, fn = DHTError) {
    super(`${code}: ${msg}`)
    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, fn)
    }
  }

  get name() {
    return 'DHTError'
  }

  static UNKNOWN_COMMAND = 1
  static INVALID_TOKEN = 2

  static REQUEST_TIMEOUT(msg = 'Request timed out') {
    return new DHTError(msg, 'REQUEST_TIMEOUT', DHTError.REQUEST_TIMEOUT)
  }

  static REQUEST_DESTROYED(msg = 'Request destroyed') {
    return new DHTError(msg, 'REQUEST_DESTROYED', DHTError.REQUEST_DESTROYED)
  }

  static IO_SUSPENDED(msg = 'I/O suspended') {
    return new DHTError(msg, 'IO_SUSPENDED', DHTError.IO_SUSPENDED)
  }
}
const MAX_HEALTH_WINDOW = 4
const OFFLINE_THRESHOLD = 2
const IDLE_THRESHOLD = 4
const DEGRADED_TIMEOUT_RATE_THRESHOLD = 0.5

module.exports = class NetworkHealth {
  constructor(dht) {
    this._dht = dht
    this._window = []
    this._head = -1
    this._offlineTicks = 0
    this._degradedTicks = 0
    this._healthyTicks = 0
    this.online = true
    this.degraded = false
  }

  get oldest() {
    return this._window[this._tail]
  }

  get previous() {
    return this._window[(this._head - 1 + MAX_HEALTH_WINDOW) % MAX_HEALTH_WINDOW]
  }

  get newest() {
    return this._window[this._head]
  }

  get responses() {
    if (!this.newest || !this.previous) return 0
    return this.newest.responses - this.previous.responses
  }

  get timeouts() {
    if (!this.newest || !this.previous) return 0
    return this.newest.timeouts - this.previous.timeouts
  }

  get timeoutsRate() {
    if (this.timeouts === 0) return 0
    return this.timeouts / (this.responses + this.timeouts)
  }

  get cold() {
    return this._window.length < MAX_HEALTH_WINDOW
  }

  get idle() {
    return this.responses + this.timeouts < IDLE_THRESHOLD
  }

  get stats() {
    return {
      online: this.online,
      degraded: this.degraded,
      cold: this.cold,
      idle: this.idle,
      responses: this.responses,
      timeouts: this.timeouts,
      timeoutsRate: this.timeoutsRate
    }
  }

  get _tail() {
    return (this._head + 1) % MAX_HEALTH_WINDOW
  }

  reset() {
    this._window = []
    this._head = -1
    this._offlineTicks = 0
    this._degradedTicks = 0
    this._healthyTicks = 0
    this.online = true
    this.degraded = false
    this._dht._online()
  }

  update() {
    // update counters before dropping oldest
    if (this.oldest?.degraded) this._degradedTicks--
    else if (this.oldest?.degraded === false) this._healthyTicks--

    // move window
    this._head = this._tail
    this._window[this._head] = {
      responses: this._dht.stats.requests.responses,
      timeouts: this._dht.stats.requests.timeouts
    }

    // skip state changes
    if (this.cold || this.idle) return

    // update newest
    this.newest.offline = this.responses === 0
    this.newest.degraded =
      !this.newest.offline && this.timeoutsRate > DEGRADED_TIMEOUT_RATE_THRESHOLD

    // update counters
    if (this.newest.offline) this._offlineTicks++
    else {
      this._offlineTicks = 0
      if (this.newest.degraded) this._degradedTicks++
      else this._healthyTicks++
    }

    // check online/offline
    if (!this.newest.offline) this.online = true
    else if (this._offlineTicks >= OFFLINE_THRESHOLD) this.online = false

    // check degraded
    if (!this.online || this._healthyTicks === MAX_HEALTH_WINDOW) this.degraded = false
    else if (this._degradedTicks === MAX_HEALTH_WINDOW) this.degraded = true

    // fire events
    if (this.online && !this.degraded) this._dht._online()
    else if (this.degraded) this._dht._degraded()
    else this._dht._offline()
  }
}
const FIFO = require('fast-fifo')
const sodium = require('sodium-universal')
const c = require('compact-encoding')
const b4a = require('b4a')
const AdaptiveTimeout = require('adaptive-timeout')
const peer = require('./peer')
const { INVALID_TOKEN, REQUEST_TIMEOUT, REQUEST_DESTROYED, IO_SUSPENDED } = require('./errors')

const VERSION = 0b11
const RESPONSE_ID = (0b0001 << 4) | VERSION
const REQUEST_ID = (0b0000 << 4) | VERSION
const EMPTY_ARRAY = []
const MAX_WINDOW = 80

module.exports = class IO {
  constructor(
    table,
    udx,
    {
      maxWindow = MAX_WINDOW,
      port = 0,
      host = '0.0.0.0',
      anyPort = true,
      firewalled = true,
      onrequest,
      onresponse = noop,
      ontimeout = noop,
      adaptiveTimeout
    } = {}
  ) {
    this.table = table
    this.udx = udx
    this.inflight = []
    this.clientSocket = null
    this.serverSocket = null
    this.firewalled = firewalled !== false
    this.ephemeral = true
    this.congestion = new CongestionWindow(maxWindow)
    this.networkInterfaces = udx.watchNetworkInterfaces()
    this.suspended = false

    this.stats = {
      requests: {
        active: 0,
        total: 0,
        responses: 0,
        timeouts: 0,
        retries: 0
      },
      commands: [
        { tx: 0, rx: 0 }, // tx = transmitted, rx = received
        { tx: 0, rx: 0 },
        { tx: 0, rx: 0 },
        { tx: 0, rx: 0 }
      ]
    }

    this.onrequest = onrequest
    this.onresponse = onresponse
    this.ontimeout = ontimeout

    this._pending = new FIFO()
    this._rotateSecrets = 10
    this._tid = (Math.random() * 65536) | 0
    this._secrets = null
    this._drainInterval = null
    this._destroying = null
    this._binding = null

    // port can be a number or a range [start, to]
    this.portRange = port.length ? port : port === 0 ? [0, 0] : [port, port + 5]

    this._host = host
    this._anyPort = anyPort !== false
    this._boundServerPort = 0
    this._boundClientPort = 0

    this._adt = adaptiveTimeout ? new AdaptiveTimeout(adaptiveTimeout) : null
  }

  static DEFAULT_MAX_WINDOW = MAX_WINDOW

  onmessage(socket, buffer, { host, port }) {
    if (buffer.byteLength < 2 || !(port > 0 && port < 65536) || this.suspended === true) return

    const from = { id: null, host, port }
    const state = { start: 1, end: buffer.byteLength, buffer }
    const expectedSocket = this.firewalled ? this.clientSocket : this.serverSocket
    const external = socket !== expectedSocket

    if (buffer[0] === REQUEST_ID) {
      const req = Request.decode(this, socket, from, state)
      if (req === null) return
      if (
        req.token !== null &&
        !b4a.equals(req.token, this.token(req.from, 1)) &&
        !b4a.equals(req.token, this.token(req.from, 0))
      ) {
        req.error(INVALID_TOKEN, { token: true })
        return
      }
      this.onrequest(req, external)
      return
    }

    if (buffer[0] === RESPONSE_ID) {
      const res = decodeReply(from, state)
      if (res === null) return

      for (let i = 0; i < this.inflight.length; i++) {
        const req = this.inflight[i]
        if (req.tid !== res.tid) continue

        res.rtt = Date.now() - req._timestamp

        if (this._adt && req.sent <= 2) {
          this._adt.put(`${req.to.host}:${req.to.port}`, res.rtt)
        }

        if (i === this.inflight.length - 1) this.inflight.pop()
        else this.inflight[i] = this.inflight.pop()

        if (req.session) req.session._detach(req)

        // TODO: Auto retry here if errors.INVALID_TOKEN is returned?

        if (req._timeout) {
          clearTimeout(req._timeout)
          req._timeout = null
        }

        this.congestion.recv()

        if (req.internal && req.command < this.stats.commands.length) {
          this.stats.commands[req.command].rx++
        }

        this.stats.requests.active--
        this.stats.requests.responses++

        this.onresponse(res, external)
        req.onresponse(res, req)
        break
      }
    }
  }

  token(addr, i) {
    if (this._secrets === null) {
      const buf = b4a.alloc(64)
      this._secrets = [buf.subarray(0, 32), buf.subarray(32, 64)]
      sodium.randombytes_buf(this._secrets[0])
      sodium.randombytes_buf(this._secrets[1])
    }

    const token = b4a.allocUnsafe(32)
    sodium.crypto_generichash(token, b4a.from(addr.host), this._secrets[i])
    return token
  }

  async destroy() {
    if (this._destroying) return this._destroying
    this._destroying = this._destroy()
    return this._destroying
  }

  async _destroy() {
    // simplifies timing to await the bind here also, although it might be unneeded
    await this.bind()
    await this._clear(false)
  }

  async _clear(suspended) {
    if (this._drainInterval) {
      clearInterval(this._drainInterval)
      this._drainInterval = null
    }

    while (this.inflight.length) {
      const req = this.inflight.pop()
      if (req._timeout) clearTimeout(req._timeout)
      req._timeout = null
      req.destroyed = true

      if (req.session) req.session._detach(req)

      this.congestion.recv()
      this.stats.requests.active--

      req.onerror(suspended ? IO_SUSPENDED() : REQUEST_DESTROYED(), req)
    }

    await Promise.allSettled([this.serverSocket.close(), this.clientSocket.close()])

    this.networkInterfaces.destroy()
  }

  async suspend() {
    this.suspended = true
    await this._clear(true)

    this.congestion.clear()

    if (this._drainInterval) {
      clearInterval(this._drainInterval)
      this._drainInterval = null
    }
  }

  async _rebind(binding) {
    if (binding) await binding
    if (this._destroying) return this._destroying
    await this._bindSockets()
    this.networkInterfaces = this.udx.watchNetworkInterfaces()
  }

  resume() {
    this.suspended = false
    const binding = this._binding
    this._binding = this._rebind(binding)
    return this._binding
  }

  bind() {
    if (this._binding) return this._binding
    this._binding = this._bindSockets()
    return this._binding
  }

  async _bindSockets() {
    const serverSocket = this.udx.createSocket()

    const candidatePorts = []

    // Retrying previous port always has precedence
    if (this._boundServerPort) candidatePorts.push(this._boundServerPort)

    for (let i = this.portRange[0]; i < this.portRange[1]; i++) candidatePorts.push(i)

    for (const port of candidatePorts) {
      if (serverSocket.bound) break

      try {
        serverSocket.bind(port, this._host)
      } catch (err) {
        if (!this._anyPort) {
          await serverSocket.close()
          throw err
        }
      }
    }

    if (!serverSocket.bound) {
      try {
        serverSocket.bind(0, this._host)
      } catch (err) {
        await serverSocket.close()
        throw err
      }
    }

    const clientSocket = this.udx.createSocket()

    try {
      clientSocket.bind(this._boundClientPort || 0, this._host)
    } catch {
      try {
        clientSocket.bind(0, this._host)
      } catch (err) {
        await serverSocket.close()
        await clientSocket.close()
        throw err
      }
    }

    this._boundServerPort = serverSocket.address().port
    this._boundClientPort = clientSocket.address().port

    this.clientSocket = clientSocket
    this.serverSocket = serverSocket

    this.serverSocket.on('message', this.onmessage.bind(this, this.serverSocket))
    this.clientSocket.on('message', this.onmessage.bind(this, this.clientSocket))

    if (this._drainInterval === null) {
      this._drainInterval = setInterval(this._drain.bind(this), 750)
      if (this._drainInterval.unref) this._drainInterval.unref()
    }

    for (const req of this.inflight) {
      if (!req.socket) req.socket = this.firewalled ? this.clientSocket : this.serverSocket
      req.sent = 0
      req.send(false)
    }
  }

  _drain() {
    if (this._secrets !== null && --this._rotateSecrets === 0) {
      this._rotateSecrets = 10
      const tmp = this._secrets[0]
      this._secrets[0] = this._secrets[1]
      this._secrets[1] = tmp
      sodium.crypto_generichash(tmp, tmp)
    }

    this.congestion.drain()

    while (!this.congestion.isFull()) {
      const p = this._pending.shift()
      if (p === undefined) return
      p._sendNow()
    }
  }

  createRequest(to, token, internal, command, target, value, session, ttl) {
    if (this._destroying !== null) return null

    if (this._tid === 65536) this._tid = 0

    const tid = this._tid++
    const socket = this.firewalled ? this.clientSocket : this.serverSocket

    const req = new Request(
      this,
      socket,
      tid,
      null,
      to,
      token,
      internal,
      command,
      target,
      value,
      session,
      ttl || 0
    )
    this.inflight.push(req)
    if (session) session._attach(req)

    if (internal && command < this.stats.commands.length) {
      this.stats.commands[command].tx++
    }

    this.stats.requests.active++
    this.stats.requests.total++

    return req
  }
}

class Request {
  constructor(io, socket, tid, from, to, token, internal, command, target, value, session, ttl) {
    this.socket = socket
    this.tid = tid
    this.from = from
    this.to = to
    this.token = token
    this.command = command
    this.target = target
    this.value = value
    this.internal = internal
    this.session = session
    this.ttl = ttl
    this.index = -1
    this.sent = 0
    this.retries = 3
    this.destroyed = false
    this.timeout = 0

    this.oncycle = noop
    this.onerror = noop
    this.onresponse = noop

    this._buffer = null
    this._io = io
    this._timeout = null
    this._timestamp = Date.now()
  }

  static decode(io, socket, from, state) {
    try {
      const flags = c.uint.decode(state)
      const tid = c.uint16.decode(state)
      const to = peer.ipv4.decode(state)
      const id = flags & 1 ? c.fixed32.decode(state) : null
      const token = flags & 2 ? c.fixed32.decode(state) : null
      const internal = (flags & 4) !== 0
      const command = c.uint.decode(state)
      const target = flags & 8 ? c.fixed32.decode(state) : null
      const value = flags & 16 ? c.buffer.decode(state) : null

      if (id !== null) from.id = validateId(id, from)

      return new Request(
        io,
        socket,
        tid,
        from,
        to,
        token,
        internal,
        command,
        target,
        value,
        null,
        0
      )
    } catch {
      return null
    }
  }

  reply(value, opts = {}) {
    const socket = opts.socket || this.socket
    const to = opts.to || this.from
    this._sendReply(0, value || null, opts.token !== false, opts.closerNodes !== false, to, socket)
  }

  error(code, opts = {}) {
    const socket = opts.socket || this.socket
    const to = opts.to || this.from
    this._sendReply(code, null, opts.token === true, opts.closerNodes !== false, to, socket)
  }

  relay(value, to, opts) {
    const socket = (opts && opts.socket) || this.socket
    const buffer = this._encodeRequest(null, value, to, socket)
    socket.trySend(buffer, to.port, to.host, this.ttl)
  }

  send(force = false) {
    if (this.destroyed) return

    if (this.socket === null) return
    if (this._buffer === null) {
      this._buffer = this._encodeRequest(this.token, this.value, this.to, this.socket)
    }

    if (!force && this._io.congestion.isFull()) {
      this._io._pending.push(this)
      return
    }

    this._sendNow()
  }

  sendReply(error, value, token, hasCloserNodes) {
    this._sendReply(error, value, token, hasCloserNodes, this.from, this.socket, null)
  }

  _sendNow() {
    if (this.destroyed) return
    this.sent++
    this._io.congestion.send()
    this.socket.trySend(this._buffer, this.to.port, this.to.host, this.ttl)
    if (this._timeout) clearTimeout(this._timeout)
    const value =
      this.timeout || this._io._adt?.get(`${this.to.host}:${this.to.port}`, this.sent) || 1000
    this._timeout = setTimeout(oncycle, value, this)
  }

  destroy(err) {
    if (this.destroyed) return
    this.destroyed = true

    if (this._timeout) {
      clearTimeout(this._timeout)
      this._timeout = null
    }

    const i = this._io.inflight.indexOf(this)
    if (i === -1) return

    if (i === this._io.inflight.length - 1) this._io.inflight.pop()
    else this._io.inflight[i] = this._io.inflight.pop()

    if (this.session) this.session._detach(this)

    this._io.stats.requests.active--
    this._io.congestion.recv()

    this.onerror(err || REQUEST_DESTROYED(), this)
  }

  _sendReply(error, value, token, hasCloserNodes, from, socket) {
    if (socket === null || this.destroyed) return

    const id = this._io.ephemeral === false && socket === this._io.serverSocket
    const closerNodes =
      this.target !== null && hasCloserNodes ? this._io.table.closest(this.target) : EMPTY_ARRAY
    const state = { start: 0, end: 1 + 1 + 6 + 2, buffer: null } // (type | version) + flags + to + tid

    if (id) state.end += 32
    if (token) state.end += 32
    if (closerNodes.length > 0) peer.ipv4Array.preencode(state, closerNodes)
    if (error > 0) c.uint.preencode(state, error)
    if (value) c.buffer.preencode(state, value)

    state.buffer = b4a.allocUnsafe(state.end)
    state.buffer[state.start++] = RESPONSE_ID
    state.buffer[state.start++] =
      (id ? 1 : 0) |
      (token ? 2 : 0) |
      (closerNodes.length > 0 ? 4 : 0) |
      (error > 0 ? 8 : 0) |
      (value ? 16 : 0)

    c.uint16.encode(state, this.tid)
    peer.ipv4.encode(state, from)

    if (id) c.fixed32.encode(state, this._io.table.id)
    if (token) c.fixed32.encode(state, this._io.token(from, 1))
    if (closerNodes.length > 0) peer.ipv4Array.encode(state, closerNodes)
    if (error > 0) c.uint.encode(state, error)
    if (value) c.buffer.encode(state, value)

    socket.trySend(state.buffer, from.port, from.host, this.ttl)
  }

  _encodeRequest(token, value, to, socket) {
    const id = this._io.ephemeral === false && socket === this._io.serverSocket
    const state = { start: 0, end: 1 + 1 + 6 + 2, buffer: null } // (type | version) + flags + to + tid

    if (id) state.end += 32
    if (token) state.end += 32

    c.uint.preencode(state, this.command)

    if (this.target) state.end += 32
    if (value) c.buffer.preencode(state, value)

    state.buffer = b4a.allocUnsafe(state.end)
    state.buffer[state.start++] = REQUEST_ID
    state.buffer[state.start++] =
      (id ? 1 : 0) |
      (token ? 2 : 0) |
      (this.internal ? 4 : 0) |
      (this.target ? 8 : 0) |
      (value ? 16 : 0)

    c.uint16.encode(state, this.tid)
    peer.ipv4.encode(state, to)

    if (id) c.fixed32.encode(state, this._io.table.id)
    if (token) c.fixed32.encode(state, token)

    c.uint.encode(state, this.command)

    if (this.target) c.fixed32.encode(state, this.target)
    if (value) c.buffer.encode(state, value)

    return state.buffer
  }
}

class CongestionWindow {
  constructor(maxWindow) {
    this._i = 0
    this._total = 0
    this._window = [0, 0, 0, 0]
    this._maxWindow = maxWindow
  }

  clear() {
    this._i = 0
    this._total = 0
    this._window = [0, 0, 0, 0]
  }

  isFull() {
    return this._total >= 2 * this._maxWindow || this._window[this._i] >= this._maxWindow
  }

  recv() {
    if (this._window[this._i] > 0) {
      this._window[this._i]--
      this._total--
    }
  }

  send() {
    this._total++
    this._window[this._i]++
  }

  drain() {
    this._i = (this._i + 1) & 3
    this._total -= this._window[this._i]
    this._window[this._i] = 0 // clear oldest
  }
}

function noop() {}

function oncycle(req) {
  req._timeout = null
  req.oncycle(req)
  if (req.sent > req.retries) {
    req._io.stats.requests.timeouts++
    req.destroy(REQUEST_TIMEOUT())
    req._io.ontimeout(req)
  } else {
    req._io.stats.requests.retries++
    req.send()
  }
}

function decodeReply(from, state) {
  try {
    const flags = c.uint.decode(state)
    const tid = c.uint16.decode(state)
    const to = peer.ipv4.decode(state)
    const id = flags & 1 ? c.fixed32.decode(state) : null
    const token = flags & 2 ? c.fixed32.decode(state) : null
    const closerNodes = flags & 4 ? peer.ipv4Array.decode(state) : null
    const error = flags & 8 ? c.uint.decode(state) : 0
    const value = flags & 16 ? c.buffer.decode(state) : null

    if (id !== null) from.id = validateId(id, from)

    return { tid, rtt: 0, from, to, token, closerNodes, error, value }
  } catch {
    return null
  }
}

function validateId(id, from) {
  const expected = peer.id(from.host, from.port)
  return b4a.equals(expected, id) ? expected : null
}
const sodium = require('sodium-universal')
const c = require('compact-encoding')
const b4a = require('b4a')

const ipv4 = {
  ...c.ipv4Address,
  decode(state) {
    const ip = c.ipv4Address.decode(state)
    return {
      id: null, // populated by the callee
      host: ip.host,
      port: ip.port
    }
  }
}

module.exports = { id, ipv4, ipv4Array: c.array(ipv4) }

function id(host, port, out = b4a.allocUnsafeSlow(32)) {
  const addr = out.subarray(0, 6)
  ipv4.encode({ start: 0, end: 6, buffer: addr }, { host, port })
  sodium.crypto_generichash(out, addr)
  return out
}
const { Readable, getStreamError } = require('streamx')
const b4a = require('b4a')
const peer = require('./peer')
const { DOWN_HINT } = require('./commands')

const DONE = []
const DOWN = []

module.exports = class Query extends Readable {
  constructor(dht, target, internal, command, value, opts = {}) {
    super()

    dht.stats.queries.total++
    dht.stats.queries.active++

    this.force = !!opts.force
    this.dht = dht
    this.k = this.dht.table.k
    this.target = target
    this.internal = internal
    this.command = command
    this.value = value
    this.errors = 0
    this.successes = 0
    this.concurrency = opts.concurrency || this.dht.concurrency
    this.inflight = 0
    this.map = opts.map || defaultMap
    this.retries =
      opts.retries === 0 ? 0 : opts.retries || (this.internal && command === DOWN_HINT ? 3 : 5)
    this.closestReplies = []

    this._slow = 0
    this._slowdown = false
    this._seen = new Map()
    this._pending = []
    this._fromTable = false
    this._commit = opts.commit === true ? autoCommit : opts.commit || null
    this._commiting = false
    this._session = opts.session || dht.session()
    this._autoDestroySession = !opts.session
    this._onlyClosestNodes = false

    this._onvisitbound = this._onvisit.bind(this)
    this._onerrorbound = this._onerror.bind(this)
    this._oncyclebound = this._oncycle.bind(this)

    const nodes = opts.nodes || opts.closestNodes
    const replies = opts.replies || opts.closestReplies

    // add them reverse as we pop below
    if (nodes) {
      for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i]
        this._addPending(
          {
            id: node.id || peer.id(node.host, node.port),
            host: node.host,
            port: node.port
          },
          null
        )
      }
    } else if (replies) {
      for (let i = replies.length - 1; i >= 0; i--) {
        this._addPending(replies[i].from, null)
      }
    }

    if (opts.onlyClosestNodes) this._onlyClosestNodes = true
  }

  get closestNodes() {
    const nodes = new Array(this.closestReplies.length)

    for (let i = 0; i < nodes.length; i++) {
      nodes[i] = this.closestReplies[i].from
    }

    return nodes
  }

  finished() {
    return new Promise((resolve, reject) => {
      if (this.destroyed) {
        const error = getStreamError(this)
        if (error) reject(error)
        else resolve()
        return
      }

      const self = this
      let error = null

      this.resume()
      this.on('error', onerror)
      this.on('close', onclose)

      function onclose() {
        self.removeListener('error', onerror)
        self.removeListener('close', onclose)
        if (error) reject(error)
        else resolve()
      }

      function onerror(err) {
        error = err
      }
    })
  }

  _addFromTable() {
    if (this._pending.length >= this.k) return
    this._fromTable = true

    const closest = this.dht.table.closest(this.target, this.k - this._pending.length)

    for (const node of closest) {
      this._addPending({ id: node.id, host: node.host, port: node.port }, null)
    }
  }

  async _open(cb) {
    this._addFromTable()
    if (this._pending.length >= this.k) return cb(null)

    for await (const node of this.dht._resolveBootstrapNodes()) {
      this._addPending(node, null)
    }

    cb(null)
  }

  _isCloser(id) {
    return (
      this.closestReplies.length < this.k ||
      this._compare(id, this.closestReplies[this.closestReplies.length - 1].from.id) < 0
    )
  }

  _addPending(node, ref) {
    if (this._onlyClosestNodes) return false

    const addr = node.host + ':' + node.port
    const refs = this._seen.get(addr)
    const isCloser = this._isCloser(node.id)

    if (refs === DONE) {
      return isCloser
    }

    if (refs === DOWN) {
      if (ref) this._downHint(ref, node)
      return isCloser
    }

    if (refs) {
      if (ref !== null) refs.push(ref)
      return isCloser
    }

    if (!isCloser) {
      return false
    }

    this._seen.set(addr, ref === null ? [] : [ref])
    this._pending.push(node)

    return true
  }

  _read(cb) {
    this._readMore()
    cb(null)
  }

  _readMore() {
    if (this.destroying || this._commiting) return

    const concurrency = (this._slowdown ? 3 : this.concurrency) + this._slow

    while (this.inflight < concurrency && this._pending.length > 0) {
      const next = this._pending.pop()
      if (next && next.id && !this._isCloser(next.id)) continue
      this._visit(next)
    }

    // if reusing closest nodes, slow down after the first readMore tick to allow
    // the closest node a chance to reply before going broad to question more
    if (!this._fromTable && this.successes === 0 && this.errors === 0) {
      this._slowdown = true
    }

    if (this._pending.length > 0) return

    // if no inflight OR all the queries we are waiting on are marked as slow and we have a full result.
    if (
      this.inflight === 0 ||
      (this._slow === this.inflight && this.closestReplies.length >= this.k)
    ) {
      // if more than 3/4 failed and we only used cached nodes, try again from the routing table
      if (!this._fromTable && this.successes < this.k / 4) {
        this._addFromTable()
        this._readMore()
        return
      }

      this._flush()
    }
  }

  _flush() {
    if (this._commiting) return
    this._commiting = true

    if (this._commit === null) {
      this.push(null)
      return
    }

    const p = []
    for (const m of this.closestReplies) p.push(this._commit(m, this.dht, this))
    this._endAfterCommit(p)
  }

  _endAfterCommit(ps) {
    if (!ps.length) {
      this.destroy(new Error('Too few nodes responded'))
      return
    }

    const self = this

    let pending = ps.length
    let success = 0

    for (const p of ps) p.then(ondone, onerror)

    function ondone() {
      success++
      if (--pending === 0) self.push(null)
    }

    function onerror(err) {
      if (--pending > 0) return
      if (success) self.push(null)
      else self.destroy(err)
    }
  }

  _dec(req) {
    if (req.oncycle === noop) {
      this._slow--
    } else {
      req.oncycle = noop
    }
    this.inflight--
  }

  _onvisit(m, req) {
    this._dec(req)

    const addr = req.to.host + ':' + req.to.port
    this._seen.set(addr, DONE)

    if (this._commiting) return

    if (m.error === 0) this.successes++
    else this.errors++

    if (m.error === 0 && m.from.id !== null && this._isCloser(m.from.id)) this._pushClosest(m)

    if (m.closerNodes !== null) {
      for (const node of m.closerNodes) {
        node.id = peer.id(node.host, node.port)
        if (this.dht._filterNode !== null && !this.dht._filterNode(node)) continue
        if (b4a.equals(node.id, this.dht.table.id)) continue
        // TODO: we could continue here instead of breaking to ensure that one of the nodes in the closer list
        // is later marked as DOWN that we gossip that back
        if (!this._addPending(node, m.from)) break
      }
    }

    if (!this._fromTable && this.successes + this.errors >= this.concurrency) {
      this._slowdown = false
    }

    if (m.error !== 0) {
      this._readMore()
      return
    }

    const data = this.map(m)
    if (!data || this.push(data) !== false) {
      this._readMore()
    }
  }

  _onerror(err, req) {
    const addr = req.to.host + ':' + req.to.port
    const refs = this._seen.get(addr)

    if (err.code === 'REQUEST_TIMEOUT') {
      this._seen.set(addr, DOWN)
      for (const node of refs) this._downHint(node, req.to)
    }

    this._dec(req)
    this.errors++
    this._readMore()
  }

  _oncycle(req) {
    req.oncycle = noop
    this._slow++
    this._readMore()
  }

  _downHint(node, down) {
    // Check rate limit
    if (
      this.dht._downHintsRateLimit !== -1 &&
      this.dht._downHintsSentPerTick >= this.dht._downHintsRateLimit
    ) {
      return null
    }

    this.dht._downHintsSentPerTick++

    const state = { start: 0, end: 6, buffer: b4a.allocUnsafe(6) }
    peer.ipv4.encode(state, down)
    this.dht._request(node, false, true, DOWN_HINT, null, state.buffer, this._session, noop, noop)
  }

  _pushClosest(m) {
    this.closestReplies.push(m)
    for (let i = this.closestReplies.length - 2; i >= 0; i--) {
      const prev = this.closestReplies[i]
      const cmp = this._compare(prev.from.id, m.from.id)
      // if sorted, done!
      if (cmp < 0) break
      // if dup, splice it out (rare)
      if (cmp === 0) {
        this.closestReplies.splice(i + 1, 1)
        break
      }
      // swap and continue down
      this.closestReplies[i + 1] = prev
      this.closestReplies[i] = m
    }
    if (this.closestReplies.length > this.k) this.closestReplies.pop()
  }

  _compare(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) continue
      const t = this.target[i]
      return (t ^ a[i]) - (t ^ b[i])
    }
    return 0
  }

  _visit(to) {
    this.inflight++

    const req = this.dht._request(
      to,
      this.force,
      this.internal,
      this.command,
      this.target,
      this.value,
      this._session,
      this._onvisitbound,
      this._onerrorbound
    )
    if (req === null) {
      this.destroy(new Error('Node was destroyed'))
      return
    }
    req.retries = this.retries
    req.oncycle = this._oncyclebound
    if (this.force) req.retries = 0
  }

  _destroy(cb) {
    this.dht.stats.queries.active--
    if (this._autoDestroySession) this._session.destroy()
    cb(null)
  }
}

function autoCommit(reply, dht, query) {
  if (!reply.token) return Promise.reject(new Error('No token received for closest node'))
  return dht.request(
    {
      token: reply.token,
      target: query.target,
      command: query.command,
      value: query.value
    },
    reply.from
  )
}

function defaultMap(m) {
  return m
}

function noop() {}
module.exports = class Session {
  constructor(dht) {
    this.dht = dht
    this.inflight = []
  }

  _attach(req) {
    req.index = this.inflight.push(req) - 1
  }

  _detach(req) {
    const i = req.index
    if (i === -1) return
    req.index = -1

    if (i === this.inflight.length - 1) this.inflight.pop()
    else {
      const req = (this.inflight[i] = this.inflight.pop())
      req.index = i
    }
  }

  query({ target, command, value }, opts = {}) {
    return this.dht.query({ target, command, value }, { ...opts, session: this })
  }

  request({ token, command, target, value }, { host, port }, opts = {}) {
    return this.dht.request(
      { token, command, target, value },
      { host, port },
      { ...opts, session: this }
    )
  }

  ping({ host, port }, opts = {}) {
    return this.dht.ping({ host, port }, { ...opts, session: this })
  }

  destroy(err) {
    while (this.inflight.length) {
      const req = this.inflight[0]
      // prevent destroyed requests from contributing to congestion counts
      this.dht.io.congestion.recv()
      req.destroy(err)
    }
  }
}
{
  "name": "dht-rpc",
  "version": "6.27.0",
  "description": "Make RPC calls over a Kademlia based DHT",
  "main": "index.js",
  "files": [
    "index.js",
    "lib/*.js"
  ],
  "imports": {
    "events": {
      "bare": "bare-events",
      "default": "events"
    }
  },
  "dependencies": {
    "adaptive-timeout": "^1.0.1",
    "b4a": "^1.6.1",
    "bare-events": "^2.2.0",
    "compact-encoding": "^3.0.0",
    "compact-encoding-net": "^1.2.0",
    "fast-fifo": "^1.1.0",
    "kademlia-routing-table": "^1.0.1",
    "nat-sampler": "^1.0.1",
    "sodium-universal": "^5.0.0",
    "streamx": "^2.13.2",
    "time-ordered-set": "^2.0.0",
    "udx-native": "^1.5.3"
  },
  "devDependencies": {
    "brittle": "^3.0.0",
    "lunte": "^1.3.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0",
    "test-suspend": "^1.0.0"
  },
  "scripts": {
    "format": "prettier --write .",
    "test": "npm run test:node && npm run test:bare",
    "test:bare": "brittle-bare --coverage test.js",
    "lint": "prettier --check . && lunte",
    "test:node": "brittle-node --coverage test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/holepunchto/dht-rpc.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/holepunchto/dht-rpc/issues"
  },
  "homepage": "https://github.com/holepunchto/dht-rpc#"
}
module.exports = require('bare-events')
{
  "name": "events-universal",
  "version": "1.0.1",
  "description": "Universal wrapper for the Node.js events module",
  "exports": {
    "./package": "./package.json",
    ".": {
      "bare": "./bare.js",
      "react-native": "./react-native.js",
      "default": "./default.js"
    }
  },
  "files": [
    "index.js",
    "default.js",
    "bare.js",
    "react-native.js"
  ],
  "scripts": {
    "test": "prettier . --check"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/events-universal.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/events-universal/issues"
  },
  "homepage": "https://github.com/holepunchto/events-universal#readme",
  "dependencies": {
    "bare-events": "^2.7.0"
  },
  "devDependencies": {
    "prettier": "^3.4.2",
    "prettier-config-holepunch": "^1.0.0"
  }
}
module.exports = class FixedFIFO {
  constructor (hwm) {
    if (!(hwm > 0) || ((hwm - 1) & hwm) !== 0) throw new Error('Max size for a FixedFIFO should be a power of two')
    this.buffer = new Array(hwm)
    this.mask = hwm - 1
    this.top = 0
    this.btm = 0
    this.next = null
  }

  clear () {
    this.top = this.btm = 0
    this.next = null
    this.buffer.fill(undefined)
  }

  push (data) {
    if (this.buffer[this.top] !== undefined) return false
    this.buffer[this.top] = data
    this.top = (this.top + 1) & this.mask
    return true
  }

  shift () {
    const last = this.buffer[this.btm]
    if (last === undefined) return undefined
    this.buffer[this.btm] = undefined
    this.btm = (this.btm + 1) & this.mask
    return last
  }

  peek () {
    return this.buffer[this.btm]
  }

  isEmpty () {
    return this.buffer[this.btm] === undefined
  }
}
const FixedFIFO = require('./fixed-size')

module.exports = class FastFIFO {
  constructor (hwm) {
    this.hwm = hwm || 16
    this.head = new FixedFIFO(this.hwm)
    this.tail = this.head
    this.length = 0
  }

  clear () {
    this.head = this.tail
    this.head.clear()
    this.length = 0
  }

  push (val) {
    this.length++
    if (!this.head.push(val)) {
      const prev = this.head
      this.head = prev.next = new FixedFIFO(2 * this.head.buffer.length)
      this.head.push(val)
    }
  }

  shift () {
    if (this.length !== 0) this.length--
    const val = this.tail.shift()
    if (val === undefined && this.tail.next) {
      const next = this.tail.next
      this.tail.next = null
      this.tail = next
      return this.tail.shift()
    }

    return val
  }

  peek () {
    const val = this.tail.peek()
    if (val === undefined && this.tail.next) return this.tail.next.peek()
    return val
  }

  isEmpty () {
    return this.length === 0
  }
}
{
  "name": "fast-fifo",
  "version": "1.3.2",
  "description": "A fast fifo implementation similar to the one powering nextTick in Node.js core",
  "main": "index.js",
  "files": [
    "./index.js",
    "./fixed-size.js"
  ],
  "dependencies": {},
  "devDependencies": {
    "standard": "^17.1.0",
    "brittle": "^3.3.2"
  },
  "scripts": {
    "test": "standard && brittle test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/fast-fifo.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/fast-fifo/issues"
  },
  "homepage": "https://github.com/mafintosh/fast-fifo"
}
const sodium = require('sodium-universal')
const c = require('compact-encoding')
const b4a = require('b4a')

// https://en.wikipedia.org/wiki/Merkle_tree#Second_preimage_attack
const LEAF_TYPE = b4a.from([0])
const PARENT_TYPE = b4a.from([1])
const ROOT_TYPE = b4a.from([2])

const HYPERCORE = b4a.from('hypercore')

exports.keyPair = function (seed) {
  // key pairs might stay around for a while, so better not to use a default slab to avoid retaining it completely
  const slab = b4a.allocUnsafeSlow(
    sodium.crypto_sign_PUBLICKEYBYTES + sodium.crypto_sign_SECRETKEYBYTES
  )
  const publicKey = slab.subarray(0, sodium.crypto_sign_PUBLICKEYBYTES)
  const secretKey = slab.subarray(sodium.crypto_sign_PUBLICKEYBYTES)

  if (seed) sodium.crypto_sign_seed_keypair(publicKey, secretKey, seed)
  else sodium.crypto_sign_keypair(publicKey, secretKey)

  return {
    publicKey,
    secretKey
  }
}

exports.validateKeyPair = function (keyPair) {
  const pk = b4a.allocUnsafe(sodium.crypto_sign_PUBLICKEYBYTES)
  sodium.crypto_sign_ed25519_sk_to_pk(pk, keyPair.secretKey)
  return b4a.equals(pk, keyPair.publicKey)
}

exports.sign = function (message, secretKey) {
  // Dedicated slab for the signature, to avoid retaining unneeded mem and for security
  const signature = b4a.allocUnsafeSlow(sodium.crypto_sign_BYTES)
  sodium.crypto_sign_detached(signature, message, secretKey)
  return signature
}

exports.verify = function (message, signature, publicKey) {
  if (signature.byteLength !== sodium.crypto_sign_BYTES) return false
  if (publicKey.byteLength !== sodium.crypto_sign_PUBLICKEYBYTES) return false
  return sodium.crypto_sign_verify_detached(signature, message, publicKey)
}

exports.encrypt = function (message, publicKey) {
  const ciphertext = b4a.alloc(message.byteLength + sodium.crypto_box_SEALBYTES)
  sodium.crypto_box_seal(ciphertext, message, publicKey)
  return ciphertext
}

exports.decrypt = function (ciphertext, keyPair) {
  if (ciphertext.byteLength < sodium.crypto_box_SEALBYTES) return null

  const plaintext = b4a.alloc(ciphertext.byteLength - sodium.crypto_box_SEALBYTES)

  if (!sodium.crypto_box_seal_open(plaintext, ciphertext, keyPair.publicKey, keyPair.secretKey)) {
    return null
  }

  return plaintext
}

exports.encryptionKeyPair = function (seed) {
  const publicKey = b4a.alloc(sodium.crypto_box_PUBLICKEYBYTES)
  const secretKey = b4a.alloc(sodium.crypto_box_SECRETKEYBYTES)

  if (seed) {
    sodium.crypto_box_seed_keypair(publicKey, secretKey, seed)
  } else {
    sodium.crypto_box_keypair(publicKey, secretKey)
  }

  return {
    publicKey,
    secretKey
  }
}

exports.data = function (data) {
  const out = b4a.allocUnsafe(32)

  sodium.crypto_generichash_batch(out, [LEAF_TYPE, c.encode(c.uint64, data.byteLength), data])

  return out
}

exports.parent = function (a, b) {
  if (a.index > b.index) {
    const tmp = a
    a = b
    b = tmp
  }

  const out = b4a.allocUnsafe(32)

  sodium.crypto_generichash_batch(out, [
    PARENT_TYPE,
    c.encode(c.uint64, a.size + b.size),
    a.hash,
    b.hash
  ])

  return out
}

exports.tree = function (roots, out) {
  const buffers = new Array(3 * roots.length + 1)
  let j = 0

  buffers[j++] = ROOT_TYPE

  for (let i = 0; i < roots.length; i++) {
    const r = roots[i]
    buffers[j++] = r.hash
    buffers[j++] = c.encode(c.uint64, r.index)
    buffers[j++] = c.encode(c.uint64, r.size)
  }

  if (!out) out = b4a.allocUnsafe(32)
  sodium.crypto_generichash_batch(out, buffers)
  return out
}

exports.hash = function (data, out) {
  if (!out) out = b4a.allocUnsafe(32)
  if (!Array.isArray(data)) data = [data]

  sodium.crypto_generichash_batch(out, data)

  return out
}

exports.randomBytes = function (n) {
  const buf = b4a.allocUnsafe(n)
  sodium.randombytes_buf(buf)
  return buf
}

exports.discoveryKey = function (key) {
  if (!key || key.byteLength !== 32) throw new Error('Must pass a 32 byte buffer')
  // Discovery keys might stay around for a while, so better not to use slab memory (for better gc)
  const digest = b4a.allocUnsafeSlow(32)
  sodium.crypto_generichash(digest, HYPERCORE, key)
  return digest
}

if (sodium.sodium_free) {
  exports.free = function (secureBuf) {
    if (secureBuf.secure) sodium.sodium_free(secureBuf)
  }
} else {
  exports.free = function () {}
}

exports.namespace = function (name, count) {
  const ids = typeof count === 'number' ? range(count) : count

  // Namespaces are long-lived, so better to use a dedicated slab
  const buf = b4a.allocUnsafeSlow(32 * ids.length)

  const list = new Array(ids.length)

  // ns is ephemeral, so default slab
  const ns = b4a.allocUnsafe(33)
  sodium.crypto_generichash(ns.subarray(0, 32), typeof name === 'string' ? b4a.from(name) : name)

  for (let i = 0; i < list.length; i++) {
    list[i] = buf.subarray(32 * i, 32 * i + 32)
    ns[32] = ids[i]
    sodium.crypto_generichash(list[i], ns)
  }

  return list
}

function range(count) {
  const arr = new Array(count)
  for (let i = 0; i < count; i++) arr[i] = i
  return arr
}
{
  "name": "hypercore-crypto",
  "version": "3.7.0",
  "description": "The crypto primitives used in hypercore, extracted into a separate module",
  "main": "index.js",
  "files": [
    "index.js"
  ],
  "dependencies": {
    "b4a": "^1.6.6",
    "compact-encoding": "^3.0.0",
    "sodium-universal": "^5.0.0"
  },
  "devDependencies": {
    "brittle": "^3.5.0",
    "lunte": "^1.0.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0"
  },
  "scripts": {
    "format": "prettier --write .",
    "lint": "prettier --check . && lunte",
    "test": "npm run test:node && npm run test:bare",
    "test:node": "brittle-node test.js",
    "test:bare": "brittle-bare test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/hypercore-crypto.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/hypercore-crypto/issues"
  },
  "homepage": "https://github.com/mafintosh/hypercore-crypto"
}
const z32 = require('z32')
const b4a = require('b4a')

module.exports = {
  encode,
  decode,
  normalize,
  isValid
}

function encode (key) {
  if (!b4a.isBuffer(key)) throw new Error('Key must be a Buffer')
  if (key.byteLength !== 32) throw new Error('Key must be 32-bytes long')
  return z32.encode(key)
}

function decode (id) {
  if (b4a.isBuffer(id)) {
    if (id.byteLength !== 32) throw new Error('ID must be 32-bytes long')
    return id
  }
  if (typeof id === 'string') {
    if (id.startsWith('pear://')) id = id.slice(7).split('/')[0]
    if (id.length === 52) return z32.decode(id)
    if (id.length === 64) {
      const buf = b4a.from(id, 'hex')
      if (buf.byteLength === 32) return buf
    }
  }
  throw new Error('Invalid Hypercore key')
}

function normalize (any) {
  return encode(decode(any))
}

function isValid (any) {
  try {
    decode(any)
    return true
  } catch {
    return false
  }
}
{
  "name": "hypercore-id-encoding",
  "version": "1.3.0",
  "description": "Convert Hypercore keys to/from z-base32 or hex",
  "main": "index.js",
  "scripts": {
    "test": "standard && brittle test.js"
  },
  "files": [
    "index.js"
  ],
  "dependencies": {
    "b4a": "^1.5.3",
    "z32": "^1.0.0"
  },
  "devDependencies": {
    "brittle": "^3.1.1",
    "hypercore": "^10.0.0",
    "random-access-memory": "^6.0.0",
    "standard": "^17.1.0"
  },
  "license": "Apache-2.0",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/hypercore-id-encoding.git"
  },
  "keywords": [],
  "author": "",
  "bugs": {
    "url": "https://github.com/holepunchto/hypercore-id-encoding/issues"
  },
  "homepage": "https://github.com/holepunchto/hypercore-id-encoding#readme"
}
const c = require('compact-encoding')
const { getEncoding } = require('./spec/hyperschema')

const HyperdhtAddress = getEncoding('@hyperdht/address')

function decode(buf) {
  const addr = c.decode(HyperdhtAddress, buf)
  return addr
}

function encode(key, nodes) {
  return c.encode(HyperdhtAddress, { key, nodes })
}

module.exports = { decode, encode }
{
  "name": "hyperdht-address",
  "version": "1.1.1",
  "description": "hyperdht-address",
  "main": "index.js",
  "exports": {
    "./package": "./package.json",
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    }
  },
  "files": [
    "package.json",
    "index.js",
    "index.d.ts",
    "spec"
  ],
  "devDependencies": {
    "b4a": "^1.8.0",
    "brittle": "^3.19.0",
    "lunte": "^1.2.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0"
  },
  "scripts": {
    "format": "prettier . --write",
    "test": "prettier . --check && lunte && brittle-bare test/index.js",
    "lint": "lunte"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/holepunchto/hyperdht-address.git"
  },
  "author": "Holepunch Inc",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/hyperdht-address/issues"
  },
  "homepage": "https://github.com/holepunchto/hyperdht-address",
  "dependencies": {
    "compact-encoding": "^3.0.0",
    "hyperschema": "^1.20.1"
  }
}
// This file is autogenerated by the hyperschema compiler
// Schema Version: 2
/* eslint-disable camelcase */
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */

const { c } = require('hyperschema/runtime')

const VERSION = 2

// eslint-disable-next-line no-unused-vars
let version = VERSION

// @hyperdht/address.nodes
const encoding0_1 = c.array(c.ipv4Address)

// @hyperdht/address
const encoding0 = {
  preencode(state, m) {
    c.fixed32.preencode(state, m.key)
    state.end++ // max flag is 1 so always one byte

    if (version >= 2 && m.nodes) encoding0_1.preencode(state, m.nodes)
  },
  encode(state, m) {
    const flags = version >= 2 && m.nodes ? 1 : 0

    c.fixed32.encode(state, m.key)
    c.uint.encode(state, flags)

    if (version >= 2 && m.nodes) encoding0_1.encode(state, m.nodes)
  },
  decode(state) {
    const r0 = c.fixed32.decode(state)
    const flags = state.start < state.end ? c.uint.decode(state) : 0

    return {
      key: r0,
      nodes: version >= 2 && (flags & 1) !== 0 ? encoding0_1.decode(state) : null
    }
  }
}

function setVersion(v) {
  version = v
}

function encode(name, value, v = VERSION) {
  version = v
  return c.encode(getEncoding(name), value)
}

function decode(name, buffer, v = VERSION) {
  version = v
  return c.decode(getEncoding(name), buffer)
}

function getEnum(name) {
  switch (name) {
    default:
      throw new Error('Enum not found ' + name)
  }
}

function getEncoding(name) {
  switch (name) {
    case '@hyperdht/address':
      return encoding0
    default:
      throw new Error('Encoder not found ' + name)
  }
}

function getStruct(name, v = VERSION) {
  const enc = getEncoding(name)
  return {
    preencode(state, m) {
      version = v
      enc.preencode(state, m)
    },
    encode(state, m) {
      version = v
      enc.encode(state, m)
    },
    decode(state) {
      version = v
      return enc.decode(state)
    }
  }
}

const resolveStruct = getStruct // compat

module.exports = {
  resolveStruct,
  getStruct,
  getEnum,
  getEncoding,
  encode,
  decode,
  setVersion,
  version
}
const DHT = require('dht-rpc')
const sodium = require('sodium-universal')
const c = require('compact-encoding')
const b4a = require('b4a')
const safetyCatch = require('safety-catch')
const m = require('./lib/messages')
const SocketPool = require('./lib/socket-pool')
const Persistent = require('./lib/persistent')
const Router = require('./lib/router')
const Cache = require('xache')
const Server = require('./lib/server')
const connect = require('./lib/connect')
const { FIREWALL, BOOTSTRAP_NODES, COMMANDS } = require('./lib/constants')
const { hash, createKeyPair } = require('./lib/crypto')
const RawStreamSet = require('./lib/raw-stream-set')
const ConnectionPool = require('./lib/connection-pool')
const { STREAM_NOT_CONNECTED } = require('./lib/errors')

const DEFAULTS = {
  ...DHT.DEFAULTS,
  connectionKeepAlive: 5000,
  randomPunchInterval: 20000
}

class HyperDHT extends DHT {
  constructor(opts = {}) {
    const port = opts.port || 49737
    const bootstrap = opts.bootstrap || BOOTSTRAP_NODES
    const nodes = opts.nodes || []

    super({ ...opts, port, bootstrap, nodes, filterNode })

    const { router, relayAddresses, persistent } = defaultCacheOpts(opts)

    this.defaultKeyPair = opts.keyPair || createKeyPair(opts.seed)
    this.listening = new Set()
    this.connectionKeepAlive =
      opts.connectionKeepAlive === false
        ? 0
        : opts.connectionKeepAlive || DEFAULTS.connectionKeepAlive

    // stats is inherited from dht-rpc so fwd the ones from there
    this.stats = {
      punches: { consistent: 0, random: 0, open: 0 },
      relaying: { attempts: 0, successes: 0, aborts: 0 },
      ...this.stats
    }
    this.rawStreams = new RawStreamSet(this)
    this.plugins = new Map()

    this._router = new Router(this, router)
    this._socketPool = new SocketPool(this, opts.host || '0.0.0.0')
    this._persistent = null
    this._validatedLocalAddresses = new Map()
    this._relayAddressesCache = new Cache(relayAddresses)

    this._deferRandomPunch = !!opts.deferRandomPunch
    this._lastRandomPunch = this._deferRandomPunch ? Date.now() : 0
    this._connectable = true
    this._randomPunchInterval = opts.randomPunchInterval || DEFAULTS.randomPunchInterval // min 20s between random punches...
    this._randomPunches = 0
    this._randomPunchLimit = 1 // set to one for extra safety for now

    this.once('persistent', () => {
      this._persistent = new Persistent(this, persistent)
      for (const plugin of this.plugins.values()) plugin.onpersistent()
    })

    this.on('network-change', () => {
      for (const server of this.listening) server.refresh()
    })

    this.on('network-update', () => {
      if (!this.online) return
      for (const server of this.listening) server.notifyOnline()
    })
  }

  static DEFAULTS = DEFAULTS

  connect(remotePublicKey, opts) {
    return connect(this, remotePublicKey, opts)
  }

  createServer(opts, onconnection) {
    if (typeof opts === 'function') return this.createServer({}, opts)
    if (opts && opts.onconnection) onconnection = opts.onconnection
    const s = new Server(this, opts)
    if (onconnection) s.on('connection', onconnection)
    return s
  }

  pool() {
    return new ConnectionPool(this)
  }

  async resume({ log = noop } = {}) {
    if (this._deferRandomPunch) this._lastRandomPunch = Date.now()
    await super.resume({ log })
    const resuming = []
    for (const server of this.listening) resuming.push(server.resume())
    log('Resuming hyperdht servers')
    await Promise.allSettled(resuming)
    log('Done, hyperdht fully resumed')
  }

  async suspend({ log = noop } = {}) {
    this._connectable = false // just so nothing gets connected during suspension
    const suspending = []
    for (const server of this.listening) suspending.push(server.suspend())
    log('Suspending all hyperdht servers')
    await Promise.allSettled(suspending)
    log('Done, clearing all raw streams')
    await this.rawStreams.clear()
    log('Done, suspending dht-rpc')
    await super.suspend({ log })
    log('Done, clearing raw streams again')
    await this.rawStreams.clear()
    log('Done, hyperdht fully suspended')
    this._connectable = true
  }

  async destroy({ force = false } = {}) {
    if (!force) {
      const closing = []
      for (const server of this.listening) closing.push(server.close())
      await Promise.allSettled(closing)
    }
    this._router.destroy()
    if (this._persistent) this._persistent.destroy()
    for (const plugin of this.plugins.values()) plugin.destroy()
    await this.rawStreams.clear()
    await this._socketPool.destroy()
    await super.destroy()
  }

  async validateLocalAddresses(addresses) {
    const list = []
    const socks = []
    const waiting = []

    for (const addr of addresses) {
      const { host } = addr

      if (this._validatedLocalAddresses.has(host)) {
        if (await this._validatedLocalAddresses.get(host)) {
          list.push(addr)
        }
        continue
      }

      const sock = this.udx.createSocket()
      try {
        sock.bind(0, host)
      } catch {
        this._validatedLocalAddresses.set(host, Promise.resolve(false))
        continue
      }

      socks.push(sock)

      // semi terrible heuristic until we proper fix local connections by racing them to the remote...
      const promise = new Promise((resolve) => {
        sock.on('message', () => resolve(true))
        setTimeout(() => resolve(false), 500)
        sock.trySend(b4a.alloc(1), sock.address().port, addr.host)
      })

      this._validatedLocalAddresses.set(host, promise)
      waiting.push(addr)
    }

    for (const addr of waiting) {
      const { host } = addr
      if (this._validatedLocalAddresses.has(host)) {
        if (await this._validatedLocalAddresses.get(host)) {
          list.push(addr)
        }
        continue
      }
    }

    for (const sock of socks) await sock.close()

    return list
  }

  findPeer(publicKey, opts = {}) {
    const target = opts.hash === false ? publicKey : hash(publicKey)
    opts = { ...opts, map: mapFindPeer }
    return this.query({ target, command: COMMANDS.FIND_PEER, value: null }, opts)
  }

  lookup(target, opts = {}) {
    opts = { ...opts, map: mapLookup }
    return this.query({ target, command: COMMANDS.LOOKUP, value: null }, opts)
  }

  lookupAndUnannounce(target, keyPair, opts = {}) {
    const unannounces = []
    const dht = this
    const userCommit = opts.commit || noop
    const signUnannounce = opts.signUnannounce || Persistent.signUnannounce

    if (this._persistent !== null) {
      // unlink self
      this._persistent.unannounce(target, keyPair.publicKey)
    }

    opts = { ...opts, map, commit }
    return this.query({ target, command: COMMANDS.LOOKUP, value: null }, opts)

    async function commit(reply, dht, query) {
      await Promise.all(unannounces) // can never fail, caught below
      return userCommit(reply, dht, query)
    }

    function map(reply) {
      const data = mapLookup(reply)

      if (!data || !data.token) return data

      let found = data.peers.length >= 20
      for (let i = 0; !found && i < data.peers.length; i++) {
        found = b4a.equals(data.peers[i].publicKey, keyPair.publicKey)
      }

      if (!found) return data

      if (!data.from.id) return data

      unannounces.push(
        dht
          ._requestUnannounce(keyPair, dht, target, data.token, data.from, signUnannounce)
          .catch(safetyCatch)
      )

      return data
    }
  }

  unannounce(target, keyPair, opts = {}) {
    return this.lookupAndUnannounce(target, keyPair, opts).finished()
  }

  announce(target, keyPair, relayAddresses, opts = {}) {
    const signAnnounce = opts.signAnnounce || Persistent.signAnnounce
    const bump = opts.bump || 0

    opts = { ...opts, commit }

    return opts.clear ? this.lookupAndUnannounce(target, keyPair, opts) : this.lookup(target, opts)

    function commit(reply, dht) {
      return dht._requestAnnounce(
        keyPair,
        dht,
        target,
        reply.token,
        reply.from,
        relayAddresses,
        signAnnounce,
        bump
      )
    }
  }

  async immutableGet(target, opts = {}) {
    opts = { ...opts, map: mapImmutable }

    const query = this.query({ target, command: COMMANDS.IMMUTABLE_GET, value: null }, opts)
    const check = b4a.allocUnsafe(32)

    for await (const node of query) {
      const { value } = node
      sodium.crypto_generichash(check, value)
      if (b4a.equals(check, target)) return node
    }

    return null
  }

  async immutablePut(value, opts = {}) {
    const target = b4a.allocUnsafe(32)
    sodium.crypto_generichash(target, value)

    opts = {
      ...opts,
      map: mapImmutable,
      commit(reply, dht) {
        return dht.request(
          { token: reply.token, target, command: COMMANDS.IMMUTABLE_PUT, value },
          reply.from
        )
      }
    }

    const query = this.query({ target, command: COMMANDS.IMMUTABLE_GET, value: null }, opts)
    await query.finished()

    return { hash: target, closestNodes: query.closestNodes }
  }

  async mutableGet(publicKey, opts = {}) {
    let refresh = opts.refresh || null
    let signed = null
    let result = null

    opts = { ...opts, map: mapMutable, commit: refresh ? commit : null }

    const target = b4a.allocUnsafe(32)
    sodium.crypto_generichash(target, publicKey)

    const userSeq = opts.seq || 0
    const query = this.query(
      { target, command: COMMANDS.MUTABLE_GET, value: c.encode(c.uint, userSeq) },
      opts
    )
    const latest = opts.latest !== false

    for await (const node of query) {
      if (result && node.seq <= result.seq) continue
      if (
        node.seq < userSeq ||
        !Persistent.verifyMutable(node.signature, node.seq, node.value, publicKey)
      )
        continue
      if (!latest) return node
      if (!result || node.seq > result.seq) result = node
    }

    return result

    function commit(reply, dht) {
      if (!signed && result && refresh) {
        if (refresh(result)) {
          signed = c.encode(m.mutablePutRequest, {
            publicKey,
            seq: result.seq,
            value: result.value,
            signature: result.signature
          })
        } else {
          refresh = null
        }
      }

      return signed
        ? dht.request(
            { token: reply.token, target, command: COMMANDS.MUTABLE_PUT, value: signed },
            reply.from
          )
        : Promise.resolve(null)
    }
  }

  async mutablePut(keyPair, value, opts = {}) {
    const signMutable = opts.signMutable || Persistent.signMutable

    const target = b4a.allocUnsafe(32)
    sodium.crypto_generichash(target, keyPair.publicKey)

    const seq = opts.seq || 0
    const signature = await signMutable(seq, value, keyPair)

    const signed = c.encode(m.mutablePutRequest, {
      publicKey: keyPair.publicKey,
      seq,
      value,
      signature
    })

    opts = {
      ...opts,
      map: mapMutable,
      commit(reply, dht) {
        return dht.request(
          { token: reply.token, target, command: COMMANDS.MUTABLE_PUT, value: signed },
          reply.from
        )
      }
    }

    // use seq = 0, for the query part here, as we don't care about the actual values
    const query = this.query(
      { target, command: COMMANDS.MUTABLE_GET, value: c.encode(c.uint, 0) },
      opts
    )
    await query.finished()

    return { publicKey: keyPair.publicKey, closestNodes: query.closestNodes, seq, signature }
  }

  onrequest(req) {
    switch (req.command) {
      case COMMANDS.PEER_HANDSHAKE: {
        this._router.onpeerhandshake(req)
        return true
      }
      case COMMANDS.PEER_HOLEPUNCH: {
        this._router.onpeerholepunch(req)
        return true
      }
    }

    if (this._persistent === null || this.id === null) return false

    switch (req.command) {
      case COMMANDS.FIND_PEER: {
        this._persistent.onfindpeer(req)
        return true
      }
      case COMMANDS.LOOKUP: {
        this._persistent.onlookup(req)
        return true
      }
      case COMMANDS.ANNOUNCE: {
        this._persistent.onannounce(req)
        return true
      }
      case COMMANDS.UNANNOUNCE: {
        this._persistent.onunannounce(req)
        return true
      }
      case COMMANDS.MUTABLE_PUT: {
        this._persistent.onmutableput(req)
        return true
      }
      case COMMANDS.MUTABLE_GET: {
        this._persistent.onmutableget(req)
        return true
      }
      case COMMANDS.IMMUTABLE_PUT: {
        this._persistent.onimmutableput(req)
        return true
      }
      case COMMANDS.IMMUTABLE_GET: {
        this._persistent.onimmutableget(req)
        return true
      }
      case COMMANDS.PLUGIN: {
        this._persistent.onplugin(req)
        return true
      }
    }

    return false
  }

  static keyPair(seed) {
    return createKeyPair(seed)
  }

  static hash(data) {
    return hash(data)
  }

  static connectRawStream(encryptedStream, rawStream, remoteId) {
    const stream = encryptedStream.rawStream

    if (!stream.connected) throw STREAM_NOT_CONNECTED()

    rawStream.connect(stream.socket, remoteId, stream.remotePort, stream.remoteHost)
  }

  createRawStream(opts) {
    return this.rawStreams.add(opts)
  }

  async _requestAnnounce(keyPair, dht, target, token, from, relayAddresses, sign, bump) {
    const ann = {
      peer: {
        publicKey: keyPair.publicKey,
        relayAddresses: relayAddresses || []
      },
      refresh: null,
      signature: null,
      bump
    }

    ann.signature = await sign(target, token, from.id, ann, keyPair)

    const value = c.encode(m.announce, ann)

    return dht.request(
      {
        token,
        target,
        command: COMMANDS.ANNOUNCE,
        value
      },
      from
    )
  }

  async _requestUnannounce(keyPair, dht, target, token, from, sign) {
    const unann = {
      peer: {
        publicKey: keyPair.publicKey,
        relayAddresses: []
      },
      signature: null
    }

    unann.signature = await sign(target, token, from.id, unann, keyPair)

    const value = c.encode(m.announce, unann)

    return dht.request(
      {
        token,
        target,
        command: COMMANDS.UNANNOUNCE,
        value
      },
      from
    )
  }

  register(name, plugin) {
    this.plugins.set(name, plugin)
    plugin.onregister(this)
  }
}

HyperDHT.BOOTSTRAP = BOOTSTRAP_NODES
HyperDHT.FIREWALL = FIREWALL

module.exports = HyperDHT

function mapLookup(node) {
  if (!node.value) return null

  try {
    const l = c.decode(m.lookupRawReply, node.value)

    return {
      token: node.token,
      from: node.from,
      to: node.to,
      peers: l.peers,
      bump: l.bump
    }
  } catch {
    return null
  }
}

function mapFindPeer(node) {
  if (!node.value) return null

  try {
    return {
      token: node.token,
      from: node.from,
      to: node.to,
      peer: c.decode(m.peer, node.value)
    }
  } catch {
    return null
  }
}

function mapImmutable(node) {
  if (!node.value) return null

  return {
    token: node.token,
    from: node.from,
    to: node.to,
    value: node.value
  }
}

function mapMutable(node) {
  if (!node.value) return null

  try {
    const { seq, value, signature } = c.decode(m.mutableGetResponse, node.value)

    return {
      token: node.token,
      from: node.from,
      to: node.to,
      seq,
      value,
      signature
    }
  } catch {
    return null
  }
}

function noop() {}

function filterNode(node) {
  // always skip these testnet nodes that got mixed in by accident, until they get updated
  return (
    !(node.port === 49738 && (node.host === '134.209.28.98' || node.host === '167.99.142.185')) &&
    !(node.port === 9400 && node.host === '35.233.47.252') &&
    !(node.host === '150.136.142.116')
  )
}

const defaultMaxSize = 65536
const defaultMaxAge = 20 * 60 * 1000 // 20 minutes

function defaultCacheOpts(opts) {
  const maxSize = opts.maxSize || defaultMaxSize
  const maxAge = opts.maxAge || defaultMaxAge

  return {
    router: {
      forwards: { maxSize, maxAge }
    },
    relayAddresses: { maxSize: Math.min(maxSize, 512), maxAge: 0 },
    persistent: {
      records: { maxSize, maxAge },
      refreshes: { maxSize, maxAge },
      mutables: {
        maxSize: (maxSize / 2) | 0,
        maxAge: opts.maxAge || 48 * 60 * 60 * 1000 // 48 hours
      },
      immutables: {
        maxSize: (maxSize / 2) | 0,
        maxAge: opts.maxAge || 48 * 60 * 60 * 1000 // 48 hours
      },
      bumps: { maxSize, maxAge }
    }
  }
}
const safetyCatch = require('safety-catch')
const c = require('compact-encoding')
const Signal = require('signal-promise')
const { encodeUnslab } = require('./encode')
const Sleeper = require('./sleeper')
const m = require('./messages')
const Persistent = require('./persistent')
const { COMMANDS } = require('./constants')

const MIN_ACTIVE = 3

module.exports = class Announcer {
  constructor(dht, keyPair, target, opts = {}) {
    this.dht = dht
    this.keyPair = keyPair
    this.target = target
    this.relays = []
    this.relayAddresses = []
    this.stopped = false
    this.suspended = false
    this.record = encodeUnslab(m.peer, { publicKey: keyPair.publicKey, relayAddresses: [] })
    this.online = new Signal()

    this._refreshing = false
    this._closestNodes = null
    this._active = null
    this._sleeper = new Sleeper()
    this._resumed = new Signal()
    this._signAnnounce = opts.signAnnounce || Persistent.signAnnounce
    this._signUnannounce = opts.signUnannounce || Persistent.signUnannounce
    this._updating = null
    this._activeQuery = null
    this._unannouncing = null

    this._serverRelays = [new Map(), new Map(), new Map()]
  }

  isRelay(addr) {
    const id = addr.host + ':' + addr.port
    const [a, b, c] = this._serverRelays
    return a.has(id) || b.has(id) || c.has(id)
  }

  async suspend({ log = noop } = {}) {
    if (this.suspended) return
    this.suspended = true

    log('Suspending announcer')

    // Suspend has its own sleep logic
    // so we don't want to hang on this one
    this.online.notify()

    if (this._activeQuery) this._activeQuery.destroy()

    this._sleeper.resume()
    if (this._updating) await this._updating
    log('Suspending announcer (post update)')

    if (this.suspended === false || this.stopped) return

    log('Suspending announcer (pre unannounce)')
    await this._unannounceCurrent()
    log('Suspending announcer (post unannounce)')
  }

  resume() {
    if (!this.suspended) return
    this.suspended = false

    this.refresh()
    this._sleeper.resume()
    this._resumed.notify()
  }

  refresh() {
    if (this.stopped) return
    this._refreshing = true
  }

  async start() {
    if (this.stopped) return
    this._active = this._runUpdate()
    await this._active
    if (this.stopped) return
    this._active = this._background()
  }

  async stop() {
    this.stopped = true
    this.online.notify() // Break out of the _background loop if we're offline
    this._sleeper.resume()
    this._resumed.notify()
    await this._active
    await this._unannounceCurrent()
  }

  async _unannounceCurrent() {
    while (this._unannouncing !== null) await this._unannouncing
    const un = (this._unannouncing = this._unannounceAll(this._serverRelays[2].values()))
    await this._unannouncing
    if (un === this._unannouncing) this._unannouncing = null
  }

  async _background() {
    while (!this.dht.destroyed && !this.stopped) {
      try {
        this._refreshing = false

        // ~5min +-
        for (let i = 0; i < 100 && !this.stopped && !this._refreshing && !this.suspended; i++) {
          const pings = []

          for (const node of this._serverRelays[2].values()) {
            pings.push(this.dht.ping(node))
          }

          const active = await resolved(pings)
          if (active < Math.min(pings.length, MIN_ACTIVE)) {
            this.refresh() // we lost too many relay nodes, retry all
          }

          if (this.stopped) return

          if (!this.suspended && !this._refreshing) await this._sleeper.pause(3000)
        }

        while (!this.stopped && this.suspended) await this._resumed.wait()

        if (!this.stopped) await this._runUpdate()

        while (!this.dht.online && !this.stopped && !this.suspended) {
          // Being offline can make _background repeat very quickly
          // So wait until we're back online
          await this.online.wait()
        }
      } catch (err) {
        safetyCatch(err)
      }
    }
  }

  async _runUpdate() {
    this._updating = this._update()
    await this._updating
    this._updating = null
  }

  async _update() {
    while (this._unannouncing) await this._unannouncing

    this._cycle()

    const q = (this._activeQuery = this.dht.findPeer(this.target, {
      hash: false,
      nodes: this._closestNodes
    }))

    try {
      await q.finished()
    } catch {
      // ignore failures...
    }

    this._activeQuery = null

    if (this.stopped || this.suspended) return

    const ann = []
    const replies = pickBest(q.closestReplies)

    const relays = []
    const relayAddresses = []

    if (!this.dht.firewalled) {
      const addr = this.dht.remoteAddress()
      if (addr) relayAddresses.push(addr)
    }

    for (const msg of replies) {
      ann.push(this._commit(msg, relays, relayAddresses))
    }

    await Promise.allSettled(ann)
    if (this.stopped || this.suspended) return

    this._closestNodes = q.closestNodes
    this.relays = relays
    this.relayAddresses = relayAddresses

    const removed = []
    for (const [key, value] of this._serverRelays[1]) {
      if (!this._serverRelays[2].has(key)) removed.push(value)
    }

    await this._unannounceAll(removed)
  }

  _unannounceAll(relays) {
    const unann = []
    for (const r of relays) unann.push(this._unannounce(r))
    return Promise.allSettled(unann)
  }

  async _unannounce(to) {
    const unann = {
      peer: {
        publicKey: this.keyPair.publicKey,
        relayAddresses: []
      },
      refresh: null,
      signature: null
    }

    const { from, token, value } = await this.dht.request(
      {
        token: null,
        command: COMMANDS.FIND_PEER,
        target: this.target,
        value: null
      },
      to
    )

    if (!token || !from.id || !value) return

    unann.signature = await this._signUnannounce(this.target, token, from.id, unann, this.keyPair)

    await this.dht.request(
      {
        token,
        command: COMMANDS.UNANNOUNCE,
        target: this.target,
        value: c.encode(m.announce, unann)
      },
      to
    )
  }

  async _commit(msg, relays, relayAddresses) {
    const ann = {
      peer: {
        publicKey: this.keyPair.publicKey,
        relayAddresses: []
      },
      refresh: null,
      signature: null
    }

    ann.signature = await this._signAnnounce(this.target, msg.token, msg.from.id, ann, this.keyPair)

    const res = await this.dht.request(
      {
        token: msg.token,
        command: COMMANDS.ANNOUNCE,
        target: this.target,
        value: c.encode(m.announce, ann)
      },
      msg.from
    )

    if (res.error !== 0) return

    if (relayAddresses.length < 3) relayAddresses.push({ host: msg.from.host, port: msg.from.port })
    relays.push({ relayAddress: msg.from, peerAddress: msg.to })

    this._serverRelays[2].set(msg.from.host + ':' + msg.from.port, msg.from)
  }

  _cycle() {
    const tmp = this._serverRelays[0]
    this._serverRelays[0] = this._serverRelays[1]
    this._serverRelays[1] = this._serverRelays[2]
    this._serverRelays[2] = tmp
    tmp.clear()
  }
}

function resolved(ps) {
  let replied = 0
  let ticks = ps.length + 1

  return new Promise((resolve) => {
    for (const p of ps) p.then(push, tick)
    tick()

    function push(v) {
      replied++
      tick()
    }

    function tick() {
      if (--ticks === 0) resolve(replied)
    }
  })
}

function pickBest(replies) {
  // TODO: pick the ones closest to us RTT wise
  return replies.slice(0, 3)
}

function noop() {}
const NoiseSecretStream = require('@hyperswarm/secret-stream')
const b4a = require('b4a')
const relay = require('blind-relay')
const { isReserved, isBogon } = require('bogon')
const safetyCatch = require('safety-catch')
const unslab = require('unslab')
const Semaphore = require('./semaphore')
const NoiseWrap = require('./noise-wrap')
const SecurePayload = require('./secure-payload')
const Holepuncher = require('./holepuncher')
const Sleeper = require('./sleeper')
const {
  clearRelayTimeout,
  confirmDirectUpgrade,
  destroyRelayConnection
} = require('./relay-connection')
const { FIREWALL, ERROR } = require('./constants')
const { unslabbedHash } = require('./crypto')
const {
  CANNOT_HOLEPUNCH,
  HANDSHAKE_INVALID,
  HOLEPUNCH_ABORTED,
  HOLEPUNCH_INVALID,
  HOLEPUNCH_PROBE_TIMEOUT,
  HOLEPUNCH_DOUBLE_RANDOMIZED_NATS,
  PEER_CONNECTION_FAILED,
  PEER_NOT_FOUND,
  REMOTE_ABORTED,
  REMOTE_NOT_HOLEPUNCHABLE,
  REMOTE_NOT_HOLEPUNCHING,
  SERVER_ERROR,
  SERVER_INCOMPATIBLE,
  RELAY_ABORTED,
  SUSPENDED
} = require('./errors')
const { decode } = require('hypercore-id-encoding')
const HyperDHTAddress = require('hyperdht-address')

module.exports = function connect(dht, publicKey, opts = {}) {
  const pool = opts.pool || null

  const { key, nodes: providedNodes } = HyperDHTAddress.decode(
    b4a.isBuffer(publicKey) ? publicKey : decode(publicKey)
  )
  publicKey = key

  if (pool && pool.has(publicKey)) return pool.get(publicKey)

  publicKey = unslab(publicKey)

  opts.relayAddresses = opts.relayAddresses || providedNodes || []
  const keyPair = opts.keyPair || dht.defaultKeyPair
  const relayThrough = selectRelay(opts.relayThrough || null)
  const encryptedSocket = (opts.createSecretStream || defaultCreateSecretStream)(true, null, {
    publicKey: keyPair.publicKey,
    remotePublicKey: publicKey,
    autoStart: false,
    keepAlive: dht.connectionKeepAlive
  })

  // in case a socket is made during suspended state, destroy it immediately
  if (dht.suspended || !dht._connectable) {
    encryptedSocket.destroy(SUSPENDED())
    return encryptedSocket
  }

  if (pool) pool._attachStream(encryptedSocket, false)

  const id = b4a.toString(publicKey, 'hex')
  const c = {
    id,
    dht,
    session: dht.session(),
    relayAddresses: opts.relayAddresses,
    remoteRelayAddresses: [],
    pool,
    round: 0,
    target: unslabbedHash(publicKey),
    remotePublicKey: publicKey,
    reusableSocket: !!opts.reusableSocket,
    handshake: (opts.createHandshake || defaultCreateHandshake)(keyPair, publicKey),
    request: null,
    requesting: false,
    lan: opts.localConnection !== false,
    firewall: FIREWALL.UNKNOWN,
    rawStream: dht.createRawStream({ framed: true, firewall }),
    connect: null,
    query: null,
    puncher: null,
    payload: null,
    passiveConnectTimeout: null,
    serverSocket: null,
    serverAddress: null,
    onsocket: null,
    sleeper: new Sleeper(),
    encryptedSocket,

    // Relay state
    relayTimeout: null,
    relayThrough,
    relayToken: relayThrough ? relay.token() : null,
    relaySocket: null,
    relayClient: null,
    relayPaired: false,
    validUpgrade: true,
    relayKeepAlive: opts.relayKeepAlive || 5000
  }

  // If the raw stream receives an error signal pre connect (ie from the firewall hook), make sure
  // to forward that to the encrypted socket for proper teardown
  c.rawStream.on('error', autoDestroy)
  c.rawStream.once('connect', () => {
    c.rawStream.removeListener('error', autoDestroy)
  })

  encryptedSocket.on('close', function () {
    if (c.passiveConnectTimeout) clearPassiveConnectTimeout(c)
    if (c.query) c.query.destroy()
    if (c.puncher) c.puncher.destroy()
    if (c.rawStream) c.rawStream.destroy()
    c.session.destroy()
    c.sleeper.resume()
  })

  // Safe to run in the background - never throws
  if (dht.suspended) encryptedSocket.destroy(SUSPENDED())
  else connectAndHolepunch(c, opts)

  return encryptedSocket

  function autoDestroy(err) {
    maybeDestroyEncryptedSocket(c, err)
  }

  function firewall(socket, port, host) {
    // Check if the traffic originated from the socket on which we're expecting relay traffic. If so,
    // we haven't hole punched yet and the other side is just sending us traffic through the relay.
    if (c.relaySocket && isRelay(c.relaySocket, socket, port, host)) {
      c.validUpgrade = false
      return false
    }

    c.validUpgrade = true
    if (c.onsocket) {
      c.onsocket(socket, port, host)
    } else {
      c.serverSocket = socket
      c.serverAddress = { port, host }
    }
    return false
  }
}

function isDone(c) {
  // we are destroying or the puncher is connected - done
  if (c.encryptedSocket.destroying || !!(c.puncher && c.puncher.connected)) {
    return true
  }
  // not destroying, but no raw stream - def not done
  if (c.encryptedSocket.rawStream === null) {
    return false
  }
  // we are relayed, but the puncher is not done yet
  if (c.relaySocket && !!(c.puncher && !c.puncher.connected && !c.puncher.destroyed)) {
    return false
  }
  // we are done
  return true
}

async function retryRoute(c, route) {
  const ref = c.dht._socketPool.lookup(route.socket)

  if (!ref) {
    if (route.socket === c.dht.socket) {
      await connectThroughNode(c, route.address, c.dht.socket)
    }
    return
  }

  ref.active()

  try {
    await connectThroughNode(c, route.address, route.socket)
  } catch {
    // if error, just ignore, and continue through the existing strat
  }

  ref.inactive()
}

async function connectAndHolepunch(c, opts) {
  const route = c.reusableSocket ? c.dht._socketPool.routes.get(c.remotePublicKey) : null

  if (route) {
    await retryRoute(c, route)
    if (isDone(c)) return
  }

  await findAndConnect(c, opts)
  if (isDone(c)) return

  if (!c.connect) {
    // TODO: just a quick fix for now, should retry prob
    maybeDestroyEncryptedSocket(c, HANDSHAKE_INVALID())
    return
  }

  await holepunch(c, opts)
}

function getFirstRemoteAddress(addrs, serverAddress) {
  for (const addr of addrs) {
    if (isBogon(addr.host)) continue
    return addr
  }

  return serverAddress
}

async function holepunch(c, opts) {
  let { relayAddress, serverAddress, clientAddress, payload } = c.connect

  const remoteHolepunchable = !!(payload.holepunch && payload.holepunch.relays.length)
  const relayed = diffAddress(serverAddress, relayAddress)

  if (payload.firewall === FIREWALL.OPEN || (relayed && !remoteHolepunchable)) {
    const addr = getFirstRemoteAddress(payload.addresses4, serverAddress)
    if (addr) {
      const socket = c.dht.socket
      c.dht.stats.punches.open++
      c.onsocket(socket, addr.port, addr.host)
      return
    }
    // TODO: check all addresses also obvs
  }

  const onabort = () => {
    c.session.destroy()
    maybeDestroyEncryptedSocket(c, HOLEPUNCH_ABORTED())
  }

  if (c.firewall === FIREWALL.OPEN) {
    c.passiveConnectTimeout = setTimeout(onabort, 10000)
    return
  }

  // Race the LAN shortcut with normal holepunch when possible. A blocked LAN ping
  // should not abort a connection that can still holepunch. If the remote is not
  // holepunchable, the LAN ping is the only remaining path.
  if (c.lan && relayed && clientAddress.host === serverAddress.host) {
    const serverAddresses = payload.addresses4.filter(onlyNonReserved)

    if (serverAddresses.length > 0) {
      const myAddresses = Holepuncher.localAddresses(c.dht.io.serverSocket)
      const addr = Holepuncher.matchAddress(myAddresses, serverAddresses) || serverAddresses[0]

      const socket = c.dht.io.serverSocket
      c.dht.ping(addr).then(onlanconnect, onlanerror)
      if (!remoteHolepunchable) return

      function onlanconnect() {
        // LAN and holepunch completions both converge through onsocket,
        // which claims c.rawStream once and ignores later winners.
        if (isDone(c)) return
        c.onsocket(socket, addr.port, addr.host)
      }

      function onlanerror() {
        if (!remoteHolepunchable) {
          maybeDestroyEncryptedSocket(c, HOLEPUNCH_ABORTED())
        }
      }
    }
  }

  if (!remoteHolepunchable) {
    maybeDestroyEncryptedSocket(c, CANNOT_HOLEPUNCH())
    return
  }

  c.puncher = new Holepuncher(c.dht, c.session, true, payload.firewall)

  c.puncher.onconnect = c.onsocket
  c.puncher.onabort = onabort

  const serverRelay = pickServerRelay(payload.holepunch.relays, relayAddress)

  // Begin holepunching!

  let probe
  try {
    probe = await probeRound(c, opts.fastOpen === false ? null : serverAddress, serverRelay, true)
  } catch (err) {
    destroyPuncher(c)
    // TODO: we should retry here with some of the other relays, bail for now
    maybeDestroyEncryptedSocket(c, err)
    return
  }

  if (isDone(c) || !probe) return
  const { token, peerAddress } = probe

  // If the relay the server picked is the same as the relay the client picked,
  // then we can use the peerAddress that round one indicates the server wants to use.
  // This shaves off a roundtrip if the server chose to reroll its socket due to some NAT
  // issue with the first one it picked (ie mobile nat inconsistencies...).
  // If the relays were different, then the server would not have a UDP session open on this address
  // to the client relay, which round2 uses.
  if (
    !diffAddress(serverRelay.relayAddress, relayAddress) &&
    diffAddress(serverAddress, peerAddress)
  ) {
    serverAddress = peerAddress
    await c.puncher.openSession(serverAddress)
    if (isDone(c)) return
  }

  // TODO: still continue here if a local connection might work, but then do not holepunch...
  if (
    opts.holepunch &&
    !opts.holepunch(
      c.puncher.remoteFirewall,
      c.puncher.nat.firewall,
      c.puncher.remoteAddresses,
      c.puncher.nat.addresses
    )
  ) {
    await abort(c, serverRelay, HOLEPUNCH_ABORTED('Client aborted holepunch'))
    return
  }

  try {
    await roundPunch(c, serverAddress, token, relayAddress, serverRelay, false)
  } catch (err) {
    destroyPuncher(c)
    // TODO: retry with another relay?
    maybeDestroyEncryptedSocket(c, err)
  }
}

async function connectThroughNodes(c, addresses, socket) {
  for (const address of addresses) {
    if (isDone(c) || c.connect) return

    c.remoteRelayAddresses.push(address)
    await connectThroughNode(c, address, socket)
  }
}

async function findAndConnect(c, opts) {
  let attempts = 0
  let relayAddresses =
    opts.relayAddresses && opts.relayAddresses.length ? opts.relayAddresses : null

  if (!relayAddresses) {
    const cachedRelayAddresses = c.dht._relayAddressesCache.get(c.id)
    if (cachedRelayAddresses) relayAddresses = cachedRelayAddresses
  }

  if (c.dht._persistent) {
    // check if we know the route ourself...
    const route = c.dht._router.get(c.target)
    if (route && route.relay !== null) {
      relayAddresses = [{ host: route.relay.host, port: route.relay.port }]
    }
  }

  // 2 is how many parallel connect attempts we want to do, we can make this configurable
  const preConnect = relayAddresses !== null && relayAddresses.length > 0
  const sem = new Semaphore(preConnect ? 3 : 2)
  const signal = sem.signal.bind(sem)
  const tries = relayAddresses !== null ? 2 : 1

  if (preConnect) {
    await sem.wait()
    connectThroughNodes(c, relayAddresses, null).then(signal, signal)
  }

  try {
    for (let i = 0; i < tries && !isDone(c) && !c.connect; i++) {
      c.query = c.dht.findPeer(c.target, {
        hash: false,
        session: c.session,
        nodes: relayAddresses,
        retries: 3
      })

      for await (const data of c.query) {
        await sem.wait()
        if (isDone(c)) return

        if (c.connect) {
          sem.signal()
          break
        }

        // Skip node already run via preConnect
        if (preConnect && relayAddresses && isRelayAddress(relayAddresses, data)) {
          sem.signal()
          continue
        }

        c.remoteRelayAddresses.push(data.from)
        attempts++
        connectThroughNode(c, data.from, null).then(signal, signal)
      }

      relayAddresses = null

      if (attempts > 0) await sem.flush()
    }

    c.query = null
    if (isDone(c)) return

    // flush the semaphore
    await sem.flush()
    if (isDone(c)) return
  } catch (err) {
    c.query = null
    maybeDestroyEncryptedSocket(c, err)
    return
  }

  if (!c.connect) {
    maybeDestroyEncryptedSocket(c, attempts ? PEER_CONNECTION_FAILED() : PEER_NOT_FOUND())
  }
}

async function connectThroughNode(c, address, socket) {
  if (!c.requesting) {
    // If we have a stable server address, send it over now
    const addr = c.dht.remoteAddress()
    const localAddrs = c.lan ? Holepuncher.localAddresses(c.dht.io.serverSocket) : null
    const addresses4 = []

    if (addr) addresses4.push(addr)
    if (localAddrs) addresses4.push(...localAddrs)

    c.firewall = addr ? FIREWALL.OPEN : FIREWALL.UNKNOWN
    c.requesting = true
    c.request = await c.handshake.send({
      error: ERROR.NONE,
      firewall: c.firewall,
      holepunch: null,
      addresses4,
      addresses6: [],
      udx: {
        reusableSocket: c.reusableSocket,
        id: c.rawStream.id,
        seq: 0
      },
      secretStream: {},
      relayThrough: c.relayThrough ? { publicKey: c.relayThrough, token: c.relayToken } : null
    })
    if (isDone(c)) return
  }

  const { serverAddress, clientAddress, relayed, noise } = await c.dht._router.peerHandshake(
    c.target,
    { noise: c.request, socket, session: c.session },
    address
  )
  if (isDone(c) || c.connect) return

  const payload = await c.handshake.recv(noise)
  if (isDone(c) || !payload) return

  if (payload.version !== 1) {
    maybeDestroyEncryptedSocket(c, SERVER_INCOMPATIBLE())
    return
  }
  if (payload.error !== ERROR.NONE) {
    maybeDestroyEncryptedSocket(c, SERVER_ERROR())
    return
  }
  if (!payload.udx) {
    maybeDestroyEncryptedSocket(c, SERVER_ERROR('Server did not send UDX data'))
    return
  }

  const hs = c.handshake.final()

  c.handshake = null
  c.request = null
  c.requesting = false
  c.connect = {
    relayed,
    relayAddress: address,
    clientAddress,
    serverAddress,
    payload
  }

  c.payload = new SecurePayload(hs.holepunchSecret)

  c.onsocket = function (socket, port, host) {
    if (c.rawStream === null) return // Already hole punched

    if (c.rawStream.connected) {
      const rawStream = c.rawStream
      const remoteChanging = rawStream.changeRemote(socket, c.connect.payload.udx.id, port, host)
      confirmDirectUpgrade(c, rawStream, remoteChanging)
    } else {
      // cache the relay addrs for a future reconnect, we prefer the remote one so they
      // can give us the correct ones from their pov
      if (payload.relayAddresses && payload.relayAddresses.length) {
        c.dht._relayAddressesCache.set(c.id, payload.relayAddresses)
      } else if (c.remoteRelayAddresses.length) {
        c.dht._relayAddressesCache.set(c.id, c.remoteRelayAddresses)
      }

      c.rawStream.connect(socket, c.connect.payload.udx.id, port, host)
      c.encryptedSocket.start(c.rawStream, { handshake: hs })
    }

    if (c.reusableSocket && payload.udx.reusableSocket) {
      c.dht._socketPool.routes.add(c.remotePublicKey, c.rawStream)
    }

    if (c.puncher) {
      c.puncher.onabort = noop
      c.puncher.destroy()
    }

    if (c.passiveConnectTimeout) {
      clearPassiveConnectTimeout(c)
    }

    c.rawStream = null
  }

  if (payload.relayThrough || c.relayThrough) {
    relayConnection(c, c.relayThrough, payload, hs)
  }

  if (c.serverSocket) {
    c.onsocket(c.serverSocket, c.serverAddress.port, c.serverAddress.host)
    return
  }

  if (!relayed) {
    c.onsocket(socket || c.dht.socket, address.port, address.host)
  }

  c.session.destroy()
}

async function updateHolepunch(c, peerAddress, relayAddr, payload) {
  const holepunch = await c.dht._router.peerHolepunch(
    c.target,
    {
      id: c.connect.payload.holepunch.id,
      payload: c.payload.encrypt(payload),
      peerAddress,
      socket: c.puncher.socket,
      session: c.session
    },
    relayAddr
  )

  if (isDone(c)) return null

  const remotePayload = c.payload.decrypt(holepunch.payload)
  if (!remotePayload) {
    throw HOLEPUNCH_INVALID()
  }

  const { error, firewall, punching, addresses, remoteToken } = remotePayload

  if (error === ERROR.TRY_LATER && c.relayToken && payload.punching) {
    return {
      tryLater: true,
      ...holepunch,
      payload: remotePayload
    }
  }

  if (error !== ERROR.NONE) {
    throw REMOTE_ABORTED('Remote aborted with error code ' + error)
  }

  const echoed = !!(remoteToken && payload.token && b4a.equals(remoteToken, payload.token))

  c.puncher.updateRemote({
    punching,
    firewall,
    addresses,
    verified: echoed ? peerAddress.host : null
  })

  return {
    tryLater: false,
    ...holepunch,
    payload: remotePayload
  }
}

async function probeRound(c, serverAddress, serverRelay, retry) {
  // Open a quick low ttl session against what we think is the server
  if (serverAddress) await c.puncher.openSession(serverAddress)

  if (isDone(c)) return null

  const reply = await updateHolepunch(c, serverRelay.peerAddress, serverRelay.relayAddress, {
    error: ERROR.NONE,
    firewall: c.puncher.nat.firewall,
    round: c.round++,
    connected: false,
    punching: false,
    addresses: c.puncher.nat.addresses,
    remoteAddress: serverAddress,
    token: null,
    remoteToken: null
  })

  if (isDone(c) || !reply) return null

  const { peerAddress } = reply
  const { address, token } = reply.payload

  c.puncher.nat.add(reply.to, reply.from)

  // Open another quick low ttl session against what the server says their address is,
  // if they haven't said they are random yet
  if (
    c.puncher.remoteFirewall < FIREWALL.RANDOM &&
    address &&
    address.host &&
    address.port &&
    diffAddress(address, serverAddress)
  ) {
    await c.puncher.openSession(address)
    if (isDone(c)) return null
  }

  // If the remote told us they didn't know their nat firewall yet, give them a chance to figure it out
  // They might say this to see if the "fast mode" punch comes through first.
  if (c.puncher.remoteFirewall === FIREWALL.UNKNOWN) {
    await c.sleeper.pause(1000)
    if (isDone(c)) return null
  }

  let stable = await c.puncher.analyze(false)
  if (isDone(c)) return null

  // If the socket seems unstable, try to make it stable by setting the "allowReopen" flag
  // Mostly relevant for mobile networks
  if (!stable) {
    stable = await c.puncher.analyze(true)
    if (isDone(c)) return null
    if (stable) return probeRound(c, serverAddress, serverRelay, false)
  }

  if ((c.puncher.remoteFirewall === FIREWALL.UNKNOWN || !token) && retry) {
    return probeRound(c, serverAddress, serverRelay, false)
  }

  if (
    c.puncher.remoteFirewall === FIREWALL.UNKNOWN ||
    c.puncher.nat.firewall === FIREWALL.UNKNOWN
  ) {
    await abort(c, serverRelay, HOLEPUNCH_PROBE_TIMEOUT())
    return null
  }

  if (c.puncher.remoteFirewall >= FIREWALL.RANDOM && c.puncher.nat.firewall >= FIREWALL.RANDOM) {
    await abort(c, serverRelay, HOLEPUNCH_DOUBLE_RANDOMIZED_NATS())
    return null
  }

  return { token, peerAddress }
}

async function roundPunch(c, serverAddress, remoteToken, clientRelay, serverRelay, delayed) {
  // We are gossiping our final NAT status to the other peer now
  // so make sure we don't update our local view for now as that can make things weird
  c.puncher.nat.freeze()

  const isRandom =
    c.puncher.remoteFirewall >= FIREWALL.RANDOM || c.puncher.nat.firewall >= FIREWALL.RANDOM
  if (isRandom) {
    while (
      c.dht._randomPunches >= c.dht._randomPunchLimit ||
      Date.now() - c.dht._lastRandomPunch < c.dht._randomPunchInterval
    ) {
      // if no relay can help, bail
      if (!c.relayToken) throw HOLEPUNCH_ABORTED()

      if (!delayed) {
        delayed = true
        await updateHolepunch(c, serverAddress, clientRelay, {
          error: ERROR.NONE,
          firewall: c.puncher.nat.firewall,
          round: c.round++,
          connected: false,
          punching: false,
          addresses: c.puncher.nat.addresses,
          remoteAddress: null,
          token: c.payload.token(serverAddress),
          remoteToken
        })
        if (isDone(c)) return
      }

      await tryLater(c)
      if (isDone(c)) return
    }
  }

  // increment now, so we can commit to punching
  if (isRandom) c.dht._randomPunches++

  let reply

  try {
    // if delayed switch to the servers chosen relay - we validated anyway
    reply = await updateHolepunch(
      c,
      delayed ? serverRelay.peerAddress : serverAddress,
      delayed ? serverRelay.relayAddress : clientRelay,
      {
        error: ERROR.NONE,
        firewall: c.puncher.nat.firewall,
        round: c.round++,
        connected: false,
        punching: true,
        addresses: c.puncher.nat.addresses,
        remoteAddress: null,
        token: delayed ? null : c.payload.token(serverAddress),
        remoteToken
      }
    )
  } finally {
    // decrement as punch increments for us
    if (isRandom) c.dht._randomPunches--
  }

  if (isDone(c)) return
  if (!reply) return

  if (reply.tryLater) {
    await tryLater(c)
    if (isDone(c)) return
    return roundPunch(c, serverAddress, remoteToken, clientRelay, serverRelay, true)
  }

  if (!c.puncher.remoteHolepunching) {
    throw REMOTE_NOT_HOLEPUNCHING()
  }

  if (!(await c.puncher.punch())) {
    throw REMOTE_NOT_HOLEPUNCHABLE()
  }
}

async function tryLater(c) {
  if (!c.relayToken) throw HOLEPUNCH_ABORTED()
  await c.sleeper.pause(10000 + Math.round(Math.random() * 10000))
}

function maybeDestroyEncryptedSocket(c, err) {
  if (isDone(c)) return
  if (c.encryptedSocket.rawStream) return
  if (c.relaySocket) return // waiting for the relay
  if (c.puncher && !c.puncher.destroyed) return // waiting for the puncher
  c.session.destroy()
  c.encryptedSocket.destroy(err)
}

async function abort(c, { peerAddress, relayAddress }, err) {
  try {
    await updateHolepunch(c, peerAddress, relayAddress, {
      error: ERROR.ABORTED,
      firewall: FIREWALL.UNKNOWN,
      round: c.round++,
      connected: false,
      punching: false,
      addresses: null,
      remoteAddress: null,
      token: null,
      remoteToken: null
    })
  } catch (err) {
    safetyCatch(err)
  }

  destroyPuncher(c)
  maybeDestroyEncryptedSocket(c, err)
}

function relayConnection(c, relayThrough, payload, hs) {
  let isInitiator
  let publicKey
  let token

  if (payload.relayThrough) {
    isInitiator = false
    publicKey = payload.relayThrough.publicKey
    token = payload.relayThrough.token
  } else {
    isInitiator = true
    publicKey = relayThrough
    token = c.relayToken
  }

  c.relayToken = token
  c.relaySocket = c.dht.connect(publicKey)
  c.relaySocket.setKeepAlive(c.relayKeepAlive)
  c.relayClient = relay.Client.from(c.relaySocket, { id: c.relaySocket.publicKey })
  c.relayTimeout = setTimeout(onabort, 15000, null)

  c.relayClient.pair(isInitiator, token, c.rawStream).on('error', onabort).on('data', ondata)

  function ondata(remoteId) {
    if (c.relayTimeout) clearRelayTimeout(c)
    if (c.rawStream === null) {
      onabort(null)
      return
    }

    c.relayPaired = true

    const { remotePort, remoteHost, socket } = c.relaySocket.rawStream

    c.rawStream
      .on('close', () => destroyRelayConnection(c))
      .connect(socket, remoteId, remotePort, remoteHost)

    c.encryptedSocket.start(c.rawStream, { handshake: hs })
  }

  function onabort(err) {
    destroyRelayConnection(c)
    maybeDestroyEncryptedSocket(c, err || RELAY_ABORTED())
  }
}

function clearPassiveConnectTimeout(c) {
  clearTimeout(c.passiveConnectTimeout)
  c.passiveConnectTimeout = null
}

function destroyPuncher(c) {
  if (c.puncher) c.puncher.destroy()
  c.session.destroy()
}

function pickServerRelay(relays, clientRelay) {
  for (const r of relays) {
    if (!diffAddress(r.relayAddress, clientRelay)) return r
  }
  return relays[0]
}

function diffAddress(a, b) {
  return a.host !== b.host || a.port !== b.port
}

function defaultCreateHandshake(keyPair, remotePublicKey) {
  return new NoiseWrap(keyPair, remotePublicKey)
}

function defaultCreateSecretStream(isInitiator, rawStream, opts) {
  return new NoiseSecretStream(isInitiator, rawStream, opts)
}

function onlyNonReserved(addr) {
  return !isReserved(addr.host)
}

function isRelay(relaySocket, socket, port, host) {
  const stream = relaySocket.rawStream
  if (!stream) return false
  if (stream.socket !== socket) return false
  return port === stream.remotePort && host === stream.remoteHost
}

function selectRelay(relayThrough) {
  if (typeof relayThrough === 'function') relayThrough = relayThrough()
  if (relayThrough === null) return null
  if (Array.isArray(relayThrough))
    return relayThrough[Math.floor(Math.random() * relayThrough.length)]
  return relayThrough
}

function isRelayAddress(relayAddresses, data) {
  for (const node of relayAddresses) {
    if (node.host === data.from.host && node.port === data.from.port) return true
  }

  return false
}

function noop() {}
const EventEmitter = require('events')
const b4a = require('b4a')
const errors = require('./errors')

module.exports = class ConnectionPool extends EventEmitter {
  constructor(dht) {
    super()

    this._dht = dht
    this._servers = new Map()
    this._connecting = new Map()
    this._connections = new Map()
  }

  _attachServer(server) {
    const keyString = b4a.toString(server.publicKey, 'hex')

    this._servers.set(keyString, server)

    server
      .on('close', () => {
        this._servers.delete(keyString)
      })
      .on('connection', (socket) => {
        this._attachStream(socket, true)
      })
  }

  _attachStream(stream, opened) {
    const existing = this.get(stream.remotePublicKey)

    if (existing) {
      const keepNew =
        stream.isInitiator === existing.isInitiator ||
        b4a.compare(stream.publicKey, stream.remotePublicKey) > 0

      if (keepNew) {
        let closed = false

        const onclose = () => {
          closed = true
        }

        existing
          .on('error', noop)
          .on('close', () => {
            if (closed) return

            stream.off('error', noop).off('close', onclose)

            this._attachStream(stream, opened)
          })
          .destroy(errors.DUPLICATE_CONNECTION())

        stream.on('error', noop).on('close', onclose)
      } else {
        stream.on('error', noop).destroy(errors.DUPLICATE_CONNECTION())
      }

      return
    }

    const session = new ConnectionRef(this, stream)

    const keyString = b4a.toString(stream.remotePublicKey, 'hex')

    if (opened) {
      this._connections.set(keyString, session)

      stream.on('close', () => {
        this._connections.delete(keyString)
      })

      this.emit('connection', stream, session)
    } else {
      this._connecting.set(keyString, session)

      stream
        .on('error', noop)
        .on('close', () => {
          if (opened) this._connections.delete(keyString)
          else this._connecting.delete(keyString)
        })
        .on('open', () => {
          opened = true

          this._connecting.delete(keyString)
          this._connections.set(keyString, session)

          stream.off('error', noop)

          this.emit('connection', stream, session)
        })
    }

    return session
  }

  get connecting() {
    return this._connecting.size
  }

  get connections() {
    return this._connections.values()
  }

  has(publicKey) {
    const keyString = b4a.toString(publicKey, 'hex')

    return this._connections.has(keyString) || this._connecting.has(keyString)
  }

  get(publicKey) {
    const keyString = b4a.toString(publicKey, 'hex')

    const existing = this._connections.get(keyString) || this._connecting.get(keyString)

    return existing?._stream || null
  }
}

class ConnectionRef {
  constructor(pool, stream) {
    this._pool = pool
    this._stream = stream
    this._refs = 0
  }

  active() {
    this._refs++
  }

  inactive() {
    this._refs--
  }

  release() {
    this._stream.destroy()
  }
}

function noop() {}
const crypto = require('hypercore-crypto')

const COMMANDS = (exports.COMMANDS = {
  PEER_HANDSHAKE: 0,
  PEER_HOLEPUNCH: 1,
  FIND_PEER: 2,
  LOOKUP: 3,
  ANNOUNCE: 4,
  UNANNOUNCE: 5,
  MUTABLE_PUT: 6,
  MUTABLE_GET: 7,
  IMMUTABLE_PUT: 8,
  IMMUTABLE_GET: 9,
  PLUGIN: 10
})

exports.BOOTSTRAP_NODES = [
  '88.99.3.86@node1.hyperdht.org:49737',
  '142.93.90.113@node2.hyperdht.org:49737',
  '138.68.147.8@node3.hyperdht.org:49737'
]

exports.FIREWALL = {
  UNKNOWN: 0,
  OPEN: 1,
  CONSISTENT: 2,
  RANDOM: 3
}

exports.ERROR = {
  // noise / connection related
  NONE: 0,
  ABORTED: 1,
  VERSION_MISMATCH: 2,
  TRY_LATER: 3,
  // dht related
  SEQ_REUSED: 16,
  SEQ_TOO_LOW: 17
}

const [
  NS_ANNOUNCE,
  NS_UNANNOUNCE,
  NS_MUTABLE_PUT,
  NS_PEER_HANDSHAKE,
  NS_PEER_HOLEPUNCH,
  NS_PLUGIN
] = crypto.namespace('hyperswarm/dht', [
  COMMANDS.ANNOUNCE,
  COMMANDS.UNANNOUNCE,
  COMMANDS.MUTABLE_PUT,
  COMMANDS.PEER_HANDSHAKE,
  COMMANDS.PEER_HOLEPUNCH,
  COMMANDS.PLUGIN
])

exports.NS = {
  ANNOUNCE: NS_ANNOUNCE,
  UNANNOUNCE: NS_UNANNOUNCE,
  MUTABLE_PUT: NS_MUTABLE_PUT,
  PEER_HANDSHAKE: NS_PEER_HANDSHAKE,
  PEER_HOLEPUNCH: NS_PEER_HOLEPUNCH,
  PLUGIN: NS_PLUGIN
}
const sodium = require('sodium-universal')
const b4a = require('b4a')

function hash(data) {
  const out = b4a.allocUnsafe(32)
  sodium.crypto_generichash(out, data)
  return out
}

function unslabbedHash(data) {
  const out = b4a.allocUnsafeSlow(32)
  sodium.crypto_generichash(out, data)
  return out
}

function createKeyPair(seed) {
  const publicKey = b4a.alloc(32)
  const secretKey = b4a.alloc(64)
  if (seed) sodium.crypto_sign_seed_keypair(publicKey, secretKey, seed)
  else sodium.crypto_sign_keypair(publicKey, secretKey)
  return { publicKey, secretKey }
}

module.exports = {
  hash,
  unslabbedHash,
  createKeyPair
}
const b4a = require('b4a')
const cenc = require('compact-encoding')

function encodeUnslab(enc, m) {
  // Faster than unslab(c.encode(enc, data)) because it avoids the mem copy.
  // Makes sense to put in compact-encoding when we need it in other modules too
  const state = cenc.state()
  enc.preencode(state, m)
  state.buffer = b4a.allocUnsafeSlow(state.end)
  enc.encode(state, m)
  return state.buffer
}

module.exports = {
  encodeUnslab
}
module.exports = class DHTError extends Error {
  constructor(msg, code, fn = DHTError) {
    super(`${code}: ${msg}`)
    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, fn)
    }
  }

  get name() {
    return 'DHTError'
  }

  static BAD_HANDSHAKE_REPLY(msg = 'Bad handshake reply') {
    return new DHTError(msg, 'BAD_HANDSHAKE_REPLY', DHTError.BAD_HANDSHAKE_REPLY)
  }

  static BAD_HOLEPUNCH_REPLY(msg = 'Bad holepunch reply') {
    return new DHTError(msg, 'BAD_HOLEPUNCH_REPLY', DHTError.BAD_HOLEPUNCH_REPLY)
  }

  static HOLEPUNCH_ABORTED(msg = 'Holepunch aborted') {
    return new DHTError(msg, 'HOLEPUNCH_ABORTED', DHTError.HOLEPUNCH_ABORTED)
  }

  static HOLEPUNCH_INVALID(msg = 'Invalid holepunch payload') {
    return new DHTError(msg, 'HOLEPUNCH_INVALID', DHTError.HOLEPUNCH_INVALID)
  }

  static HOLEPUNCH_PROBE_TIMEOUT(msg = 'Holepunching probe did not finish in time') {
    return new DHTError(msg, 'HOLEPUNCH_PROBE_TIMEOUT', DHTError.HOLEPUNCH_PROBE_TIMEOUT)
  }

  static HOLEPUNCH_DOUBLE_RANDOMIZED_NATS(msg = 'Both remote and local NATs are randomized') {
    return new DHTError(
      msg,
      'HOLEPUNCH_DOUBLE_RANDOMIZED_NATS',
      DHTError.HOLEPUNCH_DOUBLE_RANDOMIZED_NATS
    )
  }

  static CANNOT_HOLEPUNCH(msg = 'Cannot holepunch to remote') {
    return new DHTError(msg, 'CANNOT_HOLEPUNCH', DHTError.CANNOT_HOLEPUNCH)
  }

  static REMOTE_NOT_HOLEPUNCHING(msg = 'Remote is not holepunching') {
    return new DHTError(msg, 'REMOTE_NOT_HOLEPUNCHING', DHTError.REMOTE_NOT_HOLEPUNCHING)
  }

  static REMOTE_NOT_HOLEPUNCHABLE(msg = 'Remote is not holepunchable') {
    return new DHTError(msg, 'REMOTE_NOT_HOLEPUNCHABLE', DHTError.REMOTE_NOT_HOLEPUNCHABLE)
  }

  static REMOTE_ABORTED(msg = 'Remote aborted') {
    return new DHTError(msg, 'REMOTE_ABORTED', DHTError.REMOTE_ABORTED)
  }

  static HANDSHAKE_UNFINISHED(msg = 'Handshake did not finish') {
    return new DHTError(msg, 'HANDSHAKE_UNFINISHED', DHTError.HANDSHAKE_UNFINISHED)
  }

  static HANDSHAKE_INVALID(msg = 'Received invalid handshake') {
    return new DHTError(msg, 'HANDSHAKE_INVALID', DHTError.HANDSHAKE_INVALID)
  }

  static ALREADY_LISTENING(msg = 'Already listening') {
    return new DHTError(msg, 'ALREADY_LISTENING', DHTError.ALREADY_LISTENING)
  }

  static KEYPAIR_ALREADY_USED(msg = 'Keypair already used') {
    return new DHTError(msg, 'KEYPAIR_ALREADY_USED', DHTError.KEYPAIR_ALREADY_USED)
  }

  static NODE_DESTROYED(msg = 'Node destroyed') {
    return new DHTError(msg, 'NODE_DESTROYED', DHTError.NODE_DESTROYED)
  }

  static PEER_CONNECTION_FAILED(msg = 'Could not connect to peer') {
    return new DHTError(msg, 'PEER_CONNECTION_FAILED', DHTError.PEER_CONNECTION_FAILED)
  }

  static PEER_NOT_FOUND(msg = 'Peer not found') {
    return new DHTError(msg, 'PEER_NOT_FOUND', DHTError.PEER_NOT_FOUND)
  }

  static STREAM_NOT_CONNECTED(msg = 'Stream is not connected') {
    return new DHTError(msg, 'STREAM_NOT_CONNECTED', DHTError.STREAM_NOT_CONNECTED)
  }

  static SERVER_INCOMPATIBLE(msg = 'Server is using an incompatible version') {
    return new DHTError(msg, 'SERVER_INCOMPATIBLE', DHTError.SERVER_INCOMPATIBLE)
  }

  static SERVER_ERROR(msg = 'Server returned an error') {
    return new DHTError(msg, 'SERVER_ERROR', DHTError.SERVER_ERROR)
  }

  static DUPLICATE_CONNECTION(msg = 'Duplicate connection') {
    return new DHTError(msg, 'DUPLICATE_CONNECTION', DHTError.DUPLICATE_CONNECTION)
  }

  static RELAY_ABORTED(msg = 'Relay aborted') {
    return new DHTError(msg, 'RELAY_ABORTED', DHTError.RELAY_ABORTED)
  }

  static SUSPENDED(msg = 'Suspended') {
    return new DHTError(msg, 'SUSPENDED', DHTError.SUSPENDED)
  }
}
const b4a = require('b4a')
const Nat = require('./nat')
const Sleeper = require('./sleeper')
const { FIREWALL } = require('./constants')

const BIRTHDAY_SOCKETS = 256
const HOLEPUNCH = b4a.from([0])
const HOLEPUNCH_TTL = 5
const DEFAULT_TTL = 64
const MAX_REOPENS = 3

module.exports = class Holepuncher {
  constructor(dht, session, isInitiator, remoteFirewall = FIREWALL.UNKNOWN) {
    const holder = dht._socketPool.acquire()

    this.dht = dht
    this.session = session

    this.nat = new Nat(dht, session, holder.socket)
    this.nat.autoSample()

    this.isInitiator = isInitiator

    // events
    this.onconnect = noop
    this.onabort = noop

    this.punching = false
    this.connected = false
    this.destroyed = false
    this.randomized = false

    // track remote state
    this.remoteFirewall = remoteFirewall
    this.remoteAddresses = []
    this.remoteHolepunching = false

    this._sleeper = new Sleeper()
    this._reopening = null
    this._timeout = null
    this._punching = null
    this._allHolders = []
    this._holder = this._addRef(holder)
  }

  get socket() {
    return this._holder.socket
  }

  updateRemote({ punching, firewall, addresses, verified }) {
    const remoteAddresses = []

    if (addresses) {
      for (const addr of addresses) {
        remoteAddresses.push({
          host: addr.host,
          port: addr.port,
          verified: verified === addr.host || this._isVerified(addr.host)
        })
      }
    }

    this.remoteFirewall = firewall
    this.remoteAddresses = remoteAddresses
    this.remoteHolepunching = punching
  }

  _isVerified(host) {
    for (const addr of this.remoteAddresses) {
      if (addr.verified && addr.host === host) {
        return true
      }
    }
    return false
  }

  ping(addr, socket = this._holder.socket) {
    return holepunch(socket, addr, false)
  }

  openSession(addr, socket = this._holder.socket) {
    return holepunch(socket, addr, true)
  }

  async analyze(allowReopen) {
    await this.nat.analyzing
    if (this._unstable()) {
      if (!allowReopen) return false
      if (!this._reopening) this._reopening = this._reopen()
      return this._reopening
    }
    return true
  }

  _unstable() {
    // TODO!!: We need an additional heuristic here... If we were NOT random in the past we should also do this.
    const firewall = this.nat.firewall
    return (
      (this.remoteFirewall >= FIREWALL.RANDOM && firewall >= FIREWALL.RANDOM) ||
      firewall === FIREWALL.UNKNOWN
    )
  }

  _reset() {
    const prev = this._holder

    this._allHolders.pop()
    this._holder = this._addRef(this.dht._socketPool.acquire())

    prev.release()
    this.nat.destroy()

    this.nat = new Nat(this.dht, this.session, this._holder.socket)
    // TODO: maybe make auto sampling configurable somehow?
    this.nat.autoSample()
  }

  _addRef(ref) {
    this._allHolders.push(ref)
    ref.onholepunchmessage = (msg, rinfo) => this._onholepunchmessage(msg, rinfo, ref)
    return ref
  }

  _onholepunchmessage(_, addr, ref) {
    if (!this.isInitiator) {
      // TODO: we don't need this if we had a way to connect a socket to many hosts
      holepunch(ref.socket, addr, false) // never fails
      return
    }

    if (this.connected) return

    this.connected = true
    this.punching = false

    for (const r of this._allHolders) {
      if (r === ref) continue
      r.release()
    }

    this._allHolders[0] = ref
    while (this._allHolders.length > 1) this._allHolders.pop()

    this._decrementRandomized()
    this.onconnect(ref.socket, addr.port, addr.host)
  }

  _done() {
    return this.destroyed || this.connected
  }

  async _reopen() {
    for (let i = 0; this._unstable() && i < MAX_REOPENS && !this._done() && !this.punching; i++) {
      this._reset()
      await this.nat.analyzing
    }

    return coerceFirewall(this.nat.firewall) === FIREWALL.CONSISTENT
  }

  punch() {
    if (!this._punching) this._punching = this._punch()
    return this._punching
  }

  async _punch() {
    if (this._done() || !this.remoteAddresses.length) return false

    this.punching = true

    // Coerce into consistency for now. Obvs we could make this this more efficient if we use that info
    // but that's seldomly used since those will just use tcp most of the time.

    const local = coerceFirewall(this.nat.firewall)
    const remote = coerceFirewall(this.remoteFirewall)

    // Note that most of these async functions are meant to run in the background
    // which is why we don't await them here and why they are not allowed to throw

    let remoteVerifiedAddress = null
    for (const addr of this.remoteAddresses) {
      if (addr.verified) {
        remoteVerifiedAddress = addr
        break
      }
    }

    if (local === FIREWALL.CONSISTENT && remote === FIREWALL.CONSISTENT) {
      this.dht.stats.punches.consistent++
      this._consistentProbe()
      return true
    }

    if (!remoteVerifiedAddress) return false

    if (local === FIREWALL.CONSISTENT && remote >= FIREWALL.RANDOM) {
      this.dht.stats.punches.random++
      this._incrementRandomized()
      this._randomProbes(remoteVerifiedAddress)
      return true
    }

    if (local >= FIREWALL.RANDOM && remote === FIREWALL.CONSISTENT) {
      this.dht.stats.punches.random++
      this._incrementRandomized()
      await this._openBirthdaySockets(remoteVerifiedAddress)
      if (this.punching) this._keepAliveRandomNat(remoteVerifiedAddress)
      return true
    }

    return false
  }

  // Note that this never throws so it is safe to run in the background
  async _consistentProbe() {
    // Here we do the sleep first because the "fast open" mode in the server just fired a ping
    if (!this.isInitiator) await this._sleeper.pause(1000)

    let tries = 0

    while (this.punching && tries++ < 10) {
      for (const addr of this.remoteAddresses) {
        // only try unverified addresses every 4 ticks
        if (!addr.verified && (tries & 3) !== 0) continue
        await holepunch(this._holder.socket, addr, false)
      }
      if (this.punching) await this._sleeper.pause(1000)
    }

    this._autoDestroy()
  }

  // Note that this never throws so it is safe to run in the background
  async _randomProbes(remoteAddr) {
    let tries = 1750 // ~35s

    while (this.punching && tries-- > 0) {
      const addr = { host: remoteAddr.host, port: randomPort() }
      await holepunch(this._holder.socket, addr, false)
      if (this.punching) await this._sleeper.pause(20)
    }

    this._autoDestroy()
  }

  // Note that this never throws so it is safe to run in the background
  async _keepAliveRandomNat(remoteAddr) {
    let i = 0
    let lowTTLRounds = 1

    // TODO: experiment with this here. We just bursted all the messages in
    // openOtherSockets to ensure the sockets are open, so it's potentially
    // a good idea to slow down for a bit.
    await this._sleeper.pause(100)

    let tries = 1750 // ~35s

    while (this.punching && tries-- > 0) {
      if (i === this._allHolders.length) {
        i = 0
        if (lowTTLRounds > 0) lowTTLRounds--
      }

      await holepunch(this._allHolders[i++].socket, remoteAddr, lowTTLRounds > 0)
      if (this.punching) await this._sleeper.pause(20)
    }

    this._autoDestroy()
  }

  async _openBirthdaySockets(remoteAddr) {
    while (this.punching && this._allHolders.length < BIRTHDAY_SOCKETS) {
      const ref = this._addRef(this.dht._socketPool.acquire())
      await holepunch(ref.socket, remoteAddr, HOLEPUNCH_TTL)
    }
  }

  _autoDestroy() {
    if (!this.connected) this.destroy()
  }

  _incrementRandomized() {
    if (!this.randomized) {
      this.randomized = true
      this.dht._randomPunches++
    }
  }

  _decrementRandomized() {
    if (this.randomized) {
      this.dht._lastRandomPunch = Date.now()
      this.randomized = false
      this.dht._randomPunches--
    }
  }

  destroy() {
    if (this.destroyed) return
    this.destroyed = true
    this.punching = false

    for (const ref of this._allHolders) ref.release()
    this._allHolders = []
    this.nat.destroy()

    if (!this.connected) {
      this._decrementRandomized()
      this.onabort()
    }
  }

  static ping(socket, addr) {
    return holepunch(socket, addr, false)
  }

  static localAddresses(socket) {
    return localAddresses(socket)
  }

  static matchAddress(myAddresses, externalAddresses) {
    return matchAddress(myAddresses, externalAddresses)
  }
}

function holepunch(socket, addr, lowTTL) {
  return socket.send(HOLEPUNCH, addr.port, addr.host, lowTTL ? HOLEPUNCH_TTL : DEFAULT_TTL)
}

function randomPort() {
  return (1000 + Math.random() * 64536) | 0
}

function coerceFirewall(fw) {
  return fw === FIREWALL.OPEN ? FIREWALL.CONSISTENT : fw
}

function localAddresses(socket) {
  const addrs = []
  const { host, port } = socket.address()

  if (host === '127.0.0.1') return [{ host, port }]

  for (const n of socket.udx.networkInterfaces()) {
    if (n.family !== 4 || n.internal) continue

    addrs.push({ host: n.host, port })
  }

  if (addrs.length === 0) {
    addrs.push({ host: '127.0.0.1', port })
  }

  return addrs
}

function matchAddress(localAddresses, remoteLocalAddresses) {
  if (remoteLocalAddresses.length === 0) return null

  let best = { segment: 1, addr: null }

  for (const localAddress of localAddresses) {
    // => 192.168.122.238
    const a = localAddress.host.split('.')

    for (const remoteAddress of remoteLocalAddresses) {
      // => 192.168.0.23
      // => 192.168.122.1
      const b = remoteAddress.host.split('.')

      // Matches 192.*.*.*
      if (a[0] === b[0]) {
        if (best.segment === 1) best = { segment: 2, addr: remoteAddress }

        // Matches 192.168.*.*
        if (a[1] === b[1]) {
          if (best.segment === 2) best = { segment: 3, addr: remoteAddress }

          // Matches 192.168.122.*
          if (a[2] === b[2]) return remoteAddress
        }
      }
    }
  }

  return best.addr
}

function noop() {}
const c = require('compact-encoding')

const ipv4 = {
  ...c.ipv4Address,
  decode(state) {
    const ip = c.ipv4Address.decode(state)
    return {
      host: ip.host,
      port: ip.port
    }
  }
}

const ipv4Array = c.array(ipv4)

const ipv6 = {
  ...c.ipv6Address,
  decode(state) {
    const ip = c.ipv6Address.decode(state)
    return {
      host: ip.host,
      port: ip.port
    }
  }
}

const ipv6Array = c.array(ipv6)

exports.handshake = {
  preencode(state, m) {
    state.end += 1 + 1 + (m.peerAddress ? 6 : 0) + (m.relayAddress ? 6 : 0)
    c.buffer.preencode(state, m.noise)
  },
  encode(state, m) {
    const flags = (m.peerAddress ? 1 : 0) | (m.relayAddress ? 2 : 0)

    c.uint.encode(state, flags)
    c.uint.encode(state, m.mode)
    c.buffer.encode(state, m.noise)

    if (m.peerAddress) ipv4.encode(state, m.peerAddress)
    if (m.relayAddress) ipv4.encode(state, m.relayAddress)
  },
  decode(state) {
    const flags = c.uint.decode(state)

    return {
      mode: c.uint.decode(state),
      noise: c.buffer.decode(state),
      peerAddress: flags & 1 ? ipv4.decode(state) : null,
      relayAddress: flags & 2 ? ipv4.decode(state) : null
    }
  }
}

const relayInfo = {
  preencode(state, m) {
    state.end += 12
  },
  encode(state, m) {
    ipv4.encode(state, m.relayAddress)
    ipv4.encode(state, m.peerAddress)
  },
  decode(state) {
    return {
      relayAddress: ipv4.decode(state),
      peerAddress: ipv4.decode(state)
    }
  }
}

const relayInfoArray = c.array(relayInfo)

const holepunchInfo = {
  preencode(state, m) {
    c.uint.preencode(state, m.id)
    relayInfoArray.preencode(state, m.relays)
  },
  encode(state, m) {
    c.uint.encode(state, m.id)
    relayInfoArray.encode(state, m.relays)
  },
  decode(state) {
    return {
      id: c.uint.decode(state),
      relays: relayInfoArray.decode(state)
    }
  }
}

const udxInfo = {
  preencode(state, m) {
    state.end += 2 // version + features
    c.uint.preencode(state, m.id)
    c.uint.preencode(state, m.seq)
  },
  encode(state, m) {
    c.uint.encode(state, 1)
    c.uint.encode(state, m.reusableSocket ? 1 : 0)
    c.uint.encode(state, m.id)
    c.uint.encode(state, m.seq)
  },
  decode(state) {
    const version = c.uint.decode(state)
    const features = c.uint.decode(state)

    return {
      version,
      reusableSocket: (features & 1) !== 0,
      id: c.uint.decode(state),
      seq: c.uint.decode(state)
    }
  }
}

const secretStreamInfo = {
  preencode(state, m) {
    c.uint.preencode(state, 1)
  },
  encode(state, m) {
    c.uint.encode(state, 1)
  },
  decode(state) {
    return {
      version: c.uint.decode(state)
    }
  }
}

const relayThroughInfo = {
  preencode(state, m) {
    c.uint.preencode(state, 1) // version
    c.uint.preencode(state, 0) // flags
    c.fixed32.preencode(state, m.publicKey)
    c.fixed32.preencode(state, m.token)
  },
  encode(state, m) {
    c.uint.encode(state, 1)
    c.uint.encode(state, 0)
    c.fixed32.encode(state, m.publicKey)
    c.fixed32.encode(state, m.token)
  },
  decode(state) {
    const version = c.uint.decode(state)
    c.uint.decode(state)

    return {
      version,
      publicKey: c.fixed32.decode(state),
      token: c.fixed32.decode(state)
    }
  }
}

exports.noisePayload = {
  preencode(state, m) {
    state.end += 4 // version + flags + error + firewall
    if (m.holepunch) holepunchInfo.preencode(state, m.holepunch)
    if (m.addresses4 && m.addresses4.length) ipv4Array.preencode(state, m.addresses4)
    if (m.addresses6 && m.addresses6.length) ipv6Array.preencode(state, m.addresses6)
    if (m.udx) udxInfo.preencode(state, m.udx)
    if (m.secretStream) secretStreamInfo.preencode(state, m.secretStream)
    if (m.relayThrough) relayThroughInfo.preencode(state, m.relayThrough)
    if (m.relayAddresses) ipv4Array.preencode(state, m.relayAddresses)
  },
  encode(state, m) {
    let flags = 0

    if (m.holepunch) flags |= 1
    if (m.addresses4 && m.addresses4.length) flags |= 2
    if (m.addresses6 && m.addresses6.length) flags |= 4
    if (m.udx) flags |= 8
    if (m.secretStream) flags |= 16
    if (m.relayThrough) flags |= 32
    if (m.relayAddresses) flags |= 64

    c.uint.encode(state, 1) // version
    c.uint.encode(state, flags)
    c.uint.encode(state, m.error)
    c.uint.encode(state, m.firewall)

    if (m.holepunch) holepunchInfo.encode(state, m.holepunch)
    if (m.addresses4 && m.addresses4.length) ipv4Array.encode(state, m.addresses4)
    if (m.addresses6 && m.addresses6.length) ipv6Array.encode(state, m.addresses6)
    if (m.udx) udxInfo.encode(state, m.udx)
    if (m.secretStream) secretStreamInfo.encode(state, m.secretStream)
    if (m.relayThrough) relayThroughInfo.encode(state, m.relayThrough)
    if (m.relayAddresses) ipv4Array.encode(state, m.relayAddresses)
  },
  decode(state) {
    const version = c.uint.decode(state)

    if (version !== 1) {
      // Do not attempt to decode but return this back to the user so they can
      // actually handle it
      return {
        version,
        error: 0,
        firewall: 0,
        holepunch: null,
        addresses4: [],
        addresses6: [],
        udx: null,
        secretStream: null,
        relayThrough: null,
        relayAddresses: null
      }
    }

    const flags = c.uint.decode(state)

    return {
      version,
      error: c.uint.decode(state),
      firewall: c.uint.decode(state),
      holepunch: (flags & 1) !== 0 ? holepunchInfo.decode(state) : null,
      addresses4: (flags & 2) !== 0 ? ipv4Array.decode(state) : [],
      addresses6: (flags & 4) !== 0 ? ipv6Array.decode(state) : [],
      udx: (flags & 8) !== 0 ? udxInfo.decode(state) : null,
      secretStream: (flags & 16) !== 0 ? secretStreamInfo.decode(state) : null,
      relayThrough: (flags & 32) !== 0 ? relayThroughInfo.decode(state) : null,
      relayAddresses: (flags & 64) !== 0 ? ipv4Array.decode(state) : null
    }
  }
}

exports.holepunch = {
  preencode(state, m) {
    state.end += 2
    c.uint.preencode(state, m.id)
    c.buffer.preencode(state, m.payload)
    if (m.peerAddress) ipv4.preencode(state, m.peerAddress)
  },
  encode(state, m) {
    const flags = m.peerAddress ? 1 : 0
    c.uint.encode(state, flags)
    c.uint.encode(state, m.mode)
    c.uint.encode(state, m.id)
    c.buffer.encode(state, m.payload)
    if (m.peerAddress) ipv4.encode(state, m.peerAddress)
  },
  decode(state) {
    const flags = c.uint.decode(state)
    return {
      mode: c.uint.decode(state),
      id: c.uint.decode(state),
      payload: c.buffer.decode(state),
      peerAddress: flags & 1 ? ipv4.decode(state) : null
    }
  }
}

exports.holepunchPayload = {
  preencode(state, m) {
    state.end += 4 // flags + error + firewall + round
    if (m.addresses) ipv4Array.preencode(state, m.addresses)
    if (m.remoteAddress) state.end += 6
    if (m.token) state.end += 32
    if (m.remoteToken) state.end += 32
  },
  encode(state, m) {
    const flags =
      (m.connected ? 1 : 0) |
      (m.punching ? 2 : 0) |
      (m.addresses ? 4 : 0) |
      (m.remoteAddress ? 8 : 0) |
      (m.token ? 16 : 0) |
      (m.remoteToken ? 32 : 0)

    c.uint.encode(state, flags)
    c.uint.encode(state, m.error)
    c.uint.encode(state, m.firewall)
    c.uint.encode(state, m.round)

    if (m.addresses) ipv4Array.encode(state, m.addresses)
    if (m.remoteAddress) ipv4.encode(state, m.remoteAddress)
    if (m.token) c.fixed32.encode(state, m.token)
    if (m.remoteToken) c.fixed32.encode(state, m.remoteToken)
  },
  decode(state) {
    const flags = c.uint.decode(state)

    return {
      error: c.uint.decode(state),
      firewall: c.uint.decode(state),
      round: c.uint.decode(state),
      connected: (flags & 1) !== 0,
      punching: (flags & 2) !== 0,
      addresses: (flags & 4) !== 0 ? ipv4Array.decode(state) : null,
      remoteAddress: (flags & 8) !== 0 ? ipv4.decode(state) : null,
      token: (flags & 16) !== 0 ? c.fixed32.decode(state) : null,
      remoteToken: (flags & 32) !== 0 ? c.fixed32.decode(state) : null
    }
  }
}

const peer = (exports.peer = {
  preencode(state, m) {
    state.end += 32
    ipv4Array.preencode(state, m.relayAddresses)
  },
  encode(state, m) {
    c.fixed32.encode(state, m.publicKey)
    ipv4Array.encode(state, m.relayAddresses)
  },
  decode(state) {
    return {
      publicKey: c.fixed32.decode(state),
      relayAddresses: ipv4Array.decode(state)
    }
  }
})

const peers = (exports.peers = c.array(peer))

const rawPeers = c.array(c.raw)

exports.lookupRawReply = {
  preencode(state, m) {
    rawPeers.preencode(state, m.peers)
    c.uint.preencode(state, m.bump)
  },
  encode(state, m) {
    rawPeers.encode(state, m.peers)
    c.uint.encode(state, m.bump)
  },
  decode(state) {
    return {
      peers: peers.decode(state),
      bump: state.start < state.end ? c.uint.decode(state) : 0
    }
  }
}

exports.announce = {
  preencode(state, m) {
    state.end++ // flags
    if (m.peer) peer.preencode(state, m.peer)
    if (m.refresh) state.end += 32
    if (m.signature) state.end += 64
    if (m.bump) c.uint.preencode(state, m.bump)
  },
  encode(state, m) {
    const flags = (m.peer ? 1 : 0) | (m.refresh ? 2 : 0) | (m.signature ? 4 : 0) | (m.bump ? 8 : 0)
    c.uint.encode(state, flags)
    if (m.peer) peer.encode(state, m.peer)
    if (m.refresh) c.fixed32.encode(state, m.refresh)
    if (m.signature) c.fixed64.encode(state, m.signature)
    if (m.bump) c.uint.encode(state, m.bump)
  },
  decode(state) {
    const flags = c.uint.decode(state)

    return {
      peer: (flags & 1) !== 0 ? peer.decode(state) : null,
      refresh: (flags & 2) !== 0 ? c.fixed32.decode(state) : null,
      signature: (flags & 4) !== 0 ? c.fixed64.decode(state) : null,
      bump: (flags & 8) !== 0 ? c.uint.decode(state) : 0
    }
  }
}

exports.mutableSignable = {
  preencode(state, m) {
    c.uint.preencode(state, m.seq)
    c.buffer.preencode(state, m.value)
  },
  encode(state, m) {
    c.uint.encode(state, m.seq)
    c.buffer.encode(state, m.value)
  },
  decode(state) {
    return {
      seq: c.uint.decode(state),
      value: c.buffer.decode(state)
    }
  }
}

exports.mutablePutRequest = {
  preencode(state, m) {
    c.fixed32.preencode(state, m.publicKey)
    c.uint.preencode(state, m.seq)
    c.buffer.preencode(state, m.value)
    c.fixed64.preencode(state, m.signature)
  },
  encode(state, m) {
    c.fixed32.encode(state, m.publicKey)
    c.uint.encode(state, m.seq)
    c.buffer.encode(state, m.value)
    c.fixed64.encode(state, m.signature)
  },
  decode(state) {
    return {
      publicKey: c.fixed32.decode(state),
      seq: c.uint.decode(state),
      value: c.buffer.decode(state),
      signature: c.fixed64.decode(state)
    }
  }
}

exports.mutableGetResponse = {
  preencode(state, m) {
    c.uint.preencode(state, m.seq)
    c.buffer.preencode(state, m.value)
    c.fixed64.preencode(state, m.signature)
  },
  encode(state, m) {
    c.uint.encode(state, m.seq)
    c.buffer.encode(state, m.value)
    c.fixed64.encode(state, m.signature)
  },
  decode(state) {
    return {
      seq: c.uint.decode(state),
      value: c.buffer.decode(state),
      signature: c.fixed64.decode(state)
    }
  }
}

exports.pluginRequest = {
  preencode(state, m) {
    c.string.preencode(state, m.plugin)
    c.uint.preencode(state, m.version)
    c.uint.preencode(state, m.command)
    state.end++ // max flag is 1 so always one byte

    if (m.value) c.buffer.preencode(state, m.value)
  },
  encode(state, m) {
    const flags = m.value ? 1 : 0

    c.string.encode(state, m.plugin)
    c.uint.encode(state, m.version)
    c.uint.encode(state, m.command)
    c.uint.encode(state, flags)

    if (m.value) c.buffer.encode(state, m.value)
  },
  decode(state) {
    const r0 = c.string.decode(state)
    const r1 = c.uint.decode(state)
    const r2 = c.uint.decode(state)
    const flags = c.uint.decode(state)

    return {
      plugin: r0,
      version: r1,
      command: r2,
      value: (flags & 1) !== 0 ? c.buffer.decode(state) : null
    }
  }
}
const { FIREWALL } = require('../lib/constants')

module.exports = class Nat {
  constructor(dht, session, socket) {
    this._samplesHost = []
    this._samplesFull = []
    this._visited = new Map()
    this._resolve = null
    this._minSamples = 4
    this._autoSampling = false

    this.dht = dht
    this.session = session
    this.socket = socket

    this.sampled = 0
    this.firewall = dht.firewalled ? FIREWALL.UNKNOWN : FIREWALL.OPEN
    this.addresses = null

    this.analyzing = new Promise((resolve) => {
      this._resolve = resolve
    })
  }

  autoSample(retry = true) {
    if (this._autoSampling) return
    this._autoSampling = true

    const self = this
    const socket = this.socket
    const maxPings = this._minSamples

    let skip = this.dht.nodes.length >= 8 ? 5 : 0
    let pending = 0

    // TODO: it would be best to pick the nodes to help us based on latency to us
    // That should reduce connect latency in general. We should investigate tracking that later on.

    // TODO 2: try to pick nodes with different IPs as well, as that'll help multi IP cell connections...
    // If we expose this from the nat sampler then the DHT should be able to help us filter out scams as well...

    for (
      let node = this.dht.nodes.latest;
      node && this.sampled + pending < maxPings;
      node = node.prev
    ) {
      if (skip > 0) {
        skip--
        continue
      }

      const ref = node.host + ':' + node.port

      if (this._visited.has(ref)) continue
      this._visited.set(ref, 1)

      pending++
      this.session.ping(node, { socket, retry: false }).then(onpong, onskip)
    }

    pending++
    onskip()

    function onpong(res) {
      self.add(res.to, res.from)
      onskip()
    }

    function onskip() {
      if (--pending === 0 && self.sampled < self._minSamples) {
        if (retry) {
          self._autoSampling = false
          self.autoSample(false)
          return
        }
        self._resolve()
      }
    }
  }

  destroy() {
    this._autoSampling = true
    this._minSamples = 0
    this._resolve()
  }

  unfreeze() {
    this.frozen = false
    this._updateFirewall()
    this._updateAddresses()
  }

  freeze() {
    this.frozen = true
  }

  _updateFirewall() {
    if (!this.dht.firewalled) {
      this.firewall = FIREWALL.OPEN
      return
    }

    if (this.sampled < 3) return

    const max = this._samplesFull[0].hits

    if (max >= 3) {
      this.firewall = FIREWALL.CONSISTENT
      return
    }

    if (max === 1) {
      this.firewall = FIREWALL.RANDOM
      return
    }

    // else max === 2

    // 1 host, >= 4 total samples ie, 2 bad ones -> random
    if (this._samplesHost.length === 1 && this.sampled > 3) {
      this.firewall = FIREWALL.RANDOM
      return
    }

    // double hit on two different ips -> assume consistent
    if (this._samplesHost.length > 1 && this._samplesFull[1].hits > 1) {
      this.firewall = FIREWALL.CONSISTENT
      return
    }

    // (4 is just means - all the samples we expect) - no decision - assume random
    if (this.sampled > 4) {
      this.firewall = FIREWALL.RANDOM
    }
  }

  _updateAddresses() {
    if (this.firewall === FIREWALL.UNKNOWN) {
      this.addresses = null
      return
    }

    if (this.firewall === FIREWALL.RANDOM) {
      this.addresses = [this._samplesHost[0]]
      return
    }

    if (this.firewall === FIREWALL.CONSISTENT) {
      this.addresses = []
      for (const addr of this._samplesFull) {
        if (addr.hits >= 2 || this.addresses.length < 2) this.addresses.push(addr)
      }
    }
  }

  update() {
    if (this.dht.firewalled && this.firewall === FIREWALL.OPEN) {
      this.firewall = FIREWALL.UNKNOWN
    }
    this._updateFirewall()
    this._updateAddresses()
  }

  add(addr, from) {
    const ref = from.host + ':' + from.port

    if (this._visited.get(ref) === 2) return
    this._visited.set(ref, 2)

    addSample(this._samplesHost, addr.host, 0)
    addSample(this._samplesFull, addr.host, addr.port)

    if ((++this.sampled >= 3 || !this.dht.firewalled) && !this.frozen) {
      this.update()
    }

    if (this.firewall === FIREWALL.CONSISTENT || this.firewall === FIREWALL.OPEN) {
      this._resolve()
    } else if (this.sampled >= this._minSamples) {
      this._resolve()
    }
  }
}

function addSample(samples, host, port) {
  for (let i = 0; i < samples.length; i++) {
    const s = samples[i]

    if (s.port !== port || s.host !== host) continue
    s.hits++

    for (; i > 0; i--) {
      const prev = samples[i - 1]
      if (prev.hits >= s.hits) return
      samples[i - 1] = s
      samples[i] = prev
    }

    return
  }

  samples.push({
    host,
    port,
    hits: 1
  })
}
const NoiseSecretStream = require('@hyperswarm/secret-stream')
const NoiseHandshake = require('noise-handshake')
const curve = require('noise-curve-ed')
const c = require('compact-encoding')
const b4a = require('b4a')
const sodium = require('sodium-universal')
const m = require('./messages')
const { NS } = require('./constants')
const { HANDSHAKE_UNFINISHED } = require('./errors')

const NOISE_PROLOUGE = NS.PEER_HANDSHAKE

module.exports = class NoiseWrap {
  constructor(keyPair, remotePublicKey) {
    this.isInitiator = !!remotePublicKey
    this.remotePublicKey = remotePublicKey
    this.keyPair = keyPair
    this.handshake = new NoiseHandshake('IK', this.isInitiator, keyPair, { curve })
    this.handshake.initialise(NOISE_PROLOUGE, remotePublicKey)
  }

  send(payload) {
    const buf = c.encode(m.noisePayload, payload)
    return this.handshake.send(buf)
  }

  recv(buf) {
    const payload = c.decode(m.noisePayload, this.handshake.recv(buf))
    this.remotePublicKey = b4a.toBuffer(this.handshake.rs)
    return payload
  }

  final() {
    if (!this.handshake.complete) throw HANDSHAKE_UNFINISHED()

    const holepunchSecret = b4a.allocUnsafe(32)

    sodium.crypto_generichash(holepunchSecret, NS.PEER_HOLEPUNCH, this.handshake.hash)

    return {
      isInitiator: this.isInitiator,
      publicKey: this.keyPair.publicKey,
      streamId: this.streamId,
      remotePublicKey: this.remotePublicKey,
      remoteId: NoiseSecretStream.id(this.handshake.hash, !this.isInitiator),
      holepunchSecret,
      hash: b4a.toBuffer(this.handshake.hash),
      rx: b4a.toBuffer(this.handshake.rx),
      tx: b4a.toBuffer(this.handshake.tx)
    }
  }
}
const c = require('compact-encoding')
const sodium = require('sodium-universal')
const RecordCache = require('record-cache')
const Cache = require('xache')
const b4a = require('b4a')
const unslab = require('unslab')

const { encodeUnslab } = require('./encode')
const m = require('./messages')
const { NS, ERROR } = require('./constants')

const EMPTY = b4a.alloc(0)
const TMP = b4a.allocUnsafe(32)
const MAX_BUMP_DRIFT = 60_000

module.exports = class Persistent {
  constructor(dht, opts) {
    this.dht = dht
    this.records = new RecordCache(opts.records)
    this.bumps = new Cache(opts.bumps)
    this.refreshes = new Cache(opts.refreshes)
    this.mutables = new Cache(opts.mutables)
    this.immutables = new Cache(opts.immutables)
  }

  onlookup(req) {
    if (!req.target) return

    const k = b4a.toString(req.target, 'hex')
    const records = this.records.get(k, 20)
    const bump = this.bumps.get(k) || 0
    const fwd = this.dht._router.get(k)

    if (fwd && records.length < 20) records.push(fwd.record)

    req.reply(records.length ? c.encode(m.lookupRawReply, { peers: records, bump }) : null)
  }

  onfindpeer(req) {
    if (!req.target) return
    const fwd = this.dht._router.get(req.target)
    req.reply(fwd ? fwd.record : null)
  }

  unannounce(target, publicKey) {
    const k = b4a.toString(target, 'hex')
    sodium.crypto_generichash(TMP, publicKey)

    if (b4a.equals(TMP, target)) this.dht._router.delete(k)
    this.records.remove(k, publicKey)
  }

  onunannounce(req) {
    if (!req.target || !req.token) return

    const unann = decode(m.announce, req.value)
    if (unann === null) return

    const { peer, signature } = unann
    if (!peer || !signature) return

    const signable = annSignable(req.target, req.token, this.dht.id, unann, NS.UNANNOUNCE)

    if (!sodium.crypto_sign_verify_detached(signature, signable, peer.publicKey)) {
      return
    }

    this.unannounce(req.target, peer.publicKey)
    req.reply(null, { token: false, closerNodes: false })
  }

  _onrefresh(token, req) {
    sodium.crypto_generichash(TMP, token)
    const activeRefresh = b4a.toString(TMP, 'hex')

    const r = this.refreshes.get(activeRefresh)
    if (!r) return

    const { announceSelf, k, record } = r
    const publicKey = record.subarray(0, 32)

    if (announceSelf) {
      this.dht._router.set(k, {
        relay: req.from,
        record,
        onconnect: null,
        onholepunch: null
      })
      this.records.remove(k, publicKey)
    } else {
      this.records.add(k, publicKey, record)
    }

    this.refreshes.delete(activeRefresh)
    this.refreshes.set(b4a.toString(token, 'hex'), r)

    req.reply(null, { token: false, closerNodes: false })
  }

  onannounce(req) {
    if (!req.target || !req.token || !this.dht.id) return

    const ann = decode(m.announce, req.value)
    if (ann === null) return

    const { peer, refresh, signature, bump } = ann

    if (!peer) {
      if (!refresh) return
      this._onrefresh(refresh, req)
      return
    }

    const signable = annSignable(req.target, req.token, this.dht.id, ann, NS.ANNOUNCE)

    if (!signature || !sodium.crypto_sign_verify_detached(signature, signable, peer.publicKey)) {
      return
    }

    // TODO: it would be potentially be more optimal to allow more than 3 addresses here for a findPeer response
    // and only use max 3 for a lookup reply
    if (peer.relayAddresses.length > 3) {
      peer.relayAddresses = peer.relayAddresses.slice(0, 3)
    }

    sodium.crypto_generichash(TMP, peer.publicKey)

    const k = b4a.toString(req.target, 'hex')
    const announceSelf = b4a.equals(TMP, req.target)
    const record = encodeUnslab(m.peer, peer)

    if (announceSelf) {
      this.dht._router.set(k, {
        relay: req.from,
        record,
        onconnect: null,
        onholepunch: null
      })
      this.records.remove(k, peer.publicKey)
    } else {
      const currentBump = this.bumps.get(k) || 0
      if (bump > currentBump && bump <= Date.now() + MAX_BUMP_DRIFT) this.bumps.set(k, bump)
      this.records.add(k, peer.publicKey, record)
    }

    if (refresh) {
      this.refreshes.set(b4a.toString(refresh, 'hex'), { k, record, announceSelf })
    }

    req.reply(null, { token: false, closerNodes: false })
  }

  onmutableget(req) {
    if (!req.target || !req.value) return

    let seq = 0
    try {
      seq = c.decode(c.uint, req.value)
    } catch {
      return
    }

    const k = b4a.toString(req.target, 'hex')
    const value = this.mutables.get(k)

    if (!value) {
      req.reply(null)
      return
    }

    const localSeq = c.decode(c.uint, value)
    req.reply(localSeq < seq ? null : value)
  }

  onmutableput(req) {
    if (!req.target || !req.token || !req.value) return

    const p = decode(m.mutablePutRequest, req.value)
    if (!p) return

    const { publicKey, seq, value, signature } = p

    const hash = b4a.allocUnsafe(32)
    sodium.crypto_generichash(hash, publicKey)
    if (!b4a.equals(hash, req.target)) return

    if (!value || !verifyMutable(signature, seq, value, publicKey)) return

    const k = b4a.toString(hash, 'hex')
    const local = this.mutables.get(k)

    if (local) {
      const existing = c.decode(m.mutableGetResponse, local)
      if (existing.value && existing.seq === seq && b4a.compare(value, existing.value) !== 0) {
        req.error(ERROR.SEQ_REUSED)
        return
      }
      if (seq < existing.seq) {
        req.error(ERROR.SEQ_TOO_LOW)
        return
      }
    }

    this.mutables.set(k, encodeUnslab(m.mutableGetResponse, { seq, value, signature }))
    req.reply(null)
  }

  onimmutableget(req) {
    if (!req.target) return

    const k = b4a.toString(req.target, 'hex')
    const value = this.immutables.get(k)

    req.reply(value || null)
  }

  onimmutableput(req) {
    if (!req.target || !req.token || !req.value) return

    const hash = b4a.alloc(32)
    sodium.crypto_generichash(hash, req.value)
    if (!b4a.equals(hash, req.target)) return

    const k = b4a.toString(hash, 'hex')
    this.immutables.set(k, unslab(req.value))

    req.reply(null)
  }

  onplugin(req) {
    if (!req.value) return

    const plugreq = decode(m.pluginRequest, req.value)
    if (plugreq === null) return

    const p = this.dht.plugins.get(plugreq.plugin)
    if (!p || p.version !== plugreq.version) return

    p.onrequest(plugreq, req)
  }

  destroy() {
    this.records.destroy()
    this.refreshes.destroy()
    this.mutables.destroy()
    this.immutables.destroy()
  }

  static signMutable(seq, value, keyPair) {
    const signable = b4a.allocUnsafe(32 + 32)
    const hash = signable.subarray(32)

    signable.set(NS.MUTABLE_PUT, 0)

    sodium.crypto_generichash(hash, c.encode(m.mutableSignable, { seq, value }))
    return sign(signable, keyPair)
  }

  static verifyMutable(signature, seq, value, publicKey) {
    return verifyMutable(signature, seq, value, publicKey)
  }

  static signAnnounce(target, token, id, ann, keyPair) {
    return sign(annSignable(target, token, id, ann, NS.ANNOUNCE), keyPair)
  }

  static signUnannounce(target, token, id, ann, keyPair) {
    return sign(annSignable(target, token, id, ann, NS.UNANNOUNCE), keyPair)
  }
}

function verifyMutable(signature, seq, value, publicKey) {
  const signable = b4a.allocUnsafe(32 + 32)
  const hash = signable.subarray(32)

  signable.set(NS.MUTABLE_PUT, 0)

  sodium.crypto_generichash(hash, c.encode(m.mutableSignable, { seq, value }))
  return sodium.crypto_sign_verify_detached(signature, signable, publicKey)
}

function annSignable(target, token, id, ann, ns) {
  const signable = b4a.allocUnsafe(32 + 32)
  const hash = signable.subarray(32)

  signable.set(ns, 0)

  sodium.crypto_generichash_batch(hash, [
    target,
    id,
    token,
    c.encode(m.peer, ann.peer), // note that this is the partial encoding of the announce message so we could just use that for perf
    ann.refresh || EMPTY
  ])

  return signable
}

function sign(signable, keyPair) {
  if (keyPair.sign) {
    return keyPair.sign(signable)
  }
  const secretKey = keyPair.secretKey ? keyPair.secretKey : keyPair
  const signature = b4a.allocUnsafe(64)
  sodium.crypto_sign_detached(signature, signable, secretKey)
  return signature
}

function decode(enc, val) {
  try {
    return val && c.decode(enc, val)
  } catch (err) {
    return null
  }
}
module.exports = class RawStreamSet {
  constructor(dht) {
    this._dht = dht

    this._prefix = 16 - 1 // 16 is the default stream-set side in udx
    this._streams = new Map()
  }

  get size() {
    return this._streams.size
  }

  [Symbol.iterator]() {
    return this._streams.values()
  }

  add(opts) {
    const self = this

    // TODO: we should prob have a udx helper for id generation, given the slight complexity
    // of the below. requires a PRNG in udx tho.

    let id = 0

    while (true) {
      id = (Math.random() * 0x100000000) >>> 0

      if (this._streams.has(id & this._prefix)) continue
      break
    }

    // always have ~50% change of rolling a free one
    if (2 * this._streams.size >= this._prefix) {
      // ie 0b11111 = 0b1111 + 1 + 0b1111
      this._prefix = 2 * this._prefix + 1

      // move the prefixes over
      const next = new Map()
      for (const stream of this._streams.values()) {
        next.set(stream.id & this._prefix, stream)
      }
      this._streams = next
    }

    const stream = this._dht.udx.createStream(id, opts)
    this._streams.set(id & this._prefix, stream)

    stream.on('close', onclose)

    return stream

    function onclose() {
      self._streams.delete(id & self._prefix)
    }
  }

  async clear() {
    const destroying = []

    for (const stream of this._streams.values()) {
      destroying.push(new Promise((resolve) => stream.once('close', resolve).destroy()))
    }

    await Promise.allSettled(destroying)
  }
}
const b4a = require('b4a')
const safetyCatch = require('safety-catch')

exports.clearRelayTimeout = clearRelayTimeout
exports.closeRelayConnection = closeRelayConnection
exports.confirmDirectUpgrade = confirmDirectUpgrade
exports.destroyRelayConnection = destroyRelayConnection

function clearRelayTimeout(connectionOrHandshake) {
  clearTimeout(connectionOrHandshake.relayTimeout)
  connectionOrHandshake.relayTimeout = null
}

function closeRelayConnection(connectionOrHandshake) {
  const socket = resetRelayConnection(connectionOrHandshake)

  if (socket) socket.end()
}

function confirmDirectUpgrade(connectionOrHandshake, rawStream, remoteChanging) {
  const cleanup = () => {
    rawStream.off('data', ondirect)
    rawStream.off('message', ondirect)
    rawStream.off('close', cleanup)
  }

  function ondirect() {
    if (!connectionOrHandshake.validUpgrade) {
      // reset, aka assume from direct
      connectionOrHandshake.validUpgrade = true
      return
    }

    cleanup()
    closeRelayConnection(connectionOrHandshake)
  }

  const confirm = () => {
    rawStream.on('data', ondirect)
    rawStream.on('message', ondirect)
    rawStream.once('close', cleanup)

    // Use a raw UDX message to make the peer observe the direct path without
    // writing application data into the secret stream.
    if (rawStream.trySend) rawStream.trySend(b4a.alloc(0))
  }

  if (!remoteChanging) {
    confirm()
    return
  }

  remoteChanging.then(confirm).catch(safetyCatch)
}

function destroyRelayConnection(connectionOrHandshake) {
  const socket = resetRelayConnection(connectionOrHandshake)

  if (socket) socket.destroy()
}

function resetRelayConnection(connectionOrHandshake) {
  if (connectionOrHandshake.relayTimeout) clearRelayTimeout(connectionOrHandshake)

  const socket = connectionOrHandshake.relaySocket
  // Drop relay references so the app connection no longer keeps relay state alive.
  connectionOrHandshake.relayToken = null
  connectionOrHandshake.relaySocket = null
  connectionOrHandshake.relayClient = null

  return socket
}
const c = require('compact-encoding')
const Cache = require('xache')
const safetyCatch = require('safety-catch')
const b4a = require('b4a')
const { handshake, holepunch } = require('./messages')
const { COMMANDS } = require('./constants')
const { BAD_HANDSHAKE_REPLY, BAD_HOLEPUNCH_REPLY } = require('./errors')

const FROM_CLIENT = 0
const FROM_SERVER = 1
const FROM_RELAY = 2
const FROM_SECOND_RELAY = 3
const REPLY = 4

// TODO: While the current design is very trustless in regards to clients/servers trusting the DHT,
// we should add a bunch of rate limits everywhere, especially including here to avoid bad users
// using a DHT node to relay traffic indiscriminately using the connect/holepunch messages.
// That's mostly from an abuse POV as none of the messsages do amplication.

module.exports = class Router {
  constructor(dht, opts) {
    this.dht = dht
    this.forwards = new Cache(opts.forwards)
  }

  set(target, state) {
    if (state.onpeerhandshake) {
      this.forwards.retain(toString(target), state)
    } else {
      this.forwards.set(toString(target), state)
    }
  }

  get(target) {
    return this.forwards.get(toString(target))
  }

  delete(target) {
    this.forwards.delete(toString(target))
  }

  destroy() {
    this.forwards.destroy()
  }

  async peerHandshake(target, { noise, peerAddress, relayAddress, socket, session }, to) {
    const dht = this.dht

    const requestValue = c.encode(handshake, {
      mode: FROM_CLIENT,
      noise,
      peerAddress,
      relayAddress
    })

    const res = await dht.request(
      { command: COMMANDS.PEER_HANDSHAKE, target, value: requestValue },
      to,
      { socket, session }
    )

    const hs = decode(handshake, res.value)
    if (
      !hs ||
      hs.mode !== REPLY ||
      to.host !== res.from.host ||
      to.port !== res.from.port ||
      !hs.noise
    ) {
      throw BAD_HANDSHAKE_REPLY()
    }

    return {
      noise: hs.noise,
      relayed: !!hs.peerAddress,
      serverAddress: hs.peerAddress || to,
      clientAddress: res.to
    }
  }

  async onpeerhandshake(req) {
    const hs = req.value && decode(handshake, req.value)
    if (!hs) return

    const { mode, noise, peerAddress, relayAddress } = hs

    const state = req.target && this.get(req.target)
    const isServer = !!(state && state.onpeerhandshake)
    const relay = state && state.relay

    if (isServer) {
      let reply = null
      try {
        reply = noise && (await state.onpeerhandshake({ noise, peerAddress }, req))
      } catch (e) {
        safetyCatch(e)
        return
      }
      if (!reply || !reply.noise) return
      const opts = { socket: reply.socket, closerNodes: false, token: false }

      switch (mode) {
        case FROM_CLIENT: {
          req.reply(
            c.encode(handshake, { mode: REPLY, noise: reply.noise, peerAddress: null }),
            opts
          )
          return
        }
        case FROM_RELAY: {
          req.relay(
            c.encode(handshake, { mode: FROM_SERVER, noise: reply.noise, peerAddress }),
            req.from,
            opts
          )
          return
        }
        case FROM_SECOND_RELAY: {
          if (!relayAddress) return
          req.relay(
            c.encode(handshake, { mode: FROM_SERVER, noise: reply.noise, peerAddress }),
            relayAddress,
            opts
          )
          return // eslint-disable-line
        }
      }
    } else {
      switch (mode) {
        case FROM_CLIENT: {
          // TODO: if no relay is known route closer to the target instead of timing out
          if (!noise) return
          if (!relay && !relayAddress) {
            // help the user route
            req.reply(null, { token: false, closerNodes: true })
            return
          }
          req.relay(
            c.encode(handshake, {
              mode: FROM_RELAY,
              noise,
              peerAddress: req.from,
              relayAddress: null
            }),
            relayAddress || relay
          )
          return
        }
        case FROM_RELAY: {
          if (!relay || !noise) return
          req.relay(
            c.encode(handshake, {
              mode: FROM_SECOND_RELAY,
              noise,
              peerAddress,
              relayAddress: req.from
            }),
            relay
          )
          return
        }
        case FROM_SERVER: {
          if (!peerAddress || !noise) return
          req.reply(
            c.encode(handshake, { mode: REPLY, noise, peerAddress: req.from, relayAddress: null }),
            { to: peerAddress, closerNodes: false, token: false }
          )
          return // eslint-disable-line
        }
      }
    }
  }

  async peerHolepunch(target, { id, payload, peerAddress, socket, session }, to) {
    const dht = this.dht
    const requestValue = c.encode(holepunch, {
      mode: FROM_CLIENT,
      id,
      payload,
      peerAddress
    })

    const res = await dht.request(
      { command: COMMANDS.PEER_HOLEPUNCH, target, value: requestValue },
      to,
      { socket, session }
    )

    const hp = decode(holepunch, res.value)
    if (!hp || hp.mode !== REPLY || to.host !== res.from.host || to.port !== res.from.port) {
      throw BAD_HOLEPUNCH_REPLY()
    }

    return {
      from: res.from,
      to: res.to,
      payload: hp.payload,
      peerAddress: hp.peerAddress || to
    }
  }

  async onpeerholepunch(req) {
    const hp = req.value && decode(holepunch, req.value)
    if (!hp) return

    const { mode, id, payload, peerAddress } = hp

    const state = req.target && this.get(req.target)
    const isServer = !!(state && state.onpeerholepunch)
    const relay = state && state.relay

    switch (mode) {
      case FROM_CLIENT: {
        if (!peerAddress && !relay) return
        req.relay(
          c.encode(holepunch, { mode: FROM_RELAY, id, payload, peerAddress: req.from }),
          peerAddress || relay
        )
        return
      }
      case FROM_RELAY: {
        if (!isServer || !peerAddress) return
        let reply = null
        try {
          reply = await state.onpeerholepunch({ id, payload, peerAddress }, req)
        } catch (e) {
          safetyCatch(e)
          return
        }
        if (!reply) return
        const opts = { socket: reply.socket, closerNodes: false, token: false }
        req.relay(
          c.encode(holepunch, { mode: FROM_SERVER, id: 0, payload: reply.payload, peerAddress }),
          req.from,
          opts
        )
        return
      }
      case FROM_SERVER: {
        req.reply(c.encode(holepunch, { mode: REPLY, id, payload, peerAddress: req.from }), {
          to: peerAddress,
          closerNodes: false,
          token: false
        })
        return // eslint-disable-line
      }
    }
  }
}

function decode(enc, val) {
  try {
    return c.decode(enc, val)
  } catch {
    return null
  }
}

function toString(t) {
  return typeof t === 'string' ? t : b4a.toString(t, 'hex')
}
const sodium = require('sodium-universal')
const b4a = require('b4a')
const { holepunchPayload } = require('./messages')

module.exports = class HolepunchPayload {
  constructor(holepunchSecret) {
    this._sharedSecret = holepunchSecret
    this._localSecret = b4a.allocUnsafe(32)

    sodium.randombytes_buf(this._localSecret)
  }

  decrypt(buffer) {
    const state = { start: 24, end: buffer.byteLength - 16, buffer }

    if (state.end <= state.start) return null

    const nonce = buffer.subarray(0, 24)
    const msg = state.buffer.subarray(state.start, state.end)
    const cipher = state.buffer.subarray(state.start)

    if (!sodium.crypto_secretbox_open_easy(msg, cipher, nonce, this._sharedSecret)) return null

    try {
      return holepunchPayload.decode(state)
    } catch {
      return null
    }
  }

  encrypt(payload) {
    const state = { start: 24, end: 24, buffer: null }
    holepunchPayload.preencode(state, payload)
    state.buffer = b4a.allocUnsafe(state.end + 16)

    const nonce = state.buffer.subarray(0, 24)
    const msg = state.buffer.subarray(state.start, state.end)
    const cipher = state.buffer.subarray(state.start)

    holepunchPayload.encode(state, payload)
    sodium.randombytes_buf(nonce)
    sodium.crypto_secretbox_easy(cipher, msg, nonce, this._sharedSecret)

    return state.buffer
  }

  token(addr) {
    const out = b4a.allocUnsafe(32)
    sodium.crypto_generichash(out, b4a.from(addr.host), this._localSecret)
    return out
  }
}
const DONE = Promise.resolve(true)
const DESTROYED = Promise.resolve(false)

module.exports = class Semaphore {
  constructor(limit = 1) {
    this.limit = limit
    this.active = 0
    this.waiting = []

    this.flushedPromise = null
    this.flushedResolve = null

    this.destroyed = false

    this._onwait = this._queueWaiting.bind(this)
    this._onflush = this._queueFlushed.bind(this)
  }

  _queueWaiting(resolve) {
    this.waiting.push(resolve)
  }

  _queueFlushed(resolve) {
    this.flushedResolve = resolve
  }

  wait() {
    if (this.destroyed === true) return DESTROYED

    if (this.active < this.limit && this.waiting.length === 0) {
      this.active++
      return DONE
    }

    return new Promise(this._onwait)
  }

  signal() {
    if (this.destroyed === true) return

    this.active--
    while (this.active < this.limit && this.waiting.length > 0 && this.destroyed === false) {
      this.active++
      this.waiting.shift()(true)
    }

    if (this.active === 0 && this.flushedResolve) {
      const resolve = this.flushedResolve
      this.flushedResolve = null
      this.flushedPromise = null
      resolve(true)
    }
  }

  async flush() {
    if (this.destroyed === true) return
    if (this.active === 0) return
    if (this.flushedPromise) return this.flushedPromise
    this.flushedPromise = new Promise(this._onflush)
    return this.flushedPromise
  }

  destroy() {
    this.destroyed = true
    this.active = 0
    while (this.waiting.length) this.waiting.pop()(false)
    if (this.flushedResolve) this.flushedResolve(false)
  }
}
const { EventEmitter } = require('events')
const safetyCatch = require('safety-catch')
const NoiseSecretStream = require('@hyperswarm/secret-stream')
const b4a = require('b4a')
const relay = require('blind-relay')
const NoiseWrap = require('./noise-wrap')
const Announcer = require('./announcer')
const { FIREWALL, ERROR } = require('./constants')
const { unslabbedHash } = require('./crypto')
const SecurePayload = require('./secure-payload')
const Holepuncher = require('./holepuncher')
const {
  clearRelayTimeout,
  confirmDirectUpgrade,
  destroyRelayConnection
} = require('./relay-connection')
const { isPrivate } = require('bogon')
const { ALREADY_LISTENING, NODE_DESTROYED, KEYPAIR_ALREADY_USED } = require('./errors')

const HANDSHAKE_CLEAR_WAIT = 10000
const HANDSHAKE_INITIAL_TIMEOUT = 10000

module.exports = class Server extends EventEmitter {
  constructor(dht, opts = {}) {
    super()

    this.dht = dht
    this.target = null

    this.closed = false
    this.firewall = opts.firewall || (() => false)
    this.holepunch = opts.holepunch || (() => true)
    this.relayThrough = opts.relayThrough || null
    this.relayKeepAlive = opts.relayKeepAlive || 5000
    this.pool = opts.pool || null
    this.createHandshake = opts.createHandshake || defaultCreateHandshake
    this.createSecretStream = opts.createSecretStream || defaultCreateSecretStream
    this.suspended = false
    this.handshakeClearWait = opts.handshakeClearWait || HANDSHAKE_CLEAR_WAIT

    this._shareLocalAddress = opts.shareLocalAddress !== false
    this._reusableSocket = !!opts.reusableSocket
    this._neverPunch = opts.holepunch === false // useful for fully disabling punching
    this._keyPair = null
    this._announcer = null
    this._connects = new Map()
    this._holepunches = []
    this._listening = null
    this._closing = null
  }

  get listening() {
    return this._listening !== null
  }

  get publicKey() {
    return this._keyPair && this._keyPair.publicKey
  }

  get relayAddresses() {
    return this._announcer ? this._announcer.relayAddresses : []
  }

  onconnection(encryptedSocket) {
    this.emit('connection', encryptedSocket)
  }

  async suspend({ log = noop } = {}) {
    log('Suspending hyperdht server')
    if (this._listening !== null) await this._listening
    log('Suspending hyperdht server (post listening)')
    this.suspended = true
    this._clearAll()
    return this._announcer ? this._announcer.suspend({ log }) : Promise.resolve()
  }

  async resume() {
    if (this._listening !== null) await this._listening
    this.suspended = false
    return this._announcer ? this._announcer.resume() : Promise.resolve()
  }

  address() {
    if (!this._keyPair) return null

    return {
      publicKey: this._keyPair.publicKey,
      host: this.dht.host,
      port: this.dht.port
    }
  }

  close() {
    if (this._closing) return this._closing
    this._closing = this._close()
    return this._closing
  }

  _gc() {
    this.dht.listening.delete(this)
    if (this.target) this.dht._router.delete(this.target)
  }

  async _stopListening() {
    try {
      if (this._announcer) await this._announcer.stop()
    } catch {
      // ignore
    }

    this._announcer = null
    this._listening = null
    this._keyPair = null
  }

  async _close() {
    if (this._listening === null) {
      this.closed = true
      this.emit('close')
      return
    }

    try {
      await this._listening
    } catch (err) {
      safetyCatch(err)
    }

    this._gc()
    this._clearAll()

    await this._stopListening()

    this.closed = true
    this.emit('close')
  }

  _clearAll() {
    while (this._holepunches.length > 0) {
      const h = this._holepunches.pop()
      if (h && h.puncher) h.puncher.destroy()
      if (h && h.clearing) clearTimeout(h.clearing)
      if (h && h.prepunching) clearTimeout(h.prepunching)
      if (h && h.rawStream) h.rawStream.destroy()
    }

    this._connects.clear()
  }

  async listen(keyPair = this.dht.defaultKeyPair, opts = {}) {
    if (this._listening !== null) throw ALREADY_LISTENING()
    if (this.dht.destroyed) throw NODE_DESTROYED()

    this._listening = this._listen(keyPair, opts)
    await this._listening
    return this
  }

  async _listen(keyPair, opts) {
    // From now on, the DHT object which created me is responsible for closing me
    this.dht.listening.add(this)

    try {
      await this.dht.bind()
      if (this._closing) return

      for (const s of this.dht.listening) {
        if (s._keyPair && b4a.equals(s._keyPair.publicKey, keyPair.publicKey)) {
          throw KEYPAIR_ALREADY_USED()
        }
      }

      this.target = unslabbedHash(keyPair.publicKey)
      this._keyPair = keyPair
      this._announcer = new Announcer(this.dht, keyPair, this.target, opts)

      this.dht._router.set(this.target, {
        relay: null,
        record: this._announcer.record,
        onpeerhandshake: this._onpeerhandshake.bind(this),
        onpeerholepunch: this._onpeerholepunch.bind(this)
      })

      // warm it up for now
      this._localAddresses().catch(safetyCatch)

      await this._announcer.start()
    } catch (err) {
      await this._stopListening()
      this._gc()
      throw err
    }

    if (this._closing) return
    if (this.suspended) await this._announcer.suspend()

    if (this._closing) return
    if (this.dht.destroyed) throw NODE_DESTROYED()

    if (this.pool) this.pool._attachServer(this)

    this.emit('listening')
  }

  refresh() {
    if (this._announcer && !this.suspended) this._announcer.refresh()
  }

  notifyOnline() {
    if (this._announcer) this._announcer.online.notify()
  }

  _localAddresses() {
    return this.dht.validateLocalAddresses(Holepuncher.localAddresses(this.dht.io.serverSocket))
  }

  async _addHandshake(k, noise, clientAddress, { to: serverAddress, socket }, direct) {
    let id = this._holepunches.indexOf(null)
    if (id === -1) id = this._holepunches.push(null) - 1

    const hs = {
      round: 0,
      reply: null,
      puncher: null,
      payload: null,
      rawStream: null,
      encryptedSocket: null,
      prepunching: null,
      firewalled: true,
      clearing: null,
      replyFromPuncher: false,
      onsocket: null,
      aborted: false,

      // Relay state
      relayTimeout: null,
      relayToken: null,
      relaySocket: null,
      relayClient: null,
      relayPaired: false,
      validUpgrade: true
    }

    this._holepunches[id] = hs

    const handshake = this.createHandshake(this._keyPair, null)

    let remotePayload
    try {
      remotePayload = await handshake.recv(noise)
    } catch (err) {
      safetyCatch(err)
      this._clearLater(hs, id, k)
      return null
    }

    if (this._closing || this.suspended) return null

    try {
      hs.firewalled = await this.firewall(handshake.remotePublicKey, remotePayload, clientAddress)
    } catch (err) {
      safetyCatch(err)
    }

    if (this._closing || this.suspended) return null

    if (hs.firewalled) {
      this._clearLater(hs, id, k)
      return null
    }

    const error =
      remotePayload.version === 1
        ? remotePayload.udx
          ? ERROR.NONE
          : ERROR.ABORTED
        : ERROR.VERSION_MISMATCH

    const addresses = []
    const ourRemoteAddr = this.dht.remoteAddress()
    const ourLocalAddrs = this._shareLocalAddress ? await this._localAddresses() : null

    if (this._closing || this.suspended) return null

    if (ourRemoteAddr) addresses.push(ourRemoteAddr)
    if (ourLocalAddrs) addresses.push(...ourLocalAddrs)

    if (error === ERROR.NONE) {
      hs.rawStream = this.dht.createRawStream({
        framed: true,
        firewall(socket, port, host) {
          if (!(port > 0 && port < 65536)) return true

          // Check if the traffic originated from the socket on which we're expecting relay traffic. If so,
          // we haven't hole punched yet and the other side is just sending us traffic through the relay.
          if (hs.relaySocket && isRelay(hs.relaySocket, socket, port, host)) {
            hs.validUpgrade = false
            return false
          }

          hs.onsocket(socket, port, host)
          hs.validUpgrade = true
          return false
        }
      })

      hs.rawStream.on('error', autoDestroy)

      // Handles the case where onsocket is never called, but the stream got setup
      // This can happen on a relayed connection which never connects directly
      // (onsocket is called there only when the direct connection is established)
      const onrawstreamclose = () => {
        if (this._closing) return
        this._clearLater(hs, id, k)
      }
      hs.rawStream.on('close', onrawstreamclose)

      hs.onsocket = (socket, port, host) => {
        if (hs.rawStream === null) return // Already hole punched

        this._clearLater(hs, id, k)

        if (hs.prepunching) {
          clearTimeout(hs.prepunching)
          hs.prepunching = null
        }

        if (this._reusableSocket && remotePayload.udx.reusableSocket) {
          this.dht._socketPool.routes.add(handshake.remotePublicKey, hs.rawStream)
        }

        hs.rawStream.removeListener('error', autoDestroy)
        hs.rawStream.removeListener('close', onrawstreamclose)

        if (hs.rawStream.connected) {
          const rawStream = hs.rawStream
          const remoteChanging = rawStream.changeRemote(socket, remotePayload.udx.id, port, host)
          confirmDirectUpgrade(hs, rawStream, remoteChanging)
        } else {
          hs.rawStream.connect(socket, remotePayload.udx.id, port, host)
          hs.encryptedSocket = this.createSecretStream(false, hs.rawStream, {
            handshake: h,
            keepAlive: this.dht.connectionKeepAlive
          })

          this.onconnection(hs.encryptedSocket)
        }

        if (hs.puncher) {
          hs.puncher.onabort = noop
          hs.puncher.destroy()
        }

        hs.rawStream = null
      }

      function autoDestroy() {
        if (hs.puncher) hs.puncher.destroy()
      }
    }

    const relayAddresses = this.relayAddresses
    const relayThrough = selectRelay(this.relayThrough)

    if (relayThrough) hs.relayToken = relay.token()

    try {
      hs.reply = await handshake.send({
        error,
        firewall: ourRemoteAddr ? FIREWALL.OPEN : FIREWALL.UNKNOWN,
        holepunch: ourRemoteAddr ? null : { id, relays: this._announcer.relays },
        addresses4: addresses,
        addresses6: null,
        udx: {
          reusableSocket: this._reusableSocket,
          id: hs.rawStream ? hs.rawStream.id : 0,
          seq: 0
        },
        secretStream: {},
        relayThrough: relayThrough ? { publicKey: relayThrough, token: hs.relayToken } : null,
        relayAddresses: relayAddresses.length ? relayAddresses : null
      })
    } catch (err) {
      safetyCatch(err)
      if (hs.rawStream) hs.rawStream.destroy()
      this._clearLater(hs, id, k)
      return null
    }

    if (this._closing || this.suspended) {
      if (hs.rawStream) hs.rawStream.destroy()
      return null
    }

    const h = handshake.final()

    if (error !== ERROR.NONE) {
      if (hs.rawStream) hs.rawStream.destroy()
      this._clearLater(hs, id, k)
      return hs
    }

    if (remotePayload.firewall === FIREWALL.OPEN || direct) {
      const sock = direct ? socket : this.dht.socket
      this.dht.stats.punches.open++
      hs.onsocket(sock, clientAddress.port, clientAddress.host)
      return hs
    }

    if (relayThrough || remotePayload.relayThrough) {
      this._relayConnection(hs, relayThrough, remotePayload, h)
    }

    const onabort = () => {
      hs.aborted = true
      if (hs.prepunching) clearTimeout(hs.prepunching)
      hs.prepunching = null
      if (hs.puncher) {
        hs.puncher.onabort = noop
        hs.puncher.destroy()
      }
      if (hs.rawStream.destroyed) {
        this._clearLater(hs, id, k)
        return
      }

      hs.rawStream.on('close', () => this._clearLater(hs, id, k))
      if (hs.relayToken === null) hs.rawStream.destroy()
    }

    if (!direct && clientAddress.host === serverAddress.host) {
      const clientAddresses = remotePayload.addresses4.filter((addr) => isPrivate(addr.host))

      if (clientAddresses.length > 0 && this._shareLocalAddress) {
        const myAddresses = await this._localAddresses()
        const addr = Holepuncher.matchAddress(myAddresses, clientAddresses)

        if (addr) {
          hs.payload = new SecurePayload(h.holepunchSecret)
          setupHolepuncher(this.dht, hs, remotePayload.firewall, onabort)
          hs.prepunching = setTimeout(onabort, HANDSHAKE_INITIAL_TIMEOUT)
          return hs
        }
      }
    }

    if (this._closing || this.suspended) return null

    if (ourRemoteAddr || this._neverPunch) {
      hs.prepunching = setTimeout(onabort, HANDSHAKE_INITIAL_TIMEOUT)
      return hs
    }

    hs.payload = new SecurePayload(h.holepunchSecret)
    setupHolepuncher(this.dht, hs, remotePayload.firewall, onabort)
    hs.replyFromPuncher = true
    hs.prepunching = setTimeout(hs.puncher.destroy.bind(hs.puncher), HANDSHAKE_INITIAL_TIMEOUT)

    return hs
  }

  _clearLater(hs, id, k) {
    if (hs.clearing) return
    hs.clearing = setTimeout(() => this._clear(hs, id, k), this.handshakeClearWait)
  }

  _clear(hs, id, k) {
    if (id >= this._holepunches.length || this._holepunches[id] !== hs) return
    if (hs.clearing) clearTimeout(hs.clearing)

    this._holepunches[id] = null
    while (
      this._holepunches.length > 0 &&
      this._holepunches[this._holepunches.length - 1] === null
    ) {
      this._holepunches.pop()
    }
    this._connects.delete(k)
  }

  async _onpeerhandshake({ noise, peerAddress }, req) {
    const k = b4a.toString(noise, 'hex')

    // The next couple of statements MUST run within the same tick to prevent
    // a malicious peer from flooding us with handshakes.
    let p = this._connects.get(k)
    if (!p) {
      p = this._addHandshake(k, noise, peerAddress || req.from, req, !peerAddress)
      this._connects.set(k, p)
    }

    const h = await p
    if (!h) return null

    if (this._closing !== null || this.suspended) return null

    // Routed handshake replies advertise the socket they are sent from as the
    // server address. Same-LAN prepunch also creates a puncher, but it must
    // keep advertising the normal server socket so the LAN shortcut can open.
    return { socket: h.replyFromPuncher ? h.puncher.socket : null, noise: h.reply }
  }

  async _onpeerholepunch({ id, peerAddress, payload }, req) {
    const h = id < this._holepunches.length ? this._holepunches[id] : null
    if (!h) return null

    if (!peerAddress || this._closing !== null || this.suspended) return null
    if (!h.payload) return this._abort(h) // not opened

    const remotePayload = h.payload.decrypt(payload)
    if (!remotePayload) return null

    const p = h.puncher
    if (!p || !p.socket) return this._abort(h) // not opened

    const isServerRelay = this._announcer.isRelay(req.from)
    const { error, firewall, round, punching, addresses, remoteAddress, remoteToken } =
      remotePayload

    if (error !== ERROR.NONE) {
      // We actually do not need to set the round here, but just do it for consistency.
      if (round >= h.round) h.round = round
      return this._abort(h)
    }

    const token = h.payload.token(peerAddress)
    const echoed = isServerRelay && !!remoteToken && b4a.equals(token, remoteToken)

    // Update our heuristics here
    if (req.socket === p.socket) {
      p.nat.add(req.to, req.from)
    }

    if (round >= h.round) {
      h.round = round
      p.updateRemote({ punching, firewall, addresses, verified: echoed ? peerAddress.host : null })
    }

    // Wait for the analyzer to reach a conclusion...
    let stable = await p.analyze(false)
    if (p.destroyed) return null

    if (!p.remoteHolepunching && !stable) {
      stable = await p.analyze(true)
      if (p.destroyed) return null
      if (!stable) return this._abort(h)
    }

    // Fast mode! If we are consistent and the remote has opened a session to us (remoteAddress)
    // then fire a quick punch back. Note the await here just waits for the udp socket to flush.
    if (
      isConsistent(p.nat.firewall) &&
      remoteAddress &&
      hasSameAddr(p.nat.addresses, remoteAddress)
    ) {
      await p.ping(peerAddress)
      if (p.destroyed) return null
    }

    // Remote said they are punching (or willing to), so we will punch as well.
    // Note that this returns when the punching has STARTED, so no guarantee
    // we will have a connection after this promise etc.
    if (p.remoteHolepunching) {
      // TODO: still continue here if a local connection might work, but then do not holepunch...
      if (!this.holepunch(p.remoteFirewall, p.nat.firewall, p.remoteAddresses, p.nat.addresses)) {
        return p.destroyed ? null : this._abort(h)
      }

      if (h.prepunching) {
        clearTimeout(h.prepunching)
        h.prepunching = null
      }

      if (p.remoteFirewall >= FIREWALL.RANDOM || p.nat.firewall >= FIREWALL.RANDOM) {
        if (
          this.dht._randomPunches >= this.dht._randomPunchLimit ||
          Date.now() - this.dht._lastRandomPunch < this.dht._randomPunchInterval
        ) {
          if (!h.relayToken) return this._abort(h, ERROR.TRY_LATER)
          return {
            socket: p.socket,
            payload: h.payload.encrypt({
              error: ERROR.TRY_LATER,
              firewall: p.nat.firewall,
              round: h.round,
              connected: p.connected,
              punching: p.punching,
              addresses: p.nat.addresses,
              remoteAddress: null,
              token: isServerRelay ? token : null,
              remoteToken: remotePayload.token
            })
          }
        }
      }

      const punching = await p.punch()
      if (p.destroyed) return null
      if (!punching) return this._abort(h)
    }

    // Freeze that analysis as soon as we have a result we are giving to the other peer
    if (p.nat.firewall !== FIREWALL.UNKNOWN) {
      p.nat.freeze()
    }

    return {
      socket: p.socket,
      payload: h.payload.encrypt({
        error: ERROR.NONE,
        firewall: p.nat.firewall,
        round: h.round,
        connected: p.connected,
        punching: p.punching,
        addresses: p.nat.addresses,
        remoteAddress: null,
        token: isServerRelay ? token : null,
        remoteToken: remotePayload.token
      })
    }
  }

  _abort(h, error = ERROR.ABORTED) {
    if (!h.payload) {
      if (h.puncher) h.puncher.destroy()
      return null
    }

    const payload = h.payload.encrypt({
      error,
      firewall: FIREWALL.UNKNOWN,
      round: h.round,
      connected: false,
      punching: false,
      addresses: null,
      remoteAddress: null,
      token: null,
      remoteToken: null
    })

    if (h.puncher) h.puncher.destroy()

    return { socket: this.dht.socket, payload }
  }

  _relayConnection(hs, relayThrough, remotePayload, h) {
    this.dht.stats.relaying.attempts++

    let isInitiator
    let publicKey
    let token

    if (relayThrough) {
      isInitiator = true
      publicKey = relayThrough
      token = hs.relayToken
    } else {
      isInitiator = false
      publicKey = remotePayload.relayThrough.publicKey
      token = remotePayload.relayThrough.token
    }

    hs.relayToken = token
    hs.relaySocket = this.dht.connect(publicKey)
    hs.relaySocket.setKeepAlive(this.relayKeepAlive)
    hs.relayClient = relay.Client.from(hs.relaySocket, { id: hs.relaySocket.publicKey })
    hs.relayTimeout = setTimeout(onabort, 15000)

    hs.relayClient
      .pair(isInitiator, token, hs.rawStream)
      .on('error', onabort)
      .on('data', (remoteId) => {
        if (hs.relayTimeout) clearRelayTimeout(hs)
        if (hs.rawStream === null) {
          onabort(null)
          return
        }

        hs.relayPaired = true
        this.dht.stats.relaying.successes++

        if (hs.prepunching) clearTimeout(hs.prepunching)
        hs.prepunching = null

        const { remotePort, remoteHost, socket } = hs.relaySocket.rawStream

        hs.rawStream
          .on('close', () => destroyRelayConnection(hs))
          .connect(socket, remoteId, remotePort, remoteHost)

        hs.encryptedSocket = this.createSecretStream(false, hs.rawStream, {
          handshake: h,
          keepAlive: this.dht.connectionKeepAlive
        })

        this.onconnection(hs.encryptedSocket)
      })

    const dht = this.dht
    function onabort() {
      if (!hs.relayPaired) dht.stats.relaying.aborts++
      destroyRelayConnection(hs)
      if (hs.aborted && hs.rawStream) hs.rawStream.destroy()
    }
  }
}

function isConsistent(fw) {
  return fw === FIREWALL.OPEN || fw === FIREWALL.CONSISTENT
}

function hasSameAddr(addrs, other) {
  if (addrs === null) return false

  for (const addr of addrs) {
    if (addr.port === other.port && addr.host === other.host) return true
  }
  return false
}

function defaultCreateHandshake(keyPair, remotePublicKey) {
  return new NoiseWrap(keyPair, remotePublicKey)
}

function defaultCreateSecretStream(isInitiator, rawStream, opts) {
  return new NoiseSecretStream(isInitiator, rawStream, opts)
}

function setupHolepuncher(dht, hs, remoteFirewall, onabort) {
  if (hs.puncher) return

  hs.puncher = new Holepuncher(dht, dht.session(), false, remoteFirewall)
  hs.puncher.onconnect = hs.onsocket
  hs.puncher.onabort = onabort
}

function isRelay(relaySocket, socket, port, host) {
  const stream = relaySocket.rawStream
  if (!stream) return false
  if (stream.socket !== socket) return false
  return port === stream.remotePort && host === stream.remoteHost
}

function selectRelay(relayThrough) {
  if (typeof relayThrough === 'function') relayThrough = relayThrough()
  if (relayThrough === null) return null
  if (Array.isArray(relayThrough)) {
    return relayThrough[Math.floor(Math.random() * relayThrough.length)]
  }
  return relayThrough
}

function noop() {}
module.exports = class Sleeper {
  constructor() {
    this._timeout = null
    this._resolve = null

    this._start = (resolve) => {
      this._resolve = resolve
    }

    this._trigger = () => {
      if (this._resolve === null) return
      const resolve = this._resolve
      this._timeout = null
      this._resolve = null
      resolve()
    }
  }

  pause(ms) {
    const p = new Promise(this._start)
    if (this._timeout !== null) {
      clearTimeout(this._timeout)
      this._trigger()
    }
    this._timeout = setTimeout(this._trigger, ms)
    return p
  }

  resume() {
    if (this._timeout !== null) {
      clearTimeout(this._timeout)
      this._trigger()
    }
  }
}
const b4a = require('b4a')

const LINGER_TIME = 3000

module.exports = class SocketPool {
  constructor(dht, host) {
    this._dht = dht
    this._sockets = new Map()
    this._lingering = new Set() // updated by the ref
    this._host = host

    this.routes = new SocketRoutes(this)
  }

  _onmessage(ref, data, address) {
    this._dht.onmessage(ref.socket, data, address)
  }

  _add(ref) {
    this._sockets.set(ref.socket, ref)
  }

  _remove(ref) {
    this._sockets.delete(ref.socket)
    this._lingering.delete(ref)
  }

  lookup(socket) {
    return this._sockets.get(socket) || null
  }

  setReusable(socket, bool) {
    const ref = this.lookup(socket)
    if (ref) ref.reusable = bool
  }

  acquire() {
    // TODO: Enable socket reuse
    return new SocketRef(this)
  }

  async destroy() {
    const closing = []

    for (const ref of this._sockets.values()) {
      ref._unlinger()
      closing.push(ref.socket.close())
    }

    await Promise.allSettled(closing)
  }
}

class SocketRoutes {
  constructor(pool) {
    this._pool = pool
    this._routes = new Map()
  }

  add(publicKey, rawStream) {
    if (rawStream.socket) this._onconnect(publicKey, rawStream)
    else rawStream.on('connect', this._onconnect.bind(this, publicKey, rawStream))
  }

  get(publicKey) {
    const id = b4a.toString(publicKey, 'hex')
    const route = this._routes.get(id)
    if (!route) return null
    return route
  }

  _onconnect(publicKey, rawStream) {
    const id = b4a.toString(publicKey, 'hex')
    const socket = rawStream.socket

    let route = this._routes.get(id)

    if (!route) {
      const gc = () => {
        if (this._routes.get(id) === route) this._routes.delete(id)
        socket.removeListener('close', gc)
      }

      route = {
        socket,
        address: { host: rawStream.remoteHost, port: rawStream.remotePort },
        gc
      }

      this._routes.set(id, route)
      socket.on('close', gc)
    }

    this._pool.setReusable(socket, true)

    rawStream.on('error', () => {
      this._pool.setReusable(socket, false)
      if (!route) route = this._routes.get(id)
      if (route && route.socket === socket) route.gc()
    })
  }
}

// TODO: we should just make some "user data" object on udx to allow to attach this info
class SocketRef {
  constructor(pool) {
    this._pool = pool

    // Events
    this.onholepunchmessage = noop

    // Whether it should teardown immediately or wait a bit
    this.reusable = false

    this.socket = pool._dht.udx.createSocket()
    this.socket
      .on('close', this._onclose.bind(this))
      .on('message', this._onmessage.bind(this))
      .on('idle', this._onidle.bind(this))
      .on('busy', this._onbusy.bind(this))
      .bind(0, this._pool._host)

    this._refs = 1
    this._released = false
    this._closed = false

    this._timeout = null
    this._wasBusy = false

    this._pool._add(this)
  }

  _onclose() {
    this._pool._remove(this)
  }

  _onmessage(data, address) {
    if (data.byteLength > 1) {
      this._pool._onmessage(this, data, address)
    } else {
      this.onholepunchmessage(data, address, this)
    }
  }

  _onidle() {
    this._closeMaybe()
  }

  _onbusy() {
    this._wasBusy = true
    this._unlinger()
  }

  _reset() {
    this.onholepunchmessage = noop
  }

  _closeMaybe() {
    if (this._refs === 0 && this.socket.idle && !this._timeout) this._close()
  }

  _lingeringClose() {
    this._pool._lingering.delete(this)
    this._timeout = null
    this._closeMaybe()
  }

  _close() {
    this._unlinger()

    if (this.reusable && this._wasBusy) {
      this._wasBusy = false
      this._pool._lingering.add(this)
      this._timeout = setTimeout(this._lingeringClose.bind(this), LINGER_TIME)
      return
    }

    this._closed = true
    this.socket.close()
  }

  _unlinger() {
    if (this._timeout !== null) {
      clearTimeout(this._timeout)
      this._pool._lingering.delete(this)
      this._timeout = null
    }
  }

  get free() {
    return this._refs === 0
  }

  active() {
    this._refs++
    this._unlinger()
  }

  inactive() {
    this._refs--
    this._closeMaybe()
  }

  address() {
    return this.socket.address()
  }

  release() {
    if (this._released) return

    this._released = true
    this._reset()

    this._refs--
    this._closeMaybe()
  }
}

function noop() {}
{
  "name": "hyperdht",
  "version": "6.33.0",
  "description": "The DHT powering Hyperswarm",
  "main": "index.js",
  "browser": "browser.js",
  "bin": {
    "hyperdht": "./bin.js"
  },
  "files": [
    "index.js",
    "browser.js",
    "testnet.js",
    "bin.js",
    "lib/**.js"
  ],
  "imports": {
    "events": {
      "bare": "bare-events",
      "default": "events"
    },
    "child_process": {
      "bare": "bare-node-child-process",
      "default": "child_process"
    }
  },
  "dependencies": {
    "@hyperswarm/secret-stream": "^6.6.2",
    "b4a": "^1.3.1",
    "bare-events": "^2.2.0",
    "blind-relay": "^1.3.0",
    "bogon": "^1.0.0",
    "compact-encoding": "^3.0.0",
    "dht-rpc": "^6.15.1",
    "hypercore-crypto": "^3.3.0",
    "hypercore-id-encoding": "^1.2.0",
    "hyperdht-address": "^1.0.1",
    "noise-curve-ed": "^2.0.0",
    "noise-handshake": "^4.0.0",
    "record-cache": "^1.1.1",
    "safety-catch": "^1.0.1",
    "signal-promise": "^1.0.3",
    "sodium-universal": "^5.0.1",
    "streamx": "^2.16.1",
    "unslab": "^1.3.0",
    "xache": "^1.1.0"
  },
  "devDependencies": {
    "bare-node-child-process": "^1.0.1",
    "brittle": "^3.0.0",
    "graceful-goodbye": "^1.3.0",
    "newline-decoder": "^1.0.2",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0"
  },
  "scripts": {
    "format": "prettier --write .",
    "test": "prettier --check . && node test/all.js",
    "test:bare": "bare test/all.js",
    "test:generate": "brittle -r test/all.js test/*.js",
    "integration": "brittle test/integration/*.js",
    "end-to-end": "brittle test/end-to-end/*.js"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "directories": {
    "lib": "lib",
    "test": "test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/hyperdht.git"
  },
  "keywords": [],
  "bugs": {
    "url": "https://github.com/holepunchto/hyperdht/issues"
  },
  "homepage": "https://github.com/holepunchto/hyperdht#readme"
}
{
  "name": "hyperschema",
  "version": "1.21.0",
  "description": "Create registries of declarative compact-encoding schemas",
  "files": [
    "lib/*.js",
    "builder.mjs",
    "builder.cjs",
    "runtime.mjs",
    "runtime.cjs",
    "primitives.mjs",
    "primitives.cjs"
  ],
  "exports": {
    "./package": "./package.json",
    ".": {
      "import": "./builder.mjs",
      "default": "./builder.cjs"
    },
    "./runtime": {
      "import": "./runtime.mjs",
      "default": "./runtime.cjs"
    },
    "./primitives": {
      "import": "./primitives.mjs",
      "default": "./primitives.cjs"
    }
  },
  "imports": {
    "fs": {
      "bare": "bare-fs",
      "default": "fs"
    },
    "path": {
      "bare": "bare-path",
      "default": "path"
    }
  },
  "scripts": {
    "format": "prettier . --write",
    "test": "prettier . --check && brittle test/index.js",
    "test:bare": "prettier . --check && bare test/index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/hyperschema.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/hyperschema/issues"
  },
  "homepage": "https://github.com/holepunchto/hyperschema#readme",
  "dependencies": {
    "bare-fs": "^4.0.1",
    "compact-encoding": "^3.0.0",
    "generate-object-property": "^2.0.0",
    "generate-string": "^1.0.1"
  },
  "devDependencies": {
    "brittle": "^3.7.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0",
    "test-tmp": "^1.3.0"
  }
}
module.exports = {
  c: require('compact-encoding')
}
const { EventEmitter } = require('events')
const { getStreamError } = require('streamx')
const DHT = require('hyperdht')
const spq = require('shuffled-priority-queue')
const b4a = require('b4a')
const unslab = require('unslab')

const PeerInfo = require('./lib/peer-info')
const RetryTimer = require('./lib/retry-timer')
const ConnectionSet = require('./lib/connection-set')
const PeerDiscovery = require('./lib/peer-discovery')

const MAX_PEERS = 64
const MAX_PARALLEL = 3
const MAX_CLIENT_CONNECTIONS = Infinity // TODO: Change
const MAX_SERVER_CONNECTIONS = Infinity

const ERR_MISSING_TOPIC = 'Topic is required and must be a 32-byte buffer'
const ERR_DESTROYED = 'Swarm has been destroyed'
const ERR_DUPLICATE = 'Duplicate connection'
const ERR_FIREWALL = 'Peer is firewalled'

module.exports = class Hyperswarm extends EventEmitter {
  constructor(opts = {}) {
    super()
    const {
      seed,
      relayThrough,
      keyPair = DHT.keyPair(seed),
      maxPeers = MAX_PEERS,
      maxClientConnections = MAX_CLIENT_CONNECTIONS,
      maxServerConnections = MAX_SERVER_CONNECTIONS,
      maxParallel = MAX_PARALLEL,
      firewall = allowAll
    } = opts
    this.keyPair = keyPair

    this.dht =
      opts.dht ||
      new DHT({
        bootstrap: opts.bootstrap,
        nodes: opts.nodes,
        port: opts.port,
        deferRandomPunch: opts.deferRandomPunch,
        randomPunchInterval: opts.randomPunchInterval
      })
    this.server = this.dht.createServer(
      {
        firewall: this._handleFirewall.bind(this),
        relayThrough: this._maybeRelayConnection.bind(this),
        handshakeClearWait: opts.handshakeClearWait
      },
      this._handleServerConnection.bind(this)
    )

    this.destroyed = false
    this.suspended = false
    this.maxPeers = maxPeers
    this.maxClientConnections = maxClientConnections
    this.maxServerConnections = maxServerConnections
    this.maxParallel = maxParallel
    this.relayThrough = relayThrough ? toRelayFunction(relayThrough) : null

    this.connecting = 0
    this.connections = new Set()
    this.peers = new Map()
    this.explicitPeers = new Set()
    this.listening = null
    this.stats = {
      updates: 0,
      connects: {
        client: {
          opened: 0,
          closed: 0,
          attempted: 0
        },
        server: {
          // Note: there is no notion of 'attempts' for server connections
          opened: 0,
          closed: 0
        }
      },
      bannedPeers: 0
    }

    this._discovery = new Map()
    this._timer = new RetryTimer(this._requeue.bind(this), {
      backoffs: opts.backoffs,
      jitter: opts.jitter
    })
    this._queue = spq()

    this._allConnections = new ConnectionSet()
    this._pendingFlushes = []
    this._flushTick = 0

    this._drainingQueue = false
    this._clientConnections = 0
    this._serverConnections = 0
    this._firewall = firewall

    this.dht.on('network-change', this._handleNetworkChange.bind(this))
    this.dht.on('network-update', this._handleNetworkUpdate.bind(this))
    this.on('update', this._handleUpdate)
  }

  _maybeRelayConnection(force) {
    if (!this.relayThrough) return null
    return this.relayThrough(force, this)
  }

  _enqueue(peerInfo) {
    if (peerInfo.queued) return
    peerInfo.queued = true
    peerInfo._flushTick = this._flushTick
    this._queue.add(peerInfo)

    this._attemptClientConnections()
  }

  _requeue(batch) {
    if (this.suspended) return
    for (const peerInfo of batch) {
      peerInfo.waiting = false

      if (
        peerInfo._updatePriority() === false ||
        this._allConnections.has(peerInfo.publicKey) ||
        peerInfo.queued
      ) {
        continue
      }
      peerInfo.queued = true
      peerInfo._flushTick = this._flushTick
      this._queue.add(peerInfo)
    }

    this._attemptClientConnections()
  }

  _flushMaybe(peerInfo) {
    for (let i = 0; i < this._pendingFlushes.length; i++) {
      const flush = this._pendingFlushes[i]
      if (peerInfo._flushTick > flush.tick) continue
      if (--flush.missing > 0) continue
      flush.onflush(true)
      this._pendingFlushes.splice(i--, 1)
    }
  }

  _withinMaxPeers() {
    const e = this.explicitPeers.size
    const factor = e === 0 ? 1 : e < 2 ? 2 : e < 4 ? 3 : 4
    return factor * this._allConnections.size < this.maxPeers
  }

  _flushAllMaybe() {
    if (
      this.connecting > 0 ||
      (this._withinMaxPeers() && this._clientConnections < this.maxClientConnections)
    ) {
      return false
    }

    while (this._pendingFlushes.length) {
      const flush = this._pendingFlushes.pop()
      flush.onflush(true)
    }

    return true
  }

  _shouldConnectExplicit() {
    return !this.destroyed && !this.suspended && this.connecting < this.maxParallel
  }

  _shouldConnect() {
    return (
      !this.destroyed &&
      !this.suspended &&
      this.connecting < this.maxParallel &&
      this._withinMaxPeers() &&
      this._clientConnections < this.maxClientConnections
    )
  }

  _shouldRequeue(peerInfo) {
    if (this.suspended) return false
    if (peerInfo.explicit) return true
    for (const topic of peerInfo.topics) {
      if (this._discovery.has(b4a.toString(topic, 'hex')) && !this.destroyed) {
        return true
      }
    }
    return false
  }

  _connect(peerInfo, queued) {
    if (peerInfo.banned || this._allConnections.has(peerInfo.publicKey)) {
      if (queued) this._flushMaybe(peerInfo)
      return
    }

    // TODO: Support async firewalling at some point.
    if (this._handleFirewall(peerInfo.publicKey, null)) {
      if (queued) this._flushMaybe(peerInfo)
      return
    }

    const relayThrough = this._maybeRelayConnection(peerInfo.forceRelaying)
    const conn = this.dht.connect(peerInfo.publicKey, {
      relayAddresses: peerInfo.relayAddresses,
      keyPair: this.keyPair,
      relayThrough
    })
    this._allConnections.add(conn)

    this.stats.connects.client.attempted++

    this.connecting++
    this._clientConnections++
    let opened = false

    const onerror = (err) => {
      if (this.relayThrough && shouldForceRelaying(err.code)) {
        peerInfo.forceRelaying = true
        // Reset the attempts in order to fast connect to relay
        peerInfo.attempts = 0
      }
    }

    // Removed once a connection is opened
    conn.on('error', onerror)

    conn.on('open', () => {
      opened = true
      this.stats.connects.client.opened++

      this._connectDone()
      this.connections.add(conn)
      conn.removeListener('error', onerror)
      peerInfo._connected()
      peerInfo.client = true
      this.emit('connection', conn, peerInfo)
      if (queued) this._flushMaybe(peerInfo)

      this.emit('update')
    })
    conn.on('close', () => {
      if (!opened) this._connectDone()
      this.stats.connects.client.closed++

      const err = getStreamError(conn)
      if (shouldBan(err)) {
        this._banPeer(peerInfo, true, err)
      }

      this.connections.delete(conn)
      this._allConnections.delete(conn)
      this._clientConnections--
      peerInfo._disconnected()

      peerInfo.waiting = this._shouldRequeue(peerInfo) && this._timer.add(peerInfo)
      this._maybeDeletePeer(peerInfo)

      if (!opened && queued) this._flushMaybe(peerInfo)

      this._attemptClientConnections()

      this.emit('update')
    })

    this.emit('update')
  }

  _connectDone() {
    this.connecting--

    if (this.connecting < this.maxParallel) this._attemptClientConnections()
    if (this.connecting === 0) this._flushAllMaybe()
  }

  // Called when the PeerQueue indicates a connection should be attempted.
  _attemptClientConnections() {
    // Guard against re-entries - unsure if it still needed but doesn't hurt
    if (this._drainingQueue || this.suspended) return
    this._drainingQueue = true

    for (const peerInfo of this.explicitPeers) {
      if (!this._shouldConnectExplicit()) break
      if (
        peerInfo.attempts >= 5 ||
        Date.now() - peerInfo.disconnectedTime < peerInfo.attempts * 1000
      ) {
        continue
      }
      this._connect(peerInfo, false)
    }

    while (this._queue.length && this._shouldConnect()) {
      const peerInfo = this._queue.shift()
      peerInfo.queued = false
      this._connect(peerInfo, true)
    }
    this._drainingQueue = false
    if (this.connecting === 0) this._flushAllMaybe()
  }

  _handleFirewall(remotePublicKey, payload) {
    if (b4a.equals(remotePublicKey, this.keyPair.publicKey)) return true

    let peerInfo = this.peers.get(b4a.toString(remotePublicKey, 'hex'))
    if (peerInfo && peerInfo.banned) return true

    const firewalled = this._firewall(remotePublicKey, payload)
    if (firewalled) {
      if (!peerInfo) peerInfo = this._upsertPeer(remotePublicKey)
      this._banPeer(peerInfo, true, new Error(ERR_FIREWALL))
    }

    return firewalled
  }

  _handleServerConnectionSwap(existing, conn) {
    let closed = false

    existing.on('close', () => {
      if (closed) return

      conn.removeListener('error', noop)
      conn.removeListener('close', onclose)

      this._handleServerConnection(conn)
    })

    conn.on('error', noop)
    conn.on('close', onclose)

    function onclose() {
      closed = true
    }
  }

  // Called when the DHT receives a new server connection.
  _handleServerConnection(conn) {
    if (this.destroyed || this.suspended) {
      // TODO: Investigate why a final server connection can be received after close
      conn.on('error', noop)
      return conn.destroy(ERR_DESTROYED)
    }

    const existing = this._allConnections.get(conn.remotePublicKey)

    if (existing) {
      // If both connections are from the same peer,
      // - pick the new one if the existing stream is already established (has sent and received bytes),
      //   because the other client must have lost that connection and be reconnecting
      // - otherwise, pick the one thats expected to initiate in a tie break
      const existingIsOutdated = existing.rawBytesRead > 0 && existing.rawBytesWritten > 0
      const expectedInitiator = b4a.compare(conn.publicKey, conn.remotePublicKey) > 0
      const keepNew = existingIsOutdated || expectedInitiator === conn.isInitiator

      if (keepNew === false) {
        existing.sendKeepAlive()
        conn.on('error', noop)
        conn.destroy(new Error(ERR_DUPLICATE))
        return
      }

      existing.on('error', noop)
      existing.destroy(new Error(ERR_DUPLICATE))
      this._handleServerConnectionSwap(existing, conn)
      return
    }

    // When reaching here, the connection will always be 'opened' next tick
    this.stats.connects.server.opened++

    const peerInfo = this._upsertPeer(conn.remotePublicKey, null)

    this.connections.add(conn)
    this._allConnections.add(conn)
    this._serverConnections++

    conn.on('close', () => {
      const err = getStreamError(conn)
      if (shouldBan(err)) {
        this._banPeer(peerInfo, true, err)
      }

      this.connections.delete(conn)
      this._allConnections.delete(conn)
      this._serverConnections--
      this.stats.connects.server.closed++

      this._maybeDeletePeer(peerInfo)

      this._attemptClientConnections()

      this.emit('update')
    })
    peerInfo.client = false
    this.emit('connection', conn, peerInfo)

    this.emit('update')
  }

  _upsertPeer(publicKey, relayAddresses) {
    if (b4a.equals(publicKey, this.keyPair.publicKey)) return null
    const keyString = b4a.toString(publicKey, 'hex')
    let peerInfo = this.peers.get(keyString)

    if (peerInfo) {
      peerInfo.relayAddresses = relayAddresses // new is always better
      return peerInfo
    }

    peerInfo = new PeerInfo({
      publicKey,
      relayAddresses
    })

    this.peers.set(keyString, peerInfo)
    return peerInfo
  }

  _handleUpdate() {
    this.stats.updates++
  }

  _maybeDeletePeer(peerInfo) {
    if (!peerInfo.shouldGC()) return

    const hasActiveConn = this._allConnections.has(peerInfo.publicKey)
    if (hasActiveConn) return

    const keyString = b4a.toString(peerInfo.publicKey, 'hex')
    this.peers.delete(keyString)
  }

  /*
   * Called when a peer is actively discovered during a lookup.
   *
   * Three conditions:
   *  1. Not a known peer -- insert into queue
   *  2. A known peer with normal priority -- do nothing
   *  3. A known peer with low priority -- bump priority, because it's been rediscovered
   */
  _handlePeer(peer, topic) {
    const peerInfo = this._upsertPeer(peer.publicKey, peer.relayAddresses)
    if (peerInfo) peerInfo._topic(topic)
    if (!peerInfo || this._allConnections.has(peer.publicKey)) return
    if (!peerInfo.prioritized || peerInfo.server) peerInfo._reset()
    if (peerInfo._updatePriority()) {
      this._enqueue(peerInfo)
    }
  }

  async _handleNetworkUpdate() {
    if (!this.online) return
    this._handleNetworkChange()
  }

  async _handleNetworkChange() {
    if (this.suspended) return

    // prioritize figuring out if existing connections are dead
    for (const conn of this._allConnections) {
      conn.sendKeepAlive()
    }

    const refreshes = []

    for (const discovery of this._discovery.values()) {
      refreshes.push(discovery.refresh())
    }

    await Promise.allSettled(refreshes)
  }

  _banPeer(peerInfo, banned, err) {
    peerInfo.ban(banned)
    this.stats.bannedPeers++
    this.emit('ban', peerInfo, err)
  }

  status(key) {
    return this._discovery.get(b4a.toString(key, 'hex')) || null
  }

  listen() {
    if (!this.listening) {
      if (this.destroyed) throw new Error('Swarm destroyed')
      this.listening = this.server.listen(this.keyPair)
    }
    return this.listening
  }

  // Object that exposes a cancellation method (destroy)
  // TODO: When you rejoin, it should reannounce + bump lookup priority
  join(topic, opts = {}) {
    if (this.destroyed) throw new Error('Swarm destroyed')
    if (!topic) throw new Error(ERR_MISSING_TOPIC)
    topic = unslab(topic)

    const topicString = b4a.toString(topic, 'hex')

    let discovery = this._discovery.get(topicString)

    if (discovery && !discovery.destroyed) {
      return discovery.session(opts)
    }

    discovery = new PeerDiscovery(this, topic, {
      limit: opts.limit,
      wait: discovery ? discovery.destroy() : null,
      suspended: this.suspended,
      onpeer: (peer) => this._handlePeer(peer, topic)
    })
    this._discovery.set(topicString, discovery)
    return discovery.session(opts)
  }

  // Returns a promise
  async leave(topic) {
    if (!topic) throw new Error(ERR_MISSING_TOPIC)
    const topicString = b4a.toString(topic, 'hex')
    if (!this._discovery.has(topicString)) return Promise.resolve()

    const discovery = this._discovery.get(topicString)

    try {
      await discovery.destroy()
    } catch {
      // ignore, prop network
    }

    if (this._discovery.get(topicString) === discovery) {
      this._discovery.delete(topicString)
    }
  }

  joinPeer(publicKey) {
    const peerInfo = this._upsertPeer(publicKey, null)
    if (!peerInfo) return
    if (!this.explicitPeers.has(peerInfo)) {
      peerInfo.explicit = true
      this.explicitPeers.add(peerInfo)
    }
    if (this._allConnections.has(publicKey)) return
    if (peerInfo._updatePriority()) {
      this._enqueue(peerInfo)
    }
  }

  leavePeer(publicKey) {
    const keyString = b4a.toString(publicKey, 'hex')
    if (!this.peers.has(keyString)) return

    const peerInfo = this.peers.get(keyString)
    peerInfo.explicit = false
    this.explicitPeers.delete(peerInfo)
    this._maybeDeletePeer(peerInfo)
  }

  // Returns a promise
  async flush() {
    const allFlushed = [...this._discovery.values()].map((v) => v.flushed())
    await Promise.all(allFlushed)
    if (this._flushAllMaybe()) return true
    const pendingSize = this._allConnections.size - this.connections.size
    if (!this._queue.length && !pendingSize) return true
    return new Promise((resolve) => {
      this._pendingFlushes.push({
        onflush: resolve,
        missing: this._queue.length + pendingSize,
        tick: this._flushTick++
      })
    })
  }

  async clear() {
    const cleared = Promise.allSettled([...this._discovery.values()].map((d) => d.destroy()))
    this._discovery.clear()
    return cleared
  }

  async destroy({ force } = {}) {
    if (this.destroyed && !force) return
    this.destroyed = true

    this._timer.destroy()

    if (!force) await this.clear()

    await this.server.close()

    while (this._pendingFlushes.length) {
      const flush = this._pendingFlushes.pop()
      flush.onflush(false)
    }

    await this.dht.destroy({ force })
  }

  async suspend({ log = noop } = {}) {
    if (this.suspended) return

    const promises = []

    promises.push(this.server.suspend({ log }))

    for (const discovery of this._discovery.values()) {
      promises.push(discovery.suspend({ log }))
    }

    const pending = []
    for (const connection of this._allConnections) {
      connection.destroy()
      pending.push(new Promise((resolve) => connection.on('close', resolve)))
    }

    this.suspended = true

    log('Suspending server and discovery... (' + promises.length + ')')
    await Promise.allSettled(promises)
    log('Done, suspending the dht...')
    await this.dht.suspend({ log })
    log('Done, swarm fully suspended')

    await Promise.all(pending)

    // reset queue
    this._timer.destroy()
    this._timer = new RetryTimer(this._requeue.bind(this), {
      backoffs: this._timer.backoffs,
      jitter: this._timer.jitter
    })
    this._queue = spq()
  }

  async resume({ log = noop } = {}) {
    if (!this.suspended) return

    log('Resuming the dht')
    await this.dht.resume()
    log('Done, resuming the server')
    await this.server.resume()
    log('Done, all discovery')

    for (const discovery of this._discovery.values()) {
      discovery.resume()
    }

    this.suspended = false
    this._attemptClientConnections()
  }

  topics() {
    return this._discovery.values()
  }
}

function noop() {}

function allowAll() {
  return false
}

function shouldForceRelaying(code) {
  return (
    code === 'HOLEPUNCH_ABORTED' ||
    code === 'HOLEPUNCH_DOUBLE_RANDOMIZED_NATS' ||
    code === 'REMOTE_NOT_HOLEPUNCHABLE'
  )
}

function shouldBan() {
  // return !!err && err.name === 'HypercoreError' && err.code === 'INVALID_OPERATION'
  return false
}

function toRelayFunction(relayThrough) {
  return typeof relayThrough === 'function'
    ? relayThrough
    : (force, swarm) => (force || swarm.dht.randomized ? relayThrough : null)
}
module.exports = class BulkTimer {
  constructor(time, fn) {
    this._time = time
    this._fn = fn
    this._interval = null
    this._next = []
    this._pending = []
    this._destroyed = false
  }

  destroy() {
    if (this._destroyed) return
    this._destroyed = true
    clearInterval(this._interval)
    this._interval = null
  }

  _ontick() {
    if (!this._next.length && !this._pending.length) return
    if (this._next.length) this._fn(this._next)
    this._next = this._pending
    this._pending = []
  }

  add(info) {
    if (this._destroyed) return
    if (!this._interval) {
      this._interval = setInterval(this._ontick.bind(this), Math.floor(this._time * 0.66))
    }

    this._pending.push(info)
  }
}
const b4a = require('b4a')

module.exports = class ConnectionSet {
  constructor() {
    this._byPublicKey = new Map()
  }

  [Symbol.iterator]() {
    return this._byPublicKey.values()
  }

  get size() {
    return this._byPublicKey.size
  }

  has(publicKey) {
    return this._byPublicKey.has(toHex(publicKey))
  }

  get(publicKey) {
    return this._byPublicKey.get(toHex(publicKey))
  }

  add(connection) {
    this._byPublicKey.set(b4a.toString(connection.remotePublicKey, 'hex'), connection)
  }

  delete(connection) {
    const keyString = b4a.toString(connection.remotePublicKey, 'hex')
    const existing = this._byPublicKey.get(keyString)
    if (existing !== connection) return
    this._byPublicKey.delete(keyString)
  }
}

function toHex(b) {
  return typeof b === 'string' ? b : b4a.toString(b, 'hex')
}
const safetyCatch = require('safety-catch')
const b4a = require('b4a')

const REFRESH_INTERVAL = 1000 * 60 * 10 // 10 min
const RANDOM_JITTER = 1000 * 60 * 2 // 2 min
const DELAY_GRACE_PERIOD = 1000 * 30 // 30s

const MAX_DISCOVERY_CACHE = 64

module.exports = class PeerDiscovery {
  constructor(
    swarm,
    topic,
    { limit = Infinity, wait = null, suspended = false, onpeer = noop, onerror = safetyCatch }
  ) {
    this.limit = limit
    this.swarm = swarm
    this.topic = topic
    this.isClient = false
    this.isServer = false
    this.destroyed = false
    this.destroying = null
    this.suspended = suspended

    this._sessions = []
    this._clientSessions = 0
    this._serverSessions = 0

    this._onpeer = onpeer
    this._onerror = onerror

    this._discovered = new Set()
    this._activeQuery = null
    this._timer = null
    this._currentRefresh = null
    this._closestNodes = null
    this._firstAnnounce = true
    this._needsUnannounce = false
    this._refreshes = 0
    this._wait = wait
  }

  session({ server = true, client = true, limit = Infinity, onerror = safetyCatch }) {
    if (this.destroyed) throw new Error('PeerDiscovery is destroyed')
    const session = new PeerDiscoverySession(this)
    session.refresh({ server, client, limit }).catch(onerror)
    this._sessions.push(session)
    return session
  }

  _refreshLater(eager) {
    const jitter = Math.round(Math.random() * RANDOM_JITTER)
    const delay = !eager ? REFRESH_INTERVAL + jitter : jitter

    if (this._timer) clearTimeout(this._timer)

    const startTime = Date.now()
    this._timer = setTimeout(() => {
      // If your laptop went to sleep, and is coming back online...
      const overdue = Date.now() - startTime > delay + DELAY_GRACE_PERIOD
      if (overdue) this._refreshLater(true)
      else this.refresh().catch(this._onerror)
    }, delay)
  }

  _isActive() {
    return !this.destroyed && !this.suspended
  }

  // TODO: Allow announce to be an argument to this
  // TODO: Maybe announce should be a setter?
  async _refresh() {
    if (this.suspended) return
    const clock = ++this._refreshes

    if (this._wait) {
      await this._wait
      this._wait = null
      if (clock !== this._refreshes || !this._isActive()) return
    }

    const clear = this.isServer && this._firstAnnounce
    if (clear) this._firstAnnounce = false

    const opts = {
      clear,
      closestNodes: this._closestNodes
    }

    if (this.isServer) {
      await this.swarm.listen()
      // if a parallel refresh is happening, yield to the new one
      if (clock !== this._refreshes || !this._isActive()) return
      this._needsUnannounce = true
    }

    let limit = this.limit

    if (limit < Infinity && limit > 0) {
      for (const id of this._discovered) {
        if (!this.swarm.connections.has(id)) continue
        if (--limit === 0) break
      }
    }

    this._discovered.clear()

    const announcing = this.isServer
    const query = (this._activeQuery = announcing
      ? this.swarm.dht.announce(
          this.topic,
          this.swarm.keyPair,
          this.swarm.server.relayAddresses,
          opts
        )
      : this._needsUnannounce
        ? this.swarm.dht.lookupAndUnannounce(this.topic, this.swarm.keyPair, opts)
        : this.swarm.dht.lookup(this.topic, opts))

    try {
      for await (const data of this._activeQuery) {
        if (!this.isClient || !this._isActive()) continue
        for (const peer of data.peers) {
          if (limit < Infinity) {
            const id = b4a.toString(peer.publicKey, 'hex')

            if (this._discovered.size < MAX_DISCOVERY_CACHE) {
              this._discovered.add(id)
            }

            if (limit === 0) continue

            // there is a chance it has updated a connection during discovery and we go over
            // the limit - thats acceptable to avoid a complexity spiral here.
            if (!this.swarm.connections.has(id)) limit--
          }

          this._onpeer(peer, data)
        }
      }
    } catch (err) {
      if (this._isActive()) throw err
    } finally {
      if (this._activeQuery === query) {
        this._activeQuery = null
        if (!this.destroyed && !this.suspended) this._refreshLater(false)
      }
    }

    // This is set at the very end, when the query completes successfully.
    this._closestNodes = query.closestNodes

    if (clock !== this._refreshes) return

    // In this is the latest query, unannounce has been fulfilled as well
    if (!announcing) this._needsUnannounce = false
  }

  async refresh() {
    if (this.destroyed) throw new Error('PeerDiscovery is destroyed')

    const server = this._serverSessions > 0
    const client = this._clientSessions > 0

    if (this.suspended) return

    if (server === this.isServer && client === this.isClient) {
      if (this._currentRefresh) return this._currentRefresh
      this._currentRefresh = this._refresh()
    } else {
      if (this._activeQuery) this._activeQuery.destroy()
      this.isServer = server
      this.isClient = client
      this._currentRefresh = this._refresh()
    }

    const refresh = this._currentRefresh
    try {
      await refresh
    } catch {
      return false
    } finally {
      if (refresh === this._currentRefresh) {
        this._currentRefresh = null
      }
    }

    return true
  }

  async flushed() {
    if (this.swarm.listening) await this.swarm.listening

    try {
      await this._currentRefresh
      return true
    } catch {
      return false
    }
  }

  async _destroyMaybe() {
    if (this.destroyed) return

    try {
      if (this._sessions.length === 0) await this.swarm.leave(this.topic)
      else if (this._serverSessions === 0 && this._needsUnannounce) await this.refresh()
    } catch (err) {
      // ignore network failures here, as we are tearing down
      safetyCatch(err)
    }
  }

  destroy() {
    if (this.destroying) return this.destroying
    this.destroying = this._destroy()
    return this.destroying
  }

  async _abort(log) {
    const id = log === noop ? '' : b4a.toString(this.topic, 'hex')

    log('Aborting discovery', id)
    if (this._wait) await this._wait
    log('Aborting discovery (post wait)', id)

    if (this._activeQuery) {
      this._activeQuery.destroy()
      this._activeQuery = null
    }
    if (this._timer) {
      clearTimeout(this._timer)
      this._timer = null
    }

    let nodes = this._closestNodes

    if (this._currentRefresh) {
      try {
        await this._currentRefresh
      } catch {
        // If the destroy causes the refresh to fail, suppress it.
      }
    }

    log('Aborting discovery (post refresh)', id)
    if (this._isActive()) return

    if (!nodes) nodes = this._closestNodes
    else if (this._closestNodes !== nodes) {
      const len = nodes.length
      for (const newer of this._closestNodes) {
        if (newer.id && !hasNode(nodes, len, newer)) nodes.push(newer)
      }
    }

    if (this._needsUnannounce) {
      log('Unannouncing discovery', id)
      if (nodes && nodes.length) {
        await this.swarm.dht.unannounce(this.topic, this.swarm.keyPair, {
          closestNodes: nodes,
          onlyClosestNodes: true,
          force: true
        })
      }
      this._needsUnannounce = false
      log('Unannouncing discovery (done)', id)
    }
  }

  _destroy() {
    if (this.destroyed) return
    this.destroyed = true
    return this._abort(noop)
  }

  async suspend({ log = noop } = {}) {
    if (this.suspended) return
    this.suspended = true
    try {
      await this._abort(log)
    } catch {
      // ignore
    }
  }

  resume() {
    if (!this.suspended) return
    this.suspended = false
    this.refresh().catch(noop)
  }
}

class PeerDiscoverySession {
  constructor(discovery) {
    this.discovery = discovery
    this.isClient = false
    this.isServer = false
    this.destroyed = false
  }

  get swarm() {
    return this.discovery.swarm
  }

  get topic() {
    return this.discovery.topic
  }

  async refresh({ client = this.isClient, server = this.isServer, limit = Infinity } = {}) {
    if (this.destroyed) throw new Error('PeerDiscovery is destroyed')
    if (!client && !server) throw new Error('Cannot refresh with neither client nor server option')

    if (client !== this.isClient) {
      this.isClient = client
      this.discovery._clientSessions += client ? 1 : -1
    }

    if (server !== this.isServer) {
      this.isServer = server
      this.discovery._serverSessions += server ? 1 : -1
    }

    this.discovery.limit = limit

    return this.discovery.refresh()
  }

  async flushed() {
    return this.discovery.flushed()
  }

  async destroy() {
    if (this.destroyed) return
    this.destroyed = true

    if (this.isClient) this.discovery._clientSessions--
    if (this.isServer) this.discovery._serverSessions--

    const index = this.discovery._sessions.indexOf(this)
    const head = this.discovery._sessions.pop()

    if (head !== this) this.discovery._sessions[index] = head

    return this.discovery._destroyMaybe()
  }
}

function hasNode(nodes, len, node) {
  for (let i = 0; i < len; i++) {
    const existing = nodes[i]
    if (existing.id && b4a.equals(existing.id, node.id)) return true
  }

  return false
}

function noop() {}
const { EventEmitter } = require('events')
const b4a = require('b4a')
const unslab = require('unslab')

const MIN_CONNECTION_TIME = 15000

const VERY_LOW_PRIORITY = 0
const LOW_PRIORITY = 1
const NORMAL_PRIORITY = 2
const HIGH_PRIORITY = 3
const VERY_HIGH_PRIORITY = 4

module.exports = class PeerInfo extends EventEmitter {
  constructor({ publicKey, relayAddresses }) {
    super()

    this.publicKey = unslab(publicKey)
    this.relayAddresses = relayAddresses

    this.reconnecting = true
    this.proven = false
    this.connectedTime = -1
    this.disconnectedTime = 0
    this.banned = false
    this.tried = false
    this.explicit = false
    this.waiting = false
    this.forceRelaying = false

    // Set by the Swarm
    this.queued = false
    this.client = false
    this.topics = [] // TODO: remove on next major (check with mafintosh for context)

    this.attempts = 0
    this.priority = NORMAL_PRIORITY

    // Used by shuffled-priority-queue
    this._index = 0

    // Used for flush management
    this._flushTick = 0

    // Used for topic multiplexing
    this._seenTopics = new Set()
  }

  get server() {
    return !this.client
  }

  get prioritized() {
    return this.priority >= NORMAL_PRIORITY
  }

  _getPriority() {
    const peerIsStale = this.tried && !this.proven
    if (peerIsStale || this.attempts > 3) return VERY_LOW_PRIORITY
    if (this.attempts === 3) return LOW_PRIORITY
    if (this.attempts === 2) return HIGH_PRIORITY
    if (this.attempts === 1) return VERY_HIGH_PRIORITY
    return NORMAL_PRIORITY
  }

  _connected() {
    this.proven = true
    this.connectedTime = Date.now()
  }

  _disconnected() {
    this.disconnectedTime = Date.now()
    if (this.connectedTime > -1) {
      if (this.disconnectedTime - this.connectedTime >= MIN_CONNECTION_TIME) this.attempts = 0 // fast retry
      this.connectedTime = -1
    }
    this.attempts++
  }

  _deprioritize() {
    this.attempts = 3
  }

  _reset() {
    this.client = false
    this.proven = false
    this.tried = false
    this.attempts = 0
  }

  _updatePriority() {
    if (this.explicit && this.attempts > 3) this._deprioritize()
    if (this.banned || this.queued || this.attempts > 3) return false
    this.priority = this._getPriority()
    return true
  }

  _topic(topic) {
    const topicString = b4a.toString(topic, 'hex')
    if (this._seenTopics.has(topicString)) return
    this._seenTopics.add(topicString)
    this.topics.push(topic)
    this.emit('topic', topic)
  }

  reconnect(val) {
    this.reconnecting = !!val
  }

  ban(val) {
    this.banned = !!val
  }

  shouldGC() {
    return !(this.banned || this.queued || this.explicit || this.waiting)
  }
}
const BulkTimer = require('./bulk-timer')

const BACKOFF_JITTER = 500
const BACKOFF_S = 1000 + Math.round(BACKOFF_JITTER * Math.random())
const BACKOFF_M = 5000 + Math.round(2 * BACKOFF_JITTER * Math.random())
const BACKOFF_L = 15000 + Math.round(4 * BACKOFF_JITTER * Math.random())
const BACKOFF_X = 1000 * 60 * 10 + Math.round(240 * BACKOFF_JITTER * Math.random())

module.exports = class RetryTimer {
  constructor(
    push,
    { backoffs = [BACKOFF_S, BACKOFF_M, BACKOFF_L, BACKOFF_X], jitter = BACKOFF_JITTER } = {}
  ) {
    this.jitter = jitter
    this.backoffs = backoffs

    this._sTimer = new BulkTimer(backoffs[0] + Math.round(jitter * Math.random()), push)
    this._mTimer = new BulkTimer(backoffs[1] + Math.round(jitter * Math.random()), push)
    this._lTimer = new BulkTimer(backoffs[2] + Math.round(jitter * Math.random()), push)
    this._xTimer = new BulkTimer(backoffs[3] + Math.round(jitter * Math.random()), push)
  }

  _selectRetryTimer(peerInfo) {
    if (peerInfo.banned || !peerInfo.reconnecting) return null

    if (peerInfo.attempts > 3) {
      return peerInfo.explicit ? this._xTimer : null
    }

    if (peerInfo.attempts === 0) return this._sTimer
    if (peerInfo.proven) {
      switch (peerInfo.attempts) {
        case 1:
          return this._sTimer
        case 2:
          return this._mTimer
        case 3:
          return this._lTimer
      }
    } else {
      switch (peerInfo.attempts) {
        case 1:
          return this._mTimer
        case 2:
          return this._lTimer
        case 3:
          return this._lTimer
      }
    }

    return null
  }

  add(peerInfo) {
    const timer = this._selectRetryTimer(peerInfo)
    if (!timer) return false

    timer.add(peerInfo)
    return true
  }

  destroy() {
    this._sTimer.destroy()
    this._mTimer.destroy()
    this._lTimer.destroy()
    this._xTimer.destroy()
  }
}
{
  "name": "hyperswarm",
  "version": "4.17.0",
  "description": "A distributed networking stack for connecting peers",
  "files": [
    "index.js",
    "lib/**.js"
  ],
  "imports": {
    "events": {
      "bare": "bare-events",
      "default": "events"
    },
    "process": {
      "bare": "bare-process",
      "default": "process"
    }
  },
  "dependencies": {
    "b4a": "^1.3.1",
    "bare-events": "^2.2.0",
    "hyperdht": "^6.21.0",
    "safety-catch": "^1.0.2",
    "shuffled-priority-queue": "^2.1.0",
    "streamx": "^2.22.1",
    "unslab": "^1.3.0"
  },
  "devDependencies": {
    "bare-process": "^4.2.2",
    "brittle": "^3.0.2",
    "hypercore-crypto": "^3.4.0",
    "lunte": "^1.3.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0",
    "which-runtime": "^1.3.2"
  },
  "scripts": {
    "format": "prettier --write .",
    "lint": "prettier --check . && lunte",
    "test": "npm run test:node && npm run test:bare",
    "test:generate": "brittle -r test/all.js test/*.js",
    "test:node": "brittle-node --coverage test/*.js",
    "test:bare": "bare test/all.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/holepunchto/hyperswarm.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "contributors": [
    "David Mark Clements (@davidmarkclem)",
    "Andrew Osheroff (@andrewosh)"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/holepunchto/hyperswarm/issues"
  },
  "homepage": "https://github.com/holepunchto/hyperswarm"
}
const { EventEmitter } = require('events')

module.exports = class RoutingTable extends EventEmitter {
  constructor (id, opts) {
    if (!opts) opts = {}

    super()

    this.id = id
    this.k = opts.k || 20
    this.size = 0
    this.rows = new Array(id.length * 8)
  }

  add (node) {
    const i = this._diff(node.id)

    let row = this.rows[i]

    if (!row) {
      row = this.rows[i] = new Row(this, i)
      this.emit('row', row)
    }

    const len = row.nodes.length
    if (!row.add(node, this.k)) return false

    this.size += row.nodes.length - len
    return true
  }

  remove (id) {
    const i = this._diff(id)
    const row = this.rows[i]
    if (!row) return false
    if (!row.remove(id)) return false
    this.size--
    return true
  }

  get (id) {
    const i = this._diff(id)
    const row = this.rows[i]
    if (!row) return null
    return row.get(id)
  }

  has (id) {
    return this.get(id) !== null
  }

  random () {
    let n = (Math.random() * this.size) | 0

    for (let i = 0; i < this.rows.length; i++) {
      const r = this.rows[i]
      if (!r) continue
      if (n < r.nodes.length) return r.nodes[n]
      n -= r.nodes.length
    }

    return null
  }

  closest (id, k) {
    if (!k) k = this.k

    const result = []
    const d = this._diff(id)

    // push close nodes
    for (let i = d; i >= 0 && result.length < k; i--) this._pushNodes(i, k, result)

    // if we don't have enough close nodes, populate from other rows, re the paper
    for (let i = d + 1; i < this.rows.length && result.length < k; i++) this._pushNodes(i, k, result)

    return result
  }

  _pushNodes (i, k, result) {
    const row = this.rows[i]
    if (!row) return

    const missing = Math.min(k - result.length, row.nodes.length)
    for (let j = 0; j < missing; j++) result.push(row.nodes[j])
  }

  toArray () {
    return this.closest(this.id, Infinity)
  }

  _diff (id) {
    for (let i = 0; i < id.length; i++) {
      const a = id[i]
      const b = this.id[i]

      if (a !== b) return i * 8 + Math.clz32(a ^ b) - 24
    }

    return this.rows.length - 1
  }
}

class Row extends EventEmitter {
  constructor (table, index) {
    super()

    this.data = null // can be used be upstream for whatevs
    this.byteOffset = index >> 3
    this.index = index
    this.table = table
    this.nodes = []
  }

  add (node) {
    const id = node.id

    let l = 0
    let r = this.nodes.length - 1

    while (l <= r) {
      const m = (l + r) >> 1
      const c = this.compare(id, this.nodes[m].id)

      if (c === 0) {
        this.nodes[m] = node
        return true
      }

      if (c < 0) r = m - 1
      else l = m + 1
    }

    if (this.nodes.length >= this.table.k) {
      this.emit('full', node)
      return false
    }

    this.insert(l, node)
    return true
  }

  remove (id) {
    let l = 0
    let r = this.nodes.length - 1

    while (l <= r) {
      const m = (l + r) >> 1
      const c = this.compare(id, this.nodes[m].id)

      if (c === 0) {
        this.splice(m)
        return true
      }

      if (c < 0) r = m - 1
      else l = m + 1
    }

    return false
  }

  get (id) {
    let l = 0
    let r = this.nodes.length - 1

    while (l <= r) {
      const m = (l + r) >> 1
      const node = this.nodes[m]
      const c = this.compare(id, node.id)

      if (c === 0) return node
      if (c < 0) r = m - 1
      else l = m + 1
    }

    return null
  }

  insert (i, node) {
    this.nodes.push(node) // push node or null or whatevs, just trying to not be polymorphic
    for (let j = this.nodes.length - 1; j > i; j--) this.nodes[j] = this.nodes[j - 1]
    this.nodes[i] = node
    this.emit('add', node)
  }

  splice (i) {
    for (; i < this.nodes.length - 1; i++) this.nodes[i] = this.nodes[i + 1]
    this.emit('remove', this.nodes.pop())
  }

  // very likely they diverge after a couple of bytes so a simple impl, like this is prop fastest vs Buffer.compare
  compare (a, b) {
    for (let i = this.byteOffset; i < a.length; i++) {
      const ai = a[i]
      const bi = b[i]
      if (ai === bi) continue
      return ai < bi ? -1 : 1
    }
    return 0
  }
}
{
  "name": "kademlia-routing-table",
  "version": "1.0.6",
  "description": "XOR based routing table used for P2P networks such as a Kademlia DHT.",
  "main": "index.js",
  "files": [
    "index.js"
  ],
  "imports": {
    "events": {
      "bare": "bare-events",
      "default": "events"
    }
  },
  "dependencies": {
    "bare-events": "^2.2.0"
  },
  "devDependencies": {
    "brittle": "^3.3.2",
    "standard": "^17.1.0"
  },
  "scripts": {
    "test": "standard && brittle test.js"
  },
  "keywords": [
    "kademlia",
    "p2p",
    "k-bucket",
    "k-buckets",
    "xor",
    "routing",
    "distributed",
    "systems"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/kademlia-routing-table.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/kademlia-routing-table/issues"
  },
  "homepage": "https://github.com/mafintosh/kademlia-routing-table"
}
module.exports = assert

class AssertionError extends Error {}
AssertionError.prototype.name = 'AssertionError'

/**
 * Minimal assert function
 * @param  {any} t Value to check if falsy
 * @param  {string=} m Optional assertion error message
 * @throws {AssertionError}
 */
function assert (t, m) {
  if (!t) {
    var err = new AssertionError(m)
    if (Error.captureStackTrace) Error.captureStackTrace(err, assert)
    throw err
  }
}
{
  "name": "nanoassert",
  "version": "2.0.0",
  "description": "Nanoscale assertion module",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {
    "tape": "^4.9.1"
  },
  "scripts": {
    "test": "tape test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/emilbayes/nanoassert.git"
  },
  "keywords": [
    "assert",
    "unassert",
    "power-assert",
    "tiny",
    "nano",
    "pico"
  ],
  "author": "Emil Bay <github@tixz.dk>",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/emilbayes/nanoassert/issues"
  },
  "homepage": "https://github.com/emilbayes/nanoassert#readme"
}
module.exports = class NatSampler {
  constructor () {
    this.host = null
    this.port = 0
    this.size = 0

    this._a = null
    this._b = null
    this._threshold = 0
    this._top = 0
    this._samples = []
  }

  add (host, port) {
    const a = this._bump(host, port, 2)
    const b = this._bump(host, 0, 1)

    if (this._samples.length < 32) {
      this.size++
      this._threshold = this.size - (this.size < 4 ? 0 : this.size < 8 ? 1 : this.size < 12 ? 2 : 3)
      this._samples.push(a, b)
      this._top += 2
    } else {
      if (this._top === 32) this._top = 0

      const oa = this._samples[this._top]
      this._samples[this._top++] = a
      oa.hits--

      const ob = this._samples[this._top]
      this._samples[this._top++] = b
      ob.hits--
    }

    if (this._a === null || this._a.hits < a.hits) this._a = a
    if (this._b === null || this._b.hits < b.hits) this._b = b

    if (this._a.hits >= this._threshold) {
      this.host = this._a.host
      this.port = this._a.port
    } else if (this._b.hits >= this._threshold) {
      this.host = this._b.host
      this.port = 0
    } else {
      this.host = null
      this.port = 0
    }

    return a.hits
  }

  _bump (host, port, inc) {
    for (let i = 0; i < 4; i++) {
      const j = (this._top - inc - (2 * i)) & 31
      if (j >= this._samples.length) return { host, port, hits: 1 }
      const s = this._samples[j]
      if (s.port === port && s.host === host) {
        s.hits++
        return s
      }
    }
    return { host, port, hits: 1 }
  }
}
{
  "name": "nat-sampler",
  "version": "1.0.1",
  "description": "Sample addresses to figure out if a host + port is consistent",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {
    "standard": "^16.0.3",
    "tape": "^5.2.2"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/nat-sampler.git"
  },
  "scripts": {
    "test": "standard && tape test.js"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/nat-sampler/issues"
  },
  "homepage": "https://github.com/mafintosh/nat-sampler"
}
/* eslint-disable camelcase */
const sodium = require('sodium-universal')
const assert = require('nanoassert')
const b4a = require('b4a')

const DHLEN = sodium.crypto_scalarmult_ed25519_BYTES
const PKLEN = sodium.crypto_scalarmult_ed25519_BYTES
const SCALARLEN = sodium.crypto_scalarmult_ed25519_BYTES
const SKLEN = sodium.crypto_sign_SECRETKEYBYTES
const ALG = 'Ed25519'

module.exports = {
  DHLEN,
  PKLEN,
  SCALARLEN,
  SKLEN,
  ALG,
  name: ALG,
  generateKeyPair,
  dh
}

function generateKeyPair (privKey) {
  if (privKey) return generateSeedKeyPair(privKey.subarray(0, 32))

  const keyPair = {}
  keyPair.secretKey = b4a.alloc(SKLEN)
  keyPair.publicKey = b4a.alloc(PKLEN)

  sodium.crypto_sign_keypair(keyPair.publicKey, keyPair.secretKey)
  return keyPair
}

function generateSeedKeyPair (seed) {
  const keyPair = {}
  keyPair.secretKey = b4a.alloc(SKLEN)
  keyPair.publicKey = b4a.alloc(PKLEN)

  sodium.crypto_sign_seed_keypair(keyPair.publicKey, keyPair.secretKey, seed)
  return keyPair
}

function dh (publicKey, { scalar, secretKey }) {
  // tweaked keys expose scalar directly
  if (!scalar) {
    assert(secretKey.byteLength === SKLEN)

    // libsodium stores seed not actual scalar
    const sk = b4a.alloc(64)
    sodium.crypto_hash_sha512(sk, secretKey.subarray(0, 32))
    sk[0] &= 248
    sk[31] &= 127
    sk[31] |= 64

    scalar = sk.subarray(0, 32)
  }

  assert(scalar.byteLength === SCALARLEN)
  assert(publicKey.byteLength === PKLEN)

  const output = b4a.alloc(DHLEN)

  // we clamp if necessary above
  sodium.crypto_scalarmult_ed25519_noclamp(
    output,
    scalar,
    publicKey
  )

  return output
}
{
  "name": "noise-curve-ed",
  "version": "2.1.0",
  "description": "Ed25519 elliptic curve operations for [`noise-handshake`](https://github.com/chm-diederichs/noise-handshake)",
  "main": "index.js",
  "scripts": {
    "test": "npx standard && tape test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/chm-diederichs/noise-curve-ed.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/chm-diederichs/noise-curve-ed/issues"
  },
  "homepage": "https://github.com/chm-diederichs/noise-curve-ed#readme",
  "dependencies": {
    "b4a": "^1.1.0",
    "nanoassert": "^2.0.0",
    "sodium-universal": "^5.0.0"
  },
  "devDependencies": {
    "noise-handshake": "^3.0.0",
    "standard": "^16.0.3",
    "tape": "^5.2.2"
  }
}
const sodium = require('sodium-universal')
const b4a = require('b4a')

module.exports = class CipherState {
  constructor (key) {
    this.key = key || null
    this.nonce = 0
    this.CIPHER_ALG = 'ChaChaPoly'
  }

  initialiseKey (key) {
    this.key = key
    this.nonce = 0
  }

  setNonce (nonce) {
    this.nonce = nonce
  }

  encrypt (plaintext, ad) {
    if (!this.hasKey) return plaintext
    if (!ad) ad = b4a.alloc(0)

    const ciphertext = encryptWithAD(this.key, this.nonce, ad, plaintext)
    if (ciphertext.length > 65535) throw new Error(`ciphertext length of ${ciphertext.length} exceeds maximum Noise message length of 65535`)
    this.nonce++

    return ciphertext
  }

  decrypt (ciphertext, ad) {
    if (!this.hasKey) return ciphertext
    if (!ad) ad = b4a.alloc(0)
    if (ciphertext.length > 65535) throw new Error(`ciphertext length of ${ciphertext.length} exceeds maximum Noise message length of 65535`)

    const plaintext = decryptWithAD(this.key, this.nonce, ad, ciphertext)
    this.nonce++

    return plaintext
  }

  get hasKey () {
    return this.key !== null
  }

  _clear () {
    sodium.sodium_memzero(this.key)
    this.key = null
    this.nonce = null
  }

  static get MACBYTES () {
    return 16
  }

  static get NONCEBYTES () {
    return 8
  }

  static get KEYBYTES () {
    return 32
  }
}

function encryptWithAD (key, counter, additionalData, plaintext) {
  // for our purposes, additionalData will always be a pubkey so we encode from hex
  if (!b4a.isBuffer(additionalData)) additionalData = b4a.from(additionalData, 'hex')
  if (!b4a.isBuffer(plaintext)) plaintext = b4a.from(plaintext, 'hex')

  const nonce = b4a.alloc(sodium.crypto_aead_chacha20poly1305_ietf_NPUBBYTES)
  const view = new DataView(nonce.buffer, nonce.byteOffset, nonce.byteLength)
  view.setUint32(4, counter, true)

  const ciphertext = b4a.alloc(plaintext.byteLength + sodium.crypto_aead_chacha20poly1305_ietf_ABYTES)

  sodium.crypto_aead_chacha20poly1305_ietf_encrypt(ciphertext, plaintext, additionalData, null, nonce, key)
  return ciphertext
}

function decryptWithAD (key, counter, additionalData, ciphertext) {
  // for our purposes, additionalData will always be a pubkey so we encode from hex
  if (!b4a.isBuffer(additionalData)) additionalData = b4a.from(additionalData, 'hex')
  if (!b4a.isBuffer(ciphertext)) ciphertext = b4a.from(ciphertext, 'hex')

  const nonce = b4a.alloc(sodium.crypto_aead_chacha20poly1305_ietf_NPUBBYTES)
  const view = new DataView(nonce.buffer, nonce.byteOffset, nonce.byteLength)
  view.setUint32(4, counter, true)

  const plaintext = b4a.alloc(ciphertext.byteLength - sodium.crypto_aead_chacha20poly1305_ietf_ABYTES)

  sodium.crypto_aead_chacha20poly1305_ietf_decrypt(plaintext, null, ciphertext, additionalData, nonce, key)
  return plaintext
}
/* eslint-disable camelcase */
const {
  crypto_kx_SEEDBYTES,
  crypto_kx_keypair,
  crypto_kx_seed_keypair,
  crypto_scalarmult_BYTES,
  crypto_scalarmult_SCALARBYTES,
  crypto_scalarmult,
  crypto_scalarmult_base
} = require('sodium-universal')

const assert = require('nanoassert')
const b4a = require('b4a')

const DHLEN = crypto_scalarmult_BYTES
const PKLEN = crypto_scalarmult_BYTES
const SKLEN = crypto_scalarmult_SCALARBYTES
const SEEDLEN = crypto_kx_SEEDBYTES
const ALG = '25519'

module.exports = {
  DHLEN,
  PKLEN,
  SKLEN,
  SEEDLEN,
  ALG,
  generateKeyPair,
  generateSeedKeyPair,
  dh
}

function generateKeyPair (privKey) {
  const keyPair = {}

  keyPair.secretKey = privKey || b4a.alloc(SKLEN)
  keyPair.publicKey = b4a.alloc(PKLEN)

  if (privKey) {
    crypto_scalarmult_base(keyPair.publicKey, keyPair.secretKey)
  } else {
    crypto_kx_keypair(keyPair.publicKey, keyPair.secretKey)
  }

  return keyPair
}

function generateSeedKeyPair (seed) {
  assert(seed.byteLength === SKLEN)

  const keyPair = {}
  keyPair.secretKey = b4a.alloc(SKLEN)
  keyPair.publicKey = b4a.alloc(PKLEN)

  crypto_kx_seed_keypair(keyPair.publicKey, keyPair.secretKey, seed)
  return keyPair
}

function dh (publicKey, { secretKey }) {
  assert(secretKey.byteLength === SKLEN)
  assert(publicKey.byteLength === PKLEN)

  const output = b4a.alloc(DHLEN)

  crypto_scalarmult(
    output,
    secretKey,
    publicKey
  )

  return output
}
const hmacBlake2b = require('./hmac')
const b4a = require('b4a')

const HASHLEN = 64

module.exports = {
  hkdf,
  HASHLEN
}

// HMAC-based Extract-and-Expand KDF
// https://www.ietf.org/rfc/rfc5869.txt

function hkdf (salt, inputKeyMaterial, info = '', length = 2 * HASHLEN) {
  const pseudoRandomKey = hkdfExtract(salt, inputKeyMaterial)
  return hkdfExpand(pseudoRandomKey, info, length)
}

function hkdfExtract (salt, inputKeyMaterial) {
  const hmac = b4a.alloc(HASHLEN)
  return hmacDigest(hmac, salt, inputKeyMaterial)
}

function hkdfExpand (key, info, length) {
  // Put in dedicated slab to avoid keeping shared slab from being gc'ed
  const buffer = b4a.allocUnsafeSlow(length)

  const infoBuf = b4a.from(info)
  let prev = infoBuf

  const result = []
  for (let i = 0; i < length; i += HASHLEN) {
    const pos = b4a.from([(i / HASHLEN) + 1])

    const out = buffer.subarray(i, i + HASHLEN)
    result.push(out)

    prev = hmacDigest(out, key, [prev, infoBuf, pos])
  }

  return result
}

function hmacDigest (out, key, input) {
  hmacBlake2b(out, input, key)
  return out
}
/* eslint-disable camelcase */
const b4a = require('b4a')
const { sodium_memzero, crypto_generichash, crypto_generichash_batch } = require('sodium-universal')

const HASHLEN = 64
const BLOCKLEN = 128
const scratch = b4a.alloc(BLOCKLEN * 3)
const HMACKey = scratch.subarray(BLOCKLEN * 0, BLOCKLEN * 1)
const OuterKeyPad = scratch.subarray(BLOCKLEN * 1, BLOCKLEN * 2)
const InnerKeyPad = scratch.subarray(BLOCKLEN * 2, BLOCKLEN * 3)

// Post-fill is done in the cases where someone caught an exception that
// happened before we were able to clear data at the end

module.exports = function hmac (out, batch, key) {
  if (key.byteLength > BLOCKLEN) {
    crypto_generichash(HMACKey.subarray(0, HASHLEN), key)
    sodium_memzero(HMACKey.subarray(HASHLEN))
  } else {
    // Covers key <= BLOCKLEN
    HMACKey.set(key)
    sodium_memzero(HMACKey.subarray(key.byteLength))
  }

  for (let i = 0; i < HMACKey.byteLength; i++) {
    OuterKeyPad[i] = 0x5c ^ HMACKey[i]
    InnerKeyPad[i] = 0x36 ^ HMACKey[i]
  }
  sodium_memzero(HMACKey)

  crypto_generichash_batch(out, [InnerKeyPad].concat(batch))
  sodium_memzero(InnerKeyPad)
  crypto_generichash_batch(out, [OuterKeyPad, out])
  sodium_memzero(OuterKeyPad)
}

module.exports.BYTES = HASHLEN
module.exports.KEYBYTES = BLOCKLEN
const assert = require('nanoassert')
const b4a = require('b4a')

const SymmetricState = require('./symmetric-state')
const { HASHLEN } = require('./hkdf')

const PRESHARE_IS = Symbol('initiator static key preshared')
const PRESHARE_RS = Symbol('responder static key preshared')

const TOK_PSK = Symbol('psk')

const TOK_S = Symbol('s')
const TOK_E = Symbol('e')

const TOK_ES = Symbol('es')
const TOK_SE = Symbol('se')
const TOK_EE = Symbol('ee')
const TOK_SS = Symbol('ss')

const HANDSHAKES = Object.freeze({
  NN: [
    [TOK_E],
    [TOK_E, TOK_EE]
  ],
  NNpsk0: [
    [TOK_PSK, TOK_E],
    [TOK_E, TOK_EE]
  ],
  XX: [
    [TOK_E],
    [TOK_E, TOK_EE, TOK_S, TOK_ES],
    [TOK_S, TOK_SE]
  ],
  XXpsk0: [
    [TOK_PSK, TOK_E],
    [TOK_E, TOK_EE, TOK_S, TOK_ES],
    [TOK_S, TOK_SE]
  ],
  IK: [
    PRESHARE_RS,
    [TOK_E, TOK_ES, TOK_S, TOK_SS],
    [TOK_E, TOK_EE, TOK_SE]
  ],
  XK: [
    PRESHARE_RS,
    [TOK_E, TOK_ES],
    [TOK_E, TOK_EE],
    [TOK_S, TOK_SE]
  ]
})

class Writer {
  constructor () {
    this.size = 0
    this.buffers = []
  }

  push (b) {
    this.size += b.byteLength
    this.buffers.push(b)
  }

  end () {
    const all = b4a.alloc(this.size)
    let offset = 0
    for (const b of this.buffers) {
      all.set(b, offset)
      offset += b.byteLength
    }
    return all
  }
}

class Reader {
  constructor (buf) {
    this.offset = 0
    this.buffer = buf
  }

  shift (n) {
    const start = this.offset
    const end = this.offset += n
    if (end > this.buffer.byteLength) throw new Error('Insufficient bytes')
    return this.buffer.subarray(start, end)
  }

  end () {
    return this.shift(this.buffer.byteLength - this.offset)
  }
}

module.exports = class NoiseState extends SymmetricState {
  constructor (pattern, initiator, staticKeypair, opts = {}) {
    super(opts)

    this.s = staticKeypair || this.curve.generateKeyPair()
    this.e = null

    this.psk = null
    if (opts && opts.psk) this.psk = opts.psk

    this.re = null
    this.rs = null

    this.pattern = pattern
    this.handshake = HANDSHAKES[this.pattern].slice()

    this.isPskHandshake = !!this.psk && hasPskToken(this.handshake)

    this.protocol = b4a.from([
      'Noise',
      this.pattern,
      this.DH_ALG,
      this.CIPHER_ALG,
      'BLAKE2b'
    ].join('_'))

    this.initiator = initiator
    this.complete = false

    this.rx = null
    this.tx = null
    this.hash = null
  }

  initialise (prologue, remoteStatic) {
    if (this.protocol.byteLength <= HASHLEN) this.digest.set(this.protocol)
    else this.mixHash(this.protocol)

    this.chainingKey = b4a.from(this.digest)

    this.mixHash(prologue)

    while (!Array.isArray(this.handshake[0])) {
      const message = this.handshake.shift()

      // handshake steps should be as arrays, only
      // preshare tokens are provided otherwise
      assert(message === PRESHARE_RS || message === PRESHARE_IS,
        'Unexpected pattern')

      const takeRemoteKey = this.initiator
        ? message === PRESHARE_RS
        : message === PRESHARE_IS

      if (takeRemoteKey) this.rs = remoteStatic

      const key = takeRemoteKey ? this.rs : this.s.publicKey
      assert(key != null, 'Remote pubkey required')

      this.mixHash(key)
    }
  }

  final () {
    const [k1, k2] = this.split()

    this.tx = this.initiator ? k1 : k2
    this.rx = this.initiator ? k2 : k1

    this.complete = true
    this.hash = this.getHandshakeHash()

    this._clear()
  }

  recv (buf) {
    const r = new Reader(buf)

    for (const pattern of this.handshake.shift()) {
      switch (pattern) {
        case TOK_PSK :
          this.mixKeyAndHash(this.psk)
          break

        case TOK_E :
          this.re = r.shift(this.curve.PKLEN)
          this.mixHash(this.re)
          if (this.isPskHandshake) this.mixKeyNormal(this.re)
          break

        case TOK_S : {
          const klen = this.hasKey ? this.curve.PKLEN + 16 : this.curve.PKLEN
          this.rs = this.decryptAndHash(r.shift(klen))
          break
        }

        case TOK_EE :
        case TOK_ES :
        case TOK_SE :
        case TOK_SS : {
          const useStatic = keyPattern(pattern, this.initiator)

          const localKey = useStatic.local ? this.s : this.e
          const remoteKey = useStatic.remote ? this.rs : this.re

          this.mixKey(remoteKey, localKey)
          break
        }

        default :
          throw new Error('Unexpected message')
      }
    }

    const payload = this.decryptAndHash(r.end())

    if (!this.handshake.length) this.final()
    return payload
  }

  send (payload = b4a.alloc(0)) {
    const w = new Writer()

    for (const pattern of this.handshake.shift()) {
      switch (pattern) {
        case TOK_PSK :
          this.mixKeyAndHash(this.psk)
          break

        case TOK_E :
          if (this.e === null) this.e = this.curve.generateKeyPair()
          this.mixHash(this.e.publicKey)
          if (this.isPskHandshake) this.mixKeyNormal(this.e.publicKey)
          w.push(this.e.publicKey)
          break

        case TOK_S :
          w.push(this.encryptAndHash(this.s.publicKey))
          break

        case TOK_ES :
        case TOK_SE :
        case TOK_EE :
        case TOK_SS : {
          const useStatic = keyPattern(pattern, this.initiator)

          const localKey = useStatic.local ? this.s : this.e
          const remoteKey = useStatic.remote ? this.rs : this.re

          this.mixKey(remoteKey, localKey)
          break
        }

        default :
          throw new Error('Unexpected message')
      }
    }

    w.push(this.encryptAndHash(payload))
    const response = w.end()

    if (!this.handshake.length) this.final()
    return response
  }

  _clear () {
    super._clear()

    this.e.secretKey.fill(0)
    this.e.publicKey.fill(0)

    this.re.fill(0)

    this.e = null
    this.re = null
  }
}

function keyPattern (pattern, initiator) {
  const ret = {
    local: false,
    remote: false
  }

  switch (pattern) {
    case TOK_EE:
      return ret

    case TOK_ES:
      ret.local ^= !initiator
      ret.remote ^= initiator
      return ret

    case TOK_SE:
      ret.local ^= initiator
      ret.remote ^= !initiator
      return ret

    case TOK_SS:
      ret.local ^= 1
      ret.remote ^= 1
      return ret
  }
}

function hasPskToken (handshake) {
  return handshake.some(x => {
    return Array.isArray(x) && x.indexOf(TOK_PSK) !== -1
  })
}
{
  "name": "noise-handshake",
  "version": "4.2.0",
  "description": "Noise protocol handshake",
  "main": "noise.js",
  "files": [
    "*.js"
  ],
  "scripts": {
    "test": "standard && brittle test/*.js"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/noise-handshake.git"
  },
  "dependencies": {
    "b4a": "^1.1.0",
    "nanoassert": "^2.0.0",
    "sodium-universal": "^5.0.0"
  },
  "devDependencies": {
    "brittle": "^3.3.2",
    "noise-protocol": "chm-diederichs/noise-protocol.git#xx-ephemeral-key",
    "standard": "^16.0.3"
  }
}
const sodium = require('sodium-universal')
const assert = require('nanoassert')
const b4a = require('b4a')
const CipherState = require('./cipher')
const curve = require('./dh')
const { HASHLEN, hkdf } = require('./hkdf')

module.exports = class SymmetricState extends CipherState {
  constructor (opts = {}) {
    super()

    this.curve = opts.curve || curve
    this.digest = b4a.alloc(HASHLEN)
    this.chainingKey = null
    this.offset = 0

    this.DH_ALG = this.curve.ALG
  }

  mixHash (data) {
    accumulateDigest(this.digest, data)
  }

  mixKeyAndHash (key) {
    const [ck, tempH, tempK] = hkdf(this.chainingKey, key, '', 3 * HASHLEN)
    this.chainingKey = ck
    this.mixHash(tempH)
    this.initialiseKey(tempK.subarray(0, 32))
  }

  mixKeyNormal (key) {
    const [ck, tempK] = hkdf(this.chainingKey, key)
    this.chainingKey = ck
    this.initialiseKey(tempK.subarray(0, 32))
  }

  mixKey (remoteKey, localKey) {
    const dh = this.curve.dh(remoteKey, localKey)
    const hkdfResult = hkdf(this.chainingKey, dh)
    this.chainingKey = hkdfResult[0]
    this.initialiseKey(hkdfResult[1].subarray(0, 32))
  }

  encryptAndHash (plaintext) {
    const ciphertext = this.encrypt(plaintext, this.digest)
    accumulateDigest(this.digest, ciphertext)
    return ciphertext
  }

  decryptAndHash (ciphertext) {
    const plaintext = this.decrypt(ciphertext, this.digest)
    accumulateDigest(this.digest, ciphertext)
    return plaintext
  }

  getHandshakeHash (out) {
    if (!out) return this.getHandshakeHash(b4a.alloc(HASHLEN))
    assert(out.byteLength === HASHLEN, `output must be ${HASHLEN} bytes`)

    out.set(this.digest)
    return out
  }

  split () {
    const res = hkdf(this.chainingKey, b4a.alloc(0))
    return res.map(k => k.subarray(0, 32))
  }

  _clear () {
    super._clear()

    sodium.sodium_memzero(this.digest)
    sodium.sodium_memzero(this.chainingKey)

    this.digest = null
    this.chainingKey = null
    this.offset = null

    this.curve = null
  }

  static get alg () {
    return CipherState.alg + '_BLAKE2b'
  }
}

function accumulateDigest (digest, input) {
  const toHash = b4a.concat([digest, input])
  sodium.crypto_generichash(digest, toHash)
}
const b4a = require('b4a')
const c = require('compact-encoding')
const queueTick = require('queue-tick')
const safetyCatch = require('safety-catch')
const unslab = require('unslab')

const MAX_BUFFERED = 32768
const MAX_BACKLOG = Infinity // TODO: impl "open" backpressure
const MAX_BATCH = 8 * 1024 * 1024

class Channel {
  constructor(
    mux,
    info,
    userData,
    protocol,
    aliases,
    id,
    handshake,
    messages,
    onopen,
    onclose,
    ondestroy,
    ondrain
  ) {
    this.userData = userData
    this.protocol = protocol
    this.aliases = aliases
    this.id = id
    this.handshake = null
    this.messages = []

    this.opened = false
    this.closed = false
    this.destroyed = false

    this.onopen = onopen
    this.onclose = onclose
    this.ondestroy = ondestroy
    this.ondrain = ondrain

    this._handshake = handshake
    this._mux = mux
    this._info = info
    this._localId = 0
    this._remoteId = 0
    this._active = 0
    this._extensions = null

    this._decBound = this._dec.bind(this)
    this._decAndDestroyBound = this._decAndDestroy.bind(this)

    this._openedPromise = null
    this._openedResolve = null

    this._destroyedPromise = null
    this._destroyedResolve = null

    for (const m of messages) this.addMessage(m)
  }

  get drained() {
    return this._mux.drained
  }

  fullyOpened() {
    if (this.opened) return Promise.resolve(true)
    if (this.closed) return Promise.resolve(false)
    if (this._openedPromise) return this._openedPromise

    this._openedPromise = new Promise((resolve) => {
      this._openedResolve = resolve
    })
    return this._openedPromise
  }

  fullyClosed() {
    if (this.destroyed) return Promise.resolve()
    if (this._destroyedPromise) return this._destroyedPromise

    this._destroyedPromise = new Promise((resolve) => {
      this._destroyedResolve = resolve
    })
    return this._destroyedPromise
  }

  open(handshake) {
    const id = this._mux._free.length > 0 ? this._mux._free.pop() : this._mux._local.push(null) - 1

    this._info.opened++
    this._info.lastChannel = this
    this._localId = id + 1
    this._mux._local[id] = this

    if (this._remoteId === 0) {
      this._info.outgoing.push(this._localId)
    }

    const state = { buffer: null, start: 2, end: 2 }

    c.uint.preencode(state, this._localId)
    c.string.preencode(state, this.protocol)
    c.optionalBuffer.preencode(state, this.id)
    if (this._handshake) this._handshake.preencode(state, handshake)

    state.buffer = this._mux._alloc(state.end)

    state.buffer[0] = 0
    state.buffer[1] = 1
    c.uint.encode(state, this._localId)
    c.string.encode(state, this.protocol)
    c.optionalBuffer.encode(state, this.id)
    if (this._handshake) this._handshake.encode(state, handshake)

    this._mux._write0(state.buffer)
  }

  _dec() {
    if (--this._active === 0 && this.closed === true) this._destroy()
  }

  _decAndDestroy(err) {
    this._dec()
    this._mux._safeDestroy(err)
  }

  _fullyOpenSoon() {
    this._mux._remote[this._remoteId - 1].session = this
    queueTick(this._fullyOpenOrDestroy.bind(this))
  }

  _fullyOpenOrDestroy() {
    try {
      this._fullyOpen()
    } catch (err) {
      this._mux._safeDestroyBound(err)
    }
  }

  _fullyOpen() {
    if (this.opened === true || this.closed === true) return

    const remote = this._mux._remote[this._remoteId - 1]

    this.handshake = this._handshake ? this._handshake.decode(remote.state) : null
    this._track(this.onopen(this.handshake, this))

    remote.session = this
    remote.state = null
    if (remote.pending !== null) this._drain(remote)
    if (this._mux._destroying === true) return

    this.opened = true
    this._resolveOpen(true)
  }

  _resolveOpen(opened) {
    if (this._openedResolve !== null) {
      this._openedResolve(opened)
      this._openedResolve = this._openedPromise = null
    }
  }

  _resolveDestroyed() {
    if (this._destroyedResolve !== null) {
      this._destroyedResolve()
      this._destroyedResolve = this._destroyedPromise = null
    }
  }

  _drain(remote) {
    for (let i = 0; i < remote.pending.length; i++) {
      const p = remote.pending[i]
      this._mux._buffered -= byteSize(p.state)
      this._recv(p.type, p.state)
      if (this._mux._destroying === true) return
    }

    remote.pending = null
    this._mux._resumeMaybe()
  }

  _track(p) {
    if (isPromise(p) === true) {
      this._active++
      return p.then(this._decBound, this._decAndDestroyBound)
    }

    return null
  }

  _close(isRemote) {
    if (this.closed === true) return
    this.closed = true

    this._info.opened--
    if (this._info.lastChannel === this) this._info.lastChannel = null

    if (this._remoteId > 0) {
      this._mux._remote[this._remoteId - 1] = null
      this._remoteId = 0
      // If remote has acked, we can reuse the local id now
      // otherwise, we need to wait for the "ack" to arrive
      this._mux._free.push(this._localId - 1)
    }

    this._mux._local[this._localId - 1] = null
    this._localId = 0

    this._mux._gc(this._info)
    this._track(this.onclose(isRemote, this))

    if (this._active === 0) this._destroy()

    this._resolveOpen(false)
  }

  _destroy() {
    if (this.destroyed === true) return
    this.destroyed = true
    this._track(this.ondestroy(this))
    this._resolveDestroyed()
  }

  _recv(type, state) {
    if (type < this.messages.length) {
      const m = this.messages[type]
      const p = m.recv(state, this)
      if (m.autoBatch === true) return p
    }
    return null
  }

  cork() {
    this._mux.cork()
  }

  uncork() {
    this._mux.uncork()
  }

  close() {
    if (this.closed === true) return

    const state = { buffer: null, start: 2, end: 2 }

    c.uint.preencode(state, this._localId)

    state.buffer = this._mux._alloc(state.end)

    state.buffer[0] = 0
    state.buffer[1] = 3
    c.uint.encode(state, this._localId)

    this._close(false)
    this._mux._write0(state.buffer)
  }

  addMessage(opts) {
    if (!opts) return this._skipMessage()

    const type = this.messages.length
    const autoBatch = opts.autoBatch !== false
    const encoding = opts.encoding || c.raw
    const onmessage = opts.onmessage || noop

    const s = this
    const typeLen = encodingLength(c.uint, type)

    const m = {
      type,
      autoBatch,
      encoding,
      onmessage,
      recv(state, session) {
        return session._track(m.onmessage(encoding.decode(state), session))
      },
      send(m, session = s) {
        if (session.closed === true) return false

        const mux = session._mux
        const state = { buffer: null, start: 0, end: typeLen }

        if (mux._batch !== null) {
          encoding.preencode(state, m)
          state.buffer = mux._alloc(state.end)

          c.uint.encode(state, type)
          encoding.encode(state, m)

          mux._pushBatch(session._localId, state.buffer)
          return true
        }

        c.uint.preencode(state, session._localId)
        encoding.preencode(state, m)

        state.buffer = mux._alloc(state.end)

        c.uint.encode(state, session._localId)
        c.uint.encode(state, type)
        encoding.encode(state, m)

        mux.drained = mux.stream.write(state.buffer)

        return mux.drained
      }
    }

    this.messages.push(m)

    return m
  }

  _skipMessage() {
    const type = this.messages.length
    const m = {
      type,
      encoding: c.raw,
      onmessage: noop,
      recv(state, session) {},
      send(m, session) {}
    }

    this.messages.push(m)
    return m
  }
}

module.exports = class Protomux {
  constructor(stream, { alloc } = {}) {
    if (stream.userData === null) stream.userData = this

    this.isProtomux = true
    this.stream = stream
    this.corked = 0
    this.drained = true

    this._alloc =
      alloc || (typeof stream.alloc === 'function' ? stream.alloc.bind(stream) : b4a.allocUnsafe)
    this._safeDestroyBound = this._safeDestroy.bind(this)
    this._uncorkBound = this.uncork.bind(this)

    this._remoteBacklog = 0
    this._buffered = 0
    this._paused = false
    this._remote = []
    this._local = []
    this._free = []
    this._batch = null
    this._batchState = null

    this._infos = new Map()
    this._notify = new Map()
    // stream.destroyed flips asynchronously on streamx-based transports.
    this._destroying = false

    this.stream.on('data', this._ondata.bind(this))
    this.stream.on('drain', this._ondrain.bind(this))
    this.stream.on('end', this._onend.bind(this))
    this.stream.on('error', noop) // we handle this in "close"
    this.stream.on('close', this._shutdown.bind(this))
  }

  static from(stream, opts) {
    if (stream.userData && stream.userData.isProtomux) return stream.userData
    if (stream.isProtomux) return stream
    return new this(stream, opts)
  }

  static isProtomux(mux) {
    return typeof mux === 'object' && mux.isProtomux === true
  }

  *[Symbol.iterator]() {
    for (const session of this._local) {
      if (session !== null) yield session
    }
  }

  isIdle() {
    return this._local.length === this._free.length
  }

  cork() {
    if (++this.corked === 1) {
      this._batch = []
      this._batchState = { buffer: null, start: 0, end: 1 }
    }
  }

  uncork() {
    if (--this.corked === 0) {
      this._sendBatch(this._batch, this._batchState)
      this._batch = null
      this._batchState = null
    }
  }

  getLastChannel({ protocol, id = null }) {
    const key = toKey(protocol, id)
    const info = this._infos.get(key)
    if (info) return info.lastChannel
    return null
  }

  pair({ protocol, id = null }, notify) {
    this._notify.set(toKey(protocol, id), notify)
  }

  unpair({ protocol, id = null }) {
    this._notify.delete(toKey(protocol, id))
  }

  opened({ protocol, id = null }) {
    const key = toKey(protocol, id)
    const info = this._infos.get(key)
    return info ? info.opened > 0 : false
  }

  createChannel({
    userData = null,
    protocol,
    aliases = [],
    id = null,
    unique = true,
    handshake = null,
    messages = [],
    onopen = noop,
    onclose = noop,
    ondestroy = noop,
    ondrain = noop
  }) {
    if (this.stream.destroyed) return null

    const info = this._get(protocol, id, aliases)
    if (unique && info.opened > 0) return null

    if (info.incoming.length === 0) {
      return new Channel(
        this,
        info,
        userData,
        protocol,
        aliases,
        id,
        handshake,
        messages,
        onopen,
        onclose,
        ondestroy,
        ondrain
      )
    }

    this._remoteBacklog--

    const remoteId = info.incoming.shift()
    const r = this._remote[remoteId - 1]
    if (r === null) return null

    const session = new Channel(
      this,
      info,
      userData,
      protocol,
      aliases,
      id,
      handshake,
      messages,
      onopen,
      onclose,
      ondestroy,
      ondrain
    )

    session._remoteId = remoteId
    session._fullyOpenSoon()

    return session
  }

  _pushBatch(localId, buffer) {
    if (this._batchState.end >= MAX_BATCH) {
      this._sendBatch(this._batch, this._batchState)
      this._batch = []
      this._batchState = { buffer: null, start: 0, end: 1 }
    }

    if (this._batch.length === 0 || this._batch[this._batch.length - 1].localId !== localId) {
      this._batchState.end++
      c.uint.preencode(this._batchState, localId)
    }
    c.buffer.preencode(this._batchState, buffer)
    this._batch.push({ localId, buffer })
  }

  _sendBatch(batch, state) {
    if (batch.length === 0) return

    let prev = batch[0].localId

    state.buffer = this._alloc(state.end)
    state.buffer[state.start++] = 0
    state.buffer[state.start++] = 0

    c.uint.encode(state, prev)

    for (let i = 0; i < batch.length; i++) {
      const b = batch[i]
      if (prev !== b.localId) {
        state.buffer[state.start++] = 0
        c.uint.encode(state, (prev = b.localId))
      }
      c.buffer.encode(state, b.buffer)
    }

    this.drained = this.stream.write(state.buffer)
  }

  _get(protocol, id, aliases = []) {
    const key = toKey(protocol, id)

    let info = this._infos.get(key)
    if (info) return info

    info = {
      key,
      protocol,
      aliases: [],
      id,
      pairing: 0,
      opened: 0,
      incoming: [],
      outgoing: [],
      lastChannel: null
    }
    this._infos.set(key, info)

    for (const alias of aliases) {
      const key = toKey(alias, id)
      info.aliases.push(key)

      this._infos.set(key, info)
    }

    return info
  }

  _gc(info) {
    if (info.opened === 0 && info.outgoing.length === 0 && info.incoming.length === 0) {
      this._infos.delete(info.key)

      for (const alias of info.aliases) this._infos.delete(alias)
    }
  }

  _ondata(buffer) {
    if (buffer.byteLength === 0) return // ignore empty frames...
    try {
      const state = { buffer, start: 0, end: buffer.byteLength }
      this._decode(c.uint.decode(state), state)
    } catch (err) {
      this._safeDestroy(err)
    }
  }

  _ondrain() {
    this.drained = true

    for (const s of this._local) {
      if (s !== null) s._track(s.ondrain(s))
    }
  }

  _onend() {
    // TODO: support half open mode for the users who wants that here
    this.stream.end()
  }

  _decode(remoteId, state) {
    const type = c.uint.decode(state)

    if (remoteId === 0) {
      return this._oncontrolsession(type, state)
    }

    const r = remoteId <= this._remote.length ? this._remote[remoteId - 1] : null

    // if the channel is closed ignore - could just be a pipeline message...
    if (r === null) return null

    if (r.pending !== null) {
      this._bufferMessage(r, type, state)
      return null
    }

    return r.session._recv(type, state)
  }

  _oncontrolsession(type, state) {
    switch (type) {
      case 0:
        this._onbatch(state)
        break

      case 1:
        // return the promise back up as this has sideeffects so we can batch reply
        return this._onopensession(state)

      case 2:
        this._onrejectsession(state)
        break

      case 3:
        this._onclosesession(state)
        break
    }

    return null
  }

  _bufferMessage(r, type, { buffer, start, end }) {
    const state = { buffer, start, end } // copy
    r.pending.push({ type, state })
    this._buffered += byteSize(state)
    this._pauseMaybe()
  }

  _pauseMaybe() {
    if (this._paused === true || this._buffered <= MAX_BUFFERED) return
    this._paused = true
    this.stream.pause()
  }

  _resumeMaybe() {
    if (this._paused === false || this._buffered > MAX_BUFFERED) return
    this._paused = false
    this.stream.resume()
  }

  _onbatch(state) {
    const end = state.end
    let remoteId = c.uint.decode(state)

    let waiting = null

    while (state.end > state.start) {
      const len = c.uint.decode(state)
      if (len === 0) {
        remoteId = c.uint.decode(state)
        continue
      }
      state.end = state.start + len
      // if batch contains more than one message, cork it so we reply back with a batch
      if (end !== state.end && waiting === null) {
        waiting = []
        this.cork()
      }
      const p = this._decode(remoteId, state)
      if (waiting !== null && p !== null) waiting.push(p)
      state.start = state.end
      state.end = end
    }

    if (waiting !== null) {
      // the waiting promises are not allowed to throw but we destroy the stream in case we are wrong
      Promise.all(waiting).then(this._uncorkBound, this._safeDestroyBound)
    }
  }

  _onopensession(state) {
    const remoteId = c.uint.decode(state)
    const protocol = c.string.decode(state)
    const id = unslab(c.optionalBuffer.decode(state))

    // remote tried to open the control session - auto reject for now
    // as we can use as an explicit control protocol declaration if we need to
    if (remoteId === 0) {
      this._rejectSession(0)
      return null
    }

    const rid = remoteId - 1
    const info = this._get(protocol, id)

    // allow the remote to grow the ids by one
    if (this._remote.length === rid) {
      this._remote.push(null)
    }

    if (rid >= this._remote.length || this._remote[rid] !== null) {
      throw new Error('Invalid open message')
    }

    if (info.outgoing.length > 0) {
      const localId = info.outgoing.shift()
      const session = this._local[localId - 1]

      if (session === null) {
        // we already closed the channel - ignore
        this._free.push(localId - 1)
        return null
      }

      this._remote[rid] = { state, pending: null, session: null }

      session._remoteId = remoteId
      session._fullyOpen()
      return null
    }

    const copyState = { buffer: state.buffer, start: state.start, end: state.end }
    this._remote[rid] = { state: copyState, pending: [], session: null }

    if (++this._remoteBacklog > MAX_BACKLOG) {
      throw new Error('Remote exceeded backlog')
    }

    info.pairing++
    info.incoming.push(remoteId)

    return this._requestSession(protocol, id, info).catch(this._safeDestroyBound)
  }

  _onrejectsession(state) {
    const localId = c.uint.decode(state)

    // TODO: can be done smarter...
    for (const info of this._infos.values()) {
      const i = info.outgoing.indexOf(localId)
      if (i === -1) continue

      info.outgoing.splice(i, 1)

      const session = this._local[localId - 1]

      this._free.push(localId - 1)
      if (session !== null) session._close(true)

      this._gc(info)
      return
    }

    throw new Error('Invalid reject message')
  }

  _onclosesession(state) {
    const remoteId = c.uint.decode(state)

    if (remoteId === 0) return // ignore

    const rid = remoteId - 1
    const r = rid < this._remote.length ? this._remote[rid] : null

    if (r === null) return

    if (r.session !== null) r.session._close(true)
  }

  async _requestSession(protocol, id, info) {
    const notify = this._notify.get(toKey(protocol, id)) || this._notify.get(toKey(protocol, null))

    if (notify) await notify(id)

    if (--info.pairing > 0) return

    while (info.incoming.length > 0) {
      this._rejectSession(info, info.incoming.shift())
    }

    this._gc(info)
  }

  _rejectSession(info, remoteId) {
    if (remoteId > 0) {
      const r = this._remote[remoteId - 1]

      if (r.pending !== null) {
        for (let i = 0; i < r.pending.length; i++) {
          this._buffered -= byteSize(r.pending[i].state)
        }
      }

      this._remote[remoteId - 1] = null
      this._resumeMaybe()
    }

    const state = { buffer: null, start: 2, end: 2 }

    c.uint.preencode(state, remoteId)

    state.buffer = this._alloc(state.end)

    state.buffer[0] = 0
    state.buffer[1] = 2
    c.uint.encode(state, remoteId)

    this._write0(state.buffer)
  }

  _write0(buffer) {
    if (this._batch !== null) {
      this._pushBatch(0, buffer.subarray(1))
      return
    }

    this.drained = this.stream.write(buffer)
  }

  destroy(err) {
    this._destroying = true
    this.stream.destroy(err)
  }

  _safeDestroy(err) {
    safetyCatch(err)
    this._destroying = true
    this.stream.destroy(err)
  }

  _shutdown() {
    this._destroying = true
    for (const s of this._local) {
      if (s !== null) s._close(true)
    }
  }
}

function noop() {}

function toKey(protocol, id) {
  return protocol + '##' + (id ? b4a.toString(id, 'hex') : '')
}

function byteSize(state) {
  return 512 + (state.end - state.start)
}

function isPromise(p) {
  return !!(p && typeof p.then === 'function')
}

function encodingLength(enc, val) {
  const state = { buffer: null, start: 0, end: 0 }
  enc.preencode(state, val)
  return state.end
}
{
  "name": "protomux",
  "version": "3.11.0",
  "description": "Multiplex multiple message oriented protocols over a stream",
  "main": "index.js",
  "files": [
    "index.js"
  ],
  "dependencies": {
    "b4a": "^1.3.1",
    "compact-encoding": "^3.0.0",
    "queue-tick": "^1.0.0",
    "safety-catch": "^1.0.1",
    "unslab": "^1.3.0"
  },
  "devDependencies": {
    "@hyperswarm/secret-stream": "^6.0.0",
    "brittle": "^3.0.0",
    "lunte": "^1.0.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0"
  },
  "scripts": {
    "format": "prettier --write .",
    "lint": "prettier --check . && lunte",
    "test": "npm run test:node && npm run test:bare",
    "test:node": "brittle-node test.js",
    "test:bare": "brittle-bare test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/holepunchto/protomux.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/holepunchto/protomux/issues"
  },
  "homepage": "https://github.com/holepunchto/protomux"
}
{
  "name": "queue-tick",
  "version": "1.0.1",
  "description": "Next tick shim that prefers process.nextTick over queueMicrotask for compat",
  "main": "./process-next-tick.js",
  "browser": "./queue-microtask.js",
  "dependencies": {},
  "devDependencies": {
    "standard": "^16.0.3",
    "tape": "^5.3.1"
  },
  "scripts": {
    "test": "standard && tape test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/queue-tick.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/queue-tick/issues"
  },
  "homepage": "https://github.com/mafintosh/queue-tick"
}
module.exports = (typeof process !== 'undefined' && typeof process.nextTick === 'function')
  ? process.nextTick.bind(process)
  : require('./queue-microtask')
module.exports = typeof queueMicrotask === 'function' ? queueMicrotask : (fn) => Promise.resolve().then(fn)
const b4a = require('b4a')

var EMPTY = []

module.exports = RecordCache

function RecordSet () {
  this.list = []
  this.map = new Map()
}

RecordSet.prototype.add = function (record, value) {
  var k = toString(record)
  var r = this.map.get(k)
  if (r) return false

  r = {index: this.list.length, record: value || record}
  this.list.push(r)
  this.map.set(k, r)
  return true
}

RecordSet.prototype.remove = function (record) {
  var k = toString(record)
  var r = this.map.get(k)
  if (!r) return false

  swap(this.list, r.index, this.list.length - 1)
  this.list.pop()
  this.map.delete(k)
  return true
}

function RecordStore () {
  this.records = new Map()
  this.size = 0
}

RecordStore.prototype.add = function (name, record, value) {
  var r = this.records.get(name)

  if (!r) {
    r = new RecordSet()
    this.records.set(name, r)
  }

  if (r.add(record, value)) {
    this.size++
    return true
  }

  return false
}

RecordStore.prototype.remove = function (name, record, value) {
  var r = this.records.get(name)
  if (!r) return false

  if (r.remove(record, value)) {
    this.size--
    if (!r.map.size) this.records.delete(name)
    return true
  }

  return false
}

RecordStore.prototype.get = function (name) {
  var r = this.records.get(name)
  return r ? r.list : EMPTY
}

function RecordCache (opts) {
  if (!(this instanceof RecordCache)) return new RecordCache(opts)
  if (!opts) opts = {}

  this.maxSize = opts.maxSize || Infinity
  this.maxAge = opts.maxAge || 0

  this._onstale = opts.onStale || opts.onstale || null
  this._fresh = new RecordStore()
  this._stale = new RecordStore()
  this._interval = null
  this._gced = false

  if (this.maxAge && this.maxAge < Infinity) {
    // 2/3 gives us a span of 0.66-1.33 maxAge or avg maxAge
    var tick = Math.ceil(2 / 3 * this.maxAge)
    this._interval = setInterval(this._gcAuto.bind(this), tick)
    if (this._interval.unref) this._interval.unref()
  }
}

Object.defineProperty(RecordCache.prototype, 'size', {
  get: function () {
    return this._fresh.size + this._stale.size
  }
})

RecordCache.prototype.add = function (name, record, value) {
  this._stale.remove(name, record, value)
  if (this._fresh.add(name, record, value) && this._fresh.size > this.maxSize) {
    this._gc()
  }
}

RecordCache.prototype.remove = function (name, record, value) {
  this._fresh.remove(name, record, value)
  this._stale.remove(name, record, value)
}

RecordCache.prototype.get = function (name, n) {
  var a = this._fresh.get(name)
  var b = this._stale.get(name)
  var aLen = a.length
  var bLen = b.length
  var len = aLen + bLen

  if (n > len || !n) n = len
  var result = new Array(n)

  for (var i = 0; i < n; i++) {
    var j = Math.floor(Math.random() * (aLen + bLen))
    if (j < aLen) {
      result[i] = a[j].record
      swap(a, j, --aLen)
    } else {
      j -= aLen
      result[i] = b[j].record
      swap(b, j, --bLen)
    }
  }

  return result
}

RecordCache.prototype._gcAuto = function () {
  if (!this._gced) this._gc()
  this._gced = false
}

RecordCache.prototype._gc = function () {
  if (this._onstale && this._stale.size > 0) this._onstale(this._stale)
  this._stale = this._fresh
  this._fresh = new RecordStore()
  this._gced = true
}

RecordCache.prototype.clear = function () {
  this._gc()
  this._gc()
}

RecordCache.prototype.destroy = function () {
  this.clear()
  clearInterval(this._interval)
  this._interval = null
}

function toString (record) {
  return b4a.isBuffer(record) ? b4a.toString(record, 'hex') : record
}

function swap (list, a, b) {
  var tmp = list[a]
  tmp.index = b
  list[b].index = a
  list[a] = list[b]
  list[b] = tmp
}
{
  "name": "record-cache",
  "version": "1.2.0",
  "description": "Cache optimised for record like things",
  "main": "index.js",
  "dependencies": {
    "b4a": "^1.3.1"
  },
  "devDependencies": {
    "standard": "^10.0.3",
    "tape": "^4.8.0"
  },
  "scripts": {
    "test": "standard && tape test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/record-cache.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/record-cache/issues"
  },
  "homepage": "https://github.com/mafintosh/record-cache"
}
module.exports = require.addon.bind(require)
{
  "name": "require-addon",
  "version": "1.2.0",
  "description": "Import native addons across JavaScript runtimes",
  "exports": {
    "./package": "./package.json",
    ".": {
      "bare": "./lib/bare.js",
      "node": "./lib/node.js",
      "default": "./lib/default.js"
    }
  },
  "imports": {
    "fs": {
      "bare": "bare-fs",
      "default": "fs"
    },
    "path": {
      "bare": "bare-path",
      "default": "path"
    },
    "url": {
      "bare": "bare-url",
      "default": "url"
    }
  },
  "files": [
    "lib"
  ],
  "scripts": {
    "test": "npm run lint && npm run test:bare && npm run test:node",
    "test:bare": "bare test.js",
    "test:node": "node test.js",
    "lint": "prettier --check .",
    "format": "prettier --write ."
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/require-addon.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/require-addon/issues"
  },
  "homepage": "https://github.com/holepunchto/require-addon#readme",
  "engines": {
    "bare": ">=1.10.0"
  },
  "dependencies": {
    "bare-addon-resolve": "^1.3.0"
  },
  "devDependencies": {
    "bare-bundle": "^1.8.1",
    "bare-bundle-evaluate": "^1.1.0",
    "bare-fs": "^4.0.0",
    "bare-path": "^3.0.0",
    "bare-url": "^2.1.0",
    "brittle": "^3.7.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0"
  }
}
module.exports = safetyCatch

function isActuallyUncaught (err) {
  if (!err) return false
  return err instanceof TypeError ||
    err instanceof SyntaxError ||
    err instanceof ReferenceError ||
    err instanceof EvalError ||
    err instanceof RangeError ||
    err instanceof URIError ||
    err.code === 'ERR_ASSERTION' ||
    err.name === 'AssertionError'
}

function throwErrorNT (err) {
  queueMicrotask(() => { throw err })
}

function safetyCatch (err) {
  if (isActuallyUncaught(err)) {
    throwErrorNT(err)
    throw err
  }
}
{
  "name": "safety-catch",
  "version": "1.0.3",
  "description": "Small module that makes sure your catch, caught an actual error and not a programming mistake or assertion",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {},
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/safety-catch.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/safety-catch/issues"
  },
  "homepage": "https://github.com/mafintosh/safety-catch"
}
{
  "name": "scrypt-js",
  "version": "3.0.1",
  "description": "The scrypt password-based key derivation function with sync and cancellable async.",
  "main": "scrypt.js",
  "scripts": {
    "test": "mocha test/test-scrypt.js"
  },
  "types": "scrypt.d.ts",
  "devDependencies": {
    "mocha": "6.2.2"
  },
  "keywords": [
    "scrypt",
    "pbkdf",
    "password",
    "async",
    "asynchronous",
    "stepwise"
  ],
  "author": "Richard Moore <me@ricmoo.com>",
  "repository": {
    "type": "git",
    "url": "git://github.com/ricmoo/scrypt-js.git"
  },
  "license": "MIT"
}
"use strict";

(function(root) {
    const MAX_VALUE = 0x7fffffff;

    // The SHA256 and PBKDF2 implementation are from scrypt-async-js:
    // See: https://github.com/dchest/scrypt-async-js
    function SHA256(m) {
        const K = new Uint32Array([
           0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
           0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
           0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
           0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
           0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
           0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
           0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
           0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
           0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
           0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
           0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
           0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
           0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
       ]);

        let h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a;
        let h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;
        const w = new Uint32Array(64);

        function blocks(p) {
            let off = 0, len = p.length;
            while (len >= 64) {
                let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7, u, i, j, t1, t2;

                for (i = 0; i < 16; i++) {
                    j = off + i*4;
                    w[i] = ((p[j] & 0xff)<<24) | ((p[j+1] & 0xff)<<16) |
                    ((p[j+2] & 0xff)<<8) | (p[j+3] & 0xff);
                }

                for (i = 16; i < 64; i++) {
                    u = w[i-2];
                    t1 = ((u>>>17) | (u<<(32-17))) ^ ((u>>>19) | (u<<(32-19))) ^ (u>>>10);

                    u = w[i-15];
                    t2 = ((u>>>7) | (u<<(32-7))) ^ ((u>>>18) | (u<<(32-18))) ^ (u>>>3);

                    w[i] = (((t1 + w[i-7]) | 0) + ((t2 + w[i-16]) | 0)) | 0;
                }

                for (i = 0; i < 64; i++) {
                    t1 = ((((((e>>>6) | (e<<(32-6))) ^ ((e>>>11) | (e<<(32-11))) ^
                             ((e>>>25) | (e<<(32-25)))) + ((e & f) ^ (~e & g))) | 0) +
                          ((h + ((K[i] + w[i]) | 0)) | 0)) | 0;

                    t2 = ((((a>>>2) | (a<<(32-2))) ^ ((a>>>13) | (a<<(32-13))) ^
                           ((a>>>22) | (a<<(32-22)))) + ((a & b) ^ (a & c) ^ (b & c))) | 0;

                    h = g;
                    g = f;
                    f = e;
                    e = (d + t1) | 0;
                    d = c;
                    c = b;
                    b = a;
                    a = (t1 + t2) | 0;
                }

                h0 = (h0 + a) | 0;
                h1 = (h1 + b) | 0;
                h2 = (h2 + c) | 0;
                h3 = (h3 + d) | 0;
                h4 = (h4 + e) | 0;
                h5 = (h5 + f) | 0;
                h6 = (h6 + g) | 0;
                h7 = (h7 + h) | 0;

                off += 64;
                len -= 64;
            }
        }

        blocks(m);

        let i, bytesLeft = m.length % 64,
        bitLenHi = (m.length / 0x20000000) | 0,
        bitLenLo = m.length << 3,
        numZeros = (bytesLeft < 56) ? 56 : 120,
        p = m.slice(m.length - bytesLeft, m.length);

        p.push(0x80);
        for (i = bytesLeft + 1; i < numZeros; i++) { p.push(0); }
        p.push((bitLenHi >>> 24) & 0xff);
        p.push((bitLenHi >>> 16) & 0xff);
        p.push((bitLenHi >>> 8)  & 0xff);
        p.push((bitLenHi >>> 0)  & 0xff);
        p.push((bitLenLo >>> 24) & 0xff);
        p.push((bitLenLo >>> 16) & 0xff);
        p.push((bitLenLo >>> 8)  & 0xff);
        p.push((bitLenLo >>> 0)  & 0xff);

        blocks(p);

        return [
            (h0 >>> 24) & 0xff, (h0 >>> 16) & 0xff, (h0 >>> 8) & 0xff, (h0 >>> 0) & 0xff,
            (h1 >>> 24) & 0xff, (h1 >>> 16) & 0xff, (h1 >>> 8) & 0xff, (h1 >>> 0) & 0xff,
            (h2 >>> 24) & 0xff, (h2 >>> 16) & 0xff, (h2 >>> 8) & 0xff, (h2 >>> 0) & 0xff,
            (h3 >>> 24) & 0xff, (h3 >>> 16) & 0xff, (h3 >>> 8) & 0xff, (h3 >>> 0) & 0xff,
            (h4 >>> 24) & 0xff, (h4 >>> 16) & 0xff, (h4 >>> 8) & 0xff, (h4 >>> 0) & 0xff,
            (h5 >>> 24) & 0xff, (h5 >>> 16) & 0xff, (h5 >>> 8) & 0xff, (h5 >>> 0) & 0xff,
            (h6 >>> 24) & 0xff, (h6 >>> 16) & 0xff, (h6 >>> 8) & 0xff, (h6 >>> 0) & 0xff,
            (h7 >>> 24) & 0xff, (h7 >>> 16) & 0xff, (h7 >>> 8) & 0xff, (h7 >>> 0) & 0xff
        ];
    }

    function PBKDF2_HMAC_SHA256_OneIter(password, salt, dkLen) {
        // compress password if it's longer than hash block length
        password = (password.length <= 64) ? password : SHA256(password);

        const innerLen = 64 + salt.length + 4;
        const inner = new Array(innerLen);
        const outerKey = new Array(64);

        let i;
        let dk = [];

        // inner = (password ^ ipad) || salt || counter
        for (i = 0; i < 64; i++) { inner[i] = 0x36; }
        for (i = 0; i < password.length; i++) { inner[i] ^= password[i]; }
        for (i = 0; i < salt.length; i++) { inner[64 + i] = salt[i]; }
        for (i = innerLen - 4; i < innerLen; i++) { inner[i] = 0; }

        // outerKey = password ^ opad
        for (i = 0; i < 64; i++) outerKey[i] = 0x5c;
        for (i = 0; i < password.length; i++) outerKey[i] ^= password[i];

        // increments counter inside inner
        function incrementCounter() {
            for (let i = innerLen - 1; i >= innerLen - 4; i--) {
                inner[i]++;
                if (inner[i] <= 0xff) return;
                inner[i] = 0;
            }
        }

        // output blocks = SHA256(outerKey || SHA256(inner)) ...
        while (dkLen >= 32) {
            incrementCounter();
            dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))));
            dkLen -= 32;
        }
        if (dkLen > 0) {
            incrementCounter();
            dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))).slice(0, dkLen));
        }

        return dk;
    }

    // The following is an adaptation of scryptsy
    // See: https://www.npmjs.com/package/scryptsy
    function blockmix_salsa8(BY, Yi, r, x, _X) {
        let i;

        arraycopy(BY, (2 * r - 1) * 16, _X, 0, 16);
        for (i = 0; i < 2 * r; i++) {
            blockxor(BY, i * 16, _X, 16);
            salsa20_8(_X, x);
            arraycopy(_X, 0, BY, Yi + (i * 16), 16);
        }

        for (i = 0; i < r; i++) {
            arraycopy(BY, Yi + (i * 2) * 16, BY, (i * 16), 16);
        }

        for (i = 0; i < r; i++) {
            arraycopy(BY, Yi + (i * 2 + 1) * 16, BY, (i + r) * 16, 16);
        }
    }

    function R(a, b) {
        return (a << b) | (a >>> (32 - b));
    }

    function salsa20_8(B, x) {
        arraycopy(B, 0, x, 0, 16);

        for (let i = 8; i > 0; i -= 2) {
            x[ 4] ^= R(x[ 0] + x[12], 7);
            x[ 8] ^= R(x[ 4] + x[ 0], 9);
            x[12] ^= R(x[ 8] + x[ 4], 13);
            x[ 0] ^= R(x[12] + x[ 8], 18);
            x[ 9] ^= R(x[ 5] + x[ 1], 7);
            x[13] ^= R(x[ 9] + x[ 5], 9);
            x[ 1] ^= R(x[13] + x[ 9], 13);
            x[ 5] ^= R(x[ 1] + x[13], 18);
            x[14] ^= R(x[10] + x[ 6], 7);
            x[ 2] ^= R(x[14] + x[10], 9);
            x[ 6] ^= R(x[ 2] + x[14], 13);
            x[10] ^= R(x[ 6] + x[ 2], 18);
            x[ 3] ^= R(x[15] + x[11], 7);
            x[ 7] ^= R(x[ 3] + x[15], 9);
            x[11] ^= R(x[ 7] + x[ 3], 13);
            x[15] ^= R(x[11] + x[ 7], 18);
            x[ 1] ^= R(x[ 0] + x[ 3], 7);
            x[ 2] ^= R(x[ 1] + x[ 0], 9);
            x[ 3] ^= R(x[ 2] + x[ 1], 13);
            x[ 0] ^= R(x[ 3] + x[ 2], 18);
            x[ 6] ^= R(x[ 5] + x[ 4], 7);
            x[ 7] ^= R(x[ 6] + x[ 5], 9);
            x[ 4] ^= R(x[ 7] + x[ 6], 13);
            x[ 5] ^= R(x[ 4] + x[ 7], 18);
            x[11] ^= R(x[10] + x[ 9], 7);
            x[ 8] ^= R(x[11] + x[10], 9);
            x[ 9] ^= R(x[ 8] + x[11], 13);
            x[10] ^= R(x[ 9] + x[ 8], 18);
            x[12] ^= R(x[15] + x[14], 7);
            x[13] ^= R(x[12] + x[15], 9);
            x[14] ^= R(x[13] + x[12], 13);
            x[15] ^= R(x[14] + x[13], 18);
        }

        for (let i = 0; i < 16; ++i) {
            B[i] += x[i];
        }
    }

    // naive approach... going back to loop unrolling may yield additional performance
    function blockxor(S, Si, D, len) {
        for (let i = 0; i < len; i++) {
            D[i] ^= S[Si + i]
        }
    }

    function arraycopy(src, srcPos, dest, destPos, length) {
        while (length--) {
            dest[destPos++] = src[srcPos++];
        }
    }

    function checkBufferish(o) {
        if (!o || typeof(o.length) !== 'number') { return false; }

        for (let i = 0; i < o.length; i++) {
            const v = o[i];
            if (typeof(v) !== 'number' || v % 1 || v < 0 || v >= 256) {
                return false;
            }
        }

        return true;
    }

    function ensureInteger(value, name) {
        if (typeof(value) !== "number" || (value % 1)) { throw new Error('invalid ' + name); }
        return value;
    }

    // N = Cpu cost, r = Memory cost, p = parallelization cost
    // callback(error, progress, key)
    function _scrypt(password, salt, N, r, p, dkLen, callback) {

        N = ensureInteger(N, 'N');
        r = ensureInteger(r, 'r');
        p = ensureInteger(p, 'p');

        dkLen = ensureInteger(dkLen, 'dkLen');

        if (N === 0 || (N & (N - 1)) !== 0) { throw new Error('N must be power of 2'); }

        if (N > MAX_VALUE / 128 / r) { throw new Error('N too large'); }
        if (r > MAX_VALUE / 128 / p) { throw new Error('r too large'); }

        if (!checkBufferish(password)) {
            throw new Error('password must be an array or buffer');
        }
        password = Array.prototype.slice.call(password);

        if (!checkBufferish(salt)) {
            throw new Error('salt must be an array or buffer');
        }
        salt = Array.prototype.slice.call(salt);

        let b = PBKDF2_HMAC_SHA256_OneIter(password, salt, p * 128 * r);
        const B = new Uint32Array(p * 32 * r)
        for (let i = 0; i < B.length; i++) {
            const j = i * 4;
            B[i] = ((b[j + 3] & 0xff) << 24) |
                   ((b[j + 2] & 0xff) << 16) |
                   ((b[j + 1] & 0xff) << 8) |
                   ((b[j + 0] & 0xff) << 0);
        }

        const XY = new Uint32Array(64 * r);
        const V = new Uint32Array(32 * r * N);

        const Yi = 32 * r;

        // scratch space
        const x = new Uint32Array(16);       // salsa20_8
        const _X = new Uint32Array(16);      // blockmix_salsa8

        const totalOps = p * N * 2;
        let currentOp = 0;
        let lastPercent10 = null;

        // Set this to true to abandon the scrypt on the next step
        let stop = false;

        // State information
        let state = 0;
        let i0 = 0, i1;
        let Bi;

        // How many blockmix_salsa8 can we do per step?
        const limit = callback ? parseInt(1000 / r): 0xffffffff;

        // Trick from scrypt-async; if there is a setImmediate shim in place, use it
        const nextTick = (typeof(setImmediate) !== 'undefined') ? setImmediate : setTimeout;

        // This is really all I changed; making scryptsy a state machine so we occasionally
        // stop and give other evnts on the evnt loop a chance to run. ~RicMoo
        const incrementalSMix = function() {
            if (stop) {
                return callback(new Error('cancelled'), currentOp / totalOps);
            }

            let steps;

            switch (state) {
                case 0:
                    // for (var i = 0; i < p; i++)...
                    Bi = i0 * 32 * r;

                    arraycopy(B, Bi, XY, 0, Yi);                       // ROMix - 1

                    state = 1;                                         // Move to ROMix 2
                    i1 = 0;

                    // Fall through

                case 1:

                    // Run up to 1000 steps of the first inner smix loop
                    steps = N - i1;
                    if (steps > limit) { steps = limit; }
                    for (let i = 0; i < steps; i++) {                  // ROMix - 2
                        arraycopy(XY, 0, V, (i1 + i) * Yi, Yi)         // ROMix - 3
                        blockmix_salsa8(XY, Yi, r, x, _X);             // ROMix - 4
                    }

                    // for (var i = 0; i < N; i++)
                    i1 += steps;
                    currentOp += steps;

                    if (callback) {
                        // Call the callback with the progress (optionally stopping us)
                        const percent10 = parseInt(1000 * currentOp / totalOps);
                        if (percent10 !== lastPercent10) {
                            stop = callback(null, currentOp / totalOps);
                            if (stop) { break; }
                            lastPercent10 = percent10;
                        }
                    }

                    if (i1 < N) { break; }

                    i1 = 0;                                          // Move to ROMix 6
                    state = 2;

                    // Fall through

                case 2:

                    // Run up to 1000 steps of the second inner smix loop
                    steps = N - i1;
                    if (steps > limit) { steps = limit; }
                    for (let i = 0; i < steps; i++) {                // ROMix - 6
                        const offset = (2 * r - 1) * 16;             // ROMix - 7
                        const j = XY[offset] & (N - 1);
                        blockxor(V, j * Yi, XY, Yi);                 // ROMix - 8 (inner)
                        blockmix_salsa8(XY, Yi, r, x, _X);           // ROMix - 9 (outer)
                    }

                    // for (var i = 0; i < N; i++)...
                    i1 += steps;
                    currentOp += steps;

                    // Call the callback with the progress (optionally stopping us)
                    if (callback) {
                        const percent10 = parseInt(1000 * currentOp / totalOps);
                        if (percent10 !== lastPercent10) {
                            stop = callback(null, currentOp / totalOps);
                            if (stop) { break; }
                            lastPercent10 = percent10;
                        }
                    }

                    if (i1 < N) { break; }

                    arraycopy(XY, 0, B, Bi, Yi);                     // ROMix - 10

                    // for (var i = 0; i < p; i++)...
                    i0++;
                    if (i0 < p) {
                        state = 0;
                        break;
                    }

                    b = [];
                    for (let i = 0; i < B.length; i++) {
                        b.push((B[i] >>  0) & 0xff);
                        b.push((B[i] >>  8) & 0xff);
                        b.push((B[i] >> 16) & 0xff);
                        b.push((B[i] >> 24) & 0xff);
                    }

                    const derivedKey = PBKDF2_HMAC_SHA256_OneIter(password, b, dkLen);

                    // Send the result to the callback
                    if (callback) { callback(null, 1.0, derivedKey); }

                    // Done; don't break (which would reschedule)
                    return derivedKey;
            }

            // Schedule the next steps
            if (callback) { nextTick(incrementalSMix); }
        }

        // Run the smix state machine until completion
        if (!callback) {
            while (true) {
                const derivedKey = incrementalSMix();
                if (derivedKey != undefined) { return derivedKey; }
            }
        }

        // Bootstrap the async incremental smix
        incrementalSMix();
    }

    const lib = {
        scrypt: function(password, salt, N, r, p, dkLen, progressCallback) {
            return new Promise(function(resolve, reject) {
                let lastProgress = 0;
                if (progressCallback) { progressCallback(0); }
                _scrypt(password, salt, N, r, p, dkLen, function(error, progress, key) {
                    if (error) {
                        reject(error);
                    } else if (key) {
                        if (progressCallback && lastProgress !== 1) {
                            progressCallback(1);
                        }
                        resolve(new Uint8Array(key));
                    } else if (progressCallback && progress !== lastProgress) {
                        lastProgress = progress;
                        return progressCallback(progress);
                    }
                });
            });
        },
        syncScrypt: function(password, salt, N, r, p, dkLen) {
            return new Uint8Array(_scrypt(password, salt, N, r, p, dkLen));
        }
    };

    // node.js
    if (typeof(exports) !== 'undefined') {
       module.exports = lib;

    // RequireJS/AMD
    // http://www.requirejs.org/docs/api.html
    // https://github.com/amdjs/amdjs-api/wiki/AMD
    } else if (typeof(define) === 'function' && define.amd) {
        define(lib);

    // Web Browsers
    } else if (root) {

        // If there was an existing library "scrypt", make sure it is still available
        if (root.scrypt) {
            root._scrypt = root.scrypt;
        }

        root.scrypt = lib;
    }

})(this);
const set = require('unordered-set')

module.exports = opts => new ShuffledPriorityQueue(opts)

class ShuffledPriorityQueue {
  constructor (opts) {
    this.priorities = []
    this.equals = (opts && opts.equals) || null
  }

  get length () {
    return this.priorities.reduce(add, 0)
  }

  [Symbol.iterator] () {
    return new Iterator(this)
  }

  head () {
    for (let i = this.priorities.length - 1; i >= 0; i--) {
      const q = this.priorities[i]
      if (q.length) return shuffle(q, 0)
    }
    return null
  }

  tail () {
    for (let i = 0; i < this.priorities.length; i++) {
      const q = this.priorities[i]
      if (q.length) return shuffle(q, 0)
    }
    return null
  }

  prev (prev) {
    if (!prev) return this.tail()
    return next(this.priorities, prev, 1)
  }

  next (prev) {
    if (!prev) return this.head()
    return next(this.priorities, prev, -1)
  }

  shift () {
    return this.remove(this.head())
  }

  pop () {
    return this.remove(this.tail())
  }

  add (val) {
    const prio = val.priority || 0
    while (prio >= this.priorities.length) this.priorities.push([])
    set.add(this.priorities[prio], val)
    return val
  }

  remove (val) {
    if (!val) return null

    if (val._index === undefined) {
      val = this.find(val)
      if (!val) return null
    }

    return set.remove(this.priorities[val.priority || 0], val)
  }

  has (val) {
    if (val._index === undefined) return this.find(val)
    const priority = val.priority || 0
    if (priority >= this.priorities.length) return false
    return set.has(this.priorities[priority], val)
  }

  find (val) {
    if (val._index !== undefined) return val

    const prio = val.priority || 0
    const qs = this.priorities
    if (prio >= qs.length) return null

    const q = qs[prio]

    for (let i = 0; i < q.length; i++) {
      if (this.equals(q[i], val)) return q[i]
    }

    return null
  }
}

class Iterator {
  constructor (queue) {
    this.prev = null
    this.queue = queue
  }

  next () {
    const next = this.queue.next(this.prev)
    this.prev = next
    return { done: !next, value: next }
  }
}

function shuffle (q, i) {
  const ran = i + Math.floor(Math.random() * (q.length - i))
  set.swap(q, q[ran], q[i])
  return q[i]
}

function next (queues, prev, inc) {
  let i = prev.priority || 0
  let j = (prev._index || 0) + 1

  while (true) {
    if (i < 0 || i >= queues.length) return null
    const q = queues[i]

    if (j >= q.length) {
      i += inc
      j = 0
      continue
    }

    return shuffle(q, j)
  }
}

function add (len, b) {
  return len + b.length
}
{
  "name": "shuffled-priority-queue",
  "version": "2.1.0",
  "description": "A priority queue that shuffles elements with the same priority.",
  "main": "index.js",
  "scripts": {
    "test": "standard && tape test.js"
  },
  "dependencies": {
    "unordered-set": "^2.0.1"
  },
  "devDependencies": {
    "standard": "^12.0.1",
    "tape": "^4.9.1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/shuffled-priority-queue.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/shuffled-priority-queue/issues"
  },
  "homepage": "https://github.com/mafintosh/shuffled-priority-queue"
}
module.exports = class Signal {
  constructor () {
    this._resolve = null
    this._reject = null
    this._promise = null
    this._bind = bind.bind(this)
    this._onerror = clear.bind(this)
    this._onsuccess = clear.bind(this, null)
    this._timers = new Set()
  }

  wait (max) {
    if (!this._promise) {
      this._promise = new Promise(this._bind)
      this._promise.then(this._onsuccess).catch(this._onerror)
    }
    if (max) return this._sleep(max)
    return this._promise
  }

  _sleep (max) {
    const s = new Promise((resolve, reject) => {
      const done = () => {
        this._timers.delete(state)
        resolve(true)
      }
      const id = setTimeout(done, max)
      const state = { id, resolve, reject }
      this._timers.add(state)
    })

    return s
  }

  notify (err) {
    if (!this._promise) return
    const resolve = this._resolve
    const reject = this._reject
    this._promise = null
    if (err) reject(err)
    else resolve(true)
  }
}

function clear (err) {
  for (const { id, resolve, reject } of this._timers) {
    clearTimeout(id)
    if (err) reject(err)
    else resolve(true)
  }
  this._timers.clear()
}

function bind (resolve, reject) {
  this._resolve = resolve
  this._reject = reject
}
{
  "name": "signal-promise",
  "version": "1.0.3",
  "description": "Simple wait/notify promise with optional max wait time",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {},
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/signal-promise.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/signal-promise/issues"
  },
  "homepage": "https://github.com/mafintosh/signal-promise"
}
require.addon = require('require-addon')
module.exports = require.addon('.', __filename)
const assert = require('assert')
const binding = require('./binding')
const { isNode } = require('which-runtime')

const OPTIONAL = Buffer.from(new ArrayBuffer(0))

module.exports = exports = { ...binding }

// memory

exports.sodium_memzero = function (buf) {
  assert(ArrayBuffer.isView(buf), 'buf must be a typed array')

  binding.sodium_memzero(buf)
}

exports.sodium_mlock = function (buf) {
  assert(ArrayBuffer.isView(buf), 'buf must be a typed array')

  const res = binding.sodium_mlock(buf)

  if (res !== 0) throw new Error('memory lock failed')
}

exports.sodium_munlock = function (buf) {
  assert(ArrayBuffer.isView(buf), 'buf must be a typed array')

  const res = binding.sodium_munlock(buf)

  if (res !== 0) throw new Error('memory unlock failed')
}

exports.sodium_malloc = function (size) {
  assert(size >= 0, 'invalid size')

  const buf = Buffer.from(binding.sodium_malloc(size))
  buf.secure = true
  return buf
}

exports.sodium_free = function (buf) {
  if (!buf || !buf.secure) return

  binding.sodium_free(buf.buffer)
}

exports.sodium_mprotect_noaccess = function (buf) {
  const res = binding.sodium_mprotect_noaccess(buf.buffer)

  if (res !== 0) throw new Error('failed to lock buffer')
}

exports.sodium_mprotect_readonly = function (buf) {
  const res = binding.sodium_mprotect_readonly(buf.buffer)

  if (res !== 0) throw new Error('failed to unlock buffer')
}

exports.sodium_mprotect_readwrite = function (buf) {
  const res = binding.sodium_mprotect_readwrite(buf.buffer)

  if (res !== 0) throw new Error('failed to unlock buffer')
}

// crypto_randombytes

exports.randombytes_buf = function (buffer) {
  assert(ArrayBuffer.isView(buffer), 'buffer must be a typed array')

  binding.randombytes_buf(buffer.buffer, buffer.byteOffset, buffer.byteLength)
}

exports.randombytes_buf_deterministic = function (buffer, seed) {
  assert(ArrayBuffer.isView(buffer), 'buffer must be a typed array')
  assert(ArrayBuffer.isView(seed), 'seed must be a typed array')
  assert(
    seed.byteLength === binding.randombytes_SEEDBYTES,
    "seed must be 'randombytes_SEEDBYTES' bytes"
  )

  binding.randombytes_buf_deterministic(
    buffer.buffer,
    buffer.byteOffset,
    buffer.byteLength,

    seed.buffer,
    seed.byteOffset,
    seed.byteLength
  )
}

// sodium_helpers

exports.sodium_memcmp = function (a, b) {
  assert(ArrayBuffer.isView(a), 'a must be a typed array')
  assert(ArrayBuffer.isView(b), 'b must be a typed array')
  assert(a.byteLength === b.byteLength, 'buffers must be of same length')

  return binding.sodium_memcmp(a, b)
}

exports.sodium_add = function (a, b) {
  assert(ArrayBuffer.isView(a), 'a must be a typed array')
  assert(ArrayBuffer.isView(b), 'b must be a typed array')
  assert(a.byteLength === b.byteLength, 'buffers must be of same length')

  binding.sodium_add(a, b)
}

exports.sodium_sub = function (a, b) {
  assert(ArrayBuffer.isView(a), 'a must be a typed array')
  assert(ArrayBuffer.isView(b), 'b must be a typed array')
  assert(a.byteLength === b.byteLength, 'buffers must be of same length')

  binding.sodium_sub(a, b)
}

exports.sodium_compare = function (a, b) {
  assert(ArrayBuffer.isView(a), 'a must be a typed array')
  assert(ArrayBuffer.isView(b), 'b must be a typed array')
  assert(a.byteLength === b.byteLength, 'buffers must be of same length')

  return binding.sodium_compare(a, b)
}

exports.sodium_is_zero = function (buffer, length) {
  if (length === undefined) length = buffer.byteLength

  assert(ArrayBuffer.isView(buffer), 'buffer must be a typed array')
  assert(length >= 0 && length <= buffer.byteLength, 'invalid length')

  return binding.sodium_is_zero(buffer, length)
}

exports.sodium_pad = function (buffer, unpaddedBuflen, blockSize) {
  assert(ArrayBuffer.isView(buffer), 'buffer must be a typed array')
  assert(unpaddedBuflen <= buffer.byteLength, 'unpadded length cannot exceed buffer length')
  assert(blockSize <= buffer.byteLength, 'block size cannot exceed buffer length')
  assert(blockSize >= 1, 'block size must be at least 1 byte')
  assert(
    buffer.byteLength >= unpaddedBuflen + (blockSize - (unpaddedBuflen % blockSize)),
    'buf not long enough'
  )

  return binding.sodium_pad(buffer, unpaddedBuflen, blockSize)
}

exports.sodium_unpad = function (buffer, paddedBuflen, blockSize) {
  assert(ArrayBuffer.isView(buffer), 'buffer must be a typed array')
  assert(paddedBuflen <= buffer.byteLength, 'unpadded length cannot exceed buffer length')
  assert(blockSize <= buffer.byteLength, 'block size cannot exceed buffer length')
  assert(blockSize >= 1, 'block size must be at least 1 byte')

  return binding.sodium_unpad(buffer, paddedBuflen, blockSize)
}

// crypto_sign

exports.crypto_sign_keypair = function (pk, sk) {
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(
    pk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "pk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )
  assert(
    sk.byteLength === binding.crypto_sign_SECRETKEYBYTES,
    "sk must be 'crypto_sign_SECRETKEYBYTES' bytes"
  )

  const res = binding.crypto_sign_keypair(pk, sk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_sign_seed_keypair = function (pk, sk, seed) {
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(ArrayBuffer.isView(seed), 'seed must be a typed array')
  assert(
    pk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "pk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )
  assert(
    sk.byteLength === binding.crypto_sign_SECRETKEYBYTES,
    "sk must be 'crypto_sign_SECRETKEYBYTES' bytes"
  )
  assert(
    seed.byteLength === binding.crypto_sign_SEEDBYTES,
    "seed must be 'crypto_sign_SEEDBYTES' bytes"
  )

  const res = binding.crypto_sign_seed_keypair(pk, sk, seed)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_sign = function (sm, m, sk) {
  assert(ArrayBuffer.isView(sm), 'sm must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(
    sm.byteLength === binding.crypto_sign_BYTES + m.byteLength,
    "sm must be 'm.byteLength + crypto_sign_BYTES' bytes"
  )
  assert(
    sk.byteLength === binding.crypto_sign_SECRETKEYBYTES,
    "sk must be 'crypto_sign_SECRETKEYBYTES' bytes"
  )

  const res = binding.crypto_sign(sm, m, sk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_sign_open = function (m, sm, pk) {
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(sm), 'sm must be a typed array')
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(
    sm.byteLength >= binding.crypto_sign_BYTES,
    "sm must be at least 'crypto_sign_BYTES' bytes"
  )
  assert(
    m.byteLength === sm.byteLength - binding.crypto_sign_BYTES,
    "m must be 'sm.byteLength - crypto_sign_BYTES' bytes"
  )
  assert(
    pk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "pk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )

  const res = binding.crypto_sign_open(m, sm, pk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_sign_open = function (m, sm, pk) {
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(sm), 'sm must be a typed array')
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(
    sm.byteLength >= binding.crypto_sign_BYTES,
    "sm must be at least 'crypto_sign_BYTES' bytes"
  )
  assert(
    m.byteLength === sm.byteLength - binding.crypto_sign_BYTES,
    "m must be 'sm.byteLength - crypto_sign_BYTES' bytes"
  )
  assert(
    pk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "pk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )

  return binding.crypto_sign_open(m, sm, pk)
}

exports.crypto_sign_detached = function (sig, m, sk) {
  assert(ArrayBuffer.isView(sig), 'sig must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(sig.byteLength === binding.crypto_sign_BYTES, "sig must be 'crypto_sign_BYTES' bytes")
  assert(
    sk.byteLength === binding.crypto_sign_SECRETKEYBYTES,
    "sk must be 'crypto_sign_SECRETKEYBYTES' bytes"
  )

  const res = binding.crypto_sign_detached(sig, m, sk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_sign_verify_detached = function (sig, m, pk) {
  assert(ArrayBuffer.isView(sig), 'sig must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(
    sig.byteLength >= binding.crypto_sign_BYTES,
    "sig must be at least 'crypto_sign_BYTES' bytes"
  )
  assert(
    pk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "pk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )

  return binding.crypto_sign_verify_detached(
    sig.buffer,
    sig.byteOffset,
    sig.byteLength,

    m.buffer,
    m.byteOffset,
    m.byteLength,

    pk.buffer,
    pk.byteOffset,
    pk.byteLength
  )
}

exports.crypto_sign_ed25519_sk_to_pk = function (pk, sk) {
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(
    pk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "pk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )
  assert(
    sk.byteLength === binding.crypto_sign_SECRETKEYBYTES,
    "sk must be 'crypto_sign_SECRETKEYBYTES' bytes"
  )

  const res = binding.crypto_sign_ed25519_sk_to_pk(pk, sk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_sign_ed25519_pk_to_curve25519 = function (x25519pk, ed25519pk) {
  assert(ArrayBuffer.isView(x25519pk), 'x25519pk must be a typed array')
  assert(ArrayBuffer.isView(ed25519pk), 'ed25519pk must be a typed array')
  assert(
    x25519pk.byteLength === binding.crypto_box_PUBLICKEYBYTES,
    "x25519pk must be 'crypto_box_PUBLICKEYBYTES' bytes"
  )
  assert(
    ed25519pk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "ed25519pk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )

  const res = binding.crypto_sign_ed25519_pk_to_curve25519(x25519pk, ed25519pk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_sign_ed25519_sk_to_curve25519 = function (x25519sk, ed25519sk) {
  assert(ArrayBuffer.isView(x25519sk), 'x25519sk must be a typed array')
  assert(ArrayBuffer.isView(ed25519sk), 'ed25519sk must be a typed array')
  assert(
    x25519sk.byteLength === binding.crypto_box_SECRETKEYBYTES,
    "x25519sk must be 'crypto_box_SECRETKEYBYTES' bytes"
  )

  const edLen = ed25519sk.byteLength

  assert(
    edLen === binding.crypto_sign_SECRETKEYBYTES || edLen === binding.crypto_box_SECRETKEYBYTES,
    "ed25519sk must be 'crypto_sign_SECRETKEYBYTES' or 'crypto_sign_SECRETKEYBYTES - crypto_sign_PUBLICKEYBYTES' bytes"
  )

  const res = binding.crypto_sign_ed25519_sk_to_curve25519(x25519sk, ed25519sk)

  if (res !== 0) throw new Error('status: ' + res)
}

// crypto_box

exports.crypto_box_keypair = function (pk, sk) {
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(
    pk.byteLength === binding.crypto_box_PUBLICKEYBYTES,
    "pk must be 'crypto_box_PUBLICKEYBYTES' bytes"
  )
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(
    sk.byteLength === binding.crypto_box_SECRETKEYBYTES,
    "sk must be 'crypto_box_SECRETKEYBYTES' bytes"
  )

  const res = binding.crypto_box_keypair(pk, sk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_box_seed_keypair = function (pk, sk, seed) {
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(
    pk.byteLength === binding.crypto_box_PUBLICKEYBYTES,
    "pk must be 'crypto_box_PUBLICKEYBYTES' bytes"
  )
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(
    sk.byteLength === binding.crypto_box_SECRETKEYBYTES,
    "sk must be 'crypto_box_SECRETKEYBYTES' bytes"
  )
  assert(ArrayBuffer.isView(seed), 'seed must be a typed array')
  assert(
    seed.byteLength === binding.crypto_box_SEEDBYTES,
    "seed must be 'crypto_box_SEEDBYTES' bytes"
  )

  const res = binding.crypto_box_seed_keypair(pk, sk, seed)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_box_easy = function (c, m, n, pk, sk) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(
    c.byteLength === m.byteLength + exports.crypto_box_MACBYTES,
    "c must be 'm.byteLength + crypto_box_MACBYTES' bytes"
  )
  assert(n.byteLength === exports.crypto_box_NONCEBYTES, "n must be 'crypto_box_NONCEBYTES' bytes")
  assert(
    pk.byteLength === exports.crypto_box_PUBLICKEYBYTES,
    "pk must be 'crypto_box_PUBLICKEYBYTES' bytes"
  )
  assert(
    sk.byteLength === exports.crypto_box_SECRETKEYBYTES,
    "sk must be 'crypto_box_SECRETKEYBYTES' bytes"
  )

  const res = binding.crypto_box_easy(c, m, n, pk, sk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_box_detached = function (c, mac, m, n, pk, sk) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(mac), 'mac must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(mac.byteLength === exports.crypto_box_MACBYTES, "mac must be 'crypto_box_MACBYTES' bytes")
  assert(n.byteLength === exports.crypto_box_NONCEBYTES, "n must be 'crypto_box_NONCEBYTES' bytes")
  assert(
    pk.byteLength === exports.crypto_box_PUBLICKEYBYTES,
    "pk must be 'crypto_box_PUBLICKEYBYTES' bytes"
  )
  assert(
    sk.byteLength === exports.crypto_box_SECRETKEYBYTES,
    "sk must be 'crypto_box_SECRETKEYBYTES' bytes"
  )

  const res = binding.crypto_box_detached(c, mac, m, n, pk, sk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_box_open_easy = function (m, c, n, pk, sk) {
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(
    c.byteLength >= exports.crypto_box_MACBYTES,
    "c must be at least 'crypto_box_MACBYTES' bytes"
  )
  assert(
    m.byteLength === c.byteLength - exports.crypto_box_MACBYTES,
    "m must be 'c.byteLength - crypto_box_MACBYTES' bytes"
  )
  assert(n.byteLength === exports.crypto_box_NONCEBYTES, "n must be 'crypto_box_NONCEBYTES' bytes")
  assert(
    pk.byteLength === exports.crypto_box_PUBLICKEYBYTES,
    "pk must be 'crypto_box_PUBLICKEYBYTES' bytes"
  )
  assert(
    sk.byteLength === exports.crypto_box_SECRETKEYBYTES,
    "sk must be 'crypto_box_SECRETKEYBYTES' bytes"
  )

  return binding.crypto_box_open_easy(m, c, n, pk, sk)
}

exports.crypto_box_open_detached = function (m, c, mac, n, pk, sk) {
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(mac), 'mac must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(m.byteLength === c.byteLength, "m must be 'c.byteLength' bytes")
  assert(mac.byteLength === exports.crypto_box_MACBYTES, "mac must be 'crypto_box_MACBYTES' bytes")
  assert(n.byteLength === exports.crypto_box_NONCEBYTES, "n must be 'crypto_box_NONCEBYTES' bytes")
  assert(
    pk.byteLength === exports.crypto_box_PUBLICKEYBYTES,
    "pk must be 'crypto_box_PUBLICKEYBYTES' bytes"
  )
  assert(
    sk.byteLength === exports.crypto_box_SECRETKEYBYTES,
    "sk must be 'crypto_box_SECRETKEYBYTES' bytes"
  )

  return binding.crypto_box_open_detached(m, c, mac, n, pk, sk)
}

exports.crypto_box_seal = function (c, m, pk) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(
    c.byteLength === m.byteLength + exports.crypto_box_SEALBYTES,
    "c must be 'm.byteLength + crypto_box_SEALBYTES' bytes"
  )
  assert(
    pk.byteLength === exports.crypto_box_PUBLICKEYBYTES,
    "pk must be 'crypto_box_PUBLICKEYBYTES' bytes"
  )

  const res = binding.crypto_box_seal(c, m, pk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_box_seal_open = function (m, c, pk, sk) {
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(
    c.byteLength >= exports.crypto_box_SEALBYTES,
    "c must be at least 'crypto_box_SEALBYTES' bytes"
  )
  assert(
    m.byteLength === c.byteLength - exports.crypto_box_SEALBYTES,
    "m must be 'c.byteLength - crypto_box_SEALBYTES' bytes"
  )
  assert(
    pk.byteLength === exports.crypto_box_PUBLICKEYBYTES,
    "pk must be 'crypto_box_PUBLICKEYBYTES' bytes"
  )
  assert(
    sk.byteLength === exports.crypto_box_SECRETKEYBYTES,
    "sk must be 'crypto_box_SECRETKEYBYTES' bytes"
  )

  return binding.crypto_box_seal_open(
    m.buffer,
    m.byteOffset,
    m.byteLength,

    c.buffer,
    c.byteOffset,
    c.byteLength,

    pk.buffer,
    pk.byteOffset,
    pk.byteLength,

    sk.buffer,
    sk.byteOffset,
    sk.byteLength
  )
}

// crypto_secretbox

exports.crypto_secretbox_easy = function (c, m, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    c.byteLength === m.byteLength + binding.crypto_secretbox_MACBYTES,
    "c must be 'm.byteLength + crypto_secretbox_MACBYTES' bytes"
  )
  assert(
    n.byteLength === binding.crypto_secretbox_NONCEBYTES,
    "n must be 'crypto_secretbox_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_secretbox_KEYBYTES,
    "k must be 'crypto_secretbox_KEYBYTES' bytes"
  )

  const res = binding.crypto_secretbox_easy(c, m, n, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_secretbox_open_easy = function (m, c, n, k) {
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    c.byteLength >= binding.crypto_secretbox_MACBYTES,
    "c must be at least 'crypto_secretbox_MACBYTES' bytes"
  )
  assert(
    m.byteLength === c.byteLength - binding.crypto_secretbox_MACBYTES,
    "m must be 'c.byteLength - crypto_secretbox_MACBYTES' bytes"
  )
  assert(
    n.byteLength === binding.crypto_secretbox_NONCEBYTES,
    "n must be 'crypto_secretbox_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_secretbox_KEYBYTES,
    "k must be 'crypto_secretbox_KEYBYTES' bytes"
  )

  return binding.crypto_secretbox_open_easy(m, c, n, k)
}

exports.crypto_secretbox_detached = function (c, mac, m, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(mac), 'mac must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(
    mac.byteLength === binding.crypto_secretbox_MACBYTES,
    "mac must be 'crypto_secretbox_MACBYTES' bytes"
  )
  assert(
    n.byteLength === binding.crypto_secretbox_NONCEBYTES,
    "n must be 'crypto_secretbox_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_secretbox_KEYBYTES,
    "k must be 'crypto_secretbox_KEYBYTES' bytes"
  )

  const res = binding.crypto_secretbox_detached(c, mac, m, n, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_secretbox_open_detached = function (m, c, mac, n, k) {
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(mac), 'mac must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(m.byteLength === c.byteLength, "m must be 'c.byteLength' bytes")
  assert(
    mac.byteLength === binding.crypto_secretbox_MACBYTES,
    "mac must be 'crypto_secretbox_MACBYTES' bytes"
  )
  assert(
    n.byteLength === binding.crypto_secretbox_NONCEBYTES,
    "n must be 'crypto_secretbox_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_secretbox_KEYBYTES,
    "k must be 'crypto_secretbox_KEYBYTES' bytes"
  )

  return binding.crypto_secretbox_open_detached(m, c, mac, n, k)
}

// crypto_generichash

exports.crypto_generichash = function (output, input, key) {
  if (!key) key = OPTIONAL

  assert(ArrayBuffer.isView(output), 'output must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(
    output.byteLength >= binding.crypto_generichash_BYTES_MIN &&
      output.byteLength <= binding.crypto_generichash_BYTES_MAX,
    'output must be between crypto_generichash_BYTES_MIN and crypto_generichash_BYTES_MAX bytes'
  )

  if (key !== OPTIONAL) {
    assert(ArrayBuffer.isView(key), 'key must be a typed array')
    assert(
      key.byteLength >= binding.crypto_generichash_KEYBYTES_MIN &&
        key.byteLength <= binding.crypto_generichash_KEYBYTES_MAX,
      'key must be between crypto_generichash_KEYBYTES_MIN and crypto_generichash_KEYBYTES_MAX bytes'
    )
  }

  const res = binding.crypto_generichash(
    output.buffer,
    output.byteOffset,
    output.byteLength,

    input.buffer,
    input.byteOffset,
    input.byteLength,

    key.buffer,
    key.byteOffset,
    key.byteLength
  )

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_generichash_batch = function (output, batch, key) {
  assert(ArrayBuffer.isView(output), 'output must be a typed array')

  if (isNode || batch.length < 4) {
    const res = binding.crypto_generichash_batch(output, batch, !!key, key || OPTIONAL)
    if (res !== 0) throw new Error('status: ' + res)
  } else {
    const state = Buffer.alloc(binding.crypto_generichash_STATEBYTES)

    exports.crypto_generichash_init(state, key, output.byteLength)

    for (const buf of batch) {
      exports.crypto_generichash_update(state, buf)
    }

    exports.crypto_generichash_final(state, output)
  }
}

exports.crypto_generichash_keygen = function (key) {
  assert(ArrayBuffer.isView(key), 'key must be a typed array')
  assert(
    key.byteLength === binding.crypto_generichash_KEYBYTES,
    "key must be 'crypto_generichash_KEYBYTES' bytes"
  )

  const res = binding.crypto_generichash_keygen(key.buffer, key.byteOffset, key.byteLength)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_generichash_init = function (state, key, outputLength) {
  if (!key) key = OPTIONAL

  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_generichash_STATEBYTES,
    "state must be 'crypto_generichash_STATEBYTES' bytes"
  )

  const res = binding.crypto_generichash_init(
    state.buffer,
    state.byteOffset,
    state.byteLength,

    key.buffer,
    key.byteOffset,
    key.byteLength,

    outputLength
  )

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_generichash_update = function (state, input) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(
    state.byteLength === binding.crypto_generichash_STATEBYTES,
    "state must be 'crypto_generichash_STATEBYTES' bytes"
  )

  const res = binding.crypto_generichash_update(
    state.buffer,
    state.byteOffset,
    state.byteLength,

    input.buffer,
    input.byteOffset,
    input.byteLength
  )

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_generichash_final = function (state, output) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(ArrayBuffer.isView(output), 'output must be a typed array')
  assert(
    state.byteLength === binding.crypto_generichash_STATEBYTES,
    "state must be 'crypto_generichash_STATEBYTES' bytes"
  )

  const res = binding.crypto_generichash_final(
    state.buffer,
    state.byteOffset,
    state.byteLength,

    output.buffer,
    output.byteOffset,
    output.byteLength
  )

  if (res !== 0) throw new Error('status: ' + res)
}

// secretstream

exports.crypto_secretstream_xchacha20poly1305_keygen = function (k) {
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_secretstream_xchacha20poly1305_KEYBYTES,
    "k must be 'crypto_secretstream_xchacha20poly1305_KEYBYTES' bytes"
  )

  binding.crypto_secretstream_xchacha20poly1305_keygen(k.buffer, k.byteOffset, k.byteLength)
}

exports.crypto_secretstream_xchacha20poly1305_init_push = function (state, header, k) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(ArrayBuffer.isView(header), 'header must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    state.byteLength === binding.crypto_secretstream_xchacha20poly1305_STATEBYTES,
    "state must be 'crypto_secretstream_xchacha20poly1305_STATEBYTES' bytes"
  )
  assert(
    header.byteLength === binding.crypto_secretstream_xchacha20poly1305_HEADERBYTES,
    "header must be 'crypto_secretstream_xchacha20poly1305_HEADERBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_secretstream_xchacha20poly1305_KEYBYTES,
    "k must be 'crypto_secretstream_xchacha20poly1305_KEYBYTES' bytes"
  )

  const res = binding.crypto_secretstream_xchacha20poly1305_init_push(
    state.buffer,
    state.byteOffset,
    state.byteLength,

    header.buffer,
    header.byteOffset,
    header.byteLength,

    k.buffer,
    k.byteOffset,
    k.byteLength
  )

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_secretstream_xchacha20poly1305_init_pull = function (state, header, k) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(ArrayBuffer.isView(header), 'header must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    state.byteLength === binding.crypto_secretstream_xchacha20poly1305_STATEBYTES,
    "state must be 'crypto_secretstream_xchacha20poly1305_STATEBYTES' bytes"
  )
  assert(
    header.byteLength === binding.crypto_secretstream_xchacha20poly1305_HEADERBYTES,
    "header must be 'crypto_secretstream_xchacha20poly1305_HEADERBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_secretstream_xchacha20poly1305_KEYBYTES,
    "k must be 'crypto_secretstream_xchacha20poly1305_KEYBYTES' bytes"
  )

  const res = binding.crypto_secretstream_xchacha20poly1305_init_pull(
    state.buffer,
    state.byteOffset,
    state.byteLength,

    header.buffer,
    header.byteOffset,
    header.byteLength,

    k.buffer,
    k.byteOffset,
    k.byteLength
  )

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_secretstream_xchacha20poly1305_push = function (state, c, m, ad, tag) {
  if (!ad) ad = OPTIONAL

  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(
    state.byteLength === binding.crypto_secretstream_xchacha20poly1305_STATEBYTES,
    "state must be 'crypto_secretstream_xchacha20poly1305_STATEBYTES' bytes"
  )
  assert(
    c.byteLength === m.byteLength + binding.crypto_secretstream_xchacha20poly1305_ABYTES,
    "c must be 'm.byteLength + crypto_secretstream_xchacha20poly1305_ABYTES' bytes"
  )

  const res = binding.crypto_secretstream_xchacha20poly1305_push(
    state.buffer,
    state.byteOffset,
    state.byteLength,

    c.buffer,
    c.byteOffset,
    c.byteLength,

    m.buffer,
    m.byteOffset,
    m.byteLength,

    ad.buffer,
    ad.byteOffset,
    ad.byteLength,

    tag
  )

  if (res < 0) throw new Error('push failed')

  return res
}

exports.crypto_secretstream_xchacha20poly1305_pull = function (state, m, tag, c, ad) {
  if (!ad) ad = OPTIONAL

  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_secretstream_xchacha20poly1305_STATEBYTES,
    "state must be 'crypto_secretstream_xchacha20poly1305_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(tag), 'tag must be a typed array')
  assert(tag.byteLength === 1, 'tag must be 1 byte')

  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(
    c.byteLength >= binding.crypto_secretstream_xchacha20poly1305_ABYTES,
    "c must be at least 'crypto_secretstream_xchacha20poly1305_ABYTES' bytes"
  )
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(
    m.byteLength === c.byteLength - binding.crypto_secretstream_xchacha20poly1305_ABYTES,
    "m must be 'c.byteLength - crypto_secretstream_xchacha20poly1305_ABYTES' bytes"
  )

  const res = binding.crypto_secretstream_xchacha20poly1305_pull(
    state.buffer,
    state.byteOffset,
    state.byteLength,

    m.buffer,
    m.byteOffset,
    m.byteLength,

    tag.buffer,
    tag.byteOffset,
    tag.byteLength,

    c.buffer,
    c.byteOffset,
    c.byteLength,

    ad.buffer,
    ad.byteOffset,
    ad.byteLength
  )

  if (res < 0) throw new Error('pull failed')

  return res
}

exports.crypto_secretstream_xchacha20poly1305_rekey = function (state) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_secretstream_xchacha20poly1305_STATEBYTES,
    "state must be 'crypto_secretstream_xchacha20poly1305_STATEBYTES' bytes"
  )

  binding.crypto_secretstream_xchacha20poly1305_rekey(
    state.buffer,
    state.byteOffset,
    state.byteLength
  )
}

// crypto_stream

exports.crypto_stream = function (c, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    n.byteLength === binding.crypto_stream_NONCEBYTES,
    "n must be 'crypto_stream_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_KEYBYTES,
    "k must be 'crypto_stream_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream(c, n, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_xor = function (c, m, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(
    n.byteLength === binding.crypto_stream_NONCEBYTES,
    "n must be 'crypto_stream_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_KEYBYTES,
    "k must be 'crypto_stream_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_xor(
    c.buffer,
    c.byteOffset,
    c.byteLength,

    m.buffer,
    m.byteOffset,
    m.byteLength,

    n.buffer,
    n.byteOffset,
    n.byteLength,

    k.buffer,
    k.byteOffset,
    k.byteLength
  )

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_chacha20 = function (c, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    n.byteLength === binding.crypto_stream_chacha20_NONCEBYTES,
    "n must be 'crypto_stream_chacha20_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_chacha20_KEYBYTES,
    "k must be 'crypto_stream_chacha20_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_chacha20(c, n, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_chacha20_xor = function (c, m, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(
    n.byteLength === binding.crypto_stream_chacha20_NONCEBYTES,
    "n must be 'crypto_stream_chacha20_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_chacha20_KEYBYTES,
    "k must be 'crypto_stream_chacha20_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_chacha20_xor(c, m, n, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_chacha20_xor_ic = function (c, m, n, ic, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(
    n.byteLength === binding.crypto_stream_chacha20_NONCEBYTES,
    "n must be 'crypto_stream_chacha20_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_chacha20_KEYBYTES,
    "k must be 'crypto_stream_chacha20_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_chacha20_xor_ic(c, m, n, ic, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_chacha20_ietf = function (c, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    n.byteLength === binding.crypto_stream_chacha20_ietf_NONCEBYTES,
    "n must be 'crypto_stream_chacha20_ietf_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_chacha20_ietf_KEYBYTES,
    "k must be 'crypto_stream_chacha20_ietf_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_chacha20_ietf(c, n, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_chacha20_ietf_xor = function (c, m, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(
    n.byteLength === binding.crypto_stream_chacha20_ietf_NONCEBYTES,
    "n must be 'crypto_stream_chacha20_ietf_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_chacha20_ietf_KEYBYTES,
    "k must be 'crypto_stream_chacha20_ietf_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_chacha20_ietf_xor(c, m, n, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_chacha20_ietf_xor_ic = function (c, m, n, ic, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(
    n.byteLength === binding.crypto_stream_chacha20_ietf_NONCEBYTES,
    "n must be 'crypto_stream_chacha20_ietf_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_chacha20_ietf_KEYBYTES,
    "k must be 'crypto_stream_chacha20_ietf_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_chacha20_ietf_xor_ic(c, m, n, ic, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_xchacha20 = function (c, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    n.byteLength === binding.crypto_stream_xchacha20_NONCEBYTES,
    "n must be 'crypto_stream_xchacha20_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_xchacha20_KEYBYTES,
    "k must be 'crypto_stream_xchacha20_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_xchacha20(c, n, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_xchacha20_xor = function (c, m, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(
    n.byteLength === binding.crypto_stream_xchacha20_NONCEBYTES,
    "n must be 'crypto_stream_xchacha20_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_xchacha20_KEYBYTES,
    "k must be 'crypto_stream_xchacha20_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_xchacha20_xor(c, m, n, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_xchacha20_xor_ic = function (c, m, n, ic, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(
    n.byteLength === binding.crypto_stream_xchacha20_NONCEBYTES,
    "n must be 'crypto_stream_xchacha20_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_xchacha20_KEYBYTES,
    "k must be 'crypto_stream_xchacha20_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_xchacha20_xor_ic(c, m, n, ic, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_salsa20 = function (c, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    n.byteLength === binding.crypto_stream_salsa20_NONCEBYTES,
    "n must be 'crypto_stream_salsa20_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_salsa20_KEYBYTES,
    "k must be 'crypto_stream_salsa20_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_salsa20(c, n, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_salsa20_xor = function (c, m, n, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(
    n.byteLength === binding.crypto_stream_salsa20_NONCEBYTES,
    "n must be 'crypto_stream_salsa20_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_salsa20_KEYBYTES,
    "k must be 'crypto_stream_salsa20_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_salsa20_xor(c, m, n, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_stream_salsa20_xor_ic = function (c, m, n, ic, k) {
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(
    n.byteLength === binding.crypto_stream_salsa20_NONCEBYTES,
    "n must be 'crypto_stream_salsa20_NONCEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_stream_salsa20_KEYBYTES,
    "k must be 'crypto_stream_salsa20_KEYBYTES' bytes"
  )

  const res = binding.crypto_stream_salsa20_xor_ic(c, m, n, ic, k)

  if (res !== 0) throw new Error('status: ' + res)
}

// crypto_auth

exports.crypto_auth = function (out, input, k) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(out.byteLength === binding.crypto_auth_BYTES, "out must be 'crypto_auth_BYTES' bytes")
  assert(k.byteLength === binding.crypto_auth_KEYBYTES, "k must be 'crypto_auth_KEYBYTES' bytes")

  const res = binding.crypto_auth(out, input, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_auth_verify = function (h, input, k) {
  assert(ArrayBuffer.isView(h), 'h must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(h.byteLength === binding.crypto_auth_BYTES, "h must be 'crypto_auth_BYTES' bytes")
  assert(k.byteLength === binding.crypto_auth_KEYBYTES, "k must be 'crypto_auth_KEYBYTES' bytes")

  return binding.crypto_auth_verify(h, input, k)
}

// crypto_onetimeauth

exports.crypto_onetimeauth = function (out, input, k) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    out.byteLength === binding.crypto_onetimeauth_BYTES,
    "out must be 'crypto_onetimeauth_BYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_onetimeauth_KEYBYTES,
    "k must be 'crypto_onetimeauth_KEYBYTES' bytes"
  )

  const res = binding.crypto_onetimeauth(out, input, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_onetimeauth_init = function (state, k) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    state.byteLength === binding.crypto_onetimeauth_STATEBYTES,
    "state must be 'crypto_onetimeauth_STATEBYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_onetimeauth_KEYBYTES,
    "k must be 'crypto_onetimeauth_KEYBYTES' bytes"
  )

  const res = binding.crypto_onetimeauth_init(state, k)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_onetimeauth_update = function (state, input) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(
    state.byteLength === binding.crypto_onetimeauth_STATEBYTES,
    "state must be 'crypto_onetimeauth_STATEBYTES' bytes"
  )

  const res = binding.crypto_onetimeauth_update(state, input)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_onetimeauth_final = function (state, out) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(
    state.byteLength === binding.crypto_onetimeauth_STATEBYTES,
    "state must be 'crypto_onetimeauth_STATEBYTES' bytes"
  )
  assert(
    out.byteLength === binding.crypto_onetimeauth_BYTES,
    "out must be 'crypto_onetimeauth_BYTES' bytes"
  )

  const res = binding.crypto_onetimeauth_final(state, out)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_onetimeauth_verify = function (h, input, k) {
  assert(ArrayBuffer.isView(h), 'h must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    h.byteLength === binding.crypto_onetimeauth_BYTES,
    "h must be 'crypto_onetimeauth_BYTES' bytes"
  )
  assert(
    k.byteLength === binding.crypto_onetimeauth_KEYBYTES,
    "k must be 'crypto_onetimeauth_KEYBYTES' bytes"
  )

  return binding.crypto_onetimeauth_verify(h, input, k)
}

// crypto_pwhash

exports.crypto_pwhash = function (out, passwd, salt, opslimit, memlimit, alg) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(ArrayBuffer.isView(salt), 'salt must be a typed array')
  assert(
    out.byteLength >= binding.crypto_pwhash_BYTES_MIN,
    "out must be at least 'crypto_pwhash_BYTES_MIN' bytes"
  )
  assert(
    out.byteLength <= binding.crypto_pwhash_BYTES_MAX,
    "out must be at most 'crypto_pwhash_BYTES_MAX' bytes"
  )
  assert(
    salt.byteLength === binding.crypto_pwhash_SALTBYTES,
    "salt must be 'crypto_pwhash_SALTBYTES' bytes"
  )
  assert(
    opslimit >= binding.crypto_pwhash_OPSLIMIT_MIN,
    "opslimit must be at least 'crypto_pwhash_OPSLIMIT_MIN'"
  )
  assert(
    opslimit <= binding.crypto_pwhash_OPSLIMIT_MAX,
    "opslimit must be at most 'crypto_pwhash_OPSLIMIT_MAX'"
  )
  assert(
    memlimit >= binding.crypto_pwhash_MEMLIMIT_MIN,
    "memlimit must be at least 'crypto_pwhash_MEMLIMIT_MIN'"
  )
  assert(
    memlimit <= binding.crypto_pwhash_MEMLIMIT_MAX,
    "memlimit must be at most 'crypto_pwhash_MEMLIMIT_MAX'"
  )
  assert(alg >= 1 && alg <= 2, 'alg must be either Argon2i 1.3 or Argon2id 1.3')

  const res = binding.crypto_pwhash(out, passwd, salt, opslimit, memlimit, alg)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_pwhash_async = function (
  out,
  passwd,
  salt,
  opslimit,
  memlimit,
  alg,
  callback = undefined
) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(ArrayBuffer.isView(salt), 'salt must be a typed array')
  assert(
    out.byteLength >= binding.crypto_pwhash_BYTES_MIN,
    "out must be at least 'crypto_pwhash_BYTES_MIN' bytes"
  )
  assert(
    out.byteLength <= binding.crypto_pwhash_BYTES_MAX,
    "out must be at most 'crypto_pwhash_BYTES_MAX' bytes"
  )
  assert(
    salt.byteLength === binding.crypto_pwhash_SALTBYTES,
    "salt must be 'crypto_pwhash_SALTBYTES' bytes"
  )
  assert(
    opslimit >= binding.crypto_pwhash_OPSLIMIT_MIN,
    "opslimit must be at least 'crypto_pwhash_OPSLIMIT_MIN'"
  )
  assert(
    opslimit <= binding.crypto_pwhash_OPSLIMIT_MAX,
    "opslimit must be at most 'crypto_pwhash_OPSLIMIT_MAX'"
  )
  assert(
    memlimit >= binding.crypto_pwhash_MEMLIMIT_MIN,
    "memlimit must be at least 'crypto_pwhash_MEMLIMIT_MIN'"
  )
  assert(
    memlimit <= binding.crypto_pwhash_MEMLIMIT_MAX,
    "memlimit must be at most 'crypto_pwhash_MEMLIMIT_MAX'"
  )
  assert(alg >= 1 && alg <= 2, 'alg must be either Argon2i 1.3 or Argon2id 1.3')

  const [done, promise] = checkStatus(callback)

  binding.crypto_pwhash_async(
    out.buffer,
    out.byteOffset,
    out.byteLength,

    passwd.buffer,
    passwd.byteOffset,
    passwd.byteLength,

    salt.buffer,
    salt.byteOffset,
    salt.byteLength,

    opslimit,
    memlimit,
    alg,

    done
  )

  return promise
}

exports.crypto_pwhash_str = function (out, passwd, opslimit, memlimit) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(
    out.byteLength === binding.crypto_pwhash_STRBYTES,
    "out must be 'crypto_pwhash_STRBYTES' bytes"
  )
  assert(typeof opslimit === 'number', 'opslimit must be a number')
  assert(
    opslimit >= binding.crypto_pwhash_OPSLIMIT_MIN,
    "opslimit must be at least 'crypto_pwhash_OPSLIMIT_MIN'"
  )
  assert(
    opslimit <= binding.crypto_pwhash_OPSLIMIT_MAX,
    "opslimit must be at most 'crypto_pwhash_OPSLIMIT_MAX'"
  )
  assert(typeof memlimit === 'number', 'memlimit must be a number')
  assert(
    memlimit >= binding.crypto_pwhash_MEMLIMIT_MIN,
    "memlimit must be at least 'crypto_pwhash_MEMLIMIT_MIN'"
  )
  assert(
    memlimit <= binding.crypto_pwhash_MEMLIMIT_MAX,
    "memlimit must be at most 'crypto_pwhash_MEMLIMIT_MAX'"
  )

  const res = binding.crypto_pwhash_str(out, passwd, opslimit, memlimit)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_pwhash_str_async = function (out, passwd, opslimit, memlimit, callback = undefined) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(
    out.byteLength === binding.crypto_pwhash_STRBYTES,
    "out must be 'crypto_pwhash_STRBYTES' bytes"
  )
  assert(passwd.byteLength > 0, 'passwd must not be empty')
  assert(typeof opslimit === 'number', 'opslimit must be a number')
  assert(
    opslimit >= binding.crypto_pwhash_OPSLIMIT_MIN,
    "opslimit must be at least 'crypto_pwhash_OPSLIMIT_MIN'"
  )
  assert(
    opslimit <= binding.crypto_pwhash_OPSLIMIT_MAX,
    "opslimit must be at most 'crypto_pwhash_OPSLIMIT_MAX'"
  )
  assert(typeof memlimit === 'number', 'memlimit must be a number')
  assert(
    memlimit >= binding.crypto_pwhash_MEMLIMIT_MIN,
    "memlimit must be at least 'crypto_pwhash_MEMLIMIT_MIN'"
  )
  assert(
    memlimit <= binding.crypto_pwhash_MEMLIMIT_MAX,
    "memlimit must be at most 'crypto_pwhash_MEMLIMIT_MAX'"
  )

  const [done, promise] = checkStatus(callback)

  binding.crypto_pwhash_str_async(
    out.buffer,
    out.byteOffset,
    out.byteLength,

    passwd.buffer,
    passwd.byteOffset,
    passwd.byteLength,

    opslimit,
    memlimit,

    done
  )

  return promise
}

exports.crypto_pwhash_str_verify = function (str, passwd) {
  assert(ArrayBuffer.isView(str), 'str must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(
    str.byteLength === binding.crypto_pwhash_STRBYTES,
    "str must be 'crypto_pwhash_STRBYTES' bytes"
  )

  return binding.crypto_pwhash_str_verify(str, passwd)
}

exports.crypto_pwhash_str_verify_async = function (str, passwd, callback = undefined) {
  assert(ArrayBuffer.isView(str), 'str must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(
    str.byteLength === binding.crypto_pwhash_STRBYTES,
    "str must be 'crypto_pwhash_STRBYTES' bytes"
  )
  assert(passwd.byteLength > 0, 'passwd must not be empty')

  const [done, promise] = checkStatus(callback, true)

  binding.crypto_pwhash_str_verify_async(
    str.buffer,
    str.byteOffset,
    str.byteLength,

    passwd.buffer,
    passwd.byteOffset,
    passwd.byteLength,

    done
  )

  return promise
}

exports.crypto_pwhash_str_needs_rehash = function (str, opslimit, memlimit) {
  assert(ArrayBuffer.isView(str), 'str must be a typed array')
  assert(
    str.byteLength === binding.crypto_pwhash_STRBYTES,
    "str must be 'crypto_pwhash_STRBYTES' bytes"
  )
  assert(
    opslimit >= binding.crypto_pwhash_OPSLIMIT_MIN,
    "opslimit must be at least 'crypto_pwhash_OPSLIMIT_MIN'"
  )
  assert(
    opslimit <= binding.crypto_pwhash_OPSLIMIT_MAX,
    "opslimit must be at most 'crypto_pwhash_OPSLIMIT_MAX'"
  )
  assert(
    memlimit >= binding.crypto_pwhash_MEMLIMIT_MIN,
    "memlimit must be at least 'crypto_pwhash_MEMLIMIT_MIN'"
  )
  assert(
    memlimit <= binding.crypto_pwhash_MEMLIMIT_MAX,
    "memlimit must be at most 'crypto_pwhash_MEMLIMIT_MAX'"
  )

  return binding.crypto_pwhash_str_needs_rehash(str, opslimit, memlimit)
}

exports.crypto_pwhash_scryptsalsa208sha256 = function (out, passwd, salt, opslimit, memlimit) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(ArrayBuffer.isView(salt), 'salt must be a typed array')
  assert(
    out.byteLength >= binding.crypto_pwhash_scryptsalsa208sha256_BYTES_MIN,
    "out must be at least 'crypto_pwhash_scryptsalsa208sha256_BYTES_MIN' bytes"
  )
  assert(
    out.byteLength <= binding.crypto_pwhash_scryptsalsa208sha256_BYTES_MAX,
    "out must be at most 'crypto_pwhash_scryptsalsa208sha256_BYTES_MAX' bytes"
  )
  assert(
    salt.byteLength === binding.crypto_pwhash_scryptsalsa208sha256_SALTBYTES,
    "salt must be 'crypto_pwhash_scryptsalsa208sha256_SALTBYTES' bytes"
  )
  assert(
    opslimit >= binding.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN,
    "opslimit must be at least 'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN'"
  )
  assert(
    opslimit <= binding.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX,
    "opslimit must be at most 'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX'"
  )
  assert(
    memlimit >= binding.crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN,
    "memlimit must be at least 'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN'"
  )
  assert(
    memlimit <= binding.crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX,
    "memlimit must be at most 'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX'"
  )

  const res = binding.crypto_pwhash_scryptsalsa208sha256(out, passwd, salt, opslimit, memlimit)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_pwhash_scryptsalsa208sha256_async = function (
  out,
  passwd,
  salt,
  opslimit,
  memlimit,
  callback = undefined
) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(ArrayBuffer.isView(salt), 'salt must be a typed array')
  assert(
    out.byteLength >= binding.crypto_pwhash_scryptsalsa208sha256_BYTES_MIN,
    "out must be at least 'crypto_pwhash_scryptsalsa208sha256_BYTES_MIN' bytes"
  )
  assert(
    out.byteLength <= binding.crypto_pwhash_scryptsalsa208sha256_BYTES_MAX,
    "out must be at most 'crypto_pwhash_scryptsalsa208sha256_BYTES_MAX' bytes"
  )
  assert(passwd.byteLength > 0, 'passwd must not be empty')
  assert(
    salt.byteLength === binding.crypto_pwhash_scryptsalsa208sha256_SALTBYTES,
    "salt must be 'crypto_pwhash_scryptsalsa208sha256_SALTBYTES' bytes"
  )
  assert(
    opslimit >= binding.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN,
    "opslimit must be at least 'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN'"
  )
  assert(
    opslimit <= binding.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX,
    "opslimit must be at most 'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX'"
  )
  assert(
    memlimit >= binding.crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN,
    "memlimit must be at least 'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN'"
  )
  assert(
    memlimit <= binding.crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX,
    "memlimit must be at most 'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX'"
  )

  const [done, promise] = checkStatus(callback)

  binding.crypto_pwhash_scryptsalsa208sha256_async(
    out.buffer,
    out.byteOffset,
    out.byteLength,

    passwd.buffer,
    passwd.byteOffset,
    passwd.byteLength,

    salt.buffer,
    salt.byteOffset,
    salt.byteLength,

    opslimit,
    memlimit,

    done
  )

  return promise
}

exports.crypto_pwhash_scryptsalsa208sha256_str_async = function (
  out,
  passwd,
  opslimit,
  memlimit,
  callback = undefined
) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(
    out.byteLength === binding.crypto_pwhash_scryptsalsa208sha256_STRBYTES,
    "out must be 'crypto_pwhash_scryptsalsa208sha256_STRBYTES' bytes"
  )
  assert(passwd.byteLength > 0, 'passwd must not be empty')
  assert(
    opslimit >= binding.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN,
    "opslimit must be at least 'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN'"
  )
  assert(
    opslimit <= binding.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX,
    "opslimit must be at most 'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX'"
  )
  assert(
    memlimit >= binding.crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN,
    "memlimit must be at least 'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN'"
  )
  assert(
    memlimit <= binding.crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX,
    "memlimit must be at most 'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX'"
  )

  const [done, promise] = checkStatus(callback)

  binding.crypto_pwhash_scryptsalsa208sha256_str_async(
    out.buffer,
    out.byteOffset,
    out.byteLength,

    passwd.buffer,
    passwd.byteOffset,
    passwd.byteLength,

    opslimit,
    memlimit,

    done
  )

  return promise
}

exports.crypto_pwhash_scryptsalsa208sha256_str = function (out, passwd, opslimit, memlimit) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(
    out.byteLength === binding.crypto_pwhash_scryptsalsa208sha256_STRBYTES,
    "out must be 'crypto_pwhash_scryptsalsa208sha256_STRBYTES' bytes"
  )
  assert(passwd.byteLength > 0, 'passwd must not be empty')
  assert(
    opslimit >= binding.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN,
    "opslimit must be at least 'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN'"
  )
  assert(
    opslimit <= binding.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX,
    "opslimit must be at most 'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX'"
  )
  assert(
    memlimit >= binding.crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN,
    "memlimit must be at least 'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN'"
  )
  assert(
    memlimit <= binding.crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX,
    "memlimit must be at most 'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX'"
  )

  const res = binding.crypto_pwhash_scryptsalsa208sha256_str(out, passwd, opslimit, memlimit)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_pwhash_scryptsalsa208sha256_str_verify_async = function (
  str,
  passwd,
  callback = undefined
) {
  assert(ArrayBuffer.isView(str), 'str must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(
    str.byteLength === binding.crypto_pwhash_scryptsalsa208sha256_STRBYTES,
    "str must be 'crypto_pwhash_scryptsalsa208sha256_STRBYTES' bytes"
  )
  assert(passwd.byteLength > 0, 'passwd must not be empty')

  const [done, promise] = checkStatus(callback, true)

  binding.crypto_pwhash_scryptsalsa208sha256_str_verify_async(
    str.buffer,
    str.byteOffset,
    str.byteLength,

    passwd.buffer,
    passwd.byteOffset,
    passwd.byteLength,

    done
  )

  return promise
}

exports.crypto_pwhash_scryptsalsa208sha256_str_verify = function (str, passwd) {
  assert(ArrayBuffer.isView(str), 'str must be a typed array')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(
    str.byteLength === binding.crypto_pwhash_scryptsalsa208sha256_STRBYTES,
    "str must be 'crypto_pwhash_scryptsalsa208sha256_STRBYTES' bytes"
  )
  assert(passwd.byteLength > 0, 'passwd must not be empty')

  return binding.crypto_pwhash_scryptsalsa208sha256_str_verify(str, passwd)
}

exports.crypto_pwhash_scryptsalsa208sha256_str_needs_rehash = function (str, opslimit, memlimit) {
  assert(ArrayBuffer.isView(str), 'str must be a typed array')
  assert(
    str.byteLength === binding.crypto_pwhash_scryptsalsa208sha256_STRBYTES,
    "str must be 'crypto_pwhash_scryptsalsa208sha256_STRBYTES' bytes"
  )
  assert(
    opslimit >= binding.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN,
    "opslimit must be at least 'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN'"
  )
  assert(
    opslimit <= binding.crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX,
    "opslimit must be at most 'crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX'"
  )
  assert(
    memlimit >= binding.crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN,
    "memlimit must be at least 'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN'"
  )
  assert(
    memlimit <= binding.crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX,
    "memlimit must be at most 'crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX'"
  )

  return binding.crypto_pwhash_scryptsalsa208sha256_str_needs_rehash(str, opslimit, memlimit)
}

// crypto_kx

exports.crypto_kx_keypair = function (pk, sk) {
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(
    pk.byteLength === binding.crypto_kx_PUBLICKEYBYTES,
    "pk must be 'crypto_kx_PUBLICKEYBYTES' bytes"
  )
  assert(
    sk.byteLength === binding.crypto_kx_SECRETKEYBYTES,
    "sk must be 'crypto_kx_SECRETKEYBYTES' bytes"
  )

  const res = binding.crypto_kx_keypair(pk, sk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_kx_seed_keypair = function (pk, sk, seed) {
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(ArrayBuffer.isView(seed), 'seed must be a typed array')
  assert(
    pk.byteLength === binding.crypto_kx_PUBLICKEYBYTES,
    "pk must be 'crypto_kx_PUBLICKEYBYTES' bytes"
  )
  assert(
    sk.byteLength === binding.crypto_kx_SECRETKEYBYTES,
    "sk must be 'crypto_kx_SECRETKEYBYTES' bytes"
  )
  assert(
    seed.byteLength === binding.crypto_kx_SEEDBYTES,
    "seed must be 'crypto_kx_SEEDBYTES' bytes"
  )

  const res = binding.crypto_kx_seed_keypair(pk, sk, seed)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_kx_client_session_keys = function (rx, tx, clientPk, clientSk, serverPk) {
  if (!rx) rx = undefined
  if (!tx) tx = undefined

  assert(rx || tx, 'at least one session key must be specified')

  if (rx) {
    assert(ArrayBuffer.isView(rx), 'rx must be a typed array')
    assert(
      rx.byteLength === binding.crypto_kx_SESSIONKEYBYTES,
      "rx must be 'crypto_kx_SESSIONKEYBYTES' bytes"
    )
  }

  if (tx) {
    assert(ArrayBuffer.isView(tx), 'tx must be a typed array')
    assert(
      tx.byteLength === binding.crypto_kx_SESSIONKEYBYTES,
      "tx must be 'crypto_kx_SESSIONKEYBYTES' bytes"
    )
  }

  assert(ArrayBuffer.isView(clientPk), 'clientPk must be a typed array')
  assert(ArrayBuffer.isView(clientSk), 'clientSk must be a typed array')
  assert(ArrayBuffer.isView(serverPk), 'serverPk must be a typed array')
  assert(
    clientPk.byteLength === binding.crypto_kx_PUBLICKEYBYTES,
    "clientPk must be 'crypto_kx_PUBLICKEYBYTES' bytes"
  )
  assert(
    clientSk.byteLength === binding.crypto_kx_SECRETKEYBYTES,
    "clientSk must be 'crypto_kx_SECRETKEYBYTES' bytes"
  )
  assert(
    serverPk.byteLength === binding.crypto_kx_PUBLICKEYBYTES,
    "serverPk must be 'crypto_kx_PUBLICKEYBYTES' bytes"
  )

  const res = binding.crypto_kx_client_session_keys(rx, tx, clientPk, clientSk, serverPk)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_kx_server_session_keys = function (rx, tx, serverPk, serverSk, clientPk) {
  if (!rx) rx = undefined
  if (!tx) tx = undefined

  assert(rx || tx, 'at least one session key must be specified')

  if (rx) {
    assert(ArrayBuffer.isView(rx), 'rx must be a typed array')
    assert(
      rx.byteLength === binding.crypto_kx_SESSIONKEYBYTES,
      "rx must be 'crypto_kx_SESSIONKEYBYTES' bytes"
    )
  }

  if (tx) {
    assert(ArrayBuffer.isView(tx), 'tx must be a typed array')
    assert(
      tx.byteLength === binding.crypto_kx_SESSIONKEYBYTES,
      "tx must be 'crypto_kx_SESSIONKEYBYTES' bytes"
    )
  }

  assert(ArrayBuffer.isView(serverPk), 'serverPk must be a typed array')
  assert(ArrayBuffer.isView(serverSk), 'serverSk must be a typed array')
  assert(ArrayBuffer.isView(clientPk), 'clientPk must be a typed array')
  assert(
    serverPk.byteLength === binding.crypto_kx_PUBLICKEYBYTES,
    "serverPk must be 'crypto_kx_PUBLICKEYBYTES' bytes"
  )
  assert(
    serverSk.byteLength === binding.crypto_kx_SECRETKEYBYTES,
    "serverSk must be 'crypto_kx_SECRETKEYBYTES' bytes"
  )
  assert(
    clientPk.byteLength === binding.crypto_kx_PUBLICKEYBYTES,
    "clientPk must be 'crypto_kx_PUBLICKEYBYTES' bytes"
  )

  const res = binding.crypto_kx_server_session_keys(rx, tx, serverPk, serverSk, clientPk)

  if (res !== 0) throw new Error('status: ' + res)
}

// crypto_scalarmult

exports.crypto_scalarmult_base = function (q, n) {
  assert(ArrayBuffer.isView(q), 'q must be a typed array')
  assert(
    q.byteLength === binding.crypto_scalarmult_BYTES,
    "q must be 'crypto_scalarmult_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.crypto_scalarmult_SCALARBYTES,
    "n must be 'crypto_scalarmult_SCALARBYTES' bytes"
  )

  const res = binding.crypto_scalarmult_base(q, n)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_scalarmult = function (q, n, p) {
  assert(ArrayBuffer.isView(q), 'q must be a typed array')
  assert(
    q.byteLength === binding.crypto_scalarmult_BYTES,
    "q must be 'crypto_scalarmult_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.crypto_scalarmult_SCALARBYTES,
    "n must be 'crypto_scalarmult_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(p), 'p must be a typed array')
  assert(
    p.byteLength === binding.crypto_scalarmult_BYTES,
    "p must be 'crypto_scalarmult_BYTES' bytes"
  )

  const res = binding.crypto_scalarmult(q, n, p)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_scalarmult_ed25519_base = function (q, n) {
  assert(ArrayBuffer.isView(q), 'q must be a typed array')
  assert(
    q.byteLength === binding.crypto_scalarmult_ed25519_BYTES,
    "q must be 'crypto_scalarmult_ed25519_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.crypto_scalarmult_ed25519_SCALARBYTES,
    "n must be 'crypto_scalarmult_ed25519_SCALARBYTES' bytes"
  )

  const res = binding.crypto_scalarmult_ed25519_base(q, n)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_scalarmult_ed25519 = function (q, n, p) {
  assert(ArrayBuffer.isView(q), 'q must be a typed array')
  assert(
    q.byteLength === binding.crypto_scalarmult_ed25519_BYTES,
    "q must be 'crypto_scalarmult_ed25519_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.crypto_scalarmult_ed25519_SCALARBYTES,
    "n must be 'crypto_scalarmult_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(p), 'p must be a typed array')
  assert(
    p.byteLength === binding.crypto_scalarmult_ed25519_BYTES,
    "p must be 'crypto_scalarmult_ed25519_BYTES' bytes"
  )

  const res = binding.crypto_scalarmult_ed25519(q, n, p)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_core_ed25519_is_valid_point = function (p) {
  assert(ArrayBuffer.isView(p), 'p must be a typed array')
  assert(
    p.byteLength === binding.crypto_core_ed25519_BYTES,
    "p must be 'crypto_core_ed25519_BYTES' bytes"
  )

  return binding.crypto_core_ed25519_is_valid_point(p)
}

exports.crypto_core_ed25519_from_uniform = function (p, r) {
  assert(ArrayBuffer.isView(p), 'p must be a typed array')
  assert(
    p.byteLength === binding.crypto_core_ed25519_BYTES,
    "p must be 'crypto_core_ed25519_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(r), 'r must be a typed array')
  assert(
    r.byteLength === binding.crypto_core_ed25519_UNIFORMBYTES,
    "r must be 'crypto_core_ed25519_UNIFORMBYTES' bytes"
  )

  const res = binding.crypto_core_ed25519_from_uniform(p, r)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_scalarmult_ed25519_base_noclamp = function (q, n) {
  assert(ArrayBuffer.isView(q), 'q must be a typed array')
  assert(
    q.byteLength === binding.crypto_scalarmult_ed25519_BYTES,
    "q must be 'crypto_scalarmult_ed25519_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.crypto_scalarmult_ed25519_SCALARBYTES,
    "n must be 'crypto_scalarmult_ed25519_SCALARBYTES' bytes"
  )

  const res = binding.crypto_scalarmult_ed25519_base_noclamp(q, n)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_scalarmult_ed25519_noclamp = function (q, n, p) {
  assert(ArrayBuffer.isView(q), 'q must be a typed array')
  assert(
    q.byteLength === binding.crypto_scalarmult_ed25519_BYTES,
    "q must be 'crypto_scalarmult_ed25519_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.crypto_scalarmult_ed25519_SCALARBYTES,
    "n must be 'crypto_scalarmult_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(p), 'p must be a typed array')
  assert(
    p.byteLength === binding.crypto_scalarmult_ed25519_BYTES,
    "p must be 'crypto_scalarmult_ed25519_BYTES' bytes"
  )

  const res = binding.crypto_scalarmult_ed25519_noclamp(q, n, p)

  if (res !== 0) throw new Error('status: ' + res)
}

// crypto_core

exports.crypto_core_ed25519_add = function (r, p, q) {
  assert(ArrayBuffer.isView(r), 'r must be a typed array')
  assert(
    r.byteLength === binding.crypto_core_ed25519_BYTES,
    "r must be 'crypto_core_ed25519_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(p), 'p must be a typed array')
  assert(
    p.byteLength === binding.crypto_core_ed25519_BYTES,
    "p must be 'crypto_core_ed25519_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(q), 'q must be a typed array')
  assert(
    q.byteLength === binding.crypto_core_ed25519_BYTES,
    "q must be 'crypto_core_ed25519_BYTES' bytes"
  )

  const res = binding.crypto_core_ed25519_add(r, p, q)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_core_ed25519_sub = function (r, p, q) {
  assert(ArrayBuffer.isView(r), 'r must be a typed array')
  assert(
    r.byteLength === binding.crypto_core_ed25519_BYTES,
    "r must be 'crypto_core_ed25519_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(p), 'p must be a typed array')
  assert(
    p.byteLength === binding.crypto_core_ed25519_BYTES,
    "p must be 'crypto_core_ed25519_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(q), 'q must be a typed array')
  assert(
    q.byteLength === binding.crypto_core_ed25519_BYTES,
    "q must be 'crypto_core_ed25519_BYTES' bytes"
  )

  const res = binding.crypto_core_ed25519_sub(r, p, q)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_core_ed25519_scalar_random = function (r) {
  assert(ArrayBuffer.isView(r), 'r must be a typed array')
  assert(
    r.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "r must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )

  binding.crypto_core_ed25519_scalar_random(r)
}

exports.crypto_core_ed25519_scalar_reduce = function (r, s) {
  assert(ArrayBuffer.isView(r), 'r must be a typed array')
  assert(
    r.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "r must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(s), 's must be a typed array')
  assert(
    s.byteLength === binding.crypto_core_ed25519_NONREDUCEDSCALARBYTES,
    "s must be 'crypto_core_ed25519_NONREDUCEDSCALARBYTES' bytes"
  )

  binding.crypto_core_ed25519_scalar_reduce(r, s)
}

exports.crypto_core_ed25519_scalar_invert = function (recip, s) {
  assert(ArrayBuffer.isView(recip), 'recip must be a typed array')
  assert(
    recip.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "recip must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(s), 's must be a typed array')
  assert(
    s.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "s must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )

  binding.crypto_core_ed25519_scalar_invert(recip, s)
}

exports.crypto_core_ed25519_scalar_negate = function (neg, s) {
  assert(ArrayBuffer.isView(neg), 'neg must be a typed array')
  assert(
    neg.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "neg must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(s), 's must be a typed array')
  assert(
    s.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "s must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )

  binding.crypto_core_ed25519_scalar_negate(neg, s)
}

exports.crypto_core_ed25519_scalar_complement = function (comp, s) {
  assert(ArrayBuffer.isView(comp), 'comp must be a typed array')
  assert(
    comp.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "comp must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(s), 's must be a typed array')
  assert(
    s.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "s must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )

  binding.crypto_core_ed25519_scalar_complement(comp, s)
}

exports.crypto_core_ed25519_scalar_add = function (z, x, y) {
  assert(ArrayBuffer.isView(z), 'z must be a typed array')
  assert(
    z.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "z must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(x), 'x must be a typed array')
  assert(
    x.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "x must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(y), 'y must be a typed array')
  assert(
    y.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "y must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )

  binding.crypto_core_ed25519_scalar_add(z, x, y)
}

exports.crypto_core_ed25519_scalar_sub = function (z, x, y) {
  assert(ArrayBuffer.isView(z), 'z must be a typed array')
  assert(
    z.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "z must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(x), 'x must be a typed array')
  assert(
    x.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "x must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(y), 'y must be a typed array')
  assert(
    y.byteLength === binding.crypto_core_ed25519_SCALARBYTES,
    "y must be 'crypto_core_ed25519_SCALARBYTES' bytes"
  )

  binding.crypto_core_ed25519_scalar_sub(z, x, y)
}

// crypto_shorthash

exports.crypto_shorthash = function (out, input, k) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(
    out.byteLength === binding.crypto_shorthash_BYTES,
    "out must be 'crypto_shorthash_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_shorthash_KEYBYTES,
    "k must be 'crypto_shorthash_KEYBYTES' bytes"
  )

  const res = binding.crypto_shorthash(out, input, k)

  if (res !== 0) throw new Error('status: ' + res)
}

// crypto_kdf

exports.crypto_kdf_keygen = function (key) {
  assert(ArrayBuffer.isView(key), 'key must be a typed array')
  assert(key.byteLength === binding.crypto_kdf_KEYBYTES, "key must be 'crypto_kdf_KEYBYTES' bytes")

  binding.crypto_kdf_keygen(key)
}

exports.crypto_kdf_derive_from_key = function (subkey, subkeyId, ctx, key) {
  assert(ArrayBuffer.isView(subkey), 'subkey must be a typed array')
  assert(
    subkey.byteLength >= binding.crypto_kdf_BYTES_MIN,
    "subkey must be at least 'crypto_kdf_BYTES_MIN' bytes"
  )
  assert(
    subkey.byteLength <= binding.crypto_kdf_BYTES_MAX,
    "subkey must be at most 'crypto_kdf_BYTES_MAX' bytes"
  )
  assert(ArrayBuffer.isView(ctx), 'ctx must be a typed array')
  assert(
    ctx.byteLength === binding.crypto_kdf_CONTEXTBYTES,
    "ctx must be 'crypto_kdf_CONTEXTBYTES' bytes"
  )
  assert(ArrayBuffer.isView(key), 'key must be a typed array')
  assert(key.byteLength === binding.crypto_kdf_KEYBYTES, "key must be 'crypto_kdf_KEYBYTES' bytes")

  const res = binding.crypto_kdf_derive_from_key(subkey, subkeyId, ctx, key)

  if (res !== 0) throw new Error('status: ' + res)
}

// crypto_hash

exports.crypto_hash = function (out, input) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(out.byteLength === binding.crypto_hash_BYTES, "out must be 'crypto_hash_BYTES' bytes")

  const res = binding.crypto_hash(out, input)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_hash_sha256 = function (out, input) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(
    out.byteLength === binding.crypto_hash_sha256_BYTES,
    "out must be 'crypto_hash_sha256_BYTES' bytes"
  )

  const res = binding.crypto_hash_sha256(out, input)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_hash_sha256_init = function (state) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_hash_sha256_STATEBYTES,
    "state must be 'crypto_hash_sha256_STATEBYTES' bytes"
  )

  const res = binding.crypto_hash_sha256_init(state)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_hash_sha256_update = function (state, input) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(
    state.byteLength === binding.crypto_hash_sha256_STATEBYTES,
    "state must be 'crypto_hash_sha256_STATEBYTES' bytes"
  )

  const res = binding.crypto_hash_sha256_update(state, input)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_hash_sha256_final = function (state, out) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_hash_sha256_STATEBYTES,
    "state must be 'crypto_hash_sha256_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(
    out.byteLength === binding.crypto_hash_sha256_BYTES,
    "out must be 'crypto_hash_sha256_BYTES' bytes"
  )

  const res = binding.crypto_hash_sha256_final(state, out)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_hash_sha512 = function (out, input) {
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(
    out.byteLength === binding.crypto_hash_sha512_BYTES,
    "out must be 'crypto_hash_sha512_BYTES' bytes"
  )

  const res = binding.crypto_hash_sha512(out, input)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_hash_sha512_init = function (state) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_hash_sha512_STATEBYTES,
    "state must be 'crypto_hash_sha512_STATEBYTES' bytes"
  )

  const res = binding.crypto_hash_sha512_init(state)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_hash_sha512_update = function (state, input) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(ArrayBuffer.isView(input), 'input must be a typed array')
  assert(
    state.byteLength === binding.crypto_hash_sha512_STATEBYTES,
    "state must be 'crypto_hash_sha512_STATEBYTES' bytes"
  )

  const res = binding.crypto_hash_sha512_update(state, input)

  if (res !== 0) throw new Error('status: ' + res)
}

exports.crypto_hash_sha512_final = function (state, out) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_hash_sha512_STATEBYTES,
    "state must be 'crypto_hash_sha512_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(
    out.byteLength === binding.crypto_hash_sha512_BYTES,
    "out must be 'crypto_hash_sha512_BYTES' bytes"
  )

  const res = binding.crypto_hash_sha512_final(state, out)

  if (res !== 0) throw new Error('status: ' + res)
}

// crypto_aead

exports.crypto_aead_xchacha20poly1305_ietf_keygen = function (k) {
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_aead_xchacha20poly1305_ietf_KEYBYTES,
    "k must be 'crypto_aead_xchacha20poly1305_ietf_KEYBYTES' bytes"
  )

  binding.crypto_aead_xchacha20poly1305_ietf_keygen(k)
}

exports.crypto_aead_xchacha20poly1305_ietf_encrypt = function (c, m, ad, nsec, npub, k) {
  if (!ad) ad = undefined

  assert(nsec === null, 'nsec must always be set to null')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(
    c.byteLength === m.byteLength + binding.crypto_aead_xchacha20poly1305_ietf_ABYTES,
    "c must be 'm.byteLength + crypto_aead_xchacha20poly1305_ietf_ABYTES' bytes"
  )
  assert(c.byteLength <= 0xffffffff, 'c.byteLength must be a 32bit integer')
  assert(ArrayBuffer.isView(npub), 'npub must be a typed array')
  assert(
    npub.byteLength === binding.crypto_aead_xchacha20poly1305_ietf_NPUBBYTES,
    "npub must be 'crypto_aead_xchacha20poly1305_ietf_NPUBBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_aead_xchacha20poly1305_ietf_KEYBYTES,
    "k must be 'crypto_aead_xchacha20poly1305_ietf_KEYBYTES' bytes"
  )

  const res = binding.crypto_aead_xchacha20poly1305_ietf_encrypt(c, m, ad, npub, k)

  if (res < 0) throw new Error('could not encrypt data')

  return res
}

exports.crypto_aead_xchacha20poly1305_ietf_decrypt = function (m, nsec, c, ad, npub, k) {
  if (!ad) ad = undefined

  assert(nsec === null, 'nsec must always be set to null')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(
    m.byteLength === c.byteLength - binding.crypto_aead_xchacha20poly1305_ietf_ABYTES,
    "m must be 'c.byteLength - crypto_aead_xchacha20poly1305_ietf_ABYTES' bytes"
  )
  assert(m.byteLength <= 0xffffffff, 'm.byteLength must be a 32bit integer')
  assert(ArrayBuffer.isView(npub), 'npub must be a typed array')
  assert(
    npub.byteLength === binding.crypto_aead_xchacha20poly1305_ietf_NPUBBYTES,
    "npub must be 'crypto_aead_xchacha20poly1305_ietf_NPUBBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_aead_xchacha20poly1305_ietf_KEYBYTES,
    "k must be 'crypto_aead_xchacha20poly1305_ietf_KEYBYTES' bytes"
  )

  const res = binding.crypto_aead_xchacha20poly1305_ietf_decrypt(m, c, ad, npub, k)

  if (res < 0) throw new Error('could not verify data')

  return res
}

exports.crypto_aead_xchacha20poly1305_ietf_encrypt_detached = function (
  c,
  mac,
  m,
  ad,
  nsec,
  npub,
  k
) {
  if (!ad) ad = undefined

  assert(nsec === null, 'nsec must always be set to null')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(ArrayBuffer.isView(mac), 'mac must be a typed array')
  assert(
    mac.byteLength === binding.crypto_aead_xchacha20poly1305_ietf_ABYTES,
    "mac must be 'crypto_aead_xchacha20poly1305_ietf_ABYTES' bytes"
  )
  assert(ArrayBuffer.isView(npub), 'npub must be a typed array')
  assert(
    npub.byteLength === binding.crypto_aead_xchacha20poly1305_ietf_NPUBBYTES,
    "npub must be 'crypto_aead_xchacha20poly1305_ietf_NPUBBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_aead_xchacha20poly1305_ietf_KEYBYTES,
    "k must be 'crypto_aead_xchacha20poly1305_ietf_KEYBYTES' bytes"
  )

  const res = binding.crypto_aead_xchacha20poly1305_ietf_encrypt_detached(c, mac, m, ad, npub, k)

  if (res < 0) throw new Error('could not encrypt data')

  return res
}

exports.crypto_aead_xchacha20poly1305_ietf_decrypt_detached = function (
  m,
  nsec,
  c,
  mac,
  ad,
  npub,
  k
) {
  if (!ad) ad = undefined

  assert(nsec === null, 'nsec must always be set to null')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(m.byteLength === c.byteLength, "m must be 'c.byteLength' bytes")
  assert(ArrayBuffer.isView(mac), 'mac must be a typed array')
  assert(
    mac.byteLength === binding.crypto_aead_xchacha20poly1305_ietf_ABYTES,
    "mac must be 'crypto_aead_xchacha20poly1305_ietf_ABYTES' bytes"
  )
  assert(ArrayBuffer.isView(npub), 'npub must be a typed array')
  assert(
    npub.byteLength === binding.crypto_aead_xchacha20poly1305_ietf_NPUBBYTES,
    "npub must be 'crypto_aead_xchacha20poly1305_ietf_NPUBBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_aead_xchacha20poly1305_ietf_KEYBYTES,
    "k must be 'crypto_aead_xchacha20poly1305_ietf_KEYBYTES' bytes"
  )

  const res = binding.crypto_aead_xchacha20poly1305_ietf_decrypt_detached(m, c, mac, ad, npub, k)

  if (res !== 0) throw new Error('could not verify data')
}

exports.crypto_aead_chacha20poly1305_ietf_keygen = function (k) {
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_aead_chacha20poly1305_ietf_KEYBYTES,
    "k must be 'crypto_aead_chacha20poly1305_ietf_KEYBYTES' bytes"
  )

  binding.crypto_aead_chacha20poly1305_ietf_keygen(k)
}

exports.crypto_aead_chacha20poly1305_ietf_encrypt = function (c, m, ad, nsec, npub, k) {
  if (!ad) ad = undefined

  assert(nsec === null, 'nsec must always be set to null')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(
    c.byteLength === m.byteLength + binding.crypto_aead_chacha20poly1305_ietf_ABYTES,
    "c must be 'm.byteLength + crypto_aead_chacha20poly1305_ietf_ABYTES' bytes"
  )
  assert(c.byteLength <= 0xffffffff, 'c.byteLength must be a 32bit integer')
  assert(ArrayBuffer.isView(npub), 'npub must be a typed array')
  assert(
    npub.byteLength === binding.crypto_aead_chacha20poly1305_ietf_NPUBBYTES,
    "npub must be 'crypto_aead_chacha20poly1305_ietf_NPUBBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_aead_chacha20poly1305_ietf_KEYBYTES,
    "k must be 'crypto_aead_chacha20poly1305_ietf_KEYBYTES' bytes"
  )

  const res = binding.crypto_aead_chacha20poly1305_ietf_encrypt(c, m, ad, npub, k)

  if (res < 0) throw new Error('could not encrypt data')

  return res
}

exports.crypto_aead_chacha20poly1305_ietf_decrypt = function (m, nsec, c, ad, npub, k) {
  if (!ad) ad = undefined

  assert(nsec === null, 'nsec must always be set to null')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(
    m.byteLength === c.byteLength - binding.crypto_aead_chacha20poly1305_ietf_ABYTES,
    "m must be 'c.byteLength - crypto_aead_chacha20poly1305_ietf_ABYTES' bytes"
  )
  assert(m.byteLength <= 0xffffffff, 'm.byteLength must be a 32bit integer')
  assert(ArrayBuffer.isView(npub), 'npub must be a typed array')
  assert(
    npub.byteLength === binding.crypto_aead_chacha20poly1305_ietf_NPUBBYTES,
    "npub must be 'crypto_aead_chacha20poly1305_ietf_NPUBBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_aead_chacha20poly1305_ietf_KEYBYTES,
    "k must be 'crypto_aead_chacha20poly1305_ietf_KEYBYTES' bytes"
  )

  const res = binding.crypto_aead_chacha20poly1305_ietf_decrypt(m, c, ad, npub, k)

  if (res < 0) throw new Error('could not verify data')

  return res
}

exports.crypto_aead_chacha20poly1305_ietf_encrypt_detached = function (
  c,
  mac,
  m,
  ad,
  nsec,
  npub,
  k
) {
  if (!ad) ad = undefined

  assert(nsec === null, 'nsec must always be set to null')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")
  assert(ArrayBuffer.isView(mac), 'mac must be a typed array')
  assert(
    mac.byteLength === binding.crypto_aead_chacha20poly1305_ietf_ABYTES,
    "mac must be 'crypto_aead_chacha20poly1305_ietf_ABYTES' bytes"
  )
  assert(ArrayBuffer.isView(npub), 'npub must be a typed array')
  assert(
    npub.byteLength === binding.crypto_aead_chacha20poly1305_ietf_NPUBBYTES,
    "npub must be 'crypto_aead_chacha20poly1305_ietf_NPUBBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_aead_chacha20poly1305_ietf_KEYBYTES,
    "k must be 'crypto_aead_chacha20poly1305_ietf_KEYBYTES' bytes"
  )

  const res = binding.crypto_aead_chacha20poly1305_ietf_encrypt_detached(c, mac, m, ad, npub, k)

  if (res < 0) throw new Error('could not encrypt data')

  return res
}

exports.crypto_aead_chacha20poly1305_ietf_decrypt_detached = function (
  m,
  nsec,
  c,
  mac,
  ad,
  npub,
  k
) {
  if (!ad) ad = undefined

  assert(nsec === null, 'nsec must always be set to null')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(m.byteLength === c.byteLength, "m must be 'c.byteLength' bytes")
  assert(ArrayBuffer.isView(mac), 'mac must be a typed array')
  assert(
    mac.byteLength === binding.crypto_aead_chacha20poly1305_ietf_ABYTES,
    "mac must be 'crypto_aead_chacha20poly1305_ietf_ABYTES' bytes"
  )
  assert(ArrayBuffer.isView(npub), 'npub must be a typed array')
  assert(
    npub.byteLength === binding.crypto_aead_chacha20poly1305_ietf_NPUBBYTES,
    "npub must be 'crypto_aead_chacha20poly1305_ietf_NPUBBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_aead_chacha20poly1305_ietf_KEYBYTES,
    "k must be 'crypto_aead_chacha20poly1305_ietf_KEYBYTES' bytes"
  )

  const res = binding.crypto_aead_chacha20poly1305_ietf_decrypt_detached(m, c, mac, ad, npub, k)

  if (res !== 0) throw new Error('could not verify data')
}

// crypto_stream

exports.crypto_stream_xor_wrap_init = function (state, n, k) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.sn_crypto_stream_xor_STATEBYTES,
    "state must be 'sn_crypto_stream_xor_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.crypto_stream_NONCEBYTES,
    "n must be 'crypto_stream_NONCEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_stream_KEYBYTES,
    "k must be 'crypto_stream_KEYBYTES' bytes"
  )

  binding.crypto_stream_xor_wrap_init(state, n, k)
}

exports.crypto_stream_xor_wrap_update = function (state, c, m) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.sn_crypto_stream_xor_STATEBYTES,
    "state must be 'sn_crypto_stream_xor_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")

  binding.crypto_stream_xor_wrap_update(state, c, m)
}

exports.crypto_stream_xor_wrap_final = function (state) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.sn_crypto_stream_xor_STATEBYTES,
    "state must be 'sn_crypto_stream_xor_STATEBYTES' bytes"
  )

  binding.crypto_stream_xor_wrap_final(state)
}

exports.crypto_stream_chacha20_xor_wrap_init = function (state, n, k) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_chacha20_xor_STATEBYTES,
    "state must be 'crypto_stream_chacha20_xor_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.crypto_stream_chacha20_NONCEBYTES,
    "n must be 'crypto_stream_chacha20_NONCEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_stream_chacha20_KEYBYTES,
    "k must be 'crypto_stream_chacha20_KEYBYTES' bytes"
  )

  binding.crypto_stream_chacha20_xor_wrap_init(state, n, k)
}

exports.crypto_stream_chacha20_xor_wrap_update = function (state, c, m) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_chacha20_xor_STATEBYTES,
    "state must be 'crypto_stream_chacha20_xor_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")

  binding.crypto_stream_chacha20_xor_wrap_update(state, c, m)
}

exports.crypto_stream_chacha20_xor_wrap_final = function (state) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_chacha20_xor_STATEBYTES,
    "state must be 'crypto_stream_chacha20_xor_STATEBYTES' bytes"
  )

  binding.crypto_stream_chacha20_xor_wrap_final(state)
}

exports.crypto_stream_chacha20_ietf_xor_wrap_init = function (state, n, k) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_chacha20_ietf_xor_STATEBYTES,
    "state must be 'crypto_stream_chacha20_ietf_xor_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.crypto_stream_chacha20_ietf_NONCEBYTES,
    "n must be 'crypto_stream_chacha20_ietf_NONCEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_stream_chacha20_ietf_KEYBYTES,
    "k must be 'crypto_stream_chacha20_ietf_KEYBYTES' bytes"
  )

  binding.crypto_stream_chacha20_ietf_xor_wrap_init(state, n, k)
}

exports.crypto_stream_chacha20_ietf_xor_wrap_update = function (state, c, m) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_chacha20_ietf_xor_STATEBYTES,
    "state must be 'crypto_stream_chacha20_ietf_xor_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")

  binding.crypto_stream_chacha20_ietf_xor_wrap_update(state, c, m)
}

exports.crypto_stream_chacha20_ietf_xor_wrap_final = function (state) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_chacha20_ietf_xor_STATEBYTES,
    "state must be 'crypto_stream_chacha20_ietf_xor_STATEBYTES' bytes"
  )

  binding.crypto_stream_chacha20_ietf_xor_wrap_final(state)
}

exports.crypto_stream_xchacha20_xor_wrap_init = function (state, n, k) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_xchacha20_xor_STATEBYTES,
    "state must be 'crypto_stream_xchacha20_xor_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.crypto_stream_xchacha20_NONCEBYTES,
    "n must be 'crypto_stream_xchacha20_NONCEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_stream_xchacha20_KEYBYTES,
    "k must be 'crypto_stream_xchacha20_KEYBYTES' bytes"
  )

  binding.crypto_stream_xchacha20_xor_wrap_init(state, n, k)
}

exports.crypto_stream_xchacha20_xor_wrap_update = function (state, c, m) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_xchacha20_xor_STATEBYTES,
    "state must be 'crypto_stream_xchacha20_xor_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")

  binding.crypto_stream_xchacha20_xor_wrap_update(state, c, m)
}

exports.crypto_stream_xchacha20_xor_wrap_final = function (state) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_xchacha20_xor_STATEBYTES,
    "state must be 'crypto_stream_xchacha20_xor_STATEBYTES' bytes"
  )

  binding.crypto_stream_xchacha20_xor_wrap_final(state)
}

exports.crypto_stream_salsa20_xor_wrap_init = function (state, n, k) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_salsa20_xor_STATEBYTES,
    "state must be 'crypto_stream_salsa20_xor_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.crypto_stream_salsa20_NONCEBYTES,
    "n must be 'crypto_stream_salsa20_NONCEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(k), 'k must be a typed array')
  assert(
    k.byteLength === binding.crypto_stream_salsa20_KEYBYTES,
    "k must be 'crypto_stream_salsa20_KEYBYTES' bytes"
  )

  binding.crypto_stream_salsa20_xor_wrap_init(state, n, k)
}

exports.crypto_stream_salsa20_xor_wrap_update = function (state, c, m) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_salsa20_xor_STATEBYTES,
    "state must be 'crypto_stream_salsa20_xor_STATEBYTES' bytes"
  )
  assert(ArrayBuffer.isView(c), 'c must be a typed array')
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(c.byteLength === m.byteLength, "c must be 'm.byteLength' bytes")

  binding.crypto_stream_salsa20_xor_wrap_update(state, c, m)
}

exports.crypto_stream_salsa20_xor_wrap_final = function (state) {
  assert(ArrayBuffer.isView(state), 'state must be a typed array')
  assert(
    state.byteLength === binding.crypto_stream_salsa20_xor_STATEBYTES,
    "state must be 'crypto_stream_salsa20_xor_STATEBYTES' bytes"
  )

  binding.crypto_stream_salsa20_xor_wrap_final(state)
}

// experimental

exports.extension_tweak_ed25519_base = function (n, p, ns) {
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "n must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(p), 'p must be a typed array')
  assert(
    p.byteLength === binding.extension_tweak_ed25519_BYTES,
    "p must be 'extension_tweak_ed25519_BYTES' bytes"
  )

  binding.extension_tweak_ed25519_base(n, p, ns)
}

exports.extension_tweak_ed25519_sign_detached = function (sig, m, scalar, pk) {
  assert(ArrayBuffer.isView(sig), 'sig must be a typed array')
  assert(sig.byteLength === binding.crypto_sign_BYTES, "sig must be 'crypto_sign_BYTES' bytes")
  assert(ArrayBuffer.isView(m), 'm must be a typed array')
  assert(ArrayBuffer.isView(scalar), 'scalar must be a typed array')
  assert(
    scalar.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "scalar must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )

  if (pk) {
    assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
    assert(
      pk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
      "pk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
    )
  }

  const res = binding.extension_tweak_ed25519_sign_detached(sig, m, scalar, pk)

  if (res !== 0) throw new Error('failed to compute signature')
}

exports.extension_tweak_ed25519_sk_to_scalar = function (n, sk) {
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "n must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(sk), 'sk must be a typed array')
  assert(
    sk.byteLength === binding.crypto_sign_SECRETKEYBYTES,
    "sk must be 'crypto_sign_SECRETKEYBYTES' bytes"
  )

  binding.extension_tweak_ed25519_sk_to_scalar(n, sk)
}

exports.extension_tweak_ed25519_scalar = function (scalarOut, scalar, ns) {
  assert(ArrayBuffer.isView(scalarOut), 'scalarOut must be a typed array')
  assert(
    scalarOut.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "scalarOut must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(scalar), 'scalar must be a typed array')
  assert(
    scalar.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "scalar must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )

  binding.extension_tweak_ed25519_scalar(scalarOut, scalar, ns)
}

exports.extension_tweak_ed25519_pk = function (tpk, pk, ns) {
  assert(ArrayBuffer.isView(tpk), 'tpk must be a typed array')
  assert(
    tpk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "tpk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(
    pk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "pk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )

  const res = binding.extension_tweak_ed25519_pk(tpk, pk, ns)

  if (res !== 0) throw new Error('failed to tweak public key')
}

exports.extension_tweak_ed25519_keypair = function (pk, scalarOut, scalarIn, ns) {
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(
    pk.byteLength === binding.extension_tweak_ed25519_BYTES,
    "pk must be 'extension_tweak_ed25519_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(scalarOut), 'scalarOut must be a typed array')
  assert(
    scalarOut.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "scalarOut must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(scalarIn), 'scalarIn must be a typed array')
  assert(
    scalarIn.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "scalarIn must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )

  binding.extension_tweak_ed25519_keypair(pk, scalarOut, scalarIn, ns)
}

exports.extension_tweak_ed25519_scalar_add = function (scalarOut, scalar, n) {
  assert(ArrayBuffer.isView(scalarOut), 'scalarOut must be a typed array')
  assert(
    scalarOut.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "scalarOut must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(scalar), 'scalar must be a typed array')
  assert(
    scalar.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "scalar must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(n), 'n must be a typed array')
  assert(
    n.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "n must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )

  binding.extension_tweak_ed25519_scalar_add(scalarOut, scalar, n)
}

exports.extension_tweak_ed25519_pk_add = function (tpk, pk, p) {
  assert(ArrayBuffer.isView(tpk), 'tpk must be a typed array')
  assert(
    tpk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "tpk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(
    pk.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "pk must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )
  assert(ArrayBuffer.isView(p), 'p must be a typed array')
  assert(
    p.byteLength === binding.crypto_sign_PUBLICKEYBYTES,
    "p must be 'crypto_sign_PUBLICKEYBYTES' bytes"
  )

  const res = binding.extension_tweak_ed25519_pk_add(tpk, pk, p)

  if (res !== 0) throw new Error('failed to add tweak to public key')
}

exports.extension_tweak_ed25519_keypair_add = function (pk, scalarOut, scalarIn, tweak) {
  assert(ArrayBuffer.isView(pk), 'pk must be a typed array')
  assert(
    pk.byteLength === binding.extension_tweak_ed25519_BYTES,
    "pk must be 'extension_tweak_ed25519_BYTES' bytes"
  )
  assert(ArrayBuffer.isView(scalarOut), 'scalarOut must be a typed array')
  assert(
    scalarOut.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "scalarOut must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(scalarIn), 'scalarIn must be a typed array')
  assert(
    scalarIn.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "scalarIn must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )
  assert(ArrayBuffer.isView(tweak), 'tweak must be a typed array')
  assert(
    tweak.byteLength === binding.extension_tweak_ed25519_SCALARBYTES,
    "tweak must be 'extension_tweak_ed25519_SCALARBYTES' bytes"
  )

  const res = binding.extension_tweak_ed25519_keypair_add(pk, scalarOut, scalarIn, tweak)

  if (res !== 0) throw new Error('failed to add tweak to keypair')
}

exports.extension_pbkdf2_sha512_async = function (out, passwd, salt, iter, outlen, callback) {
  assert(
    iter >= binding.extension_pbkdf2_sha512_ITERATIONS_MIN,
    "iter must be at least 'extension_pbkdf2_sha512_ITERATIONS_MIN'"
  )
  assert(
    outlen <= binding.extension_pbkdf2_sha512_BYTES_MAX,
    "outlen must be at most 'extension_pbkdf2_sha512_BYTES_MAX'"
  )
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(out.byteLength >= outlen, "out must be at least 'outlen' bytes")
  assert(out.byteLength > 0, 'out must not be empty')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(passwd.byteLength > 0, 'passwd must not be empty')
  assert(ArrayBuffer.isView(salt), 'salt must be a typed array')
  assert(salt.byteLength > 0, 'salt must not be empty')

  const [done, promise] = checkStatus(callback)

  binding.extension_pbkdf2_sha512_async(
    out.buffer,
    out.byteOffset,
    out.byteLength,

    passwd.buffer,
    passwd.byteOffset,
    passwd.byteLength,

    salt.buffer,
    salt.byteOffset,
    salt.byteLength,

    iter,
    outlen,

    done
  )

  return promise
}

exports.extension_pbkdf2_sha512 = function (out, passwd, salt, iter, outlen) {
  assert(
    iter >= binding.extension_pbkdf2_sha512_ITERATIONS_MIN,
    "iter must be at least 'extension_pbkdf2_sha512_ITERATIONS_MIN'"
  )
  assert(
    outlen <= binding.extension_pbkdf2_sha512_BYTES_MAX,
    "outlen must be at most 'extension_pbkdf2_sha512_BYTES_MAX'"
  )
  assert(ArrayBuffer.isView(out), 'out must be a typed array')
  assert(out.byteLength >= outlen, "out must be at least 'outlen' bytes")
  assert(out.byteLength > 0, 'out must not be empty')
  assert(ArrayBuffer.isView(passwd), 'passwd must be a typed array')
  assert(passwd.byteLength > 0, 'passwd must not be empty')
  assert(ArrayBuffer.isView(salt), 'salt must be a typed array')
  assert(salt.byteLength > 0, 'salt must not be empty')

  const res = binding.extension_pbkdf2_sha512(out, passwd, salt, iter, outlen)

  if (res !== 0) throw new Error('failed to add tweak to public key')
}

function checkStatus(callback, booleanResult = false) {
  let done, promise

  if (typeof callback === 'function') {
    done = function (status) {
      if (booleanResult) callback(null, status === 0)
      else if (status === 0) callback(null)
      else callback(new Error('status: ' + status))
    }
  } else {
    promise = new Promise(function (resolve, reject) {
      done = function (status) {
        if (booleanResult) resolve(status === 0)
        else if (status === 0) resolve()
        else reject(new Error('status: ' + status))
      }
    })
  }

  return [done, promise]
}
{
  "name": "sodium-native",
  "version": "5.1.0",
  "description": "Low level bindings for libsodium",
  "main": "index.js",
  "files": [
    "index.js",
    "binding.cc",
    "binding.js",
    "extensions",
    "prebuilds",
    "CMakeLists.txt"
  ],
  "imports": {
    "assert": {
      "bare": "bare-assert",
      "node": "assert"
    }
  },
  "addon": true,
  "dependencies": {
    "bare-assert": "^1.2.0",
    "require-addon": "^1.1.0",
    "which-runtime": "^1.2.1"
  },
  "devDependencies": {
    "bare-compat-napi": "^1.3.5",
    "brittle": "^3.16.2",
    "cmake-bare": "^1.6.1",
    "cmake-fetch": "^1.4.3",
    "cmake-napi": "^1.2.1",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0"
  },
  "scripts": {
    "test": "prettier . --check && npm run test:node && npm run test:bare",
    "test:node": "node test/all.js",
    "test:bare": "bare test/all.js"
  },
  "standard": {
    "ignore": [
      "/test/fixtures/*.js"
    ]
  },
  "engines": {
    "bare": ">=1.16.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/sodium-native.git"
  },
  "contributors": [
    "Emil Bay <github@tixz.dk> (http://bayes.dk)",
    "Mathias Buus <mathiasbuus@gmail.com> (https://mafinto.sh)",
    "Christophe Diederichs <chm-diederichs@hyperdivision.dk>"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/holepunchto/sodium-native/issues"
  },
  "homepage": "https://github.com/holepunchto/sodium-native"
}
const sodium = require('sodium-universal')
const b4a = require('b4a')

const ABYTES = sodium.crypto_secretstream_xchacha20poly1305_ABYTES
const TAG_MESSAGE = sodium.crypto_secretstream_xchacha20poly1305_TAG_MESSAGE
const TAG_FINAL = sodium.crypto_secretstream_xchacha20poly1305_TAG_FINAL
const STATEBYTES = sodium.crypto_secretstream_xchacha20poly1305_STATEBYTES
const HEADERBYTES = sodium.crypto_secretstream_xchacha20poly1305_HEADERBYTES
const KEYBYTES = sodium.crypto_secretstream_xchacha20poly1305_KEYBYTES
const TAG_FINAL_BYTE = b4a.isBuffer(TAG_FINAL) ? TAG_FINAL[0] : TAG_FINAL

const EMPTY = b4a.alloc(0)
const TAG = b4a.alloc(1)

class Push {
  constructor (key, state = b4a.allocUnsafeSlow(STATEBYTES), header = b4a.allocUnsafeSlow(HEADERBYTES)) {
    if (!TAG_FINAL) throw new Error('JavaScript sodium version needs to support crypto_secretstream_xchacha20poly')

    this.key = key
    this.state = state
    this.header = header

    sodium.crypto_secretstream_xchacha20poly1305_init_push(this.state, this.header, this.key)
  }

  next (message, cipher = b4a.allocUnsafe(message.byteLength + ABYTES)) {
    sodium.crypto_secretstream_xchacha20poly1305_push(this.state, cipher, message, null, TAG_MESSAGE)
    return cipher
  }

  final (message = EMPTY, cipher = b4a.allocUnsafe(ABYTES)) {
    sodium.crypto_secretstream_xchacha20poly1305_push(this.state, cipher, message, null, TAG_FINAL)
    return cipher
  }
}

class Pull {
  constructor (key, state = b4a.allocUnsafeSlow(STATEBYTES)) {
    if (!TAG_FINAL) throw new Error('JavaScript sodium version needs to support crypto_secretstream_xchacha20poly')

    this.key = key
    this.state = state
    this.final = false
  }

  init (header) {
    sodium.crypto_secretstream_xchacha20poly1305_init_pull(this.state, header, this.key)
  }

  next (cipher, message = b4a.allocUnsafe(cipher.byteLength - ABYTES)) {
    sodium.crypto_secretstream_xchacha20poly1305_pull(this.state, message, TAG, cipher, null)
    this.final = TAG[0] === TAG_FINAL_BYTE
    return message
  }
}

function keygen (buf = b4a.alloc(KEYBYTES)) {
  sodium.crypto_secretstream_xchacha20poly1305_keygen(buf)
  return buf
}

module.exports = {
  keygen,
  KEYBYTES,
  ABYTES,
  STATEBYTES,
  HEADERBYTES,
  Push,
  Pull
}
{
  "name": "sodium-secretstream",
  "version": "1.2.0",
  "description": "Wraps libsodiums secretstream in a higher level abstraction",
  "main": "index.js",
  "dependencies": {
    "b4a": "^1.1.1",
    "sodium-universal": "^5.0.0"
  },
  "devDependencies": {
    "standard": "^17.0.0"
  },
  "scripts": {
    "test": "standard"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/sodium-secretstream.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/sodium-secretstream/issues"
  },
  "homepage": "https://github.com/mafintosh/sodium-secretstream"
}
module.exports = require('sodium-native')
{
  "name": "sodium-universal",
  "version": "5.0.1",
  "description": "Universal wrapper for sodium-javascript and sodium-native working in Node.js and the Browser",
  "main": "index.js",
  "dependencies": {
    "sodium-native": "^5.0.1"
  },
  "peerDependencies": {
    "sodium-javascript": "~0.8.0"
  },
  "peerDependenciesMeta": {
    "sodium-javascript": {
      "optional": true
    }
  },
  "scripts": {
    "prepublish": "./build-scripts/generate.js"
  },
  "browser": {
    "sodium-native": "sodium-javascript"
  },
  "browserify": {
    "transform": [
      "./build-scripts/transform.js"
    ]
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/sodium-universal.git"
  },
  "keywords": [
    "libsodium",
    "sodium",
    "sodium-native",
    "sodium-javascript",
    "browserify"
  ],
  "contributors": [
    "Emil Bay <github@tixz.dk> (http://bayes.dk)",
    "Mathias Buus <mathiasbuus@gmail.com> (https://mafinto.sh)",
    "Christophe Diederichs <chm-diederichs@hyperdivision.dk>"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/holepunchto/sodium-universal/issues"
  },
  "homepage": "https://github.com/holepunchto/sodium-universal#readme"
}
const { EventEmitter } = require('events-universal')
const FIFO = require('fast-fifo')
const TextDecoder = require('text-decoder')

const StreamError = require('./lib/errors.js')

// if we do a future major, expect queue microtask to be there always, for now a bit defensive
const qmt =
  typeof queueMicrotask === 'undefined' ? (fn) => global.process.nextTick(fn) : queueMicrotask

// 29 bits used total (4 from shared, 14 from read, and 11 from write)
const MAX = (1 << 29) - 1

// Shared state
const OPENING = 0b0001
const PREDESTROYING = 0b0010
const DESTROYING = 0b0100
const DESTROYED = 0b1000

const NOT_OPENING = MAX ^ OPENING
const NOT_PREDESTROYING = MAX ^ PREDESTROYING

// Read state (4 bit offset from shared state)
const READ_ACTIVE = 0b00000000000001 << 4
const READ_UPDATING = 0b00000000000010 << 4
const READ_PRIMARY = 0b00000000000100 << 4
const READ_QUEUED = 0b00000000001000 << 4
const READ_RESUMED = 0b00000000010000 << 4
const READ_PIPE_DRAINED = 0b00000000100000 << 4
const READ_ENDING = 0b00000001000000 << 4
const READ_EMIT_DATA = 0b00000010000000 << 4
const READ_EMIT_READABLE = 0b00000100000000 << 4
const READ_EMITTED_READABLE = 0b00001000000000 << 4
const READ_DONE = 0b00010000000000 << 4
const READ_NEXT_TICK = 0b00100000000000 << 4
const READ_NEEDS_PUSH = 0b01000000000000 << 4
const READ_READ_AHEAD = 0b10000000000000 << 4

// Combined read state
const READ_FLOWING = READ_RESUMED | READ_PIPE_DRAINED
const READ_ACTIVE_AND_NEEDS_PUSH = READ_ACTIVE | READ_NEEDS_PUSH
const READ_PRIMARY_AND_ACTIVE = READ_PRIMARY | READ_ACTIVE
const READ_EMIT_READABLE_AND_QUEUED = READ_EMIT_READABLE | READ_QUEUED
const READ_RESUMED_READ_AHEAD = READ_RESUMED | READ_READ_AHEAD

const READ_NOT_ACTIVE = MAX ^ READ_ACTIVE
const READ_NON_PRIMARY = MAX ^ READ_PRIMARY
const READ_NON_PRIMARY_AND_PUSHED = MAX ^ (READ_PRIMARY | READ_NEEDS_PUSH)
const READ_PUSHED = MAX ^ READ_NEEDS_PUSH
const READ_PAUSED = MAX ^ READ_RESUMED
const READ_NOT_QUEUED = MAX ^ (READ_QUEUED | READ_EMITTED_READABLE)
const READ_NOT_ENDING = MAX ^ READ_ENDING
const READ_PIPE_NOT_DRAINED = MAX ^ READ_FLOWING
const READ_NOT_NEXT_TICK = MAX ^ READ_NEXT_TICK
const READ_NOT_UPDATING = MAX ^ READ_UPDATING
const READ_NO_READ_AHEAD = MAX ^ READ_READ_AHEAD
const READ_PAUSED_NO_READ_AHEAD = MAX ^ READ_RESUMED_READ_AHEAD

// Write state (18 bit offset, 4 bit offset from shared state and 14 from read state)
const WRITE_ACTIVE = 0b00000000001 << 18
const WRITE_UPDATING = 0b00000000010 << 18
const WRITE_PRIMARY = 0b00000000100 << 18
const WRITE_QUEUED = 0b00000001000 << 18
const WRITE_UNDRAINED = 0b00000010000 << 18
const WRITE_DONE = 0b00000100000 << 18
const WRITE_EMIT_DRAIN = 0b00001000000 << 18
const WRITE_NEXT_TICK = 0b00010000000 << 18
const WRITE_WRITING = 0b00100000000 << 18
const WRITE_FINISHING = 0b01000000000 << 18
const WRITE_CORKED = 0b10000000000 << 18

const WRITE_NOT_ACTIVE = MAX ^ (WRITE_ACTIVE | WRITE_WRITING)
const WRITE_NON_PRIMARY = MAX ^ WRITE_PRIMARY
const WRITE_NOT_FINISHING = MAX ^ (WRITE_ACTIVE | WRITE_FINISHING)
const WRITE_DRAINED = MAX ^ WRITE_UNDRAINED
const WRITE_NOT_QUEUED = MAX ^ WRITE_QUEUED
const WRITE_NOT_NEXT_TICK = MAX ^ WRITE_NEXT_TICK
const WRITE_NOT_UPDATING = MAX ^ WRITE_UPDATING
const WRITE_NOT_CORKED = MAX ^ WRITE_CORKED

// Combined shared state
const ACTIVE = READ_ACTIVE | WRITE_ACTIVE
const NOT_ACTIVE = MAX ^ ACTIVE
const DONE = READ_DONE | WRITE_DONE
const DESTROY_STATUS = DESTROYING | DESTROYED | PREDESTROYING
const OPEN_STATUS = DESTROY_STATUS | OPENING
const AUTO_DESTROY = DESTROY_STATUS | DONE
const NON_PRIMARY = WRITE_NON_PRIMARY & READ_NON_PRIMARY
const ACTIVE_OR_TICKING = WRITE_NEXT_TICK | READ_NEXT_TICK
const TICKING = ACTIVE_OR_TICKING & NOT_ACTIVE
const IS_OPENING = OPEN_STATUS | TICKING

// Combined shared state and read state
const READ_PRIMARY_STATUS = OPEN_STATUS | READ_ENDING | READ_DONE
const READ_STATUS = OPEN_STATUS | READ_DONE | READ_QUEUED
const READ_ENDING_STATUS = OPEN_STATUS | READ_ENDING | READ_QUEUED
const READ_READABLE_STATUS = OPEN_STATUS | READ_EMIT_READABLE | READ_QUEUED | READ_EMITTED_READABLE
const SHOULD_NOT_READ =
  OPEN_STATUS | READ_ACTIVE | READ_ENDING | READ_DONE | READ_NEEDS_PUSH | READ_READ_AHEAD
const READ_BACKPRESSURE_STATUS = DESTROY_STATUS | READ_ENDING | READ_DONE
const READ_UPDATE_SYNC_STATUS = READ_UPDATING | OPEN_STATUS | READ_NEXT_TICK | READ_PRIMARY
const READ_NEXT_TICK_OR_OPENING = READ_NEXT_TICK | OPENING

// Combined write state
const WRITE_PRIMARY_STATUS = OPEN_STATUS | WRITE_FINISHING | WRITE_DONE
const WRITE_QUEUED_AND_UNDRAINED = WRITE_QUEUED | WRITE_UNDRAINED
const WRITE_QUEUED_AND_ACTIVE = WRITE_QUEUED | WRITE_ACTIVE
const WRITE_DRAIN_STATUS = WRITE_QUEUED | WRITE_UNDRAINED | OPEN_STATUS | WRITE_ACTIVE
const WRITE_STATUS = OPEN_STATUS | WRITE_ACTIVE | WRITE_QUEUED | WRITE_CORKED
const WRITE_PRIMARY_AND_ACTIVE = WRITE_PRIMARY | WRITE_ACTIVE
const WRITE_ACTIVE_AND_WRITING = WRITE_ACTIVE | WRITE_WRITING
const WRITE_FINISHING_STATUS = OPEN_STATUS | WRITE_FINISHING | WRITE_QUEUED_AND_ACTIVE | WRITE_DONE
const WRITE_BACKPRESSURE_STATUS = WRITE_UNDRAINED | DESTROY_STATUS | WRITE_FINISHING | WRITE_DONE
const WRITE_UPDATE_SYNC_STATUS = WRITE_UPDATING | OPEN_STATUS | WRITE_NEXT_TICK | WRITE_PRIMARY
const WRITE_DROP_DATA = WRITE_FINISHING | WRITE_DONE | DESTROY_STATUS

const asyncIterator = Symbol.asyncIterator || Symbol('asyncIterator')

class WritableState {
  constructor(
    stream,
    { highWaterMark = 16384, map = null, mapWritable, byteLength, byteLengthWritable } = {}
  ) {
    this.stream = stream
    this.queue = new FIFO()
    this.highWaterMark = highWaterMark
    this.buffered = 0
    this.error = null
    this.pipeline = null
    this.drains = null // if we add more seldomly used helpers we might them into a subobject so its a single ptr
    this.byteLength = byteLengthWritable || byteLength || defaultByteLength
    this.map = mapWritable || map
    this.afterWrite = afterWrite.bind(this)
    this.afterUpdateNextTick = updateWriteNT.bind(this)
  }

  get ending() {
    return (this.stream._duplexState & WRITE_FINISHING) !== 0
  }

  get ended() {
    return (this.stream._duplexState & WRITE_DONE) !== 0
  }

  push(data) {
    if ((this.stream._duplexState & WRITE_DROP_DATA) !== 0) return false
    if (this.map !== null) data = this.map(data)

    this.buffered += this.byteLength(data)
    this.queue.push(data)

    if (this.buffered < this.highWaterMark) {
      this.stream._duplexState |= WRITE_QUEUED
      return true
    }

    this.stream._duplexState |= WRITE_QUEUED_AND_UNDRAINED
    return false
  }

  shift() {
    const data = this.queue.shift()

    this.buffered -= this.byteLength(data)
    if (this.buffered === 0) this.stream._duplexState &= WRITE_NOT_QUEUED

    return data
  }

  end(data) {
    if (typeof data === 'function') {
      this.stream.once('finish', data)
    } else if (data !== undefined && data !== null) {
      this.push(data)
    }

    this.stream._duplexState = (this.stream._duplexState | WRITE_FINISHING) & WRITE_NON_PRIMARY
  }

  autoBatch(data, cb) {
    const buffer = []
    const stream = this.stream

    buffer.push(data)
    while ((stream._duplexState & WRITE_STATUS) === WRITE_QUEUED_AND_ACTIVE) {
      buffer.push(stream._writableState.shift())
    }

    if ((stream._duplexState & OPEN_STATUS) !== 0) return cb(null)
    stream._writev(buffer, cb)
  }

  update() {
    const stream = this.stream

    stream._duplexState |= WRITE_UPDATING

    do {
      while ((stream._duplexState & WRITE_STATUS) === WRITE_QUEUED) {
        const data = this.shift()
        stream._duplexState |= WRITE_ACTIVE_AND_WRITING
        stream._write(data, this.afterWrite)
      }

      if ((stream._duplexState & WRITE_PRIMARY_AND_ACTIVE) === 0) this.updateNonPrimary()
    } while (this.continueUpdate() === true)

    stream._duplexState &= WRITE_NOT_UPDATING
  }

  updateNonPrimary() {
    const stream = this.stream

    if ((stream._duplexState & WRITE_FINISHING_STATUS) === WRITE_FINISHING) {
      stream._duplexState = stream._duplexState | WRITE_ACTIVE
      stream._final(afterFinal.bind(this))
      return
    }

    if ((stream._duplexState & DESTROY_STATUS) === DESTROYING) {
      if ((stream._duplexState & ACTIVE_OR_TICKING) === 0) {
        stream._duplexState |= ACTIVE
        stream._destroy(afterDestroy.bind(this))
      }
      return
    }

    if ((stream._duplexState & IS_OPENING) === OPENING) {
      stream._duplexState = (stream._duplexState | ACTIVE) & NOT_OPENING
      stream._open(afterOpen.bind(this))
    }
  }

  continueUpdate() {
    if ((this.stream._duplexState & WRITE_NEXT_TICK) === 0) return false
    this.stream._duplexState &= WRITE_NOT_NEXT_TICK
    return true
  }

  updateCallback() {
    if ((this.stream._duplexState & WRITE_UPDATE_SYNC_STATUS) === WRITE_PRIMARY) {
      this.update()
    } else {
      this.updateNextTick()
    }
  }

  updateNextTick() {
    if ((this.stream._duplexState & WRITE_NEXT_TICK) !== 0) return
    this.stream._duplexState |= WRITE_NEXT_TICK
    if ((this.stream._duplexState & WRITE_UPDATING) === 0) qmt(this.afterUpdateNextTick)
  }
}

class ReadableState {
  constructor(
    stream,
    { highWaterMark = 16384, map = null, mapReadable, byteLength, byteLengthReadable } = {}
  ) {
    this.stream = stream
    this.queue = new FIFO()
    this.highWaterMark = highWaterMark === 0 ? 1 : highWaterMark
    this.buffered = 0
    this.readAhead = highWaterMark > 0
    this.error = null
    this.pipeline = null
    this.byteLength = byteLengthReadable || byteLength || defaultByteLength
    this.map = mapReadable || map
    this.pipeTo = null
    this.afterRead = afterRead.bind(this)
    this.afterUpdateNextTick = updateReadNT.bind(this)
  }

  get ending() {
    return (this.stream._duplexState & READ_ENDING) !== 0
  }

  get ended() {
    return (this.stream._duplexState & READ_DONE) !== 0
  }

  pipe(pipeTo, cb) {
    if (this.pipeTo !== null) throw StreamError.BAD_ARGUMENT('Can only pipe to one destination')
    if (typeof cb !== 'function') cb = null

    this.stream._duplexState |= READ_PIPE_DRAINED
    this.pipeTo = pipeTo
    this.pipeline = new Pipeline(this.stream, pipeTo, cb)

    if (cb) this.stream.on('error', noop) // We already error handle this so supress crashes

    if (isStreamx(pipeTo)) {
      pipeTo._writableState.pipeline = this.pipeline
      if (cb) pipeTo.on('error', noop) // We already error handle this so supress crashes
      pipeTo.on('finish', this.pipeline.finished.bind(this.pipeline)) // TODO: just call finished from pipeTo itself
    } else {
      const onerror = this.pipeline.done.bind(this.pipeline, pipeTo)
      const onclose = this.pipeline.done.bind(this.pipeline, pipeTo, null) // onclose has a weird bool arg
      pipeTo.on('error', onerror)
      pipeTo.on('close', onclose)
      pipeTo.on('finish', this.pipeline.finished.bind(this.pipeline))
    }

    pipeTo.on('drain', afterDrain.bind(this))
    this.stream.emit('piping', pipeTo)
    pipeTo.emit('pipe', this.stream)
  }

  push(data) {
    const stream = this.stream

    if (data === null) {
      this.highWaterMark = 0
      stream._duplexState = (stream._duplexState | READ_ENDING) & READ_NON_PRIMARY_AND_PUSHED
      return false
    }

    if (this.map !== null) {
      data = this.map(data)
      if (data === null) {
        stream._duplexState &= READ_PUSHED
        return this.buffered < this.highWaterMark
      }
    }

    this.buffered += this.byteLength(data)
    this.queue.push(data)

    stream._duplexState = (stream._duplexState | READ_QUEUED) & READ_PUSHED

    return this.buffered < this.highWaterMark
  }

  shift() {
    const data = this.queue.shift()

    this.buffered -= this.byteLength(data)
    if (this.buffered === 0) {
      this.stream._duplexState &= READ_NOT_QUEUED
    }

    return data
  }

  unshift(data) {
    const pending = [this.map !== null ? this.map(data) : data]
    while (this.buffered > 0) pending.push(this.shift())

    for (let i = 0; i < pending.length - 1; i++) {
      const data = pending[i]
      this.buffered += this.byteLength(data)
      this.queue.push(data)
    }

    this.push(pending[pending.length - 1])
  }

  read() {
    const stream = this.stream

    if ((stream._duplexState & READ_STATUS) === READ_QUEUED) {
      const data = this.shift()

      if (this.pipeTo !== null && this.pipeTo.write(data) === false) {
        stream._duplexState &= READ_PIPE_NOT_DRAINED
      }

      if ((stream._duplexState & READ_EMIT_DATA) !== 0) {
        stream.emit('data', data)
      }

      return data
    }

    if (this.readAhead === false) {
      stream._duplexState |= READ_READ_AHEAD
      this.updateNextTick()
    }

    return null
  }

  drain() {
    const stream = this.stream

    while (
      (stream._duplexState & READ_STATUS) === READ_QUEUED &&
      (stream._duplexState & READ_FLOWING) !== 0
    ) {
      const data = this.shift()

      if (this.pipeTo !== null && this.pipeTo.write(data) === false) {
        stream._duplexState &= READ_PIPE_NOT_DRAINED
      }

      if ((stream._duplexState & READ_EMIT_DATA) !== 0) {
        stream.emit('data', data)
      }
    }
  }

  update() {
    const stream = this.stream

    stream._duplexState |= READ_UPDATING

    do {
      this.drain()

      while (
        this.buffered < this.highWaterMark &&
        (stream._duplexState & SHOULD_NOT_READ) === READ_READ_AHEAD
      ) {
        stream._duplexState |= READ_ACTIVE_AND_NEEDS_PUSH
        stream._read(this.afterRead)
        this.drain()
      }

      if ((stream._duplexState & READ_READABLE_STATUS) === READ_EMIT_READABLE_AND_QUEUED) {
        stream._duplexState |= READ_EMITTED_READABLE
        stream.emit('readable')
      }

      if ((stream._duplexState & READ_PRIMARY_AND_ACTIVE) === 0) {
        this.updateNonPrimary()
      }
    } while (this.continueUpdate() === true)

    stream._duplexState &= READ_NOT_UPDATING
  }

  updateNonPrimary() {
    const stream = this.stream

    if ((stream._duplexState & READ_ENDING_STATUS) === READ_ENDING) {
      stream._duplexState = (stream._duplexState | READ_DONE) & READ_NOT_ENDING
      stream.emit('end')

      if ((stream._duplexState & AUTO_DESTROY) === DONE) {
        stream._duplexState |= DESTROYING
      }

      if (this.pipeTo !== null) {
        this.pipeTo.end()
      }
    }

    if ((stream._duplexState & DESTROY_STATUS) === DESTROYING) {
      if ((stream._duplexState & ACTIVE_OR_TICKING) === 0) {
        stream._duplexState |= ACTIVE
        stream._destroy(afterDestroy.bind(this))
      }
      return
    }

    if ((stream._duplexState & IS_OPENING) === OPENING) {
      stream._duplexState = (stream._duplexState | ACTIVE) & NOT_OPENING
      stream._open(afterOpen.bind(this))
    }
  }

  continueUpdate() {
    if ((this.stream._duplexState & READ_NEXT_TICK) === 0) return false
    this.stream._duplexState &= READ_NOT_NEXT_TICK
    return true
  }

  updateCallback() {
    if ((this.stream._duplexState & READ_UPDATE_SYNC_STATUS) === READ_PRIMARY) {
      this.update()
    } else {
      this.updateNextTick()
    }
  }

  updateNextTickIfOpen() {
    if ((this.stream._duplexState & READ_NEXT_TICK_OR_OPENING) !== 0) return
    this.stream._duplexState |= READ_NEXT_TICK
    if ((this.stream._duplexState & READ_UPDATING) === 0) qmt(this.afterUpdateNextTick)
  }

  updateNextTick() {
    if ((this.stream._duplexState & READ_NEXT_TICK) !== 0) return
    this.stream._duplexState |= READ_NEXT_TICK
    if ((this.stream._duplexState & READ_UPDATING) === 0) qmt(this.afterUpdateNextTick)
  }
}

class TransformState {
  constructor(stream) {
    this.data = null
    this.afterTransform = afterTransform.bind(stream)
    this.afterFinal = null
  }
}

class Pipeline {
  constructor(src, dst, cb) {
    this.from = src
    this.to = dst
    this.afterPipe = cb
    this.error = null
    this.pipeToFinished = false
  }

  finished() {
    this.pipeToFinished = true
  }

  done(stream, err) {
    if (err) this.error = err

    if (stream === this.to) {
      this.to = null

      if (this.from !== null) {
        if ((this.from._duplexState & READ_DONE) === 0 || !this.pipeToFinished) {
          this.from.destroy(this.error || StreamError.PREMATURE_CLOSE('Writable stream closed'))
        }
        return
      }
    }

    if (stream === this.from) {
      this.from = null

      if (this.to !== null) {
        if ((stream._duplexState & READ_DONE) === 0) {
          this.to.destroy(this.error || StreamError.PREMATURE_CLOSE('Readable stream closed'))
        }
        return
      }
    }

    if (this.afterPipe !== null) this.afterPipe(this.error)
    this.to = this.from = this.afterPipe = null
  }
}

function afterDrain() {
  this.stream._duplexState |= READ_PIPE_DRAINED
  this.updateCallback()
}

function afterFinal(err) {
  const stream = this.stream
  if (err) stream.destroy(err)

  if ((stream._duplexState & DESTROY_STATUS) === 0) {
    stream._duplexState |= WRITE_DONE
    stream.emit('finish')
  }

  if ((stream._duplexState & AUTO_DESTROY) === DONE) {
    stream._duplexState |= DESTROYING
  }

  stream._duplexState &= WRITE_NOT_FINISHING

  // no need to wait the extra tick here, so we short circuit that
  if ((stream._duplexState & WRITE_UPDATING) === 0) {
    this.update()
  } else {
    this.updateNextTick()
  }
}

function afterDestroy(err) {
  const stream = this.stream

  if (!err && !StreamError.isStreamDestroyed(this.error)) err = this.error
  if (err) stream.emit('error', err)

  stream._duplexState |= DESTROYED
  stream.emit('close')

  const rs = stream._readableState
  const ws = stream._writableState

  if (rs !== null && rs.pipeline !== null) {
    rs.pipeline.done(stream, err)
  }

  if (ws !== null) {
    while (ws.drains !== null && ws.drains.length > 0) {
      ws.drains.shift().resolve(false)
    }

    if (ws.pipeline !== null) {
      ws.pipeline.done(stream, err)
    }
  }
}

function afterWrite(err) {
  const stream = this.stream

  if (err) stream.destroy(err)
  stream._duplexState &= WRITE_NOT_ACTIVE

  if (this.drains !== null) tickDrains(this.drains)

  if ((stream._duplexState & WRITE_DRAIN_STATUS) === WRITE_UNDRAINED) {
    stream._duplexState &= WRITE_DRAINED

    if ((stream._duplexState & WRITE_EMIT_DRAIN) === WRITE_EMIT_DRAIN) {
      stream.emit('drain')
    }
  }

  this.updateCallback()
}

function afterRead(err) {
  if (err) this.stream.destroy(err)
  this.stream._duplexState &= READ_NOT_ACTIVE

  if (this.readAhead === false && (this.stream._duplexState & READ_RESUMED) === 0) {
    this.stream._duplexState &= READ_NO_READ_AHEAD
  }

  this.updateCallback()
}

function updateReadNT() {
  if ((this.stream._duplexState & READ_UPDATING) === 0) {
    this.stream._duplexState &= READ_NOT_NEXT_TICK
    this.update()
  }
}

function updateWriteNT() {
  if ((this.stream._duplexState & WRITE_UPDATING) === 0) {
    this.stream._duplexState &= WRITE_NOT_NEXT_TICK
    this.update()
  }
}

function tickDrains(drains) {
  for (let i = 0; i < drains.length; i++) {
    // drains.writes are monotonic, so if one is 0 its always the first one
    if (--drains[i].writes === 0) {
      drains.shift().resolve(true)
      i--
    }
  }
}

function afterOpen(err) {
  const stream = this.stream

  if (err) stream.destroy(err)

  if ((stream._duplexState & DESTROYING) === 0) {
    if ((stream._duplexState & READ_PRIMARY_STATUS) === 0) {
      stream._duplexState |= READ_PRIMARY
    }

    if ((stream._duplexState & WRITE_PRIMARY_STATUS) === 0) {
      stream._duplexState |= WRITE_PRIMARY
    }

    stream.emit('open')
  }

  stream._duplexState &= NOT_ACTIVE

  if (stream._writableState !== null) {
    stream._writableState.updateCallback()
  }

  if (stream._readableState !== null) {
    stream._readableState.updateCallback()
  }
}

function afterTransform(err, data) {
  if (data !== undefined && data !== null) this.push(data)
  this._writableState.afterWrite(err)
}

function newListener(name) {
  if (this._readableState !== null) {
    if (name === 'data') {
      this._duplexState |= READ_EMIT_DATA | READ_RESUMED_READ_AHEAD
      this._readableState.updateNextTick()
    }
    if (name === 'readable') {
      this._duplexState |= READ_EMIT_READABLE
      this._readableState.updateNextTick()
    }
  }

  if (this._writableState !== null) {
    if (name === 'drain') {
      this._duplexState |= WRITE_EMIT_DRAIN
      this._writableState.updateNextTick()
    }
  }
}

class Stream extends EventEmitter {
  constructor(opts) {
    super()

    this._duplexState = 0
    this._readableState = null
    this._writableState = null

    if (opts) {
      if (opts.open) this._open = opts.open
      if (opts.destroy) this._destroy = opts.destroy
      if (opts.predestroy) this._predestroy = opts.predestroy
      if (opts.signal) opts.signal.addEventListener('abort', abort.bind(this))
    }

    this.on('newListener', newListener)
  }

  _open(cb) {
    cb(null)
  }

  _destroy(cb) {
    cb(null)
  }

  _predestroy() {
    // does nothing
  }

  get readable() {
    return this._readableState !== null ? true : undefined
  }

  get writable() {
    return this._writableState !== null ? true : undefined
  }

  get destroyed() {
    return (this._duplexState & DESTROYED) !== 0
  }

  get destroying() {
    return (this._duplexState & DESTROY_STATUS) !== 0
  }

  destroy(err) {
    if ((this._duplexState & DESTROY_STATUS) === 0) {
      if (!err) err = StreamError.STREAM_DESTROYED()
      this._duplexState = (this._duplexState | DESTROYING) & NON_PRIMARY

      if (this._readableState !== null) {
        this._readableState.highWaterMark = 0
        this._readableState.error = err
      }

      if (this._writableState !== null) {
        this._writableState.highWaterMark = 0
        this._writableState.error = err
      }

      this._duplexState |= PREDESTROYING
      this._predestroy()
      this._duplexState &= NOT_PREDESTROYING

      if (this._readableState !== null) {
        this._readableState.updateNextTick()
      }

      if (this._writableState !== null) {
        this._writableState.updateNextTick()
      }
    }
  }
}

class Readable extends Stream {
  constructor(opts) {
    super(opts)

    this._duplexState |= OPENING | WRITE_DONE | READ_READ_AHEAD
    this._readableState = new ReadableState(this, opts)

    if (opts) {
      if (this._readableState.readAhead === false) this._duplexState &= READ_NO_READ_AHEAD
      if (opts.read) this._read = opts.read
      if (opts.eagerOpen) this._readableState.updateNextTick()
      if (opts.encoding) this.setEncoding(opts.encoding)
    }
  }

  static deferred(fn, opts) {
    const out = new PassThrough(opts)

    fn()
      .then((src) => {
        if (src === null) return out.end()
        if (out.destroying) return
        pipeline(src, out, noop)
      })
      .catch((err) => out.destroy(err))

    return out
  }

  setEncoding(encoding) {
    const dec = new TextDecoder(encoding)
    const map = this._readableState.map || echo
    this._readableState.map = mapOrSkip
    return this

    function mapOrSkip(data) {
      const next = dec.push(data)
      return next === '' && (data.byteLength !== 0 || dec.remaining > 0) ? null : map(next)
    }
  }

  _read(cb) {
    cb(null)
  }

  pipe(dest, cb) {
    this._readableState.updateNextTick()
    this._readableState.pipe(dest, cb)
    return dest
  }

  read() {
    this._readableState.updateNextTick()
    return this._readableState.read()
  }

  push(data) {
    this._readableState.updateNextTickIfOpen()
    return this._readableState.push(data)
  }

  unshift(data) {
    this._readableState.updateNextTickIfOpen()
    return this._readableState.unshift(data)
  }

  resume() {
    this._duplexState |= READ_RESUMED_READ_AHEAD
    this._readableState.updateNextTick()
    return this
  }

  pause() {
    this._duplexState &=
      this._readableState.readAhead === false ? READ_PAUSED_NO_READ_AHEAD : READ_PAUSED
    return this
  }

  static _fromAsyncIterator(ite, opts) {
    let destroy

    const rs = new Readable({
      ...opts,
      read(cb) {
        ite.next().then(push).then(cb.bind(null, null)).catch(cb)
      },
      predestroy() {
        destroy = ite.return()
      },
      destroy(cb) {
        if (!destroy) return cb(null)
        destroy.then(cb.bind(null, null)).catch(cb)
      }
    })

    return rs

    function push(data) {
      if (data.done) rs.push(null)
      else rs.push(data.value)
    }
  }

  static from(data, opts) {
    if (isReadStreamx(data)) return data
    if (data[asyncIterator]) return this._fromAsyncIterator(data[asyncIterator](), opts)
    if (!Array.isArray(data)) data = data === undefined ? [] : [data]

    let i = 0
    return new Readable({
      ...opts,
      read(cb) {
        this.push(i === data.length ? null : data[i++])
        cb(null)
      }
    })
  }

  static isBackpressured(rs) {
    return (
      (rs._duplexState & READ_BACKPRESSURE_STATUS) !== 0 ||
      rs._readableState.buffered >= rs._readableState.highWaterMark
    )
  }

  static isPaused(rs) {
    return (rs._duplexState & READ_RESUMED) === 0
  }

  [asyncIterator]() {
    const stream = this

    let error = null
    let promiseResolve = null
    let promiseReject = null

    this.on('error', (err) => {
      error = err
    })
    this.on('readable', onreadable)
    this.on('close', onclose)

    return {
      [asyncIterator]() {
        return this
      },
      next() {
        return new Promise(function (resolve, reject) {
          promiseResolve = resolve
          promiseReject = reject
          const data = stream.read()
          if (data !== null) ondata(data)
          else if ((stream._duplexState & DESTROYED) !== 0) ondata(null)
        })
      },
      return() {
        return destroy(null)
      },
      throw(err) {
        return destroy(err)
      }
    }

    function onreadable() {
      if (promiseResolve !== null) ondata(stream.read())
    }

    function onclose() {
      if (promiseResolve !== null) ondata(null)
    }

    function ondata(data) {
      if (promiseReject === null) return
      if (error) {
        promiseReject(error)
      } else if (data === null && (stream._duplexState & READ_DONE) === 0) {
        promiseReject(StreamError.STREAM_DESTROYED())
      } else {
        promiseResolve({ value: data, done: data === null })
      }
      promiseReject = promiseResolve = null
    }

    function destroy(err) {
      stream.destroy(err)
      return new Promise((resolve, reject) => {
        if (stream._duplexState & DESTROYED) return resolve({ value: undefined, done: true })
        stream.once('close', function () {
          if (err) reject(err)
          else resolve({ value: undefined, done: true })
        })
      })
    }
  }
}

class Writable extends Stream {
  constructor(opts) {
    super(opts)

    this._duplexState |= OPENING | READ_DONE
    this._writableState = new WritableState(this, opts)

    if (opts) {
      if (opts.writev) this._writev = opts.writev
      if (opts.write) this._write = opts.write
      if (opts.final) this._final = opts.final
      if (opts.eagerOpen) this._writableState.updateNextTick()
    }
  }

  cork() {
    this._duplexState |= WRITE_CORKED
  }

  uncork() {
    this._duplexState &= WRITE_NOT_CORKED
    this._writableState.updateNextTick()
  }

  _writev(batch, cb) {
    cb(null)
  }

  _write(data, cb) {
    this._writableState.autoBatch(data, cb)
  }

  _final(cb) {
    cb(null)
  }

  static isBackpressured(ws) {
    return (ws._duplexState & WRITE_BACKPRESSURE_STATUS) !== 0
  }

  static drained(ws) {
    if (ws.destroyed) return Promise.resolve(false)

    const state = ws._writableState
    const pending = isWritev(ws) ? Math.min(1, state.queue.length) : state.queue.length
    const writes = pending + (ws._duplexState & WRITE_WRITING ? 1 : 0)
    if (writes === 0) return Promise.resolve(true)

    if (state.drains === null) state.drains = []
    return new Promise((resolve) => {
      state.drains.push({ writes, resolve })
    })
  }

  write(data) {
    this._writableState.updateNextTick()
    return this._writableState.push(data)
  }

  end(data) {
    this._writableState.updateNextTick()
    this._writableState.end(data)
    return this
  }
}

class Duplex extends Readable {
  // and Writable
  constructor(opts) {
    super(opts)

    this._duplexState = OPENING | (this._duplexState & READ_READ_AHEAD)
    this._writableState = new WritableState(this, opts)

    if (opts) {
      if (opts.writev) this._writev = opts.writev
      if (opts.write) this._write = opts.write
      if (opts.final) this._final = opts.final
    }
  }

  cork() {
    this._duplexState |= WRITE_CORKED
  }

  uncork() {
    this._duplexState &= WRITE_NOT_CORKED
    this._writableState.updateNextTick()
  }

  _writev(batch, cb) {
    cb(null)
  }

  _write(data, cb) {
    this._writableState.autoBatch(data, cb)
  }

  _final(cb) {
    cb(null)
  }

  write(data) {
    this._writableState.updateNextTick()
    return this._writableState.push(data)
  }

  end(data) {
    this._writableState.updateNextTick()
    this._writableState.end(data)
    return this
  }
}

class Transform extends Duplex {
  constructor(opts) {
    super(opts)
    this._transformState = new TransformState(this)

    if (opts) {
      if (opts.transform) this._transform = opts.transform
      if (opts.flush) this._flush = opts.flush
    }
  }

  _write(data, cb) {
    if (this._readableState.buffered >= this._readableState.highWaterMark) {
      this._transformState.data = data
    } else {
      this._transform(data, this._transformState.afterTransform)
    }
  }

  _read(cb) {
    if (this._transformState.data !== null) {
      const data = this._transformState.data
      this._transformState.data = null
      cb(null)
      this._transform(data, this._transformState.afterTransform)
    } else {
      cb(null)
    }
  }

  destroy(err) {
    super.destroy(err)
    if (this._transformState.data !== null) {
      this._transformState.data = null
      this._transformState.afterTransform()
    }
  }

  _transform(data, cb) {
    cb(null, data)
  }

  _flush(cb) {
    cb(null)
  }

  _final(cb) {
    this._transformState.afterFinal = cb
    this._flush(transformAfterFlush.bind(this))
  }
}

class PassThrough extends Transform {}

function transformAfterFlush(err, data) {
  const cb = this._transformState.afterFinal
  if (err) return cb(err)

  if (data !== null && data !== undefined) this.push(data)
  this.push(null)
  cb(null)
}

function pipelinePromise(...streams) {
  return new Promise((resolve, reject) => {
    return pipeline(...streams, (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
}

function pipeline(stream, ...streams) {
  const all = Array.isArray(stream) ? [...stream, ...streams] : [stream, ...streams]
  const done = all.length && typeof all[all.length - 1] === 'function' ? all.pop() : null

  if (all.length < 2) throw StreamError.BAD_ARGUMENT('Pipeline requires at least 2 streams')

  let src = all[0]
  let dest = null
  let error = null

  for (let i = 1; i < all.length; i++) {
    dest = all[i]

    if (isStreamx(src)) {
      src.pipe(dest, onerror)
    } else {
      errorHandle(src, true, i > 1, onerror)
      src.pipe(dest)
    }

    src = dest
  }

  if (done) {
    let fin = false

    const autoDestroy =
      isStreamx(dest) || !!(dest._writableState && dest._writableState.autoDestroy)

    dest.on('error', (err) => {
      if (error === null) error = err
    })

    dest.on('finish', () => {
      fin = true
      if (!autoDestroy) done(error)
    })

    if (autoDestroy) {
      dest.on('close', () => done(error || (fin ? null : StreamError.PREMATURE_CLOSE())))
    }
  }

  return dest

  function errorHandle(s, rd, wr, onerror) {
    s.on('error', onerror)
    s.on('close', onclose)

    function onclose() {
      if (rd && s._readableState && !s._readableState.ended) {
        return onerror(StreamError.PREMATURE_CLOSE())
      }
      if (wr && s._writableState && !s._writableState.ended) {
        return onerror(StreamError.PREMATURE_CLOSE())
      }
    }
  }

  function onerror(err) {
    if (!err || error) return
    error = err

    for (const s of all) {
      s.destroy(err)
    }
  }
}

function echo(s) {
  return s
}

function isStream(stream) {
  return !!stream._readableState || !!stream._writableState
}

function isStreamx(stream) {
  return typeof stream._duplexState === 'number' && isStream(stream)
}

function isEnding(stream) {
  return !!stream._readableState && stream._readableState.ending
}

function isEnded(stream) {
  return !!stream._readableState && stream._readableState.ended
}

function isFinishing(stream) {
  return !!stream._writableState && stream._writableState.ending
}

function isFinished(stream) {
  return !!stream._writableState && stream._writableState.ended
}

function getStreamError(stream, opts = {}) {
  const err =
    (stream._readableState && stream._readableState.error) ||
    (stream._writableState && stream._writableState.error)

  // avoid implicit errors by default
  return !opts.all && StreamError.isStreamDestroyed(err) ? null : err
}

function isReadStreamx(stream) {
  return isStreamx(stream) && stream.readable
}

function isDisturbed(stream) {
  return (
    (stream._duplexState & OPENING) !== OPENING ||
    (stream._duplexState & DESTROYING) === DESTROYING ||
    (stream._duplexState & ACTIVE_OR_TICKING) !== 0
  )
}

function isTypedArray(data) {
  return typeof data === 'object' && data !== null && typeof data.byteLength === 'number'
}

function defaultByteLength(data) {
  return isTypedArray(data) ? data.byteLength : 1024
}

function noop() {}

function abort() {
  this.destroy(StreamError.ABORTED())
}

function isWritev(s) {
  return s._writev !== Writable.prototype._writev && s._writev !== Duplex.prototype._writev
}

module.exports = {
  pipeline,
  pipelinePromise,
  isStream,
  isStreamx,
  isEnding,
  isEnded,
  isFinishing,
  isFinished,
  isDisturbed,
  getStreamError,
  Stream,
  Writable,
  Readable,
  Duplex,
  Transform,
  // Export PassThrough for compatibility with Node.js core's stream module
  PassThrough
}
module.exports = class StreamError extends Error {
  constructor(msg, code, fn = StreamError) {
    super(msg)

    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, fn)
    }
  }

  static isStreamDestroyed(err) {
    return err && err.code === 'STREAM_DESTROYED'
  }

  static isPrematureClose(err) {
    return err && err.code === 'PREMATURE_CLOSE'
  }

  static isAborted(err) {
    return err && err.code === 'ABORTED'
  }

  static isBadArgument(err) {
    return err && err.code === 'BAD_ARGUMENT'
  }

  get name() {
    return 'StreamError'
  }

  static STREAM_DESTROYED() {
    return new StreamError('Stream was destroyed', 'STREAM_DESTROYED', StreamError.STREAM_DESTROYED)
  }

  static PREMATURE_CLOSE(msg = 'Premature close') {
    return new StreamError(msg, 'PREMATURE_CLOSE', StreamError.PREMATURE_CLOSE)
  }

  static ABORTED() {
    return new StreamError('Stream aborted', 'ABORTED', StreamError.ABORTED)
  }

  static BAD_ARGUMENT(msg = 'Bad argument') {
    return new StreamError(msg, 'BAD_ARGUMENT', StreamError.BAD_ARGUMENT)
  }
}
{
  "name": "streamx",
  "version": "2.28.0",
  "description": "An iteration of the Node.js core streams with a series of improvements",
  "main": "index.js",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "default": "./index.js"
    },
    "./package": "./package.json",
    "./errors": {
      "types": "./lib/errors.d.ts",
      "default": "./lib/errors"
    }
  },
  "dependencies": {
    "events-universal": "^1.0.0",
    "fast-fifo": "^1.3.2",
    "text-decoder": "^1.1.0"
  },
  "devDependencies": {
    "b4a": "^1.6.6",
    "brittle": "^3.1.1",
    "end-of-stream": "^1.4.4",
    "lunte": "^1.8.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0"
  },
  "files": [
    "index.js",
    "index.d.ts",
    "runtime.d.ts",
    "lib"
  ],
  "scripts": {
    "format": "prettier . --write",
    "test": "brittle test/all.js && brittle-bare test/all.js",
    "lint": "prettier . --check && lunte"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/streamx.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/streamx/issues"
  },
  "homepage": "https://github.com/mafintosh/streamx"
}
const { Readable } = require('streamx')

module.exports = function (s, forks = 2) {
  const streams = new Array(forks)
  const status = new Array(forks).fill(true)

  let ended = false

  for (let i = 0; i < forks; i++) {
    streams[i] = new Readable({
      read (cb) {
        const check = !status[i]
        status[i] = true
        if (check && allReadable()) s.resume()
        cb(null)
      }
    })
  }

  s.on('end', function () {
    ended = true
    for (const stream of streams) stream.push(null)
  })

  s.on('error', function (err) {
    for (const stream of streams) stream.destroy(err)
  })

  s.on('close', function () {
    if (ended) return
    for (const stream of streams) stream.destroy()
  })

  s.on('data', function (data) {
    let needsPause = false
    for (let i = 0; i < streams.length; i++) {
      if (!(status[i] = streams[i].push(data))) {
        needsPause = true
      }
    }
    if (needsPause) s.pause()
  })

  return streams

  function allReadable () {
    for (let j = 0; j < status.length; j++) {
      if (!status[j]) return false
    }
    return true
  }
}
{
  "name": "teex",
  "version": "1.0.1",
  "description": "Turn a readable stream into multiple readable streamx streams",
  "main": "index.js",
  "dependencies": {
    "streamx": "^2.12.5"
  },
  "devDependencies": {
    "standard": "^14.3.4",
    "tape": "^5.0.1"
  },
  "scripts": {
    "test": "standard && tape test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/teex.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/teex/issues"
  },
  "homepage": "https://github.com/mafintosh/teex"
}
const PassThroughDecoder = require('./lib/pass-through-decoder')
const UTF8Decoder = require('./lib/utf8-decoder')

module.exports = class TextDecoder {
  constructor(encoding = 'utf8') {
    this.encoding = normalizeEncoding(encoding)

    switch (this.encoding) {
      case 'utf8':
        this.decoder = new UTF8Decoder()
        break
      case 'utf16le':
      case 'base64':
        throw new Error('Unsupported encoding: ' + this.encoding)
      default:
        this.decoder = new PassThroughDecoder(this.encoding)
    }
  }

  get remaining() {
    return this.decoder.remaining
  }

  push(data) {
    if (typeof data === 'string') return data
    return this.decoder.decode(data)
  }

  // For Node.js compatibility
  write(data) {
    return this.push(data)
  }

  end(data) {
    let result = ''
    if (data) result = this.push(data)
    result += this.decoder.flush()
    return result
  }
}

function normalizeEncoding(encoding) {
  encoding = encoding.toLowerCase()

  switch (encoding) {
    case 'utf8':
    case 'utf-8':
      return 'utf8'
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return 'utf16le'
    case 'latin1':
    case 'binary':
      return 'latin1'
    case 'base64':
    case 'ascii':
    case 'hex':
      return encoding
    default:
      throw new Error('Unknown encoding: ' + encoding)
  }
}
const b4a = require('b4a')

module.exports = class PassThroughDecoder {
  constructor(encoding) {
    this.encoding = encoding
  }

  get remaining() {
    return 0
  }

  decode(data) {
    return b4a.toString(data, this.encoding)
  }

  flush() {
    return ''
  }
}
const b4a = require('b4a')

/**
 * https://encoding.spec.whatwg.org/#utf-8-decoder
 */
module.exports = class UTF8Decoder {
  constructor() {
    this._reset()
  }

  get remaining() {
    return this.bytesSeen
  }

  decode(data) {
    if (data.byteLength === 0) return ''

    if (this.bytesNeeded === 0 && trailingIncomplete(data, 0) === 0) {
      this.bytesSeen = trailingBytesSeen(data)
      return b4a.toString(data, 'utf8')
    }

    let result = ''
    let start = 0

    if (this.bytesNeeded > 0) {
      while (start < data.byteLength) {
        const byte = data[start]

        if (byte < this.lowerBoundary || byte > this.upperBoundary) {
          result += '\ufffd'
          this._reset()
          break
        }

        this.lowerBoundary = 0x80
        this.upperBoundary = 0xbf
        this.codePoint = (this.codePoint << 6) | (byte & 0x3f)
        this.bytesSeen++
        start++

        if (this.bytesSeen === this.bytesNeeded) {
          result += String.fromCodePoint(this.codePoint)
          this._reset()
          break
        }
      }

      if (this.bytesNeeded > 0) return result
    }

    const trailing = trailingIncomplete(data, start)
    const end = data.byteLength - trailing

    if (end > start) result += b4a.toString(data, 'utf8', start, end)

    for (let i = end; i < data.byteLength; i++) {
      const byte = data[i]

      if (this.bytesNeeded === 0) {
        if (byte <= 0x7f) {
          this.bytesSeen = 0
          result += String.fromCharCode(byte)
        } else if (byte >= 0xc2 && byte <= 0xdf) {
          this.bytesNeeded = 2
          this.bytesSeen = 1
          this.codePoint = byte & 0x1f
        } else if (byte >= 0xe0 && byte <= 0xef) {
          if (byte === 0xe0) this.lowerBoundary = 0xa0
          else if (byte === 0xed) this.upperBoundary = 0x9f
          this.bytesNeeded = 3
          this.bytesSeen = 1
          this.codePoint = byte & 0xf
        } else if (byte >= 0xf0 && byte <= 0xf4) {
          if (byte === 0xf0) this.lowerBoundary = 0x90
          else if (byte === 0xf4) this.upperBoundary = 0x8f
          this.bytesNeeded = 4
          this.bytesSeen = 1
          this.codePoint = byte & 0x7
        } else {
          this.bytesSeen = 1
          result += '\ufffd'
        }

        continue
      }

      if (byte < this.lowerBoundary || byte > this.upperBoundary) {
        result += '\ufffd'
        i--
        this._reset()

        continue
      }

      this.lowerBoundary = 0x80
      this.upperBoundary = 0xbf

      this.codePoint = (this.codePoint << 6) | (byte & 0x3f)
      this.bytesSeen++

      if (this.bytesSeen === this.bytesNeeded) {
        result += String.fromCodePoint(this.codePoint)
        this._reset()
      }
    }

    return result
  }

  flush() {
    const result = this.bytesNeeded > 0 ? '\ufffd' : ''
    this._reset()
    return result
  }

  _reset() {
    this.codePoint = 0
    this.bytesNeeded = 0
    this.bytesSeen = 0
    this.lowerBoundary = 0x80
    this.upperBoundary = 0xbf
  }
}

function trailingIncomplete(data, start) {
  const len = data.byteLength
  if (len <= start) return 0

  const limit = Math.max(start, len - 4)

  let i = len - 1
  while (i > limit && (data[i] & 0xc0) === 0x80) i--

  if (i < start) return 0

  const byte = data[i]

  let needed
  if (byte <= 0x7f) return 0
  if (byte >= 0xc2 && byte <= 0xdf) needed = 2
  else if (byte >= 0xe0 && byte <= 0xef) needed = 3
  else if (byte >= 0xf0 && byte <= 0xf4) needed = 4
  else return 0

  const available = len - i
  return available < needed ? available : 0
}

function trailingBytesSeen(data) {
  const len = data.byteLength
  if (len === 0) return 0

  const last = data[len - 1]

  if (last <= 0x7f) return 0
  if ((last & 0xc0) !== 0x80) return 1

  const limit = Math.max(0, len - 4)

  let i = len - 2
  while (i >= limit && (data[i] & 0xc0) === 0x80) i--

  if (i < 0) return 1

  const first = data[i]

  let needed
  if (first >= 0xc2 && first <= 0xdf) needed = 2
  else if (first >= 0xe0 && first <= 0xef) needed = 3
  else if (first >= 0xf0 && first <= 0xf4) needed = 4
  else return 1

  if (len - i !== needed) return 1

  if (needed >= 3) {
    const second = data[i + 1]
    if (first === 0xe0 && second < 0xa0) return 1
    if (first === 0xed && second > 0x9f) return 1
    if (first === 0xf0 && second < 0x90) return 1
    if (first === 0xf4 && second > 0x8f) return 1
  }

  return 0
}
{
  "name": "text-decoder",
  "version": "1.2.7",
  "description": "Streaming text decoder that preserves multibyte Unicode characters",
  "exports": {
    "./package": "./package.json",
    ".": "./index.js"
  },
  "files": [
    "index.js",
    "lib"
  ],
  "scripts": {
    "format": "prettier --write .",
    "lint": "prettier --check . && lunte",
    "test": "npm run test:node && npm run test:bare",
    "test:node": "brittle-node test.js",
    "test:bare": "brittle-bare test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/text-decoder.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/text-decoder/issues"
  },
  "homepage": "https://github.com/holepunchto/text-decoder#readme",
  "dependencies": {
    "b4a": "^1.6.4"
  },
  "devDependencies": {
    "brittle": "^3.3.2",
    "lunte": "^1.3.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^1.0.0"
  }
}
module.exports = class TimeOrderedSet {
  constructor () {
    this.oldest = null
    this.latest = null
    this.length = 0
  }

  has (node) {
    return !!(node.next || node.prev) || node === this.oldest
  }

  add (node) {
    if (this.has(node)) this.remove(node)

    if (!this.latest && !this.oldest) {
      this.latest = this.oldest = node
      node.prev = node.next = null
    } else {
      this.latest.next = node
      node.prev = this.latest
      node.next = null
      this.latest = node
    }

    this.length++

    return node
  }

  remove (node) {
    if (!this.has(node)) return node

    if (this.oldest !== node && this.latest !== node) {
      node.prev.next = node.next
      node.next.prev = node.prev
    } else {
      if (this.oldest === node) {
        this.oldest = node.next
        if (this.oldest) this.oldest.prev = null
      }
      if (this.latest === node) {
        this.latest = node.prev
        if (this.latest) this.latest.next = null
      }
    }

    node.next = node.prev = null
    this.length--

    return node
  }

  toArray ({ limit = Infinity, reverse = false } = {}) {
    const list = []

    if (reverse) {
      let node = this.latest
      while (node && limit--) {
        list.push(node)
        node = node.prev
      }
    } else {
      let node = this.oldest
      while (node && limit--) {
        list.push(node)
        node = node.next
      }
    }

    return list
  }
}
{
  "name": "time-ordered-set",
  "version": "2.0.1",
  "description": "Efficiently maintain a set of nodes ordered by the time they were added to the set",
  "main": "index.js",
  "files": [
    "index.js"
  ],
  "devDependencies": {
    "brittle": "^3.0.0",
    "standard": "^17.1.2"
  },
  "scripts": {
    "test": "standard && brittle test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/time-ordered-set.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/time-ordered-set/issues"
  },
  "homepage": "https://github.com/mafintosh/time-ordered-set"
}
module.exports = class TimerBrowser {
  constructor (ms, fn, ctx = null, interval = false) {
    this.ms = ms
    this.ontimeout = fn
    this.context = ctx || null
    this.interval = interval
    this.done = false

    this._timer = interval
      ? setInterval(callInterval, ms, this)
      : setTimeout(callTimeout, ms, this)
  }

  unref () {}

  ref () {}

  refresh () {
    if (this.done) return

    if (this.interval) {
      clearInterval(this._timer)
      this._timer = setInterval(callInterval, this.ms, this)
    } else {
      clearTimeout(this._timer)
      this._timer = setTimeout(callTimeout, this.ms, this)
    }
  }

  destroy () {
    this.done = true
    this.ontimeout = null

    if (this.interval) clearInterval(this._timer)
    else clearTimeout(this._timer)
  }

  static once (ms, fn, ctx) {
    return new this(ms, fn, ctx, false)
  }

  static on (ms, fn, ctx) {
    return new this(ms, fn, ctx, true)
  }
}

function callTimeout (self) {
  self.done = true
  self.ontimeout.call(self.context)
}

function callInterval (self) {
  self.ontimeout.call(self.context)
}
module.exports = isNode()
  ? require('./node')
  : require('./browser')

function isNode () {
  const to = setTimeout(function () {}, 1000)
  clearTimeout(to)
  return !!to.refresh
}
module.exports = class Timer {
  constructor (ms, fn, ctx = null, interval = false) {
    this.ms = ms
    this.ontimeout = fn
    this.context = ctx
    this.interval = interval
    this.done = false

    this._timer = interval
      ? setInterval(callInterval, ms, this)
      : setTimeout(callTimeout, ms, this)
  }

  unref () {
    this._timer.unref()
  }

  ref () {
    this._timer.ref()
  }

  refresh () {
    if (this.done !== true) this._timer.refresh()
  }

  destroy () {
    this.done = true
    this.ontimeout = null
    if (this.interval) clearInterval(this._timer)
    else clearTimeout(this._timer)
  }

  static once (ms, fn, ctx) {
    return new this(ms, fn, ctx, false)
  }

  static on (ms, fn, ctx) {
    return new this(ms, fn, ctx, true)
  }
}

function callTimeout (self) {
  self.done = true
  self.ontimeout.call(self.context)
}

function callInterval (self) {
  self.ontimeout.call(self.context)
}
{
  "name": "timeout-refresh",
  "version": "2.0.1",
  "description": "Efficiently refresh a timer",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {
    "standard": "^16.0.4",
    "tape": "^5.5.2"
  },
  "browser": "./browser.js",
  "scripts": {
    "test": "standard && tape test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/timeout-refresh.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/timeout-refresh/issues"
  },
  "homepage": "https://github.com/mafintosh/timeout-refresh"
}
require.addon = require('require-addon')

module.exports = require.addon('.', __filename)
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

const v4Seg = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])'
const v4Str = `(${v4Seg}[.]){3}${v4Seg}`
const IPv4Pattern = new RegExp(`^${v4Str}$`)

const v6Seg = '(?:[0-9a-fA-F]{1,4})'
const IPv6Pattern = new RegExp(
  '^(' +
    `(?:${v6Seg}:){7}(?:${v6Seg}|:)|` +
    `(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|` +
    `(?:${v6Seg}:){5}(?::${v4Str}|(:${v6Seg}){1,2}|:)|` +
    `(?:${v6Seg}:){4}(?:(:${v6Seg}){0,1}:${v4Str}|(:${v6Seg}){1,3}|:)|` +
    `(?:${v6Seg}:){3}(?:(:${v6Seg}){0,2}:${v4Str}|(:${v6Seg}){1,4}|:)|` +
    `(?:${v6Seg}:){2}(?:(:${v6Seg}){0,3}:${v4Str}|(:${v6Seg}){1,5}|:)|` +
    `(?:${v6Seg}:){1}(?:(:${v6Seg}){0,4}:${v4Str}|(:${v6Seg}){1,6}|:)|` +
    `(?::((?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:))` +
    ')(%[0-9a-zA-Z-.:]{1,})?$'
)

const isIPv4 = (exports.isIPv4 = function isIPv4(host) {
  return IPv4Pattern.test(host)
})

const isIPv6 = (exports.isIPv6 = function isIPv6(host) {
  return IPv6Pattern.test(host)
})

exports.isIP = function isIP(host) {
  if (isIPv4(host)) return 4
  if (isIPv6(host)) return 6
  return 0
}
const events = require('events')
const b4a = require('b4a')
const binding = require('../binding')

module.exports = class NetworkInterfaces extends events.EventEmitter {
  constructor(udx) {
    super()

    this._handle = b4a.alloc(binding.sizeof_udx_napi_interface_event_t)
    this._watching = false
    this._destroying = null

    binding.udx_napi_interface_event_init(
      udx._handle,
      this._handle,
      this,
      this._onevent,
      this._onclose
    )

    this.interfaces = binding.udx_napi_interface_event_get_addrs(this._handle)
  }

  _onclose() {
    this.emit('close')
  }

  _onevent() {
    this.interfaces = binding.udx_napi_interface_event_get_addrs(this._handle)

    this.emit('change', this.interfaces)
  }

  watch() {
    if (this._watching) return this
    this._watching = true

    binding.udx_napi_interface_event_start(this._handle)

    return this
  }

  unwatch() {
    if (!this._watching) return this
    this._watching = false

    binding.udx_napi_interface_event_stop(this._handle)

    return this
  }

  async destroy() {
    if (this._destroying) return this._destroying
    this._destroying = events.once(this, 'close')

    binding.udx_napi_interface_event_close(this._handle)

    return this._destroying
  }

  [Symbol.iterator]() {
    return this.interfaces[Symbol.iterator]()
  }
}
const events = require('events')
const b4a = require('b4a')
const binding = require('../binding')
const ip = require('./ip')

module.exports = class UDXSocket extends events.EventEmitter {
  constructor(udx, opts = {}) {
    super()

    this.udx = udx

    this._handle = b4a.alloc(binding.sizeof_udx_napi_socket_t)
    this._inited = false
    this._host = null
    this._family = 0
    this._ipv6Only = opts.ipv6Only === true
    this._reuseAddress = opts.reuseAddress === true
    this._port = 0
    this._reqs = []
    this._free = []
    this._closing = null
    this._closed = false

    this._view64 = new BigUint64Array(
      this._handle.buffer,
      this._handle.byteOffset,
      this._handle.byteLength >> 3
    )

    this.streams = new Set()

    this.userData = null
  }

  get bound() {
    return this._port !== 0
  }

  get closing() {
    return this._closing !== null
  }

  get idle() {
    return this.streams.size === 0
  }

  get busy() {
    return this.streams.size > 0
  }

  get bytesTransmitted() {
    if (this._inited !== true) return 0
    return Number(this._view64[binding.offsetof_udx_socket_t_bytes_tx >> 3])
  }

  get packetsTransmitted() {
    if (this._inited !== true) return 0
    return Number(this._view64[binding.offsetof_udx_socket_t_packets_tx >> 3])
  }

  get bytesReceived() {
    if (this._inited !== true) return 0
    return Number(this._view64[binding.offsetof_udx_socket_t_bytes_rx >> 3])
  }

  get packetsReceived() {
    if (this._inited !== true) return 0
    return Number(this._view64[binding.offsetof_udx_socket_t_packets_rx >> 3])
  }

  get packetsDroppedByKernel() {
    if (this._inited !== true) return 0
    return Number(this._view64[binding.offsetof_udx_socket_t_packets_dropped_by_kernel >> 3])
  }

  toJSON() {
    return {
      bound: this.bound,
      closing: this.closing,
      streams: this.streams.size,
      address: this.address(),
      ipv6Only: this._ipv6Only,
      reuseAddress: this._reuseAddress,
      idle: this.idle,
      busy: this.busy
    }
  }

  _init() {
    if (this._inited) return

    binding.udx_napi_socket_init(
      this.udx._handle,
      this._handle,
      this,
      this._onsend,
      this._onmessage,
      this._onclose,
      this._reallocMessage
    )

    this._inited = true
  }

  _onsend(id, err) {
    const req = this._reqs[id]

    const onflush = req.onflush

    req.buffer = null
    req.onflush = null

    this._free.push(id)

    onflush(err >= 0)

    // gc the free list
    if (this._free.length >= 16 && this._free.length === this._reqs.length) {
      this._free = []
      this._reqs = []
    }
  }

  _onmessage(len, port, host, family) {
    this.emit('message', this.udx._consumeMessage(len), { host, family, port })
    return this.udx._buffer
  }

  _onclose() {
    this.emit('close')
  }

  _reallocMessage() {
    return this.udx._reallocMessage()
  }

  _onidle() {
    this.emit('idle')
  }

  _onbusy() {
    this.emit('busy')
  }

  _addStream(stream) {
    if (this.streams.has(stream)) return false
    this.streams.add(stream)
    if (this.streams.size === 1) this._onbusy()
    return true
  }

  _removeStream(stream) {
    if (!this.streams.has(stream)) return false
    this.streams.delete(stream)
    const closed = this._closeMaybe()
    if (this.idle && !closed) this._onidle()
    return true
  }

  address() {
    if (!this.bound) return null
    return { host: this._host, family: this._family, port: this._port }
  }

  bind(port, host) {
    if (this.bound) throw new Error('Already bound')
    if (this.closing) throw new Error('Socket is closed')

    if (!port) port = 0

    let flags = 0
    if (this._ipv6Only) flags |= binding.UV_UDP_IPV6ONLY
    if (this._reuseAddress) flags |= binding.UV_UDP_REUSEADDR

    let family

    if (host) {
      family = ip.isIP(host)
      if (!family) throw new Error(`${host} is not a valid IP address`)

      if (!this._inited) this._init()

      this._port = binding.udx_napi_socket_bind(this._handle, port, host, family, flags)
    } else {
      if (!this._inited) this._init()

      try {
        host = '::'
        family = 6
        this._port = binding.udx_napi_socket_bind(this._handle, port, host, family, flags)
      } catch {
        host = '0.0.0.0'
        family = 4
        this._port = binding.udx_napi_socket_bind(this._handle, port, host, family, flags)
      }
    }

    this._host = host
    this._family = family

    this.emit('listening')
  }

  async close() {
    if (this._closing) return this._closing
    this._closing = new Promise((resolve) => this.once('close', resolve))
    this._closeMaybe()
    return this._closing
  }

  _closeMaybe() {
    if (this._closed || this._closing === null) return this._closed

    if (!this._inited) {
      this._closed = true
      this.emit('close')
      return true
    }

    if (this.idle) {
      binding.udx_napi_socket_close(this._handle)
      this._closed = true
    }

    return this._closed
  }

  setTTL(ttl) {
    if (!this._inited) throw new Error('Socket not active')
    binding.udx_napi_socket_set_ttl(this._handle, ttl)
  }

  getRecvBufferSize() {
    if (!this._inited) throw new Error('Socket not active')
    return binding.udx_napi_socket_get_recv_buffer_size(this._handle)
  }

  setRecvBufferSize(size) {
    if (!this._inited) throw new Error('Socket not active')
    return binding.udx_napi_socket_set_recv_buffer_size(this._handle, size)
  }

  getSendBufferSize() {
    if (!this._inited) throw new Error('Socket not active')
    return binding.udx_napi_socket_get_send_buffer_size(this._handle)
  }

  setSendBufferSize(size) {
    if (!this._inited) throw new Error('Socket not active')
    return binding.udx_napi_socket_set_send_buffer_size(this._handle, size)
  }

  addMembership(group, ifaceAddress) {
    if (!this._inited) throw new Error('Socket not active')
    return binding.udx_napi_socket_set_membership(this._handle, group, ifaceAddress || '', true)
  }

  dropMembership(group, ifaceAddress) {
    if (!this._inited) throw new Error('Socket not active')
    return binding.udx_napi_socket_set_membership(this._handle, group, ifaceAddress || '', false)
  }

  async send(buffer, port, host, ttl) {
    if (this.closing) return false

    if (!host) host = '127.0.0.1'

    const family = ip.isIP(host)
    if (!family) throw new Error(`${host} is not a valid IP address`)

    if (!this.bound) this.bind(0)

    const id = this._allocSend()
    const req = this._reqs[id]

    req.buffer = buffer

    const promise = new Promise((resolve) => {
      req.onflush = resolve
    })

    binding.udx_napi_socket_send_ttl(
      this._handle,
      req.handle,
      id,
      buffer,
      port,
      host,
      family,
      ttl || 0
    )

    return promise
  }

  trySend(buffer, port, host, ttl) {
    if (this.closing) return

    if (!host) host = '127.0.0.1'

    const family = ip.isIP(host)
    if (!family) throw new Error(`${host} is not a valid IP address`)

    if (!this.bound) this.bind(0)

    const id = this._allocSend()
    const req = this._reqs[id]

    req.buffer = buffer
    req.onflush = noop

    binding.udx_napi_socket_send_ttl(
      this._handle,
      req.handle,
      id,
      buffer,
      port,
      host,
      family,
      ttl || 0
    )
  }

  _allocSend() {
    if (this._free.length > 0) return this._free.pop()
    const handle = b4a.allocUnsafe(binding.sizeof_udx_socket_send_t)
    return this._reqs.push({ handle, buffer: null, onflush: null }) - 1
  }
}

function noop() {}
const streamx = require('streamx')
const b4a = require('b4a')
const binding = require('../binding')
const ip = require('./ip')

const MAX_PACKET = 2048
const BUFFER_SIZE = 65536 + MAX_PACKET

module.exports = class UDXStream extends streamx.Duplex {
  constructor(udx, id, opts = {}) {
    super({ mapWritable: toBuffer, eagerOpen: true })

    this.udx = udx
    this.socket = null

    this._handle = b4a.alloc(binding.sizeof_udx_napi_stream_t)
    this._view = new Uint32Array(
      this._handle.buffer,
      this._handle.byteOffset,
      this._handle.byteLength >> 2
    )
    this._view16 = new Uint16Array(
      this._handle.buffer,
      this._handle.byteOffset,
      this._handle.byteLength >> 1
    )
    this._view64 = new BigUint64Array(
      this._handle.buffer,
      this._handle.byteOffset,
      this._handle.byteLength >> 3
    )

    this._wreqs = []
    this._wfree = []

    this._sreqs = []
    this._sfree = []
    this._closed = false

    this._flushing = 0
    this._flushes = []

    this._buffer = null
    this._reallocData()

    this._onwrite = null
    this._ondestroy = null
    this._firewall = opts.firewall || firewallAll

    this._remoteChanging = null
    this._previousSocket = null

    this.id = id
    this.remoteId = 0
    this.remoteHost = null
    this.remoteFamily = 0
    this.remotePort = 0

    this.userData = null

    binding.udx_napi_stream_init(
      this.udx._handle,
      this._handle,
      id,
      opts.framed ? 1 : 0,
      this,
      this._ondata,
      this._onend,
      this._ondrain,
      this._onack,
      this._onsend,
      this._onmessage,
      this._onclose,
      this._onfirewall,
      this._onremotechanged,
      this._reallocData,
      this._reallocMessage
    )

    if (opts.seq) binding.udx_napi_stream_set_seq(this._handle, opts.seq)

    binding.udx_napi_stream_recv_start(this._handle, this._buffer)
  }

  get connected() {
    return this.socket !== null
  }

  get mtu() {
    return this._view16[binding.offsetof_udx_stream_t_mtu >> 1]
  }

  get rtt() {
    return this._view[binding.offsetof_udx_stream_t_srtt >> 2]
  }

  get cwnd() {
    return this._view[binding.offsetof_udx_stream_t_cwnd >> 2]
  }

  get rtoCount() {
    return this._view16[binding.offsetof_udx_stream_t_rto_count >> 1]
  }

  get retransmits() {
    return this._view16[binding.offsetof_udx_stream_t_retransmit_count >> 1]
  }

  get bbrState() {
    const view = new Uint8Array(
      this._handle.buffer,
      this._handle.byteOffset,
      this._handle.byteLength
    )
    return view[binding.offsetof_udx_stream_t_bbr_state]
  }

  get bbrBandwidth() {
    return binding.udx_napi_stream_get_bw(this._handle)
  }

  get fastRecoveries() {
    return this._view16[binding.offsetof_udx_stream_t_fast_recovery_count >> 1]
  }

  get inflight() {
    return this._view[binding.offsetof_udx_stream_t_inflight >> 2]
  }

  get bytesTransmitted() {
    return Number(this._view64[binding.offsetof_udx_stream_t_bytes_tx >> 3])
  }

  get packetsTransmitted() {
    return Number(this._view64[binding.offsetof_udx_stream_t_packets_tx >> 3])
  }

  get bytesReceived() {
    return Number(this._view64[binding.offsetof_udx_stream_t_bytes_rx >> 3])
  }

  get packetsReceived() {
    return Number(this._view64[binding.offsetof_udx_stream_t_packets_rx >> 3])
  }

  get localHost() {
    return this.socket ? this.socket.address().host : null
  }

  get localFamily() {
    return this.socket ? this.socket.address().family : 0
  }

  get localPort() {
    return this.socket ? this.socket.address().port : 0
  }

  setInteractive(bool) {
    if (!this._closed) return
    binding.udx_napi_stream_set_mode(this._handle, bool ? 0 : 1)
  }

  connect(socket, remoteId, port, host, opts = {}) {
    if (this._closed) return

    if (this.connected) throw new Error('Already connected')
    if (socket.closing) throw new Error('Socket is closed')

    if (typeof host === 'object') {
      opts = host
      host = null
    }

    if (!host) host = '127.0.0.1'

    const family = ip.isIP(host)
    if (!family) throw new Error(`${host} is not a valid IP address`)
    if (!(port > 0 && port < 65536)) throw new Error(`${port} is not a valid port`)

    if (!socket.bound) socket.bind(0)

    this.remoteId = remoteId
    this.remotePort = port
    this.remoteHost = host
    this.remoteFamily = family
    this.socket = socket

    if (opts.ack) binding.udx_napi_stream_set_ack(this._handle, opts.ack)

    binding.udx_napi_stream_connect(this._handle, socket._handle, remoteId, port, host, family)

    this.socket._addStream(this)

    this.emit('connect')
  }

  changeRemote(socket, remoteId, port, host) {
    if (this._remoteChanging) throw new Error('Remote already changing')

    if (!this.connected) throw new Error('Not yet connected')
    if (socket.closing) throw new Error('Socket is closed')

    if (this.socket.udx !== socket.udx) {
      throw new Error('Cannot change to a socket on another UDX instance')
    }

    if (!host) host = '127.0.0.1'

    const family = ip.isIP(host)
    if (!family) throw new Error(`${host} is not a valid IP address`)
    if (!(port > 0 && port < 65536)) throw new Error(`${port} is not a valid port`)

    if (this.socket !== socket) this._previousSocket = this.socket

    this.remoteId = remoteId
    this.remotePort = port
    this.remoteHost = host
    this.remoteFamily = family
    this.socket = socket

    this._remoteChanging = new Promise((resolve, reject) => {
      const onchanged = () => {
        this.off('close', onclose)
        resolve()
      }

      const onclose = () => {
        this.off('remote-changed', onchanged)
        reject(new Error('Stream is closed'))
      }

      this.once('remote-changed', onchanged).once('close', onclose)
    })

    binding.udx_napi_stream_change_remote(
      this._handle,
      socket._handle,
      remoteId,
      port,
      host,
      family
    )

    this.socket._addStream(this)

    return this._remoteChanging
  }

  relayTo(destination) {
    if (this._closed) return

    binding.udx_napi_stream_relay_to(this._handle, destination._handle)
  }

  async send(buffer) {
    if (!this.connected || this._closed) return false

    const id = this._allocSend()
    const req = this._sreqs[id]

    req.buffer = buffer

    const promise = new Promise((resolve) => {
      req.onflush = resolve
    })

    binding.udx_napi_stream_send(this._handle, req.handle, id, buffer)

    return promise
  }

  trySend(buffer) {
    if (!this.connected || this._closed) return

    const id = this._allocSend()
    const req = this._sreqs[id]

    req.buffer = buffer
    req.onflush = noop

    binding.udx_napi_stream_send(this._handle, req.handle, id, buffer)
  }

  async flush() {
    if ((await streamx.Writable.drained(this)) === false) return false
    if (this.destroying) return false

    const missing = this._wreqs.length - this._wfree.length
    if (missing === 0) return true

    return new Promise((resolve) => {
      this._flushes.push({ flush: this._flushing++, missing, resolve })
    })
  }

  toJSON() {
    return {
      id: this.id,
      connected: this.connected,
      destroying: this.destroying,
      destroyed: this.destroyed,
      remoteId: this.remoteId,
      remoteHost: this.remoteHost,
      remoteFamily: this.remoteFamily,
      remotePort: this.remotePort,
      mtu: this.mtu,
      rtt: this.rtt,
      cwnd: this.cwnd,
      inflight: this.inflight,
      socket: this.socket ? this.socket.toJSON() : null
    }
  }

  _read(cb) {
    cb(null)
  }

  _writeContinue(err) {
    if (this._onwrite === null) return
    const cb = this._onwrite
    this._onwrite = null
    cb(err)
  }

  _destroyContinue(err) {
    if (this._ondestroy === null) return
    const cb = this._ondestroy
    this._ondestroy = null
    cb(err)
  }

  _writev(buffers, cb) {
    if (!this.connected) {
      throw customError('Writing while not connected not currently supported', 'ERR_ASSERTION')
    }

    let drained = true

    if (buffers.length === 1) {
      const id = this._allocWrite(1)
      const req = this._wreqs[id]

      req.flush = this._flushing
      req.buffer = buffers[0]

      drained = binding.udx_napi_stream_write(this._handle, req.handle, id, req.buffer) !== 0
    } else {
      const id = this._allocWrite(nextBatchSize(buffers.length))
      const req = this._wreqs[id]

      req.flush = this._flushing
      req.buffers = buffers

      drained = binding.udx_napi_stream_writev(this._handle, req.handle, id, req.buffers) !== 0
    }

    if (drained) cb(null)
    else this._onwrite = cb
  }

  _final(cb) {
    const id = this._allocWrite(1)
    const req = this._wreqs[id]

    req.flush = this._flushes
    req.buffer = b4a.allocUnsafe(0)

    const drained =
      binding.udx_napi_stream_write_end(this._handle, req.handle, id, req.buffer) !== 0

    if (drained) cb(null)
    else this._onwrite = cb
  }

  _predestroy() {
    if (!this._closed) binding.udx_napi_stream_destroy(this._handle)
    this._closed = true
    this._writeContinue(null)
  }

  _destroy(cb) {
    if (this.connected) this._ondestroy = cb
    else cb(null)
  }

  _ondata(read) {
    this.push(this._consumeData(read))
    return this._buffer
  }

  _onend(read) {
    if (read > 0) this.push(this._consumeData(read))
    this.push(null)
  }

  _ondrain() {
    this._writeContinue(null)
  }

  _flushAck(flush) {
    for (let i = this._flushes.length - 1; i >= 0; i--) {
      const f = this._flushes[i]
      if (f.flush < flush) break
      f.missing--
    }

    while (this._flushes.length > 0 && this._flushes[0].missing === 0) {
      this._flushes.shift().resolve(true)
    }
  }

  _onack(id) {
    const req = this._wreqs[id]

    req.buffers = req.buffer = null
    this._wfree.push(id)

    if (this._flushes.length > 0) this._flushAck(req.flush)

    // gc the free list
    if (this._wfree.length >= 64 && this._wfree.length === this._wreqs.length) {
      this._wfree = []
      this._wreqs = []
    }
  }

  _onsend(id, err) {
    const req = this._sreqs[id]

    const onflush = req.onflush

    req.buffer = null
    req.onflush = null

    this._sfree.push(id)

    onflush(err >= 0)

    // gc the free list
    if (this._sfree.length >= 16 && this._sfree.length === this._sreqs.length) {
      this._sfree = []
      this._sreqs = []
    }
  }

  _onmessage(len) {
    this.emit('message', this.udx._consumeMessage(len))
    return this.udx._buffer
  }

  _onclose(err) {
    this._closed = true

    if (this.socket) {
      this.socket._removeStream(this)
      this.socket = null
    }

    if (this._previousSocket) {
      this._previousSocket._removeStream(this)
      this._previousSocket = null
    }

    // no error, we don't need to do anything
    if (!err) return this._destroyContinue(null)

    if (this._ondestroy === null) this.destroy(err)
    else this._destroyContinue(err)
  }

  _onfirewall(socket, port, host, family) {
    if (port <= 0 || port > 65535) return 1
    return this._firewall(socket, port, host, family) ? 1 : 0
  }

  _onremotechanged() {
    if (this._previousSocket) {
      this._previousSocket._removeStream(this)
      this._previousSocket = null
    }

    this._remoteChanging = null
    this.emit('remote-changed')
  }

  _consumeData(len) {
    const next = this._buffer.subarray(0, len)
    this._buffer = this._buffer.subarray(len)
    if (this._buffer.byteLength < MAX_PACKET) this._reallocData()
    return next
  }

  _reallocData() {
    this._buffer = b4a.allocUnsafe(BUFFER_SIZE)
    return this._buffer
  }

  _reallocMessage() {
    return this.udx._reallocMessage()
  }

  _allocWrite(size) {
    if (this._wfree.length === 0) {
      const handle = b4a.allocUnsafe(binding.udx_napi_stream_write_sizeof(size))
      return (
        this._wreqs.push({
          handle,
          size,
          buffers: null,
          buffer: null,
          flush: 0
        }) - 1
      )
    }

    const free = this._wfree.pop()
    if (size === 1) return free

    const next = this._wreqs[free]
    if (next.size < size) {
      next.handle = b4a.allocUnsafe(binding.udx_napi_stream_write_sizeof(size))
      next.size = size
    }

    return free
  }

  _allocSend() {
    if (this._sfree.length > 0) return this._sfree.pop()
    const handle = b4a.allocUnsafe(binding.sizeof_udx_stream_send_t)
    return this._sreqs.push({ handle, buffer: null, resolve: null, reject: null }) - 1
  }
}

function noop() {}

function toBuffer(data) {
  return typeof data === 'string' ? b4a.from(data) : data
}

function firewallAll(socket, port, host) {
  return true
}

function customError(message, code) {
  const error = new Error(message)
  error.code = code
  return error
}

function nextBatchSize(n) {
  // try to coerce the the writevs into sameish size
  if (n === 1) return 1
  // group all < 8 to the same size, low mem overhead but save some small allocs
  if (n < 8) return 8
  if (n < 16) return 16
  if (n < 32) return 32
  if (n < 64) return 64
  return n
}
const b4a = require('b4a')
const binding = require('../binding')
const ip = require('./ip')
const Socket = require('./socket')
const Stream = require('./stream')
const NetworkInterfaces = require('./network-interfaces')

const MAX_MESSAGE = 4096
const BUFFER_SIZE = 65536 + MAX_MESSAGE

module.exports = class UDX {
  constructor() {
    this._handle = b4a.alloc(binding.sizeof_udx_napi_t)
    this._watchers = new Set()
    this._view64 = new BigUint64Array(
      this._handle.buffer,
      this._handle.byteOffset,
      this._handle.byteLength >> 3
    )

    this._buffer = null
    this._reallocMessage()

    binding.udx_napi_init(this._handle, this._buffer)
  }

  static isIPv4(host) {
    return ip.isIPv4(host)
  }

  static isIPv6(host) {
    return ip.isIPv6(host)
  }

  static isIP(host) {
    return ip.isIP(host)
  }

  get bytesTransmitted() {
    return Number(this._view64[binding.offsetof_udx_t_bytes_tx >> 3])
  }

  get packetsTransmitted() {
    return Number(this._view64[binding.offsetof_udx_t_packets_tx >> 3])
  }

  get bytesReceived() {
    return Number(this._view64[binding.offsetof_udx_t_bytes_rx >> 3])
  }

  get packetsReceived() {
    return Number(this._view64[binding.offsetof_udx_t_packets_rx >> 3])
  }

  get packetsDroppedByKernel() {
    return Number(this._view64[binding.offsetof_udx_t_packets_dropped_by_kernel >> 3])
  }

  _consumeMessage(len) {
    const next = this._buffer.subarray(0, len)
    this._buffer = this._buffer.subarray(len)
    if (this._buffer.byteLength < MAX_MESSAGE) this._reallocMessage()
    return next
  }

  _reallocMessage() {
    // TODO: move reallocation to native
    this._buffer = b4a.allocUnsafe(BUFFER_SIZE)
    return this._buffer
  }

  createSocket(opts) {
    return new Socket(this, opts)
  }

  createStream(id, opts) {
    return new Stream(this, id, opts)
  }

  networkInterfaces() {
    let [watcher = null] = this._watchers
    if (watcher) return watcher.interfaces

    watcher = new NetworkInterfaces(this)
    watcher.destroy()

    return watcher.interfaces
  }

  watchNetworkInterfaces(onchange) {
    const watcher = new NetworkInterfaces(this)

    this._watchers.add(watcher)
    watcher.on('close', () => {
      this._watchers.delete(watcher)
    })

    if (onchange) watcher.on('change', onchange)

    return watcher.watch()
  }

  async lookup(host, opts = {}) {
    const { family = 0 } = opts

    const req = b4a.alloc(binding.sizeof_udx_napi_lookup_t)
    const ctx = {
      req,
      resolve: null,
      reject: null
    }

    const promise = new Promise((resolve, reject) => {
      ctx.resolve = resolve
      ctx.reject = reject
    })

    binding.udx_napi_lookup(this._handle, req, host, family, ctx, onlookup)

    return promise
  }
}

function onlookup(err, host, family) {
  if (err) this.reject(err)
  else this.resolve({ host, family })
}
{
  "name": "udx-native",
  "version": "1.20.7",
  "description": "udx is reliable, multiplexed, and congestion-controlled streams over udp",
  "main": "lib/udx.js",
  "files": [
    "lib",
    "prebuilds",
    "binding.cc",
    "binding.js",
    "CMakeLists.txt"
  ],
  "imports": {
    "events": {
      "bare": "bare-events",
      "default": "events"
    }
  },
  "addon": true,
  "scripts": {
    "format": "prettier --write .",
    "lint": "prettier --check . && lunte",
    "test": "npm run test:node && npm run test:bare",
    "test:node": "brittle-node --coverage test/*.js",
    "test:bare": "brittle-bare --coverage test/*.js",
    "test:all": "brittle test/*.js test/slow/*.js",
    "test:generate": "brittle -r test/all.js test/*.js",
    "bench": "brittle test/bench/*.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holepunchto/udx-native.git"
  },
  "keywords": [
    "tcp",
    "udp",
    "stream",
    "reliable"
  ],
  "author": "Holepunch Inc.",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/udx-native/issues"
  },
  "homepage": "https://github.com/holepunchto/udx-native#readme",
  "engines": {
    "bare": ">=1.17.4"
  },
  "dependencies": {
    "b4a": "^1.5.0",
    "bare-events": "^2.2.0",
    "require-addon": "^1.1.0",
    "streamx": "^2.22.0"
  },
  "devDependencies": {
    "bare-compat-napi": "^1.3.0",
    "brittle": "^3.1.0",
    "cmake-bare": "^1.1.10",
    "cmake-fetch": "^1.0.1",
    "cmake-napi": "^1.0.5",
    "is-ci": "^3.0.1",
    "lunte": "^1.3.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0",
    "tiny-byte-size": "^1.1.0"
  }
}
exports.add = add
exports.has = has
exports.remove = remove
exports.swap = swap

function add (list, item) {
  if (has(list, item)) return item
  item._index = list.length
  list.push(item)
  return item
}

function has (list, item) {
  return item._index < list.length && list[item._index] === item
}

function remove (list, item) {
  if (!has(list, item)) return null

  var last = list.pop()
  if (last !== item) {
    list[item._index] = last
    last._index = item._index
  }

  return item
}

function swap (list, a, b) {
  if (!has(list, a) || !has(list, b)) return
  var tmp = a._index
  a._index = b._index
  list[a._index] = a
  b._index = tmp
  list[b._index] = b
}
{
  "name": "unordered-set",
  "version": "2.0.1",
  "description": "A couple of functions that make it easy to maintain an unordered set as an array in an efficient way",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {
    "standard": "^6.0.4",
    "tape": "^4.4.0"
  },
  "scripts": {
    "test": "standard && tape test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/unordered-set.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/unordered-set/issues"
  },
  "homepage": "https://github.com/mafintosh/unordered-set"
}
const b4a = require('b4a')

unslab.all = all
unslab.is = is

module.exports = unslab

function unslab (buf) {
  if (buf === null || buf.buffer.byteLength === buf.byteLength) return buf
  const copy = b4a.allocUnsafeSlow(buf.byteLength)
  copy.set(buf, 0)
  return copy
}

function is (buf) {
  return buf.buffer.byteLength !== buf.byteLength
}

function all (list) {
  let size = 0
  for (let i = 0; i < list.length; i++) {
    const buf = list[i]
    size += buf === null || buf.buffer.byteLength === buf.byteLength ? 0 : buf.byteLength
  }

  const copy = b4a.allocUnsafeSlow(size)
  const result = new Array(list.length)

  let offset = 0
  for (let i = 0; i < list.length; i++) {
    let buf = list[i]

    if (buf !== null && buf.buffer.byteLength !== buf.byteLength) {
      copy.set(buf, offset)
      buf = copy.subarray(offset, offset += buf.byteLength)
    }

    result[i] = buf
  }

  return result
}
{
  "name": "unslab",
  "version": "1.3.0",
  "description": "Unslab some slab'ed buffers",
  "main": "index.js",
  "files": [
    "index.js"
  ],
  "dependencies": {
    "b4a": "^1.6.6"
  },
  "devDependencies": {
    "brittle": "^3.5.2",
    "standard": "^17.1.0"
  },
  "scripts": {
    "test": "standard && brittle test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/holepunchto/unslab.git"
  },
  "author": "Holepunch",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/unslab/issues"
  },
  "homepage": "https://github.com/holepunchto/unslab"
}
const { runtime, platform, arch, version } =
  typeof Bare !== 'undefined'
    ? {
        runtime: 'bare',
        platform: global.Bare.platform,
        arch: global.Bare.arch,
        version: global.Bare.version
      }
    : typeof process !== 'undefined'
      ? {
          runtime: 'node',
          platform: global.process.platform,
          arch: global.process.arch,
          version: global.process.version
        }
      : typeof Window !== 'undefined'
        ? { runtime: 'browser', platform: 'unknown', arch: 'unknown', version: 'unknown' }
        : { runtime: 'unknown', platform: 'unknown', arch: 'unknown', version: 'unknown' }

exports.runtime = runtime
exports.version = version
exports.platform = platform
exports.arch = arch
exports.isBare = runtime === 'bare'
exports.isBareKit = exports.isBare && typeof BareKit !== 'undefined'
exports.isPear = typeof Pear !== 'undefined'
exports.isNode = runtime === 'node'
exports.isBrowser = runtime === 'browser'
exports.isWindows = platform === 'win32'
exports.isLinux = platform === 'linux'
exports.isMac = platform === 'darwin'
exports.isIOS = platform === 'ios' || platform === 'ios-simulator'
exports.isAndroid = platform === 'android'
exports.isElectron = typeof process !== 'undefined' && !!global.process.versions?.electron
exports.isElectronRenderer = exports.isElectron && global.process.type === 'renderer'
exports.isElectronWorker = exports.isElectron && global.process.type === 'worker'
{
  "name": "which-runtime",
  "version": "1.4.0",
  "description": "Detect if you are in Bare or Node and which os etc",
  "main": "index.js",
  "files": [
    "index.js"
  ],
  "scripts": {
    "format": "prettier --write .",
    "lint": "prettier --check . && lunte .",
    "test": "npm run test:node && npm run test:bare",
    "test:node": "brittle-node test.js",
    "test:bare": "brittle-bare test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/holepunchto/which-runtime.git"
  },
  "author": "Holepunch Inc.",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/holepunchto/which-runtime/issues"
  },
  "homepage": "https://github.com/holepunchto/which-runtime",
  "devDependencies": {
    "brittle": "^3.0.0",
    "lunte": "^1.4.0",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^2.0.0"
  }
}
module.exports = class MaxCache {
  constructor({ maxSize, maxAge, createMap, ongc }) {
    this.maxSize = maxSize
    this.maxAge = maxAge
    this.ongc = ongc || null

    this._createMap = createMap || defaultCreateMap
    this._latest = this._createMap()
    this._oldest = this._createMap()
    this._retained = this._createMap()
    this._gced = false
    this._interval = null

    if (this.maxAge > 0 && this.maxAge < Infinity) {
      const tick = Math.ceil((2 / 3) * this.maxAge)
      this._interval = setInterval(this._gcAuto.bind(this), tick)
      if (this._interval.unref) this._interval.unref()
    }
  }

  get size() {
    return this._latest.size + this._oldest.size + this._retained.size
  }

  *[Symbol.iterator]() {
    for (const it of [this._latest, this._oldest, this._retained]) {
      yield* it
    }
  }

  *keys() {
    for (const it of [this._latest, this._oldest, this._retained]) {
      yield* it.keys()
    }
  }

  *values() {
    for (const it of [this._latest, this._oldest, this._retained]) {
      yield* it.values()
    }
  }

  destroy() {
    this.clear()
    clearInterval(this._interval)
    this._interval = null
  }

  clear() {
    this._gced = true
    this._latest.clear()
    this._oldest.clear()
    this._retained.clear()
  }

  set(k, v) {
    if (this._retained.has(k)) return this
    this._latest.set(k, v)
    this._oldest.delete(k) || this._retained.delete(k)
    if (this._latest.size >= this.maxSize) this._gc()
    return this
  }

  retain(k, v) {
    this._retained.set(k, v)
    this._latest.delete(k) || this._oldest.delete(k)
    return this
  }

  delete(k) {
    return (
      this._latest.delete(k) ||
      this._oldest.delete(k) ||
      this._retained.delete(k)
    )
  }

  has(k) {
    return this._latest.has(k) || this._oldest.has(k) || this._retained.has(k)
  }

  get(k) {
    if (this._latest.has(k)) {
      return this._latest.get(k)
    }

    if (this._oldest.has(k)) {
      const v = this._oldest.get(k)
      this._latest.set(k, v)
      this._oldest.delete(k)
      return v
    }

    if (this._retained.has(k)) {
      return this._retained.get(k)
    }

    return null
  }

  _gcAuto() {
    if (!this._gced) this._gc()
    this._gced = false
  }

  _gc() {
    this._gced = true
    if (this.ongc !== null && this._oldest.size > 0) this.ongc(this._oldest)
    this._oldest = this._latest
    this._latest = this._createMap()
  }
}

function defaultCreateMap() {
  return new Map()
}
{
  "name": "xache",
  "version": "1.3.0",
  "description": "Yet another auto expiring, max sizable cache",
  "main": "index.js",
  "files": [
    "index.js"
  ],
  "devDependencies": {
    "brittle": "^3.3.2",
    "prettier": "^3.6.2",
    "prettier-config-holepunch": "^1.0.0"
  },
  "scripts": {
    "format": "prettier --write .",
    "test": "prettier --check . && brittle test.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/xache.git"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/xache/issues"
  },
  "homepage": "https://github.com/mafintosh/xache"
}
const b4a = require('b4a')

const ALPHABET = 'ybndrfg8ejkmcpqxot1uwisza345h769'
const MIN = 0x31 // 1
const MAX = 0x7a // z
const REVERSE = new Int8Array(1 + MAX - MIN)

REVERSE.fill(-1)

for (let i = 0; i < ALPHABET.length; i++) {
  const v = ALPHABET.charCodeAt(i) - MIN
  REVERSE[v] = i
}

exports.encode = encode
exports.decode = decode
exports.ALPHABET = ALPHABET

function decode (s, out) {
  let pb = 0
  let ps = 0

  const r = s.length & 7
  const q = (s.length - r) / 8

  if (!out) out = b4a.allocUnsafe(Math.ceil(s.length * 5 / 8))

  // 0 5 2 7 4 1 6 3 (+5 mod 8)
  for (let i = 0; i < q; i++) {
    const a = quintet(s, ps++)
    const b = quintet(s, ps++)
    const c = quintet(s, ps++)
    const d = quintet(s, ps++)
    const e = quintet(s, ps++)
    const f = quintet(s, ps++)
    const g = quintet(s, ps++)
    const h = quintet(s, ps++)

    out[pb++] = (a << 3) | (b >>> 2)
    out[pb++] = ((b & 0b11) << 6) | (c << 1) | (d >>> 4)
    out[pb++] = ((d & 0b1111) << 4) | (e >>> 1)
    out[pb++] = ((e & 0b1) << 7) | (f << 2) | (g >>> 3)
    out[pb++] = ((g & 0b111) << 5) | h
  }

  if (r === 0) return out.subarray(0, pb)

  const a = quintet(s, ps++)
  const b = quintet(s, ps++)

  out[pb++] = (a << 3) | (b >>> 2)

  if (r <= 2) return out.subarray(0, pb)

  const c = quintet(s, ps++)
  const d = quintet(s, ps++)

  out[pb++] = ((b & 0b11) << 6) | (c << 1) | (d >>> 4)

  if (r <= 4) return out.subarray(0, pb)

  const e = quintet(s, ps++)

  out[pb++] = ((d & 0b1111) << 4) | (e >>> 1)

  if (r <= 5) return out.subarray(0, pb)

  const f = quintet(s, ps++)
  const g = quintet(s, ps++)

  out[pb++] = ((e & 0b1) << 7) | (f << 2) | (g >>> 3)

  if (r <= 7) return out.subarray(0, pb)

  const h = quintet(s, ps++)

  out[pb++] = ((g & 0b111) << 5) | h

  return out.subarray(0, pb)
}

function encode (buf) {
  if (typeof buf === 'string') buf = b4a.from(buf)

  const max = buf.byteLength * 8

  let s = ''

  for (let p = 0; p < max; p += 5) {
    const i = p >>> 3
    const j = p & 7

    if (j <= 3) {
      s += ALPHABET[(buf[i] >>> (3 - j)) & 0b11111]
      continue
    }

    const of = j - 3
    const h = (buf[i] << of) & 0b11111
    const l = (i >= buf.byteLength ? 0 : buf[i + 1]) >>> (8 - of)

    s += ALPHABET[h | l]
  }

  return s
}

function quintet (s, i) {
  if (i > s.length) {
    return 0
  }

  const v = s.charCodeAt(i)

  if (v < MIN || v > MAX) {
    throw Error('Invalid character in base32 input: "' + s[i] + '" at position ' + i)
  }

  const bits = REVERSE[v - MIN]

  if (bits === -1) {
    throw Error('Invalid character in base32 input: "' + s[i] + '" at position ' + i)
  }

  return bits
}
{
  "name": "z32",
  "version": "1.1.0",
  "description": "Encode & decode z-base32",
  "main": "index.js",
  "dependencies": {
    "b4a": "^1.5.3"
  },
  "devDependencies": {
    "base-x": "^4.0.0",
    "base32": "0.0.7",
    "brittle": "^3.1.3",
    "nanobench": "^3.0.0",
    "rfc4648": "^1.5.2",
    "standard": "^17.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mafintosh/z32.git"
  },
  "scripts": {
    "test": "standard && brittle test.js",
    "bench": "node benchmark.js"
  },
  "author": "Mathias Buus (@mafintosh)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mafintosh/z32/issues"
  },
  "homepage": "https://github.com/mafintosh/z32"
}
'use strict'
// 網路核心：Hyperswarm DHT。
// - 用種子推導金鑰對，swarm.listen() 後就能被別人用我的公鑰找到。
// - joinPeer(對方公鑰) 主動建立並維持一條到對方的直連，每條都是 Noise 端對端加密。
// - 離線信箱：對方不在線時，把「用對方公鑰封裝的密文」投遞到對方的信箱節點暫存；
//   自己上線時連回「我的信箱」收取並就地解密。信箱看不到內容。
// 對外事件：message / ack / profile / peer-status / mailbox-ack / warn。

const EventEmitter = require('events')
const Hyperswarm = require('hyperswarm')
const fs = require('fs')
const { encode, Decoder } = require('./framing')
const mailcrypto = require('./mailcrypto')
const media = require('./media')

// 單一媒體檔上限。對方在 file-begin 宣告的尺寸超過就拒收；
// 沒有這道閘，任何連上的人都能無限往你手機寫檔。
const MAX_MEDIA = 2 * 1024 * 1024 * 1024   // 2GB

class P2P extends EventEmitter {
  constructor () {
    super()
    this.swarm = null
    this.conns = new Map()        // peerHex -> { socket, decoder, isMailbox }
    this.profile = { name: '', mailbox: '' } // 連上時送給對方
    this.mailboxes = new Set()    // 我關注的信箱節點（我的信箱 + 正在投遞的對方信箱）
    this.myMailbox = ''           // 我的信箱公鑰
    this.depositQueue = new Map()  // mailboxHex -> [ {to,id,box,ts} ] 等連上再送
    this.pendingDeposits = new Map() // id -> {resolve, timer}
    this.fetchTimer = null
    this.keepTimer = null         // 周期性確保連線（斷線重連）
    this.wantPeers = new Set()    // 我希望保持連線的對象（聯絡人 / 群組成員 / 信箱）
    this.recv = new Map()         // mediaId -> { ws, mid, peer, size, received, name }
  }

  async start (seed) {
    this.swarm = new Hyperswarm({ seed })
    this.swarm.on('connection', (socket, info) => {
      // 任何一條連線的建立過程出錯，都不該讓整個背景執行緒死掉。
      try { this._onConnection(socket, info) } catch (e) { this.emit('warn', { error: String(e && e.message) }) }
    })
    await this.swarm.listen()
    // 斷線重連：每 15 秒檢查一次，對「想連、但目前沒連上」的對象重新嘗試。
    // Hyperswarm 對 joinPeer 的對象本來就會持續維持/重連；這裡再加一道保險。
    clearInterval(this.keepTimer)
    this.keepTimer = setInterval(() => this._ensureConnections(), 15000)
  }

  _ensureConnections () {
    if (!this.swarm) return
    for (const hex of this.wantPeers) {
      if (!this.conns.has(hex)) {
        try { this.swarm.joinPeer(Buffer.from(hex, 'hex')) } catch {}
      }
    }
    try { this.swarm.flush && this.swarm.flush() } catch {} // 重新廣播自己的位址，利於對方找到（NAT 友善）
  }

  stop () { clearInterval(this.keepTimer); clearInterval(this.fetchTimer) }

  publicKeyHex () {
    return this.swarm ? Buffer.from(this.swarm.keyPair.publicKey).toString('hex') : null
  }

  setProfileName (name) { this.profile.name = name || '' }
  setProfileMailbox (hex) { this.profile.mailbox = hex || '' }

  connectPeer (peerHex) {
    if (!this.swarm) return
    this.wantPeers.add(peerHex)
    this.swarm.joinPeer(Buffer.from(peerHex, 'hex'))
  }

  disconnectPeer (peerHex) {
    if (!this.swarm) return
    this.wantPeers.delete(peerHex)
    try { this.swarm.leavePeer(Buffer.from(peerHex, 'hex')) } catch {}
    const c = this.conns.get(peerHex)
    if (c) { try { c.socket.destroy() } catch {}; this.conns.delete(peerHex) }
  }

  isOnline (peerHex) {
    const c = this.conns.get(peerHex)
    return !!c && !c.isMailbox
  }

  // ---------------- 信箱：我的 ----------------
  setMyMailbox (hex) {
    hex = hex || ''
    if (this.myMailbox === hex) return
    // 解除舊的
    if (this.myMailbox) { this.mailboxes.delete(this.myMailbox); this.disconnectPeer(this.myMailbox) }
    this.myMailbox = hex
    this.setProfileMailbox(hex)
    if (hex) { this.mailboxes.add(hex); this.connectPeer(hex) }
    // 定時收信（萬一中途短暫離線過）
    clearInterval(this.fetchTimer)
    if (hex) this.fetchTimer = setInterval(() => this._fetchMyMailbox(), 45000)
  }

  _fetchMyMailbox () {
    if (this.myMailbox && this.isMailboxConnected(this.myMailbox)) this._write(this.myMailbox, { type: 'fetch' })
  }

  isMailboxConnected (hex) {
    const c = this.conns.get(hex)
    return !!c && c.isMailbox
  }

  // ---------------- 信箱：投遞給離線的對方 ----------------
  // 回傳 Promise<boolean>：是否成功寄存（deposit-ok）。
  depositToMailbox (mailboxHex, toHex, id, boxB64, ts) {
    return new Promise((resolve) => {
      if (!this.swarm || !mailboxHex) return resolve(false)
      const item = { to: toHex, id, box: boxB64, ts }
      if (!this.depositQueue.has(mailboxHex)) this.depositQueue.set(mailboxHex, [])
      this.depositQueue.get(mailboxHex).push(item)

      const timer = setTimeout(() => { this.pendingDeposits.delete(id); resolve(false) }, 20000)
      this.pendingDeposits.set(id, { resolve, timer })

      this.mailboxes.add(mailboxHex)
      if (this.isMailboxConnected(mailboxHex)) this._flushDeposits(mailboxHex)
      else this.connectPeer(mailboxHex) // 連上後在 _onConnection 觸發 flush
    })
  }

  _flushDeposits (mailboxHex) {
    const q = this.depositQueue.get(mailboxHex)
    if (!q || !q.length) return
    for (const it of q) this._write(mailboxHex, { type: 'deposit', to: it.to, id: it.id, box: it.box, ts: it.ts })
    this.depositQueue.set(mailboxHex, [])
  }

  // ---------------- 連線事件 ----------------
  _onConnection (socket, info) {
    const peerHex = Buffer.from(socket.remotePublicKey).toString('hex')
    const existing = this.conns.get(peerHex)
    if (existing && existing.socket !== socket && !existing.socket.destroyed) {
      try { socket.destroy() } catch {}; return
    }
    const isMailbox = this.mailboxes.has(peerHex)
    const decoder = new Decoder(
      (obj) => isMailbox ? this._onMailboxFrame(peerHex, obj) : this._onFrame(peerHex, obj),
      (err) => this.emit('warn', { peer: peerHex, error: String((err && err.message) || err) })
    )
    this.conns.set(peerHex, { socket, decoder, isMailbox })

    // NAT 穿透優化：在底層 UDX 串流上開 keepalive，定期送保活封包，
    // 避免家用路由器/CGNAT 的 NAT 映射在閒置時被回收而「假性斷線」。
    try {
      const raw = socket.rawStream || socket
      if (raw && typeof raw.setKeepAlive === 'function') raw.setKeepAlive(5000)
    } catch {}

    socket.on('data', (chunk) => decoder.push(chunk))
    socket.on('error', () => {})
    socket.on('close', () => {
      const cur = this.conns.get(peerHex)
      if (cur && cur.socket === socket) this.conns.delete(peerHex)
      if (!isMailbox) this.emit('peer-status', { peer: peerHex, online: false })
      // 斷線重連：仍想連的對象，稍後再試一次（與周期性掃描互補）
      if (this.wantPeers.has(peerHex)) {
        setTimeout(() => { if (this.swarm && !this.conns.has(peerHex) && this.wantPeers.has(peerHex)) { try { this.swarm.joinPeer(Buffer.from(peerHex, 'hex')) } catch {} } }, 2500)
      }
    })

    if (isMailbox) {
      this._flushDeposits(peerHex)
      if (peerHex === this.myMailbox) this._write(peerHex, { type: 'fetch' })
    } else {
      this.emit('peer-status', { peer: peerHex, online: true })
      this._write(peerHex, { type: 'profile', name: this.profile.name, mailbox: this.profile.mailbox })
    }
  }

  _onFrame (peerHex, obj) {
    if (!obj || typeof obj.type !== 'string') return
    if (obj.type === 'msg') {
      if (typeof obj.id !== 'string' || typeof obj.text !== 'string') return
      this._write(peerHex, { type: 'ack', id: obj.id })
      this.emit('message', {
        peer: peerHex,
        message: { id: obj.id, dir: 'in', text: obj.text, ts: typeof obj.ts === 'number' ? obj.ts : Date.now(), state: 'delivered' }
      })
    } else if (obj.type === 'rmsg') {
      // 棘輪加密的 1:1 文字：交給 main 解密（解不開也不崩潰）。ack 由 main 在處理後送出。
      if (!/^[0-9a-f]{24}$/.test(obj.id || '') || !obj.header || typeof obj.ct !== 'string') return
      this.emit('rmessage', { peer: peerHex, id: obj.id, header: obj.header, ct: obj.ct, ts: typeof obj.ts === 'number' ? obj.ts : Date.now() })
    } else if (obj.type === 'ttl') {
      // 帶 gid = 群組的閱後即焚設定，要走群組路徑（需驗證對方是不是管理員）
      if (typeof obj.gid === 'string' && /^[0-9a-f]{32}$/.test(obj.gid)) {
        this.emit('group', { peer: peerHex, frame: obj })
      } else {
        this.emit('ttl', { peer: peerHex, seconds: Math.max(0, Number(obj.seconds) || 0) })
      }
    } else if (obj.type === 'ack') {
      if (typeof obj.id === 'string') this.emit('ack', { peer: peerHex, id: obj.id })
    } else if (obj.type === 'profile') {
      this.emit('profile', { peer: peerHex, name: typeof obj.name === 'string' ? obj.name : '', mailbox: typeof obj.mailbox === 'string' ? obj.mailbox : '' })
    } else if (obj.type === 'file-begin') {
      const m = obj.media || {}
      if (typeof m.id !== 'string' || typeof obj.mid !== 'string') return
      if (this.recv.has(m.id)) return                       // 同一 mediaId 重送 -> 忽略，避免洩漏寫入串流
      const size = Number(m.size) || 0
      if (size < 0 || size > MAX_MEDIA) {                   // 對方宣告的尺寸不合理 -> 直接拒收
        this.emit('warn', { peer: peerHex, error: 'media too large: ' + size })
        return
      }
      const gid = (typeof obj.gid === 'string' && /^[0-9a-f]{32}$/.test(obj.gid)) ? obj.gid : null
      const ws = media.openIncoming(m.id, m)
      if (!ws) return
      ws.on('error', () => { this.recv.delete(m.id) })
      this.recv.set(m.id, { ws, mid: obj.mid, peer: peerHex, size, received: 0, name: m.name, gid })
      // 先建立一則「接收中」的訊息，讓畫面顯示進度。
      this.emit('message', {
        peer: peerHex, gid,
        message: { id: obj.mid, dir: 'in', ts: typeof obj.ts === 'number' ? obj.ts : Date.now(), state: 'receiving', kind: 'media', media: { id: m.id, name: m.name, mime: m.mime, mkind: m.mkind, size: m.size }, from: gid ? peerHex : undefined }
      })
    } else if (obj.type === 'file-chunk') {
      const r = this.recv.get(obj.mediaId)
      if (!r || r.peer !== peerHex || typeof obj.data !== 'string') return
      const buf = Buffer.from(obj.data, 'base64')
      // 只信任「對方一開始宣告的尺寸」；超出就中止，否則對方可以無限灌爆手機儲存空間。
      if (r.received + buf.length > r.size) {
        try { r.ws.destroy() } catch {}
        media.remove(obj.mediaId)
        this.recv.delete(obj.mediaId)
        this.emit('file-abort', { peer: peerHex, gid: r.gid, mediaId: obj.mediaId, mid: r.mid, reason: 'oversize' })
        return
      }
      r.ws.write(buf); r.received += buf.length
      this.emit('file-progress', { peer: peerHex, gid: r.gid, mediaId: obj.mediaId, dir: 'in', sent: r.received, size: r.size })
    } else if (obj.type === 'file-end') {
      const r = this.recv.get(obj.mediaId)
      if (!r || r.peer !== peerHex) return
      // 收到的位元組數與宣告不符 -> 視為失敗，不要留下半截檔案假裝成功。
      if (r.size && r.received !== r.size) {
        try { r.ws.destroy() } catch {}
        media.remove(obj.mediaId)
        this.recv.delete(obj.mediaId)
        this.emit('file-abort', { peer: peerHex, gid: r.gid, mediaId: obj.mediaId, mid: r.mid, reason: 'truncated' })
        return
      }
      // end(cb) 的回呼在 bare-stream 上不保證；改用 'finish' 事件，Node 與 Bare 都可靠。
      r.ws.once('finish', () => {
        this._write(peerHex, r.gid ? { type: 'gack', gid: r.gid, id: r.mid } : { type: 'ack', id: r.mid })
        this.emit('msgstate', { peer: peerHex, gid: r.gid, id: r.mid, state: 'delivered' })
        this.emit('file-complete', { peer: peerHex, gid: r.gid, mediaId: obj.mediaId, mid: r.mid, media: media.readMeta(obj.mediaId) })
        this.recv.delete(obj.mediaId)
      })
      r.ws.end()
    } else if (obj.type === 'delete') {
      if (typeof obj.id === 'string') this.emit('delete', { peer: peerHex, id: obj.id })
    } else if (obj.type === 'gmsg' || obj.type === 'gsync' || obj.type === 'gjoin' ||
               obj.type === 'gdelete' || obj.type === 'gack' || obj.type === 'gleave') {
      this.emit('group', { peer: peerHex, frame: obj })
    }
  }

  _onMailboxFrame (mailboxHex, obj) {
    if (!obj || typeof obj.type !== 'string') return
    if (obj.type === 'deposit-ok') {
      this._resolveDeposit(obj.id, true)
    } else if (obj.type === 'deposit-err') {
      this._resolveDeposit(obj.id, false)
    } else if (obj.type === 'mail') {
      if (mailboxHex !== this.myMailbox || !Array.isArray(obj.items)) return
      const kp = this.swarm.keyPair
      const ids = []
      for (const it of obj.items) {
        if (!it || typeof it.box !== 'string') continue
        const plain = mailcrypto.openSealed(it.box, kp.publicKey, kp.secretKey)
        if (!plain) continue
        let m; try { m = JSON.parse(plain.toString('utf8')) } catch { continue }
        if (typeof m.id !== 'string' || typeof m.text !== 'string') continue
        ids.push(it.id)
        this.emit('message', {
          peer: typeof it.from === 'string' ? it.from : '',
          message: { id: m.id, dir: 'in', text: m.text, ts: typeof m.ts === 'number' ? m.ts : it.ts, state: 'delivered', viaMailbox: true }
        })
      }
      if (ids.length) this._write(mailboxHex, { type: 'drain', ids })
    }
  }

  _resolveDeposit (id, ok) {
    const p = this.pendingDeposits.get(id)
    if (!p) return
    clearTimeout(p.timer); this.pendingDeposits.delete(id)
    p.resolve(ok)
    this.emit('mailbox-ack', { id, ok })
  }

  _write (peerHex, obj) {
    const c = this.conns.get(peerHex)
    if (!c || c.socket.destroyed) return false
    try { c.socket.write(encode(obj)); return true } catch { return false }
  }

  // 直連送出一則訊息；false = 對方目前不在線。
  sendMessage (peerHex, id, text, ts) {
    return this._write(peerHex, { type: 'msg', id, text, ts })
  }

  // 棘輪加密文字訊息（header + 密文 base64）。
  sendRatchetMsg (peerHex, id, header, ct, ts) {
    return this._write(peerHex, { type: 'rmsg', id, header, ct, ts })
  }

  sendAck (peerHex, id) { return this._write(peerHex, { type: 'ack', id }) }

  // 同步「閱後即焚」秒數給對方。
  sendTTL (peerHex, seconds) { return this._write(peerHex, { type: 'ttl', seconds }) }

  // 群組訊息回執（用於群組雙勾）。
  sendGroupAck (peerHex, gid, id) { return this._write(peerHex, { type: 'gack', gid, id }) }

  // 串流送出一個媒體檔（任意大小，邊讀邊送，含背壓控制）。
  // mid = 訊息 id；m = 媒體中繼資料；filePath = 媒體庫裡的 .bin 路徑；gid = 群組 id（群組檔案時帶上）。
  sendFile (peerHex, mid, m, filePath, ts, gid) {
    return new Promise((resolve) => {
      const c = this.conns.get(peerHex)
      if (!c || c.isMailbox || c.socket.destroyed) return resolve(false)
      const sock = c.socket
      this._write(peerHex, { type: 'file-begin', mid, media: m, ts, gid })
      const rs = fs.createReadStream(filePath, { highWaterMark: 256 * 1024 })
      let sent = 0
      rs.on('data', (chunk) => {
        const ok = sock.write(encode({ type: 'file-chunk', mediaId: m.id, data: chunk.toString('base64') }))
        sent += chunk.length
        this.emit('file-progress', { peer: peerHex, mediaId: m.id, dir: 'out', sent, size: m.size })
        if (!ok) { rs.pause(); sock.once('drain', () => rs.resume()) }
      })
      rs.on('end', () => { this._write(peerHex, { type: 'file-end', mediaId: m.id }); resolve(true) })
      rs.on('error', () => resolve(false))
    })
  }

  // 為所有人刪除：通知對方移除該訊息。
  sendDelete (peerHex, id) { return this._write(peerHex, { type: 'delete', id }) }

  // 群組檔案：沒有中繼，只能對每個成員各推一份（與 groupBroadcast 同樣是網狀直送）。
  // 回傳 Promise<成功送達的成員數>。
  async sendFileToGroup (memberHexes, mid, m, filePath, ts, gid) {
    const me = this.publicKeyHex()
    let ok = 0
    for (const h of memberHexes) {
      if (!h || h === me) continue
      if (await this.sendFile(h, mid, m, filePath, ts, gid)) ok++
    }
    return ok
  }

  // 群組廣播：把同一個訊框送給每個成員（自己除外）。網狀直送，無中繼。
  groupBroadcast (memberHexes, frame) {
    const me = this.publicKeyHex()
    for (const h of memberHexes) {
      if (h && h !== me) { this.connectPeer(h); this._write(h, frame) }
    }
  }

  async destroy () {
    clearInterval(this.fetchTimer)
    clearInterval(this.keepTimer)
    if (this.swarm) { try { await this.swarm.destroy() } catch {}; this.swarm = null }
    this.conns.clear()
  }
}

module.exports = P2P
{
  "name": "phisorilla-backend",
  "version": "0.6.0",
  "type": "commonjs",
  "imports": {
    "crypto": {
      "bare": "bare-crypto",
      "default": "crypto"
    },
    "fs": {
      "bare": "bare-fs",
      "default": "fs"
    },
    "path": {
      "bare": "bare-path",
      "default": "path"
    },
    "events": {
      "bare": "bare-events",
      "default": "events"
    },
    "stream": {
      "bare": "bare-stream",
      "default": "stream"
    }
  },
  "dependencies": {
    "b4a": "^1.8.1",
    "bare-crypto": "^1.15.3",
    "bare-events": "^2.9.1",
    "bare-fs": "^4.7.4",
    "bare-path": "^3.1.1",
    "bare-stream": "^2.13.3",
    "hyperdht": "^6.33.0",
    "hyperswarm": "^4.17.0",
    "scrypt-js": "^3.0.1",
    "sodium-native": "^5.1.0"
  },
  "devDependencies": {
    "bare-pack": "^2.2.1"
  }
}
'use strict'
// Double Ratchet（逐訊息前向保密 + 後向安全）— 標準 Signal 演算法。
//  · DH 棘輪：Curve25519（X25519）
//  · 根/鏈 KDF：HKDF-SHA256 / HMAC-SHA256
//  · 訊息加密：XChaCha20-Poly1305（每訊息一把一次性金鑰，故 nonce 可固定為零）
//
// 引導（無 X3DH、無額外握手）：雙方由「長期身分金鑰的 X25519 共享祕密」推導同一個根金鑰；
// 以「身分公鑰較小者」為發起方(initiator)。發起方可立即送出；回應方在收到第一則訊息前
// 無法送出（呼叫端需先佇列，待引導完成後再送）。
//
// 安全兜底：任何解密失敗都「丟出例外」，由呼叫端標記為「[無法解密]」，絕不讓程式崩潰。

const sodium = require('sodium-native')
const crypto = require('crypto')
const { hkdfSync } = require('./hkdf')

const MAX_SKIP = 256
const MAX_SKIPPED_STORE = 2048   // 跳過金鑰的總量上限，避免手機記憶體被慢慢撐大
const MAX_COUNTER = 1e6          // 訊息序號的合理上限
const ZERO_NONCE = Buffer.alloc(sodium.crypto_aead_xchacha20poly1305_ietf_NPUBBYTES)
const AKEY = sodium.crypto_aead_xchacha20poly1305_ietf_KEYBYTES
const ABYTES = sodium.crypto_aead_xchacha20poly1305_ietf_ABYTES

// ---- 原語 ----
const hkdf = (salt, ikm, info, len) => Buffer.from(hkdfSync('sha256', ikm, salt, info, len))
const hmac = (key, b) => crypto.createHmac('sha256', key).update(b).digest()
function dh (sk, pk) { const o = Buffer.alloc(32); sodium.crypto_scalarmult(o, sk, pk); return o }
function genKP () { const pk = Buffer.alloc(32), sk = Buffer.alloc(32); sodium.crypto_box_keypair(pk, sk); return { pk, sk } }
function kpFromSeed (seed) { const pk = Buffer.alloc(32), sk = Buffer.alloc(32); sodium.crypto_box_seed_keypair(pk, sk, seed); return { pk, sk } }

function kdfRK (rk, dhOut) { const o = hkdf(rk, dhOut, Buffer.from('phisorilla/dr/rk'), 64); return [o.subarray(0, 32), o.subarray(32, 64)] }
function kdfCK (ck) { return [hmac(ck, Buffer.from([0x02])), hmac(ck, Buffer.from([0x01]))] } // [ck', mk]

function aeadEnc (mk, plain, ad) {
  const c = Buffer.alloc(plain.length + ABYTES)
  sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(c, plain, ad, null, ZERO_NONCE, mk)
  return c
}
function aeadDec (mk, ct, ad) {
  const m = Buffer.alloc(ct.length - ABYTES)
  sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(m, null, ct, ad, ZERO_NONCE, mk) // 失敗會 throw
  return m
}

const adOf = (header) => Buffer.from(JSON.stringify(header), 'utf8')

// ---- 引導 ----
// shared: 由雙方身分金鑰算出的 X25519 共享祕密(Buffer32)。amInitiator: 我方身分公鑰是否較小。
function bootstrap (shared, amInitiator) {
  const RK0 = hkdf(Buffer.alloc(32), shared, Buffer.from('phisorilla/dr/root'), 32)
  const respSeed = hkdf(shared, Buffer.from('responder'), Buffer.from('phisorilla/dr/respkey'), 32)
  const respKP = kpFromSeed(respSeed)
  if (amInitiator) {
    const DHs = genKP()
    const [RK, CKs] = kdfRK(RK0, dh(DHs.sk, respKP.pk))
    return { DHs, DHr: respKP.pk, RK, CKs, CKr: null, Ns: 0, Nr: 0, PN: 0, skipped: {} }
  }
  return { DHs: respKP, DHr: null, RK: RK0, CKs: null, CKr: null, Ns: 0, Nr: 0, PN: 0, skipped: {} }
}

const canSend = (st) => st.CKs != null

// ---- 加密 ----
function encrypt (st, plaintextBuf) {
  if (!canSend(st)) { const e = new Error('RATCHET_NOT_READY'); e.code = 'NOT_READY'; throw e }
  const [CKs, mk] = kdfCK(st.CKs); st.CKs = CKs
  const header = { dh: st.DHs.pk.toString('hex'), pn: st.PN, n: st.Ns }
  st.Ns += 1
  const ct = aeadEnc(mk, plaintextBuf, adOf(header))
  return { header, ct: ct.toString('base64') }
}

// ---- 解密 ----
function trySkipped (st, header, ctBuf) {
  const key = header.dh + ':' + header.n
  const mkB64 = st.skipped[key]
  if (!mkB64) return null
  const mk = Buffer.from(mkB64, 'base64')
  const m = aeadDec(mk, ctBuf, adOf(header))
  delete st.skipped[key]
  return m
}
function skipMessageKeys (st, until) {
  if (st.Nr + MAX_SKIP < until) { const e = new Error('TOO_MANY_SKIPPED'); e.code = 'SKIP'; throw e }
  if (st.CKr == null) return
  const dhrHex = st.DHr.toString('hex')
  while (st.Nr < until) {
    const [CKr, mk] = kdfCK(st.CKr); st.CKr = CKr
    st.skipped[dhrHex + ':' + st.Nr] = mk.toString('base64')
    st.Nr += 1
  }
}
function dhRatchet (st, header) {
  st.PN = st.Ns; st.Ns = 0; st.Nr = 0
  st.DHr = Buffer.from(header.dh, 'hex')
  ;[st.RK, st.CKr] = kdfRK(st.RK, dh(st.DHs.sk, st.DHr))
  st.DHs = genKP()
  ;[st.RK, st.CKs] = kdfRK(st.RK, dh(st.DHs.sk, st.DHr))
}
// 對方送來的 header 完全不可信。先擋掉畸形的，再進任何會動到狀態的路徑。
function validHeader (h) {
  return !!h && typeof h.dh === 'string' && /^[0-9a-f]{64}$/.test(h.dh) &&
    Number.isInteger(h.pn) && h.pn >= 0 && h.pn <= MAX_COUNTER &&
    Number.isInteger(h.n) && h.n >= 0 && h.n <= MAX_COUNTER
}

// 深拷貝一份棘輪狀態；解密失敗時整份丟掉，原狀態一個位元組都不會被碰到。
function cloneState (st) {
  return {
    DHs: { pk: Buffer.from(st.DHs.pk), sk: Buffer.from(st.DHs.sk) },
    DHr: st.DHr ? Buffer.from(st.DHr) : null,
    RK: Buffer.from(st.RK),
    CKs: st.CKs ? Buffer.from(st.CKs) : null,
    CKr: st.CKr ? Buffer.from(st.CKr) : null,
    Ns: st.Ns, Nr: st.Nr, PN: st.PN,
    skipped: Object.assign({}, st.skipped)
  }
}

// 跳過金鑰只增不減會慢慢吃光記憶體；超量就丟掉最舊的（那些訊息本來也等不到了）。
function trimSkipped (st) {
  const keys = Object.keys(st.skipped)
  if (keys.length <= MAX_SKIPPED_STORE) return
  for (const k of keys.slice(0, keys.length - MAX_SKIPPED_STORE)) delete st.skipped[k]
}

function _decrypt (st, header, ctBuf) {
  const sk = trySkipped(st, header, ctBuf)
  if (sk) return sk
  if (st.DHr == null || header.dh !== st.DHr.toString('hex')) {
    skipMessageKeys(st, header.pn)
    dhRatchet(st, header)
  }
  skipMessageKeys(st, header.n)
  if (st.CKr == null) { const e = new Error('NO_RECV_CHAIN'); e.code = 'NO_CKR'; throw e }
  const [CKr, mk] = kdfCK(st.CKr); st.CKr = CKr; st.Nr += 1
  return aeadDec(mk, ctBuf, adOf(header))
}

// ⚠️ 這裡曾經是一個遠端 DoS：
//    原本的 decrypt 直接在 st 上動手，而 dhRatchet 會先寫入 st.DHr/Ns/Nr 才呼叫 dh()。
//    對方只要送一個 header.dh = 'zz'（或任何非曲線上的點），dh() 丟例外時
//    st 已經被改壞了 -> 這條棘輪從此再也解不開任何訊息，且狀態會被存進保險庫，
//    重開 app 也救不回來。任何知道你公鑰的人都能觸發，一則訊框就夠。
//    修法：先驗 header，再在副本上運算，只有成功才寫回。桌面版同樣需要這個修正。
function decrypt (st, header, ctB64) {
  if (!validHeader(header)) { const e = new Error('BAD_HEADER'); e.code = 'BAD_HEADER'; throw e }
  const ctBuf = Buffer.from(ctB64 || '', 'base64')
  if (ctBuf.length <= ABYTES) { const e = new Error('BAD_CIPHERTEXT'); e.code = 'BAD_CT'; throw e }
  const work = cloneState(st)
  const pt = _decrypt(work, header, ctBuf)   // 失敗就直接丟例外，work 整份作廢
  trimSkipped(work)
  Object.assign(st, work)                    // 只有成功才寫回
  return pt
}

// ---- 序列化（存進保險庫）----
function serialize (st) {
  return JSON.stringify({
    DHs: { pk: st.DHs.pk.toString('base64'), sk: st.DHs.sk.toString('base64') },
    DHr: st.DHr ? st.DHr.toString('base64') : null,
    RK: st.RK.toString('base64'),
    CKs: st.CKs ? st.CKs.toString('base64') : null,
    CKr: st.CKr ? st.CKr.toString('base64') : null,
    Ns: st.Ns, Nr: st.Nr, PN: st.PN, skipped: st.skipped
  })
}
function deserialize (json) {
  const o = typeof json === 'string' ? JSON.parse(json) : json
  const b = (x) => Buffer.from(x, 'base64')
  return {
    DHs: { pk: b(o.DHs.pk), sk: b(o.DHs.sk) },
    DHr: o.DHr ? b(o.DHr) : null,
    RK: b(o.RK),
    CKs: o.CKs ? b(o.CKs) : null,
    CKr: o.CKr ? b(o.CKr) : null,
    Ns: o.Ns, Nr: o.Nr, PN: o.PN, skipped: o.skipped || {}
  }
}

module.exports = { bootstrap, encrypt, decrypt, canSend, serialize, deserialize, validHeader, MAX_SKIP, MAX_SKIPPED_STORE }
'use strict'
// 安全碼（safety number）：由「雙方的長期身分公鑰」確定性推導出一串可人工比對的數字。
// 兩邊算出來必定相同（先把兩把公鑰排序，保證次序無關）。
// 用途：帶外比對這串數字，確認你連到的公鑰確實屬於本人，藉此偵測中間人（MITM）。
//   - 數字一致  -> 沒有人在中間掉包公鑰
//   - 數字不同  -> 連線被掉包，或對方換了身分金鑰
// 仿 Signal 的做法：對每把公鑰做多次雜湊得到指紋，各取 30 位數，合併成 60 位數。

const crypto = require('crypto')
const sha512 = (buf) => crypto.createHash('sha512').update(buf).digest()

const ITER = 5200

// 對單一公鑰做迭代雜湊 -> 指紋（取前 30 位數字）
function fingerprintDigits (pub) {
  let h = Buffer.concat([Buffer.from([0x50, 0x68]), pub]) // 'Ph' 版本前綴
  for (let i = 0; i < ITER; i++) h = sha512(Buffer.concat([h, pub]))
  let out = ''
  for (let i = 0; i < 6; i++) {            // 6 組，每組 5 位數 = 30 位
    const slice = h.subarray(i * 5, i * 5 + 5)
    let n = 0
    for (const b of slice) n = (n * 256 + b) % 100000
    out += String(n).padStart(5, '0')
  }
  return out
}

// 兩把公鑰（hex）-> 60 位安全碼，分成 12 組、每組 5 位，空白分隔
function safetyNumber (pubHexA, pubHexB) {
  const a = Buffer.from(pubHexA, 'hex')
  const b = Buffer.from(pubHexB, 'hex')
  const [lo, hi] = pubHexA < pubHexB ? [a, b] : [b, a]
  const digits = fingerprintDigits(lo) + fingerprintDigits(hi) // 60 位
  return digits.match(/.{1,5}/g).join(' ')
}

module.exports = { safetyNumber }
'use strict'
// 以加密保險庫為後盾的儲存層。
// 解鎖後，全部內容（種子／設定／聯絡人／訊息）以單一物件存在記憶體；
// 任何變更都會（去抖動地）重新加密寫回 vault.enc。磁碟上永遠是密文。

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const vault = require('./vault')

let FILE = null
let state = null          // 解鎖後的明文狀態（記憶體）
let password = null       // 僅存在記憶體，供重新加密用
let writeTimer = null

function init (userDataDir) {
  FILE = path.join(userDataDir, 'vault.enc')
}

function exists () {
  return FILE && fs.existsSync(FILE)
}

function blankState () {
  return {
    seed: crypto.randomBytes(32).toString('hex'),
    settings: { displayName: '', background: null, avatar: null, mailbox: '' },
    contacts: [],          // { publicKey, name, remoteName, avatar, mailbox, addedAt }
    messages: {},          // peerHex 或 groupId -> [ {id,dir,text,ts,state} ]
    groups: [],            // { id, name, members:[{pubkey,role,title,name}], createdAt }
    ratchets: {},          // peerHex -> Double Ratchet 序列化狀態（JSON 字串）
    ttls: {},              // peerHex/groupId -> 閱後即焚秒數（0 = 關閉）
    revoked: {}            // groupId -> [被踢過的 pubkey]（本機記錄，不上線路）
  }
}

// 建立新保險庫（首次使用）
function create (pw) {
  state = blankState()
  password = pw
  persistNow()
  return true
}

// 用通行碼解鎖；通行碼錯誤會丟出錯誤
function unlock (pw) {
  const blob = JSON.parse(fs.readFileSync(FILE, 'utf8'))
  state = vault.decrypt(blob, pw) // 錯誤密碼 -> 在此丟出
  // 向後相容：補齊缺漏欄位
  state.settings = Object.assign({ displayName: '', background: null, avatar: null, mailbox: '' }, state.settings || {})
  state.contacts = state.contacts || []
  state.messages = state.messages || {}
  state.groups = state.groups || []
  state.ratchets = state.ratchets || {}
  password = pw
  return true
}

function lock () {
  flush()
  state = null
  password = null
}

function isUnlocked () { return !!state }

function persistNow () {
  if (!state || password == null) return
  const blob = vault.encrypt(state, password)
  const tmp = FILE + '.tmp'
  fs.writeFileSync(tmp, JSON.stringify(blob))
  fs.renameSync(tmp, FILE)
}

// 去抖動寫入，避免連續變更時頻繁加密
function persist () {
  clearTimeout(writeTimer)
  writeTimer = setTimeout(persistNow, 250)
}

function flush () {
  clearTimeout(writeTimer)
  persistNow()
}

// ---- 存取器（全部操作記憶體中的 state，再排程寫回）----
function getSeed () { return Buffer.from(state.seed, 'hex') }

function getSettings () { return state.settings }
function setSettings (patch) { Object.assign(state.settings, patch); persist(); return state.settings }

function getContacts () { return state.contacts }
function saveContacts (list) { state.contacts = list; persist() }

function getGroups () { return state.groups }
function getGroup (id) { return state.groups.find(g => g.id === id) || null }
function saveGroups (list) { state.groups = list; persist() }

function getRatchet (peer) { return state.ratchets[peer] || null }
function setRatchet (peer, json) { state.ratchets[peer] = json; persist() }
function dropRatchet (peer) { delete state.ratchets[peer]; persist() }

function getTTL (key) { return state.ttls[key] || 0 }
function setTTL (key, seconds) {
  if (seconds > 0) state.ttls[key] = seconds; else delete state.ttls[key]
  persist()
}

// 群組踢人名單：純本機記錄，不寫進任何訊框（維持與桌面版的線路相容）。
// 用途：擋掉「被踢的人記得 gid，事後自己 gsync 溜回來」。
function isRevoked (gid, pubkey) { return (state.revoked[gid] || []).includes(pubkey) }
function revoke (gid, pubkey) {
  if (!state.revoked[gid]) state.revoked[gid] = []
  if (!state.revoked[gid].includes(pubkey)) { state.revoked[gid].push(pubkey); persist() }
}
// 管理員重新把某人加回名單時解除封鎖
function unrevoke (gid, pubkey) {
  const l = state.revoked[gid]
  if (!l) return
  const i = l.indexOf(pubkey)
  if (i >= 0) { l.splice(i, 1); persist() }
}
// 群組整個沒了（退群／被踢）-> 封鎖名單也不用留
function clearRevoked (gid) { delete state.revoked[gid]; persist() }

// 所有有訊息的對話鍵（peerHex 或 groupId）——供 TTL 清掃走訪。
function chatKeys () { return Object.keys(state.messages) }

function getMessages (peer) { return state.messages[peer] || [] }
function getMessage (peer, id) {
  const list = state.messages[peer]
  return (list && list.find(m => m.id === id)) || null
}
// 就地更新任意欄位（比 updateMessageState 通用；供 gacks / expiresAt / 媒體進度用）。
function updateMessage (peer, id, patch) {
  const m = getMessage(peer, id)
  if (!m) return null
  Object.assign(m, patch)
  persist()
  return m
}
function hasMessage (peer, id) {
  const list = state.messages[peer]
  return !!list && list.some(m => m.id === id)
}
function appendMessage (peer, msg) {
  if (!state.messages[peer]) state.messages[peer] = []
  state.messages[peer].push(msg)
  persist()
  return msg
}
function updateMessageState (peer, id, st) {
  const list = state.messages[peer]
  if (!list) return null
  const m = list.find(x => x.id === id)
  if (m) { m.state = st; persist() }
  return m || null
}
// 刪除一則訊息（為所有人刪除／本機刪除共用）；回傳被刪的訊息（供清理媒體檔）。
function deleteMessage (peer, id) {
  const list = state.messages[peer]
  if (!list) return null
  const i = list.findIndex(x => x.id === id)
  if (i < 0) return null
  const [removed] = list.splice(i, 1)
  persist()
  return removed
}

module.exports = {
  init, exists, create, unlock, lock, isUnlocked, flush,
  getSeed, getSettings, setSettings,
  getContacts, saveContacts,
  getGroups, getGroup, saveGroups,
  getRatchet, setRatchet, dropRatchet,
  getTTL, setTTL, chatKeys, isRevoked, revoke, unrevoke, clearRevoked,
  getMessages, getMessage, hasMessage, appendMessage,
  updateMessage, updateMessageState, deleteMessage
}
'use strict'
// 本機加密保險庫。全程使用 Node 內建 crypto，不引入任何原生模組。
//   金鑰導出：scrypt（記憶體困難型）
//   對稱加密：AES-256-GCM（附帶完整性驗證標籤）
// 通行碼永不落地；只有解密後的內容在記憶體中。

const crypto = require('crypto')          // Node -> crypto；Bare -> bare-crypto（見 package.json imports）
const { syncScrypt } = require('scrypt-js') // bare-crypto 無 scryptSync；純 JS 版輸出與 Node 位元組一致

const KDF = { N: 1 << 15, r: 8, p: 1 } // ~32MB 記憶體
const MAXMEM = 96 * 1024 * 1024

function deriveKey (password, salt, N, r, p) {
  return Buffer.from(syncScrypt(Buffer.from(password, 'utf8'), salt,
    N || KDF.N, r || KDF.r, p || KDF.p, 32))
}

// 物件 -> 可寫入磁碟的加密 JSON 結構
function encrypt (obj, password) {
  const salt = crypto.randomBytes(16)
  const iv = crypto.randomBytes(12)
  const key = deriveKey(password, salt)
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)
  const plain = Buffer.from(JSON.stringify(obj), 'utf8')
  const ct = Buffer.concat([cipher.update(plain), cipher.final()])
  const tag = cipher.getAuthTag()
  return {
    v: 1,
    kdf: 'scrypt', N: KDF.N, r: KDF.r, p: KDF.p,
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    tag: tag.toString('base64'),
    ct: ct.toString('base64')
  }
}

// 加密結構 + 通行碼 -> 物件；通行碼錯誤會在驗證標籤階段丟出錯誤
function decrypt (blob, password) {
  const salt = Buffer.from(blob.salt, 'base64')
  const iv = Buffer.from(blob.iv, 'base64')
  const tag = Buffer.from(blob.tag, 'base64')
  const ct = Buffer.from(blob.ct, 'base64')
  const key = deriveKey(password, salt, blob.N, blob.r, blob.p)
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv)
  decipher.setAuthTag(tag)
  const plain = Buffer.concat([decipher.update(ct), decipher.final()])
  return JSON.parse(plain.toString('utf8'))
}

module.exports = { encrypt, decrypt }
'use strict'
// ──────────────────────────────────────────────────────────────────────────
// Phisorilla — Bare worklet（桌面版 main.js 的替身）
//
// 跑在 Bare runtime 的背景執行緒裡，由 react-native-bare-kit 嵌入 Android app。
// UI（React Native）透過 IPC 呼叫這裡的 RPC 介面；本檔不碰任何畫面。
//
// 架構對照桌面版：
//   Electron main.js  --ipcMain.handle-->  renderer
//   Bare worklet.js   --RPC over IPC   -->  React Native
//
// ── 設計鐵則（Bare 上比 Electron 嚴格）──────────────────────────────────
// 1. 這條執行緒死掉 = Android 背景服務沒了 = 收不到任何訊息。
//    因此：任何由對方資料觸發的路徑一律包 try/catch，絕不讓例外逃出去。
// 2. 非同步錯誤同樣會殺執行緒 -> 所有 async 都要接住 rejection。
// 3. 對方宣告的任何數字（檔案大小、成員、TTL）都當敵意輸入驗。
//
// ── 與桌面版的相容性 ────────────────────────────────────────────────────
// 線路格式（framing / 訊框 type / 棘輪 / vault）與桌面版**完全一致**，手機與電腦可互連。
// 本檔只改「收到之後怎麼驗證」，不改「線上長什麼樣」。
// ──────────────────────────────────────────────────────────────────────────

/* global Bare, BareKit */

const b4a = require('b4a')
const path = require('path')            // -> bare-path（見 package.json imports）
const crypto = require('crypto')        // -> bare-crypto
const identity = require('./identity')
const store = require('./store')
const ratchet = require('./ratchet')
const mailcrypto = require('./mailcrypto')
const safety = require('./safety')
const media = require('./media')
const P2P = require('./p2p')

// ── RPC 指令表（與桌面版 ipcMain.handle 的名稱對齊）──────────────────────
const CMD = {
  VAULT_STATUS: 1, VAULT_CREATE: 2, VAULT_UNLOCK: 3, APP_LOCK: 4,
  IDENTITY_GET: 10,
  CONTACTS_LIST: 20, CONTACTS_ADD: 21, CONTACTS_REMOVE: 22, CONTACTS_RENAME: 23,
  MESSAGES_LIST: 30, MESSAGE_SEND: 31, MESSAGE_DELETE: 32, MESSAGES_CLEAR: 33,
  SAFETY_GET: 40, SAFETY_VERIFY: 41,
  SETTINGS_GET: 50, SETTINGS_SET_NAME: 51, SETTINGS_SET_MAILBOX: 52, SETTINGS_SET_LANG: 53,
  GROUP_LIST: 60, GROUP_MESSAGES: 61, GROUP_CREATE: 62, GROUP_SEND: 63,
  GROUP_JOIN: 64, GROUP_INVITE: 65, GROUP_KICK: 66, GROUP_SET_ROLE: 67,
  GROUP_SET_TITLE: 68, GROUP_LEAVE: 69, GROUP_RENAME: 70,
  MEDIA_ATTACH: 80, MEDIA_PATH: 81, MEDIA_META: 82,
  TTL_GET: 90, TTL_SET: 91,
  // 由 worklet 主動推給 UI 的事件（對應桌面版 send('evt:...')）
  EVT_MESSAGE: 100, EVT_MSGSTATE: 101, EVT_STATUS: 102,
  EVT_GMESSAGE: 103, EVT_GROUPUPDATE: 104, EVT_PROGRESS: 105,
  EVT_DELETED: 106, EVT_TTL: 107, EVT_PROFILE: 108, EVT_WARN: 109,
  EVT_GROUPGONE: 110
}

const TEXT_TAG = 0x01
const CTRL_TAG = 0x00
const REPLY_TAG = 0x02

const HEX64 = /^[0-9a-f]{64}$/
const HEX32 = /^[0-9a-f]{32}$/
const MSGID = /^[0-9a-f]{24}$/
const ROLES = ['admin', 'member']
const TTL_MAX = 7 * 24 * 3600           // 閱後即焚上限 7 天（對方送來的值也照這個夾住）

let p2p = null
let me = null            // { publicKey, secretKey }
const rcache = new Map() // peerHex -> ratchet state
let burnTimer = null

const myHex = () => (me ? identity.toHex(me.publicKey) : null)
const newMsgId = () => b4a.toString(crypto.randomBytes(12), 'hex')

// 「認識的人」= 聯絡人，或任何群組的成員。
// 注意：Hyperswarm 上任何知道你公鑰的人都連得上你，不需要你先加他。
// 因此收到的東西必須自己判斷是不是認識的人送來的。
function knownPeer (hex) {
  if (store.getContacts().some(c => c.publicKey === hex)) return true
  return store.getGroups().some(g => (g.members || []).some(m => m.pubkey === hex))
}

// ── Double Ratchet 管理（與桌面版邏輯相同）────────────────────────────────
function encodeTextPayload (msg) {
  const body = b4a.from(msg.text, 'utf8')
  if (msg.replyTo && MSGID.test(msg.replyTo)) {
    return b4a.concat([b4a.from([REPLY_TAG]), b4a.from(msg.replyTo, 'latin1'), body])
  }
  return b4a.concat([b4a.from([TEXT_TAG]), body])
}

function ratchetFor (peerHex) {
  if (rcache.has(peerHex)) return rcache.get(peerHex)
  const saved = store.getRatchet(peerHex)
  let r
  if (saved) {
    r = ratchet.deserialize(saved)
  } else {
    const shared = mailcrypto.sharedSecret(me.secretKey, identity.parsePublicKey(peerHex))
    // 決定性初始者：公鑰字典序較小者為 initiator（雙方各自算出同樣結論）
    r = ratchet.bootstrap(shared, myHex() < peerHex)
  }
  rcache.set(peerHex, r)
  return r
}

function persistRatchet (peerHex) {
  const r = rcache.get(peerHex)
  if (r) store.setRatchet(peerHex, ratchet.serialize(r))
}

function sendRatchetText (peerHex, msg) {
  try {
    const r = ratchetFor(peerHex)
    if (!ratchet.canSend(r)) return false        // 尚未引導完成 -> 等對方先來訊息
    const out = ratchet.encrypt(r, encodeTextPayload(msg))
    persistRatchet(peerHex)
    return p2p.sendRatchetMsg(peerHex, msg.id, out.header, out.ct, msg.ts)
  } catch (e) {
    // 安全兜底：訊息留在佇列（state 仍為 sent），但絕不讓後端執行緒死掉
    return false
  }
}

function handleRatchetMsg (peerHex, { id, header, ct, ts }) {
  if (store.hasMessage(peerHex, id)) { p2p.sendAck(peerHex, id); return }
  let text = null
  let replyTo = null
  try {
    const pt = ratchet.decrypt(ratchetFor(peerHex), header, ct)
    persistRatchet(peerHex)      // decrypt 現在是原子的：丟例外時狀態不會被污染，所以這行只在成功後跑
    if (pt.length && pt[0] === CTRL_TAG) {
      // 這通常就是對方的開鏈握手：我方棘輪到這一刻才有送出能力，
      // 先前卡在佇列裡的訊息要馬上補送出去。
      p2p.sendAck(peerHex, id)
      resendPending(peerHex)
      return
    }
    if (pt.length >= 25 && pt[0] === REPLY_TAG) {
      replyTo = b4a.toString(pt.subarray(1, 25), 'latin1')
      text = b4a.toString(pt.subarray(25), 'utf8')
    } else {
      text = b4a.toString(pt.subarray(1), 'utf8')
    }
  } catch (e) {
    // 安全兜底：解不開就標記，不讓 worklet 崩潰
  }
  if (text === null) {
    // 解不開。對「已知聯絡人」顯示佔位符（可能是棘輪失步，使用者該知道有訊息沒收到）；
    // 對「完全不認識的人」直接丟掉——任何知道你公鑰的人都能連上來灌垃圾，
    // 而每存一則訊息就要把整個保險庫重新加密寫回，手機上這是實打實的耗電/耗儲存攻擊。
    if (!knownPeer(peerHex)) return
    text = '[無法解密]'
  }
  const message = { id, dir: 'in', text, ts, state: 'delivered' }
  if (replyTo) message.replyTo = replyTo
  addMessage(peerHex, message)
  push(CMD.EVT_MESSAGE, { peer: peerHex, message })
  p2p.sendAck(peerHex, id)
  resendPending(peerHex)      // 剛剛才拿到 DHr 的話，卡住的訊息現在送得出去了
}

// ── 閱後即焚（TTL）────────────────────────────────────────────────────────
// 語意：每個對話一個秒數，雙方共用（任一方設定都同步給對方，比照 Signal）。
// expiresAt 由「訊息時間戳 + 秒數」決定性算出 -> 兩邊在同一刻燒掉，不靠事件同步。
// 不用 1 秒輪詢：算出「下一個到期時刻」再排一次 timer（手機上省電）。

function stampTTL (key, msg) {
  const s = store.getTTL(key)
  if (s > 0) msg.expiresAt = msg.ts + s * 1000
  return msg
}

// 統一入口：所有寫進 store 的訊息都經過這裡，確保 TTL 一定被蓋章。
function addMessage (key, msg) {
  stampTTL(key, msg)
  store.appendMessage(key, msg)
  if (msg.expiresAt) scheduleBurn()
  return msg
}

function burnExpired () {
  const now = Date.now()
  let next = Infinity
  for (const key of store.chatKeys()) {
    // 先收集再刪，避免邊走訪邊 splice
    const due = store.getMessages(key).filter(m => m.expiresAt && m.expiresAt <= now)
    for (const m of due) {
      dropMedia(m)
      store.deleteMessage(key, m.id)
      push(CMD.EVT_DELETED, { peer: key, id: m.id, reason: 'ttl' })
    }
    for (const m of store.getMessages(key)) {
      if (m.expiresAt && m.expiresAt < next) next = m.expiresAt
    }
  }
  return next
}

function scheduleBurn () {
  clearTimeout(burnTimer); burnTimer = null
  let next
  try { next = burnExpired() } catch (e) { return }
  if (!isFinite(next)) return                       // 沒有待燒的訊息 -> 不掛 timer
  const wait = Math.max(250, Math.min(next - Date.now(), 30 * 60 * 1000)) // 最長 30 分後再醒
  burnTimer = setTimeout(() => { try { scheduleBurn() } catch (e) {} }, wait)
  if (burnTimer && burnTimer.unref) burnTimer.unref()
}

// ── 媒體 ──────────────────────────────────────────────────────────────────
// Android 沒有桌面版的 pmedia:// 自訂協定。改法：worklet 交出 .bin 的絕對路徑，
// RN 端用 file:// 直接渲染；匯出到相簿／下載匣屬於 SAF，只能在原生層做（見 android/）。
function dropMedia (m) {
  if (m && m.kind === 'media' && m.media && m.media.id) {
    try { media.remove(m.media.id) } catch (e) {}
  }
}

// ── 群組 ──────────────────────────────────────────────────────────────────
const GROUP_MAX = 10
const memberHexes = (g) => (g.members || []).map(m => m.pubkey)
const roleOf = (g, hex) => { const m = (g.members || []).find(x => x.pubkey === hex); return m ? m.role : null }
const isAdmin = (g, hex) => roleOf(g, hex) === 'admin'

function groupView (g) {
  const mine = (g.members || []).find(m => m.pubkey === myHex())
  // 自己永遠算在線；在線數含自己（與桌面版 v0.5.2 修正後一致）
  const members = (g.members || []).map(m => ({
    ...m, online: m.pubkey === myHex() ? true : (p2p ? p2p.isOnline(m.pubkey) : false)
  }))
  return {
    id: g.id, name: g.name, members, createdAt: g.createdAt,
    myRole: mine ? mine.role : 'guest',
    online: members.filter(m => m.online).length,
    ttl: store.getTTL(g.id)
  }
}

// 把外來的群組物件正規化，順便擋掉畸形／超量成員。
function sanitizeGroup (src, gid) {
  const seen = new Set()
  const members = []
  for (const m of (src.members || [])) {
    if (!m || !HEX64.test(m.pubkey || '') || seen.has(m.pubkey)) continue
    seen.add(m.pubkey)
    members.push({
      pubkey: m.pubkey,
      role: ROLES.includes(m.role) ? m.role : 'member',
      title: String(m.title || '').slice(0, 24),
      name: String(m.name || '').slice(0, 48)
    })
    if (members.length >= GROUP_MAX) break
  }
  return {
    id: gid,
    name: String(src.name || '未命名群組').slice(0, 48),
    members,
    createdAt: typeof src.createdAt === 'number' ? src.createdAt : Date.now()
  }
}

// ── 群組狀態的授權模型（這是原本最大的洞）──────────────────────────────
//
// 原本的規則只有一條：「gsync 裡有我，就整包覆蓋」。
// 後果：任何知道 gid 的人（例如被踢掉的前成員，或拿到過邀請碼的任何人）
// 都能送一個 gsync 把群組整個換掉——改名、踢光所有人、把自己設成 admin。
// gid 又明文寫在邀請碼裡，等於這個群組永遠可被劫持。
//
// 修法（刻意不動線路格式，維持與桌面版互通，只改「收到之後怎麼驗」）：
//   · 沒有這個群組    -> 只在「我和寄件人都在名單裡」時接受（這就是邀請加入流程）
//   · 寄件人是 admin  -> 接受任何變更（含把我踢掉）
//   · 寄件人是一般成員 -> 只接受「把他自己加進來／改他自己的顯示名」這一種變化
//   · 寄件人不是成員   -> 一律拒絕  ← 關鍵的那道閘
//
// ⚠️ 誠實話：這仍然是「最後寫入者獲勝 + 角色檢查」，不是密碼學保證。
//    群組狀態沒有簽章，兩個 admin 可以打架，也無法向第三方證明誰改了什麼。
//    要真的做對，需要「每筆群組操作都由操作者簽名」的操作日誌／CRDT。
//    那超出本次移植範圍。但這個洞已從「任何路人可劫持」降到「admin 才能亂搞」。
function selfChangeOnly (mine, incoming, peer) {
  if (incoming.name !== mine.name) return false
  const before = new Map(mine.members.map(m => [m.pubkey, m]))
  const after = new Map(incoming.members.map(m => [m.pubkey, m]))
  for (const [pk, m] of after) {
    const b = before.get(pk)
    if (!b) { if (pk !== peer || m.role !== 'member') return false; continue } // 只能新增「他自己」且為一般成員
    if (b.role !== m.role || b.title !== m.title) return false                 // 不准改任何人的角色／頭銜
    if (b.name !== m.name && pk !== peer) return false                         // 只能改自己的顯示名
  }
  for (const pk of before.keys()) if (!after.has(pk)) return false             // 不准刪任何人
  return true
}

function gsyncAllowed (mine, incoming, peer) {
  if (!mine) {
    // 我還沒有這個群 -> 這是邀請加入流程：我和對方都得在名單裡
    return incoming.members.some(m => m.pubkey === myHex()) &&
           incoming.members.some(m => m.pubkey === peer)
  }
  if (isAdmin(mine, peer)) return true                                  // 管理員：任何變更
  if (roleOf(mine, peer)) return selfChangeOnly(mine, incoming, peer)   // 一般成員：只能動自己

  // 還不是成員 -> 這是「拿著邀請碼的新人」在自報到。
  // ⚠️ 誠實話：邀請碼只是 base64 的 JSON，沒有任何密碼學憑證，
  //    等於「知道 gid 就能加入」的持有者權杖模型。這是桌面版既有設計，這裡沒辦法在
  //    不破壞互通的前提下修掉。能做的是不讓「被踢過的人」憑記憶中的 gid 溜回來。
  if (store.isRevoked(mine.id, peer)) return false
  if (mine.members.length >= GROUP_MAX) return false
  return selfChangeOnly(mine, incoming, peer)
}

function saveGroup (g) {
  const gs = store.getGroups()
  const i = gs.findIndex(x => x.id === g.id)
  if (i >= 0) gs[i] = g; else gs.push(g)
  store.saveGroups(gs)
}

function dropGroup (gid) {
  store.saveGroups(store.getGroups().filter(g => g.id !== gid))
}

function handleGroupFrame (peer, f) {
  const gid = f.gid || (f.group && f.group.id)
  if (typeof gid !== 'string' || !HEX32.test(gid)) return

  if (f.type === 'gmsg') {
    const g = store.getGroup(gid)
    if (!g || !g.members.some(m => m.pubkey === peer)) return
    if (typeof f.id !== 'string' || !MSGID.test(f.id)) return
    p2p.sendGroupAck(peer, gid, f.id)                 // 回執（群組雙勾）
    if (store.hasMessage(gid, f.id)) return           // 去重
    const message = {
      id: f.id, dir: 'in', text: String(f.text || ''),
      ts: typeof f.ts === 'number' ? f.ts : Date.now(), state: 'delivered', from: peer
    }
    if (typeof f.reply === 'string' && MSGID.test(f.reply)) message.replyTo = f.reply
    addMessage(gid, message)
    push(CMD.EVT_GMESSAGE, { gid, message, group: groupView(g) })

  } else if (f.type === 'gack') {
    const g = store.getGroup(gid); if (!g) return
    if (!g.members.some(m => m.pubkey === peer)) return    // 非成員的回執不算數
    const m = store.getMessage(gid, f.id)
    if (!m || m.dir !== 'out') return
    const gacks = m.gacks || []
    if (!gacks.includes(peer)) gacks.push(peer)
    // 「其他成員全部回執」才算送達。用當下的成員名單算：踢人之後不該永遠卡在單勾。
    const others = g.members.filter(x => x.pubkey !== myHex()).map(x => x.pubkey)
    const delivered = others.length > 0 && others.every(pk => gacks.includes(pk))
    const was = m.state
    store.updateMessage(gid, f.id, { gacks, state: delivered ? 'delivered' : was })
    if (delivered && was !== 'delivered') push(CMD.EVT_MSGSTATE, { peer: gid, id: f.id, state: 'delivered' })

  } else if (f.type === 'gsync') {
    const mine = store.getGroup(gid)
    const incoming = sanitizeGroup(f.group || {}, gid)
    if (!incoming.members.length) return
    if (!gsyncAllowed(mine, incoming, peer)) return

    // 管理員送來的名單是權威：被移除的人記進本機封鎖名單，被加回的人解除封鎖。
    if (mine && isAdmin(mine, peer)) {
      const after = new Set(incoming.members.map(m => m.pubkey))
      for (const m of mine.members) if (!after.has(m.pubkey) && m.pubkey !== myHex()) store.revoke(gid, m.pubkey)
      for (const pk of after) store.unrevoke(gid, pk)
    }

    if (!incoming.members.some(m => m.pubkey === myHex())) {
      // admin 送來一份沒有我的名單 = 我被踢了
      if (mine) { dropGroup(gid); store.clearRevoked(gid); push(CMD.EVT_GROUPGONE, { gid, reason: 'kicked' }) }
      return
    }
    const wasMember = mine ? !!roleOf(mine, peer) : false
    saveGroup(incoming)
    for (const h of memberHexes(incoming)) if (h !== myHex()) p2p.connectPeer(h)
    push(CMD.EVT_GROUPUPDATE, { group: groupView(incoming) })
    // 對方是新加入的成員、而我是管理員 -> 回一份權威名單，讓所有人收斂到同一版。
    if (!wasMember && isAdmin(incoming, myHex()) && peer !== myHex()) {
      p2p.groupBroadcast(memberHexes(incoming), { type: 'gsync', group: incoming })
    }

  } else if (f.type === 'gleave') {
    // 任何人都有權把「他自己」移出群組——這是唯一不需要 admin 的成員名單變更。
    const g = store.getGroup(gid)
    if (!g || !g.members.some(x => x.pubkey === peer)) return
    g.members = g.members.filter(x => x.pubkey !== peer)
    saveGroup(g)
    push(CMD.EVT_GROUPUPDATE, { group: groupView(g) })

  } else if (f.type === 'ttl') {
    const g = store.getGroup(gid)
    if (!g || !isAdmin(g, peer)) return          // 群組的閱後即焚只有管理員能改
    const s = Math.max(0, Math.min(Math.floor(Number(f.seconds)) || 0, TTL_MAX))
    store.setTTL(gid, s)
    push(CMD.EVT_TTL, { peer: gid, seconds: s, by: 'peer' })
    scheduleBurn()

  } else if (f.type === 'gdelete') {
    const g = store.getGroup(gid)
    if (!g || !g.members.some(x => x.pubkey === peer)) return
    const m = store.getMessage(gid, f.id)
    if (!m) return
    // 只能刪「自己發的」；admin 可以刪任何人的。否則群裡任何人都能刪光別人的訊息。
    if (m.from !== peer && !isAdmin(g, peer)) return
    dropMedia(m)
    store.deleteMessage(gid, f.id)
    push(CMD.EVT_DELETED, { peer: gid, id: f.id, reason: 'remote' })
  }
}

// ── P2P 事件接線 ──────────────────────────────────────────────────────────
// 原本只接了 rmessage / ack / group / peer-status。
// 其餘（媒體、TTL、profile、刪除、進度）p2p.js 都在發，但沒人聽 -> 功能等於不存在。
function startSwarm () {
  p2p = new P2P()

  p2p.on('rmessage', ({ peer, ...rest }) => guard(() => handleRatchetMsg(peer, rest)))
  p2p.on('group', ({ peer, frame }) => guard(() => handleGroupFrame(peer, frame)))

  p2p.on('ack', ({ peer, id }) => guard(() => {
    store.updateMessageState(peer, id, 'delivered')
    push(CMD.EVT_MSGSTATE, { peer, id, state: 'delivered' })
  }))

  p2p.on('peer-status', ({ peer, online }) => guard(() => {
    push(CMD.EVT_STATUS, { peer, online })
    if (online) { kickstartRatchet(peer); resendPending(peer) }
  }))

  // 明文 msg／信箱取回／媒體開始 都走這裡
  p2p.on('message', ({ peer, gid, message }) => guard(() => {
    const key = gid || peer
    if (!key || !message || typeof message.id !== 'string') return
    if (gid) {                                   // 群組媒體：寄件人必須是成員
      const g = store.getGroup(gid)
      if (!g || !g.members.some(m => m.pubkey === peer)) return
    }
    if (store.hasMessage(key, message.id)) return
    addMessage(key, message)
    push(gid ? CMD.EVT_GMESSAGE : CMD.EVT_MESSAGE, gid ? { gid, message } : { peer, message })
  }))

  p2p.on('msgstate', ({ peer, gid, id, state }) => guard(() => {
    const key = gid || peer
    store.updateMessageState(key, id, state)
    push(CMD.EVT_MSGSTATE, { peer: key, id, state })
  }))

  // 進度事件很密集：只推給 UI，不寫進保險庫（每次寫都要重新加密整包）
  p2p.on('file-progress', (e) => push(CMD.EVT_PROGRESS, e))

  p2p.on('file-complete', ({ peer, gid, mid, media: meta }) => guard(() => {
    const key = gid || peer
    const patch = { state: 'delivered' }
    if (meta) patch.media = meta
    store.updateMessage(key, mid, patch)
    push(CMD.EVT_MSGSTATE, { peer: key, id: mid, state: 'delivered' })
  }))

  p2p.on('file-abort', ({ peer, gid, mid, reason }) => guard(() => {
    const key = gid || peer
    store.updateMessage(key, mid, { state: 'failed', error: reason })
    push(CMD.EVT_MSGSTATE, { peer: key, id: mid, state: 'failed', error: reason })
  }))

  // 為所有人刪除（1:1）：對方只能撤回「他自己發給我的」訊息。
  p2p.on('delete', ({ peer, id }) => guard(() => {
    const m = store.getMessage(peer, id)
    if (!m || m.dir !== 'in') return
    dropMedia(m)
    store.deleteMessage(peer, id)
    push(CMD.EVT_DELETED, { peer, id, reason: 'remote' })
  }))

  // 對方改了閱後即焚秒數
  p2p.on('ttl', ({ peer, seconds }) => guard(() => {
    const s = Math.max(0, Math.min(Math.floor(seconds) || 0, TTL_MAX))
    store.setTTL(peer, s)
    push(CMD.EVT_TTL, { peer, seconds: s, by: 'peer' })
    scheduleBurn()
  }))

  p2p.on('profile', ({ peer, name, mailbox }) => guard(() => {
    const list = store.getContacts()
    const c = list.find(x => x.publicKey === peer)
    if (!c) return
    c.remoteName = String(name || '').slice(0, 48)
    if (HEX64.test(mailbox || '')) c.mailbox = mailbox
    store.saveContacts(list)
    push(CMD.EVT_PROFILE, { peer, remoteName: c.remoteName, mailbox: c.mailbox || '' })
  }))

  p2p.on('warn', (e) => push(CMD.EVT_WARN, e))

  const st = store.getSettings()
  p2p.setProfileName(st.displayName || '')

  // start() 是 async：不接住 rejection 的話，Bare 上的未處理拒絕會直接殺掉執行緒。
  p2p.start(store.getSeed())
    .then(() => {
      for (const c of store.getContacts()) p2p.connectPeer(c.publicKey)
      for (const g of store.getGroups()) {
        for (const h of memberHexes(g)) if (h !== myHex()) p2p.connectPeer(h)
      }
      if (HEX64.test(st.mailbox || '')) p2p.setMyMailbox(st.mailbox)
      push(CMD.EVT_STATUS, { swarm: 'listening', publicKey: myHex() })
    })
    .catch((e) => push(CMD.EVT_WARN, { error: 'swarm 啟動失敗: ' + String(e && e.message) }))
}

// 任何由對方輸入觸發的處理，都不准把例外丟出去（丟出去 = 背景服務死亡）。
function guard (fn) {
  try { fn() } catch (e) { push(CMD.EVT_WARN, { error: String((e && e.message) || e) }) }
}

// 🔴 棘輪只有「字典序較小」的那一方能先開口（bootstrap 時 responder 的 CKs 是 null）。
// 也就是說 responder 想先講話的話，訊息會一直卡在 state:'sent'，兩邊明明都在線卻永遠送不到。
// 這會影響大約一半的新對話（看公鑰誰大誰小），而且畫面上還是打勾，使用者完全看不出來。
//
// 解法：initiator 一連上線就主動送一則 CTRL 握手訊息，把鏈路打開。
//   · CTRL_TAG 的訊框收端【本來就有處理】（回 ack 然後忽略），所以線路格式完全沒變，
//     和桌面版仍然互通——桌面版收到只會靜靜 ack 掉。
//   · 只在 Ns === 0（這條鏈從沒送過東西）時送，所以每個聯絡人只會發生一次。
function kickstartRatchet (peerHex) {
  try {
    if (!HEX64.test(peerHex || '') || peerHex === myHex()) return
    if (myHex() > peerHex) return                  // 我是 responder，只能等對方先開口
    const r = ratchetFor(peerHex)
    if (!ratchet.canSend(r) || r.Ns !== 0) return  // 沒 bootstrap 完，或鏈路已經開過了
    const out = ratchet.encrypt(r, b4a.from([CTRL_TAG]))
    persistRatchet(peerHex)
    p2p.sendRatchetMsg(peerHex, newMsgId(), out.header, out.ct, Date.now())
  } catch (e) {}                                   // 握手失敗不能拖垮任何東西
}

// 對方上線時補送未送達的訊息（與桌面版相同策略）
function resendPending (peerHex) {
  for (const m of store.getMessages(peerHex)) {
    if (m.dir !== 'out' || m.state === 'delivered') continue
    if (!m.kind) sendRatchetText(peerHex, m)
  }
}

// 對方不在線且我們知道他的信箱 -> 用他的公鑰封裝後寄存（信箱看不到內容）。
// ⚠️ 誠實話：信箱這條路只有 sealed box，**沒有棘輪的前向保密**。
//    身分私鑰若日後外洩，寄存過的訊息可被回溯解密。這是桌面版既有設計，照搬以維持互通。
function tryMailbox (peerHex, msg) {
  try {
    const c = store.getContacts().find(x => x.publicKey === peerHex)
    if (!c || !HEX64.test(c.mailbox || '')) return
    const box = mailcrypto.sealFor(identity.parsePublicKey(peerHex),
      b4a.from(JSON.stringify({ id: msg.id, text: msg.text, ts: msg.ts }), 'utf8'))
    Promise.resolve(p2p.depositToMailbox(c.mailbox, peerHex, msg.id, box, msg.ts))
      .then((ok) => { if (ok) push(CMD.EVT_MSGSTATE, { peer: peerHex, id: msg.id, state: 'mailboxed' }) })
      .catch(() => {})
  } catch (e) {}
}

// ── RPC 介面 ──────────────────────────────────────────────────────────────
const handlers = {
  [CMD.VAULT_STATUS]: () => ({ exists: store.exists(), unlocked: store.isUnlocked() }),

  [CMD.VAULT_CREATE]: ({ password }) => {
    if (typeof password !== 'string' || password.length < 6) return { ok: false, error: '通行碼至少 6 個字。' }
    store.create(password)
    me = identity.keyPairFromSeed(store.getSeed())
    startSwarm()
    return { ok: true, publicKey: myHex() }
  },

  [CMD.VAULT_UNLOCK]: ({ password }) => {
    try {
      store.unlock(password)
    } catch (e) {
      return { ok: false, error: '通行碼錯誤。' }   // GCM 驗證標籤擋下
    }
    me = identity.keyPairFromSeed(store.getSeed())
    startSwarm()
    scheduleBurn()          // 解鎖時先把離線期間已到期的訊息燒掉
    return { ok: true, publicKey: myHex() }
  },

  [CMD.APP_LOCK]: () => {
    clearTimeout(burnTimer); burnTimer = null
    if (p2p) { const old = p2p; p2p = null; Promise.resolve(old.destroy()).catch(() => {}) }
    rcache.clear()
    me = null
    store.lock()
    return { ok: true }
  },

  [CMD.IDENTITY_GET]: () => ({ publicKey: myHex(), short: identity.shortKey(myHex()) }),

  [CMD.CONTACTS_LIST]: () => store.getContacts().map(c => ({
    ...c, online: p2p ? p2p.isOnline(c.publicKey) : false, ttl: store.getTTL(c.publicKey)
  })),

  [CMD.CONTACTS_ADD]: ({ publicKey, name }) => {
    const pk = identity.parsePublicKey(publicKey)     // 注意：格式錯是回傳 null，不是丟例外
    if (!pk) return { ok: false, error: '公鑰格式不正確。' }
    // 格式正確不代表是曲線上的合法點；不驗的話，之後建立棘輪時 sodium 會丟出
    // 未接住的例外並殺死整個 worklet。這裡先試轉一次 Curve25519 當作驗證。
    try { mailcrypto.edPkToCurve(pk) } catch { return { ok: false, error: '這不是有效的公鑰。' } }
    const hex = identity.toHex(pk)
    if (hex === myHex()) return { ok: false, error: '不能加自己。' }
    const list = store.getContacts()
    if (list.some(c => c.publicKey === hex)) return { ok: false, error: '已經在聯絡人裡了。' }
    const contact = { publicKey: hex, name: String(name || '').slice(0, 48), addedAt: Date.now(), verified: false }
    list.push(contact)
    store.saveContacts(list)
    p2p.connectPeer(hex)
    return { ok: true, contact }
  },

  [CMD.CONTACTS_REMOVE]: ({ publicKey }) => {
    store.saveContacts(store.getContacts().filter(c => c.publicKey !== publicKey))
    store.dropRatchet(publicKey)
    rcache.delete(publicKey)
    for (const m of store.getMessages(publicKey)) dropMedia(m)
    if (p2p) p2p.disconnectPeer(publicKey)
    return { ok: true }
  },

  [CMD.CONTACTS_RENAME]: ({ publicKey, name }) => {
    const list = store.getContacts()
    const c = list.find(x => x.publicKey === publicKey)
    if (!c) return { ok: false, error: '找不到這位聯絡人。' }
    c.name = String(name || '').slice(0, 48)
    store.saveContacts(list)
    return { ok: true, contact: c }
  },

  [CMD.MESSAGES_LIST]: ({ peer }) => store.getMessages(peer),

  [CMD.MESSAGE_SEND]: ({ peer, text, replyTo }) => {
    if (!HEX64.test(peer || '')) return { ok: false, error: '對象不正確。' }
    text = String(text || '').trim()
    if (!text) return { ok: false, error: '訊息是空的。' }
    const msg = { id: newMsgId(), dir: 'out', text, ts: Date.now(), state: 'sent' }
    if (replyTo && MSGID.test(replyTo)) msg.replyTo = replyTo
    addMessage(peer, msg)
    if (!sendRatchetText(peer, msg)) tryMailbox(peer, msg)   // 送不出去 -> 寄信箱；再不行就排隊等上線
    return { ok: true, message: msg }
  },

  // 為所有人刪除／本機刪除。只有「自己發出的」才能撤回。
  [CMD.MESSAGE_DELETE]: ({ peer, id, forEveryone }) => {
    const m = store.getMessage(peer, id)
    if (!m) return { ok: false, error: '找不到這則訊息。' }
    if (forEveryone) {
      if (m.dir !== 'out') return { ok: false, error: '只能撤回自己發出的訊息。' }
      const g = store.getGroup(peer)
      if (g) p2p.groupBroadcast(memberHexes(g), { type: 'gdelete', gid: peer, id })
      else p2p.sendDelete(peer, id)
    }
    dropMedia(m)
    store.deleteMessage(peer, id)
    push(CMD.EVT_DELETED, { peer, id, reason: forEveryone ? 'me-all' : 'me-local' })
    return { ok: true }
  },

  [CMD.MESSAGES_CLEAR]: ({ peer }) => {
    for (const m of store.getMessages(peer).slice()) {
      dropMedia(m)
      store.deleteMessage(peer, m.id)
    }
    return { ok: true }
  },

  [CMD.SAFETY_GET]: ({ peer }) => {
    if (!HEX64.test(peer || '')) return { code: '' }
    const c = store.getContacts().find(x => x.publicKey === peer)
    return { code: safety.safetyNumber(myHex(), peer), verified: !!(c && c.verified) }
  },

  // 桌面版有這個介面但這裡漏做，呼叫會直接回 "unknown cmd 41"。
  // 帶外比對過安全碼之後，把這位聯絡人標記為已驗證。
  [CMD.SAFETY_VERIFY]: ({ peer, verified }) => {
    const list = store.getContacts()
    const c = list.find(x => x.publicKey === peer)
    if (!c) return { ok: false, error: '找不到這位聯絡人。' }
    c.verified = verified !== false
    c.verifiedAt = c.verified ? Date.now() : null
    store.saveContacts(list)
    return { ok: true, verified: c.verified }
  },

  [CMD.SETTINGS_GET]: () => store.getSettings(),

  [CMD.SETTINGS_SET_NAME]: ({ name }) => {
    const n = String(name || '').slice(0, 48)
    store.setSettings({ displayName: n })
    if (p2p) p2p.setProfileName(n)          // 原本只寫進 store，對方永遠看不到你改名
    return { ok: true }
  },

  [CMD.SETTINGS_SET_MAILBOX]: ({ mailbox }) => {
    const hex = String(mailbox || '').trim().toLowerCase()
    if (hex && !HEX64.test(hex)) return { ok: false, error: '信箱公鑰格式不正確。' }
    store.setSettings({ mailbox: hex })
    if (p2p) p2p.setMyMailbox(hex)
    return { ok: true }
  },

  // 语言偏好（纯本机，不上线路）。只接受已知的三个值。
  [CMD.SETTINGS_SET_LANG]: ({ lang }) => {
    const l = String(lang || '')
    if (!['tw', 'cn', 'en'].includes(l)) return { ok: false, error: 'unknown lang' }
    store.setSettings({ lang: l })
    return { ok: true }
  },

  // ── 閱後即焚 ────────────────────────────────────────────────────────────
  [CMD.TTL_GET]: ({ key }) => ({ seconds: store.getTTL(key) }),

  [CMD.TTL_SET]: ({ key, seconds }) => {
    const s = Math.max(0, Math.min(Math.floor(Number(seconds)) || 0, TTL_MAX))
    const g = store.getGroup(key)
    if (g && !isAdmin(g, myHex())) return { ok: false, error: '只有管理員可以改群組的閱後即焚。' }
    store.setTTL(key, s)
    if (g) p2p.groupBroadcast(memberHexes(g), { type: 'ttl', gid: key, seconds: s })
    else if (HEX64.test(key || '')) p2p.sendTTL(key, s)
    // 只影響之後的訊息；不追溯既有訊息（與 Signal 一致，避免「一改設定就燒掉整段歷史」）
    push(CMD.EVT_TTL, { peer: key, seconds: s, by: 'me' })
    return { ok: true, seconds: s }
  },

  // ── 媒體 ────────────────────────────────────────────────────────────────
  // path 由 RN 端提供：Android 的相簿／檔案選取器給的是 content:// URI，
  // 必須先在原生層複製成真實路徑再傳進來（bare-fs 開不了 content://）。
  [CMD.MEDIA_ATTACH]: ({ peer, gid, path: src, name }) => {
    const key = gid || peer
    if (!key) return Promise.resolve({ ok: false, error: '沒有指定對象。' })
    if (typeof src !== 'string' || !src) return Promise.resolve({ ok: false, error: '沒有檔案路徑。' })
    const g = gid ? store.getGroup(gid) : null
    if (gid && !g) return Promise.resolve({ ok: false, error: '找不到群組。' })

    return media.importFile(src, name).then((m) => {
      const msg = {
        id: newMsgId(), dir: 'out', ts: Date.now(), state: 'sent',
        kind: 'media', media: m, text: m.name
      }
      addMessage(key, msg)
      const done = gid
        ? p2p.sendFileToGroup(memberHexes(g), msg.id, m, media.binPath(m.id), msg.ts, gid)
        : p2p.sendFile(peer, msg.id, m, media.binPath(m.id), msg.ts)
      Promise.resolve(done).catch(() => {})     // 送失敗就留佇列；rejection 不能逃出去
      return { ok: true, message: msg }
    }).catch((e) => ({ ok: false, error: '讀不到這個檔案：' + String(e && e.message) }))
  },

  // Android 沒有 pmedia://：交出實體路徑，RN 端用 file:// 渲染；
  // 要存到相簿／下載匣則由原生層走 SAF（見 android/PhiMediaModule.kt）。
  [CMD.MEDIA_PATH]: ({ id }) => {
    if (!media.exists(id)) return { ok: false, error: '媒體不存在。' }
    return { ok: true, path: media.binPath(id), uri: 'file://' + media.binPath(id), meta: media.readMeta(id) }
  },

  [CMD.MEDIA_META]: ({ id }) => media.readMeta(id) || { ok: false, error: '媒體不存在。' },

  // ── 群組 ────────────────────────────────────────────────────────────────
  [CMD.GROUP_LIST]: () => store.getGroups().map(groupView),

  [CMD.GROUP_MESSAGES]: ({ gid }) => store.getMessages(gid),

  [CMD.GROUP_CREATE]: ({ name, members }) => {
    name = String(name || '').trim().slice(0, 48) || '未命名群組'
    const id = b4a.toString(crypto.randomBytes(16), 'hex')
    const picks = (members || []).filter(pk => HEX64.test(pk) && pk !== myHex()).slice(0, GROUP_MAX - 1)
    const mem = [{ pubkey: myHex(), role: 'admin', title: '', name: store.getSettings().displayName || '' }]
    for (const pk of picks) {
      const c = store.getContacts().find(x => x.publicKey === pk)
      mem.push({ pubkey: pk, role: 'member', title: '', name: c ? (c.name || '') : '' })
    }
    const g = { id, name, members: mem, createdAt: Date.now() }
    saveGroup(g)
    p2p.groupBroadcast(memberHexes(g), { type: 'gsync', group: g })
    return { ok: true, group: groupView(g) }
  },

  // for（選填）：指定這張邀請碼是發給誰的。指定的話會順便解除他的封鎖，
  // 讓「踢掉之後又想請回來」這件事做得到（不指定的話，被踢過的人用不了這張碼）。
  [CMD.GROUP_INVITE]: ({ gid, for: target }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    if (!isAdmin(g, myHex())) return { ok: false, error: '只有管理員可以邀請。' }
    if (g.members.length >= GROUP_MAX) return { ok: false, error: '群組已達 10 人上限。' }
    if (HEX64.test(target || '')) store.unrevoke(gid, target)
    return { ok: true, code: b4a.toString(b4a.from(JSON.stringify({ g }), 'utf8'), 'base64') }
  },

  [CMD.GROUP_JOIN]: ({ code }) => {
    let payload
    try { payload = JSON.parse(b4a.toString(b4a.from(code, 'base64'), 'utf8')) } catch { return { ok: false, error: '邀請碼格式不正確。' } }
    const src = payload.g || {}
    if (!HEX32.test(src.id || '')) return { ok: false, error: '邀請碼無效。' }
    const g = sanitizeGroup(src, src.id)
    if (!g.members.length) return { ok: false, error: '邀請碼無效。' }
    if (!g.members.some(m => m.pubkey === myHex())) {
      if (g.members.length >= GROUP_MAX) return { ok: false, error: '群組已滿（10 人）。' }
      g.members.push({ pubkey: myHex(), role: 'member', title: '', name: store.getSettings().displayName || '' })
    }
    saveGroup(g)
    for (const h of memberHexes(g)) if (h !== myHex()) p2p.connectPeer(h)
    p2p.groupBroadcast(memberHexes(g), { type: 'gsync', group: g })
    return { ok: true, group: groupView(g) }
  },

  [CMD.GROUP_SEND]: ({ gid, text, replyTo }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    text = String(text || '').trim(); if (!text) return { ok: false, error: '訊息是空的。' }
    const msg = { id: newMsgId(), dir: 'out', text, ts: Date.now(), state: 'sent', gacks: [] }
    if (replyTo && MSGID.test(replyTo)) msg.replyTo = replyTo
    addMessage(gid, msg)
    p2p.groupBroadcast(memberHexes(g), { type: 'gmsg', gid, id: msg.id, text, ts: msg.ts, reply: msg.replyTo })
    return { ok: true, message: msg }
  },

  [CMD.GROUP_RENAME]: ({ gid, name }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    if (!isAdmin(g, myHex())) return { ok: false, error: '只有管理員可以改名。' }
    g.name = String(name || '').trim().slice(0, 48) || g.name
    saveGroup(g)
    p2p.groupBroadcast(memberHexes(g), { type: 'gsync', group: g })
    push(CMD.EVT_GROUPUPDATE, { group: groupView(g) })
    return { ok: true, group: groupView(g) }
  },

  [CMD.GROUP_KICK]: ({ gid, pubkey }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    if (!isAdmin(g, myHex())) return { ok: false, error: '只有管理員可以踢人。' }
    if (pubkey === myHex()) return { ok: false, error: '要離開群組請用「退出」。' }
    if (!g.members.some(m => m.pubkey === pubkey)) return { ok: false, error: '這個人不在群組裡。' }
    const before = memberHexes(g)                    // 先留一份：被踢的人也得收到通知
    g.members = g.members.filter(m => m.pubkey !== pubkey)
    saveGroup(g)
    store.revoke(gid, pubkey)                        // 免得他記著 gid，事後自己 gsync 溜回來
    p2p.groupBroadcast(before, { type: 'gsync', group: g })   // 含被踢者 -> 他那邊會 EVT_GROUPGONE
    push(CMD.EVT_GROUPUPDATE, { group: groupView(g) })
    return { ok: true, group: groupView(g) }
  },

  [CMD.GROUP_SET_ROLE]: ({ gid, pubkey, role }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    if (!isAdmin(g, myHex())) return { ok: false, error: '只有管理員可以改角色。' }
    if (!ROLES.includes(role)) return { ok: false, error: '角色不正確。' }
    const m = g.members.find(x => x.pubkey === pubkey)
    if (!m) return { ok: false, error: '這個人不在群組裡。' }
    // 不能把最後一個管理員降級，否則這個群組永遠沒人管得動。
    if (m.role === 'admin' && role !== 'admin' && g.members.filter(x => x.role === 'admin').length <= 1) {
      return { ok: false, error: '群組至少要有一位管理員。' }
    }
    m.role = role
    saveGroup(g)
    p2p.groupBroadcast(memberHexes(g), { type: 'gsync', group: g })
    push(CMD.EVT_GROUPUPDATE, { group: groupView(g) })
    return { ok: true, group: groupView(g) }
  },

  [CMD.GROUP_SET_TITLE]: ({ gid, pubkey, title }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    const target = pubkey || myHex()
    // 管理員可以給任何人設頭銜；一般成員只能改自己的。
    if (!isAdmin(g, myHex()) && target !== myHex()) return { ok: false, error: '只能改自己的頭銜。' }
    const m = g.members.find(x => x.pubkey === target)
    if (!m) return { ok: false, error: '這個人不在群組裡。' }
    m.title = String(title || '').slice(0, 24)
    saveGroup(g)
    // 一般成員改自己的頭銜也會送出去，但收方的 selfChangeOnly 只放行「加自己／改自己名字」，
    // 所以非管理員的頭銜要等管理員再送一次 gsync 才會全體收斂（已知限制，見 README）。
    p2p.groupBroadcast(memberHexes(g), { type: 'gsync', group: g })
    push(CMD.EVT_GROUPUPDATE, { group: groupView(g) })
    return { ok: true, group: groupView(g) }
  },

  [CMD.GROUP_LEAVE]: ({ gid }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    p2p.groupBroadcast(memberHexes(g), { type: 'gleave', gid })
    for (const m of store.getMessages(gid)) dropMedia(m)
    dropGroup(gid)
    store.clearRevoked(gid)
    push(CMD.EVT_GROUPGONE, { gid, reason: 'left' })
    return { ok: true }
  }
}

// ── IPC 接線（react-native-bare-kit 提供 BareKit.IPC）────────────────────
// 協定：{ id, cmd, args } -> { id, ok, data } | { id, ok:false, error }
// 事件推播：{ evt, data }
let ipc = null

function push (evt, data) {
  if (!ipc) return
  try { ipc.write(b4a.from(JSON.stringify({ evt, data }) + '\n')) } catch (e) {}
}

function reply (stream, res) {
  try { stream.write(b4a.from(JSON.stringify(res) + '\n')) } catch (e) {}
}

function attach (stream) {
  ipc = stream
  let buf = ''
  stream.on('data', (chunk) => {
    buf += b4a.toString(chunk, 'utf8')
    let i
    while ((i = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, i); buf = buf.slice(i + 1)
      if (!line.trim()) continue
      let req
      try { req = JSON.parse(line) } catch { continue }
      const fn = handlers[req.cmd]
      if (!fn) { reply(stream, { id: req.id, ok: false, error: 'unknown cmd ' + req.cmd }); continue }
      try {
        const out = fn(req.args || {})
        // handler 可以回 Promise（媒體匯入是非同步的）；rejection 一律轉成 RPC 錯誤，
        // 絕不讓它變成 unhandled rejection 把執行緒帶走。
        if (out && typeof out.then === 'function') {
          out.then(
            (data) => reply(stream, { id: req.id, ok: true, data }),
            (e) => reply(stream, { id: req.id, ok: false, error: String((e && e.message) || e) })
          )
        } else {
          reply(stream, { id: req.id, ok: true, data: out })
        }
      } catch (e) {
        reply(stream, { id: req.id, ok: false, error: String((e && e.message) || e) })
      }
    }
  })
  stream.on('error', () => {})
}

// 初始化：資料目錄由宿主 app 傳入（Android 用 app 私有目錄）
function boot (dataDir) {
  store.init(dataDir)
  // 原本沒人呼叫 media.init()：DIR 是 null，一收到檔案 path.join(null,…) 就丟例外，
  // 媒體功能等於完全不會動。
  media.init(path.join(dataDir, 'media'))
}

// 在 react-native-bare-kit 裡，BareKit.IPC 是與 RN 端的雙工串流
if (typeof BareKit !== 'undefined' && BareKit.IPC) {
  boot(Bare.argv[0] || '/data/data/com.phisorilla/files')
  attach(BareKit.IPC)
}

module.exports = { boot, attach, handlers, CMD }

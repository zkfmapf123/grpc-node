# Protocol-buffer Guide

## Compare Json To ProtoBuffer

### REST VS gRPC

|               | gPRC            | REST               |
| ------------- | --------------- | ------------------ |
| API 방식      | Protocol Buffer | JSON               |
| HTTP          | HTTP2           | HTTP1              |
| Call Method   | Streaming       | Unary              |
| Communication | Multiplexing    | Client -> Server   |
| Design        | Free Design     | GET, POST, PUT ... |

### JSON : 52 bytes (compressed)

```json
{
  "age": 26,
  "first_name": "Clement",
  "last_name": "JEAN"
}
```

### Protocol Buffers : 17 bytes

```protobuf
message Person {
    uint64 age = 1;
    string first_name = 2;
    string last_name = 3;
}
```

### Type of API Use gRPC \*\*\*

```protobuf

service UnKnownService {

    // Normal API
    rpc Normal(UnknownRequest) returns (UnknownResponse) {};

    // Server Streaming
    // Client <<< Server (Chatting)
    rpc ServerManyTimes(UnknownRequest) returns (stream UnknownResponse) {};

    // Client Streaming
    // Client >>> Server (File Upload)
    rpc ClientManyTimes(stream UnknownRequest) returns (UnknownResponse) {};

    // Multiplexing
    // Client <<< >>> Server
    rpc Multiplexing(stream UnknownRequest) returns (stream UnknownResponse) {};
}
```

## protobuf를 사용하게 된다면?

<p> - CPU intensive를 덜 사용한다 (json) </p>
<p> - 빠르다 (json 보다 빠름) </p>
<p> - HTTP2를 사용한다 <a href="https://imagekit.io/demo/http2-vs-http1"> HTTP1 VS HTTP2 속도비교 </a></p>

## Reference

<div>
<a href="https://developers.google.com/protocol-buffers/docs/proto">- Google Reference Guide </a>
</div>
<div>
<a href="https://imagekit.io/blog/http2-vs-http1-performance/">- HTTP1 vs HTTP2</a>
</div>

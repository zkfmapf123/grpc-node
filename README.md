# gRPC + Node (Express)

## gRPC의 장점

> 직렬화 (Serialize)

    - 기존 데이터를 압축 + 간단 + 데이터 크기 축소를 진행하기 때문에 기존 JSON 직렬화보다 최대 8배 빠르다.

> 문서화

    - protocol buffer로 gRPC통신을 진행하기때문에 따로 API문서를 만들 필요는 없다.
    - 보통 swagger를 사용하게 되는데, 매번 수정하는 것도 귀찮음

> HTTP/2

    - http2를 지원하기 때문에, 동일한 연결로 병렬적인 요청을 처리 할 수 있다.
    - 연결을 유지해서 connection에 사용되는 overhead를 줄일 수 있다.

## Protocol Buf 란?

- 직렬화 데이터 구조
- 프로토콜 버퍼는 하나의 파일에 최대 64MB 지원가능 하며, JSON파일을 프로토콜 버퍼 파일포맷으로 전환이 가능하고, 반대의 경우도 가능하다.

[More Detail ProtoBuf...](./proto/README.md)

## Library

```
    // MAC OS
    brew install grpc protobuf

    // NPM
    npm i @grpc/grpc-js @grpc/proto-loader typescript ts-node -D
```

## Command

```
    // proto lint 검사
    buf ls-files
    buf lint

    // proto generate (buf.gen.yaml)
    buf generate
    brew link --overwrite protobuf@3
```

### issue

```
    // protoc-gen-js: program not found or is not executable
    brew install protobuf@3
```

### Simple Project

> hello-world

> Calculator

...

### Reference

<div><a href="https://docs.buf.build/installation">Buf Documents</a></div>

# Conclusion

### 내가 생각한 장점

- \*.proto 파일하나로 Request, Response, Service 까지 한번에 만들어주는 것이 굉장히 편함
- \*.proto 파일하나를 문서로 대체하기가 굉장히 편할 것 같음
- Service, Repository Layer를 나누는 CLI를 구성한다면 굉장히 편하게 사용할 것 같음
- 만약 사용한다면 -> Folder/proto/\*.proto 파일을 구성한 후 Microservice 형태로 사용 할 것 같음

```
    ...
    auth (Folder)
        proto/auth.proto
    product (Folder)
        proto/product.proto
    food (Folder)
        proto/food.proto
```

- proto cli가 의외로 간단하다.
- buf를 사용한다면 yaml 파일로도 충분히 관리가 가능 함

### 내가 생각한 단점

- Serverless 플랫폼에서는 사용하기가 힘들것같음
  - Http2 방식이나, REST API에 묶이지 않으나 AWS API Gateway가 proto 방식을 도입하지 않아서 직접 Proxy로 만들어야 할것같음 -> 근데 굳이?
- 구조자체를 만들어주는 CLI를 만들어 주면 좋을것같음 -> 좀 귀찮긴 함
- 주로 Node 보다는 Golang 프로젝트에 좀더 적합하지 않을까? 싶기도 함

### Result

- 추후 개인프로젝트에서 사용해 볼만 하나... js build가 더 귀찮을 듯...
- grpc를 다루는 회사들어가면 해야할듯...
- 근데 http2 + 데이터 직렬화를 바로 해주는 것은 지리긴 함

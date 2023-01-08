// Original file: hello/proto/hello.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloRequest as _helloPackage_HelloRequest, HelloRequest__Output as _helloPackage_HelloRequest__Output } from '../helloPackage/HelloRequest';
import type { HelloResponse as _helloPackage_HelloResponse, HelloResponse__Output as _helloPackage_HelloResponse__Output } from '../helloPackage/HelloResponse';

export interface GreetServiceClient extends grpc.Client {
  Hello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  Hello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  Hello(argument: _helloPackage_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  Hello(argument: _helloPackage_HelloRequest, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _helloPackage_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _helloPackage_HelloRequest, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  
  HelloBoth(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_helloPackage_HelloRequest, _helloPackage_HelloResponse__Output>;
  HelloBoth(options?: grpc.CallOptions): grpc.ClientDuplexStream<_helloPackage_HelloRequest, _helloPackage_HelloResponse__Output>;
  helloBoth(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_helloPackage_HelloRequest, _helloPackage_HelloResponse__Output>;
  helloBoth(options?: grpc.CallOptions): grpc.ClientDuplexStream<_helloPackage_HelloRequest, _helloPackage_HelloResponse__Output>;
  
  HelloDeadLine(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  HelloDeadLine(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  HelloDeadLine(argument: _helloPackage_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  HelloDeadLine(argument: _helloPackage_HelloRequest, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  helloDeadLine(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  helloDeadLine(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  helloDeadLine(argument: _helloPackage_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  helloDeadLine(argument: _helloPackage_HelloRequest, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  
  HelloLong(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientWritableStream<_helloPackage_HelloRequest>;
  HelloLong(metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientWritableStream<_helloPackage_HelloRequest>;
  HelloLong(options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientWritableStream<_helloPackage_HelloRequest>;
  HelloLong(callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientWritableStream<_helloPackage_HelloRequest>;
  helloLong(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientWritableStream<_helloPackage_HelloRequest>;
  helloLong(metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientWritableStream<_helloPackage_HelloRequest>;
  helloLong(options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientWritableStream<_helloPackage_HelloRequest>;
  helloLong(callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientWritableStream<_helloPackage_HelloRequest>;
  
  HelloManyTimes(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_helloPackage_HelloResponse__Output>;
  HelloManyTimes(argument: _helloPackage_HelloRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_helloPackage_HelloResponse__Output>;
  helloManyTimes(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_helloPackage_HelloResponse__Output>;
  helloManyTimes(argument: _helloPackage_HelloRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_helloPackage_HelloResponse__Output>;
  
}

export interface GreetServiceHandlers extends grpc.UntypedServiceImplementation {
  Hello: grpc.handleUnaryCall<_helloPackage_HelloRequest__Output, _helloPackage_HelloResponse>;
  
  HelloBoth: grpc.handleBidiStreamingCall<_helloPackage_HelloRequest__Output, _helloPackage_HelloResponse>;
  
  HelloDeadLine: grpc.handleUnaryCall<_helloPackage_HelloRequest__Output, _helloPackage_HelloResponse>;
  
  HelloLong: grpc.handleClientStreamingCall<_helloPackage_HelloRequest__Output, _helloPackage_HelloResponse>;
  
  HelloManyTimes: grpc.handleServerStreamingCall<_helloPackage_HelloRequest__Output, _helloPackage_HelloResponse>;
  
}

export interface GreetServiceDefinition extends grpc.ServiceDefinition {
  Hello: MethodDefinition<_helloPackage_HelloRequest, _helloPackage_HelloResponse, _helloPackage_HelloRequest__Output, _helloPackage_HelloResponse__Output>
  HelloBoth: MethodDefinition<_helloPackage_HelloRequest, _helloPackage_HelloResponse, _helloPackage_HelloRequest__Output, _helloPackage_HelloResponse__Output>
  HelloDeadLine: MethodDefinition<_helloPackage_HelloRequest, _helloPackage_HelloResponse, _helloPackage_HelloRequest__Output, _helloPackage_HelloResponse__Output>
  HelloLong: MethodDefinition<_helloPackage_HelloRequest, _helloPackage_HelloResponse, _helloPackage_HelloRequest__Output, _helloPackage_HelloResponse__Output>
  HelloManyTimes: MethodDefinition<_helloPackage_HelloRequest, _helloPackage_HelloResponse, _helloPackage_HelloRequest__Output, _helloPackage_HelloResponse__Output>
}

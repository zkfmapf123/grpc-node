import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreetServiceClient as _helloPackage_GreetServiceClient, GreetServiceDefinition as _helloPackage_GreetServiceDefinition } from './helloPackage/GreetService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  helloPackage: {
    GreetService: SubtypeConstructor<typeof grpc.Client, _helloPackage_GreetServiceClient> & { service: _helloPackage_GreetServiceDefinition }
    HelloRequest: MessageTypeDefinition
    HelloResponse: MessageTypeDefinition
  }
}


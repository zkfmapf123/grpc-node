import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'
import { ProtoGrpcType } from './proto/hello'

const PORT = 4000
const PROTO_FILE = './proto/hello.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType
const helloPackage = grpcObj.helloPackage

const getServer = () => {
  const server = new grpc.Server()
  server.addService(helloPackage.GreetService.service, {
    Hello: () => {},
    HelloManyTimes: () => {},
    HelloLong: () => {},
    HelloBoth: () => {},
    HelloDeadLine: () => {},
  })

  return server
}

const main = (port: number) => {
  const cleanup = (err: any) => {
    console.log(`[ERROR] ${JSON.stringify(err)}`)
    process.exit(1)
  }

  const server = getServer()

  server.bindAsync(`localhost:${port}`, grpc.ServerCredentials.createInsecure(), (err, _) => {
    if (err) cleanup(err)
    process.on('uncaughtException', (err) => cleanup(err))
    process.on('SIGTTOU', () => cleanup('SIGNAL OUT'))

    console.log(`localhost:${port} is running...`)
  })
}

main(PORT)

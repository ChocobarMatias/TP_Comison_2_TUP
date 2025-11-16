
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model clientes
 * 
 */
export type clientes = $Result.DefaultSelection<Prisma.$clientesPayload>
/**
 * Model cuotas
 * 
 */
export type cuotas = $Result.DefaultSelection<Prisma.$cuotasPayload>
/**
 * Model planes_pago
 * 
 */
export type planes_pago = $Result.DefaultSelection<Prisma.$planes_pagoPayload>
/**
 * Model servicios
 * 
 */
export type servicios = $Result.DefaultSelection<Prisma.$serviciosPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const cuotas_estado: {
  PENDIENTE: 'PENDIENTE',
  PAGADO: 'PAGADO'
};

export type cuotas_estado = (typeof cuotas_estado)[keyof typeof cuotas_estado]

}

export type cuotas_estado = $Enums.cuotas_estado

export const cuotas_estado: typeof $Enums.cuotas_estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.clientes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.clientes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clientes`: Exposes CRUD operations for the **clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.clientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cuotas`: Exposes CRUD operations for the **cuotas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuotas
    * const cuotas = await prisma.cuotas.findMany()
    * ```
    */
  get cuotas(): Prisma.cuotasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planes_pago`: Exposes CRUD operations for the **planes_pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planes_pagos
    * const planes_pagos = await prisma.planes_pago.findMany()
    * ```
    */
  get planes_pago(): Prisma.planes_pagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicios`: Exposes CRUD operations for the **servicios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicios.findMany()
    * ```
    */
  get servicios(): Prisma.serviciosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    clientes: 'clientes',
    cuotas: 'cuotas',
    planes_pago: 'planes_pago',
    servicios: 'servicios',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clientes" | "cuotas" | "planes_pago" | "servicios" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      clientes: {
        payload: Prisma.$clientesPayload<ExtArgs>
        fields: Prisma.clientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findFirst: {
            args: Prisma.clientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findMany: {
            args: Prisma.clientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          create: {
            args: Prisma.clientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          createMany: {
            args: Prisma.clientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          update: {
            args: Prisma.clientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          deleteMany: {
            args: Prisma.clientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.clientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      cuotas: {
        payload: Prisma.$cuotasPayload<ExtArgs>
        fields: Prisma.cuotasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cuotasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cuotasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          findFirst: {
            args: Prisma.cuotasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cuotasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          findMany: {
            args: Prisma.cuotasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>[]
          }
          create: {
            args: Prisma.cuotasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          createMany: {
            args: Prisma.cuotasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cuotasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          update: {
            args: Prisma.cuotasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          deleteMany: {
            args: Prisma.cuotasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cuotasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cuotasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          aggregate: {
            args: Prisma.CuotasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuotas>
          }
          groupBy: {
            args: Prisma.cuotasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuotasGroupByOutputType>[]
          }
          count: {
            args: Prisma.cuotasCountArgs<ExtArgs>
            result: $Utils.Optional<CuotasCountAggregateOutputType> | number
          }
        }
      }
      planes_pago: {
        payload: Prisma.$planes_pagoPayload<ExtArgs>
        fields: Prisma.planes_pagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.planes_pagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planes_pagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.planes_pagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planes_pagoPayload>
          }
          findFirst: {
            args: Prisma.planes_pagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planes_pagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.planes_pagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planes_pagoPayload>
          }
          findMany: {
            args: Prisma.planes_pagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planes_pagoPayload>[]
          }
          create: {
            args: Prisma.planes_pagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planes_pagoPayload>
          }
          createMany: {
            args: Prisma.planes_pagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.planes_pagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planes_pagoPayload>
          }
          update: {
            args: Prisma.planes_pagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planes_pagoPayload>
          }
          deleteMany: {
            args: Prisma.planes_pagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.planes_pagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.planes_pagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planes_pagoPayload>
          }
          aggregate: {
            args: Prisma.Planes_pagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanes_pago>
          }
          groupBy: {
            args: Prisma.planes_pagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Planes_pagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.planes_pagoCountArgs<ExtArgs>
            result: $Utils.Optional<Planes_pagoCountAggregateOutputType> | number
          }
        }
      }
      servicios: {
        payload: Prisma.$serviciosPayload<ExtArgs>
        fields: Prisma.serviciosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.serviciosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.serviciosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          findFirst: {
            args: Prisma.serviciosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.serviciosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          findMany: {
            args: Prisma.serviciosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>[]
          }
          create: {
            args: Prisma.serviciosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          createMany: {
            args: Prisma.serviciosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.serviciosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          update: {
            args: Prisma.serviciosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          deleteMany: {
            args: Prisma.serviciosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.serviciosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.serviciosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviciosPayload>
          }
          aggregate: {
            args: Prisma.ServiciosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicios>
          }
          groupBy: {
            args: Prisma.serviciosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiciosGroupByOutputType>[]
          }
          count: {
            args: Prisma.serviciosCountArgs<ExtArgs>
            result: $Utils.Optional<ServiciosCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    clientes?: clientesOmit
    cuotas?: cuotasOmit
    planes_pago?: planes_pagoOmit
    servicios?: serviciosOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientesCountOutputType
   */

  export type ClientesCountOutputType = {
    planes_pago: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planes_pago?: boolean | ClientesCountOutputTypeCountPlanes_pagoArgs
  }

  // Custom InputTypes
  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountPlanes_pagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: planes_pagoWhereInput
  }


  /**
   * Count Type Planes_pagoCountOutputType
   */

  export type Planes_pagoCountOutputType = {
    cuotas: number
  }

  export type Planes_pagoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuotas?: boolean | Planes_pagoCountOutputTypeCountCuotasArgs
  }

  // Custom InputTypes
  /**
   * Planes_pagoCountOutputType without action
   */
  export type Planes_pagoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planes_pagoCountOutputType
     */
    select?: Planes_pagoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Planes_pagoCountOutputType without action
   */
  export type Planes_pagoCountOutputTypeCountCuotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuotasWhereInput
  }


  /**
   * Count Type ServiciosCountOutputType
   */

  export type ServiciosCountOutputType = {
    planes_pago: number
  }

  export type ServiciosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planes_pago?: boolean | ServiciosCountOutputTypeCountPlanes_pagoArgs
  }

  // Custom InputTypes
  /**
   * ServiciosCountOutputType without action
   */
  export type ServiciosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiciosCountOutputType
     */
    select?: ServiciosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiciosCountOutputType without action
   */
  export type ServiciosCountOutputTypeCountPlanes_pagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: planes_pagoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientesSumAggregateOutputType = {
    id: number | null
  }

  export type ClientesMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
  }

  export type ClientesMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
  }

  export type ClientesCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    email: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    id?: true
  }

  export type ClientesSumAggregateInputType = {
    id?: true
  }

  export type ClientesMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
  }

  export type ClientesMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
  }

  export type ClientesCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to aggregate.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type clientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientesWhereInput
    orderBy?: clientesOrderByWithAggregationInput | clientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    email: string
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends clientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type clientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    planes_pago?: boolean | clientes$planes_pagoArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>



  export type clientesSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
  }

  export type clientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "email", ExtArgs["result"]["clientes"]>
  export type clientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planes_pago?: boolean | clientes$planes_pagoArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $clientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clientes"
    objects: {
      planes_pago: Prisma.$planes_pagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      email: string
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type clientesGetPayload<S extends boolean | null | undefined | clientesDefaultArgs> = $Result.GetResult<Prisma.$clientesPayload, S>

  type clientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface clientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientes'], meta: { name: 'clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {clientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientesFindUniqueArgs>(args: SelectSubset<T, clientesFindUniqueArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs>(args: SelectSubset<T, clientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientesFindFirstArgs>(args?: SelectSubset<T, clientesFindFirstArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs>(args?: SelectSubset<T, clientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientesWithIdOnly = await prisma.clientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clientesFindManyArgs>(args?: SelectSubset<T, clientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientes.
     * @param {clientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends clientesCreateArgs>(args: SelectSubset<T, clientesCreateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientesCreateManyArgs>(args?: SelectSubset<T, clientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clientes.
     * @param {clientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends clientesDeleteArgs>(args: SelectSubset<T, clientesDeleteArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientes.
     * @param {clientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientesUpdateArgs>(args: SelectSubset<T, clientesUpdateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientesDeleteManyArgs>(args?: SelectSubset<T, clientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientesUpdateManyArgs>(args: SelectSubset<T, clientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {clientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends clientesUpsertArgs>(args: SelectSubset<T, clientesUpsertArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clientesCountArgs>(
      args?: Subset<T, clientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientesGroupByArgs['orderBy'] }
        : { orderBy?: clientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clientes model
   */
  readonly fields: clientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planes_pago<T extends clientes$planes_pagoArgs<ExtArgs> = {}>(args?: Subset<T, clientes$planes_pagoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clientes model
   */
  interface clientesFieldRefs {
    readonly id: FieldRef<"clientes", 'Int'>
    readonly nombre: FieldRef<"clientes", 'String'>
    readonly apellido: FieldRef<"clientes", 'String'>
    readonly email: FieldRef<"clientes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * clientes findUnique
   */
  export type clientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findUniqueOrThrow
   */
  export type clientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findFirst
   */
  export type clientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findFirstOrThrow
   */
  export type clientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findMany
   */
  export type clientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes create
   */
  export type clientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to create a clientes.
     */
    data: XOR<clientesCreateInput, clientesUncheckedCreateInput>
  }

  /**
   * clientes createMany
   */
  export type clientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes update
   */
  export type clientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to update a clientes.
     */
    data: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
    /**
     * Choose, which clientes to update.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes updateMany
   */
  export type clientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * clientes upsert
   */
  export type clientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The filter to search for the clientes to update in case it exists.
     */
    where: clientesWhereUniqueInput
    /**
     * In case the clientes found by the `where` argument doesn't exist, create a new clientes with this data.
     */
    create: XOR<clientesCreateInput, clientesUncheckedCreateInput>
    /**
     * In case the clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
  }

  /**
   * clientes delete
   */
  export type clientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter which clientes to delete.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes deleteMany
   */
  export type clientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * clientes.planes_pago
   */
  export type clientes$planes_pagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
    where?: planes_pagoWhereInput
    orderBy?: planes_pagoOrderByWithRelationInput | planes_pagoOrderByWithRelationInput[]
    cursor?: planes_pagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Planes_pagoScalarFieldEnum | Planes_pagoScalarFieldEnum[]
  }

  /**
   * clientes without action
   */
  export type clientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
  }


  /**
   * Model cuotas
   */

  export type AggregateCuotas = {
    _count: CuotasCountAggregateOutputType | null
    _avg: CuotasAvgAggregateOutputType | null
    _sum: CuotasSumAggregateOutputType | null
    _min: CuotasMinAggregateOutputType | null
    _max: CuotasMaxAggregateOutputType | null
  }

  export type CuotasAvgAggregateOutputType = {
    id: number | null
    plan_pago_id: number | null
    numero_cuota: number | null
    monto: Decimal | null
  }

  export type CuotasSumAggregateOutputType = {
    id: number | null
    plan_pago_id: number | null
    numero_cuota: number | null
    monto: Decimal | null
  }

  export type CuotasMinAggregateOutputType = {
    id: number | null
    plan_pago_id: number | null
    numero_cuota: number | null
    monto: Decimal | null
    fecha_vencimiento: Date | null
    estado: $Enums.cuotas_estado | null
    fecha_pago: Date | null
  }

  export type CuotasMaxAggregateOutputType = {
    id: number | null
    plan_pago_id: number | null
    numero_cuota: number | null
    monto: Decimal | null
    fecha_vencimiento: Date | null
    estado: $Enums.cuotas_estado | null
    fecha_pago: Date | null
  }

  export type CuotasCountAggregateOutputType = {
    id: number
    plan_pago_id: number
    numero_cuota: number
    monto: number
    fecha_vencimiento: number
    estado: number
    fecha_pago: number
    _all: number
  }


  export type CuotasAvgAggregateInputType = {
    id?: true
    plan_pago_id?: true
    numero_cuota?: true
    monto?: true
  }

  export type CuotasSumAggregateInputType = {
    id?: true
    plan_pago_id?: true
    numero_cuota?: true
    monto?: true
  }

  export type CuotasMinAggregateInputType = {
    id?: true
    plan_pago_id?: true
    numero_cuota?: true
    monto?: true
    fecha_vencimiento?: true
    estado?: true
    fecha_pago?: true
  }

  export type CuotasMaxAggregateInputType = {
    id?: true
    plan_pago_id?: true
    numero_cuota?: true
    monto?: true
    fecha_vencimiento?: true
    estado?: true
    fecha_pago?: true
  }

  export type CuotasCountAggregateInputType = {
    id?: true
    plan_pago_id?: true
    numero_cuota?: true
    monto?: true
    fecha_vencimiento?: true
    estado?: true
    fecha_pago?: true
    _all?: true
  }

  export type CuotasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuotas to aggregate.
     */
    where?: cuotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuotas to fetch.
     */
    orderBy?: cuotasOrderByWithRelationInput | cuotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cuotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cuotas
    **/
    _count?: true | CuotasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuotasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuotasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuotasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuotasMaxAggregateInputType
  }

  export type GetCuotasAggregateType<T extends CuotasAggregateArgs> = {
        [P in keyof T & keyof AggregateCuotas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuotas[P]>
      : GetScalarType<T[P], AggregateCuotas[P]>
  }




  export type cuotasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuotasWhereInput
    orderBy?: cuotasOrderByWithAggregationInput | cuotasOrderByWithAggregationInput[]
    by: CuotasScalarFieldEnum[] | CuotasScalarFieldEnum
    having?: cuotasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuotasCountAggregateInputType | true
    _avg?: CuotasAvgAggregateInputType
    _sum?: CuotasSumAggregateInputType
    _min?: CuotasMinAggregateInputType
    _max?: CuotasMaxAggregateInputType
  }

  export type CuotasGroupByOutputType = {
    id: number
    plan_pago_id: number
    numero_cuota: number
    monto: Decimal
    fecha_vencimiento: Date
    estado: $Enums.cuotas_estado | null
    fecha_pago: Date | null
    _count: CuotasCountAggregateOutputType | null
    _avg: CuotasAvgAggregateOutputType | null
    _sum: CuotasSumAggregateOutputType | null
    _min: CuotasMinAggregateOutputType | null
    _max: CuotasMaxAggregateOutputType | null
  }

  type GetCuotasGroupByPayload<T extends cuotasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuotasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuotasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuotasGroupByOutputType[P]>
            : GetScalarType<T[P], CuotasGroupByOutputType[P]>
        }
      >
    >


  export type cuotasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan_pago_id?: boolean
    numero_cuota?: boolean
    monto?: boolean
    fecha_vencimiento?: boolean
    estado?: boolean
    fecha_pago?: boolean
    planes_pago?: boolean | planes_pagoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuotas"]>



  export type cuotasSelectScalar = {
    id?: boolean
    plan_pago_id?: boolean
    numero_cuota?: boolean
    monto?: boolean
    fecha_vencimiento?: boolean
    estado?: boolean
    fecha_pago?: boolean
  }

  export type cuotasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plan_pago_id" | "numero_cuota" | "monto" | "fecha_vencimiento" | "estado" | "fecha_pago", ExtArgs["result"]["cuotas"]>
  export type cuotasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planes_pago?: boolean | planes_pagoDefaultArgs<ExtArgs>
  }

  export type $cuotasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cuotas"
    objects: {
      planes_pago: Prisma.$planes_pagoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plan_pago_id: number
      numero_cuota: number
      monto: Prisma.Decimal
      fecha_vencimiento: Date
      estado: $Enums.cuotas_estado | null
      fecha_pago: Date | null
    }, ExtArgs["result"]["cuotas"]>
    composites: {}
  }

  type cuotasGetPayload<S extends boolean | null | undefined | cuotasDefaultArgs> = $Result.GetResult<Prisma.$cuotasPayload, S>

  type cuotasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cuotasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuotasCountAggregateInputType | true
    }

  export interface cuotasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cuotas'], meta: { name: 'cuotas' } }
    /**
     * Find zero or one Cuotas that matches the filter.
     * @param {cuotasFindUniqueArgs} args - Arguments to find a Cuotas
     * @example
     * // Get one Cuotas
     * const cuotas = await prisma.cuotas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cuotasFindUniqueArgs>(args: SelectSubset<T, cuotasFindUniqueArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cuotas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cuotasFindUniqueOrThrowArgs} args - Arguments to find a Cuotas
     * @example
     * // Get one Cuotas
     * const cuotas = await prisma.cuotas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cuotasFindUniqueOrThrowArgs>(args: SelectSubset<T, cuotasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasFindFirstArgs} args - Arguments to find a Cuotas
     * @example
     * // Get one Cuotas
     * const cuotas = await prisma.cuotas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cuotasFindFirstArgs>(args?: SelectSubset<T, cuotasFindFirstArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuotas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasFindFirstOrThrowArgs} args - Arguments to find a Cuotas
     * @example
     * // Get one Cuotas
     * const cuotas = await prisma.cuotas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cuotasFindFirstOrThrowArgs>(args?: SelectSubset<T, cuotasFindFirstOrThrowArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuotas
     * const cuotas = await prisma.cuotas.findMany()
     * 
     * // Get first 10 Cuotas
     * const cuotas = await prisma.cuotas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuotasWithIdOnly = await prisma.cuotas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cuotasFindManyArgs>(args?: SelectSubset<T, cuotasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cuotas.
     * @param {cuotasCreateArgs} args - Arguments to create a Cuotas.
     * @example
     * // Create one Cuotas
     * const Cuotas = await prisma.cuotas.create({
     *   data: {
     *     // ... data to create a Cuotas
     *   }
     * })
     * 
     */
    create<T extends cuotasCreateArgs>(args: SelectSubset<T, cuotasCreateArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cuotas.
     * @param {cuotasCreateManyArgs} args - Arguments to create many Cuotas.
     * @example
     * // Create many Cuotas
     * const cuotas = await prisma.cuotas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cuotasCreateManyArgs>(args?: SelectSubset<T, cuotasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cuotas.
     * @param {cuotasDeleteArgs} args - Arguments to delete one Cuotas.
     * @example
     * // Delete one Cuotas
     * const Cuotas = await prisma.cuotas.delete({
     *   where: {
     *     // ... filter to delete one Cuotas
     *   }
     * })
     * 
     */
    delete<T extends cuotasDeleteArgs>(args: SelectSubset<T, cuotasDeleteArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cuotas.
     * @param {cuotasUpdateArgs} args - Arguments to update one Cuotas.
     * @example
     * // Update one Cuotas
     * const cuotas = await prisma.cuotas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cuotasUpdateArgs>(args: SelectSubset<T, cuotasUpdateArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cuotas.
     * @param {cuotasDeleteManyArgs} args - Arguments to filter Cuotas to delete.
     * @example
     * // Delete a few Cuotas
     * const { count } = await prisma.cuotas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cuotasDeleteManyArgs>(args?: SelectSubset<T, cuotasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuotas
     * const cuotas = await prisma.cuotas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cuotasUpdateManyArgs>(args: SelectSubset<T, cuotasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cuotas.
     * @param {cuotasUpsertArgs} args - Arguments to update or create a Cuotas.
     * @example
     * // Update or create a Cuotas
     * const cuotas = await prisma.cuotas.upsert({
     *   create: {
     *     // ... data to create a Cuotas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuotas we want to update
     *   }
     * })
     */
    upsert<T extends cuotasUpsertArgs>(args: SelectSubset<T, cuotasUpsertArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasCountArgs} args - Arguments to filter Cuotas to count.
     * @example
     * // Count the number of Cuotas
     * const count = await prisma.cuotas.count({
     *   where: {
     *     // ... the filter for the Cuotas we want to count
     *   }
     * })
    **/
    count<T extends cuotasCountArgs>(
      args?: Subset<T, cuotasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuotasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CuotasAggregateArgs>(args: Subset<T, CuotasAggregateArgs>): Prisma.PrismaPromise<GetCuotasAggregateType<T>>

    /**
     * Group by Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cuotasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cuotasGroupByArgs['orderBy'] }
        : { orderBy?: cuotasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cuotasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuotasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cuotas model
   */
  readonly fields: cuotasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cuotas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cuotasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planes_pago<T extends planes_pagoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, planes_pagoDefaultArgs<ExtArgs>>): Prisma__planes_pagoClient<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cuotas model
   */
  interface cuotasFieldRefs {
    readonly id: FieldRef<"cuotas", 'Int'>
    readonly plan_pago_id: FieldRef<"cuotas", 'Int'>
    readonly numero_cuota: FieldRef<"cuotas", 'Int'>
    readonly monto: FieldRef<"cuotas", 'Decimal'>
    readonly fecha_vencimiento: FieldRef<"cuotas", 'DateTime'>
    readonly estado: FieldRef<"cuotas", 'cuotas_estado'>
    readonly fecha_pago: FieldRef<"cuotas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cuotas findUnique
   */
  export type cuotasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter, which cuotas to fetch.
     */
    where: cuotasWhereUniqueInput
  }

  /**
   * cuotas findUniqueOrThrow
   */
  export type cuotasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter, which cuotas to fetch.
     */
    where: cuotasWhereUniqueInput
  }

  /**
   * cuotas findFirst
   */
  export type cuotasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter, which cuotas to fetch.
     */
    where?: cuotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuotas to fetch.
     */
    orderBy?: cuotasOrderByWithRelationInput | cuotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuotas.
     */
    cursor?: cuotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuotas.
     */
    distinct?: CuotasScalarFieldEnum | CuotasScalarFieldEnum[]
  }

  /**
   * cuotas findFirstOrThrow
   */
  export type cuotasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter, which cuotas to fetch.
     */
    where?: cuotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuotas to fetch.
     */
    orderBy?: cuotasOrderByWithRelationInput | cuotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuotas.
     */
    cursor?: cuotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuotas.
     */
    distinct?: CuotasScalarFieldEnum | CuotasScalarFieldEnum[]
  }

  /**
   * cuotas findMany
   */
  export type cuotasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter, which cuotas to fetch.
     */
    where?: cuotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuotas to fetch.
     */
    orderBy?: cuotasOrderByWithRelationInput | cuotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cuotas.
     */
    cursor?: cuotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuotas.
     */
    skip?: number
    distinct?: CuotasScalarFieldEnum | CuotasScalarFieldEnum[]
  }

  /**
   * cuotas create
   */
  export type cuotasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * The data needed to create a cuotas.
     */
    data: XOR<cuotasCreateInput, cuotasUncheckedCreateInput>
  }

  /**
   * cuotas createMany
   */
  export type cuotasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cuotas.
     */
    data: cuotasCreateManyInput | cuotasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cuotas update
   */
  export type cuotasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * The data needed to update a cuotas.
     */
    data: XOR<cuotasUpdateInput, cuotasUncheckedUpdateInput>
    /**
     * Choose, which cuotas to update.
     */
    where: cuotasWhereUniqueInput
  }

  /**
   * cuotas updateMany
   */
  export type cuotasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cuotas.
     */
    data: XOR<cuotasUpdateManyMutationInput, cuotasUncheckedUpdateManyInput>
    /**
     * Filter which cuotas to update
     */
    where?: cuotasWhereInput
    /**
     * Limit how many cuotas to update.
     */
    limit?: number
  }

  /**
   * cuotas upsert
   */
  export type cuotasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * The filter to search for the cuotas to update in case it exists.
     */
    where: cuotasWhereUniqueInput
    /**
     * In case the cuotas found by the `where` argument doesn't exist, create a new cuotas with this data.
     */
    create: XOR<cuotasCreateInput, cuotasUncheckedCreateInput>
    /**
     * In case the cuotas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cuotasUpdateInput, cuotasUncheckedUpdateInput>
  }

  /**
   * cuotas delete
   */
  export type cuotasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter which cuotas to delete.
     */
    where: cuotasWhereUniqueInput
  }

  /**
   * cuotas deleteMany
   */
  export type cuotasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuotas to delete
     */
    where?: cuotasWhereInput
    /**
     * Limit how many cuotas to delete.
     */
    limit?: number
  }

  /**
   * cuotas without action
   */
  export type cuotasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
  }


  /**
   * Model planes_pago
   */

  export type AggregatePlanes_pago = {
    _count: Planes_pagoCountAggregateOutputType | null
    _avg: Planes_pagoAvgAggregateOutputType | null
    _sum: Planes_pagoSumAggregateOutputType | null
    _min: Planes_pagoMinAggregateOutputType | null
    _max: Planes_pagoMaxAggregateOutputType | null
  }

  export type Planes_pagoAvgAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    servicio_id: number | null
    numero_cuotas: number | null
  }

  export type Planes_pagoSumAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    servicio_id: number | null
    numero_cuotas: number | null
  }

  export type Planes_pagoMinAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    servicio_id: number | null
    numero_cuotas: number | null
    fecha_inicio: Date | null
  }

  export type Planes_pagoMaxAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    servicio_id: number | null
    numero_cuotas: number | null
    fecha_inicio: Date | null
  }

  export type Planes_pagoCountAggregateOutputType = {
    id: number
    cliente_id: number
    servicio_id: number
    numero_cuotas: number
    fecha_inicio: number
    _all: number
  }


  export type Planes_pagoAvgAggregateInputType = {
    id?: true
    cliente_id?: true
    servicio_id?: true
    numero_cuotas?: true
  }

  export type Planes_pagoSumAggregateInputType = {
    id?: true
    cliente_id?: true
    servicio_id?: true
    numero_cuotas?: true
  }

  export type Planes_pagoMinAggregateInputType = {
    id?: true
    cliente_id?: true
    servicio_id?: true
    numero_cuotas?: true
    fecha_inicio?: true
  }

  export type Planes_pagoMaxAggregateInputType = {
    id?: true
    cliente_id?: true
    servicio_id?: true
    numero_cuotas?: true
    fecha_inicio?: true
  }

  export type Planes_pagoCountAggregateInputType = {
    id?: true
    cliente_id?: true
    servicio_id?: true
    numero_cuotas?: true
    fecha_inicio?: true
    _all?: true
  }

  export type Planes_pagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which planes_pago to aggregate.
     */
    where?: planes_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_pagos to fetch.
     */
    orderBy?: planes_pagoOrderByWithRelationInput | planes_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: planes_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned planes_pagos
    **/
    _count?: true | Planes_pagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Planes_pagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Planes_pagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Planes_pagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Planes_pagoMaxAggregateInputType
  }

  export type GetPlanes_pagoAggregateType<T extends Planes_pagoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanes_pago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanes_pago[P]>
      : GetScalarType<T[P], AggregatePlanes_pago[P]>
  }




  export type planes_pagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: planes_pagoWhereInput
    orderBy?: planes_pagoOrderByWithAggregationInput | planes_pagoOrderByWithAggregationInput[]
    by: Planes_pagoScalarFieldEnum[] | Planes_pagoScalarFieldEnum
    having?: planes_pagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Planes_pagoCountAggregateInputType | true
    _avg?: Planes_pagoAvgAggregateInputType
    _sum?: Planes_pagoSumAggregateInputType
    _min?: Planes_pagoMinAggregateInputType
    _max?: Planes_pagoMaxAggregateInputType
  }

  export type Planes_pagoGroupByOutputType = {
    id: number
    cliente_id: number
    servicio_id: number
    numero_cuotas: number
    fecha_inicio: Date
    _count: Planes_pagoCountAggregateOutputType | null
    _avg: Planes_pagoAvgAggregateOutputType | null
    _sum: Planes_pagoSumAggregateOutputType | null
    _min: Planes_pagoMinAggregateOutputType | null
    _max: Planes_pagoMaxAggregateOutputType | null
  }

  type GetPlanes_pagoGroupByPayload<T extends planes_pagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Planes_pagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Planes_pagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Planes_pagoGroupByOutputType[P]>
            : GetScalarType<T[P], Planes_pagoGroupByOutputType[P]>
        }
      >
    >


  export type planes_pagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente_id?: boolean
    servicio_id?: boolean
    numero_cuotas?: boolean
    fecha_inicio?: boolean
    cuotas?: boolean | planes_pago$cuotasArgs<ExtArgs>
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    servicios?: boolean | serviciosDefaultArgs<ExtArgs>
    _count?: boolean | Planes_pagoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planes_pago"]>



  export type planes_pagoSelectScalar = {
    id?: boolean
    cliente_id?: boolean
    servicio_id?: boolean
    numero_cuotas?: boolean
    fecha_inicio?: boolean
  }

  export type planes_pagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cliente_id" | "servicio_id" | "numero_cuotas" | "fecha_inicio", ExtArgs["result"]["planes_pago"]>
  export type planes_pagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuotas?: boolean | planes_pago$cuotasArgs<ExtArgs>
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    servicios?: boolean | serviciosDefaultArgs<ExtArgs>
    _count?: boolean | Planes_pagoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $planes_pagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "planes_pago"
    objects: {
      cuotas: Prisma.$cuotasPayload<ExtArgs>[]
      clientes: Prisma.$clientesPayload<ExtArgs>
      servicios: Prisma.$serviciosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cliente_id: number
      servicio_id: number
      numero_cuotas: number
      fecha_inicio: Date
    }, ExtArgs["result"]["planes_pago"]>
    composites: {}
  }

  type planes_pagoGetPayload<S extends boolean | null | undefined | planes_pagoDefaultArgs> = $Result.GetResult<Prisma.$planes_pagoPayload, S>

  type planes_pagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<planes_pagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Planes_pagoCountAggregateInputType | true
    }

  export interface planes_pagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['planes_pago'], meta: { name: 'planes_pago' } }
    /**
     * Find zero or one Planes_pago that matches the filter.
     * @param {planes_pagoFindUniqueArgs} args - Arguments to find a Planes_pago
     * @example
     * // Get one Planes_pago
     * const planes_pago = await prisma.planes_pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends planes_pagoFindUniqueArgs>(args: SelectSubset<T, planes_pagoFindUniqueArgs<ExtArgs>>): Prisma__planes_pagoClient<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Planes_pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {planes_pagoFindUniqueOrThrowArgs} args - Arguments to find a Planes_pago
     * @example
     * // Get one Planes_pago
     * const planes_pago = await prisma.planes_pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends planes_pagoFindUniqueOrThrowArgs>(args: SelectSubset<T, planes_pagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__planes_pagoClient<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planes_pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_pagoFindFirstArgs} args - Arguments to find a Planes_pago
     * @example
     * // Get one Planes_pago
     * const planes_pago = await prisma.planes_pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends planes_pagoFindFirstArgs>(args?: SelectSubset<T, planes_pagoFindFirstArgs<ExtArgs>>): Prisma__planes_pagoClient<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planes_pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_pagoFindFirstOrThrowArgs} args - Arguments to find a Planes_pago
     * @example
     * // Get one Planes_pago
     * const planes_pago = await prisma.planes_pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends planes_pagoFindFirstOrThrowArgs>(args?: SelectSubset<T, planes_pagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__planes_pagoClient<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Planes_pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_pagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planes_pagos
     * const planes_pagos = await prisma.planes_pago.findMany()
     * 
     * // Get first 10 Planes_pagos
     * const planes_pagos = await prisma.planes_pago.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planes_pagoWithIdOnly = await prisma.planes_pago.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends planes_pagoFindManyArgs>(args?: SelectSubset<T, planes_pagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Planes_pago.
     * @param {planes_pagoCreateArgs} args - Arguments to create a Planes_pago.
     * @example
     * // Create one Planes_pago
     * const Planes_pago = await prisma.planes_pago.create({
     *   data: {
     *     // ... data to create a Planes_pago
     *   }
     * })
     * 
     */
    create<T extends planes_pagoCreateArgs>(args: SelectSubset<T, planes_pagoCreateArgs<ExtArgs>>): Prisma__planes_pagoClient<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Planes_pagos.
     * @param {planes_pagoCreateManyArgs} args - Arguments to create many Planes_pagos.
     * @example
     * // Create many Planes_pagos
     * const planes_pago = await prisma.planes_pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends planes_pagoCreateManyArgs>(args?: SelectSubset<T, planes_pagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Planes_pago.
     * @param {planes_pagoDeleteArgs} args - Arguments to delete one Planes_pago.
     * @example
     * // Delete one Planes_pago
     * const Planes_pago = await prisma.planes_pago.delete({
     *   where: {
     *     // ... filter to delete one Planes_pago
     *   }
     * })
     * 
     */
    delete<T extends planes_pagoDeleteArgs>(args: SelectSubset<T, planes_pagoDeleteArgs<ExtArgs>>): Prisma__planes_pagoClient<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Planes_pago.
     * @param {planes_pagoUpdateArgs} args - Arguments to update one Planes_pago.
     * @example
     * // Update one Planes_pago
     * const planes_pago = await prisma.planes_pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends planes_pagoUpdateArgs>(args: SelectSubset<T, planes_pagoUpdateArgs<ExtArgs>>): Prisma__planes_pagoClient<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Planes_pagos.
     * @param {planes_pagoDeleteManyArgs} args - Arguments to filter Planes_pagos to delete.
     * @example
     * // Delete a few Planes_pagos
     * const { count } = await prisma.planes_pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends planes_pagoDeleteManyArgs>(args?: SelectSubset<T, planes_pagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planes_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_pagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planes_pagos
     * const planes_pago = await prisma.planes_pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends planes_pagoUpdateManyArgs>(args: SelectSubset<T, planes_pagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Planes_pago.
     * @param {planes_pagoUpsertArgs} args - Arguments to update or create a Planes_pago.
     * @example
     * // Update or create a Planes_pago
     * const planes_pago = await prisma.planes_pago.upsert({
     *   create: {
     *     // ... data to create a Planes_pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planes_pago we want to update
     *   }
     * })
     */
    upsert<T extends planes_pagoUpsertArgs>(args: SelectSubset<T, planes_pagoUpsertArgs<ExtArgs>>): Prisma__planes_pagoClient<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Planes_pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_pagoCountArgs} args - Arguments to filter Planes_pagos to count.
     * @example
     * // Count the number of Planes_pagos
     * const count = await prisma.planes_pago.count({
     *   where: {
     *     // ... the filter for the Planes_pagos we want to count
     *   }
     * })
    **/
    count<T extends planes_pagoCountArgs>(
      args?: Subset<T, planes_pagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Planes_pagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planes_pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Planes_pagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Planes_pagoAggregateArgs>(args: Subset<T, Planes_pagoAggregateArgs>): Prisma.PrismaPromise<GetPlanes_pagoAggregateType<T>>

    /**
     * Group by Planes_pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planes_pagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends planes_pagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: planes_pagoGroupByArgs['orderBy'] }
        : { orderBy?: planes_pagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, planes_pagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanes_pagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the planes_pago model
   */
  readonly fields: planes_pagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for planes_pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__planes_pagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuotas<T extends planes_pago$cuotasArgs<ExtArgs> = {}>(args?: Subset<T, planes_pago$cuotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientes<T extends clientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientesDefaultArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicios<T extends serviciosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, serviciosDefaultArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the planes_pago model
   */
  interface planes_pagoFieldRefs {
    readonly id: FieldRef<"planes_pago", 'Int'>
    readonly cliente_id: FieldRef<"planes_pago", 'Int'>
    readonly servicio_id: FieldRef<"planes_pago", 'Int'>
    readonly numero_cuotas: FieldRef<"planes_pago", 'Int'>
    readonly fecha_inicio: FieldRef<"planes_pago", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * planes_pago findUnique
   */
  export type planes_pagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
    /**
     * Filter, which planes_pago to fetch.
     */
    where: planes_pagoWhereUniqueInput
  }

  /**
   * planes_pago findUniqueOrThrow
   */
  export type planes_pagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
    /**
     * Filter, which planes_pago to fetch.
     */
    where: planes_pagoWhereUniqueInput
  }

  /**
   * planes_pago findFirst
   */
  export type planes_pagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
    /**
     * Filter, which planes_pago to fetch.
     */
    where?: planes_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_pagos to fetch.
     */
    orderBy?: planes_pagoOrderByWithRelationInput | planes_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planes_pagos.
     */
    cursor?: planes_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planes_pagos.
     */
    distinct?: Planes_pagoScalarFieldEnum | Planes_pagoScalarFieldEnum[]
  }

  /**
   * planes_pago findFirstOrThrow
   */
  export type planes_pagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
    /**
     * Filter, which planes_pago to fetch.
     */
    where?: planes_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_pagos to fetch.
     */
    orderBy?: planes_pagoOrderByWithRelationInput | planes_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planes_pagos.
     */
    cursor?: planes_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planes_pagos.
     */
    distinct?: Planes_pagoScalarFieldEnum | Planes_pagoScalarFieldEnum[]
  }

  /**
   * planes_pago findMany
   */
  export type planes_pagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
    /**
     * Filter, which planes_pagos to fetch.
     */
    where?: planes_pagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planes_pagos to fetch.
     */
    orderBy?: planes_pagoOrderByWithRelationInput | planes_pagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing planes_pagos.
     */
    cursor?: planes_pagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planes_pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planes_pagos.
     */
    skip?: number
    distinct?: Planes_pagoScalarFieldEnum | Planes_pagoScalarFieldEnum[]
  }

  /**
   * planes_pago create
   */
  export type planes_pagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
    /**
     * The data needed to create a planes_pago.
     */
    data: XOR<planes_pagoCreateInput, planes_pagoUncheckedCreateInput>
  }

  /**
   * planes_pago createMany
   */
  export type planes_pagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many planes_pagos.
     */
    data: planes_pagoCreateManyInput | planes_pagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * planes_pago update
   */
  export type planes_pagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
    /**
     * The data needed to update a planes_pago.
     */
    data: XOR<planes_pagoUpdateInput, planes_pagoUncheckedUpdateInput>
    /**
     * Choose, which planes_pago to update.
     */
    where: planes_pagoWhereUniqueInput
  }

  /**
   * planes_pago updateMany
   */
  export type planes_pagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update planes_pagos.
     */
    data: XOR<planes_pagoUpdateManyMutationInput, planes_pagoUncheckedUpdateManyInput>
    /**
     * Filter which planes_pagos to update
     */
    where?: planes_pagoWhereInput
    /**
     * Limit how many planes_pagos to update.
     */
    limit?: number
  }

  /**
   * planes_pago upsert
   */
  export type planes_pagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
    /**
     * The filter to search for the planes_pago to update in case it exists.
     */
    where: planes_pagoWhereUniqueInput
    /**
     * In case the planes_pago found by the `where` argument doesn't exist, create a new planes_pago with this data.
     */
    create: XOR<planes_pagoCreateInput, planes_pagoUncheckedCreateInput>
    /**
     * In case the planes_pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<planes_pagoUpdateInput, planes_pagoUncheckedUpdateInput>
  }

  /**
   * planes_pago delete
   */
  export type planes_pagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
    /**
     * Filter which planes_pago to delete.
     */
    where: planes_pagoWhereUniqueInput
  }

  /**
   * planes_pago deleteMany
   */
  export type planes_pagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which planes_pagos to delete
     */
    where?: planes_pagoWhereInput
    /**
     * Limit how many planes_pagos to delete.
     */
    limit?: number
  }

  /**
   * planes_pago.cuotas
   */
  export type planes_pago$cuotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    where?: cuotasWhereInput
    orderBy?: cuotasOrderByWithRelationInput | cuotasOrderByWithRelationInput[]
    cursor?: cuotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuotasScalarFieldEnum | CuotasScalarFieldEnum[]
  }

  /**
   * planes_pago without action
   */
  export type planes_pagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
  }


  /**
   * Model servicios
   */

  export type AggregateServicios = {
    _count: ServiciosCountAggregateOutputType | null
    _avg: ServiciosAvgAggregateOutputType | null
    _sum: ServiciosSumAggregateOutputType | null
    _min: ServiciosMinAggregateOutputType | null
    _max: ServiciosMaxAggregateOutputType | null
  }

  export type ServiciosAvgAggregateOutputType = {
    id: number | null
    precio_total: Decimal | null
  }

  export type ServiciosSumAggregateOutputType = {
    id: number | null
    precio_total: Decimal | null
  }

  export type ServiciosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio_total: Decimal | null
  }

  export type ServiciosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio_total: Decimal | null
  }

  export type ServiciosCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio_total: number
    _all: number
  }


  export type ServiciosAvgAggregateInputType = {
    id?: true
    precio_total?: true
  }

  export type ServiciosSumAggregateInputType = {
    id?: true
    precio_total?: true
  }

  export type ServiciosMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio_total?: true
  }

  export type ServiciosMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio_total?: true
  }

  export type ServiciosCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio_total?: true
    _all?: true
  }

  export type ServiciosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicios to aggregate.
     */
    where?: serviciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: serviciosOrderByWithRelationInput | serviciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serviciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicios
    **/
    _count?: true | ServiciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiciosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiciosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiciosMaxAggregateInputType
  }

  export type GetServiciosAggregateType<T extends ServiciosAggregateArgs> = {
        [P in keyof T & keyof AggregateServicios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicios[P]>
      : GetScalarType<T[P], AggregateServicios[P]>
  }




  export type serviciosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviciosWhereInput
    orderBy?: serviciosOrderByWithAggregationInput | serviciosOrderByWithAggregationInput[]
    by: ServiciosScalarFieldEnum[] | ServiciosScalarFieldEnum
    having?: serviciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiciosCountAggregateInputType | true
    _avg?: ServiciosAvgAggregateInputType
    _sum?: ServiciosSumAggregateInputType
    _min?: ServiciosMinAggregateInputType
    _max?: ServiciosMaxAggregateInputType
  }

  export type ServiciosGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    precio_total: Decimal
    _count: ServiciosCountAggregateOutputType | null
    _avg: ServiciosAvgAggregateOutputType | null
    _sum: ServiciosSumAggregateOutputType | null
    _min: ServiciosMinAggregateOutputType | null
    _max: ServiciosMaxAggregateOutputType | null
  }

  type GetServiciosGroupByPayload<T extends serviciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiciosGroupByOutputType[P]>
            : GetScalarType<T[P], ServiciosGroupByOutputType[P]>
        }
      >
    >


  export type serviciosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio_total?: boolean
    planes_pago?: boolean | servicios$planes_pagoArgs<ExtArgs>
    _count?: boolean | ServiciosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicios"]>



  export type serviciosSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio_total?: boolean
  }

  export type serviciosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio_total", ExtArgs["result"]["servicios"]>
  export type serviciosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planes_pago?: boolean | servicios$planes_pagoArgs<ExtArgs>
    _count?: boolean | ServiciosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $serviciosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servicios"
    objects: {
      planes_pago: Prisma.$planes_pagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      precio_total: Prisma.Decimal
    }, ExtArgs["result"]["servicios"]>
    composites: {}
  }

  type serviciosGetPayload<S extends boolean | null | undefined | serviciosDefaultArgs> = $Result.GetResult<Prisma.$serviciosPayload, S>

  type serviciosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<serviciosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiciosCountAggregateInputType | true
    }

  export interface serviciosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servicios'], meta: { name: 'servicios' } }
    /**
     * Find zero or one Servicios that matches the filter.
     * @param {serviciosFindUniqueArgs} args - Arguments to find a Servicios
     * @example
     * // Get one Servicios
     * const servicios = await prisma.servicios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends serviciosFindUniqueArgs>(args: SelectSubset<T, serviciosFindUniqueArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {serviciosFindUniqueOrThrowArgs} args - Arguments to find a Servicios
     * @example
     * // Get one Servicios
     * const servicios = await prisma.servicios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends serviciosFindUniqueOrThrowArgs>(args: SelectSubset<T, serviciosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosFindFirstArgs} args - Arguments to find a Servicios
     * @example
     * // Get one Servicios
     * const servicios = await prisma.servicios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends serviciosFindFirstArgs>(args?: SelectSubset<T, serviciosFindFirstArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosFindFirstOrThrowArgs} args - Arguments to find a Servicios
     * @example
     * // Get one Servicios
     * const servicios = await prisma.servicios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends serviciosFindFirstOrThrowArgs>(args?: SelectSubset<T, serviciosFindFirstOrThrowArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicios.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviciosWithIdOnly = await prisma.servicios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends serviciosFindManyArgs>(args?: SelectSubset<T, serviciosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicios.
     * @param {serviciosCreateArgs} args - Arguments to create a Servicios.
     * @example
     * // Create one Servicios
     * const Servicios = await prisma.servicios.create({
     *   data: {
     *     // ... data to create a Servicios
     *   }
     * })
     * 
     */
    create<T extends serviciosCreateArgs>(args: SelectSubset<T, serviciosCreateArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicios.
     * @param {serviciosCreateManyArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicios = await prisma.servicios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends serviciosCreateManyArgs>(args?: SelectSubset<T, serviciosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servicios.
     * @param {serviciosDeleteArgs} args - Arguments to delete one Servicios.
     * @example
     * // Delete one Servicios
     * const Servicios = await prisma.servicios.delete({
     *   where: {
     *     // ... filter to delete one Servicios
     *   }
     * })
     * 
     */
    delete<T extends serviciosDeleteArgs>(args: SelectSubset<T, serviciosDeleteArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicios.
     * @param {serviciosUpdateArgs} args - Arguments to update one Servicios.
     * @example
     * // Update one Servicios
     * const servicios = await prisma.servicios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends serviciosUpdateArgs>(args: SelectSubset<T, serviciosUpdateArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicios.
     * @param {serviciosDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends serviciosDeleteManyArgs>(args?: SelectSubset<T, serviciosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicios = await prisma.servicios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends serviciosUpdateManyArgs>(args: SelectSubset<T, serviciosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servicios.
     * @param {serviciosUpsertArgs} args - Arguments to update or create a Servicios.
     * @example
     * // Update or create a Servicios
     * const servicios = await prisma.servicios.upsert({
     *   create: {
     *     // ... data to create a Servicios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicios we want to update
     *   }
     * })
     */
    upsert<T extends serviciosUpsertArgs>(args: SelectSubset<T, serviciosUpsertArgs<ExtArgs>>): Prisma__serviciosClient<$Result.GetResult<Prisma.$serviciosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicios.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends serviciosCountArgs>(
      args?: Subset<T, serviciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiciosAggregateArgs>(args: Subset<T, ServiciosAggregateArgs>): Prisma.PrismaPromise<GetServiciosAggregateType<T>>

    /**
     * Group by Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviciosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends serviciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serviciosGroupByArgs['orderBy'] }
        : { orderBy?: serviciosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, serviciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servicios model
   */
  readonly fields: serviciosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servicios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serviciosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planes_pago<T extends servicios$planes_pagoArgs<ExtArgs> = {}>(args?: Subset<T, servicios$planes_pagoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$planes_pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the servicios model
   */
  interface serviciosFieldRefs {
    readonly id: FieldRef<"servicios", 'Int'>
    readonly nombre: FieldRef<"servicios", 'String'>
    readonly descripcion: FieldRef<"servicios", 'String'>
    readonly precio_total: FieldRef<"servicios", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * servicios findUnique
   */
  export type serviciosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter, which servicios to fetch.
     */
    where: serviciosWhereUniqueInput
  }

  /**
   * servicios findUniqueOrThrow
   */
  export type serviciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter, which servicios to fetch.
     */
    where: serviciosWhereUniqueInput
  }

  /**
   * servicios findFirst
   */
  export type serviciosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter, which servicios to fetch.
     */
    where?: serviciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: serviciosOrderByWithRelationInput | serviciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicios.
     */
    cursor?: serviciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicios.
     */
    distinct?: ServiciosScalarFieldEnum | ServiciosScalarFieldEnum[]
  }

  /**
   * servicios findFirstOrThrow
   */
  export type serviciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter, which servicios to fetch.
     */
    where?: serviciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: serviciosOrderByWithRelationInput | serviciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicios.
     */
    cursor?: serviciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicios.
     */
    distinct?: ServiciosScalarFieldEnum | ServiciosScalarFieldEnum[]
  }

  /**
   * servicios findMany
   */
  export type serviciosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter, which servicios to fetch.
     */
    where?: serviciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicios to fetch.
     */
    orderBy?: serviciosOrderByWithRelationInput | serviciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicios.
     */
    cursor?: serviciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicios.
     */
    skip?: number
    distinct?: ServiciosScalarFieldEnum | ServiciosScalarFieldEnum[]
  }

  /**
   * servicios create
   */
  export type serviciosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * The data needed to create a servicios.
     */
    data: XOR<serviciosCreateInput, serviciosUncheckedCreateInput>
  }

  /**
   * servicios createMany
   */
  export type serviciosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicios.
     */
    data: serviciosCreateManyInput | serviciosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicios update
   */
  export type serviciosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * The data needed to update a servicios.
     */
    data: XOR<serviciosUpdateInput, serviciosUncheckedUpdateInput>
    /**
     * Choose, which servicios to update.
     */
    where: serviciosWhereUniqueInput
  }

  /**
   * servicios updateMany
   */
  export type serviciosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicios.
     */
    data: XOR<serviciosUpdateManyMutationInput, serviciosUncheckedUpdateManyInput>
    /**
     * Filter which servicios to update
     */
    where?: serviciosWhereInput
    /**
     * Limit how many servicios to update.
     */
    limit?: number
  }

  /**
   * servicios upsert
   */
  export type serviciosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * The filter to search for the servicios to update in case it exists.
     */
    where: serviciosWhereUniqueInput
    /**
     * In case the servicios found by the `where` argument doesn't exist, create a new servicios with this data.
     */
    create: XOR<serviciosCreateInput, serviciosUncheckedCreateInput>
    /**
     * In case the servicios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serviciosUpdateInput, serviciosUncheckedUpdateInput>
  }

  /**
   * servicios delete
   */
  export type serviciosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
    /**
     * Filter which servicios to delete.
     */
    where: serviciosWhereUniqueInput
  }

  /**
   * servicios deleteMany
   */
  export type serviciosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicios to delete
     */
    where?: serviciosWhereInput
    /**
     * Limit how many servicios to delete.
     */
    limit?: number
  }

  /**
   * servicios.planes_pago
   */
  export type servicios$planes_pagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planes_pago
     */
    select?: planes_pagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the planes_pago
     */
    omit?: planes_pagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planes_pagoInclude<ExtArgs> | null
    where?: planes_pagoWhereInput
    orderBy?: planes_pagoOrderByWithRelationInput | planes_pagoOrderByWithRelationInput[]
    cursor?: planes_pagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Planes_pagoScalarFieldEnum | Planes_pagoScalarFieldEnum[]
  }

  /**
   * servicios without action
   */
  export type serviciosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicios
     */
    select?: serviciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the servicios
     */
    omit?: serviciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviciosInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    resetToken: string | null
    resetTokenExp: Date | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    resetToken: string | null
    resetTokenExp: Date | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    resetToken: number
    resetTokenExp: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    resetToken?: true
    resetTokenExp?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    resetToken?: true
    resetTokenExp?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    resetToken?: true
    resetTokenExp?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    resetToken: string | null
    resetTokenExp: Date | null
    createdAt: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExp?: boolean
    createdAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "resetToken" | "resetTokenExp" | "createdAt", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      resetToken: string | null
      resetTokenExp: Date | null
      createdAt: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly resetToken: FieldRef<"users", 'String'>
    readonly resetTokenExp: FieldRef<"users", 'DateTime'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const CuotasScalarFieldEnum: {
    id: 'id',
    plan_pago_id: 'plan_pago_id',
    numero_cuota: 'numero_cuota',
    monto: 'monto',
    fecha_vencimiento: 'fecha_vencimiento',
    estado: 'estado',
    fecha_pago: 'fecha_pago'
  };

  export type CuotasScalarFieldEnum = (typeof CuotasScalarFieldEnum)[keyof typeof CuotasScalarFieldEnum]


  export const Planes_pagoScalarFieldEnum: {
    id: 'id',
    cliente_id: 'cliente_id',
    servicio_id: 'servicio_id',
    numero_cuotas: 'numero_cuotas',
    fecha_inicio: 'fecha_inicio'
  };

  export type Planes_pagoScalarFieldEnum = (typeof Planes_pagoScalarFieldEnum)[keyof typeof Planes_pagoScalarFieldEnum]


  export const ServiciosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio_total: 'precio_total'
  };

  export type ServiciosScalarFieldEnum = (typeof ServiciosScalarFieldEnum)[keyof typeof ServiciosScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    resetToken: 'resetToken',
    resetTokenExp: 'resetTokenExp',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const clientesOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email'
  };

  export type clientesOrderByRelevanceFieldEnum = (typeof clientesOrderByRelevanceFieldEnum)[keyof typeof clientesOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const serviciosOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type serviciosOrderByRelevanceFieldEnum = (typeof serviciosOrderByRelevanceFieldEnum)[keyof typeof serviciosOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    resetToken: 'resetToken'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'cuotas_estado'
   */
  export type Enumcuotas_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cuotas_estado'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type clientesWhereInput = {
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    id?: IntFilter<"clientes"> | number
    nombre?: StringFilter<"clientes"> | string
    apellido?: StringFilter<"clientes"> | string
    email?: StringFilter<"clientes"> | string
    planes_pago?: Planes_pagoListRelationFilter
  }

  export type clientesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    planes_pago?: planes_pagoOrderByRelationAggregateInput
    _relevance?: clientesOrderByRelevanceInput
  }

  export type clientesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    nombre?: StringFilter<"clientes"> | string
    apellido?: StringFilter<"clientes"> | string
    planes_pago?: Planes_pagoListRelationFilter
  }, "id" | "email">

  export type clientesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    _count?: clientesCountOrderByAggregateInput
    _avg?: clientesAvgOrderByAggregateInput
    _max?: clientesMaxOrderByAggregateInput
    _min?: clientesMinOrderByAggregateInput
    _sum?: clientesSumOrderByAggregateInput
  }

  export type clientesScalarWhereWithAggregatesInput = {
    AND?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    OR?: clientesScalarWhereWithAggregatesInput[]
    NOT?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clientes"> | number
    nombre?: StringWithAggregatesFilter<"clientes"> | string
    apellido?: StringWithAggregatesFilter<"clientes"> | string
    email?: StringWithAggregatesFilter<"clientes"> | string
  }

  export type cuotasWhereInput = {
    AND?: cuotasWhereInput | cuotasWhereInput[]
    OR?: cuotasWhereInput[]
    NOT?: cuotasWhereInput | cuotasWhereInput[]
    id?: IntFilter<"cuotas"> | number
    plan_pago_id?: IntFilter<"cuotas"> | number
    numero_cuota?: IntFilter<"cuotas"> | number
    monto?: DecimalFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeFilter<"cuotas"> | Date | string
    estado?: Enumcuotas_estadoNullableFilter<"cuotas"> | $Enums.cuotas_estado | null
    fecha_pago?: DateTimeNullableFilter<"cuotas"> | Date | string | null
    planes_pago?: XOR<Planes_pagoScalarRelationFilter, planes_pagoWhereInput>
  }

  export type cuotasOrderByWithRelationInput = {
    id?: SortOrder
    plan_pago_id?: SortOrder
    numero_cuota?: SortOrder
    monto?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrderInput | SortOrder
    fecha_pago?: SortOrderInput | SortOrder
    planes_pago?: planes_pagoOrderByWithRelationInput
  }

  export type cuotasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cuotasWhereInput | cuotasWhereInput[]
    OR?: cuotasWhereInput[]
    NOT?: cuotasWhereInput | cuotasWhereInput[]
    plan_pago_id?: IntFilter<"cuotas"> | number
    numero_cuota?: IntFilter<"cuotas"> | number
    monto?: DecimalFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeFilter<"cuotas"> | Date | string
    estado?: Enumcuotas_estadoNullableFilter<"cuotas"> | $Enums.cuotas_estado | null
    fecha_pago?: DateTimeNullableFilter<"cuotas"> | Date | string | null
    planes_pago?: XOR<Planes_pagoScalarRelationFilter, planes_pagoWhereInput>
  }, "id">

  export type cuotasOrderByWithAggregationInput = {
    id?: SortOrder
    plan_pago_id?: SortOrder
    numero_cuota?: SortOrder
    monto?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrderInput | SortOrder
    fecha_pago?: SortOrderInput | SortOrder
    _count?: cuotasCountOrderByAggregateInput
    _avg?: cuotasAvgOrderByAggregateInput
    _max?: cuotasMaxOrderByAggregateInput
    _min?: cuotasMinOrderByAggregateInput
    _sum?: cuotasSumOrderByAggregateInput
  }

  export type cuotasScalarWhereWithAggregatesInput = {
    AND?: cuotasScalarWhereWithAggregatesInput | cuotasScalarWhereWithAggregatesInput[]
    OR?: cuotasScalarWhereWithAggregatesInput[]
    NOT?: cuotasScalarWhereWithAggregatesInput | cuotasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cuotas"> | number
    plan_pago_id?: IntWithAggregatesFilter<"cuotas"> | number
    numero_cuota?: IntWithAggregatesFilter<"cuotas"> | number
    monto?: DecimalWithAggregatesFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeWithAggregatesFilter<"cuotas"> | Date | string
    estado?: Enumcuotas_estadoNullableWithAggregatesFilter<"cuotas"> | $Enums.cuotas_estado | null
    fecha_pago?: DateTimeNullableWithAggregatesFilter<"cuotas"> | Date | string | null
  }

  export type planes_pagoWhereInput = {
    AND?: planes_pagoWhereInput | planes_pagoWhereInput[]
    OR?: planes_pagoWhereInput[]
    NOT?: planes_pagoWhereInput | planes_pagoWhereInput[]
    id?: IntFilter<"planes_pago"> | number
    cliente_id?: IntFilter<"planes_pago"> | number
    servicio_id?: IntFilter<"planes_pago"> | number
    numero_cuotas?: IntFilter<"planes_pago"> | number
    fecha_inicio?: DateTimeFilter<"planes_pago"> | Date | string
    cuotas?: CuotasListRelationFilter
    clientes?: XOR<ClientesScalarRelationFilter, clientesWhereInput>
    servicios?: XOR<ServiciosScalarRelationFilter, serviciosWhereInput>
  }

  export type planes_pagoOrderByWithRelationInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    servicio_id?: SortOrder
    numero_cuotas?: SortOrder
    fecha_inicio?: SortOrder
    cuotas?: cuotasOrderByRelationAggregateInput
    clientes?: clientesOrderByWithRelationInput
    servicios?: serviciosOrderByWithRelationInput
  }

  export type planes_pagoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: planes_pagoWhereInput | planes_pagoWhereInput[]
    OR?: planes_pagoWhereInput[]
    NOT?: planes_pagoWhereInput | planes_pagoWhereInput[]
    cliente_id?: IntFilter<"planes_pago"> | number
    servicio_id?: IntFilter<"planes_pago"> | number
    numero_cuotas?: IntFilter<"planes_pago"> | number
    fecha_inicio?: DateTimeFilter<"planes_pago"> | Date | string
    cuotas?: CuotasListRelationFilter
    clientes?: XOR<ClientesScalarRelationFilter, clientesWhereInput>
    servicios?: XOR<ServiciosScalarRelationFilter, serviciosWhereInput>
  }, "id">

  export type planes_pagoOrderByWithAggregationInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    servicio_id?: SortOrder
    numero_cuotas?: SortOrder
    fecha_inicio?: SortOrder
    _count?: planes_pagoCountOrderByAggregateInput
    _avg?: planes_pagoAvgOrderByAggregateInput
    _max?: planes_pagoMaxOrderByAggregateInput
    _min?: planes_pagoMinOrderByAggregateInput
    _sum?: planes_pagoSumOrderByAggregateInput
  }

  export type planes_pagoScalarWhereWithAggregatesInput = {
    AND?: planes_pagoScalarWhereWithAggregatesInput | planes_pagoScalarWhereWithAggregatesInput[]
    OR?: planes_pagoScalarWhereWithAggregatesInput[]
    NOT?: planes_pagoScalarWhereWithAggregatesInput | planes_pagoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"planes_pago"> | number
    cliente_id?: IntWithAggregatesFilter<"planes_pago"> | number
    servicio_id?: IntWithAggregatesFilter<"planes_pago"> | number
    numero_cuotas?: IntWithAggregatesFilter<"planes_pago"> | number
    fecha_inicio?: DateTimeWithAggregatesFilter<"planes_pago"> | Date | string
  }

  export type serviciosWhereInput = {
    AND?: serviciosWhereInput | serviciosWhereInput[]
    OR?: serviciosWhereInput[]
    NOT?: serviciosWhereInput | serviciosWhereInput[]
    id?: IntFilter<"servicios"> | number
    nombre?: StringFilter<"servicios"> | string
    descripcion?: StringNullableFilter<"servicios"> | string | null
    precio_total?: DecimalFilter<"servicios"> | Decimal | DecimalJsLike | number | string
    planes_pago?: Planes_pagoListRelationFilter
  }

  export type serviciosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio_total?: SortOrder
    planes_pago?: planes_pagoOrderByRelationAggregateInput
    _relevance?: serviciosOrderByRelevanceInput
  }

  export type serviciosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: serviciosWhereInput | serviciosWhereInput[]
    OR?: serviciosWhereInput[]
    NOT?: serviciosWhereInput | serviciosWhereInput[]
    nombre?: StringFilter<"servicios"> | string
    descripcion?: StringNullableFilter<"servicios"> | string | null
    precio_total?: DecimalFilter<"servicios"> | Decimal | DecimalJsLike | number | string
    planes_pago?: Planes_pagoListRelationFilter
  }, "id">

  export type serviciosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio_total?: SortOrder
    _count?: serviciosCountOrderByAggregateInput
    _avg?: serviciosAvgOrderByAggregateInput
    _max?: serviciosMaxOrderByAggregateInput
    _min?: serviciosMinOrderByAggregateInput
    _sum?: serviciosSumOrderByAggregateInput
  }

  export type serviciosScalarWhereWithAggregatesInput = {
    AND?: serviciosScalarWhereWithAggregatesInput | serviciosScalarWhereWithAggregatesInput[]
    OR?: serviciosScalarWhereWithAggregatesInput[]
    NOT?: serviciosScalarWhereWithAggregatesInput | serviciosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"servicios"> | number
    nombre?: StringWithAggregatesFilter<"servicios"> | string
    descripcion?: StringNullableWithAggregatesFilter<"servicios"> | string | null
    precio_total?: DecimalWithAggregatesFilter<"servicios"> | Decimal | DecimalJsLike | number | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    resetToken?: StringNullableFilter<"users"> | string | null
    resetTokenExp?: DateTimeNullableFilter<"users"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExp?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    resetToken?: StringNullableFilter<"users"> | string | null
    resetTokenExp?: DateTimeNullableFilter<"users"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"users"> | Date | string | null
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExp?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    resetToken?: StringNullableWithAggregatesFilter<"users"> | string | null
    resetTokenExp?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type clientesCreateInput = {
    nombre: string
    apellido: string
    email: string
    planes_pago?: planes_pagoCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    planes_pago?: planes_pagoUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    planes_pago?: planes_pagoUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    planes_pago?: planes_pagoUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type clientesCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
  }

  export type clientesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type clientesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type cuotasCreateInput = {
    numero_cuota: number
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento: Date | string
    estado?: $Enums.cuotas_estado | null
    fecha_pago?: Date | string | null
    planes_pago: planes_pagoCreateNestedOneWithoutCuotasInput
  }

  export type cuotasUncheckedCreateInput = {
    id?: number
    plan_pago_id: number
    numero_cuota: number
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento: Date | string
    estado?: $Enums.cuotas_estado | null
    fecha_pago?: Date | string | null
  }

  export type cuotasUpdateInput = {
    numero_cuota?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumcuotas_estadoFieldUpdateOperationsInput | $Enums.cuotas_estado | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planes_pago?: planes_pagoUpdateOneRequiredWithoutCuotasNestedInput
  }

  export type cuotasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_pago_id?: IntFieldUpdateOperationsInput | number
    numero_cuota?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumcuotas_estadoFieldUpdateOperationsInput | $Enums.cuotas_estado | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuotasCreateManyInput = {
    id?: number
    plan_pago_id: number
    numero_cuota: number
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento: Date | string
    estado?: $Enums.cuotas_estado | null
    fecha_pago?: Date | string | null
  }

  export type cuotasUpdateManyMutationInput = {
    numero_cuota?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumcuotas_estadoFieldUpdateOperationsInput | $Enums.cuotas_estado | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuotasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_pago_id?: IntFieldUpdateOperationsInput | number
    numero_cuota?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumcuotas_estadoFieldUpdateOperationsInput | $Enums.cuotas_estado | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type planes_pagoCreateInput = {
    numero_cuotas: number
    fecha_inicio: Date | string
    cuotas?: cuotasCreateNestedManyWithoutPlanes_pagoInput
    clientes: clientesCreateNestedOneWithoutPlanes_pagoInput
    servicios: serviciosCreateNestedOneWithoutPlanes_pagoInput
  }

  export type planes_pagoUncheckedCreateInput = {
    id?: number
    cliente_id: number
    servicio_id: number
    numero_cuotas: number
    fecha_inicio: Date | string
    cuotas?: cuotasUncheckedCreateNestedManyWithoutPlanes_pagoInput
  }

  export type planes_pagoUpdateInput = {
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cuotas?: cuotasUpdateManyWithoutPlanes_pagoNestedInput
    clientes?: clientesUpdateOneRequiredWithoutPlanes_pagoNestedInput
    servicios?: serviciosUpdateOneRequiredWithoutPlanes_pagoNestedInput
  }

  export type planes_pagoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    servicio_id?: IntFieldUpdateOperationsInput | number
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cuotas?: cuotasUncheckedUpdateManyWithoutPlanes_pagoNestedInput
  }

  export type planes_pagoCreateManyInput = {
    id?: number
    cliente_id: number
    servicio_id: number
    numero_cuotas: number
    fecha_inicio: Date | string
  }

  export type planes_pagoUpdateManyMutationInput = {
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type planes_pagoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    servicio_id?: IntFieldUpdateOperationsInput | number
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviciosCreateInput = {
    nombre: string
    descripcion?: string | null
    precio_total: Decimal | DecimalJsLike | number | string
    planes_pago?: planes_pagoCreateNestedManyWithoutServiciosInput
  }

  export type serviciosUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio_total: Decimal | DecimalJsLike | number | string
    planes_pago?: planes_pagoUncheckedCreateNestedManyWithoutServiciosInput
  }

  export type serviciosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    planes_pago?: planes_pagoUpdateManyWithoutServiciosNestedInput
  }

  export type serviciosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    planes_pago?: planes_pagoUncheckedUpdateManyWithoutServiciosNestedInput
  }

  export type serviciosCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio_total: Decimal | DecimalJsLike | number | string
  }

  export type serviciosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type serviciosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type usersCreateInput = {
    name: string
    email: string
    password: string
    resetToken?: string | null
    resetTokenExp?: Date | string | null
    createdAt?: Date | string | null
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    resetToken?: string | null
    resetTokenExp?: Date | string | null
    createdAt?: Date | string | null
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    resetToken?: string | null
    resetTokenExp?: Date | string | null
    createdAt?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Planes_pagoListRelationFilter = {
    every?: planes_pagoWhereInput
    some?: planes_pagoWhereInput
    none?: planes_pagoWhereInput
  }

  export type planes_pagoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientesOrderByRelevanceInput = {
    fields: clientesOrderByRelevanceFieldEnum | clientesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clientesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
  }

  export type clientesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clientesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
  }

  export type clientesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
  }

  export type clientesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumcuotas_estadoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cuotas_estado | Enumcuotas_estadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.cuotas_estado[] | null
    notIn?: $Enums.cuotas_estado[] | null
    not?: NestedEnumcuotas_estadoNullableFilter<$PrismaModel> | $Enums.cuotas_estado | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Planes_pagoScalarRelationFilter = {
    is?: planes_pagoWhereInput
    isNot?: planes_pagoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cuotasCountOrderByAggregateInput = {
    id?: SortOrder
    plan_pago_id?: SortOrder
    numero_cuota?: SortOrder
    monto?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrder
    fecha_pago?: SortOrder
  }

  export type cuotasAvgOrderByAggregateInput = {
    id?: SortOrder
    plan_pago_id?: SortOrder
    numero_cuota?: SortOrder
    monto?: SortOrder
  }

  export type cuotasMaxOrderByAggregateInput = {
    id?: SortOrder
    plan_pago_id?: SortOrder
    numero_cuota?: SortOrder
    monto?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrder
    fecha_pago?: SortOrder
  }

  export type cuotasMinOrderByAggregateInput = {
    id?: SortOrder
    plan_pago_id?: SortOrder
    numero_cuota?: SortOrder
    monto?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrder
    fecha_pago?: SortOrder
  }

  export type cuotasSumOrderByAggregateInput = {
    id?: SortOrder
    plan_pago_id?: SortOrder
    numero_cuota?: SortOrder
    monto?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumcuotas_estadoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuotas_estado | Enumcuotas_estadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.cuotas_estado[] | null
    notIn?: $Enums.cuotas_estado[] | null
    not?: NestedEnumcuotas_estadoNullableWithAggregatesFilter<$PrismaModel> | $Enums.cuotas_estado | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcuotas_estadoNullableFilter<$PrismaModel>
    _max?: NestedEnumcuotas_estadoNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CuotasListRelationFilter = {
    every?: cuotasWhereInput
    some?: cuotasWhereInput
    none?: cuotasWhereInput
  }

  export type ClientesScalarRelationFilter = {
    is?: clientesWhereInput
    isNot?: clientesWhereInput
  }

  export type ServiciosScalarRelationFilter = {
    is?: serviciosWhereInput
    isNot?: serviciosWhereInput
  }

  export type cuotasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type planes_pagoCountOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    servicio_id?: SortOrder
    numero_cuotas?: SortOrder
    fecha_inicio?: SortOrder
  }

  export type planes_pagoAvgOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    servicio_id?: SortOrder
    numero_cuotas?: SortOrder
  }

  export type planes_pagoMaxOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    servicio_id?: SortOrder
    numero_cuotas?: SortOrder
    fecha_inicio?: SortOrder
  }

  export type planes_pagoMinOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    servicio_id?: SortOrder
    numero_cuotas?: SortOrder
    fecha_inicio?: SortOrder
  }

  export type planes_pagoSumOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    servicio_id?: SortOrder
    numero_cuotas?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type serviciosOrderByRelevanceInput = {
    fields: serviciosOrderByRelevanceFieldEnum | serviciosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type serviciosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio_total?: SortOrder
  }

  export type serviciosAvgOrderByAggregateInput = {
    id?: SortOrder
    precio_total?: SortOrder
  }

  export type serviciosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio_total?: SortOrder
  }

  export type serviciosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio_total?: SortOrder
  }

  export type serviciosSumOrderByAggregateInput = {
    id?: SortOrder
    precio_total?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExp?: SortOrder
    createdAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExp?: SortOrder
    createdAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExp?: SortOrder
    createdAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type planes_pagoCreateNestedManyWithoutClientesInput = {
    create?: XOR<planes_pagoCreateWithoutClientesInput, planes_pagoUncheckedCreateWithoutClientesInput> | planes_pagoCreateWithoutClientesInput[] | planes_pagoUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: planes_pagoCreateOrConnectWithoutClientesInput | planes_pagoCreateOrConnectWithoutClientesInput[]
    createMany?: planes_pagoCreateManyClientesInputEnvelope
    connect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
  }

  export type planes_pagoUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<planes_pagoCreateWithoutClientesInput, planes_pagoUncheckedCreateWithoutClientesInput> | planes_pagoCreateWithoutClientesInput[] | planes_pagoUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: planes_pagoCreateOrConnectWithoutClientesInput | planes_pagoCreateOrConnectWithoutClientesInput[]
    createMany?: planes_pagoCreateManyClientesInputEnvelope
    connect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type planes_pagoUpdateManyWithoutClientesNestedInput = {
    create?: XOR<planes_pagoCreateWithoutClientesInput, planes_pagoUncheckedCreateWithoutClientesInput> | planes_pagoCreateWithoutClientesInput[] | planes_pagoUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: planes_pagoCreateOrConnectWithoutClientesInput | planes_pagoCreateOrConnectWithoutClientesInput[]
    upsert?: planes_pagoUpsertWithWhereUniqueWithoutClientesInput | planes_pagoUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: planes_pagoCreateManyClientesInputEnvelope
    set?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    disconnect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    delete?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    connect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    update?: planes_pagoUpdateWithWhereUniqueWithoutClientesInput | planes_pagoUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: planes_pagoUpdateManyWithWhereWithoutClientesInput | planes_pagoUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: planes_pagoScalarWhereInput | planes_pagoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type planes_pagoUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<planes_pagoCreateWithoutClientesInput, planes_pagoUncheckedCreateWithoutClientesInput> | planes_pagoCreateWithoutClientesInput[] | planes_pagoUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: planes_pagoCreateOrConnectWithoutClientesInput | planes_pagoCreateOrConnectWithoutClientesInput[]
    upsert?: planes_pagoUpsertWithWhereUniqueWithoutClientesInput | planes_pagoUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: planes_pagoCreateManyClientesInputEnvelope
    set?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    disconnect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    delete?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    connect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    update?: planes_pagoUpdateWithWhereUniqueWithoutClientesInput | planes_pagoUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: planes_pagoUpdateManyWithWhereWithoutClientesInput | planes_pagoUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: planes_pagoScalarWhereInput | planes_pagoScalarWhereInput[]
  }

  export type planes_pagoCreateNestedOneWithoutCuotasInput = {
    create?: XOR<planes_pagoCreateWithoutCuotasInput, planes_pagoUncheckedCreateWithoutCuotasInput>
    connectOrCreate?: planes_pagoCreateOrConnectWithoutCuotasInput
    connect?: planes_pagoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumcuotas_estadoFieldUpdateOperationsInput = {
    set?: $Enums.cuotas_estado | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type planes_pagoUpdateOneRequiredWithoutCuotasNestedInput = {
    create?: XOR<planes_pagoCreateWithoutCuotasInput, planes_pagoUncheckedCreateWithoutCuotasInput>
    connectOrCreate?: planes_pagoCreateOrConnectWithoutCuotasInput
    upsert?: planes_pagoUpsertWithoutCuotasInput
    connect?: planes_pagoWhereUniqueInput
    update?: XOR<XOR<planes_pagoUpdateToOneWithWhereWithoutCuotasInput, planes_pagoUpdateWithoutCuotasInput>, planes_pagoUncheckedUpdateWithoutCuotasInput>
  }

  export type cuotasCreateNestedManyWithoutPlanes_pagoInput = {
    create?: XOR<cuotasCreateWithoutPlanes_pagoInput, cuotasUncheckedCreateWithoutPlanes_pagoInput> | cuotasCreateWithoutPlanes_pagoInput[] | cuotasUncheckedCreateWithoutPlanes_pagoInput[]
    connectOrCreate?: cuotasCreateOrConnectWithoutPlanes_pagoInput | cuotasCreateOrConnectWithoutPlanes_pagoInput[]
    createMany?: cuotasCreateManyPlanes_pagoInputEnvelope
    connect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
  }

  export type clientesCreateNestedOneWithoutPlanes_pagoInput = {
    create?: XOR<clientesCreateWithoutPlanes_pagoInput, clientesUncheckedCreateWithoutPlanes_pagoInput>
    connectOrCreate?: clientesCreateOrConnectWithoutPlanes_pagoInput
    connect?: clientesWhereUniqueInput
  }

  export type serviciosCreateNestedOneWithoutPlanes_pagoInput = {
    create?: XOR<serviciosCreateWithoutPlanes_pagoInput, serviciosUncheckedCreateWithoutPlanes_pagoInput>
    connectOrCreate?: serviciosCreateOrConnectWithoutPlanes_pagoInput
    connect?: serviciosWhereUniqueInput
  }

  export type cuotasUncheckedCreateNestedManyWithoutPlanes_pagoInput = {
    create?: XOR<cuotasCreateWithoutPlanes_pagoInput, cuotasUncheckedCreateWithoutPlanes_pagoInput> | cuotasCreateWithoutPlanes_pagoInput[] | cuotasUncheckedCreateWithoutPlanes_pagoInput[]
    connectOrCreate?: cuotasCreateOrConnectWithoutPlanes_pagoInput | cuotasCreateOrConnectWithoutPlanes_pagoInput[]
    createMany?: cuotasCreateManyPlanes_pagoInputEnvelope
    connect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
  }

  export type cuotasUpdateManyWithoutPlanes_pagoNestedInput = {
    create?: XOR<cuotasCreateWithoutPlanes_pagoInput, cuotasUncheckedCreateWithoutPlanes_pagoInput> | cuotasCreateWithoutPlanes_pagoInput[] | cuotasUncheckedCreateWithoutPlanes_pagoInput[]
    connectOrCreate?: cuotasCreateOrConnectWithoutPlanes_pagoInput | cuotasCreateOrConnectWithoutPlanes_pagoInput[]
    upsert?: cuotasUpsertWithWhereUniqueWithoutPlanes_pagoInput | cuotasUpsertWithWhereUniqueWithoutPlanes_pagoInput[]
    createMany?: cuotasCreateManyPlanes_pagoInputEnvelope
    set?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    disconnect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    delete?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    connect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    update?: cuotasUpdateWithWhereUniqueWithoutPlanes_pagoInput | cuotasUpdateWithWhereUniqueWithoutPlanes_pagoInput[]
    updateMany?: cuotasUpdateManyWithWhereWithoutPlanes_pagoInput | cuotasUpdateManyWithWhereWithoutPlanes_pagoInput[]
    deleteMany?: cuotasScalarWhereInput | cuotasScalarWhereInput[]
  }

  export type clientesUpdateOneRequiredWithoutPlanes_pagoNestedInput = {
    create?: XOR<clientesCreateWithoutPlanes_pagoInput, clientesUncheckedCreateWithoutPlanes_pagoInput>
    connectOrCreate?: clientesCreateOrConnectWithoutPlanes_pagoInput
    upsert?: clientesUpsertWithoutPlanes_pagoInput
    connect?: clientesWhereUniqueInput
    update?: XOR<XOR<clientesUpdateToOneWithWhereWithoutPlanes_pagoInput, clientesUpdateWithoutPlanes_pagoInput>, clientesUncheckedUpdateWithoutPlanes_pagoInput>
  }

  export type serviciosUpdateOneRequiredWithoutPlanes_pagoNestedInput = {
    create?: XOR<serviciosCreateWithoutPlanes_pagoInput, serviciosUncheckedCreateWithoutPlanes_pagoInput>
    connectOrCreate?: serviciosCreateOrConnectWithoutPlanes_pagoInput
    upsert?: serviciosUpsertWithoutPlanes_pagoInput
    connect?: serviciosWhereUniqueInput
    update?: XOR<XOR<serviciosUpdateToOneWithWhereWithoutPlanes_pagoInput, serviciosUpdateWithoutPlanes_pagoInput>, serviciosUncheckedUpdateWithoutPlanes_pagoInput>
  }

  export type cuotasUncheckedUpdateManyWithoutPlanes_pagoNestedInput = {
    create?: XOR<cuotasCreateWithoutPlanes_pagoInput, cuotasUncheckedCreateWithoutPlanes_pagoInput> | cuotasCreateWithoutPlanes_pagoInput[] | cuotasUncheckedCreateWithoutPlanes_pagoInput[]
    connectOrCreate?: cuotasCreateOrConnectWithoutPlanes_pagoInput | cuotasCreateOrConnectWithoutPlanes_pagoInput[]
    upsert?: cuotasUpsertWithWhereUniqueWithoutPlanes_pagoInput | cuotasUpsertWithWhereUniqueWithoutPlanes_pagoInput[]
    createMany?: cuotasCreateManyPlanes_pagoInputEnvelope
    set?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    disconnect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    delete?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    connect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    update?: cuotasUpdateWithWhereUniqueWithoutPlanes_pagoInput | cuotasUpdateWithWhereUniqueWithoutPlanes_pagoInput[]
    updateMany?: cuotasUpdateManyWithWhereWithoutPlanes_pagoInput | cuotasUpdateManyWithWhereWithoutPlanes_pagoInput[]
    deleteMany?: cuotasScalarWhereInput | cuotasScalarWhereInput[]
  }

  export type planes_pagoCreateNestedManyWithoutServiciosInput = {
    create?: XOR<planes_pagoCreateWithoutServiciosInput, planes_pagoUncheckedCreateWithoutServiciosInput> | planes_pagoCreateWithoutServiciosInput[] | planes_pagoUncheckedCreateWithoutServiciosInput[]
    connectOrCreate?: planes_pagoCreateOrConnectWithoutServiciosInput | planes_pagoCreateOrConnectWithoutServiciosInput[]
    createMany?: planes_pagoCreateManyServiciosInputEnvelope
    connect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
  }

  export type planes_pagoUncheckedCreateNestedManyWithoutServiciosInput = {
    create?: XOR<planes_pagoCreateWithoutServiciosInput, planes_pagoUncheckedCreateWithoutServiciosInput> | planes_pagoCreateWithoutServiciosInput[] | planes_pagoUncheckedCreateWithoutServiciosInput[]
    connectOrCreate?: planes_pagoCreateOrConnectWithoutServiciosInput | planes_pagoCreateOrConnectWithoutServiciosInput[]
    createMany?: planes_pagoCreateManyServiciosInputEnvelope
    connect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type planes_pagoUpdateManyWithoutServiciosNestedInput = {
    create?: XOR<planes_pagoCreateWithoutServiciosInput, planes_pagoUncheckedCreateWithoutServiciosInput> | planes_pagoCreateWithoutServiciosInput[] | planes_pagoUncheckedCreateWithoutServiciosInput[]
    connectOrCreate?: planes_pagoCreateOrConnectWithoutServiciosInput | planes_pagoCreateOrConnectWithoutServiciosInput[]
    upsert?: planes_pagoUpsertWithWhereUniqueWithoutServiciosInput | planes_pagoUpsertWithWhereUniqueWithoutServiciosInput[]
    createMany?: planes_pagoCreateManyServiciosInputEnvelope
    set?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    disconnect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    delete?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    connect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    update?: planes_pagoUpdateWithWhereUniqueWithoutServiciosInput | planes_pagoUpdateWithWhereUniqueWithoutServiciosInput[]
    updateMany?: planes_pagoUpdateManyWithWhereWithoutServiciosInput | planes_pagoUpdateManyWithWhereWithoutServiciosInput[]
    deleteMany?: planes_pagoScalarWhereInput | planes_pagoScalarWhereInput[]
  }

  export type planes_pagoUncheckedUpdateManyWithoutServiciosNestedInput = {
    create?: XOR<planes_pagoCreateWithoutServiciosInput, planes_pagoUncheckedCreateWithoutServiciosInput> | planes_pagoCreateWithoutServiciosInput[] | planes_pagoUncheckedCreateWithoutServiciosInput[]
    connectOrCreate?: planes_pagoCreateOrConnectWithoutServiciosInput | planes_pagoCreateOrConnectWithoutServiciosInput[]
    upsert?: planes_pagoUpsertWithWhereUniqueWithoutServiciosInput | planes_pagoUpsertWithWhereUniqueWithoutServiciosInput[]
    createMany?: planes_pagoCreateManyServiciosInputEnvelope
    set?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    disconnect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    delete?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    connect?: planes_pagoWhereUniqueInput | planes_pagoWhereUniqueInput[]
    update?: planes_pagoUpdateWithWhereUniqueWithoutServiciosInput | planes_pagoUpdateWithWhereUniqueWithoutServiciosInput[]
    updateMany?: planes_pagoUpdateManyWithWhereWithoutServiciosInput | planes_pagoUpdateManyWithWhereWithoutServiciosInput[]
    deleteMany?: planes_pagoScalarWhereInput | planes_pagoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumcuotas_estadoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cuotas_estado | Enumcuotas_estadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.cuotas_estado[] | null
    notIn?: $Enums.cuotas_estado[] | null
    not?: NestedEnumcuotas_estadoNullableFilter<$PrismaModel> | $Enums.cuotas_estado | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumcuotas_estadoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuotas_estado | Enumcuotas_estadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.cuotas_estado[] | null
    notIn?: $Enums.cuotas_estado[] | null
    not?: NestedEnumcuotas_estadoNullableWithAggregatesFilter<$PrismaModel> | $Enums.cuotas_estado | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcuotas_estadoNullableFilter<$PrismaModel>
    _max?: NestedEnumcuotas_estadoNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type planes_pagoCreateWithoutClientesInput = {
    numero_cuotas: number
    fecha_inicio: Date | string
    cuotas?: cuotasCreateNestedManyWithoutPlanes_pagoInput
    servicios: serviciosCreateNestedOneWithoutPlanes_pagoInput
  }

  export type planes_pagoUncheckedCreateWithoutClientesInput = {
    id?: number
    servicio_id: number
    numero_cuotas: number
    fecha_inicio: Date | string
    cuotas?: cuotasUncheckedCreateNestedManyWithoutPlanes_pagoInput
  }

  export type planes_pagoCreateOrConnectWithoutClientesInput = {
    where: planes_pagoWhereUniqueInput
    create: XOR<planes_pagoCreateWithoutClientesInput, planes_pagoUncheckedCreateWithoutClientesInput>
  }

  export type planes_pagoCreateManyClientesInputEnvelope = {
    data: planes_pagoCreateManyClientesInput | planes_pagoCreateManyClientesInput[]
    skipDuplicates?: boolean
  }

  export type planes_pagoUpsertWithWhereUniqueWithoutClientesInput = {
    where: planes_pagoWhereUniqueInput
    update: XOR<planes_pagoUpdateWithoutClientesInput, planes_pagoUncheckedUpdateWithoutClientesInput>
    create: XOR<planes_pagoCreateWithoutClientesInput, planes_pagoUncheckedCreateWithoutClientesInput>
  }

  export type planes_pagoUpdateWithWhereUniqueWithoutClientesInput = {
    where: planes_pagoWhereUniqueInput
    data: XOR<planes_pagoUpdateWithoutClientesInput, planes_pagoUncheckedUpdateWithoutClientesInput>
  }

  export type planes_pagoUpdateManyWithWhereWithoutClientesInput = {
    where: planes_pagoScalarWhereInput
    data: XOR<planes_pagoUpdateManyMutationInput, planes_pagoUncheckedUpdateManyWithoutClientesInput>
  }

  export type planes_pagoScalarWhereInput = {
    AND?: planes_pagoScalarWhereInput | planes_pagoScalarWhereInput[]
    OR?: planes_pagoScalarWhereInput[]
    NOT?: planes_pagoScalarWhereInput | planes_pagoScalarWhereInput[]
    id?: IntFilter<"planes_pago"> | number
    cliente_id?: IntFilter<"planes_pago"> | number
    servicio_id?: IntFilter<"planes_pago"> | number
    numero_cuotas?: IntFilter<"planes_pago"> | number
    fecha_inicio?: DateTimeFilter<"planes_pago"> | Date | string
  }

  export type planes_pagoCreateWithoutCuotasInput = {
    numero_cuotas: number
    fecha_inicio: Date | string
    clientes: clientesCreateNestedOneWithoutPlanes_pagoInput
    servicios: serviciosCreateNestedOneWithoutPlanes_pagoInput
  }

  export type planes_pagoUncheckedCreateWithoutCuotasInput = {
    id?: number
    cliente_id: number
    servicio_id: number
    numero_cuotas: number
    fecha_inicio: Date | string
  }

  export type planes_pagoCreateOrConnectWithoutCuotasInput = {
    where: planes_pagoWhereUniqueInput
    create: XOR<planes_pagoCreateWithoutCuotasInput, planes_pagoUncheckedCreateWithoutCuotasInput>
  }

  export type planes_pagoUpsertWithoutCuotasInput = {
    update: XOR<planes_pagoUpdateWithoutCuotasInput, planes_pagoUncheckedUpdateWithoutCuotasInput>
    create: XOR<planes_pagoCreateWithoutCuotasInput, planes_pagoUncheckedCreateWithoutCuotasInput>
    where?: planes_pagoWhereInput
  }

  export type planes_pagoUpdateToOneWithWhereWithoutCuotasInput = {
    where?: planes_pagoWhereInput
    data: XOR<planes_pagoUpdateWithoutCuotasInput, planes_pagoUncheckedUpdateWithoutCuotasInput>
  }

  export type planes_pagoUpdateWithoutCuotasInput = {
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: clientesUpdateOneRequiredWithoutPlanes_pagoNestedInput
    servicios?: serviciosUpdateOneRequiredWithoutPlanes_pagoNestedInput
  }

  export type planes_pagoUncheckedUpdateWithoutCuotasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    servicio_id?: IntFieldUpdateOperationsInput | number
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cuotasCreateWithoutPlanes_pagoInput = {
    numero_cuota: number
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento: Date | string
    estado?: $Enums.cuotas_estado | null
    fecha_pago?: Date | string | null
  }

  export type cuotasUncheckedCreateWithoutPlanes_pagoInput = {
    id?: number
    numero_cuota: number
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento: Date | string
    estado?: $Enums.cuotas_estado | null
    fecha_pago?: Date | string | null
  }

  export type cuotasCreateOrConnectWithoutPlanes_pagoInput = {
    where: cuotasWhereUniqueInput
    create: XOR<cuotasCreateWithoutPlanes_pagoInput, cuotasUncheckedCreateWithoutPlanes_pagoInput>
  }

  export type cuotasCreateManyPlanes_pagoInputEnvelope = {
    data: cuotasCreateManyPlanes_pagoInput | cuotasCreateManyPlanes_pagoInput[]
    skipDuplicates?: boolean
  }

  export type clientesCreateWithoutPlanes_pagoInput = {
    nombre: string
    apellido: string
    email: string
  }

  export type clientesUncheckedCreateWithoutPlanes_pagoInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
  }

  export type clientesCreateOrConnectWithoutPlanes_pagoInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutPlanes_pagoInput, clientesUncheckedCreateWithoutPlanes_pagoInput>
  }

  export type serviciosCreateWithoutPlanes_pagoInput = {
    nombre: string
    descripcion?: string | null
    precio_total: Decimal | DecimalJsLike | number | string
  }

  export type serviciosUncheckedCreateWithoutPlanes_pagoInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio_total: Decimal | DecimalJsLike | number | string
  }

  export type serviciosCreateOrConnectWithoutPlanes_pagoInput = {
    where: serviciosWhereUniqueInput
    create: XOR<serviciosCreateWithoutPlanes_pagoInput, serviciosUncheckedCreateWithoutPlanes_pagoInput>
  }

  export type cuotasUpsertWithWhereUniqueWithoutPlanes_pagoInput = {
    where: cuotasWhereUniqueInput
    update: XOR<cuotasUpdateWithoutPlanes_pagoInput, cuotasUncheckedUpdateWithoutPlanes_pagoInput>
    create: XOR<cuotasCreateWithoutPlanes_pagoInput, cuotasUncheckedCreateWithoutPlanes_pagoInput>
  }

  export type cuotasUpdateWithWhereUniqueWithoutPlanes_pagoInput = {
    where: cuotasWhereUniqueInput
    data: XOR<cuotasUpdateWithoutPlanes_pagoInput, cuotasUncheckedUpdateWithoutPlanes_pagoInput>
  }

  export type cuotasUpdateManyWithWhereWithoutPlanes_pagoInput = {
    where: cuotasScalarWhereInput
    data: XOR<cuotasUpdateManyMutationInput, cuotasUncheckedUpdateManyWithoutPlanes_pagoInput>
  }

  export type cuotasScalarWhereInput = {
    AND?: cuotasScalarWhereInput | cuotasScalarWhereInput[]
    OR?: cuotasScalarWhereInput[]
    NOT?: cuotasScalarWhereInput | cuotasScalarWhereInput[]
    id?: IntFilter<"cuotas"> | number
    plan_pago_id?: IntFilter<"cuotas"> | number
    numero_cuota?: IntFilter<"cuotas"> | number
    monto?: DecimalFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeFilter<"cuotas"> | Date | string
    estado?: Enumcuotas_estadoNullableFilter<"cuotas"> | $Enums.cuotas_estado | null
    fecha_pago?: DateTimeNullableFilter<"cuotas"> | Date | string | null
  }

  export type clientesUpsertWithoutPlanes_pagoInput = {
    update: XOR<clientesUpdateWithoutPlanes_pagoInput, clientesUncheckedUpdateWithoutPlanes_pagoInput>
    create: XOR<clientesCreateWithoutPlanes_pagoInput, clientesUncheckedCreateWithoutPlanes_pagoInput>
    where?: clientesWhereInput
  }

  export type clientesUpdateToOneWithWhereWithoutPlanes_pagoInput = {
    where?: clientesWhereInput
    data: XOR<clientesUpdateWithoutPlanes_pagoInput, clientesUncheckedUpdateWithoutPlanes_pagoInput>
  }

  export type clientesUpdateWithoutPlanes_pagoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type clientesUncheckedUpdateWithoutPlanes_pagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type serviciosUpsertWithoutPlanes_pagoInput = {
    update: XOR<serviciosUpdateWithoutPlanes_pagoInput, serviciosUncheckedUpdateWithoutPlanes_pagoInput>
    create: XOR<serviciosCreateWithoutPlanes_pagoInput, serviciosUncheckedCreateWithoutPlanes_pagoInput>
    where?: serviciosWhereInput
  }

  export type serviciosUpdateToOneWithWhereWithoutPlanes_pagoInput = {
    where?: serviciosWhereInput
    data: XOR<serviciosUpdateWithoutPlanes_pagoInput, serviciosUncheckedUpdateWithoutPlanes_pagoInput>
  }

  export type serviciosUpdateWithoutPlanes_pagoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type serviciosUncheckedUpdateWithoutPlanes_pagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type planes_pagoCreateWithoutServiciosInput = {
    numero_cuotas: number
    fecha_inicio: Date | string
    cuotas?: cuotasCreateNestedManyWithoutPlanes_pagoInput
    clientes: clientesCreateNestedOneWithoutPlanes_pagoInput
  }

  export type planes_pagoUncheckedCreateWithoutServiciosInput = {
    id?: number
    cliente_id: number
    numero_cuotas: number
    fecha_inicio: Date | string
    cuotas?: cuotasUncheckedCreateNestedManyWithoutPlanes_pagoInput
  }

  export type planes_pagoCreateOrConnectWithoutServiciosInput = {
    where: planes_pagoWhereUniqueInput
    create: XOR<planes_pagoCreateWithoutServiciosInput, planes_pagoUncheckedCreateWithoutServiciosInput>
  }

  export type planes_pagoCreateManyServiciosInputEnvelope = {
    data: planes_pagoCreateManyServiciosInput | planes_pagoCreateManyServiciosInput[]
    skipDuplicates?: boolean
  }

  export type planes_pagoUpsertWithWhereUniqueWithoutServiciosInput = {
    where: planes_pagoWhereUniqueInput
    update: XOR<planes_pagoUpdateWithoutServiciosInput, planes_pagoUncheckedUpdateWithoutServiciosInput>
    create: XOR<planes_pagoCreateWithoutServiciosInput, planes_pagoUncheckedCreateWithoutServiciosInput>
  }

  export type planes_pagoUpdateWithWhereUniqueWithoutServiciosInput = {
    where: planes_pagoWhereUniqueInput
    data: XOR<planes_pagoUpdateWithoutServiciosInput, planes_pagoUncheckedUpdateWithoutServiciosInput>
  }

  export type planes_pagoUpdateManyWithWhereWithoutServiciosInput = {
    where: planes_pagoScalarWhereInput
    data: XOR<planes_pagoUpdateManyMutationInput, planes_pagoUncheckedUpdateManyWithoutServiciosInput>
  }

  export type planes_pagoCreateManyClientesInput = {
    id?: number
    servicio_id: number
    numero_cuotas: number
    fecha_inicio: Date | string
  }

  export type planes_pagoUpdateWithoutClientesInput = {
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cuotas?: cuotasUpdateManyWithoutPlanes_pagoNestedInput
    servicios?: serviciosUpdateOneRequiredWithoutPlanes_pagoNestedInput
  }

  export type planes_pagoUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicio_id?: IntFieldUpdateOperationsInput | number
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cuotas?: cuotasUncheckedUpdateManyWithoutPlanes_pagoNestedInput
  }

  export type planes_pagoUncheckedUpdateManyWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicio_id?: IntFieldUpdateOperationsInput | number
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cuotasCreateManyPlanes_pagoInput = {
    id?: number
    numero_cuota: number
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento: Date | string
    estado?: $Enums.cuotas_estado | null
    fecha_pago?: Date | string | null
  }

  export type cuotasUpdateWithoutPlanes_pagoInput = {
    numero_cuota?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumcuotas_estadoFieldUpdateOperationsInput | $Enums.cuotas_estado | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuotasUncheckedUpdateWithoutPlanes_pagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero_cuota?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumcuotas_estadoFieldUpdateOperationsInput | $Enums.cuotas_estado | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuotasUncheckedUpdateManyWithoutPlanes_pagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero_cuota?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumcuotas_estadoFieldUpdateOperationsInput | $Enums.cuotas_estado | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type planes_pagoCreateManyServiciosInput = {
    id?: number
    cliente_id: number
    numero_cuotas: number
    fecha_inicio: Date | string
  }

  export type planes_pagoUpdateWithoutServiciosInput = {
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cuotas?: cuotasUpdateManyWithoutPlanes_pagoNestedInput
    clientes?: clientesUpdateOneRequiredWithoutPlanes_pagoNestedInput
  }

  export type planes_pagoUncheckedUpdateWithoutServiciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    cuotas?: cuotasUncheckedUpdateManyWithoutPlanes_pagoNestedInput
  }

  export type planes_pagoUncheckedUpdateManyWithoutServiciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: IntFieldUpdateOperationsInput | number
    numero_cuotas?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
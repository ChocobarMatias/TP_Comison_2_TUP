
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
 * Model artistas
 * 
 */
export type artistas = $Result.DefaultSelection<Prisma.$artistasPayload>
/**
 * Model artistas_eventos
 * 
 */
export type artistas_eventos = $Result.DefaultSelection<Prisma.$artistas_eventosPayload>
/**
 * Model eventos
 * 
 */
export type eventos = $Result.DefaultSelection<Prisma.$eventosPayload>
/**
 * Model lugares
 * 
 */
export type lugares = $Result.DefaultSelection<Prisma.$lugaresPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model ventas_boletos
 * 
 */
export type ventas_boletos = $Result.DefaultSelection<Prisma.$ventas_boletosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const usuarios_rol_usuario: {
  empleado: 'empleado',
  asistente: 'asistente',
  admin: 'admin'
};

export type usuarios_rol_usuario = (typeof usuarios_rol_usuario)[keyof typeof usuarios_rol_usuario]

}

export type usuarios_rol_usuario = $Enums.usuarios_rol_usuario

export const usuarios_rol_usuario: typeof $Enums.usuarios_rol_usuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Artistas
 * const artistas = await prisma.artistas.findMany()
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
   * // Fetch zero or more Artistas
   * const artistas = await prisma.artistas.findMany()
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
   * `prisma.artistas`: Exposes CRUD operations for the **artistas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artistas
    * const artistas = await prisma.artistas.findMany()
    * ```
    */
  get artistas(): Prisma.artistasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artistas_eventos`: Exposes CRUD operations for the **artistas_eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artistas_eventos
    * const artistas_eventos = await prisma.artistas_eventos.findMany()
    * ```
    */
  get artistas_eventos(): Prisma.artistas_eventosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventos`: Exposes CRUD operations for the **eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.eventos.findMany()
    * ```
    */
  get eventos(): Prisma.eventosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lugares`: Exposes CRUD operations for the **lugares** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lugares
    * const lugares = await prisma.lugares.findMany()
    * ```
    */
  get lugares(): Prisma.lugaresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ventas_boletos`: Exposes CRUD operations for the **ventas_boletos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas_boletos
    * const ventas_boletos = await prisma.ventas_boletos.findMany()
    * ```
    */
  get ventas_boletos(): Prisma.ventas_boletosDelegate<ExtArgs, ClientOptions>;
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
    artistas: 'artistas',
    artistas_eventos: 'artistas_eventos',
    eventos: 'eventos',
    lugares: 'lugares',
    usuarios: 'usuarios',
    ventas_boletos: 'ventas_boletos'
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
      modelProps: "artistas" | "artistas_eventos" | "eventos" | "lugares" | "usuarios" | "ventas_boletos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      artistas: {
        payload: Prisma.$artistasPayload<ExtArgs>
        fields: Prisma.artistasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.artistasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.artistasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistasPayload>
          }
          findFirst: {
            args: Prisma.artistasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.artistasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistasPayload>
          }
          findMany: {
            args: Prisma.artistasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistasPayload>[]
          }
          create: {
            args: Prisma.artistasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistasPayload>
          }
          createMany: {
            args: Prisma.artistasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.artistasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistasPayload>
          }
          update: {
            args: Prisma.artistasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistasPayload>
          }
          deleteMany: {
            args: Prisma.artistasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.artistasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.artistasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistasPayload>
          }
          aggregate: {
            args: Prisma.ArtistasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistas>
          }
          groupBy: {
            args: Prisma.artistasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistasGroupByOutputType>[]
          }
          count: {
            args: Prisma.artistasCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistasCountAggregateOutputType> | number
          }
        }
      }
      artistas_eventos: {
        payload: Prisma.$artistas_eventosPayload<ExtArgs>
        fields: Prisma.artistas_eventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.artistas_eventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistas_eventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.artistas_eventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistas_eventosPayload>
          }
          findFirst: {
            args: Prisma.artistas_eventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistas_eventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.artistas_eventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistas_eventosPayload>
          }
          findMany: {
            args: Prisma.artistas_eventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistas_eventosPayload>[]
          }
          create: {
            args: Prisma.artistas_eventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistas_eventosPayload>
          }
          createMany: {
            args: Prisma.artistas_eventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.artistas_eventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistas_eventosPayload>
          }
          update: {
            args: Prisma.artistas_eventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistas_eventosPayload>
          }
          deleteMany: {
            args: Prisma.artistas_eventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.artistas_eventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.artistas_eventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artistas_eventosPayload>
          }
          aggregate: {
            args: Prisma.Artistas_eventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistas_eventos>
          }
          groupBy: {
            args: Prisma.artistas_eventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Artistas_eventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.artistas_eventosCountArgs<ExtArgs>
            result: $Utils.Optional<Artistas_eventosCountAggregateOutputType> | number
          }
        }
      }
      eventos: {
        payload: Prisma.$eventosPayload<ExtArgs>
        fields: Prisma.eventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findFirst: {
            args: Prisma.eventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findMany: {
            args: Prisma.eventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          create: {
            args: Prisma.eventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          createMany: {
            args: Prisma.eventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.eventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          update: {
            args: Prisma.eventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          deleteMany: {
            args: Prisma.eventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.eventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          aggregate: {
            args: Prisma.EventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos>
          }
          groupBy: {
            args: Prisma.eventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventosCountArgs<ExtArgs>
            result: $Utils.Optional<EventosCountAggregateOutputType> | number
          }
        }
      }
      lugares: {
        payload: Prisma.$lugaresPayload<ExtArgs>
        fields: Prisma.lugaresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lugaresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugaresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lugaresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugaresPayload>
          }
          findFirst: {
            args: Prisma.lugaresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugaresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lugaresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugaresPayload>
          }
          findMany: {
            args: Prisma.lugaresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugaresPayload>[]
          }
          create: {
            args: Prisma.lugaresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugaresPayload>
          }
          createMany: {
            args: Prisma.lugaresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.lugaresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugaresPayload>
          }
          update: {
            args: Prisma.lugaresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugaresPayload>
          }
          deleteMany: {
            args: Prisma.lugaresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lugaresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lugaresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lugaresPayload>
          }
          aggregate: {
            args: Prisma.LugaresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLugares>
          }
          groupBy: {
            args: Prisma.lugaresGroupByArgs<ExtArgs>
            result: $Utils.Optional<LugaresGroupByOutputType>[]
          }
          count: {
            args: Prisma.lugaresCountArgs<ExtArgs>
            result: $Utils.Optional<LugaresCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      ventas_boletos: {
        payload: Prisma.$ventas_boletosPayload<ExtArgs>
        fields: Prisma.ventas_boletosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ventas_boletosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventas_boletosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ventas_boletosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventas_boletosPayload>
          }
          findFirst: {
            args: Prisma.ventas_boletosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventas_boletosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ventas_boletosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventas_boletosPayload>
          }
          findMany: {
            args: Prisma.ventas_boletosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventas_boletosPayload>[]
          }
          create: {
            args: Prisma.ventas_boletosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventas_boletosPayload>
          }
          createMany: {
            args: Prisma.ventas_boletosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ventas_boletosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventas_boletosPayload>
          }
          update: {
            args: Prisma.ventas_boletosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventas_boletosPayload>
          }
          deleteMany: {
            args: Prisma.ventas_boletosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ventas_boletosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ventas_boletosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventas_boletosPayload>
          }
          aggregate: {
            args: Prisma.Ventas_boletosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVentas_boletos>
          }
          groupBy: {
            args: Prisma.ventas_boletosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ventas_boletosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ventas_boletosCountArgs<ExtArgs>
            result: $Utils.Optional<Ventas_boletosCountAggregateOutputType> | number
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
    artistas?: artistasOmit
    artistas_eventos?: artistas_eventosOmit
    eventos?: eventosOmit
    lugares?: lugaresOmit
    usuarios?: usuariosOmit
    ventas_boletos?: ventas_boletosOmit
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
   * Count Type ArtistasCountOutputType
   */

  export type ArtistasCountOutputType = {
    artistas_eventos: number
  }

  export type ArtistasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistas_eventos?: boolean | ArtistasCountOutputTypeCountArtistas_eventosArgs
  }

  // Custom InputTypes
  /**
   * ArtistasCountOutputType without action
   */
  export type ArtistasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistasCountOutputType
     */
    select?: ArtistasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistasCountOutputType without action
   */
  export type ArtistasCountOutputTypeCountArtistas_eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: artistas_eventosWhereInput
  }


  /**
   * Count Type EventosCountOutputType
   */

  export type EventosCountOutputType = {
    artistas_eventos: number
    ventas_boletos: number
  }

  export type EventosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistas_eventos?: boolean | EventosCountOutputTypeCountArtistas_eventosArgs
    ventas_boletos?: boolean | EventosCountOutputTypeCountVentas_boletosArgs
  }

  // Custom InputTypes
  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventosCountOutputType
     */
    select?: EventosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountArtistas_eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: artistas_eventosWhereInput
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountVentas_boletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventas_boletosWhereInput
  }


  /**
   * Count Type LugaresCountOutputType
   */

  export type LugaresCountOutputType = {
    eventos: number
  }

  export type LugaresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | LugaresCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * LugaresCountOutputType without action
   */
  export type LugaresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LugaresCountOutputType
     */
    select?: LugaresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LugaresCountOutputType without action
   */
  export type LugaresCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventosWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    ventas_boletos: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas_boletos?: boolean | UsuariosCountOutputTypeCountVentas_boletosArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountVentas_boletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventas_boletosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model artistas
   */

  export type AggregateArtistas = {
    _count: ArtistasCountAggregateOutputType | null
    _avg: ArtistasAvgAggregateOutputType | null
    _sum: ArtistasSumAggregateOutputType | null
    _min: ArtistasMinAggregateOutputType | null
    _max: ArtistasMaxAggregateOutputType | null
  }

  export type ArtistasAvgAggregateOutputType = {
    id_artista: number | null
    estado_artista: number | null
  }

  export type ArtistasSumAggregateOutputType = {
    id_artista: number | null
    estado_artista: number | null
  }

  export type ArtistasMinAggregateOutputType = {
    id_artista: number | null
    nombre_artista: string | null
    tipo_arte_artista: string | null
    biografia_artista: string | null
    email_artista: string | null
    contra_artista: string | null
    telefono_artista: string | null
    estado_artista: number | null
    fecha_creacion_artista: Date | null
  }

  export type ArtistasMaxAggregateOutputType = {
    id_artista: number | null
    nombre_artista: string | null
    tipo_arte_artista: string | null
    biografia_artista: string | null
    email_artista: string | null
    contra_artista: string | null
    telefono_artista: string | null
    estado_artista: number | null
    fecha_creacion_artista: Date | null
  }

  export type ArtistasCountAggregateOutputType = {
    id_artista: number
    nombre_artista: number
    tipo_arte_artista: number
    biografia_artista: number
    email_artista: number
    contra_artista: number
    telefono_artista: number
    estado_artista: number
    fecha_creacion_artista: number
    _all: number
  }


  export type ArtistasAvgAggregateInputType = {
    id_artista?: true
    estado_artista?: true
  }

  export type ArtistasSumAggregateInputType = {
    id_artista?: true
    estado_artista?: true
  }

  export type ArtistasMinAggregateInputType = {
    id_artista?: true
    nombre_artista?: true
    tipo_arte_artista?: true
    biografia_artista?: true
    email_artista?: true
    contra_artista?: true
    telefono_artista?: true
    estado_artista?: true
    fecha_creacion_artista?: true
  }

  export type ArtistasMaxAggregateInputType = {
    id_artista?: true
    nombre_artista?: true
    tipo_arte_artista?: true
    biografia_artista?: true
    email_artista?: true
    contra_artista?: true
    telefono_artista?: true
    estado_artista?: true
    fecha_creacion_artista?: true
  }

  export type ArtistasCountAggregateInputType = {
    id_artista?: true
    nombre_artista?: true
    tipo_arte_artista?: true
    biografia_artista?: true
    email_artista?: true
    contra_artista?: true
    telefono_artista?: true
    estado_artista?: true
    fecha_creacion_artista?: true
    _all?: true
  }

  export type ArtistasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artistas to aggregate.
     */
    where?: artistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artistas to fetch.
     */
    orderBy?: artistasOrderByWithRelationInput | artistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: artistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned artistas
    **/
    _count?: true | ArtistasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistasMaxAggregateInputType
  }

  export type GetArtistasAggregateType<T extends ArtistasAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistas[P]>
      : GetScalarType<T[P], AggregateArtistas[P]>
  }




  export type artistasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: artistasWhereInput
    orderBy?: artistasOrderByWithAggregationInput | artistasOrderByWithAggregationInput[]
    by: ArtistasScalarFieldEnum[] | ArtistasScalarFieldEnum
    having?: artistasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistasCountAggregateInputType | true
    _avg?: ArtistasAvgAggregateInputType
    _sum?: ArtistasSumAggregateInputType
    _min?: ArtistasMinAggregateInputType
    _max?: ArtistasMaxAggregateInputType
  }

  export type ArtistasGroupByOutputType = {
    id_artista: number
    nombre_artista: string
    tipo_arte_artista: string | null
    biografia_artista: string | null
    email_artista: string | null
    contra_artista: string | null
    telefono_artista: string | null
    estado_artista: number | null
    fecha_creacion_artista: Date | null
    _count: ArtistasCountAggregateOutputType | null
    _avg: ArtistasAvgAggregateOutputType | null
    _sum: ArtistasSumAggregateOutputType | null
    _min: ArtistasMinAggregateOutputType | null
    _max: ArtistasMaxAggregateOutputType | null
  }

  type GetArtistasGroupByPayload<T extends artistasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistasGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistasGroupByOutputType[P]>
        }
      >
    >


  export type artistasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_artista?: boolean
    nombre_artista?: boolean
    tipo_arte_artista?: boolean
    biografia_artista?: boolean
    email_artista?: boolean
    contra_artista?: boolean
    telefono_artista?: boolean
    estado_artista?: boolean
    fecha_creacion_artista?: boolean
    artistas_eventos?: boolean | artistas$artistas_eventosArgs<ExtArgs>
    _count?: boolean | ArtistasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistas"]>



  export type artistasSelectScalar = {
    id_artista?: boolean
    nombre_artista?: boolean
    tipo_arte_artista?: boolean
    biografia_artista?: boolean
    email_artista?: boolean
    contra_artista?: boolean
    telefono_artista?: boolean
    estado_artista?: boolean
    fecha_creacion_artista?: boolean
  }

  export type artistasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_artista" | "nombre_artista" | "tipo_arte_artista" | "biografia_artista" | "email_artista" | "contra_artista" | "telefono_artista" | "estado_artista" | "fecha_creacion_artista", ExtArgs["result"]["artistas"]>
  export type artistasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistas_eventos?: boolean | artistas$artistas_eventosArgs<ExtArgs>
    _count?: boolean | ArtistasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $artistasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "artistas"
    objects: {
      artistas_eventos: Prisma.$artistas_eventosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_artista: number
      nombre_artista: string
      tipo_arte_artista: string | null
      biografia_artista: string | null
      email_artista: string | null
      contra_artista: string | null
      telefono_artista: string | null
      estado_artista: number | null
      fecha_creacion_artista: Date | null
    }, ExtArgs["result"]["artistas"]>
    composites: {}
  }

  type artistasGetPayload<S extends boolean | null | undefined | artistasDefaultArgs> = $Result.GetResult<Prisma.$artistasPayload, S>

  type artistasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<artistasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistasCountAggregateInputType | true
    }

  export interface artistasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['artistas'], meta: { name: 'artistas' } }
    /**
     * Find zero or one Artistas that matches the filter.
     * @param {artistasFindUniqueArgs} args - Arguments to find a Artistas
     * @example
     * // Get one Artistas
     * const artistas = await prisma.artistas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends artistasFindUniqueArgs>(args: SelectSubset<T, artistasFindUniqueArgs<ExtArgs>>): Prisma__artistasClient<$Result.GetResult<Prisma.$artistasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artistas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {artistasFindUniqueOrThrowArgs} args - Arguments to find a Artistas
     * @example
     * // Get one Artistas
     * const artistas = await prisma.artistas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends artistasFindUniqueOrThrowArgs>(args: SelectSubset<T, artistasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__artistasClient<$Result.GetResult<Prisma.$artistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistasFindFirstArgs} args - Arguments to find a Artistas
     * @example
     * // Get one Artistas
     * const artistas = await prisma.artistas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends artistasFindFirstArgs>(args?: SelectSubset<T, artistasFindFirstArgs<ExtArgs>>): Prisma__artistasClient<$Result.GetResult<Prisma.$artistasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artistas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistasFindFirstOrThrowArgs} args - Arguments to find a Artistas
     * @example
     * // Get one Artistas
     * const artistas = await prisma.artistas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends artistasFindFirstOrThrowArgs>(args?: SelectSubset<T, artistasFindFirstOrThrowArgs<ExtArgs>>): Prisma__artistasClient<$Result.GetResult<Prisma.$artistasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artistas
     * const artistas = await prisma.artistas.findMany()
     * 
     * // Get first 10 Artistas
     * const artistas = await prisma.artistas.findMany({ take: 10 })
     * 
     * // Only select the `id_artista`
     * const artistasWithId_artistaOnly = await prisma.artistas.findMany({ select: { id_artista: true } })
     * 
     */
    findMany<T extends artistasFindManyArgs>(args?: SelectSubset<T, artistasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artistasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artistas.
     * @param {artistasCreateArgs} args - Arguments to create a Artistas.
     * @example
     * // Create one Artistas
     * const Artistas = await prisma.artistas.create({
     *   data: {
     *     // ... data to create a Artistas
     *   }
     * })
     * 
     */
    create<T extends artistasCreateArgs>(args: SelectSubset<T, artistasCreateArgs<ExtArgs>>): Prisma__artistasClient<$Result.GetResult<Prisma.$artistasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artistas.
     * @param {artistasCreateManyArgs} args - Arguments to create many Artistas.
     * @example
     * // Create many Artistas
     * const artistas = await prisma.artistas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends artistasCreateManyArgs>(args?: SelectSubset<T, artistasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artistas.
     * @param {artistasDeleteArgs} args - Arguments to delete one Artistas.
     * @example
     * // Delete one Artistas
     * const Artistas = await prisma.artistas.delete({
     *   where: {
     *     // ... filter to delete one Artistas
     *   }
     * })
     * 
     */
    delete<T extends artistasDeleteArgs>(args: SelectSubset<T, artistasDeleteArgs<ExtArgs>>): Prisma__artistasClient<$Result.GetResult<Prisma.$artistasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artistas.
     * @param {artistasUpdateArgs} args - Arguments to update one Artistas.
     * @example
     * // Update one Artistas
     * const artistas = await prisma.artistas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends artistasUpdateArgs>(args: SelectSubset<T, artistasUpdateArgs<ExtArgs>>): Prisma__artistasClient<$Result.GetResult<Prisma.$artistasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artistas.
     * @param {artistasDeleteManyArgs} args - Arguments to filter Artistas to delete.
     * @example
     * // Delete a few Artistas
     * const { count } = await prisma.artistas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends artistasDeleteManyArgs>(args?: SelectSubset<T, artistasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artistas
     * const artistas = await prisma.artistas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends artistasUpdateManyArgs>(args: SelectSubset<T, artistasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artistas.
     * @param {artistasUpsertArgs} args - Arguments to update or create a Artistas.
     * @example
     * // Update or create a Artistas
     * const artistas = await prisma.artistas.upsert({
     *   create: {
     *     // ... data to create a Artistas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artistas we want to update
     *   }
     * })
     */
    upsert<T extends artistasUpsertArgs>(args: SelectSubset<T, artistasUpsertArgs<ExtArgs>>): Prisma__artistasClient<$Result.GetResult<Prisma.$artistasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistasCountArgs} args - Arguments to filter Artistas to count.
     * @example
     * // Count the number of Artistas
     * const count = await prisma.artistas.count({
     *   where: {
     *     // ... the filter for the Artistas we want to count
     *   }
     * })
    **/
    count<T extends artistasCountArgs>(
      args?: Subset<T, artistasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistasAggregateArgs>(args: Subset<T, ArtistasAggregateArgs>): Prisma.PrismaPromise<GetArtistasAggregateType<T>>

    /**
     * Group by Artistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistasGroupByArgs} args - Group by arguments.
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
      T extends artistasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: artistasGroupByArgs['orderBy'] }
        : { orderBy?: artistasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, artistasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the artistas model
   */
  readonly fields: artistasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for artistas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__artistasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artistas_eventos<T extends artistas$artistas_eventosArgs<ExtArgs> = {}>(args?: Subset<T, artistas$artistas_eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artistas_eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the artistas model
   */
  interface artistasFieldRefs {
    readonly id_artista: FieldRef<"artistas", 'Int'>
    readonly nombre_artista: FieldRef<"artistas", 'String'>
    readonly tipo_arte_artista: FieldRef<"artistas", 'String'>
    readonly biografia_artista: FieldRef<"artistas", 'String'>
    readonly email_artista: FieldRef<"artistas", 'String'>
    readonly contra_artista: FieldRef<"artistas", 'String'>
    readonly telefono_artista: FieldRef<"artistas", 'String'>
    readonly estado_artista: FieldRef<"artistas", 'Int'>
    readonly fecha_creacion_artista: FieldRef<"artistas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * artistas findUnique
   */
  export type artistasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas
     */
    select?: artistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas
     */
    omit?: artistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistasInclude<ExtArgs> | null
    /**
     * Filter, which artistas to fetch.
     */
    where: artistasWhereUniqueInput
  }

  /**
   * artistas findUniqueOrThrow
   */
  export type artistasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas
     */
    select?: artistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas
     */
    omit?: artistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistasInclude<ExtArgs> | null
    /**
     * Filter, which artistas to fetch.
     */
    where: artistasWhereUniqueInput
  }

  /**
   * artistas findFirst
   */
  export type artistasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas
     */
    select?: artistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas
     */
    omit?: artistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistasInclude<ExtArgs> | null
    /**
     * Filter, which artistas to fetch.
     */
    where?: artistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artistas to fetch.
     */
    orderBy?: artistasOrderByWithRelationInput | artistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artistas.
     */
    cursor?: artistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artistas.
     */
    distinct?: ArtistasScalarFieldEnum | ArtistasScalarFieldEnum[]
  }

  /**
   * artistas findFirstOrThrow
   */
  export type artistasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas
     */
    select?: artistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas
     */
    omit?: artistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistasInclude<ExtArgs> | null
    /**
     * Filter, which artistas to fetch.
     */
    where?: artistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artistas to fetch.
     */
    orderBy?: artistasOrderByWithRelationInput | artistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artistas.
     */
    cursor?: artistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artistas.
     */
    distinct?: ArtistasScalarFieldEnum | ArtistasScalarFieldEnum[]
  }

  /**
   * artistas findMany
   */
  export type artistasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas
     */
    select?: artistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas
     */
    omit?: artistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistasInclude<ExtArgs> | null
    /**
     * Filter, which artistas to fetch.
     */
    where?: artistasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artistas to fetch.
     */
    orderBy?: artistasOrderByWithRelationInput | artistasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing artistas.
     */
    cursor?: artistasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artistas.
     */
    skip?: number
    distinct?: ArtistasScalarFieldEnum | ArtistasScalarFieldEnum[]
  }

  /**
   * artistas create
   */
  export type artistasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas
     */
    select?: artistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas
     */
    omit?: artistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistasInclude<ExtArgs> | null
    /**
     * The data needed to create a artistas.
     */
    data: XOR<artistasCreateInput, artistasUncheckedCreateInput>
  }

  /**
   * artistas createMany
   */
  export type artistasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many artistas.
     */
    data: artistasCreateManyInput | artistasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * artistas update
   */
  export type artistasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas
     */
    select?: artistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas
     */
    omit?: artistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistasInclude<ExtArgs> | null
    /**
     * The data needed to update a artistas.
     */
    data: XOR<artistasUpdateInput, artistasUncheckedUpdateInput>
    /**
     * Choose, which artistas to update.
     */
    where: artistasWhereUniqueInput
  }

  /**
   * artistas updateMany
   */
  export type artistasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update artistas.
     */
    data: XOR<artistasUpdateManyMutationInput, artistasUncheckedUpdateManyInput>
    /**
     * Filter which artistas to update
     */
    where?: artistasWhereInput
    /**
     * Limit how many artistas to update.
     */
    limit?: number
  }

  /**
   * artistas upsert
   */
  export type artistasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas
     */
    select?: artistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas
     */
    omit?: artistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistasInclude<ExtArgs> | null
    /**
     * The filter to search for the artistas to update in case it exists.
     */
    where: artistasWhereUniqueInput
    /**
     * In case the artistas found by the `where` argument doesn't exist, create a new artistas with this data.
     */
    create: XOR<artistasCreateInput, artistasUncheckedCreateInput>
    /**
     * In case the artistas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<artistasUpdateInput, artistasUncheckedUpdateInput>
  }

  /**
   * artistas delete
   */
  export type artistasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas
     */
    select?: artistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas
     */
    omit?: artistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistasInclude<ExtArgs> | null
    /**
     * Filter which artistas to delete.
     */
    where: artistasWhereUniqueInput
  }

  /**
   * artistas deleteMany
   */
  export type artistasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artistas to delete
     */
    where?: artistasWhereInput
    /**
     * Limit how many artistas to delete.
     */
    limit?: number
  }

  /**
   * artistas.artistas_eventos
   */
  export type artistas$artistas_eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
    where?: artistas_eventosWhereInput
    orderBy?: artistas_eventosOrderByWithRelationInput | artistas_eventosOrderByWithRelationInput[]
    cursor?: artistas_eventosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Artistas_eventosScalarFieldEnum | Artistas_eventosScalarFieldEnum[]
  }

  /**
   * artistas without action
   */
  export type artistasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas
     */
    select?: artistasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas
     */
    omit?: artistasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistasInclude<ExtArgs> | null
  }


  /**
   * Model artistas_eventos
   */

  export type AggregateArtistas_eventos = {
    _count: Artistas_eventosCountAggregateOutputType | null
    _avg: Artistas_eventosAvgAggregateOutputType | null
    _sum: Artistas_eventosSumAggregateOutputType | null
    _min: Artistas_eventosMinAggregateOutputType | null
    _max: Artistas_eventosMaxAggregateOutputType | null
  }

  export type Artistas_eventosAvgAggregateOutputType = {
    id_artista_evento: number | null
    id_evento: number | null
    id_artista: number | null
    estado_artista_evento: number | null
  }

  export type Artistas_eventosSumAggregateOutputType = {
    id_artista_evento: number | null
    id_evento: number | null
    id_artista: number | null
    estado_artista_evento: number | null
  }

  export type Artistas_eventosMinAggregateOutputType = {
    id_artista_evento: number | null
    id_evento: number | null
    id_artista: number | null
    rol_artista_evento: string | null
    estado_artista_evento: number | null
    fecha_creacion_artista_evento: Date | null
  }

  export type Artistas_eventosMaxAggregateOutputType = {
    id_artista_evento: number | null
    id_evento: number | null
    id_artista: number | null
    rol_artista_evento: string | null
    estado_artista_evento: number | null
    fecha_creacion_artista_evento: Date | null
  }

  export type Artistas_eventosCountAggregateOutputType = {
    id_artista_evento: number
    id_evento: number
    id_artista: number
    rol_artista_evento: number
    estado_artista_evento: number
    fecha_creacion_artista_evento: number
    _all: number
  }


  export type Artistas_eventosAvgAggregateInputType = {
    id_artista_evento?: true
    id_evento?: true
    id_artista?: true
    estado_artista_evento?: true
  }

  export type Artistas_eventosSumAggregateInputType = {
    id_artista_evento?: true
    id_evento?: true
    id_artista?: true
    estado_artista_evento?: true
  }

  export type Artistas_eventosMinAggregateInputType = {
    id_artista_evento?: true
    id_evento?: true
    id_artista?: true
    rol_artista_evento?: true
    estado_artista_evento?: true
    fecha_creacion_artista_evento?: true
  }

  export type Artistas_eventosMaxAggregateInputType = {
    id_artista_evento?: true
    id_evento?: true
    id_artista?: true
    rol_artista_evento?: true
    estado_artista_evento?: true
    fecha_creacion_artista_evento?: true
  }

  export type Artistas_eventosCountAggregateInputType = {
    id_artista_evento?: true
    id_evento?: true
    id_artista?: true
    rol_artista_evento?: true
    estado_artista_evento?: true
    fecha_creacion_artista_evento?: true
    _all?: true
  }

  export type Artistas_eventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artistas_eventos to aggregate.
     */
    where?: artistas_eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artistas_eventos to fetch.
     */
    orderBy?: artistas_eventosOrderByWithRelationInput | artistas_eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: artistas_eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artistas_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artistas_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned artistas_eventos
    **/
    _count?: true | Artistas_eventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Artistas_eventosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Artistas_eventosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Artistas_eventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Artistas_eventosMaxAggregateInputType
  }

  export type GetArtistas_eventosAggregateType<T extends Artistas_eventosAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistas_eventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistas_eventos[P]>
      : GetScalarType<T[P], AggregateArtistas_eventos[P]>
  }




  export type artistas_eventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: artistas_eventosWhereInput
    orderBy?: artistas_eventosOrderByWithAggregationInput | artistas_eventosOrderByWithAggregationInput[]
    by: Artistas_eventosScalarFieldEnum[] | Artistas_eventosScalarFieldEnum
    having?: artistas_eventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Artistas_eventosCountAggregateInputType | true
    _avg?: Artistas_eventosAvgAggregateInputType
    _sum?: Artistas_eventosSumAggregateInputType
    _min?: Artistas_eventosMinAggregateInputType
    _max?: Artistas_eventosMaxAggregateInputType
  }

  export type Artistas_eventosGroupByOutputType = {
    id_artista_evento: number
    id_evento: number
    id_artista: number
    rol_artista_evento: string | null
    estado_artista_evento: number | null
    fecha_creacion_artista_evento: Date | null
    _count: Artistas_eventosCountAggregateOutputType | null
    _avg: Artistas_eventosAvgAggregateOutputType | null
    _sum: Artistas_eventosSumAggregateOutputType | null
    _min: Artistas_eventosMinAggregateOutputType | null
    _max: Artistas_eventosMaxAggregateOutputType | null
  }

  type GetArtistas_eventosGroupByPayload<T extends artistas_eventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Artistas_eventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Artistas_eventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Artistas_eventosGroupByOutputType[P]>
            : GetScalarType<T[P], Artistas_eventosGroupByOutputType[P]>
        }
      >
    >


  export type artistas_eventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_artista_evento?: boolean
    id_evento?: boolean
    id_artista?: boolean
    rol_artista_evento?: boolean
    estado_artista_evento?: boolean
    fecha_creacion_artista_evento?: boolean
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
    artistas?: boolean | artistasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistas_eventos"]>



  export type artistas_eventosSelectScalar = {
    id_artista_evento?: boolean
    id_evento?: boolean
    id_artista?: boolean
    rol_artista_evento?: boolean
    estado_artista_evento?: boolean
    fecha_creacion_artista_evento?: boolean
  }

  export type artistas_eventosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_artista_evento" | "id_evento" | "id_artista" | "rol_artista_evento" | "estado_artista_evento" | "fecha_creacion_artista_evento", ExtArgs["result"]["artistas_eventos"]>
  export type artistas_eventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
    artistas?: boolean | artistasDefaultArgs<ExtArgs>
  }

  export type $artistas_eventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "artistas_eventos"
    objects: {
      eventos: Prisma.$eventosPayload<ExtArgs>
      artistas: Prisma.$artistasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_artista_evento: number
      id_evento: number
      id_artista: number
      rol_artista_evento: string | null
      estado_artista_evento: number | null
      fecha_creacion_artista_evento: Date | null
    }, ExtArgs["result"]["artistas_eventos"]>
    composites: {}
  }

  type artistas_eventosGetPayload<S extends boolean | null | undefined | artistas_eventosDefaultArgs> = $Result.GetResult<Prisma.$artistas_eventosPayload, S>

  type artistas_eventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<artistas_eventosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Artistas_eventosCountAggregateInputType | true
    }

  export interface artistas_eventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['artistas_eventos'], meta: { name: 'artistas_eventos' } }
    /**
     * Find zero or one Artistas_eventos that matches the filter.
     * @param {artistas_eventosFindUniqueArgs} args - Arguments to find a Artistas_eventos
     * @example
     * // Get one Artistas_eventos
     * const artistas_eventos = await prisma.artistas_eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends artistas_eventosFindUniqueArgs>(args: SelectSubset<T, artistas_eventosFindUniqueArgs<ExtArgs>>): Prisma__artistas_eventosClient<$Result.GetResult<Prisma.$artistas_eventosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artistas_eventos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {artistas_eventosFindUniqueOrThrowArgs} args - Arguments to find a Artistas_eventos
     * @example
     * // Get one Artistas_eventos
     * const artistas_eventos = await prisma.artistas_eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends artistas_eventosFindUniqueOrThrowArgs>(args: SelectSubset<T, artistas_eventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__artistas_eventosClient<$Result.GetResult<Prisma.$artistas_eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artistas_eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistas_eventosFindFirstArgs} args - Arguments to find a Artistas_eventos
     * @example
     * // Get one Artistas_eventos
     * const artistas_eventos = await prisma.artistas_eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends artistas_eventosFindFirstArgs>(args?: SelectSubset<T, artistas_eventosFindFirstArgs<ExtArgs>>): Prisma__artistas_eventosClient<$Result.GetResult<Prisma.$artistas_eventosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artistas_eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistas_eventosFindFirstOrThrowArgs} args - Arguments to find a Artistas_eventos
     * @example
     * // Get one Artistas_eventos
     * const artistas_eventos = await prisma.artistas_eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends artistas_eventosFindFirstOrThrowArgs>(args?: SelectSubset<T, artistas_eventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__artistas_eventosClient<$Result.GetResult<Prisma.$artistas_eventosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artistas_eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistas_eventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artistas_eventos
     * const artistas_eventos = await prisma.artistas_eventos.findMany()
     * 
     * // Get first 10 Artistas_eventos
     * const artistas_eventos = await prisma.artistas_eventos.findMany({ take: 10 })
     * 
     * // Only select the `id_artista_evento`
     * const artistas_eventosWithId_artista_eventoOnly = await prisma.artistas_eventos.findMany({ select: { id_artista_evento: true } })
     * 
     */
    findMany<T extends artistas_eventosFindManyArgs>(args?: SelectSubset<T, artistas_eventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artistas_eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artistas_eventos.
     * @param {artistas_eventosCreateArgs} args - Arguments to create a Artistas_eventos.
     * @example
     * // Create one Artistas_eventos
     * const Artistas_eventos = await prisma.artistas_eventos.create({
     *   data: {
     *     // ... data to create a Artistas_eventos
     *   }
     * })
     * 
     */
    create<T extends artistas_eventosCreateArgs>(args: SelectSubset<T, artistas_eventosCreateArgs<ExtArgs>>): Prisma__artistas_eventosClient<$Result.GetResult<Prisma.$artistas_eventosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artistas_eventos.
     * @param {artistas_eventosCreateManyArgs} args - Arguments to create many Artistas_eventos.
     * @example
     * // Create many Artistas_eventos
     * const artistas_eventos = await prisma.artistas_eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends artistas_eventosCreateManyArgs>(args?: SelectSubset<T, artistas_eventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artistas_eventos.
     * @param {artistas_eventosDeleteArgs} args - Arguments to delete one Artistas_eventos.
     * @example
     * // Delete one Artistas_eventos
     * const Artistas_eventos = await prisma.artistas_eventos.delete({
     *   where: {
     *     // ... filter to delete one Artistas_eventos
     *   }
     * })
     * 
     */
    delete<T extends artistas_eventosDeleteArgs>(args: SelectSubset<T, artistas_eventosDeleteArgs<ExtArgs>>): Prisma__artistas_eventosClient<$Result.GetResult<Prisma.$artistas_eventosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artistas_eventos.
     * @param {artistas_eventosUpdateArgs} args - Arguments to update one Artistas_eventos.
     * @example
     * // Update one Artistas_eventos
     * const artistas_eventos = await prisma.artistas_eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends artistas_eventosUpdateArgs>(args: SelectSubset<T, artistas_eventosUpdateArgs<ExtArgs>>): Prisma__artistas_eventosClient<$Result.GetResult<Prisma.$artistas_eventosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artistas_eventos.
     * @param {artistas_eventosDeleteManyArgs} args - Arguments to filter Artistas_eventos to delete.
     * @example
     * // Delete a few Artistas_eventos
     * const { count } = await prisma.artistas_eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends artistas_eventosDeleteManyArgs>(args?: SelectSubset<T, artistas_eventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artistas_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistas_eventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artistas_eventos
     * const artistas_eventos = await prisma.artistas_eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends artistas_eventosUpdateManyArgs>(args: SelectSubset<T, artistas_eventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artistas_eventos.
     * @param {artistas_eventosUpsertArgs} args - Arguments to update or create a Artistas_eventos.
     * @example
     * // Update or create a Artistas_eventos
     * const artistas_eventos = await prisma.artistas_eventos.upsert({
     *   create: {
     *     // ... data to create a Artistas_eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artistas_eventos we want to update
     *   }
     * })
     */
    upsert<T extends artistas_eventosUpsertArgs>(args: SelectSubset<T, artistas_eventosUpsertArgs<ExtArgs>>): Prisma__artistas_eventosClient<$Result.GetResult<Prisma.$artistas_eventosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artistas_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistas_eventosCountArgs} args - Arguments to filter Artistas_eventos to count.
     * @example
     * // Count the number of Artistas_eventos
     * const count = await prisma.artistas_eventos.count({
     *   where: {
     *     // ... the filter for the Artistas_eventos we want to count
     *   }
     * })
    **/
    count<T extends artistas_eventosCountArgs>(
      args?: Subset<T, artistas_eventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Artistas_eventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artistas_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Artistas_eventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Artistas_eventosAggregateArgs>(args: Subset<T, Artistas_eventosAggregateArgs>): Prisma.PrismaPromise<GetArtistas_eventosAggregateType<T>>

    /**
     * Group by Artistas_eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artistas_eventosGroupByArgs} args - Group by arguments.
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
      T extends artistas_eventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: artistas_eventosGroupByArgs['orderBy'] }
        : { orderBy?: artistas_eventosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, artistas_eventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistas_eventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the artistas_eventos model
   */
  readonly fields: artistas_eventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for artistas_eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__artistas_eventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends eventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventosDefaultArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artistas<T extends artistasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, artistasDefaultArgs<ExtArgs>>): Prisma__artistasClient<$Result.GetResult<Prisma.$artistasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the artistas_eventos model
   */
  interface artistas_eventosFieldRefs {
    readonly id_artista_evento: FieldRef<"artistas_eventos", 'Int'>
    readonly id_evento: FieldRef<"artistas_eventos", 'Int'>
    readonly id_artista: FieldRef<"artistas_eventos", 'Int'>
    readonly rol_artista_evento: FieldRef<"artistas_eventos", 'String'>
    readonly estado_artista_evento: FieldRef<"artistas_eventos", 'Int'>
    readonly fecha_creacion_artista_evento: FieldRef<"artistas_eventos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * artistas_eventos findUnique
   */
  export type artistas_eventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
    /**
     * Filter, which artistas_eventos to fetch.
     */
    where: artistas_eventosWhereUniqueInput
  }

  /**
   * artistas_eventos findUniqueOrThrow
   */
  export type artistas_eventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
    /**
     * Filter, which artistas_eventos to fetch.
     */
    where: artistas_eventosWhereUniqueInput
  }

  /**
   * artistas_eventos findFirst
   */
  export type artistas_eventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
    /**
     * Filter, which artistas_eventos to fetch.
     */
    where?: artistas_eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artistas_eventos to fetch.
     */
    orderBy?: artistas_eventosOrderByWithRelationInput | artistas_eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artistas_eventos.
     */
    cursor?: artistas_eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artistas_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artistas_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artistas_eventos.
     */
    distinct?: Artistas_eventosScalarFieldEnum | Artistas_eventosScalarFieldEnum[]
  }

  /**
   * artistas_eventos findFirstOrThrow
   */
  export type artistas_eventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
    /**
     * Filter, which artistas_eventos to fetch.
     */
    where?: artistas_eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artistas_eventos to fetch.
     */
    orderBy?: artistas_eventosOrderByWithRelationInput | artistas_eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artistas_eventos.
     */
    cursor?: artistas_eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artistas_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artistas_eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artistas_eventos.
     */
    distinct?: Artistas_eventosScalarFieldEnum | Artistas_eventosScalarFieldEnum[]
  }

  /**
   * artistas_eventos findMany
   */
  export type artistas_eventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
    /**
     * Filter, which artistas_eventos to fetch.
     */
    where?: artistas_eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artistas_eventos to fetch.
     */
    orderBy?: artistas_eventosOrderByWithRelationInput | artistas_eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing artistas_eventos.
     */
    cursor?: artistas_eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artistas_eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artistas_eventos.
     */
    skip?: number
    distinct?: Artistas_eventosScalarFieldEnum | Artistas_eventosScalarFieldEnum[]
  }

  /**
   * artistas_eventos create
   */
  export type artistas_eventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
    /**
     * The data needed to create a artistas_eventos.
     */
    data: XOR<artistas_eventosCreateInput, artistas_eventosUncheckedCreateInput>
  }

  /**
   * artistas_eventos createMany
   */
  export type artistas_eventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many artistas_eventos.
     */
    data: artistas_eventosCreateManyInput | artistas_eventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * artistas_eventos update
   */
  export type artistas_eventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
    /**
     * The data needed to update a artistas_eventos.
     */
    data: XOR<artistas_eventosUpdateInput, artistas_eventosUncheckedUpdateInput>
    /**
     * Choose, which artistas_eventos to update.
     */
    where: artistas_eventosWhereUniqueInput
  }

  /**
   * artistas_eventos updateMany
   */
  export type artistas_eventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update artistas_eventos.
     */
    data: XOR<artistas_eventosUpdateManyMutationInput, artistas_eventosUncheckedUpdateManyInput>
    /**
     * Filter which artistas_eventos to update
     */
    where?: artistas_eventosWhereInput
    /**
     * Limit how many artistas_eventos to update.
     */
    limit?: number
  }

  /**
   * artistas_eventos upsert
   */
  export type artistas_eventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
    /**
     * The filter to search for the artistas_eventos to update in case it exists.
     */
    where: artistas_eventosWhereUniqueInput
    /**
     * In case the artistas_eventos found by the `where` argument doesn't exist, create a new artistas_eventos with this data.
     */
    create: XOR<artistas_eventosCreateInput, artistas_eventosUncheckedCreateInput>
    /**
     * In case the artistas_eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<artistas_eventosUpdateInput, artistas_eventosUncheckedUpdateInput>
  }

  /**
   * artistas_eventos delete
   */
  export type artistas_eventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
    /**
     * Filter which artistas_eventos to delete.
     */
    where: artistas_eventosWhereUniqueInput
  }

  /**
   * artistas_eventos deleteMany
   */
  export type artistas_eventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artistas_eventos to delete
     */
    where?: artistas_eventosWhereInput
    /**
     * Limit how many artistas_eventos to delete.
     */
    limit?: number
  }

  /**
   * artistas_eventos without action
   */
  export type artistas_eventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
  }


  /**
   * Model eventos
   */

  export type AggregateEventos = {
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  export type EventosAvgAggregateOutputType = {
    id_evento: number | null
    precio_entrada_evento: Decimal | null
    entradas_vendidas_evento: number | null
    id_lugar: number | null
    estado_evento: number | null
  }

  export type EventosSumAggregateOutputType = {
    id_evento: number | null
    precio_entrada_evento: Decimal | null
    entradas_vendidas_evento: number | null
    id_lugar: number | null
    estado_evento: number | null
  }

  export type EventosMinAggregateOutputType = {
    id_evento: number | null
    nombre_evento: string | null
    fecha_inicio_evento: Date | null
    fecha_fin_evento: Date | null
    precio_entrada_evento: Decimal | null
    entradas_vendidas_evento: number | null
    id_lugar: number | null
    estado_evento: number | null
    fecha_creacion_evento: Date | null
  }

  export type EventosMaxAggregateOutputType = {
    id_evento: number | null
    nombre_evento: string | null
    fecha_inicio_evento: Date | null
    fecha_fin_evento: Date | null
    precio_entrada_evento: Decimal | null
    entradas_vendidas_evento: number | null
    id_lugar: number | null
    estado_evento: number | null
    fecha_creacion_evento: Date | null
  }

  export type EventosCountAggregateOutputType = {
    id_evento: number
    nombre_evento: number
    fecha_inicio_evento: number
    fecha_fin_evento: number
    precio_entrada_evento: number
    entradas_vendidas_evento: number
    id_lugar: number
    estado_evento: number
    fecha_creacion_evento: number
    _all: number
  }


  export type EventosAvgAggregateInputType = {
    id_evento?: true
    precio_entrada_evento?: true
    entradas_vendidas_evento?: true
    id_lugar?: true
    estado_evento?: true
  }

  export type EventosSumAggregateInputType = {
    id_evento?: true
    precio_entrada_evento?: true
    entradas_vendidas_evento?: true
    id_lugar?: true
    estado_evento?: true
  }

  export type EventosMinAggregateInputType = {
    id_evento?: true
    nombre_evento?: true
    fecha_inicio_evento?: true
    fecha_fin_evento?: true
    precio_entrada_evento?: true
    entradas_vendidas_evento?: true
    id_lugar?: true
    estado_evento?: true
    fecha_creacion_evento?: true
  }

  export type EventosMaxAggregateInputType = {
    id_evento?: true
    nombre_evento?: true
    fecha_inicio_evento?: true
    fecha_fin_evento?: true
    precio_entrada_evento?: true
    entradas_vendidas_evento?: true
    id_lugar?: true
    estado_evento?: true
    fecha_creacion_evento?: true
  }

  export type EventosCountAggregateInputType = {
    id_evento?: true
    nombre_evento?: true
    fecha_inicio_evento?: true
    fecha_fin_evento?: true
    precio_entrada_evento?: true
    entradas_vendidas_evento?: true
    id_lugar?: true
    estado_evento?: true
    fecha_creacion_evento?: true
    _all?: true
  }

  export type EventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to aggregate.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos
    **/
    _count?: true | EventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventosMaxAggregateInputType
  }

  export type GetEventosAggregateType<T extends EventosAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos[P]>
      : GetScalarType<T[P], AggregateEventos[P]>
  }




  export type eventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventosWhereInput
    orderBy?: eventosOrderByWithAggregationInput | eventosOrderByWithAggregationInput[]
    by: EventosScalarFieldEnum[] | EventosScalarFieldEnum
    having?: eventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventosCountAggregateInputType | true
    _avg?: EventosAvgAggregateInputType
    _sum?: EventosSumAggregateInputType
    _min?: EventosMinAggregateInputType
    _max?: EventosMaxAggregateInputType
  }

  export type EventosGroupByOutputType = {
    id_evento: number
    nombre_evento: string
    fecha_inicio_evento: Date
    fecha_fin_evento: Date
    precio_entrada_evento: Decimal | null
    entradas_vendidas_evento: number | null
    id_lugar: number | null
    estado_evento: number | null
    fecha_creacion_evento: Date | null
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  type GetEventosGroupByPayload<T extends eventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventosGroupByOutputType[P]>
            : GetScalarType<T[P], EventosGroupByOutputType[P]>
        }
      >
    >


  export type eventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    nombre_evento?: boolean
    fecha_inicio_evento?: boolean
    fecha_fin_evento?: boolean
    precio_entrada_evento?: boolean
    entradas_vendidas_evento?: boolean
    id_lugar?: boolean
    estado_evento?: boolean
    fecha_creacion_evento?: boolean
    artistas_eventos?: boolean | eventos$artistas_eventosArgs<ExtArgs>
    lugares?: boolean | eventos$lugaresArgs<ExtArgs>
    ventas_boletos?: boolean | eventos$ventas_boletosArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos"]>



  export type eventosSelectScalar = {
    id_evento?: boolean
    nombre_evento?: boolean
    fecha_inicio_evento?: boolean
    fecha_fin_evento?: boolean
    precio_entrada_evento?: boolean
    entradas_vendidas_evento?: boolean
    id_lugar?: boolean
    estado_evento?: boolean
    fecha_creacion_evento?: boolean
  }

  export type eventosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "nombre_evento" | "fecha_inicio_evento" | "fecha_fin_evento" | "precio_entrada_evento" | "entradas_vendidas_evento" | "id_lugar" | "estado_evento" | "fecha_creacion_evento", ExtArgs["result"]["eventos"]>
  export type eventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistas_eventos?: boolean | eventos$artistas_eventosArgs<ExtArgs>
    lugares?: boolean | eventos$lugaresArgs<ExtArgs>
    ventas_boletos?: boolean | eventos$ventas_boletosArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $eventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventos"
    objects: {
      artistas_eventos: Prisma.$artistas_eventosPayload<ExtArgs>[]
      lugares: Prisma.$lugaresPayload<ExtArgs> | null
      ventas_boletos: Prisma.$ventas_boletosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: number
      nombre_evento: string
      fecha_inicio_evento: Date
      fecha_fin_evento: Date
      precio_entrada_evento: Prisma.Decimal | null
      entradas_vendidas_evento: number | null
      id_lugar: number | null
      estado_evento: number | null
      fecha_creacion_evento: Date | null
    }, ExtArgs["result"]["eventos"]>
    composites: {}
  }

  type eventosGetPayload<S extends boolean | null | undefined | eventosDefaultArgs> = $Result.GetResult<Prisma.$eventosPayload, S>

  type eventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventosCountAggregateInputType | true
    }

  export interface eventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventos'], meta: { name: 'eventos' } }
    /**
     * Find zero or one Eventos that matches the filter.
     * @param {eventosFindUniqueArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventosFindUniqueArgs>(args: SelectSubset<T, eventosFindUniqueArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventosFindUniqueOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventosFindUniqueOrThrowArgs>(args: SelectSubset<T, eventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventosFindFirstArgs>(args?: SelectSubset<T, eventosFindFirstArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventosFindFirstOrThrowArgs>(args?: SelectSubset<T, eventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.eventos.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.eventos.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const eventosWithId_eventoOnly = await prisma.eventos.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends eventosFindManyArgs>(args?: SelectSubset<T, eventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos.
     * @param {eventosCreateArgs} args - Arguments to create a Eventos.
     * @example
     * // Create one Eventos
     * const Eventos = await prisma.eventos.create({
     *   data: {
     *     // ... data to create a Eventos
     *   }
     * })
     * 
     */
    create<T extends eventosCreateArgs>(args: SelectSubset<T, eventosCreateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {eventosCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventosCreateManyArgs>(args?: SelectSubset<T, eventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Eventos.
     * @param {eventosDeleteArgs} args - Arguments to delete one Eventos.
     * @example
     * // Delete one Eventos
     * const Eventos = await prisma.eventos.delete({
     *   where: {
     *     // ... filter to delete one Eventos
     *   }
     * })
     * 
     */
    delete<T extends eventosDeleteArgs>(args: SelectSubset<T, eventosDeleteArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos.
     * @param {eventosUpdateArgs} args - Arguments to update one Eventos.
     * @example
     * // Update one Eventos
     * const eventos = await prisma.eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventosUpdateArgs>(args: SelectSubset<T, eventosUpdateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {eventosDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventosDeleteManyArgs>(args?: SelectSubset<T, eventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventosUpdateManyArgs>(args: SelectSubset<T, eventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Eventos.
     * @param {eventosUpsertArgs} args - Arguments to update or create a Eventos.
     * @example
     * // Update or create a Eventos
     * const eventos = await prisma.eventos.upsert({
     *   create: {
     *     // ... data to create a Eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos we want to update
     *   }
     * })
     */
    upsert<T extends eventosUpsertArgs>(args: SelectSubset<T, eventosUpsertArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.eventos.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends eventosCountArgs>(
      args?: Subset<T, eventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventosAggregateArgs>(args: Subset<T, EventosAggregateArgs>): Prisma.PrismaPromise<GetEventosAggregateType<T>>

    /**
     * Group by Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosGroupByArgs} args - Group by arguments.
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
      T extends eventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventosGroupByArgs['orderBy'] }
        : { orderBy?: eventosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventos model
   */
  readonly fields: eventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artistas_eventos<T extends eventos$artistas_eventosArgs<ExtArgs> = {}>(args?: Subset<T, eventos$artistas_eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artistas_eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lugares<T extends eventos$lugaresArgs<ExtArgs> = {}>(args?: Subset<T, eventos$lugaresArgs<ExtArgs>>): Prisma__lugaresClient<$Result.GetResult<Prisma.$lugaresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ventas_boletos<T extends eventos$ventas_boletosArgs<ExtArgs> = {}>(args?: Subset<T, eventos$ventas_boletosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventas_boletosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the eventos model
   */
  interface eventosFieldRefs {
    readonly id_evento: FieldRef<"eventos", 'Int'>
    readonly nombre_evento: FieldRef<"eventos", 'String'>
    readonly fecha_inicio_evento: FieldRef<"eventos", 'DateTime'>
    readonly fecha_fin_evento: FieldRef<"eventos", 'DateTime'>
    readonly precio_entrada_evento: FieldRef<"eventos", 'Decimal'>
    readonly entradas_vendidas_evento: FieldRef<"eventos", 'Int'>
    readonly id_lugar: FieldRef<"eventos", 'Int'>
    readonly estado_evento: FieldRef<"eventos", 'Int'>
    readonly fecha_creacion_evento: FieldRef<"eventos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * eventos findUnique
   */
  export type eventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findUniqueOrThrow
   */
  export type eventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findFirst
   */
  export type eventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findFirstOrThrow
   */
  export type eventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findMany
   */
  export type eventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos create
   */
  export type eventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The data needed to create a eventos.
     */
    data: XOR<eventosCreateInput, eventosUncheckedCreateInput>
  }

  /**
   * eventos createMany
   */
  export type eventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos.
     */
    data: eventosCreateManyInput | eventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventos update
   */
  export type eventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The data needed to update a eventos.
     */
    data: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
    /**
     * Choose, which eventos to update.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos updateMany
   */
  export type eventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos.
     */
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to update.
     */
    limit?: number
  }

  /**
   * eventos upsert
   */
  export type eventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The filter to search for the eventos to update in case it exists.
     */
    where: eventosWhereUniqueInput
    /**
     * In case the eventos found by the `where` argument doesn't exist, create a new eventos with this data.
     */
    create: XOR<eventosCreateInput, eventosUncheckedCreateInput>
    /**
     * In case the eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
  }

  /**
   * eventos delete
   */
  export type eventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter which eventos to delete.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos deleteMany
   */
  export type eventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to delete
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to delete.
     */
    limit?: number
  }

  /**
   * eventos.artistas_eventos
   */
  export type eventos$artistas_eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artistas_eventos
     */
    select?: artistas_eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artistas_eventos
     */
    omit?: artistas_eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artistas_eventosInclude<ExtArgs> | null
    where?: artistas_eventosWhereInput
    orderBy?: artistas_eventosOrderByWithRelationInput | artistas_eventosOrderByWithRelationInput[]
    cursor?: artistas_eventosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Artistas_eventosScalarFieldEnum | Artistas_eventosScalarFieldEnum[]
  }

  /**
   * eventos.lugares
   */
  export type eventos$lugaresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugares
     */
    select?: lugaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lugares
     */
    omit?: lugaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugaresInclude<ExtArgs> | null
    where?: lugaresWhereInput
  }

  /**
   * eventos.ventas_boletos
   */
  export type eventos$ventas_boletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
    where?: ventas_boletosWhereInput
    orderBy?: ventas_boletosOrderByWithRelationInput | ventas_boletosOrderByWithRelationInput[]
    cursor?: ventas_boletosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ventas_boletosScalarFieldEnum | Ventas_boletosScalarFieldEnum[]
  }

  /**
   * eventos without action
   */
  export type eventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
  }


  /**
   * Model lugares
   */

  export type AggregateLugares = {
    _count: LugaresCountAggregateOutputType | null
    _avg: LugaresAvgAggregateOutputType | null
    _sum: LugaresSumAggregateOutputType | null
    _min: LugaresMinAggregateOutputType | null
    _max: LugaresMaxAggregateOutputType | null
  }

  export type LugaresAvgAggregateOutputType = {
    id_lugar: number | null
    capacidad_maxima_lugar: number | null
    estado_lugar: number | null
  }

  export type LugaresSumAggregateOutputType = {
    id_lugar: number | null
    capacidad_maxima_lugar: number | null
    estado_lugar: number | null
  }

  export type LugaresMinAggregateOutputType = {
    id_lugar: number | null
    nombre_lugar: string | null
    tipo_lugar: string | null
    direccion_lugar: string | null
    contacto_nombre_lugar: string | null
    contacto_telefono_lugar: string | null
    contacto_email_lugar: string | null
    equipamiento_lugar: string | null
    capacidad_maxima_lugar: number | null
    estado_lugar: number | null
    fecha_creacion_lugar: Date | null
  }

  export type LugaresMaxAggregateOutputType = {
    id_lugar: number | null
    nombre_lugar: string | null
    tipo_lugar: string | null
    direccion_lugar: string | null
    contacto_nombre_lugar: string | null
    contacto_telefono_lugar: string | null
    contacto_email_lugar: string | null
    equipamiento_lugar: string | null
    capacidad_maxima_lugar: number | null
    estado_lugar: number | null
    fecha_creacion_lugar: Date | null
  }

  export type LugaresCountAggregateOutputType = {
    id_lugar: number
    nombre_lugar: number
    tipo_lugar: number
    direccion_lugar: number
    contacto_nombre_lugar: number
    contacto_telefono_lugar: number
    contacto_email_lugar: number
    equipamiento_lugar: number
    capacidad_maxima_lugar: number
    estado_lugar: number
    fecha_creacion_lugar: number
    _all: number
  }


  export type LugaresAvgAggregateInputType = {
    id_lugar?: true
    capacidad_maxima_lugar?: true
    estado_lugar?: true
  }

  export type LugaresSumAggregateInputType = {
    id_lugar?: true
    capacidad_maxima_lugar?: true
    estado_lugar?: true
  }

  export type LugaresMinAggregateInputType = {
    id_lugar?: true
    nombre_lugar?: true
    tipo_lugar?: true
    direccion_lugar?: true
    contacto_nombre_lugar?: true
    contacto_telefono_lugar?: true
    contacto_email_lugar?: true
    equipamiento_lugar?: true
    capacidad_maxima_lugar?: true
    estado_lugar?: true
    fecha_creacion_lugar?: true
  }

  export type LugaresMaxAggregateInputType = {
    id_lugar?: true
    nombre_lugar?: true
    tipo_lugar?: true
    direccion_lugar?: true
    contacto_nombre_lugar?: true
    contacto_telefono_lugar?: true
    contacto_email_lugar?: true
    equipamiento_lugar?: true
    capacidad_maxima_lugar?: true
    estado_lugar?: true
    fecha_creacion_lugar?: true
  }

  export type LugaresCountAggregateInputType = {
    id_lugar?: true
    nombre_lugar?: true
    tipo_lugar?: true
    direccion_lugar?: true
    contacto_nombre_lugar?: true
    contacto_telefono_lugar?: true
    contacto_email_lugar?: true
    equipamiento_lugar?: true
    capacidad_maxima_lugar?: true
    estado_lugar?: true
    fecha_creacion_lugar?: true
    _all?: true
  }

  export type LugaresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lugares to aggregate.
     */
    where?: lugaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lugares to fetch.
     */
    orderBy?: lugaresOrderByWithRelationInput | lugaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lugaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lugares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lugares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lugares
    **/
    _count?: true | LugaresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LugaresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LugaresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LugaresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LugaresMaxAggregateInputType
  }

  export type GetLugaresAggregateType<T extends LugaresAggregateArgs> = {
        [P in keyof T & keyof AggregateLugares]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLugares[P]>
      : GetScalarType<T[P], AggregateLugares[P]>
  }




  export type lugaresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lugaresWhereInput
    orderBy?: lugaresOrderByWithAggregationInput | lugaresOrderByWithAggregationInput[]
    by: LugaresScalarFieldEnum[] | LugaresScalarFieldEnum
    having?: lugaresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LugaresCountAggregateInputType | true
    _avg?: LugaresAvgAggregateInputType
    _sum?: LugaresSumAggregateInputType
    _min?: LugaresMinAggregateInputType
    _max?: LugaresMaxAggregateInputType
  }

  export type LugaresGroupByOutputType = {
    id_lugar: number
    nombre_lugar: string
    tipo_lugar: string | null
    direccion_lugar: string | null
    contacto_nombre_lugar: string | null
    contacto_telefono_lugar: string | null
    contacto_email_lugar: string | null
    equipamiento_lugar: string | null
    capacidad_maxima_lugar: number | null
    estado_lugar: number | null
    fecha_creacion_lugar: Date | null
    _count: LugaresCountAggregateOutputType | null
    _avg: LugaresAvgAggregateOutputType | null
    _sum: LugaresSumAggregateOutputType | null
    _min: LugaresMinAggregateOutputType | null
    _max: LugaresMaxAggregateOutputType | null
  }

  type GetLugaresGroupByPayload<T extends lugaresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LugaresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LugaresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LugaresGroupByOutputType[P]>
            : GetScalarType<T[P], LugaresGroupByOutputType[P]>
        }
      >
    >


  export type lugaresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_lugar?: boolean
    nombre_lugar?: boolean
    tipo_lugar?: boolean
    direccion_lugar?: boolean
    contacto_nombre_lugar?: boolean
    contacto_telefono_lugar?: boolean
    contacto_email_lugar?: boolean
    equipamiento_lugar?: boolean
    capacidad_maxima_lugar?: boolean
    estado_lugar?: boolean
    fecha_creacion_lugar?: boolean
    eventos?: boolean | lugares$eventosArgs<ExtArgs>
    _count?: boolean | LugaresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lugares"]>



  export type lugaresSelectScalar = {
    id_lugar?: boolean
    nombre_lugar?: boolean
    tipo_lugar?: boolean
    direccion_lugar?: boolean
    contacto_nombre_lugar?: boolean
    contacto_telefono_lugar?: boolean
    contacto_email_lugar?: boolean
    equipamiento_lugar?: boolean
    capacidad_maxima_lugar?: boolean
    estado_lugar?: boolean
    fecha_creacion_lugar?: boolean
  }

  export type lugaresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_lugar" | "nombre_lugar" | "tipo_lugar" | "direccion_lugar" | "contacto_nombre_lugar" | "contacto_telefono_lugar" | "contacto_email_lugar" | "equipamiento_lugar" | "capacidad_maxima_lugar" | "estado_lugar" | "fecha_creacion_lugar", ExtArgs["result"]["lugares"]>
  export type lugaresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | lugares$eventosArgs<ExtArgs>
    _count?: boolean | LugaresCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $lugaresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lugares"
    objects: {
      eventos: Prisma.$eventosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_lugar: number
      nombre_lugar: string
      tipo_lugar: string | null
      direccion_lugar: string | null
      contacto_nombre_lugar: string | null
      contacto_telefono_lugar: string | null
      contacto_email_lugar: string | null
      equipamiento_lugar: string | null
      capacidad_maxima_lugar: number | null
      estado_lugar: number | null
      fecha_creacion_lugar: Date | null
    }, ExtArgs["result"]["lugares"]>
    composites: {}
  }

  type lugaresGetPayload<S extends boolean | null | undefined | lugaresDefaultArgs> = $Result.GetResult<Prisma.$lugaresPayload, S>

  type lugaresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lugaresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LugaresCountAggregateInputType | true
    }

  export interface lugaresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lugares'], meta: { name: 'lugares' } }
    /**
     * Find zero or one Lugares that matches the filter.
     * @param {lugaresFindUniqueArgs} args - Arguments to find a Lugares
     * @example
     * // Get one Lugares
     * const lugares = await prisma.lugares.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lugaresFindUniqueArgs>(args: SelectSubset<T, lugaresFindUniqueArgs<ExtArgs>>): Prisma__lugaresClient<$Result.GetResult<Prisma.$lugaresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lugares that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lugaresFindUniqueOrThrowArgs} args - Arguments to find a Lugares
     * @example
     * // Get one Lugares
     * const lugares = await prisma.lugares.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lugaresFindUniqueOrThrowArgs>(args: SelectSubset<T, lugaresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lugaresClient<$Result.GetResult<Prisma.$lugaresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lugares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugaresFindFirstArgs} args - Arguments to find a Lugares
     * @example
     * // Get one Lugares
     * const lugares = await prisma.lugares.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lugaresFindFirstArgs>(args?: SelectSubset<T, lugaresFindFirstArgs<ExtArgs>>): Prisma__lugaresClient<$Result.GetResult<Prisma.$lugaresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lugares that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugaresFindFirstOrThrowArgs} args - Arguments to find a Lugares
     * @example
     * // Get one Lugares
     * const lugares = await prisma.lugares.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lugaresFindFirstOrThrowArgs>(args?: SelectSubset<T, lugaresFindFirstOrThrowArgs<ExtArgs>>): Prisma__lugaresClient<$Result.GetResult<Prisma.$lugaresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lugares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugaresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lugares
     * const lugares = await prisma.lugares.findMany()
     * 
     * // Get first 10 Lugares
     * const lugares = await prisma.lugares.findMany({ take: 10 })
     * 
     * // Only select the `id_lugar`
     * const lugaresWithId_lugarOnly = await prisma.lugares.findMany({ select: { id_lugar: true } })
     * 
     */
    findMany<T extends lugaresFindManyArgs>(args?: SelectSubset<T, lugaresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lugaresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lugares.
     * @param {lugaresCreateArgs} args - Arguments to create a Lugares.
     * @example
     * // Create one Lugares
     * const Lugares = await prisma.lugares.create({
     *   data: {
     *     // ... data to create a Lugares
     *   }
     * })
     * 
     */
    create<T extends lugaresCreateArgs>(args: SelectSubset<T, lugaresCreateArgs<ExtArgs>>): Prisma__lugaresClient<$Result.GetResult<Prisma.$lugaresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lugares.
     * @param {lugaresCreateManyArgs} args - Arguments to create many Lugares.
     * @example
     * // Create many Lugares
     * const lugares = await prisma.lugares.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lugaresCreateManyArgs>(args?: SelectSubset<T, lugaresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lugares.
     * @param {lugaresDeleteArgs} args - Arguments to delete one Lugares.
     * @example
     * // Delete one Lugares
     * const Lugares = await prisma.lugares.delete({
     *   where: {
     *     // ... filter to delete one Lugares
     *   }
     * })
     * 
     */
    delete<T extends lugaresDeleteArgs>(args: SelectSubset<T, lugaresDeleteArgs<ExtArgs>>): Prisma__lugaresClient<$Result.GetResult<Prisma.$lugaresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lugares.
     * @param {lugaresUpdateArgs} args - Arguments to update one Lugares.
     * @example
     * // Update one Lugares
     * const lugares = await prisma.lugares.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lugaresUpdateArgs>(args: SelectSubset<T, lugaresUpdateArgs<ExtArgs>>): Prisma__lugaresClient<$Result.GetResult<Prisma.$lugaresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lugares.
     * @param {lugaresDeleteManyArgs} args - Arguments to filter Lugares to delete.
     * @example
     * // Delete a few Lugares
     * const { count } = await prisma.lugares.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lugaresDeleteManyArgs>(args?: SelectSubset<T, lugaresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lugares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugaresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lugares
     * const lugares = await prisma.lugares.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lugaresUpdateManyArgs>(args: SelectSubset<T, lugaresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lugares.
     * @param {lugaresUpsertArgs} args - Arguments to update or create a Lugares.
     * @example
     * // Update or create a Lugares
     * const lugares = await prisma.lugares.upsert({
     *   create: {
     *     // ... data to create a Lugares
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lugares we want to update
     *   }
     * })
     */
    upsert<T extends lugaresUpsertArgs>(args: SelectSubset<T, lugaresUpsertArgs<ExtArgs>>): Prisma__lugaresClient<$Result.GetResult<Prisma.$lugaresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lugares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugaresCountArgs} args - Arguments to filter Lugares to count.
     * @example
     * // Count the number of Lugares
     * const count = await prisma.lugares.count({
     *   where: {
     *     // ... the filter for the Lugares we want to count
     *   }
     * })
    **/
    count<T extends lugaresCountArgs>(
      args?: Subset<T, lugaresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LugaresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lugares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LugaresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LugaresAggregateArgs>(args: Subset<T, LugaresAggregateArgs>): Prisma.PrismaPromise<GetLugaresAggregateType<T>>

    /**
     * Group by Lugares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lugaresGroupByArgs} args - Group by arguments.
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
      T extends lugaresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lugaresGroupByArgs['orderBy'] }
        : { orderBy?: lugaresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lugaresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLugaresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lugares model
   */
  readonly fields: lugaresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lugares.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lugaresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends lugares$eventosArgs<ExtArgs> = {}>(args?: Subset<T, lugares$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the lugares model
   */
  interface lugaresFieldRefs {
    readonly id_lugar: FieldRef<"lugares", 'Int'>
    readonly nombre_lugar: FieldRef<"lugares", 'String'>
    readonly tipo_lugar: FieldRef<"lugares", 'String'>
    readonly direccion_lugar: FieldRef<"lugares", 'String'>
    readonly contacto_nombre_lugar: FieldRef<"lugares", 'String'>
    readonly contacto_telefono_lugar: FieldRef<"lugares", 'String'>
    readonly contacto_email_lugar: FieldRef<"lugares", 'String'>
    readonly equipamiento_lugar: FieldRef<"lugares", 'String'>
    readonly capacidad_maxima_lugar: FieldRef<"lugares", 'Int'>
    readonly estado_lugar: FieldRef<"lugares", 'Int'>
    readonly fecha_creacion_lugar: FieldRef<"lugares", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lugares findUnique
   */
  export type lugaresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugares
     */
    select?: lugaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lugares
     */
    omit?: lugaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugaresInclude<ExtArgs> | null
    /**
     * Filter, which lugares to fetch.
     */
    where: lugaresWhereUniqueInput
  }

  /**
   * lugares findUniqueOrThrow
   */
  export type lugaresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugares
     */
    select?: lugaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lugares
     */
    omit?: lugaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugaresInclude<ExtArgs> | null
    /**
     * Filter, which lugares to fetch.
     */
    where: lugaresWhereUniqueInput
  }

  /**
   * lugares findFirst
   */
  export type lugaresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugares
     */
    select?: lugaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lugares
     */
    omit?: lugaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugaresInclude<ExtArgs> | null
    /**
     * Filter, which lugares to fetch.
     */
    where?: lugaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lugares to fetch.
     */
    orderBy?: lugaresOrderByWithRelationInput | lugaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lugares.
     */
    cursor?: lugaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lugares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lugares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lugares.
     */
    distinct?: LugaresScalarFieldEnum | LugaresScalarFieldEnum[]
  }

  /**
   * lugares findFirstOrThrow
   */
  export type lugaresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugares
     */
    select?: lugaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lugares
     */
    omit?: lugaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugaresInclude<ExtArgs> | null
    /**
     * Filter, which lugares to fetch.
     */
    where?: lugaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lugares to fetch.
     */
    orderBy?: lugaresOrderByWithRelationInput | lugaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lugares.
     */
    cursor?: lugaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lugares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lugares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lugares.
     */
    distinct?: LugaresScalarFieldEnum | LugaresScalarFieldEnum[]
  }

  /**
   * lugares findMany
   */
  export type lugaresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugares
     */
    select?: lugaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lugares
     */
    omit?: lugaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugaresInclude<ExtArgs> | null
    /**
     * Filter, which lugares to fetch.
     */
    where?: lugaresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lugares to fetch.
     */
    orderBy?: lugaresOrderByWithRelationInput | lugaresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lugares.
     */
    cursor?: lugaresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lugares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lugares.
     */
    skip?: number
    distinct?: LugaresScalarFieldEnum | LugaresScalarFieldEnum[]
  }

  /**
   * lugares create
   */
  export type lugaresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugares
     */
    select?: lugaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lugares
     */
    omit?: lugaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugaresInclude<ExtArgs> | null
    /**
     * The data needed to create a lugares.
     */
    data: XOR<lugaresCreateInput, lugaresUncheckedCreateInput>
  }

  /**
   * lugares createMany
   */
  export type lugaresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lugares.
     */
    data: lugaresCreateManyInput | lugaresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lugares update
   */
  export type lugaresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugares
     */
    select?: lugaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lugares
     */
    omit?: lugaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugaresInclude<ExtArgs> | null
    /**
     * The data needed to update a lugares.
     */
    data: XOR<lugaresUpdateInput, lugaresUncheckedUpdateInput>
    /**
     * Choose, which lugares to update.
     */
    where: lugaresWhereUniqueInput
  }

  /**
   * lugares updateMany
   */
  export type lugaresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lugares.
     */
    data: XOR<lugaresUpdateManyMutationInput, lugaresUncheckedUpdateManyInput>
    /**
     * Filter which lugares to update
     */
    where?: lugaresWhereInput
    /**
     * Limit how many lugares to update.
     */
    limit?: number
  }

  /**
   * lugares upsert
   */
  export type lugaresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugares
     */
    select?: lugaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lugares
     */
    omit?: lugaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugaresInclude<ExtArgs> | null
    /**
     * The filter to search for the lugares to update in case it exists.
     */
    where: lugaresWhereUniqueInput
    /**
     * In case the lugares found by the `where` argument doesn't exist, create a new lugares with this data.
     */
    create: XOR<lugaresCreateInput, lugaresUncheckedCreateInput>
    /**
     * In case the lugares was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lugaresUpdateInput, lugaresUncheckedUpdateInput>
  }

  /**
   * lugares delete
   */
  export type lugaresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugares
     */
    select?: lugaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lugares
     */
    omit?: lugaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugaresInclude<ExtArgs> | null
    /**
     * Filter which lugares to delete.
     */
    where: lugaresWhereUniqueInput
  }

  /**
   * lugares deleteMany
   */
  export type lugaresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lugares to delete
     */
    where?: lugaresWhereInput
    /**
     * Limit how many lugares to delete.
     */
    limit?: number
  }

  /**
   * lugares.eventos
   */
  export type lugares$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    where?: eventosWhereInput
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    cursor?: eventosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * lugares without action
   */
  export type lugaresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lugares
     */
    select?: lugaresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lugares
     */
    omit?: lugaresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lugaresInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
    estado_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
    estado_usuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    nombre_usuario: string | null
    email_usuario: string | null
    password_usuario: string | null
    rol_usuario: $Enums.usuarios_rol_usuario | null
    estado_usuario: number | null
    fecha_creacion_usuario: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    nombre_usuario: string | null
    email_usuario: string | null
    password_usuario: string | null
    rol_usuario: $Enums.usuarios_rol_usuario | null
    estado_usuario: number | null
    fecha_creacion_usuario: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    nombre_usuario: number
    email_usuario: number
    password_usuario: number
    rol_usuario: number
    estado_usuario: number
    fecha_creacion_usuario: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
    estado_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
    estado_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    email_usuario?: true
    password_usuario?: true
    rol_usuario?: true
    estado_usuario?: true
    fecha_creacion_usuario?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    email_usuario?: true
    password_usuario?: true
    rol_usuario?: true
    estado_usuario?: true
    fecha_creacion_usuario?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    email_usuario?: true
    password_usuario?: true
    rol_usuario?: true
    estado_usuario?: true
    fecha_creacion_usuario?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    nombre_usuario: string
    email_usuario: string
    password_usuario: string
    rol_usuario: $Enums.usuarios_rol_usuario
    estado_usuario: number | null
    fecha_creacion_usuario: Date | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    email_usuario?: boolean
    password_usuario?: boolean
    rol_usuario?: boolean
    estado_usuario?: boolean
    fecha_creacion_usuario?: boolean
    ventas_boletos?: boolean | usuarios$ventas_boletosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id_usuario?: boolean
    nombre_usuario?: boolean
    email_usuario?: boolean
    password_usuario?: boolean
    rol_usuario?: boolean
    estado_usuario?: boolean
    fecha_creacion_usuario?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre_usuario" | "email_usuario" | "password_usuario" | "rol_usuario" | "estado_usuario" | "fecha_creacion_usuario", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas_boletos?: boolean | usuarios$ventas_boletosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      ventas_boletos: Prisma.$ventas_boletosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre_usuario: string
      email_usuario: string
      password_usuario: string
      rol_usuario: $Enums.usuarios_rol_usuario
      estado_usuario: number | null
      fecha_creacion_usuario: Date | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ventas_boletos<T extends usuarios$ventas_boletosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$ventas_boletosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventas_boletosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly nombre_usuario: FieldRef<"usuarios", 'String'>
    readonly email_usuario: FieldRef<"usuarios", 'String'>
    readonly password_usuario: FieldRef<"usuarios", 'String'>
    readonly rol_usuario: FieldRef<"usuarios", 'usuarios_rol_usuario'>
    readonly estado_usuario: FieldRef<"usuarios", 'Int'>
    readonly fecha_creacion_usuario: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.ventas_boletos
   */
  export type usuarios$ventas_boletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
    where?: ventas_boletosWhereInput
    orderBy?: ventas_boletosOrderByWithRelationInput | ventas_boletosOrderByWithRelationInput[]
    cursor?: ventas_boletosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ventas_boletosScalarFieldEnum | Ventas_boletosScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model ventas_boletos
   */

  export type AggregateVentas_boletos = {
    _count: Ventas_boletosCountAggregateOutputType | null
    _avg: Ventas_boletosAvgAggregateOutputType | null
    _sum: Ventas_boletosSumAggregateOutputType | null
    _min: Ventas_boletosMinAggregateOutputType | null
    _max: Ventas_boletosMaxAggregateOutputType | null
  }

  export type Ventas_boletosAvgAggregateOutputType = {
    id_venta_boleto: number | null
    id_evento: number | null
    id_usuario: number | null
    cantidad_boletos: number | null
    total_venta: Decimal | null
    estado_venta_boleto: number | null
  }

  export type Ventas_boletosSumAggregateOutputType = {
    id_venta_boleto: number | null
    id_evento: number | null
    id_usuario: number | null
    cantidad_boletos: number | null
    total_venta: Decimal | null
    estado_venta_boleto: number | null
  }

  export type Ventas_boletosMinAggregateOutputType = {
    id_venta_boleto: number | null
    id_evento: number | null
    id_usuario: number | null
    cantidad_boletos: number | null
    total_venta: Decimal | null
    metodo_pago: string | null
    estado_venta_boleto: number | null
    fecha_creacion_venta_boleto: Date | null
  }

  export type Ventas_boletosMaxAggregateOutputType = {
    id_venta_boleto: number | null
    id_evento: number | null
    id_usuario: number | null
    cantidad_boletos: number | null
    total_venta: Decimal | null
    metodo_pago: string | null
    estado_venta_boleto: number | null
    fecha_creacion_venta_boleto: Date | null
  }

  export type Ventas_boletosCountAggregateOutputType = {
    id_venta_boleto: number
    id_evento: number
    id_usuario: number
    cantidad_boletos: number
    total_venta: number
    metodo_pago: number
    estado_venta_boleto: number
    fecha_creacion_venta_boleto: number
    _all: number
  }


  export type Ventas_boletosAvgAggregateInputType = {
    id_venta_boleto?: true
    id_evento?: true
    id_usuario?: true
    cantidad_boletos?: true
    total_venta?: true
    estado_venta_boleto?: true
  }

  export type Ventas_boletosSumAggregateInputType = {
    id_venta_boleto?: true
    id_evento?: true
    id_usuario?: true
    cantidad_boletos?: true
    total_venta?: true
    estado_venta_boleto?: true
  }

  export type Ventas_boletosMinAggregateInputType = {
    id_venta_boleto?: true
    id_evento?: true
    id_usuario?: true
    cantidad_boletos?: true
    total_venta?: true
    metodo_pago?: true
    estado_venta_boleto?: true
    fecha_creacion_venta_boleto?: true
  }

  export type Ventas_boletosMaxAggregateInputType = {
    id_venta_boleto?: true
    id_evento?: true
    id_usuario?: true
    cantidad_boletos?: true
    total_venta?: true
    metodo_pago?: true
    estado_venta_boleto?: true
    fecha_creacion_venta_boleto?: true
  }

  export type Ventas_boletosCountAggregateInputType = {
    id_venta_boleto?: true
    id_evento?: true
    id_usuario?: true
    cantidad_boletos?: true
    total_venta?: true
    metodo_pago?: true
    estado_venta_boleto?: true
    fecha_creacion_venta_boleto?: true
    _all?: true
  }

  export type Ventas_boletosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ventas_boletos to aggregate.
     */
    where?: ventas_boletosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas_boletos to fetch.
     */
    orderBy?: ventas_boletosOrderByWithRelationInput | ventas_boletosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ventas_boletosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas_boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas_boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ventas_boletos
    **/
    _count?: true | Ventas_boletosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ventas_boletosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ventas_boletosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ventas_boletosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ventas_boletosMaxAggregateInputType
  }

  export type GetVentas_boletosAggregateType<T extends Ventas_boletosAggregateArgs> = {
        [P in keyof T & keyof AggregateVentas_boletos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVentas_boletos[P]>
      : GetScalarType<T[P], AggregateVentas_boletos[P]>
  }




  export type ventas_boletosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventas_boletosWhereInput
    orderBy?: ventas_boletosOrderByWithAggregationInput | ventas_boletosOrderByWithAggregationInput[]
    by: Ventas_boletosScalarFieldEnum[] | Ventas_boletosScalarFieldEnum
    having?: ventas_boletosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ventas_boletosCountAggregateInputType | true
    _avg?: Ventas_boletosAvgAggregateInputType
    _sum?: Ventas_boletosSumAggregateInputType
    _min?: Ventas_boletosMinAggregateInputType
    _max?: Ventas_boletosMaxAggregateInputType
  }

  export type Ventas_boletosGroupByOutputType = {
    id_venta_boleto: number
    id_evento: number
    id_usuario: number
    cantidad_boletos: number
    total_venta: Decimal
    metodo_pago: string | null
    estado_venta_boleto: number | null
    fecha_creacion_venta_boleto: Date | null
    _count: Ventas_boletosCountAggregateOutputType | null
    _avg: Ventas_boletosAvgAggregateOutputType | null
    _sum: Ventas_boletosSumAggregateOutputType | null
    _min: Ventas_boletosMinAggregateOutputType | null
    _max: Ventas_boletosMaxAggregateOutputType | null
  }

  type GetVentas_boletosGroupByPayload<T extends ventas_boletosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ventas_boletosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ventas_boletosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ventas_boletosGroupByOutputType[P]>
            : GetScalarType<T[P], Ventas_boletosGroupByOutputType[P]>
        }
      >
    >


  export type ventas_boletosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_venta_boleto?: boolean
    id_evento?: boolean
    id_usuario?: boolean
    cantidad_boletos?: boolean
    total_venta?: boolean
    metodo_pago?: boolean
    estado_venta_boleto?: boolean
    fecha_creacion_venta_boleto?: boolean
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ventas_boletos"]>



  export type ventas_boletosSelectScalar = {
    id_venta_boleto?: boolean
    id_evento?: boolean
    id_usuario?: boolean
    cantidad_boletos?: boolean
    total_venta?: boolean
    metodo_pago?: boolean
    estado_venta_boleto?: boolean
    fecha_creacion_venta_boleto?: boolean
  }

  export type ventas_boletosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_venta_boleto" | "id_evento" | "id_usuario" | "cantidad_boletos" | "total_venta" | "metodo_pago" | "estado_venta_boleto" | "fecha_creacion_venta_boleto", ExtArgs["result"]["ventas_boletos"]>
  export type ventas_boletosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $ventas_boletosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ventas_boletos"
    objects: {
      eventos: Prisma.$eventosPayload<ExtArgs>
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_venta_boleto: number
      id_evento: number
      id_usuario: number
      cantidad_boletos: number
      total_venta: Prisma.Decimal
      metodo_pago: string | null
      estado_venta_boleto: number | null
      fecha_creacion_venta_boleto: Date | null
    }, ExtArgs["result"]["ventas_boletos"]>
    composites: {}
  }

  type ventas_boletosGetPayload<S extends boolean | null | undefined | ventas_boletosDefaultArgs> = $Result.GetResult<Prisma.$ventas_boletosPayload, S>

  type ventas_boletosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ventas_boletosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ventas_boletosCountAggregateInputType | true
    }

  export interface ventas_boletosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ventas_boletos'], meta: { name: 'ventas_boletos' } }
    /**
     * Find zero or one Ventas_boletos that matches the filter.
     * @param {ventas_boletosFindUniqueArgs} args - Arguments to find a Ventas_boletos
     * @example
     * // Get one Ventas_boletos
     * const ventas_boletos = await prisma.ventas_boletos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ventas_boletosFindUniqueArgs>(args: SelectSubset<T, ventas_boletosFindUniqueArgs<ExtArgs>>): Prisma__ventas_boletosClient<$Result.GetResult<Prisma.$ventas_boletosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ventas_boletos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ventas_boletosFindUniqueOrThrowArgs} args - Arguments to find a Ventas_boletos
     * @example
     * // Get one Ventas_boletos
     * const ventas_boletos = await prisma.ventas_boletos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ventas_boletosFindUniqueOrThrowArgs>(args: SelectSubset<T, ventas_boletosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ventas_boletosClient<$Result.GetResult<Prisma.$ventas_boletosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ventas_boletos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventas_boletosFindFirstArgs} args - Arguments to find a Ventas_boletos
     * @example
     * // Get one Ventas_boletos
     * const ventas_boletos = await prisma.ventas_boletos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ventas_boletosFindFirstArgs>(args?: SelectSubset<T, ventas_boletosFindFirstArgs<ExtArgs>>): Prisma__ventas_boletosClient<$Result.GetResult<Prisma.$ventas_boletosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ventas_boletos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventas_boletosFindFirstOrThrowArgs} args - Arguments to find a Ventas_boletos
     * @example
     * // Get one Ventas_boletos
     * const ventas_boletos = await prisma.ventas_boletos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ventas_boletosFindFirstOrThrowArgs>(args?: SelectSubset<T, ventas_boletosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ventas_boletosClient<$Result.GetResult<Prisma.$ventas_boletosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas_boletos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventas_boletosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas_boletos
     * const ventas_boletos = await prisma.ventas_boletos.findMany()
     * 
     * // Get first 10 Ventas_boletos
     * const ventas_boletos = await prisma.ventas_boletos.findMany({ take: 10 })
     * 
     * // Only select the `id_venta_boleto`
     * const ventas_boletosWithId_venta_boletoOnly = await prisma.ventas_boletos.findMany({ select: { id_venta_boleto: true } })
     * 
     */
    findMany<T extends ventas_boletosFindManyArgs>(args?: SelectSubset<T, ventas_boletosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventas_boletosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ventas_boletos.
     * @param {ventas_boletosCreateArgs} args - Arguments to create a Ventas_boletos.
     * @example
     * // Create one Ventas_boletos
     * const Ventas_boletos = await prisma.ventas_boletos.create({
     *   data: {
     *     // ... data to create a Ventas_boletos
     *   }
     * })
     * 
     */
    create<T extends ventas_boletosCreateArgs>(args: SelectSubset<T, ventas_boletosCreateArgs<ExtArgs>>): Prisma__ventas_boletosClient<$Result.GetResult<Prisma.$ventas_boletosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas_boletos.
     * @param {ventas_boletosCreateManyArgs} args - Arguments to create many Ventas_boletos.
     * @example
     * // Create many Ventas_boletos
     * const ventas_boletos = await prisma.ventas_boletos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ventas_boletosCreateManyArgs>(args?: SelectSubset<T, ventas_boletosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ventas_boletos.
     * @param {ventas_boletosDeleteArgs} args - Arguments to delete one Ventas_boletos.
     * @example
     * // Delete one Ventas_boletos
     * const Ventas_boletos = await prisma.ventas_boletos.delete({
     *   where: {
     *     // ... filter to delete one Ventas_boletos
     *   }
     * })
     * 
     */
    delete<T extends ventas_boletosDeleteArgs>(args: SelectSubset<T, ventas_boletosDeleteArgs<ExtArgs>>): Prisma__ventas_boletosClient<$Result.GetResult<Prisma.$ventas_boletosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ventas_boletos.
     * @param {ventas_boletosUpdateArgs} args - Arguments to update one Ventas_boletos.
     * @example
     * // Update one Ventas_boletos
     * const ventas_boletos = await prisma.ventas_boletos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ventas_boletosUpdateArgs>(args: SelectSubset<T, ventas_boletosUpdateArgs<ExtArgs>>): Prisma__ventas_boletosClient<$Result.GetResult<Prisma.$ventas_boletosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas_boletos.
     * @param {ventas_boletosDeleteManyArgs} args - Arguments to filter Ventas_boletos to delete.
     * @example
     * // Delete a few Ventas_boletos
     * const { count } = await prisma.ventas_boletos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ventas_boletosDeleteManyArgs>(args?: SelectSubset<T, ventas_boletosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas_boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventas_boletosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas_boletos
     * const ventas_boletos = await prisma.ventas_boletos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ventas_boletosUpdateManyArgs>(args: SelectSubset<T, ventas_boletosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ventas_boletos.
     * @param {ventas_boletosUpsertArgs} args - Arguments to update or create a Ventas_boletos.
     * @example
     * // Update or create a Ventas_boletos
     * const ventas_boletos = await prisma.ventas_boletos.upsert({
     *   create: {
     *     // ... data to create a Ventas_boletos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ventas_boletos we want to update
     *   }
     * })
     */
    upsert<T extends ventas_boletosUpsertArgs>(args: SelectSubset<T, ventas_boletosUpsertArgs<ExtArgs>>): Prisma__ventas_boletosClient<$Result.GetResult<Prisma.$ventas_boletosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas_boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventas_boletosCountArgs} args - Arguments to filter Ventas_boletos to count.
     * @example
     * // Count the number of Ventas_boletos
     * const count = await prisma.ventas_boletos.count({
     *   where: {
     *     // ... the filter for the Ventas_boletos we want to count
     *   }
     * })
    **/
    count<T extends ventas_boletosCountArgs>(
      args?: Subset<T, ventas_boletosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ventas_boletosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ventas_boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ventas_boletosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ventas_boletosAggregateArgs>(args: Subset<T, Ventas_boletosAggregateArgs>): Prisma.PrismaPromise<GetVentas_boletosAggregateType<T>>

    /**
     * Group by Ventas_boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventas_boletosGroupByArgs} args - Group by arguments.
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
      T extends ventas_boletosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ventas_boletosGroupByArgs['orderBy'] }
        : { orderBy?: ventas_boletosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ventas_boletosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentas_boletosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ventas_boletos model
   */
  readonly fields: ventas_boletosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ventas_boletos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ventas_boletosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends eventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventosDefaultArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ventas_boletos model
   */
  interface ventas_boletosFieldRefs {
    readonly id_venta_boleto: FieldRef<"ventas_boletos", 'Int'>
    readonly id_evento: FieldRef<"ventas_boletos", 'Int'>
    readonly id_usuario: FieldRef<"ventas_boletos", 'Int'>
    readonly cantidad_boletos: FieldRef<"ventas_boletos", 'Int'>
    readonly total_venta: FieldRef<"ventas_boletos", 'Decimal'>
    readonly metodo_pago: FieldRef<"ventas_boletos", 'String'>
    readonly estado_venta_boleto: FieldRef<"ventas_boletos", 'Int'>
    readonly fecha_creacion_venta_boleto: FieldRef<"ventas_boletos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ventas_boletos findUnique
   */
  export type ventas_boletosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
    /**
     * Filter, which ventas_boletos to fetch.
     */
    where: ventas_boletosWhereUniqueInput
  }

  /**
   * ventas_boletos findUniqueOrThrow
   */
  export type ventas_boletosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
    /**
     * Filter, which ventas_boletos to fetch.
     */
    where: ventas_boletosWhereUniqueInput
  }

  /**
   * ventas_boletos findFirst
   */
  export type ventas_boletosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
    /**
     * Filter, which ventas_boletos to fetch.
     */
    where?: ventas_boletosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas_boletos to fetch.
     */
    orderBy?: ventas_boletosOrderByWithRelationInput | ventas_boletosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ventas_boletos.
     */
    cursor?: ventas_boletosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas_boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas_boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ventas_boletos.
     */
    distinct?: Ventas_boletosScalarFieldEnum | Ventas_boletosScalarFieldEnum[]
  }

  /**
   * ventas_boletos findFirstOrThrow
   */
  export type ventas_boletosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
    /**
     * Filter, which ventas_boletos to fetch.
     */
    where?: ventas_boletosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas_boletos to fetch.
     */
    orderBy?: ventas_boletosOrderByWithRelationInput | ventas_boletosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ventas_boletos.
     */
    cursor?: ventas_boletosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas_boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas_boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ventas_boletos.
     */
    distinct?: Ventas_boletosScalarFieldEnum | Ventas_boletosScalarFieldEnum[]
  }

  /**
   * ventas_boletos findMany
   */
  export type ventas_boletosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
    /**
     * Filter, which ventas_boletos to fetch.
     */
    where?: ventas_boletosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas_boletos to fetch.
     */
    orderBy?: ventas_boletosOrderByWithRelationInput | ventas_boletosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ventas_boletos.
     */
    cursor?: ventas_boletosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas_boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas_boletos.
     */
    skip?: number
    distinct?: Ventas_boletosScalarFieldEnum | Ventas_boletosScalarFieldEnum[]
  }

  /**
   * ventas_boletos create
   */
  export type ventas_boletosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
    /**
     * The data needed to create a ventas_boletos.
     */
    data: XOR<ventas_boletosCreateInput, ventas_boletosUncheckedCreateInput>
  }

  /**
   * ventas_boletos createMany
   */
  export type ventas_boletosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ventas_boletos.
     */
    data: ventas_boletosCreateManyInput | ventas_boletosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ventas_boletos update
   */
  export type ventas_boletosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
    /**
     * The data needed to update a ventas_boletos.
     */
    data: XOR<ventas_boletosUpdateInput, ventas_boletosUncheckedUpdateInput>
    /**
     * Choose, which ventas_boletos to update.
     */
    where: ventas_boletosWhereUniqueInput
  }

  /**
   * ventas_boletos updateMany
   */
  export type ventas_boletosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ventas_boletos.
     */
    data: XOR<ventas_boletosUpdateManyMutationInput, ventas_boletosUncheckedUpdateManyInput>
    /**
     * Filter which ventas_boletos to update
     */
    where?: ventas_boletosWhereInput
    /**
     * Limit how many ventas_boletos to update.
     */
    limit?: number
  }

  /**
   * ventas_boletos upsert
   */
  export type ventas_boletosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
    /**
     * The filter to search for the ventas_boletos to update in case it exists.
     */
    where: ventas_boletosWhereUniqueInput
    /**
     * In case the ventas_boletos found by the `where` argument doesn't exist, create a new ventas_boletos with this data.
     */
    create: XOR<ventas_boletosCreateInput, ventas_boletosUncheckedCreateInput>
    /**
     * In case the ventas_boletos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ventas_boletosUpdateInput, ventas_boletosUncheckedUpdateInput>
  }

  /**
   * ventas_boletos delete
   */
  export type ventas_boletosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
    /**
     * Filter which ventas_boletos to delete.
     */
    where: ventas_boletosWhereUniqueInput
  }

  /**
   * ventas_boletos deleteMany
   */
  export type ventas_boletosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ventas_boletos to delete
     */
    where?: ventas_boletosWhereInput
    /**
     * Limit how many ventas_boletos to delete.
     */
    limit?: number
  }

  /**
   * ventas_boletos without action
   */
  export type ventas_boletosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas_boletos
     */
    select?: ventas_boletosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ventas_boletos
     */
    omit?: ventas_boletosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventas_boletosInclude<ExtArgs> | null
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


  export const ArtistasScalarFieldEnum: {
    id_artista: 'id_artista',
    nombre_artista: 'nombre_artista',
    tipo_arte_artista: 'tipo_arte_artista',
    biografia_artista: 'biografia_artista',
    email_artista: 'email_artista',
    contra_artista: 'contra_artista',
    telefono_artista: 'telefono_artista',
    estado_artista: 'estado_artista',
    fecha_creacion_artista: 'fecha_creacion_artista'
  };

  export type ArtistasScalarFieldEnum = (typeof ArtistasScalarFieldEnum)[keyof typeof ArtistasScalarFieldEnum]


  export const Artistas_eventosScalarFieldEnum: {
    id_artista_evento: 'id_artista_evento',
    id_evento: 'id_evento',
    id_artista: 'id_artista',
    rol_artista_evento: 'rol_artista_evento',
    estado_artista_evento: 'estado_artista_evento',
    fecha_creacion_artista_evento: 'fecha_creacion_artista_evento'
  };

  export type Artistas_eventosScalarFieldEnum = (typeof Artistas_eventosScalarFieldEnum)[keyof typeof Artistas_eventosScalarFieldEnum]


  export const EventosScalarFieldEnum: {
    id_evento: 'id_evento',
    nombre_evento: 'nombre_evento',
    fecha_inicio_evento: 'fecha_inicio_evento',
    fecha_fin_evento: 'fecha_fin_evento',
    precio_entrada_evento: 'precio_entrada_evento',
    entradas_vendidas_evento: 'entradas_vendidas_evento',
    id_lugar: 'id_lugar',
    estado_evento: 'estado_evento',
    fecha_creacion_evento: 'fecha_creacion_evento'
  };

  export type EventosScalarFieldEnum = (typeof EventosScalarFieldEnum)[keyof typeof EventosScalarFieldEnum]


  export const LugaresScalarFieldEnum: {
    id_lugar: 'id_lugar',
    nombre_lugar: 'nombre_lugar',
    tipo_lugar: 'tipo_lugar',
    direccion_lugar: 'direccion_lugar',
    contacto_nombre_lugar: 'contacto_nombre_lugar',
    contacto_telefono_lugar: 'contacto_telefono_lugar',
    contacto_email_lugar: 'contacto_email_lugar',
    equipamiento_lugar: 'equipamiento_lugar',
    capacidad_maxima_lugar: 'capacidad_maxima_lugar',
    estado_lugar: 'estado_lugar',
    fecha_creacion_lugar: 'fecha_creacion_lugar'
  };

  export type LugaresScalarFieldEnum = (typeof LugaresScalarFieldEnum)[keyof typeof LugaresScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre_usuario: 'nombre_usuario',
    email_usuario: 'email_usuario',
    password_usuario: 'password_usuario',
    rol_usuario: 'rol_usuario',
    estado_usuario: 'estado_usuario',
    fecha_creacion_usuario: 'fecha_creacion_usuario'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const Ventas_boletosScalarFieldEnum: {
    id_venta_boleto: 'id_venta_boleto',
    id_evento: 'id_evento',
    id_usuario: 'id_usuario',
    cantidad_boletos: 'cantidad_boletos',
    total_venta: 'total_venta',
    metodo_pago: 'metodo_pago',
    estado_venta_boleto: 'estado_venta_boleto',
    fecha_creacion_venta_boleto: 'fecha_creacion_venta_boleto'
  };

  export type Ventas_boletosScalarFieldEnum = (typeof Ventas_boletosScalarFieldEnum)[keyof typeof Ventas_boletosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const artistasOrderByRelevanceFieldEnum: {
    nombre_artista: 'nombre_artista',
    tipo_arte_artista: 'tipo_arte_artista',
    biografia_artista: 'biografia_artista',
    email_artista: 'email_artista',
    contra_artista: 'contra_artista',
    telefono_artista: 'telefono_artista'
  };

  export type artistasOrderByRelevanceFieldEnum = (typeof artistasOrderByRelevanceFieldEnum)[keyof typeof artistasOrderByRelevanceFieldEnum]


  export const artistas_eventosOrderByRelevanceFieldEnum: {
    rol_artista_evento: 'rol_artista_evento'
  };

  export type artistas_eventosOrderByRelevanceFieldEnum = (typeof artistas_eventosOrderByRelevanceFieldEnum)[keyof typeof artistas_eventosOrderByRelevanceFieldEnum]


  export const eventosOrderByRelevanceFieldEnum: {
    nombre_evento: 'nombre_evento'
  };

  export type eventosOrderByRelevanceFieldEnum = (typeof eventosOrderByRelevanceFieldEnum)[keyof typeof eventosOrderByRelevanceFieldEnum]


  export const lugaresOrderByRelevanceFieldEnum: {
    nombre_lugar: 'nombre_lugar',
    tipo_lugar: 'tipo_lugar',
    direccion_lugar: 'direccion_lugar',
    contacto_nombre_lugar: 'contacto_nombre_lugar',
    contacto_telefono_lugar: 'contacto_telefono_lugar',
    contacto_email_lugar: 'contacto_email_lugar',
    equipamiento_lugar: 'equipamiento_lugar'
  };

  export type lugaresOrderByRelevanceFieldEnum = (typeof lugaresOrderByRelevanceFieldEnum)[keyof typeof lugaresOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    nombre_usuario: 'nombre_usuario',
    email_usuario: 'email_usuario',
    password_usuario: 'password_usuario'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  export const ventas_boletosOrderByRelevanceFieldEnum: {
    metodo_pago: 'metodo_pago'
  };

  export type ventas_boletosOrderByRelevanceFieldEnum = (typeof ventas_boletosOrderByRelevanceFieldEnum)[keyof typeof ventas_boletosOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'usuarios_rol_usuario'
   */
  export type Enumusuarios_rol_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'usuarios_rol_usuario'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type artistasWhereInput = {
    AND?: artistasWhereInput | artistasWhereInput[]
    OR?: artistasWhereInput[]
    NOT?: artistasWhereInput | artistasWhereInput[]
    id_artista?: IntFilter<"artistas"> | number
    nombre_artista?: StringFilter<"artistas"> | string
    tipo_arte_artista?: StringNullableFilter<"artistas"> | string | null
    biografia_artista?: StringNullableFilter<"artistas"> | string | null
    email_artista?: StringNullableFilter<"artistas"> | string | null
    contra_artista?: StringNullableFilter<"artistas"> | string | null
    telefono_artista?: StringNullableFilter<"artistas"> | string | null
    estado_artista?: IntNullableFilter<"artistas"> | number | null
    fecha_creacion_artista?: DateTimeNullableFilter<"artistas"> | Date | string | null
    artistas_eventos?: Artistas_eventosListRelationFilter
  }

  export type artistasOrderByWithRelationInput = {
    id_artista?: SortOrder
    nombre_artista?: SortOrder
    tipo_arte_artista?: SortOrderInput | SortOrder
    biografia_artista?: SortOrderInput | SortOrder
    email_artista?: SortOrderInput | SortOrder
    contra_artista?: SortOrderInput | SortOrder
    telefono_artista?: SortOrderInput | SortOrder
    estado_artista?: SortOrderInput | SortOrder
    fecha_creacion_artista?: SortOrderInput | SortOrder
    artistas_eventos?: artistas_eventosOrderByRelationAggregateInput
    _relevance?: artistasOrderByRelevanceInput
  }

  export type artistasWhereUniqueInput = Prisma.AtLeast<{
    id_artista?: number
    email_artista?: string
    AND?: artistasWhereInput | artistasWhereInput[]
    OR?: artistasWhereInput[]
    NOT?: artistasWhereInput | artistasWhereInput[]
    nombre_artista?: StringFilter<"artistas"> | string
    tipo_arte_artista?: StringNullableFilter<"artistas"> | string | null
    biografia_artista?: StringNullableFilter<"artistas"> | string | null
    contra_artista?: StringNullableFilter<"artistas"> | string | null
    telefono_artista?: StringNullableFilter<"artistas"> | string | null
    estado_artista?: IntNullableFilter<"artistas"> | number | null
    fecha_creacion_artista?: DateTimeNullableFilter<"artistas"> | Date | string | null
    artistas_eventos?: Artistas_eventosListRelationFilter
  }, "id_artista" | "email_artista">

  export type artistasOrderByWithAggregationInput = {
    id_artista?: SortOrder
    nombre_artista?: SortOrder
    tipo_arte_artista?: SortOrderInput | SortOrder
    biografia_artista?: SortOrderInput | SortOrder
    email_artista?: SortOrderInput | SortOrder
    contra_artista?: SortOrderInput | SortOrder
    telefono_artista?: SortOrderInput | SortOrder
    estado_artista?: SortOrderInput | SortOrder
    fecha_creacion_artista?: SortOrderInput | SortOrder
    _count?: artistasCountOrderByAggregateInput
    _avg?: artistasAvgOrderByAggregateInput
    _max?: artistasMaxOrderByAggregateInput
    _min?: artistasMinOrderByAggregateInput
    _sum?: artistasSumOrderByAggregateInput
  }

  export type artistasScalarWhereWithAggregatesInput = {
    AND?: artistasScalarWhereWithAggregatesInput | artistasScalarWhereWithAggregatesInput[]
    OR?: artistasScalarWhereWithAggregatesInput[]
    NOT?: artistasScalarWhereWithAggregatesInput | artistasScalarWhereWithAggregatesInput[]
    id_artista?: IntWithAggregatesFilter<"artistas"> | number
    nombre_artista?: StringWithAggregatesFilter<"artistas"> | string
    tipo_arte_artista?: StringNullableWithAggregatesFilter<"artistas"> | string | null
    biografia_artista?: StringNullableWithAggregatesFilter<"artistas"> | string | null
    email_artista?: StringNullableWithAggregatesFilter<"artistas"> | string | null
    contra_artista?: StringNullableWithAggregatesFilter<"artistas"> | string | null
    telefono_artista?: StringNullableWithAggregatesFilter<"artistas"> | string | null
    estado_artista?: IntNullableWithAggregatesFilter<"artistas"> | number | null
    fecha_creacion_artista?: DateTimeNullableWithAggregatesFilter<"artistas"> | Date | string | null
  }

  export type artistas_eventosWhereInput = {
    AND?: artistas_eventosWhereInput | artistas_eventosWhereInput[]
    OR?: artistas_eventosWhereInput[]
    NOT?: artistas_eventosWhereInput | artistas_eventosWhereInput[]
    id_artista_evento?: IntFilter<"artistas_eventos"> | number
    id_evento?: IntFilter<"artistas_eventos"> | number
    id_artista?: IntFilter<"artistas_eventos"> | number
    rol_artista_evento?: StringNullableFilter<"artistas_eventos"> | string | null
    estado_artista_evento?: IntNullableFilter<"artistas_eventos"> | number | null
    fecha_creacion_artista_evento?: DateTimeNullableFilter<"artistas_eventos"> | Date | string | null
    eventos?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    artistas?: XOR<ArtistasScalarRelationFilter, artistasWhereInput>
  }

  export type artistas_eventosOrderByWithRelationInput = {
    id_artista_evento?: SortOrder
    id_evento?: SortOrder
    id_artista?: SortOrder
    rol_artista_evento?: SortOrderInput | SortOrder
    estado_artista_evento?: SortOrderInput | SortOrder
    fecha_creacion_artista_evento?: SortOrderInput | SortOrder
    eventos?: eventosOrderByWithRelationInput
    artistas?: artistasOrderByWithRelationInput
    _relevance?: artistas_eventosOrderByRelevanceInput
  }

  export type artistas_eventosWhereUniqueInput = Prisma.AtLeast<{
    id_artista_evento?: number
    AND?: artistas_eventosWhereInput | artistas_eventosWhereInput[]
    OR?: artistas_eventosWhereInput[]
    NOT?: artistas_eventosWhereInput | artistas_eventosWhereInput[]
    id_evento?: IntFilter<"artistas_eventos"> | number
    id_artista?: IntFilter<"artistas_eventos"> | number
    rol_artista_evento?: StringNullableFilter<"artistas_eventos"> | string | null
    estado_artista_evento?: IntNullableFilter<"artistas_eventos"> | number | null
    fecha_creacion_artista_evento?: DateTimeNullableFilter<"artistas_eventos"> | Date | string | null
    eventos?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    artistas?: XOR<ArtistasScalarRelationFilter, artistasWhereInput>
  }, "id_artista_evento">

  export type artistas_eventosOrderByWithAggregationInput = {
    id_artista_evento?: SortOrder
    id_evento?: SortOrder
    id_artista?: SortOrder
    rol_artista_evento?: SortOrderInput | SortOrder
    estado_artista_evento?: SortOrderInput | SortOrder
    fecha_creacion_artista_evento?: SortOrderInput | SortOrder
    _count?: artistas_eventosCountOrderByAggregateInput
    _avg?: artistas_eventosAvgOrderByAggregateInput
    _max?: artistas_eventosMaxOrderByAggregateInput
    _min?: artistas_eventosMinOrderByAggregateInput
    _sum?: artistas_eventosSumOrderByAggregateInput
  }

  export type artistas_eventosScalarWhereWithAggregatesInput = {
    AND?: artistas_eventosScalarWhereWithAggregatesInput | artistas_eventosScalarWhereWithAggregatesInput[]
    OR?: artistas_eventosScalarWhereWithAggregatesInput[]
    NOT?: artistas_eventosScalarWhereWithAggregatesInput | artistas_eventosScalarWhereWithAggregatesInput[]
    id_artista_evento?: IntWithAggregatesFilter<"artistas_eventos"> | number
    id_evento?: IntWithAggregatesFilter<"artistas_eventos"> | number
    id_artista?: IntWithAggregatesFilter<"artistas_eventos"> | number
    rol_artista_evento?: StringNullableWithAggregatesFilter<"artistas_eventos"> | string | null
    estado_artista_evento?: IntNullableWithAggregatesFilter<"artistas_eventos"> | number | null
    fecha_creacion_artista_evento?: DateTimeNullableWithAggregatesFilter<"artistas_eventos"> | Date | string | null
  }

  export type eventosWhereInput = {
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    id_evento?: IntFilter<"eventos"> | number
    nombre_evento?: StringFilter<"eventos"> | string
    fecha_inicio_evento?: DateTimeFilter<"eventos"> | Date | string
    fecha_fin_evento?: DateTimeFilter<"eventos"> | Date | string
    precio_entrada_evento?: DecimalNullableFilter<"eventos"> | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: IntNullableFilter<"eventos"> | number | null
    id_lugar?: IntNullableFilter<"eventos"> | number | null
    estado_evento?: IntNullableFilter<"eventos"> | number | null
    fecha_creacion_evento?: DateTimeNullableFilter<"eventos"> | Date | string | null
    artistas_eventos?: Artistas_eventosListRelationFilter
    lugares?: XOR<LugaresNullableScalarRelationFilter, lugaresWhereInput> | null
    ventas_boletos?: Ventas_boletosListRelationFilter
  }

  export type eventosOrderByWithRelationInput = {
    id_evento?: SortOrder
    nombre_evento?: SortOrder
    fecha_inicio_evento?: SortOrder
    fecha_fin_evento?: SortOrder
    precio_entrada_evento?: SortOrderInput | SortOrder
    entradas_vendidas_evento?: SortOrderInput | SortOrder
    id_lugar?: SortOrderInput | SortOrder
    estado_evento?: SortOrderInput | SortOrder
    fecha_creacion_evento?: SortOrderInput | SortOrder
    artistas_eventos?: artistas_eventosOrderByRelationAggregateInput
    lugares?: lugaresOrderByWithRelationInput
    ventas_boletos?: ventas_boletosOrderByRelationAggregateInput
    _relevance?: eventosOrderByRelevanceInput
  }

  export type eventosWhereUniqueInput = Prisma.AtLeast<{
    id_evento?: number
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    nombre_evento?: StringFilter<"eventos"> | string
    fecha_inicio_evento?: DateTimeFilter<"eventos"> | Date | string
    fecha_fin_evento?: DateTimeFilter<"eventos"> | Date | string
    precio_entrada_evento?: DecimalNullableFilter<"eventos"> | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: IntNullableFilter<"eventos"> | number | null
    id_lugar?: IntNullableFilter<"eventos"> | number | null
    estado_evento?: IntNullableFilter<"eventos"> | number | null
    fecha_creacion_evento?: DateTimeNullableFilter<"eventos"> | Date | string | null
    artistas_eventos?: Artistas_eventosListRelationFilter
    lugares?: XOR<LugaresNullableScalarRelationFilter, lugaresWhereInput> | null
    ventas_boletos?: Ventas_boletosListRelationFilter
  }, "id_evento">

  export type eventosOrderByWithAggregationInput = {
    id_evento?: SortOrder
    nombre_evento?: SortOrder
    fecha_inicio_evento?: SortOrder
    fecha_fin_evento?: SortOrder
    precio_entrada_evento?: SortOrderInput | SortOrder
    entradas_vendidas_evento?: SortOrderInput | SortOrder
    id_lugar?: SortOrderInput | SortOrder
    estado_evento?: SortOrderInput | SortOrder
    fecha_creacion_evento?: SortOrderInput | SortOrder
    _count?: eventosCountOrderByAggregateInput
    _avg?: eventosAvgOrderByAggregateInput
    _max?: eventosMaxOrderByAggregateInput
    _min?: eventosMinOrderByAggregateInput
    _sum?: eventosSumOrderByAggregateInput
  }

  export type eventosScalarWhereWithAggregatesInput = {
    AND?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    OR?: eventosScalarWhereWithAggregatesInput[]
    NOT?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    id_evento?: IntWithAggregatesFilter<"eventos"> | number
    nombre_evento?: StringWithAggregatesFilter<"eventos"> | string
    fecha_inicio_evento?: DateTimeWithAggregatesFilter<"eventos"> | Date | string
    fecha_fin_evento?: DateTimeWithAggregatesFilter<"eventos"> | Date | string
    precio_entrada_evento?: DecimalNullableWithAggregatesFilter<"eventos"> | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: IntNullableWithAggregatesFilter<"eventos"> | number | null
    id_lugar?: IntNullableWithAggregatesFilter<"eventos"> | number | null
    estado_evento?: IntNullableWithAggregatesFilter<"eventos"> | number | null
    fecha_creacion_evento?: DateTimeNullableWithAggregatesFilter<"eventos"> | Date | string | null
  }

  export type lugaresWhereInput = {
    AND?: lugaresWhereInput | lugaresWhereInput[]
    OR?: lugaresWhereInput[]
    NOT?: lugaresWhereInput | lugaresWhereInput[]
    id_lugar?: IntFilter<"lugares"> | number
    nombre_lugar?: StringFilter<"lugares"> | string
    tipo_lugar?: StringNullableFilter<"lugares"> | string | null
    direccion_lugar?: StringNullableFilter<"lugares"> | string | null
    contacto_nombre_lugar?: StringNullableFilter<"lugares"> | string | null
    contacto_telefono_lugar?: StringNullableFilter<"lugares"> | string | null
    contacto_email_lugar?: StringNullableFilter<"lugares"> | string | null
    equipamiento_lugar?: StringNullableFilter<"lugares"> | string | null
    capacidad_maxima_lugar?: IntNullableFilter<"lugares"> | number | null
    estado_lugar?: IntNullableFilter<"lugares"> | number | null
    fecha_creacion_lugar?: DateTimeNullableFilter<"lugares"> | Date | string | null
    eventos?: EventosListRelationFilter
  }

  export type lugaresOrderByWithRelationInput = {
    id_lugar?: SortOrder
    nombre_lugar?: SortOrder
    tipo_lugar?: SortOrderInput | SortOrder
    direccion_lugar?: SortOrderInput | SortOrder
    contacto_nombre_lugar?: SortOrderInput | SortOrder
    contacto_telefono_lugar?: SortOrderInput | SortOrder
    contacto_email_lugar?: SortOrderInput | SortOrder
    equipamiento_lugar?: SortOrderInput | SortOrder
    capacidad_maxima_lugar?: SortOrderInput | SortOrder
    estado_lugar?: SortOrderInput | SortOrder
    fecha_creacion_lugar?: SortOrderInput | SortOrder
    eventos?: eventosOrderByRelationAggregateInput
    _relevance?: lugaresOrderByRelevanceInput
  }

  export type lugaresWhereUniqueInput = Prisma.AtLeast<{
    id_lugar?: number
    AND?: lugaresWhereInput | lugaresWhereInput[]
    OR?: lugaresWhereInput[]
    NOT?: lugaresWhereInput | lugaresWhereInput[]
    nombre_lugar?: StringFilter<"lugares"> | string
    tipo_lugar?: StringNullableFilter<"lugares"> | string | null
    direccion_lugar?: StringNullableFilter<"lugares"> | string | null
    contacto_nombre_lugar?: StringNullableFilter<"lugares"> | string | null
    contacto_telefono_lugar?: StringNullableFilter<"lugares"> | string | null
    contacto_email_lugar?: StringNullableFilter<"lugares"> | string | null
    equipamiento_lugar?: StringNullableFilter<"lugares"> | string | null
    capacidad_maxima_lugar?: IntNullableFilter<"lugares"> | number | null
    estado_lugar?: IntNullableFilter<"lugares"> | number | null
    fecha_creacion_lugar?: DateTimeNullableFilter<"lugares"> | Date | string | null
    eventos?: EventosListRelationFilter
  }, "id_lugar">

  export type lugaresOrderByWithAggregationInput = {
    id_lugar?: SortOrder
    nombre_lugar?: SortOrder
    tipo_lugar?: SortOrderInput | SortOrder
    direccion_lugar?: SortOrderInput | SortOrder
    contacto_nombre_lugar?: SortOrderInput | SortOrder
    contacto_telefono_lugar?: SortOrderInput | SortOrder
    contacto_email_lugar?: SortOrderInput | SortOrder
    equipamiento_lugar?: SortOrderInput | SortOrder
    capacidad_maxima_lugar?: SortOrderInput | SortOrder
    estado_lugar?: SortOrderInput | SortOrder
    fecha_creacion_lugar?: SortOrderInput | SortOrder
    _count?: lugaresCountOrderByAggregateInput
    _avg?: lugaresAvgOrderByAggregateInput
    _max?: lugaresMaxOrderByAggregateInput
    _min?: lugaresMinOrderByAggregateInput
    _sum?: lugaresSumOrderByAggregateInput
  }

  export type lugaresScalarWhereWithAggregatesInput = {
    AND?: lugaresScalarWhereWithAggregatesInput | lugaresScalarWhereWithAggregatesInput[]
    OR?: lugaresScalarWhereWithAggregatesInput[]
    NOT?: lugaresScalarWhereWithAggregatesInput | lugaresScalarWhereWithAggregatesInput[]
    id_lugar?: IntWithAggregatesFilter<"lugares"> | number
    nombre_lugar?: StringWithAggregatesFilter<"lugares"> | string
    tipo_lugar?: StringNullableWithAggregatesFilter<"lugares"> | string | null
    direccion_lugar?: StringNullableWithAggregatesFilter<"lugares"> | string | null
    contacto_nombre_lugar?: StringNullableWithAggregatesFilter<"lugares"> | string | null
    contacto_telefono_lugar?: StringNullableWithAggregatesFilter<"lugares"> | string | null
    contacto_email_lugar?: StringNullableWithAggregatesFilter<"lugares"> | string | null
    equipamiento_lugar?: StringNullableWithAggregatesFilter<"lugares"> | string | null
    capacidad_maxima_lugar?: IntNullableWithAggregatesFilter<"lugares"> | number | null
    estado_lugar?: IntNullableWithAggregatesFilter<"lugares"> | number | null
    fecha_creacion_lugar?: DateTimeNullableWithAggregatesFilter<"lugares"> | Date | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    nombre_usuario?: StringFilter<"usuarios"> | string
    email_usuario?: StringFilter<"usuarios"> | string
    password_usuario?: StringFilter<"usuarios"> | string
    rol_usuario?: Enumusuarios_rol_usuarioFilter<"usuarios"> | $Enums.usuarios_rol_usuario
    estado_usuario?: IntNullableFilter<"usuarios"> | number | null
    fecha_creacion_usuario?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    ventas_boletos?: Ventas_boletosListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    email_usuario?: SortOrder
    password_usuario?: SortOrder
    rol_usuario?: SortOrder
    estado_usuario?: SortOrderInput | SortOrder
    fecha_creacion_usuario?: SortOrderInput | SortOrder
    ventas_boletos?: ventas_boletosOrderByRelationAggregateInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email_usuario?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre_usuario?: StringFilter<"usuarios"> | string
    password_usuario?: StringFilter<"usuarios"> | string
    rol_usuario?: Enumusuarios_rol_usuarioFilter<"usuarios"> | $Enums.usuarios_rol_usuario
    estado_usuario?: IntNullableFilter<"usuarios"> | number | null
    fecha_creacion_usuario?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    ventas_boletos?: Ventas_boletosListRelationFilter
  }, "id_usuario" | "email_usuario">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    email_usuario?: SortOrder
    password_usuario?: SortOrder
    rol_usuario?: SortOrder
    estado_usuario?: SortOrderInput | SortOrder
    fecha_creacion_usuario?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    nombre_usuario?: StringWithAggregatesFilter<"usuarios"> | string
    email_usuario?: StringWithAggregatesFilter<"usuarios"> | string
    password_usuario?: StringWithAggregatesFilter<"usuarios"> | string
    rol_usuario?: Enumusuarios_rol_usuarioWithAggregatesFilter<"usuarios"> | $Enums.usuarios_rol_usuario
    estado_usuario?: IntNullableWithAggregatesFilter<"usuarios"> | number | null
    fecha_creacion_usuario?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
  }

  export type ventas_boletosWhereInput = {
    AND?: ventas_boletosWhereInput | ventas_boletosWhereInput[]
    OR?: ventas_boletosWhereInput[]
    NOT?: ventas_boletosWhereInput | ventas_boletosWhereInput[]
    id_venta_boleto?: IntFilter<"ventas_boletos"> | number
    id_evento?: IntFilter<"ventas_boletos"> | number
    id_usuario?: IntFilter<"ventas_boletos"> | number
    cantidad_boletos?: IntFilter<"ventas_boletos"> | number
    total_venta?: DecimalFilter<"ventas_boletos"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringNullableFilter<"ventas_boletos"> | string | null
    estado_venta_boleto?: IntNullableFilter<"ventas_boletos"> | number | null
    fecha_creacion_venta_boleto?: DateTimeNullableFilter<"ventas_boletos"> | Date | string | null
    eventos?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type ventas_boletosOrderByWithRelationInput = {
    id_venta_boleto?: SortOrder
    id_evento?: SortOrder
    id_usuario?: SortOrder
    cantidad_boletos?: SortOrder
    total_venta?: SortOrder
    metodo_pago?: SortOrderInput | SortOrder
    estado_venta_boleto?: SortOrderInput | SortOrder
    fecha_creacion_venta_boleto?: SortOrderInput | SortOrder
    eventos?: eventosOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
    _relevance?: ventas_boletosOrderByRelevanceInput
  }

  export type ventas_boletosWhereUniqueInput = Prisma.AtLeast<{
    id_venta_boleto?: number
    AND?: ventas_boletosWhereInput | ventas_boletosWhereInput[]
    OR?: ventas_boletosWhereInput[]
    NOT?: ventas_boletosWhereInput | ventas_boletosWhereInput[]
    id_evento?: IntFilter<"ventas_boletos"> | number
    id_usuario?: IntFilter<"ventas_boletos"> | number
    cantidad_boletos?: IntFilter<"ventas_boletos"> | number
    total_venta?: DecimalFilter<"ventas_boletos"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringNullableFilter<"ventas_boletos"> | string | null
    estado_venta_boleto?: IntNullableFilter<"ventas_boletos"> | number | null
    fecha_creacion_venta_boleto?: DateTimeNullableFilter<"ventas_boletos"> | Date | string | null
    eventos?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_venta_boleto">

  export type ventas_boletosOrderByWithAggregationInput = {
    id_venta_boleto?: SortOrder
    id_evento?: SortOrder
    id_usuario?: SortOrder
    cantidad_boletos?: SortOrder
    total_venta?: SortOrder
    metodo_pago?: SortOrderInput | SortOrder
    estado_venta_boleto?: SortOrderInput | SortOrder
    fecha_creacion_venta_boleto?: SortOrderInput | SortOrder
    _count?: ventas_boletosCountOrderByAggregateInput
    _avg?: ventas_boletosAvgOrderByAggregateInput
    _max?: ventas_boletosMaxOrderByAggregateInput
    _min?: ventas_boletosMinOrderByAggregateInput
    _sum?: ventas_boletosSumOrderByAggregateInput
  }

  export type ventas_boletosScalarWhereWithAggregatesInput = {
    AND?: ventas_boletosScalarWhereWithAggregatesInput | ventas_boletosScalarWhereWithAggregatesInput[]
    OR?: ventas_boletosScalarWhereWithAggregatesInput[]
    NOT?: ventas_boletosScalarWhereWithAggregatesInput | ventas_boletosScalarWhereWithAggregatesInput[]
    id_venta_boleto?: IntWithAggregatesFilter<"ventas_boletos"> | number
    id_evento?: IntWithAggregatesFilter<"ventas_boletos"> | number
    id_usuario?: IntWithAggregatesFilter<"ventas_boletos"> | number
    cantidad_boletos?: IntWithAggregatesFilter<"ventas_boletos"> | number
    total_venta?: DecimalWithAggregatesFilter<"ventas_boletos"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringNullableWithAggregatesFilter<"ventas_boletos"> | string | null
    estado_venta_boleto?: IntNullableWithAggregatesFilter<"ventas_boletos"> | number | null
    fecha_creacion_venta_boleto?: DateTimeNullableWithAggregatesFilter<"ventas_boletos"> | Date | string | null
  }

  export type artistasCreateInput = {
    nombre_artista: string
    tipo_arte_artista?: string | null
    biografia_artista?: string | null
    email_artista?: string | null
    contra_artista?: string | null
    telefono_artista?: string | null
    estado_artista?: number | null
    fecha_creacion_artista?: Date | string | null
    artistas_eventos?: artistas_eventosCreateNestedManyWithoutArtistasInput
  }

  export type artistasUncheckedCreateInput = {
    id_artista?: number
    nombre_artista: string
    tipo_arte_artista?: string | null
    biografia_artista?: string | null
    email_artista?: string | null
    contra_artista?: string | null
    telefono_artista?: string | null
    estado_artista?: number | null
    fecha_creacion_artista?: Date | string | null
    artistas_eventos?: artistas_eventosUncheckedCreateNestedManyWithoutArtistasInput
  }

  export type artistasUpdateInput = {
    nombre_artista?: StringFieldUpdateOperationsInput | string
    tipo_arte_artista?: NullableStringFieldUpdateOperationsInput | string | null
    biografia_artista?: NullableStringFieldUpdateOperationsInput | string | null
    email_artista?: NullableStringFieldUpdateOperationsInput | string | null
    contra_artista?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_artista?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artistas_eventos?: artistas_eventosUpdateManyWithoutArtistasNestedInput
  }

  export type artistasUncheckedUpdateInput = {
    id_artista?: IntFieldUpdateOperationsInput | number
    nombre_artista?: StringFieldUpdateOperationsInput | string
    tipo_arte_artista?: NullableStringFieldUpdateOperationsInput | string | null
    biografia_artista?: NullableStringFieldUpdateOperationsInput | string | null
    email_artista?: NullableStringFieldUpdateOperationsInput | string | null
    contra_artista?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_artista?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artistas_eventos?: artistas_eventosUncheckedUpdateManyWithoutArtistasNestedInput
  }

  export type artistasCreateManyInput = {
    id_artista?: number
    nombre_artista: string
    tipo_arte_artista?: string | null
    biografia_artista?: string | null
    email_artista?: string | null
    contra_artista?: string | null
    telefono_artista?: string | null
    estado_artista?: number | null
    fecha_creacion_artista?: Date | string | null
  }

  export type artistasUpdateManyMutationInput = {
    nombre_artista?: StringFieldUpdateOperationsInput | string
    tipo_arte_artista?: NullableStringFieldUpdateOperationsInput | string | null
    biografia_artista?: NullableStringFieldUpdateOperationsInput | string | null
    email_artista?: NullableStringFieldUpdateOperationsInput | string | null
    contra_artista?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_artista?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artistasUncheckedUpdateManyInput = {
    id_artista?: IntFieldUpdateOperationsInput | number
    nombre_artista?: StringFieldUpdateOperationsInput | string
    tipo_arte_artista?: NullableStringFieldUpdateOperationsInput | string | null
    biografia_artista?: NullableStringFieldUpdateOperationsInput | string | null
    email_artista?: NullableStringFieldUpdateOperationsInput | string | null
    contra_artista?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_artista?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artistas_eventosCreateInput = {
    rol_artista_evento?: string | null
    estado_artista_evento?: number | null
    fecha_creacion_artista_evento?: Date | string | null
    eventos: eventosCreateNestedOneWithoutArtistas_eventosInput
    artistas: artistasCreateNestedOneWithoutArtistas_eventosInput
  }

  export type artistas_eventosUncheckedCreateInput = {
    id_artista_evento?: number
    id_evento: number
    id_artista: number
    rol_artista_evento?: string | null
    estado_artista_evento?: number | null
    fecha_creacion_artista_evento?: Date | string | null
  }

  export type artistas_eventosUpdateInput = {
    rol_artista_evento?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventos?: eventosUpdateOneRequiredWithoutArtistas_eventosNestedInput
    artistas?: artistasUpdateOneRequiredWithoutArtistas_eventosNestedInput
  }

  export type artistas_eventosUncheckedUpdateInput = {
    id_artista_evento?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    id_artista?: IntFieldUpdateOperationsInput | number
    rol_artista_evento?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artistas_eventosCreateManyInput = {
    id_artista_evento?: number
    id_evento: number
    id_artista: number
    rol_artista_evento?: string | null
    estado_artista_evento?: number | null
    fecha_creacion_artista_evento?: Date | string | null
  }

  export type artistas_eventosUpdateManyMutationInput = {
    rol_artista_evento?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artistas_eventosUncheckedUpdateManyInput = {
    id_artista_evento?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    id_artista?: IntFieldUpdateOperationsInput | number
    rol_artista_evento?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventosCreateInput = {
    nombre_evento: string
    fecha_inicio_evento: Date | string
    fecha_fin_evento: Date | string
    precio_entrada_evento?: Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: number | null
    estado_evento?: number | null
    fecha_creacion_evento?: Date | string | null
    artistas_eventos?: artistas_eventosCreateNestedManyWithoutEventosInput
    lugares?: lugaresCreateNestedOneWithoutEventosInput
    ventas_boletos?: ventas_boletosCreateNestedManyWithoutEventosInput
  }

  export type eventosUncheckedCreateInput = {
    id_evento?: number
    nombre_evento: string
    fecha_inicio_evento: Date | string
    fecha_fin_evento: Date | string
    precio_entrada_evento?: Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: number | null
    id_lugar?: number | null
    estado_evento?: number | null
    fecha_creacion_evento?: Date | string | null
    artistas_eventos?: artistas_eventosUncheckedCreateNestedManyWithoutEventosInput
    ventas_boletos?: ventas_boletosUncheckedCreateNestedManyWithoutEventosInput
  }

  export type eventosUpdateInput = {
    nombre_evento?: StringFieldUpdateOperationsInput | string
    fecha_inicio_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_entrada_evento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: NullableIntFieldUpdateOperationsInput | number | null
    estado_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artistas_eventos?: artistas_eventosUpdateManyWithoutEventosNestedInput
    lugares?: lugaresUpdateOneWithoutEventosNestedInput
    ventas_boletos?: ventas_boletosUpdateManyWithoutEventosNestedInput
  }

  export type eventosUncheckedUpdateInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    nombre_evento?: StringFieldUpdateOperationsInput | string
    fecha_inicio_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_entrada_evento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: NullableIntFieldUpdateOperationsInput | number | null
    id_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    estado_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artistas_eventos?: artistas_eventosUncheckedUpdateManyWithoutEventosNestedInput
    ventas_boletos?: ventas_boletosUncheckedUpdateManyWithoutEventosNestedInput
  }

  export type eventosCreateManyInput = {
    id_evento?: number
    nombre_evento: string
    fecha_inicio_evento: Date | string
    fecha_fin_evento: Date | string
    precio_entrada_evento?: Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: number | null
    id_lugar?: number | null
    estado_evento?: number | null
    fecha_creacion_evento?: Date | string | null
  }

  export type eventosUpdateManyMutationInput = {
    nombre_evento?: StringFieldUpdateOperationsInput | string
    fecha_inicio_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_entrada_evento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: NullableIntFieldUpdateOperationsInput | number | null
    estado_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventosUncheckedUpdateManyInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    nombre_evento?: StringFieldUpdateOperationsInput | string
    fecha_inicio_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_entrada_evento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: NullableIntFieldUpdateOperationsInput | number | null
    id_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    estado_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lugaresCreateInput = {
    nombre_lugar: string
    tipo_lugar?: string | null
    direccion_lugar?: string | null
    contacto_nombre_lugar?: string | null
    contacto_telefono_lugar?: string | null
    contacto_email_lugar?: string | null
    equipamiento_lugar?: string | null
    capacidad_maxima_lugar?: number | null
    estado_lugar?: number | null
    fecha_creacion_lugar?: Date | string | null
    eventos?: eventosCreateNestedManyWithoutLugaresInput
  }

  export type lugaresUncheckedCreateInput = {
    id_lugar?: number
    nombre_lugar: string
    tipo_lugar?: string | null
    direccion_lugar?: string | null
    contacto_nombre_lugar?: string | null
    contacto_telefono_lugar?: string | null
    contacto_email_lugar?: string | null
    equipamiento_lugar?: string | null
    capacidad_maxima_lugar?: number | null
    estado_lugar?: number | null
    fecha_creacion_lugar?: Date | string | null
    eventos?: eventosUncheckedCreateNestedManyWithoutLugaresInput
  }

  export type lugaresUpdateInput = {
    nombre_lugar?: StringFieldUpdateOperationsInput | string
    tipo_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_nombre_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_telefono_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_email_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    equipamiento_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad_maxima_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    estado_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_lugar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventos?: eventosUpdateManyWithoutLugaresNestedInput
  }

  export type lugaresUncheckedUpdateInput = {
    id_lugar?: IntFieldUpdateOperationsInput | number
    nombre_lugar?: StringFieldUpdateOperationsInput | string
    tipo_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_nombre_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_telefono_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_email_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    equipamiento_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad_maxima_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    estado_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_lugar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventos?: eventosUncheckedUpdateManyWithoutLugaresNestedInput
  }

  export type lugaresCreateManyInput = {
    id_lugar?: number
    nombre_lugar: string
    tipo_lugar?: string | null
    direccion_lugar?: string | null
    contacto_nombre_lugar?: string | null
    contacto_telefono_lugar?: string | null
    contacto_email_lugar?: string | null
    equipamiento_lugar?: string | null
    capacidad_maxima_lugar?: number | null
    estado_lugar?: number | null
    fecha_creacion_lugar?: Date | string | null
  }

  export type lugaresUpdateManyMutationInput = {
    nombre_lugar?: StringFieldUpdateOperationsInput | string
    tipo_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_nombre_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_telefono_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_email_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    equipamiento_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad_maxima_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    estado_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_lugar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lugaresUncheckedUpdateManyInput = {
    id_lugar?: IntFieldUpdateOperationsInput | number
    nombre_lugar?: StringFieldUpdateOperationsInput | string
    tipo_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_nombre_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_telefono_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_email_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    equipamiento_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad_maxima_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    estado_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_lugar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosCreateInput = {
    nombre_usuario: string
    email_usuario: string
    password_usuario: string
    rol_usuario: $Enums.usuarios_rol_usuario
    estado_usuario?: number | null
    fecha_creacion_usuario?: Date | string | null
    ventas_boletos?: ventas_boletosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    nombre_usuario: string
    email_usuario: string
    password_usuario: string
    rol_usuario: $Enums.usuarios_rol_usuario
    estado_usuario?: number | null
    fecha_creacion_usuario?: Date | string | null
    ventas_boletos?: ventas_boletosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    password_usuario?: StringFieldUpdateOperationsInput | string
    rol_usuario?: Enumusuarios_rol_usuarioFieldUpdateOperationsInput | $Enums.usuarios_rol_usuario
    estado_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_usuario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventas_boletos?: ventas_boletosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    password_usuario?: StringFieldUpdateOperationsInput | string
    rol_usuario?: Enumusuarios_rol_usuarioFieldUpdateOperationsInput | $Enums.usuarios_rol_usuario
    estado_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_usuario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventas_boletos?: ventas_boletosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    nombre_usuario: string
    email_usuario: string
    password_usuario: string
    rol_usuario: $Enums.usuarios_rol_usuario
    estado_usuario?: number | null
    fecha_creacion_usuario?: Date | string | null
  }

  export type usuariosUpdateManyMutationInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    password_usuario?: StringFieldUpdateOperationsInput | string
    rol_usuario?: Enumusuarios_rol_usuarioFieldUpdateOperationsInput | $Enums.usuarios_rol_usuario
    estado_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_usuario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    password_usuario?: StringFieldUpdateOperationsInput | string
    rol_usuario?: Enumusuarios_rol_usuarioFieldUpdateOperationsInput | $Enums.usuarios_rol_usuario
    estado_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_usuario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventas_boletosCreateInput = {
    cantidad_boletos: number
    total_venta: Decimal | DecimalJsLike | number | string
    metodo_pago?: string | null
    estado_venta_boleto?: number | null
    fecha_creacion_venta_boleto?: Date | string | null
    eventos: eventosCreateNestedOneWithoutVentas_boletosInput
    usuarios: usuariosCreateNestedOneWithoutVentas_boletosInput
  }

  export type ventas_boletosUncheckedCreateInput = {
    id_venta_boleto?: number
    id_evento: number
    id_usuario: number
    cantidad_boletos: number
    total_venta: Decimal | DecimalJsLike | number | string
    metodo_pago?: string | null
    estado_venta_boleto?: number | null
    fecha_creacion_venta_boleto?: Date | string | null
  }

  export type ventas_boletosUpdateInput = {
    cantidad_boletos?: IntFieldUpdateOperationsInput | number
    total_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: NullableStringFieldUpdateOperationsInput | string | null
    estado_venta_boleto?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_venta_boleto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventos?: eventosUpdateOneRequiredWithoutVentas_boletosNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutVentas_boletosNestedInput
  }

  export type ventas_boletosUncheckedUpdateInput = {
    id_venta_boleto?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    cantidad_boletos?: IntFieldUpdateOperationsInput | number
    total_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: NullableStringFieldUpdateOperationsInput | string | null
    estado_venta_boleto?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_venta_boleto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventas_boletosCreateManyInput = {
    id_venta_boleto?: number
    id_evento: number
    id_usuario: number
    cantidad_boletos: number
    total_venta: Decimal | DecimalJsLike | number | string
    metodo_pago?: string | null
    estado_venta_boleto?: number | null
    fecha_creacion_venta_boleto?: Date | string | null
  }

  export type ventas_boletosUpdateManyMutationInput = {
    cantidad_boletos?: IntFieldUpdateOperationsInput | number
    total_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: NullableStringFieldUpdateOperationsInput | string | null
    estado_venta_boleto?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_venta_boleto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventas_boletosUncheckedUpdateManyInput = {
    id_venta_boleto?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    cantidad_boletos?: IntFieldUpdateOperationsInput | number
    total_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: NullableStringFieldUpdateOperationsInput | string | null
    estado_venta_boleto?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_venta_boleto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type Artistas_eventosListRelationFilter = {
    every?: artistas_eventosWhereInput
    some?: artistas_eventosWhereInput
    none?: artistas_eventosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type artistas_eventosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type artistasOrderByRelevanceInput = {
    fields: artistasOrderByRelevanceFieldEnum | artistasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type artistasCountOrderByAggregateInput = {
    id_artista?: SortOrder
    nombre_artista?: SortOrder
    tipo_arte_artista?: SortOrder
    biografia_artista?: SortOrder
    email_artista?: SortOrder
    contra_artista?: SortOrder
    telefono_artista?: SortOrder
    estado_artista?: SortOrder
    fecha_creacion_artista?: SortOrder
  }

  export type artistasAvgOrderByAggregateInput = {
    id_artista?: SortOrder
    estado_artista?: SortOrder
  }

  export type artistasMaxOrderByAggregateInput = {
    id_artista?: SortOrder
    nombre_artista?: SortOrder
    tipo_arte_artista?: SortOrder
    biografia_artista?: SortOrder
    email_artista?: SortOrder
    contra_artista?: SortOrder
    telefono_artista?: SortOrder
    estado_artista?: SortOrder
    fecha_creacion_artista?: SortOrder
  }

  export type artistasMinOrderByAggregateInput = {
    id_artista?: SortOrder
    nombre_artista?: SortOrder
    tipo_arte_artista?: SortOrder
    biografia_artista?: SortOrder
    email_artista?: SortOrder
    contra_artista?: SortOrder
    telefono_artista?: SortOrder
    estado_artista?: SortOrder
    fecha_creacion_artista?: SortOrder
  }

  export type artistasSumOrderByAggregateInput = {
    id_artista?: SortOrder
    estado_artista?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EventosScalarRelationFilter = {
    is?: eventosWhereInput
    isNot?: eventosWhereInput
  }

  export type ArtistasScalarRelationFilter = {
    is?: artistasWhereInput
    isNot?: artistasWhereInput
  }

  export type artistas_eventosOrderByRelevanceInput = {
    fields: artistas_eventosOrderByRelevanceFieldEnum | artistas_eventosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type artistas_eventosCountOrderByAggregateInput = {
    id_artista_evento?: SortOrder
    id_evento?: SortOrder
    id_artista?: SortOrder
    rol_artista_evento?: SortOrder
    estado_artista_evento?: SortOrder
    fecha_creacion_artista_evento?: SortOrder
  }

  export type artistas_eventosAvgOrderByAggregateInput = {
    id_artista_evento?: SortOrder
    id_evento?: SortOrder
    id_artista?: SortOrder
    estado_artista_evento?: SortOrder
  }

  export type artistas_eventosMaxOrderByAggregateInput = {
    id_artista_evento?: SortOrder
    id_evento?: SortOrder
    id_artista?: SortOrder
    rol_artista_evento?: SortOrder
    estado_artista_evento?: SortOrder
    fecha_creacion_artista_evento?: SortOrder
  }

  export type artistas_eventosMinOrderByAggregateInput = {
    id_artista_evento?: SortOrder
    id_evento?: SortOrder
    id_artista?: SortOrder
    rol_artista_evento?: SortOrder
    estado_artista_evento?: SortOrder
    fecha_creacion_artista_evento?: SortOrder
  }

  export type artistas_eventosSumOrderByAggregateInput = {
    id_artista_evento?: SortOrder
    id_evento?: SortOrder
    id_artista?: SortOrder
    estado_artista_evento?: SortOrder
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type LugaresNullableScalarRelationFilter = {
    is?: lugaresWhereInput | null
    isNot?: lugaresWhereInput | null
  }

  export type Ventas_boletosListRelationFilter = {
    every?: ventas_boletosWhereInput
    some?: ventas_boletosWhereInput
    none?: ventas_boletosWhereInput
  }

  export type ventas_boletosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventosOrderByRelevanceInput = {
    fields: eventosOrderByRelevanceFieldEnum | eventosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type eventosCountOrderByAggregateInput = {
    id_evento?: SortOrder
    nombre_evento?: SortOrder
    fecha_inicio_evento?: SortOrder
    fecha_fin_evento?: SortOrder
    precio_entrada_evento?: SortOrder
    entradas_vendidas_evento?: SortOrder
    id_lugar?: SortOrder
    estado_evento?: SortOrder
    fecha_creacion_evento?: SortOrder
  }

  export type eventosAvgOrderByAggregateInput = {
    id_evento?: SortOrder
    precio_entrada_evento?: SortOrder
    entradas_vendidas_evento?: SortOrder
    id_lugar?: SortOrder
    estado_evento?: SortOrder
  }

  export type eventosMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    nombre_evento?: SortOrder
    fecha_inicio_evento?: SortOrder
    fecha_fin_evento?: SortOrder
    precio_entrada_evento?: SortOrder
    entradas_vendidas_evento?: SortOrder
    id_lugar?: SortOrder
    estado_evento?: SortOrder
    fecha_creacion_evento?: SortOrder
  }

  export type eventosMinOrderByAggregateInput = {
    id_evento?: SortOrder
    nombre_evento?: SortOrder
    fecha_inicio_evento?: SortOrder
    fecha_fin_evento?: SortOrder
    precio_entrada_evento?: SortOrder
    entradas_vendidas_evento?: SortOrder
    id_lugar?: SortOrder
    estado_evento?: SortOrder
    fecha_creacion_evento?: SortOrder
  }

  export type eventosSumOrderByAggregateInput = {
    id_evento?: SortOrder
    precio_entrada_evento?: SortOrder
    entradas_vendidas_evento?: SortOrder
    id_lugar?: SortOrder
    estado_evento?: SortOrder
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EventosListRelationFilter = {
    every?: eventosWhereInput
    some?: eventosWhereInput
    none?: eventosWhereInput
  }

  export type eventosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lugaresOrderByRelevanceInput = {
    fields: lugaresOrderByRelevanceFieldEnum | lugaresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type lugaresCountOrderByAggregateInput = {
    id_lugar?: SortOrder
    nombre_lugar?: SortOrder
    tipo_lugar?: SortOrder
    direccion_lugar?: SortOrder
    contacto_nombre_lugar?: SortOrder
    contacto_telefono_lugar?: SortOrder
    contacto_email_lugar?: SortOrder
    equipamiento_lugar?: SortOrder
    capacidad_maxima_lugar?: SortOrder
    estado_lugar?: SortOrder
    fecha_creacion_lugar?: SortOrder
  }

  export type lugaresAvgOrderByAggregateInput = {
    id_lugar?: SortOrder
    capacidad_maxima_lugar?: SortOrder
    estado_lugar?: SortOrder
  }

  export type lugaresMaxOrderByAggregateInput = {
    id_lugar?: SortOrder
    nombre_lugar?: SortOrder
    tipo_lugar?: SortOrder
    direccion_lugar?: SortOrder
    contacto_nombre_lugar?: SortOrder
    contacto_telefono_lugar?: SortOrder
    contacto_email_lugar?: SortOrder
    equipamiento_lugar?: SortOrder
    capacidad_maxima_lugar?: SortOrder
    estado_lugar?: SortOrder
    fecha_creacion_lugar?: SortOrder
  }

  export type lugaresMinOrderByAggregateInput = {
    id_lugar?: SortOrder
    nombre_lugar?: SortOrder
    tipo_lugar?: SortOrder
    direccion_lugar?: SortOrder
    contacto_nombre_lugar?: SortOrder
    contacto_telefono_lugar?: SortOrder
    contacto_email_lugar?: SortOrder
    equipamiento_lugar?: SortOrder
    capacidad_maxima_lugar?: SortOrder
    estado_lugar?: SortOrder
    fecha_creacion_lugar?: SortOrder
  }

  export type lugaresSumOrderByAggregateInput = {
    id_lugar?: SortOrder
    capacidad_maxima_lugar?: SortOrder
    estado_lugar?: SortOrder
  }

  export type Enumusuarios_rol_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_rol_usuario | Enumusuarios_rol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_rol_usuario[]
    notIn?: $Enums.usuarios_rol_usuario[]
    not?: NestedEnumusuarios_rol_usuarioFilter<$PrismaModel> | $Enums.usuarios_rol_usuario
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    email_usuario?: SortOrder
    password_usuario?: SortOrder
    rol_usuario?: SortOrder
    estado_usuario?: SortOrder
    fecha_creacion_usuario?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    estado_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    email_usuario?: SortOrder
    password_usuario?: SortOrder
    rol_usuario?: SortOrder
    estado_usuario?: SortOrder
    fecha_creacion_usuario?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    email_usuario?: SortOrder
    password_usuario?: SortOrder
    rol_usuario?: SortOrder
    estado_usuario?: SortOrder
    fecha_creacion_usuario?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    estado_usuario?: SortOrder
  }

  export type Enumusuarios_rol_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_rol_usuario | Enumusuarios_rol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_rol_usuario[]
    notIn?: $Enums.usuarios_rol_usuario[]
    not?: NestedEnumusuarios_rol_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.usuarios_rol_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuarios_rol_usuarioFilter<$PrismaModel>
    _max?: NestedEnumusuarios_rol_usuarioFilter<$PrismaModel>
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

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type ventas_boletosOrderByRelevanceInput = {
    fields: ventas_boletosOrderByRelevanceFieldEnum | ventas_boletosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ventas_boletosCountOrderByAggregateInput = {
    id_venta_boleto?: SortOrder
    id_evento?: SortOrder
    id_usuario?: SortOrder
    cantidad_boletos?: SortOrder
    total_venta?: SortOrder
    metodo_pago?: SortOrder
    estado_venta_boleto?: SortOrder
    fecha_creacion_venta_boleto?: SortOrder
  }

  export type ventas_boletosAvgOrderByAggregateInput = {
    id_venta_boleto?: SortOrder
    id_evento?: SortOrder
    id_usuario?: SortOrder
    cantidad_boletos?: SortOrder
    total_venta?: SortOrder
    estado_venta_boleto?: SortOrder
  }

  export type ventas_boletosMaxOrderByAggregateInput = {
    id_venta_boleto?: SortOrder
    id_evento?: SortOrder
    id_usuario?: SortOrder
    cantidad_boletos?: SortOrder
    total_venta?: SortOrder
    metodo_pago?: SortOrder
    estado_venta_boleto?: SortOrder
    fecha_creacion_venta_boleto?: SortOrder
  }

  export type ventas_boletosMinOrderByAggregateInput = {
    id_venta_boleto?: SortOrder
    id_evento?: SortOrder
    id_usuario?: SortOrder
    cantidad_boletos?: SortOrder
    total_venta?: SortOrder
    metodo_pago?: SortOrder
    estado_venta_boleto?: SortOrder
    fecha_creacion_venta_boleto?: SortOrder
  }

  export type ventas_boletosSumOrderByAggregateInput = {
    id_venta_boleto?: SortOrder
    id_evento?: SortOrder
    id_usuario?: SortOrder
    cantidad_boletos?: SortOrder
    total_venta?: SortOrder
    estado_venta_boleto?: SortOrder
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

  export type artistas_eventosCreateNestedManyWithoutArtistasInput = {
    create?: XOR<artistas_eventosCreateWithoutArtistasInput, artistas_eventosUncheckedCreateWithoutArtistasInput> | artistas_eventosCreateWithoutArtistasInput[] | artistas_eventosUncheckedCreateWithoutArtistasInput[]
    connectOrCreate?: artistas_eventosCreateOrConnectWithoutArtistasInput | artistas_eventosCreateOrConnectWithoutArtistasInput[]
    createMany?: artistas_eventosCreateManyArtistasInputEnvelope
    connect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
  }

  export type artistas_eventosUncheckedCreateNestedManyWithoutArtistasInput = {
    create?: XOR<artistas_eventosCreateWithoutArtistasInput, artistas_eventosUncheckedCreateWithoutArtistasInput> | artistas_eventosCreateWithoutArtistasInput[] | artistas_eventosUncheckedCreateWithoutArtistasInput[]
    connectOrCreate?: artistas_eventosCreateOrConnectWithoutArtistasInput | artistas_eventosCreateOrConnectWithoutArtistasInput[]
    createMany?: artistas_eventosCreateManyArtistasInputEnvelope
    connect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type artistas_eventosUpdateManyWithoutArtistasNestedInput = {
    create?: XOR<artistas_eventosCreateWithoutArtistasInput, artistas_eventosUncheckedCreateWithoutArtistasInput> | artistas_eventosCreateWithoutArtistasInput[] | artistas_eventosUncheckedCreateWithoutArtistasInput[]
    connectOrCreate?: artistas_eventosCreateOrConnectWithoutArtistasInput | artistas_eventosCreateOrConnectWithoutArtistasInput[]
    upsert?: artistas_eventosUpsertWithWhereUniqueWithoutArtistasInput | artistas_eventosUpsertWithWhereUniqueWithoutArtistasInput[]
    createMany?: artistas_eventosCreateManyArtistasInputEnvelope
    set?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    disconnect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    delete?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    connect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    update?: artistas_eventosUpdateWithWhereUniqueWithoutArtistasInput | artistas_eventosUpdateWithWhereUniqueWithoutArtistasInput[]
    updateMany?: artistas_eventosUpdateManyWithWhereWithoutArtistasInput | artistas_eventosUpdateManyWithWhereWithoutArtistasInput[]
    deleteMany?: artistas_eventosScalarWhereInput | artistas_eventosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type artistas_eventosUncheckedUpdateManyWithoutArtistasNestedInput = {
    create?: XOR<artistas_eventosCreateWithoutArtistasInput, artistas_eventosUncheckedCreateWithoutArtistasInput> | artistas_eventosCreateWithoutArtistasInput[] | artistas_eventosUncheckedCreateWithoutArtistasInput[]
    connectOrCreate?: artistas_eventosCreateOrConnectWithoutArtistasInput | artistas_eventosCreateOrConnectWithoutArtistasInput[]
    upsert?: artistas_eventosUpsertWithWhereUniqueWithoutArtistasInput | artistas_eventosUpsertWithWhereUniqueWithoutArtistasInput[]
    createMany?: artistas_eventosCreateManyArtistasInputEnvelope
    set?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    disconnect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    delete?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    connect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    update?: artistas_eventosUpdateWithWhereUniqueWithoutArtistasInput | artistas_eventosUpdateWithWhereUniqueWithoutArtistasInput[]
    updateMany?: artistas_eventosUpdateManyWithWhereWithoutArtistasInput | artistas_eventosUpdateManyWithWhereWithoutArtistasInput[]
    deleteMany?: artistas_eventosScalarWhereInput | artistas_eventosScalarWhereInput[]
  }

  export type eventosCreateNestedOneWithoutArtistas_eventosInput = {
    create?: XOR<eventosCreateWithoutArtistas_eventosInput, eventosUncheckedCreateWithoutArtistas_eventosInput>
    connectOrCreate?: eventosCreateOrConnectWithoutArtistas_eventosInput
    connect?: eventosWhereUniqueInput
  }

  export type artistasCreateNestedOneWithoutArtistas_eventosInput = {
    create?: XOR<artistasCreateWithoutArtistas_eventosInput, artistasUncheckedCreateWithoutArtistas_eventosInput>
    connectOrCreate?: artistasCreateOrConnectWithoutArtistas_eventosInput
    connect?: artistasWhereUniqueInput
  }

  export type eventosUpdateOneRequiredWithoutArtistas_eventosNestedInput = {
    create?: XOR<eventosCreateWithoutArtistas_eventosInput, eventosUncheckedCreateWithoutArtistas_eventosInput>
    connectOrCreate?: eventosCreateOrConnectWithoutArtistas_eventosInput
    upsert?: eventosUpsertWithoutArtistas_eventosInput
    connect?: eventosWhereUniqueInput
    update?: XOR<XOR<eventosUpdateToOneWithWhereWithoutArtistas_eventosInput, eventosUpdateWithoutArtistas_eventosInput>, eventosUncheckedUpdateWithoutArtistas_eventosInput>
  }

  export type artistasUpdateOneRequiredWithoutArtistas_eventosNestedInput = {
    create?: XOR<artistasCreateWithoutArtistas_eventosInput, artistasUncheckedCreateWithoutArtistas_eventosInput>
    connectOrCreate?: artistasCreateOrConnectWithoutArtistas_eventosInput
    upsert?: artistasUpsertWithoutArtistas_eventosInput
    connect?: artistasWhereUniqueInput
    update?: XOR<XOR<artistasUpdateToOneWithWhereWithoutArtistas_eventosInput, artistasUpdateWithoutArtistas_eventosInput>, artistasUncheckedUpdateWithoutArtistas_eventosInput>
  }

  export type artistas_eventosCreateNestedManyWithoutEventosInput = {
    create?: XOR<artistas_eventosCreateWithoutEventosInput, artistas_eventosUncheckedCreateWithoutEventosInput> | artistas_eventosCreateWithoutEventosInput[] | artistas_eventosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: artistas_eventosCreateOrConnectWithoutEventosInput | artistas_eventosCreateOrConnectWithoutEventosInput[]
    createMany?: artistas_eventosCreateManyEventosInputEnvelope
    connect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
  }

  export type lugaresCreateNestedOneWithoutEventosInput = {
    create?: XOR<lugaresCreateWithoutEventosInput, lugaresUncheckedCreateWithoutEventosInput>
    connectOrCreate?: lugaresCreateOrConnectWithoutEventosInput
    connect?: lugaresWhereUniqueInput
  }

  export type ventas_boletosCreateNestedManyWithoutEventosInput = {
    create?: XOR<ventas_boletosCreateWithoutEventosInput, ventas_boletosUncheckedCreateWithoutEventosInput> | ventas_boletosCreateWithoutEventosInput[] | ventas_boletosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: ventas_boletosCreateOrConnectWithoutEventosInput | ventas_boletosCreateOrConnectWithoutEventosInput[]
    createMany?: ventas_boletosCreateManyEventosInputEnvelope
    connect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
  }

  export type artistas_eventosUncheckedCreateNestedManyWithoutEventosInput = {
    create?: XOR<artistas_eventosCreateWithoutEventosInput, artistas_eventosUncheckedCreateWithoutEventosInput> | artistas_eventosCreateWithoutEventosInput[] | artistas_eventosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: artistas_eventosCreateOrConnectWithoutEventosInput | artistas_eventosCreateOrConnectWithoutEventosInput[]
    createMany?: artistas_eventosCreateManyEventosInputEnvelope
    connect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
  }

  export type ventas_boletosUncheckedCreateNestedManyWithoutEventosInput = {
    create?: XOR<ventas_boletosCreateWithoutEventosInput, ventas_boletosUncheckedCreateWithoutEventosInput> | ventas_boletosCreateWithoutEventosInput[] | ventas_boletosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: ventas_boletosCreateOrConnectWithoutEventosInput | ventas_boletosCreateOrConnectWithoutEventosInput[]
    createMany?: ventas_boletosCreateManyEventosInputEnvelope
    connect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type artistas_eventosUpdateManyWithoutEventosNestedInput = {
    create?: XOR<artistas_eventosCreateWithoutEventosInput, artistas_eventosUncheckedCreateWithoutEventosInput> | artistas_eventosCreateWithoutEventosInput[] | artistas_eventosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: artistas_eventosCreateOrConnectWithoutEventosInput | artistas_eventosCreateOrConnectWithoutEventosInput[]
    upsert?: artistas_eventosUpsertWithWhereUniqueWithoutEventosInput | artistas_eventosUpsertWithWhereUniqueWithoutEventosInput[]
    createMany?: artistas_eventosCreateManyEventosInputEnvelope
    set?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    disconnect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    delete?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    connect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    update?: artistas_eventosUpdateWithWhereUniqueWithoutEventosInput | artistas_eventosUpdateWithWhereUniqueWithoutEventosInput[]
    updateMany?: artistas_eventosUpdateManyWithWhereWithoutEventosInput | artistas_eventosUpdateManyWithWhereWithoutEventosInput[]
    deleteMany?: artistas_eventosScalarWhereInput | artistas_eventosScalarWhereInput[]
  }

  export type lugaresUpdateOneWithoutEventosNestedInput = {
    create?: XOR<lugaresCreateWithoutEventosInput, lugaresUncheckedCreateWithoutEventosInput>
    connectOrCreate?: lugaresCreateOrConnectWithoutEventosInput
    upsert?: lugaresUpsertWithoutEventosInput
    disconnect?: lugaresWhereInput | boolean
    delete?: lugaresWhereInput | boolean
    connect?: lugaresWhereUniqueInput
    update?: XOR<XOR<lugaresUpdateToOneWithWhereWithoutEventosInput, lugaresUpdateWithoutEventosInput>, lugaresUncheckedUpdateWithoutEventosInput>
  }

  export type ventas_boletosUpdateManyWithoutEventosNestedInput = {
    create?: XOR<ventas_boletosCreateWithoutEventosInput, ventas_boletosUncheckedCreateWithoutEventosInput> | ventas_boletosCreateWithoutEventosInput[] | ventas_boletosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: ventas_boletosCreateOrConnectWithoutEventosInput | ventas_boletosCreateOrConnectWithoutEventosInput[]
    upsert?: ventas_boletosUpsertWithWhereUniqueWithoutEventosInput | ventas_boletosUpsertWithWhereUniqueWithoutEventosInput[]
    createMany?: ventas_boletosCreateManyEventosInputEnvelope
    set?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    disconnect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    delete?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    connect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    update?: ventas_boletosUpdateWithWhereUniqueWithoutEventosInput | ventas_boletosUpdateWithWhereUniqueWithoutEventosInput[]
    updateMany?: ventas_boletosUpdateManyWithWhereWithoutEventosInput | ventas_boletosUpdateManyWithWhereWithoutEventosInput[]
    deleteMany?: ventas_boletosScalarWhereInput | ventas_boletosScalarWhereInput[]
  }

  export type artistas_eventosUncheckedUpdateManyWithoutEventosNestedInput = {
    create?: XOR<artistas_eventosCreateWithoutEventosInput, artistas_eventosUncheckedCreateWithoutEventosInput> | artistas_eventosCreateWithoutEventosInput[] | artistas_eventosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: artistas_eventosCreateOrConnectWithoutEventosInput | artistas_eventosCreateOrConnectWithoutEventosInput[]
    upsert?: artistas_eventosUpsertWithWhereUniqueWithoutEventosInput | artistas_eventosUpsertWithWhereUniqueWithoutEventosInput[]
    createMany?: artistas_eventosCreateManyEventosInputEnvelope
    set?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    disconnect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    delete?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    connect?: artistas_eventosWhereUniqueInput | artistas_eventosWhereUniqueInput[]
    update?: artistas_eventosUpdateWithWhereUniqueWithoutEventosInput | artistas_eventosUpdateWithWhereUniqueWithoutEventosInput[]
    updateMany?: artistas_eventosUpdateManyWithWhereWithoutEventosInput | artistas_eventosUpdateManyWithWhereWithoutEventosInput[]
    deleteMany?: artistas_eventosScalarWhereInput | artistas_eventosScalarWhereInput[]
  }

  export type ventas_boletosUncheckedUpdateManyWithoutEventosNestedInput = {
    create?: XOR<ventas_boletosCreateWithoutEventosInput, ventas_boletosUncheckedCreateWithoutEventosInput> | ventas_boletosCreateWithoutEventosInput[] | ventas_boletosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: ventas_boletosCreateOrConnectWithoutEventosInput | ventas_boletosCreateOrConnectWithoutEventosInput[]
    upsert?: ventas_boletosUpsertWithWhereUniqueWithoutEventosInput | ventas_boletosUpsertWithWhereUniqueWithoutEventosInput[]
    createMany?: ventas_boletosCreateManyEventosInputEnvelope
    set?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    disconnect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    delete?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    connect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    update?: ventas_boletosUpdateWithWhereUniqueWithoutEventosInput | ventas_boletosUpdateWithWhereUniqueWithoutEventosInput[]
    updateMany?: ventas_boletosUpdateManyWithWhereWithoutEventosInput | ventas_boletosUpdateManyWithWhereWithoutEventosInput[]
    deleteMany?: ventas_boletosScalarWhereInput | ventas_boletosScalarWhereInput[]
  }

  export type eventosCreateNestedManyWithoutLugaresInput = {
    create?: XOR<eventosCreateWithoutLugaresInput, eventosUncheckedCreateWithoutLugaresInput> | eventosCreateWithoutLugaresInput[] | eventosUncheckedCreateWithoutLugaresInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutLugaresInput | eventosCreateOrConnectWithoutLugaresInput[]
    createMany?: eventosCreateManyLugaresInputEnvelope
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
  }

  export type eventosUncheckedCreateNestedManyWithoutLugaresInput = {
    create?: XOR<eventosCreateWithoutLugaresInput, eventosUncheckedCreateWithoutLugaresInput> | eventosCreateWithoutLugaresInput[] | eventosUncheckedCreateWithoutLugaresInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutLugaresInput | eventosCreateOrConnectWithoutLugaresInput[]
    createMany?: eventosCreateManyLugaresInputEnvelope
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
  }

  export type eventosUpdateManyWithoutLugaresNestedInput = {
    create?: XOR<eventosCreateWithoutLugaresInput, eventosUncheckedCreateWithoutLugaresInput> | eventosCreateWithoutLugaresInput[] | eventosUncheckedCreateWithoutLugaresInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutLugaresInput | eventosCreateOrConnectWithoutLugaresInput[]
    upsert?: eventosUpsertWithWhereUniqueWithoutLugaresInput | eventosUpsertWithWhereUniqueWithoutLugaresInput[]
    createMany?: eventosCreateManyLugaresInputEnvelope
    set?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    disconnect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    delete?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    update?: eventosUpdateWithWhereUniqueWithoutLugaresInput | eventosUpdateWithWhereUniqueWithoutLugaresInput[]
    updateMany?: eventosUpdateManyWithWhereWithoutLugaresInput | eventosUpdateManyWithWhereWithoutLugaresInput[]
    deleteMany?: eventosScalarWhereInput | eventosScalarWhereInput[]
  }

  export type eventosUncheckedUpdateManyWithoutLugaresNestedInput = {
    create?: XOR<eventosCreateWithoutLugaresInput, eventosUncheckedCreateWithoutLugaresInput> | eventosCreateWithoutLugaresInput[] | eventosUncheckedCreateWithoutLugaresInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutLugaresInput | eventosCreateOrConnectWithoutLugaresInput[]
    upsert?: eventosUpsertWithWhereUniqueWithoutLugaresInput | eventosUpsertWithWhereUniqueWithoutLugaresInput[]
    createMany?: eventosCreateManyLugaresInputEnvelope
    set?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    disconnect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    delete?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    update?: eventosUpdateWithWhereUniqueWithoutLugaresInput | eventosUpdateWithWhereUniqueWithoutLugaresInput[]
    updateMany?: eventosUpdateManyWithWhereWithoutLugaresInput | eventosUpdateManyWithWhereWithoutLugaresInput[]
    deleteMany?: eventosScalarWhereInput | eventosScalarWhereInput[]
  }

  export type ventas_boletosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ventas_boletosCreateWithoutUsuariosInput, ventas_boletosUncheckedCreateWithoutUsuariosInput> | ventas_boletosCreateWithoutUsuariosInput[] | ventas_boletosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ventas_boletosCreateOrConnectWithoutUsuariosInput | ventas_boletosCreateOrConnectWithoutUsuariosInput[]
    createMany?: ventas_boletosCreateManyUsuariosInputEnvelope
    connect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
  }

  export type ventas_boletosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ventas_boletosCreateWithoutUsuariosInput, ventas_boletosUncheckedCreateWithoutUsuariosInput> | ventas_boletosCreateWithoutUsuariosInput[] | ventas_boletosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ventas_boletosCreateOrConnectWithoutUsuariosInput | ventas_boletosCreateOrConnectWithoutUsuariosInput[]
    createMany?: ventas_boletosCreateManyUsuariosInputEnvelope
    connect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
  }

  export type Enumusuarios_rol_usuarioFieldUpdateOperationsInput = {
    set?: $Enums.usuarios_rol_usuario
  }

  export type ventas_boletosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ventas_boletosCreateWithoutUsuariosInput, ventas_boletosUncheckedCreateWithoutUsuariosInput> | ventas_boletosCreateWithoutUsuariosInput[] | ventas_boletosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ventas_boletosCreateOrConnectWithoutUsuariosInput | ventas_boletosCreateOrConnectWithoutUsuariosInput[]
    upsert?: ventas_boletosUpsertWithWhereUniqueWithoutUsuariosInput | ventas_boletosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ventas_boletosCreateManyUsuariosInputEnvelope
    set?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    disconnect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    delete?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    connect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    update?: ventas_boletosUpdateWithWhereUniqueWithoutUsuariosInput | ventas_boletosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ventas_boletosUpdateManyWithWhereWithoutUsuariosInput | ventas_boletosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ventas_boletosScalarWhereInput | ventas_boletosScalarWhereInput[]
  }

  export type ventas_boletosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ventas_boletosCreateWithoutUsuariosInput, ventas_boletosUncheckedCreateWithoutUsuariosInput> | ventas_boletosCreateWithoutUsuariosInput[] | ventas_boletosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ventas_boletosCreateOrConnectWithoutUsuariosInput | ventas_boletosCreateOrConnectWithoutUsuariosInput[]
    upsert?: ventas_boletosUpsertWithWhereUniqueWithoutUsuariosInput | ventas_boletosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ventas_boletosCreateManyUsuariosInputEnvelope
    set?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    disconnect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    delete?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    connect?: ventas_boletosWhereUniqueInput | ventas_boletosWhereUniqueInput[]
    update?: ventas_boletosUpdateWithWhereUniqueWithoutUsuariosInput | ventas_boletosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ventas_boletosUpdateManyWithWhereWithoutUsuariosInput | ventas_boletosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ventas_boletosScalarWhereInput | ventas_boletosScalarWhereInput[]
  }

  export type eventosCreateNestedOneWithoutVentas_boletosInput = {
    create?: XOR<eventosCreateWithoutVentas_boletosInput, eventosUncheckedCreateWithoutVentas_boletosInput>
    connectOrCreate?: eventosCreateOrConnectWithoutVentas_boletosInput
    connect?: eventosWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutVentas_boletosInput = {
    create?: XOR<usuariosCreateWithoutVentas_boletosInput, usuariosUncheckedCreateWithoutVentas_boletosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutVentas_boletosInput
    connect?: usuariosWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type eventosUpdateOneRequiredWithoutVentas_boletosNestedInput = {
    create?: XOR<eventosCreateWithoutVentas_boletosInput, eventosUncheckedCreateWithoutVentas_boletosInput>
    connectOrCreate?: eventosCreateOrConnectWithoutVentas_boletosInput
    upsert?: eventosUpsertWithoutVentas_boletosInput
    connect?: eventosWhereUniqueInput
    update?: XOR<XOR<eventosUpdateToOneWithWhereWithoutVentas_boletosInput, eventosUpdateWithoutVentas_boletosInput>, eventosUncheckedUpdateWithoutVentas_boletosInput>
  }

  export type usuariosUpdateOneRequiredWithoutVentas_boletosNestedInput = {
    create?: XOR<usuariosCreateWithoutVentas_boletosInput, usuariosUncheckedCreateWithoutVentas_boletosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutVentas_boletosInput
    upsert?: usuariosUpsertWithoutVentas_boletosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutVentas_boletosInput, usuariosUpdateWithoutVentas_boletosInput>, usuariosUncheckedUpdateWithoutVentas_boletosInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumusuarios_rol_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_rol_usuario | Enumusuarios_rol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_rol_usuario[]
    notIn?: $Enums.usuarios_rol_usuario[]
    not?: NestedEnumusuarios_rol_usuarioFilter<$PrismaModel> | $Enums.usuarios_rol_usuario
  }

  export type NestedEnumusuarios_rol_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_rol_usuario | Enumusuarios_rol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_rol_usuario[]
    notIn?: $Enums.usuarios_rol_usuario[]
    not?: NestedEnumusuarios_rol_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.usuarios_rol_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuarios_rol_usuarioFilter<$PrismaModel>
    _max?: NestedEnumusuarios_rol_usuarioFilter<$PrismaModel>
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

  export type artistas_eventosCreateWithoutArtistasInput = {
    rol_artista_evento?: string | null
    estado_artista_evento?: number | null
    fecha_creacion_artista_evento?: Date | string | null
    eventos: eventosCreateNestedOneWithoutArtistas_eventosInput
  }

  export type artistas_eventosUncheckedCreateWithoutArtistasInput = {
    id_artista_evento?: number
    id_evento: number
    rol_artista_evento?: string | null
    estado_artista_evento?: number | null
    fecha_creacion_artista_evento?: Date | string | null
  }

  export type artistas_eventosCreateOrConnectWithoutArtistasInput = {
    where: artistas_eventosWhereUniqueInput
    create: XOR<artistas_eventosCreateWithoutArtistasInput, artistas_eventosUncheckedCreateWithoutArtistasInput>
  }

  export type artistas_eventosCreateManyArtistasInputEnvelope = {
    data: artistas_eventosCreateManyArtistasInput | artistas_eventosCreateManyArtistasInput[]
    skipDuplicates?: boolean
  }

  export type artistas_eventosUpsertWithWhereUniqueWithoutArtistasInput = {
    where: artistas_eventosWhereUniqueInput
    update: XOR<artistas_eventosUpdateWithoutArtistasInput, artistas_eventosUncheckedUpdateWithoutArtistasInput>
    create: XOR<artistas_eventosCreateWithoutArtistasInput, artistas_eventosUncheckedCreateWithoutArtistasInput>
  }

  export type artistas_eventosUpdateWithWhereUniqueWithoutArtistasInput = {
    where: artistas_eventosWhereUniqueInput
    data: XOR<artistas_eventosUpdateWithoutArtistasInput, artistas_eventosUncheckedUpdateWithoutArtistasInput>
  }

  export type artistas_eventosUpdateManyWithWhereWithoutArtistasInput = {
    where: artistas_eventosScalarWhereInput
    data: XOR<artistas_eventosUpdateManyMutationInput, artistas_eventosUncheckedUpdateManyWithoutArtistasInput>
  }

  export type artistas_eventosScalarWhereInput = {
    AND?: artistas_eventosScalarWhereInput | artistas_eventosScalarWhereInput[]
    OR?: artistas_eventosScalarWhereInput[]
    NOT?: artistas_eventosScalarWhereInput | artistas_eventosScalarWhereInput[]
    id_artista_evento?: IntFilter<"artistas_eventos"> | number
    id_evento?: IntFilter<"artistas_eventos"> | number
    id_artista?: IntFilter<"artistas_eventos"> | number
    rol_artista_evento?: StringNullableFilter<"artistas_eventos"> | string | null
    estado_artista_evento?: IntNullableFilter<"artistas_eventos"> | number | null
    fecha_creacion_artista_evento?: DateTimeNullableFilter<"artistas_eventos"> | Date | string | null
  }

  export type eventosCreateWithoutArtistas_eventosInput = {
    nombre_evento: string
    fecha_inicio_evento: Date | string
    fecha_fin_evento: Date | string
    precio_entrada_evento?: Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: number | null
    estado_evento?: number | null
    fecha_creacion_evento?: Date | string | null
    lugares?: lugaresCreateNestedOneWithoutEventosInput
    ventas_boletos?: ventas_boletosCreateNestedManyWithoutEventosInput
  }

  export type eventosUncheckedCreateWithoutArtistas_eventosInput = {
    id_evento?: number
    nombre_evento: string
    fecha_inicio_evento: Date | string
    fecha_fin_evento: Date | string
    precio_entrada_evento?: Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: number | null
    id_lugar?: number | null
    estado_evento?: number | null
    fecha_creacion_evento?: Date | string | null
    ventas_boletos?: ventas_boletosUncheckedCreateNestedManyWithoutEventosInput
  }

  export type eventosCreateOrConnectWithoutArtistas_eventosInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutArtistas_eventosInput, eventosUncheckedCreateWithoutArtistas_eventosInput>
  }

  export type artistasCreateWithoutArtistas_eventosInput = {
    nombre_artista: string
    tipo_arte_artista?: string | null
    biografia_artista?: string | null
    email_artista?: string | null
    contra_artista?: string | null
    telefono_artista?: string | null
    estado_artista?: number | null
    fecha_creacion_artista?: Date | string | null
  }

  export type artistasUncheckedCreateWithoutArtistas_eventosInput = {
    id_artista?: number
    nombre_artista: string
    tipo_arte_artista?: string | null
    biografia_artista?: string | null
    email_artista?: string | null
    contra_artista?: string | null
    telefono_artista?: string | null
    estado_artista?: number | null
    fecha_creacion_artista?: Date | string | null
  }

  export type artistasCreateOrConnectWithoutArtistas_eventosInput = {
    where: artistasWhereUniqueInput
    create: XOR<artistasCreateWithoutArtistas_eventosInput, artistasUncheckedCreateWithoutArtistas_eventosInput>
  }

  export type eventosUpsertWithoutArtistas_eventosInput = {
    update: XOR<eventosUpdateWithoutArtistas_eventosInput, eventosUncheckedUpdateWithoutArtistas_eventosInput>
    create: XOR<eventosCreateWithoutArtistas_eventosInput, eventosUncheckedCreateWithoutArtistas_eventosInput>
    where?: eventosWhereInput
  }

  export type eventosUpdateToOneWithWhereWithoutArtistas_eventosInput = {
    where?: eventosWhereInput
    data: XOR<eventosUpdateWithoutArtistas_eventosInput, eventosUncheckedUpdateWithoutArtistas_eventosInput>
  }

  export type eventosUpdateWithoutArtistas_eventosInput = {
    nombre_evento?: StringFieldUpdateOperationsInput | string
    fecha_inicio_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_entrada_evento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: NullableIntFieldUpdateOperationsInput | number | null
    estado_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lugares?: lugaresUpdateOneWithoutEventosNestedInput
    ventas_boletos?: ventas_boletosUpdateManyWithoutEventosNestedInput
  }

  export type eventosUncheckedUpdateWithoutArtistas_eventosInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    nombre_evento?: StringFieldUpdateOperationsInput | string
    fecha_inicio_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_entrada_evento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: NullableIntFieldUpdateOperationsInput | number | null
    id_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    estado_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventas_boletos?: ventas_boletosUncheckedUpdateManyWithoutEventosNestedInput
  }

  export type artistasUpsertWithoutArtistas_eventosInput = {
    update: XOR<artistasUpdateWithoutArtistas_eventosInput, artistasUncheckedUpdateWithoutArtistas_eventosInput>
    create: XOR<artistasCreateWithoutArtistas_eventosInput, artistasUncheckedCreateWithoutArtistas_eventosInput>
    where?: artistasWhereInput
  }

  export type artistasUpdateToOneWithWhereWithoutArtistas_eventosInput = {
    where?: artistasWhereInput
    data: XOR<artistasUpdateWithoutArtistas_eventosInput, artistasUncheckedUpdateWithoutArtistas_eventosInput>
  }

  export type artistasUpdateWithoutArtistas_eventosInput = {
    nombre_artista?: StringFieldUpdateOperationsInput | string
    tipo_arte_artista?: NullableStringFieldUpdateOperationsInput | string | null
    biografia_artista?: NullableStringFieldUpdateOperationsInput | string | null
    email_artista?: NullableStringFieldUpdateOperationsInput | string | null
    contra_artista?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_artista?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artistasUncheckedUpdateWithoutArtistas_eventosInput = {
    id_artista?: IntFieldUpdateOperationsInput | number
    nombre_artista?: StringFieldUpdateOperationsInput | string
    tipo_arte_artista?: NullableStringFieldUpdateOperationsInput | string | null
    biografia_artista?: NullableStringFieldUpdateOperationsInput | string | null
    email_artista?: NullableStringFieldUpdateOperationsInput | string | null
    contra_artista?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_artista?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artistas_eventosCreateWithoutEventosInput = {
    rol_artista_evento?: string | null
    estado_artista_evento?: number | null
    fecha_creacion_artista_evento?: Date | string | null
    artistas: artistasCreateNestedOneWithoutArtistas_eventosInput
  }

  export type artistas_eventosUncheckedCreateWithoutEventosInput = {
    id_artista_evento?: number
    id_artista: number
    rol_artista_evento?: string | null
    estado_artista_evento?: number | null
    fecha_creacion_artista_evento?: Date | string | null
  }

  export type artistas_eventosCreateOrConnectWithoutEventosInput = {
    where: artistas_eventosWhereUniqueInput
    create: XOR<artistas_eventosCreateWithoutEventosInput, artistas_eventosUncheckedCreateWithoutEventosInput>
  }

  export type artistas_eventosCreateManyEventosInputEnvelope = {
    data: artistas_eventosCreateManyEventosInput | artistas_eventosCreateManyEventosInput[]
    skipDuplicates?: boolean
  }

  export type lugaresCreateWithoutEventosInput = {
    nombre_lugar: string
    tipo_lugar?: string | null
    direccion_lugar?: string | null
    contacto_nombre_lugar?: string | null
    contacto_telefono_lugar?: string | null
    contacto_email_lugar?: string | null
    equipamiento_lugar?: string | null
    capacidad_maxima_lugar?: number | null
    estado_lugar?: number | null
    fecha_creacion_lugar?: Date | string | null
  }

  export type lugaresUncheckedCreateWithoutEventosInput = {
    id_lugar?: number
    nombre_lugar: string
    tipo_lugar?: string | null
    direccion_lugar?: string | null
    contacto_nombre_lugar?: string | null
    contacto_telefono_lugar?: string | null
    contacto_email_lugar?: string | null
    equipamiento_lugar?: string | null
    capacidad_maxima_lugar?: number | null
    estado_lugar?: number | null
    fecha_creacion_lugar?: Date | string | null
  }

  export type lugaresCreateOrConnectWithoutEventosInput = {
    where: lugaresWhereUniqueInput
    create: XOR<lugaresCreateWithoutEventosInput, lugaresUncheckedCreateWithoutEventosInput>
  }

  export type ventas_boletosCreateWithoutEventosInput = {
    cantidad_boletos: number
    total_venta: Decimal | DecimalJsLike | number | string
    metodo_pago?: string | null
    estado_venta_boleto?: number | null
    fecha_creacion_venta_boleto?: Date | string | null
    usuarios: usuariosCreateNestedOneWithoutVentas_boletosInput
  }

  export type ventas_boletosUncheckedCreateWithoutEventosInput = {
    id_venta_boleto?: number
    id_usuario: number
    cantidad_boletos: number
    total_venta: Decimal | DecimalJsLike | number | string
    metodo_pago?: string | null
    estado_venta_boleto?: number | null
    fecha_creacion_venta_boleto?: Date | string | null
  }

  export type ventas_boletosCreateOrConnectWithoutEventosInput = {
    where: ventas_boletosWhereUniqueInput
    create: XOR<ventas_boletosCreateWithoutEventosInput, ventas_boletosUncheckedCreateWithoutEventosInput>
  }

  export type ventas_boletosCreateManyEventosInputEnvelope = {
    data: ventas_boletosCreateManyEventosInput | ventas_boletosCreateManyEventosInput[]
    skipDuplicates?: boolean
  }

  export type artistas_eventosUpsertWithWhereUniqueWithoutEventosInput = {
    where: artistas_eventosWhereUniqueInput
    update: XOR<artistas_eventosUpdateWithoutEventosInput, artistas_eventosUncheckedUpdateWithoutEventosInput>
    create: XOR<artistas_eventosCreateWithoutEventosInput, artistas_eventosUncheckedCreateWithoutEventosInput>
  }

  export type artistas_eventosUpdateWithWhereUniqueWithoutEventosInput = {
    where: artistas_eventosWhereUniqueInput
    data: XOR<artistas_eventosUpdateWithoutEventosInput, artistas_eventosUncheckedUpdateWithoutEventosInput>
  }

  export type artistas_eventosUpdateManyWithWhereWithoutEventosInput = {
    where: artistas_eventosScalarWhereInput
    data: XOR<artistas_eventosUpdateManyMutationInput, artistas_eventosUncheckedUpdateManyWithoutEventosInput>
  }

  export type lugaresUpsertWithoutEventosInput = {
    update: XOR<lugaresUpdateWithoutEventosInput, lugaresUncheckedUpdateWithoutEventosInput>
    create: XOR<lugaresCreateWithoutEventosInput, lugaresUncheckedCreateWithoutEventosInput>
    where?: lugaresWhereInput
  }

  export type lugaresUpdateToOneWithWhereWithoutEventosInput = {
    where?: lugaresWhereInput
    data: XOR<lugaresUpdateWithoutEventosInput, lugaresUncheckedUpdateWithoutEventosInput>
  }

  export type lugaresUpdateWithoutEventosInput = {
    nombre_lugar?: StringFieldUpdateOperationsInput | string
    tipo_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_nombre_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_telefono_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_email_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    equipamiento_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad_maxima_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    estado_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_lugar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lugaresUncheckedUpdateWithoutEventosInput = {
    id_lugar?: IntFieldUpdateOperationsInput | number
    nombre_lugar?: StringFieldUpdateOperationsInput | string
    tipo_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    direccion_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_nombre_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_telefono_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    contacto_email_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    equipamiento_lugar?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad_maxima_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    estado_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_lugar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventas_boletosUpsertWithWhereUniqueWithoutEventosInput = {
    where: ventas_boletosWhereUniqueInput
    update: XOR<ventas_boletosUpdateWithoutEventosInput, ventas_boletosUncheckedUpdateWithoutEventosInput>
    create: XOR<ventas_boletosCreateWithoutEventosInput, ventas_boletosUncheckedCreateWithoutEventosInput>
  }

  export type ventas_boletosUpdateWithWhereUniqueWithoutEventosInput = {
    where: ventas_boletosWhereUniqueInput
    data: XOR<ventas_boletosUpdateWithoutEventosInput, ventas_boletosUncheckedUpdateWithoutEventosInput>
  }

  export type ventas_boletosUpdateManyWithWhereWithoutEventosInput = {
    where: ventas_boletosScalarWhereInput
    data: XOR<ventas_boletosUpdateManyMutationInput, ventas_boletosUncheckedUpdateManyWithoutEventosInput>
  }

  export type ventas_boletosScalarWhereInput = {
    AND?: ventas_boletosScalarWhereInput | ventas_boletosScalarWhereInput[]
    OR?: ventas_boletosScalarWhereInput[]
    NOT?: ventas_boletosScalarWhereInput | ventas_boletosScalarWhereInput[]
    id_venta_boleto?: IntFilter<"ventas_boletos"> | number
    id_evento?: IntFilter<"ventas_boletos"> | number
    id_usuario?: IntFilter<"ventas_boletos"> | number
    cantidad_boletos?: IntFilter<"ventas_boletos"> | number
    total_venta?: DecimalFilter<"ventas_boletos"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringNullableFilter<"ventas_boletos"> | string | null
    estado_venta_boleto?: IntNullableFilter<"ventas_boletos"> | number | null
    fecha_creacion_venta_boleto?: DateTimeNullableFilter<"ventas_boletos"> | Date | string | null
  }

  export type eventosCreateWithoutLugaresInput = {
    nombre_evento: string
    fecha_inicio_evento: Date | string
    fecha_fin_evento: Date | string
    precio_entrada_evento?: Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: number | null
    estado_evento?: number | null
    fecha_creacion_evento?: Date | string | null
    artistas_eventos?: artistas_eventosCreateNestedManyWithoutEventosInput
    ventas_boletos?: ventas_boletosCreateNestedManyWithoutEventosInput
  }

  export type eventosUncheckedCreateWithoutLugaresInput = {
    id_evento?: number
    nombre_evento: string
    fecha_inicio_evento: Date | string
    fecha_fin_evento: Date | string
    precio_entrada_evento?: Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: number | null
    estado_evento?: number | null
    fecha_creacion_evento?: Date | string | null
    artistas_eventos?: artistas_eventosUncheckedCreateNestedManyWithoutEventosInput
    ventas_boletos?: ventas_boletosUncheckedCreateNestedManyWithoutEventosInput
  }

  export type eventosCreateOrConnectWithoutLugaresInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutLugaresInput, eventosUncheckedCreateWithoutLugaresInput>
  }

  export type eventosCreateManyLugaresInputEnvelope = {
    data: eventosCreateManyLugaresInput | eventosCreateManyLugaresInput[]
    skipDuplicates?: boolean
  }

  export type eventosUpsertWithWhereUniqueWithoutLugaresInput = {
    where: eventosWhereUniqueInput
    update: XOR<eventosUpdateWithoutLugaresInput, eventosUncheckedUpdateWithoutLugaresInput>
    create: XOR<eventosCreateWithoutLugaresInput, eventosUncheckedCreateWithoutLugaresInput>
  }

  export type eventosUpdateWithWhereUniqueWithoutLugaresInput = {
    where: eventosWhereUniqueInput
    data: XOR<eventosUpdateWithoutLugaresInput, eventosUncheckedUpdateWithoutLugaresInput>
  }

  export type eventosUpdateManyWithWhereWithoutLugaresInput = {
    where: eventosScalarWhereInput
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyWithoutLugaresInput>
  }

  export type eventosScalarWhereInput = {
    AND?: eventosScalarWhereInput | eventosScalarWhereInput[]
    OR?: eventosScalarWhereInput[]
    NOT?: eventosScalarWhereInput | eventosScalarWhereInput[]
    id_evento?: IntFilter<"eventos"> | number
    nombre_evento?: StringFilter<"eventos"> | string
    fecha_inicio_evento?: DateTimeFilter<"eventos"> | Date | string
    fecha_fin_evento?: DateTimeFilter<"eventos"> | Date | string
    precio_entrada_evento?: DecimalNullableFilter<"eventos"> | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: IntNullableFilter<"eventos"> | number | null
    id_lugar?: IntNullableFilter<"eventos"> | number | null
    estado_evento?: IntNullableFilter<"eventos"> | number | null
    fecha_creacion_evento?: DateTimeNullableFilter<"eventos"> | Date | string | null
  }

  export type ventas_boletosCreateWithoutUsuariosInput = {
    cantidad_boletos: number
    total_venta: Decimal | DecimalJsLike | number | string
    metodo_pago?: string | null
    estado_venta_boleto?: number | null
    fecha_creacion_venta_boleto?: Date | string | null
    eventos: eventosCreateNestedOneWithoutVentas_boletosInput
  }

  export type ventas_boletosUncheckedCreateWithoutUsuariosInput = {
    id_venta_boleto?: number
    id_evento: number
    cantidad_boletos: number
    total_venta: Decimal | DecimalJsLike | number | string
    metodo_pago?: string | null
    estado_venta_boleto?: number | null
    fecha_creacion_venta_boleto?: Date | string | null
  }

  export type ventas_boletosCreateOrConnectWithoutUsuariosInput = {
    where: ventas_boletosWhereUniqueInput
    create: XOR<ventas_boletosCreateWithoutUsuariosInput, ventas_boletosUncheckedCreateWithoutUsuariosInput>
  }

  export type ventas_boletosCreateManyUsuariosInputEnvelope = {
    data: ventas_boletosCreateManyUsuariosInput | ventas_boletosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type ventas_boletosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: ventas_boletosWhereUniqueInput
    update: XOR<ventas_boletosUpdateWithoutUsuariosInput, ventas_boletosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ventas_boletosCreateWithoutUsuariosInput, ventas_boletosUncheckedCreateWithoutUsuariosInput>
  }

  export type ventas_boletosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: ventas_boletosWhereUniqueInput
    data: XOR<ventas_boletosUpdateWithoutUsuariosInput, ventas_boletosUncheckedUpdateWithoutUsuariosInput>
  }

  export type ventas_boletosUpdateManyWithWhereWithoutUsuariosInput = {
    where: ventas_boletosScalarWhereInput
    data: XOR<ventas_boletosUpdateManyMutationInput, ventas_boletosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type eventosCreateWithoutVentas_boletosInput = {
    nombre_evento: string
    fecha_inicio_evento: Date | string
    fecha_fin_evento: Date | string
    precio_entrada_evento?: Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: number | null
    estado_evento?: number | null
    fecha_creacion_evento?: Date | string | null
    artistas_eventos?: artistas_eventosCreateNestedManyWithoutEventosInput
    lugares?: lugaresCreateNestedOneWithoutEventosInput
  }

  export type eventosUncheckedCreateWithoutVentas_boletosInput = {
    id_evento?: number
    nombre_evento: string
    fecha_inicio_evento: Date | string
    fecha_fin_evento: Date | string
    precio_entrada_evento?: Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: number | null
    id_lugar?: number | null
    estado_evento?: number | null
    fecha_creacion_evento?: Date | string | null
    artistas_eventos?: artistas_eventosUncheckedCreateNestedManyWithoutEventosInput
  }

  export type eventosCreateOrConnectWithoutVentas_boletosInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutVentas_boletosInput, eventosUncheckedCreateWithoutVentas_boletosInput>
  }

  export type usuariosCreateWithoutVentas_boletosInput = {
    nombre_usuario: string
    email_usuario: string
    password_usuario: string
    rol_usuario: $Enums.usuarios_rol_usuario
    estado_usuario?: number | null
    fecha_creacion_usuario?: Date | string | null
  }

  export type usuariosUncheckedCreateWithoutVentas_boletosInput = {
    id_usuario?: number
    nombre_usuario: string
    email_usuario: string
    password_usuario: string
    rol_usuario: $Enums.usuarios_rol_usuario
    estado_usuario?: number | null
    fecha_creacion_usuario?: Date | string | null
  }

  export type usuariosCreateOrConnectWithoutVentas_boletosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutVentas_boletosInput, usuariosUncheckedCreateWithoutVentas_boletosInput>
  }

  export type eventosUpsertWithoutVentas_boletosInput = {
    update: XOR<eventosUpdateWithoutVentas_boletosInput, eventosUncheckedUpdateWithoutVentas_boletosInput>
    create: XOR<eventosCreateWithoutVentas_boletosInput, eventosUncheckedCreateWithoutVentas_boletosInput>
    where?: eventosWhereInput
  }

  export type eventosUpdateToOneWithWhereWithoutVentas_boletosInput = {
    where?: eventosWhereInput
    data: XOR<eventosUpdateWithoutVentas_boletosInput, eventosUncheckedUpdateWithoutVentas_boletosInput>
  }

  export type eventosUpdateWithoutVentas_boletosInput = {
    nombre_evento?: StringFieldUpdateOperationsInput | string
    fecha_inicio_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_entrada_evento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: NullableIntFieldUpdateOperationsInput | number | null
    estado_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artistas_eventos?: artistas_eventosUpdateManyWithoutEventosNestedInput
    lugares?: lugaresUpdateOneWithoutEventosNestedInput
  }

  export type eventosUncheckedUpdateWithoutVentas_boletosInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    nombre_evento?: StringFieldUpdateOperationsInput | string
    fecha_inicio_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_entrada_evento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: NullableIntFieldUpdateOperationsInput | number | null
    id_lugar?: NullableIntFieldUpdateOperationsInput | number | null
    estado_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artistas_eventos?: artistas_eventosUncheckedUpdateManyWithoutEventosNestedInput
  }

  export type usuariosUpsertWithoutVentas_boletosInput = {
    update: XOR<usuariosUpdateWithoutVentas_boletosInput, usuariosUncheckedUpdateWithoutVentas_boletosInput>
    create: XOR<usuariosCreateWithoutVentas_boletosInput, usuariosUncheckedCreateWithoutVentas_boletosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutVentas_boletosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutVentas_boletosInput, usuariosUncheckedUpdateWithoutVentas_boletosInput>
  }

  export type usuariosUpdateWithoutVentas_boletosInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    password_usuario?: StringFieldUpdateOperationsInput | string
    rol_usuario?: Enumusuarios_rol_usuarioFieldUpdateOperationsInput | $Enums.usuarios_rol_usuario
    estado_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_usuario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateWithoutVentas_boletosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    password_usuario?: StringFieldUpdateOperationsInput | string
    rol_usuario?: Enumusuarios_rol_usuarioFieldUpdateOperationsInput | $Enums.usuarios_rol_usuario
    estado_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_usuario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artistas_eventosCreateManyArtistasInput = {
    id_artista_evento?: number
    id_evento: number
    rol_artista_evento?: string | null
    estado_artista_evento?: number | null
    fecha_creacion_artista_evento?: Date | string | null
  }

  export type artistas_eventosUpdateWithoutArtistasInput = {
    rol_artista_evento?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventos?: eventosUpdateOneRequiredWithoutArtistas_eventosNestedInput
  }

  export type artistas_eventosUncheckedUpdateWithoutArtistasInput = {
    id_artista_evento?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    rol_artista_evento?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artistas_eventosUncheckedUpdateManyWithoutArtistasInput = {
    id_artista_evento?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    rol_artista_evento?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artistas_eventosCreateManyEventosInput = {
    id_artista_evento?: number
    id_artista: number
    rol_artista_evento?: string | null
    estado_artista_evento?: number | null
    fecha_creacion_artista_evento?: Date | string | null
  }

  export type ventas_boletosCreateManyEventosInput = {
    id_venta_boleto?: number
    id_usuario: number
    cantidad_boletos: number
    total_venta: Decimal | DecimalJsLike | number | string
    metodo_pago?: string | null
    estado_venta_boleto?: number | null
    fecha_creacion_venta_boleto?: Date | string | null
  }

  export type artistas_eventosUpdateWithoutEventosInput = {
    rol_artista_evento?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artistas?: artistasUpdateOneRequiredWithoutArtistas_eventosNestedInput
  }

  export type artistas_eventosUncheckedUpdateWithoutEventosInput = {
    id_artista_evento?: IntFieldUpdateOperationsInput | number
    id_artista?: IntFieldUpdateOperationsInput | number
    rol_artista_evento?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artistas_eventosUncheckedUpdateManyWithoutEventosInput = {
    id_artista_evento?: IntFieldUpdateOperationsInput | number
    id_artista?: IntFieldUpdateOperationsInput | number
    rol_artista_evento?: NullableStringFieldUpdateOperationsInput | string | null
    estado_artista_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_artista_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventas_boletosUpdateWithoutEventosInput = {
    cantidad_boletos?: IntFieldUpdateOperationsInput | number
    total_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: NullableStringFieldUpdateOperationsInput | string | null
    estado_venta_boleto?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_venta_boleto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneRequiredWithoutVentas_boletosNestedInput
  }

  export type ventas_boletosUncheckedUpdateWithoutEventosInput = {
    id_venta_boleto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    cantidad_boletos?: IntFieldUpdateOperationsInput | number
    total_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: NullableStringFieldUpdateOperationsInput | string | null
    estado_venta_boleto?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_venta_boleto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventas_boletosUncheckedUpdateManyWithoutEventosInput = {
    id_venta_boleto?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    cantidad_boletos?: IntFieldUpdateOperationsInput | number
    total_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: NullableStringFieldUpdateOperationsInput | string | null
    estado_venta_boleto?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_venta_boleto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventosCreateManyLugaresInput = {
    id_evento?: number
    nombre_evento: string
    fecha_inicio_evento: Date | string
    fecha_fin_evento: Date | string
    precio_entrada_evento?: Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: number | null
    estado_evento?: number | null
    fecha_creacion_evento?: Date | string | null
  }

  export type eventosUpdateWithoutLugaresInput = {
    nombre_evento?: StringFieldUpdateOperationsInput | string
    fecha_inicio_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_entrada_evento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: NullableIntFieldUpdateOperationsInput | number | null
    estado_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artistas_eventos?: artistas_eventosUpdateManyWithoutEventosNestedInput
    ventas_boletos?: ventas_boletosUpdateManyWithoutEventosNestedInput
  }

  export type eventosUncheckedUpdateWithoutLugaresInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    nombre_evento?: StringFieldUpdateOperationsInput | string
    fecha_inicio_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_entrada_evento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: NullableIntFieldUpdateOperationsInput | number | null
    estado_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artistas_eventos?: artistas_eventosUncheckedUpdateManyWithoutEventosNestedInput
    ventas_boletos?: ventas_boletosUncheckedUpdateManyWithoutEventosNestedInput
  }

  export type eventosUncheckedUpdateManyWithoutLugaresInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    nombre_evento?: StringFieldUpdateOperationsInput | string
    fecha_inicio_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin_evento?: DateTimeFieldUpdateOperationsInput | Date | string
    precio_entrada_evento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    entradas_vendidas_evento?: NullableIntFieldUpdateOperationsInput | number | null
    estado_evento?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventas_boletosCreateManyUsuariosInput = {
    id_venta_boleto?: number
    id_evento: number
    cantidad_boletos: number
    total_venta: Decimal | DecimalJsLike | number | string
    metodo_pago?: string | null
    estado_venta_boleto?: number | null
    fecha_creacion_venta_boleto?: Date | string | null
  }

  export type ventas_boletosUpdateWithoutUsuariosInput = {
    cantidad_boletos?: IntFieldUpdateOperationsInput | number
    total_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: NullableStringFieldUpdateOperationsInput | string | null
    estado_venta_boleto?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_venta_boleto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventos?: eventosUpdateOneRequiredWithoutVentas_boletosNestedInput
  }

  export type ventas_boletosUncheckedUpdateWithoutUsuariosInput = {
    id_venta_boleto?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    cantidad_boletos?: IntFieldUpdateOperationsInput | number
    total_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: NullableStringFieldUpdateOperationsInput | string | null
    estado_venta_boleto?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_venta_boleto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventas_boletosUncheckedUpdateManyWithoutUsuariosInput = {
    id_venta_boleto?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    cantidad_boletos?: IntFieldUpdateOperationsInput | number
    total_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: NullableStringFieldUpdateOperationsInput | string | null
    estado_venta_boleto?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion_venta_boleto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
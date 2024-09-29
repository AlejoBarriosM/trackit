
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Movement
 * 
 */
export type Movement = $Result.DefaultSelection<Prisma.$MovementPayload>
/**
 * Model MovementDetail
 * 
 */
export type MovementDetail = $Result.DefaultSelection<Prisma.$MovementDetailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProductStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  ARCHIVED: 'ARCHIVED'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const MovementType: {
  IN: 'IN',
  OUT: 'OUT'
};

export type MovementType = (typeof MovementType)[keyof typeof MovementType]


export const MovementStatus: {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type MovementStatus = (typeof MovementStatus)[keyof typeof MovementStatus]

}

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type MovementType = $Enums.MovementType

export const MovementType: typeof $Enums.MovementType

export type MovementStatus = $Enums.MovementStatus

export const MovementStatus: typeof $Enums.MovementStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.movement`: Exposes CRUD operations for the **Movement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movements
    * const movements = await prisma.movement.findMany()
    * ```
    */
  get movement(): Prisma.MovementDelegate<ExtArgs>;

  /**
   * `prisma.movementDetail`: Exposes CRUD operations for the **MovementDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovementDetails
    * const movementDetails = await prisma.movementDetail.findMany()
    * ```
    */
  get movementDetail(): Prisma.MovementDetailDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Product: 'Product',
    Warehouse: 'Warehouse',
    User: 'User',
    Movement: 'Movement',
    MovementDetail: 'MovementDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "product" | "warehouse" | "user" | "movement" | "movementDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Movement: {
        payload: Prisma.$MovementPayload<ExtArgs>
        fields: Prisma.MovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          findFirst: {
            args: Prisma.MovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          findMany: {
            args: Prisma.MovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          create: {
            args: Prisma.MovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          createMany: {
            args: Prisma.MovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          delete: {
            args: Prisma.MovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          update: {
            args: Prisma.MovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          deleteMany: {
            args: Prisma.MovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          aggregate: {
            args: Prisma.MovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovement>
          }
          groupBy: {
            args: Prisma.MovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovementCountArgs<ExtArgs>
            result: $Utils.Optional<MovementCountAggregateOutputType> | number
          }
        }
      }
      MovementDetail: {
        payload: Prisma.$MovementDetailPayload<ExtArgs>
        fields: Prisma.MovementDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovementDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovementDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementDetailPayload>
          }
          findFirst: {
            args: Prisma.MovementDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovementDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementDetailPayload>
          }
          findMany: {
            args: Prisma.MovementDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementDetailPayload>[]
          }
          create: {
            args: Prisma.MovementDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementDetailPayload>
          }
          createMany: {
            args: Prisma.MovementDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovementDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementDetailPayload>[]
          }
          delete: {
            args: Prisma.MovementDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementDetailPayload>
          }
          update: {
            args: Prisma.MovementDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementDetailPayload>
          }
          deleteMany: {
            args: Prisma.MovementDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovementDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovementDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementDetailPayload>
          }
          aggregate: {
            args: Prisma.MovementDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovementDetail>
          }
          groupBy: {
            args: Prisma.MovementDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovementDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovementDetailCountArgs<ExtArgs>
            result: $Utils.Optional<MovementDetailCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    MovementDetail: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MovementDetail?: boolean | ProductCountOutputTypeCountMovementDetailArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMovementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementDetailWhereInput
  }


  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    InventoryMovement: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InventoryMovement?: boolean | WarehouseCountOutputTypeCountInventoryMovementArgs
  }

  // Custom InputTypes
  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountInventoryMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Movement: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Movement?: boolean | UserCountOutputTypeCountMovementArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
  }


  /**
   * Count Type MovementCountOutputType
   */

  export type MovementCountOutputType = {
    MovementDetail: number
  }

  export type MovementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MovementDetail?: boolean | MovementCountOutputTypeCountMovementDetailArgs
  }

  // Custom InputTypes
  /**
   * MovementCountOutputType without action
   */
  export type MovementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementCountOutputType
     */
    select?: MovementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovementCountOutputType without action
   */
  export type MovementCountOutputTypeCountMovementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    stock: number | null
    price: number | null
    cost: number | null
  }

  export type ProductSumAggregateOutputType = {
    stock: number | null
    price: number | null
    cost: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ref: string | null
    stock: number | null
    price: number | null
    cost: number | null
    status: $Enums.ProductStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ref: string | null
    stock: number | null
    price: number | null
    cost: number | null
    status: $Enums.ProductStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    ref: number
    stock: number
    price: number
    cost: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    stock?: true
    price?: true
    cost?: true
  }

  export type ProductSumAggregateInputType = {
    stock?: true
    price?: true
    cost?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ref?: true
    stock?: true
    price?: true
    cost?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ref?: true
    stock?: true
    price?: true
    cost?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ref?: true
    stock?: true
    price?: true
    cost?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string | null
    ref: string
    stock: number
    price: number
    cost: number
    status: $Enums.ProductStatus
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ref?: boolean
    stock?: boolean
    price?: boolean
    cost?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    MovementDetail?: boolean | Product$MovementDetailArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ref?: boolean
    stock?: boolean
    price?: boolean
    cost?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    ref?: boolean
    stock?: boolean
    price?: boolean
    cost?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MovementDetail?: boolean | Product$MovementDetailArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      MovementDetail: Prisma.$MovementDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      ref: string
      stock: number
      price: number
      cost: number
      status: $Enums.ProductStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MovementDetail<T extends Product$MovementDetailArgs<ExtArgs> = {}>(args?: Subset<T, Product$MovementDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly ref: FieldRef<"Product", 'String'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly cost: FieldRef<"Product", 'Float'>
    readonly status: FieldRef<"Product", 'ProductStatus'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.MovementDetail
   */
  export type Product$MovementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
    where?: MovementDetailWhereInput
    orderBy?: MovementDetailOrderByWithRelationInput | MovementDetailOrderByWithRelationInput[]
    cursor?: MovementDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementDetailScalarFieldEnum | MovementDetailScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
  }

  export type WarehouseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
  }

  export type WarehouseCountAggregateOutputType = {
    id: number
    name: number
    location: number
    _all: number
  }


  export type WarehouseMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type WarehouseMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type WarehouseCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    id: string
    name: string
    location: string
    _count: WarehouseCountAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    InventoryMovement?: boolean | Warehouse$InventoryMovementArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
  }

  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InventoryMovement?: boolean | Warehouse$InventoryMovementArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarehouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      InventoryMovement: Prisma.$MovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }

  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseFindUniqueArgs>(args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Warehouse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseFindFirstArgs>(args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseFindManyArgs>(args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
     */
    create<T extends WarehouseCreateArgs>(args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Warehouses.
     * @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseCreateManyArgs>(args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {WarehouseCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDeleteArgs>(args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseUpdateArgs>(args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseUpdateManyArgs>(args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseUpsertArgs>(args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
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
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    InventoryMovement<T extends Warehouse$InventoryMovementArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$InventoryMovementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Warehouse model
   */ 
  interface WarehouseFieldRefs {
    readonly id: FieldRef<"Warehouse", 'String'>
    readonly name: FieldRef<"Warehouse", 'String'>
    readonly location: FieldRef<"Warehouse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }

  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse createManyAndReturn
   */
  export type WarehouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
  }

  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }

  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
  }

  /**
   * Warehouse.InventoryMovement
   */
  export type Warehouse$InventoryMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    cursor?: MovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    role: $Enums.UserRole
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Movement?: boolean | User$MovementArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Movement?: boolean | User$MovementArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Movement: Prisma.$MovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: $Enums.UserRole
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Movement<T extends User$MovementArgs<ExtArgs> = {}>(args?: Subset<T, User$MovementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Movement
   */
  export type User$MovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    cursor?: MovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Movement
   */

  export type AggregateMovement = {
    _count: MovementCountAggregateOutputType | null
    _avg: MovementAvgAggregateOutputType | null
    _sum: MovementSumAggregateOutputType | null
    _min: MovementMinAggregateOutputType | null
    _max: MovementMaxAggregateOutputType | null
  }

  export type MovementAvgAggregateOutputType = {
    totalCost: number | null
  }

  export type MovementSumAggregateOutputType = {
    totalCost: number | null
  }

  export type MovementMinAggregateOutputType = {
    id: string | null
    warehouseId: string | null
    totalCost: number | null
    userId: string | null
    type: $Enums.MovementType | null
    status: $Enums.MovementStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovementMaxAggregateOutputType = {
    id: string | null
    warehouseId: string | null
    totalCost: number | null
    userId: string | null
    type: $Enums.MovementType | null
    status: $Enums.MovementStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovementCountAggregateOutputType = {
    id: number
    warehouseId: number
    totalCost: number
    userId: number
    type: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MovementAvgAggregateInputType = {
    totalCost?: true
  }

  export type MovementSumAggregateInputType = {
    totalCost?: true
  }

  export type MovementMinAggregateInputType = {
    id?: true
    warehouseId?: true
    totalCost?: true
    userId?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovementMaxAggregateInputType = {
    id?: true
    warehouseId?: true
    totalCost?: true
    userId?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovementCountAggregateInputType = {
    id?: true
    warehouseId?: true
    totalCost?: true
    userId?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movement to aggregate.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movements
    **/
    _count?: true | MovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovementMaxAggregateInputType
  }

  export type GetMovementAggregateType<T extends MovementAggregateArgs> = {
        [P in keyof T & keyof AggregateMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovement[P]>
      : GetScalarType<T[P], AggregateMovement[P]>
  }




  export type MovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithAggregationInput | MovementOrderByWithAggregationInput[]
    by: MovementScalarFieldEnum[] | MovementScalarFieldEnum
    having?: MovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovementCountAggregateInputType | true
    _avg?: MovementAvgAggregateInputType
    _sum?: MovementSumAggregateInputType
    _min?: MovementMinAggregateInputType
    _max?: MovementMaxAggregateInputType
  }

  export type MovementGroupByOutputType = {
    id: string
    warehouseId: string
    totalCost: number
    userId: string
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt: Date
    updatedAt: Date
    _count: MovementCountAggregateOutputType | null
    _avg: MovementAvgAggregateOutputType | null
    _sum: MovementSumAggregateOutputType | null
    _min: MovementMinAggregateOutputType | null
    _max: MovementMaxAggregateOutputType | null
  }

  type GetMovementGroupByPayload<T extends MovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovementGroupByOutputType[P]>
            : GetScalarType<T[P], MovementGroupByOutputType[P]>
        }
      >
    >


  export type MovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warehouseId?: boolean
    totalCost?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    MovementDetail?: boolean | Movement$MovementDetailArgs<ExtArgs>
    _count?: boolean | MovementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warehouseId?: boolean
    totalCost?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectScalar = {
    id?: boolean
    warehouseId?: boolean
    totalCost?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    MovementDetail?: boolean | Movement$MovementDetailArgs<ExtArgs>
    _count?: boolean | MovementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movement"
    objects: {
      warehouse: Prisma.$WarehousePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      MovementDetail: Prisma.$MovementDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      warehouseId: string
      totalCost: number
      userId: string
      type: $Enums.MovementType
      status: $Enums.MovementStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["movement"]>
    composites: {}
  }

  type MovementGetPayload<S extends boolean | null | undefined | MovementDefaultArgs> = $Result.GetResult<Prisma.$MovementPayload, S>

  type MovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovementCountAggregateInputType | true
    }

  export interface MovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movement'], meta: { name: 'Movement' } }
    /**
     * Find zero or one Movement that matches the filter.
     * @param {MovementFindUniqueArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovementFindUniqueArgs>(args: SelectSubset<T, MovementFindUniqueArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Movement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MovementFindUniqueOrThrowArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovementFindUniqueOrThrowArgs>(args: SelectSubset<T, MovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Movement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindFirstArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovementFindFirstArgs>(args?: SelectSubset<T, MovementFindFirstArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Movement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindFirstOrThrowArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovementFindFirstOrThrowArgs>(args?: SelectSubset<T, MovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Movements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movements
     * const movements = await prisma.movement.findMany()
     * 
     * // Get first 10 Movements
     * const movements = await prisma.movement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movementWithIdOnly = await prisma.movement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovementFindManyArgs>(args?: SelectSubset<T, MovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Movement.
     * @param {MovementCreateArgs} args - Arguments to create a Movement.
     * @example
     * // Create one Movement
     * const Movement = await prisma.movement.create({
     *   data: {
     *     // ... data to create a Movement
     *   }
     * })
     * 
     */
    create<T extends MovementCreateArgs>(args: SelectSubset<T, MovementCreateArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Movements.
     * @param {MovementCreateManyArgs} args - Arguments to create many Movements.
     * @example
     * // Create many Movements
     * const movement = await prisma.movement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovementCreateManyArgs>(args?: SelectSubset<T, MovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movements and returns the data saved in the database.
     * @param {MovementCreateManyAndReturnArgs} args - Arguments to create many Movements.
     * @example
     * // Create many Movements
     * const movement = await prisma.movement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movements and only return the `id`
     * const movementWithIdOnly = await prisma.movement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovementCreateManyAndReturnArgs>(args?: SelectSubset<T, MovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Movement.
     * @param {MovementDeleteArgs} args - Arguments to delete one Movement.
     * @example
     * // Delete one Movement
     * const Movement = await prisma.movement.delete({
     *   where: {
     *     // ... filter to delete one Movement
     *   }
     * })
     * 
     */
    delete<T extends MovementDeleteArgs>(args: SelectSubset<T, MovementDeleteArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Movement.
     * @param {MovementUpdateArgs} args - Arguments to update one Movement.
     * @example
     * // Update one Movement
     * const movement = await prisma.movement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovementUpdateArgs>(args: SelectSubset<T, MovementUpdateArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Movements.
     * @param {MovementDeleteManyArgs} args - Arguments to filter Movements to delete.
     * @example
     * // Delete a few Movements
     * const { count } = await prisma.movement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovementDeleteManyArgs>(args?: SelectSubset<T, MovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movements
     * const movement = await prisma.movement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovementUpdateManyArgs>(args: SelectSubset<T, MovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movement.
     * @param {MovementUpsertArgs} args - Arguments to update or create a Movement.
     * @example
     * // Update or create a Movement
     * const movement = await prisma.movement.upsert({
     *   create: {
     *     // ... data to create a Movement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movement we want to update
     *   }
     * })
     */
    upsert<T extends MovementUpsertArgs>(args: SelectSubset<T, MovementUpsertArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementCountArgs} args - Arguments to filter Movements to count.
     * @example
     * // Count the number of Movements
     * const count = await prisma.movement.count({
     *   where: {
     *     // ... the filter for the Movements we want to count
     *   }
     * })
    **/
    count<T extends MovementCountArgs>(
      args?: Subset<T, MovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovementAggregateArgs>(args: Subset<T, MovementAggregateArgs>): Prisma.PrismaPromise<GetMovementAggregateType<T>>

    /**
     * Group by Movement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementGroupByArgs} args - Group by arguments.
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
      T extends MovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovementGroupByArgs['orderBy'] }
        : { orderBy?: MovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movement model
   */
  readonly fields: MovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    MovementDetail<T extends Movement$MovementDetailArgs<ExtArgs> = {}>(args?: Subset<T, Movement$MovementDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Movement model
   */ 
  interface MovementFieldRefs {
    readonly id: FieldRef<"Movement", 'String'>
    readonly warehouseId: FieldRef<"Movement", 'String'>
    readonly totalCost: FieldRef<"Movement", 'Float'>
    readonly userId: FieldRef<"Movement", 'String'>
    readonly type: FieldRef<"Movement", 'MovementType'>
    readonly status: FieldRef<"Movement", 'MovementStatus'>
    readonly createdAt: FieldRef<"Movement", 'DateTime'>
    readonly updatedAt: FieldRef<"Movement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movement findUnique
   */
  export type MovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement findUniqueOrThrow
   */
  export type MovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement findFirst
   */
  export type MovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movements.
     */
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement findFirstOrThrow
   */
  export type MovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movements.
     */
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement findMany
   */
  export type MovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movements to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement create
   */
  export type MovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The data needed to create a Movement.
     */
    data: XOR<MovementCreateInput, MovementUncheckedCreateInput>
  }

  /**
   * Movement createMany
   */
  export type MovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movements.
     */
    data: MovementCreateManyInput | MovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movement createManyAndReturn
   */
  export type MovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Movements.
     */
    data: MovementCreateManyInput | MovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movement update
   */
  export type MovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The data needed to update a Movement.
     */
    data: XOR<MovementUpdateInput, MovementUncheckedUpdateInput>
    /**
     * Choose, which Movement to update.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement updateMany
   */
  export type MovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movements.
     */
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyInput>
    /**
     * Filter which Movements to update
     */
    where?: MovementWhereInput
  }

  /**
   * Movement upsert
   */
  export type MovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The filter to search for the Movement to update in case it exists.
     */
    where: MovementWhereUniqueInput
    /**
     * In case the Movement found by the `where` argument doesn't exist, create a new Movement with this data.
     */
    create: XOR<MovementCreateInput, MovementUncheckedCreateInput>
    /**
     * In case the Movement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovementUpdateInput, MovementUncheckedUpdateInput>
  }

  /**
   * Movement delete
   */
  export type MovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter which Movement to delete.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement deleteMany
   */
  export type MovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movements to delete
     */
    where?: MovementWhereInput
  }

  /**
   * Movement.MovementDetail
   */
  export type Movement$MovementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
    where?: MovementDetailWhereInput
    orderBy?: MovementDetailOrderByWithRelationInput | MovementDetailOrderByWithRelationInput[]
    cursor?: MovementDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementDetailScalarFieldEnum | MovementDetailScalarFieldEnum[]
  }

  /**
   * Movement without action
   */
  export type MovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
  }


  /**
   * Model MovementDetail
   */

  export type AggregateMovementDetail = {
    _count: MovementDetailCountAggregateOutputType | null
    _avg: MovementDetailAvgAggregateOutputType | null
    _sum: MovementDetailSumAggregateOutputType | null
    _min: MovementDetailMinAggregateOutputType | null
    _max: MovementDetailMaxAggregateOutputType | null
  }

  export type MovementDetailAvgAggregateOutputType = {
    quantity: number | null
    cost: number | null
    price: number | null
  }

  export type MovementDetailSumAggregateOutputType = {
    quantity: number | null
    cost: number | null
    price: number | null
  }

  export type MovementDetailMinAggregateOutputType = {
    id: string | null
    movementId: string | null
    productId: string | null
    quantity: number | null
    cost: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovementDetailMaxAggregateOutputType = {
    id: string | null
    movementId: string | null
    productId: string | null
    quantity: number | null
    cost: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovementDetailCountAggregateOutputType = {
    id: number
    movementId: number
    productId: number
    quantity: number
    cost: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MovementDetailAvgAggregateInputType = {
    quantity?: true
    cost?: true
    price?: true
  }

  export type MovementDetailSumAggregateInputType = {
    quantity?: true
    cost?: true
    price?: true
  }

  export type MovementDetailMinAggregateInputType = {
    id?: true
    movementId?: true
    productId?: true
    quantity?: true
    cost?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovementDetailMaxAggregateInputType = {
    id?: true
    movementId?: true
    productId?: true
    quantity?: true
    cost?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovementDetailCountAggregateInputType = {
    id?: true
    movementId?: true
    productId?: true
    quantity?: true
    cost?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MovementDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovementDetail to aggregate.
     */
    where?: MovementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementDetails to fetch.
     */
    orderBy?: MovementDetailOrderByWithRelationInput | MovementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovementDetails
    **/
    _count?: true | MovementDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovementDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovementDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovementDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovementDetailMaxAggregateInputType
  }

  export type GetMovementDetailAggregateType<T extends MovementDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateMovementDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovementDetail[P]>
      : GetScalarType<T[P], AggregateMovementDetail[P]>
  }




  export type MovementDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementDetailWhereInput
    orderBy?: MovementDetailOrderByWithAggregationInput | MovementDetailOrderByWithAggregationInput[]
    by: MovementDetailScalarFieldEnum[] | MovementDetailScalarFieldEnum
    having?: MovementDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovementDetailCountAggregateInputType | true
    _avg?: MovementDetailAvgAggregateInputType
    _sum?: MovementDetailSumAggregateInputType
    _min?: MovementDetailMinAggregateInputType
    _max?: MovementDetailMaxAggregateInputType
  }

  export type MovementDetailGroupByOutputType = {
    id: string
    movementId: string
    productId: string
    quantity: number
    cost: number
    price: number
    createdAt: Date
    updatedAt: Date
    _count: MovementDetailCountAggregateOutputType | null
    _avg: MovementDetailAvgAggregateOutputType | null
    _sum: MovementDetailSumAggregateOutputType | null
    _min: MovementDetailMinAggregateOutputType | null
    _max: MovementDetailMaxAggregateOutputType | null
  }

  type GetMovementDetailGroupByPayload<T extends MovementDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovementDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovementDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovementDetailGroupByOutputType[P]>
            : GetScalarType<T[P], MovementDetailGroupByOutputType[P]>
        }
      >
    >


  export type MovementDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movementId?: boolean
    productId?: boolean
    quantity?: boolean
    cost?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movementDetail"]>

  export type MovementDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movementId?: boolean
    productId?: boolean
    quantity?: boolean
    cost?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movementDetail"]>

  export type MovementDetailSelectScalar = {
    id?: boolean
    movementId?: boolean
    productId?: boolean
    quantity?: boolean
    cost?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MovementDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type MovementDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $MovementDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovementDetail"
    objects: {
      movement: Prisma.$MovementPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      movementId: string
      productId: string
      quantity: number
      cost: number
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["movementDetail"]>
    composites: {}
  }

  type MovementDetailGetPayload<S extends boolean | null | undefined | MovementDetailDefaultArgs> = $Result.GetResult<Prisma.$MovementDetailPayload, S>

  type MovementDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovementDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovementDetailCountAggregateInputType | true
    }

  export interface MovementDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovementDetail'], meta: { name: 'MovementDetail' } }
    /**
     * Find zero or one MovementDetail that matches the filter.
     * @param {MovementDetailFindUniqueArgs} args - Arguments to find a MovementDetail
     * @example
     * // Get one MovementDetail
     * const movementDetail = await prisma.movementDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovementDetailFindUniqueArgs>(args: SelectSubset<T, MovementDetailFindUniqueArgs<ExtArgs>>): Prisma__MovementDetailClient<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MovementDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MovementDetailFindUniqueOrThrowArgs} args - Arguments to find a MovementDetail
     * @example
     * // Get one MovementDetail
     * const movementDetail = await prisma.movementDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovementDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, MovementDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovementDetailClient<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MovementDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDetailFindFirstArgs} args - Arguments to find a MovementDetail
     * @example
     * // Get one MovementDetail
     * const movementDetail = await prisma.movementDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovementDetailFindFirstArgs>(args?: SelectSubset<T, MovementDetailFindFirstArgs<ExtArgs>>): Prisma__MovementDetailClient<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MovementDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDetailFindFirstOrThrowArgs} args - Arguments to find a MovementDetail
     * @example
     * // Get one MovementDetail
     * const movementDetail = await prisma.movementDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovementDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, MovementDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovementDetailClient<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MovementDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovementDetails
     * const movementDetails = await prisma.movementDetail.findMany()
     * 
     * // Get first 10 MovementDetails
     * const movementDetails = await prisma.movementDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movementDetailWithIdOnly = await prisma.movementDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovementDetailFindManyArgs>(args?: SelectSubset<T, MovementDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MovementDetail.
     * @param {MovementDetailCreateArgs} args - Arguments to create a MovementDetail.
     * @example
     * // Create one MovementDetail
     * const MovementDetail = await prisma.movementDetail.create({
     *   data: {
     *     // ... data to create a MovementDetail
     *   }
     * })
     * 
     */
    create<T extends MovementDetailCreateArgs>(args: SelectSubset<T, MovementDetailCreateArgs<ExtArgs>>): Prisma__MovementDetailClient<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MovementDetails.
     * @param {MovementDetailCreateManyArgs} args - Arguments to create many MovementDetails.
     * @example
     * // Create many MovementDetails
     * const movementDetail = await prisma.movementDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovementDetailCreateManyArgs>(args?: SelectSubset<T, MovementDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovementDetails and returns the data saved in the database.
     * @param {MovementDetailCreateManyAndReturnArgs} args - Arguments to create many MovementDetails.
     * @example
     * // Create many MovementDetails
     * const movementDetail = await prisma.movementDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovementDetails and only return the `id`
     * const movementDetailWithIdOnly = await prisma.movementDetail.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovementDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, MovementDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MovementDetail.
     * @param {MovementDetailDeleteArgs} args - Arguments to delete one MovementDetail.
     * @example
     * // Delete one MovementDetail
     * const MovementDetail = await prisma.movementDetail.delete({
     *   where: {
     *     // ... filter to delete one MovementDetail
     *   }
     * })
     * 
     */
    delete<T extends MovementDetailDeleteArgs>(args: SelectSubset<T, MovementDetailDeleteArgs<ExtArgs>>): Prisma__MovementDetailClient<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MovementDetail.
     * @param {MovementDetailUpdateArgs} args - Arguments to update one MovementDetail.
     * @example
     * // Update one MovementDetail
     * const movementDetail = await prisma.movementDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovementDetailUpdateArgs>(args: SelectSubset<T, MovementDetailUpdateArgs<ExtArgs>>): Prisma__MovementDetailClient<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MovementDetails.
     * @param {MovementDetailDeleteManyArgs} args - Arguments to filter MovementDetails to delete.
     * @example
     * // Delete a few MovementDetails
     * const { count } = await prisma.movementDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovementDetailDeleteManyArgs>(args?: SelectSubset<T, MovementDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovementDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovementDetails
     * const movementDetail = await prisma.movementDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovementDetailUpdateManyArgs>(args: SelectSubset<T, MovementDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovementDetail.
     * @param {MovementDetailUpsertArgs} args - Arguments to update or create a MovementDetail.
     * @example
     * // Update or create a MovementDetail
     * const movementDetail = await prisma.movementDetail.upsert({
     *   create: {
     *     // ... data to create a MovementDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovementDetail we want to update
     *   }
     * })
     */
    upsert<T extends MovementDetailUpsertArgs>(args: SelectSubset<T, MovementDetailUpsertArgs<ExtArgs>>): Prisma__MovementDetailClient<$Result.GetResult<Prisma.$MovementDetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MovementDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDetailCountArgs} args - Arguments to filter MovementDetails to count.
     * @example
     * // Count the number of MovementDetails
     * const count = await prisma.movementDetail.count({
     *   where: {
     *     // ... the filter for the MovementDetails we want to count
     *   }
     * })
    **/
    count<T extends MovementDetailCountArgs>(
      args?: Subset<T, MovementDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovementDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovementDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovementDetailAggregateArgs>(args: Subset<T, MovementDetailAggregateArgs>): Prisma.PrismaPromise<GetMovementDetailAggregateType<T>>

    /**
     * Group by MovementDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementDetailGroupByArgs} args - Group by arguments.
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
      T extends MovementDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovementDetailGroupByArgs['orderBy'] }
        : { orderBy?: MovementDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovementDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovementDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovementDetail model
   */
  readonly fields: MovementDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovementDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovementDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movement<T extends MovementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovementDefaultArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MovementDetail model
   */ 
  interface MovementDetailFieldRefs {
    readonly id: FieldRef<"MovementDetail", 'String'>
    readonly movementId: FieldRef<"MovementDetail", 'String'>
    readonly productId: FieldRef<"MovementDetail", 'String'>
    readonly quantity: FieldRef<"MovementDetail", 'Int'>
    readonly cost: FieldRef<"MovementDetail", 'Float'>
    readonly price: FieldRef<"MovementDetail", 'Float'>
    readonly createdAt: FieldRef<"MovementDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"MovementDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MovementDetail findUnique
   */
  export type MovementDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
    /**
     * Filter, which MovementDetail to fetch.
     */
    where: MovementDetailWhereUniqueInput
  }

  /**
   * MovementDetail findUniqueOrThrow
   */
  export type MovementDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
    /**
     * Filter, which MovementDetail to fetch.
     */
    where: MovementDetailWhereUniqueInput
  }

  /**
   * MovementDetail findFirst
   */
  export type MovementDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
    /**
     * Filter, which MovementDetail to fetch.
     */
    where?: MovementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementDetails to fetch.
     */
    orderBy?: MovementDetailOrderByWithRelationInput | MovementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovementDetails.
     */
    cursor?: MovementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovementDetails.
     */
    distinct?: MovementDetailScalarFieldEnum | MovementDetailScalarFieldEnum[]
  }

  /**
   * MovementDetail findFirstOrThrow
   */
  export type MovementDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
    /**
     * Filter, which MovementDetail to fetch.
     */
    where?: MovementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementDetails to fetch.
     */
    orderBy?: MovementDetailOrderByWithRelationInput | MovementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovementDetails.
     */
    cursor?: MovementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovementDetails.
     */
    distinct?: MovementDetailScalarFieldEnum | MovementDetailScalarFieldEnum[]
  }

  /**
   * MovementDetail findMany
   */
  export type MovementDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
    /**
     * Filter, which MovementDetails to fetch.
     */
    where?: MovementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementDetails to fetch.
     */
    orderBy?: MovementDetailOrderByWithRelationInput | MovementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovementDetails.
     */
    cursor?: MovementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementDetails.
     */
    skip?: number
    distinct?: MovementDetailScalarFieldEnum | MovementDetailScalarFieldEnum[]
  }

  /**
   * MovementDetail create
   */
  export type MovementDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a MovementDetail.
     */
    data: XOR<MovementDetailCreateInput, MovementDetailUncheckedCreateInput>
  }

  /**
   * MovementDetail createMany
   */
  export type MovementDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovementDetails.
     */
    data: MovementDetailCreateManyInput | MovementDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovementDetail createManyAndReturn
   */
  export type MovementDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MovementDetails.
     */
    data: MovementDetailCreateManyInput | MovementDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovementDetail update
   */
  export type MovementDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a MovementDetail.
     */
    data: XOR<MovementDetailUpdateInput, MovementDetailUncheckedUpdateInput>
    /**
     * Choose, which MovementDetail to update.
     */
    where: MovementDetailWhereUniqueInput
  }

  /**
   * MovementDetail updateMany
   */
  export type MovementDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovementDetails.
     */
    data: XOR<MovementDetailUpdateManyMutationInput, MovementDetailUncheckedUpdateManyInput>
    /**
     * Filter which MovementDetails to update
     */
    where?: MovementDetailWhereInput
  }

  /**
   * MovementDetail upsert
   */
  export type MovementDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the MovementDetail to update in case it exists.
     */
    where: MovementDetailWhereUniqueInput
    /**
     * In case the MovementDetail found by the `where` argument doesn't exist, create a new MovementDetail with this data.
     */
    create: XOR<MovementDetailCreateInput, MovementDetailUncheckedCreateInput>
    /**
     * In case the MovementDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovementDetailUpdateInput, MovementDetailUncheckedUpdateInput>
  }

  /**
   * MovementDetail delete
   */
  export type MovementDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
    /**
     * Filter which MovementDetail to delete.
     */
    where: MovementDetailWhereUniqueInput
  }

  /**
   * MovementDetail deleteMany
   */
  export type MovementDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovementDetails to delete
     */
    where?: MovementDetailWhereInput
  }

  /**
   * MovementDetail without action
   */
  export type MovementDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementDetail
     */
    select?: MovementDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementDetailInclude<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    ref: 'ref',
    stock: 'stock',
    price: 'price',
    cost: 'cost',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const WarehouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MovementScalarFieldEnum: {
    id: 'id',
    warehouseId: 'warehouseId',
    totalCost: 'totalCost',
    userId: 'userId',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MovementScalarFieldEnum = (typeof MovementScalarFieldEnum)[keyof typeof MovementScalarFieldEnum]


  export const MovementDetailScalarFieldEnum: {
    id: 'id',
    movementId: 'movementId',
    productId: 'productId',
    quantity: 'quantity',
    cost: 'cost',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MovementDetailScalarFieldEnum = (typeof MovementDetailScalarFieldEnum)[keyof typeof MovementDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'ProductStatus[]'
   */
  export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'MovementType'
   */
  export type EnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType'>
    


  /**
   * Reference to a field of type 'MovementType[]'
   */
  export type ListEnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType[]'>
    


  /**
   * Reference to a field of type 'MovementStatus'
   */
  export type EnumMovementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementStatus'>
    


  /**
   * Reference to a field of type 'MovementStatus[]'
   */
  export type ListEnumMovementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    ref?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    cost?: FloatFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    MovementDetail?: MovementDetailListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    ref?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    MovementDetail?: MovementDetailOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ref?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    cost?: FloatFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    MovementDetail?: MovementDetailListRelationFilter
  }, "id" | "ref">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    ref?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    ref?: StringWithAggregatesFilter<"Product"> | string
    stock?: IntWithAggregatesFilter<"Product"> | number
    price?: FloatWithAggregatesFilter<"Product"> | number
    cost?: FloatWithAggregatesFilter<"Product"> | number
    status?: EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    id?: StringFilter<"Warehouse"> | string
    name?: StringFilter<"Warehouse"> | string
    location?: StringFilter<"Warehouse"> | string
    InventoryMovement?: MovementListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    InventoryMovement?: MovementOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    name?: StringFilter<"Warehouse"> | string
    location?: StringFilter<"Warehouse"> | string
    InventoryMovement?: MovementListRelationFilter
  }, "id">

  export type WarehouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Warehouse"> | string
    name?: StringWithAggregatesFilter<"Warehouse"> | string
    location?: StringWithAggregatesFilter<"Warehouse"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Movement?: MovementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Movement?: MovementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Movement?: MovementListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MovementWhereInput = {
    AND?: MovementWhereInput | MovementWhereInput[]
    OR?: MovementWhereInput[]
    NOT?: MovementWhereInput | MovementWhereInput[]
    id?: StringFilter<"Movement"> | string
    warehouseId?: StringFilter<"Movement"> | string
    totalCost?: FloatFilter<"Movement"> | number
    userId?: StringFilter<"Movement"> | string
    type?: EnumMovementTypeFilter<"Movement"> | $Enums.MovementType
    status?: EnumMovementStatusFilter<"Movement"> | $Enums.MovementStatus
    createdAt?: DateTimeFilter<"Movement"> | Date | string
    updatedAt?: DateTimeFilter<"Movement"> | Date | string
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    MovementDetail?: MovementDetailListRelationFilter
  }

  export type MovementOrderByWithRelationInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    totalCost?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    warehouse?: WarehouseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    MovementDetail?: MovementDetailOrderByRelationAggregateInput
  }

  export type MovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovementWhereInput | MovementWhereInput[]
    OR?: MovementWhereInput[]
    NOT?: MovementWhereInput | MovementWhereInput[]
    warehouseId?: StringFilter<"Movement"> | string
    totalCost?: FloatFilter<"Movement"> | number
    userId?: StringFilter<"Movement"> | string
    type?: EnumMovementTypeFilter<"Movement"> | $Enums.MovementType
    status?: EnumMovementStatusFilter<"Movement"> | $Enums.MovementStatus
    createdAt?: DateTimeFilter<"Movement"> | Date | string
    updatedAt?: DateTimeFilter<"Movement"> | Date | string
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    MovementDetail?: MovementDetailListRelationFilter
  }, "id">

  export type MovementOrderByWithAggregationInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    totalCost?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MovementCountOrderByAggregateInput
    _avg?: MovementAvgOrderByAggregateInput
    _max?: MovementMaxOrderByAggregateInput
    _min?: MovementMinOrderByAggregateInput
    _sum?: MovementSumOrderByAggregateInput
  }

  export type MovementScalarWhereWithAggregatesInput = {
    AND?: MovementScalarWhereWithAggregatesInput | MovementScalarWhereWithAggregatesInput[]
    OR?: MovementScalarWhereWithAggregatesInput[]
    NOT?: MovementScalarWhereWithAggregatesInput | MovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movement"> | string
    warehouseId?: StringWithAggregatesFilter<"Movement"> | string
    totalCost?: FloatWithAggregatesFilter<"Movement"> | number
    userId?: StringWithAggregatesFilter<"Movement"> | string
    type?: EnumMovementTypeWithAggregatesFilter<"Movement"> | $Enums.MovementType
    status?: EnumMovementStatusWithAggregatesFilter<"Movement"> | $Enums.MovementStatus
    createdAt?: DateTimeWithAggregatesFilter<"Movement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Movement"> | Date | string
  }

  export type MovementDetailWhereInput = {
    AND?: MovementDetailWhereInput | MovementDetailWhereInput[]
    OR?: MovementDetailWhereInput[]
    NOT?: MovementDetailWhereInput | MovementDetailWhereInput[]
    id?: StringFilter<"MovementDetail"> | string
    movementId?: StringFilter<"MovementDetail"> | string
    productId?: StringFilter<"MovementDetail"> | string
    quantity?: IntFilter<"MovementDetail"> | number
    cost?: FloatFilter<"MovementDetail"> | number
    price?: FloatFilter<"MovementDetail"> | number
    createdAt?: DateTimeFilter<"MovementDetail"> | Date | string
    updatedAt?: DateTimeFilter<"MovementDetail"> | Date | string
    movement?: XOR<MovementRelationFilter, MovementWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type MovementDetailOrderByWithRelationInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movement?: MovementOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type MovementDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovementDetailWhereInput | MovementDetailWhereInput[]
    OR?: MovementDetailWhereInput[]
    NOT?: MovementDetailWhereInput | MovementDetailWhereInput[]
    movementId?: StringFilter<"MovementDetail"> | string
    productId?: StringFilter<"MovementDetail"> | string
    quantity?: IntFilter<"MovementDetail"> | number
    cost?: FloatFilter<"MovementDetail"> | number
    price?: FloatFilter<"MovementDetail"> | number
    createdAt?: DateTimeFilter<"MovementDetail"> | Date | string
    updatedAt?: DateTimeFilter<"MovementDetail"> | Date | string
    movement?: XOR<MovementRelationFilter, MovementWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type MovementDetailOrderByWithAggregationInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MovementDetailCountOrderByAggregateInput
    _avg?: MovementDetailAvgOrderByAggregateInput
    _max?: MovementDetailMaxOrderByAggregateInput
    _min?: MovementDetailMinOrderByAggregateInput
    _sum?: MovementDetailSumOrderByAggregateInput
  }

  export type MovementDetailScalarWhereWithAggregatesInput = {
    AND?: MovementDetailScalarWhereWithAggregatesInput | MovementDetailScalarWhereWithAggregatesInput[]
    OR?: MovementDetailScalarWhereWithAggregatesInput[]
    NOT?: MovementDetailScalarWhereWithAggregatesInput | MovementDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MovementDetail"> | string
    movementId?: StringWithAggregatesFilter<"MovementDetail"> | string
    productId?: StringWithAggregatesFilter<"MovementDetail"> | string
    quantity?: IntWithAggregatesFilter<"MovementDetail"> | number
    cost?: FloatWithAggregatesFilter<"MovementDetail"> | number
    price?: FloatWithAggregatesFilter<"MovementDetail"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MovementDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MovementDetail"> | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description?: string | null
    ref: string
    stock: number
    price: number
    cost: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    MovementDetail?: MovementDetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    ref: string
    stock: number
    price: number
    cost: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    MovementDetail?: MovementDetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ref?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovementDetail?: MovementDetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ref?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovementDetail?: MovementDetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    ref: string
    stock: number
    price: number
    cost: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ref?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ref?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseCreateInput = {
    id?: string
    name: string
    location: string
    InventoryMovement?: MovementCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    InventoryMovement?: MovementUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    InventoryMovement?: MovementUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    InventoryMovement?: MovementUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    id?: string
    name: string
    location: string
  }

  export type WarehouseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Movement?: MovementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Movement?: MovementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Movement?: MovementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Movement?: MovementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementCreateInput = {
    id?: string
    totalCost: number
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutInventoryMovementInput
    user: UserCreateNestedOneWithoutMovementInput
    MovementDetail?: MovementDetailCreateNestedManyWithoutMovementInput
  }

  export type MovementUncheckedCreateInput = {
    id?: string
    warehouseId: string
    totalCost: number
    userId: string
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    MovementDetail?: MovementDetailUncheckedCreateNestedManyWithoutMovementInput
  }

  export type MovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryMovementNestedInput
    user?: UserUpdateOneRequiredWithoutMovementNestedInput
    MovementDetail?: MovementDetailUpdateManyWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovementDetail?: MovementDetailUncheckedUpdateManyWithoutMovementNestedInput
  }

  export type MovementCreateManyInput = {
    id?: string
    warehouseId: string
    totalCost: number
    userId: string
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementDetailCreateInput = {
    id?: string
    quantity: number
    cost: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    movement: MovementCreateNestedOneWithoutMovementDetailInput
    product: ProductCreateNestedOneWithoutMovementDetailInput
  }

  export type MovementDetailUncheckedCreateInput = {
    id?: string
    movementId: string
    productId: string
    quantity: number
    cost: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movement?: MovementUpdateOneRequiredWithoutMovementDetailNestedInput
    product?: ProductUpdateOneRequiredWithoutMovementDetailNestedInput
  }

  export type MovementDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementDetailCreateManyInput = {
    id?: string
    movementId: string
    productId: string
    quantity: number
    cost: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MovementDetailListRelationFilter = {
    every?: MovementDetailWhereInput
    some?: MovementDetailWhereInput
    none?: MovementDetailWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MovementDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ref?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    stock?: SortOrder
    price?: SortOrder
    cost?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ref?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ref?: SortOrder
    stock?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    stock?: SortOrder
    price?: SortOrder
    cost?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MovementListRelationFilter = {
    every?: MovementWhereInput
    some?: MovementWhereInput
    none?: MovementWhereInput
  }

  export type MovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type EnumMovementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementStatus | EnumMovementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementStatusFilter<$PrismaModel> | $Enums.MovementStatus
  }

  export type WarehouseRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MovementCountOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    totalCost?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovementAvgOrderByAggregateInput = {
    totalCost?: SortOrder
  }

  export type MovementMaxOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    totalCost?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovementMinOrderByAggregateInput = {
    id?: SortOrder
    warehouseId?: SortOrder
    totalCost?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovementSumOrderByAggregateInput = {
    totalCost?: SortOrder
  }

  export type EnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type EnumMovementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementStatus | EnumMovementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementStatusWithAggregatesFilter<$PrismaModel> | $Enums.MovementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementStatusFilter<$PrismaModel>
    _max?: NestedEnumMovementStatusFilter<$PrismaModel>
  }

  export type MovementRelationFilter = {
    is?: MovementWhereInput
    isNot?: MovementWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type MovementDetailCountOrderByAggregateInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovementDetailAvgOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
    price?: SortOrder
  }

  export type MovementDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovementDetailMinOrderByAggregateInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    cost?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovementDetailSumOrderByAggregateInput = {
    quantity?: SortOrder
    cost?: SortOrder
    price?: SortOrder
  }

  export type MovementDetailCreateNestedManyWithoutProductInput = {
    create?: XOR<MovementDetailCreateWithoutProductInput, MovementDetailUncheckedCreateWithoutProductInput> | MovementDetailCreateWithoutProductInput[] | MovementDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementDetailCreateOrConnectWithoutProductInput | MovementDetailCreateOrConnectWithoutProductInput[]
    createMany?: MovementDetailCreateManyProductInputEnvelope
    connect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
  }

  export type MovementDetailUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<MovementDetailCreateWithoutProductInput, MovementDetailUncheckedCreateWithoutProductInput> | MovementDetailCreateWithoutProductInput[] | MovementDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementDetailCreateOrConnectWithoutProductInput | MovementDetailCreateOrConnectWithoutProductInput[]
    createMany?: MovementDetailCreateManyProductInputEnvelope
    connect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MovementDetailUpdateManyWithoutProductNestedInput = {
    create?: XOR<MovementDetailCreateWithoutProductInput, MovementDetailUncheckedCreateWithoutProductInput> | MovementDetailCreateWithoutProductInput[] | MovementDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementDetailCreateOrConnectWithoutProductInput | MovementDetailCreateOrConnectWithoutProductInput[]
    upsert?: MovementDetailUpsertWithWhereUniqueWithoutProductInput | MovementDetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MovementDetailCreateManyProductInputEnvelope
    set?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    disconnect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    delete?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    connect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    update?: MovementDetailUpdateWithWhereUniqueWithoutProductInput | MovementDetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MovementDetailUpdateManyWithWhereWithoutProductInput | MovementDetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MovementDetailScalarWhereInput | MovementDetailScalarWhereInput[]
  }

  export type MovementDetailUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<MovementDetailCreateWithoutProductInput, MovementDetailUncheckedCreateWithoutProductInput> | MovementDetailCreateWithoutProductInput[] | MovementDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementDetailCreateOrConnectWithoutProductInput | MovementDetailCreateOrConnectWithoutProductInput[]
    upsert?: MovementDetailUpsertWithWhereUniqueWithoutProductInput | MovementDetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MovementDetailCreateManyProductInputEnvelope
    set?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    disconnect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    delete?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    connect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    update?: MovementDetailUpdateWithWhereUniqueWithoutProductInput | MovementDetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MovementDetailUpdateManyWithWhereWithoutProductInput | MovementDetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MovementDetailScalarWhereInput | MovementDetailScalarWhereInput[]
  }

  export type MovementCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<MovementCreateWithoutWarehouseInput, MovementUncheckedCreateWithoutWarehouseInput> | MovementCreateWithoutWarehouseInput[] | MovementUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWarehouseInput | MovementCreateOrConnectWithoutWarehouseInput[]
    createMany?: MovementCreateManyWarehouseInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type MovementUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<MovementCreateWithoutWarehouseInput, MovementUncheckedCreateWithoutWarehouseInput> | MovementCreateWithoutWarehouseInput[] | MovementUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWarehouseInput | MovementCreateOrConnectWithoutWarehouseInput[]
    createMany?: MovementCreateManyWarehouseInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type MovementUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<MovementCreateWithoutWarehouseInput, MovementUncheckedCreateWithoutWarehouseInput> | MovementCreateWithoutWarehouseInput[] | MovementUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWarehouseInput | MovementCreateOrConnectWithoutWarehouseInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutWarehouseInput | MovementUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: MovementCreateManyWarehouseInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutWarehouseInput | MovementUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutWarehouseInput | MovementUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type MovementUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<MovementCreateWithoutWarehouseInput, MovementUncheckedCreateWithoutWarehouseInput> | MovementCreateWithoutWarehouseInput[] | MovementUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWarehouseInput | MovementCreateOrConnectWithoutWarehouseInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutWarehouseInput | MovementUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: MovementCreateManyWarehouseInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutWarehouseInput | MovementUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutWarehouseInput | MovementUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type MovementCreateNestedManyWithoutUserInput = {
    create?: XOR<MovementCreateWithoutUserInput, MovementUncheckedCreateWithoutUserInput> | MovementCreateWithoutUserInput[] | MovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutUserInput | MovementCreateOrConnectWithoutUserInput[]
    createMany?: MovementCreateManyUserInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type MovementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MovementCreateWithoutUserInput, MovementUncheckedCreateWithoutUserInput> | MovementCreateWithoutUserInput[] | MovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutUserInput | MovementCreateOrConnectWithoutUserInput[]
    createMany?: MovementCreateManyUserInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type MovementUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovementCreateWithoutUserInput, MovementUncheckedCreateWithoutUserInput> | MovementCreateWithoutUserInput[] | MovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutUserInput | MovementCreateOrConnectWithoutUserInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutUserInput | MovementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovementCreateManyUserInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutUserInput | MovementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutUserInput | MovementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type MovementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovementCreateWithoutUserInput, MovementUncheckedCreateWithoutUserInput> | MovementCreateWithoutUserInput[] | MovementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutUserInput | MovementCreateOrConnectWithoutUserInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutUserInput | MovementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovementCreateManyUserInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutUserInput | MovementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutUserInput | MovementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type WarehouseCreateNestedOneWithoutInventoryMovementInput = {
    create?: XOR<WarehouseCreateWithoutInventoryMovementInput, WarehouseUncheckedCreateWithoutInventoryMovementInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutInventoryMovementInput
    connect?: WarehouseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMovementInput = {
    create?: XOR<UserCreateWithoutMovementInput, UserUncheckedCreateWithoutMovementInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovementInput
    connect?: UserWhereUniqueInput
  }

  export type MovementDetailCreateNestedManyWithoutMovementInput = {
    create?: XOR<MovementDetailCreateWithoutMovementInput, MovementDetailUncheckedCreateWithoutMovementInput> | MovementDetailCreateWithoutMovementInput[] | MovementDetailUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementDetailCreateOrConnectWithoutMovementInput | MovementDetailCreateOrConnectWithoutMovementInput[]
    createMany?: MovementDetailCreateManyMovementInputEnvelope
    connect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
  }

  export type MovementDetailUncheckedCreateNestedManyWithoutMovementInput = {
    create?: XOR<MovementDetailCreateWithoutMovementInput, MovementDetailUncheckedCreateWithoutMovementInput> | MovementDetailCreateWithoutMovementInput[] | MovementDetailUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementDetailCreateOrConnectWithoutMovementInput | MovementDetailCreateOrConnectWithoutMovementInput[]
    createMany?: MovementDetailCreateManyMovementInputEnvelope
    connect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
  }

  export type EnumMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovementType
  }

  export type EnumMovementStatusFieldUpdateOperationsInput = {
    set?: $Enums.MovementStatus
  }

  export type WarehouseUpdateOneRequiredWithoutInventoryMovementNestedInput = {
    create?: XOR<WarehouseCreateWithoutInventoryMovementInput, WarehouseUncheckedCreateWithoutInventoryMovementInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutInventoryMovementInput
    upsert?: WarehouseUpsertWithoutInventoryMovementInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutInventoryMovementInput, WarehouseUpdateWithoutInventoryMovementInput>, WarehouseUncheckedUpdateWithoutInventoryMovementInput>
  }

  export type UserUpdateOneRequiredWithoutMovementNestedInput = {
    create?: XOR<UserCreateWithoutMovementInput, UserUncheckedCreateWithoutMovementInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovementInput
    upsert?: UserUpsertWithoutMovementInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMovementInput, UserUpdateWithoutMovementInput>, UserUncheckedUpdateWithoutMovementInput>
  }

  export type MovementDetailUpdateManyWithoutMovementNestedInput = {
    create?: XOR<MovementDetailCreateWithoutMovementInput, MovementDetailUncheckedCreateWithoutMovementInput> | MovementDetailCreateWithoutMovementInput[] | MovementDetailUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementDetailCreateOrConnectWithoutMovementInput | MovementDetailCreateOrConnectWithoutMovementInput[]
    upsert?: MovementDetailUpsertWithWhereUniqueWithoutMovementInput | MovementDetailUpsertWithWhereUniqueWithoutMovementInput[]
    createMany?: MovementDetailCreateManyMovementInputEnvelope
    set?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    disconnect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    delete?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    connect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    update?: MovementDetailUpdateWithWhereUniqueWithoutMovementInput | MovementDetailUpdateWithWhereUniqueWithoutMovementInput[]
    updateMany?: MovementDetailUpdateManyWithWhereWithoutMovementInput | MovementDetailUpdateManyWithWhereWithoutMovementInput[]
    deleteMany?: MovementDetailScalarWhereInput | MovementDetailScalarWhereInput[]
  }

  export type MovementDetailUncheckedUpdateManyWithoutMovementNestedInput = {
    create?: XOR<MovementDetailCreateWithoutMovementInput, MovementDetailUncheckedCreateWithoutMovementInput> | MovementDetailCreateWithoutMovementInput[] | MovementDetailUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementDetailCreateOrConnectWithoutMovementInput | MovementDetailCreateOrConnectWithoutMovementInput[]
    upsert?: MovementDetailUpsertWithWhereUniqueWithoutMovementInput | MovementDetailUpsertWithWhereUniqueWithoutMovementInput[]
    createMany?: MovementDetailCreateManyMovementInputEnvelope
    set?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    disconnect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    delete?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    connect?: MovementDetailWhereUniqueInput | MovementDetailWhereUniqueInput[]
    update?: MovementDetailUpdateWithWhereUniqueWithoutMovementInput | MovementDetailUpdateWithWhereUniqueWithoutMovementInput[]
    updateMany?: MovementDetailUpdateManyWithWhereWithoutMovementInput | MovementDetailUpdateManyWithWhereWithoutMovementInput[]
    deleteMany?: MovementDetailScalarWhereInput | MovementDetailScalarWhereInput[]
  }

  export type MovementCreateNestedOneWithoutMovementDetailInput = {
    create?: XOR<MovementCreateWithoutMovementDetailInput, MovementUncheckedCreateWithoutMovementDetailInput>
    connectOrCreate?: MovementCreateOrConnectWithoutMovementDetailInput
    connect?: MovementWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutMovementDetailInput = {
    create?: XOR<ProductCreateWithoutMovementDetailInput, ProductUncheckedCreateWithoutMovementDetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMovementDetailInput
    connect?: ProductWhereUniqueInput
  }

  export type MovementUpdateOneRequiredWithoutMovementDetailNestedInput = {
    create?: XOR<MovementCreateWithoutMovementDetailInput, MovementUncheckedCreateWithoutMovementDetailInput>
    connectOrCreate?: MovementCreateOrConnectWithoutMovementDetailInput
    upsert?: MovementUpsertWithoutMovementDetailInput
    connect?: MovementWhereUniqueInput
    update?: XOR<XOR<MovementUpdateToOneWithWhereWithoutMovementDetailInput, MovementUpdateWithoutMovementDetailInput>, MovementUncheckedUpdateWithoutMovementDetailInput>
  }

  export type ProductUpdateOneRequiredWithoutMovementDetailNestedInput = {
    create?: XOR<ProductCreateWithoutMovementDetailInput, ProductUncheckedCreateWithoutMovementDetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMovementDetailInput
    upsert?: ProductUpsertWithoutMovementDetailInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutMovementDetailInput, ProductUpdateWithoutMovementDetailInput>, ProductUncheckedUpdateWithoutMovementDetailInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type NestedEnumMovementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementStatus | EnumMovementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementStatusFilter<$PrismaModel> | $Enums.MovementStatus
  }

  export type NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type NestedEnumMovementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementStatus | EnumMovementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementStatusWithAggregatesFilter<$PrismaModel> | $Enums.MovementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementStatusFilter<$PrismaModel>
    _max?: NestedEnumMovementStatusFilter<$PrismaModel>
  }

  export type MovementDetailCreateWithoutProductInput = {
    id?: string
    quantity: number
    cost: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    movement: MovementCreateNestedOneWithoutMovementDetailInput
  }

  export type MovementDetailUncheckedCreateWithoutProductInput = {
    id?: string
    movementId: string
    quantity: number
    cost: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementDetailCreateOrConnectWithoutProductInput = {
    where: MovementDetailWhereUniqueInput
    create: XOR<MovementDetailCreateWithoutProductInput, MovementDetailUncheckedCreateWithoutProductInput>
  }

  export type MovementDetailCreateManyProductInputEnvelope = {
    data: MovementDetailCreateManyProductInput | MovementDetailCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type MovementDetailUpsertWithWhereUniqueWithoutProductInput = {
    where: MovementDetailWhereUniqueInput
    update: XOR<MovementDetailUpdateWithoutProductInput, MovementDetailUncheckedUpdateWithoutProductInput>
    create: XOR<MovementDetailCreateWithoutProductInput, MovementDetailUncheckedCreateWithoutProductInput>
  }

  export type MovementDetailUpdateWithWhereUniqueWithoutProductInput = {
    where: MovementDetailWhereUniqueInput
    data: XOR<MovementDetailUpdateWithoutProductInput, MovementDetailUncheckedUpdateWithoutProductInput>
  }

  export type MovementDetailUpdateManyWithWhereWithoutProductInput = {
    where: MovementDetailScalarWhereInput
    data: XOR<MovementDetailUpdateManyMutationInput, MovementDetailUncheckedUpdateManyWithoutProductInput>
  }

  export type MovementDetailScalarWhereInput = {
    AND?: MovementDetailScalarWhereInput | MovementDetailScalarWhereInput[]
    OR?: MovementDetailScalarWhereInput[]
    NOT?: MovementDetailScalarWhereInput | MovementDetailScalarWhereInput[]
    id?: StringFilter<"MovementDetail"> | string
    movementId?: StringFilter<"MovementDetail"> | string
    productId?: StringFilter<"MovementDetail"> | string
    quantity?: IntFilter<"MovementDetail"> | number
    cost?: FloatFilter<"MovementDetail"> | number
    price?: FloatFilter<"MovementDetail"> | number
    createdAt?: DateTimeFilter<"MovementDetail"> | Date | string
    updatedAt?: DateTimeFilter<"MovementDetail"> | Date | string
  }

  export type MovementCreateWithoutWarehouseInput = {
    id?: string
    totalCost: number
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMovementInput
    MovementDetail?: MovementDetailCreateNestedManyWithoutMovementInput
  }

  export type MovementUncheckedCreateWithoutWarehouseInput = {
    id?: string
    totalCost: number
    userId: string
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    MovementDetail?: MovementDetailUncheckedCreateNestedManyWithoutMovementInput
  }

  export type MovementCreateOrConnectWithoutWarehouseInput = {
    where: MovementWhereUniqueInput
    create: XOR<MovementCreateWithoutWarehouseInput, MovementUncheckedCreateWithoutWarehouseInput>
  }

  export type MovementCreateManyWarehouseInputEnvelope = {
    data: MovementCreateManyWarehouseInput | MovementCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type MovementUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: MovementWhereUniqueInput
    update: XOR<MovementUpdateWithoutWarehouseInput, MovementUncheckedUpdateWithoutWarehouseInput>
    create: XOR<MovementCreateWithoutWarehouseInput, MovementUncheckedCreateWithoutWarehouseInput>
  }

  export type MovementUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: MovementWhereUniqueInput
    data: XOR<MovementUpdateWithoutWarehouseInput, MovementUncheckedUpdateWithoutWarehouseInput>
  }

  export type MovementUpdateManyWithWhereWithoutWarehouseInput = {
    where: MovementScalarWhereInput
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type MovementScalarWhereInput = {
    AND?: MovementScalarWhereInput | MovementScalarWhereInput[]
    OR?: MovementScalarWhereInput[]
    NOT?: MovementScalarWhereInput | MovementScalarWhereInput[]
    id?: StringFilter<"Movement"> | string
    warehouseId?: StringFilter<"Movement"> | string
    totalCost?: FloatFilter<"Movement"> | number
    userId?: StringFilter<"Movement"> | string
    type?: EnumMovementTypeFilter<"Movement"> | $Enums.MovementType
    status?: EnumMovementStatusFilter<"Movement"> | $Enums.MovementStatus
    createdAt?: DateTimeFilter<"Movement"> | Date | string
    updatedAt?: DateTimeFilter<"Movement"> | Date | string
  }

  export type MovementCreateWithoutUserInput = {
    id?: string
    totalCost: number
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutInventoryMovementInput
    MovementDetail?: MovementDetailCreateNestedManyWithoutMovementInput
  }

  export type MovementUncheckedCreateWithoutUserInput = {
    id?: string
    warehouseId: string
    totalCost: number
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    MovementDetail?: MovementDetailUncheckedCreateNestedManyWithoutMovementInput
  }

  export type MovementCreateOrConnectWithoutUserInput = {
    where: MovementWhereUniqueInput
    create: XOR<MovementCreateWithoutUserInput, MovementUncheckedCreateWithoutUserInput>
  }

  export type MovementCreateManyUserInputEnvelope = {
    data: MovementCreateManyUserInput | MovementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MovementUpsertWithWhereUniqueWithoutUserInput = {
    where: MovementWhereUniqueInput
    update: XOR<MovementUpdateWithoutUserInput, MovementUncheckedUpdateWithoutUserInput>
    create: XOR<MovementCreateWithoutUserInput, MovementUncheckedCreateWithoutUserInput>
  }

  export type MovementUpdateWithWhereUniqueWithoutUserInput = {
    where: MovementWhereUniqueInput
    data: XOR<MovementUpdateWithoutUserInput, MovementUncheckedUpdateWithoutUserInput>
  }

  export type MovementUpdateManyWithWhereWithoutUserInput = {
    where: MovementScalarWhereInput
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyWithoutUserInput>
  }

  export type WarehouseCreateWithoutInventoryMovementInput = {
    id?: string
    name: string
    location: string
  }

  export type WarehouseUncheckedCreateWithoutInventoryMovementInput = {
    id?: string
    name: string
    location: string
  }

  export type WarehouseCreateOrConnectWithoutInventoryMovementInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutInventoryMovementInput, WarehouseUncheckedCreateWithoutInventoryMovementInput>
  }

  export type UserCreateWithoutMovementInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutMovementInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutMovementInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMovementInput, UserUncheckedCreateWithoutMovementInput>
  }

  export type MovementDetailCreateWithoutMovementInput = {
    id?: string
    quantity: number
    cost: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutMovementDetailInput
  }

  export type MovementDetailUncheckedCreateWithoutMovementInput = {
    id?: string
    productId: string
    quantity: number
    cost: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementDetailCreateOrConnectWithoutMovementInput = {
    where: MovementDetailWhereUniqueInput
    create: XOR<MovementDetailCreateWithoutMovementInput, MovementDetailUncheckedCreateWithoutMovementInput>
  }

  export type MovementDetailCreateManyMovementInputEnvelope = {
    data: MovementDetailCreateManyMovementInput | MovementDetailCreateManyMovementInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseUpsertWithoutInventoryMovementInput = {
    update: XOR<WarehouseUpdateWithoutInventoryMovementInput, WarehouseUncheckedUpdateWithoutInventoryMovementInput>
    create: XOR<WarehouseCreateWithoutInventoryMovementInput, WarehouseUncheckedCreateWithoutInventoryMovementInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutInventoryMovementInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutInventoryMovementInput, WarehouseUncheckedUpdateWithoutInventoryMovementInput>
  }

  export type WarehouseUpdateWithoutInventoryMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUncheckedUpdateWithoutInventoryMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutMovementInput = {
    update: XOR<UserUpdateWithoutMovementInput, UserUncheckedUpdateWithoutMovementInput>
    create: XOR<UserCreateWithoutMovementInput, UserUncheckedCreateWithoutMovementInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMovementInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMovementInput, UserUncheckedUpdateWithoutMovementInput>
  }

  export type UserUpdateWithoutMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementDetailUpsertWithWhereUniqueWithoutMovementInput = {
    where: MovementDetailWhereUniqueInput
    update: XOR<MovementDetailUpdateWithoutMovementInput, MovementDetailUncheckedUpdateWithoutMovementInput>
    create: XOR<MovementDetailCreateWithoutMovementInput, MovementDetailUncheckedCreateWithoutMovementInput>
  }

  export type MovementDetailUpdateWithWhereUniqueWithoutMovementInput = {
    where: MovementDetailWhereUniqueInput
    data: XOR<MovementDetailUpdateWithoutMovementInput, MovementDetailUncheckedUpdateWithoutMovementInput>
  }

  export type MovementDetailUpdateManyWithWhereWithoutMovementInput = {
    where: MovementDetailScalarWhereInput
    data: XOR<MovementDetailUpdateManyMutationInput, MovementDetailUncheckedUpdateManyWithoutMovementInput>
  }

  export type MovementCreateWithoutMovementDetailInput = {
    id?: string
    totalCost: number
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutInventoryMovementInput
    user: UserCreateNestedOneWithoutMovementInput
  }

  export type MovementUncheckedCreateWithoutMovementDetailInput = {
    id?: string
    warehouseId: string
    totalCost: number
    userId: string
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementCreateOrConnectWithoutMovementDetailInput = {
    where: MovementWhereUniqueInput
    create: XOR<MovementCreateWithoutMovementDetailInput, MovementUncheckedCreateWithoutMovementDetailInput>
  }

  export type ProductCreateWithoutMovementDetailInput = {
    id?: string
    name: string
    description?: string | null
    ref: string
    stock: number
    price: number
    cost: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutMovementDetailInput = {
    id?: string
    name: string
    description?: string | null
    ref: string
    stock: number
    price: number
    cost: number
    status?: $Enums.ProductStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutMovementDetailInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMovementDetailInput, ProductUncheckedCreateWithoutMovementDetailInput>
  }

  export type MovementUpsertWithoutMovementDetailInput = {
    update: XOR<MovementUpdateWithoutMovementDetailInput, MovementUncheckedUpdateWithoutMovementDetailInput>
    create: XOR<MovementCreateWithoutMovementDetailInput, MovementUncheckedCreateWithoutMovementDetailInput>
    where?: MovementWhereInput
  }

  export type MovementUpdateToOneWithWhereWithoutMovementDetailInput = {
    where?: MovementWhereInput
    data: XOR<MovementUpdateWithoutMovementDetailInput, MovementUncheckedUpdateWithoutMovementDetailInput>
  }

  export type MovementUpdateWithoutMovementDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryMovementNestedInput
    user?: UserUpdateOneRequiredWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateWithoutMovementDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutMovementDetailInput = {
    update: XOR<ProductUpdateWithoutMovementDetailInput, ProductUncheckedUpdateWithoutMovementDetailInput>
    create: XOR<ProductCreateWithoutMovementDetailInput, ProductUncheckedCreateWithoutMovementDetailInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutMovementDetailInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutMovementDetailInput, ProductUncheckedUpdateWithoutMovementDetailInput>
  }

  export type ProductUpdateWithoutMovementDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ref?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutMovementDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ref?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementDetailCreateManyProductInput = {
    id?: string
    movementId: string
    quantity: number
    cost: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementDetailUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movement?: MovementUpdateOneRequiredWithoutMovementDetailNestedInput
  }

  export type MovementDetailUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementDetailUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementCreateManyWarehouseInput = {
    id?: string
    totalCost: number
    userId: string
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMovementNestedInput
    MovementDetail?: MovementDetailUpdateManyWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovementDetail?: MovementDetailUncheckedUpdateManyWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateManyWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementCreateManyUserInput = {
    id?: string
    warehouseId: string
    totalCost: number
    type: $Enums.MovementType
    status: $Enums.MovementStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutInventoryMovementNestedInput
    MovementDetail?: MovementDetailUpdateManyWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovementDetail?: MovementDetailUncheckedUpdateManyWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementDetailCreateManyMovementInput = {
    id?: string
    productId: string
    quantity: number
    cost: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovementDetailUpdateWithoutMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutMovementDetailNestedInput
  }

  export type MovementDetailUncheckedUpdateWithoutMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementDetailUncheckedUpdateManyWithoutMovementInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarehouseCountOutputTypeDefaultArgs instead
     */
    export type WarehouseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarehouseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovementCountOutputTypeDefaultArgs instead
     */
    export type MovementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarehouseDefaultArgs instead
     */
    export type WarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarehouseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovementDefaultArgs instead
     */
    export type MovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovementDetailDefaultArgs instead
     */
    export type MovementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovementDetailDefaultArgs<ExtArgs>

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